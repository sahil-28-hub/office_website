'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { PATH } from '../../data/aboutPage'
import AboutIcon from './icons'
import './AboutPath.css'

/* §7 — Learn → Practice → Build → Grow. The four movements every
   programme runs through, on a rail that draws itself in. */
export default function AboutPath() {
  const ref = useReveal()

  return (
    <section className="ap-light ap-sec appath" id="how-it-works" ref={ref}>
      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>{PATH.eyebrow}</p>

          <h2 className="appath-words" data-reveal style={{ '--d': '80ms' }}>
            {PATH.words.map((word, i) => (
              <span key={word}>
                {word}
                {i < PATH.words.length - 1 && (
                  <i aria-hidden="true">
                    <AboutIcon name="arrowRight" size={22} />
                  </i>
                )}
              </span>
            ))}
          </h2>
        </div>

        <div className="appath-track">
          <span className="appath-rail" aria-hidden="true" data-reveal />

          <ol className="appath-steps">
            {PATH.steps.map((step, i) => (
              <li key={step.title} data-reveal style={{ '--d': `${100 + i * 120}ms` }}>
                <span className="appath-node">
                  <AboutIcon name={step.icon} size={20} />
                </span>
                <span className="ap-no">{step.no}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <p className="appath-note ap-note" data-reveal style={{ '--d': '160ms' }}>{PATH.note}</p>
      </div>
    </section>
  )
}
