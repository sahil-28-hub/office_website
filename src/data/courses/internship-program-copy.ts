/* ==================================================================
   Long-form copy for the Internship Program page.

   Source: the supplied "techcadd Ludhiana — 6 Weeks Training, 6
   Months Training, Internship Program" document, section 03.

   Same conventions as its siblings — see
   ./industrial-training-copy.js for the pattern.

   This page is the one that turns people away, and the copy is
   written to. The source is explicit that the internship is not a
   beginner entry point and that a counsellor will say so; the
   "What this is not" block below keeps that, because a student who
   cannot deliver yet is not helped by being admitted.

   OPEN QUESTION FOR THE CONTENT OWNER: the source document leaves the
   "is this a paid internship?" answer unresolved, marked as pending.
   It is written below as decided at selection, which is safe but
   vague — the source itself notes students ask this first. Replace it
   with the real answer.
================================================================== */

export const IP_OVERVIEW = {
  title: 'Internship Program in Ludhiana',
  lead: 'The internship program places you on **live project work under a mentor**, with real deadlines, review rounds and revisions, ending in an internship letter and experience record.',
  body: [
    'This is not a course. Nobody explains syntax here. You are handed an assigned module, a mentor and a deadline, and you deliver the way an employee would — which is exactly the gap between knowing a technology and having worked in a team that uses it.',
    'Eligibility is prior training or demonstrable skill in the relevant technology, confirmed by a **skill check**. Duration is flexible, set by the project you are placed on and your availability, and agreed at induction so you know your commitment before the project starts. You finish with an internship letter, an experience record and live project work in your portfolio.'
  ]
}

/* ---------------------------------------------------------------- */

/* §2 — the five stages, which is how the source document structures
   this programme. Not modules: nothing here is taught. */
const STAGES = {
  id: 'intern-stages',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'How it runs',
  title: '5 stages of the internship program',
  items: [
    {
      title: 'Stage 1 — Selection',
      text: 'A skill check confirms you can handle live tasks without instruction, followed by honest sequencing advice if a training track should come first. You are then placed onto a project that matches your technology.'
    },
    {
      title: 'Stage 2 — Induction',
      text: 'The project brief and the scope of your assigned modules, a mentor assigned for the duration, and tools, repository access and workflow set up before you start.'
    },
    {
      title: 'Stage 3 — Delivery',
      text: '**Assigned modules with deadlines, not chapters with dates.** Work goes through review rounds before it is accepted, and revision cycles come back with reasons given, the way a workplace runs.'
    },
    {
      title: 'Stage 4 — Collaboration',
      text: 'Working alongside other interns on the same project, with handovers between modules and written documentation so the next person can pick up your work.'
    },
    {
      title: 'Stage 5 — Completion',
      text: 'A final review of everything delivered, work submitted and recorded against your name, and the internship letter and experience record issued.'
    }
  ],
  close: 'Weekly rhythm: a short mentor check-in at the start of the week, work reviewed before acceptance, and an end-of-week review recorded against your name — that record becomes your experience record.'
}

/* ---------------------------------------------------------------- */

export const IP_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who the internship program is built for',
  lead: 'Unlike the training tracks, this one has a prerequisite: you must be able to deliver assigned work without being taught first. **Where you learned it is not the question.**',
  groups: [
    {
      icon: 'stack',
      title: 'Students who completed a training track',
      text: 'You have the skills but have only used them on exercises. This is where they connect to real delivery.',
      tag: 'Skills to delivery'
    },
    {
      icon: 'career',
      title: 'Freshers with an empty experience section',
      text: 'Your resume has a skills list and nothing under experience. The internship produces a documented work period to put there.',
      tag: 'Fills the gap'
    },
    {
      icon: 'curriculum',
      title: 'Final year students who need an internship letter',
      text: 'Required for placement drives or university records, issued on completion along with an experience record.',
      tag: 'Letter issued'
    },
    {
      icon: 'mentor',
      title: 'Interview candidates who need something concrete',
      text: 'Being able to walk someone through what you built and why is what carries weight in the room.',
      tag: 'Something to discuss'
    },
    {
      icon: 'spark',
      title: 'techcadd students continuing after 6 months',
      text: 'The natural next step after the two-project track, and the sequence most students follow.',
      tag: 'Natural next step'
    },
    {
      icon: 'terminal',
      title: 'Self-taught candidates who can clear the skill check',
      text: 'Where you learned is not the question. Whether you can deliver assigned work without being taught first is.',
      tag: 'Skill check applies'
    }
  ]
}

