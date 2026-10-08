import { Skeleton } from './Skeleton'
import './CoursePageSkeleton.css'

/* ------------------------------------------------------------------
   The course page, while its data is on the way.

   A course page needs the full registry — every course, its syllabus,
   careers, projects and long-form copy — which is a megabyte and, on a
   slow connection, several seconds. It used to be a static import, so
   nothing at all painted until it landed: a blank page, and then the
   whole thing at once. That is what "the sections don't load the first
   time, then they're fine after a refresh" looks like from the outside
   — the second visit has the chunk in cache.

   Now the registry is fetched on demand and this stands in until it
   arrives. It is not a generic shimmer: the light catalogue
   (data/courses/catalog.js) already knows this course's name,
   duration, level and mode without downloading anything, so the hero
   is REAL from the first frame and only the bands below it are
   placeholders. The visitor sees the page they asked for immediately
   and watches it fill in, rather than watching nothing.
------------------------------------------------------------------ */
function BandSkeleton({ tone = 'paper', cards = 3, wide = false }) {
  return (
    <section className={`c-sec c-sec--${tone} cskel-band`} aria-hidden="true">
      <div className="shell">
        <Skeleton w="120px" h={10} r={999} />
        <Skeleton w={wide ? '58%' : '42%'} h={30} style={{ marginTop: 18 }} />
        <Skeleton w="72%" h={13} style={{ marginTop: 14 }} />
        <div className="cskel-grid" data-cards={cards}>
          {Array.from({ length: cards }).map((_, i) => (
            <div key={i} className="cskel-card">
              <Skeleton w={40} h={40} r={12} />
              <Skeleton w="70%" h={16} style={{ marginTop: 16 }} />
              <Skeleton w="100%" h={11} style={{ marginTop: 12 }} />
              <Skeleton w="86%" h={11} style={{ marginTop: 8 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CoursePageSkeleton({ entry }) {
  return (
    <div className="course-page cskel" role="status" aria-live="polite">
      <span className="cskel-sr">
        {entry ? `Loading the ${entry.name} page` : 'Loading course'}
      </span>

      {/* the hero is real content, not a placeholder — the catalogue
          already has everything on it */}
      <section className="cskel-hero">
        <span className="c-grid-bg" aria-hidden="true" />
        <div className="shell cskel-hero-inner">
          <p className="cskel-eyebrow">Course</p>
          <h1 className="cskel-title">{entry ? entry.name : 'Loading course'}</h1>
          {entry?.sub && <p className="cskel-sub">{entry.sub}</p>}

          <ul className="cskel-chips">
            {entry?.duration && <li className="c-chip">{entry.duration}</li>}
            {entry?.mode && <li className="c-chip">{entry.mode}</li>}
            {entry?.level && <li className="c-chip">{entry.level}</li>}
          </ul>

          <div className="cskel-hero-art" aria-hidden="true">
            <Skeleton h="100%" r={24} />
          </div>
        </div>
      </section>

      <BandSkeleton tone="paper" cards={0} wide />
      <BandSkeleton tone="dark" cards={3} />
      <BandSkeleton tone="tint" cards={4} />
    </div>
  )
}
