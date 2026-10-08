'use client'

import Icon from './icons'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import './CourseFuture.css'

/* ------------------------------------------------------------------
   Future scope.

   Two halves of the same question. The horizon on the left answers
   "what happens to me", year by year; the trend cards on the right
   answer "what happens to the field". Both come from course.future,
   which shared.js generates for every course.
------------------------------------------------------------------ */
export default function CourseFuture() {
  const course = useCourse()
  const sectionRef = useReveal()
  const { future } = course

  return (
    <section className="c-sec c-sec--paper cfut" id="course-future" ref={sectionRef}>
      <div className="shell">
        <div className="c-head" data-reveal>
          <p className="c-eyebrow">Future scope</p>
          <h2 className="c-title">{future.title}</h2>
          <p className="c-lead">{future.lead}</p>
        </div>

        <div className="cfut-grid">
          <ol className="cfut-horizon" data-reveal style={{ '--d': '80ms' }}>
            {future.horizon.map((step, i) => (
              <li key={step.when} style={{ '--i': i }}>
                <span className="cfut-when">{step.when}</span>
                <h3 className="cfut-step-title">{step.title}</h3>
                <p className="cfut-step-text">{step.text}</p>
              </li>
            ))}
          </ol>

          <ul className="cfut-trends">
            {future.trends.map((t, i) => (
              <li key={t.title} data-reveal style={{ '--d': `${140 + i * 70}ms` }}>
                <article className="cfut-card" data-cursor="Read">
                  <span className="cfut-icon" aria-hidden="true">
                    <Icon name={t.icon} size={20} />
                  </span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <div className="cfut-industries" data-reveal style={{ '--d': '160ms' }}>
          <p className="cfut-industries-label">{future.industriesNote}</p>
          <ul className="cfut-industries-list">
            {future.industries.map((name) => (
              <li key={name} className="c-chip">{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
