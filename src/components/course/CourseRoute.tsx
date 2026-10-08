/* ==================================================================
   One course page, for whichever route serves it.

   A course is reachable at two addresses — the one named for the city
   (/python-course-in-ludhiana, served by app/[slug]) and the original
   (/courses/python, served by app/courses/[slug], which redirects to
   the first). Both routes render through here, so the metadata, the
   structured data and the page itself cannot differ between them.
================================================================== */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CoursePage from '@/views/CoursePage'
import JsonLd from '@/components/seo/JsonLd'
import { faqPageSchema, courseSchema, breadcrumbSchema } from '@/lib/structuredData'
import { getCourseEntry } from '@/data/courses/catalog'
import { CMS_SOURCE_FOR, COURSE_SEO_SLUG, legacyCoursePath } from '@/data/courses/path'
import { getCourse } from '@/data/courses/index'
import { courseImage } from '@/data/courseImages'
import { BRANCH_CITY, BRANCH_TOWNS } from '@/data/branch'
import { categoryForKey, categoryPath, categoryTitle } from '@/data/courseCategories'
import { cmsFetchAll, cmsFetchList, cmsFetchRecord } from '@/lib/cms.server'
import { courseOverlay, courseFromCms, mergeCourse } from '@/lib/courseFromCms'
import { mapFaq, mapReview, mapTestimonial } from '@/lib/cms'

/**
 * The FAQs, reviews and related courses an editor attached to this course.
 *
 * A course record carries none of them directly — it carries `faqIds`,
 * `reviewIds` and `relatedIds` pointing into the FAQ, Review and Course
 * modules, so one question or one student's words can be attached to several
 * courses without being retyped, and editing the record itself updates every
 * course showing it. Nothing on the site had ever dereferenced those ids, so
 * choosing FAQs for a course in the CMS changed nothing on its page.
 *
 * Fetched only when the record names some, and kept in the order the editor
 * arranged them rather than the order the list endpoints happen to return.
 */
async function linkedContent(record: Record<string, any> | null) {
  const faqIds: string[] = record?.faqIds ?? []
  const reviewIds: string[] = record?.reviewIds ?? []
  const relatedIds: string[] = record?.relatedIds ?? []
  if (!faqIds.length && !reviewIds.length && !relatedIds.length) return {}

  const [faqRows, testimonialRows, reviewRows, courseRows] = await Promise.all([
    faqIds.length ? cmsFetchAll('/faqs', { map: mapFaq }) : [],
    reviewIds.length ? cmsFetchList('/testimonials', { map: mapTestimonial, limit: 100 }) : [],
    reviewIds.length ? cmsFetchList('/reviews', { map: mapReview, limit: 100 }) : [],
    relatedIds.length ? cmsFetchList('/courses', { map: (c: any) => c, limit: 100 }) : [],
  ])

  /* In the editor's order. An id that no longer resolves — the record was
     deleted, or unpublished since — drops out rather than leaving a hole. */
  const pick = <T extends { id?: string }>(rows: T[], ids: string[]) => {
    const byId = new Map(rows.map((row) => [row.id, row]))
    return ids.map((id) => byId.get(id)).filter(Boolean) as T[]
  }

  const faqs = pick(faqRows ?? [], faqIds)
  const voices = pick([...(testimonialRows ?? []), ...(reviewRows ?? [])], reviewIds)
  const related = pick(courseRows ?? [], relatedIds).map((c: any) => ({
    slug: c.slug,
    name: c.title,
    sub: c.shortDescription || c.tagline || '',
    duration: c.duration || '',
  }))

  return {
    ...(faqs.length ? { faqs } : {}),
    ...(voices.length ? { testimonials: voices } : {}),
    ...(related.length ? { relatedCourses: related } : {}),
  }
}

async function resolveCourse(slug: string) {
  /* A built-in course paired with a CMS record of another name takes
     its content from that record — see CMS_SOURCE_FOR. The record under
     the course's own slug is the fallback, for a pair whose CMS half
     has been unpublished. */
  const source = CMS_SOURCE_FOR[slug]
  const [seed, paired, own] = await Promise.all([
    Promise.resolve(getCourse(slug)),
    source ? cmsFetchRecord(`/courses/${encodeURIComponent(source)}`) : null,
    cmsFetchRecord(`/courses/${encodeURIComponent(slug)}`),
  ])
  /*
    A paired course is built from its CMS record and nothing else.

    It used to be laid over the built-in seed, field by field — and the
    result was a page that was half one course and half another: the
    CMS's heading and syllabus under the seed's title tag and long copy.
    "Basic Computer" opened as "Computer & MS Excel Course After 12th".
    An editor pressing "View on site" should see the course they wrote,
    so the record is the page; only the slug is the built-in one, which
    is what gives it the course's address.
  */
  if (paired) {
    const pairedCourse = courseFromCms(paired)
    if (pairedCourse) {
      const linkedToPaired = await linkedContent(paired)
      return {
        course: { ...mergeCourse(pairedCourse, linkedToPaired), slug },
        overlay: null,
        fromCms: true,
        cmsOnly: true,
      }
    }
  }

  const record = paired || own

  /* The linked records join the overlay, so they merge over the generated
     ones exactly like every other CMS field. */
  const linked = await linkedContent(record)
  const overlay = courseOverlay(record)
  if (overlay) Object.assign(overlay, linked)

  if (seed) {
    return { course: mergeCourse(seed, overlay), overlay, fromCms: Boolean(record), cmsOnly: false }
  }

  /*
    A course with no bundled seed builds itself from the record, and
    `courseFromCms` only ever sees the record — not the FAQ, review and course
    rows fetched above from the ids on it. Without this second merge every
    CMS-only course fell back to the generated questions, the site-wide review
    wall and the automatic related list, however carefully its editor had
    chosen them.
  */
  const cmsCourse = courseFromCms(record)
  return {
    course: cmsCourse ? mergeCourse(cmsCourse, linked) : cmsCourse,
    overlay,
    fromCms: Boolean(record),
    cmsOnly: false,
  }
}

