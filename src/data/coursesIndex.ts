/* ==================================================================
   The course index page.

   The catalogue itself is not repeated here — it is read from the
   course registry (src/data/courses/index.js), so a course added to a
   seed file appears on this page without a second edit. What lives
   here is the page's own copy: the banner, the blurb that introduces
   each category, and the closing bands.
================================================================== */

export const CI_HERO = {
  eyebrow: 'All courses',
  /* the page's h1 — "Computer courses in Ludhiana, in one place." */
  title: 'Computer courses in Ludhiana,',
  accent: 'in one place.',
  lead:
    'Programming, AI and data, digital marketing, cyber and cloud, design and drafting, and the training formats universities ask for. Filter by category or search for the skill you are after.',
  image: '/gallery/7.png',
  stats: [
    { to: 42, suffix: '', label: 'Courses & programmes' },
    { to: 6, suffix: '', label: 'Categories' },
    { to: 6, suffix: '+', label: 'Projects per course' },
    { to: 15, suffix: 'K+', label: 'Learners trained' }
  ]
}

/* Category order and the one-line description each gets above the
   grid. Keys must match the `category` field on the course seeds. */
export const CI_CATEGORIES = [
  { key: 'Programming', blurb: 'Core languages and full-stack engineering' },
  { key: 'AI & Data', blurb: 'Models, analytics and decision intelligence' },
  { key: 'Digital Marketing', blurb: 'Growth, performance and commerce' },
  { key: 'Cyber & Cloud', blurb: 'Secure, resilient infrastructure' },
  { key: 'Graphics & Media', blurb: 'Design, video, animation and product interfaces' },
  { key: 'Office & Accounts', blurb: 'Tally, GST and the Excel an office runs on' },
  { key: 'Civil / Mechanical', blurb: 'Design and drafting for engineering streams' },
  { key: 'Training', blurb: 'Industrial training, internships and university formats' }
]

export const CI_CHOOSE = {
  eyebrow: 'Not sure which one',
  title: 'Pick by where you are,',
  accent: 'not by what sounds impressive.',
  lead:
    'Four honest starting points. If none of them describe you, call the campus and we will tell you which track fits — including when the answer is none of ours.',
  routes: [
    {
      no: '01',
      icon: 'student',
      title: 'Still in college',
      text: 'Start with a language and a first shipped project, then add the training format your university requires in the summer or winter cycle.',
      links: [
        { label: 'Python', href: '/courses/python' },
        { label: 'Web Development', href: '/courses/web-development' },
        { label: '6 Weeks Training', href: '/courses/6-weeks-training' }
      ]
    },
    {
      no: '02',
      icon: 'career',
      title: 'Graduated, job hunting',
      text: 'A four to six month track that ends in a portfolio you can defend, with interview practice attached rather than sold separately.',
      links: [
        { label: 'MERN Stack', href: '/courses/mern-stack' },
        { label: 'Data Science', href: '/courses/data-science' },
        { label: 'Java', href: '/courses/java' }
      ]
    },
    {
      no: '03',
      icon: 'mentor',
      title: 'Working, upgrading',
      text: 'Evening and weekend batches on a single specialisation, aimed at the gap between what you do now and the role you want next.',
      links: [
        { label: 'Generative AI', href: '/courses/generative-ai' },
        { label: 'Cloud Computing', href: '/courses/cloud-computing' },
        { label: 'Power BI', href: '/courses/power-bi' }
      ]
    },
    {
      no: '04',
      icon: 'spark',
      title: 'Switching fields',
      text: 'A structured route in from a non-technical background, starting from genuine zero and paced so the first month does not lose you.',
      links: [
        { label: 'Digital Marketing', href: '/courses/digital-marketing' },
        { label: 'Web Designing', href: '/courses/web-designing' },
        { label: 'Data Analytics', href: '/courses/data-analytics' }
      ]
    }
  ]
}

export const CI_PROMISE = {
  eyebrow: 'What every course includes',
  title: 'The parts that do not change',
  lead:
    'Whichever track you take, these are constant. They are the reason the catalogue can be this wide without the standard moving.',
  items: [
    { icon: 'terminal', title: 'Code in every class', text: 'Practice hours are timetabled, supervised and separate from lecture hours.' },
    { icon: 'stack', title: 'Projects that run', text: 'Every module ends in something built, versioned and deployable — six or more per course.' },
    { icon: 'mentor', title: 'Trainers from industry', text: 'Taught by people who have shipped with the stack, not read about it.' },
    { icon: 'support', title: 'Doubt support after hours', text: 'The question that arrives at nine in the evening still gets answered.' },
    { icon: 'career', title: 'Placement assistance', text: 'Resume reviews, mock interviews and referrals — assistance, honestly described, never a guarantee.' },
    { icon: 'award', title: 'Certification', text: 'Completion certificates, plus separate certification for internships and live projects.' }
  ]
}

export const CI_CTA = {
  eyebrow: 'Next step',
  title: 'Shortlist two, then come and sit in one',
  lead:
    'Pick the two that look closest, book a free demo for both, and choose from the room rather than from the syllabus page.',
  primary: { label: 'Book a free demo class', href: '#demo' },
  secondary: { label: 'Ask a counsellor', href: '/contact', icon: 'chat' },
  note: 'Classroom and live online batches · Ludhiana'
}
