'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { useCountUp } from '../../hooks/useAboutMotion'
import { HERO } from '../../data/aboutPage'
import NeuralField from './NeuralField'
import './AboutHero.css'

function Stat({ stat, index }) {
  const [ref, value] = useCountUp(stat.to, 1400 + index * 160)

  return (
    <li data-reveal style={{ '--d': `${320 + index * 90}ms` }}>
      <strong ref={ref}>
        {value}
        <em>{stat.suffix}</em>
      </strong>
      <span>{stat.label}</span>
    </li>
  )
}

/* ------------------------------------------------------------------
   §2 — the banner.

   A photograph behind a brand-tinted veil with the title centred on
   it, and the proof figures on a glass rail across the foot. The
   photograph is a CSS layer above a gradient, so while
   public/photos/about-hero.jpg is missing the gradient carries the
   band — no broken image, no empty space.
------------------------------------------------------------------ */
export default function AboutHero() {
  const ref = useReveal()

  return (
    <section className="aphero" id="about-top" ref={ref} style={{ '--shot': `url(${HERO.image})` }}>
      <span className="aphero-veil" aria-hidden="true" />
      <span className="aphero-grid" aria-hidden="true" />
      <span className="tech-texture" aria-hidden="true" />
      <NeuralField />

      <div className="shell aphero-inner">
        <p className="ap-eyebrow aphero-eyebrow" data-reveal>{HERO.eyebrow}</p>

        <h1 className="aphero-title" data-reveal style={{ '--d': '90ms' }}>
          {HERO.title}
        </h1>

        <p className="aphero-lead" data-reveal style={{ '--d': '180ms' }}>
          {HERO.lead}
        </p>

        <ul className="aphero-stats">
          {HERO.stats.map((stat, i) => (
            <Stat key={stat.label} stat={stat} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
