'use client'

import SmartLink from '../common/SmartLink'
import './PageLinks.css'

/* A quiet internal-linking strip for pages that would otherwise dead-end
   — Contact and Gallery had zero links to the rest of the site before
   this. Sits right above the footer on both. */
export default function PageLinks({ eyebrow, links }: { eyebrow?: string; links: { href: string; label: string }[] }) {
  return (
    <nav className="pglinks" aria-label="Explore more">
      <div className="shell pglinks-inner">
        {eyebrow && <p className="pglinks-eyebrow">{eyebrow}</p>}
        <ul className="pglinks-list">
          {links.map((l) => (
            <li key={l.href}>
              <SmartLink className="pglinks-item" href={l.href}>
                {l.label}
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
