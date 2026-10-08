'use client'

import { useMemo, useRef, useState } from 'react'
import { useMagnetic, useReveal } from '../../hooks/useCourseMotion'
import { CTA } from '../../data/aboutPage'
import AboutIcon from './icons'
import { submitLead, leadErrorMessage, LEAD_SOURCES } from '../../lib/submitLead'
import './AboutCta.css'

/* Same contract as every other form on the site: one call to
   submitLead, which posts to /api/leads and lands as one row in the
   leads table. See src/lib/submitLead.js. */

/* §15 — start building your career today. */
export default function AboutCta() {
  const ref = useReveal()
  const callRef = useMagnetic()
  const inputRef = useRef<HTMLInputElement>(null)

  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle') /* idle | sending | sent | error */

  /* the two signals the visitor never sees: when the section
     rendered, and a field only a script fills */
  const startedAt = useMemo(() => Date.now(), [])
  const [honeypot, setHoneypot] = useState('')

  const submit = async (event) => {
    event.preventDefault()

    const digits = phone.replace(/\D/g, '').slice(-10)
    if (!/^[6-9]\d{9}$/.test(digits)) {
      setError('Please enter a valid 10-digit mobile number.')
      inputRef.current?.focus()
      return
    }
    setError('')
    setStatus('sending')

    const result = await submitLead({
      source: LEAD_SOURCES.aboutCta,
      phone,
      message: 'Requested a callback from the about page.',
      startedAt,
      honeypot
    })

    if (result.ok) {
      setStatus('sent')
      setPhone('')
      return
    }

    setStatus('error')
    setError(`${leadErrorMessage(result.error)} ${CTA.phoneDisplay}`)
  }

  return (
    <section className="ap-dark ap-dark--deep ap-sec apcta" id="start" ref={ref}>
      <span className="apcta-glow" aria-hidden="true" />

      <div className="shell apcta-inner">
        <p className="ap-eyebrow" data-reveal>{CTA.eyebrow}</p>

        <h2 className="apcta-title" data-reveal style={{ '--d': '80ms' }}>{CTA.title}</h2>

        <p className="apcta-lead" data-reveal style={{ '--d': '160ms' }}>{CTA.lead}</p>

        <form className="apcta-form" onSubmit={submit} noValidate data-reveal style={{ '--d': '240ms' }}>
          {/* hidden from people, filled by bots */}
          <div className="apcta-hp" aria-hidden="true">
            <label htmlFor="apcta-website">Leave this field empty</label>
            <input
              id="apcta-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <label className="sr-only" htmlFor="apcta-phone">Your mobile number</label>
          <input
            id="apcta-phone"
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
            aria-describedby={error ? 'apcta-error' : undefined}
          />
          <button className="ap-btn ap-btn--primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Request a callback'}
            <AboutIcon name="arrowRight" />
          </button>
        </form>

        <p className="apcta-status" role="status" aria-live="polite" id="apcta-error">
          {error && <span className="is-bad">{error}</span>}
          {!error && status === 'sent' && (
            <span className="is-ok">
              <AboutIcon name="check" size={15} />
              Thanks — a counsellor calls back within one working day.
            </span>
          )}

        </p>

        <a
          className="apcta-call"
          href={`tel:${CTA.phoneDial}`}
          ref={callRef}
          data-reveal
          style={{ '--d': '320ms' }}
        >
          <span className="apcta-call-ico">
            <AboutIcon name="phone" filled />
          </span>
          <span>
            <small>Or call now</small>
            <b>{CTA.phoneDisplay}</b>
          </span>
        </a>

        <ul className="apcta-assurances" data-reveal style={{ '--d': '400ms' }}>
          {CTA.assurances.map((item) => (
            <li key={item}>
              <AboutIcon name="check" size={16} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
