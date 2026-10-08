import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { parseTeamApplication, TEAM_SOURCE } from '@/lib/validate'

/* ==================================================================
   POST /api/team-applications — the form at the bottom of /team.

   The same five steps the leads route runs, in the same order:

     1  rate limit        one IP cannot fill the table on its own
     2  honeypot          a field only a script fills
     3  time on form      a submission faster than a person can read
     4  validate          shape, length and character rules
     5  write             through Prisma, as bound parameters
================================================================== */

/* a form filled faster than a person can read it is not a person */
const MIN_FILL_MS = 2500

/* ------------------------------------------------------------------
   In-memory rate limiter — tighter than the leads limiter.
   Nobody applies for a job six times in a quarter of an hour.
------------------------------------------------------------------ */
const WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MIN || 15) * 60 * 1000
const MAX_REQUESTS = Number(process.env.TEAM_RATE_LIMIT || 6)

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
     200, not 400. A bot that is told it failed learns what to change. */
  if (b && typeof b.honeypot === 'string' && b.honeypot.trim()) {
    return NextResponse.json({ ok: true })
  }

  /* -- 3: time on form ----------------------------------------------- */
  if (typeof b?.startedAt === 'number' && b.startedAt > 0) {
    const elapsed = Date.now() - b.startedAt
    if (elapsed < MIN_FILL_MS) {
      return NextResponse.json({ ok: false, error: 'too-fast' }, { status: 400 })
    }
  }

  /* -- 4: validate ---------------------------------------------------- */
  const parsed = parseTeamApplication(body)
  if (!parsed.ok) {
    const fail = parsed as { ok: false; error: string; fields: Record<string, string> }
    return NextResponse.json(
      { ok: false, error: fail.error, fields: fail.fields },
      { status: 400 }
    )
  }

  const { application } = parsed as { ok: true; application: any }

  /* -- 5: write ------------------------------------------------------- */
  try {
    const saved = await prisma.teamApplication.create({
      data: {
        source: TEAM_SOURCE,
        name: application.name,
        phone: application.phone,
        email: application.email ?? null,
        role: application.role,
        experience: application.experience ?? null,
        portfolio: application.portfolio ?? null,
        message: application.message ?? null,
        page: application.page ?? null,
        ip: clientIp(req),
        userAgent: String(req.headers.get('user-agent') || '').slice(0, 400) || null
      },
      select: { id: true, createdAt: true }
    })

    return NextResponse.json({ ok: true, id: saved.id }, { status: 201 })
  } catch (error) {
    console.error('[team] write failed:', error)
    return NextResponse.json({ ok: false, error: 'server' }, { status: 500 })
  }
}
