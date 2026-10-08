'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { CMS_ENABLED, cmsGet, cmsList } from '../lib/cms'

/* ==================================================================
   Reading the CMS from a page component.

   One decision is baked into both hooks and is worth stating plainly,
   because it is the difference between a site that survives a CMS
   outage and one that does not:

     the bundled copy in src/data/ is a *fallback*, not the source.

   When the API answers, its records are what the page renders, full
   stop. The bundled list is used only when the request fails — the
   API is down, the origin is not in CORS_ORIGIN, the network is gone
   — or when it answers with nothing at all, which is what a CMS that
   has been set up but not yet filled in looks like. A visitor never
   sees an empty blog page because somebody forgot to start the API.

   `state` reports which of the two happened, so a page can show a
   quiet note while it is on the fallback rather than pretending.

   WHERE THE FETCH ACTUALLY HAPPENS NOW

   Both hooks take an `initial` — the same content, already fetched
   and already mapped, by the server component that rendered the page
   (see src/lib/cms.server.ts). When it is there:

     - it is what the first paint renders, so the CMS content is in
       the HTML the visitor and the crawler are sent;
     - no browser request is made at all, because one already
       happened on the server and its answer is cached and tagged
       there, where /api/revalidate can drop it.

   `initial: null` is not the same as leaving it out. It means the
   server DID ask and the CMS did not answer, so the browser skips a
   request that is about to fail the same way and goes straight to
   the bundled copy. Leaving it out entirely keeps the original
   behaviour — fetch from the browser — which is what a component
   rendered outside a CMS-aware route still does.
================================================================== */

/**
 * A published collection from the CMS.
 *
 * @param path     the public endpoint, e.g. '/blogs'. `null` skips the
 *                 request entirely and hands back the fallback — for a
 *                 component that is sometimes handed its list directly
 *                 and should not fetch one it will not use.
 * @param map      (record, index) => the shape the page renders
 * @param fallback the bundled list to use when the CMS gives nothing
 * @param limit    how many records to ask for
 * @param initial  what the server already fetched and mapped, if the
 *                 route did that. An array is used as-is and no
 *                 browser request is made; `null` means the server
 *                 asked and got nothing, which also skips the
 *                 request; `undefined` means nobody asked yet, and
 *                 the browser fetches as it always did.
 *
 * Returns `{ items, state }`, where state is 'loading' | 'cms' | 'fallback'.
 */
export function useCmsList(path: string | null, { map, fallback = [], limit, initial }: { map?: (record: any, index: number) => any; fallback?: any[]; limit?: number; initial?: any[] | null } = {}) {
  /* `initial` is already in the page's shape — the server ran the same
     mapper before serialising it — so it is seeded past the mapping
     step rather than through it. Mapping twice would be wrong, not
     merely wasteful: `mapPost` turns a CMS record into a card, and a
     card put through it again loses its title and its body.

     An EMPTY array is treated as no answer, which is the same rule
     the browser path follows below: a CMS that has been set up but
     not filled in yet should show the bundled copy, not a blank
     page. */
  const seeded = Array.isArray(initial) && initial.length > 0 ? initial : null

  const [records, setRecords] = useState(seeded)
  const [failed, setFailed] = useState(false)

  /* The server asked and the CMS did not answer. Nothing has changed
     in the milliseconds since, so the browser goes straight to the
     bundled copy rather than repeating a request to say so. */
  const serverTried = initial !== undefined

  /* the mapper is usually an inline arrow, so depending on it would
     re-fetch on every render; the path is what identifies the request */
  const mapper = useRef(map)
  mapper.current = map

  useEffect(() => {
    const controller = new AbortController()
    let live = true

    /* The server already did this request, and its answer is what is
       on screen. Repeating it in the browser would replace correct
       content with identical content and remount every card to do it
       — which is exactly the reveal-observer bug `listKey` exists to
       paper over. */
    if (serverTried) return undefined

    setRecords(null)
    setFailed(false)

    /* `off` means there is no CMS to reach, so there is nothing to
       try and nothing to report — the bundled list below is the
       content, not a fallback from a failure. */
    if (!path || !CMS_ENABLED) return undefined

    cmsList(path, { limit, signal: controller.signal })
      .then((items) => {
        if (live) setRecords(items)
      })
      .catch((error) => {
        if (!live || error?.name === 'AbortError') return
        /* console.error survives the production build's pure-call
           stripping, which is deliberate: a site quietly serving
           stale bundled content is exactly what wants reporting */
        console.error(`CMS: could not load ${path} — showing bundled content.`, error)
        setFailed(true)
      })

    return () => {
      live = false
      controller.abort()
    }
  }, [path, limit, serverTried])

  return useMemo(() => {
    /*
      The server's answer, rendered as-is — already mapped, so it
      bypasses the mapper below.

      Read from `seeded` (the prop) rather than from `records` (the
      state). `useState` takes its argument only on the first render,
      so a component that stays mounted while its `initial` prop
      changes — the same list route re-rendered with a fresh server
      fetch — would keep showing the list it was born with. The prop
      is the truth on this path; the state exists for the browser
      fetch below, which this path never reaches.
    */
    if (serverTried) {
      return seeded ? { items: seeded, state: 'cms' } : { items: fallback, state: 'fallback' }
    }

    /* nothing was asked for, or there is no CMS configured, so there
       is nothing to wait on */
    if (!path || !CMS_ENABLED) return { items: fallback, state: 'fallback' }

    if (records === null && !failed) {
      /* First paint. The bundled list is shown rather than a spinner:
         it is the same content in the common case, and a page that
         flashes empty and then fills in reads as broken. */
      return { items: fallback, state: 'loading' }
    }

    if (failed || !records?.length) return { items: fallback, state: 'fallback' }

    return { items: records.map((record, i) => mapper.current(record, i)), state: 'cms' }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, records, failed, fallback, serverTried, seeded])
}

