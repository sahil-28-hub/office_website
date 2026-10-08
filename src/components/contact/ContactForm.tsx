'use client'

import { useMemo, useRef, useState } from 'react'
import ContactIcon from './icons'
import { useReveal } from '../../hooks/useCourseMotion'
import { useSecurityCheck } from '../../hooks/useSecurityCheck'
import SecurityCheck from '../common/SecurityCheck'
import { PHONE_DISPLAY, PHONE_DIAL } from '../../data/contact'
import type { SiteSettings } from '../../lib/siteSettings'
import { submitLead, leadErrorMessage, LEAD_SOURCES } from '../../lib/submitLead'
import './ContactForm.css'

/* ------------------------------------------------------------------
   The message form on /contact.

   The card above this one carries the addresses; the desks below it
   carry the call, WhatsApp and email buttons. This is the third way
   in — for the visitor who would rather write than ring, and the only
   one that leaves a record in the database rather than in somebody's
   inbox.

   It writes one row to `leads` under the source "contact", down the
   same path every other form on the site takes — see
   src/lib/submitLead.js and server/routes/leads.js. It is not a
   separate table and not a separate endpoint: a contact message is a
   name, a number and something they want to say, which is exactly
   what a lead is.

   The three anti-spam layers are the same ones the course enquiry
   uses, in the same order: an off-screen field only a script fills,
   how long the form was open, and a worded security question. The
   first two are checked again on the server, which is the check that
   counts.
------------------------------------------------------------------ */

const EMPTY = { name: '', phone: '', email: '', subject: '', message: '' }

/* What the subject dropdown offers. Free text would let a scraped
   endpoint invent its own categories in the team's inbox, and the
   value travels in `details` rather than as a column, so adding one
   here needs no migration. */
const SUBJECTS = [
  'Course enquiry',
  'Fees and batch dates',
  'Placement and careers',
  'Corporate or college training',
  'Feedback or complaint',
  'Something else'
]

/* Catches the ordinary mistakes without a round trip. The server
   validates all of it again — this is a courtesy, not a gate, and it
   deliberately mirrors the server's rules so the two never disagree
   about what is acceptable. */
function validate(values) {
  const errors = {}

  const name = values.name.trim()
  if (!name) {
    errors.name = 'Please tell us your name.'
  } else if (!/^[\p{L}\p{M}][\p{L}\p{M}\s.'-]{1,119}$/u.test(name)) {
    errors.name = 'Please use letters only for your name.'
  }

  const digits = values.phone.replace(/\D/g, '').slice(-10)
  if (!/^[6-9]\d{9}$/.test(digits)) {
    errors.phone = 'Please enter a 10-digit mobile number starting with 6, 7, 8 or 9.'
  }

  /* Optional, but if they typed something it should be an address —
     an unusable one is worse than none, because the team will try it. */
  const email = values.email.trim()
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = 'That email address does not look right.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us what you would like to know.'
  } else if (values.message.length > 2000) {
    errors.message = 'Please keep the message under 2000 characters.'
  }

  return errors
}

/**
 * @param settings the CMS settings row. The form offers a phone number
 *   twice — as an alternative to writing, and again if the send fails —
 *   and both must be the number the rest of the site prints.
 */
