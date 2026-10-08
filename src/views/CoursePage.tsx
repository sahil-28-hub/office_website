'use client'

import { Fragment, useEffect, useMemo, useState } from 'react'
import '../components/course/course-base.css'
import { CourseProvider } from '../components/course/CourseContext'
import CourseHero from '../components/course/CourseHero'
import CourseSessionStrip from '../components/course/CourseSessionStrip'
import CourseSectionNav from '../components/course/CourseSectionNav'
import CourseOverview from '../components/course/CourseOverview'
import CourseNarrative from '../components/course/CourseNarrative'
import LearningRoadmap from '../components/course/LearningRoadmap'
import WhoCanJoin from '../components/course/WhoCanJoin'
import CourseBenefits from '../components/course/CourseBenefits'
import CourseWhy from '../components/course/CourseWhy'
import CourseLearn from '../components/course/CourseLearn'
import CourseFuture from '../components/course/CourseFuture'
import TechEcosystem from '../components/course/TechEcosystem'
import CourseCertification from '../components/course/CourseCertification'
import CourseProjects from '../components/course/CourseProjects'
import CareerOutcomes from '../components/course/CareerOutcomes'
import CourseSalary from '../components/course/CourseSalary'
import CourseCompare from '../components/course/CourseCompare'
import CoursePace from '../components/course/CoursePace'
import ProgrammeValue from '../components/course/ProgrammeValue'
import CourseFAQ from '../components/course/CourseFAQ'
import CourseEnquiry from '../components/course/CourseEnquiry'
import RelatedCourses from '../components/course/RelatedCourses'
import Community from '../components/sections/Community'
import FloatingCourseCTA from '../components/course/FloatingCourseCTA'
import CourseNotFound from '../components/course/CourseNotFound'
import CoursePageSkeleton from '../components/course/CoursePageSkeleton'
import { getCourseEntry } from '../data/courses/catalog'
import Cta from '../components/sections/Cta'
import { mergeCourse } from '../lib/courseFromCms'
import { orderBands } from '../lib/courseSectionOrder'

/* ------------------------------------------------------------------
   One page for every course. The slug picks which course object fills
   it, and every course gets the same running order — the group's
   course layout, spelled out where the bands are listed below. The
   running order IS the design decision here, so it is written as one
   readable list rather than assembled from configuration.

   It runs: what the course is -> what it contains -> why this one ->
   whether it is for me -> what I will use -> what I leave with ->
   where it leads -> how it compares -> other people's experience ->
   the objections -> enquire.

   "Who can join" sits where the technology-ecosystem orbit used to
   be. The question the orbit was answering was never the one visitors
   were asking at that point in the page.

   The breadcrumb strip that used to open the page is gone: the hero
   is the first thing on screen now.

   CourseNarrative is mounted at three named slots and renders nothing
   unless the course carries editorial copy for that slot, so a course
   with none gets exactly the running order above.
------------------------------------------------------------------ */
/**
 * @param cmsOverlay only the fields the CMS holds a value for, spread
 *   over the seed below. Sparse on purpose — see courseFromCms.ts.
 * @param cmsCourse a complete course built from the CMS alone, set only
 *   when no seed exists for this slug. Before this existed, a course
 *   added in the CMS showed on /courses and led to "course not found".
 */
