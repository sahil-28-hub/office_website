import type { Metadata } from 'next'
import CoursesIndexPage from '@/views/CoursesIndexPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema, itemListSchema } from '@/lib/structuredData'
import { CI_HERO } from '@/data/coursesIndex'
import { COURSE_INDEX, coursePath } from '@/data/courses/catalog'
import { cmsFetchList } from '@/lib/cms.server'
import { mapCourse, mapCategory, dedupeCoursesBySlug } from '@/lib/cms'

export const metadata: Metadata = {
  title: 'Computer Courses in Ludhiana — Full Course List',
  description: CI_HERO.lead,
  alternates: { canonical: '/courses' },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Courses', url: '/courses' },
])

export default async function CoursesRoute() {
  const [fetched, categories] = await Promise.all([
    cmsFetchList('/courses', { map: mapCourse, limit: 100 }),
    cmsFetchList('/categories', { map: mapCategory, limit: 100 }),
  ])

  const courses = fetched ? dedupeCoursesBySlug(fetched) : null

  const listed = courses?.length
    ? courses.map((course: any) => ({ name: course.name, url: coursePath(course.slug) }))
    : COURSE_INDEX.map((course) => ({ name: course.name, url: coursePath(course.slug) }))

  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <JsonLd data={itemListSchema(listed)} />
      <CoursesIndexPage initialCourses={courses} initialCategories={categories} />
    </>
  )
}
