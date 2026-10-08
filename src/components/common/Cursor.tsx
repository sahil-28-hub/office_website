'use client'

import { useEffect, useRef, useState } from 'react'
import './Cursor.css'

/* ==================================================================
   The site-wide mouse follower.

   A dot pinned to the pointer and a ring that trails it. Mounted once
   in App, above the router, so it survives navigation and never
   restarts mid-move.

   Everything is written straight to the DOM inside one rAF loop —
   React state is only used for the three things that actually change
   class (hover, press, visibility), which happen at human speed. Per
   frame this is two transform writes and nothing else.
================================================================== */

/* what counts as clickable — the ring opens over these */
const INTERACTIVE = 'a[href], button, [role="button"], summary, label[for], [data-cursor]'
/* where the native caret matters more than a drawn ring */
const TEXT_FIELD = 'input, textarea, select, [contenteditable="true"]'

/* how much of the remaining distance each layer closes per frame:
   1 is instant, lower trails further behind */
const DOT_EASE = 0.62
const RING_EASE = 0.16

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [on, setOn] = useState(false)
  const [active, setActive] = useState(false)
  const [down, setDown] = useState(false)
  const [hidden, setHidden] = useState(true)
  /* data-cursor="View" on an element puts that word inside the ring —
     the course pages already use this on projects, videos and cards */
  const [label, setLabel] = useState('')

  /* Decide whether this pointer wants a follower at all, and keep
     deciding — a laptop with a touchscreen can gain or lose a mouse,
     and the motion preference can change while the page is open. */
  useEffect(() => {
    const q = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (min-width: 1025px)'
    )
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const decide = () => setOn(q.matches && !motion.matches)
    decide()
    q.addEventListener('change', decide)
    motion.addEventListener('change', decide)
    return () => {
      q.removeEventListener('change', decide)
      motion.removeEventListener('change', decide)
    }
  }, [])

  /* The class that hides the native cursor lives on <html> rather than
     in this component's markup, because it has to apply to the whole
     document. Removing it on cleanup is what makes the follower safe
     to turn off at any point. */
  useEffect(() => {
    const root = document.documentElement
    if (on) root.classList.add('has-cursor')
    else root.classList.remove('has-cursor')
    return () => root.classList.remove('has-cursor')
  }, [on])

  useEffect(() => {
    if (!on) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    /* start both layers off-centre-screen rather than at 0,0, so the
       first move eases in from the middle instead of flying in from
       the corner */
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let dx = tx, dy = ty
    let rx = tx, ry = ty
    let raf = 0
    let idle = 0

    const frame = () => {
      dx += (tx - dx) * DOT_EASE
      dy += (ty - dy) * DOT_EASE
      rx += (tx - rx) * RING_EASE
      ry += (ty - ry) * RING_EASE

      dot.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`
      ring.style.transform = `translate3d(${rx.toFixed(2)}px, ${ry.toFixed(2)}px, 0)`

      /* Once the ring has caught up there is nothing left to animate,
         so stop the loop instead of burning a frame every 16ms for
         the rest of the visit. onMove starts it again. */
      if (Math.abs(tx - rx) < 0.1 && Math.abs(ty - ry) < 0.1) {
        if (++idle > 2) { raf = 0; return }
      } else idle = 0

      raf = requestAnimationFrame(frame)
    }

    const wake = () => { if (!raf) { idle = 0; raf = requestAnimationFrame(frame) } }

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      const t = e.target
      /* a text field gets its own caret back, and the follower steps
         out of the way rather than sitting on top of it */
      setHidden(Boolean(t?.closest?.(TEXT_FIELD)))
      const hit = t?.closest?.(INTERACTIVE)
      setActive(Boolean(hit))
      setLabel(hit?.getAttribute('data-cursor') || '')
      wake()
    }

    const onEnter = () => setHidden(false)
    const onLeave = () => setHidden(true)
    const onDown = () => setDown(true)
    const onUp = () => setDown(false)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    document.addEventListener('pointerenter', onEnter)
    document.addEventListener('pointerleave', onLeave)
    /* a drag out of the window leaves the ring stranded mid-screen */
    window.addEventListener('blur', onLeave)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.removeEventListener('pointerenter', onEnter)
      document.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('blur', onLeave)
    }
  }, [on])

  if (!on) return null

  const cls = `cur${active ? ' is-active' : ''}${down ? ' is-down' : ''}` +
    `${hidden ? ' is-hidden' : ''}${label ? ' has-label' : ''}`

  return (
    <>
      <div className={cls} ref={ringRef} aria-hidden="true">
        <span className="cur-ring">
          <b className="cur-label">{label}</b>
        </span>
      </div>
      <div className={cls} ref={dotRef} aria-hidden="true">
        <span className="cur-dot" />
      </div>
    </>
  )
}
