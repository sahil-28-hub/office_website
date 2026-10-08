/* ==================================================================
   Long-form copy for the 4 Months Training page.

   Source: the supplied "techcadd Ludhiana — Training Format Pages"
   document, section 02. Built to that document's five-section
   template:

     Course Overview → What You Will Learn → Who Can Join
       → Why This Course → Future Scope

   Same conventions as ./industrial-training-copy.js — see the header
   there. Terms the page targets are marked **like this**; sections
   declare the `slot` they mount into; tones alternate so no two
   neighbouring sections share a background.

   House rules kept from the source document: brand spelling is
   "techcadd", and no placement percentage, salary range or package
   figure appears anywhere on this page. The source is explicit that a
   job is not guaranteed, and the FAQ below says so in those words.
================================================================== */

export const FM_OVERVIEW = {
  title: 'Four months is where a skill actually forms',
  lead: 'Four months is where training stops being an introduction and becomes a skill. You learn a **full technology stack**, build a live project, and prepare for interviews.',
  body: [
    'The difference between a short track and this one is not extra syllabus — it is time to make mistakes, fix them and repeat until the thing is actually yours. You learn a full stack module by module, and by month four you are explaining your own decisions in a review rather than following steps.',
    'The programme ends with **one live project** built end to end from a real brief with real requirements, documented so it survives an interview. Portfolio, resume and mock interview rounds are part of the course rather than something bolted on at the end.'
  ]
}

/* ---------------------------------------------------------------- */

/* §2 — What You Will Learn. Four monthly stages, each building on the
   last, exactly as the source document sets them out. */
const CURRICULUM = {
  id: 'fourmo-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  /* Not "what you will learn" — the roadmap above already carries
     that eyebrow, and two headings running with the same label reads
     as a page assembled twice. */
  eyebrow: 'Month by month',
  title: 'How the four months are structured',
  lead: 'Four monthly stages, each building on the last. The module list depends on the track you choose, and the full syllabus is shared before you enrol.',
  items: [
    {
      title: 'Month 1 — Fundamentals and environment',
      text: 'Core concepts of the stack and a full development environment set up on your own machine. The outcome is plain: **you can work independently in the toolset** by the end of the month.'
    },
    {
      title: 'Month 2 — Core modules and daily builds',
      text: 'The essential working components of the technology, locked in through repetition rather than covered once. Multiple small builds are completed and reviewed, with corrections explained rather than just marked.'
    },
    {
      title: 'Month 3 — Advanced modules and integration',
      text: 'Advanced features of the stack, and the point at which separate pieces start connecting into full features. You build without step-by-step instruction and learn to justify the structure you chose.'
    },
    {
      title: 'Month 4 — Live project and career preparation',
      text: 'One complete project, documented and presented, alongside resume work, portfolio assembly and mock interview rounds. You finish with something an interviewer can open and question you on.'
    }
  ]
}

/* ---------------------------------------------------------------- */

/* §3 — Who Can Join. */
export const FM_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who four months training is for',
  lead: 'None of these require prior practical experience. **The first month exists to remove that gap.**',
  groups: [
    {
      icon: 'career',
      title: 'Final year students',
      text: 'You want a portfolio ready before campus placement season starts, rather than a list of course names to read out.',
      tag: 'Before placements'
    },
    {
      icon: 'curriculum',
      title: 'Graduates with no practical skill',
      text: 'The degree is done and nothing on the resume shows actual work. Four months produces the project, the portfolio and the interview practice.',
      tag: 'Degree done'
    },
    {
      icon: 'clock',
      title: 'Working people switching into IT',
      text: 'Weekend batches run the same modules and the same project requirement as the regular batch — the weekly hours are arranged differently, the standard is not.',
      tag: 'Weekend batch'
    },
    {
      icon: 'stack',
      title: 'Students who did a short training',
      text: 'You have seen the basics and now want real depth in one direction instead of a second tour of the same ground.',
      tag: 'Going deeper'
    },
    {
      icon: 'terminal',
      title: 'Self taught learners',
      text: 'You learned alone from videos and never finished anything properly. This is the track with a deadline, a reviewer and a finished deliverable at the end.',
      tag: 'Finish something'
    },
    {
      icon: 'spark',
      title: 'Career restarters',
      text: 'Returning after a break and rebuilding a skill from a clean base, without being assumed to remember what you last used years ago.',
      tag: 'Clean restart'
    }
  ]
}

/* ---------------------------------------------------------------- */

/* Fills the standard "why this course" block rather than sitting as
   a narrative section beneath it. The factory writes six generic
   reasons from the subject name; these are the six this programme
   actually has. See the `seed.benefits` override in ./shared.js. */
export const FM_BENEFITS = [
  {
    no: '01',
    icon: 'stack',
    title: 'Depth, not coverage',
    text: 'Long enough to repeat things until they are actually yours, rather than long enough to mention more of them.'
  },
  {
    no: '02',
    icon: 'code',
    title: 'A live project',
    text: 'A real brief with real requirements, documented so it survives an interview instead of falling apart under the second question.'
  },
  {
    no: '03',
    icon: 'mentor',
    title: 'A defended project',
    text: 'By month four you are explaining your decisions in a review, not following steps written by somebody else.'
  },
  {
    no: '04',
    icon: 'career',
    title: 'Portfolio and resume',
    text: 'Screenshots, code and a written case study, with a resume built around the work rather than around the course title.'
  },
  {
    no: '05',
    icon: 'spark',
    title: 'Interview preparation',
    text: 'Mock interview rounds and technical question practice before you face the real one, so the real one is not the first time.'
  },
  {
    no: '06',
    icon: 'support',
    title: 'Placement assistance',
    text: 'Interview referrals and support through the techcadd network across Punjab. Assistance, not a guarantee — see the FAQ below.'
  }
]

/* §5 — Future Scope. */
/* The source document's Future Scope section is not repeated here.
   The seed already carries a hand-written `future` block for this
   programme, and a second Future Scope heading underneath it simply
   said the same thing twice. */

export const FM_NARRATIVE = [CURRICULUM]

/* ---------------------------------------------------------------- */

export const FM_FAQS = [
  {
    q: 'What is the difference between short term and four months training?',
    a: 'Short term covers one technology at basic working level and ends with a mini project. Four months covers the full stack around that technology and ends with a live project, a portfolio and interview preparation.'
  },
  {
    q: 'Do I get a live project or a practice project?',
    a: 'A live project. You work on a real brief with real requirements, then document it so it can be shown and explained in an interview.'
  },
  {
    q: 'I am working full time. Can I still do it?',
    a: 'Yes. Weekend batches run for working professionals, with the same modules and the same project requirement as weekday batches.'
  },
  {
    q: 'Is a job guaranteed after four months?',
    a: 'No. We provide placement assistance: resume preparation, mock interviews and interview referrals. We do not promise a guaranteed job or a fixed package.'
  }
]
