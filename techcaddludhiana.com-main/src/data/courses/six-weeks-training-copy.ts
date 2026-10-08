/* ==================================================================
   Long-form copy for the 6 Weeks Training page.

   Source: the supplied "techcadd Ludhiana — 6 Weeks Training, 6
   Months Training, Internship Program" document, section 01. Built to
   that document's five-section template:

     Course Overview → What You Will Learn → Who Can Join
       → Why This Course → Future Scope

   Split out of training.js for the same reason as the industrial
   training copy — that file seeds six programmes, and this is one
   programme's editorial content. See ./industrial-training-copy.js
   for the pattern this follows.

   Terms the page targets are marked **like this** and RichText renders
   them inside <strong>. See RichText.jsx for the one rule it
   implements.

   Narrative sections declare the `slot` they mount into:

     syllabus  after the roadmap, before "who can join"
     careers   after "where it leads", before the enquiry form

   Tones alternate against the fixed bands around them, so no two
   neighbouring sections share a background.

   House rules kept from the source document: brand spelling is
   "techcadd", and no placement percentage, salary range or package
   figure appears anywhere on this page.
================================================================== */

export const SW_OVERVIEW = {
  title: '6 Weeks Industrial Training in Ludhiana',
  lead: 'Six weeks of hands-on classroom training in one technology at our Ludhiana centre, ending with a mini project, training report and certificate your college accepts.',
  body: [
    'Six weeks is what is actually free once exams end, and this is a full track built for that window rather than a longer course cut down. You pick **one technology** from the techcadd course list, learn it from setup and core concepts, and spend the last fortnight building something small enough to finish and real enough to defend.',
    'Everything runs offline at the Ludhiana centre, in a morning or evening batch chosen at admission. No prior experience is assumed — the first two weeks exist precisely to remove that gap. You leave with **one mini project** and its source files, a written case study, and the training certificate, college-format training report and attendance record your university asks for.'
  ]
}

/* ---------------------------------------------------------------- */

/* §2 — What You Will Learn.

   Four modules across six weeks, which is the structure the source
   document uses for this page. It is deliberately not the week-by-week
   table used on the 4 Months and Industrial Training pages: those come
   from a different source document, and a module is the unit this
   programme was actually written in. */
const CURRICULUM = {
  id: 'sixwk-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  /* Not "what you will learn" — the roadmap directly above already
     carries that eyebrow, and two headings running with the same
     label reads as a page that has been assembled twice. This section
     answers the narrower question the roadmap does not: how the six
     weeks are divided, and what changes between them. */
  eyebrow: 'Module by module',
  title: 'How the six weeks are divided',
  lead: 'Four modules. Your module list comes from the technology you choose, and the counsellor shares the full syllabus before you enrol — but the shape below is the same whichever track you pick.',
  items: [
    {
      title: 'Module 1 — Foundations (Week 1–2)',
      text: 'Core concepts of the chosen technology, taught from zero. Software installation and environment setup happen on your own lab machine rather than being demonstrated on somebody else’s, and every concept is practised the same day it is taught under supervision.'
    },
    {
      title: 'Module 2 — Core Skills (Week 3–4)',
      text: 'The essential toolset of your chosen technology, through guided builds that repeat each concept until you can do it unaided. Every class is trainer demonstration in the first half and lab work in the second — **watching is not the same as doing**.'
    },
    {
      title: 'Module 3 — Application (Week 5)',
      text: 'Guided exercises that combine the earlier modules, then your first independent build without step-by-step instruction. A doubt window before every class closes means nothing carries over into the next day.'
    },
    {
      title: 'Module 4 — Mini Project (Week 6)',
      text: 'One project scoped small enough to finish and real enough to defend, with its documentation and a short written case study. The week ends in a presentation, viva preparation and a final review.'
    }
  ],
  close: 'Saturdays are kept free for revision and project work.'
}

/* ---------------------------------------------------------------- */

/* §3 — Who Can Join.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, because that block asks the same question. */
export const SW_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Six weeks training starts from zero — here is who it fits',
  lead: 'Nobody on this list needs prior knowledge of the technology they choose.',
  groups: [
    {
      icon: 'curriculum',
      title: 'Students with a 6-week university requirement',
      text: 'Your college specifies the duration and the paperwork format. Bring the guidelines to the counsellor and the certificate, report and attendance record are issued to match.',
      tag: 'Meets the requirement'
    },
    {
      icon: 'clock',
      title: 'Second and third year students on a short break',
      text: 'Six weeks is what is actually free once exams end. This is a full track built for that window, not a longer course cut down to fit it.',
      tag: 'Fits the break'
    },
    {
      icon: 'spark',
      title: 'Complete beginners testing a field',
      text: 'You want to know whether coding, design or data suits you before committing four or six months. Six weeks answers that with a finished project rather than a guess.',
      tag: 'Try before you commit'
    },
    {
      icon: 'support',
      title: 'Students commuting from Khanna, Samrala or Doraha',
      text: 'One fixed daily slot, morning or evening, chosen at admission. The schedule is compact on purpose so travel days stay predictable.',
      tag: 'Predictable timings'
    },
    {
      icon: 'terminal',
      title: 'Students attending college during the day',
      text: 'Evening batches run the same syllabus and the same project requirement as the morning batch. Nothing is trimmed because you came after class.',
      tag: 'Evening batch'
    },
    {
      icon: 'career',
      title: 'Graduates who need something documented, fast',
      text: 'A certificate, a project and a case study you can put on a resume, produced in six weeks rather than promised in six months.',
      tag: 'Documented quickly'
    }
  ]
}

