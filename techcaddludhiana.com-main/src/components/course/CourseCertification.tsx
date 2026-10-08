'use client'

import Icon from './icons'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import './CourseCertification.css'

/* ------------------------------------------------------------------
   Certification.

   Mounted by the AI-layout pages only. The two certificates beside the
   copy are drawn in CSS rather than photographed: a picture of a
   certificate is a picture of somebody else's name, and a mock-up that
   has to be re-shot every time the wording changes is a mock-up that
   goes stale. Content comes from course.certification, which shared.js
   generates for every course.
------------------------------------------------------------------ */
function Certificate({ data, index }) {
  return (
    <article className="ccert-card" data-reveal style={{ '--d': `${160 + index * 90}ms` }}>
      <span className="ccert-card-kind">{data.kind}</span>

      <span className="ccert-mark" aria-hidden="true">
        <img src="/tece_new_logo.png" alt="" width="900" height="231" loading="lazy" decoding="async" />
      </span>

      <p className="ccert-card-award">This is to certify that</p>
      <span className="ccert-name-line" aria-hidden="true" />
      <p className="ccert-card-line">{data.line}</p>
      <p className="ccert-card-title">{data.title}</p>

      <footer className="ccert-card-foot">
        <span>
          Ref <b>{data.ref}</b>
        </span>
        <span className="ccert-sign" aria-hidden="true" />
      </footer>
    </article>
  )
}

export default function CourseCertification() {
  const course = useCourse()
  const sectionRef = useReveal()
  const cert = course.certification

  /* Same rule as the bands around it: no certificate copy, no band. */
  if (!cert) return null

  return (
    <section className="c-sec c-sec--paper ccert" id="course-certification" ref={sectionRef}>
      <div className="shell ccert-inner">
        <div className="ccert-copy">
          <div className="c-head" data-reveal>
            <p className="c-eyebrow">{cert.eyebrow}</p>
            <h2 className="c-title">{cert.title}</h2>
            <p className="c-lead">{cert.lead}</p>
          </div>

          <ul className="ccert-points">
            {cert.points.map((p, i) => (
              <li key={p.title} data-reveal style={{ '--d': `${80 + i * 60}ms` }}>
                <span className="ccert-point-icon" aria-hidden="true">
                  <Icon name={p.icon} size={18} />
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="ccert-note" data-reveal style={{ '--d': '340ms' }}>
            {cert.note}
          </p>
        </div>

        <div className="ccert-stack">
          {cert.certificates.map((c, i) => (
            <Certificate key={c.kind} data={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
