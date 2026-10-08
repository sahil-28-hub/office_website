'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { getToolIcon, hasBrandMark } from '../../data/toolIcons'
import { pixelateLogo, buildDust, FALLBACK_PATH } from './logoPixels'
import './CourseHeroDots.css'

/* ==================================================================
   The course hero's right-hand side.

   A field of small dots that assembles itself into the logo of a tool
   this course teaches, holds, scatters, and re-forms as the next one.
   Open the Python page and the dots resolve into the Python mark;
   open AutoCAD and they resolve into Autodesk; open Digital Marketing
   and they cycle Google Ads, Analytics, Meta.

   The logo is not an image. The vector path is rasterised onto a grid
   at runtime and every filled cell becomes one dot - which is what
   lets the mark scatter into its own points and come back together.

   See logoPixels.js for the rasteriser: the grid it returns is pixels,
   and this draws each one as a dot rather than a square, which reads
   as a halftone of the logo instead of a low-resolution copy of it.

   Deterministic per tool: the same course draws the same logo, with
   the same dots arriving in the same order, on every visit.
================================================================== */

/* one full cycle per tool, in seconds */
const FORM = 1.4 /* pixels fly in and settle */
const HOLD = 3.6 /* the logo is readable */
const BREAK = 0.85 /* pixels scatter */
const CYCLE = FORM + HOLD + BREAK

const MAX_TOOLS = 6

/* Finer than a square grid would need: a dot covers less than a third
   of its cell, so the same shape takes more of them before the eye
   completes it. */
const GRID = 36

const ease = (k) => 1 - Math.pow(1 - k, 3)
const clamp = (v, min, max) => (v < min ? min : v > max ? max : v)

/* Only tools with a real vector mark can be drawn as a logo. A course
   whose brands are all unshippable - Power BI, Tableau, the Adobe
   suite - gets the mortarboard, which is a better answer than a grid
   of three letters. */
function buildQueue(course) {
  const tools = (course.technologies || []).filter((t) => hasBrandMark(t.name))

  if (!tools.length) {
    return [{ name: course.short, note: course.category, d: FALLBACK_PATH }]
  }

  return tools.slice(0, MAX_TOOLS).map((tool) => {
    const icon = getToolIcon(tool.name)
    return { name: tool.name, note: tool.note, d: icon.path }
  })
}

/* ------------------------------------------------------------------
   The palette.

   One blue family for every logo, not each brand's own colour. Two
   reasons: the hero stops flickering through orange, green and red as
   it cycles through a course's tools, and the stage reads as part of
   the site rather than as a slideshow of other companies' branding.

   The real marks are still shown in their own colours - on the chips
   in the caption row and everywhere else on the page. Here the logo
   is a shape, and the shape is drawn in ours.
------------------------------------------------------------------ */
const EDGE_RGB = [52, 224, 255] /* --cyan, for the silhouette */
const FILL_RGB = [76, 111, 255] /* --electric, for the interior */

