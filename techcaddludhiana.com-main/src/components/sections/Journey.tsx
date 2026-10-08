'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useSectionVisible } from '../../hooks/useCourseMotion'
import './Journey.css'
import WriteIn from '../common/WriteIn'

const STEPS = [
  { no: '01', title: 'Discover', text: 'Choose your technology path' },
  { no: '02', title: 'Learn', text: 'Build strong fundamentals' },
  { no: '03', title: 'Build', text: 'Create real-world projects' },
  { no: '04', title: 'Master', text: 'Develop industry skills' },
  { no: '05', title: 'Launch', text: 'Prepare for your career' }
]

const DOTS = 3

export default function Journey() {
  /* adds `is-visible` once the band is reached — and also if the
     page jumped straight past it; see useSectionVisible. */
  const sectionRef = useSectionVisible(0.1)
  const railRef = useRef(null)
  const svgRef = useRef(null)
  const basePathRef = useRef(null)
  const livePathRef = useRef(null)
  const nodeRefs = useRef([])
  const dotRefs = useRef([])
  const progressRef = useRef(0)
  const lengthRef = useRef(0)
  const nodeAtRef = useRef([])

  const [reached, setReached] = useState(0)

  const setNodeRef = useCallback((el: HTMLElement | null, i: number) => {
    nodeRefs.current[i] = el
  }, [])
  const setDotRef = useCallback((el: SVGCircleElement | null, i: number) => {
    dotRefs.current[i] = el
  }, [])

  useEffect(() => {
    const rail = railRef.current
    const svg = svgRef.current
    const base = basePathRef.current
    const live = livePathRef.current
    if (!rail || !svg || !base || !live) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let raf = 0
    let ticking = false

    /* Build the path from where the markers actually landed, so the curve
       stays glued to the cards at every breakpoint instead of guessing. */
    const layout = () => {
      const box = rail.getBoundingClientRect()
      const points = nodeRefs.current.filter(Boolean).map((el) => {
        const r = el.getBoundingClientRect()
        return {
          x: r.left - box.left + r.width / 2,
          y: r.top - box.top + r.height / 2
        }
      })
      if (points.length < 2) return

      svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`)
      svg.setAttribute('width', box.width)
      svg.setAttribute('height', box.height)

      let d = `M ${points[0].x} ${points[0].y}`
      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1]
        const b = points[i]
        const dx = Math.abs(b.x - a.x)
        const dy = b.y - a.y

        /* Vertical tangents at both markers give a smooth S. The handles are
           scaled off the horizontal swing as well as the drop, so the bend
           stays generous when the columns are far apart and eases off when
           the layout collapses to a single rail and dx goes to zero. */
        const bend = Math.max(dy * 0.42, Math.min(dy * 0.9, dx * 0.55))
        d += ` C ${a.x} ${a.y + bend}, ${b.x} ${b.y - bend}, ${b.x} ${b.y}`
      }
      base.setAttribute('d', d)
      live.setAttribute('d', d)

      const total = base.getTotalLength()
      lengthRef.current = total
      live.style.strokeDasharray = `${total}`

      /* where each marker sits along the path, for lighting them in turn */
      nodeAtRef.current = points.map((p, i) => {
        if (i === 0) return 0
        let lo = 0
        let hi = total
        for (let k = 0; k < 18; k++) {
          const mid = (lo + hi) / 2
          const q = base.getPointAtLength(mid)
          if (q.y < p.y) lo = mid
          else hi = mid
        }
        return (lo + hi) / 2
      })

      draw()
    }

    const draw = () => {
      const total = lengthRef.current
      const drawn = total * progressRef.current
      live.style.strokeDashoffset = `${total - drawn}`

      const hit = nodeAtRef.current.filter((at) => at <= drawn + 2).length
      setReached(hit)

      dotRefs.current.forEach((dot) => {
        if (dot) dot.style.opacity = drawn > 12 ? '1' : '0'
      })
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        const r = rail.getBoundingClientRect()
        const vh = window.innerHeight || 1
        const span = r.height || 1
        const p = (vh * 0.8 - r.top) / span
        progressRef.current = Math.max(0, Math.min(1, p))
        draw()
      })
    }

    /* dots riding the drawn portion of the path */
    const travel = (now) => {
      const total = lengthRef.current
      const drawn = total * progressRef.current
      if (drawn > 12) {
        dotRefs.current.forEach((dot, i) => {
          if (!dot) return
          const t = ((now / 4200 + i / DOTS) % 1)
          const q = base.getPointAtLength(t * drawn)
          dot.setAttribute('cx', q.x)
          dot.setAttribute('cy', q.y)
        })
      }
      raf = requestAnimationFrame(travel)
    }

    const ro = new ResizeObserver(layout)
    ro.observe(rail)
    layout()
    onScroll()
    if (!reduced.matches) raf = requestAnimationFrame(travel)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])


  return (
    <section className="jr" id="journey" ref={sectionRef}>
      <div className="shell jr-inner">
        <header className="jr-head">
          <p className="jr-eyebrow">Your tech journey</p>
          <h2 className="jr-title"><WriteIn>5 Steps to Your Tech Career</WriteIn></h2>
        </header>

        <div className="jr-rail" ref={railRef}>
          <svg className="jr-svg" ref={svgRef} aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="jr-live" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="60%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
              <filter id="jr-glow" x="-140%" y="-140%" width="380%" height="380%">
                <feGaussianBlur stdDeviation="4" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path className="jr-path jr-path--base" ref={basePathRef} />
            <path className="jr-path jr-path--live" ref={livePathRef} />

            {Array.from({ length: DOTS }, (_, i) => (
              <circle
                key={i}
                className="jr-dot"
                ref={(el) => setDotRef(el, i)}
                r={i === 0 ? 4 : 3}
                filter="url(#jr-glow)"
              />
            ))}
          </svg>

          <ol className="jr-steps">
            {STEPS.map((step, i) => (
              <li
                className={[
                  'jr-step',
                  i % 2 === 0 ? 'jr-step--left' : 'jr-step--right',
                  i < reached ? 'is-reached' : ''
                ].join(' ').trim()}
                key={step.no}
                style={{ '--i': i } as React.CSSProperties}
              >
                <span className="jr-node" ref={(el) => setNodeRef(el, i)}>
                  <b>{step.no}</b>
                </span>

                <div className="jr-card">
                  <h3 className="jr-card-title">{step.title}</h3>
                  <p className="jr-card-text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
