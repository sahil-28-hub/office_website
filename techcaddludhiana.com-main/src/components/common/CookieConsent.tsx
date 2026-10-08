'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import SmartLink from './SmartLink'
import './CookieConsent.css'

/* ==================================================================
   The cookie notice.

   WHAT IS STORED

   One record, under techcadd_cookie_consent, written to BOTH
   localStorage and a first-party cookie:

     { necessary, analytics, functional, marketing,
       timestamp, version, consentId }

   Two places because either can be unavailable or cleared on its own —
   private browsing drops localStorage, a cookie sweep drops the cookie
   — and whichever survives restores the other on the next visit.

   `consentId` and `timestamp` are the audit trail: a token identifying
   this particular act of consent and when it was given. Neither leaves
   the browser.

   THE ANSWER EXPIRES

   The cookie is set for a year and the record is ignored once it is
   older than that, so nobody is treated as having agreed to something
   they were asked about years ago. The notice simply asks again.

   WHAT COUNTS AS CONSENT

   Pressing a button. Scrolling, waiting, or closing the notice with
   the ✕ is never treated as agreement — the ✕ leaves the visitor
   undecided, which means everything optional stays off and the notice
   returns on the next page load.

   The footer's "Cookie settings" link, and the matching button on the
   Cookie Policy page, reopen this notice with the breakdown showing by
   firing OPEN_COOKIE_SETTINGS_EVENT.
================================================================== */

export const COOKIE_KEY = 'techcadd_cookie_consent'
/* the key this notice used before it had categories — read once, so a
   visitor who already answered is not asked again on the day this ships */
const LEGACY_KEY = 'techcadd:cookie-consent'
const COOKIE_VERSION = '2026.1'
const MAX_AGE_DAYS = 365
const MAX_AGE_MS = MAX_AGE_DAYS * 24 * 60 * 60 * 1000

export const OPEN_COOKIE_SETTINGS_EVENT = 'techcadd:open-cookie-settings'
/** Fired on window whenever a choice is saved; `detail` is the record. */
export const CONSENT_UPDATED_EVENT = 'techcadd:consent-updated'

type Optional = 'analytics' | 'functional' | 'marketing'

export type Consent = {
  necessary: true
  analytics: boolean
  functional: boolean
  marketing: boolean
  timestamp: number
  version: string
  consentId: string
}

const UNDECIDED: Consent = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
  timestamp: 0,
  version: COOKIE_VERSION,
  consentId: ''
}

/* A record worth trusting: the right shape, and not past its year. */
function valid(value: any): value is Consent {
  return (
    value &&
    typeof value.analytics === 'boolean' &&
    typeof value.timestamp === 'number' &&
    Date.now() - value.timestamp < MAX_AGE_MS
  )
}

