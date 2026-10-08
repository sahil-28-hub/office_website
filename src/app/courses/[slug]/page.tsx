import type { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'
import { COURSE_INDEX, getCourseEntry } from '@/data/courses/catalog'
import { canonicalCourseSlug, legacyCoursePath } from '@/data/courses/path'
import { cmsFetchSlugs } from '@/lib/cms.server'
import { CourseRouteView, courseAddress, courseMetadata } from '@/components/course/CourseRoute'

/* ==================================================================
   /courses/<slug> — a course's original address.

   A built-in course now lives at an address named for the city
   (/python-course-in-ludhiana); this one redirects there, permanently,
   so every link and every indexed result that points here still lands
   on the course. See data/courses/path.ts.

   A course created in the CMS has no such address and is served here,
   as it always was. So is a built-in course whose city address is
   already taken by a page written in the CMS.
================================================================== */

/*
  Allow on-demand rendering for slugs not known at build time.

  Without this, a course added in the CMS after the last deploy would
  404 immediately — Next.js would not even try to render it. With it,
  the first visitor triggers a render, and the result is cached for
  everyone after.
*/
export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = new Set(COURSE_INDEX.map((course) => course.slug))
  for (const slug of await cmsFetchSlugs('/courses')) slugs.add(slug)
  return [...slugs].map((slug) => ({ slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return courseMetadata(canonicalCourseSlug(slug))
}

export default async function CourseRoute({ params }: Props) {
  const { slug } = await params

  /* An alias ("python-programming"), or a CMS record that is the same
     course under another slug ("python2-programming"), is resolved
     first — so it redirects to the course's one address rather than
     being served a second time under a second name. */
  const canonical = canonicalCourseSlug(slug)
  const resolved = getCourseEntry(canonical)?.slug || canonical
  const address = await courseAddress(resolved)
  if (address !== legacyCoursePath(slug)) permanentRedirect(address)

  return <CourseRouteView slug={resolved} />
}
