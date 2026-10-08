'use client'

import Icon from './icons'
import SmartLink from '../common/SmartLink'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import { getRelatedCourses, coursePath } from '../../data/courses/catalog'
import './RelatedCourses.css'

/* The one section every course page was missing: a way out to other
   courses. Same-category picks first, backfilled from the rest of the
   catalogue — see getRelatedCourses(). This is also the only place on
   a course page that links to /courses itself. */
export default function RelatedCourses() {
  const course = useCourse()
  const sectionRef = useReveal()
  /*
    The editor's own picks when this course has them, and the automatic
    suggestion otherwise.

    `relatedIds` has been choosable in the CMS since the module was built and
    nothing dereferenced it, so a course whose editor had hand-picked three
    courses still showed whatever shared its category. The picks arrive
    resolved from the route — see `linkedContent` — and are shaped like the
    catalogue entries this already renders.
  */
  const chosen = course.relatedCourses as
    | { slug: string; name: string; sub?: string; duration?: string }[]
    | undefined

  const related = chosen?.length
    ? chosen.map((c) => ({
        slug: c.slug,
        name: c.name,
        /* The card prints a category chip and a blurb; a CMS course record
           carries the blurb but not the course's own category name, so the
           chip falls back to this course's. */
        category: course.category,
        short: c.sub || '',
        duration: c.duration || ''
      }))
    : getRelatedCourses(course.slug, 3)

  if (related.length === 0) return null

  return (
    <section className="c-sec c-sec--tint crel" id="related-courses" ref={sectionRef}>
      <div className="shell">
        <div className="c-head" data-reveal>
          <p className="c-eyebrow">Keep exploring</p>
          <h2 className="c-title">Related courses you might like</h2>
          <p className="c-lead">
            More programs in {course.category} and beyond, taught the same hands-on,
            mentor-led way.
          </p>
        </div>

        <ul className="crel-grid">
          {related.map((c, i) => (
            <li key={c.slug}>
              <SmartLink
                href={coursePath(c.slug)}
                className="crel-card"
                data-reveal
                style={{ '--d': `${i * 70}ms` }}
              >
                <span className="crel-tag">{c.category}</span>
                <h3 className="crel-name">{c.name}</h3>
                <p className="crel-text">{c.short}</p>
                <span className="crel-foot">
                  {c.duration && <span className="crel-duration">{c.duration}</span>}
                  <span className="c-arrow crel-arrow" aria-hidden="true">
                    <Icon name="arrowRight" />
                  </span>
                </span>
              </SmartLink>
            </li>
          ))}
        </ul>

        <SmartLink className="c-btn c-btn--line crel-all" href="/courses">
          View all courses
          <Icon name="arrowRight" />
        </SmartLink>
      </div>
    </section>
  )
}
