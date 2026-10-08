/* ==================================================================
   About techcadd — every word on the page.

   Sections stay presentational and read from here, so copy can be
   corrected without touching layout or motion. Figures that animate
   are stored split: `to` is counted up, `suffix` is printed as-is,
   so "15K+" arrives as 15 → K+ rather than a string tween.
================================================================== */

/* §2 — banner ---------------------------------------------------- */
export const HERO = {
  eyebrow: 'About techcadd',
  title: 'About Us',
  lead: 'Learn about our people, our story, and how we turn skills into careers.',
  /* drop a campus photograph here and it takes over from the gradient
     underneath — nothing breaks while it is missing */
  image: '/photos/about-hero.jpg',
  stats: [
    { to: 15, suffix: '+', label: 'Years of training' },
    { to: 15, suffix: 'K+', label: 'Learners trained' },
    { to: 120, suffix: '+', label: 'Courses & programmes' },
    { to: 98, suffix: '%', label: 'Learner satisfaction' }
  ]
}

/* §3 — who we are ------------------------------------------------ */
export const STORY = {
  eyebrow: 'Who we are',
  title: 'Empowering Skills. Enabling Careers.',
  accent: 'Building the Future.',
  body: [
    'Founded by Mr. Gourav Gupta, techcadd began as a small training centre with one stubborn idea: development matters more than certificates. Software gets built by people who have written it, broken it and fixed it — so that is how the teaching is arranged.',
    'Those classrooms have since grown into a full campus covering artificial intelligence, data science, cybersecurity, cloud, full-stack development and the design and drafting stacks that engineering streams depend on.',
    'What has not changed is the arc every learner follows: understand the fundamentals, build something real with them, then walk into interviews with work you can defend line by line.'
  ],
  photos: [
    { src: '/gallery/2.png', file: 'photos/team.jpg', tag: 'Our trainers', alt: 'The techcadd training team at the Ludhiana campus' },
    { src: '/lab-demo.webp', file: 'photos/lab.jpg', tag: 'Project lab', alt: 'Students building live projects in the techcadd lab' },
    { src: '/gallery/7.png', file: 'gallery/7.png', tag: 'Placement day', alt: 'techcadd students on placement drive day' }
  ],
  chipsTitle: 'What we cover',
  chips: [
    'Artificial Intelligence', 'Machine Learning', 'Data Science', 'Data Analytics',
    'Cyber Security', 'Ethical Hacking', 'Cloud Computing', 'Python', 'Java',
    'C & C++', 'MERN Stack', 'Web Development', 'Web Designing', 'Digital Marketing',
    'SEO', 'Social Media Marketing', 'AutoCAD', 'SolidWorks', 'Revit', 'Power BI'
  ],
  caption: 'Empowerment · Learning · Growth'
}

/* §4 — the ecosystem --------------------------------------------- */
export const ECOSYSTEM = {
  eyebrow: 'How we teach',
  title: 'A skill-building ecosystem.',
  body: [
    'A course here is not a playlist. Training, practice, mentoring and career support are arranged as one system, so progress in any one of them pushes the others forward.',
    'Students work on real assignments, projects, industrial training and internship-oriented learning experiences that help them understand how technology is applied in real-world environments.'
  ],
  pillars: [
    { icon: 'curriculum', title: 'Structured training', text: 'Concepts taught in sequence, each earning its place before the next arrives.' },
    { icon: 'terminal', title: 'Supervised practice', text: 'Lab hours with a mentor in the room while you get it wrong the first time.' },
    { icon: 'stack', title: 'Real project work', text: 'Applications built end to end, versioned, reviewed and deployed.' },
    { icon: 'career', title: 'Career preparation', text: 'Resume reviews, mock interviews and placement support until you sign.' }
  ],
  photo: { src: '/lab-demo.webp', file: 'photos/lab.jpg', alt: 'A training session in progress at techcadd' },
  panel: { k: 'In the room', v: 'Mentor-led batches', note: 'Classroom · Online · Weekend' }
}

/* §5 — the outlook ----------------------------------------------- */
export const OUTLOOK = {
  eyebrow: 'Our outlook',
  title: 'Preparing learners for a changing digital world',
  body: [
    'Technology is evolving quickly. Artificial intelligence, automation, cloud platforms, cybersecurity, data and software development are changing the way businesses operate — and the way they hire.',
    'Skills that were optional five years ago are now the entry requirement. Training has to move at the same speed, or it teaches people to be late.'
  ],
  quote:
    'The objective is not simply to teach a technology, but to develop the ability to understand problems, build solutions, use technology effectively, and keep upgrading one’s skills.'
}

