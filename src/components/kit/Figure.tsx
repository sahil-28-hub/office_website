'use client'

import { useState } from 'react'
import PageIcon from './icons'

/* ------------------------------------------------------------------
   A photo frame that degrades honestly, the same way About's Shot
   does: public/photos/ is still empty, so a missing file shows the
   path it is waiting for over the brand gradient rather than a broken
   image icon.
------------------------------------------------------------------ */
export default function Figure({ src, alt, file, ratio, tag, className = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure
      className={`tc-figure ${className}`.trim()}
      style={ratio ? { '--ratio': ratio } : undefined}
    >
      {failed ? (
        <div className="tc-figure-empty">
          <PageIcon name="frame" />
          <span>{file || src}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}

      {tag && (
        <figcaption className="ap-shot-tag">
          <i aria-hidden="true" />
          {tag}
        </figcaption>
      )}
    </figure>
  )
}
