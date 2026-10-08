'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import { STORY } from '../../data/aboutPage'
import Shot from './Shot'
import './AboutStory.css'

/* §3 — who we are: the story, the photo collage, and the chips of
   everything the campus covers. */
export default function AboutStory() {
  const ref = useReveal()

  /* split the list into two rails of roughly equal length */
  const half = Math.ceil(STORY.chips.length / 2)
  const lanes = [STORY.chips.slice(0, half), STORY.chips.slice(half)]

  return (
    <section className="ap-light ap-sec apstory" id="who-we-are" ref={ref}>
      <div className="shell">
        <div className="apstory-top">
          <div className="apstory-copy">
            <p className="ap-eyebrow" data-reveal>{STORY.eyebrow}</p>

            <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>
              {STORY.title}
              <br />
              <span className="ap-accent">{STORY.accent}</span>
            </h2>

            <div className="ap-body">
              {STORY.body.map((paragraph, i) => (
                <p key={i} data-reveal style={{ '--d': `${160 + i * 90}ms` }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* three frames on a staggered rhythm, so the wall reads as a
              collage rather than a grid */}
          <div className="apstory-wall">
            {STORY.photos.map((photo, i) => (
              <div
                className={`apstory-frame apstory-frame--${i + 1}`}
                key={photo.file}
                data-reveal="scale"
                style={{ '--d': `${140 + i * 130}ms` }}
              >
                <Shot photo={photo} />
              </div>
            ))}
          </div>
        </div>

        <div className="apstory-chips" data-reveal style={{ '--d': '120ms' }}>
          <h3 className="apstory-chips-title">{STORY.chipsTitle}</h3>

          {/* Two rails running in opposite directions. Each list is
              rendered twice so the loop has no seam, and the copy is
              hidden from assistive tech to avoid reading it twice. */}
          <div className="apstory-marquee">
            {[0, 1].map((row) => (
              <div className="apstory-rail" key={row} data-row={row}>
                <ul className="apstory-track">
                  {[0, 1].map((copy) =>
                    lanes[row].map((chip) => (
                      <li key={`${copy}-${chip}`} aria-hidden={copy === 1 ? 'true' : undefined}>
                        <span className="ap-chip">{chip}</span>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="apstory-caption" data-reveal>{STORY.caption}</p>
      </div>
    </section>
  )
}
