'use client'

import { useReveal, useMagnetic } from '../../hooks/useCourseMotion'
import { useCountUp } from '../../hooks/useAboutMotion'
import { useParallax } from '../../hooks/usePageMotion'
import SmartLink from '../common/SmartLink'
import WriteIn from '../common/WriteIn'
import PageIcon from './icons'

/* ------------------------------------------------------------------
   The banner every new page opens on.

   Same construction as the About and Contact banners — a photograph
   layered over a brand gradient under a veil, with the site grid laid
   across it — so a missing photo file costs nothing. On top of that:
   two blurred orbs that drift against the scroll, and either a rail
   of counted-up figures or a rail of plain key/value facts.

   Driven entirely by props so seven pages share one banner rather
   than seven near-identical copies.
------------------------------------------------------------------ */
function Stat({ stat, index }) {
  const [ref, value] = useCountUp(stat.to, 1400 + index * 150)

  return (
    <li data-reveal style={{ '--d': `${300 + index * 85}ms` }}>
      <strong ref={ref}>
        {value}
        <em>{stat.suffix}</em>
      </strong>
      <span>{stat.label}</span>
    </li>
  )
}

function PrimaryAction({ action }) {
  const ref = useMagnetic()

  return (
    <SmartLink className="ap-btn ap-btn--primary" href={action.href} ref={ref}>
      {action.label}
      <PageIcon name={action.icon || 'arrowRight'} />
    </SmartLink>
  )
}

export default function PageHero({
  eyebrow,
  title,
  accent,
  lead,
  image,
  stats,
  facts,
  actions,
  align = 'left',
  id = 'page-top'
}) {
  const revealRef = useReveal()
  const driftRef = useParallax()

  return (
    <section
      className={`tc-hero ${align === 'center' ? 'tc-hero--center' : ''}`.trim()}
      id={id}
      ref={driftRef}
      style={image ? { '--shot': `url(${image})` } : undefined}
    >
      <span className="tc-hero-veil" aria-hidden="true" />
      <span className="tc-hero-grid" aria-hidden="true" />
      <span className="tech-texture" aria-hidden="true" />
      <span className="tc-hero-orb tc-hero-orb--a" data-parallax="0.16" aria-hidden="true" />
      <span className="tc-hero-orb tc-hero-orb--b" data-parallax="-0.2" aria-hidden="true" />

      <div className="shell tc-hero-inner" ref={revealRef}>
        <div className="tc-hero-copy">
          <p className="ap-eyebrow" data-reveal>{eyebrow}</p>

          {/* WriteIn owns this heading's entrance, so it no longer
              carries data-reveal — the two would stack a block fade
              on top of a per-word one. */}
          <h1 className="tc-hero-title">
            <WriteIn lead={90}>
              {title}
              {accent && (
                <>
                  {' '}
                  <span className="tc-hero-accent">{accent}</span>
                </>
              )}
            </WriteIn>
          </h1>

          {lead && (
            <p className="tc-hero-lead" data-reveal style={{ '--d': '180ms' }}>
              {lead}
            </p>
          )}

          {actions?.length > 0 && (
            <div className="tc-hero-actions" data-reveal style={{ '--d': '250ms' }}>
              {actions.map((action) =>
                action.kind === 'ghost' ? (
                  <SmartLink className="ap-btn ap-btn--ghost" href={action.href} key={action.label}>
                    {action.label}
                    <PageIcon name={action.icon || 'arrowUpRight'} />
                  </SmartLink>
                ) : (
                  <PrimaryAction action={action} key={action.label} />
                )
              )}
            </div>
          )}
        </div>

        {stats?.length > 0 && (
          <ul className="tc-hero-stats" style={{ '--cols': stats.length }}>
            {stats.map((stat, i) => (
              <Stat key={stat.label} stat={stat} index={i} />
            ))}
          </ul>
        )}

        {facts?.length > 0 && (
          <dl className="tc-hero-facts">
            {facts.map((fact, i) => (
              <div key={fact.k} data-reveal style={{ '--d': `${300 + i * 80}ms` }}>
                <dt>{fact.k}</dt>
                <dd>{fact.v}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}
