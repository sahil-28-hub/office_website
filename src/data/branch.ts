/* ==================================================================
   This branch, in one place.

   The city, the domain and the public profiles that belong to the
   Ludhiana centre and to no other. Anything that would have to change
   to stand this codebase up for a different centre lives here, so a
   link to another branch's reviews or Instagram cannot be left behind
   in a component by accident.

   The street address and phone numbers stay in data/contact.ts, which
   already was the single source for those.
================================================================== */

export const BRANCH_CITY = 'Ludhiana'
export const BRANCH_DOMAIN = 'techcaddludhiana.com'

/* The towns this centre draws from — the same four its card on the
   contact page lists (see `areas` in data/branches.ts). */
export const BRANCH_TOWNS = ['Ludhiana', 'Jagraon', 'Khanna', 'Samrala']

/* What is taught here, as the course catalogue groups it. */
export const BRANCH_SUBJECTS = [
  'Programming',
  'Artificial Intelligence and Data Science',
  'Digital Marketing',
  'Cyber Security and Cloud Computing',
  'Graphic Design and Video Editing',
  'Tally and Office Computing',
  'CAD — AutoCAD, SOLIDWORKS, Revit, 3ds Max',
  'Industrial Training and Internships'
]

/* The institute on Google — the result page carries the business
   profile, with its reviews and the website link, beside the results.
   A search address rather than a profile short-link because it needs
   no place id and cannot go stale when the listing is edited. */
export const GOOGLE_LINK = 'https://www.google.com/search?q=techcadd+ludhiana'

/* The same listing, opened on its reviews. */
export const GOOGLE_REVIEWS_LINK = 'https://www.google.com/search?q=techcadd+ludhiana+reviews'

/* The profiles the site links to: this centre's own Instagram and
   Facebook first, then the group's shared accounts. Only real
   addresses — an icon with nowhere real to go is worse than no icon. */
export const BRANCH_SOCIALS = [
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/techcadd__ludhiana/'
  },
  {
    key: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Techcadd-Computer-Education-Ludhiana/61572298874477/'
  },
  /* The three below are the group's accounts, not this centre's own —
     techcadd runs one X, one LinkedIn and one YouTube for every centre. */
  { key: 'x', label: 'X', href: 'https://x.com/Techcadd_comp' },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/techcadd-computer-education/'
  },
  { key: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@techcaddindia' }
] as const

/* The group's development studio, which the "Services" tab on the left
   edge of every page opens — as on the group's other sites. */
export const SERVICES_LINK = 'https://syntaxdeveloper.in/'
