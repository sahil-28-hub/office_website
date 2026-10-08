import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { prisma } from '../lib/db.js'
import { parseTeamApplication, TEAM_SOURCE } from '../lib/validate.js'

/* ==================================================================
   POST /api/team-applications — the form at the bottom of /team.

   The same five steps the leads route runs, in the same order:

     1  rate limit        one IP cannot fill the table on its own
     2  honeypot          a field only a script fills
     3  time on form      a submission faster than a person can read
     4  validate          shape, length and character rules
     5  write             through Prisma, as bound parameters

   Different table, same database. `prisma.teamApplication.create()`
   goes down the same pooled connection as `prisma.lead.create()` —
   one client, one DATABASE_URL, no second credential anywhere. See
   server/lib/db.js.

   And the same note on SQL injection: there is no SQL in this file.
   The write is a Prisma model call, which the driver sends as a
   prepared statement with the values bound separately from the
   statement text. Nothing is escaped because nothing is interpolated.
================================================================== */

const router = Router()

/* a form filled faster than a person can read it is not a person */
const MIN_FILL_MS = 2500

/* Tighter than the leads limiter. Nobody applies for a job six times
   in a quarter of an hour, and unlike an enquiry there is no reason
   for one person to send several.

   Overridable the same way as the leads limiter, for the same reason
   — see the note there. Raise TEAM_RATE_LIMIT in .env locally and
   leave it unset in production. */
const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MIN || 15) * 60 * 1000,
  limit: Number(process.env.TEAM_RATE_LIMIT || 6),
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { ok: false, error: 'rate-limit' }
})

function clientIp(req) {
  return String(req.ip || '').slice(0, 45) || null
}

router.post('/team-applications', limiter, async (req, res) => {
  const body = req.body

  /* -- 2: the honeypot --------------------------------------------
     200, not 400. A bot that is told it failed learns what to change. */
  if (body && typeof body.honeypot === 'string' && body.honeypot.trim()) {
    return res.status(200).json({ ok: true })
  }

  /* -- 3: time on form --------------------------------------------- */
  if (typeof body?.startedAt === 'number' && body.startedAt > 0) {
    const elapsed = Date.now() - body.startedAt
    if (elapsed < MIN_FILL_MS) {
      return res.status(400).json({ ok: false, error: 'too-fast' })
    }
  }

  /* -- 4: validate -------------------------------------------------- */
  const parsed = parseTeamApplication(body)
  if (!parsed.ok) {
    return res.status(400).json({ ok: false, error: parsed.error, fields: parsed.fields })
  }

  const { application } = parsed

  /* -- 5: write ----------------------------------------------------- */
  try {
    const saved = await prisma.teamApplication.create({
      data: {
        /* set here, never taken from the request — a row does not get
           to decide what it claims to be. Same column and same job as
           `source` on a lead, so every row in the database names the
           form that produced it. */
        source: TEAM_SOURCE,
        name: application.name,
        phone: application.phone,
        email: application.email ?? null,
        role: application.role,
        experience: application.experience ?? null,
        portfolio: application.portfolio ?? null,
        message: application.message ?? null,
        page: application.page ?? null,
        ip: clientIp(req),
        userAgent: String(req.get('user-agent') || '').slice(0, 400) || null
      },
      select: { id: true, createdAt: true }
    })

    return res.status(201).json({ ok: true, id: saved.id })
  } catch (error) {
    /* the real reason to the log, one sentence to the applicant — a
       database error on a public page is a free map of the schema */
    console.error('[team] write failed:', error)
    return res.status(500).json({ ok: false, error: 'server' })
  }
})

export default router
