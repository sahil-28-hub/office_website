'use client'

import { useReveal } from '../hooks/useCourseMotion'
import { useSpotlight } from '../hooks/useAboutMotion'
import { useSectionProgress, useTilt } from '../hooks/usePageMotion'
import '../components/kit/page-kit.css'
import './FounderPage.css'
import PageHero from '../components/kit/PageHero'
import AboutTeam from '../components/about/AboutTeam'
import Cta from '../components/sections/Cta'
import ScrollText from '../components/kit/ScrollText'
import Figure from '../components/kit/Figure'
import PageIcon from '../components/kit/icons'
import {
  FOUNDER,
  FD_HERO,
  FD_PROFILE,
  FD_MESSAGE,
  FD_MILESTONES,
  FD_PRINCIPLES
} from '../data/founder'

/* ------------------------------------------------------------------
   Our Founder — reachable at #/founder, linked from the About Us
   menu.

     §1  banner                             dark, photo
     §2  the profile + the portrait         light
     §3  a message to learners              dark, scroll-lit
     §4  how a room became a campus         light, timeline
     §5  four rules                         dark
     §6  come and sit through a class       dark, deep
------------------------------------------------------------------ */

/* §2 — the profile. The portrait sits sticky beside the copy and
   tilts under the pointer; the chips run underneath it. */
function Profile() {
  const revealRef = useReveal()
  const tiltRef = useTilt(6)

  return (
    <section className="ap-light ap-sec" id="profile" ref={revealRef}>
      <div className="shell">
        <div className="tc-split tc-fd-profile">
          <div>
            <p className="ap-eyebrow" data-reveal>{FD_PROFILE.eyebrow}</p>

            <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>
              {FD_PROFILE.title}
              <br />
              <span className="ap-accent">{FD_PROFILE.accent}</span>
            </h2>

            <div className="ap-body">
              {FD_PROFILE.body.map((paragraph, i) => (
                <p key={i} data-reveal style={{ '--d': `${150 + i * 90}ms` }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="tc-fd-chips" data-reveal style={{ '--d': '260ms' }}>
              {FD_PROFILE.chips.map((chip) => (
                <li key={chip}>
                  <span className="ap-chip">{chip}</span>
                </li>
              ))}
            </ul>

            <figure className="tc-quote tc-fd-quote" data-reveal="rise" style={{ '--d': '160ms' }}>
              <span className="tc-quote-mark">
                <PageIcon name="quote" />
              </span>
              <blockquote>{FD_PROFILE.quote}</blockquote>
              <figcaption>
                <i aria-hidden="true" />
                <b>{FD_PROFILE.quoteBy}</b>
              </figcaption>
            </figure>
          </div>

          <div className="tc-split-sticky tc-fd-portrait" data-reveal="scale">
            <div className="tc-fd-tilt" ref={tiltRef}>
              <Figure
                src={FOUNDER.photo.src}
                file={FOUNDER.photo.file}
                alt={FOUNDER.photo.alt}
                ratio="4 / 5"
                tag="Ludhiana campus"
              />
            </div>

            <div className="tc-fd-name">
              <b>{FOUNDER.name}</b>
              <span>{FOUNDER.role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* §3 — the message, lit line by line as the band scrolls past. */
function Message() {
  const revealRef = useReveal()
  const progressRef = useSectionProgress('enter')

  return (
    <section className="ap-dark ap-sec tc-fd-message" id="message" ref={progressRef}>
      <span className="tc-fd-glow" aria-hidden="true" />

      <div className="shell">
        <div ref={revealRef}>
          <div className="ap-head ap-head--center">
            <p className="ap-eyebrow" data-reveal>{FD_MESSAGE.eyebrow}</p>
          </div>

          <ScrollText className="tc-fd-statement" text={FD_MESSAGE.text} />

          <div className="tc-fd-message-body">
            {FD_MESSAGE.body.map((paragraph, i) => (
              <p key={i} data-reveal style={{ '--d': `${i * 100}ms` }}>
                {paragraph}
              </p>
            ))}
          </div>

          <p className="tc-fd-sign" data-reveal style={{ '--d': '220ms' }}>
            — {FOUNDER.name}, {FOUNDER.role}
          </p>
        </div>
      </div>
    </section>
  )
}

/* §4 — the milestones, on a rail that fills with the scroll. */
function Milestones() {
  const revealRef = useReveal()
  const progressRef = useSectionProgress()

  return (
    <section className="ap-light ap-light--tint ap-sec" id="milestones" ref={revealRef}>
      <div className="shell">
        <div className="ap-head">
          <p className="ap-eyebrow" data-reveal>{FD_MILESTONES.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{FD_MILESTONES.title}</h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>{FD_MILESTONES.lead}</p>
        </div>

        <ol className="tc-steps" ref={progressRef}>
          {FD_MILESTONES.steps.map((step, i) => (
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

/* §5 — the four house rules. */
function Principles() {
  const revealRef = useReveal()
  const spotRef = useSpotlight('.tc-card')

  return (
    <section className="ap-dark ap-sec" id="principles" ref={revealRef}>
      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>{FD_PRINCIPLES.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{FD_PRINCIPLES.title}</h2>
        </div>

        <ul className="tc-grid tc-grid--4" ref={spotRef}>
          {FD_PRINCIPLES.values.map((value, i) => (
            <li
              className="tc-card"
              key={value.no}
              data-spot
              data-reveal="rise"
              style={{ '--d': `${i * 80}ms` }}
            >
              <div className="tc-card-head">
                <span className="ap-ico">
                  <PageIcon name={value.icon} />
                </span>
                <span className="tc-card-no">{value.no}</span>
              </div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function FounderPage() {

  return (
    <div className="tc-page tc-page--founder">

      <main id="main">
        <PageHero {...FD_HERO} id="founder-top" />
        <Profile />
        <Message />
        <Milestones />
        <Principles />
        {/* the same leadership row as the About page — one list, in
            data/aboutPage.ts, so the two pages cannot disagree */}
        <AboutTeam />
        <Cta />
      </main>
    </div>
  )
}
