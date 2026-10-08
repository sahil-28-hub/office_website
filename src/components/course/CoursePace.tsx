'use client'

import { useState } from 'react'
import Icon from './icons'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import './CoursePace.css'

/* ------------------------------------------------------------------
   What you can do, phase by phase.

   Three phase cards over a capability matrix. Every row is one skill
   from the syllabus, ticked in the phase it is taught in and in every
   phase after it — all derived in shared.js from the same module data
   the roadmap section renders, so the two can never disagree.

   On desktop the matrix is a real <table> with three tick columns. On
   a phone three columns of ticks is unreadable, so the phase cards
   become a selector and the matrix collapses to a single list of what
   the selected phase covers — which is what someone on a phone wanted
   to know anyway.
------------------------------------------------------------------ */
export default function CoursePace() {
  const course = useCourse()
  const sectionRef = useReveal()
  const { tracks } = course
  const [phase, setPhase] = useState(tracks.phases.length - 1)

  /* Nothing to show, so no band. Every section on this page hides itself when
     its content is empty rather than printing a heading over a blank — a CMS
     course that has not filled this one in should not leave a gap where it
     would go. The check sits below every hook, so the component still calls
     the same hooks on every render. */
  if (!tracks?.phases?.length || !tracks?.rows?.length) return null

  return (
    <section className="c-sec c-sec--tint cpace" id="course-pace" ref={sectionRef}>
      <div className="shell">
        <div className="c-head" data-reveal>
          <p className="c-eyebrow">{tracks.eyebrow}</p>
          <h2 className="c-title">{tracks.title}</h2>
          <p className="c-lead">{tracks.lead}</p>
        </div>

        <ul className="cpace-cards" role="tablist" aria-label="Course phases">
          {tracks.phases.map((p, i) => {
            const active = phase === i
            return (
              <li key={p.key} data-reveal style={{ '--d': `${80 + i * 70}ms` }}>
                <button
                  type="button"
                  role="tab"
                  id={`cpace-tab-${i}`}
                  aria-selected={active}
                  aria-controls="cpace-matrix"
                  className={`cpace-card${active ? ' is-active' : ''}`}
                  onClick={() => setPhase(i)}
                >
                  <span className="cpace-no">{String(i + 1).padStart(2, '0')}</span>
                  <span className="cpace-name">{p.name}</span>
                  <span className="cpace-span">
                    {p.span}
                    {p.when && <em>{p.when}</em>}
                  </span>
                  <span className="cpace-blurb">{p.blurb}</span>
                  <span className="cpace-count">
                    <b>{p.count}</b> capabilities
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <div className="cpace-wrap" id="cpace-matrix" data-reveal style={{ '--d': '220ms' }}>
          <table className="cpace-table" data-phase={phase}>
            <caption className="cpace-caption">
              Every capability in the {course.short} syllabus, and the phase it is covered in
            </caption>
            <thead>
              <tr>
                <th scope="col">Capability</th>
                {tracks.phases.map((p, i) => (
                  <th scope="col" key={p.key} className={phase === i ? 'is-active' : undefined}>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tracks.rows.map((row) => (
                <tr key={`${row.module}-${row.label}`} data-in={row.in[phase] ? 'yes' : 'no'}>
                  <th scope="row">
                    <span className="cpace-label">{row.label}</span>
                    <span className="cpace-module">{row.module}</span>
                  </th>
                  {row.in.map((yes, i) => (
                    <td key={tracks.phases[i].key} className={phase === i ? 'is-active' : undefined}>
                      {yes ? (
                        <>
                          <span className="cpace-yes" aria-hidden="true">
                            <Icon name="check" size={13} />
                          </span>
                          <span className="cpace-sr">Covered in {tracks.phases[i].name}</span>
                        </>
                      ) : (
                        <>
                          <span className="cpace-no-mark" aria-hidden="true">–</span>
                          <span className="cpace-sr">Not yet covered in {tracks.phases[i].name}</span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="cpace-note" data-reveal style={{ '--d': '280ms' }}>
          {tracks.note}
        </p>
      </div>
    </section>
  )
}
