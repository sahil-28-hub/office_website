'use client'

import './Skeleton.css'

/* ==================================================================
   Skeleton primitives.

   <Skeleton /> is one shimmering plate. Everything else here composes
   it into the shapes the site actually waits on: a paragraph, a
   section band, a card grid.

   `tone` is 'paper' (default) or 'ink' — a skeleton has to be visible
   on both the light and the dark bands.
================================================================== */

export default function Skeleton({ variant = 'text', tone, width, height, style, className = '', ...rest }) {
  return (
    <span
      className={`sk sk--${variant}${className ? ' ' + className : ''}`}
      data-tone={tone}
      aria-hidden="true"
      style={{ width, height, ...style }}
      {...rest}
    />
  )
}

/* A block of body copy: `lines` shimmering rows, the last one short. */
export function SkeletonLines({ lines = 3, tone, width }) {
  return (
    <span className="sk-lines" style={{ width }} aria-hidden="true">
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton key={i} variant="text" tone={tone} />
      ))}
    </span>
  )
}

/* The placeholder a deferred section shows while its chunk is in
   flight. `minHeight` reserves the real band's height so the page
   below never jumps when the content swaps in — the whole point of
   showing a skeleton rather than nothing.

   role="status" + aria-label means a screen reader hears "loading"
   once, instead of reading out a dozen empty shimmer boxes. */
export function SectionSkeleton({ band = 'paper', minHeight = '60vh', cards = 3, label = 'Loading section' }) {
  const tone = band === 'ink' ? 'ink' : undefined
  return (
    <div
      className="sk-section"
      data-band={band}
      style={{ minHeight }}
      role="status"
      aria-label={label}
    >
      <div className="shell">
        <div className="sk-head">
          <Skeleton variant="pill" tone={tone} width="150px" style={{ margin: '0 auto' }} />
          <Skeleton variant="title" tone={tone} width="80%" style={{ margin: '0 auto' }} />
          <Skeleton variant="text" tone={tone} width="60%" style={{ margin: '0 auto' }} />
        </div>
        {cards > 0 && (
          <div className="sk-grid">
            {Array.from({ length: cards }, (_, i) => (
              <Skeleton key={i} variant="card" tone={tone} height="220px" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
