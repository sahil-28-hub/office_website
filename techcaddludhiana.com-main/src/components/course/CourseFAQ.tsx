'use client'

import { useEffect, useState } from 'react'
import Icon from './icons'
import RichText from './RichText'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import './CourseFAQ.css'

/* Questions only. The section used to carry a sticky panel of copy on
   the left; the enquiry form now sits directly above it, so that panel
   was repeating a call to action the visitor had just scrolled past.

   It kept the empty column for a while after that, which left the
   section opening on nothing — it now carries a plain heading instead,
   the same one every other section on the page has. */
export default function CourseFAQ() {
  const course = useCourse()
  const sectionRef = useReveal()
  const [open, setOpen] = useState(0)

  useEffect(() => setOpen(0), [course.slug])

  return (
    <section className="c-sec c-sec--paper cfaq" id="course-faq" ref={sectionRef}>
      <div className="shell cfaq-inner">
        <div className="c-head c-head--center cfaq-head" data-reveal>
          <p className="c-eyebrow">Frequently asked questions</p>
          <h2 className="c-title">Questions before you enrol</h2>
          <p className="c-lead">
            The {course.faqs.length} things people ask most often about the{' '}
            {course.short} course at techcadd {course.city}.
          </p>
        </div>

        <ul className="cfaq-list">
          {course.faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={item.q} data-reveal style={{ '--d': `${i * 45}ms` }}>
                <div className={`cfaq-item${isOpen ? ' is-open' : ''}`}>
                  <h3>
                    <button
                      type="button"
                      id={`cfaq-btn-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`cfaq-panel-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span>{item.q}</span>
                      <span className="cfaq-sign" aria-hidden="true">
                        <Icon name="chevron" size={18} />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="cfaq-panel"
                    id={`cfaq-panel-${i}`}
                    role="region"
                    aria-labelledby={`cfaq-btn-${i}`}
                  >
                    {/* through RichText, so an answer on a page written
                        to rank marks its terms the same way the rest of
                        the copy does. An answer with none is unchanged. */}
                    <div className="cfaq-panel-inner">
                      <RichText text={item.a} />
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
