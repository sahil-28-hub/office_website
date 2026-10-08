/* Cuts the background out of the After 12th artwork.

   The supplied files are JPEGs of a subject sitting on a flat plate —
   six on rgb(247,247,247), Revit on white, Tally on an orange gradient.
   Dropped straight onto the site they show as a pale (or orange)
   rectangle against the section behind them.

   Why a flood fill and not a colour key: keying every near-white pixel
   would also punch holes through white *inside* the subject — a laptop
   screen, a page, a highlight. Filling inward from the border only
   removes background that is actually connected to the edge, which is
   what "the background" means.

   Two tolerances do the work:

     STEP   how far a pixel may differ from the neighbour it was
            reached from. Small, so the fill follows a gradient
            (Tally's orange) without leaking through a soft edge.
     TOTAL  how far it may differ from the border colour overall. A
            backstop so the fill cannot wander across the whole image
            one small step at a time.

   Edges are then feathered by one pixel so the cut is not jagged, and
   the result is written as PNG — JPEG has no alpha channel.

   Output is scaled to 900px wide: these render at most ~420px in the
   hero and ~90px in the menu, and a full-size PNG with alpha is several
   megabytes.

   Usage — needs the built site being served:
     npm run build && npm run preview -- --port 4300 &
     node scripts/cutout-after12.mjs
*/

import { chromium } from 'playwright'
import { writeFileSync } from 'fs'

const ORIGIN = process.env.ORIGIN || 'http://localhost:4300'
const OUT_DIR = process.env.OUT_DIR || new URL('../public/after-12th/', import.meta.url)
const WIDTH = 900

/* [source, slug, STEP, TOTAL]
   STEP  how far a pixel may differ from the neighbour it was reached
         from. Lower = the fill stops sooner at a soft edge.
   TOTAL how far it may differ from the border colour overall.

   The defaults (26/72) suit artwork that contrasts with its plate.
   UI-UX and Tally are pale line-work ON a pale plate, so the default
   fill walked straight through the subject — 89% and 82% cleared, with
   the artwork gone. Both get a much tighter step. */
const FILES = [
  ['autocad.jpeg', 'autocad', 26, 72],
  ['solidworks.jpeg', 'solidworks', 26, 72],
  ['3dmax.jpeg', '3ds-max', 26, 72],
  ['Revit.jpeg', 'revit', 26, 72],
  ['graphics.jpeg', 'graphic-designing', 26, 72],
  ['videoediting.jpeg', 'video-editing', 26, 72],
  ['UI-UX.jpeg', 'ui-ux-design', 7, 20],
  ['Tally.jpeg', 'tally-erp', 12, 40]
]

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(ORIGIN, { waitUntil: 'domcontentloaded' })

let before = 0
let after = 0

for (const [file, slug, step, total] of FILES) {
  const r = await page.evaluate(
    async ([name, outW, STEP, TOTAL]) => {
      const img = new Image()
      img.src = '/after-12th/' + name
      await img.decode()

      const scale = outW / img.naturalWidth
      const W = outW
      const H = Math.round(img.naturalHeight * scale)

      const cv = document.createElement('canvas')
      cv.width = W
      cv.height = H
      const g = cv.getContext('2d', { willReadFrequently: true })
      g.imageSmoothingQuality = 'high'
      g.drawImage(img, 0, 0, W, H)

      const image = g.getImageData(0, 0, W, H)
      const d = image.data

      const at = (x, y) => (y * W + x) * 4

      /* the border colour, averaged, is what TOTAL is measured against */
      let br = 0, bg = 0, bb = 0, n = 0
      for (let x = 0; x < W; x++) {
        for (const y of [0, H - 1]) {
          const i = at(x, y); br += d[i]; bg += d[i+1]; bb += d[i+2]; n++
        }
      }
      for (let y = 0; y < H; y++) {
        for (const x of [0, W - 1]) {
          const i = at(x, y); br += d[i]; bg += d[i+1]; bb += d[i+2]; n++
        }
      }
      br /= n; bg /= n; bb /= n

      const seen = new Uint8Array(W * H)
      const queue = []
      const push = (x, y) => {
        const p = y * W + x
        if (seen[p]) return
        seen[p] = 1
        queue.push(p)
      }
      for (let x = 0; x < W; x++) { push(x, 0); push(x, H - 1) }
      for (let y = 0; y < H; y++) { push(0, y); push(W - 1, y) }

      const transparent = new Uint8Array(W * H)
      while (queue.length) {
        const p = queue.pop()
        const x = p % W
        const y = (p - x) / W
        const i = p * 4
        const R = d[i], G = d[i+1], B = d[i+2]

        if (Math.abs(R - br) + Math.abs(G - bg) + Math.abs(B - bb) > TOTAL * 3) continue
        transparent[p] = 1

        for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
          const nx = x + dx, ny = y + dy
          if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue
          const np = ny * W + nx
          if (seen[np]) continue
          const ni = np * 4
          if (Math.abs(d[ni] - R) + Math.abs(d[ni+1] - G) + Math.abs(d[ni+2] - B) > STEP * 3) continue
          seen[np] = 1
          queue.push(np)
        }
      }

      /* feather: a pixel kept but touching a cleared one goes half
         alpha, so the cut has one soft step instead of a hard stair */
      for (let p = 0; p < W * H; p++) {
        if (transparent[p]) { d[p * 4 + 3] = 0; continue }
        const x = p % W, y = (p - x) / W
        let edge = false
        for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
          const nx = x + dx, ny = y + dy
          if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue
          if (transparent[ny * W + nx]) { edge = true; break }
        }
        if (edge) d[p * 4 + 3] = 128
      }

      g.putImageData(image, 0, 0)
      const cleared = transparent.reduce((a, v) => a + v, 0)
      return { data: cv.toDataURL('image/png'), W, H, pct: Math.round((cleared / (W * H)) * 100) }
    },
    [file, WIDTH, step, total]
  )

  const buf = Buffer.from(r.data.split(',')[1], 'base64')
  writeFileSync(new URL(`${slug}.png`, OUT_DIR), buf)

  const src = await page.evaluate(
    async (f) => (await fetch('/after-12th/' + f)).blob().then((b) => b.size),
    file
  )
  before += src
  after += buf.length

  console.log(
    `${slug.padEnd(18)} ${r.W}x${r.H}  ${String(r.pct).padStart(2)}% cleared  ` +
      `${(src / 1024).toFixed(0).padStart(4)} KB -> ${(buf.length / 1024).toFixed(0).padStart(4)} KB`
  )
}

console.log(`\ntotal ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB`)
await browser.close()
