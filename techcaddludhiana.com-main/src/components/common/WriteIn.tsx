'use client'

import { cloneElement, isValidElement, useEffect, useLayoutEffect, useRef, useState } from 'react'
import './WriteIn.css'

/* ==================================================================
   <WriteIn> — text that writes itself when it scrolls into view.

   Usage is a wrapper, not a replacement:

     <h2 className="pc-title">
       <WriteIn>Popular <span className="pc-accent">courses</span></WriteIn>
     </h2>

   Why words and not characters: a heading here is three or four
   lines of display type, and per-character staggering on that is both
   a lot of DOM and a visibly mechanical crawl. Per-word lands at
   reading speed and still reads as being written.

   The split walks React children rather than the DOM, so nested
   markup — the gradient <span> inside half these titles — comes
   through with its classes and styles intact. Nothing is mutated
   after render, which is what keeps this safe to put on headings that
   React re-renders.
================================================================== */

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/* Split every string in the tree into word spans, carrying an index
   across the whole heading so the stagger runs continuously through
   nested elements instead of restarting inside each one. */
function splitWords(node, counter) {
  if (node === null || node === undefined || node === false) return node

  if (typeof node === 'string' || typeof node === 'number') {
    const text = String(node)
    if (!text.trim()) return text
    /* capture the separators so the original spacing survives */
    return text.split(/(\s+)/).map((chunk, i) => {
      if (!chunk) return null
      if (/^\s+$/.test(chunk)) return chunk
      return (
        <span className="wr-w" style={{ '--i': counter.n++ }} key={`w${i}-${counter.n}`}>
          {chunk}
        </span>
      )
    })
  }

  if (Array.isArray(node)) return node.map((child, i) => (
    <WrappedFragment key={i}>{splitWords(child, counter)}</WrappedFragment>
  ))

  if (isValidElement(node)) {
    /* void elements (<br />, <img />) have nothing to split */
    if (node.props?.children === undefined) return node
    return cloneElement(node, undefined, splitWords(node.props.children, counter))
  }

  return node
}

function WrappedFragment({ children }) {
  return <>{children}</>
}

export default function WriteIn({
  children,
  as: Tag = 'span',
  className = '',
  step = 52,
  lead = 0,
  once = true,
  ...rest
}) {
  const ref = useRef(null)
  /* 'live' is plain visible text — the state this stays in when there
     is no observer to drive the animation. */
  const [state, setState] = useState('live') // live → armed → writing → written

  /* Layout effect, not effect: arming hides the words, and doing that
     after the browser has already painted them would flash the whole
     heading in and straight back out. */
  useLayoutEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined' || reduced()) return

    /* Where is this heading right now? A section that is code-split
       can mount while the reader is already past it — a deep link, a
       back navigation, a fast scroll — and an observer configured to
       fire on entry will then never fire at all. Arming in that case
       would hide the heading permanently, so decide from the current
       rect instead of assuming we are always above the fold. */
    const rect = node.getBoundingClientRect()
    if (rect.bottom <= 0) return           // already scrolled past: just show it
    if (rect.top < window.innerHeight) {   // on screen already: write it now
      setState('writing')
      return
    }

    setState('armed')

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState('writing')
            if (once) io.disconnect()
          } else if (!once) {
            setState('armed')
          }
        }
      },
      /* a little inside the viewport, so a heading writes as it is
         being read rather than while it is still off-screen */
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [once])

  /* Freeze the words once the last one has landed — this is what drops
     will-change, so a long page doesn't keep a promoted layer per word
     for the rest of the session. */
  const counter = { n: 0 }
  const content = splitWords(children, counter)
  const total = counter.n

  useEffect(() => {
    if (state !== 'writing') return
    const ms = lead + total * step + 560
    const id = window.setTimeout(() => setState('written'), ms)
    return () => window.clearTimeout(id)
  }, [state, total, step, lead])

  const cls = [
    'wr',
    state === 'armed' ? 'is-armed' : '',
    state === 'writing' ? 'is-armed is-writing' : '',
    state === 'written' ? 'is-written' : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <Tag
      ref={ref}
      className={cls}
      style={{ '--wr-step': `${step}ms`, '--wr-lead': `${lead}ms` }}
      {...rest}
    >
      {content}
    </Tag>
  )
}
