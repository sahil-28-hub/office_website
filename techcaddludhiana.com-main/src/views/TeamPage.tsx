'use client'

import { useMemo, useRef, useState } from 'react'
import { useReveal } from '../hooks/useCourseMotion'
import { useSecurityCheck } from '../hooks/useSecurityCheck'
import SecurityCheck from '../components/common/SecurityCheck'
import '../components/kit/page-kit.css'
import './TeamPage.css'
import PageHero from '../components/kit/PageHero'
import Cta from '../components/sections/Cta'
import PageIcon from '../components/kit/icons'
import { submitTeamApplication, applicationErrorMessage } from '../lib/submitTeamApplication'
import {
  TEAM_HERO,
  TEAM_INTRO,
  TEAM_GROUPS,
  TEAM_MEMBERS,
  TEAM_VALUES,
  TEAM_APPLY,
  TEAM_CTA
} from '../data/team'

/* ------------------------------------------------------------------
   Our Team — /team, linked from the About Us menu.

     §1  banner                        dark, photo
     §2  how we hire                   light
     §3  the people, filterable        light, tint
     §4  what the team is held to      dark
     §5  apply to work here            light  → team_applications
     §6  come and meet them            dark, deep

   §5 is the only form on the site that does not write to `leads`.
   See src/lib/submitTeamApplication.js for why, and
   server/routes/team.js for where it lands.
------------------------------------------------------------------ */

const PHONE_DISPLAY = '+91 98881 22667'

/* A person without a photograph gets their initials on a brand tile,
   so the grid is complete before the photography is. */
function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

