/* ==================================================================
   The "More Courses" category pages — /courses/category/<slug>.

   Three pages, one per heading in the Courses menu's fifth column:
   CADD & Design, Basic Computer, and Design, Marketing & Accounting.
   Each page is a set of groups, and each group a grid of course cards.

   A course is written once in COURSES below and referenced by id from
   every group it belongs to, so a course that sits in two groups
   (Revit Architecture is both Civil and Interior) reads the same in
   both places.

   `slug` is set only where the course already has its own page at
   /courses/<slug>. A card with a slug links there; a card without one
   opens the Book Demo form instead of pointing at a page that does
   not exist. Give a course a slug once its page is published in the
   CMS and its card starts linking to it on its own.

   Durations are the usual length of a batch, not a promise — the page
   says so, and the campus confirms the current schedule and fee.
================================================================== */

import { coursePath } from './courses/path'

export const MORE_COURSES_BASE = '/courses/category'
export const moreCoursesPath = (slug: string) => `${MORE_COURSES_BASE}/${slug}`

export type MoreCourse = {
  name: string
  slug?: string
  blurb: string
  duration: string
  level: string
  topics: string[]
}

export type MoreGroup = {
  id: string
  title: string
  blurb: string
  tone: 'blue' | 'indigo' | 'teal' | 'green' | 'orange' | 'purple'
  courses: string[]
}

export type MoreCategory = {
  slug: string
  name: string
  menuLabel: string
  menuBlurb: string
  metaTitle: string
  metaDescription: string
  hero: { eyebrow: string; title: string; accent: string; lead: string; image: string }
  intro: { eyebrow: string; title: string; accent: string; body: string[]; points: string[] }
  groups: MoreGroup[]
  careers: {
    eyebrow: string
    title: string
    accent: string
    lead: string
    items: { icon: string; title: string; text: string }[]
  }
  faqs: { id: string; q: string; a: string }[]
}

