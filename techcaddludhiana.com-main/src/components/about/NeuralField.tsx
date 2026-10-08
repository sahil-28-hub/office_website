'use client'

import { useEffect, useRef } from 'react'

/* ==================================================================
   A neural field for the About banner.

   A wide mesh of nodes and short-range links with signals travelling
   along them, sized to fill a banner rather than sit in a column.
   Same palette, same deterministic seeding, so it looks identical on
   every load.
================================================================== */

/* Deterministic RNG, so the mesh never re-shuffles between loads. */
function mulberry32(seed) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const NODE_COUNT = 78
const LINK_RADIUS = 0.26 /* in normalised units, before aspect correction */
const MAX_LINKS = 3
const PULSE_COUNT = 14

/* Nodes are laid out in jittered grid cells rather than at random:
   pure randomness clumps, and a clumped mesh reads as noise. */
function buildField() {
  const rand = mulberry32(20260815)
  const cols = 13
  const rows = 6
  const nodes = []

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (nodes.length >= NODE_COUNT) break
      nodes.push({
        x: (c + 0.5) / cols + (rand() - 0.5) * 0.055,
        y: (r + 0.5) / rows + (rand() - 0.5) * 0.12,
        hue: rand(),
        size: 1 + rand() * 1.6,
        phase: rand() * Math.PI * 2,
        drift: 0.4 + rand() * 0.8
      })
    }
  }

  const links = []
  const degree = new Array(nodes.length).fill(0)

  for (let i = 0; i < nodes.length; i++) {
    const near = []
    for (let j = i + 1; j < nodes.length; j++) {
      /* the banner is wide, so x distance is scaled to keep links
         from stretching right across the screen */
      const dx = (nodes[i].x - nodes[j].x) * 2.4
      const dy = nodes[i].y - nodes[j].y
      const d = Math.hypot(dx, dy)
      if (d < LINK_RADIUS) near.push({ j, d })
    }
    near.sort((a, b) => a.d - b.d)
    for (const { j } of near) {
      if (degree[i] >= MAX_LINKS || degree[j] >= MAX_LINKS) continue
      links.push({ a: i, b: j })
      degree[i]++
      degree[j]++
    }
  }

  return { nodes, links }
}

/* The home page's three tints, picked by node hue. */
function tint(h, alpha) {
  if (h < 0.36) return `rgba(34, 211, 238, ${alpha})`
  if (h < 0.75) return `rgba(96, 140, 255, ${alpha})`
  return `rgba(139, 108, 255, ${alpha})`
}

export default function NeuralField() {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const ctx = canvas.getContext('2d')
    const { nodes, links } = buildField()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const rand = mulberry32(7717)
    const pulses = Array.from({ length: PULSE_COUNT }, () => ({
      link: Math.floor(rand() * links.length),
      t: rand(),
      speed: 0.12 + rand() * 0.24
    }))

    let width = 0
    let height = 0

    const resize = () => {
      const rect = wrap.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(wrap)
    resize()

    const onPointer = (event) => {
      const rect = wrap.getBoundingClientRect()
      pointer.current.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      pointer.current.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    }
    window.addEventListener('pointermove', onPointer, { passive: true })

    let raf = 0
    let px = 0
    let py = 0
    const start = performance.now()

    /* node position at a given moment: a slow vertical wander plus a
       little parallax towards the pointer */
    const place = (n, time) => ({
      x: n.x * width + Math.sin(time * 0.32 * n.drift + n.phase) * 9 + px * 16,
      y: n.y * height + Math.cos(time * 0.26 * n.drift + n.phase) * 7 + py * 10
    })

    const draw = (now) => {
      const time = reduced ? 0 : (now - start) / 1000

      px += (pointer.current.x - px) * 0.045
      py += (pointer.current.y - py) * 0.045

      ctx.clearRect(0, 0, width, height)

      const p = nodes.map((n) => place(n, time))

      /* links first, so the nodes sit on top of them */
      ctx.lineWidth = 1
      for (const l of links) {
        const a = p[l.a]
        const b = p[l.b]
        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
        grad.addColorStop(0, tint(nodes[l.a].hue, 0.2))
        grad.addColorStop(1, tint(nodes[l.b].hue, 0.2))
        ctx.strokeStyle = grad
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }

      /* signals travelling the mesh */
      if (!reduced) {
        for (const pulse of pulses) {
          const l = links[pulse.link]
          if (!l) continue
          const a = p[l.a]
          const b = p[l.b]
          const x = a.x + (b.x - a.x) * pulse.t
          const y = a.y + (b.y - a.y) * pulse.t

          const glow = ctx.createRadialGradient(x, y, 0, x, y, 9)
          glow.addColorStop(0, 'rgba(160, 210, 255, 0.85)')
          glow.addColorStop(1, 'rgba(160, 210, 255, 0)')
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(x, y, 9, 0, Math.PI * 2)
          ctx.fill()

          pulse.t += pulse.speed * 0.016
          if (pulse.t > 1) {
            pulse.t = 0
            pulse.link = Math.floor(Math.random() * links.length)
          }
        }
      }

      /* the nodes */
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const { x, y } = p[i]
        const breathe = reduced ? 1 : 1 + Math.sin(time * 1.1 + n.phase) * 0.25
        const r = n.size * breathe

        ctx.fillStyle = tint(n.hue, 0.85)
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fill()

        const halo = ctx.createRadialGradient(x, y, 0, x, y, r * 5)
        halo.addColorStop(0, tint(n.hue, 0.28))
        halo.addColorStop(1, tint(n.hue, 0))
        ctx.fillStyle = halo
        ctx.beginPath()
        ctx.arc(x, y, r * 5, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onPointer)
    }
  }, [])

  return (
    <div className="apneural" ref={wrapRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
