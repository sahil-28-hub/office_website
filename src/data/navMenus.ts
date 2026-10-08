/* ==================================================================
   Content for every navigation dropdown.

   Images resolve from public/photos/ — any that are missing fall back
   to a brand gradient tile, so the menus never break while you gather
   the real photography.

   Course links use course(slug), which resolves to /courses/<slug> —
   the slug-driven course page. Anything still on an in-page anchor is
   a section of the home page that has no page of its own yet.
================================================================== */

/* path.js, not index.js — this file is imported by the Navbar, which is
   eager, and index.js evaluates the whole ~325KB course dataset at
   module scope just to hand back a URL string. */
import { coursePath as course } from './courses/path'
import { branchPath } from './branches'

/* The contact page. A router path, like coursePath() above. */
export const CONTACT_PATH = '/contact'

/* The institute page. */
export const ABOUT_PATH = '/about'

/* The campus gallery. */
export const GALLERY_PATH = '/gallery'

/* The rest of the pages the menus point at. Each one is a route in
   App.jsx; SmartLink turns them into react-router links and the
   react-router renders them as '/faq', '/blog' and so on. */
export const MISSION_PATH = '/mission-vision'
export const FOUNDER_PATH = '/founder'
/* The /team page is still routed and still live; it is simply no longer
   listed in the About Us dropdown. Kept exported so whatever links to it
   next — a careers post, a footer column — has the one source of truth. */
export const TEAM_PATH = '/team'
export const BLOG_PATH = '/blog'
export const FAQ_PATH = '/faq'
export const REVIEWS_PATH = '/reviews'
export const EVENTS_PATH = '/events'
export const PARTNERSHIPS_PATH = '/college-partnerships'
/* The index of everything written in the CMS's Pages module. */
export const PAGES_PATH = '/pages'
export const COURSES_PATH = '/courses'

/* The "More Courses" category pages — content in data/moreCourses.ts,
   which is not imported here: it is mostly page copy, and this file is
   loaded eagerly by the Navbar. Slugs must match MORE_CATEGORIES. */
const moreCourses = (slug: string) => `${COURSES_PATH}/category/${slug}`

/* The Internship & Training domain pages — content in data/trainingTracks.ts,
   kept out of this file for the same reason. Slugs must match TRAINING_DOMAINS. */
const training = (slug: string) => `/training/${slug}`

export const ABOUT_MENU = {
  kind: 'featured',
  categories: [
    { label: 'About techcadd', href: ABOUT_PATH },
    { label: 'Mission and Vision', href: MISSION_PATH },
    { label: 'Our Founder', href: FOUNDER_PATH }
  ],
  featured: [
    {
      title: 'About techcadd',
      img: '/gallery/2.png',
      tone: 'blue',
      tags: ['Story', 'Since 2016'],
      href: ABOUT_PATH
    },
    {
      title: 'Mission and Vision',
      img: '/gallery/4.png',
      tone: 'violet',
      tags: ['Purpose', 'Our direction'],
      href: MISSION_PATH
    },
    {
      /* This card used to carry no `img` at all — Thumb renders the
         tone tile on its own when a card has no picture, so it showed
         a clean cyan gradient rather than a broken frame. It has a
         photograph now, and the cyan tone stays as the colour behind
         it while the picture loads. */
      title: 'Our Founder',
      img: '/photos/ourfounderdropdown.jpeg',
      tone: 'cyan',
      tags: ['Profile', 'Gourav Gupta'],
      href: FOUNDER_PATH
    }
  ]
}

