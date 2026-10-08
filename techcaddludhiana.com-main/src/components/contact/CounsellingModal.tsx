'use client'

import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { submitLead, leadErrorMessage, LEAD_SOURCES } from '../../lib/submitLead'
import {
  COUNSELLING_SLOTS,
  bookingDateError,
  lastBookableDate,
  todayInIndia
} from '../../lib/counselling'
import { PHONE_DISPLAY } from '../../data/contact'
import ContactIcon from './icons'

type Fields = { name: string; phone: string; email: string; date: string; slot: string }
type Errors = Partial<Record<keyof Fields, string>>

const EMPTY: Fields = { name: '', phone: '', email: '', date: '', slot: '' }

const STEPS = ['Your details', 'Date & time', 'Confirm']

const PROMISES = ['30-minute personal call', 'Choose a convenient time', 'No fee or obligation']

/* Everything inside the panel a keyboard can land on, for the focus trap. */
const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

const digitsOf = (value: string) => value.replace(/\D/g, '').slice(-10)

/* Only the fields the given step shows, so "Next" never fails on a
   later one. The same rules the server applies — see lib/validate.ts. */
function validate(v: Fields, step: number): Errors {
  const e: Errors = {}
  if (step === 0) {
    if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
    if (!/^[6-9]\d{9}$/.test(digitsOf(v.phone))) e.phone = 'Enter a valid 10-digit mobile number.'
    /* optional, but checked when given */
    if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) {
      e.email = 'Enter a valid email address.'
    }
  }
  if (step === 1) {
    const dateProblem = bookingDateError(v.date)
    if (dateProblem) e.date = dateProblem
    if (!v.slot) e.slot = 'Pick a time slot.'
  }
  return e
}

/** "2026-10-15" -> "Thursday, 15 October 2026". */
function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