/* ---------------------------------------------------------------- */

/* §4 — Why This Course.

   Fills the standard "why this course" block rather than sitting as a
   narrative section beneath it. The factory writes six generic
   reasons from the subject name; these are the six this programme
   actually has, so they replace them. See the `seed.benefits`
   override in ./shared.js. */
export const SW_BENEFITS = [
  {
    no: '01',
    icon: 'clock',
    title: 'Built to fit six real weeks',
    text: 'Fewer topics, covered until they stick. We do not stretch a six-month syllabus thin and call it a course.'
  },
  {
    no: '02',
    icon: 'stack',
    title: 'One technology, not a tour',
    text: 'You leave with working familiarity in one thing instead of vocabulary in five.'
  },
  {
    no: '03',
    icon: 'terminal',
    title: 'Half of every class is lab time',
    text: 'The trainer walks the lab while you build. Watching is not the same as doing, and the timetable is written around that.'
  },
  {
    no: '04',
    icon: 'support',
    title: 'A doubt window before every class closes',
    text: 'Nothing carries over to the next day, which is the single reason six weeks is enough time to reach a working level at all.'
  },
  {
    no: '05',
    icon: 'curriculum',
    title: 'The documents your college actually asks for',
    text: 'Certificate, training report and attendance record, formatted for submission and backed by viva preparation.'
  },
  {
    no: '06',
    icon: 'career',
    title: 'Credit carries forward',
    text: 'Continue into a 4 or 6 month track and the topics you have already covered are not restarted from zero.'
  }
]

/* The source document's Future Scope section is not repeated here.
   The seed in ./training.js already carries a hand-written `future`
   block for this programme, and mounting a second one underneath it
   gave the page two "Future scope" headings in a row saying much the
   same thing. The one point the seed did not make — that the decision
   itself is what six weeks buys you cheaply — is in the honesty block
   below instead. */

/* The honest block.

   The source document's heading for this section reads "What 6 Weeks
   Will Do" and then says six weeks *will* make you job ready — which
   contradicts both its own FAQ ("It is not enough on its own to be job
   ready") and the section immediately above it. Its own SEO notes list
   the section as "What 6 Weeks Will Not Do", so that is what it is
   written as here. Flagged for the content owner rather than silently
   published either way. */
const WHAT_IT_WILL_NOT_DO = {
  id: 'sixwk-limits',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Being straight with you',
  title: 'What 6 weeks will not do',
  lead: 'Six weeks will not make you job ready, and we would rather say that upfront than have you find out in an interview.',
  items: [
    {
      title: 'What it does give you',
      text: 'Working familiarity with one technology, a completed project you can open and explain, and the documents your college asks for.'
    },
    {
      title: 'What it buys you cheaply',
      text: 'A decision. You find out whether this field suits you after six weeks and one fee, rather than after six months and a much larger one.'
    },
    {
      title: 'How students aiming at placement use it',
      text: 'As a starting point. They finish the six weeks, confirm the field suits them, and continue into a longer track from where this one ended.'
    }
  ]
}

export const SW_NARRATIVE = [CURRICULUM, WHAT_IT_WILL_NOT_DO]

/* ---------------------------------------------------------------- */

/* FAQ.

   Answer-first and each opening sentence complete on its own, so an
   AI overview or a search snippet can lift one whole without it
   turning into a fragment. Kept under roughly sixty words apiece for
   the same reason. */
export const SW_FAQS = [
  {
    q: 'What is 6 weeks training at techcadd Ludhiana?',
    a: 'It is the shortest structured training we run — one technology, taught hands-on for six weeks, finishing with a mini project. You receive a certificate, a college-format training report and an attendance record.'
  },
  {
    q: 'What is the difference between 6 weeks and 45 days training?',
    a: '45 days gives you about two extra weeks, spent on deeper application work and a larger mini project. Choose 6 weeks if your university specifies that duration or your break is short.'
  },
  {
    q: 'Will 6 weeks training count for my university requirement?',
    a: 'It counts where your university specifies a six-week duration. Bring your college guidelines to the counsellor before enrolling so the certificate, report and attendance format match exactly.'
  },
  {
    q: 'Can I do 6 weeks training while college is running?',
    a: 'Yes, through the evening batch. It runs the same syllabus and the same project requirement as the morning batch.'
  },
  {
    q: 'Do I need programming knowledge before joining?',
    a: 'No. Every 6 week batch starts from setup and core concepts, and the first two weeks assume no prior experience with the technology.'
  },
  {
    q: 'Can I upgrade to a longer track later?',
    a: 'Yes, and students regularly do. Topics already covered are not restarted, so you continue from where the six weeks ended.'
  }
]
