'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { submitLead, leadErrorMessage, LEAD_SOURCES } from '../../lib/submitLead'
import { SEO_SLUG_TO_COURSE } from '../../data/courses/path'
import './BookDemoModal.css'

const ENQUIRY_INBOX = 'info@techcadd.com'
const PHONE_DISPLAY = '+91 98881 22667'
const AUTO_OPEN_MS = 30000

/* Fired from Navbar's "Book Demo" buttons — kept as a plain window
   event rather than lifted state/context so this modal can mount once
   at the top of the app without Navbar needing to know it exists. */
export const OPEN_DEMO_EVENT = 'techcadd:open-demo'

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/* A simple human-check that replaces the broken third-party captcha in
   the reference design: two small numbers, + or −, submit stays
   disabled until the visitor's answer matches. Subtraction never goes
   negative, so the mental maths stays trivial. */
function generateCaptcha() {
  const isAdd = Math.random() < 0.5
  if (isAdd) {
    const a = randomInt(2, 12)
    const b = randomInt(2, 12)
    return { a, b, op: '+', answer: a + b }
  }
  const hi = randomInt(6, 18)
  const lo = randomInt(1, hi - 1)
  return { a: hi, b: lo, op: '−', answer: hi - lo }
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  )
}

function VerifiedTick() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="m12 2.5 2.32 1.36 2.7-.34 1.06 2.5 2.5 1.06-.34 2.7L21.6 12l-1.36 2.32.34 2.7-2.5 1.06-1.06 2.5-2.7-.34L12 21.6l-2.32-1.36-2.7.34-1.06-2.5-2.5-1.06.34-2.7L2.4 12l1.36-2.32-.34-2.7 2.5-1.06L7 3.42l2.7.34L12 2.5Z" />
      <path d="m8.4 12.2 2.4 2.4 4.8-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

/* a true regular pentagram (10 points at 36° apart, outer/inner radius
   alternating) — the old hand-drawn path wasn't quite symmetric, which
   read as "uneven" at this size */
function StarRow() {
  return (
    <span className="bdm-stars" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 1.2 12.12 7.09 18.37 7.28 13.42 11.11 15.17 17.12 10 13.6 4.83 17.12 6.58 11.11 1.63 7.28 7.88 7.09Z" />
        </svg>
      ))}
    </span>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* The slug of the course page the visitor is standing on, or '' for
   anywhere else. Read off the path rather than passed in on the event,
   so every trigger — the navbar, the course page, anything added
   later — preselects the right course without having to remember to. */
function courseSlugFromPath(pathname) {
  /* a course at the address named for its city — /python-course-in-ludhiana */
  const root = /^\/([^/]+)\/?$/.exec(pathname || '')?.[1]
  if (root && SEO_SLUG_TO_COURSE[root]) return SEO_SLUG_TO_COURSE[root]
  return /^\/courses\/([^/]+)\/?$/.exec(pathname || '')?.[1] || ''
}

