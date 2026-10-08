/* ==================================================================
   schema.org JSON-LD builders.

   Plain functions, no React — used from server components
   (page.tsx / layout.tsx) via <JsonLd data={...} /> (src/components/
   seo/JsonLd.tsx). Every field here traces back to real, published
   site content; nothing is invented to fill a schema slot.

   aggregateRatingSchema feeds organizationSchema()'s sitewide rating
   from RV_BREAKDOWN (src/data/reviews.ts), which mirrors techcadd's
   real, public Google Business Profile rating — real, not invented.
   The individual REVIEWS entries in that same file are still explicit
   placeholder content ("replace before this goes live"), which is why
   no per-review Review markup is emitted anywhere, only the one real
   aggregate figure.
================================================================== */

import {
  PHONE_DIAL,
  ADDRESS_STREET,
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  ADDRESS_POSTAL_CODE,
  ADDRESS_COUNTRY,
} from '@/data/contact'
import { RV_BREAKDOWN } from '@/data/reviews'
import { CONTACT_MAP } from '@/data/contact'
import { BRANCH_DOMAIN, BRANCH_TOWNS, BRANCH_SUBJECTS } from '@/data/branch'

/* The origin every canonical URL, sitemap entry and schema id is built
   on. NEXT_PUBLIC_SITE_URL must be this branch's own domain: this
   codebase is stood up for more than one centre, and a build that
   inherited another centre's value would tell search engines the
   canonical copy of every page lives on that centre's site. The
   fallback is this branch, so an unset variable is still right. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || `https://${BRANCH_DOMAIN}`).replace(/\/$/, '')
const SITE_NAME = 'techcadd'
/* The registered name on techcadd's Google Business Profile listing.
   Every Organization reference below (provider, author, publisher,
   parentOrganization, worksFor) uses this exact string rather than
   the short brand form, so search engines can consolidate them as the
   same entity. */
const SITE_LEGAL_NAME = 'TechCadd Computer Education'
const LOGO_URL = `${SITE_URL}/tece_new_logo.png`

/* One id for the organisation, used by every schema that mentions it —
   the course's provider, the website's publisher, an article's author.
   It is what lets a search engine treat those as the same entity rather
   than as several organisations that happen to share a name. */
export const ORG_ID = `${SITE_URL}/#organization`
const ORG_REF = { '@id': ORG_ID }

/**
 * The site itself, as a schema.org WebSite.
 *
 * Emitted once, in the layout. It names the site, ties it to the
 * organisation that publishes it, and states the language — the three
 * things an answer engine wants before it attributes a quote.
 */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${SITE_LEGAL_NAME} — ${ADDRESS_LOCALITY}`,
    alternateName: SITE_NAME,
    inLanguage: 'en-IN',
    publisher: ORG_REF,
  }
}

/** The contact page, pointing at the organisation it is the contact page of. */
export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#contactpage`,
    url: `${SITE_URL}/contact`,
    name: `Contact ${SITE_LEGAL_NAME}, ${ADDRESS_LOCALITY}`,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: ORG_REF,
  }
}

/**
 * A site path or a full URL, resolved to something absolute.
 *
 * Every image and link in a schema has to be absolute, and until the
 * CMS was wired in every one of them was a path under public/ — so
 * `${SITE_URL}${path}` was always right. It is not any more: an
 * uploaded file lives on the CMS host and `cmsAsset` already returns
 * its full address, which concatenation would turn into
 * "https://techcaddludhiana.com/https://cms.example.com/uploads/x.png"
 * — a URL that 404s, inside markup nobody looks at until a rich
 * result stops appearing.
 */
function absolute(url: string) {
  return /^https?:\/\//i.test(url) ? url : `${SITE_URL}${url}`
}

const BUSINESS_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: ADDRESS_STREET,
  addressLocality: ADDRESS_LOCALITY,
  addressRegion: ADDRESS_REGION,
  postalCode: ADDRESS_POSTAL_CODE,
  addressCountry: ADDRESS_COUNTRY,
}

/* Sitewide business identity — the Ludhiana campus's real, published
   address and its real Google Business Profile rating (kept in sync
   via RV_BREAKDOWN in src/data/reviews.ts). Typed as both an
   EducationalOrganization (what it is) and a LocalBusiness (so
   aggregateRating and a physical address are valid on it) — see
   https://schema.org/LocalBusiness. */
/**
 * @param settings the CMS settings row, resolved per field against the
 *   bundled contact details (see src/lib/siteSettings.ts). Optional, so
 *   a caller with nothing to hand still gets the bundled facts.
 *
 * `sameAs` is the reason this takes the social profiles: it is how a
 * search engine ties this Organization to its LinkedIn and Instagram
 * pages, and the site had no way to state it while those URLs were
 * hard-coded as '#'. Only real URLs reach here — `getSiteSettings`
 * drops the empty ones — so the property is omitted rather than
 * emitted empty when there are none.
 */
