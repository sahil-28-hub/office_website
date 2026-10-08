'use client'

import Icon from './icons'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import './CareerOutcomes.css'

export default function CareerOutcomes() {
  const course = useCourse()
  const sectionRef = useReveal()

  /* Nothing to show, so no band. Every section on this page hides itself when
     its content is empty rather than printing a heading over a blank — a CMS
     course that has not filled this one in should not leave a gap where it
     would go. The check sits below every hook, so the component still calls
     the same hooks on every render. */
  if (!course.careers?.length) return null

  return (
    <section className="c-sec c-sec--paper ccar" id="course-careers" ref={sectionRef}>
      <div className="shell">
        <div className="c-head" data-reveal>
          <p className="c-eyebrow">Where it takes you</p>
          <h2 className="c-title">Where this course takes you</h2>
          <p className="c-lead">
            The route from your first module to the roles {course.short} opens —
            and the work that has to exist at each step.
          </p>
        </div>

        <ol className="ccar-path" data-reveal style={{ '--d': '80ms' }}>
          {course.careerPath.map((step, i) => (
            <li key={step} style={{ '--i': i }}>
              <span className="ccar-path-no">{String(i + 1).padStart(2, '0')}</span>
              <span className="ccar-path-label">{step}</span>
              {i < course.careerPath.length - 1 && (
                <span className="ccar-path-arrow" aria-hidden="true">
                  <Icon name="arrowRight" size={16} />
                </span>
              )}
            </li>
          ))}
        </ol>

        <ul className="ccar-grid">
          {course.careers.map((c, i) => (
            <li key={c.title}>
              <article
                className="ccar-card"
                data-reveal
                style={{ '--d': `${i * 60}ms` }}
                data-cursor="Explore"
              >
                <span className="ccar-icon" aria-hidden="true">
                  <Icon name={c.icon} size={20} />
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="c-arrow ccar-arrow" aria-hidden="true">
                  <Icon name="arrowUpRight" />
                </span>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
