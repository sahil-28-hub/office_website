'use client'

import Icon from './icons'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import './CourseCompare.css'

/* ------------------------------------------------------------------
   techcadd against the alternative.

   A real <table>: the row header is the thing being compared and the
   two column headers are who is being compared, which is exactly the
   relationship a screen reader needs to read a cell back usefully.
   Below 760px it becomes one card per feature rather than a
   horizontally scrolling grid.

   The copy is generated in shared.js and deliberately compares process
   rather than claims — see the note there.
------------------------------------------------------------------ */
export default function CourseCompare() {
  const course = useCourse()
  const sectionRef = useReveal()
  const { compare } = course

  /* Nothing to show, so no band. Every section on this page hides itself when
     its content is empty rather than printing a heading over a blank — a CMS
     course that has not filled this one in should not leave a gap where it
     would go. The check sits below every hook, so the component still calls
     the same hooks on every render. */
  if (!compare?.rows?.length) return null

  return (
    <section className="c-sec c-sec--paper ccmp" id="course-compare" ref={sectionRef}>
      <div className="shell">
        <div className="c-head" data-reveal>
          <p className="c-eyebrow">{compare.eyebrow}</p>
          <h2 className="c-title">{compare.title}</h2>
          <p className="c-lead">{compare.lead}</p>
        </div>

        <div className="ccmp-wrap" data-reveal style={{ '--d': '100ms' }}>
          <table className="ccmp-table">
            <caption className="ccmp-caption">
              {compare.us} compared with a {compare.them.toLowerCase()}, feature by feature
            </caption>
            <thead>
              <tr>
                <th scope="col">What to ask about</th>
                <th scope="col" className="is-us">
                  <span className="ccmp-mark" aria-hidden="true">
                    <Icon name="check" size={14} />
                  </span>
                  {compare.us}
                </th>
                <th scope="col">{compare.them}</th>
              </tr>
            </thead>
            <tbody>
              {compare.rows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td className="is-us" data-label={compare.us}>
                    <span className="ccmp-tick" aria-hidden="true">
                      <Icon name="check" size={13} />
                    </span>
                    {row.us}
                  </td>
                  <td data-label={compare.them}>{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="ccmp-note" data-reveal style={{ '--d': '160ms' }}>
          {compare.note}
        </p>
      </div>
    </section>
  )
}
