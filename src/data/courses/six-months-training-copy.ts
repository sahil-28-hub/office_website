/* ==================================================================
   Long-form copy for the 6 Months Training page.

   Source: the supplied "techcadd Ludhiana — 6 Weeks Training, 6
   Months Training, Internship Program" document, section 02.

   Same five-section template and same conventions as its siblings —
   see ./industrial-training-copy.js for the pattern, and
   ./six-weeks-training-copy.js for the shorter track this one is the
   step up from.

   House rules kept from the source document: brand spelling is
   "techcadd", and no placement percentage, salary range or package
   figure appears anywhere. The source is emphatic that placement is
   not guaranteed and says so in its own words; the honesty block and
   the FAQ below both keep that.
================================================================== */

export const SM_OVERVIEW = {
  title: '6 Months Training in Ludhiana',
  lead: 'Our deepest classroom track: six months covering a **full technology stack**, a chosen specialisation, two projects, portfolio documentation and structured interview preparation at the Ludhiana centre.',
  body: [
    'The difference between four months and six is not extra syllabus. It is room to build something, find out what you got wrong, and rebuild it properly — which is the part that actually turns a syllabus into a skill.',
    'You build **two projects**: the first by following, the second by deciding. In month five you choose a specialisation with your trainer, based on where you performed strongest and which roles you want to target. The final month is the second project plus resume, LinkedIn, mock interviews and placement assistance.'
  ]
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'sixmo-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  /* Not "what you will learn" — see the note on the 4 Months page.
     The roadmap above answers that; this answers how the six months
     are divided. */
  eyebrow: 'Month by month',
  title: 'How the six months are divided',
  lead: 'Six monthly modules. The module list depends on the stack you choose, and the full syllabus is shared before you enrol.',
  items: [
    {
      title: 'Module 1 — Fundamentals and environment (Month 1)',
      text: 'Core concepts of the stack, taught from zero, with a full development environment set up and used independently. Daily practice continues until you can work in the toolset without help.'
    },
    {
      title: 'Module 2 — Core modules (Month 2)',
      text: 'The essential working components of the technology, with daily builds and concepts locked in through repetition. Submitted work is reviewed regularly and corrections are explained rather than just marked.'
    },
    {
      title: 'Module 3 — Advanced modules (Month 3)',
      text: 'Advanced features of the stack, built as full features without step-by-step instruction. Debugging, structure and **code or design decisions you can justify** are the point of this month.'
    },
    {
      title: 'Module 4 — Project one (Month 4)',
      text: 'Your first complete project, built end to end, through a review, correction and resubmission cycle. Documentation covers what you built and why you built it that way.'
    },
    {
      title: 'Module 5 — Specialisation (Month 5)',
      text: 'One chosen area of the stack taken to real depth, selected with your trainer based on performance and target roles. Advanced practice work happens in that area only.'
    },
    {
      title: 'Module 6 — Project two and career preparation (Month 6)',
      text: 'A second project, decided and structured by you, with portfolio, case studies and your specific contribution recorded. Resume, LinkedIn profile, mock interviews and technical question practice run alongside it.'
    }
  ]
}

/* ---------------------------------------------------------------- */

export const SM_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Six kinds of students who take the 6 month track',
  lead: 'Nobody on this list needs prior knowledge of the stack they choose.',
  groups: [
    {
      icon: 'curriculum',
      title: 'Final year students with a training or project semester',
      text: 'Your degree includes a six-month training or project requirement. The track already produces documented, reviewed project work, so it covers both.',
      tag: 'Covers both'
    },
    {
      icon: 'career',
      title: 'Graduates with a degree and nothing practical to show',
      text: 'You have the qualification but no projects, no portfolio and no interview practice. Six months produces all three.',
      tag: 'Builds the evidence'
    },
    {
      icon: 'spark',
      title: 'Career changers from non-IT backgrounds',
      text: 'You are competing against people with technical degrees, so the answer is depth and evidence rather than a short certificate.',
      tag: 'Depth over certificates'
    },
    {
      icon: 'chart',
      title: 'Students from Ludhiana business families',
      text: 'Hosiery, auto components, agricultural machinery and export houses increasingly need web, data and automation work in-house. Tell the counsellor and month five can be pointed straight at the family business.',
      tag: 'Local relevance'
    },
    {
      icon: 'stack',
      title: 'Students who did a short training earlier',
      text: 'You know a little about a lot and want to stop. This is the track that goes deep in one direction instead of wide in five.',
      tag: 'One direction'
    },
    {
      icon: 'clock',
      title: 'Working candidates who can only study on weekends',
      text: 'Weekend batches cover the same modules and the same two-project requirement, arranged over different weekly hours. The timeline stays six months.',
      tag: 'Weekend batch'
    }
  ]
}

