'use client'

import { useReveal } from '../hooks/useCourseMotion'
import { useSpotlight } from '../hooks/useAboutMotion'
import { useSectionProgress, useParallax } from '../hooks/usePageMotion'
import '../components/kit/page-kit.css'
import './PartnershipsPage.css'
import PageHero from '../components/kit/PageHero'
import Cta from '../components/sections/Cta'
import Marquee from '../components/kit/Marquee'
import PageIcon from '../components/kit/icons'
import {
  PT_HERO,
  PT_WHY,
  PT_PROGRAMMES,
  PT_PROCESS,
  PT_NEEDS,
  PT_PARTNERS,
  PT_DESK,
  PT_CTA
} from '../data/partnerships'

/* ------------------------------------------------------------------
   College Partnerships — reachable at #/college-partnerships, linked
   from the Resources menu.

   Written for a training and placement officer rather than a
   student, so the page answers institutional questions in order:
   why, what, how, what each side brings, who else does this, and who
   to call.

     §1  banner                        dark, photo
     §2  why colleges call             light
     §3  the five formats              dark
     §4  first call to first class     light tint, timeline
     §5  what each side brings         dark
     §6  institutions we work with     light
     §7  the college desk              dark
     §8  tell us what you need         dark, deep
------------------------------------------------------------------ */

/* §2 — the gap the partnership closes. */
function Why() {
  const revealRef = useReveal()
  const spotRef = useSpotlight('.tc-card')

  return (
    <section className="ap-light ap-sec" id="why" ref={revealRef}>
      <div className="shell">
        <div className="tc-split">
          <div className="ap-head tc-split-sticky">
            <p className="ap-eyebrow" data-reveal>{PT_WHY.eyebrow}</p>

            <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>
              {PT_WHY.title}
              <br />
              <span className="ap-accent">{PT_WHY.accent}</span>
            </h2>

            <div className="ap-body">
              {PT_WHY.body.map((paragraph, i) => (
                <p key={i} data-reveal style={{ '--d': `${140 + i * 90}ms` }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <ul className="tc-grid tc-grid--2 tc-pt-points" ref={spotRef}>
            {PT_WHY.points.map((point, i) => (
              <li
                className="tc-card"
                key={point.title}
                data-spot
                data-reveal="rise"
                style={{ '--d': `${i * 80}ms` }}
              >
                <span className="ap-ico">
                  <PageIcon name={point.icon} />
                </span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* §3 — the five formats, each with what it includes. */
function Programmes() {
  const revealRef = useReveal()
  const driftRef = useParallax()

  return (
    <section className="ap-dark ap-sec tc-pt-programmes" id="programmes" ref={driftRef}>
      <span className="tc-pt-glow" data-parallax="0.1" aria-hidden="true" />

      <div className="shell" ref={revealRef}>
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>{PT_PROGRAMMES.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{PT_PROGRAMMES.title}</h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>{PT_PROGRAMMES.lead}</p>
        </div>

        <ul className="tc-grid">
          {PT_PROGRAMMES.formats.map((format, i) => (
            <li
              className="tc-card"
              key={format.no}
              data-reveal="rise"
              style={{ '--d': `${i * 70}ms` }}
            >
              <div className="tc-card-head">
                <span className="ap-ico">
                  <PageIcon name={format.icon} />
                </span>
                <span className="tc-card-no">{format.no}</span>
              </div>

              <h3>{format.title}</h3>
              <p>{format.text}</p>

              <ul className="tc-card-list">
                {format.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* §4 — five steps on a rail that fills with the scroll. */
function Process() {
  const revealRef = useReveal()
  const progressRef = useSectionProgress()

  return (
    <section className="ap-light ap-light--tint ap-sec" id="process" ref={revealRef}>
      <div className="shell">
        <div className="ap-head">
          <p className="ap-eyebrow" data-reveal>{PT_PROCESS.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{PT_PROCESS.title}</h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>{PT_PROCESS.lead}</p>
        </div>

        <ol className="tc-steps" ref={progressRef}>
          {PT_PROCESS.steps.map((step, i) => (
            <li
              className="tc-step"
              key={step.tag}
              data-reveal="left"
              style={{ '--d': `${i * 80}ms` }}
            >
              <p className="tc-step-tag">{step.tag}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* §5 — the two lists, side by side, so nothing is assumed. */
function Needs() {
  const ref = useReveal()

  return (
    <section className="ap-dark ap-sec" id="responsibilities" ref={ref}>
      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>{PT_NEEDS.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{PT_NEEDS.title}</h2>
        </div>

        <div className="tc-pt-needs">
          {[PT_NEEDS.ours, PT_NEEDS.yours].map((column, index) => (
            <div
              className="tc-card tc-pt-need"
              key={column.title}
              data-reveal={index === 0 ? 'left' : 'right'}
              style={{ '--d': `${index * 110}ms` }}
            >
              <div className="tc-card-head">
                <span className="ap-ico">
                  <PageIcon name={index === 0 ? 'handshake' : 'building'} />
                </span>
                <span className="tc-card-no">{index === 0 ? 'US' : 'YOU'}</span>
              </div>

              <h3>{column.title}</h3>

              <ul className="tc-card-list">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* §6 — the kinds of institution we work with, on two rails. */
function Partners() {
  const ref = useReveal()

  return (
    <section className="ap-light ap-sec tc-pt-partners" id="partners" ref={ref}>
      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>{PT_PARTNERS.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{PT_PARTNERS.title}</h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>{PT_PARTNERS.lead}</p>
        </div>
      </div>

      <div data-reveal="scale" style={{ '--d': '140ms' }}>
        <Marquee
          items={PT_PARTNERS.partners}
          speed={54}
          render={(partner) => (
            <span className="tc-logo">
              {partner.label}
              <small>{partner.note}</small>
            </span>
          )}
        />
      </div>
    </section>
  )
}

/* §7 — who to call. */
function Desk() {
  const ref = useReveal()

  return (
    <section className="ap-dark ap-sec" id="desk" ref={ref}>
      <div className="shell">
        <div className="tc-split tc-pt-desk">
          <div className="ap-head">
            <p className="ap-eyebrow" data-reveal>{PT_DESK.eyebrow}</p>
            <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{PT_DESK.title}</h2>
            <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>{PT_DESK.lead}</p>
          </div>

          <dl className="tc-kv" data-reveal="right">
            {PT_DESK.rows.map((row) => (
              <div key={row.k}>
                <dt>{row.k}</dt>
                <dd>{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default function PartnershipsPage() {

  return (
    <div className="tc-page tc-page--partnerships">

      <main id="main">
        <PageHero {...PT_HERO} id="partnerships-top" />
        <Why />
        <Programmes />
        <Process />
        <Needs />
        <Partners />
        <Desk />
        <Cta />
      </main>
    </div>
  )
}
