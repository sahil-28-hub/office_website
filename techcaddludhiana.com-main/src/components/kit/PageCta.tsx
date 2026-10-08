'use client'

import { useReveal, useMagnetic } from '../../hooks/useCourseMotion'
import SmartLink from '../common/SmartLink'
import PageIcon from './icons'

/* ------------------------------------------------------------------
   The band every page closes on: one glass panel on a dark section,
   a headline, and the two ways forward — call the campus, or open the
   contact form. The primary button is magnetic, as the home page's
   is; the rest of the page leaves that effect alone.
------------------------------------------------------------------ */
export default function PageCta({ eyebrow, title, lead, primary, secondary, note = undefined }) {
  const ref = useReveal()
  const magnetRef = useMagnetic()

  return (
    <section className="ap-dark ap-dark--deep ap-sec tc-cta" ref={ref}>
      <div className="shell">
        <div className="tc-cta-inner" data-reveal="rise">
          <span className="tc-cta-glow" aria-hidden="true" />

          <p className="ap-eyebrow" data-reveal>{eyebrow}</p>

          <h2 className="tc-cta-title" data-reveal style={{ '--d': '90ms' }}>
            {title}
          </h2>

          <p className="tc-cta-lead" data-reveal style={{ '--d': '160ms' }}>
            {lead}
          </p>

          <div className="tc-cta-actions" data-reveal style={{ '--d': '230ms' }}>
            <SmartLink className="ap-btn ap-btn--primary" href={primary.href} ref={magnetRef}>
              {primary.label}
              <PageIcon name={primary.icon || 'arrowRight'} />
            </SmartLink>

            {secondary && (
              <SmartLink className="ap-btn ap-btn--ghost" href={secondary.href}>
                {secondary.label}
                <PageIcon name={secondary.icon || 'phone'} />
              </SmartLink>
            )}
          </div>

          {note && (
            <p className="tc-cta-note" data-reveal style={{ '--d': '300ms' }}>
              {note}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
