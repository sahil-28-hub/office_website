/* ==================================================================
   Where a course lives.

   Split out of index.js on purpose: this has zero dependency on the
   course dataset, but index.js pulls in every category file at module
   scope. Anything that only needs to build a course URL (AboutDomains
   on the eager home-page bundle, for one) imports from here instead,
   so it isn't dragged into paying for the full dataset just to write a
   link.

   THE ADDRESS CARRIES THE CITY

   A built-in course is served at the root, named for what it is and
   where — /python-course-in-ludhiana — the way the group's other sites
   name theirs. That is the phrase people search with, and a URL that
   says it is a small, real signal to a search engine and a clearer one
   to a person reading the link.

   The old address, /courses/python, still answers: it redirects to the
   new one permanently, so nothing already indexed or linked is lost.

   WHICH COURSES

   Only the ones listed below. The map is explicit rather than derived
   from a rule, because a course created in the CMS has a slug an
   editor chose — many already end "-in-ludhiana" — and bolting the city
   onto those would produce nonsense. A course not listed here keeps
   /courses/<slug>, which is always a working address.

   A PAGE WRITTEN IN THE CMS KEEPS ITS ADDRESS

   /ethical-hacking-course-in-ludhiana and /power-bi-course-in-ludhiana
   are pages an editor wrote in the CMS's Pages module, so those two
   courses are not in the map and stay at /courses/<slug>. The same rule
   holds at request time: the root route looks for a CMS page first, so
   a page published later at one of these addresses is what opens there
   — and "View on site" in the CMS always opens the page it belongs to.
================================================================== */

const CITY = 'ludhiana'

const course = (slug: string) => `${slug}-course-in-${CITY}`
/* a training format is already named for what it is */
const format = (slug: string) => `${slug}-in-${CITY}`

/** catalogue slug → the address it is served at, without the slash */
export const COURSE_SEO_SLUG: Record<string, string> = {
  /* programming */
  python: course('python'),
  java: course('java'),
  'c-cpp': course('c-cpp'),
  kotlin: course('kotlin'),
  'web-designing': course('web-designing'),
  'web-development': course('web-development'),
  'mern-stack': course('mern-stack'),
  'mean-stack': course('mean-stack'),
  'php-full-stack': course('php-full-stack'),

  /* AI & data — power-bi is left out, see the note above */
  'artificial-intelligence': course('artificial-intelligence'),
  'machine-learning': course('machine-learning'),
  'deep-learning': course('deep-learning'),
  'data-science': course('data-science'),
  'data-analytics': course('data-analytics'),
  tableau: course('tableau'),
  'generative-ai': course('generative-ai'),
  'prompt-engineering': course('prompt-engineering'),
  'chatgpt-ai-tools': course('chatgpt-ai-tools'),
  'agentic-ai': course('agentic-ai'),
  'ai-powered-marketing': course('ai-powered-marketing'),
  rag: course('rag'),

  /* digital marketing */
  'digital-marketing': course('digital-marketing'),
  'social-media-marketing': course('social-media-marketing'),
  'google-ads': course('google-ads'),
  seo: course('seo'),
  wordpress: course('wordpress'),
  shopify: course('shopify'),

  /* cyber & cloud — ethical-hacking is left out, see the note above */
  cybersecurity: course('cybersecurity'),
  'cloud-computing': course('cloud-computing'),
  linux: course('linux'),

  /* civil / mechanical */
  autocad: course('autocad'),
  solidworks: course('solidworks'),
  '3ds-max': course('3ds-max'),
  revit: course('revit'),

  /* graphics & media */
  'graphic-designing': course('graphic-designing'),
  'video-editing': course('video-editing'),
  '2d-3d-animation': course('2d-3d-animation'),
  'ui-ux-design': course('ui-ux-design'),

  /* office & accounts */
  'tally-erp': course('tally-erp'),
  'computer-basics-excel': course('computer-basics-excel'),

  /* training formats */
  '45-days-training': format('45-days-training'),
  '6-weeks-training': format('6-weeks-training'),
  '4-months-training': format('4-months-training'),
  '6-months-training': format('6-months-training'),
  'industrial-training': format('industrial-training'),
  'internship-program': format('internship-program')
}

/** the address → the catalogue slug behind it */
export const SEO_SLUG_TO_COURSE: Record<string, string> = Object.fromEntries(
  Object.entries(COURSE_SEO_SLUG).map(([slug, seo]) => [seo, slug])
)

/* ------------------------------------------------------------------
   One course, one page.

   The same course exists twice in several places: once in the built-in
   catalogue ("data-science") and once as a record an editor created in
   the CMS under a slug of its own ("data-science-course-in-ludhiana").
   Each used to get its own page, so the site had two — sometimes three
   — pages for one subject, competing with each other in search and
   confusing anyone who found both.

   They are one course now. The built-in slug is the course; the CMS
   record is where its content comes from:

     CMS_SOURCE_FOR    built-in slug → the CMS record that IS its page.
                       The page is built from that record alone — its
                       title, copy, syllabus and picture — so what an
                       editor opens from the CMS is the course they
                       wrote, at the course's one address.
     CMS_DUPLICATE_OF  every CMS slug that is one of these courses →
                       the built-in slug it belongs to. Its old address
                       redirects, and it is counted once in the
                       catalogue, the sitemap and Ask Bhuvi.

   Only records that are the same course are paired. A CMS course on
   the same subject at a different level — "Data Science Fundamentals",
   "Deep Learning Essentials", "Professional Machine Learning" — is a
   different course, and keeps a page of its own: folding those in sent
   the CMS's "View on site" to a course the editor had not opened.

   Nothing is deleted from the CMS. To give a pair two pages again,
   remove its lines here.
------------------------------------------------------------------ */
export const CMS_SOURCE_FOR: Record<string, string> = {
  'data-science': 'data-science-course-in-ludhiana',
  'machine-learning': 'machine-learning-course-in-ludhiana',
  'ethical-hacking': 'ethical-hacking-course-in-ludhiana',
  cybersecurity: 'cyber-security-course-in-ludhiana',
  'mern-stack': 'mern-stack-development-course-in-ludhiana',
  'deep-learning': 'deep-learning-course',
  python: 'python2-programming',
  'web-designing': 'web-designing-course',
  linux: 'linux-administration',
  'tally-erp': 'tally-erp9-with-gst',
  autocad: 'autocadd-course-in-ludhiana',
  'computer-basics-excel': 'basic-computer',
  'php-full-stack': 'full-stack-development-with-php',
  'power-bi': 'power-bi-developer-course',
  'prompt-engineering': 'prompt-engineering-mastery',
  'generative-ai': 'generative-ai-fundamentals-course'
}

export const CMS_DUPLICATE_OF: Record<string, string> = {
  ...Object.fromEntries(Object.entries(CMS_SOURCE_FOR).map(([slug, source]) => [source, slug])),
  /* a second CMS record for a course already paired above */
  'cyber-security2s': 'cybersecurity',
  'mern-stack-development': 'mern-stack'
}

/** The slug a course is known by, whichever of its names was asked for. */
export function canonicalCourseSlug(slug: string) {
  return CMS_DUPLICATE_OF[slug] ?? slug
}

/** The address a course has always had. Still answers, by redirecting. */
export function legacyCoursePath(slug: string) {
  return `/courses/${slug}`
}

/** The address to link to. */
export function coursePath(slug: string) {
  const canonical = canonicalCourseSlug(slug)
  const seo = COURSE_SEO_SLUG[canonical]
  return seo ? `/${seo}` : legacyCoursePath(canonical)
}