export default function CourseHeroDots({ course }) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const pathRef = useRef(null)

  const queue = useMemo(() => buildQueue(course), [course])
  const dust = useMemo(() => buildDust(course.slug), [course.slug])

  /* which logo is currently formed - drives the caption under the
     stage, so the visual always says what it is showing */
  const [index, setIndex] = useState(0)

  useEffect(() => setIndex(0), [course.slug])

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    const pathEl = pathRef.current
    if (!wrap || !canvas || !pathEl) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    /* Rasterising walks a path and tests a 1296-cell grid, so it
       happens once per tool and never per frame. */
    const built = queue.map((tool) => {
      try {
        const grid = pixelateLogo(pathEl, tool.d, `${course.slug}:${tool.name}`, GRID)
        return grid ? { grid, tool } : null
      } catch {
        return null
      }
    })

    let usable = built.filter(Boolean)

    /* A mark the rasteriser cannot read is dropped rather than drawn
       empty. If that leaves nothing, the mortarboard stands in, so the
       hero is never a blank rectangle beside the headline. */
    if (!usable.length) {
      const tool = { name: course.short, note: course.category, d: FALLBACK_PATH }
      const grid = pixelateLogo(pathEl, tool.d, course.slug, GRID)
      if (!grid) return
      usable = [{ grid, tool }]
    }

    let width = 0
    let height = 0
    let raf = 0
    let startedAt = 0
    let running = false
    let shown = -1

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')

    const resize = () => {
      const rect = wrap.getBoundingClientRect()
      if (!rect.width || !rect.height) return

      /* a 3x phone would otherwise paint nine times the pixels for a
         decorative canvas */
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height

      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    /* the loose specks from the reference - they belong to the stage,
       so they keep drifting while logos come and go */
    const drawDust = (t) => {
      for (const speck of dust) {
        const x = speck.x * width + Math.sin(t * speck.speed + speck.phase) * speck.drift
        const y = speck.y * height + Math.cos(t * speck.speed * 0.7 + speck.phase) * speck.drift * 0.6
        const twinkle = 0.55 + 0.45 * Math.sin(t * 1.3 + speck.phase)

        ctx.fillStyle = `rgba(150, 200, 255, ${speck.alpha * twinkle})`
        ctx.beginPath()
        ctx.arc(x, y, speck.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    /* ----------------------------------------------------------------
       One frame. `t` is seconds since the loop started; the cycle
       position picks which tool is forming and how far through its
       form - hold - scatter arc it is.
    ---------------------------------------------------------------- */
    const draw = (t) => {
      ctx.clearRect(0, 0, width, height)

      const slot = Math.floor(t / CYCLE) % usable.length
      const local = t % CYCLE
      const { grid, tool } = usable[slot]

      if (slot !== shown) {
        shown = slot
        /* the caption follows the canvas rather than its own timer, so
           the two can never drift apart */
        setIndex(queue.indexOf(tool))
      }

      const cx = width / 2
      const cy = height / 2
      const scale = Math.min(width, height) * 0.66

      /* how assembled the logo is, 0 -> 1 -> 0 */
      let assembly
      if (local < FORM) assembly = ease(local / FORM)
      else if (local < FORM + HOLD) assembly = 1
      else assembly = 1 - ease((local - FORM - HOLD) / BREAK)

      drawDust(t)

      /* One dot per grid cell, sitting well inside it. The gap around
         each is what makes the logo read as a field of dots rather
         than as a filled silhouette - at much above a third of the
         cell they start touching and it turns back into a blob. */
      const cell = grid.cell * scale
      const rEdge = Math.max(0.9, cell * 0.34)
      const rFill = Math.max(0.6, cell * 0.24)

      /* a slow band of light travelling across the settled logo, so a
         held frame is never a still image */
      const sweep = ((t * 0.42) % 1.6) - 0.3

      for (const pixel of grid.pixels) {
        /* each pixel has its own head start, so the logo resolves from
           several places at once instead of wiping across */
        const own = clamp((assembly - pixel.delay * 0.4) / (1 - pixel.delay * 0.4), 0, 1)
        if (own < 0.02) continue

        const k = ease(own)
        const x = cx + (pixel.sx + (pixel.x - pixel.sx) * k) * scale
        const y = cy + (pixel.sy + (pixel.y - pixel.sy) * k) * scale

        /* the sweep lights pixels as it passes over them */
        const lit = assembly > 0.96
          ? Math.max(0, 1 - Math.abs(pixel.x - sweep) * 7)
          : 0

        /* Edge dots sit in cyan at full strength and a little larger;
           the interior falls back to the electric blue. That contrast
           is what keeps the silhouette legible when the shape itself
           is only implied by spacing. Everything lifts toward white
           under the sweep. */
        const [r, g, b] = pixel.edge ? EDGE_RGB : FILL_RGB
        const base = pixel.edge ? 0.95 : 0.42
        const alpha = own * (base + lit * 0.5)
        const white = lit * 0.85

        ctx.fillStyle = `rgba(${Math.round(r + (255 - r) * white)}, ${Math.round(g + (255 - g) * white)}, ${Math.round(b + (255 - b) * white)}, ${Math.min(alpha, 1)})`

        /* Dots arriving are still growing into place - scale rather
           than the tumble a square got, because a rotating circle is
           just a circle. */
        const radius = (pixel.edge ? rEdge : rFill) * (0.35 + k * 0.65) * (1 + lit * 0.5)

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      /* a soft bloom under the brightest part of the sweep */
      if (assembly > 0.96) {
        const bx = cx + sweep * scale
        const glow = ctx.createRadialGradient(bx, cy, 0, bx, cy, scale * 0.42)
        glow.addColorStop(0, `rgba(${EDGE_RGB[0]}, ${EDGE_RGB[1]}, ${EDGE_RGB[2]}, 0.16)`)
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = glow
        ctx.fillRect(bx - scale * 0.42, cy - scale * 0.42, scale * 0.84, scale * 0.84)
      }
    }

    const frame = (now) => {
      if (!startedAt) startedAt = now
      draw((now - startedAt) / 1000)
      if (running) raf = window.requestAnimationFrame(frame)
    }

    /* Reduced motion gets the logo already assembled and held - the
       finished picture, not an empty box and not a loop. */
    const paintStill = () => draw(FORM + HOLD * 0.5)

    const play = () => {
      if (reduced.matches) {
        paintStill()
        return
      }
      if (running) return
      running = true
      raf = window.requestAnimationFrame(frame)
    }

    const stop = () => {
      running = false
      if (raf) window.cancelAnimationFrame(raf)
      raf = 0
    }

    resize()
    play()

    /* off-screen or in a background tab, the loop stops entirely - a
       hero animation should not be draining a battery three sections
       further down the page */
    const inView = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? play() : stop()),
      { threshold: 0.05 }
    )
    inView.observe(wrap)

    const onVisibility = () => (document.hidden ? stop() : play())
    document.addEventListener('visibilitychange', onVisibility)

    const sizeWatcher = new ResizeObserver(() => {
      resize()
      if (reduced.matches) paintStill()
    })
    sizeWatcher.observe(wrap)

    const onMotionChange = () => {
      stop()
      startedAt = 0
      play()
    }
    reduced.addEventListener('change', onMotionChange)

    return () => {
      stop()
      inView.disconnect()
      sizeWatcher.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      reduced.removeEventListener('change', onMotionChange)
    }
  }, [queue, dust, course.slug, course.short, course.category])

  const current = queue[index] || queue[0]

  return (
    <div className="chd" ref={wrapRef}>
      {/* The path the rasteriser measures. It has to be in the document
          for getTotalLength() to work, and it is never painted. */}
      <svg className="chd-probe" width="0" height="0" aria-hidden="true" focusable="false">
        <path ref={pathRef} d="" />
      </svg>

      <canvas className="chd-canvas" ref={canvasRef} aria-hidden="true" />

      <span className="chd-halo" aria-hidden="true" />

      {/* The caption is the only part that carries meaning, so it is
          real text rather than something drawn into the canvas. */}
      <figcaption className="chd-caption">
        <span className="chd-caption-label">
          <span className="chd-pip" aria-hidden="true" />
          Built with
        </span>
        <strong key={current.name}>{current.name}</strong>
        <span className="chd-caption-note">{current.note}</span>
      </figcaption>

      {/* On a phone the canvas is hidden - the tool names are the part
          that carries information, and they should not go with it. */}
      <ul className="chd-list">
        {(course.technologies || []).slice(0, 8).map((tool) => {
          const icon = getToolIcon(tool.name)
          return (
            <li key={tool.name}>
              <span className="chd-mark" aria-hidden="true">
                {icon.path ? (
                  <svg viewBox="0 0 24 24"><path d={icon.path} fill={icon.hex} /></svg>
                ) : (
                  <span style={{ color: icon.hex }}>{icon.mono}</span>
                )}
              </span>
              {tool.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
