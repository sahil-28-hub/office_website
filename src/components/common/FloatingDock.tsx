'use client'

import { useState } from 'react'
import ContactIcon from '../contact/icons'
import { useSiteSettings } from './SiteSettingsProvider'
import { BRANCH_CITY, BRANCH_SOCIALS, SERVICES_LINK } from '../../data/branch'
import { WHATSAPP } from '../../data/contact'
import './BhuviChat.css'

/* ------------------------------------------------------------------
   The bottom-right corner: WhatsApp, with the social dock above it.

   WHICH PROFILES

   The ones an editor has set in CMS → Settings → Social, when there
   are any; this branch's own Instagram and Facebook otherwise (see
   data/branch.ts). Either way only real addresses — a profile with no
   URL gets no button rather than a button that goes nowhere.

   The dock is closed until asked for. Open, it fans the profiles out
   above its own button; the WhatsApp button below it never moves.
------------------------------------------------------------------ */

/* the settings row's keys → the icons this site draws */
const ICONS: Record<string, string> = {
  instagram: 'instagram',
  facebook: 'facebook',
  youtube: 'youtube',
  linkedin: 'linkedin',
  x: 'twitter',
  twitter: 'twitter'
}

export default function FloatingDock() {
  const settings = useSiteSettings()
  const [open, setOpen] = useState(false)

  /* YouTube is in the footer's list but not here: the dock is a short
     stack, and four is what fits above the WhatsApp button on a phone. */
  const socials = (settings?.socials?.length ? settings.socials : BRANCH_SOCIALS)
    .filter((social) => ICONS[social.key] && social.key !== 'youtube')
    .slice(0, 4)

  const whatsapp = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hi techcadd ${BRANCH_CITY}, I would like to know more about your courses.`
  )}`

  return (
    <>
    {/* The left edge: the group's development studio. A tab rather
        than a menu item — it leaves this site, and says so by sitting
        outside the navigation. */}
    <a
      className="fserv"
      href={SERVICES_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Services — Syntax Developer (opens in a new tab)"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M21.98 17.2c.1-.3 1.1-3.3-1.4-6.6.3-1.2 1.1-5.9-5-9.6 0 0 3.1 4.1 1.6 8.3 0 0-4.300-2.900-8.200-6.900 0 0 2.300 3.600 6 7.200 0 0-4.900-2.700-8.700-5.900 0 0 3.300 5.200 9.300 9.300-1.700 1-5.800 2-11.500-1.100 0 0 3.200 5.400 10.600 5.400 3.300 0 4.600-1.700 6.100-1.700 1.500 0 2.200 1.700 2.200 1.700s.4-.700 0-1.800l-.02-.5Z" />
      </svg>
      <span>Services</span>
    </a>

    <div className={`fdock${open ? ' is-open' : ''}`}>
      {socials.length > 0 && (
        <>
          {/* Always in the document and faded in or out, rather than
              mounted on demand: each icon rises on its own delay, and
              the same list folds away in reverse when the dock closes. */}
          <ul className="fdock-social" id="fdock-social" aria-hidden={!open}>
              {socials.map((social, i) => (
                <li
                  key={social.key}
                  style={{ '--i': open ? i : socials.length - 1 - i } as React.CSSProperties}
                >
                  <a
                    className={`fdock-${ICONS[social.key]}`}
                    tabIndex={open ? 0 : -1}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`techcadd ${BRANCH_CITY} on ${social.label} (opens in a new tab)`}
                  >
                    <ContactIcon name={ICONS[social.key]} size={19} />
                  </a>
                </li>
              ))}
            </ul>

          <button
            type="button"
            className="fdock-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="fdock-social"
            aria-label={open ? 'Hide social profiles' : 'Show social profiles'}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </>
      )}

      <a
        className="fdock-wa"
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with techcadd on WhatsApp (opens in a new tab)"
      >
        <span className="fdock-ping" aria-hidden="true" />
        <ContactIcon name="whatsapp" size={28} />
      </a>
    </div>
    </>
  )
}
