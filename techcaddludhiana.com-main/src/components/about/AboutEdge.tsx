'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { EDGE } from '../../data/aboutPage'
import AboutIcon from './icons'
import './AboutEdge.css'

/* §8 — the nine commitments, in one bordered mesh rather than nine
   floating cards: the hairlines do the separating. */
export default function AboutEdge() {
  const ref = useReveal()

  return (
    <section className="ap-dark ap-sec apedge" id="difference" ref={ref}>
      <div className="shell">
        <div className="ap-head ap-head--center">
          <p className="ap-eyebrow" data-reveal>{EDGE.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{EDGE.title}</h2>
        </div>

        <ul className="ap-panel apedge-mesh">
          {EDGE.cards.map((card, i) => (
            <li
              className="apedge-cell"
              key={card.title}
              data-reveal
              style={{ '--d': `${60 + (i % 3) * 80}ms` }}
            >
              <span className="ap-ico">
                <AboutIcon name={card.icon} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
