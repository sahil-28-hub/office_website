/* ==================================================================
   Contact page content.

   One place for the numbers, addresses and desk details, so they can
   be corrected without touching layout. The phone and inbox match the
   ones already used by the home-page CTA and the footer.
================================================================== */

export const PHONE_DISPLAY = '+91 98881 22667'
export const PHONE_DIAL = '+919888122667'
export const PHONE_ALT_DISPLAY = '+91 98881 22256'
export const WHATSAPP = '919888122667'
export const INBOX = 'info@techcadd.com'
export const INBOX_ALT = 'admissions@techcadd.com'

/* The Ludhiana campus's published street address — as listed on
   techcadd's own Google Business Profile, so this site's contact
   details, its structured data (see src/lib/structuredData.ts) and
   the campus's public Google listing all agree. */
export const ADDRESS_STREET = '1st Floor, Sear Complex, 773/1, Opposite BSNL Exchange, Bharat Nagar Chowk'
export const ADDRESS_LOCALITY = 'Ludhiana'
export const ADDRESS_REGION = 'Punjab'
export const ADDRESS_POSTAL_CODE = '141001'
export const ADDRESS_COUNTRY = 'IN'
export const ADDRESS_FULL = `${ADDRESS_STREET}, ${ADDRESS_LOCALITY}, ${ADDRESS_REGION} ${ADDRESS_POSTAL_CODE}`

export const CONTACT_HERO = {
  eyebrow: 'Admissions open',
  title: 'Talk to a counsellor at the Ludhiana centre',
  lead: 'Ask about batch timings, fees or which track fits your background. A ten-minute call usually settles what an hour of browsing cannot.',
  /* Each of these is something the site already says: the form answers
     the same working day, counselling and the demo class are free, and
     the Branches menu lists seven centres. */
  facts: [
    { value: 'Same day', label: 'Callback on every enquiry' },
    { value: 'Free', label: 'Counselling and a demo class' },
    { value: '7', label: 'techcadd centres across Punjab' }
  ],
  /* drop a campus photograph at this path and it takes over from the
     gradient underneath it — nothing breaks while it is missing */
  image: '/photos/contact-hero.jpg'
}

export const GET_IN_TOUCH = {
  title: 'Get in touch',
  blurb:
    'Ask about batch dates, fees or which track fits your degree. Whichever way you reach us, someone answers the same working day.',
  blocks: [
    {
      icon: 'pin',
      title: 'Head Office',
      lines: [
        { text: 'techcadd Computer Education' },
        { text: ADDRESS_STREET },
        { text: `${ADDRESS_LOCALITY}, ${ADDRESS_REGION} ${ADDRESS_POSTAL_CODE}` }
      ]
    },
    {
      icon: 'mail',
      title: 'Email Us',
      lines: [
        { text: INBOX, href: `mailto:${INBOX}` },
        { text: INBOX_ALT, href: `mailto:${INBOX_ALT}` }
      ]
    },
    {
      icon: 'phone',
      title: 'Call Us',
      lines: [
        { text: `Phone : ${PHONE_DISPLAY}`, href: `tel:${PHONE_DIAL}` },
        { text: `Alt : ${PHONE_ALT_DISPLAY}` }
      ]
    }
  ],
  socialTitle: 'Follow our social media',
  /* the same placeholder hrefs the footer carries — swap in the real
     profile URLs before going live */
  socials: [
    { label: 'Facebook', icon: 'facebook', href: '#' },
    { label: 'Instagram', icon: 'instagram', href: '#' },
    { label: 'Twitter', icon: 'twitter', href: '#' },
    { label: 'YouTube', icon: 'youtube', href: '#' }
  ]
}

/* ------------------------------------------------------------------
   The two support desks. Selecting one on the left swaps the card on
   the right — same shape of information either way.
------------------------------------------------------------------ */
export const SUPPORT = {
  title: 'Support & Assistance',
  sub: 'Get personalised support for your educational journey.'
}

export const DESKS = [
  {
    key: 'student',
    icon: 'cap',
    label: 'Student Support',
    blurb: 'Academic guidance & career counselling',
    initials: 'SD',
    name: 'Student Desk',
    role: 'Student Support',
    phoneDisplay: PHONE_DISPLAY,
    phoneDial: PHONE_DIAL,
    email: INBOX,
    place: 'techcadd Ludhiana Campus',
    whatsappText: "Hi techcadd, I'm a student and I'd like some guidance."
  },
  {
    key: 'college',
    icon: 'institute',
    label: 'College Support',
    blurb: 'Institution partnerships & collaborations',
    initials: 'CD',
    name: 'College Desk',
    role: 'College Support',
    phoneDisplay: PHONE_DISPLAY,
    phoneDial: PHONE_DIAL,
    email: INBOX,
    place: 'techcadd Ludhiana Campus',
    whatsappText: 'Hi techcadd, I am writing from a college about a partnership.'
  },
  /* The two desks the group's contact page also lists. Like the others,
     both are reached through the centre's own line and inbox — the
     front desk routes the call — so neither carries a number of its own
     that could go stale. */
  {
    key: 'placement',
    icon: 'check',
    label: 'Placement Cell',
    blurb: 'Interview preparation & job support',
    initials: 'PC',
    name: 'Placement Cell',
    role: 'Placement Support',
    phoneDisplay: PHONE_DISPLAY,
    phoneDial: PHONE_DIAL,
    email: INBOX,
    place: 'techcadd Ludhiana Campus',
    whatsappText: 'Hi techcadd, I would like to talk to the placement cell.'
  },
  {
    key: 'franchise',
    icon: 'compass',
    label: 'Franchise Desk',
    blurb: 'Opening a techcadd centre in your city',
    initials: 'FD',
    name: 'Franchise Desk',
    role: 'Franchise Enquiry',
    phoneDisplay: PHONE_DISPLAY,
    phoneDial: PHONE_DIAL,
    email: INBOX,
    place: 'techcadd Ludhiana Campus',
    whatsappText: 'Hi techcadd, I would like to know about a techcadd franchise.'
  }
]

/* ------------------------------------------------------------------
   What a campus visit looks like — the three steps before enrolling.
------------------------------------------------------------------ */
export const VISIT = {
  eyebrow: 'Before you enrol',
  title: 'What a campus visit looks like',
  sub: 'Nothing is charged and nothing is committed until you have seen a class run. Walk in, or call ahead and we will keep a counsellor free.',
  steps: [
    {
      icon: 'cap',
      title: 'Free counselling',
      text: 'Time with a counsellor on what you have studied, what you want to do next, and which track actually gets you there — including the ones we would talk you out of.'
    },
    {
      icon: 'institute',
      title: 'Campus tour & demo class',
      text: 'Sit in on a session, see the labs, meet the trainer who would take your class. You judge the teaching before you pay for it, not after.'
    },
    {
      icon: 'clock',
      title: 'Fees & batch slot',
      text: 'The full fee written down, and a seat held in the batch that fits your week — weekday, evening or weekend.'
    }
  ]
}

const MAP_QUERY = `techcadd Computer Education, ${ADDRESS_FULL}`

export const CONTACT_MAP = {
  /* the query form of the Maps embed needs no API key */
  embed: `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`,
  directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`,
  label: 'techcadd — Ludhiana campus'
}
