/* ==================================================================
   The team page's application form.

   Deliberately NOT submitLead(). An application to work here is not
   an enquiry about a course: it carries a role and an experience
   figure that a lead has no columns for, and it goes to a different
   set of people. Putting the two in one table would leave the
   counselling desk filtering CVs out of their morning call list.

   Same database, different table:

     POST /api/leads               → `leads`              (five forms)
     POST /api/team-applications   → `team_applications`  (this one)

   Both endpoints are served by the same Express app, over the same
   pooled connection, from the one DATABASE_URL in .env. Nothing new
   to configure — see server/routes/team.js.

   The two anti-spam signals are identical to the lead path: an
   off-screen field only a script fills, and how long the form was
   open. Checked here cheaply and again on the server, which is the
   check that counts.
================================================================== */

const ENDPOINT =
  process.env.NEXT_PUBLIC_TEAM_ENDPOINT ||
  /* derived from the leads endpoint so a split deployment that has
     already pointed NEXT_PUBLIC_LEADS_ENDPOINT at another origin gets
     this one on the same host for free, without a second variable */
  (process.env.NEXT_PUBLIC_LEADS_ENDPOINT || '/api/leads').replace(
    /\/leads$/,
    '/team-applications'
  )

const TRANSPORT = process.env.NEXT_PUBLIC_LEADS_TRANSPORT || 'api'
const INBOX = process.env.NEXT_PUBLIC_ENQUIRY_INBOX || 'info@techcadd.com'

/* a form filled faster than a person can read it is not a person */
const MIN_FILL_MS = 2500

function mailtoFallback(application: Record<string, any>) {
  const body = [
    `Role:       ${application.role || '-'}`,
    `Experience: ${application.experience || '-'}`,
    '',
    `Name:       ${application.name}`,
    `Mobile:     ${application.phone}`,
    `Email:      ${application.email || '-'}`,
    `Portfolio:  ${application.portfolio || '-'}`,
    '',
    'About them:',
    application.message || '-'
  ].join('\n')

  window.location.href =
    `mailto:${INBOX}` +
    `?subject=${encodeURIComponent(`Application - ${application.role || 'techcadd'}`)}` +
    `&body=${encodeURIComponent(body)}`
}

export async function submitTeamApplication(application: Record<string, any>) {
  if (application.honeypot) {
    /* answer as though it worked; arguing with a script only teaches
       it what to change */
    return { ok: true }
  }

  if (application.startedAt && Date.now() - application.startedAt < MIN_FILL_MS) {
    return { ok: false, error: 'too-fast' }
  }

  if (TRANSPORT === 'mailto') {
    try {
      mailtoFallback(application)
      return { ok: true }
    } catch {
      return { ok: false, error: 'network' }
    }
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: application.name,
        phone: application.phone,
        email: application.email,
        role: application.role,
        experience: application.experience,
        portfolio: application.portfolio,
        message: application.message,
        captcha: application.captcha,
        startedAt: application.startedAt,
        honeypot: application.honeypot,
        page: typeof window !== 'undefined' ? window.location.href : ''
      })
    })

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

    return { ok: true, id: data?.id }
  } catch {
    return { ok: false, error: 'network' }
  }
}

/* Re-exported from the lead helper rather than written twice — the
   sentences a person reads for "we could not reach the server" are
   the same whichever form they were filling in. */
export { leadErrorMessage as applicationErrorMessage } from './submitLead'
