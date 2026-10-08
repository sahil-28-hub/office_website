/* ==================================================================
   Reading the CMS on the server.

   The companion to src/lib/cms.ts, which does the same job in the
   browser. Both talk to the same public endpoints; the difference is
   who is asking and what happens to the answer.

   WHY THIS FILE EXISTS

   The site used to read the CMS only from `useCms*`, in the browser,
   after the page had already been sent. That worked, but it cost
   three things a Next.js site should not give up:

     - a crawler asking for /blog got the BUNDLED copy, because the
       CMS request had not happened yet when the HTML was written.
       Every article published in the CMS was invisible to search;

     - `generateMetadata` had no CMS record to read, so the <title>
       and description of a CMS-only post described whatever the
       bundled list happened to hold, or nothing;

     - the CMS pings /api/revalidate after every save, and there was
       nothing on the server to invalidate — the content was not
       cached there, it was fetched fresh in each visitor's browser.

   So the route files (the page.tsx files under src/app, all server
   components)
   fetch through here, hand the result to the client view as
   `initial`, and `useCmsList` renders it on the first paint instead
   of fetching again. The visitor gets CMS content in the HTML, the
   crawler gets it too, and the browser makes no CMS request at all.

   CACHING

   Every response is held in Next's data cache and tagged, so a single
   `revalidateTag('cms')` from the revalidate route drops all of it
   the moment an editor saves. `revalidate` is the backstop for a ping
   that never arrives — the CMS being down, a firewall, a missing
   secret — and not the main mechanism.

   FAILURE

   Every function here returns `null` rather than throwing. A CMS that
   is down, misconfigured or not deployed yet must not take the
   website down with it: the caller falls back to the copy bundled in
   src/data, which is the same rule the browser half follows.
================================================================== */

import { CMS_ENABLED, CMS_PUBLIC_BASE } from './cms'

/**
 * How long a cached CMS response is served before Next fetches again.
 *
 * Five minutes, and it is the backstop rather than the mechanism: an
 * editor's save reaches the site through `revalidateTag` in seconds
 * (see src/app/api/revalidate/route.ts). This is what covers the case
 * where that ping never arrives.
 */
const REVALIDATE_SECONDS = 300

/**
 * A render must not hang on an unresponsive CMS.
 *
 * Eight seconds, the same as the browser's. It was five, and the CMS
 * answers a cold list request slower than that often enough that a
 * build or a revalidation would give up and fall back to bundled
 * content for a page the CMS did have. Past eight the answer is not
 * coming, and the render moves on without it.
 */
const TIMEOUT_MS = 8000

/**
 * The cache tag for a public path.
 *
 * `/blogs/how-to-x` and `/blogs` both tag as `cms:blogs`, so
 * publishing one post drops the index that lists it as well as the
 * post itself. Coarser than it could be, and deliberately: a stale
 * index is a worse bug than a redundant refetch.
 */
function tagFor(path: string) {
  const collection = path.replace(/^\/+/, '').split(/[/?]/)[0]
  return collection ? `cms:${collection}` : 'cms'
}

/** Every CMS response carries this, so one call can drop all of them. */
export const CMS_TAG = 'cms'

type FetchOptions = {
  /** How many records to ask for. */
  limit?: number
  /** Which page of them, 1-based. */
  page?: number
  /** Override the cache window, in seconds. */
  revalidate?: number
}

/**
 * Why a fetch produced no record.
 *
 * `missing` and `error` look the same to a page that has a bundled
 * fallback, and completely different to one that does not: the first
 * is "no such article", the second is "the newsroom is not
 * answering". BlogPostPage prints different words for each, so the
 * distinction has to survive the trip from here to the component.
 */
export type CmsState = 'ready' | 'missing' | 'error' | 'off'

type CmsResult = { state: CmsState; data: any }

/**
 * GETs a public CMS path and reports what came back.
 *
 * Never throws. Every unhappy path — disabled, unreachable, timed
 * out, non-2xx, unparseable — comes back as a state the caller can
 * act on, because a CMS problem must never become a 500 on a
 * marketing page.
 */
