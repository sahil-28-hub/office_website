'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Icon from './icons'
import SecurityCheck from '../common/SecurityCheck'
import { useSecurityCheck } from '../../hooks/useSecurityCheck'
import { submitLead, leadErrorMessage, LEAD_SOURCES } from '../../lib/submitLead'
import './BrochureGate.css'
import { useSiteSettings } from '../common/SiteSettingsProvider'

/* ==================================================================
   Download the brochure.

   The hero button used to say "Download curriculum" and scrolled to
   the enquiry form, which was a small lie - nothing downloaded. It
   opens this instead: name, number, the security check, and the
   request is on its way.

   The exchange is stated plainly at the top rather than buried. A
   gate that pretends not to be one gets abandoned; one that says
   "leave a number, get the PDF" gets filled in.

   Where the deployment has a lead endpoint that returns a signed
   `download` URL, the file starts immediately. Where it does not, the
   details are still captured and the panel says so rather than
   claiming a download that never happened.
================================================================== */
export default function BrochureGate({ course, open, onClose }) {
  /* The same number the CTA band and the footer print — one last
     hard-coded copy, on the failure message of the brochure form. */
  const settings = useSiteSettings()
  const phoneDial = settings?.phoneDial || '+919888122667'
  const phoneDisplay = settings?.phoneDisplay || '+91 98881 22667'

  const dialogRef = useRef(null)
  const nameRef = useRef(null)
  const closeRef = useRef(null)
  const captchaRef = useRef(null)
  const linkRef = useRef(null)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState({})
  const [failure, setFailure] = useState('')
  const [status, setStatus] = useState('idle') /* idle | sending | done */
  const [honeypot, setHoneypot] = useState('')
  const [startedAt, setStartedAt] = useState(0)

  /* the challenge is made when the dialog opens, not while it sits
     closed behind the page */
  const security = useSecurityCheck(open)

  const reset = useCallback(() => {
    setName('')
    setPhone('')
    setErrors({})
    setFailure('')
    setStatus('idle')
    setStartedAt(Date.now())
  }, [])

  useEffect(() => {
    if (open) reset()
  }, [open, reset])

  /* body scroll lock, initial focus, and focus returned on close */
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [open])

  /* Escape closes, and Tab is kept inside the dialog - a modal you can
     tab out of behind is a modal for sighted mouse users only */
  useEffect(() => {
    if (!open) return

    const onKey = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const focusable = dialogRef.current?.querySelectorAll(
        'button, input, textarea, a[href], [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable?.length) return

      const list = Array.from(focusable).filter((el) => !el.disabled && el.offsetParent !== null)
      const first = list[0]
      const last = list[list.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const digits = useMemo(() => phone.replace(/\D/g, '').slice(-10), [phone])

  const submit = async (event) => {
    event.preventDefault()
    setFailure('')

    const found = {}
    if (!name.trim()) found.name = 'Please tell us your name.'
    else if (!/^[\p{L}\p{M}][\p{L}\p{M}\s.'-]{1,119}$/u.test(name.trim())) {
      found.name = 'Please use letters only for your name.'
    }
    if (!/^[6-9]\d{9}$/.test(digits)) {
      found.phone = 'Please enter a valid 10-digit mobile number.'
    }

    if (Object.keys(found).length) {
      setErrors(found)
      ;(found.name ? nameRef : dialogRef).current?.focus?.()
      return
    }

    if (!security.payload) {
      setErrors({ captcha: 'Please answer the security check.' })
      captchaRef.current?.focus()
      return
    }

    setErrors({})
    setStatus('sending')

    const result = await submitLead({
      source: LEAD_SOURCES.brochure,
      name,
      phone,
      course: course.name,
      courseSlug: course.slug,
      message: `Requested the ${course.short} brochure.`,
      details: {
        category: course.category,
        duration: course.duration,
        centre: `techcadd ${course.city}`
      },
      captcha: security.payload,
      startedAt,
      honeypot
    })

    /* a challenge answers one submission, so a new one either way */
    security.refresh()

    if (result.ok && result.download) {
      /* An anchor click rather than assigning location: the response
         is an attachment, and a real link with `download` is what
         browsers treat as a user-initiated save rather than a
         navigation that might be blocked. */
      const link = linkRef.current
      if (link) {
        link.href = result.download
        link.click()
      }
      setStatus('done')
      return
    }

    if (result.ok) {
      /* captured, but no file came back - the enquiry is not lost, so
         say what happened rather than showing a generic failure */
      setStatus('done')
      setFailure(
        'Your details are with us. A counsellor will send the brochure across and call you about the next batch.'
      )
      return
    }

    setStatus('idle')
    setFailure(leadErrorMessage(result.error))
    if (result.fields) setErrors(result.fields)
  }

  if (!open) return null

  return (
    <div
      className="bgate-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="bgate"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bgate-title"
        ref={dialogRef}
      >
        <button className="bgate-close" type="button" onClick={onClose} aria-label="Close" ref={closeRef}>
          <Icon name="close" size={18} />
        </button>

        {/* the file the browser saves; never visible */}
        <a ref={linkRef} className="sr-only" download aria-hidden="true" tabIndex={-1}>
          brochure
        </a>

        {status === 'done' ? (
          <div className="bgate-done">
            <span className="bgate-tick" aria-hidden="true">
              <Icon name="check" size={26} />
            </span>
            <h2 id="bgate-title">Your {course.short} brochure is on its way</h2>
            <p>
              {failure ||
                `The full ${course.short} brochure - curriculum, tools, careers and
                 fees - is saving to your device now.`}
            </p>
            <p className="bgate-done-note">
              A counsellor will also call you about the next batch. If nothing arrives,
              call <a href={`tel:${phoneDial}`}>{phoneDisplay}</a>.
            </p>
            <button className="bgate-submit" type="button" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <p className="bgate-eyebrow">
              <Icon name="download" size={15} />
              Course brochure
            </p>

            <h2 className="bgate-title" id="bgate-title">
              Get the {course.short} brochure
            </h2>

            <p className="bgate-lead">
              The full curriculum, the tools, the projects and where it leads - as a
              PDF. Leave your name and number and it is on its way.
            </p>

            <ul className="bgate-contents">
              <li><Icon name="check" size={14} />{(course.modules || []).length} modules, week by week</li>
              <li><Icon name="check" size={14} />Every tool you will work in</li>
              <li><Icon name="check" size={14} />Career paths and batch details</li>
            </ul>

            <form className="bgate-form" onSubmit={submit} noValidate>
              {/* hidden from people, filled by bots */}
              <div className="bgate-hp" aria-hidden="true">
                <label htmlFor="bgate-website">Leave this field empty</label>
                <input
                  id="bgate-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="bgate-field">
                <label htmlFor="bgate-name">Your Name</label>
                <input
                  id="bgate-name"
                  ref={nameRef}
                  type="text"
                  autoComplete="name"
                  maxLength={120}
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    if (errors.name) setErrors((x) => ({ ...x, name: undefined }))
                  }}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && <span className="bgate-error">{errors.name}</span>}
              </div>

              <div className="bgate-field">
                <label htmlFor="bgate-phone">Phone Number</label>
                <input
                  id="bgate-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={20}
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    if (errors.phone) setErrors((x) => ({ ...x, phone: undefined }))
                  }}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                />
                {errors.phone && <span className="bgate-error">{errors.phone}</span>}
              </div>

              <div className="bgate-field">
                <label htmlFor="bgate-course">Course or Service</label>
                <div className="bgate-locked">
                  <input id="bgate-course" type="text" value={course.name} readOnly />
                  <Icon name="check" size={16} />
                </div>
              </div>

              <SecurityCheck
                id="bgate-captcha"
                security={security}
                inputRef={captchaRef}
                error={errors.captcha}
                onClearError={() => errors.captcha && setErrors((x) => ({ ...x, captcha: undefined }))}
              />

              <button
                className="bgate-submit"
                type="submit"
                disabled={status === 'sending' || !security.ready}
              >
                {status === 'sending' ? 'Preparing…' : 'Download brochure'}
                <Icon name="download" size={16} />
              </button>

              {failure && (
                <p className="bgate-failure" role="alert">{failure}</p>
              )}

              <p className="bgate-foot">
                We never share your number. Expect a call within working hours.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
