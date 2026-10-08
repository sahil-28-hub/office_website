'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { useCountUp } from '../../hooks/useAboutMotion'
import { DECADE, RECOGNITION } from '../../data/aboutPage'
import AboutIcon from './icons'
import './AboutRecognition.css'

function Figure({ stat, index }) {
  const [ref, value] = useCountUp(stat.to, 1300 + index * 180)

  return (
    <li data-reveal style={{ '--d': `${120 + index * 100}ms` }}>
      <strong ref={ref}>
        {value}
        <em>{stat.suffix}</em>
      </strong>
      <span>{stat.label}</span>
    </li>
  )
}

/* §12 — recognition, and §13 — the decade it was built over. Two dark
   bands that run together, as in the brief. */
export default function AboutRecognition() {
  const ref = useReveal()

  return (
    <section className="ap-dark ap-dark--deep ap-sec aprec" id="recognition" ref={ref}>
      <div className="shell">
        <div className="ap-head ap-head--center aprec-head">
          <p className="ap-eyebrow" data-reveal>{RECOGNITION.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{RECOGNITION.title}</h2>
          <p className="ap-lead" data-reveal style={{ '--d': '160ms' }}>{RECOGNITION.lead}</p>
        </div>

        <ul className="aprec-grid">
          {RECOGNITION.items.map((item, i) => (
            <li
              className="ap-panel ap-panel--hover aprec-card"
              key={item.title}
              data-reveal
              style={{ '--d': `${80 + (i % 2) * 100}ms` }}
            >
              <span className="ap-ico">
                <AboutIcon name={item.icon} />
              </span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              <span className="aprec-seal" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            </li>
          ))}
        </ul>

        <p className="aprec-note ap-note" data-reveal>{RECOGNITION.note}</p>

        {/* §13 — a decade of building careers */}
        <div className="ap-panel aprec-decade" data-reveal="scale" style={{ '--d': '120ms' }}>
          <div className="aprec-decade-copy">
            <p className="ap-eyebrow">{DECADE.eyebrow}</p>
            <h2 className="aprec-decade-title">{DECADE.title}</h2>
            <p className="aprec-decade-text">{DECADE.text}</p>
          </div>

          <ul className="aprec-figures">
            {DECADE.stats.map((stat, i) => (
              <Figure key={stat.label} stat={stat} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
