/* ==================================================================
   The facts about the business, from the CMS settings row.

   Phone number, email, postal address, the four headline figures and
   the social profiles: everything that was hard-coded in
   src/data/contact.ts and, in the footer's case, hard-coded as `#`.

   MERGED PER FIELD, NOT WHOLESALE

   The CMS settings row is sparsely filled — today it holds a phone,
   an email, the stats and one social URL, and has nothing for the
   tagline or the postal address. Taking the row as an object and
   spreading it over the defaults would blank the address on the
   contact page and in the LocalBusiness schema, because the CMS
   happens not to carry one yet.

   So every field is resolved on its own: a value the CMS actually
   holds wins, and anything it leaves empty keeps the bundled one. An
   editor filling in the address later changes the site; an editor
   never touching it changes nothing.

   The CMS is the authority where it speaks. Its phone number differs
   from the one bundled in src/data/contact.ts, and after this the
   CMS's is what the site prints — which is the point of connecting
   them, and worth knowing before the first deploy.
================================================================== */

import { cmsFetchRecord } from './cms.server'
import {
  PHONE_DISPLAY,
  PHONE_DIAL,
  INBOX,
  ADDRESS_FULL
} from '@/data/contact'

/** A social profile the footer can actually link to. */
export type SocialLink = {
  /** the CMS key — 'instagram', 'linkedin', … — which picks the icon */
  key: string
  label: string
  href: string
}

export type SiteSettings = {
  siteName: string
  tagline?: string
  email: string
  /** as printed, e.g. '+91 98881 22667' */
  phoneDisplay: string
  /** as dialled, e.g. '+919888122667' */
  phoneDial: string
  address: string
  stats: Array<{ value: string; label: string }>
  socials: SocialLink[]
}

/**
 * The profiles the footer has icons for.
 *
 * Keyed by the CMS's own field names. A key the CMS invents that is
 * not here is dropped rather than rendered: the footer would have no
 * icon to draw for it and would print an empty link.
 */
const SOCIAL_LABELS: Record<string, string> = {
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  facebook: 'Facebook',
  youtube: 'YouTube',
  x: 'X',
  twitter: 'X'
}

/** The order the footer has always drawn them in. */
const SOCIAL_ORDER = ['instagram', 'linkedin', 'facebook', 'youtube', 'x', 'twitter']

const clean = (value: unknown) => {
  const text = typeof value === 'string' ? value.trim() : ''
  return text.length ? text : undefined
}

/**
 * A printed number turned into a dialable one.
 *
 * `tel:` wants no spaces. The CMS asks an editor for one number, in
 * the form they would write it down, rather than for two fields that
 * have to agree — so the dial form is derived instead of stored.
 * Everything but digits and a leading + goes.
 */
function toDial(display: string) {
  const digits = display.replace(/[^\d+]/g, '')
  return digits.startsWith('+') ? digits : `+${digits}`
}

/**
 * A social URL worth rendering.
 *
 * The CMS stores an empty string for a profile an editor has not
 * filled in — `instagram: ''` is in the row today — and a link to ''
 * resolves to the current page. Anything that is not an http(s) URL
 * is dropped for the same reason: the footer opens these in a new
 * tab, and a new tab showing the page you were already on is the kind
 * of thing nobody reports and everybody notices.
 */
function toSocials(social: Record<string, unknown> | undefined): SocialLink[] {
  if (!social || typeof social !== 'object') return []

  const seen = new Set<string>()
  const keys = [
    ...SOCIAL_ORDER.filter((key) => key in social),
    ...Object.keys(social).filter((key) => !SOCIAL_ORDER.includes(key))
  ]

  const links: SocialLink[] = []

  for (const key of keys) {
    const href = clean(social[key])
    if (!href || !/^https?:\/\//i.test(href)) continue

    const label = SOCIAL_LABELS[key]
    if (!label || seen.has(label)) continue
    seen.add(label)

    links.push({ key, label, href })
  }

  return links
}

/** What the site falls back to, field by field, when the CMS is silent. */
const BUNDLED: SiteSettings = {
  siteName: 'techcadd',
  email: INBOX,
  phoneDisplay: PHONE_DISPLAY,
  phoneDial: PHONE_DIAL,
  address: ADDRESS_FULL,
  stats: [],
  /*
    Empty, and deliberately not the five icons the footer used to draw.

    Those were all `href="#"` with a comment saying to replace them
    with the real profile URLs before going live. A `#` link opened in
    a new tab shows the visitor a second copy of the page they are on,
    which is worse than no icon. The CMS settings row is now where
    those URLs are set, and the footer draws an icon for each one that
    is actually there.
  */
  socials: []
}

/**
 * The business's own details, CMS first.
 *
 * Cached and tagged like every other CMS read, so an editor saving
 * the settings row reaches the site through /api/revalidate rather
 * than waiting out a cache window.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  const row = await cmsFetchRecord<Record<string, any>>('/site')
  if (!row) return BUNDLED

  const phoneDisplay = clean(row.contactPhone) || BUNDLED.phoneDisplay

  return {
    siteName: clean(row.siteName) || BUNDLED.siteName,
    tagline: clean(row.tagline),
    email: clean(row.contactEmail) || BUNDLED.email,
    phoneDisplay,
    phoneDial: toDial(phoneDisplay),
    address: clean(row.address) || BUNDLED.address,
    stats: Array.isArray(row.stats)
      ? row.stats
          .filter((stat: any) => clean(stat?.value) && clean(stat?.label))
          .map((stat: any) => ({ value: String(stat.value), label: String(stat.label) }))
      : [],
    socials: toSocials(row.social)
  }
}
