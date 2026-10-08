import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'

import leads from './routes/leads.js'
import team from './routes/team.js'
import { assertDatabaseReady, closeDatabase } from './lib/db.js'

/* ==================================================================
   The API behind the forms.

   Two write endpoints and a health check. It is small on purpose: the
   site is a static bundle, and the only thing it cannot do in the
   browser is write to MySQL.

     POST /api/leads              every enquiry form  → `leads`
     POST /api/team-applications  the team page       → `team_applications`

   It also serves two built front ends: the public site at /, and the
   CMS at /admin (with /login redirecting there).

   Both go through the one Prisma client and the one DATABASE_URL.

   In production this also serves the built site, so `npm run build &&
   npm run start` is the whole deployment on a single Node host and
   there is no cross-origin request to configure. In development Vite
   serves the app on :5173 and proxies /api here — see vite.config.js.
================================================================== */

const here = path.dirname(fileURLToPath(import.meta.url))
const dist = path.resolve(here, '..', 'dist')
const cmsDist = path.resolve(here, '..', 'cms-techcadd', 'frontend', 'dist')

const app = express()
const port = Number(process.env.PORT || 4000)

/* Express sits behind nginx / Vercel / cPanel's proxy in every real
   deployment, and without this req.ip is the proxy's address — which
   would rate-limit every visitor as though they were one person.
   Left at the default (off) in development, where there is no proxy
   and trusting the header would let anyone spoof their address past
   the rate limiter. */
if (process.env.TRUST_PROXY) {
  app.set('trust proxy', process.env.TRUST_PROXY === 'true' ? 1 : process.env.TRUST_PROXY)
}

app.disable('x-powered-by')

/* A lead is a few hundred bytes. Anything a thousand times that size
   is not a lead, and parsing it before finding that out is the cheap
   half of a denial-of-service. */
app.use(express.json({ limit: '16kb' }))

/* Same-origin in production, so CORS is only needed for the dev
   server and for a deployment that genuinely splits the two. An
   explicit allowlist rather than `*`: the endpoint writes, and a
   wildcard would let any page on the internet post to it from a
   visitor's browser. */
const allowed = (process.env.CORS_ORIGINS || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean)

app.use(
  cors({
    origin(origin, done) {
      /* same-origin requests and server-to-server calls send no
         Origin header at all */
      if (!origin) return done(null, true)
      if (allowed.includes(origin)) return done(null, true)
      return done(null, false)
    },
    methods: ['POST'],
    maxAge: 86400
  })
)

/* A few headers that cost nothing and close off the easy mistakes.
   The API returns JSON only, so there is no reason for a browser to
   sniff it, frame it, or render it as a document. */
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  next()
})

app.get('/api/health', (req, res) => res.json({ ok: true }))

/* Two endpoints, two tables, one database connection:
     POST /api/leads              → `leads`
     POST /api/team-applications  → `team_applications`  */
app.use('/api', leads)
app.use('/api', team)

/* ----------------------------- the CMS ---------------------------
   The admin app is a second single-page bundle, mounted at /admin.

   Not at the root: the two apps share four route names — `/`,
   `/courses`, `/gallery` and `/reviews` — so a CMS at the root would
   have its dashboard and the public homepage claiming the same URL.
   The prefix is also baked into the CMS build (`base: '/admin/'` in
   cms-techcadd/frontend/vite.config.ts), so its asset URLs and its
   router agree with what is served here.

   /login is kept as a convenience: it is the one admin path that does
   NOT collide with a public route, so typing it is allowed to mean
   "take me to the CMS".
------------------------------------------------------------------ */
if (fs.existsSync(cmsDist)) {
  /* Only /login redirects. /admin itself must serve the CMS shell so the
     app's own guard decides where you land — bouncing it to /login here
     would send an already-signed-in user to a login screen. */
  app.get('/login', (req, res) => res.redirect(302, '/admin/login'))

  app.use('/admin', express.static(cmsDist, { index: false, redirect: false, maxAge: '1y', etag: true }))

  /* the CMS is a router too, so anything under /admin that is not a
     file is its index.html */
  app.get(/^\/admin(?:\/.*)?$/, (req, res) => {
    res.sendFile(path.join(cmsDist, 'index.html'))
  })
}

/* ---------------------------- the site ---------------------------
   Only if it has been built. Running the API on its own is a normal
   thing to do in development, and it should not fail because dist/
   is not there yet.
------------------------------------------------------------------ */
if (fs.existsSync(dist)) {
  /* redirect:false matters more than it looks. dist/ contains image
     folders named `about` and `courses`, which collide with two of the
     site's routes — and express.static answers a request for a
     directory with a 301 to the same path plus a trailing slash. So
     /courses and /about each cost an extra round trip and then sit at
     /courses/ in the address bar, giving search engines two URLs for
     one page. With redirects off, a directory is simply not a match
     and the request falls through to the SPA handler below. */
  app.use(express.static(dist, { index: false, redirect: false, maxAge: '1y', etag: true }))

  /* the app is a single-page router, so any path that is not a file,
     not the API and not the CMS is index.html. /admin is excluded here
     as well as handled above, so that a build without the CMS present
     404s honestly instead of serving the public app under /admin. */
  app.get(/^(?!\/api\/)(?!\/admin(?:\/|$)).*/, (req, res) => {
    res.sendFile(path.join(dist, 'index.html'))
  })
}

/* An unhandled throw anywhere above lands here. One sentence out, the
   real reason in the log. */
app.use((error, req, res, next) => {
  console.error('[api]', error)
  if (res.headersSent) return next(error)
  res.status(500).json({ ok: false, error: 'server' })
})

async function start() {
  /* a wrong password should be a startup error in the log, not a 500
     for the first visitor who fills in a form */
  await assertDatabaseReady()

  const server = app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`)
    if (fs.existsSync(dist)) console.log('Serving the built site from dist/')
  })

  const shutdown = async (signal) => {
    console.log(`\n${signal} — closing`)
    server.close(async () => {
      await closeDatabase()
      process.exit(0)
    })
  }

  process.on('SIGINT', () => shutdown('SIGINT'))
  process.on('SIGTERM', () => shutdown('SIGTERM'))
}

start().catch((error) => {
  console.error('Failed to start:', error)
  process.exit(1)
})
