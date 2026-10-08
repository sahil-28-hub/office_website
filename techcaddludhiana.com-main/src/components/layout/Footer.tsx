'use client'

import { useEffect, useState } from 'react'
import SmartLink from '../common/SmartLink'
import { OPEN_COOKIE_SETTINGS_EVENT } from '../common/CookieConsent'
import './Footer.css'
import type { SiteSettings } from '../../lib/siteSettings'
import { BRANCH_CITY, BRANCH_SOCIALS, GOOGLE_REVIEWS_LINK } from '../../data/branch'
import { RV_BREAKDOWN } from '../../data/reviews'
import { WHATSAPP } from '../../data/contact'

/* The four legal pages — reachable only from here, same as the
   reference site's own footer. */
const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Disclaimer', href: '/disclaimer' }
]

/* ------------------------------------------------------------------
   Link columns — same three columns and same labels; each href now
   resolves to the page that answers it rather than to a section that
   only exists on the home page.
------------------------------------------------------------------ */
const COLUMNS = [
  {
    title: 'Courses',
    links: [
      /* each category's own page, rather than four links that all
         opened the same catalogue */
      { label: 'Programming', href: '/courses/category/programming' },
      { label: 'AI & Data', href: '/courses/category/ai-data-science' },
      { label: 'Digital Marketing', href: '/courses/category/digital-marketing' },
      { label: 'Cyber & Cloud', href: '/courses/category/cyber-security-cloud' },
      { label: 'All Courses', href: '/courses' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Mission & Vision', href: '/mission-vision' },
      { label: 'Our Founder', href: '/founder' },
      { label: 'Contact Us', href: '/contact' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Placement Support', href: '/faq' },
      { label: 'Student Reviews', href: '/reviews' },
      /* this branch's own listing — SmartLink opens it in a new tab */
      { label: 'FAQs', href: '/faq' },
      { label: 'Enquire Now', href: '/contact' }
    ]
  }
]

/*
  The icon for each profile the CMS may hold a URL for.

  This used to be the list of links itself, with every href a literal
  '#' and a note to replace them before going live. They never were,
  so the footer shipped five links that opened a second copy of the
  current page in a new tab.

  The URLs now come from the CMS settings row (see
  src/lib/siteSettings.ts), which draws an icon for each profile that
  has a real address and nothing for the ones that do not — so the row
  grows as an editor fills it in, and never contains a dead link.
*/
const SOCIAL_ICONS: Record<string, () => React.JSX.Element> = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  YouTube: YouTubeIcon,
  X: XIcon
}

/* ---------------------------- icons ---------------------------- */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.6" />
      <circle cx="12" cy="12" r="3.9" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h4v10.75H3V9.75Zm6.5 0h3.83v1.47h.05a4.2 4.2 0 0 1 3.78-2.08c4.04 0 4.79 2.66 4.79 6.12v5.24h-4v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73h-4V9.75Z" />
    </svg>
  )
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2C2 8.79 2 12 2 12s0 3.21.4 4.8a2.5 2.5 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77C22 15.21 22 12 22 12s0-3.21-.4-4.8ZM10 15.1V8.9l5.2 3.1-5.2 3.1Z" />
    </svg>
  )
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-6.06l-4.75-6.2L5.5 21H2.47l7.06-8.07L2.25 3h6.2l4.29 5.67L17.53 3Zm-1.06 16.17h1.67L7.6 4.73H5.81l10.66 14.44Z" />
    </svg>
  )
}
function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5" />
      <path d="m5.5 11.5 6.5-6.5 6.5 6.5" />
    </svg>
  )
}

/**
 * @param settings the business's own details, resolved by
 *   src/app/layout.tsx — CMS first, bundled defaults per field. See
 *   src/lib/siteSettings.ts.
 * @param navPages pages written in the CMS and marked for the footer.
 *   Until this existed a page published in the CMS was reachable only
 *   by typing its address, which no visitor does.
 */
