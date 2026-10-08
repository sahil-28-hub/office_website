'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { APPROACH } from '../../data/aboutPage'
import AboutIcon from './icons'
import './AboutApproach.css'

/* §10 — the three tests every module has to pass. */
export default function AboutApproach() {
  const ref = useReveal()

  return (
    <section className="ap-dark ap-dark--deep ap-sec apappr" id="approach" ref={ref}>
      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>{APPROACH.eyebrow}</p>

          <h2 className="apappr-title" data-reveal style={{ '--d': '80ms' }}>
            {APPROACH.lines.join('')}
            <span className="ap-accent">{APPROACH.accent}</span>
          </h2>

          <p className="ap-lead" data-reveal style={{ '--d': '180ms' }}>{APPROACH.lead}</p>
        </div>

        <div className="apappr-row">
          {APPROACH.pillars.map((pillar, i) => (
            <article
              className="apappr-pillar"
              key={pillar.title}
              data-reveal
              style={{ '--d': `${120 + i * 110}ms` }}
            >
              <span className="ap-ico">
                <AboutIcon name={pillar.icon} />
              </span>
              <span className="ap-no">{pillar.no}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
