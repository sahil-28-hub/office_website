'use client'

import Icon from './icons'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import './CourseBenefits.css'

export default function CourseBenefits() {
  const course = useCourse()
  const sectionRef = useReveal()

  return (
    <section className="c-sec c-sec--tint cben" id="course-benefits" ref={sectionRef}>
      <div className="shell">
        <div className="c-head" data-reveal>
          <p className="c-eyebrow">Why this course</p>
          <h2 className="c-title">Why should you choose this course?</h2>
          <p className="c-lead">
            Six things we hold ourselves to for every {course.short} batch that
            starts in {course.city}.
          </p>
        </div>

        <ul className="cben-grid">
          {course.benefits.map((b, i) => (
            <li key={b.no}>
              <article
                className="cben-card"
                data-reveal
                style={{ '--d': `${i * 70}ms` }}
                data-cursor="Read"
              >
                <span className="cben-no">{b.no}</span>
                <span className="cben-icon" aria-hidden="true">
                  <Icon name={b.icon} size={22} />
                </span>
                <h3 className="cben-title">{b.title}</h3>
                <p className="cben-text">{b.text}</p>
                <span className="c-arrow cben-arrow" aria-hidden="true">
                  <Icon name="arrowRight" />
                </span>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
