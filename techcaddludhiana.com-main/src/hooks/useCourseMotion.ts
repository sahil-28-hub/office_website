'use client'

import { useEffect, useRef, useState } from 'react'

/* ------------------------------------------------------------------
   prefers-reduced-motion, as a live value.
------------------------------------------------------------------ */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/* ------------------------------------------------------------------
   Scroll reveal. Attach the returned ref to any wrapper; every
   descendant carrying [data-reveal] gets .is-in once, in order.
   One observer per section instead of one per card.
------------------------------------------------------------------ */
export function useReveal(options?: IntersectionObserverInit) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      const show = () =>
        root.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'))
      show()
      /* content can still arrive later; nothing is animating, so just
         keep marking it shown */
      const mo = new MutationObserver(show)
      mo.observe(root, { childList: true, subtree: true })
      return () => mo.disconnect()
    }

    /* ---- the taller-than-the-viewport safety net ------------------
       A ratio threshold is a fraction of the ELEMENT, not of the
       screen. Ask for 0.12 of something twelve screens tall and the
       most the viewport can ever show is about a twelfth of it — the
       ratio tops out below the threshold, the callback never runs, and
       the element stays at opacity:0 no matter how long it is looked
       at. A blog post's body is one [data-reveal] wrapping the whole
       article, so this hit every long post: blank on arrival, then
       suddenly there after scrolling to the end and back, because the
       sweep below catches it once its bottom passes the top of the
       screen.

       So the threshold list carries 0 as well, and anything taller
       than the viewport reveals as soon as any part of it is showing.
       Everything shorter still waits for the 12% it was tuned for, so
       the timing of the ordinary case is unchanged. */
    const init: IntersectionObserverInit = {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.12,
      ...options
    }

    /* The ratio this hook was asked to wait for — the caller's, when a
       caller overrode it. Zero is added to the list the observer
       actually watches so a tall element still reports on entry; `gate`
       is what everything shorter is held to. */
    const gate = Math.max(...[init.threshold ?? 0].flat())

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const tallerThanScreen = entry.boundingClientRect.height > window.innerHeight
          if (!tallerThanScreen && entry.intersectionRatio < gate) return

          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        })
      },
      { ...init, threshold: [0, ...[init.threshold ?? 0].flat()] }
    )

    let targets: Element[] = []

    const observe = (el: Element) => {
      if (targets.includes(el) || el.classList.contains('is-in')) return
      targets.push(el)
      io.observe(el)
    }

    root.querySelectorAll('[data-reveal]').forEach(observe)

    /* ---- the late-content safety net ------------------------------
       The observer above can only watch elements that existed when
       this effect ran. Plenty of sections fill in afterwards: a lazy
       grid swapping its skeletons for cards, a list arriving from the
       CMS, a filter re-rendering its results. Those children are
       [data-reveal] and therefore opacity:0, nobody is watching them,
       and they stay invisible for the life of the page — until a
       reload, which mounts them before the effect runs and makes the
       whole thing look fine. That is the single most confusing bug
       this pattern produces, and it has been fixed one component at a
       time more than once.

       A MutationObserver ends the category: anything added under this
       section, at any depth, gets observed the moment it appears. */
    const mo = new MutationObserver((records) => {
      let added = false
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          if (node.matches?.('[data-reveal]')) {
            observe(node)
            added = true
          }
          node.querySelectorAll?.('[data-reveal]').forEach((el: Element) => {
            observe(el)
            added = true
          })
        })
      })
      /* Content that arrives already on screen — a post body fetched
         after the first paint — gets the same treatment as content that
         was there at mount, rather than waiting for a scroll. */
      if (added) requestAnimationFrame(settle)
    })
    mo.observe(root, { childList: true, subtree: true })

    /* ---- the skipped-section safety net --------------------------
       An IntersectionObserver only reports when the intersection
       ratio CROSSES a threshold. Jump the page instead of scrolling
       it — an anchor link, a restored scroll position, Home/End, a
       flick on a trackpad — and an element can go from below the
       viewport (ratio 0) to above it (ratio 0) between two frames.
       No threshold is crossed, the callback never runs, and because
       [data-reveal] is opacity:0 until `.is-in` arrives, that element
       stays invisible for the rest of the page's life. A whole
       section can end up blank, which is what "it was empty until I
       reloaded" looks like — a reload starts at the top, so the
       section gets crossed properly on the way down.

       So: on scroll, reveal anything the viewport has already gone
       past. Elements still below the fold are left alone and animate
       in through the observer exactly as before. It is throttled to a
       frame, so the common case costs one rect read per section.

       The sweep reads `targets` live rather than taking a copy, and
       the listener is no longer removed when the list empties: with
       the MutationObserver above, the list can grow again at any time,
       and a listener that had already retired would miss it. */
    let ticking = false

    const sweep = () => {
      ticking = false
      const remaining = []

      for (const el of targets) {
        if (el.classList.contains('is-in')) continue
        /* fully above the viewport: the animation moment has been and
           gone, so show it rather than animating something nobody is
           looking at */
        if (el.getBoundingClientRect().bottom <= 0) {
          el.classList.add('is-in')
          io.unobserve(el)
          continue
        }
        remaining.push(el)
      }

      targets = remaining
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(sweep)
    }

    /* ---- the nothing-has-scrolled-yet safety net ------------------
       Both nets above need something to happen: the observer needs a
       threshold crossed, the sweep needs a scroll. Neither fires for
       content that is simply sitting on the screen when the page
       settles — and the observer's own first report is made against
       the layout as it was at `observe()` time, which for a body that
       is still measuring itself (web fonts, images without dimensions,
       markup injected as a string) can be a height it no longer has.
       When that first report is the only one, the element keeps
       opacity:0 while being looked at, and the first thing that
       rescues it is scrolling far enough for the sweep to catch it.
       That is "the text was blank until I scrolled to the end and back
       up".

       So: after the frame, and once more after a beat, show anything
       that is actually on screen. `.is-in` is what runs the
       transition, so these still animate in — this only decides that
       their moment is now, which is the same decision the observer
       would have made had it been given a stable layout. */
    const settle = () => {
      const limit = window.innerHeight * 0.88
      for (const el of targets) {
        if (el.classList.contains('is-in')) continue
        const rect = el.getBoundingClientRect()
        if (rect.top < limit && rect.bottom > 0) {
          el.classList.add('is-in')
          io.unobserve(el)
        }
      }
      targets = targets.filter((el) => !el.classList.contains('is-in'))
    }

    const frame = requestAnimationFrame(settle)
    /* Late layout: a cover image arriving can push the body down past
       the fold, or pull it up into it, after the first frame. */
    const later = window.setTimeout(settle, 350)

    window.addEventListener('scroll', onScroll, { passive: true })
    /* once now, for a deep link that has already landed past this
       section before the observer was even created */
    sweep()

    return () => {
      io.disconnect()
      mo.disconnect()
      cancelAnimationFrame(frame)
      window.clearTimeout(later)
      window.removeEventListener('scroll', onScroll)
    }
  }, [options])

  return ref
}