/* §6 — who we teach ---------------------------------------------- */
export const AUDIENCE = {
  eyebrow: 'Who we teach',
  title: 'Learning for every stage of the career journey',
  lead:
    'The same campus serves a first-year student and a nine-year professional. What changes is the entry point, the pace, and where the track is pointed.',
  groups: [
    { no: '01', icon: 'student', title: 'School & College Students', text: 'Start early with programming fundamentals and a first working project, long before final year makes it urgent.' },
    { no: '02', icon: 'career', title: 'Graduates & Job Seekers', text: 'Convert a degree into a hireable skill set, with interview preparation attached to the training rather than sold after it.' },
    { no: '03', icon: 'code', title: 'Engineering & IT Students', text: 'Industrial training, six-week and six-month programmes, internship letters and the project work universities ask for.' },
    { no: '04', icon: 'mentor', title: 'Working Professionals', text: 'Evening and weekend batches for people upgrading a stack while holding a full-time job.' },
    { no: '05', icon: 'spark', title: 'Career Switchers', text: 'A structured route into technology from a non-technical background, starting from genuine zero.' },
    { no: '06', icon: 'rocket', title: 'Entrepreneurs & Freelancers', text: 'The practical skills to build, market and run your own digital work without hiring it all out.' }
  ]
}

/* §7 — the four movements ---------------------------------------- */
export const PATH = {
  eyebrow: 'From learning to practical experience',
  words: ['Learn', 'Practice', 'Build', 'Grow'],
  steps: [
    { no: '01', icon: 'curriculum', title: 'Learn', text: 'Concepts taught from fundamentals, in a sequence built for people who have not seen them before.' },
    { no: '02', icon: 'terminal', title: 'Practice', text: 'Daily lab work on real tools, with a mentor close enough to catch the habits that turn into bugs.' },
    { no: '03', icon: 'stack', title: 'Build', text: 'Live projects and case studies that hold together end to end and survive being questioned.' },
    { no: '04', icon: 'career', title: 'Grow', text: 'Portfolio, interview practice and placement support, then the habit of upgrading long after the batch ends.' }
  ],
  note: 'This practical framework is followed across every course, from beginner offerings through advanced specialisations.'
}

/* §8 — the difference -------------------------------------------- */
export const EDGE = {
  eyebrow: 'The difference',
  title: 'What makes techcadd different?',
  cards: [
    { icon: 'curriculum', title: 'Industry-Oriented Curriculum', text: 'Training designed around what employers hire for, revised when the stack underneath it moves.' },
    { icon: 'terminal', title: 'Hands-On Learning', text: 'Practical exposure through lab work, live coding and problem solving rather than passive lectures.' },
    { icon: 'spark', title: 'Emerging Technology Programs', text: 'Artificial intelligence, machine learning, generative AI, cloud and cybersecurity taught as first-class tracks.' },
    { icon: 'stack', title: 'Projects & Industrial Exposure', text: 'Application-based projects and industrial training that put classroom work under real constraints.' },
    { icon: 'mentor', title: 'Experienced Trainers & Mentors', text: 'Guidance from people who have shipped production software and can explain why the textbook answer breaks.' },
    { icon: 'compass', title: 'Career Guidance', text: 'Direction on which track fits your degree, your schedule and the job you are actually aiming at.' },
    { icon: 'support', title: 'Placement Assistance', text: 'Resume building, interview preparation and hiring support that stays open until you are placed.' },
    { icon: 'server', title: 'Modern Learning Infrastructure', text: 'Equipped labs, current software and a campus set up for the way development work is really done.' },
    { icon: 'globe', title: 'Industry & Academic Engagement', text: 'Ongoing collaboration with colleges, universities and technology partners across the region.' }
  ]
}

