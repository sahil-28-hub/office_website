import { z } from 'zod'
import { COUNSELLING_SLOTS, bookingDateError } from './counselling'

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

/* The seven forms allowed to post to /api/leads. An unknown source is
   rejected rather than stored, so a scraped endpoint cannot invent its
   own categories in the team's inbox. */
export const SOURCES = [
  'course-enquiry',
  'course-brochure',
  'book-demo',
  'home-cta',
  'about-cta',
  'contact',
  'virtual-counselling'
] as const

/* Two of the six ask for a number and nothing else — the home CTA
   and the about-page CTA are a single field and a button, on purpose. */
const NEEDS_NAME = new Set<string>([
  'course-enquiry',
  'course-brochure',
  'book-demo',
  'contact',
  'virtual-counselling'
])

/* Letters, marks, spaces and the punctuation that appears in real
   names — apostrophes, hyphens, full stops. */
const NAME = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]{1,119}$/u

/* Indian mobile numbers: ten digits starting 6-9. */
const PHONE = /^[6-9]\d{9}$/

/* the invisible characters that arrive pasted from chat apps */
const INVISIBLE = /[\u200B-\u200D\u2060\uFEFF]/g

const trimmed = (max: number) => z.string().trim().max(max)

export const leadSchema = z.object({
  source: z.enum(SOURCES),

  name: trimmed(120).regex(NAME).optional(),

  phone: z.string().trim().min(10).max(20),

  email: z.union([z.email().max(190), z.literal('')]).optional(),

  course: trimmed(160).optional(),
  courseSlug: trimmed(120).regex(/^[a-z0-9-]*$/).optional(),

  message: trimmed(2000).optional(),

  details: z.record(z.string().max(60), z.string().max(300)).optional(),

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

export type LeadInput = z.infer<typeof leadSchema>

/* --------------------------------------------------------------
   Normalise before validating.
-------------------------------------------------------------- */
export function normalisePhone(raw: unknown): string {
  return String(raw ?? '').replace(/\D/g, '').slice(-10)
}

/* Collapses runs of whitespace and strips the invisibles. */
export function tidy(raw: unknown, max: number): string | undefined {
  if (raw === undefined || raw === null) return undefined
  const clean = String(raw).replace(INVISIBLE, '').replace(/\s+/g, ' ').trim()
  return clean ? clean.slice(0, max) : undefined
}

/* the message keeps its line breaks */
function tidyMessage(raw: unknown): string | undefined {
  if (raw === undefined || raw === null) return undefined
  const clean = String(raw).replace(INVISIBLE, '').trim().slice(0, 2000)
  return clean || undefined
}

/* what the visitor reads, per field */
const MESSAGES: Record<string, string> = {
  name: 'Please use letters only for your name.',
  nameMissing: 'Please tell us your name.',
  phone: 'Please enter a 10-digit mobile number starting with 6, 7, 8 or 9.',
  email: 'That email address does not look right.',
  message: 'Please keep the message under 2000 characters.',
  source: 'That form is not recognised. Please reload the page.',
  preferredSlot: 'Pick a time slot.',
  default: 'Please check this field.'
}

export type ParseLeadSuccess = { ok: true; lead: LeadInput & { phone: string } }
export type ParseLeadFailure = { ok: false; error: string; fields: Record<string, string> }
export type ParseLeadResult = ParseLeadSuccess | ParseLeadFailure

export function parseLead(body: unknown): ParseLeadResult {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, error: 'invalid', fields: {} }
  }

  const b = body as Record<string, unknown>

  const candidate = {
    ...b,
    name: tidy(b.name, 120),
    course: tidy(b.course, 160),
    courseSlug: tidy(b.courseSlug, 120),
    message: tidyMessage(b.message),
    page: tidy(b.page, 500)
  }

  const parsed = leadSchema.safeParse(candidate)

  if (!parsed.success) {
    const fields: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0])
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

  /* A counselling booking is a day and a slot, and both are checked
     here against the same rules the dialog used to offer them — a
     request built by hand cannot book last Tuesday, a Sunday, or a
     time nobody is free. The values travel in `details`, like every
     other form-specific field. */
  if (parsed.data.source === 'virtual-counselling') {
    const date = parsed.data.details?.preferredDate || ''
    const slot = parsed.data.details?.preferredSlot || ''
    const dateProblem = bookingDateError(date)
    if (dateProblem) {
      return { ok: false, error: 'invalid', fields: { preferredDate: dateProblem } }
    }
    if (!(COUNSELLING_SLOTS as readonly string[]).includes(slot)) {
      return { ok: false, error: 'invalid', fields: { preferredSlot: MESSAGES.preferredSlot } }
    }
  }

  return {
    ok: true,
    lead: { ...parsed.data, phone, email: parsed.data.email || undefined }
  }
}

/* ==================================================================
   What an application to work here is allowed to be.
================================================================== */

export const TEAM_SOURCE = 'team-application'

export const TEAM_ROLES = [
  'Trainer \u2014 Programming',
  'Trainer \u2014 Data & AI',
  'Trainer \u2014 Digital Marketing',
  'Trainer \u2014 Design',
  'Trainer \u2014 Civil / Mechanical',
  'Placement & Employer Relations',
  'Career Counsellor',
  'Lab & Systems',
  'Student Support',
  'Something else'
] as const

const PORTFOLIO = /^https?:\/\/\S+$/i

export const teamApplicationSchema = z.object({
  name: trimmed(120).regex(NAME),
  phone: z.string().trim().min(10).max(20),
  email: z.union([z.email().max(190), z.literal('')]).optional(),

  role: z.enum(TEAM_ROLES),

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

export type TeamApplicationInput = z.infer<typeof teamApplicationSchema>

const TEAM_MESSAGES: Record<string, string> = {
  ...MESSAGES,
  role: 'Please choose the role you are applying for.',
  portfolio: 'Please use a full link starting with http:// or https://',
  experience: 'Please keep this under 60 characters.'
}

export type ParseTeamSuccess = { ok: true; application: TeamApplicationInput & { phone: string } }
export type ParseTeamFailure = { ok: false; error: string; fields: Record<string, string> }
export type ParseTeamResult = ParseTeamSuccess | ParseTeamFailure

export function parseTeamApplication(body: unknown): ParseTeamResult {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, error: 'invalid', fields: {} }
  }

  const b = body as Record<string, unknown>

  const candidate = {
    ...b,
    name: tidy(b.name, 120),
    role: tidy(b.role, 120),
    experience: tidy(b.experience, 60),
    portfolio: tidy(b.portfolio, 500),
    message: tidyMessage(b.message),
    page: tidy(b.page, 500)
  }

  const parsed = teamApplicationSchema.safeParse(candidate)

  if (!parsed.success) {
    const fields: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0])
      if (!field || fields[field]) continue
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
