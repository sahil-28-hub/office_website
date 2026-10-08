/* ==================================================================
   The light catalogue.

   Everything that needs to know a course EXISTS — the demo modal's
   course <select>, the related-courses strip, the not-found page and
   the course index — imports from here. Nothing here pulls a syllabus,
   a narrative or a set of FAQs with it, so none of those places drag
   the ~1.2MB registry into whatever page they happen to be on.

   Only a course PAGE needs the full object, and only a course page
   imports ./index.js for it.

   The data half is generated: see scripts/gen-course-catalog.mjs for
   why, and run it after adding or renaming a course. The logic half —
   the aliases and the three lookups — is hand-written and lives here.
================================================================== */

import { CATALOG } from './catalog.data'

/* Alternative spellings that appear in the navigation or in older
   links. They resolve to the same page rather than a dead end. */
const ALIASES: Record<string, string> = {
  'python-programming': 'python',
  'c-and-cpp': 'c-cpp',
  'c-plus-plus': 'c-cpp',
  ai: 'artificial-intelligence',
  'machine-learning-and-ai': 'machine-learning',
  'ai-and-data-science': 'data-science',
  'machine-learning-and-deep-learning': 'deep-learning',
  'cybersecurity-and-ethical-hacking': 'ethical-hacking',
  'cloud-computing-and-devops': 'cloud-computing',
  'digital-marketing-and-communication': 'digital-marketing',
  chatgpt: 'chatgpt-ai-tools',
  'ai-tools': 'chatgpt-ai-tools',
  'retrieval-augmented-generation': 'rag',
  'gen-ai': 'generative-ai',
  'graphic-design': 'graphic-designing',
  graphics: 'graphic-designing',
  'video-editor': 'video-editing',
  animation: '2d-3d-animation',
  '2d-animation': '2d-3d-animation',
  '3d-animation': '2d-3d-animation',
  'ui-ux': 'ui-ux-design',
  uiux: 'ui-ux-design',
  figma: 'ui-ux-design',
  tally: 'tally-erp',
  'tally-prime': 'tally-erp',
  'computer-basics': 'computer-basics-excel',
  'ms-excel': 'computer-basics-excel',
  excel: 'computer-basics-excel',

  /* training formats — the menu labels, and the shorthand people type */
  '45-days': '45-days-training',
  '45-day-training': '45-days-training',
  'six-weeks-training': '6-weeks-training',
  '6-week-training': '6-weeks-training',
  'four-months-training': '4-months-training',
  '4-month-training': '4-months-training',
  'six-months-training': '6-months-training',
  '6-month-training': '6-months-training',
  'industrial-training-program': 'industrial-training',
  'summer-training': 'industrial-training',
  'winter-training': 'industrial-training',
  internship: 'internship-program',
  'internship-training': 'internship-program'
}

const BY_SLUG: Record<string, (typeof CATALOG)[number]> = CATALOG.reduce((map, entry) => {
  map[entry.slug] = entry
  return map
}, {} as Record<string, (typeof CATALOG)[number]>)

/* The catalogue as the pages read it. Same shape and same name the
   registry exported before the split, so nothing downstream changed. */
export const COURSE_INDEX = CATALOG

export const COURSE_CATEGORIES = CATALOG.reduce((groups, course) => {
  ;(groups[course.category] ||= []).push(course)
  return groups
}, {} as Record<string, (typeof CATALOG)[number][]>)

export function resolveSlug(slug: string | null | undefined) {
  if (!slug) return null
  const clean = slug.toLowerCase().replace(/\/+$/, '')
  return BY_SLUG[clean] ? clean : ALIASES[clean] || null
}

/* The light record for a slug — name, duration, level and the two card
   counts. A course PAGE wants getCourse() from ./index.js instead. */
export function getCourseEntry(slug: string) {
  const resolved = resolveSlug(slug)
  return resolved ? BY_SLUG[resolved] : null
}

/* Re-exported for everything that already imports it from here. The
   address itself is decided in ./path — see the note there. */
export { coursePath } from './path'

/* Same-category courses first (the closest match for "you might also
   like"), backfilled from the rest of the catalogue if a small
   category runs out — so a course in a four-course category still
   shows a full set instead of one lonely card. */
export function getRelatedCourses(slug: string, limit = 3) {
  const resolved = resolveSlug(slug)
  if (!resolved) return []
  const current = BY_SLUG[resolved]

  const sameCategory = CATALOG.filter(
    (c) => c.category === current.category && c.slug !== resolved
  )
  const rest = CATALOG.filter(
    (c) => c.category !== current.category && c.slug !== resolved
  )

  return [...sameCategory, ...rest].slice(0, limit)
}