export default function ContactForm({ settings }: { settings?: SiteSettings } = {}) {
  const phoneDisplay = settings?.phoneDisplay || PHONE_DISPLAY
  const phoneDial = settings?.phoneDial || PHONE_DIAL

  const sectionRef = useReveal()
  const firstFieldRef = useRef(null)
  const captchaRef = useRef(null)

  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') /* idle | sending | sent | error */
  const [failure, setFailure] = useState('')

  const security = useSecurityCheck()

  /* the two signals the visitor never sees */
  const [honeypot, setHoneypot] = useState('')
  const startedAt = useMemo(() => Date.now(), [])

  const set = (field) => (event) => {
    const { value } = event.target
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const submit = async (event) => {
    event.preventDefault()
    setFailure('')

    const found = validate(values)
    if (Object.keys(found).length) {
      setErrors(found)
      const first = Object.keys(found)[0]
      document.getElementById(`cf-${first}`)?.focus()
      return
    }

    if (!security.payload) {
      setErrors((e) => ({ ...e, captcha: 'Please answer the security check.' }))
      captchaRef.current?.focus()
      return
    }

    setStatus('sending')

    const result = await submitLead({
      source: LEAD_SOURCES.contact,
      name: values.name,
      phone: values.phone,
      email: values.email,
      message: values.message,
      /* JSON on the row rather than a column of its own, so a new
         field on this one form does not need a migration for all six */
      details: { subject: values.subject || 'Not specified' },
      captcha: security.payload,
      startedAt,
      honeypot
    })

    /* a challenge answers one submission, so a new one either way */
    security.refresh()

    if (result.ok) {
      setStatus('sent')
      setValues(EMPTY)
      setErrors({})
      return
    }

    setStatus('error')
    setFailure(leadErrorMessage(result.error))

    /* the server answers a validation failure with a field map, so the
       form can point at the input that was actually rejected */
    if (result.fields) {
      setErrors(result.fields)
      const first = Object.keys(result.fields)[0]
      if (first === 'captcha') captchaRef.current?.focus()
      else document.getElementById(`cf-${first}`)?.focus()
    }
  }

  return (
    <section className="cform" id="contact-form" ref={sectionRef}>
      <div className="shell cform-inner">
        <div className="cform-copy" data-reveal>
          <p className="cform-eyebrow">Write to us</p>
          <h2 className="cform-title">Send us a message</h2>
          <p className="cform-blurb">
            Tell us what you need and a counsellor gets back to you the same
            working day. Every message reaches the team directly — nothing is
            handed to an auto-responder.
          </p>

          <ul className="cform-points">
            <li>
              <ContactIcon name="clock" size={17} />
              <span>Answered the same working day</span>
            </li>
            <li>
              <ContactIcon name="pin" size={17} />
              <span>Ludhiana campus, Punjab</span>
            </li>
          </ul>

          <p className="cform-call">
            Would rather talk now? <a href={`tel:${phoneDial}`}>{phoneDisplay}</a>
          </p>
        </div>

        <form
          className="cform-form"
          onSubmit={submit}
          noValidate
          data-reveal
          style={{ '--d': '120ms' }}
        >
          {/* Hidden from people, visible to scripts. A browser never
              focuses or fills it; a bot fills every input it finds. */}
          <div className="cform-hp" aria-hidden="true">
            <label htmlFor="cf-website">Leave this field empty</label>
            <input
              id="cf-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="cform-row">
            <div className="cform-group">
              <label htmlFor="cf-name">Your name</label>
              <input
                id="cf-name"
                ref={firstFieldRef}
                name="name"
                type="text"
                autoComplete="name"
                maxLength={120}
                placeholder="Enter your full name"
                value={values.name}
                onChange={set('name')}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'cf-name-error' : undefined}
              />
              {errors.name && (
                <span className="cform-error" id="cf-name-error">{errors.name}</span>
              )}
            </div>

            <div className="cform-group">
              <label htmlFor="cf-phone">Mobile number</label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={20}
                placeholder="10 digits, starts 6-9"
                value={values.phone}
                onChange={set('phone')}
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'cf-phone-error' : undefined}
              />
              {errors.phone && (
                <span className="cform-error" id="cf-phone-error">{errors.phone}</span>
              )}
            </div>
          </div>

          <div className="cform-row">
            <div className="cform-group">
              <label htmlFor="cf-email">
                Email <span className="cform-optional">(optional)</span>
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={190}
                placeholder="you@example.com"
                value={values.email}
                onChange={set('email')}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'cf-email-error' : undefined}
              />
              {errors.email && (
                <span className="cform-error" id="cf-email-error">{errors.email}</span>
              )}
            </div>

            <div className="cform-group">
              <label htmlFor="cf-subject">What is it about?</label>
              <select
                id="cf-subject"
                name="subject"
                className="cform-select"
                value={values.subject}
                onChange={set('subject')}
              >
                <option value="">Choose a topic</option>
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="cform-group">
            <label htmlFor="cf-message">Your message</label>
            <textarea
              id="cf-message"
              name="message"
              rows={5}
              maxLength={2000}
              placeholder="Ask about batch timings, fees, placements or anything else"
              value={values.message}
              onChange={set('message')}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'cf-message-error' : undefined}
            />
            {errors.message && (
              <span className="cform-error" id="cf-message-error">{errors.message}</span>
            )}
          </div>

          {/* A worded question rather than a drawn one, so it can be
              answered with a screen reader. See hooks/useSecurityCheck. */}
          <SecurityCheck
            id="cf-captcha"
            variant="panel"
            ground="light"
            security={security}
            inputRef={captchaRef}
            error={errors.captcha}
            onClearError={() =>
              errors.captcha && setErrors((x) => ({ ...x, captcha: undefined }))
            }
          />

          <button
            className="cform-submit"
            type="submit"
            disabled={status === 'sending' || !security.ready}
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          <p className="cform-status" role="status" aria-live="polite">
            {status === 'sent' && (
              <span className="is-ok">
                <ContactIcon name="check" size={15} />
                Thanks — your message is on its way. We reply within one working
                day.
              </span>
            )}
            {status === 'error' && failure && (
              <span className="is-bad">
                {failure} <a href={`tel:${phoneDial}`}>{phoneDisplay}</a>
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  )
}