export const AI_MENU = {
  kind: 'ai',
  title: 'Learn AI Skills.',
  blurb: 'Build projects with machine learning, data science, automation, and generative AI.',
  groups: [
    {
      title: 'AI Fundamentals',
      icon: 'spark',
      links: [
        { label: 'Generative AI', href: course('generative-ai') },
        { label: 'Artificial Intelligence (AI)', href: course('artificial-intelligence') },
        { label: 'Prompt Engineering', href: course('prompt-engineering') },
        { label: 'ChatGPT & AI Tools', href: course('chatgpt-ai-tools'), badge: 'Hot' }
      ]
    },
    {
      title: 'AI Development',
      icon: 'bolt',
      links: [
        { label: 'Agentic AI', href: course('agentic-ai'), badge: 'Hot' },
        { label: 'AI-Powered Marketing', href: course('ai-powered-marketing'), badge: 'Hot' },
        { label: 'RAG (Retrieval-Augmented Generation)', href: course('rag') },
        { label: 'Machine Learning', href: course('machine-learning') }
      ]
    }
  ],
  spotlight: {
    kicker: 'Featured AI course',
    title: 'Artificial Intelligence Training in Ludhiana',
    img: '/findtrack/ai-centre.jpeg',
    tone: 'blue',
    href: course('artificial-intelligence')
  },
  promo: {
    text: 'Start with AI fundamentals, then move into real projects and career-ready tools.',
    cta: 'Explore AI',
    href: course('artificial-intelligence')
  }
}

/* Links with no `href` fall back to the menu's footer link (/courses)
   in ColumnsPanel — used for courses that have no page of their own yet.
   Give one an href (course('<slug>')) once its course exists in the CMS. */
export const COURSES_MENU = {
  kind: 'columns',
  columns: [
    {
      title: 'Programming',
      href: moreCourses('programming'),
      blurb: 'Core languages and full-stack engineering',
      links: [
        { label: 'Python', href: course('python'), badge: 'Hot' },
        { label: 'Java', href: course('java') },
        { label: 'C & C++', href: course('c-cpp') },
        { label: 'Kotlin', href: course('kotlin'), badge: 'Trending' },
        { label: 'Web Designing', href: course('web-designing') },
        { label: 'Web Development', href: course('web-development') },
        { label: 'MERN Stack', href: course('mern-stack'), badge: 'Hot' },
        { label: 'MEAN Stack', href: course('mean-stack') },
        { label: 'PHP Full Stack', href: course('php-full-stack') },
        { label: 'IT Foundation Programme' }
      ]
    },
    {
      title: 'AI & Data',
      href: moreCourses('ai-data-science'),
      blurb: 'Models, analytics and decision intelligence',
      links: [
        { label: 'Artificial Intelligence', href: course('artificial-intelligence'), badge: 'Hot' },
        { label: 'Machine Learning', href: course('machine-learning'), badge: 'Hot' },
        { label: 'Deep Learning', href: course('deep-learning') },
        { label: 'Data Science', href: course('data-science'), badge: 'Trending' },
        { label: 'Data Analytics', href: course('data-analytics'), badge: 'Trending' },
        { label: 'Power BI', href: course('power-bi') },
        { label: 'Tableau', href: course('tableau') }
      ]
    },
    {
      title: 'Digital Marketing',
      href: moreCourses('digital-marketing'),
      blurb: 'Growth, performance and commerce',
      links: [
        { label: 'Digital Marketing', href: course('digital-marketing') },
        { label: 'Social Media Marketing', href: course('social-media-marketing'), badge: 'Trending' },
        { label: 'Google Ads', href: course('google-ads') },
        { label: 'SEO', href: course('seo') },
        { label: 'WordPress', href: course('wordpress') },
        { label: 'Shopify', href: course('shopify') },
        { label: 'Meta Ads', href: moreCourses('design-marketing-accounting') + '#marketing', badge: 'New' }
      ]
    },
    {
      title: 'Cyber & Cloud',
      href: moreCourses('cyber-security-cloud'),
      blurb: 'Secure, resilient infrastructure',
      links: [
        { label: 'Cybersecurity', href: course('cybersecurity') },
        { label: 'Ethical Hacking', href: course('ethical-hacking'), badge: 'Trending' },
        { label: 'Cloud Computing', href: course('cloud-computing') },
        { label: 'Linux', href: course('linux') },
        { label: 'Network Security' },
        { label: 'SOC Analyst', badge: 'New' },
        { label: 'AWS', badge: 'Hot' },
        { label: 'Microsoft Azure' },
        { label: 'DevOps', badge: 'Trending' }
      ]
    },
    {
      title: 'More Courses',
      blurb: 'CADD, office, accounting and design',
      links: [
        { label: 'CADD & Design Courses', href: moreCourses('cadd-design'), badge: 'New' },
        { label: 'Basic Computer Courses', href: moreCourses('basic-computer') },
        { label: 'Design, Marketing & Tally', href: moreCourses('design-marketing-accounting'), badge: 'Hot' },
        { label: 'Civil & Architecture CAD', href: moreCourses('cadd-design') + '#civil-cad' },
        { label: 'Mechanical CAD & CAM', href: moreCourses('cadd-design') + '#mechanical-cad' },
        { label: 'Accounting & Tally', href: moreCourses('design-marketing-accounting') + '#tally-accounting' }
      ]
    }
  ],
  footer: { label: 'Browse all courses', href: COURSES_PATH }
}