function readConsent(): Consent | null {
  if (typeof window === 'undefined') return null

  try {
    const raw = window.localStorage.getItem(COOKIE_KEY)
    const parsed = raw ? JSON.parse(raw) : null
    if (valid(parsed)) return parsed
  } catch {
    /* private browsing / storage disabled — fall through to the cookie */
  }

  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`))
    const parsed = match?.[1] ? JSON.parse(decodeURIComponent(match[1])) : null
    if (valid(parsed)) {
      /* put the copy back where it was missing */
      try {
        window.localStorage.setItem(COOKIE_KEY, JSON.stringify(parsed))
      } catch {
        /* nothing to restore into */
      }
      return parsed
    }
  } catch {
    /* an unreadable cookie is an undecided visitor */
  }

  /* The answer given to the old two-button banner. Carried across as
     that answer and no more: it only ever covered analytics. */
  try {
    const raw = window.localStorage.getItem(LEGACY_KEY)
    const legacy = raw ? JSON.parse(raw) : null
    if (legacy && typeof legacy.analytics === 'boolean') {
      const decidedAt = Date.parse(legacy.decidedAt) || Date.now()
      window.localStorage.removeItem(LEGACY_KEY)
      if (Date.now() - decidedAt < MAX_AGE_MS) {
        return writeConsent({ analytics: legacy.analytics }, decidedAt)
      }
    }
  } catch {
    /* nothing to carry over */
  }

  return null
}

function writeConsent(choice: Partial<Record<Optional, boolean>>, timestamp = Date.now()): Consent {
  const record: Consent = {
    necessary: true,
    analytics: Boolean(choice.analytics),
    functional: Boolean(choice.functional),
    marketing: Boolean(choice.marketing),
    timestamp,
    version: COOKIE_VERSION,
    /* the audit-trail token: this act of consent, and when */
    consentId: `tc-cst-${Math.random().toString(36).slice(2, 8)}-${timestamp.toString(36)}`
  }

  const serialised = JSON.stringify(record)

  try {
    window.localStorage.setItem(COOKIE_KEY, serialised)
  } catch {
    /* nothing to persist to — the cookie below may still take it */
  }

  try {
    const secure = window.location.protocol === 'https:' ? '; Secure' : ''
    document.cookie =
      `${COOKIE_KEY}=${encodeURIComponent(serialised)}; path=/; ` +
      `max-age=${MAX_AGE_DAYS * 24 * 60 * 60}; SameSite=Lax${secure}`
  } catch {
    /* cookies blocked — the choice still applies for this page view */
  }

  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: record }))

  /* Google's consent mode, for when a tag is present. Nothing here
     loads one; this only tells a tag that is already on the page what
     it may do. */
  const gtag = (window as any).gtag
  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      analytics_storage: record.analytics ? 'granted' : 'denied',
      functionality_storage: record.functional ? 'granted' : 'denied',
      ad_storage: record.marketing ? 'granted' : 'denied',
      personalization_storage: record.marketing ? 'granted' : 'denied'
    })
  }

  return record
}

/* For anything that wants to ask "am I allowed to run?" without
   re-implementing the read. False, not null, for a visitor who has not
   decided — the safe default is off. */
export function hasConsent(category: Optional) {
  return readConsent()?.[category] === true
}
export function hasAnalyticsConsent() {
  return hasConsent('analytics')
}

type Category = {
  key: 'necessary' | Optional
  label: string
  badge: string
  description: string
  basis: string
  cookies: string[]
  retention: string
  locked?: boolean
}

/*
  What each category is, in words that are true of this site today.

  The site sets one thing: the record of the choice made here. It runs
  no analytics, no preference storage and no marketing tags. The three
  optional switches are kept because they are what a choice is recorded
  against — a tag added later reads them and loads only if its switch
  is on — but each one says plainly that nothing is behind it yet,
  rather than listing cookies the site does not set.

  If a tag is ever added, name its cookies here and in the Cookie
  Policy (data/legal.ts) in the same change.
*/
const CATEGORIES: Category[] = [
  {
    key: 'necessary',
    label: 'Strictly Necessary',
    badge: 'Always Active',
    description:
      'Remembers the choice you make on this notice, so you are not asked again on every visit. Cannot be switched off.',
    basis: 'Needed to record and honour your cookie choice.',
    cookies: ['techcadd_cookie_consent'],
    retention: '1 year',
    locked: true
  },
  {
    key: 'analytics',
    label: 'Performance & Analytics',
    badge: 'Optional',
    description:
      'Would let us measure which pages are visited so we can improve them. This site runs no analytics today; this switch is your answer in advance if that changes.',
    basis: 'Only ever switched on with your consent.',
    cookies: ['None set today'],
    retention: 'Not applicable'
  },
  {
    key: 'functional',
    label: 'Functional & User Preferences',
    badge: 'Optional',
    description:
      'Would remember preferences between visits, such as a course you were looking at. Nothing of this kind is stored today.',
    basis: 'Only ever switched on with your consent.',
    cookies: ['None set today'],
    retention: 'Not applicable'
  },
  {
    key: 'marketing',
    label: 'Marketing & Attribution',
    badge: 'Optional',
    description:
      'Would let us measure how our own campaigns perform. This site carries no advertising or marketing tags today, and techcadd never sells your personal data.',
    basis: 'Only ever switched on with your explicit prior consent.',
    cookies: ['None set today'],
    retention: 'Not applicable'
  }
]

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 5 6v5.5c0 4.3 2.9 7.6 7 9.5 4.1-1.9 7-5.2 7-9.5V6l-7-3Z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.4 12.2 2.4 2.4 4.8-5" />
    </svg>
  )
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false)
  const [details, setDetails] = useState(false)
  const [choice, setChoice] = useState<Consent>(UNDECIDED)
  const [saved, setSaved] = useState(false)
  const toastTimer = useRef(0)

  /* First visit, or an answer past its year, opens the notice — a beat
     after load, so it does not fight the page's own first paint. */
  useEffect(() => {
    const existing = readConsent()
    if (existing) {
      setChoice(existing)
      return undefined
    }
    const timer = window.setTimeout(() => setOpen(true), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const reopen = () => {
      setChoice(readConsent() ?? UNDECIDED)
      setDetails(true)
      setOpen(true)
    }
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen)
  }, [])

  useEffect(() => () => window.clearTimeout(toastTimer.current), [])

  const save = useCallback((next: Partial<Record<Optional, boolean>>) => {
    setChoice(writeConsent(next))
    setOpen(false)
    setDetails(false)

    setSaved(true)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setSaved(false), 2500)
  }, [])

  const acceptAll = () => save({ analytics: true, functional: true, marketing: true })
  const rejectAll = () => save({ analytics: false, functional: false, marketing: false })
  const saveChoice = () => save(choice)

  return (
    <>
      {saved && (
        <p className="cc-toast" role="status">
          <span aria-hidden="true">✓</span>
          Cookie preferences saved.
        </p>
      )}

      {open && (
        <div className="cc-wrap" role="dialog" aria-label="Cookie and privacy consent">
          <div className="cc-banner">
            <div className="cc-head">
              <span className="cc-mark" aria-hidden="true">🍪</span>

              <div className="cc-copy">
                <p className="cc-title">
                  We value your privacy &amp; transparency
                  <span className="cc-badge">Nothing optional without your consent</span>
                </p>
                <p className="cc-text">
                  techcadd stores one small record in your browser: the choice you make here.
                  We run no analytics or advertising cookies today, and none would ever load
                  without your say-so. We respect your choices and never sell student data.
                </p>
              </div>

              {/* Closes the notice without recording an answer — see the
                  note at the top of this file. */}
              <button
                type="button"
                className="cc-close"
                onClick={() => setOpen(false)}
                aria-label="Close without choosing"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <ul className="cc-pillars">
              <li>
                <ShieldIcon />
                1-Year Expiry Limit
              </li>
              <li className="is-green">
                <CheckIcon />
                Zero Third-Party Data Sale
              </li>
              <li>
                <CheckIcon />
                Consent Reference Saved
              </li>
              <li className="cc-pillars-link">
                <SmartLink href="/cookie-policy">Full Cookie Policy →</SmartLink>
              </li>
            </ul>

            {details && (
              <ul className="cc-cats" id="cc-breakdown">
                {CATEGORIES.map((category) => {
                  const on = category.locked ? true : Boolean(choice[category.key])
                  return (
                    <li key={category.key}>
                      <div className="cc-cat-body">
                        <p className="cc-cat-name">
                          {category.label}
                          <span className={`cc-cat-badge${on && !category.locked ? ' is-on' : ''}`}>
                            {category.badge}
                          </span>
                        </p>
                        <p className="cc-cat-text">{category.description}</p>
                        <p className="cc-cat-meta">
                          <span>
                            <b>Legal Basis:</b> {category.basis}
                          </span>
                          <span>
                            <b>Cookies:</b> <code>{category.cookies.join(', ')}</code>
                          </span>
                          <span>
                            <b>Retention:</b> {category.retention}
                          </span>
                        </p>
                      </div>

                      <button
                        type="button"
                        className={`cc-switch${on ? ' is-on' : ''}${category.locked ? ' cc-switch--locked' : ''}`}
                        role="switch"
                        aria-checked={on}
                        aria-label={category.label}
                        disabled={category.locked}
                        onClick={() =>
                          setChoice((current) => ({
                            ...current,
                            [category.key]: !current[category.key as Optional]
                          }))
                        }
                      >
                        <span className="cc-switch-knob" />
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}

            <div className="cc-actions">
              <div className="cc-actions-main">
                <button type="button" className="cc-btn cc-btn--primary" onClick={acceptAll}>
                  Accept All Cookies
                </button>
                <button type="button" className="cc-btn cc-btn--outline" onClick={rejectAll}>
                  Reject Non-Essential
                </button>
                {details && (
                  <button type="button" className="cc-btn cc-btn--soft" onClick={saveChoice}>
                    Save Preferences
                  </button>
                )}
              </div>

              <button
                type="button"
                className="cc-manage"
                onClick={() => setDetails((value) => !value)}
                aria-expanded={details}
                aria-controls="cc-breakdown"
              >
                {details ? 'Hide Cookie Breakdown ▲' : 'Manage Preferences ▼'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
