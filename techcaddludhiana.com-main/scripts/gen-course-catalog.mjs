/* ==================================================================
   Generates src/data/courses/catalog.data.js.

   WHY THIS EXISTS

   The full course registry is about 1.2MB minified — 48 courses with
   their syllabus, careers, projects and long-form editorial copy. A
   course page needs all of that for one course. Nothing else on the
   site does.

   But four other places need to know that courses EXIST: the demo
   modal's <select>, the related-courses strip, the course-not-found
   page and the course index. Each of them was reaching into the full
   registry for a name and a duration, which meant that opening the
   demo modal — something the site does by itself after thirty seconds
   — downloaded the entire catalogue on whatever page you happened to
   be reading. On a slow connection that starved the lazy section
   chunks, so sections sat as skeletons until the visitor gave up; on a
   reload everything was cached and the page looked fine. That is the
   "it only loads when I refresh" report.

   So the small facts are split out into a generated file. It is
   generated rather than hand-written because a hand-written copy of
   forty-eight names and durations drifts the first time somebody edits
   a seed, and drift here is invisible until a link 404s.

   RUN IT after adding, removing or renaming a course, or after
   changing any of the fields below:

       node scripts/gen-course-catalog.mjs

   src/data/courses/index.js asserts in development that the generated
   file still matches the seeds, so a forgotten run shows up as a
   console warning rather than as a missing card.
================================================================== */

import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const OUT = join(here, '..', 'src', 'data', 'courses', 'catalog.data.js')

const { COURSE_INDEX, getCourse } = await import('../src/data/courses/index.js')

/* Everything the four light consumers read, and nothing else. Adding a
   field here is cheap; adding a heavy one (modules, narrative, faqs)
   defeats the entire point of the file. */
const rows = COURSE_INDEX.map((entry) => {
  const course = getCourse(entry.slug)
  return {
    slug: entry.slug,
    name: entry.name,
    short: entry.short,
    category: entry.category,
    duration: entry.duration,
    sub: course?.sub || '',
    level: course?.level || '',
    mode: course?.mode || '',
    moduleCount: course?.modules?.length || 0,
    projectCount: course?.projects?.length || 0
  }
})

const body = rows
  .map((r) => '  ' + JSON.stringify(r).replace(/","/g, '", "').replace(/":"/g, '": "').replace(/,"/g, ', "'))
  .join(',\n')

writeFileSync(
  OUT,
  `/* GENERATED FILE — do not edit by hand.
   Run \`node scripts/gen-course-catalog.mjs\` to rebuild it.
   See that script for why this file exists at all. */

export const CATALOG = [
${body}
]
`,
  'utf8'
)

console.log(`catalog.data.js — ${rows.length} courses written`)
