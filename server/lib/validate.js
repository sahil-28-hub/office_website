import { z } from 'zod'

/* ==================================================================
   What a lead is allowed to be.

   The browser checks the same things before it sends, but that check
   is a courtesy to the person filling the form — it can be skipped by
   anyone willing to open devtools, so it is not a control. This is.

   Nothing that fails here reaches the database, and nothing that
   passes here is ever concatenated into SQL: Prisma binds every value
   as a parameter. Validation is not what protects us from injection —
   parameterised queries are. Validation is what keeps the table full
   of usable enquiries rather than 8KB of junk, and what stops the
   `details` blob being used as unbounded free storage.

   Every string is capped at or under its column width, so a payload
   that passes here can never fail on write with a truncation error.
================================================================== */

/* The six forms allowed to post to /api/leads. An unknown source is
   rejected rather than stored, so a scraped endpoint cannot invent its
   own categories in the team's inbox.

   The seventh form on the site — the application on /team — writes to
   the other table, under TEAM_SOURCE below. Between them these seven
   values cover every form on the site, and every row in the database
   carries one, so "which form was this?" is answerable from the row
   alone without knowing which table it came out of.

   `contact` is the message form on /contact. It is a lead like any
   other — a name, a number and something they want to say — so it
   goes in the same table under its own source rather than getting a
   table of its own. */
export const SOURCES = [
  'course-enquiry',
  'course-brochure',
  'book-demo',
  'home-cta',
  'about-cta',
  'contact'
]

/* Two of the six ask for a number and nothing else — the home CTA
   and the about-page CTA are a single field and a button, on purpose.
   A name is required only where the form actually asks for one, so
   the rule lives here rather than in the column. */
const NEEDS_NAME = new Set([
  'course-enquiry',
  'course-brochure',
  'book-demo',
  'contact'
])

/* Letters, marks, spaces and the punctuation that appears in real
   names — apostrophes, hyphens, full stops. Deliberately not a
   blocklist of "dangerous" characters: an apostrophe is not dangerous
   to a parameterised query, and stripping it would mangle O'Brien. */
const NAME = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]{1,119}$/u

/* Indian mobile numbers: ten digits starting 6-9. The form may send
   +91, spaces or dashes; normalisePhone() reduces it to the ten
   digits before this runs. */
const PHONE = /^[6-9]\d{9}$/

/* the invisible characters that arrive pasted from chat apps and
   quietly break a CSV export three months later */
const INVISIBLE = /[\u200B-\u200D\u2060\uFEFF]/g

const trimmed = (max) => z.string().trim().max(max)

export const leadSchema = z.object({
  source: z.enum(SOURCES),

  name: trimmed(120).regex(NAME).optional(),

  /* checked again after normalisation, below */
  phone: z.string().trim().min(10).max(20),

  email: z.union([z.email().max(190), z.literal('')]).optional(),

  course: trimmed(160).optional(),
  courseSlug: trimmed(120).regex(/^[a-z0-9-]*$/).optional(),

  message: trimmed(2000).optional(),

  /* A shallow bag of short strings and nothing else. Without the
     value cap this is an open invitation to store a megabyte per
     request; without the key cap, ten thousand of them. */
  details: z.record(z.string().max(60), z.string().max(300)).optional(),

  page: trimmed(500).optional(),

  /* the answered security question, kept for the audit trail */
  captcha: z
    .object({
      id: z.string().max(64).optional(),
      question: z.string().max(160).optional(),
      answer: z.string().max(12).optional()
    })
    .optional(),

  /* when the form was opened, for the time-on-form check */
  startedAt: z.number().int().nonnegative().optional(),

  /* the off-screen field. A person never sees it; a bot fills it. */
  honeypot: z.string().max(200).optional()
})

/* --------------------------------------------------------------
   Normalise before validating.

   "+91 98881 22255", "098881 22255" and "9888122255" are one number,
   and the team should not have to know that when they search.
-------------------------------------------------------------- */
export function normalisePhone(raw) {
  return String(raw ?? '').replace(/\D/g, '').slice(-10)
}

/* Collapses runs of whitespace and strips the invisibles. */
export function tidy(raw, max) {
  if (raw === undefined || raw === null) return undefined
  const clean = String(raw).replace(INVISIBLE, '').replace(/\s+/g, ' ').trim()
  return clean ? clean.slice(0, max) : undefined
}

/* the message keeps its line breaks — it is the one field where a
   person's own formatting is worth something */
function tidyMessage(raw) {
  if (raw === undefined || raw === null) return undefined
  const clean = String(raw).replace(INVISIBLE, '').trim().slice(0, 2000)
  return clean || undefined
}

/* what the visitor reads, per field */
const MESSAGES = {
  name: 'Please use letters only for your name.',
  nameMissing: 'Please tell us your name.',
  /* Names the rule, because PHONE above accepts only the Indian mobile
     range. The old wording just said "a valid 10-digit mobile number",
     so someone entering ten digits that begin 0-5 counted them, saw
     ten, and had no way to tell what the form objected to. */
  phone: 'Please enter a 10-digit mobile number starting with 6, 7, 8 or 9.',
  email: 'That email address does not look right.',
  message: 'Please keep the message under 2000 characters.',
  source: 'That form is not recognised. Please reload the page.',
  default: 'Please check this field.'
}