/* ------------------------------------------------------------------
   Every course on the three pages, keyed by id.
------------------------------------------------------------------ */
export const COURSES: Record<string, MoreCourse> = {
  /* ---------------- Civil CAD ---------------- */
  'autocad-civil': {
    name: 'AutoCAD Civil',
    blurb:
      'Site plans, road profiles, contours and municipal drawing sets — the drafting Ludhiana’s civil contractors and GLADA-approved consultants submit every week.',
    duration: '2–3 months',
    level: 'Beginner',
    topics: ['Site & layout plans', 'Contours & profiles', 'Submission drawings']
  },
  'autocad-2d-3d': {
    name: 'AutoCAD 2D & 3D',
    slug: 'autocad',
    blurb:
      'The drafting standard behind every plan, elevation and machine drawing in the city. Start at lines and layers and finish with plotted 3D models.',
    duration: '2–3 months',
    level: 'Beginner',
    topics: ['2D drafting & layers', 'Dimensioning & plotting', '3D solids']
  },
  'revit-architecture': {
    name: 'Revit Architecture',
    slug: 'revit',
    blurb:
      'Model a building once and get plans, sections, schedules and quantities from the same file — the BIM workflow larger Ludhiana and Chandigarh firms now ask for.',
    duration: '2–3 months',
    level: 'Intermediate',
    topics: ['BIM modelling', 'Sheets & schedules', 'Families']
  },
  'staad-pro': {
    name: 'STAAD.Pro',
    blurb:
      'Analyse and design RCC and steel structures — frames, loads and code checks — for the residential and industrial buildings going up across Ludhiana.',
    duration: '2 months',
    level: 'Intermediate',
    topics: ['Load & analysis', 'RCC design', 'Steel structures']
  },
  sketchup: {
    name: 'SketchUp',
    blurb:
      'Fast 3D massing for houses, shop fronts and interiors — the quickest way to show a client in Sarabha Nagar or Model Town what the space will look like.',
    duration: '1 month',
    level: 'Beginner',
    topics: ['3D massing', 'Components', 'Scenes & export']
  },
  vray: {
    name: 'V-Ray',
    blurb:
      'Photoreal lighting and materials for SketchUp and 3ds Max scenes — the renders builders and interior studios put on hoardings and brochures.',
    duration: '1 month',
    level: 'Intermediate',
    topics: ['Lighting', 'Materials', 'Render settings']
  },

  /* ---------------- Mechanical CAD ---------------- */
  'autocad-mechanical': {
    name: 'AutoCAD Mechanical',
    blurb:
      'Machine and part drawings with standard parts, tolerances and BOMs — the drawings Focal Point manufacturers send to the shop floor every day.',
    duration: '2 months',
    level: 'Beginner',
    topics: ['Part drawings', 'GD&T basics', 'Bill of materials']
  },
  solidworks: {
    name: 'SOLIDWORKS',
    slug: 'solidworks',
    blurb:
      'Parametric parts, assemblies and drawings — the modeller most of Ludhiana’s auto-component, cycle-part and machine-tool units design in.',
    duration: '2–3 months',
    level: 'Beginner',
    topics: ['Part modelling', 'Assemblies', 'Drawings & sheet metal']
  },
  catia: {
    name: 'CATIA',
    blurb:
      'Advanced surfacing and assembly design used by automotive and tractor OEM suppliers — a strong addition for mechanical graduates aiming at larger plants.',
    duration: '2–3 months',
    level: 'Intermediate',
    topics: ['Part & assembly design', 'Surfacing', 'Drafting']
  },
  creo: {
    name: 'Creo',
    blurb:
      'PTC Creo parametric modelling for product and tooling design, common in engineering exporters and design houses supplying OEMs.',
    duration: '2 months',
    level: 'Intermediate',
    topics: ['Parametric parts', 'Assemblies', 'Detailing']
  },
  mastercam: {
    name: 'Mastercam',
    blurb:
      'Generate toolpaths for milling and turning — the bridge between a CAD model and the CNC machines running in Ludhiana’s job shops.',
    duration: '1–2 months',
    level: 'Intermediate',
    topics: ['2D & 3D toolpaths', 'Milling & turning', 'Post-processing']
  },
  'product-design': {
    name: 'Product Design',
    blurb:
      'Take a product from sketch to manufacturable model — form, fit, materials and design for manufacturing, using the industries around you as case studies.',
    duration: '3 months',
    level: 'Intermediate',
    topics: ['Concept to model', 'Design for manufacture', 'Prototyping']
  },
  'machine-design': {
    name: 'Machine Design',
    blurb:
      'Shafts, gears, bearings and fasteners — the calculations behind the machines Ludhiana is known for building, backed by CAD models.',
    duration: '2 months',
    level: 'Intermediate',
    topics: ['Design calculations', 'Standard elements', 'CAD validation']
  },
  'cnc-programming': {
    name: 'CNC Programming',
    blurb:
      'G-code and M-code for lathes and VMCs, with setup and offsets — the most directly employable skill for the city’s machining units.',
    duration: '1–2 months',
    level: 'Beginner',
    topics: ['G & M codes', 'Lathe & VMC', 'Setup & offsets']
  },
  'reverse-engineering': {
    name: 'Reverse Engineering',
    blurb:
      'Measure an existing part and rebuild it as an accurate CAD model — everyday work for spare-part makers and tooling shops.',
    duration: '1–2 months',
    level: 'Intermediate',
    topics: ['Measurement', 'Model rebuild', 'Drawing generation']
  },

  /* ---------------- Architecture & Interior ---------------- */
  'autocad-architecture': {
    name: 'AutoCAD Architecture',
    blurb:
      'Walls, doors, windows and building sections with architectural objects — faster house and commercial plans than plain AutoCAD.',
    duration: '2 months',
    level: 'Beginner',
    topics: ['Architectural objects', 'Plans & sections', 'Schedules']
  },
  '3ds-max': {
    name: '3ds Max',
    slug: '3ds-max',
    blurb:
      'Model, texture and light interiors and exteriors for walkthroughs and stills — the visualisation tool of choice for Ludhiana’s interior studios.',
    duration: '2–3 months',
    level: 'Intermediate',
    topics: ['Modelling', 'Materials & lighting', 'Walkthroughs']
  },
  'revit-interior': {
    name: 'Revit Interior Design',
    blurb:
      'Furniture layouts, ceilings, finishes and joinery schedules in BIM — interiors that stay coordinated with the building model.',
    duration: '2 months',
    level: 'Intermediate',
    topics: ['Interior layouts', 'Ceilings & finishes', 'Schedules']
  },
  'interior-autocad': {
    name: 'Interior Design with AutoCAD',
    blurb:
      'Furniture plans, electrical layouts, false ceilings and working drawings — what a site carpenter in Ludhiana actually builds from.',
    duration: '2 months',
    level: 'Beginner',
    topics: ['Furniture plans', 'Electrical & ceiling', 'Working drawings']
  },
  'arch-visualization': {
    name: 'Architectural Visualization',
    blurb:
      'SketchUp, 3ds Max and V-Ray together — stills and walkthroughs that sell flats and showrooms before the first brick is laid.',
    duration: '3 months',
    level: 'Intermediate',
    topics: ['Scene building', 'Photoreal renders', 'Animation']
  },

  /* ---------------- CAD/CAM ---------------- */
  autocad: {
    name: 'AutoCAD',
    slug: 'autocad',
    blurb:
      'The starting point for every CAD/CAM track — accurate 2D drafting and the drawing standards a CAM programmer reads from.',
    duration: '2 months',
    level: 'Beginner',
    topics: ['2D drafting', 'Drawing standards', 'Plotting']
  },
  'cam-programming': {
    name: 'CAM Programming',
    blurb:
      'Plan operations, select tools and simulate machining before a single part is cut — reducing scrap on the shop floor.',
    duration: '1–2 months',
    level: 'Intermediate',
    topics: ['Operation planning', 'Tool selection', 'Simulation']
  },

  /* ---------------- Basic computer ---------------- */
  'computer-fundamentals': {
    name: 'Computer Fundamentals',
    blurb:
      'How a computer works, from hardware to the operating system — the confident start for school leavers and anyone new to computers.',
    duration: '1 month',
    level: 'Beginner',
    topics: ['Hardware & software', 'Operating system', 'Safe computing']
  },
  'basic-computer': {
    name: 'Basic Computer Course',
    slug: 'computer-basics-excel',
    blurb:
      'Windows, typing, MS Office, the internet and email in one course — the computer skills every office, shop and showroom in Ludhiana expects.',
    duration: '2–3 months',
    level: 'Beginner',
    topics: ['Windows', 'MS Office', 'Internet & email']
  },
  'ms-office': {
    name: 'MS Office',
    blurb:
      'Word, Excel and PowerPoint together — letters, sheets and presentations to the standard any office job interview tests.',
    duration: '2 months',
    level: 'Beginner',
    topics: ['Word', 'Excel', 'PowerPoint']
  },
  'ms-word': {
    name: 'MS Word',
    blurb:
      'Letters, quotations, invoices and reports with proper formatting, tables and mail merge.',
    duration: '2–3 weeks',
    level: 'Beginner',
    topics: ['Formatting', 'Tables', 'Mail merge']
  },
  'ms-excel': {
    name: 'MS Excel',
    blurb:
      'Formulas, sorting, filters and charts for stock registers, salary sheets and sales records — the sheets local businesses run on.',
    duration: '1 month',
    level: 'Beginner',
    topics: ['Formulas', 'Sorting & filters', 'Charts']
  },
  'ms-powerpoint': {
    name: 'MS PowerPoint',
    blurb:
      'Clean, confident presentations for college, interviews and business pitches.',
    duration: '2 weeks',
    level: 'Beginner',
    topics: ['Slide design', 'Animations', 'Presenting']
  },
  'internet-email': {
    name: 'Internet & Email',
    blurb:
      'Browse safely, use email professionally, fill online forms and avoid common scams — everyday skills for students and working adults.',
    duration: '2 weeks',
    level: 'Beginner',
    topics: ['Browsing & search', 'Email', 'Online safety']
  },
  'computer-typing': {
    name: 'Computer Typing',
    blurb:
      'Touch typing in English with speed and accuracy drills — a requirement for data entry, clerical and government job tests.',
    duration: '1 month',
    level: 'Beginner',
    topics: ['Touch typing', 'Speed drills', 'Accuracy']
  },
  'advanced-excel': {
    name: 'Advanced Excel',
    blurb:
      'VLOOKUP/XLOOKUP, pivot tables, dashboards and data validation — the Excel that gets accountants and MIS executives hired.',
    duration: '1–2 months',
    level: 'Intermediate',
    topics: ['Lookups', 'Pivot tables', 'Dashboards']
  },
  'tally-prime': {
    name: 'Tally Prime',
    blurb:
      'Ledgers, vouchers, inventory and reports in TallyPrime — the accounting software used by traders and manufacturers across Ludhiana’s markets.',
    duration: '2 months',
    level: 'Beginner',
    topics: ['Ledgers & vouchers', 'Inventory', 'Reports']
  },
  'tally-gst': {
    name: 'Tally with GST',
    blurb:
      'GST invoicing, input credit and return-ready reports in Tally — what every GST-registered business in the city needs from its accountant.',
    duration: '2–3 months',
    level: 'Beginner',
    topics: ['GST invoicing', 'Input tax credit', 'GST reports']
  },
  'office-automation': {
    name: 'Office Automation',
    blurb:
      'MS Office, email, scanning, printing and file handling together — the complete toolkit for front-office and back-office roles.',
    duration: '2–3 months',
    level: 'Beginner',
    topics: ['Office suite', 'Documents & files', 'Office devices']
  },
  'data-entry': {
    name: 'Data Entry',
    blurb:
      'Fast, accurate entry in Excel and forms with checking routines — a quick route into BPO, billing and back-office jobs.',
    duration: '1 month',
    level: 'Beginner',
    topics: ['Typing accuracy', 'Excel entry', 'Verification']
  },
  'computer-accounting': {
    name: 'Computer Accounting',
    blurb:
      'Accounting principles applied on the computer — journals, ledgers, trial balance and final accounts in Excel and Tally.',
    duration: '2–3 months',
    level: 'Beginner',
    topics: ['Accounting basics', 'Excel & Tally', 'Final accounts']
  },
  'basic-graphic-design': {
    name: 'Basic Graphic Design',
    blurb:
      'Layout, colour and type fundamentals to make posters, cards and social posts that look professional.',
    duration: '1 month',
    level: 'Beginner',
    topics: ['Layout', 'Colour & type', 'Print & social']
  },
  canva: {
    name: 'Canva',
    blurb:
      'Posts, reels covers, flyers and menus in Canva — the fastest way for shop owners and students to create good-looking designs.',
    duration: '2–3 weeks',
    level: 'Beginner',
    topics: ['Templates', 'Brand kit', 'Social posts']
  },
  'google-workspace': {
    name: 'Google Workspace',
    blurb:
      'Gmail, Drive, Docs, Sheets, Forms and Meet — how modern offices share files and work together online.',
    duration: '2–3 weeks',
    level: 'Beginner',
    topics: ['Docs & Sheets', 'Drive sharing', 'Forms & Meet']
  },
  'windows-files': {
    name: 'Windows & File Management',
    blurb:
      'Organise files and folders, install software, back up data and keep a PC running smoothly.',
    duration: '2 weeks',
    level: 'Beginner',
    topics: ['Files & folders', 'Settings', 'Backup']
  },

  /* ---------------- Design & media ---------------- */
  'web-designing': {
    name: 'Web Designing',
    slug: 'web-designing',
    blurb:
      'HTML, CSS and responsive layouts — build the websites Ludhiana’s shops, clinics and exporters need to be found online.',
    duration: '3 months',
    level: 'Beginner',
    topics: ['HTML & CSS', 'Responsive design', 'Live website']
  },
  'graphic-design': {
    name: 'Graphic Design',
    slug: 'graphic-designing',
    blurb:
      'Photoshop, Illustrator and CorelDRAW together — logos, catalogues and packaging for the city’s hosiery, textile and retail brands.',
    duration: '3–4 months',
    level: 'Beginner',
    topics: ['Branding', 'Print design', 'Social creatives']
  },
  photoshop: {
    name: 'Adobe Photoshop',
    blurb:
      'Photo editing, retouching and compositing — product shots for e-commerce, wedding albums and ad creatives.',
    duration: '1–2 months',
    level: 'Beginner',
    topics: ['Retouching', 'Compositing', 'Product photos']
  },
  illustrator: {
    name: 'Adobe Illustrator',
    blurb:
      'Vector logos, icons, illustrations and print artwork that scales from a visiting card to a hoarding.',
    duration: '1–2 months',
    level: 'Beginner',
    topics: ['Vector drawing', 'Logos', 'Print artwork']
  },
  coreldraw: {
    name: 'CorelDRAW',
    blurb:
      'The print-shop favourite — flex banners, visiting cards, labels and packaging, used by most printers in the city.',
    duration: '1–2 months',
    level: 'Beginner',
    topics: ['Layouts', 'Flex & banners', 'Labels & packaging']
  },
  'video-editing': {
    name: 'Video Editing',
    slug: 'video-editing',
    blurb:
      'Cut reels, ads and YouTube videos with transitions, colour and sound — content local brands and creators need every day.',
    duration: '2–3 months',
    level: 'Beginner',
    topics: ['Editing & cuts', 'Colour & audio', 'Reels & ads']
  },

  /* ---------------- Digital marketing ---------------- */
  'digital-marketing': {
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    blurb:
      'SEO, social media, ads, email and analytics — the full skill set to grow a Ludhiana business, or a career in an agency.',
    duration: '3–4 months',
    level: 'Beginner',
    topics: ['SEO & social', 'Paid ads', 'Analytics']
  },
  seo: {
    name: 'SEO',
    slug: 'seo',
    blurb:
      'Rank on Google for searches like “near me in Ludhiana” — keywords, on-page, Google Business Profile and links.',
    duration: '1–2 months',
    level: 'Beginner',
    topics: ['Keyword research', 'On-page & local SEO', 'Link building']
  },
  'meta-ads': {
    name: 'Meta Ads',
    blurb:
      'Facebook and Instagram campaigns that bring real enquiries — audiences, creatives, budgets and lead forms.',
    duration: '1 month',
    level: 'Beginner',
    topics: ['Audiences', 'Creatives', 'Lead campaigns']
  },
  'google-ads': {
    name: 'Google Ads',
    slug: 'google-ads',
    blurb:
      'Search, display and YouTube campaigns with conversion tracking — put a business on top of Google today.',
    duration: '1 month',
    level: 'Beginner',
    topics: ['Search campaigns', 'Bidding & budgets', 'Conversion tracking']
  },

  /* ---------------- Tally & accounting ---------------- */
  'tally-prime-gst': {
    name: 'Tally Prime with GST',
    blurb:
      'TallyPrime with GST invoicing, e-way bills and return-ready reports — the most asked-for accounts skill in Ludhiana job listings.',
    duration: '2–3 months',
    level: 'Beginner',
    topics: ['GST billing', 'E-way bills', 'GSTR reports']
  },
  'advanced-tally': {
    name: 'Advanced Tally',
    blurb:
      'Payroll, cost centres, budgets, banking and multi-company accounts — for accountants moving into senior roles.',
    duration: '1–2 months',
    level: 'Intermediate',
    topics: ['Payroll', 'Cost centres', 'Banking & reconciliation']
  },
  'tally-erp': {
    name: 'Tally ERP',
    slug: 'tally-erp',
    blurb:
      'Tally ERP 9 accounting and inventory — still running in many established Ludhiana firms, so worth knowing alongside TallyPrime.',
    duration: '2 months',
    level: 'Beginner',
    topics: ['Accounts', 'Inventory', 'Statutory reports']
  },
  'gst-accounting': {
    name: 'GST Accounting',
    blurb:
      'GST law in practice — registration, invoicing, input credit, returns and reconciliation on the GST portal.',
    duration: '1–2 months',
    level: 'Beginner',
    topics: ['GST basics', 'Returns filing', 'Reconciliation']
  },
  quickbooks: {
    name: 'QuickBooks',
    blurb:
      'Cloud accounting used by exporters and businesses with overseas clients — invoicing, expenses and reports in QuickBooks.',
    duration: '1 month',
    level: 'Beginner',
    topics: ['Invoicing', 'Expenses', 'Financial reports']
  }
}

