'use client'

import { useRef, useState } from 'react'
import { useReveal } from '../../hooks/useCourseMotion'
import { DESKS, SUPPORT, WHATSAPP } from '../../data/contact'
import type { SiteSettings } from '../../lib/siteSettings'
import ContactIcon from './icons'
import './SupportDesk.css'

/* ------------------------------------------------------------------
   Support & Assistance.

   Two desks on a rail; picking one swaps the card beside it. Built as
   a proper tablist — arrow keys move between desks, and the panel is
   keyed on the desk so it re-runs its entrance each time.
------------------------------------------------------------------ */
/**
 * @param settings the CMS settings row — the desks print the same
 *   number and address the footer does, so both have to read it from
 *   the same place. See src/lib/siteSettings.ts.
 */
export default function SupportDesk({ settings }: { settings?: SiteSettings } = {}) {
  const ref = useReveal()
  const tabsRef = useRef(null)
  const [active, setActive] = useState(DESKS[0].key)

  const found = DESKS.find((d) => d.key === active) || DESKS[0]

  /* Both desks quote the main switchboard number and inbox, which is
     exactly what the CMS settings row holds. The desk's own name,
     role and blurb stay bundled — the CMS has no field for them. */
  const desk = settings
    ? {
        ...found,
        phoneDisplay: settings.phoneDisplay,
        phoneDial: settings.phoneDial,
        email: settings.email
      }
    : found

  const onKeyDown = (event) => {
    const step =
      event.key === 'ArrowDown' || event.key === 'ArrowRight'
        ? 1
        : event.key === 'ArrowUp' || event.key === 'ArrowLeft'
          ? -1
          : 0
    if (!step) return

    event.preventDefault()
    const index = DESKS.findIndex((d) => d.key === active)
    const next = DESKS[(index + step + DESKS.length) % DESKS.length]
    setActive(next.key)
    tabsRef.current?.querySelector(`#desk-tab-${next.key}`)?.focus()
  }

  const rows = [
    { icon: 'phone', text: desk.phoneDisplay, href: `tel:${desk.phoneDial}` },
    { icon: 'mail', text: desk.email, href: `mailto:${desk.email}` },
    { icon: 'pin', text: desk.place }
  ]

  return (
    <section className="sdesk" id="support" ref={ref}>
      <span className="sdesk-ring" aria-hidden="true" />

      <div className="shell">
        <header className="sdesk-head" data-reveal>
          <h2 className="sdesk-title">{SUPPORT.title}</h2>
          <p className="sdesk-sub">{SUPPORT.sub}</p>
        </header>

        <div className="sdesk-card" data-reveal="scale" style={{ '--d': '120ms' }}>
          <div
            className="sdesk-rail"
            role="tablist"
            aria-label="Support desks"
            ref={tabsRef}
            onKeyDown={onKeyDown}
          >
            {DESKS.map((item) => {
              const isActive = item.key === active
              return (
                <button
                  key={item.key}
                  id={`desk-tab-${item.key}`}
                  className={`sdesk-tab${isActive ? ' is-active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="desk-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(item.key)}
                >
                  <span className="sdesk-tab-ico">
                    <ContactIcon name={item.icon} size={18} />
                  </span>
                  <span className="sdesk-tab-body">
                    <b>{item.label}</b>
                    <i>{item.blurb}</i>
                  </span>
                </button>
              )
            })}
          </div>

          <div
            className="sdesk-panel"
            id="desk-panel"
            role="tabpanel"
            aria-labelledby={`desk-tab-${desk.key}`}
            key={desk.key}
          >
            <span className="sdesk-avatar" aria-hidden="true">{desk.initials}</span>

            <div className="sdesk-detail">
              <h3 className="sdesk-name">{desk.name}</h3>
              <p className="sdesk-role">{desk.role}</p>

              <ul className="sdesk-rows">
                {rows.map((row, i) => (
                  <li key={row.text} style={{ '--i': i }}>
                    <ContactIcon name={row.icon} size={17} />
                    {row.href ? <a href={row.href}>{row.text}</a> : <span>{row.text}</span>}
                  </li>
                ))}
              </ul>

              <div className="sdesk-actions">
                <a className="sdesk-act sdesk-act--call" href={`tel:${desk.phoneDial}`}>
                  <ContactIcon name="phone" size={16} filled />
                  Call Now
                </a>

                <a
                  className="sdesk-act sdesk-act--wa"
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(desk.whatsappText)}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <ContactIcon name="whatsapp" size={16} />
                  WhatsApp
                </a>

                <a
                  className="sdesk-act sdesk-act--mail"
                  href={`mailto:${desk.email}?subject=${encodeURIComponent(desk.role + ' enquiry')}`}
                >
                  <ContactIcon name="mail" size={16} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
