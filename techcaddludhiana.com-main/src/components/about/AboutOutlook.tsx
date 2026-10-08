'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { OUTLOOK } from '../../data/aboutPage'
import AboutIcon from './icons'
import './AboutOutlook.css'

/* §5 — the outlook: a centred statement, closed by the callout that
   says what the training is actually for. */
export default function AboutOutlook() {
  const ref = useReveal()

  return (
    <section className="ap-light ap-light--tint ap-sec apout" id="outlook" ref={ref}>
      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>{OUTLOOK.eyebrow}</p>
          <h2 className="ap-title apout-title" data-reveal style={{ '--d': '80ms' }}>
            {OUTLOOK.title}
          </h2>
        </div>

        <div className="apout-body">
          {OUTLOOK.body.map((paragraph, i) => (
            <p key={i} data-reveal style={{ '--d': `${160 + i * 100}ms` }}>
              {paragraph}
            </p>
          ))}
        </div>

        <blockquote className="apout-quote" data-reveal="scale" style={{ '--d': '160ms' }}>
          <AboutIcon name="quote" />
          <p>{OUTLOOK.quote}</p>
        </blockquote>
      </div>
    </section>
  )
}
