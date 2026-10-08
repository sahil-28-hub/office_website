/* ==================================================================
   Forwarding a submitted form to the CMS enquiries inbox.

   THE PROBLEM

   Every form on the site wrote one row to the website's own `leads`
   table, through Prisma. The CMS has an enquiries module — a
   pipeline, assignees, follow-up dates, notes, an export — reading
   its OWN `enquiries` table, in its own database. The two were never
   connected, so the counselling team's inbox in the CMS stayed empty
   while the enquiries piled up in a table only a developer could
   read.

   WHAT THIS DOES

   `leads` stays authoritative and is written first, exactly as
   before. This is a second, best-effort write to the CMS so the
   people who actually work the enquiries can see them where they work.

   FAILURE IS NOT AN OPTION HERE, IT IS THE DESIGN

   A lead is a person who wants to be called back. Losing one because
   the CMS was restarting is not an acceptable trade for tidier data,
   so nothing in this file can fail a submission:

     - it runs AFTER the Prisma write has succeeded;
     - it is never awaited by the response;
     - every error is logged and swallowed.

   The worst case is an enquiry that is in `leads` and not in the CMS,
   which is exactly where every enquiry was before this existed.
================================================================== */

import { CMS_ENABLED, CMS_PUBLIC_BASE } from './cms'
import { COUNSELLING_FORM_TYPE } from './counselling'

/** Long enough for a cold CMS, short enough not to pile up requests. */
const TIMEOUT_MS = 6000

/**
 * The CMS's `source` enum, which is where the enquiry came from as a
 * CHANNEL — not which form it was.
 *
 * Every form on this website is the website, so they all map to
 * 'website'. Anything else the enum allows ('walk-in', 'phone',
 * 'referral', 'social') describes an enquiry a staff member types in
 * at the other end, and nothing here can legitimately claim to be one.
 *
 * Which form it actually was travels in `formType`, which the CMS
 * records alongside. That is the field that distinguishes a brochure
 * download from a demo booking, and it is free text rather than an
 * enum precisely so a new form on this site does not need a migration
 * on the other one.
 */
const CHANNEL = 'website'

/** What the CMS's public enquiry schema accepts. Anything else is rejected there. */
type CmsEnquiry = {
  studentName: string
  phone: string
  email?: string
  courseName: string
  message?: string
  source: string
  formType?: string
  sourceUrl?: string
  ip?: string
  userAgent?: string
  /** A virtual-counselling booking's day ("YYYY-MM-DD") and slot. */
  preferredDate?: string
  preferredSlot?: string
}

/**
 * A validated lead → the CMS's enquiry shape.
 *
 * `studentName` is required at the far end and two of this site's six
 * forms — the home CTA and the about CTA — ask only for a number. The
 * CMS would reject those outright, so they arrive under a name that
 * says what happened rather than being dropped or given a fake one.
 *
 * The extra fields a lead carries and an enquiry has no column for —
 * the preferred duration, the centre, the mode — are appended to the
 * message rather than discarded. A counsellor reading "prefers
 * weekend batches" before they call is the whole point of forwarding
 * this at all.
 */
export function enquiryFromLead(
  lead: Record<string, any>,
  meta: { ip?: string | null; userAgent?: string | null } = {}
): CmsEnquiry {
  const details = lead.details && typeof lead.details === 'object' ? lead.details : {}

  /* A counselling booking's day and slot have columns of their own in
     the CMS — the team sorts, filters and reschedules on them — so they
     travel as fields rather than as a line in the message. */
  const { preferredDate, preferredSlot, ...rest } = details as Record<string, any>
  const isBooking = Boolean(preferredDate && preferredSlot)

  const extras = Object.entries(isBooking ? rest : details)
    .filter(([, value]) => value !== null && value !== undefined && String(value).trim() !== '')
    .map(([key, value]) => `${key}: ${value}`)

  const message = [lead.message?.trim(), extras.length ? extras.join(' · ') : '']
    .filter(Boolean)
    .join('\n\n')

  return {
    studentName: lead.name?.trim() || 'Callback request (no name given)',
    phone: String(lead.phone || ''),
    email: lead.email || undefined,
    /* required at the far end, and '' is a valid value for it there */
    courseName: lead.course || '',
    message: message || undefined,
    source: CHANNEL,
    /* which of the six forms — 'course-enquiry', 'book-demo', … */
    formType: isBooking
      ? COUNSELLING_FORM_TYPE
      : lead.source
        ? String(lead.source).slice(0, 32)
        : undefined,
    preferredDate: isBooking ? String(preferredDate) : undefined,
    preferredSlot: isBooking ? String(preferredSlot).slice(0, 40) : undefined,
    sourceUrl: lead.page ? String(lead.page).slice(0, 500) : undefined,
    ip: meta.ip ? String(meta.ip).slice(0, 45) : undefined,
    /* the CMS column is 255, shorter than this site's 400 */
    userAgent: meta.userAgent ? String(meta.userAgent).slice(0, 255) : undefined
  }
}

/**
 * Posts one enquiry to the CMS. Resolves either way; never throws.
 *
 * Call it without awaiting. The returned promise is there for tests
 * and for the log line, not for the request handler to wait on.
 */
export async function forwardEnquiryToCms(
  lead: Record<string, any>,
  meta: { ip?: string | null; userAgent?: string | null } = {}
): Promise<boolean> {
  if (!CMS_ENABLED || !CMS_PUBLIC_BASE.startsWith('http')) return false

  try {
    const response = await fetch(`${CMS_PUBLIC_BASE}/enquiries`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify(enquiryFromLead(lead, meta)),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      /* a write, and one that must never be served from a cache */
      cache: 'no-store'
    })

    /*
      429 is a success, not a failure.

      The CMS de-duplicates by phone and by IP and answers 429 for a
      repeat it has decided not to record again. The enquiry did reach
      it; there is nothing wrong and nothing to retry, and logging it
      as an error would train whoever reads these logs to ignore them.
    */
    if (response.ok || response.status === 429) return true

    console.warn(`[enquiry] CMS responded ${response.status} — the lead is safe in the leads table.`)
    return false
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error)
    console.warn(`[enquiry] could not reach the CMS (${reason}) — the lead is safe in the leads table.`)
    return false
  }
}