/* Internship & Training — a grid of icon tiles, one per domain, each
   opening /training/<domain> (45 days, 6 weeks and 6 months cards), with
   the general training formats as a row of links underneath. `icon`
   names a glyph in Navbar.tsx (TILE_ICONS). */
export const TRAINING_MENU = {
  kind: 'tiles',
  tiles: [
    { label: 'Cloud Computing', icon: 'cloud', href: training('cloud-computing') },
    { label: 'Flutter App Development', icon: 'phone', href: training('flutter-app-development') },
    { label: 'MERN Stack', icon: 'code', href: training('mern-stack') },
    { label: 'Agentic AI', icon: 'bot', href: training('agentic-ai'), badge: 'New' },
    { label: 'Digital Marketing', icon: 'megaphone', href: training('digital-marketing') },
    { label: 'Data Analytics', icon: 'chart', href: training('data-analytics') },
    { label: 'Data Science', icon: 'chart', href: training('data-science') },
    { label: 'Cyber Security', icon: 'shield', href: training('cyber-security') },
    { label: 'Artificial Intelligence', icon: 'bot', href: training('artificial-intelligence') },
    { label: 'Full Stack Development', icon: 'code', href: training('full-stack-development') },
    { label: 'Basic Skill and Programs', icon: 'monitor', href: training('basic-skills') },
    { label: 'Civil/Mechanical', icon: 'cube', href: training('civil-mechanical') }
  ],
  formats: [
    { label: '45 Days Training', href: course('45-days-training') },
    { label: '6 Weeks Training', href: course('6-weeks-training') },
    { label: '4 Months Training', href: course('4-months-training') },
    { label: '6 Months Training', href: course('6-months-training') },
    { label: 'Industrial Training', href: course('industrial-training') },
    { label: 'Internship Program', href: course('internship-program') }
  ],
  footer: { label: 'See all training formats', href: COURSES_PATH }
}

export const AFTER12_MENU = {
  kind: 'columns',
  columns: [
    {
      title: '6 Month Certificates',
      blurb: 'One skill, job-ready in half a year',
      links: [
        { label: 'Digital Marketing & Communication', href: course('digital-marketing') },
        { label: 'Python Programming', href: course('python') },
        { label: 'Machine Learning & AI', href: course('machine-learning'), badge: 'Trending' },
        { label: 'Cybersecurity', href: course('cybersecurity') },
        { label: 'Tally ERP with GST', href: course('tally-erp') },
        { label: 'Computer Basics & MS Excel', href: course('computer-basics-excel') }
      ]
    },
    {
      title: '1 Year Certificates',
      blurb: 'Full programmes with an internship track',
      links: [
        { label: 'Generative AI', href: course('generative-ai'), badge: 'Trending' },
        { label: 'Cloud Computing & DevOps', href: course('cloud-computing') },
        { label: 'AI & Data Science', href: course('data-science') },
        { label: 'Machine Learning & Deep Learning', href: course('deep-learning') },
        { label: 'Cybersecurity & Ethical Hacking', href: course('ethical-hacking') }
      ]
    },
    {
      title: 'Graphics',
      blurb: 'Design, video and motion for screen and print',
      links: [
        { label: 'Graphic Designing', href: course('graphic-designing') },
        { label: 'Video Editing', href: course('video-editing') },
        { label: '2D / 3D Animation', href: course('2d-3d-animation') },
        { label: 'UI/UX Design with Figma', href: course('ui-ux-design'), badge: 'Trending' }
      ]
    },
    {
      title: 'Civil / Mechanical',
      blurb: 'Design and drafting for engineering streams',
      links: [
        { label: 'AutoCAD', href: course('autocad') },
        { label: 'SolidWorks', href: course('solidworks') },
        { label: '3ds Max', href: course('3ds-max') },
        { label: 'Revit', href: course('revit') }
      ]
    }
  ],
  footer: { label: 'Browse After 12th courses', href: COURSES_PATH }
}

