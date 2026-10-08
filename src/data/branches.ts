/* ==================================================================
   Content for every /branches/<slug> page.

   Three kinds of campus, three kinds of page:

     - Jalandhar and Mohali run their own techcadd sites
       (techcaddjalandhar.com, techcaddmohali.com). Their address and
       direct line here are copied from those sites' own published
       contact details — real, not invented — and the page's job is
       mostly to hand the visitor on to the real site.
     - Ludhiana is this entire website. Its page reuses the same real
       details already in data/contact.js rather than repeating a
       second, thinner copy of the campus.
     - Phagwara, Maqsudan and Hoshiarpur carry their listed street
       address and nothing else of their own. Amritsar has no listed
       address yet. Their pages say that
       plainly — no invented street address, phone number or
       headcount — and route enquiries through the shared admissions
       line instead of guessing at campus-specific details.
================================================================== */

import { PHONE_DISPLAY, PHONE_DIAL, INBOX, ADDRESS_FULL } from './contact'

/* Same category names courseImages.js keys its tones off, kept as
   plain labels here rather than importing the ~325KB course dataset
   just to list eight category names. */
export const CATEGORY_LABELS = [
  'Programming',
  'AI & Data',
  'Digital Marketing',
  'Cyber & Cloud',
  'Graphics & Media',
  'Office & Accounts',
  'Civil / Mechanical',
  'Training Formats'
]

function baseHero(city) {
  return {
    eyebrow: 'techcadd campus',
    title: 'techcadd',
    accent: city,
    lead: `The same curriculum and the same instructor network as our other campuses, closer to home if you’re in ${city}.`
  }
}

function baseContact(city) {
  return {
    eyebrow: 'Talk to us',
    title: `Reach the ${city} campus`,
    body: `Admissions for every techcadd campus, including ${city}, run through the same enquiry line — ask for the ${city} batch and a counsellor local to your enquiry will take it from there.`,
    phoneDisplay: PHONE_DISPLAY,
    phoneDial: PHONE_DIAL,
    email: INBOX,
    mapQuery: `techcadd ${city}`
  }
}

function unpublished(city) {
  return {
    eyebrow: 'This campus',
    title: `What you get at the ${city} campus`,
    body: [
      'Every course in the techcadd catalogue — programming, AI, digital marketing, cyber and cloud, design, and the short and long training formats — is taught to the same syllabus here as at any other techcadd campus.',
      `We haven’t published this campus’s exact address, batch timings or seat availability here yet — a counsellor will confirm all of that on the first call, rather than this page guessing at it.`
    ]
  }
}

/* A centre whose street address is listed, but which publishes nothing
   else of its own here — so the page gives the address and leaves batch
   timings and seats to the first call, as before. */
function listed(city) {
  return {
    eyebrow: 'This campus',
    title: `What you get at the ${city} campus`,
    body: [
      'Every course in the techcadd catalogue — programming, AI, digital marketing, cyber and cloud, design, and the short and long training formats — is taught to the same syllabus here as at any other techcadd campus.',
      'The address is below. Batch timings and seat availability change from month to month, so a counsellor confirms those on the first call rather than this page guessing at them.'
    ]
  }
}

/* The line the group uses for every centre but the flagship. */
const CLOSE_TO_HOME = 'Career-track courses close to home'

