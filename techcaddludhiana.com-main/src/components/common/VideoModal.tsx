'use client'

import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { videoEmbed } from '../../lib/videoEmbed'
import './VideoModal.css'

/* ------------------------------------------------------------------
   A video opened over the page.

   WHY A PORTAL

   The reviews wall sets `overflow: hidden` on the band and a
   `transform` on every column, and a transformed ancestor becomes the
   containing block for `position: fixed` descendants. A dialog
   rendered in place would therefore be positioned against a moving
   300px column and clipped by it — which is precisely the "too small"
   problem, one layer up. Portalling to <body> puts it outside all of
   that.

   WHY NOT <dialog>

   `showModal()` would give the backdrop and focus trapping for free,
   but it also renders in the top layer where the site's own stacking
   and the reduced-motion rules do not reach, and Safari only caught
   up recently. The handful of behaviours it provides are written out
   below instead.

   WHAT IT OWES THE VISITOR

   Escape closes it, so does the backdrop and the button. The page
   behind does not scroll. Focus moves to the dialog on open and
   returns to whatever opened it on close — otherwise a keyboard user
   is dropped back at the top of the document.
------------------------------------------------------------------ */
export default function VideoModal({
  url,
  title = 'Video',
  onClose
}: {
  url: string | null | undefined
  title?: string
  onClose: () => void
}) {
  const panelRef = useRef<HTMLDivElement>(null)
  /* Whatever had focus when this opened, so it can be given back. */
  const openerRef = useRef<Element | null>(null)

  const embed = videoEmbed(url)

  const close = useCallback(() => onClose(), [onClose])

  useEffect(() => {
    openerRef.current = document.activeElement

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }

    /* The page behind must not scroll while this is open — otherwise a
       wheel gesture over the backdrop moves the article underneath. */
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    /* Focus the panel rather than the close button: a screen reader
       then announces the dialog and its title before its controls. */
    panelRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      /* Back where they were. `focus` is guarded because the opener
         may have unmounted — a card cycled out of the wall. */
      const opener = openerRef.current as HTMLElement | null
      if (opener && document.contains(opener)) opener.focus?.()
    }
  }, [close])

  /* Nothing playable, nothing to open. */
  if (!embed) return null

  /* Rendered only in the browser: there is no <body> to portal into
     while the page is being generated on the server. */
  if (typeof document === 'undefined') return null

  return createPortal(
    <div
      className="vm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      /* The backdrop closes it, but only when the backdrop itself was
         clicked — a click that started inside the panel and drifted
         out while selecting must not dismiss the video. */
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close()
      }}
    >
      <div className="vm-panel" ref={panelRef} tabIndex={-1}>
        <button type="button" className="vm-close" onClick={close} aria-label="Close video">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="vm-frame-wrap">
          <iframe
            className="vm-frame"
            /* Autoplay because the visitor has just clicked play — it
               is their gesture, not the page deciding for them. */
            src={`${embed.src}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="vm-title">{title}</p>
      </div>
    </div>,
    document.body
  )
}