/**
 * Where a course's page really is.
 *
 * The address named for the city when the course has one — unless a page
 * written in the CMS already sits there, in which case that page keeps
 * the address and the course keeps /courses/<slug>. Asked at request
 * time, so an editor publishing a page at one of these addresses does
 * not strand the course behind a redirect to somebody else's page.
 */
export async function courseAddress(slug: string) {
  const seo = COURSE_SEO_SLUG[slug]
  if (!seo) return legacyCoursePath(slug)

  const page = await cmsFetchRecord(`/pages/${encodeURIComponent(seo)}`)
  return page ? legacyCoursePath(slug) : `/${seo}`
}

/** The <head> for a course page, whichever address it is served at. */
export async function courseMetadata(slug: string): Promise<Metadata> {
  const { course } = await resolveCourse(slug)

  if (!course) {
    const entry = getCourseEntry(slug)
    return {
      title: entry ? `${entry.name} in Ludhiana — techcadd` : 'Course not found — techcadd',
      robots: { index: false, follow: true },
    }
  }

  /* The layout's template appends "| techcadd" to every title. The
     course titles were written with the brand already on the end, so
     the tab read "… | techcadd | techcadd". The brand is taken off here
     and put back once, by the template. */
  /* A course already named for its city ("Data Science Course in
     Ludhiana") is not given the city a second time. */
  const named = String(course.name).toLowerCase().includes(String(course.city).toLowerCase())
    ? course.name
    : `${course.name} in ${course.city}`
  const title = String(course.metaTitle || named).replace(
    /\s*[|—–-]\s*techcadd\s*$/i,
    ''
  )
  const description = course.metaDescription || course.overviewLead
  const image = course.heroArt || courseImage(course.slug)

  /* The phrasings people actually search with, for this course in
     this city — "python course in ludhiana", "python training
     ludhiana", "python institute near me". Built from the course's own
     short name. */
  const subject = String(course.short || course.name).replace(/\s+(course|programme|program|training)$/i, '')
  const city = course.city || BRANCH_CITY
  const keywords = [
    `${subject} course in ${city}`,
    `${subject} training in ${city}`,
    `${subject} classes in ${city}`,
    `${subject} institute in ${city}`,
    `best ${subject} course in ${city}`,
    `${subject} course near me`,
    ...BRANCH_TOWNS.filter((town) => town !== city).map((town) => `${subject} course near ${town}`),
  ]

  return {
    title,
    description,
    keywords,
    alternates: { canonical: await courseAddress(course.slug) },
    openGraph: {
      title,
      description,
      images: [image || '/tece_new_logo.png'],
    },
  }
}

/** The course page itself, with its structured data. */
export async function CourseRouteView({ slug }: { slug: string }) {
  const { course, overlay, cmsOnly } = await resolveCourse(slug)
  const address = course ? await courseAddress(course.slug) : legacyCoursePath(slug)
  /* a course rendered from its CMS record alone has no seed to merge */
  const hasSeed = !cmsOnly && Boolean(getCourse(slug))

  /* A slug with no seed AND no CMS record is genuinely not found.
     Return a proper 404 so crawlers and CDN caches treat it correctly,
     rather than rendering a 200 with a "not found" message. */
  if (!course && !hasSeed) notFound()

  return (
    <>
      {course && (
        <>
          <JsonLd
            data={courseSchema({
              ...course,
              path: address,
              image: course.heroArt || courseImage(course.slug),
              teaches: (course.technologies ?? []).map((tech: any) => tech?.name).filter(Boolean),
            })}
          />
          {/* The questions the page prints, as FAQPage — the form an
              answer engine quotes from. Only what is actually on the
              page: marking up questions a visitor cannot see is the
              thing the guidelines forbid. */}
          {course.faqs?.length > 0 && (
            <JsonLd
              data={faqPageSchema(
                course.faqs
                  .filter((faq: any) => faq?.q && faq?.a)
                  .map((faq: any) => ({ q: faq.q, a: String(faq.a).replace(/<[^>]*>/g, ' ').trim() }))
              )}
            />
          )}
          <JsonLd
            data={breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Courses', url: '/courses' },
              ...(categoryForKey(course.category)
                ? [
                    {
                      name: categoryTitle(categoryForKey(course.category)!),
                      url: categoryPath(categoryForKey(course.category)!.slug),
                    },
                  ]
                : []),
              { name: course.name, url: address },
            ])}
          />
        </>
      )}
      <CoursePage
        slug={slug}
        cmsOverlay={overlay}
        cmsCourse={hasSeed ? null : course}
        /* `getCourse` has already run twice above — for the metadata
           and for `hasSeed` — so handing the result down costs nothing
           here and saves the view from fetching the registry in the
           browser before it can render anything. */
        initialSeed={cmsOnly ? null : getCourse(slug) || null}
        cmsOnly={cmsOnly}
      />
    </>
  )
}
