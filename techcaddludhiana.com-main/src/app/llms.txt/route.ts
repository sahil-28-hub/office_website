import { SITE_URL } from '@/lib/structuredData'
import { COURSE_INDEX, coursePath } from '@/data/courses/catalog'
import { COURSE_CATEGORIES, categoryPath, categoryTitle, coursesIn } from '@/data/courseCategories'
import { MORE_CATEGORIES, moreCoursesPath } from '@/data/moreCourses'
import { BRANCH_CITY, BRANCH_TOWNS } from '@/data/branch'
import { ADDRESS_FULL, PHONE_DISPLAY, INBOX } from '@/data/contact'

/* ==================================================================
   /llms.txt — the site, described for a language model.

   The same job robots.txt and the sitemap do for a crawler: a short,
   plain-text map of what this site is and where its pages are, in the
   Markdown layout the llms.txt convention asks for. An assistant asked
   "where can I learn Python in Ludhiana" reads this instead of
   guessing at the site's structure from its navigation.

   Built from the same data the pages are — the catalogue, the category
   lists, the contact details — so it cannot describe a course the site
   does not have or quote a number the site does not print.
================================================================== */

export const dynamic = 'force-static'

const link = (label: string, path: string, note?: string) =>
  `- [${label}](${SITE_URL}${path})${note ? `: ${note}` : ''}`

export function GET() {
  const lines = [
    `# techcadd ${BRANCH_CITY}`,
    '',
    `> TechCadd Computer Education is a computer training institute in ${BRANCH_CITY}, Punjab, teaching programming, AI and data science, digital marketing, cyber security and cloud, design, CAD and accounting courses, with industrial training formats for college students.`,
    '',
    `Address: ${ADDRESS_FULL}. Phone: ${PHONE_DISPLAY}. Email: ${INBOX}. Students come from ${BRANCH_TOWNS.join(', ')}.`,
    '',
    '## Course categories',
    '',
    ...COURSE_CATEGORIES.map((category) =>
      link(
        categoryTitle(category),
        categoryPath(category.slug),
        coursesIn(category).map((course) => course.short || course.name).join(', ')
      )
    ),
    ...MORE_CATEGORIES.map((category) =>
      link(`${category.name} in ${BRANCH_CITY}`, moreCoursesPath(category.slug))
    ),
    link('All courses', '/courses'),
    '',
    '## Courses',
    '',
    ...COURSE_INDEX.map((course) =>
      link(course.name, coursePath(course.slug), [course.duration, course.level].filter(Boolean).join(', '))
    ),
    '',
    '## About the institute',
    '',
    link('About techcadd', '/about'),
    link('Founder', '/founder'),
    link('Student reviews', '/reviews'),
    link('Frequently asked questions', '/faq'),
    link('Blog', '/blog'),
    link('Events', '/events'),
    link('Contact and directions', '/contact'),
    ''
  ]

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' }
  })
}
