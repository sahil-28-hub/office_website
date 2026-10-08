/* ==================================================================
   College Partnerships — every word on the page.

   Linked from the Resources menu. The audience here is a training and
   placement officer or a head of department, not a student, so the
   page answers institutional questions: what is run, who runs it,
   what the college has to provide, and what the paperwork looks like.

   The partner names in PT_PARTNERS are PLACEHOLDERS describing the
   kind of institution we work with — replace them with real, agreed
   partner names before this goes live.
================================================================== */

import { PHONE_DISPLAY, PHONE_DIAL, INBOX } from './contact'

export const PT_HERO = {
  eyebrow: 'College partnerships',
  title: 'Industry training,',
  accent: 'run on your campus.',
  lead:
    'We work with colleges and universities across Punjab on industrial training, workshops, faculty development and campus-wide skill programmes — delivered to the same standard as our own batches.',
  image: '/gallery/2.png',
  stats: [
    { to: 40, suffix: '+', label: 'Institutions worked with' },
    { to: 15, suffix: 'K+', label: 'Students trained' },
    { to: 20, suffix: '+', label: 'Tracks available' },
    { to: 10, suffix: ' days', label: 'Typical setup time' }
  ],
  actions: [
    { label: 'Start a conversation', href: '/contact' },
    { label: 'Call the college desk', href: `tel:${PHONE_DIAL}`, kind: 'ghost', icon: 'phone' }
  ]
}

export const PT_WHY = {
  eyebrow: 'Why colleges call us',
  title: 'The gap between the syllabus',
  accent: 'and the hiring bar.',
  body: [
    'University curricula are revised on a cycle measured in years. The stacks employers interview on move faster than that, and the gap lands on the placement cell rather than on the syllabus committee.',
    'A partnership closes that gap without touching the degree. Students keep their academic programme and add the practical layer alongside it — the tooling, the project work and the interview practice that campus drives actually test for.'
  ],
  points: [
    { icon: 'career', title: 'Better placement outcomes', text: 'Students arrive at drives with deployed projects they can defend, rather than with coursework they cannot open.' },
    { icon: 'curriculum', title: 'Current tooling, taught properly', text: 'AI, cloud, cybersecurity and full-stack tracks kept level with what the industry is hiring for this year.' },
    { icon: 'mentor', title: 'Faculty development', text: 'Sessions for teaching staff on the same stacks, so the capability stays on your campus after we leave.' },
    { icon: 'shield', title: 'Compliance handled', text: 'Attendance records, training letters, certificates and project documentation in the formats your university requires.' }
  ]
}

export const PT_PROGRAMMES = {
  eyebrow: 'What we run',
  title: 'Five formats, one standard',
  lead:
    'Every format below is delivered by the same trainers who take our own batches, with the same insistence that each module ends in something that runs.',
  formats: [
    {
      no: '01',
      icon: 'curriculum',
      title: 'Industrial training',
      text: 'The 45-day, six-week, four-month and six-month formats universities mandate, ending with a live project and a training letter.',
      points: ['Summer & winter cycles', 'Live project per student', 'Certificates and letters']
    },
    {
      no: '02',
      icon: 'spark',
      title: 'Workshops & bootcamps',
      text: 'One to five day intensives on a single subject — generative AI, cloud, ethical hacking, data visualisation — for a whole year group at once.',
      points: ['On campus or online', 'Hands-on throughout', '50 to 300 students']
    },
    {
      no: '03',
      icon: 'mentor',
      title: 'Faculty development programmes',
      text: 'Structured upskilling for teaching staff on the tracks your department wants to strengthen, with material they keep.',
      points: ['One to two weeks', 'Teaching material included', 'Certification for participants']
    },
    {
      no: '04',
      icon: 'stack',
      title: 'Semester-long skill tracks',
      text: 'A weekly practical track running alongside the degree for an entire semester, aligned to placement season.',
      points: ['Weekly cadence', 'Progress reporting', 'Placement-timed finish']
    },
    {
      no: '05',
      icon: 'career',
      title: 'Placement readiness',
      text: 'Resume clinics, portfolio reviews, aptitude practice and mock technical interviews ahead of the drive calendar.',
      points: ['Mock interview panels', 'Portfolio reviews', 'Drive-cycle scheduling']
    }
  ]
}

