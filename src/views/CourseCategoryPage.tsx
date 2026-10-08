'use client'

import { useState } from 'react'
import { useReveal } from '../hooks/useCourseMotion'
import { useSpotlight } from '../hooks/useAboutMotion'
import '../components/kit/page-kit.css'
import './CourseCategoryPage.css'
import PageHero from '../components/kit/PageHero'
import PageIcon from '../components/kit/icons'
import SmartLink from '../components/common/SmartLink'
import Cta from '../components/sections/Cta'
import { courseImage, courseTone } from '../data/courseImages'
import { coursePath } from '../data/courses/catalog'
import {
  COURSE_CATEGORIES,
  categoryPath,
  categoryTitle,
  coursesIn,
  type CourseCategory
} from '../data/courseCategories'
import { MORE_CATEGORIES, moreCoursesPath } from '../data/moreCourses'
import { BRANCH_CITY } from '../data/branch'
import { ADDRESS_STREET } from '../data/contact'

/* ------------------------------------------------------------------
   A main category page — /courses/category/<slug>.

     §1  banner        "Programming Courses in Ludhiana"
     §2  the courses   one card each, straight from the catalogue
     §3  the others    every other category page
     §4  call the campus

   The cards are the catalogue's own — same class, same artwork, same
   blurb — so a course reads identically here and on /courses.
------------------------------------------------------------------ */

function CardArt({ slug }: { slug: string }) {
  const src = courseImage(slug)
  const [failed, setFailed] = useState(false)

  return (
    <div className="tc-course-art">
      {src && !failed && (
        <img src={src} alt="" aria-hidden="true" loading="lazy" decoding="async" onError={() => setFailed(true)} />
      )}
      <span className="tc-course-scrim" aria-hidden="true" />
    </div>
  )
}

export default function CourseCategoryPage({ category }: { category: CourseCategory }) {
  const ref = useReveal()
  const spotRef = useSpotlight('.tc-course')
  const courses = coursesIn(category)
  const tone = courseTone(category.key)

  /* every other category page, the hand-written ones included */
  const others = [
    ...COURSE_CATEGORIES.filter((entry) => entry.slug !== category.slug).map((entry) => ({
      label: categoryTitle(entry),
      href: categoryPath(entry.slug)
    })),
    ...MORE_CATEGORIES.map((entry) => ({
      label: `${entry.name} in ${BRANCH_CITY}`,
      href: moreCoursesPath(entry.slug)
    }))
  ]

  return (
    <div className="tc-page tc-page--category" ref={ref}>
      <main id="main">
        <PageHero
          eyebrow={`techcadd ${BRANCH_CITY}`}
          title={category.name}
          accent={`in ${BRANCH_CITY}`}
          lead={`${category.blurb} — taught at the techcadd centre at ${ADDRESS_STREET.split(', ').slice(-1)[0]}, ${BRANCH_CITY}, in classroom and online batches.`}
          image="/gallery/7.png"
          stats={undefined}
          facts={undefined}
          actions={[{ label: 'Book a free demo', href: '#demo' }]}
          id="category-top"
        />

        <section className="ap-light ap-sec" id="courses">
          <div className="shell" ref={spotRef}>
            <div className="ap-head" data-reveal>
              <p className="ap-eyebrow">The courses</p>
              <h2 className="ap-title">
                {category.name} <span className="ap-accent">we teach in {BRANCH_CITY}</span>
              </h2>
            </div>

            <ul className="tc-courses">
              {courses.map((course, i) => (
                <li key={course.slug} data-reveal="rise" style={{ '--d': `${Math.min(i, 10) * 45}ms` } as React.CSSProperties}>
                  <article className={`tc-course tone-${tone}`}>
                    <CardArt slug={course.slug} />

                    <div className="tc-course-body">
                      <h3>{course.name}</h3>
                      <p>{course.sub}</p>

                      <ul className="tc-course-chips">
                        {course.duration && (
                          <li>
                            <PageIcon name="clock" />
                            {course.duration}
                          </li>
                        )}
                        {course.level && (
                          <li>
                            <PageIcon name="layers" />
                            {course.level}
                          </li>
                        )}
                      </ul>

                      <SmartLink className="tc-course-more" href={coursePath(course.slug)}>
                        View course
                      </SmartLink>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ap-light ap-light--tint ap-sec" id="more-categories">
          <div className="shell">
            <div className="ap-head" data-reveal>
              <p className="ap-eyebrow">Other categories</p>
              <h2 className="ap-title">
                More courses <span className="ap-accent">in {BRANCH_CITY}</span>
              </h2>
            </div>

            <ul className="cat-links" data-reveal style={{ '--d': '80ms' } as React.CSSProperties}>
              {others.map((entry) => (
                <li key={entry.href}>
                  <SmartLink href={entry.href}>
                    {entry.label}
                    <PageIcon name="arrowRight" size={16} />
                  </SmartLink>
                </li>
              ))}
              <li>
                <SmartLink href="/courses">
                  All courses
                  <PageIcon name="arrowRight" size={16} />
                </SmartLink>
              </li>
            </ul>
          </div>
        </section>

        <Cta />
      </main>
    </div>
  )
}
