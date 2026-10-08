'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { VISIT } from '../../data/contact'
import ContactIcon from './icons'
import './ContactChannels.css'

/* ------------------------------------------------------------------
   "What a campus visit looks like" — the three steps between walking
   in and enrolling: counselling, a demo class, then fees and a batch.

   It answers the question a first-time visitor does not ask out loud:
   what happens if I turn up, and what will it cost me to find out.
------------------------------------------------------------------ */
export default function VisitSteps() {
  const ref = useReveal()

  return (
    <section className="cvisit" id="visit" ref={ref}>
      <div className="shell">
        <header className="cvisit-head" data-reveal>
          <p className="cvisit-eyebrow">{VISIT.eyebrow}</p>
          <h2 className="cvisit-title">{VISIT.title}</h2>
          <p className="cvisit-sub">{VISIT.sub}</p>
        </header>

        <ol className="cvisit-grid">
          {VISIT.steps.map((step, i) => (
            <li key={step.title}>
              <article
                className="cvisit-card"
                data-reveal
                style={{ '--d': `${80 + i * 80}ms` } as React.CSSProperties}
              >
                <span className="cvisit-no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="cvisit-ico" aria-hidden="true">
                  <ContactIcon name={step.icon} size={21} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </li>
          ))}
        </ol>

        <p className="cvisit-cta" data-reveal>
          <a href="#enquiry">
            Send an enquiry
            <ContactIcon name="arrowRight" size={16} />
          </a>
        </p>
      </div>
    </section>
  )
}
