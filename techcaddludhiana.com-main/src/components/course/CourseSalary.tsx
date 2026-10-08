'use client'

import { useState } from 'react'
import Icon from './icons'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import './CourseSalary.css'

/* ------------------------------------------------------------------
   Salary outlook.

   Mounted by the AI-layout pages only. Two halves of the money
   question: the table says what the roles pay in three markets, and
   the five questions underneath cover what a table cannot — how fast
   it moves, whether remote work is real, who is actually hiring here.

   The table is a real <table>: the row header is the role and the
   column headers are the markets, which is exactly the relationship a
   screen reader needs to read a cell back usefully. Below 760px it
   becomes one card per role rather than a horizontally scrolling grid,
   since a salary table is the last thing anyone wants to swipe.
------------------------------------------------------------------ */
export default function CourseSalary() {
  const course = useCourse()
  const sectionRef = useReveal()
  const { salary } = course
  const [open, setOpen] = useState(0)

  /* Nothing to show, so no band. Every section on this page hides itself when
     its content is empty rather than printing a heading over a blank — a CMS
     course that has not filled this one in should not leave a gap where it
     would go. The check sits below every hook, so the component still calls
     the same hooks on every render. */
  if (!salary?.rows?.length) return null

  return (
    <section className="c-sec c-sec--dark csal" id="course-salary" ref={sectionRef}>
      <span className="c-grid-bg" aria-hidden="true" />

      <div className="shell">
        <div className="c-head" data-reveal>
          <p className="c-eyebrow">{salary.eyebrow}</p>
          <h2 className="c-title">{salary.title}</h2>
          <p className="c-lead">{salary.lead}</p>
        </div>

        <div className="csal-table-wrap" data-reveal style={{ '--d': '100ms' }}>
          <table className="csal-table">
            <caption className="csal-caption">
              Indicative annual packages by role and market
            </caption>
            <thead>
              <tr>
                <th scope="col">Role</th>
                {salary.regions.map((r) => (
                  <th scope="col" key={r}>{r}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {salary.rows.map((row) => (
                <tr key={row.role}>
                  <th scope="row">
                    <span className="csal-role">{row.role}</span>
                    <span className="csal-level">{row.level}</span>
                  </th>
                  {row.cells.map((cell, i) => (
                    <td key={salary.regions[i]} data-label={salary.regions[i]}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="csal-note" data-reveal style={{ '--d': '160ms' }}>
          <Icon name="star" size={15} />
          {salary.note}
        </p>

        <ul className="csal-qa">
          {salary.questions.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={item.q} data-reveal style={{ '--d': `${120 + i * 60}ms` }}>
                <div className={`csal-item${isOpen ? ' is-open' : ''}`}>
                  <h3>
                    <button
                      type="button"
                      className="csal-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`csal-panel-${i}`}
                      id={`csal-btn-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span className="csal-no">{String(i + 1).padStart(2, '0')}</span>
                      <span className="csal-q">{item.q}</span>
                      <span className="csal-sign" aria-hidden="true">
                        <Icon name={isOpen ? 'minus' : 'plus'} size={18} />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="csal-panel"
                    id={`csal-panel-${i}`}
                    role="region"
                    aria-labelledby={`csal-btn-${i}`}
                  >
                    <div className="csal-panel-inner">
                      <p>{item.a}</p>
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
