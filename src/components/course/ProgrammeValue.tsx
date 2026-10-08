'use client'

import { useState } from 'react'
import Icon from './icons'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import './ProgrammeValue.css'

export default function ProgrammeValue() {
  const course = useCourse()
  const sectionRef = useReveal()
  const [open, setOpen] = useState(0)

  return (
    <section className="c-sec c-sec--paper cval" id="course-value" ref={sectionRef}>
      <div className="shell cval-inner">
        <div className="cval-left">
          <p className="c-eyebrow" data-reveal>The case for it</p>
          <h2 className="cval-title" data-reveal style={{ '--d': '60ms' }}>
            {course.valueTitle}
          </h2>
          <p className="cval-text" data-reveal style={{ '--d': '120ms' }}>
            {course.valueText}
          </p>

          <div className="cval-stat" data-reveal style={{ '--d': '180ms' }}>
            <span className="cval-stat-num">{course.valueStat.num}</span>
            <span className="cval-stat-label">
              {course.valueStat.label}
              <em>{course.valueStat.sub}</em>
            </span>
          </div>
        </div>

        <ul className="cval-list">
          {course.valueItems.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={item.no} data-reveal style={{ '--d': `${80 + i * 70}ms` }}>
                <div className={`cval-item${isOpen ? ' is-open' : ''}`}>
                  <h3>
                    <button
                      type="button"
                      className="cval-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`cval-panel-${i}`}
                      id={`cval-btn-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span className="cval-no">{item.no}</span>
                      <span className="cval-name">{item.title}</span>
                      <span className="cval-sign" aria-hidden="true">
                        <Icon name={isOpen ? 'minus' : 'plus'} size={18} />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="cval-panel"
                    id={`cval-panel-${i}`}
                    role="region"
                    aria-labelledby={`cval-btn-${i}`}
                  >
                    <div className="cval-panel-inner">
                      <p>{item.text}</p>
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
