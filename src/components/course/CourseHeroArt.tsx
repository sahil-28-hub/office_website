'use client'

import { useState } from 'react'

import './CourseHeroArt.css'

/* The hero's right-hand side. A course gets one when its seed carries
   `heroArt`; a course without one shows nothing there and the copy
   takes the full width — see CourseHero.

   Give a picture a knocked-out or dark background and it sits on the
   hero's own ink rather than on a rectangle — which is what the halo
   below is lighting.

   ON THE width/height ATTRIBUTES

   They are the file's real pixel dimensions and they come from the
   seed, because the courses do not share a shape: Digital Marketing's
   render is nearly square, the newer ones are landscape at about 3:2.
   The browser reads the ratio off these two numbers and reserves the
   right box before the image arrives, so the headline beside it does
   not jump when it loads. They used to be hardcoded to one course's
   figures, which reserved the wrong box for every other course.

   A seed that gives a picture but no size simply gets no attributes —
   the image still renders, it just costs a small layout shift. The CSS
   caps both axes, so nothing here depends on knowing the size.

   The motion is deliberately small: a rise on arrival, a long float,
   and a bloom behind it that breathes — nothing that competes with the
   headline beside it. */
export default function CourseHeroArt({ src, alt, width, height }) {
  /* A missing file must not leave a broken-image icon sitting in the
     hero. It cannot be caught by checking the status either: this app
     serves index.html for any unknown path, so a deleted picture comes
     back as 200 with HTML, and only the decode fails. onError is the
     signal that actually fires — and when it does the whole stage is
     dropped, which is the same as the course never having had art. */
  /* Which address failed, not merely that one did. A boolean stayed true
     for the life of the component, so in the CMS preview — where the
     picture changes under a mounted hero — one bad address meant no
     later one was ever tried, and replacing the image appeared to do
     nothing. */
  const [failedSrc, setFailedSrc] = useState<string | null>(null)
  if (!src || failedSrc === src) return null

  return (
    <div className="chart-stage">
      <span className="chart-halo" aria-hidden="true" />
      <img
        className="chart-img"
        src={src}
        alt={alt}
        width={width || undefined}
        height={height || undefined}
        decoding="async"
        onError={() => setFailedSrc(src)}
      />
    </div>
  )
}
