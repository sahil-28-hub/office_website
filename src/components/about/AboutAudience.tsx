'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { AUDIENCE } from '../../data/aboutPage'
import AboutIcon from './icons'
import './AboutAudience.css'

/* §6 — six entry points into the same campus. */
export default function AboutAudience() {
  const ref = useReveal()

  return (
    <section className="ap-dark ap-sec apaud" id="who-we-teach" ref={ref}>
      <div className="shell">
        <div className="ap-head apaud-head">
          <p className="ap-eyebrow" data-reveal>{AUDIENCE.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{AUDIENCE.title}</h2>
          <p className="ap-lead" data-reveal style={{ '--d': '160ms' }}>{AUDIENCE.lead}</p>
        </div>

        <ul className="apaud-grid">
          {AUDIENCE.groups.map((group, i) => (
            <li
              className="ap-panel ap-panel--hover apaud-card"
              key={group.title}
              data-reveal
              style={{ '--d': `${80 + (i % 3) * 90}ms` }}
            >
              <header>
                <span className="ap-ico">
                  <AboutIcon name={group.icon} />
                </span>
                <span className="ap-no">{group.no}</span>
              </header>

              <h3>{group.title}</h3>
              <p>{group.text}</p>

              <span className="apaud-edge" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
