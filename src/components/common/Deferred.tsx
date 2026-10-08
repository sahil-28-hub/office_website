'use client'

import { Suspense, useEffect, useRef, useState } from 'react'

/* ==================================================================
   Deferred section.

   React.lazy on its own fetches the chunk the moment the component
   renders — which for a home-page section means "immediately", and
   buys nothing. This gates that render on the section approaching the
   viewport, so a band eight screens down doesn't compete with the
   hero for bandwidth.

   Until then it renders `skeleton`, which reserves the band's height
   so nothing below it shifts when the real content arrives.

   rootMargin is deliberately generous: the chunk starts downloading
   while the section is still a screen and a half away, so in normal
   scrolling the skeleton is never actually seen.
================================================================== */
export default function Deferred({ children, skeleton, rootMargin = '900px 0px', id }) {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (show) return
    const node = ref.current
    if (!node) return

    /* No IntersectionObserver (or a browser that would rather not
       animate) — render everything at once rather than stranding the
       visitor on a page of shimmer. */
    if (typeof IntersectionObserver === 'undefined') {
      setShow(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true)
          io.disconnect()
        }
      },
      { rootMargin }
    )
    io.observe(node)

    /* The observer only reports when the intersection ratio CROSSES a
       threshold, so a page that jumps rather than scrolls — an anchor
       link, the End key, a restored position — can move this node from
       below the viewport to above it between two frames without ever
       crossing. Nothing fires, `show` stays false, and the section is
       left as a skeleton for the rest of the page's life. That is the
       worst version of this bug: the content is not merely invisible,
       it was never rendered, so nothing finds it — not search, not
       ctrl-F, not a screen reader.

       Catching "already above the viewport" on scroll closes it. */
    let ticking = false
    const check = () => {
      ticking = false
      if (!node.isConnected) return
      if (node.getBoundingClientRect().bottom <= 0) {
        setShow(true)
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
  }, [show, rootMargin])

  if (show) return <Suspense fallback={skeleton}>{children}</Suspense>

  return (
    <div ref={ref} id={id}>
      {skeleton}
    </div>
  )
}
