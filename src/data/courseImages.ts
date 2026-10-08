/* ==================================================================
   Course artwork.

   Cards across the site — the /courses index, and anywhere else a
   course is shown as a tile — resolve their picture through here.
   A slug with no entry falls back to a gradient keyed off its
   category, so the catalogue is visually complete without waiting on
   a photo for all 48 courses.

   Files live in public/courses/. Several courses ship both a
   `<name>-hero.webp` and a much larger `<name>.png` of the same
   artwork; the WebP is always the one referenced — they run 174-331 KB
   against 1.2-2.2 MB for the PNG twins, for no visible difference at
   card size.

   A `-hero.webp` has a transparent background, which is what the card
   wants: .tc-course-art paints a category gradient underneath and lets
   it show through wherever the artwork does not cover. The same file
   is the course page's hero art, where it sits on the hero's dark ink.

   Three of them — ethical-hacking, tableau and social-media-marketing —
   came in as full-frame photographic scenes rather than isolated
   renders, so there is no clean edge to cut around. They are keyed and
   then feathered at the frame instead, which fades them into the ink
   rather than ending at a hard rectangle. They carry a soft halo that
   the isolated renders do not; an isolated render would replace them
   cleanly.

   Paths are case-sensitive on the deploy host even though Windows is
   forgiving, so these strings must match the files exactly.
================================================================== */

const IMAGES = {
  /* ---- public/courses/ ---- */
  'agentic-ai': '/courses/agentic-ai-hero.webp',
  'ai-powered-marketing': '/courses/ai-powered-marketing-hero.webp',
  'artificial-intelligence': '/courses/artificial-intelligence-hero.webp',
  'c-cpp': '/courses/c-cpp-hero.webp',
  'chatgpt-ai-tools': '/courses/chatgpt-ai-tools-hero.webp',
  'cloud-computing': '/courses/cloud-computing-hero.webp',
  'computer-basics-excel': '/courses/computer-basics-excel-hero.webp',
  cybersecurity: '/courses/cybersecurity-hero.webp',
  'data-analytics': '/courses/data-analytics-hero.webp',
  'data-science': '/courses/data-science-hero.webp',
  'deep-learning': '/courses/deep-learning-hero.webp',
  'digital-marketing': '/courses/digital-marketing.jpeg',
  'ethical-hacking': '/courses/ethical-hacking-hero.webp',
  'generative-ai': '/courses/generative-ai-hero.webp',
  'google-ads': '/courses/google-ads-hero.webp',
  java: '/courses/java-hero.webp',
  kotlin: '/courses/kotlin-hero.webp',
  linux: '/courses/linux-hero.webp',
  'mean-stack': '/courses/mean-stack-hero.webp',
  'mern-stack': '/courses/mern-stack-hero.webp',
  'php-full-stack': '/courses/php-full-stack-hero.webp',
  'power-bi': '/courses/power-bi-hero.webp',
  python: '/courses/python-hero.webp',
  seo: '/courses/seo-hero.webp',
  shopify: '/courses/shopify-hero.webp',
  'social-media-marketing': '/courses/social-media-marketing-hero.webp',
  tableau: '/courses/tableau-hero.webp',
  'tally-erp': '/courses/tally-erp-hero.webp',
  'web-designing': '/courses/web-designing-hero.webp',
  'web-development': '/courses/web-development-hero.webp',
  wordpress: '/courses/wordpress-hero.webp',

  autocad: '/courses/autocad-hero.webp',
  solidworks: '/courses/solidworks-hero.webp',
  '3ds-max': '/courses/3ds-max-hero.webp',
  revit: '/courses/revit-hero.webp',
  'graphic-designing': '/courses/graphic-designing-hero.webp',
  'video-editing': '/courses/video-editing-hero.webp',
  'ui-ux-design': '/courses/ui-ux-design-hero.webp',

  /* ---- still served from the public root; no /courses/ file yet ---- */
  'machine-learning': '/courses/machine-learning-hero.webp',
  'prompt-engineering': '/courses/prompt-engineering-hero.webp',
  rag: '/courses/rag-hero.webp'
}

/* one gradient per category, in the same family as the rest of the
   site so a card without a photo still looks deliberate */
const TONES = {
  Programming: 'blue',
  'AI & Data': 'indigo',
  'Digital Marketing': 'green',
  'Cyber & Cloud': 'teal',
  'Graphics & Media': 'purple',
  'Office & Accounts': 'blue',
  'Civil / Mechanical': 'orange',
  Training: 'purple'
}

export function courseImage(slug) {
  return IMAGES[slug] || null
}

export function courseTone(category) {
  return TONES[category] || 'blue'
}

export { IMAGES as COURSE_IMAGES }
