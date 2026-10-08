'use client'

import { useReveal } from '../../hooks/useCourseMotion'
import SmartLink from '../common/SmartLink'
import { DOMAINS } from '../../data/aboutPage'
import { coursePath } from '../../data/courses/path'
import AboutIcon from './icons'
import './AboutDomains.css'

/* §9 — the four skill families. Each tower is a working index: every
   line opens the slug-based course page behind it. */
export default function AboutDomains() {
  const ref = useReveal()

  return (
    <section className="ap-light ap-light--tint ap-sec apdom" id="what-we-teach" ref={ref}>
      <div className="shell">
        <div className="ap-head apdom-head">
          <p className="ap-eyebrow" data-reveal>{DOMAINS.eyebrow}</p>
          <h2 className="ap-title" data-reveal style={{ '--d': '80ms' }}>{DOMAINS.title}</h2>
          <p className="ap-lead" data-reveal style={{ '--d': '160ms' }}>{DOMAINS.lead}</p>
        </div>

        <div className="apdom-towers">
          {DOMAINS.towers.map((tower, i) => (
            <article
              className="ap-panel ap-panel--hover apdom-tower"
              key={tower.key}
              data-tone={tower.key}
              data-reveal
              style={{ '--d': `${80 + i * 90}ms` }}
            >
              <header>
                <span className="ap-no">{String(i + 1).padStart(2, '0')}</span>
                <h3>{tower.title}</h3>
              </header>

              <ul>
                {tower.items.map((item) => (
                  <li key={item.slug}>
                    <SmartLink href={coursePath(item.slug)}>
                      <span>{item.label}</span>
                      <AboutIcon name="arrowUpRight" size={15} />
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
