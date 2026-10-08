import type { MetadataRoute } from 'next'
import { COURSE_INDEX, coursePath } from '@/data/courses/catalog'
import { BRANCHES } from '@/data/branches'
import { POSTS } from '@/data/blog'
import { SITE_URL } from '@/lib/structuredData'
import { cmsFetchList } from '@/lib/cms.server'
import { dedupeCoursesBySlug } from '@/lib/cms'
import { MORE_CATEGORIES, moreCoursesPath } from '@/data/moreCourses'
import { COURSE_CATEGORIES, categoryPath } from '@/data/courseCategories'
import { FORMATS, TRAINING_DOMAINS, trainingPath } from '@/data/trainingTracks'

const STATIC_ROUTES = [
  '',
  '/about',
  '/mission-vision',
  '/founder',
  '/team',
  '/blog',
  '/faq',
  '/reviews',
  '/college-partnerships',
  '/courses',
  '/contact',
  '/gallery',
  '/events',
  '/privacy',
  '/terms',
  '/cookie-policy',
  '/refund-policy',
  '/disclaimer',
  '/sitemap-html',
]

function editedAt(value: unknown, fallback: Date) {
  if (!value) return fallback
  const date = new Date(value as string)
  return Number.isNaN(date.getTime()) ? fallback : date
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const [fetchedCourses, cmsPosts, cmsEvents, cmsPages] = await Promise.all([
    cmsFetchList('/courses', { limit: 100 }),
    cmsFetchList('/blogs', { limit: 100 }),
    cmsFetchList('/events', { limit: 100 }),
    cmsFetchList<{ slug: string }>('/nav-pages'),
  ])

  const cmsCourses = fetchedCourses ? dedupeCoursesBySlug(fetchedCourses) : null

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
  }))

  const courses = new Map<string, { url: string; lastModified: Date }>()

  /* Built-in courses at the address they are actually served at — the
     one named for the city, not the /courses/ one that redirects to it.
     A sitemap that lists redirects is a sitemap of addresses a crawler
     is told not to index. */
  for (const course of COURSE_INDEX) {
    const url = `${SITE_URL}${coursePath(course.slug)}`
    courses.set(url, { url, lastModified: now })
  }

  for (const course of cmsCourses ?? []) {
    if (!course?.slug) continue
    if (course.seo?.inSitemap === false) {
      courses.delete(`${SITE_URL}${coursePath(course.slug)}`)
      continue
    }
    const url = `${SITE_URL}${coursePath(course.slug)}`
    courses.set(url, { url, lastModified: editedAt(course.updatedAt, now) })
  }

  const posts = new Map<string, { url: string; lastModified: Date }>()

  for (const post of POSTS) {
    const url = `${SITE_URL}/blog/${post.id}`
    posts.set(url, { url, lastModified: now })
  }

  for (const post of cmsPosts ?? []) {
    if (!post?.slug) continue
    const url = `${SITE_URL}/blog/${post.slug}`
    posts.set(url, { url, lastModified: editedAt(post.updatedAt ?? post.publishDate, now) })
  }

  const branchEntries = BRANCHES.map((branch) => ({
    url: `${SITE_URL}/branches/${branch.slug}`,
    lastModified: now,
  }))

  const eventEntries = (cmsEvents ?? [])
    .filter((event: any) => event?.slug)
    .map((event: any) => ({
      url: `${SITE_URL}/events/${event.slug}`,
      lastModified: editedAt(event.updatedAt, now),
    }))

  const pageEntries = (cmsPages ?? [])
    .filter((page: any) => page?.slug)
    .map((page: any) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: now,
    }))

  return [
    ...staticEntries,
    ...courses.values(),
    ...TRAINING_DOMAINS.flatMap((domain) =>
      [trainingPath(domain.slug), ...FORMATS.map((format) => trainingPath(domain.slug, format.key))].map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: now,
      }))
    ),
    ...COURSE_CATEGORIES.map((category) => ({
      url: `${SITE_URL}${categoryPath(category.slug)}`,
      lastModified: now,
    })),
    ...MORE_CATEGORIES.map((category) => ({
      url: `${SITE_URL}${moreCoursesPath(category.slug)}`,
      lastModified: now,
    })),
    ...branchEntries,
    ...posts.values(),
    ...eventEntries,
    ...pageEntries,
  ]
}
