'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { CONTACT_HERO, PHONE_DIAL, PHONE_DISPLAY, WHATSAPP } from '../../data/contact'
import type { SiteSettings } from '../../lib/siteSettings'
import ContactIcon from './icons'
import './ContactHero.css'

/* ------------------------------------------------------------------
   The banner. A photograph behind a brand-tinted veil, the title
   centred on it, and a shallow diagonal cutting the bottom edge so
   the card in the next section can ride up over it.

   The photograph is a CSS background layered above a gradient, so
   while public/photos/contact-hero.jpg is missing the gradient simply
   shows through — no broken image, no empty band.
------------------------------------------------------------------ */
export default function ContactHero({ settings }: { settings?: SiteSettings } = {}) {
  const ref = useReveal()
  const phoneDisplay = settings?.phoneDisplay || PHONE_DISPLAY
  const phoneDial = settings?.phoneDial || PHONE_DIAL

  return (
    <section
      className="cthero"
      id="contact-top"
      ref={ref}
      style={{ '--shot': `url(${CONTACT_HERO.image})` }}
    >
      <span className="cthero-veil" aria-hidden="true" />
      <span className="tech-texture" aria-hidden="true" />

      <div className="shell cthero-inner">
        <p className="cthero-eyebrow" data-reveal>
          <span aria-hidden="true" />
          {CONTACT_HERO.eyebrow}
        </p>
        <h1 className="cthero-title" data-reveal style={{ '--d': '60ms' } as React.CSSProperties}>
          {CONTACT_HERO.title}
        </h1>
        <p className="cthero-lead" data-reveal style={{ '--d': '120ms' } as React.CSSProperties}>
          {CONTACT_HERO.lead}
        </p>

        {/* The three ways in, fastest first: ring, message, or the form
            further down the page. */}
        <div className="cthero-actions" data-reveal style={{ '--d': '180ms' } as React.CSSProperties}>
          <a className="cthero-btn cthero-btn--solid" href={`tel:${phoneDial}`}>
            <ContactIcon name="phone" size={16} />
            Call {phoneDisplay}
          </a>
          <a
            className="cthero-btn cthero-btn--ghost"
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactIcon name="whatsapp" size={16} />
            WhatsApp us
          </a>
          <a className="cthero-link" href="#enquiry">
            Or fill the form
            <ContactIcon name="chevron" size={15} />
          </a>
        </div>

        <ul className="cthero-facts" data-reveal style={{ '--d': '240ms' } as React.CSSProperties}>
          {CONTACT_HERO.facts.map((fact) => (
            <li key={fact.label}>
              <b>{fact.value}</b>
              <span>{fact.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
