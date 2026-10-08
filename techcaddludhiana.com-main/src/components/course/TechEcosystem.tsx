'use client'

import { useEffect, useMemo, useState } from 'react'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import './TechEcosystem.css'

const RX = 37 /* horizontal radius, % of the stage */
const RY = 39 /* vertical radius, % of the stage */

export default function TechEcosystem() {
  const course = useCourse()
  const sectionRef = useReveal()
  const [active, setActive] = useState(null)

  useEffect(() => setActive(null), [course.slug])

  const nodes = useMemo(
    () =>
      course.technologies.map((t) => {
        const rad = (t.angle * Math.PI) / 180
        return {
          ...t,
          x: 50 + RX * Math.cos(rad),
          y: 50 + RY * Math.sin(rad)
        }
      }),
    [course.technologies]
  )


  /* Nothing to show, so no band. Every section on this page hides itself when
     its content is empty rather than printing a heading over a blank — a CMS
     course that has not filled this one in should not leave a gap where it
     would go. The check sits below every hook, so the component still calls
     the same hooks on every render. */
  if (!nodes.length) return null

  return (
    <section className="c-sec c-sec--dark ceco" id="course-stack" ref={sectionRef}>
      <span className="c-grid-bg" aria-hidden="true" />
      <span className="ceco-glow" aria-hidden="true" />

      <div className="shell">
        <div className="c-head c-head--center" data-reveal>
          <p className="c-eyebrow">Technology ecosystem</p>
          <h2 className="c-title">
            One discipline.
            <br />A mesh of real tools.
          </h2>
          <p className="c-lead">{course.stackLead}</p>
        </div>

        {/* ---------- desktop: interactive network ---------- */}
        <div className="ceco-stage" data-reveal style={{ '--d': '120ms' }}>
          <svg className="ceco-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {nodes.map((n, i) => (
              <line
                key={n.name}
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                className={`ceco-link${active === i ? ' is-lit' : ''}`}
                style={{ '--i': i }}
              />
            ))}
          </svg>

          <div className="ceco-core" aria-hidden="true">
            <span className="ceco-core-ring" />
            <span className="ceco-core-ring ceco-core-ring--slow" />
            <span className="ceco-core-face">
              <strong>{course.stackTitle}</strong>
              <em>{active === null ? course.stackNote : nodes[active].note}</em>
            </span>
          </div>

          <ul className="ceco-nodes">
            {nodes.map((n, i) => (
              <li
                key={n.name}
                className={`ceco-node${active === i ? ' is-active' : ''}`}
                style={{ left: `${n.x}%`, top: `${n.y}%`, '--i': i }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <button
                  type="button"
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  aria-describedby={`ceco-tip-${i}`}
                >
                  <span className="ceco-node-dot" aria-hidden="true" />
                  {n.name}
                </button>
                <span className="ceco-tip" id={`ceco-tip-${i}`} role="tooltip">
                  {n.note}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- mobile: plain grid ---------- */}
        <ul className="ceco-grid">
          {course.technologies.map((t, i) => (
            <li key={t.name} data-reveal style={{ '--d': `${i * 50}ms` }}>
              <span className="ceco-grid-name">{t.name}</span>
              <span className="ceco-grid-note">{t.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
