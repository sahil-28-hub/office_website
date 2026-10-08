'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { ECOSYSTEM } from '../../data/aboutPage'
import AboutIcon from './icons'
import Shot from './Shot'
import './AboutEcosystem.css'

/* §4 — the ecosystem: copy on the left, a photo with a glass panel
   riding over its corner on the right, the four parts beneath. */
export default function AboutEcosystem() {
  const ref = useReveal()

  return (
    <section className="ap-dark ap-sec apeco" id="ecosystem" ref={ref}>
      <div className="shell">
        <div className="apeco-top">
          <div className="apeco-copy" data-reveal="left">
            <p className="ap-eyebrow">{ECOSYSTEM.eyebrow}</p>
            <h2 className="ap-title">{ECOSYSTEM.title}</h2>
            <div className="ap-body">
              {ECOSYSTEM.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="apeco-media" data-reveal="right" style={{ '--d': '120ms' }}>
            <Shot photo={ECOSYSTEM.photo} className="apeco-shot" />

            <div className="ap-panel apeco-panel">
              <span className="ap-ico">
                <AboutIcon name="mentor" />
              </span>
              <span className="apeco-panel-body">
                <small>{ECOSYSTEM.panel.k}</small>
                <b>{ECOSYSTEM.panel.v}</b>
                <i>{ECOSYSTEM.panel.note}</i>
              </span>
            </div>
          </div>
        </div>

        <ul className="apeco-pillars">
          {ECOSYSTEM.pillars.map((pillar, i) => (
            <li
              className="ap-panel ap-panel--hover apeco-pillar"
              key={pillar.title}
              data-reveal
              style={{ '--d': `${100 + i * 90}ms` }}
            >
              <span className="ap-ico">
                <AboutIcon name={pillar.icon} />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <span className="apeco-index">{String(i + 1).padStart(2, '0')}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