/* ------------------------------------------------------------------
   "This section has been seen" — adds `is-visible` to the element,
   once, when it first comes into view.

   Six home-page sections each carried their own copy of this effect,
   and every copy had the same hole as useReveal above: an
   IntersectionObserver only reports when the intersection ratio
   CROSSES a threshold, so a page that JUMPS — an anchor link, the End
   key, a restored scroll position, a hard flick — can take a section
   from below the viewport to above it between two frames without ever
   crossing anything. The class is never added, and since each
   section's CSS hides its own contents until `.is-visible` arrives,
   the band renders at full height with nothing in it. Reloading fixes
   it because a reload starts at the top and the section is crossed
   properly on the way down.

   So this does what useReveal does: observe for the normal case, and
   on scroll also catch anything the viewport has already gone past.
------------------------------------------------------------------ */
export function useSectionVisible(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const host = ref.current
    if (!host) return

    /* No IntersectionObserver at all — show it rather than leaving the
       visitor on an empty band. */
    if (!('IntersectionObserver' in window)) {
      host.classList.add('is-visible')
      return
    }

    const reveal = () => host.classList.add('is-visible')
    let done = false

    const finish = () => {
      if (done) return
      done = true
      reveal()
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) finish()
      },
      { threshold }
    )

    let ticking = false
    const check = () => {
      ticking = false
      /* already scrolled past: the reveal moment has gone, so show it */
      if (host.getBoundingClientRect().bottom <= 0) finish()
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(check)
    }

    io.observe(host)
    window.addEventListener('scroll', onScroll, { passive: true })
    check()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [threshold])

  return ref
}

/* ------------------------------------------------------------------
   Magnetic pull for a primary CTA. Reserved for a handful of buttons —
   applying it everywhere makes the page feel unstable.
------------------------------------------------------------------ */
export function useMagnetic(strength = 0.28, max = 9) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let raf = 0
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0

    const render = () => {
      cx += (tx - cx) * 0.18
      cy += (ty - cy) * 0.18
      el.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`
      if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) {
        raf = requestAnimationFrame(render)
      } else {
        raf = 0
      }
    }

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(render)
    }

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      tx = Math.max(-max, Math.min(max, dx * strength))
      ty = Math.max(-max, Math.min(max, dy * strength))
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
  }, [strength, max])

  return ref
}

/* ------------------------------------------------------------------
   Fires once when the element first enters the viewport. Used to swap
   skeletons for real content and to start heavier visuals lazily.
------------------------------------------------------------------ */
export function useInViewOnce(margin = '200px') {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || seen) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { rootMargin: margin }
    )
    io.observe(el)

    /* Same safety net as useReveal and useSectionVisible: an observer
       reports on a threshold CROSSING, and a page that jumps can take
       this element from below the viewport to above it between two
       frames without crossing anything. Here that leaves a skeleton
       standing in for content that never arrives, so catch the
       already-scrolled-past case on scroll. */
    let ticking = false
    const check = () => {
      ticking = false
      if (!el.isConnected) return
      if (el.getBoundingClientRect().bottom <= 0) {
        setSeen(true)
        io.disconnect()
        window.removeEventListener('scroll', onScroll)
      }
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(check)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    check()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [margin, seen])

  return [ref, seen]
}

/* ------------------------------------------------------------------
   Scroll progress of the document, 0 → 1, throttled to rAF.
------------------------------------------------------------------ */
export function useScrolledPast(pixels = 600) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    let ticking = false
    const check = () => {
      setPast(window.scrollY > pixels)
      ticking = false
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(check)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pixels])

  return past
}
