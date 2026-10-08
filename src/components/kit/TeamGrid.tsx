'use client'

import { useState } from 'react'

import { useReveal } from '../../hooks/useCourseMotion'

/* ------------------------------------------------------------------
   Meet the team.

   A portrait per person, name and role laid over the foot of the
   picture. The card is the photograph — there is no panel under it —
   so the row reads as a set of people rather than a set of boxes.

   A missing photograph is not a broken card: it falls back to a brand
   gradient carrying the person's initials, which is legible, on-brand
   and obviously a placeholder. Same contract as every other picture on
   the site.
------------------------------------------------------------------ */

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

/* six brand tones, cycled by position, so a grid of placeholders still
   has rhythm instead of twelve identical blue rectangles */
const TONES = ['blue', 'indigo', 'teal', 'violet', 'cyan', 'warm']

function Portrait({ member, index }) {
  const [failed, setFailed] = useState(false)
  const showPhoto = Boolean(member.photo) && !failed

  return (
    <div className="tc-team-shot" data-tone={TONES[index % TONES.length]}>
      {showPhoto ? (
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="tc-team-initials" aria-hidden="true">
          {initials(member.name)}
        </span>
      )}
      <span className="tc-team-scrim" aria-hidden="true" />
    </div>
  )
}

export default function TeamGrid({ eyebrow, title, lead, members }) {
  const ref = useReveal()

  return (
    <section className="ap-light ap-sec tc-team" id="team" ref={ref}>
      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>{eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{title}</h2>
          <p className="ap-lead" data-reveal style={{ '--d': '150ms' }}>{lead}</p>
        </div>

        <ul className="tc-team-grid">
          {members.map((member, i) => (
            <li
              key={`${member.name}-${i}`}
              className="tc-team-card"
              data-reveal="rise"
              /* the stagger is capped so the last row does not wait a
                 second and a half to appear */
              style={{ '--d': `${Math.min(i, 7) * 60}ms` }}
            >
              <Portrait member={member} index={i} />
              <div className="tc-team-name">
                <b>{member.name}</b>
                <span>{member.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
