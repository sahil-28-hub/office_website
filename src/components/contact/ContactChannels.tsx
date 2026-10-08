'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import {
  ADDRESS_FULL,
  CONTACT_MAP,
  INBOX,
  PHONE_DIAL,
  PHONE_DISPLAY,
  WHATSAPP
} from '../../data/contact'
import type { SiteSettings } from '../../lib/siteSettings'
import ContactIcon from './icons'
import './ContactChannels.css'

/* ------------------------------------------------------------------
   The four ways to reach the centre, as cards that ride up over the
   foot of the banner: call, WhatsApp, email, visit.

   Each card is the action itself — the whole thing is the link — so a
   visitor on a phone taps the number rather than reading it.

   The number, the inbox and the address are the CMS settings row's
   when it has them, so this page and the footer cannot disagree.
------------------------------------------------------------------ */
export default function ContactChannels({ settings }: { settings?: SiteSettings } = {}) {
  const ref = useReveal()

  const phoneDisplay = settings?.phoneDisplay || PHONE_DISPLAY
  const phoneDial = settings?.phoneDial || PHONE_DIAL
  const email = settings?.email || INBOX
  const address = settings?.address || ADDRESS_FULL

  const channels = [
    {
      icon: 'phone',
      label: 'Call the centre',
      value: phoneDisplay,
      note: 'Someone answers the same working day',
      href: `tel:${phoneDial}`
    },
    {
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: phoneDisplay,
      note: 'Message us your question',
      href: `https://wa.me/${WHATSAPP}`
    },
    {
      icon: 'mail',
      label: 'Email',
      value: email,
      note: 'For detailed queries and college partnerships',
      href: `mailto:${email}`
    },
    {
      icon: 'pin',
      label: 'Visit the campus',
      value: 'Bharat Nagar Chowk, Ludhiana',
      note: address,
      href: CONTACT_MAP.directions
    }
  ]

  return (
    <section className="cchan" aria-label="Ways to reach us" ref={ref}>
      <ul className="shell cchan-grid">
        {channels.map((channel, i) => {
          const external = channel.href.startsWith('http')
          return (
            <li key={channel.label} data-reveal style={{ '--d': `${i * 70}ms` } as React.CSSProperties}>
              <a
                className="cchan-card"
                href={channel.href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="cchan-ico" aria-hidden="true">
                  <ContactIcon name={channel.icon} size={21} />
                </span>
                <span className="cchan-label">{channel.label}</span>
                <span className="cchan-value">{channel.value}</span>
                <span className="cchan-note">{channel.note}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
