import { NextResponse, type NextRequest, type NextFetchEvent } from 'next/server'
import { CMS_ENABLED, CMS_PUBLIC_BASE } from '@/lib/cms'

/* ==================================================================
   Redirects an editor set in the CMS.

   The CMS has a redirects module — from, to, 301 or 302, enabled —
   and exposes the enabled ones at /api/public/redirects. Nothing read
   it, so an editor moving a page and recording the redirect got no
   redirect: the old address went on 404ing.

   WHY MIDDLEWARE AND NOT next.config's redirects()

   `redirects()` in next.config is evaluated once, at build. It is the
   natural home for a redirect that is part of the codebase, and the
   wrong home for one an editor types into a CMS at four in the
   afternoon — that redirect would not exist until the next deploy,
   which for a link already being clicked is too late.

   WHY THE RULES ARE NOT FETCHED PER REQUEST

   Middleware runs on every request that reaches the app. A network
   call to the CMS inside it would put the CMS on the critical path of
   every page view, and a slow CMS would become a slow website — the
   opposite of the arrangement everywhere else, where the CMS being
   down costs nothing.

   So the table is held in module scope and refreshed at most once
   every few minutes:

     - the first request after a cold start waits for it once, because
       a redirect that does not apply on the first hit is a 404 served
       to whoever clicked the old link;
     - every request after that reads memory and waits for nothing;
     - a refresh that fails keeps the table it already had, and the
       site keeps redirecting on the last good answer.

   The window means a redirect saved in the CMS takes up to REFRESH_MS
   to take effect — a minute. That is the trade for not paying a network
   call per request.
================================================================== */

type Rule = { from: string; to: string; type: number }

/**
 * How long a fetched table is used before it is refreshed.
 *
 * It was five minutes, which made a redirect an editor had just saved
 * look broken: they tested the old address straight away, got a 404,
 * and reasonably concluded the SEO section did not work. A refresh
 * after the first runs in the background and never holds up a request,
 * so a minute costs one small fetch per minute and keeps the delay
 * shorter than it takes to go and check.
 */
const REFRESH_MS = 60 * 1000

/** A redirect table is a few rows; it should never take longer than this. */
const TIMEOUT_MS = 3000

/*
  Module scope, which in a serverless deployment means per warm
  instance rather than globally. That is the right granularity: each
  instance refreshes on its own schedule, and the worst case is one
  extra fetch per instance per window.
*/
let rules: Rule[] = []
let fetchedAt = 0
let inFlight: Promise<void> | null = null

/** Normalised so '/a/' and '/a' are the same rule. */
function normalise(path: string) {
  const trimmed = path.trim().replace(/\/+$/, '')
  if (!trimmed) return '/'
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`
}

async function refresh(): Promise<void> {
  /* One refresh at a time. Without this, a burst of requests arriving
     just after the window expires each starts its own fetch. */
  if (inFlight) return inFlight

  inFlight = (async () => {
    try {
      const response = await fetch(`${CMS_PUBLIC_BASE}/redirects`, {
        headers: { accept: 'application/json' },
        signal: AbortSignal.timeout(TIMEOUT_MS),
        cache: 'no-store'
      })
      if (!response.ok) throw new Error(`CMS responded ${response.status}`)

      const data = await response.json()
      if (!Array.isArray(data?.items)) throw new Error('unexpected body')

      rules = data.items
        .filter((rule: any) => rule?.from && rule?.to)
        .map((rule: any) => ({
          from: normalise(String(rule.from)),
          to: String(rule.to).trim(),
          /* Anything that is not an explicit 302 is treated as
             permanent, which is what a moved page almost always is and
             what the CMS defaults to. */
          type: Number(rule.type) === 302 ? 302 : 301
        }))

      fetchedAt = Date.now()
    } catch (error) {
      /* Deliberately keeps the previous table. A CMS that is briefly
         unreachable should not un-redirect the whole site. */
      const reason = error instanceof Error ? error.message : String(error)
      console.warn(`[redirects] could not refresh from the CMS (${reason}) — keeping the current table.`)
      /* Stamped anyway, so a CMS that is down is retried once per
         window rather than on every single request. */
      fetchedAt = Date.now()
    } finally {
      inFlight = null
    }
  })()

  return inFlight
}

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  /* No CMS to ask, so there is nothing to apply and nothing to fetch. */
  if (!CMS_ENABLED || !CMS_PUBLIC_BASE.startsWith('http')) return NextResponse.next()

  const stale = Date.now() - fetchedAt > REFRESH_MS

  if (!fetchedAt) {
    /* Cold start: wait, once. The alternative is serving a 404 for the
       exact link this table exists to rescue. */
    await refresh()
  } else if (stale) {
    /* Warm: answer from the table we have and refresh behind the
       response, so no visitor pays for the refresh. `waitUntil` keeps
       the instance alive long enough for it to finish. */
    event.waitUntil(refresh())
  }

  if (!rules.length) return NextResponse.next()

  const from = normalise(req.nextUrl.pathname)
  const rule = rules.find((entry) => entry.from === from)
  if (!rule) return NextResponse.next()

  /* An absolute target is used as it is — a redirect off-site is a
     legitimate thing to record. A path is resolved against this site,
     and the query string is carried across so campaign parameters on
     an old link survive the hop. */
  const destination = /^https?:\/\//i.test(rule.to)
    ? new URL(rule.to)
    : new URL(rule.to, req.nextUrl.origin)

  if (!destination.search) destination.search = req.nextUrl.search

  /* A rule pointing at its own source would redirect forever. */
  if (destination.origin === req.nextUrl.origin && normalise(destination.pathname) === from) {
    return NextResponse.next()
  }

  return NextResponse.redirect(destination, rule.type)
}

/*
  What middleware runs on.

  Everything except Next's own assets, the API routes and files with an
  extension. A redirect table describes pages, and running this on
  every image and script would multiply the work for nothing.
*/
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicons|uploads|.*\\..*).*)']
}
