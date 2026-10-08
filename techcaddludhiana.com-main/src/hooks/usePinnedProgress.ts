'use client'

import { useEffect, useRef } from 'react'

/* ==================================================================
   The pinned-section scroll pin, with damping.

   Two home-page bands (Popular Courses, Why techcadd) hold a stage
   still while the page scrolls past it and drive their choreography
   from a --progress custom property, 0 → 1. Both carried their own
   copy of the same forty lines; this is that code, once.

   position:sticky is not an option here. base.css sets overflow-x on
   <html> and <body>, and per the overflow-propagation rule that stops
   the shorthand reaching the viewport — which makes <body> itself the
   nearest scroll container for any sticky descendant, a container that
   never actually scrolls, so sticky silently never engages. So the
   stage is toggled by hand between position:fixed (while the wrapper
   is in range) and position:absolute pinned to the wrapper's top or
   bottom (before and after). position:fixed has no such dependency.

   What is new here is the damping. Writing the scroll position
   straight onto --progress ties every transform to the wheel one for
   one, and a wheel does not move smoothly: it arrives in coarse
   ~100px steps, so the animation lands in the same coarse steps.
   Instead the measured value becomes a TARGET, and a small rAF loop
   eases the displayed value toward it and then stops. Each notch of
   the wheel now plays out over a handful of frames rather than
   landing in one, which is the whole difference between a section
   that jerks and one that glides.
================================================================== */

const NARROW = '(max-width: 860px)'

export function usePinnedProgress({ reducedProgress = null, smoothing = 0.16 } = {}) {
  const wrapRef = useRef(null)
  const stageRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const stage = stageRef.current
    if (!wrap || !stage) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const narrow = window.matchMedia(NARROW)

    /* below the breakpoint the stylesheets drop the pin for a plain
       stacked layout — clear the inline overrides so that CSS takes
       over cleanly, since an inline style beats a stylesheet rule of
       equal importance, media query or not */
    const release = () => {
      stage.style.position = ''
      stage.style.top = ''
      stage.style.bottom = ''
    }

    if (reduced) {
      release()
      if (reducedProgress !== null) wrap.style.setProperty('--progress', reducedProgress)
      return
    }

    let target = 0
    let shown = -1 /* sentinel: nothing written yet */
    let raf = 0
    let glideRaf = 0

    const write = (value) => {
      shown = value
      wrap.style.setProperty('--progress', value.toFixed(4))
    }

    const glide = () => {
      glideRaf = 0
      const delta = target - shown
      if (Math.abs(delta) < 0.0004) {
        write(target)
        return
      }
      write(shown + delta * smoothing)
      glideRaf = requestAnimationFrame(glide)
    }

    const startGlide = () => {
      if (!glideRaf) glideRaf = requestAnimationFrame(glide)
    }

    const measure = () => {
      raf = 0

      if (narrow.matches) {
        release()
        return
      }

      const rect = wrap.getBoundingClientRect()
      const vh = window.innerHeight
      const total = wrap.offsetHeight - vh

      /* top/bottom are always both set explicitly, never cleared to '' —
         clearing one falls back to the stylesheet's `top: 0`, and an
         absolutely positioned box with both `top` and an explicit
         `height` ignores `bottom` per spec, which silently pins the
         settled-past state to the wrapper's top instead of its foot. */
      if (total <= 0) {
        stage.style.position = 'absolute'
        stage.style.top = 'auto'
        stage.style.bottom = '0'
        target = 1
      } else if (rect.top > 0) {
        stage.style.position = 'absolute'
        stage.style.top = '0'
        stage.style.bottom = 'auto'
        target = 0
      } else if (rect.bottom < vh) {
        stage.style.position = 'absolute'
        stage.style.top = 'auto'
        stage.style.bottom = '0'
        target = 1
      } else {
        stage.style.position = 'fixed'
        stage.style.top = '0'
        stage.style.bottom = 'auto'
        target = Math.min(1, Math.max(0, -rect.top / total))
      }

      /* the first frame lands on the exact value — easing in from 0 on
         a page that was loaded halfway down would play the whole
         animation at nobody */
      if (shown < 0) write(target)
      else startGlide()
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
      if (glideRaf) cancelAnimationFrame(glideRaf)
    }
  }, [reducedProgress, smoothing])

  return [wrapRef, stageRef]
}
