'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSectionVisible } from '../../hooks/useCourseMotion'
import SmartLink from '../common/SmartLink'
import './CourseDeck.css'

/* ------------------------------------------------------------------
   The deck — every course as one card in a 3D coverflow.

   The cards fly in from the right when the band is reached and settle
   into a fan: the selected course flat in the middle, its neighbours
   turned away from the viewer to left and right. A hollow frame sits
   over the centre of the fan, and the selected card shows through it.

   It shows the SAME array the catalogue below it renders — passed in
   rather than imported — so a course published in the CMS appears in
   both, or in neither, and the two can never disagree about what is
   on offer.

   Every card is a real <a href="/courses/…">, not a div with a click
   handler: the deck is a second route to all forty-eight course pages
   and a crawler should be able to walk it. Clicking a card that is not
   already selected brings it to the middle instead of navigating —
   you cannot meaningfully click what you cannot yet see.
------------------------------------------------------------------ */

/* How many cards fan out on each side before the rest stack up behind
   the outermost one and fade out. Forty-eight cards spread across the
   full arc would be a smear; seven a side is the widest fan that still
   reads as separate cards. */
const SPAN = 7

/* Pointer travel that advances the deck by one card. */
const DRAG_STEP = 88

export default function CourseDeck({ cards = [] }) {
  const sectionRef = useSectionVisible(0.15)
  const stageRef = useRef(null)

  /* Open in the middle so the fan is symmetrical on arrival rather
     than a single card with an empty half beside it. */
  const start = useMemo(() => (cards.length ? Math.floor(cards.length / 2) : 0), [cards.length])
  const [active, setActive] = useState(start)

  /* cards.length changes once, when the CMS list replaces the built-in
     catalogue. Re-centre on the new list rather than leaving the deck
     pointing at an index from the old one. */
  useEffect(() => setActive(start), [start])

  const clamp = useCallback(
    (index) => Math.max(0, Math.min(cards.length - 1, index)),
    [cards.length]
  )

  const go = useCallback((delta) => setActive((i) => clamp(i + delta)), [clamp])

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        go(1)
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        go(-1)
      } else if (event.key === 'Home') {
        event.preventDefault()
        setActive(0)
      } else if (event.key === 'End') {
        event.preventDefault()
        setActive(cards.length - 1)
      }
    },
    [go, cards.length]
  )

  /* Drag to spin. Pointer events rather than mouse+touch pairs, so one
     path covers a trackpad, a finger and a pen.

     The card under the pointer is a link, and a drag that crosses one
     must not also follow it — `moved` is read by the click handler
     below to tell a drag from a tap. */
  const drag = useRef({ id: -1, x: 0, from: 0, moved: false })

  const onPointerDown = useCallback(
    (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return
      drag.current = { id: event.pointerId, x: event.clientX, from: active, moved: false }
      stageRef.current?.setPointerCapture?.(event.pointerId)
    },
    [active]
  )

  const onPointerMove = useCallback(
    (event) => {
      const state = drag.current
      if (state.id !== event.pointerId) return

      const dx = event.clientX - state.x
      if (Math.abs(dx) > 6) state.moved = true

      /* Dragging left pulls the cards to the left, which brings a
         LATER card to the middle — the direction the content moves,
         not the direction the index counts. */
      setActive(clamp(state.from - Math.round(dx / DRAG_STEP)))
    },
    [clamp]
  )

  const endDrag = useCallback((event) => {
    const state = drag.current
    if (state.id !== event.pointerId) return
    state.id = -1
    stageRef.current?.releasePointerCapture?.(event.pointerId)
  }, [])

  /* Horizontal wheel only — a trackpad's sideways swipe spins the deck,
     while an ordinary vertical wheel is left alone to scroll the page.
     Hijacking vertical scroll inside a band this tall would trap the
     visitor in it. */
  useEffect(() => {
    const stage = stageRef.current
    /* Explicit, because the other branch returns a teardown and
       tsconfig has noImplicitReturns on. */
    if (!stage) return undefined

    let armed = true
    const onWheel = (event) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return
      event.preventDefault()
      if (!armed) return
      armed = false
      go(event.deltaX > 0 ? 1 : -1)
      window.setTimeout(() => {
        armed = true
      }, 160)
    }

    stage.addEventListener('wheel', onWheel, { passive: false })
    return () => stage.removeEventListener('wheel', onWheel)
  }, [go])

  if (!cards.length) return null

  const current = cards[active] || cards[0]
  const pad = (n) => String(n).padStart(2, '0')

  /* Reduced motion is handled entirely in the stylesheet. Reading the
     media query in JS to set a class here would branch on `window`
     during the first render and mismatch what the server sent. */
  return (
    <section
      className="cd ap-sec"
      id="deck"
      ref={sectionRef}
      aria-labelledby="deck-title"
    >
      <h2 className="cd-sr" id="deck-title">
        Every course at a glance
      </h2>

      <p className="cd-counter" aria-live="polite">
        <span aria-hidden="true">&lt;.</span>
        {pad(active + 1)}
        <em>/</em>
        {pad(cards.length)}
        <span aria-hidden="true">.&gt;</span>
      </p>

      <div
        className="cd-stage"
        ref={stageRef}
        role="group"
        aria-roledescription="carousel"
        aria-label="All courses"
        tabIndex={-1}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {/* Two elements per course, not one. The slot owns the arrival
            from the right, the card owns its place in the fan — both
            animate opacity, and a CSS animation beats a plain
            declaration, so sharing one element would leave the cards
            beyond the fan permanently visible. */}
        <ul className="cd-rail">
          {cards.map((card, i) => {
            const offset = i - active
            const away = Math.abs(offset)
            /* Past the fan the cards stop spreading and stack behind
               the outermost one, so the deck's width is fixed however
               long the catalogue grows. */
            const held = Math.max(-SPAN, Math.min(SPAN, offset))
            const far = away > SPAN

            return (
              <li
                className="cd-slot"
                key={card.slug}
                style={{
                  '--o': held,
                  '--away': Math.min(away, SPAN),
                  /* Fixed for the life of the deck: the entry animation
                     runs once, and a delay that moved with the selection
                     would restart it. */
                  '--i': Math.min(Math.abs(i - start), 12),
                  zIndex: SPAN + 1 - Math.min(away, SPAN)
                }}
                aria-hidden={far || undefined}
              >
                <SmartLink
                  className={`cd-card tone-${card.tone}${i === active ? ' is-active' : ''}`}
                  href={card.href}
                  tabIndex={far ? -1 : undefined}
                  aria-current={i === active ? 'true' : undefined}
                  onFocus={() => setActive(i)}
                  onClick={(event) => {
                    if (drag.current.moved) {
                      event.preventDefault()
                      return
                    }
                    if (i === active) return
                    event.preventDefault()
                    setActive(i)
                  }}
                >
                  <span className="cd-card-art">
                    {card.image && (
                      <img src={card.image} alt="" loading="lazy" decoding="async" />
                    )}
                  </span>
                  <span className="cd-card-name">{card.short || card.name}</span>
                </SmartLink>
              </li>
            )
          })}
        </ul>

        {/* The frame over the middle of the fan. Hollow — it is a border
            and nothing else, so the selected card is seen through it
            rather than behind a tinted panel. */}
        <div className="cd-window" aria-hidden="true">
          <i /><i /><i /><i />
        </div>
      </div>

      <div className="cd-foot">
        <button
          className="cd-arrow"
          type="button"
          onClick={() => go(-1)}
          disabled={active === 0}
          aria-label="Previous course"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M16 10H5m0 0 4.2-4.2M5 10l4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <p className="cd-now">
          <strong>{current.short || current.name}</strong>
          <span>
            {current.category}
            {current.duration ? ` · ${current.duration}` : ''}
          </span>
        </p>

        <button
          className="cd-arrow"
          type="button"
          onClick={() => go(1)}
          disabled={active === cards.length - 1}
          aria-label="Next course"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <SmartLink className="cd-cta" href={current.href}>
        Open {current.short || current.name}
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </SmartLink>
    </section>
  )
}
