/* Prepares the team headshots for the founder page.

   The supplied files are PNGs between 0.6 and 1.1 MB each — 10.7 MB for
   twelve faces. The cards render at roughly 280x373 CSS pixels, so that
   is about a hundred times more data than the page can use, and PNG is
   the wrong container for a photograph anyway.

   This does two things:

     - crops every source to a uniform 3:4, biased upward so the face
       sits where the eye expects it and not under the name plate. The
       sources range from 0.71 to 1.00, so without this the grid is a
       set of different shapes.
     - re-encodes to JPEG at 720x960, which is 2x the largest size a
       card is ever drawn at.

   Originals are left alone; output is <slug>.jpg beside them.

   Chromium does the decode, crop and encode through a canvas, which is
   why this drives a browser rather than pulling in an image library.

   Usage — needs the built site being served:
     npm run build && npm run start &
     node scripts/build-team-photos.mjs
*/

import { chromium } from 'playwright'
import { writeFileSync } from 'fs'

const ORIGIN = process.env.ORIGIN || 'http://localhost:4000'
const OUT_DIR = process.env.OUT_DIR || new URL('../public/about/', import.meta.url)

const W = 720
const H = 960

/* source file -> output slug. The source names are as supplied,
   including the capitalised Alam-sir.png and Anita-mam.png: the deploy
   host is case-sensitive even though Windows is not. */
const PEOPLE = [
  ['gourav-sir.png', 'gourav-gupta'],
  ['shilpa-mam.png', 'shilpa-gupta'],
  ['asmita-mam.png', 'asmita-sehgal'],
  ['daljeet-sir.png', 'daljeet-singh'],
  ['amit-sir.png', 'amit-sharma'],
  ['harrachneet-mam.png', 'harrachneet-kaur'],
  ['Alam-sir.png', 'alam'],
  ['tanisha-mam.png', 'tanisha'],
  ['sandeep-sir.png', 'sandeep-chugh'],
  ['Anita-mam.png', 'anita-sharma'],
  ['shiv-sir.png', 'shiv'],
  ['aman-sir.png', 'aman-sharma']
]

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(ORIGIN, { waitUntil: 'domcontentloaded' })

let before = 0
let after = 0

for (const [file, slug] of PEOPLE) {
  const r = await page.evaluate(
    async ([src, w, h]) => {
      const img = new Image()
      img.src = '/about/' + src
      await img.decode()

      const sw = img.naturalWidth
      const sh = img.naturalHeight

      /* cover-crop to the target aspect */
      const target = w / h
      let cw = sw
      let ch = sw / target
      if (ch > sh) {
        ch = sh
        cw = sh * target
      }
      const cx = (sw - cw) / 2
      /* 30% down rather than centred: a headshot puts the face in the
         upper half, and the lower fifth of the card is under the scrim */
      const cy = Math.max(0, Math.min(sh - ch, (sh - ch) * 0.3))

      const cv = document.createElement('canvas')
      cv.width = w
      cv.height = h
      const g = cv.getContext('2d')
      g.imageSmoothingQuality = 'high'
      g.drawImage(img, cx, cy, cw, ch, 0, 0, w, h)

      return { data: cv.toDataURL('image/jpeg', 0.86), sw, sh }
    },
    [file, W, H]
  )

  const buf = Buffer.from(r.data.split(',')[1], 'base64')
  writeFileSync(new URL(`${slug}.jpg`, OUT_DIR), buf)

  const src = await page.evaluate(
    async (f) => (await fetch('/about/' + f)).blob().then((b) => b.size),
    file
  )
  before += src
  after += buf.length

  console.log(
    `${slug.padEnd(18)} ${r.sw}x${r.sh} ${(src / 1024).toFixed(0).padStart(5)} KB` +
      `  ->  ${W}x${H} ${(buf.length / 1024).toFixed(0).padStart(4)} KB`
  )
}

console.log(
  `\ntotal ${(before / 1024 / 1024).toFixed(1)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB` +
    `  (${Math.round((1 - after / before) * 100)}% smaller)`
)

await browser.close()