async function cmsFetch(path: string, { limit, page, revalidate }: FetchOptions = {}): Promise<CmsResult> {
  /* `NEXT_PUBLIC_CMS_API_URL=off` means there is no CMS to talk to.
     Nothing is requested and nothing is logged: the bundled copy is
     the content in that configuration, not a symptom of a failure. */
  if (!CMS_ENABLED || !CMS_PUBLIC_BASE.startsWith('http')) return { state: 'off', data: null }

  const url = new URL(`${CMS_PUBLIC_BASE}${path}`)
  if (limit) url.searchParams.set('limit', String(limit))
  if (page && page > 1) url.searchParams.set('page', String(page))

  try {
    const response = await fetch(url, {
      headers: { accept: 'application/json' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
      next: {
        revalidate: revalidate ?? REVALIDATE_SECONDS,
        tags: [CMS_TAG, tagFor(path)]
      }
    })

    /* A 404 is a real answer — the slug is not published — and is not
       worth a log line. Anything else is worth knowing about. */
    if (response.status === 404) return { state: 'missing', data: null }
    if (!response.ok) {
      console.warn(`[cms] ${path} responded ${response.status} — using bundled content.`)
      return { state: 'error', data: null }
    }

    return { state: 'ready', data: await response.json() }
  } catch (error) {
    /* Worth reporting: a site quietly serving stale bundled content
       when a CMS was configured is exactly the thing nobody notices. */
    const reason = error instanceof Error ? error.message : String(error)
    console.warn(`[cms] could not reach ${path} (${reason}) — using bundled content.`)
    return { state: 'error', data: null }
  }
}

/**
 * A published collection, already mapped.
 *
 * Returns `null` — not `[]` — when the CMS could not answer, so the
 * caller can tell "the CMS has no posts yet" from "the CMS did not
 * answer" and fall back only in the second case.
 */
export async function cmsFetchList<T = any>(
  path: string,
  { map, ...options }: FetchOptions & { map?: (record: any, index: number) => T } = {}
): Promise<T[] | null> {
  const { data } = await cmsFetch(path, options)
  if (!data || !Array.isArray(data.items)) return null
  return map ? data.items.map(map) : data.items
}

/**
 * Every published record in a collection, however many pages it takes.
 *
 * `cmsFetchList` asks for one page, and the public API caps a page at a
 * hundred. That is plenty for courses and blogs and nowhere near enough
 * for FAQs: the Ludhiana CMS holds over six hundred, so the FAQ page
 * showed the first hundred and a course that linked a newer question
 * silently lost it — the id was looked up in a list it was never in.
 *
 * Pages are read in order until the API has returned `total`, a short
 * page, or MAX_PAGES — the last a guard against an API that reports a
 * wrong total, not a limit anyone should reach. `null` when the first
 * page fails, as with `cmsFetchList`; a later failure keeps what was
 * read rather than throwing it away.
 */
const PAGE_SIZE = 100
const MAX_PAGES = 50

export async function cmsFetchAll<T = any>(
  path: string,
  { map, revalidate }: { map?: (record: any, index: number) => T; revalidate?: number } = {}
): Promise<T[] | null> {
  const rows: any[] = []
  const seen = new Set<unknown>()

  for (let page = 1; page <= MAX_PAGES; page++) {
    const { data } = await cmsFetch(path, { limit: PAGE_SIZE, page, revalidate })
    if (!data || !Array.isArray(data.items)) {
      if (page === 1) return null
      break
    }

    /*
      Keep only records not already collected, and stop the moment a page
      brings nothing new. A CMS API from before `?page=` existed ignores
      the parameter and returns page one every time; without this, a
      website deployed ahead of its CMS would gather the same hundred rows
      over and over until it reached `total`. With it, that case degrades
      to exactly what the site did before — the first hundred — instead of
      six copies of them.
    */
    const fresh = data.items.filter((item: any) => {
      const key = item?.id ?? JSON.stringify(item)
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
    if (!fresh.length) break
    rows.push(...fresh)

    const total = Number(data.total)
    if (data.items.length < PAGE_SIZE) break
    if (Number.isFinite(total) && rows.length >= total) break
  }

  return map ? rows.map(map) : rows
}

/** One published record by slug, mapped. `null` if missing or unreachable. */
export async function cmsFetchRecord<T = any>(
  path: string,
  { map, ...options }: FetchOptions & { map?: (record: any) => T } = {}
): Promise<T | null> {
  const { data } = await cmsFetch(path, options)
  if (!data || typeof data !== 'object') return null
  return map ? map(data) : (data as T)
}

/**
 * One record, with the reason there isn't one when there isn't.
 *
 * The same fetch as `cmsFetchRecord`, and Next dedupes the two within
 * a render — so a page may call this and `generateMetadata` may call
 * the plain one without paying twice.
 */
export async function cmsFetchRecordWithState<T = any>(
  path: string,
  { map, ...options }: FetchOptions & { map?: (record: any) => T } = {}
): Promise<{ record: T | null; state: CmsState }> {
  const { state, data } = await cmsFetch(path, options)
  if (state !== 'ready' || !data || typeof data !== 'object') {
    return { record: null, state: state === 'ready' ? 'missing' : state }
  }
  return { record: map ? map(data) : (data as T), state: 'ready' }
}

/**
 * The slugs of a published collection, for `generateStaticParams`.
 *
 * Always an array: a build that cannot reach the CMS should produce
 * the site's static pages rather than fail, and the dynamic routes
 * still render on demand.
 */
export async function cmsFetchSlugs(path: string, limit = 100): Promise<string[]> {
  const items = await cmsFetchList(path, { limit })
  if (!items) return []
  return items.map((item: any) => item?.slug).filter((slug: unknown): slug is string => typeof slug === 'string' && slug.length > 0)
}
