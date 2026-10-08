import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import MoreCoursesPage from '@/views/MoreCoursesPage'
import CourseCategoryPage from '@/views/CourseCategoryPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema, faqPageSchema, itemListSchema } from '@/lib/structuredData'
import { COURSES, MORE_CATEGORIES, getMoreCategory, moreCoursesPath } from '@/data/moreCourses'
import { coursePath } from '@/data/courses/path'
import {
  COURSE_CATEGORIES,
  categoryPath,
  categoryTitle,
  coursesIn,
  getCourseCategory,
} from '@/data/courseCategories'
import { BRANCH_CITY } from '@/data/branch'

/* ==================================================================
   /courses/category/<slug> — the category pages.

   Two segments deep, so it never competes with /courses/<slug>.

   Two kinds live here. The catalogue's main categories — "Programming
   Courses in Ludhiana" and its siblings, in data/courseCategories.ts —
   are built from the catalogue itself. The three "More Courses" pages
   are written by hand in data/moreCourses.ts. Any other slug is a 404.
================================================================== */

/* No dynamicParams = false here, on purpose. With it, a path that is
   not prerendered is a hard 404 — and when a CMS save revalidates the
   layout these pages sit under, the regenerated entry can be that 404,
   cached until the next deploy. Unknown addresses are refused by
   notFound() below instead, which is decided per request and cannot go
   stale. */

export function generateStaticParams() {
  return [...COURSE_CATEGORIES, ...MORE_CATEGORIES].map((category) => ({ slug: category.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const main = getCourseCategory(slug)
  if (main) {
    const title = categoryTitle(main)
    const names = coursesIn(main).map((course) => course.short || course.name)
    return {
      /* the layout's template appends the brand */
      title,
      description: `${title} at techcadd: ${names.join(', ')}. ${main.blurb}, in classroom and online batches.`,
      keywords: main.keywords.flatMap((phrase) => [`${phrase} in ${BRANCH_CITY}`, `${phrase} ${BRANCH_CITY}`]),
      alternates: { canonical: categoryPath(main.slug) },
    }
  }

  const category = getMoreCategory(slug)
  if (!category) return {}

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: moreCoursesPath(category.slug) },
  }
}

export default async function MoreCoursesRoute({ params }: Props) {
  const { slug } = await params

  const main = getCourseCategory(slug)
  if (main) {
    return (
      <>
        <JsonLd
          data={breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Courses', url: '/courses' },
            { name: categoryTitle(main), url: categoryPath(main.slug) },
          ])}
        />
        <JsonLd
          data={itemListSchema(
            coursesIn(main).map((course) => ({ name: course.name, url: coursePath(course.slug) }))
          )}
        />
        <CourseCategoryPage category={main} />
      </>
    )
  }

  const category = getMoreCategory(slug)
  if (!category) notFound()

  const path = moreCoursesPath(category.slug)
  /* a course without its own page points at the group it sits in */
  const seen = new Set<string>()
  const listed = category.groups.flatMap((group) =>
    group.courses
      .filter((id) => COURSES[id] && !seen.has(id) && seen.add(id))
      .map((id) => ({
        name: COURSES[id].name,
        url: COURSES[id].slug ? coursePath(COURSES[id].slug!) : `${path}#${group.id}`,
      }))
  )

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Courses', url: '/courses' },
          { name: category.name, url: path },
        ])}
      />
      <JsonLd data={itemListSchema(listed)} />
      <JsonLd data={faqPageSchema(category.faqs)} />
      <MoreCoursesPage category={category} />
    </>
  )
}