export default function Footer({
  settings,
  navPages = []
}: {
  settings: SiteSettings
  navPages?: Array<{ slug: string; label: string }>
}) {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <footer className="ft" id="contact">
      <img
        className="ft-watermark"
        src="/techcadd-wordmark.png"
        alt=""
        aria-hidden="true"
        width="900"
        height="192"
        loading="lazy"
        decoding="async"
      />

      <div className="shell ft-inner">
        <div className="ft-grid">
          <div className="ft-brand">
            <SmartLink className="ft-logo" href="/" aria-label="techcadd — home">
              <img
                src="/tece_new_logo.png"
                alt="techcadd, your skill and technology partner"
                width="900"
                height="231"
                loading="lazy"
                decoding="async"
              />
            </SmartLink>

            <p className="ft-blurb">
              An IT company and technology institute — AI, cloud, cybersecurity and full-stack
              engineering, plus the training that builds the teams behind it.
            </p>

            <SmartLink className="ft-mail" href={`mailto:${settings.email}`}>{settings.email}</SmartLink>

            <SmartLink className="ft-phone" href={`tel:${settings.phoneDial}`}>{settings.phoneDisplay}</SmartLink>
          </div>

          {/*
             CMS pages join the Support column rather than opening a
             fourth one: the footer's three-column grid is a layout
             decision, and a column that appears only when an editor
             marks a page for the footer would move everything else.
          */}
          {COLUMNS.map((col) => {
            /*
              The columns are fixed. CMS pages used to be appended to the
              last one — one link per page marked "footer" — and the team
              uses the Pages module for course landing pages, so every new
              course page made the footer longer. They are listed on
              /pages instead, reached from Resources → Pages in the header,
              which is where editor-authored pages now live.
            */
            const links = col.links

            return (
            <nav className="ft-col" key={col.title} aria-label={col.title}>
              <h2 className="ft-col-title">{col.title}</h2>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <SmartLink href={link.href}>{link.label}</SmartLink>
                  </li>
                ))}
              </ul>
            </nav>
            )
          })}
        </div>

        <hr className="ft-rule" />

        <div className="ft-base">
          {/* The name as the CMS spells it. It was hard-coded here and
              in the OpenGraph metadata, which meant the one field in
              the CMS actually called "site name" governed nothing. */}
          <p className="ft-copy">
            {/* The legal name, spelled the way the brand is spelled
                everywhere else on the site. It read `settings.siteName`,
                and the live CMS has that set to "TechCADD" — so the
                copyright line printed a spelling the site uses nowhere
                else. A company's name in its own copyright notice is not
                something to leave to a free-text setting. */}
            © {new Date().getFullYear()} techcadd Computer Education. Built in{' '}
            <SmartLink href="/contact">{BRANCH_CITY}</SmartLink>.
          </p>

          {/* Nothing at all rather than an empty row, for a settings
              row with no profile URLs in it yet. */}
          {settings.socials.length > 0 && (
            <ul className="ft-socials">
              {settings.socials.map(({ label, href }) => {
                const Icon = SOCIAL_ICONS[label]
                if (!Icon) return null
                return (
                  <li key={label}>
                    <SmartLink href={href} aria-label={label} rel="noreferrer noopener" target="_blank">
                      <Icon />
                    </SmartLink>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <nav className="ft-legal" aria-label="Legal">
          {LEGAL_LINKS.map((link) => (
            <SmartLink href={link.href} key={link.label}>{link.label}</SmartLink>
          ))}
          <button
            type="button"
            className="ft-legal-btn"
            onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
          >
            Cookie Settings
          </button>
          <SmartLink href="/sitemap-html">Sitemap</SmartLink>
          {/* the listing's own rating, as the reviews section states it */}
          <SmartLink href={GOOGLE_REVIEWS_LINK}>Google Reviews ({RV_BREAKDOWN.score}★)</SmartLink>
          {/* The profiles by name, as well as by icon above: the CMS's
              when an editor has set any, this branch's own otherwise.
              Only real addresses — a network this centre has no profile
              on gets no link. */}
          {(settings.socials.length ? settings.socials : BRANCH_SOCIALS).map((social) => (
            <SmartLink href={social.href} key={social.label}>{social.label}</SmartLink>
          ))}
          <SmartLink href={`https://wa.me/${WHATSAPP}`}>WhatsApp</SmartLink>
        </nav>
      </div>

      <button
        className={`ft-top${showTop ? ' is-shown' : ''}`}
        type="button"
        onClick={toTop}
        aria-label="Back to top"
      >
        <ArrowUpIcon />
      </button>
    </footer>
  )
}
