'use client'

import { useEffect, useRef, useState } from 'react'

/* ==================================================================
   Motion helpers the About page adds on top of useCourseMotion's
   reveal and magnetism. Both go quiet under prefers-reduced-motion
   and both clean up after themselves.
================================================================== */

const FINE_POINTER = '(hover: hover) and (pointer: fine)'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ------------------------------------------------------------------
   Count a number up once the element reaches the viewport. Returns
   [ref, value]. Quintic ease-out, so the figure sprints then settles.
------------------------------------------------------------------ */
export function useCountUp(to, duration = 1500) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReduced()) {
      setValue(to)
      return
    }

    let frame = 0
    let start = 0

    const tick = (now) => {
      if (!start) start = now
      const p = Math.min(1, (now - start) / duration)
      setValue(Math.round(to * (1 - Math.pow(1 - p, 5))))
      if (p < 1) frame = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )

    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to, duration])

  return [ref, value]
}

/* ------------------------------------------------------------------
   Cursor spotlight for a grid of cards. One delegated listener writes
   --mx/--my onto the card under the pointer, which the CSS turns into
   a radial highlight — one listener for twelve cards, not twelve.
------------------------------------------------------------------ */
export function useSpotlight(selector = '[data-spot]') {
  const ref = useRef(null)

  useEffect(() => {
    const host = ref.current
    if (!host) return
    if (!window.matchMedia(FINE_POINTER).matches) return

    let current = null

    const clear = () => {
      if (!current) return
      current.style.removeProperty('--mx')
      current.style.removeProperty('--my')
      current.removeAttribute('data-lit')
      current = null
    }

    const onMove = (event) => {
      const card = event.target.closest?.(selector)
      if (!card || !host.contains(card)) {
        clear()
        return
      }
      if (card !== current) {
        clear()
        current = card
        card.setAttribute('data-lit', '')
      }
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
      card.style.setProperty('--my', `${event.clientY - rect.top}px`)
    }

    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', clear)
    return () => {
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', clear)
      clear()
    }
  }, [selector])

  return ref
}
