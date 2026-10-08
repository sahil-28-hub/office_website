/* ==================================================================
   One way out of the building for every lead.

   The six forms on the site — the course enquiry, the brochure gate,
   the book-a-demo modal, the home CTA, the about CTA and the contact
   form — collect the same handful of facts: who, what number, which
   course, and anything they want to say. They used to each carry their
   own fetch, their own error copy and their own mailto fallback. They
   all call this now.

   Where it goes:

     POST /api/leads    the default. The API validates everything
                        again, writes one row to MySQL through Prisma,
                        and then forwards a copy to the CMS enquiries
                        inbox so the counselling team can work it where
                        they work. See src/app/api/leads/route.ts and
                        src/lib/cmsEnquiry.ts.

     NEXT_PUBLIC_LEADS_ENDPOINT   override, for a deployment that hosts
                        the site and the API on different origins.

     NEXT_PUBLIC_LEADS_TRANSPORT=mailto   no backend at all — opens a
                        pre-filled email rather than pretending to
                        have been sent. The escape hatch for a static
                        deploy; not the normal path.

   The two anti-spam signals — the honeypot field and how long the
   form was open — are collected by the forms and passed through for
   the server to check. They are checked here too, cheaply, so an
   obvious bot does not even cost a request.
================================================================== */

const ENDPOINT = process.env.NEXT_PUBLIC_LEADS_ENDPOINT || '/api/leads'
const TRANSPORT = process.env.NEXT_PUBLIC_LEADS_TRANSPORT || 'api'
const INBOX = process.env.NEXT_PUBLIC_ENQUIRY_INBOX || 'info@techcadd.com'

/* which form a lead came from. The server rejects anything not on
   this list, so the two have to agree — see src/lib/validate.ts. */
export const LEAD_SOURCES = {
  courseEnquiry: 'course-enquiry',
  brochure: 'course-brochure',
  demo: 'book-demo',
  homeCta: 'home-cta',
  aboutCta: 'about-cta',
  contact: 'contact',
  counselling: 'virtual-counselling'
}

/* a form filled faster than a person can read it is not a person */
const MIN_FILL_MS = 2500

function mailtoFallback(lead: Record<string, any>) {
  const kind = lead.source === LEAD_SOURCES.brochure ? 'Brochure request' : 'Course enquiry'

  const body = [
    `Course:   ${lead.course || '-'}`,
    `Slug:     ${lead.courseSlug || '-'}`,
    `Duration: ${lead.details?.duration || '-'}`,
    `Centre:   ${lead.details?.centre || '-'}`,
    '',
    `Name:     ${lead.name}`,
    `Mobile:   ${lead.phone}`,
    `Email:    ${lead.email || '-'}`,
    '',
    'Message:',
    lead.message || '-'
  ].join('\n')

  window.location.href =
    `mailto:${INBOX}` +
    `?subject=${encodeURIComponent(`${kind} - ${lead.course || 'techcadd'}`)}` +
    `&body=${encodeURIComponent(body)}`
}

export async function submitLead(lead: Record<string, any>) {
  /* --- the two signals the visitor never sees ---------------------- */
  if (lead.honeypot) {
    /* a bot filled the off-screen field. Answer as though it worked;
       arguing with a script only teaches it what to change. */
    return { ok: true }
  }

  if (lead.startedAt && Date.now() - lead.startedAt < MIN_FILL_MS) {
    return { ok: false, error: 'too-fast' }
  }

  /* --- the static-deploy escape hatch ------------------------------ */
  if (TRANSPORT === 'mailto') {
    try {
      mailtoFallback(lead)
      return { ok: true }
    } catch {
      return { ok: false, error: 'network' }
    }
  }

  /* --- the normal path --------------------------------------------- */
  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: lead.source,
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        course: lead.course,
        courseSlug: lead.courseSlug,
        message: lead.message,
        details: lead.details,
        captcha: lead.captcha,
        startedAt: lead.startedAt,
        honeypot: lead.honeypot,
        page: typeof window !== 'undefined' ? window.location.href : ''
      })
    })

    /* a validation failure comes back as a field map, so the form can
       point at the input that was wrong rather than saying "error" */
    let data = null
    try {
      data = await response.json()
    } catch {
      data = null
    }

    if (!response.ok) {
      return {
        ok: false,
        error: data?.error || (response.status === 429 ? 'rate-limit' : 'server'),
        fields: data?.fields
      }
    }

    return { ok: true, id: data?.id, download: data?.download }
  } catch {
    return { ok: false, error: 'network' }
  }
}

/* One sentence per failure, written for the person reading it rather
   than for the log. Every one of them ends somewhere useful, because
   the phone number is printed next to it on the forms. */
const MESSAGES: Record<string, string> = {
  'too-fast': 'That was quick - please take a moment and send it again.',
  invalid: 'Please check the highlighted fields and send it again.',
  captcha: 'That answer did not match. Try the new question below.',
  'rate-limit':
    'Too many attempts from this connection. Please try again in a few minutes, or call',
  server: 'Something went wrong at our end and the enquiry did not send. Please call',
  network: 'We could not reach the server. Check your connection and try again, or call'
}

export function leadErrorMessage(error: string) {
  return MESSAGES[error] || MESSAGES.server
}