/*
  `tagline` and `areas` are what the contact page's centres section
  prints on each card — names, taglines and towns as the group's own
  contact page lists them.

  `address` is the street address as the centre's own site or public
  listing gives it, checked October 2026:
    Jalandhar, Mohali — their own sites
    Hoshiarpur        — techcaddhoshiarpur.com
    Phagwara          — Justdial (Chadha Business Park)
    Maqsudan          — Justdial / Facebook (Vidya Square, Maqsudan Chowk)
    Amritsar          — no listing with a street address found, so it
                        stays null and its card shows the tagline only.
*/
export const BRANCHES = [
  {
    slug: 'jalandhar',
    tagline: 'The flagship campus — where techcadd started',
    areas: ['Jalandhar Cantt', 'Model Town', 'Urban Estate', 'Adampur'],
    headOffice: true,
    city: 'Jalandhar',
    metaTitle: 'techcadd Jalandhar — AI & Software Training',
    hero: {
      ...baseHero('Jalandhar'),
      lead: 'Jalandhar runs its own techcadd site, with its own course listings and enquiry line — this page is a short profile for anyone who found it through the Branches menu.',
      actions: [{ label: 'Visit techcaddjalandhar.com', href: 'https://techcaddjalandhar.com' }]
    },
    address: '2nd Floor, Crystal Plaza, SCS 78, Opposite PIMS Hospital, Jalandhar, Punjab 144001',
    externalSite: { label: 'techcaddjalandhar.com', href: 'https://techcaddjalandhar.com' },
    intro: {
      eyebrow: 'This campus',
      title: 'The original techcadd campus',
      body: [
        'techcadd started in Jalandhar, and the campus now runs its own site with its own course listings, batch details and enquiry line at techcaddjalandhar.com.',
        'Every course in the techcadd catalogue is taught to the same syllabus here as at any other campus — the full details, fees and current batches are published on the Jalandhar site itself.'
      ]
    },
    contact: {
      eyebrow: 'Talk to us',
      title: 'Reach the Jalandhar campus',
      body: 'The Jalandhar campus takes enquiries directly — call, email, or visit techcaddjalandhar.com for its own contact form.',
      phoneDisplay: '+91 98881 22254',
      phoneDial: '+919888122254',
      email: INBOX,
      mapQuery: '2nd Floor, Crystal Plaza, SCS 78, Opposite PIMS Hospital, Jalandhar, Punjab 144001'
    }
  },
  {
    slug: 'mohali',
    tagline: CLOSE_TO_HOME,
    areas: ['Mohali', 'Chandigarh', 'Kharar', 'Zirakpur'],
    city: 'Mohali',
    metaTitle: 'techcadd Mohali — AI & Software Training',
    hero: {
      ...baseHero('Mohali'),
      lead: 'Mohali runs its own techcadd site, with its own course listings and enquiry line — this page is a short profile for anyone who found it through the Branches menu.',
      actions: [{ label: 'Visit techcaddmohali.com', href: 'https://techcaddmohali.com' }]
    },
    address: 'Plot F-547, 3rd Floor, Industrial Area Phase 8A, Sector 75, Sahibzada Ajit Singh Nagar, Mohali, Punjab',
    externalSite: { label: 'techcaddmohali.com', href: 'https://techcaddmohali.com' },
    intro: {
      eyebrow: 'This campus',
      title: 'The techcadd campus in Mohali',
      body: [
        'The Mohali campus runs its own site with its own course listings, batch details and enquiry line at techcaddmohali.com.',
        'Every course in the techcadd catalogue is taught to the same syllabus here as at any other campus — the full details, fees and current batches are published on the Mohali site itself.'
      ]
    },
    contact: {
      eyebrow: 'Talk to us',
      title: 'Reach the Mohali campus',
      body: 'The Mohali campus takes enquiries directly — call, email, or visit techcaddmohali.com for its own contact form.',
      phoneDisplay: '+91 98881 22442',
      phoneDial: '+919888122442',
      email: INBOX,
      mapQuery: 'Plot F-547, 3rd Floor, Industrial Area Phase 8A, Sector 75, Sahibzada Ajit Singh Nagar, Mohali, Punjab'
    }
  },
  {
    slug: 'ludhiana',
    tagline: CLOSE_TO_HOME,
    areas: ['Ludhiana', 'Jagraon', 'Khanna', 'Samrala'],
    city: 'Ludhiana',
    metaTitle: 'techcadd Ludhiana — AI & Software Training',
    hero: {
      ...baseHero('Ludhiana'),
      lead: 'This is the campus the rest of this website is about — everything you can see here, from the course catalogue to the Book Demo form, belongs to it.',
      actions: [{ label: 'Explore the full site', href: '/' }]
    },
    address: ADDRESS_FULL,
    externalSite: null,
    intro: {
      eyebrow: 'This campus',
      title: 'The flagship campus',
      body: [
        'techcaddludhiana.com — the site you’re on right now — is this campus’s own home, not a profile page pointing somewhere else. The course catalogue, the About and Founder pages, student reviews and the enquiry forms all describe the Ludhiana campus directly.',
        'This page exists mainly for consistency with the other campuses in the Branches menu; for the full experience, use the link below or the main navigation.'
      ]
    },
    contact: {
      eyebrow: 'Talk to us',
      title: 'Reach the Ludhiana campus',
      body: 'The same phone line and inbox that appear across this site — see the Contact page for the full set of ways to reach us.',
      phoneDisplay: PHONE_DISPLAY,
      phoneDial: PHONE_DIAL,
      email: INBOX,
      mapQuery: `techcadd Computer Education, ${ADDRESS_FULL}`
    }
  },
  {
    slug: 'phagwara',
    tagline: CLOSE_TO_HOME,
    areas: ['Phagwara', 'Nakodar', 'Nawanshahr', 'Goraya'],
    city: 'Phagwara',
    metaTitle: 'techcadd Phagwara — AI & Software Training',
    hero: baseHero('Phagwara'),
    address: '1st Floor, Chadha Business Park, G.T. Road, near Bus Stand, Opp. Lovely Bajaj Autos, Sondhi Chowk, Phagwara, Punjab 144401',
    externalSite: null,
    intro: listed('Phagwara'),
    contact: { ...baseContact('Phagwara'), mapQuery: 'techcadd, 1st Floor, Chadha Business Park, G.T. Road, near Bus Stand, Opp. Lovely Bajaj Autos, Sondhi Chowk, Phagwara, Punjab 144401' }
  },
  {
    slug: 'maqsudan',
    tagline: CLOSE_TO_HOME,
    areas: ['Maqsudan', 'Basti Sheikh', 'Adarsh Nagar', 'Model Town'],
    city: 'Maqsudan',
    metaTitle: 'techcadd Maqsudan — AI & Software Training',
    hero: baseHero('Maqsudan'),
    address: 'First Floor, Vidya Square Building, near Maqsudan Flyover, Maqsudan Chowk, Jalandhar, Punjab 144027',
    externalSite: null,
    intro: listed('Maqsudan'),
    contact: { ...baseContact('Maqsudan'), mapQuery: 'techcadd, First Floor, Vidya Square Building, near Maqsudan Flyover, Maqsudan Chowk, Jalandhar, Punjab 144027' }
  },
  {
    slug: 'hoshiarpur',
    tagline: CLOSE_TO_HOME,
    areas: ['Hoshiarpur', 'Dasuya', 'Mukerian', 'Garhshankar'],
    city: 'Hoshiarpur',
    metaTitle: 'techcadd Hoshiarpur — AI & Software Training',
    hero: baseHero('Hoshiarpur'),
    address: 'Shop No 4, City Center, near Bus Stand, Model Town, Hoshiarpur, Punjab 146001',
    externalSite: null,
    intro: listed('Hoshiarpur'),
    contact: { ...baseContact('Hoshiarpur'), mapQuery: 'techcadd, Shop No 4, City Center, near Bus Stand, Model Town, Hoshiarpur, Punjab 146001' }
  },
  {
    slug: 'amritsar',
    tagline: CLOSE_TO_HOME,
    areas: ['Amritsar', 'Tarn Taran', 'Beas', 'Rayya'],
    city: 'Amritsar',
    metaTitle: 'techcadd Amritsar — AI & Software Training',
    hero: baseHero('Amritsar'),
    address: null,
    externalSite: null,
    intro: unpublished('Amritsar'),
    contact: baseContact('Amritsar')
  }
]

export function getBranch(slug: string) {
  return BRANCHES.find((b) => b.slug === slug)
}

export function branchPath(slug: string) {
  return `/branches/${slug}`
}
