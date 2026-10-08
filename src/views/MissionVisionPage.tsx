'use client'

import { useReveal } from '../hooks/useCourseMotion'
import { useCountUp, useSpotlight } from '../hooks/useAboutMotion'
import { useSectionProgress, useParallax } from '../hooks/usePageMotion'
import '../components/kit/page-kit.css'
import './MissionVisionPage.css'
import PageHero from '../components/kit/PageHero'
import Cta from '../components/sections/Cta'
import ScrollText from '../components/kit/ScrollText'
import PageIcon from '../components/kit/icons'
import {
  MV_HERO,
  MV_STATEMENT,
  MV_VISION,
  MV_VALUES,
  MV_MEASURE,
  MV_CTA
} from '../data/missionVision'

/* ------------------------------------------------------------------
   Mission and Vision — reachable at #/mission-vision, linked from the
   About Us menu.

   The band rhythm is the About page's: dark banner, then light and
   dark alternating the whole way down.

     §1  banner                          dark, photo
     §2  the mission, lit by scroll      light
     §3  the vision, four horizons       dark
     §4  the six standards               light
     §5  the figures we watch            dark
     §6  come and test it                dark, deep
------------------------------------------------------------------ */

/* §2 — the mission. The statement lights word by word as the section
   travels through the viewport; the four pledges follow. */
function Mission() {
  const revealRef = useReveal()
  const progressRef = useSectionProgress('enter')

  return (
    <section className="ap-light ap-sec" id="mission" ref={progressRef}>
      <div className="shell" ref={revealRef}>
        <div className="ap-head">
          <p className="ap-eyebrow" data-reveal>{MV_STATEMENT.eyebrow}</p>
        </div>

        <ScrollText className="tc-mv-statement" text={MV_STATEMENT.text} />

        <div className="tc-split tc-mv-split">
          <div className="ap-body">
            {MV_STATEMENT.body.map((paragraph, i) => (
              <p key={i} data-reveal style={{ '--d': `${i * 90}ms` }}>
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="tc-grid tc-grid--2 tc-mv-pledges">
            {MV_STATEMENT.pledges.map((pledge, i) => (
              <li
                className="tc-card"
                key={pledge.title}
                data-reveal="rise"
                style={{ '--d': `${i * 80}ms` }}
              >
                <span className="ap-ico">
                  <PageIcon name={pledge.icon} />
                </span>
                <h3>{pledge.title}</h3>
                <p>{pledge.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* §3 — the vision. Four horizons on a rail that fills with scroll. */
function Vision() {
  const revealRef = useReveal()
  const progressRef = useSectionProgress()
  const driftRef = useParallax()

  return (
    <section className="ap-dark ap-sec tc-mv-vision" id="vision" ref={driftRef}>
      <span className="tc-mv-glow" data-parallax="0.12" aria-hidden="true" />

      <div className="shell" ref={revealRef}>
        <div className="tc-split">
          <div className="ap-head tc-split-sticky">
            <p className="ap-eyebrow" data-reveal>{MV_VISION.eyebrow}</p>

            <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>
              {MV_VISION.title}
              <br />
              <span className="ap-accent">{MV_VISION.accent}</span>
            </h2>

            <div className="ap-body">
              {MV_VISION.body.map((paragraph, i) => (
                <p key={i} data-reveal style={{ '--d': `${140 + i * 90}ms` }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <ol className="tc-steps" ref={progressRef}>
            {MV_VISION.horizons.map((horizon, i) => (
              <li
                className="tc-step"
                key={horizon.title}
                data-reveal="right"
                style={{ '--d': `${i * 90}ms` }}
              >
                <p className="tc-step-tag">{horizon.tag}</p>
                <h3>{horizon.title}</h3>
                <p>{horizon.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* §4 — the six standards, lit by the cursor. */
function Values() {
  const revealRef = useReveal()
  const spotRef = useSpotlight('.tc-card')

  return (
    <section className="ap-light ap-light--tint ap-sec" id="values" ref={revealRef}>
      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>{MV_VALUES.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{MV_VALUES.title}</h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>{MV_VALUES.lead}</p>
        </div>

        <ul className="tc-grid" ref={spotRef}>
          {MV_VALUES.values.map((value, i) => (
            <li
              className="tc-card"
              key={value.no}
              data-spot
              data-reveal="rise"
              style={{ '--d': `${i * 70}ms` }}
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

function Figure({ stat, index }) {
  const [ref, value] = useCountUp(stat.to, 1300 + index * 150)

  return (
    <li data-reveal style={{ '--d': `${index * 90}ms` }}>
      <strong ref={ref}>
        {value}
        <em>{stat.suffix}</em>
      </strong>
      <span>{stat.label}</span>
    </li>
  )
}

/* §5 — the figures we actually watch. */
function Measure() {
  const ref = useReveal()

  return (
    <section className="ap-dark ap-sec" id="measure" ref={ref}>
      <div className="shell">
        <div className="tc-lede">
          <div className="ap-head">
            <p className="ap-eyebrow" data-reveal>{MV_MEASURE.eyebrow}</p>
            <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{MV_MEASURE.title}</h2>
            <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>{MV_MEASURE.lead}</p>
          </div>
        </div>

        <div className="tc-split tc-mv-measure">
          <ul className="tc-hero-stats tc-mv-figures" style={{ '--cols': 2 }}>
            {MV_MEASURE.stats.map((stat, i) => (
              <Figure key={stat.label} stat={stat} index={i} />
            ))}
          </ul>

          <dl className="tc-kv" data-reveal="right">
            {MV_MEASURE.rows.map((row) => (
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

export default function MissionVisionPage() {

  return (
    <div className="tc-page tc-page--mission">

      <main id="main">
        <PageHero {...MV_HERO} id="mission-top" />
        <Mission />
        <Vision />
        <Values />
        <Measure />
        <Cta />
      </main>
    </div>
  )
}
