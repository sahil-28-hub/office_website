'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Icon from './icons'
import { useCourse } from './CourseContext'
import { useReveal } from '../../hooks/useCourseMotion'
import { useSecurityCheck } from '../../hooks/useSecurityCheck'
import SecurityCheck from '../common/SecurityCheck'
import { submitLead, leadErrorMessage, LEAD_SOURCES } from '../../lib/submitLead'
import './CourseEnquiry.css'

/* ------------------------------------------------------------------
   The last section above the footer.

   Four questions and a security check — name, number, what they want
   and anything they would like to say. "Course or Service" is filled
   in from the page the visitor is standing on and is not theirs to
   type: the enquiry is about this course, so the field states that
   rather than asking them to repeat the title of the page.

   Where the enquiry goes is lib/submitLead.js's problem, not this
   component's. It used to carry its own fetch, its own error copy and
   its own mailto fallback, and the brochure gate carried a second
   copy of all three.
------------------------------------------------------------------ */
const PHONE_DISPLAY = '+91 98881 22667'
const PHONE_DIAL = '+919888122667'

const PARTICLES = [
  { x: 12, y: 26, d: 0 },
  { x: 26, y: 68, d: 1.4 },
  { x: 47, y: 18, d: 2.6 },
  { x: 68, y: 74, d: 0.8 },
  { x: 82, y: 34, d: 3.2 },
  { x: 91, y: 62, d: 2 }
]

const EMPTY = { name: '', phone: '', message: '' }

/* Catches the ordinary mistakes without a round trip. Where a server
   is configured it validates everything again — this is a courtesy,
   not a gate. */
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
    errors.phone = 'Please enter a valid 10-digit mobile number.'
  }

  if (values.message.length > 2000) {
    errors.message = 'Please keep the message under 2000 characters.'
  }

  return errors
}