/* --------------------------------------------------------------
   The one entry point.

   Returns { ok: true, lead } or { ok: false, error, fields }, where
   `fields` maps a form field to the sentence the form shows beside
   it.
-------------------------------------------------------------- */
export function parseLead(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, error: 'invalid', fields: {} }
  }

  const candidate = {
    ...body,
    name: tidy(body.name, 120),
    course: tidy(body.course, 160),
    courseSlug: tidy(body.courseSlug, 120),
    message: tidyMessage(body.message),
    page: tidy(body.page, 500)
  }

  const parsed = leadSchema.safeParse(candidate)

  if (!parsed.success) {
    const fields = {}
    for (const issue of parsed.error.issues) {
      const field = issue.path[0]
      if (field && !fields[field]) fields[field] = MESSAGES[field] || MESSAGES.default
    }
    return { ok: false, error: 'invalid', fields }
  }

  if (NEEDS_NAME.has(parsed.data.source) && !parsed.data.name) {
    return { ok: false, error: 'invalid', fields: { name: MESSAGES.nameMissing } }
  }

  const phone = normalisePhone(parsed.data.phone)
  if (!PHONE.test(phone)) {
    return { ok: false, error: 'invalid', fields: { phone: MESSAGES.phone } }
  }

  return {
    ok: true,
    lead: { ...parsed.data, phone, email: parsed.data.email || undefined }
  }
}

/* ==================================================================
   What an application to work here is allowed to be.

   Same rules as a lead where the fields are the same — the name
   pattern, the phone pattern, the caps that keep every string inside
   its column — and its own where they are not. Kept in this file so
   there is one place to look for "what the server will accept",
   rather than a second half of the answer in the route.

   `role` is checked against the list the form offers rather than
   accepted as free text: an open field here would let a scraped
   endpoint invent its own categories in the hiring team's list.
================================================================== */

/* What a team_applications row records as its origin, so it names its
   own form exactly as a lead does. Set by the server, not accepted
   from the request: the browser has no say in what a row claims to
   be. */
export const TEAM_SOURCE = 'team-application'

/* mirrors TEAM_APPLY.roles in src/data/team.js — the two have to
   agree, the same way SOURCES and LEAD_SOURCES do */
export const TEAM_ROLES = [
  'Trainer — Programming',
  'Trainer — Data & AI',
  'Trainer — Digital Marketing',
  'Trainer — Design',
  'Trainer — Civil / Mechanical',
  'Placement & Employer Relations',
  'Career Counsellor',
  'Lab & Systems',
  'Student Support',
  'Something else'
]

/* http(s) only. A portfolio field that accepts any scheme accepts
   javascript: and mailto:, and this value is read by a person in an
   admin list who may well click it. */
const PORTFOLIO = /^https?:\/\/\S+$/i

export const teamApplicationSchema = z.object({
  name: trimmed(120).regex(NAME),
  phone: z.string().trim().min(10).max(20),
  email: z.union([z.email().max(190), z.literal('')]).optional(),

  role: z.enum(TEAM_ROLES),

  /* free text, because "6 years", "fresher" and "2.5 yrs agency" are
     all real answers and a number would force a lie out of two of them */
  experience: trimmed(60).optional(),

  portfolio: z.union([trimmed(500).regex(PORTFOLIO), z.literal('')]).optional(),

  message: trimmed(2000).optional(),

  page: trimmed(500).optional(),

  captcha: z
    .object({
      id: z.string().max(64).optional(),
      question: z.string().max(160).optional(),
      answer: z.string().max(12).optional()
    })
    .optional(),

  startedAt: z.number().int().nonnegative().optional(),
  honeypot: z.string().max(200).optional()
})

const TEAM_MESSAGES = {
  ...MESSAGES,
  role: 'Please choose the role you are applying for.',
  portfolio: 'Please use a full link starting with http:// or https://',
  experience: 'Please keep this under 60 characters.'
}

export function parseTeamApplication(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, error: 'invalid', fields: {} }
  }

  const candidate = {
    ...body,
    name: tidy(body.name, 120),
    role: tidy(body.role, 120),
    experience: tidy(body.experience, 60),
    portfolio: tidy(body.portfolio, 500),
    message: tidyMessage(body.message),
    page: tidy(body.page, 500)
  }

  const parsed = teamApplicationSchema.safeParse(candidate)

  if (!parsed.success) {
    const fields = {}
    for (const issue of parsed.error.issues) {
      const field = issue.path[0]
      if (!field || fields[field]) continue
      /* a missing name and a malformed one are different sentences */
      fields[field] =
        field === 'name' && !candidate.name
          ? TEAM_MESSAGES.nameMissing
          : TEAM_MESSAGES[field] || TEAM_MESSAGES.default
    }
    return { ok: false, error: 'invalid', fields }
  }

  const phone = normalisePhone(parsed.data.phone)
  if (!PHONE.test(phone)) {
    return { ok: false, error: 'invalid', fields: { phone: TEAM_MESSAGES.phone } }
  }

  return {
    ok: true,
    application: {
      ...parsed.data,
      phone,
      email: parsed.data.email || undefined,
      portfolio: parsed.data.portfolio || undefined
    }
  }
}