/* techcadd's campuses. Every one gets its own /branches/<slug> page
   (src/pages/BranchPage.jsx, content in src/data/branches.js) rather
   than some linking out directly and others not — Jalandhar and
   Mohali's pages hand the visitor on to their own sites, Ludhiana's
   points back at this one, and the rest say plainly that a
   campus-specific address isn't published yet. */
export const BRANCHES_MENU = {
  kind: 'simple',
  links: [
    { label: 'Jalandhar', href: branchPath('jalandhar') },
    { label: 'Mohali', href: branchPath('mohali') },
    { label: 'Ludhiana', href: branchPath('ludhiana') },
    { label: 'Phagwara', href: branchPath('phagwara') },
    { label: 'Maqsudan', href: branchPath('maqsudan') },
    { label: 'Hoshiarpur', href: branchPath('hoshiarpur') },
    { label: 'Amritsar', href: branchPath('amritsar') }
  ]
}

export const RESOURCES_MENU = {
  kind: 'featured',
  categories: [
    { label: 'Blogs', href: BLOG_PATH },
    { label: 'Events', href: EVENTS_PATH },
    { label: 'Gallery', href: GALLERY_PATH },
    { label: 'FAQ', href: FAQ_PATH },
    { label: 'Reviews', href: REVIEWS_PATH },
    { label: 'College Partnerships', href: PARTNERSHIPS_PATH },
    /* The CMS's own pages are appended after this by the Navbar, which
       reads them from /nav-pages. They used to be added to the top bar
       instead — one item per page, until it wrapped. */
    { label: 'Pages', href: PAGES_PATH }
  ],
  featured: [
    {
      title: 'Blogs',
      img: '/lab-demo.webp',
      tone: 'blue',
      tags: ['Articles', 'Latest'],
      href: BLOG_PATH
    },
    {
      title: 'FAQ',
      img: '/mentoring.webp',
      tone: 'violet',
      tags: ['Answers', 'Admissions'],
      href: FAQ_PATH
    },
    {
      title: 'Gallery',
      img: '/gallery/7.png',
      tone: 'cyan',
      tags: ['Campus', 'Photos'],
      href: GALLERY_PATH
    }
  ]
}

/* Steve Jobs, 1995. Shown in the footer strip of the column menus. */
export const MENU_QUOTE = {
  text: 'Everybody should learn to program a computer, because it teaches you how to think.',
  by: 'Steve Jobs'
}

/* The top row. On desktop an item that owns a menu renders as the
   button that opens it, so the href is what the mobile drawer and a
   keyboard follow — which is why each one points at the page behind
   the menu rather than at a section of the home page.

   `navigates: true` opts an item out of the button treatment: it keeps
   the mega menu on hover and focus, but the trigger itself is a real
   link, so clicking 'Courses' lands on /courses instead of only
   opening the panel. */
export const NAV_ITEMS = [
  /* '/' and not '#home'. SmartLink resolves a bare hash against the
     CURRENT page, so '#home' became '/about#home' on the about page —
     an anchor that does not exist there, so the link did nothing.
     Every page needs a real way back to the home page. */
  { label: 'Home', href: '/' },
  { label: 'About Us', href: ABOUT_PATH, key: 'about', menu: ABOUT_MENU },
  { label: 'Founder', href: FOUNDER_PATH },
  { label: 'AI', href: course('artificial-intelligence'), key: 'ai', menu: AI_MENU, highlight: true },
  { label: 'Courses', href: COURSES_PATH, key: 'courses', menu: COURSES_MENU, navigates: true },
  { label: 'Internship & Training', href: COURSES_PATH, key: 'training', menu: TRAINING_MENU },
  { label: 'After 12th', href: COURSES_PATH, key: 'after12', menu: AFTER12_MENU },
  { label: 'Resources', href: BLOG_PATH, key: 'resources', menu: RESOURCES_MENU },
  { label: 'Branches', href: CONTACT_PATH, key: 'branches', menu: BRANCHES_MENU },
  { label: 'Contact Us', href: CONTACT_PATH }
]
