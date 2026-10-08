/* ==================================================================
   Mission and Vision — every word on the page.

   Same arrangement as src/data/aboutPage.js: the sections stay
   presentational and read from here, so copy can be corrected
   without touching layout or motion. Figures that animate are stored
   split — `to` counts up, `suffix` prints as-is.
================================================================== */

export const MV_HERO = {
  eyebrow: 'Mission and Vision',
  title: 'Why this campus',
  accent: 'exists.',
  lead:
    'A statement of intent, written plainly. What techcadd is here to do, where it is going, and the standards it holds itself to while getting there.',
  image: '/gallery/4.png',
  facts: [
    { k: 'Founded', v: 'Ludhiana, 2016' },
    { k: 'Guiding idea', v: 'Skills over certificates' },
    { k: 'Measured by', v: 'Where learners end up' }
  ]
}

/* the scroll-lit statement. Words in *asterisks* take the accent. */
export const MV_STATEMENT = {
  eyebrow: 'Our mission',
  text:
    'To make practical technology skills *reachable* for every learner who wants them — taught by people who have built real systems, practised until they are second nature, and pointed at *work* rather than at a certificate.',
  body: [
    'Most training fails quietly. The syllabus is delivered, the certificate is printed, and the learner discovers months later that nothing they were taught survives contact with a real codebase.',
    'Our mission is the opposite of that. Every module ends in something built. Every batch is small enough for a trainer to know where each person is stuck. Every course is judged by one question only: can the learner do the work now?'
  ],
  pledges: [
    { icon: 'terminal', title: 'Teach by building', text: 'Nothing is taught in the abstract when it can be taught with a keyboard under the learner’s hands.' },
    { icon: 'mentor', title: 'Keep batches small', text: 'A trainer who cannot name where each learner is struggling is running a broadcast, not a class.' },
    { icon: 'curriculum', title: 'Revise the syllabus', text: 'When the stack underneath a course moves, the course moves with it — not two intakes later.' },
    { icon: 'career', title: 'Finish at the interview', text: 'Training that stops before the portfolio, the mock interview and the referral has stopped halfway.' }
  ]
}

export const MV_VISION = {
  eyebrow: 'Our vision',
  title: 'A region where talent is',
  accent: 'never the bottleneck.',
  body: [
    'Punjab does not lack ability. It lacks the bridge between a degree and the work the industry is actually hiring for — and that bridge is what we are here to build, one batch at a time.',
    'We want a graduate from Ludhiana to walk into an interview anywhere and be judged on what they have built, not on which city their college happens to be in.'
  ],
  horizons: [
    {
      tag: 'Near term',
      title: 'Every course ends in shipped work',
      text: 'A portfolio that is deployed, versioned and defensible — for every learner, on every track, without exception.'
    },
    {
      tag: 'Next',
      title: 'Emerging tech taught the year it emerges',
      text: 'Generative AI, agentic systems, cloud-native tooling and applied security taught while they are current, not once they are safe.'
    },
    {
      tag: 'Onward',
      title: 'A campus companies recruit from directly',
      text: 'Hiring partners who come to the batch because the standard of the work is already known to them.'
    },
    {
      tag: 'Always',
      title: 'Learning that outlives the batch',
      text: 'Alumni who keep upgrading long after the certificate, because the habit was taught alongside the technology.'
    }
  ]
}

export const MV_VALUES = {
  eyebrow: 'What we hold to',
  title: 'Six standards we do not negotiate',
  lead:
    'Values are only worth writing down if they cost something to keep. These do — they decide what we teach, who teaches it, and what we decline to sell.',
  values: [
    { no: '01', icon: 'compass', title: 'Honesty about outcomes', text: 'We offer placement assistance and we say so plainly. Anyone guaranteeing you a job is selling something else.' },
    { no: '02', icon: 'terminal', title: 'Practice over theory', text: 'A concept explained is half taught. It is finished when the learner has used it, broken it and fixed it.' },
    { no: '03', icon: 'student', title: 'Start from genuine zero', text: 'Foundation modules assume nothing. Nobody is quietly left behind because the first week moved too fast.' },
    { no: '04', icon: 'spark', title: 'Stay current, deliberately', text: 'Courses are rewritten when the industry moves. An outdated syllabus is a broken promise with good formatting.' },
    { no: '05', icon: 'support', title: 'Support beyond class hours', text: 'The doubt that shows up at 9pm is the one that decides whether a concept sticks. Someone answers it.' },
    { no: '06', icon: 'shield', title: 'Respect for the fee paid', text: 'Every rupee is somebody’s family making a decision. That is treated as the responsibility it is.' }
  ]
}

export const MV_MEASURE = {
  eyebrow: 'How we keep ourselves honest',
  title: 'The numbers we actually watch',
  lead:
    'Enrolment is easy to grow and tells you nothing. These are the figures reviewed at the end of every batch.',
  stats: [
    { to: 15, suffix: 'K+', label: 'Learners trained since 2016' },
    { to: 120, suffix: '+', label: 'Courses and programmes' },
    { to: 98, suffix: '%', label: 'Learner satisfaction' },
    { to: 20, suffix: ':1', label: 'Typical batch size, at most' }
  ],
  rows: [
    { k: 'Projects shipped per learner', v: 'Six, minimum' },
    { k: 'Trainers from industry', v: 'Every core track' },
    { k: 'Doubt support', v: 'Outside class hours' },
    { k: 'Syllabus review', v: 'Every intake' },
    { k: 'Modes offered', v: 'Classroom · Online · Weekend' }
  ]
}

export const MV_CTA = {
  eyebrow: 'Where this leads',
  title: 'Read the mission, then come and test it',
  lead:
    'Sit through a live session before you commit to anything. A statement of intent is worth exactly as much as the class it produces.',
  primary: { label: 'Book a free demo class', href: '#demo' },
  secondary: { label: 'Talk to the team', href: '/contact', icon: 'chat' },
  note: 'techcadd Computer Education · Ludhiana, Punjab'
}
