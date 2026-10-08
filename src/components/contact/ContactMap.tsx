'use client'

import { useInViewOnce } from '../../hooks/useCourseMotion'
import { CONTACT_MAP } from '../../data/contact'
import ContactIcon from './icons'
import './ContactMap.css'

/* ------------------------------------------------------------------
   The map runs edge to edge, between the card above and the footer
   below. The iframe is the heaviest thing on the page, so it is only
   mounted once the band is close to the viewport.
------------------------------------------------------------------ */
export default function ContactMap() {
  const [ref, seen] = useInViewOnce('300px')

  return (
    <section className="cmap" id="find-us" ref={ref} aria-label="Campus location">
      {seen ? (
        <iframe
          title="techcadd Ludhiana campus on Google Maps"
          src={CONTACT_MAP.embed}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="cmap-placeholder" aria-hidden="true">
          <ContactIcon name="pin" />
          <span>Loading the map…</span>
        </div>
      )}

      <a
        className="cmap-card"
        href={CONTACT_MAP.directions}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="cmap-card-ico">
          <ContactIcon name="compass" size={18} />
        </span>
        <span className="cmap-card-body">
          <b>{CONTACT_MAP.label}</b>
          <i>Get directions</i>
        </span>
      </a>
    </section>
  )
}
