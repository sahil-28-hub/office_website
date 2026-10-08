/* ==================================================================
   The editor's per-course running order, applied to the page.

   WHAT THIS FIXES

   The CMS has shipped a layout editor since the module was built: drag
   the bands into a different order, switch one off. Both settings were
   saved (`sectionOrder`, `hiddenSections`) and returned by the API,
   and the website read neither — so rearranging a course page in the
   CMS changed nothing at all on it.

   ADVISORY, NOT AUTHORITATIVE

   A saved order is a list of ids from whenever the editor last touched
   it. A band added to the page afterwards is not in that list, and
   dropping anything the list does not mention would silently delete it
   from every course an editor had ever reordered. So the saved order
   only moves what it names; everything else keeps its place relative
   to the others, appended after.

   HIDING IS FOR CONTENT THAT EXISTS

   `hideable: false` protects the hero and the two closing calls to
   action — a course page with no title and no way to enquire is not a
   course page. Everything else already hides itself when it has no
   content, so switching one off is a choice rather than a repair.
================================================================== */

/**
 * The CMS's section ids, and the anchor each one names on the page.
 *
 * The layout editor stores its own ids — 'overview', 'faqs', 'modules' — and
 * the page's bands are keyed by the element id they render. Without this the
 * two never match and a saved order silently does nothing, which is exactly
 * what it did.
 *
 * Ids the CMS knows and the page does not ('reviews', 'cta' — rendered
 * outside the reorderable run) simply find no band and are skipped.
 */
const ANCHOR_OF: Record<string, string> = {
  hero: 'course-top',
  overview: 'course-overview',
  'who-can-do': 'course-who',
  'why-this-program': 'course-value',
  'what-you-will-learn': 'course-roadmap',
  modules: 'course-pace',
  tools: 'course-stack',
  projects: 'course-projects',
  enquiry: 'course-enquire',
  faqs: 'course-faq',
  'why-techcadd': 'course-why-techcadd',
  outcomes: 'course-future',
  reviews: 'course-reviews',
  cta: 'course-cta'
}

/** A CMS id, an anchor, or something this page does not render. */
const toAnchor = (id: string) => ANCHOR_OF[id] ?? id

/*
  Where a band actually is in the document.

  A band's key and its element id are the same thing for all but two:
  the reviews wall renders as #reviews and the closing call to action as
  #demo, because both are shared sections with ids of their own.
*/
const DOM_ID: Record<string, string> = {
  'course-reviews': 'reviews',
  'course-cta': 'demo'
}

/**
 * The element id to scroll to for a section the CMS names.
 *
 * Accepts either vocabulary — the layout editor's ('overview', 'faqs') or a
 * real id ('course-overview') — so the preview can be told to go somewhere
 * by an older CMS build and a newer one alike.
 */
export function domAnchor(id: string) {
  const anchor = toAnchor(id)
  return DOM_ID[anchor] ?? anchor
}

/**
 * Every element id worth trying for a section the CMS asks the preview to
 * show, best first.
 *
 * More than one because 'modules' means two things: to the layout editor it
 * is the pace band, and to an older build's Curriculum tab it is the
 * syllabus. The pace band is not on every course, so the syllabus is the
 * second thing to look for rather than leaving the frame where it was.
 */
export function scrollTargets(id: string): string[] {
  const targets = [id, domAnchor(id)]
  if (id === 'modules') targets.push('course-roadmap')
  return [...new Set(targets)]
}

/** Bands an editor may switch off, by the anchor id each one renders. */
const PROTECTED = new Set(['course-top', 'course-enquire', 'course-cta'])

export type Band = { id: string; node: unknown }

export function orderBands<T extends { id: string }>(
  bands: T[],
  course: { sectionOrder?: string[] | null; hiddenSections?: string[] | null }
): T[] {
  const hidden = new Set((course.hiddenSections ?? []).map(toAnchor))
  const visible = bands.filter((band) => PROTECTED.has(band.id) || !hidden.has(band.id))

  const saved = (course.sectionOrder ?? []).map(toAnchor)
  if (!saved.length) return visible

  const rank = new Map(saved.map((id, i) => [id, i]))

  /*
    The protected bands keep their declared position; only the rest move.

    Without this a partial saved order — one naming three bands out of
    twenty — pushed everything it did not mention below everything it did,
    and the hero ended up under the FAQ. An editor reordering the middle of
    a page is not asking for the title to move to the bottom of it.
  */
  const pinned = new Map<number, T>()
  const movable: T[] = []
  visible.forEach((band, i) => {
    if (PROTECTED.has(band.id)) pinned.set(i, band)
    else movable.push(band)
  })

  /* A stable sort: bands the editor ordered lead, in their order; the rest
     follow in the order the page declares them. Array.prototype.sort is
     stable in every engine this runs in, so equal ranks keep their relative
     positions. */
  movable.sort(
    (a, b) => (rank.get(a.id) ?? Number.MAX_SAFE_INTEGER) - (rank.get(b.id) ?? Number.MAX_SAFE_INTEGER)
  )

  const out: T[] = []
  let next = 0
  for (let i = 0; i < visible.length; i++) {
    const pin = pinned.get(i)
    out.push(pin ?? movable[next++])
  }
  return out
}
