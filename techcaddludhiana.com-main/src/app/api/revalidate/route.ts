import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { CMS_TAG } from '@/lib/cms.server'

/* ==================================================================
   POST /api/revalidate — the CMS telling the site content changed.

   The other end is cms-techcadd/backend/src/http/revalidate.ts, which
   fires this after any successful write, debounced, from a listener
   on the response rather than in the request path — so an editor's
   save never waits on this site and never fails because of it.

   Until this route existed the CMS called it on every save and got a
   404 back. It logged a warning, the save still worked, and content
   arrived on the site whenever the cache happened to expire. That is
   the "I published it and the site still shows the old one" report.

   WHAT IT DOES

   Drops the tag every CMS read is stored under (see
   src/lib/cms.server.ts), so the next request for any page rebuilds
   it from the CMS. One tag rather than a list of paths, because the
   CMS does not send which page an edit affects and guessing would be
   wrong in both directions — a missed page stays stale, and a
   made-up path is a no-op that reads like success.

   The body may name specific collections, which is cheaper and is
   what a future, chattier CMS could send:

     { "tags": ["blogs", "courses"] }

   Anything unrecognised is ignored rather than rejected: a newer CMS
   naming a collection this site does not read yet must not turn a
   successful save into a failed revalidation.

   AUTH

   A shared secret in `x-revalidate-secret`, compared in constant
   time. Without REVALIDATE_SECRET set the route refuses everything —
   an unauthenticated cache-buster is a free way to make the site
   rebuild every page on demand.
================================================================== */

/* This route reads a header and writes to the cache; it must never be
   prerendered or cached itself. */
export const dynamic = 'force-dynamic'

/** Collections the site actually reads. Anything else is ignored. */
const KNOWN = new Set([
  'blogs',
  'courses',
  'categories',
  'faqs',
  'reviews',
  'testimonials',
  'gallery',
  'events',
  'pages',
  'site'
])

/**
 * Constant-time comparison.
 *
 * `===` on a secret leaks its length and its matching prefix through
 * timing. The cost of doing it properly here is nil.
 */
function secretMatches(given: string | null, expected: string) {
  if (!given || given.length !== expected.length) return false
  let diff = 0
  for (let i = 0; i < given.length; i += 1) {
    diff |= given.charCodeAt(i) ^ expected.charCodeAt(i)
  }
  return diff === 0
}

export async function POST(req: NextRequest) {
  const expected = process.env.REVALIDATE_SECRET

  /* Not configured is a 503, not a 401: the CMS operator needs to see
     "you have not set this up" rather than "your secret is wrong". */
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: 'REVALIDATE_SECRET is not set on the website.' },
      { status: 503 }
    )
  }

  if (!secretMatches(req.headers.get('x-revalidate-secret'), expected)) {
    return NextResponse.json({ ok: false, error: 'unauthorised' }, { status: 401 })
  }

  /* The CMS sends no body today, so an empty or unparseable one is
     the normal case and means "everything". */
  let named: string[] = []
  try {
    const body = await req.json()
    if (Array.isArray(body?.tags)) {
      named = body.tags.filter((tag: unknown): tag is string => typeof tag === 'string' && KNOWN.has(tag))
    }
  } catch {
    // no body — fall through to the everything case
  }

  const tags = named.length ? named.map((tag) => `cms:${tag}`) : [CMS_TAG]
  tags.forEach((tag) => revalidateTag(tag))

  return NextResponse.json({ ok: true, revalidated: tags, at: Date.now() })
}

/**
 * A GET says whether the endpoint is here and configured, and nothing
 * else — no secret required and nothing revalidated.
 *
 * This exists because the failure it diagnoses is silent from both
 * ends: the CMS logs a 404 into a terminal nobody is watching, and
 * the site looks fine. One curl now answers "is the URL right".
 */
export async function GET() {
  return NextResponse.json({
    ok: true,
    endpoint: '/api/revalidate',
    configured: Boolean(process.env.REVALIDATE_SECRET)
  })
}
