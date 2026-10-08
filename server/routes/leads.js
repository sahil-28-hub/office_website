import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { prisma } from '../lib/db.js'
import { parseLead } from '../lib/validate.js'

/* ==================================================================
   POST /api/leads — the only way anything gets written.

   Every form on the site ends here. The order matters:

     1  rate limit        one IP cannot fill the table on its own
     2  honeypot          a field only a script fills
     3  time on form      a submission faster than a person can read
     4  validate          shape, length and character rules
     5  write             through Prisma, as bound parameters

   On SQL injection specifically: there is no SQL in this file. The
   write is `prisma.lead.create({ data })`, which the driver sends as
   a prepared statement with the values bound separately from the
   statement text. A name of "'; DROP TABLE leads; --" is stored as
   exactly those characters. Nothing is escaped, because nothing needs
   escaping when nothing is interpolated.

   The two doors that would reopen the problem are $queryRawUnsafe and
   $executeRawUnsafe. Neither is used anywhere in this project, and a
   grep for them is a fair thing to put in review.
================================================================== */

const router = Router()

/* a form filled faster than a person can read it is not a person */
const MIN_FILL_MS = 2500

/* Generous for a person, tight for a script: nobody legitimately
   sends twelve enquiries in a quarter of an hour, and a visitor who
   mistypes their number three times is nowhere near it.

   Overridable because the one case that does hit twelve in a quarter
   of an hour is a developer testing the forms — every rejected
   attempt counts too, so a few validation errors in a row exhaust it.
   Raise LEADS_RATE_LIMIT in .env locally; leave it unset in
   production and the default below applies. The counter lives in
   memory, so restarting the API also clears it. */
const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MIN || 15) * 60 * 1000,
  limit: Number(process.env.LEADS_RATE_LIMIT || 12),
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { ok: false, error: 'rate-limit' }
})

/* Only what the team needs to trace a spam run — never rendered back
   to anyone, never used for anything else. */
function clientIp(req) {
  return String(req.ip || '').slice(0, 45) || null
}

router.post('/leads', limiter, async (req, res) => {
  const body = req.body

  /* -- 2: the honeypot -------------------------------------------
     Answer 200 rather than 400. A bot that is told it failed learns
     what to change; a bot that is told it succeeded moves on. */
  if (body && typeof body.honeypot === 'string' && body.honeypot.trim()) {
    return res.status(200).json({ ok: true })
  }

  /* -- 3: time on form -------------------------------------------- */
  if (typeof body?.startedAt === 'number' && body.startedAt > 0) {
    const elapsed = Date.now() - body.startedAt
    /* a clock skewed into the future is as suspicious as no delay */
    if (elapsed < MIN_FILL_MS) {
      return res.status(400).json({ ok: false, error: 'too-fast' })
    }
  }

  /* -- 4: validate ------------------------------------------------- */
  const parsed = parseLead(body)
  if (!parsed.ok) {
    return res.status(400).json({ ok: false, error: parsed.error, fields: parsed.fields })
  }

  const { lead } = parsed

  /* -- 5: write ----------------------------------------------------
     Prisma's model API. Every value below travels as a bound
     parameter; none of it is ever part of the statement text. */
  try {
    const saved = await prisma.lead.create({
      data: {
        source: lead.source,
        name: lead.name ?? null,
        phone: lead.phone,
        email: lead.email ?? null,
        course: lead.course ?? null,
        courseSlug: lead.courseSlug ?? null,
        message: lead.message ?? null,
        details: lead.details ?? undefined,
        page: lead.page ?? null,
        ip: clientIp(req),
        userAgent: String(req.get('user-agent') || '').slice(0, 400) || null
      },
      select: { id: true, createdAt: true }
    })

    /* The id is useful to quote on a phone call and useless to
       anyone else; nothing else about the row goes back over the
       wire. */
    return res.status(201).json({ ok: true, id: saved.id })
  } catch (error) {
    /* The real reason goes to the server log. The visitor gets one
       sentence, because a database error message on a public page is
       a free map of the schema. */
    console.error('[leads] write failed:', error)
    return res.status(500).json({ ok: false, error: 'server' })
  }
})

export default router
