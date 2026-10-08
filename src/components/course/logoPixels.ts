/* ==================================================================
   Turning a logo into pixels.

   Given an SVG path - the brand mark of a tool this course teaches -
   this rasterises it onto a coarse grid and returns one entry per
   filled cell. The hero canvas draws each of those cells as a small
   dot, flying them in from a scatter and settling them into place, so
   the logo resolves the way an image loads on a slow connection.

   The grid is the pixel step; what gets painted is a dot. Keeping the
   two separate is why the renderer could switch from squares to dots
   without this file changing at all.

   Two passes, because each catches what the other misses:

     fill      isPointInPath at every cell centre, which gets the
               solid areas - the body of the mark
     stroke    the real path walked with getPointAtLength, each point
               snapped to its cell, which keeps thin monoline shapes
               (the mortarboard's tassel, the outline-only marks) from
               rasterising to nothing

   A cell with an empty neighbour is flagged as an edge, so the canvas
   can draw the silhouette brighter than the interior and the shape
   stays readable at this resolution.

   Everything is deterministic: the grid is fixed, and the scatter and
   timing come from a generator seeded on the tool name. The same
   course always draws the same logo the same way.
================================================================== */

const VIEW = 24 /* simple-icons paths are all drawn in a 24x24 box */

/* mulberry32, seeded from the tool name */
function rng(seedText) {
  let h = 1779033703 ^ seedText.length
  for (let i = 0; i < seedText.length; i += 1) {
    h = Math.imul(h ^ seedText.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  let a = h >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let x = Math.imul(a ^ (a >>> 15), 1 | a)
    x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

/* The stand-in for a brand whose mark cannot be redistributed -
   Microsoft's, Adobe's, Autodesk's product logos. A mortarboard is the
   honest symbol for "a course" and it rasterises well, so a Power BI
   or Photoshop page still gets a logo rather than a gap. */
export const FALLBACK_PATH =
  'M12 2.6 L22.4 7.8 L12 13 L1.6 7.8 Z ' +
  'M5.2 10.2 L5.2 15.8 C7.4 17.9 9.7 18.8 12 18.8 C14.3 18.8 16.6 17.9 18.8 15.8 L18.8 10.2 ' +
  'M22.4 7.8 L22.4 14.2'

/* ------------------------------------------------------------------
   Rasterise.

   `resolution` is cells across the 24-unit box. The hero uses 36,
   which gives a logo of roughly 300-600 cells: fine enough that a
   wordmark still reads once it is drawn as dots, coarse enough that
   the dots stay visibly separate. Much finer and the gaps close up
   and it turns back into a filled silhouette.
------------------------------------------------------------------ */
export function pixelateLogo(pathEl, d, name, resolution = 30) {
  const random = rng(name)
  const step = VIEW / resolution

  const filled = new Set()
  const key = (cx, cy) => cy * resolution + cx

  /* -- pass 1: the solid areas -------------------------------------- */
  const path2d = typeof Path2D === 'function' ? new Path2D(d) : null

  /* sized to the viewBox rather than 1x1: isPointInPath is specified to
     test the path and not the canvas bounds, but implementations have
     historically disagreed about points outside the surface */
  const probe = document.createElement('canvas')
  probe.width = VIEW
  probe.height = VIEW
  const ctx = probe.getContext('2d')

  if (path2d && ctx) {
    for (let cy = 0; cy < resolution; cy += 1) {
      for (let cx = 0; cx < resolution; cx += 1) {
        const x = (cx + 0.5) * step
        const y = (cy + 0.5) * step
        if (ctx.isPointInPath(path2d, x, y)) filled.add(key(cx, cy))
      }
    }
  }

  /* -- pass 2: the strokes ------------------------------------------ */
  pathEl.setAttribute('d', d)

  let length = 0
  try {
    length = pathEl.getTotalLength()
  } catch {
    length = 0
  }

  if (length > 0) {
    /* one sample per third of a cell, so no cell the outline crosses is
       stepped over */
    const samples = Math.min(2400, Math.max(240, Math.ceil((length / step) * 3)))
    for (let i = 0; i < samples; i += 1) {
      const point = pathEl.getPointAtLength((i / samples) * length)
      const cx = Math.floor(point.x / step)
      const cy = Math.floor(point.y / step)
      if (cx >= 0 && cx < resolution && cy >= 0 && cy < resolution) {
        filled.add(key(cx, cy))
      }
    }
  }

  if (!filled.size) return null

  /* -- edges: a filled cell with an empty orthogonal neighbour ------- */
  const isEdge = (cx, cy) =>
    !filled.has(key(cx - 1, cy)) ||
    !filled.has(key(cx + 1, cy)) ||
    !filled.has(key(cx, cy - 1)) ||
    !filled.has(key(cx, cy + 1)) ||
    cx === 0 || cy === 0 || cx === resolution - 1 || cy === resolution - 1

  /* -- bounds, so any logo is centred and scaled the same way -------- */
  let minX = resolution
  let minY = resolution
  let maxX = -1
  let maxY = -1

  for (const k of filled) {
    const cx = k % resolution
    const cy = Math.floor(k / resolution)
    if (cx < minX) minX = cx
    if (cx > maxX) maxX = cx
    if (cy < minY) minY = cy
    if (cy > maxY) maxY = cy
  }

  const width = maxX - minX + 1
  const height = maxY - minY + 1
  const span = Math.max(width, height)
  const centreX = (minX + maxX + 1) / 2
  const centreY = (minY + maxY + 1) / 2

  const pixels = []
  for (const k of filled) {
    const cx = k % resolution
    const cy = Math.floor(k / resolution)

    pixels.push({
      /* normalised to roughly -0.5..0.5, so the canvas only has to
         multiply by a scale and add its centre */
      x: (cx + 0.5 - centreX) / span,
      y: (cy + 0.5 - centreY) / span,

      edge: isEdge(cx, cy),

      /* where it flies in from, and drifts back out to */
      sx: (random() - 0.5) * 2.4,
      sy: (random() - 0.5) * 2.4,

      /* per-dot timing and shimmer, so nothing moves in unison */
      delay: random(),
      phase: random() * Math.PI * 2
    })
  }

  return {
    pixels,
    /* the size of one cell in normalised units - the canvas sizes its
       dots off this, so the spacing holds at any scale */
    cell: 1 / span,
    span
  }
}

/* ------------------------------------------------------------------
   The loose dots drifting around the logo - the part of the reference
   image that is not the mark. They belong to the stage rather than to
   any one logo, so they are built once and never re-formed.
------------------------------------------------------------------ */
export function buildDust(slug, count = 34) {
  const random = rng(`dust:${slug}`)

  return Array.from({ length: count }, () => ({
    x: random(),
    y: random(),
    r: 0.5 + random() * 1.4,
    phase: random() * Math.PI * 2,
    speed: 0.15 + random() * 0.4,
    drift: 6 + random() * 22,
    alpha: 0.14 + random() * 0.36
  }))
}
