'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { INDUSTRY } from '../../data/aboutPage'
import AboutIcon from './icons'
import Shot from './Shot'
import './AboutIndustry.css'

/* §11 — connecting education with industry. */
export default function AboutIndustry() {
  const ref = useReveal()

  return (
    <section className="ap-light ap-sec apind" id="industry" ref={ref}>
      <div className="shell apind-inner">
        <div className="apind-media" data-reveal="left">
          <Shot photo={INDUSTRY.photo} className="apind-shot" />
        </div>

        <div className="apind-copy" data-reveal="right" style={{ '--d': '120ms' }}>
          <p className="ap-eyebrow">{INDUSTRY.eyebrow}</p>
          <h2 className="ap-title">{INDUSTRY.title}</h2>

          <div className="ap-body">
            {INDUSTRY.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <ul className="apind-activities">
            {INDUSTRY.activities.map((activity) => (
              <li key={activity.label}>
                <AboutIcon name={activity.icon} size={18} />
                {activity.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