export default function CourseEnquiry() {
  const course = useCourse()
  const sectionRef = useReveal()
  const firstFieldRef = useRef(null)
  const captchaRef = useRef(null)

  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') /* idle | sending | sent | error */
  const [failure, setFailure] = useState('')

  const security = useSecurityCheck()

  /* The two anti-spam signals the visitor never sees: when the form
     appeared, and a field only a bot would fill. */
  const [honeypot, setHoneypot] = useState('')
  const startedAt = useMemo(() => Date.now(), [course.slug])

  /* moving to another course resets the form and its result state */
  useEffect(() => {
    setValues(EMPTY)
    setErrors({})
    setStatus('idle')
    setFailure('')
  }, [course.slug])

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
      firstFieldRef.current?.focus()
      return
    }

    if (!security.payload) {
      setErrors((e) => ({ ...e, captcha: 'Please answer the security check.' }))
      captchaRef.current?.focus()
      return
    }

    setStatus('sending')

    const result = await submitLead({
      source: LEAD_SOURCES.courseEnquiry,
      name: values.name,
      phone: values.phone,
      course: course.name,
      courseSlug: course.slug,
      message: values.message,
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

    if (result.ok) {
      setStatus('sent')
      setValues(EMPTY)
      setErrors({})
      return
    }

    setStatus('error')
    setFailure(leadErrorMessage(result.error))
    if (result.fields) {
      setErrors(result.fields)
      const first = Object.keys(result.fields)[0]
      if (first === 'captcha') captchaRef.current?.focus()
      else firstFieldRef.current?.focus()
    }
  }

  return (
    <section className="c-sec c-sec--dark cenq" id="course-enquire" ref={sectionRef}>
      <span className="cenq-field" aria-hidden="true" />
      <span className="c-grid-bg" aria-hidden="true" />
      <ul className="cenq-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <li key={i} style={{ left: `${p.x}%`, top: `${p.y}%`, '--d': `${p.d}s` }} />
        ))}
      </ul>

      <div className="shell cenq-inner">
        <div className="cenq-copy" data-reveal>
          {/* a course may bring its own closing call to action; the
              wording below is the default every other course uses */}
          <p className="c-eyebrow">{course.enquireEyebrow || 'Next batch'}</p>
          <h2 className="cenq-title">
            {course.enquireTitle || `Enquire about ${course.short}`}
          </h2>
          <p className="cenq-text">
            {course.enquireText ||
              `Send this form and a counsellor calls you back about this course
              specifically — batch dates, fees and whether it fits what you already
              know.`}
          </p>

          <ul className="cenq-facts">
            <li>
              <span>Course</span>
              <strong>{course.name}</strong>
            </li>
            <li>
              <span>Duration</span>
              <strong>{course.duration}</strong>
            </li>
            <li>
              <span>Mode</span>
              <strong>{course.mode}</strong>
            </li>
            <li>
              <span>Centre</span>
              <strong>techcadd {course.city}</strong>
            </li>
          </ul>

          <p className="cenq-call">
            Would rather talk now?{' '}
            <a href={`tel:${PHONE_DIAL}`}>{PHONE_DISPLAY}</a>
          </p>
        </div>

        <form
          className="cenq-form"
          onSubmit={submit}
          noValidate
          data-reveal
          style={{ '--d': '120ms' }}
        >
          {/* ---------------------------------------------------------
              Hidden from people, visible to scripts. A browser never
              focuses or fills it; a bot fills every input it finds.
          --------------------------------------------------------- */}
          <div className="cenq-hp" aria-hidden="true">
            <label htmlFor="cenq-website">Leave this field empty</label>
            <input
              id="cenq-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="cenq-row">
            <div className="cenq-field-group">
              <label htmlFor="cenq-name">Your Name</label>
              <input
                id="cenq-name"
                ref={firstFieldRef}
                name="name"
                type="text"
                autoComplete="name"
                maxLength={120}
                placeholder="Enter your full name"
                value={values.name}
                onChange={set('name')}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'cenq-name-error' : undefined}
              />
              {errors.name && (
                <span className="cenq-error" id="cenq-name-error">{errors.name}</span>
              )}
            </div>

            <div className="cenq-field-group">
              <label htmlFor="cenq-phone">Phone Number</label>
              <input
                id="cenq-phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={20}
                placeholder="10-digit mobile number"
                value={values.phone}
                onChange={set('phone')}
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'cenq-phone-error' : undefined}
              />
              {errors.phone && (
                <span className="cenq-error" id="cenq-phone-error">{errors.phone}</span>
              )}
            </div>
          </div>

          {/* ---------------------------------------------------------
              Filled from the course whose page this is. Read-only
              rather than disabled: a disabled field is skipped by the
              keyboard and by screen readers, and the whole point of
              this one is that the visitor can see what they are
              enquiring about before they send it.
          --------------------------------------------------------- */}
          <div className="cenq-field-group">
            <label htmlFor="cenq-course">Course or Service</label>
            <div className="cenq-locked">
              <input
                id="cenq-course"
                name="course"
                type="text"
                value={course.name}
                readOnly
                aria-describedby="cenq-course-note"
              />
              <Icon name="check" size={16} />
            </div>
            <span className="cenq-note" id="cenq-course-note">
              Taken from the page you are on — this enquiry reaches the{' '}
              {course.short} counsellor directly.
            </span>
          </div>

          <div className="cenq-field-group">
            <label htmlFor="cenq-message">Your Message</label>
            <textarea
              id="cenq-message"
              name="message"
              rows={4}
              maxLength={2000}
              placeholder="Ask about batch timings, fees or anything else"
              value={values.message}
              onChange={set('message')}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'cenq-message-error' : undefined}
            />
            {errors.message && (
              <span className="cenq-error" id="cenq-message-error">{errors.message}</span>
            )}
          </div>

          {/* ---------------------------------------------------------
              A worded question rather than a drawn one, so it can be
              answered with a screen reader. See hooks/useSecurityCheck.
          --------------------------------------------------------- */}
          <SecurityCheck
            id="cenq-captcha"
            variant="panel"
            security={security}
            inputRef={captchaRef}
            error={errors.captcha}
            onClearError={() =>
              errors.captcha && setErrors((x) => ({ ...x, captcha: undefined }))
            }
          />

          <button
            className="cenq-submit"
            type="submit"
            disabled={status === 'sending' || !security.ready}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          <p className="cenq-status" role="status" aria-live="polite">
            {status === 'sent' && (
              <span className="is-ok">
                <Icon name="check" size={15} />
                Thanks — your {course.short} enquiry is on its way. We call back
                within one working day.
              </span>
            )}
            {status === 'error' && (
              <span className="is-bad">
                {failure} <a href={`tel:${PHONE_DIAL}`}>{PHONE_DISPLAY}</a>
              </span>
            )}
          </p>

          <p className="cenq-foot">
            We never share your number. Expect a call within working hours.
          </p>
        </form>
      </div>
    </section>
  )
}