export function organizationSchema(settings?: {
  email?: string
  phoneDial?: string
  socials?: Array<{ href: string }>
}) {
  const sameAs = (settings?.socials ?? []).map((social) => social.href)

  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SITE_LEGAL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    telephone: settings?.phoneDial || PHONE_DIAL,
    ...(settings?.email ? { email: settings.email } : {}),
    address: BUSINESS_ADDRESS,
    /* the listing on Google Maps, for a search that wants a pin */
    hasMap: CONTACT_MAP.directions,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: settings?.phoneDial || PHONE_DIAL,
      contactType: 'admissions',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Punjabi'],
    },
    /* Where its students come from and what it teaches — the two
       things a local search is actually asking. Both lists are the
       site's own: the towns on the contact page's centre card, and the
       catalogue's categories. */
    areaServed: BRANCH_TOWNS.map((town) => ({ '@type': 'City', name: town })),
    knowsAbout: BRANCH_SUBJECTS,
    ...(sameAs.length ? { sameAs } : {}),
    aggregateRating: aggregateRatingSchema(RV_BREAKDOWN),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absolute(item.url),
    })),
  }
}

export function courseSchema(course: {
  slug: string
  name: string
  overviewLead?: string
  metaDescription?: string | null
  duration?: string
  mode?: string
  city?: string
  image?: string | null
  /** the page's address, when it is not /courses/<slug> */
  path?: string
  level?: string
  /** the syllabus, as the page prints it */
  modules?: Array<{ title: string; description?: string; skills?: string[] }>
  /** tool and technology names */
  teaches?: string[]
}) {
  const url = `${SITE_URL}${course.path || `/courses/${course.slug}`}`

  /* The syllabus, module by module — the same list the page shows. An
     answer engine asked "what does the Python course at techcadd cover"
     reads it from here rather than inferring it from prose. */
  const syllabus = (course.modules ?? [])
    .filter((module) => module?.title)
    .map((module) => ({
      '@type': 'Syllabus',
      name: module.title,
      description: [module.description, (module.skills ?? []).join(', ')].filter(Boolean).join(' — '),
    }))

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${url}#course`,
    name: course.name,
    description: course.metaDescription || course.overviewLead,
    inLanguage: 'en-IN',
    courseCode: course.slug,
    ...(course.level ? { educationalLevel: course.level } : {}),
    ...(course.duration ? { timeRequired: course.duration } : {}),
    ...(course.teaches?.length ? { teaches: course.teaches } : {}),
    ...(syllabus.length ? { syllabusSections: syllabus } : {}),
    provider: {
      '@type': 'EducationalOrganization',
      '@id': ORG_ID,
      name: SITE_LEGAL_NAME,
      url: SITE_URL,
      address: BUSINESS_ADDRESS,
    },
    url,
    image: course.image ? absolute(course.image) : LOGO_URL,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: course.mode,
      location: {
        '@type': 'Place',
        name: `${SITE_LEGAL_NAME} — ${course.city}`,
        /* The campus address on file is the Ludhiana one — only attach
           it when the course is actually taught there, rather than
           implying a street address for cities where techcadd has no
           published one (see src/data/branches.ts). */
        ...(course.city === ADDRESS_LOCALITY ? { address: BUSINESS_ADDRESS } : {}),
      },
      ...(course.duration ? { courseWorkload: course.duration } : {}),
    },
  }
}

export function articleSchema(post: {
  id: string
  title: string
  excerpt: string
  date?: string
  tag?: string
  image?: string
}) {
  const iso = toIsoDate(post.date)
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    inLanguage: 'en',
    ...(iso ? { datePublished: iso } : {}),
    url: `${SITE_URL}/blog/${post.id}`,
    image: post.image ? absolute(post.image) : LOGO_URL,
    author: { '@type': 'Organization', name: SITE_LEGAL_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_LEGAL_NAME,
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
  }
}

export function educationalOrgSchema(branch: {
  slug: string
  city: string
  address?: string | null
  contact?: { phoneDial?: string }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: `${SITE_LEGAL_NAME} — ${branch.city}`,
    url: `${SITE_URL}/branches/${branch.slug}`,
    ...(branch.contact?.phoneDial ? { telephone: branch.contact.phoneDial } : {}),
    ...(branch.address
      ? { address: { '@type': 'PostalAddress', streetAddress: branch.address } }
      : {}),
    parentOrganization: { '@type': 'EducationalOrganization', name: SITE_LEGAL_NAME, url: SITE_URL },
  }
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }
}

export function personSchema(member: { name: string; role: string; bio?: string; photo?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    ...(member.photo ? { image: absolute(member.photo) } : {}),
    ...(member.bio ? { description: member.bio } : {}),
    worksFor: { '@type': 'Organization', name: SITE_LEGAL_NAME, url: SITE_URL },
  }
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: absolute(item.url),
    })),
  }
}

export function aggregateRatingSchema(breakdown: { score: string; total: string }) {
  /* breakdown.total is a display string ("181 ratings on Google") —
     reviewCount needs the bare integer. */
  const count = parseInt(breakdown.total.replace(/,/g, ''), 10)
  return {
    '@type': 'AggregateRating',
    ratingValue: breakdown.score,
    ...(Number.isFinite(count) ? { reviewCount: count } : {}),
  }
}

function toIsoDate(dateStr?: string): string | undefined {
  if (!dateStr) return undefined
  const parsed = new Date(dateStr)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString()
}