export default function BookDemoModal() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const currentSlug = courseSlugFromPath(pathname)
  const shownRef = useRef(false)
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  const [course, setCourse] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [captcha, setCaptcha] = useState(generateCaptcha)
  const [captchaInput, setCaptchaInput] = useState('')
  const [error, setError] = useState('')
  /* Per-field messages from the server. Without these the form could
     only say that something failed, while the copy it printed promised
     "the highlighted fields" — so nothing was ever highlighted and the
     visitor had to guess which input it meant. */
  const [fieldErrors, setFieldErrors] = useState({})
  const [courses, setCourses] = useState([])
  const [status, setStatus] = useState('idle') /* idle | sending | sent */
  /* the course the last enquiry was about, for the thank-you line */
  const [sentCourse, setSentCourse] = useState('')

  /* Typing again after a send starts a new enquiry: the thank-you line
     goes and the button is live again. */
  useEffect(() => {
    if (status === 'sent' && (name || phone || captchaInput)) setStatus('idle')
  }, [status, name, phone, captchaInput])

  /* the two signals the visitor never sees: when the modal opened,
     and a field only a script fills */
  const [startedAt, setStartedAt] = useState(0)
  const [honeypot, setHoneypot] = useState('')

  /* Asking always opens it. The one-shot guard below belongs to the
     timer, not to this — it used to sit here, which meant the 30s
     auto-open burned the single allowed showing and every "Book Demo"
     press after that did nothing at all. */
  const show = useCallback(() => {
    shownRef.current = true
    setOpen(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  /* auto-open once per visit, 30s in, and never again — including
     after the visitor has opened it themselves */
  useEffect(() => {
    /* Not inside the CMS preview frame. There it opened over the page an
       editor was checking, half a minute into every edit, and locked the
       frame's scroll behind it. */
    if (pathname?.startsWith('/preview')) return undefined

    const id = window.setTimeout(() => {
      if (!shownRef.current) show()
    }, AUTO_OPEN_MS)
    return () => window.clearTimeout(id)
  }, [show, pathname])

  /* The "Book Demo" buttons dispatch this instead of scrolling */
  useEffect(() => {
    window.addEventListener(OPEN_DEMO_EVENT, show)
    return () => window.removeEventListener(OPEN_DEMO_EVENT, show)
  }, [show])

  /* The course list is the only thing this modal needs from the course
     registry, and importing it at module scope drags the entire ~325KB
     dataset into the eager bundle — for a <select> nobody has opened
     yet. Fetched on first open instead; the chunk is small and the
     field shows a skeleton option for the moment it takes. */
  useEffect(() => {
    if (!open || courses.length) return
    let alive = true
    import('../../data/courses/index.ts')
      .then((m) => { if (alive) setCourses(m.COURSE_INDEX) })
      .catch(() => { if (alive) setError('Could not load the course list — please reload.') })
    return () => { alive = false }
  }, [open, courses.length])

  /* Opened from a course page, the enquiry is obviously about that
     course — so the field arrives filled in rather than asking the
     visitor to find in a list of forty the page they are looking at.
     Still a live <select>: they can change it. */
  useEffect(() => {
    if (open && currentSlug) setCourse(currentSlug)
  }, [open, currentSlug])

  /* fresh question each time the modal opens, and body scroll lock */
  useEffect(() => {
    if (!open) return
    setCaptcha(generateCaptcha())
    setCaptchaInput('')
    setError('')
    setStatus('idle')
    setStartedAt(Date.now())
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const previousFocus = document.activeElement
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [open])

  /* Escape to close */
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  const digits = phone.replace(/\D/g, '')
  const captchaOk = captchaInput !== '' && Number(captchaInput) === captcha.answer
  const canSubmit = Boolean(course) && name.trim().length > 1 && digits.length === 10 && captchaOk

  const courseName = useMemo(
    () => courses.find((c) => c.slug === course)?.name || '',
    [course, courses]
  )

  const submit = async (event) => {
    event.preventDefault()
    if (!canSubmit) {
      setError(!captchaOk && captchaInput !== '' ? "That answer doesn't match — try again." : 'Please fill every field correctly.')
      return
    }

    setError('')
    setFieldErrors({})
    setStatus('sending')

    /* One row in the leads table, the same path every other form on
       the site takes — see src/lib/submitLead.js. */
    const result = await submitLead({
      source: LEAD_SOURCES.demo,
      name,
      phone,
      course: courseName,
      courseSlug: course,
      message: `Requested a free demo class for ${courseName}.`,
      captcha: {
        question: `${captcha.a} ${captcha.op} ${captcha.b}`,
        answer: String(captchaInput)
      },
      startedAt,
      honeypot
    })

    /* a challenge answers one submission */
    setCaptcha(generateCaptcha())
    setCaptchaInput('')

    if (result.ok) {
      /* The form is emptied once it has been sent. It used to keep the
         name and number in the boxes under a "Sent" button, which read
         as though nothing had happened — and left a stranger's details on
         screen for whoever used the computer next. The course is kept
         for the thank-you line, which names it. */
      setSentCourse(courseName)
      setName('')
      setPhone('')
      setCourse(currentSlug || '')
      setFieldErrors({})
      setStatus('sent')
      return
    }

    setStatus('idle')

    /* A validation failure comes back as a map of field -> sentence.
       Show the sentence for the field that actually failed and put the
       cursor in it, rather than printing one generic line that names no
       field at all. */
    const fields = result.fields || {}
    setFieldErrors(fields)

    const firstBad = Object.keys(fields)[0]
    if (firstBad) {
      setError(fields[firstBad])
      const id = { name: 'bdm-name', phone: 'bdm-phone' }[firstBad] || 'bdm-course'
      document.getElementById(id)?.focus()
      return
    }

    setError(`${leadErrorMessage(result.error)} ${PHONE_DISPLAY}`)
  }

  if (!open) return null

  return (
    <div className="bdm-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) close() }}>
      <div className="bdm" role="dialog" aria-modal="true" aria-labelledby="bdm-title" ref={dialogRef}>
        <button className="bdm-close" type="button" onClick={close} aria-label="Close" ref={closeRef}>
          <CloseIcon />
        </button>

        <div className="bdm-left">
          <h2 id="bdm-title" className="bdm-heading">
            <span className="bdm-wave" aria-hidden="true">👋</span> Still exploring? Let us help
          </h2>
          <p className="bdm-lead">
            Talk to a counsellor and we'll map the shortest route from where you are to the job you want.
          </p>

          <blockquote className="bdm-quote">
            <p>&ldquo;AI is the new electricity for modern computing.&rdquo;</p>
            <footer>
              <span className="bdm-quote-avatar" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="7.5" width="18" height="12.5" rx="2.4" />
                  <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
                </svg>
              </span>
              <span>
                <b>Jensen Huang</b>
                <i>CEO, NVIDIA Corporation</i>
              </span>
            </footer>
          </blockquote>

          <div className="bdm-google">
            <GoogleLogo />
            <span className="bdm-google-label">Google Verified <VerifiedTick /></span>
            <StarRow />
          </div>

          <p className="bdm-fallback">
            You can also share your requirements at{' '}
            <a href={`mailto:${ENQUIRY_INBOX}`}>{ENQUIRY_INBOX}</a>, and our team will get back to you
            right away.
          </p>
        </div>

        <div className="bdm-right">
          <h3 className="bdm-right-title">Tell us your goal. We&rsquo;ll code it into reality.</h3>

          <form className="bdm-form" onSubmit={submit} noValidate>
            {/* hidden from people, filled by bots */}
            <div className="bdm-hp" aria-hidden="true">
              <label htmlFor="bdm-website">Leave this field empty</label>
              <input
                id="bdm-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <label className="sr-only" htmlFor="bdm-course">Select your course of interest</label>
            <select
              id="bdm-course"
              className={`bdm-field bdm-select${courses.length ? '' : ' is-loading'}`}
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              disabled={!courses.length}
              required
            >
              <option value="" disabled>
                {courses.length ? 'Select Your Course of Interest*' : 'Loading courses…'}
              </option>
              {courses.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </select>

            <label className="sr-only" htmlFor="bdm-name">Full name</label>
            <input
              id="bdm-name"
              className={`bdm-field${fieldErrors.name ? ' is-invalid' : ''}`}
              type="text"
              placeholder="Full Name*"
              autoComplete="name"
              value={name}
              aria-invalid={fieldErrors.name ? 'true' : undefined}
              aria-describedby={fieldErrors.name ? 'bdm-error' : undefined}
              onChange={(e) => {
                setName(e.target.value)
                if (fieldErrors.name) setFieldErrors((f) => ({ ...f, name: undefined }))
              }}
              required
            />

            <label className="sr-only" htmlFor="bdm-phone">Contact number</label>
            <input
              id="bdm-phone"
              className={`bdm-field${fieldErrors.phone ? ' is-invalid' : ''}`}
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="Mobile Number (10 digits, starts 6-9)*"
              value={phone}
              aria-invalid={fieldErrors.phone ? 'true' : undefined}
              aria-describedby={fieldErrors.phone ? 'bdm-error' : undefined}
              onChange={(e) => {
                setPhone(e.target.value)
                if (fieldErrors.phone) setFieldErrors((f) => ({ ...f, phone: undefined }))
              }}
              required
            />

            <div className="bdm-captcha">
              <label htmlFor="bdm-captcha-input">
                Quick check — what is {captcha.a} {captcha.op} {captcha.b}?*
              </label>
              <input
                id="bdm-captcha-input"
                className="bdm-field"
                type="text"
                inputMode="numeric"
                placeholder="Your answer"
                value={captchaInput}
                onChange={(e) => { setCaptchaInput(e.target.value); if (error) setError('') }}
                aria-describedby={error ? 'bdm-error' : undefined}
                required
              />
            </div>

            {error && <p className="bdm-error" id="bdm-error" role="alert">{error}</p>}

            {status === 'sent' && (
              <p className="bdm-sent" role="status">
                Thanks — a counsellor calls you back about the {sentCourse || 'course'} demo within
                one working day.
              </p>
            )}

            <p className="bdm-assurance">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="m8.4 12.2 2.4 2.4 4.8-5" />
              </svg>
              Expert response within 5 minutes.
            </p>

            <button
              className="bdm-submit"
              type="submit"
              disabled={!canSubmit || status !== 'idle'}
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent' : 'Submit'}
              <ArrowIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
