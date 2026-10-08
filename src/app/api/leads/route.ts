import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { parseLead } from '@/lib/validate'
import { forwardEnquiryToCms } from '@/lib/cmsEnquiry'

/* ==================================================================
   POST /api/leads — the only way anything gets written.

   Every form on the site ends here. The order matters:

     1  rate limit        one IP cannot fill the table on its own
     2  honeypot          a field only a script fills
     3  time on form      a submission faster than a person can read
     4  validate          shape, length and character rules
     5  write             through Prisma, as bound parameters
     6  forward           a copy to the CMS enquiries inbox

   Step 6 is the only one that may fail without failing the request.
   `leads` is authoritative; the CMS copy is what puts the enquiry in
   front of the counselling team, who work in the CMS and could not
   see this table at all. See src/lib/cmsEnquiry.ts.
================================================================== */

/* a form filled faster than a person can read it is not a person */
const MIN_FILL_MS = 2500

/* ------------------------------------------------------------------
   Simple in-memory rate limiter.

   Next.js Route Handlers do not have express-rate-limit, so this uses
   a Map keyed by IP with a sliding window. The counter lives in
   memory, so a restart clears it — same as the Express version.
------------------------------------------------------------------ */
const WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MIN || 15) * 60 * 1000
const MAX_REQUESTS = Number(process.env.LEADS_RATE_LIMIT || 12)

const hits = new Map<string, { count: number; resetAt: number }>()

function rateLimit(ip: string): { limited: boolean; remaining: number; resetAt: number } {
  const now = Date.now()
  const entry = hits.get(ip)

  if (!entry || now > entry.resetAt) {
    const resetAt = now + WINDOW_MS
    hits.set(ip, { count: 1, resetAt })
    return { limited: false, remaining: MAX_REQUESTS - 1, resetAt }
  }

  entry.count += 1
  if (entry.count > MAX_REQUESTS) {
    return { limited: true, remaining: 0, resetAt: entry.resetAt }
  }

  return { limited: false, remaining: MAX_REQUESTS - entry.count, resetAt: entry.resetAt }
}

/* Only what the team needs to trace a spam run. */
function clientIp(req: NextRequest): string | null {
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || null
  return ip ? ip.slice(0, 45) : null
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req) || 'unknown'

  /* -- 1: rate limit ------------------------------------------------ */
  const rl = rateLimit(ip)
  if (rl.limited) {
    return NextResponse.json(
      { ok: false, error: 'rate-limit' },
      {
        status: 429,
        headers: {
          'RateLimit-Limit': String(MAX_REQUESTS),
          'RateLimit-Remaining': '0',
          'RateLimit-Reset': String(Math.ceil(rl.resetAt / 1000))
        }
      }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 })
  }

  const b = body as Record<string, unknown> | null

  /* -- 2: the honeypot ----------------------------------------------
     Answer 200 rather than 400. A bot that is told it failed learns
     what to change; a bot that is told it succeeded moves on. */
  if (b && typeof b.honeypot === 'string' && b.honeypot.trim()) {
    return NextResponse.json({ ok: true })
  }

  /* -- 3: time on form ---------------------------------------------- */
  if (typeof b?.startedAt === 'number' && b.startedAt > 0) {
    const elapsed = Date.now() - b.startedAt
    if (elapsed < MIN_FILL_MS) {
      return NextResponse.json({ ok: false, error: 'too-fast' }, { status: 400 })
    }
  }

  /* -- 4: validate --------------------------------------------------- */
  const parsed = parseLead(body)
  if (!parsed.ok) {
    const fail = parsed as { ok: false; error: string; fields: Record<string, string> }
    return NextResponse.json(
      { ok: false, error: fail.error, fields: fail.fields },
      { status: 400 }
    )
  }

  const { lead } = parsed as { ok: true; lead: any }

  /* -- 5: write ------------------------------------------------------
     Prisma's model API. Every value below travels as a bound
     parameter; none of it is ever part of the statement text. */
  const meta = {
    ip: clientIp(req),
    userAgent: req.headers.get('user-agent')
  }

  let saved: { id: number } | null = null

  try {
    saved = await prisma.lead.create({
      data: {
        source: lead.source,
        name: lead.name ?? null,
        phone: lead.phone,
        email: lead.email ?? null,
        course: lead.course ?? null,
        courseSlug: lead.courseSlug ?? null,
        message: lead.message ?? null,
        details: lead.details ?? undefined,
        page: lead.page ?? null,
        ip: meta.ip,
        userAgent: String(req.headers.get('user-agent') || '').slice(0, 400) || null
      },
      select: { id: true, createdAt: true }
    })
  } catch (error) {
    /*
      Logged, not returned — yet.

      This used to be the end of the request: a 500, and the CMS
      forward below never ran because it sat inside this try. So the
      one failure the two-store arrangement exists to survive — a
      database being unreachable — lost the lead in BOTH places, and
      the visitor was told to try again with no record kept anywhere.
    */
    console.error('[leads] database write failed:', error)
  }

  /*
    The copy to the CMS, which now happens either way.

    When the row was written, this is fire-and-forget: the visitor is
    waiting on the response, the CMS is a second system on a second
    host, and nothing it can do should delay a submission that has
    already succeeded.

    When the row was NOT written, it is the only remaining chance to
    keep the enquiry, so it is awaited and its answer decides the
    response. That costs a wait only in the case that is already
    broken.
  */
  if (saved) {
    void forwardEnquiryToCms(lead, meta)
    return NextResponse.json({ ok: true, id: saved.id }, { status: 201 })
  }

  const forwarded = await forwardEnquiryToCms(lead, meta)

  if (forwarded) {
    /*
      Recorded, just not here. The enquiry is in the CMS, which is
      where the counselling team works, so telling the visitor it
      failed would be untrue and would invite a duplicate submission.

      No `id`: the caller's own row does not exist, and inventing one
      would be worse than omitting it.
    */
    console.warn('[leads] kept in the CMS only — the leads table did not accept this one.')
    return NextResponse.json({ ok: true }, { status: 201 })
  }

  // Neither store took it. This is the only case the visitor should be
  // asked to try again, or to ring instead.
  return NextResponse.json({ ok: false, error: 'server' }, { status: 500 })
}