/* §9 — what we teach --------------------------------------------- */
export const DOMAINS = {
  eyebrow: 'What we teach',
  title: 'Building skills across technology domains',
  lead:
    'Four families of skills, taught to the same standard. Most learners start in one and pick up a second before they finish. Every line below opens the course behind it.',
  towers: [
    {
      key: 'technology',
      title: 'Technology',
      items: [
        { label: 'Artificial Intelligence', slug: 'artificial-intelligence' },
        { label: 'Machine Learning', slug: 'machine-learning' },
        { label: 'Deep Learning', slug: 'deep-learning' },
        { label: 'Data Science', slug: 'data-science' },
        { label: 'Data Analytics', slug: 'data-analytics' },
        { label: 'Cyber Security', slug: 'cybersecurity' },
        { label: 'Cloud Computing', slug: 'cloud-computing' }
      ]
    },
    {
      key: 'development',
      title: 'Development',
      items: [
        { label: 'Python', slug: 'python' },
        { label: 'Java', slug: 'java' },
        { label: 'C & C++', slug: 'c-cpp' },
        { label: 'Web Designing', slug: 'web-designing' },
        { label: 'Web Development', slug: 'web-development' },
        { label: 'MERN Stack', slug: 'mern-stack' },
        { label: 'MEAN Stack', slug: 'mean-stack' }
      ]
    },
    {
      key: 'creative',
      title: 'Digital & Creative',
      items: [
        { label: 'Digital Marketing', slug: 'digital-marketing' },
        { label: 'Search Engine Optimisation', slug: 'seo' },
        { label: 'Social Media Marketing', slug: 'social-media-marketing' },
        { label: 'Google Ads', slug: 'google-ads' },
        { label: 'WordPress', slug: 'wordpress' },
        { label: 'Shopify', slug: 'shopify' }
      ]
    },
    {
      key: 'technical',
      title: 'Professional & Technical Skills',
      items: [
        { label: 'AutoCAD', slug: 'autocad' },
        { label: 'SolidWorks', slug: 'solidworks' },
        { label: 'Revit', slug: 'revit' },
        { label: '3ds Max', slug: '3ds-max' },
        { label: 'Power BI', slug: 'power-bi' },
        { label: 'Tableau', slug: 'tableau' }
      ]
    }
  ]
}

/* §10 — our approach --------------------------------------------- */
export const APPROACH = {
  eyebrow: 'Our approach',
  lines: ['Practical. Future-', 'Focused. '],
  accent: 'Career-Oriented.',
  lead: 'Three tests every module has to pass before it reaches a classroom.',
  pillars: [
    { no: '01', icon: 'target', title: 'Relevance', text: 'Learning aligned with skills that current industry and hiring requirements genuinely ask for.' },
    { no: '02', icon: 'terminal', title: 'Application', text: 'Concepts reinforced through projects, exercises and hands-on work until they hold without notes.' },
    { no: '03', icon: 'growth', title: 'Growth', text: 'A mindset and a skill base that keep developing after the batch — because the stack will move again.' }
  ]
}

/* §11 — industry connection -------------------------------------- */
export const INDUSTRY = {
  eyebrow: 'Industry connection',
  title: 'Connecting education with industry',
  body: [
    'A large part of what makes training count is the engagement with educational institutions and industry-oriented initiatives. Public sessions, workshops and technology awareness programmes bring current practice into the classroom and take classroom questions back out.',
    'These interactions keep the training aligned with what the market is doing, and give learners something to walk into a room with.'
  ],
  activities: [
    { icon: 'mentor', label: 'Guest sessions & expert talks' },
    { icon: 'stack', label: 'Workshops and skill camps' },
    { icon: 'career', label: 'Campus & hiring drives' },
    { icon: 'globe', label: 'College collaboration programmes' }
  ],
  photo: { src: '/mentoring.webp', file: 'photos/mentoring.jpg', alt: 'An industry session in progress at techcadd' }
}

/* §12 — recognition · §13 — the decade --------------------------- */
export const RECOGNITION = {
  eyebrow: 'Awards, recognition & achievements',
  title: 'Recognition built through learning, innovation and industry engagement',
  lead:
    'Credibility here is established through consistent delivery, institutional participation and a documented quality process.',
  items: [
    { icon: 'shield', title: 'ISO 9001 Certified', text: 'Training and operations run against a documented quality management standard.' },
    { icon: 'globe', title: 'Industry-Academia Engagement', text: 'Active participation in institutional programmes, campus initiatives and technology awareness sessions.' },
    { icon: 'student', title: 'Academic Collaboration', text: 'Working with colleges and universities on industrial training, internships and project mentoring.' },
    { icon: 'spark', title: 'Technology & Innovation Initiatives', text: 'Early adoption of emerging technology tracks so learners meet them before the market demands them.' }
  ],
  note: 'Recognition reflects sustained work in training and skill development — not a one-time award.'
}