export const PT_PROCESS = {
  eyebrow: 'How it works',
  title: 'From first call to first class',
  lead: 'Five steps, usually inside a fortnight.',
  steps: [
    { tag: 'Step 01', title: 'A conversation', text: 'Twenty minutes with the college desk on your streams, student numbers, semester calendar and what the placement cell is struggling with.' },
    { tag: 'Step 02', title: 'A proposal', text: 'A written plan: tracks, hours, delivery mode, trainer profiles, deliverables per student and costs. Nothing hidden for later.' },
    { tag: 'Step 03', title: 'Alignment', text: 'The plan is fitted to your academic calendar and any university requirements on attendance, assessment or documentation.' },
    { tag: 'Step 04', title: 'Delivery', text: 'Trainers on your campus or online, labs configured, and a single point of contact for the department throughout.' },
    { tag: 'Step 05', title: 'Handover', text: 'Certificates, training letters, project documentation and an outcome report for the placement cell.' }
  ]
}

export const PT_NEEDS = {
  eyebrow: 'What each side brings',
  title: 'No surprises on either side',
  ours: {
    title: 'techcadd provides',
    items: [
      'Trainers with production experience on the track',
      'Course material, lab setup and project briefs',
      'Assessment, certificates and training letters',
      'A named coordinator for the department',
      'Outcome reporting at the end of the programme'
    ]
  },
  yours: {
    title: 'The college provides',
    items: [
      'A lab or classroom with power and network',
      'Student lists and the semester calendar',
      'A faculty coordinator to liaise with ours',
      'Any university-specific documentation formats',
      'Attendance policy for the programme'
    ]
  }
}

/* PLACEHOLDER partner names — descriptive of the kind of institution
   we work with. Replace with real, agreed names. */
export const PT_PARTNERS = {
  eyebrow: 'Who we work with',
  title: 'Institutions across the region',
  lead:
    'Engineering colleges, polytechnics, universities and management institutes — from single workshops to semester-long tracks.',
  partners: [
    { id: 'p1', label: 'Engineering Colleges', note: 'CSE · IT · ECE' },
    { id: 'p2', label: 'Polytechnic Institutes', note: 'Diploma streams' },
    { id: 'p3', label: 'State Universities', note: 'Multi-department' },
    { id: 'p4', label: 'Management Institutes', note: 'Analytics · Marketing' },
    { id: 'p5', label: 'Degree Colleges', note: 'BCA · BSc IT' },
    { id: 'p6', label: 'Design Schools', note: 'CAD · Visualisation' },
    { id: 'p7', label: 'Placement Cells', note: 'Drive readiness' },
    { id: 'p8', label: 'Skill Development Centres', note: 'Government schemes' }
  ]
}

export const PT_DESK = {
  eyebrow: 'The college desk',
  title: 'One number, one inbox',
  lead:
    'Institutional enquiries do not go through the student queue. The college desk handles proposals, scheduling and paperwork.',
  rows: [
    { k: 'Desk', v: 'College Support' },
    { k: 'Phone', v: PHONE_DISPLAY },
    { k: 'Email', v: INBOX },
    { k: 'Campus', v: 'Ludhiana, Punjab' },
    { k: 'Response', v: 'Same working day' }
  ]
}

export const PT_CTA = {
  eyebrow: 'Start here',
  title: 'Tell us what your students need',
  lead:
    'Send the streams, the numbers and the semester window. You will have a written proposal to take to your head of department, not a sales call.',
  primary: { label: 'Send a partnership enquiry', href: '/contact', icon: 'mail' },
  secondary: { label: `Call ${PHONE_DISPLAY}`, href: `tel:${PHONE_DIAL}`, icon: 'phone' },
  note: 'techcadd Computer Education · Ludhiana, Punjab'
}
