'use client'

import Icon from './icons'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import './CourseWhy.css'

/* ==================================================================
   "Why TechCadd" — the institute, not the course.

   CourseBenefits, further up, argues for the subject: why learn this
   thing at all. This band answers the question that follows it — why
   learn it here — and the two are deliberately separate, because a
   reader who is already sold on the subject is asking only the second.

   ENTIRELY CMS-DRIVEN, AND ONLY RECENTLY VISIBLE

   `whyPoints` and `whyIntro` have been editable in the CMS, saved to
   `course_points` under kind 'why-techcadd', and returned by the API
   for as long as the module has existed — with nothing on the website
   reading them. An editor could fill the section in and find no trace
   of it on the page. There is no generated fallback here on purpose:
   an institute's own case for itself is not something to invent from
   a course name, so a course with no points written renders nothing.
================================================================== */

/* Normalised by courseFromCms, like every other card list on this page:
   the CMS column is `body`, the components all read `text`. */
type WhyPoint = { title?: string; text?: string; icon?: string }

export default function CourseWhy() {
  const course = useCourse()
  const sectionRef = useReveal()

  const points: WhyPoint[] = (course.whyPoints || []).filter((p: WhyPoint) => p?.title)
  if (!points.length) return null

  return (
    <section className="c-sec cwhy" id="course-why-techcadd" ref={sectionRef}>
      <div className="shell">
        <div className="c-head" data-reveal>
          <p className="c-eyebrow">Why TechCadd</p>
          <h2 className="c-title">Why students choose us for this</h2>
          {course.whyIntro && <p className="c-lead">{course.whyIntro}</p>}
        </div>

        <ul className="cwhy-grid">
          {points.map((point, i) => (
            <li key={point.title}>
              <article className="cwhy-card" data-reveal style={{ '--d': `${i * 70}ms` }}>
                {/* The icon name is a free-text CMS field, so it can name
                    a glyph the set does not have. `Icon` draws nothing
                    for an unknown name, and the badge stays empty rather
                    than showing a broken mark. */}
                <span className="cwhy-icon" aria-hidden="true">
                  <Icon name={point.icon || 'check'} size={20} />
                </span>
                <h3 className="cwhy-title">{point.title}</h3>
                {point.text && <p className="cwhy-text">{point.text}</p>}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