/* ------------------------------------------------------------------
   The three pages.
------------------------------------------------------------------ */
export const MORE_CATEGORIES: MoreCategory[] = [
  {
    slug: 'cadd-design',
    name: 'CADD & Design Courses',
    menuLabel: 'CADD & Design Courses',
    menuBlurb: 'Civil, mechanical, interior and CAD/CAM',
    metaTitle: 'CADD & Design Courses in Ludhiana — AutoCAD, Revit, SOLIDWORKS',
    metaDescription:
      'AutoCAD, Revit, STAAD.Pro, SOLIDWORKS, CATIA, Creo, Mastercam, 3ds Max and CNC programming courses in Ludhiana. Civil, mechanical, interior and CAD/CAM tracks at techcadd, Bharat Nagar Chowk.',
    hero: {
      eyebrow: 'CADD & Design · Ludhiana',
      title: 'Design and drafting for',
      accent: 'Punjab’s industrial city.',
      lead:
        'Civil CAD, mechanical CAD, architecture and interiors, and CAD/CAM — taught on the same software Ludhiana’s builders, consultants and manufacturers use every day.',
      image: '/gallery/3.png'
    },
    intro: {
      eyebrow: 'Why CADD in Ludhiana',
      title: 'A city that builds and manufactures',
      accent: 'needs people who can draw it first.',
      body: [
        'Ludhiana is Punjab’s largest manufacturing centre — bicycles and cycle parts, auto components, machine tools, sewing-machine parts and tractor parts are designed and made in its Focal Point and industrial areas. Every one of those parts starts as a CAD model and reaches the machine as a CAM program.',
        'At the same time, the city keeps building: housing along Ferozepur Road, Pakhowal Road and the new colonies around the city, and commercial projects across the centre. Architects, civil consultants and interior studios all need draughtspersons who can produce accurate drawings and convincing renders.',
        'Our CADD tracks are taught at the Bharat Nagar Chowk campus on real drawings and practical projects, so what you learn here is what you will be asked to do at work.'
      ],
      points: [
        'Hands-on lab practice on licensed-standard software',
        'Projects drawn from local construction and manufacturing',
        'Separate civil, mechanical, interior and CAD/CAM tracks',
        'Certificate on completion, with portfolio guidance'
      ]
    },
    groups: [
      {
        id: 'civil-cad',
        title: 'Civil CAD',
        blurb: 'Drafting, BIM and structural design for buildings and infrastructure.',
        tone: 'blue',
        courses: ['autocad-civil', 'autocad-2d-3d', 'revit-architecture', 'staad-pro', 'sketchup', 'vray']
      },
      {
        id: 'mechanical-cad',
        title: 'Mechanical CAD',
        blurb: 'Modelling, design and manufacturing skills for Ludhiana’s engineering industry.',
        tone: 'indigo',
        courses: [
          'autocad-mechanical',
          'solidworks',
          'catia',
          'creo',
          'mastercam',
          'product-design',
          'machine-design',
          'cnc-programming',
          'reverse-engineering'
        ]
      },
      {
        id: 'architecture-interior',
        title: 'Architectural & Interior Design',
        blurb: 'Plans, BIM, interiors and photoreal visualisation.',
        tone: 'teal',
        courses: [
          'autocad-architecture',
          'revit-architecture',
          'sketchup',
          '3ds-max',
          'vray',
          'revit-interior',
          'interior-autocad',
          'arch-visualization'
        ]
      },
      {
        id: 'cad-cam',
        title: 'CAD/CAM',
        blurb: 'From the drawing to the toolpath to the finished part.',
        tone: 'orange',
        courses: ['autocad', 'solidworks', 'catia', 'mastercam', 'cnc-programming', 'cam-programming']
      }
    ],
    careers: {
      eyebrow: 'Where it leads',
      title: 'Who hires CADD skills',
      accent: 'in and around Ludhiana.',
      lead: 'The roles our CADD learners prepare for — in the city, across Punjab and beyond.',
      items: [
        {
          icon: 'building',
          title: 'Civil & architecture firms',
          text: 'Draughtsperson, Revit modeller and structural design assistant roles with builders, consultants and architects.'
        },
        {
          icon: 'layers',
          title: 'Manufacturing units',
          text: 'Design engineer and CAD operator roles in auto-component, cycle-part, machine-tool and tractor-part units.'
        },
        {
          icon: 'target',
          title: 'CNC & tool rooms',
          text: 'CNC programmer, CAM programmer and setter roles in job shops and tool rooms across the industrial areas.'
        },
        {
          icon: 'frame',
          title: 'Interior & visualisation studios',
          text: 'Interior designer, 3D visualiser and render artist roles, or freelance work for builders and showrooms.'
        }
      ]
    },
    faqs: [
      {
        id: 'cadd-1',
        q: 'Which CADD course should I start with?',
        a: 'Almost every track starts with AutoCAD. Civil and architecture students then move to Revit, STAAD.Pro or SketchUp; mechanical students move to SOLIDWORKS, CATIA or Creo, and then to Mastercam and CNC programming for CAD/CAM. A counsellor at the Ludhiana campus will suggest a path based on your branch and goal.'
      },
      {
        id: 'cadd-2',
        q: 'Can diploma and ITI students join?',
        a: 'Yes. Diploma, ITI, B.Tech and B.Arch students all join these courses, as do working draughtspersons who want to add a new software. No prior CAD knowledge is needed for the beginner courses.'
      },
      {
        id: 'cadd-3',
        q: 'Are the classes practical?',
        a: 'Yes — the courses are lab-based. You draw and model on the computer in every class and finish with projects based on real buildings and parts, which become your portfolio.'
      },
      {
        id: 'cadd-4',
        q: 'Where are the classes held, and what about fees and timings?',
        a: 'Classes are held at the techcadd campus at Bharat Nagar Chowk, Ludhiana. Durations shown are typical; morning, afternoon and evening batches run through the week, and the current fee and batch schedule are confirmed when you visit or call the campus.'
      }
    ]
  },

  {
    slug: 'basic-computer',
    name: 'Basic Computer Courses',
    menuLabel: 'Basic Computer Courses',
    menuBlurb: 'Office, typing, Excel and Tally',
    metaTitle: 'Basic Computer Courses in Ludhiana — MS Office, Excel, Tally, Typing',
    metaDescription:
      'Basic computer courses in Ludhiana: computer fundamentals, MS Office, Word, Excel, PowerPoint, Advanced Excel, typing, data entry, Tally Prime with GST, Canva and Google Workspace at techcadd, Bharat Nagar Chowk.',
    hero: {
      eyebrow: 'Basic Computer · Ludhiana',
      title: 'Computer skills that',
      accent: 'every job now expects.',
      lead:
        'From your first day on a computer to Advanced Excel and Tally with GST — short, practical courses for students, job seekers, shopkeepers and working professionals in Ludhiana.',
      image: '/gallery/5.png'
    },
    intro: {
      eyebrow: 'Why it matters',
      title: 'Ludhiana runs on small businesses —',
      accent: 'and they all run on computers.',
      body: [
        'Ludhiana’s traders, wholesalers, hosiery units, showrooms and offices keep their stock, billing, salaries and GST on the computer. Whether the job is a receptionist, billing clerk, accountant or office executive, the first question in the interview is the same: how well do you know Excel, Word and Tally?',
        'These courses start from zero and build steadily — fundamentals and typing first, then MS Office and Google Workspace, then Advanced Excel and Tally with GST. Classes are small and practical, and adults and senior learners are as welcome as school leavers.',
        'Pick a single course, or combine them into an office-ready package with a counsellor at our Bharat Nagar Chowk campus.'
      ],
      points: [
        'Beginner-friendly — no prior knowledge needed',
        'Practice on real office tasks: bills, registers, letters',
        'Flexible morning, afternoon and evening batches',
        'Certificate on completion'
      ]
    },
    groups: [
      {
        id: 'foundations',
        title: 'Computer Foundations',
        blurb: 'The confident start — how a computer works and how to use it every day.',
        tone: 'blue',
        courses: [
          'computer-fundamentals',
          'basic-computer',
          'windows-files',
          'internet-email',
          'computer-typing',
          'data-entry'
        ]
      },
      {
        id: 'office',
        title: 'MS Office & Productivity',
        blurb: 'The tools every office in the city works with.',
        tone: 'teal',
        courses: [
          'ms-office',
          'ms-word',
          'ms-excel',
          'ms-powerpoint',
          'advanced-excel',
          'office-automation',
          'google-workspace'
        ]
      },
      {
        id: 'accounts-design',
        title: 'Accounts & Design Basics',
        blurb: 'Tally, GST and simple design — skills that make you useful on day one.',
        tone: 'green',
        courses: ['tally-prime', 'tally-gst', 'computer-accounting', 'basic-graphic-design', 'canva']
      }
    ],
    careers: {
      eyebrow: 'Where it leads',
      title: 'Jobs that ask for',
      accent: 'these exact skills.',
      lead: 'Entry-level roles across Ludhiana’s offices, shops and industries.',
      items: [
        {
          icon: 'document',
          title: 'Office & admin',
          text: 'Office assistant, receptionist and back-office executive roles in offices, schools and hospitals.'
        },
        {
          icon: 'wallet',
          title: 'Billing & accounts',
          text: 'Billing clerk, Tally operator and junior accountant roles with traders and manufacturers.'
        },
        {
          icon: 'layers',
          title: 'Data & MIS',
          text: 'Data entry operator and MIS executive roles built on fast typing and strong Excel.'
        },
        {
          icon: 'student',
          title: 'Study & self-employment',
          text: 'A strong base for college, government exams that test computer skills, and running your own shop or business.'
        }
      ]
    },
    faqs: [
      {
        id: 'basic-1',
        q: 'I have never used a computer. Can I join?',
        a: 'Yes. Computer Fundamentals and the Basic Computer Course start from the very beginning — switching on, using the mouse and keyboard — and move at a comfortable pace.'
      },
      {
        id: 'basic-2',
        q: 'Which course is best for getting an office job?',
        a: 'Most office jobs in Ludhiana ask for MS Office, Advanced Excel and Tally with GST, plus reasonable typing speed. A counsellor can combine these into one plan that fits your timing.'
      },
      {
        id: 'basic-3',
        q: 'Are there evening or weekend batches for working people?',
        a: 'Batches run through the day, including evening slots for working learners and shop owners. Ask the campus for the current timings.'
      },
      {
        id: 'basic-4',
        q: 'Will I get a certificate?',
        a: 'Yes, you receive a techcadd certificate on completing the course and its assessment.'
      }
    ]
  },

  {
    slug: 'design-marketing-accounting',
    name: 'Design, Marketing & Accounting Courses',
    menuLabel: 'Design, Marketing & Tally',
    menuBlurb: 'Graphics, video, digital marketing, Tally & GST',
    metaTitle: 'Graphic Design, Digital Marketing & Tally Courses in Ludhiana',
    metaDescription:
      'Web designing, graphic design, Photoshop, Illustrator, CorelDRAW, video editing, digital marketing, SEO, Meta Ads, Google Ads, Tally Prime with GST, GST accounting and QuickBooks courses in Ludhiana at techcadd.',
    hero: {
      eyebrow: 'Design · Marketing · Accounts · Ludhiana',
      title: 'Create it, sell it,',
      accent: 'account for it.',
      lead:
        'Design and video courses, digital marketing and ads, and Tally, GST and QuickBooks — the skills Ludhiana’s businesses hire for, and the ones you need to run your own.',
      image: '/gallery/6.png'
    },
    intro: {
      eyebrow: 'Why these skills',
      title: 'Every Ludhiana business needs',
      accent: 'a designer, a marketer and an accountant.',
      body: [
        'The city’s hosiery and knitwear brands, garment exporters, retailers, restaurants and clinics are all competing online now. They need catalogues and social creatives, reels and ads, and websites that turn up in local search — and they need someone who can do it well.',
        'Behind every sale is the accounting: GST invoices, e-way bills, returns and books kept in Tally or QuickBooks. Accountants who are confident with GST are among the most consistently hired people in Ludhiana.',
        'These courses are practical and portfolio-led. Designers leave with work to show, marketers with campaigns they have run, and accountants with hands-on GST practice.'
      ],
      points: [
        'Portfolio and live-project based learning',
        'Campaigns and creatives built for real local businesses',
        'Tally and GST taught on current practice',
        'Freelance and self-employment guidance'
      ]
    },
    groups: [
      {
        id: 'design-media',
        title: 'Design & Media',
        blurb: 'Websites, graphics and video for brands and creators.',
        tone: 'purple',
        courses: ['web-designing', 'graphic-design', 'photoshop', 'illustrator', 'coreldraw', 'video-editing']
      },
      {
        id: 'marketing',
        title: 'Digital Marketing',
        blurb: 'Get a business found, followed and enquired about.',
        tone: 'blue',
        courses: ['digital-marketing', 'seo', 'meta-ads', 'google-ads']
      },
      {
        id: 'tally-accounting',
        title: 'Tally & Accounting',
        blurb: 'Books, GST and reports the way Ludhiana’s businesses keep them.',
        tone: 'green',
        courses: ['tally-prime', 'tally-prime-gst', 'advanced-tally', 'tally-erp', 'gst-accounting', 'quickbooks']
      }
    ],
    careers: {
      eyebrow: 'Where it leads',
      title: 'Careers you can start',
      accent: 'right here in the city.',
      lead: 'In-house roles, agencies, freelancing — or growing your own business.',
      items: [
        {
          icon: 'frame',
          title: 'Design & print',
          text: 'Graphic designer, web designer and video editor roles with brands, printers, studios and agencies.'
        },
        {
          icon: 'growth',
          title: 'Digital marketing',
          text: 'Social media executive, SEO executive and ads specialist roles, or managing clients as a freelancer.'
        },
        {
          icon: 'wallet',
          title: 'Accounts & GST',
          text: 'Accountant, Tally operator and GST executive roles with traders, manufacturers and CA firms.'
        },
        {
          icon: 'rocket',
          title: 'Your own business',
          text: 'Design, market and keep the books for your own shop, brand or family business.'
        }
      ]
    },
    faqs: [
      {
        id: 'dma-1',
        q: 'Do I need to know drawing for graphic design?',
        a: 'No. Graphic design is about layout, colour and typography, and the software does the drawing. The courses start from the basics.'
      },
      {
        id: 'dma-2',
        q: 'Which Tally course should I take — Tally Prime, Tally with GST or Advanced Tally?',
        a: 'Start with Tally Prime with GST — it covers what most jobs ask for. Add Advanced Tally for payroll, cost centres and banking, and GST Accounting if you want to handle returns on the GST portal.'
      },
      {
        id: 'dma-3',
        q: 'Can I learn digital marketing to grow my own business?',
        a: 'Yes. Many learners are shop owners and entrepreneurs. You will practise on your own business pages and campaigns during the course.'
      },
      {
        id: 'dma-4',
        q: 'Where are classes held?',
        a: 'At the techcadd campus at Bharat Nagar Chowk, Ludhiana. Durations shown are typical; the current fee and batch timings are confirmed by the campus.'
      }
    ]
  }
]

export const getMoreCategory = (slug: string) => MORE_CATEGORIES.find((c) => c.slug === slug)

/* Where a card goes: the course's own page, or nothing — the card then
   opens the Book Demo form. */
export const moreCourseHref = (course: MoreCourse) => (course.slug ? coursePath(course.slug) : null)

export const categoryCourseCount = (category: MoreCategory) =>
  new Set(category.groups.flatMap((g) => g.courses)).size
