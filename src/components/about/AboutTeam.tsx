'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { TEAM } from '../../data/aboutPage'
import './AboutTeam.css'

/* The team, standing in a row.

   Each member is a transparent cut-out standing on the bottom edge of
   the section, with the name and role above and a hand-drawn dashed
   arrow pointing down at them. The arrows alternate — down-left, then
   down-right — so the row reads as a line of people being pointed out
   rather than a grid of captions.

   Eleven people do not fit across one screen, so the row drifts
   sideways in a seamless loop (the list is rendered twice, the copy
   hidden from screen readers). Hovering pauses it; for anyone who has
   asked for reduced motion it becomes a plain horizontal scroller. */

function Arrow({ flip }: { flip: boolean }) {
  return (
    <svg
      className={`apteam-arrow ${flip ? 'is-flipped' : ''}`.trim()}
      viewBox="0 0 40 34"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M31 2c1.5 9-1 18-9 23.5-3.6 2.4-7.6 3.6-12 3.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="3.2 3.6"
      />
      <path d="M13.5 24.6 8 29.6l6.8 2.6" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

export default function AboutTeam() {
  const ref = useReveal()

  return (
    <section className="ap-light ap-sec apteam" id="team" ref={ref}>
      <span className="apteam-glow" aria-hidden="true" />

      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>{TEAM.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' } as any}>
            {TEAM.title} <span className="ap-accent">{TEAM.accent}</span>
          </h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' } as any}>{TEAM.lead}</p>
        </div>
      </div>

      <div className="apteam-rail">
        <ul className="apteam-track">
          {[0, 1].map((copy) =>
            TEAM.members.map((member, i) => (
              <li key={`${copy}-${member.name}`} aria-hidden={copy === 1 ? 'true' : undefined}>
                <figure className="apteam-person">
                  <figcaption>
                    <strong>{member.name}</strong>
                    <span>{member.role}</span>
                    <Arrow flip={i % 2 === 1} />
                  </figcaption>
                  {member.area && <em className="apteam-area">{member.area}</em>}
                  <img
                    src={member.photo}
                    alt={copy === 1 ? '' : `${member.name}, ${member.role}`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </figure>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  )
}