/* ---------------------------------------------------------------- */

/* Fills the standard "why this course" block rather than sitting as
   a narrative section beneath it. The factory writes six generic
   reasons from the subject name; these are the six this programme
   actually has. See the `seed.benefits` override in ./shared.js. */
export const IP_BENEFITS = [
  {
    no: '01',
    icon: 'terminal',
    title: 'Live project work, not simulated work',
    text: 'You are handed a real module, a mentor and a deadline, and you are expected to deliver.'
  },
  {
    no: '02',
    icon: 'mentor',
    title: 'Reviews and revisions',
    text: 'Work that is not good enough comes back, with reasons. That cycle is the part self-study never gives you.'
  },
  {
    no: '03',
    icon: 'star',
    title: 'A mentor you can name',
    text: 'A reference tied to specific work you delivered, which is more useful in an interview than a generic letter.'
  },
  {
    no: '04',
    icon: 'curriculum',
    title: 'Documentation as a requirement',
    text: 'You record what you built so the next person can continue it, and that record becomes your portfolio evidence.'
  },
  {
    no: '05',
    icon: 'career',
    title: 'An experience record, not just a certificate',
    text: 'It describes the specific modules you delivered rather than the hours you attended.'
  },
  {
    no: '06',
    icon: 'support',
    title: 'Honest gatekeeping',
    text: 'We do not admit students who cannot deliver yet, because it frustrates them and helps nobody.'
  }
]

/* The source document's Future Scope section is not repeated here.
   The seed's `future` block already covers where the internship
   leads, so this page keeps one answer to that question, not two. */

const WHAT_THIS_IS_NOT = {
  id: 'intern-limits',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Being straight with you',
  title: 'What this is not',
  lead: 'It is not a beginner entry point, and we do not accept students into it just because they are willing to pay.',
  items: [
    {
      title: 'If you cannot deliver yet',
      text: 'The internship will not help you — it will only frustrate you. In that case the counsellor will say so honestly and point you at the training track you should complete first.'
    },
    {
      title: 'Why that is a kindness',
      text: 'Being placed on a live module you cannot finish costs you the reference, the record and the confidence. **Sequencing is not rejection.**'
    }
  ]
}

export const IP_NARRATIVE = [STAGES, WHAT_THIS_IS_NOT]

/* ---------------------------------------------------------------- */

export const IP_FAQS = [
  {
    q: 'What is the internship program at techcadd Ludhiana?',
    a: 'It is live project work under an assigned mentor for students who already have the skills. You follow real deadlines and review rounds, and finish with an internship letter and experience record.'
  },
  {
    q: 'What is the difference between industrial training and an internship?',
    a: 'Industrial training teaches you while you work and is built around a university requirement. The internship assumes you already have the skills and gives you live project responsibility instead of instruction.'
  },
  {
    q: 'Can I join the internship program directly?',
    a: 'Only if you clear the skill check. If you do not, the counsellor will tell you which training track to complete first — that is sequencing, not rejection.'
  },
  {
    q: 'Will the internship letter help in placements?',
    a: 'It gives you a documented work period and a project you can discuss in depth. In interviews, explaining what you built usually carries more weight than the letter itself.'
  },
  {
    /* PENDING: the source document leaves this answer unresolved and
       notes that students ask it first. Replace with the real policy. */
    q: 'Is this a paid internship?',
    a: 'Confirm this with the counsellor when you apply. It depends on the project you are placed on and is decided at selection.'
  },
  {
    q: 'How long is the internship program?',
    a: 'The duration is flexible and set by the project you are placed on and your availability. It is agreed at induction, so you know your commitment before the project starts.'
  }
]