function MemberCard({ member, index }) {
  return (
    <li className="tc-card tm-card" data-reveal style={{ '--d': `${(index % 4) * 70}ms` }}>
      <div className="tm-photo">
        {member.photo ? (
          <img src={member.photo} alt={member.name} loading="lazy" decoding="async" />
        ) : (
          <span className="tm-initials" aria-hidden="true">
            {initials(member.name)}
          </span>
        )}
      </div>

      <div className="tm-body">
        <h3 className="tm-name">{member.name}</h3>
        <p className="tm-role">{member.role}</p>
        <p className="tm-bio">{member.bio}</p>

        {member.tags?.length > 0 && (
          <ul className="tm-tags">
            {member.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

/* §3 — the people. One filter rail, because ten cards is enough to
   want sorting and not enough to need a search box. */
function People() {
  const ref = useReveal()
  const [group, setGroup] = useState('All')

  const counts = useMemo(() => {
    const map = { All: TEAM_MEMBERS.length }
    for (const name of TEAM_GROUPS) {
      map[name] = TEAM_MEMBERS.filter((m) => m.group === name).length
    }
    return map
  }, [])

  const shown = group === 'All' ? TEAM_MEMBERS : TEAM_MEMBERS.filter((m) => m.group === group)

  return (
    <section className="ap-light ap-light--tint ap-sec" id="people" ref={ref}>
      <div className="shell">
        <div className="ap-head" data-reveal>
          <p className="ap-eyebrow">Who you will meet</p>
          <h2 className="ap-title">
            Trainers, counsellors and the people <span className="ap-accent">who keep it running.</span>
          </h2>
        </div>

        <ul className="tc-filter" data-reveal style={{ '--d': '80ms' }}>
          {['All', ...TEAM_GROUPS].map((name) => (
            <li key={name}>
              <button
                type="button"
                aria-pressed={group === name}
                onClick={() => setGroup(name)}
              >
                {name}
                <b>{counts[name]}</b>
              </button>
            </li>
          ))}
        </ul>

        {/* keyed on the filter so the cards re-run their entrance
            when the list changes rather than swapping in place */}
        <ul className="tc-grid tm-grid" key={group}>
          {shown.map((member, i) => (
            <MemberCard key={`${member.name}-${member.role}`} member={member} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

/* §5 — apply to work here.

   The one form on the site that writes to `team_applications` rather
   than `leads`. Same three anti-spam layers as every other form: the
   off-screen field, the time on form, and the worded security check. */
const EMPTY = { name: '', phone: '', email: '', role: '', experience: '', portfolio: '', message: '' }

function Apply() {
  const ref = useReveal()
  const security = useSecurityCheck()
  const firstBadRef = useRef(null)

  const [values, setValues] = useState(EMPTY)
  const [fieldErrors, setFieldErrors] = useState({})
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle') /* idle | sending | sent */

  /* the two signals the applicant never sees */
  const startedAt = useMemo(() => Date.now(), [])
  const [honeypot, setHoneypot] = useState('')

  const set = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }))
    if (fieldErrors[field]) setFieldErrors((f) => ({ ...f, [field]: undefined }))
    if (error) setError('')
  }

  /* Catches the ordinary mistakes without a round trip. The server
     checks all of it again — that is the check that counts. */
  const validate = () => {
    const errors = {}

    const name = values.name.trim()
    if (!name) errors.name = 'Please tell us your name.'
    else if (!/^[\p{L}\p{M}][\p{L}\p{M}\s.'-]{1,119}$/u.test(name)) {
      errors.name = 'Please use letters only for your name.'
    }

    if (!/^[6-9]\d{9}$/.test(values.phone.replace(/\D/g, '').slice(-10))) {
      errors.phone = 'Please enter a valid 10-digit mobile number.'
    }

    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email.trim())) {
      errors.email = 'That email address does not look right.'
    }

    if (!values.role) errors.role = 'Please choose the role you are applying for.'

    if (values.portfolio && !/^https?:\/\/\S+$/i.test(values.portfolio.trim())) {
      errors.portfolio = 'Please use a full link starting with http:// or https://'
    }

    return errors
  }

  const submit = async (event) => {
    event.preventDefault()

    const errors = validate()
    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      firstBadRef.current?.focus()
      return
    }

    if (!security.solved) {
      setError('Please answer the security question below.')
      return
    }

    setFieldErrors({})
    setError('')
    setStatus('sending')

    const result = await submitTeamApplication({
      ...values,
      captcha: security.payload,
      startedAt,
      honeypot
    })

    if (result.ok) {
      setStatus('sent')
      setValues(EMPTY)
      security.refresh()
      return
    }

    setStatus('idle')
    security.refresh()
    if (result.fields) setFieldErrors(result.fields)
    setError(`${applicationErrorMessage(result.error)} ${PHONE_DISPLAY}`)
  }

  if (status === 'sent') {
    return (
      <section className="ap-light ap-sec tm-apply" id="team-apply" ref={ref}>
        <div className="shell">
          <div className="tm-done" data-reveal>
            <span className="tm-done-tick" aria-hidden="true">
              <PageIcon name="check" size={22} />
            </span>
            <h2 className="ap-title">Thanks — that reached us.</h2>
            <p className="ap-lead">
              A person reads every application. We reply within a week, including
              to the ones we cannot take further. If it is urgent, call {PHONE_DISPLAY}.
            </p>
            <button className="ap-btn ap-btn--ghost" type="button" onClick={() => setStatus('idle')}>
              Send another
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="ap-light ap-sec tm-apply" id="team-apply" ref={ref}>
      <div className="shell tm-apply-split">
        <div className="tm-apply-copy" data-reveal>
          <p className="ap-eyebrow">{TEAM_APPLY.eyebrow}</p>
          <h2 className="ap-title">{TEAM_APPLY.title}</h2>
          <p className="ap-lead">{TEAM_APPLY.lead}</p>
          <p className="ap-note">{TEAM_APPLY.note}</p>
        </div>

        <form className="tm-form" onSubmit={submit} noValidate data-reveal style={{ '--d': '120ms' }}>
          {/* hidden from people, filled by bots */}
          <div className="tm-hp" aria-hidden="true">
            <label htmlFor="tm-website">Leave this field empty</label>
            <input
              id="tm-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="tm-field">
            <label htmlFor="tm-name">Your name</label>
            <input
              id="tm-name"
              ref={fieldErrors.name ? firstBadRef : null}
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={set('name')}
              aria-invalid={fieldErrors.name ? 'true' : 'false'}
            />
            {fieldErrors.name && <p className="tm-bad">{fieldErrors.name}</p>}
          </div>

          <div className="tm-row">
            <div className="tm-field">
              <label htmlFor="tm-phone">Mobile number</label>
              <input
                id="tm-phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                value={values.phone}
                onChange={set('phone')}
                aria-invalid={fieldErrors.phone ? 'true' : 'false'}
              />
              {fieldErrors.phone && <p className="tm-bad">{fieldErrors.phone}</p>}
            </div>

            <div className="tm-field">
              <label htmlFor="tm-email">
                Email <span>optional</span>
              </label>
              <input
                id="tm-email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={set('email')}
                aria-invalid={fieldErrors.email ? 'true' : 'false'}
              />
              {fieldErrors.email && <p className="tm-bad">{fieldErrors.email}</p>}
            </div>
          </div>

          <div className="tm-row">
            <div className="tm-field">
              <label htmlFor="tm-role">Role you are applying for</label>
              <select
                id="tm-role"
                value={values.role}
                onChange={set('role')}
                aria-invalid={fieldErrors.role ? 'true' : 'false'}
              >
                <option value="" disabled>
                  Choose a role
                </option>
                {TEAM_APPLY.roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              {fieldErrors.role && <p className="tm-bad">{fieldErrors.role}</p>}
            </div>

            <div className="tm-field">
              <label htmlFor="tm-exp">
                Experience <span>optional</span>
              </label>
              <input
                id="tm-exp"
                type="text"
                placeholder="6 years, or fresher"
                maxLength={60}
                value={values.experience}
                onChange={set('experience')}
              />
            </div>
          </div>

          <div className="tm-field">
            <label htmlFor="tm-portfolio">
              Portfolio, GitHub or LinkedIn <span>optional</span>
            </label>
            <input
              id="tm-portfolio"
              type="url"
              inputMode="url"
              placeholder="https://"
              value={values.portfolio}
              onChange={set('portfolio')}
              aria-invalid={fieldErrors.portfolio ? 'true' : 'false'}
            />
            {fieldErrors.portfolio && <p className="tm-bad">{fieldErrors.portfolio}</p>}
          </div>

          <div className="tm-field">
            <label htmlFor="tm-message">
              What do you teach, and where have you done it? <span>optional</span>
            </label>
            <textarea
              id="tm-message"
              rows={4}
              maxLength={2000}
              value={values.message}
              onChange={set('message')}
            />
          </div>

          <SecurityCheck
            id="tm-captcha"
            variant="panel"
            ground="light"
            security={security}
            error={error && !security.solved ? error : ''}
            onClearError={() => setError('')}
          />

          <button className="ap-btn ap-btn--primary tm-submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send application'}
            <PageIcon name="arrowRight" />
          </button>

          <p className="tm-status" role="status" aria-live="polite">
            {error && <span className="is-bad">{error}</span>}
          </p>
        </form>
      </div>
    </section>
  )
}

export default function TeamPage() {

  const introRef = useReveal()
  const valuesRef = useReveal()

  return (
    <div className="tc-page team-page">
      <main id="main">
        <PageHero {...TEAM_HERO} />

        {/* §2 — how we hire */}
        <section className="ap-light ap-sec" id="how-we-hire" ref={introRef}>
          <div className="shell">
            <div className="ap-head" data-reveal>
              <p className="ap-eyebrow">{TEAM_INTRO.eyebrow}</p>
              <h2 className="ap-title">
                {TEAM_INTRO.title} <span className="ap-accent">{TEAM_INTRO.accent}</span>
              </h2>
            </div>

            <div className="ap-body tm-intro">
              {TEAM_INTRO.body.map((paragraph, i) => (
                <p key={i} data-reveal style={{ '--d': `${120 + i * 90}ms` }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <People />

        {/* §4 — what the team is held to */}
        <section className="ap-dark ap-sec" id="how-we-work" ref={valuesRef}>
          <div className="shell">
            <div className="ap-head" data-reveal>
              <p className="ap-eyebrow">How we work</p>
              <h2 className="ap-title">
                Four things every trainer here <span className="ap-accent">is held to.</span>
              </h2>
            </div>

            <ul className="tc-grid tc-grid--2">
              {TEAM_VALUES.map((value, i) => (
                <li className="tc-card" key={value.title} data-reveal style={{ '--d': `${i * 80}ms` }}>
                  <span className="ap-ico">
                    <PageIcon name={value.icon} />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Apply />

        <Cta />
      </main>
    </div>
  )
}
