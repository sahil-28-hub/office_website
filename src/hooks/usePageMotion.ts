'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useReveal } from './useCourseMotion'

/* ==================================================================
   Scroll motion for the pages built on the shared page kit.

   useCourseMotion gives us reveal / magnetism / in-view, and
   useAboutMotion gives us count-up and the cursor spotlight. What is
   missing for a long editorial page is motion that is *linked to the
   scroll position* rather than fired once on entry — a progress rail
   that fills, layers that drift at their own speed, copy that lights
   up line by line.

   Everything here follows the same three rules the rest of the site
   follows: one listener per section rather than one per element,
   rAF-throttled writes, and complete silence under
   prefers-reduced-motion.
================================================================== */

const FINE_POINTER = '(hover: hover) and (pointer: fine)'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const clamp01 = (n) => (n < 0 ? 0 : n > 1 ? 1 : n)

/* ------------------------------------------------------------------
   A section's own travel through the viewport, 0 → 1, written onto
   the element as --p. CSS then drives whatever it likes from it: a
   timeline rail filling, a bar chart growing, a portrait sliding.

   `span` chooses how the range is measured:
     'cross'  0 when the top enters, 1 when the bottom leaves  (default)
     'enter'  0 when the top enters, 1 when the section is centred
------------------------------------------------------------------ */
/* The measured value is a target, not the value written: a wheel
   arrives in coarse ~100px steps, so anything wired straight to it
   moves in the same coarse steps. A small rAF loop eases the written
   value toward the target and then stops, which is the difference
   between a rail that ticks along and one that glides. Same damping as
   hooks/usePinnedProgress.js. */
const SMOOTHING = 0.16

export function useSectionProgress(span = 'cross') {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReduced()) {
      el.style.setProperty('--p', '1')
      return
    }

    let ticking = false
    let target = 0
    let shown = -1
    let glideRaf = 0

    const write = (value) => {
      shown = value
      el.style.setProperty('--p', value.toFixed(4))
    }

    const glide = () => {
      glideRaf = 0
      const delta = target - shown
      if (Math.abs(delta) < 0.0004) {
        write(target)
        return
      }
      write(shown + delta * SMOOTHING)
      glideRaf = requestAnimationFrame(glide)
    }

    const measure = () => {
      ticking = false
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1

      target =
        span === 'enter'
          ? clamp01((vh - rect.top) / (vh * 0.75))
          : clamp01((vh - rect.top) / (rect.height + vh))

      /* the first frame lands exactly, so a page opened halfway down
         does not play its whole rail at nobody */
      if (shown < 0) write(target)
      else if (!glideRaf) glideRaf = requestAnimationFrame(glide)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (glideRaf) cancelAnimationFrame(glideRaf)
    }
  }, [span])

  return ref
}

/* ------------------------------------------------------------------
   Parallax. Attach the ref to a section; every descendant carrying
   data-parallax="0.18" drifts by that fraction of the distance the
   section has travelled. Negative values drift the other way.

   One scroll listener moves the whole set, and the transform is
   written straight to style so React never re-renders on scroll.
------------------------------------------------------------------ */
export function useParallax(selector = '[data-parallax]') {
  const ref = useRef(null)

  useEffect(() => {
    const host = ref.current
    if (!host) return
    if (prefersReduced()) return

    const layers = Array.from(host.querySelectorAll(selector))
    if (!layers.length) return

    let ticking = false
    let visible = true
    let target = 0
    let shown = null
    let glideRaf = 0

    const paint = (offset) => {
      shown = offset
      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.parallax) || 0
        layer.style.transform = `translate3d(0, ${(offset * depth * -100).toFixed(2)}px, 0)`
      })
    }

    /* damped, like useSectionProgress above — parallax wired one for
       one to the wheel steps as coarsely as the wheel does */
    const glide = () => {
      glideRaf = 0
      const delta = target - shown
      if (Math.abs(delta) < 0.0002) {
        paint(target)
        return
      }
      paint(shown + delta * SMOOTHING)
      glideRaf = requestAnimationFrame(glide)
    }

    const measure = () => {
      ticking = false
      if (!visible) return

      const rect = host.getBoundingClientRect()
      const vh = window.innerHeight || 1
      /* -1 above the fold, 0 centred, +1 below it */
      target = (rect.top + rect.height / 2 - vh / 2) / vh

      if (shown === null) paint(target)
      else if (!glideRaf) glideRaf = requestAnimationFrame(glide)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(measure)
    }

    /* stop doing the maths while the section is off screen */
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) onScroll()
      },
      { rootMargin: '20% 0px' }
    )
    io.observe(host)

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (glideRaf) cancelAnimationFrame(glideRaf)
      layers.forEach((layer) => {
        layer.style.transform = ''
      })
    }
  }, [selector])

  return ref
}

/* ------------------------------------------------------------------
   Pointer tilt for a hero card or portrait. Reserved for one element
   per page — a page where everything tilts feels like jelly.
------------------------------------------------------------------ */
export function useTilt(max = 7) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced()) return
    if (!window.matchMedia(FINE_POINTER).matches) return

    let raf = 0
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0

    const render = () => {
      cx += (tx - cx) * 0.12
      cy += (ty - cy) * 0.12
      el.style.transform = `perspective(900px) rotateX(${cy.toFixed(2)}deg) rotateY(${cx.toFixed(2)}deg)`
      if (Math.abs(tx - cx) > 0.02 || Math.abs(ty - cy) > 0.02) {
        raf = requestAnimationFrame(render)
      } else {
        raf = 0
      }
    }

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(render)
    }

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2 * max
      ty = -((event.clientY - rect.top) / rect.height - 0.5) * 2 * max
      kick()
    }

    const onLeave = () => {
      tx = 0
      ty = 0
      kick()
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
      el.style.transform = ''
    }
  }, [max])

  return ref
}

/* ------------------------------------------------------------------
   Scroll reveal for a list that changes as it is filtered.

   useReveal sets up its observer once and re-runs only when its
   options change. That is right for a static section and wrong for a
   filtered grid: swapping the cards leaves the fresh ones unobserved,
   so they would sit at opacity 0 for good. Handing useReveal an
   options object that changes with the filter is the whole fix — the
   observer is rebuilt on the new cards and they animate in.
------------------------------------------------------------------ */
export function useFilteredReveal(key) {
  const options = useMemo(() => ({}), [key])
  return useReveal(options)
}

/* ------------------------------------------------------------------
   Which of a list of ids is currently the section being read. Drives
   the little sticky index rails.
------------------------------------------------------------------ */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.01, 0.25, 0.5] }
    )

    targets.forEach((target) => io.observe(target))
    return () => io.disconnect()
  }, [ids])

  return active
}
