/* Internal link audit.

   Crawls every route the site declares, follows only same-origin
   links, and reports three things:

     broken     a link whose target 404s, or points at a course slug
                that is not in the registry
     orphans    a page nothing links to — reachable only by typing it
     inbound    how many distinct pages link to each page, which is
                the useful half of "backlinking"

   Run against the built site:
     npm run build && npm run start &
     node scripts/audit-links.mjs
*/

import { chromium } from 'playwright'

const ORIGIN = process.env.ORIGIN || 'http://localhost:4000'

/* every page the site is expected to have. Course pages are appended
   from the registry so a new course is audited automatically. */
const STATIC_ROUTES = [
  '/', '/about', '/mission-vision', '/founder', '/team', '/gallery',
  '/blog', '/faq', '/reviews', '/college-partnerships', '/contact', '/courses'
]

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

/* the registry, read from the running app rather than re-parsed here */
await page.goto(ORIGIN + '/courses', { waitUntil: 'networkidle' })
await page.waitForTimeout(800)
const courseHrefs = await page.evaluate(() =>
  [...new Set([...document.querySelectorAll('a[href^="/courses/"]')].map((a) => a.getAttribute('href')))]
)

const ROUTES = [...STATIC_ROUTES, ...courseHrefs]
console.log(`auditing ${ROUTES.length} pages\n`)

const inbound = new Map(ROUTES.map((r) => [r, new Set()]))
const broken = []
const seenTargets = new Set()

for (const route of ROUTES) {
  const resp = await page.goto(ORIGIN + route, { waitUntil: 'networkidle', timeout: 30000 })
  if (!resp || resp.status() !== 200) {
    broken.push(`${route} itself returned ${resp ? resp.status() : 'no response'}`)
    continue
  }

  /* scroll so lazily-mounted sections contribute their links too */
  for (let i = 0; i < 26; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    await page.waitForTimeout(90)
  }
  await page.waitForTimeout(600)

  const links = await page.evaluate(() =>
    [...new Set(
      [...document.querySelectorAll('a[href]')]
        .map((a) => a.getAttribute('href'))
        .filter((h) => h && h.startsWith('/') && !h.startsWith('//'))
    )]
  )

  for (const raw of links) {
    const target = raw.split('#')[0].replace(/\/$/, '') || '/'
    if (target === route) continue
    if (inbound.has(target)) inbound.get(target).add(route)
    seenTargets.add(target)
  }
}

/* anything linked to that is not a known route — check it resolves */
for (const target of seenTargets) {
  if (inbound.has(target)) continue
  const resp = await page.goto(ORIGIN + target, { waitUntil: 'domcontentloaded', timeout: 20000 })
  const body = await page.evaluate(() => document.body.innerText.length)
  if (!resp || resp.status() !== 200 || body < 300) {
    broken.push(`${target} — linked but returns ${resp ? resp.status() : '?'} / ${body} chars`)
  }
}

console.log('inbound links per page (0 = orphan)\n')
const rows = [...inbound.entries()].sort((a, b) => a[1].size - b[1].size)
for (const [route, from] of rows) {
  const flag = from.size === 0 ? '  <-- ORPHAN' : ''
  console.log(`  ${String(from.size).padStart(3)}  ${route}${flag}`)
}

const orphans = rows.filter(([, f]) => f.size === 0)
console.log(`\n${orphans.length} orphan(s), ${broken.length} broken link(s)`)
if (broken.length) broken.forEach((b) => console.log('  BROKEN ' + b))

await browser.close()
process.exit(broken.length ? 1 : 0)
