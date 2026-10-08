/* ==================================================================
   Course registry — the heavy half.

   One page component (src/pages/CoursePage.jsx) renders every course.
   The slug in the URL — /courses/<slug> — is the only thing that
   changes, and it selects the content from here.

   IMPORTING THIS MODULE PULLS THE WHOLE CATALOGUE: 48 courses with
   their syllabus, careers, projects and long-form editorial copy, a
   little over a megabyte. That is the right cost for a course page and
   the wrong cost for anything else, so everything that only needs a
   course's NAME imports ./catalog.js instead — see the note there.
================================================================== */

import { buildCourse } from './shared'
import { PROGRAMMING } from './programming'
import { AI_DATA } from './ai-data'
import { MARKETING } from './marketing'
import { CYBER_CLOUD } from './cyber-cloud'
import { DESIGN } from './design'
import { TRAINING } from './training'
import { GRAPHICS } from './graphics'
import { AI_PAGES } from './ai-pages'
import { COURSE_PAGES } from './course-pages'
import { PAGES_AFTER12 } from './pages-after12'
import { CATALOG } from './catalog.data'
import { resolveSlug } from './catalog'

/* ------------------------------------------------------------------
   The dropdown-page overlay.

   Every course in the site's Courses, AI and After 12th menus is on
   the long page layout and carries copy written for search in
   Ludhiana. None of that lives in the seed files: it is three maps,
   keyed by slug, merged over the seeds here. One overlay point, so
   "which courses got the long page, and what changed on them" is a
   single readable diff rather than forty edited seeds.

   ORDER MATTERS BELOW. A course listed in more than one menu belongs
   to the map spread LAST, and the order here is deliberate: the After
   12th map only ever contains the ten courses exclusive to that menu
   (see the note in pages-after12.js), so nothing it holds collides
   with the other two, and the AI map wins over the Courses map for the
   two courses in both — which is correct, because those two carry AI
   copy written for the AI menu.

   The merge is shallow on purpose — an overlay that sets `faqs` or
   `narrative` is REPLACING the seed's, not extending it, which is what
   the copy in those files is written to do.

   Courses in none of the three menus — the training formats, and the
   handful of catalogue courses not listed anywhere — match nothing
   here and keep the standard page exactly as it was.
------------------------------------------------------------------ */
const PAGES = { ...COURSE_PAGES, ...PAGES_AFTER12, ...AI_PAGES }

const SEEDS = [
  ...PROGRAMMING,
  ...AI_DATA,
  ...MARKETING,
  ...CYBER_CLOUD,
  ...DESIGN,
  ...TRAINING,
  ...GRAPHICS
].map((seed) => (PAGES[seed.slug] ? { ...seed, ...PAGES[seed.slug] } : seed))

/* Built once at module load — every course is small, plain data. */
const BY_SLUG: Record<string, ReturnType<typeof buildCourse>> = SEEDS.reduce((map, seed) => {
  map[seed.slug] = buildCourse(seed)
  return map
}, {} as Record<string, ReturnType<typeof buildCourse>>)

/* The catalogue, the aliases and the three light lookups now live in
   ./catalog.js. They are re-exported here because that is where the
   rest of the app has always imported them from, and because a course
   page that already paid for this module should not also import a
   second one for coursePath(). */
export {
  COURSE_INDEX,
  COURSE_CATEGORIES,
  getCourseEntry,
  resolveSlug,
  coursePath,
  getRelatedCourses
} from './catalog'

/* The only export that needs the heavy data above. */
export function getCourse(slug: string) {
  const resolved = resolveSlug(slug)
  return resolved ? BY_SLUG[resolved] : null
}

/* The generated catalogue and the seeds can drift — somebody adds a
   course and forgets to run scripts/gen-course-catalog.mjs. Say so in
   development rather than letting it surface later as a card that is
   missing from the index for no visible reason. */
if (process.env.NODE_ENV === 'development') {
  const inCatalog = new Set(CATALOG.map((c) => c.slug))
  const missing = SEEDS.filter((s) => !inCatalog.has(s.slug)).map((s) => s.slug)
  const extra = CATALOG.filter((c) => !BY_SLUG[c.slug]).map((c) => c.slug)
  if (missing.length || extra.length) {
    console.warn(
      '[courses] catalog.data.js is out of date — run: node scripts/gen-course-catalog.mjs',
      { missingFromCatalog: missing, notInSeeds: extra }
    )
  }
}
