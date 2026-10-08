'use client'

import { useState } from 'react'
import AboutIcon from './icons'

/* ------------------------------------------------------------------
   A photo frame that degrades honestly. public/photos/ is empty until
   the real institute photography is dropped in, so a missing file
   shows the path it is waiting for rather than a broken image icon.
------------------------------------------------------------------ */
export default function Shot({ photo, className = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className={`ap-shot ${className}`.trim()}>
      {failed ? (
        <div className="ap-shot-empty">
          <AboutIcon name="frame" />
          <span>{photo.file}</span>
        </div>
      ) : (
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}

      {photo.tag && (
        <figcaption className="ap-shot-tag">
          <i aria-hidden="true" />
          {photo.tag}
        </figcaption>
      )}
    </figure>
  )
}