/* ------------------------------------------------------------------
   "Book your virtual counselling" — a three-step booking dialog.

   Details, then a day and a half-hour slot, then a summary to confirm.
   It posts through submitLead like every other form, so the booking is
   written to the leads table and forwarded to the CMS's enquiry list —
   filed as "Virtual Counselling", with the date and slot in columns of
   their own for the team to filter and reschedule on.
------------------------------------------------------------------ */
export default function CounsellingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const id = useId()
  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState(0)
  const [values, setValues] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  /* the two signals the visitor never sees — see submitLead */
  const [startedAt, setStartedAt] = useState(0)
  const [honeypot, setHoneypot] = useState('')
  /* Mirrors `sending` synchronously — state updates are not immediate,
     and a double click would otherwise book the call twice. */
  const sendingRef = useRef(false)
  const panelRef = useRef<HTMLDivElement>(null)
  /* The element that opened the dialog, so focus can be handed back. */
  const restoreRef = useRef<HTMLElement | null>(null)

  /* The portal needs `document`, which the server render does not have. */
  useEffect(() => setMounted(true), [])

  /* Escape dismisses, Tab is trapped inside the panel, the page behind
     is held still. */
  useEffect(() => {
    if (!open) return undefined

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return

      const panel = panelRef.current
      if (!panel) return

      const stops = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      )
      if (!stops.length) return

      const first = stops[0]
      const last = stops[stops.length - 1]
      const active = document.activeElement

      if (e.shiftKey && (active === first || !panel.contains(active))) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open, onClose])

  /* A fresh dialog every time it is opened. */
  useEffect(() => {
    if (open) {
      restoreRef.current = document.activeElement as HTMLElement | null
      setStep(0)
      setValues(EMPTY)
      setErrors({})
      setSent(false)
      setSending(false)
      sendingRef.current = false
      setServerError(null)
      setStartedAt(Date.now())
      setHoneypot('')
    } else {
      restoreRef.current?.focus?.()
      restoreRef.current = null
    }
  }, [open])

  /* Each step starts on its first field, so a keyboard user is not
     left on a button that has just been replaced. */
  useEffect(() => {
    if (!open) return
    panelRef.current?.querySelector<HTMLElement>('[data-step-focus]')?.focus()
  }, [open, step, sent])

  const set = (key: keyof Fields) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }))
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e))
  }

  const submit = async (event: FormEvent) => {
    event.preventDefault()

    const found = validate(values, step)
    setErrors(found)
    setServerError(null)
    if (Object.keys(found).length) return

    if (step < STEPS.length - 1) {
      setStep(step + 1)
      return
    }

    if (sendingRef.current) return
    sendingRef.current = true
    setSending(true)

    const result = await submitLead({
      source: LEAD_SOURCES.counselling,
      name: values.name.trim(),
      phone: digitsOf(values.phone),
      email: values.email.trim() || undefined,
      /* The dialog books a conversation, not a course. */
      message: `Virtual counselling requested for ${formatDate(values.date)}, ${values.slot}.`,
      details: { preferredDate: values.date, preferredSlot: values.slot },
      startedAt,
      honeypot
    })

    sendingRef.current = false
    setSending(false)

    if (result.ok) {
      setSent(true)
      return
    }

    /* The server names the field that failed; send the visitor back to
       the step that holds it rather than leaving them on the summary. */
    const fields = (result.fields || {}) as Record<string, string>
    const mapped: Errors = {
      name: fields.name,
      phone: fields.phone,
      email: fields.email,
      date: fields.preferredDate,
      slot: fields.preferredSlot
    }
    if (mapped.name || mapped.phone || mapped.email) {
      setErrors(mapped)
      setStep(0)
      return
    }
    if (mapped.date || mapped.slot) {
      setErrors(mapped)
      setStep(1)
      return
    }

    setServerError(`${leadErrorMessage(result.error)} ${PHONE_DISPLAY}`)
  }

  if (!mounted || !open) return null

  const field = (key: keyof Fields) => `${id}-${key}`
  const describedBy = (key: keyof Fields) => (errors[key] ? `${field(key)}-error` : undefined)

  return createPortal(
    <div
      className="vcm-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="vcm"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
        ref={panelRef}
      >
        <button className="vcm-close" type="button" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        <aside className="vcm-side">
          <p className="vcm-eyebrow">Free · 1:1 · Virtual</p>
          <h2 className="vcm-title" id={`${id}-title`}>Book your virtual counselling</h2>
          <p className="vcm-lead">
            Tell us when suits you and a techcadd counsellor will call you at that time.
          </p>
          <ul className="vcm-promises">
            {PROMISES.map((promise) => (
              <li key={promise}>
                <ContactIcon name="check" size={15} />
                {promise}
              </li>
            ))}
          </ul>
        </aside>

        <div className="vcm-main">
          {sent ? (
            <div className="vcm-done" role="status">
              <span className="vcm-done-ico" aria-hidden="true">
                <ContactIcon name="check" size={26} />
              </span>
              <h3>Your session is requested</h3>
              <p>
                {formatDate(values.date)}, {values.slot}. A counsellor will call{' '}
                {digitsOf(values.phone)} at that time — if we need to move it, we will ring you first.
              </p>
              <button className="vcm-next" type="button" onClick={onClose} data-step-focus>
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <ol className="vcm-steps" aria-label="Booking steps">
                {STEPS.map((label, i) => (
                  <li
                    key={label}
                    className={i === step ? 'is-current' : i < step ? 'is-done' : undefined}
                    aria-current={i === step ? 'step' : undefined}
                  >
                    <span>{i < step ? <ContactIcon name="check" size={12} /> : i + 1}</span>
                    {label}
                  </li>
                ))}
              </ol>

              {/* hidden from people, filled by bots */}
              <div className="vcm-hp" aria-hidden="true">
                <label htmlFor={`${id}-website`}>Leave this field empty</label>
                <input
                  id={`${id}-website`}
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {step === 0 && (
                <div className="vcm-fields">
                  <div className="vcm-field">
                    <label htmlFor={field('name')}>Full name</label>
                    <input
                      id={field('name')}
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => set('name')(e.target.value)}
                      aria-invalid={errors.name ? 'true' : undefined}
                      aria-describedby={describedBy('name')}
                      data-step-focus
                    />
                    {errors.name && <p className="vcm-error" id={`${field('name')}-error`}>{errors.name}</p>}
                  </div>

                  <div className="vcm-field">
                    <label htmlFor={field('phone')}>Mobile number</label>
                    <input
                      id={field('phone')}
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="10 digits"
                      value={values.phone}
                      onChange={(e) => set('phone')(e.target.value)}
                      aria-invalid={errors.phone ? 'true' : undefined}
                      aria-describedby={describedBy('phone')}
                    />
                    {errors.phone && <p className="vcm-error" id={`${field('phone')}-error`}>{errors.phone}</p>}
                  </div>

                  <div className="vcm-field">
                    <label htmlFor={field('email')}>
                      Email <i>(optional)</i>
                    </label>
                    <input
                      id={field('email')}
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => set('email')(e.target.value)}
                      aria-invalid={errors.email ? 'true' : undefined}
                      aria-describedby={describedBy('email')}
                    />
                    {errors.email && <p className="vcm-error" id={`${field('email')}-error`}>{errors.email}</p>}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="vcm-fields">
                  <div className="vcm-field">
                    <label htmlFor={field('date')}>Preferred date</label>
                    {/* The icon is drawn here rather than left to the
                        browser: the native one is missing in some
                        browsers and near-invisible in others. The
                        native indicator is stretched over the whole
                        field and made transparent, so a click anywhere
                        on it opens the picker. */}
                    <div className="vcm-date">
                      <input
                        id={field('date')}
                        type="date"
                        min={todayInIndia()}
                        max={lastBookableDate()}
                        value={values.date}
                        onChange={(e) => set('date')(e.target.value)}
                        aria-invalid={errors.date ? 'true' : undefined}
                        aria-describedby={describedBy('date')}
                        data-step-focus
                      />
                      <span className="vcm-date-ico">
                        <CalendarIcon />
                      </span>
                    </div>
                    {errors.date ? (
                      <p className="vcm-error" id={`${field('date')}-error`}>{errors.date}</p>
                    ) : (
                      <p className="vcm-hint">Monday to Saturday, up to 10 days ahead.</p>
                    )}
                  </div>

                  <fieldset className="vcm-field vcm-slots" aria-describedby={describedBy('slot')}>
                    <legend>Time slot</legend>
                    <div>
                      {COUNSELLING_SLOTS.map((slot) => (
                        <label key={slot} className={values.slot === slot ? 'is-picked' : undefined}>
                          <input
                            type="radio"
                            name={`${id}-slot`}
                            value={slot}
                            checked={values.slot === slot}
                            onChange={() => set('slot')(slot)}
                          />
                          {slot}
                        </label>
                      ))}
                    </div>
                    {errors.slot && <p className="vcm-error" id={`${field('slot')}-error`}>{errors.slot}</p>}
                  </fieldset>
                </div>
              )}

              {step === 2 && (
                <dl className="vcm-summary">
                  <div>
                    <dt>Name</dt>
                    <dd>{values.name.trim()}</dd>
                  </div>
                  <div>
                    <dt>Mobile</dt>
                    <dd>{digitsOf(values.phone)}</dd>
                  </div>
                  {values.email.trim() && (
                    <div>
                      <dt>Email</dt>
                      <dd>{values.email.trim()}</dd>
                    </div>
                  )}
                  <div>
                    <dt>Date</dt>
                    <dd>{formatDate(values.date)}</dd>
                  </div>
                  <div>
                    <dt>Time</dt>
                    <dd>{values.slot}</dd>
                  </div>
                </dl>
              )}

              {serverError && <p className="vcm-error vcm-error--server" role="alert">{serverError}</p>}

              <div className="vcm-actions">
                {step > 0 && (
                  <button className="vcm-back" type="button" onClick={() => setStep(step - 1)} disabled={sending}>
                    Back
                  </button>
                )}
                <button
                  className="vcm-next"
                  type="submit"
                  disabled={sending}
                  {...(step === 2 ? { 'data-step-focus': true } : {})}
                >
                  {step < 2 ? 'Next' : sending ? 'Booking…' : 'Confirm booking'}
                  <ContactIcon name="arrowRight" size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
