'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { BELIEF } from '../../data/aboutPage'
import './AboutBelief.css'

/* §14 — technology changes, skills evolve, learning never stops —
   closed by the card carrying the three words the campus runs on. */
export default function AboutBelief() {
  const ref = useReveal()

  return (
    <section className="ap-light ap-sec apbel" id="belief" ref={ref}>
      <div className="shell">
        <div className="apbel-top">
          <div className="apbel-lines">
            <p className="ap-eyebrow" data-reveal>{BELIEF.eyebrow}</p>

            <h2 data-reveal style={{ '--d': '80ms' }}>
              {BELIEF.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <span className="ap-accent">{BELIEF.accent}</span>
            </h2>
          </div>

          <div className="apbel-copy">
            {BELIEF.body.map((paragraph, i) => (
              <p key={i} data-reveal style={{ '--d': `${180 + i * 110}ms` }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <figure className="apbel-card" data-reveal="scale" style={{ '--d': '120ms' }}>
          <blockquote>
            {BELIEF.card.words.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </blockquote>

          <p>{BELIEF.card.text}</p>

          <figcaption>{BELIEF.card.by}</figcaption>
        </figure>
      </div>
    </section>
  )
}
