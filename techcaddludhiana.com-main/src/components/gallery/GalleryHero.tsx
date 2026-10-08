'use client'

import { useEffect, useRef } from 'react'
import './GalleryHero.css'

/* ------------------------------------------------------------------
   The banner above the gallery wall.

   Built from the same parts the home page's dark sections use — the
   periwinkle grid, a pair of blurred orbs, the glass eyebrow pill and
   a display headline — so the page reads as part of the site rather
   than a separate album.
------------------------------------------------------------------ */
const FACTS = [
  { k: 'Campus', v: 'Ludhiana' },
  { k: 'Rooms', v: 'Labs · Classrooms · Seminar hall' },
  { k: 'Shot', v: 'On an ordinary week' }
]

export default function GalleryHero() {
  const ref = useRef(null)

  useEffect(() => {
    const host = ref.current
    if (!host) return
    if (!('IntersectionObserver' in window)) {
      host.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            host.classList.add('is-visible')
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(host)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="ghero" ref={ref}>
      <div className="ghero-bg" aria-hidden="true">
        <span className="tech-texture" />
        <span className="ghero-grid" />
        <span className="ghero-orb" />
        <span className="ghero-orb ghero-orb--two" />
      </div>

      <div className="shell ghero-inner">
        <p className="ghero-eyebrow">
          <span className="dot" />
          Inside techcadd
        </p>

        <h1 className="ghero-title">
          The rooms where it <span className="ghero-title-accent">actually happens</span>
        </h1>

        <p className="ghero-sub">
          Labs, classrooms, workshops and the days that end with an offer letter — the
          Ludhiana campus, as it looks on an ordinary week.
        </p>

        <dl className="ghero-facts">
          {FACTS.map((fact) => (
            <div key={fact.k}>
              <dt>{fact.k}</dt>
              <dd>{fact.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
