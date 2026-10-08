'use client'

import { useMemo, useRef, useState } from 'react'
import './Cta.css'
import WriteIn from '../common/WriteIn'
import { submitLead, leadErrorMessage, LEAD_SOURCES } from '../../lib/submitLead'
import { useSiteSettings } from '../common/SiteSettingsProvider'

/* The fallback, for a render outside the provider. The live values
   come from the CMS settings row — see SiteSettingsProvider. */
const PHONE_DISPLAY = '+91 98881 22667'
const PHONE_DIAL = '+919888122667'

const ASSURANCES = ['Free career counselling', 'No registration fee', 'Placement support included']

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 3h2.2a1 1 0 0 1 .95.68l1.03 3.1a1 1 0 0 1-.28 1.05l-1.4 1.28a12.6 12.6 0 0 0 5.05 5.05l1.28-1.4a1 1 0 0 1 1.05-.28l3.1 1.03a1 1 0 0 1 .68.95v2.2A2.44 2.44 0 0 1 17.8 19 14.8 14.8 0 0 1 5 6.2 2.44 2.44 0 0 1 6.6 3Z" />
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

export default function Cta() {
  /*
    The number this band offers has to be the number the footer
    offers, on every one of the sixteen pages it appears on. It was a
    second hard-coded copy, so connecting the footer to the CMS left
    this one quoting the old one.
  */
  const settings = useSiteSettings()
  const phoneDisplay = settings?.phoneDisplay || PHONE_DISPLAY
  const phoneDial = settings?.phoneDial || PHONE_DIAL

  const inputRef = useRef(null)
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle') /* idle | sending | sent | error */

  /* when the section first rendered, for the server's time-on-form
     check — a number typed and sent inside two seconds is a script */
  const startedAt = useMemo(() => Date.now(), [])
  const [honeypot, setHoneypot] = useState('')

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const digits = phone.replace(/\D/g, '').slice(-10)

    if (!/^[6-9]\d{9}$/.test(digits)) {
      setError('Please enter a valid 10-digit mobile number.')
      inputRef.current?.focus()
      return
    }

    setError('')
    setStatus('sending')

    /* One row in the leads table, same as every other form on the
       site — see src/lib/submitLead.js. */
    const result = await submitLead({
      source: LEAD_SOURCES.homeCta,
      phone,
      message: 'Requested a demo class from the home page.',
      startedAt,
      honeypot
    })

    if (result.ok) {
      setStatus('sent')
      setPhone('')
      return
    }

    setStatus('error')
    setError(`${leadErrorMessage(result.error)} ${phoneDisplay}`)
  }

  return (
    <section className="cta" id="demo">
      <div className="cta-bg" aria-hidden="true">
        <span className="cta-grid" />
        <span className="cta-ring" />
        <span className="cta-ring cta-ring--small" />
        <span className="cta-glow" />
      </div>

      <div className="shell cta-inner">
        <p className="cta-eyebrow">Ready to get started?</p>

        <h2 className="cta-title"><WriteIn>Start building your career today.</WriteIn></h2>

        <p className="cta-sub">
          Talk to a counsellor today. One call is usually enough to know which track fits your
          degree, your schedule and the job you want.
        </p>

        <a className="cta-call" href={`tel:${phoneDial}`}>
          <span className="cta-call-icon">
            <PhoneIcon />
          </span>
          <span className="cta-call-text">
            <small>Call now</small>
            <b>{phoneDisplay}</b>
          </span>
        </a>

        <form className="cta-form" onSubmit={submit} noValidate>
          {/* hidden from people, filled by bots — the wrapper is
              aria-hidden and the input is out of the tab order, so
              nobody reading the page can reach it */}
          <div className="cta-hp" aria-hidden="true">
            <label htmlFor="cta-website">Leave this field empty</label>
            <input
              id="cta-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="cta-field">
            <label className="sr-only" htmlFor="cta-phone">Your mobile number</label>
            <input
              id="cta-phone"
              ref={inputRef}
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="Your mobile number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
                if (error) setError('')
              }}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'cta-error' : undefined}
            />
          </div>
          <button className="cta-submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Book Demo'}
          </button>
        </form>

        <p className="cta-error" id="cta-error" role="alert">
          {error}
          {!error && status === 'sent' && (
            <span className="cta-ok">Thanks — a counsellor calls back within one working day.</span>
          )}
        </p>

        <ul className="cta-assurances">
          {ASSURANCES.map((item) => (
            <li key={item}>
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
