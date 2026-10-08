'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useSectionVisible } from '../../hooks/useCourseMotion'
import { GALLERY_PHOTOS } from '../../data/gallery'
import './Gallery.css'

/* ------------------------------------------------------------------
   Campus gallery — an editorial masonry wall that scrolls itself.

   Columns of photographs drift vertically at different speeds,
   alternate columns running the opposite way. Each column holds its
   own photos twice over and travels exactly half its own height per
   cycle, so the loop meets itself and never seams.

   EVERY PHOTOGRAPH, AT EVERY WIDTH

   The wall used to be five fixed columns, with CSS hiding columns 3,
   4 and 5 as the screen narrowed — which meant a phone saw six of the
   fourteen and the rest simply did not exist for that visitor. Now the
   column COUNT changes with the width and the photographs are dealt
   across whatever columns there are, so the whole set is always on the
   wall: five columns on a wide screen, two on a phone, all fourteen
   either way.

   Dealt round-robin rather than sliced into blocks, so the shapes stay
   mixed down every column instead of all the portraits landing in one.

   Nothing is printed over a photograph. The frames used to carry a
   caption on hover and a label naming the file they were waiting for;
   both are gone, so the wall is photographs and nothing else. What a
   photograph is of lives in its alt text, where it is useful to
   someone who cannot see it — see src/data/gallery.js.
------------------------------------------------------------------ */

/* Widest first: the first query that matches wins. Mirrors the
   breakpoints Gallery.css lays the grid out on. */
const BREAKPOINTS = [
  { query: '(min-width: 1201px)', columns: 5 },
  { query: '(min-width: 981px)', columns: 4 },
  { query: '(min-width: 721px)', columns: 3 }
]
const NARROWEST = 2

/* Distinct, non-multiple durations so the columns never fall into
   visible lockstep. Indexed by column, wrapping if there are more
   columns than entries. */
const DURATIONS = ['68s', '82s', '96s', '90s', '74s']

function useColumnCount() {
  const read = () => {
    if (typeof window === 'undefined' || !window.matchMedia) return BREAKPOINTS[0].columns
    const hit = BREAKPOINTS.find((b) => window.matchMedia(b.query).matches)
    return hit ? hit.columns : NARROWEST
  }

  /*
    Seeded with the value the SERVER produces, not with `read`.

    `read` returns the widest breakpoint when there is no window and
    the real one when there is — so the server rendered five columns
    and a phone hydrated two, and React reported the tree as mismatched
    because the markup genuinely differed. Same server/client branch
    the Navbar had.

    The effect below calls `update()` on mount, so the true column
    count arrives a tick after hydration rather than during it.
  */
  const [count, setCount] = useState(BREAKPOINTS[0].columns)

  useEffect(() => {
    if (!window.matchMedia) return
    const lists = BREAKPOINTS.map((b) => window.matchMedia(b.query))
    const update = () => setCount(read)
    lists.forEach((l) => l.addEventListener('change', update))
    update()
    return () => lists.forEach((l) => l.removeEventListener('change', update))
  }, [])

  return count
}

/* Deal the photographs across `count` columns one at a time, so
   consecutive shapes end up in different columns and no column is a
   run of portraits. */
function dealColumns(photos: { src: string; tone: string; ratio: string; alt: string }[], count: number) {
  const columns = Array.from({ length: count }, (_, i) => ({
    id: `col-${i}`,
    duration: DURATIONS[i % DURATIONS.length],
    reverse: i % 2 === 1,
    shots: []
  }))

  photos.forEach((photo, i) => columns[i % count].shots.push(photo))

  /* A column with nothing in it would still reserve grid space and
     drift an empty track — only possible if there are fewer
     photographs than columns, but cheap to rule out. */
  return columns.filter((col) => col.shots.length > 0)
}

type Photo = { src: string; tone: string; ratio: string; alt: string }

function Frame({ shot }: { shot: Photo }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className="gal-frame" style={{ '--ratio': shot.ratio } as React.CSSProperties}>
      {/* the tone gradient is what shows while the file loads, and
          what stays if it is not there yet — a plain brand tile, no
          text on it */}
      <span className={`gal-thumb gal-thumb--${shot.tone}`}>
        {!failed && (
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
      </span>
    </figure>
  )
}

/**
 * @param photos the campus photographs, from the CMS gallery albums —
 *   see `mapGalleryPhotos` and src/app/gallery/page.tsx.
 *
 * The bundled set in src/data/gallery.ts is the fallback, not the
 * source: a CMS that is unreachable, or has no published albums yet,
 * leaves the wall exactly as it was rather than empty. Same rule the
 * blog, FAQ and reviews follow.
 */
export default function Gallery({ photos }: { photos?: Photo[] | null } = {}) {
  /* adds `is-visible` once the band is reached — and also if the
     page jumped straight past it; see useSectionVisible. */
  const sectionRef = useSectionVisible(0.1)
  const count = useColumnCount()
  const shots = photos?.length ? photos : GALLERY_PHOTOS
  const columns = useMemo(() => dealColumns(shots, count), [shots, count])


  return (
    <section className="gal" id="gallery" ref={sectionRef}>
      <div className="shell gal-inner">
        <header className="gal-head">
          <p className="gal-eyebrow">Inside techcadd</p>
          <h2 className="gal-title">The rooms where it actually happens</h2>
          <p className="gal-sub">
            Labs, classrooms, workshops and the days that end with an offer letter —
            the Ludhiana campus, as it looks on an ordinary week.
          </p>
        </header>
      </div>

      <div className="gal-stage">
        <div className="gal-columns" style={{ '--cols': columns.length } as React.CSSProperties}>
          {columns.map((col) => (
            <div className="gal-col" key={col.id}>
              <div
                className={`gal-track${col.reverse ? ' gal-track--rev' : ''}`}
                style={{ '--dur': col.duration } as React.CSSProperties}
              >
                {col.shots.map((shot) => (
                  <Frame key={shot.src} shot={shot} />
                ))}

                {/* the second pass is what makes the loop seamless; it
                    is decorative, so it is hidden from assistive tech */}
                <div className="gal-loop" aria-hidden="true">
                  {col.shots.map((shot) => (
                    <Frame key={`${shot.src}-loop`} shot={shot} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