export const DECADE = {
  eyebrow: 'The long view',
  title: 'A decade of building careers',
  text:
    'What began as a single classroom has evolved into a technology-focused training ecosystem with an established set of courses and practical learning initiatives — and the same happy ending each time: someone walks into a job they could not have applied for a year earlier.',
  stats: [
    { to: 15, suffix: '+', label: 'Years of practice' },
    { to: 40, suffix: '+', label: 'Hiring partners' },
    { to: 15, suffix: 'K+', label: 'Careers started' }
  ]
}

/* The team row. Transparent cut-outs from public/about/cutouts/, each
   standing on the section floor with its name and role above and a
   dashed arrow pointing down at the person; the area shows on hover.

   Names, roles, areas, order and copy are taken from the same section
   on techcaddmohali.com/founder, which uses these exact image files
   (richi-mam.png is Harrachneet Kaur). Like that page, the row leaves
   out the founder, who has a page of his own. */
export const TEAM = {
  eyebrow: 'Core Pillars & Leadership',
  title: 'The core pillars & leadership team',
  accent: 'who built and develop techcadd.',
  lead: 'Working alongside Founder Mr. Gourav Gupta, these are the co-founders, technical directors and branch heads who form the backbone of techcadd — from institutional governance and industry-grade curriculum to expanding campuses across Punjab.',
  members: [
    { name: 'Shilpa Gupta', role: 'Co-founder techcadd', area: 'Operations & Governance', photo: '/about/cutouts/shilpa-mam.png' },
    { name: 'Asmita Sehgal', role: 'Sr. Manager', area: 'Academic Operations', photo: '/about/cutouts/asmita-mam.png' },
    { name: 'Sandeep', role: 'Co-founder IAM', area: 'Cloud Systems & IAM', photo: '/about/cutouts/sandeep-sir.png' },
    { name: 'Amit Sharma', role: 'IT Technical Head', area: 'Information Technology', photo: '/about/cutouts/amit-sir.png' },
    { name: 'Harrachneet Kaur', role: 'Sr. Relationship Manager', area: 'Institutional Partnerships', photo: '/about/cutouts/richi-mam.png' },
    { name: 'Alam', role: 'techcadd Amritsar Franchise Owner', area: 'techcadd Amritsar', photo: '/about/cutouts/alam-sir.png' },
    { name: 'Tanisha', role: 'Finance & Accounts Head', area: 'Finance & Operations', photo: '/about/cutouts/tanisha-mam.png' },
    { name: 'Daljeet', role: 'techcadd Ludhiana Franchise Owner', area: 'techcadd Ludhiana', photo: '/about/cutouts/daljeet-sir.png' },
    { name: 'Anita', role: 'Branch Head Jalandhar IAM', area: 'techcadd Jalandhar', photo: '/about/cutouts/anita-mam.png' },
    { name: 'Shiv', role: 'Sr. AI Engineer', area: 'Artificial Intelligence', photo: '/about/cutouts/shiv-sir.png' },
    { name: 'Aman', role: 'Data Scientist', area: 'Data Science & Analytics', photo: '/about/cutouts/aman-sir.png' }
  ]
}

/* §14 — our belief ----------------------------------------------- */
export const BELIEF = {
  eyebrow: 'Our belief',
  lines: ['Technology changes.', 'Skills evolve.'],
  accent: 'Learning never stops.',
  body: [
    'We believe that meaningful technology education should not end when a course ends.',
    'It should give learners the knowledge to understand, the skills to apply and the confidence to keep going as the industry moves.'
  ],
  card: {
    words: ['Learn.', 'Implement.', 'Grow.'],
    text:
      'With a focus on practical technology education, emerging skills, industry engagement and career development, techcadd continues its journey towards creating a stronger ecosystem of future-ready technology professionals.',
    by: 'techcadd'
  }
}

/* §15 — the invitation ------------------------------------------- */
export const CTA = {
  eyebrow: 'Ready to get started?',
  title: 'Start building your career today.',
  lead:
    'Talk to a counsellor today. One call is usually enough to know which track fits your degree, your schedule and the job you want.',
  phoneDisplay: '+91 98881 22667',
  phoneDial: '+919888122667',
  inbox: 'info@techcadd.com',
  assurances: ['Free career counselling', 'No registration fee', 'Placement support included']
}