/* ---------------------------------------------------------------- */

/* Fills the standard "why this course" block rather than sitting as
   a narrative section beneath it. The factory writes six generic
   reasons from the subject name; these are the six this programme
   actually has. See the `seed.benefits` override in ./shared.js. */
export const SM_BENEFITS = [
  {
    no: '01',
    icon: 'code',
    title: 'The second project',
    text: 'Almost every first project is built by following. The second is built by deciding, and that is the one discussed in interviews.'
  },
  {
    no: '02',
    icon: 'stack',
    title: 'Repetition, not more topics',
    text: 'The difference between four months and six is not extra syllabus. It is room to build, find out what you got wrong, and rebuild properly.'
  },
  {
    no: '03',
    icon: 'spark',
    title: 'A specialisation you can name',
    text: 'You leave able to demonstrate and defend one area, rather than listing seven technologies you touched once.'
  },
  {
    no: '04',
    icon: 'mentor',
    title: 'Interview preparation measured in weeks',
    text: 'Mock interview rounds, technical question practice and feedback, instead of a rushed final fortnight.'
  },
  {
    no: '05',
    icon: 'career',
    title: 'A portfolio, not a certificate',
    text: 'Two projects with case studies and your specific contribution recorded, plus a resume and LinkedIn profile built around actual work.'
  },
  {
    no: '06',
    icon: 'chart',
    title: 'Local relevance',
    text: 'Ludhiana’s hiring is not only software companies, and month five can be aimed at the industry you are actually going into.'
  }
]

/* The source document's Future Scope section is not repeated here.
   Same reason as the other training pages: the seed's own `future`
   block already answers this, and two Future Scope headings in a row
   read as a page that has been assembled twice. */

const WHAT_IT_WILL_NOT_DO = {
  id: 'sixmo-limits',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Being straight with you',
  title: 'What 6 months will not do',
  lead: 'It will not hand you a job.',
  items: [
    {
      title: 'What it does give you',
      text: 'The skill, the projects, the documentation and the interview practice — and our team helps with placement assistance and referrals.'
    },
    {
      title: 'What is still on you',
      text: 'Turning that into an offer depends on how you perform in the room. **The mock interviews exist so that room is not the first time you face those questions.**'
    }
  ]
}

export const SM_NARRATIVE = [CURRICULUM, WHAT_IT_WILL_NOT_DO]

/* ---------------------------------------------------------------- */

export const SM_FAQS = [
  {
    q: 'What is 6 months training at techcadd Ludhiana?',
    a: 'It is our deepest classroom track. You cover a full technology stack, choose a specialisation, build two projects, and finish with portfolio documentation and structured interview preparation.'
  },
  {
    q: 'Is 6 months training better than 4 months?',
    a: 'It is better if your goal is a job. Four months gets you one project and a portfolio. Six months adds a specialisation, a stronger second project and several dedicated weeks of interview preparation.'
  },
  {
    q: 'Does 6 months training cover my final semester project requirement?',
    a: 'In most cases yes, because the track already produces documented, reviewed project work. Bring your college project guidelines to the counsellor in month one so deliverables are aligned from the start.'
  },
  {
    q: 'Can I choose my own specialisation?',
    a: 'Yes. It is decided with your trainer in month five, based on where you performed strongest and which roles you want to target. It is a conversation, not an allotment.'
  },
  {
    q: 'I am working. Can I do 6 months on weekends?',
    a: 'Yes. Weekend batches run the same modules and the same two-project requirement. The timeline stays six months; the weekly hours are arranged differently.'
  },
  {
    q: 'Does techcadd guarantee placement after 6 months training?',
    a: 'No institute can guarantee placement, and we do not. What we guarantee is placement support — mock interviews, resume and portfolio work, placement assistance and interview referrals from our team.'
  },
  {
    q: 'Do I need a technical background to join?',
    a: 'No. Month one starts from fundamentals and environment setup, and career changers from non-IT backgrounds are a regular part of these batches.'
  }
]