export default function CoursePage({
  slug,
  cmsOverlay,
  cmsCourse,
  initialSeed,
  cmsOnly = false
}: {
  slug: string
  cmsOverlay?: Record<string, any> | null
  cmsCourse?: Record<string, any> | null
  /** The registry's entry for this slug, when the server already has it. */
  initialSeed?: Record<string, any> | null
  /** Render `cmsCourse` as it is, even though a built-in course shares the
   *  slug — the CMS record is the page. See CMS_SOURCE_FOR. */
  cmsOnly?: boolean
}) {

  /* The light catalogue answers immediately and costs ~20KB: it knows
     this course exists, and its name, duration, level and mode. That is
     enough to paint a real hero and a correct <title> on the first
     frame. */
  const entry = getCourseEntry(slug)

  /* The full object lives in the registry, which is the whole
     catalogue and a little over a megabyte. It is fetched on demand
     rather than statically imported, because a static import meant
     nothing painted at all until it landed — a blank page for several
     seconds on a slow connection, and then everything at once. That is
     the "sections don't load until I refresh" report: the second visit
     had the chunk in cache.

     `undefined` means still loading; `null` means the registry
     answered and there is no such course.

     Seeded from `entry` rather than always `undefined`: a course that
     exists only in the CMS is not in the catalogue, so there is no
     registry to wait for and no reason to show a skeleton before
     rendering what the server already sent.

     Seeded from `initialSeed` before either: the route already calls
     `getCourse(slug)` to decide what to put in the page's metadata, so
     for a request that arrives at the server the answer is in hand
     before this component runs. Passing it in costs one course in the
     payload — not the megabyte the registry weighs, which is the whole
     catalogue — and it is what puts the course, and the CMS's edits
     over it, into the server-rendered HTML. Without it every course
     page served a skeleton and filled itself in after hydration, so
     none of the CMS's content was in the document a crawler reads. */
  const [seed, setSeed] = useState(cmsOnly ? null : initialSeed ?? (entry ? undefined : null))

  useEffect(() => {
    let alive = true

    /* Already have it from the server. */
    if (initialSeed || cmsOnly) return undefined

    /* No slug in the catalogue at all — no point fetching a megabyte
       to be told the same thing. `cmsCourse` covers this case now. */
    if (!entry) {
      setSeed(null)
      return undefined
    }

    setSeed(undefined)

    import('../data/courses/index')
      .then((m) => {
        if (alive) setSeed(m.getCourse(slug) || null)
      })
      .catch(() => {
        if (alive) setSeed(null)
      })

    return () => {
      alive = false
    }
  }, [slug, entry, initialSeed, cmsOnly])

  /*
    The seed, with the CMS's edits over it.

    This direction, and not the other: the seeds carry long-form copy
    written for search, and `cmsOverlay` deliberately contains only the
    fields an editor has actually filled in — so a duration changed in
    the CMS changes the duration and leaves the narrative alone.
  */
  const course = useMemo(() => {
    if (seed === undefined) return undefined
    if (seed) return mergeCourse(seed, cmsOverlay)
    /* No seed for this slug. Either the CMS has the whole course, or
       there is genuinely no such course. */
    return cmsCourse || null
  }, [seed, cmsOverlay, cmsCourse])

  /* Still fetching the registry. The hero underneath is real — only
     the bands below it are placeholders. */
  if (course === undefined) return <CoursePageSkeleton entry={entry} />

  if (!course) {
    return (
      <div className="course-page">
        <CourseNotFound slug={slug} />
      </div>
    )
  }

  /*
    The page's bands, each tagged with the anchor it renders, so the
    editor's saved order and hidden list have something to name. See
    lib/courseSectionOrder.ts — the prose blocks travel with the band they
    annotate rather than being reorderable on their own.
  */
  /*
    One running order for every course — the group's course layout:

      hero · session strip · section nav · overview · curriculum ·
      why · who · tools · certificates · career scope · compare ·
      reviews · FAQs · enquiry · final CTA

    There used to be two lists here, a long one for the courses with
    written-for-search copy and a short one for the rest. They are one
    now: every band already returns nothing when its course carries no
    content for it, so a thinner course gets a shorter page from the
    same list rather than from a second one that had to be kept in step.

    The strip and the section nav are not in this list. They are fixed
    furniture directly under the hero, not bands an editor reorders —
    see the render below.
  */
  const allBands = [
    { id: 'course-top', node: <CourseHero /> },
    /* overview */
    { id: 'course-overview', node: <CourseOverview /> },
    { id: 'narrative-overview', node: <CourseNarrative slot="overview" /> },
    /* curriculum */
    { id: 'course-roadmap', node: <LearningRoadmap /> },
    { id: 'narrative-syllabus', node: <CourseNarrative slot="syllabus" /> },
    { id: 'course-learn', node: <CourseLearn /> },
    { id: 'course-pace', node: <CoursePace /> },
    /* why */
    { id: 'course-value', node: <ProgrammeValue /> },
    { id: 'course-benefits', node: <CourseBenefits /> },
    { id: 'course-why-techcadd', node: <CourseWhy /> },
    /* who */
    { id: 'course-who', node: <WhoCanJoin /> },
    /* tools */
    { id: 'course-stack', node: <TechEcosystem /> },
    { id: 'course-projects', node: <CourseProjects /> },
    /* certificates */
    { id: 'course-certification', node: <CourseCertification /> },
    /* career scope */
    { id: 'course-careers', node: <CareerOutcomes /> },
    { id: 'course-salary', node: <CourseSalary /> },
    { id: 'narrative-careers', node: <CourseNarrative slot="careers" /> },
    { id: 'course-future', node: <CourseFuture /> },
    /* compare */
    { id: 'course-compare', node: <CourseCompare /> },
    /* reviews — the home page's reviews wall, unchanged in design,
       filled with this course's own testimonials */
    {
      id: 'course-reviews',
      node: (
        <Community
          items={course.testimonials}
          title={<>What <span className="cm-title-accent">{course.short}</span> learners say</>}
          sub={`Feedback from students who completed the ${course.short} programme at techcadd Ludhiana.`}
        />
      )
    },
    { id: 'course-faq', node: <CourseFAQ /> },
    { id: 'course-enquire', node: <CourseEnquiry /> },
  ]

  const [hero, ...bands] = orderBands(allBands, course)

  return (
    <CourseProvider course={course}>
      <div className="course-page" data-course={course.slug}>

        <main id="main">
          {hero.node}
          <CourseSessionStrip />
          {/* A direct child of <main>, so it sticks for the whole page:
              sticky is bounded by its parent. It finds the bands below
              by their ids. */}
          <CourseSectionNav />
          {bands.map((band) => (
            <Fragment key={band.id}>{band.node}</Fragment>
          ))}
          <RelatedCourses />
          <Cta />
        </main>

        <FloatingCourseCTA />
      </div>
    </CourseProvider>
  )
}