/**
 * A signature that changes when the rendered list does.
 *
 * The reason this exists is a real bug rather than a nicety. The
 * scroll-reveal observer snapshots its `[data-reveal]` descendants
 * once, on mount. When a fetch replaces the fallback list, those
 * nodes are remounted — different keys, and a card whose href changed
 * from '#' to '/blog/…' even changes element type — so the observer
 * is left watching nodes that are no longer in the document and the
 * new ones sit at opacity 0 for good. The page looks empty.
 *
 * Feeding this into `useFilteredReveal` rebuilds the observer over
 * whatever is actually on screen. Length alone is not enough: a CMS
 * list can happen to be the same length as the fallback.
 */
export function listKey(items: Array<{ id?: string | number }>) {
  return `${items.length}:${items[0]?.id ?? ''}:${items[items.length - 1]?.id ?? ''}`
}

/**
 * A single published record, by slug.
 *
 * Returns `{ item, state }`, where state is 'loading' | 'ready' |
 * 'missing' (the slug is not published) | 'error' (the CMS could not
 * be reached). A missing record and an unreachable CMS need different
 * words on the page, so they stay distinguishable.
 */
export function useCmsRecord(
  path: string,
  { map, initial, initialState }: { map?: (record: any) => any; initial?: any; initialState?: string } = {}
) {
  /* What the server component already fetched, already mapped, along
     with why there is nothing when there is nothing — 'missing' (no
     such published slug) and 'error' (the CMS did not answer) get
     different words on the page, so the reason has to arrive with the
     record rather than be guessed from its absence. */
  const serverTried = initialState !== undefined

  /* Only for the browser-fetch path. When the server already asked,
     the props below are read directly instead — `useState` takes its
     argument once, on the first render, so seeding from a prop that
     later changes would pin the page to the first article it was
     handed. */
  const [state, setState] = useState('loading')
  const [record, setRecord] = useState(null)

  const mapper = useRef(map)
  mapper.current = map

  useEffect(() => {
    const controller = new AbortController()
    let live = true

    /* The server already asked, and the answer is on screen. */
    if (serverTried) return undefined

    setRecord(null)

    /* no CMS configured — report it as missing rather than leaving the
       page spinning on a request that will never be made */
    if (!CMS_ENABLED) {
      setState('missing')
      return undefined
    }

    setState('loading')
    cmsGet(path, { signal: controller.signal })
      .then((found) => {
        if (!live) return
        setRecord(found)
        setState(found ? 'ready' : 'missing')
      })
      .catch((error) => {
        if (!live || error?.name === 'AbortError') return
        console.error(`CMS: could not load ${path}.`, error)
        setState('error')
      })

    return () => {
      live = false
      controller.abort()
    }
  }, [path, serverTried])

  /* The server's answer, straight from the props. It has already been
     through the mapper on the server, so it is handed back untouched;
     only a record this hook fetched itself still needs mapping. */
  if (serverTried) return { item: initial ?? null, state: initialState }

  return {
    item: record && mapper.current ? mapper.current(record) : record,
    state
  }
}
