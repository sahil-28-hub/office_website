/* ==================================================================
   The catalogue's main categories, each with a page of its own at
   /courses/category/<slug> — "Programming Courses in Ludhiana" and its
   siblings.

   WHY ONLY FOUR

   The catalogue has more categories than this. CAD, basic computer,
   and the design / marketing / accounting group already have pages in
   the same folder, written by hand in data/moreCourses.ts, and a
   second page for the same courses would be a doorway page competing
   with the first. These are the four the Courses menu gives a column
   to and which had no page of their own.

   NOTHING HERE IS A NEW CLAIM

   Each page lists the courses the catalogue already has under that
   category, with the name, blurb, duration and level the catalogue
   already carries. The copy below is the category's existing one-line
   description and the address — no counts, fees or outcomes that are
   not stated elsewhere on the site.
================================================================== */

import { COURSE_INDEX } from './courses/catalog'
import { BRANCH_CITY } from './branch'

export const CATEGORY_BASE = '/courses/category'
export const categoryPath = (slug: string) => `${CATEGORY_BASE}/${slug}`

export type CourseCategory = {
  slug: string
  /** the `category` value on the course seeds */
  key: string
  /** the heading, without the city — "Programming Courses" */
  name: string
  /** what the category covers, as the catalogue already describes it */
  blurb: string
  /** the search phrases people use for it locally */
  keywords: string[]
}

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    slug: 'programming',
    key: 'Programming',
    name: 'Programming Courses',
    blurb: 'Core languages and full-stack engineering',
    keywords: ['programming courses', 'coding classes', 'web development course', 'full stack course']
  },
  {
    slug: 'ai-data-science',
    key: 'AI & Data',
    name: 'AI & Data Science Courses',
    blurb: 'Models, analytics and decision intelligence',
    keywords: ['AI course', 'data science course', 'machine learning course', 'data analytics course']
  },
  {
    slug: 'digital-marketing',
    key: 'Digital Marketing',
    name: 'Digital Marketing Courses',
    blurb: 'Growth, performance and commerce',
    keywords: ['digital marketing course', 'SEO course', 'social media marketing course', 'Google Ads course']
  },
  {
    slug: 'cyber-security-cloud',
    key: 'Cyber & Cloud',
    name: 'Cyber Security & Cloud Courses',
    blurb: 'Secure, resilient infrastructure',
    keywords: ['cyber security course', 'ethical hacking course', 'cloud computing course', 'Linux course']
  }
]

export function getCourseCategory(slug: string) {
  return COURSE_CATEGORIES.find((category) => category.slug === slug)
}

/** The category page a course belongs to, if its category has one. */
export function categoryForKey(key: string) {
  return COURSE_CATEGORIES.find((category) => category.key === key)
}

/** The catalogue's courses under a category, in catalogue order. */
export function coursesIn(category: CourseCategory) {
  return COURSE_INDEX.filter((course) => course.category === category.key)
}

/** "Programming Courses in Ludhiana". */
export const categoryTitle = (category: CourseCategory) => `${category.name} in ${BRANCH_CITY}`
