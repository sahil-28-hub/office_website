/* ==================================================================
   Long-form copy for the 45 Days Training page.

   The one training format the two supplied documents do not cover, so
   this is written rather than transcribed. It follows the same
   structure as its siblings — see ./six-weeks-training-copy.js — and
   is built on the distinction the site already draws in its own FAQ:

     six weeks   six taught weeks, weekly assessment
     45 days     teaching front-loaded, a longer stretch to build in

   That is the whole reason both formats exist, so it is the spine of
   the page. Every duration figure below matches the phase tags on the
   seed in ./training.js — 25 days teaching, 13 building, 7 on the
   report and the viva — and the two have to stay in step.

   Conventions: terms the page targets are marked **like this**;
   sections declare the `slot` they mount into; tones alternate so no
   two neighbouring sections share a background. The eyebrow is
   deliberately NOT "what you will learn" — the roadmap above it
   already carries that, and repeating it makes a page read as though
   it were assembled twice.

   House rules: brand spelling is "techcadd", and no placement
   percentage, salary range or package figure appears anywhere.
================================================================== */

export const FD_OVERVIEW = {
  title: '45 days industrial training in Ludhiana',
  lead: 'The 45-day industrial training most Punjab universities ask for, run as a working sprint: **25 days learning the track, 13 days building with it, and a last week on the report and the viva**.',
  body: [
    'Forty-five days is an odd length until you see how it is spent. The teaching is front-loaded — everything you need is taught in the first twenty-five days — which leaves nearly a fortnight of full days where the only thing on your timetable is your own project, with a trainer reviewing it every morning.',
    'That is the difference between this and the six-week track, and it is the only thing worth choosing between them on. Six weeks spreads the teaching evenly and assesses you weekly. Forty-five days gets the teaching out of the way early and gives you a longer uninterrupted run at building something. If your university has specified one of the two, that decides it; if it accepts either, pick by which of those two shapes suits how you work.'
  ]
}

/* ---------------------------------------------------------------- */

/* How the 45 days are actually spent.

   The roadmap above this section already lists the five phases. This
   one exists to say what the phase tags cannot: why the split falls
   where it does, and what changes for you at each boundary. */
const HOW_THE_DAYS_SPLIT = {
  id: 'fortyfive-split',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'Day by day',
  title: 'Where the forty-five days actually go',
  lead: 'Three unequal blocks, not six tidy weeks. The unevenness is the point.',
  items: [
    {
      title: 'Days 1–25 — everything you are going to be taught',
      text: 'Track selection and setup in the first three days, then the fundamentals, then the applied layer — frameworks, libraries and the data layer. Every session ends with a lab task that has to run before you leave the room. By day twenty-five the teaching is finished, and it does not resume.'
    },
    {
      title: 'Days 26–38 — thirteen full days on your own project',
      text: 'No new syllabus. You build, the trainer reviews it every morning, and you fix what came back. Somewhere in the middle the requirements change once — deliberately — because a project that never moves teaches you nothing about what happens when one does.'
    },
    {
      title: 'Days 39–45 — the part that gets graded',
      text: 'The training report, the project documentation, the presentation and a mock viva with questions harder than the real one. Universities increasingly grade the report and the viva rather than the attendance sheet, so the last week is built for that rather than left to you.'
    }
  ],
  close: 'Your project brief is agreed on day three. Not in the last fortnight, which is when most training projects are actually chosen.'
}

/* ---------------------------------------------------------------- */

export const FD_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who the 45 day format is for',
  lead: 'No prior practical experience is assumed. Day one starts at setup, and students who already code are moved into the applied module early so they get a longer build.',
  groups: [
    {
      icon: 'curriculum',
      title: 'Students whose university specified 45 days',
      text: 'Some departments write the number into the syllabus. If yours says 45 days, this is the format that matches it — and the letter, report and certificate are issued to whatever template your college hands you.',
      tag: 'Matches the requirement'
    },
    {
      icon: 'clock',
      title: 'Anyone with a summer or winter break to fill',
      text: 'Forty-five days fits inside a vacation without eating all of it. It is the longest format that still ends before most colleges reopen.',
      tag: 'Fits the vacation'
    },
    {
      icon: 'stack',
      title: 'Students who want build time, not more lectures',
      text: 'If you learn by making things rather than by being taught them, the thirteen-day build stretch is the reason to pick this over the six-week track.',
      tag: 'Longer build'
    },
    {
      icon: 'terminal',
      title: 'Second and third years getting ahead early',
      text: 'One deployed project and a repository with real commits, finished before final year rather than during it. Companies now take second- and third-year students for part-time internships, and this is what makes you eligible for one.',
      tag: 'Ahead of schedule'
    },
    {
      icon: 'spark',
      title: 'Students who have not picked a direction yet',
      text: 'Five tracks are open at the start — development, data, AI, cloud and marketing — and you commit on day three after talking it through, not on the enrolment form.',
      tag: 'Decide on day three'
    },
    {
      icon: 'support',
      title: 'Students travelling in from around Ludhiana',
      text: 'One fixed daily slot, chosen at admission and not moved around. Khanna, Samrala, Doraha and Jagraon students plan their travel once and leave it alone.',
      tag: 'Fixed daily slot'
    }
  ]
}

/* ---------------------------------------------------------------- */

/* Fills the standard "why this course" block rather than sitting as a
   narrative section beneath it — see the `seed.benefits` override in
   ./shared.js. */
export const FD_BENEFITS = [
  {
    no: '01',
    icon: 'clock',
    title: 'Thirteen days that are only building',
    text: 'The teaching stops on day twenty-five and does not come back. What is left is the longest uninterrupted project run of any of our short formats.'
  },
  {
    no: '02',
    icon: 'curriculum',
    title: 'The brief is agreed on day three',
    text: 'You spend six weeks thinking about one project rather than a weekend inventing one. It is the single biggest difference in what students submit.'
  },
  {
    no: '03',
    icon: 'terminal',
    title: 'A lab task that has to run',
    text: 'Every teaching session ends with something that either works before you leave or gets fixed with the trainer standing there. Nothing is marked as covered because it was explained.'
  },
  {
    no: '04',
    icon: 'mentor',
    title: 'A review every morning of the build',
    text: 'Thirteen consecutive mornings of somebody senior opening your code and asking about it. Most students say this is the part that changed how they work.'
  },
  {
    no: '05',
    icon: 'star',
    title: 'The requirements change once, on purpose',
    text: 'Halfway through the build, something in the brief moves. Handling that badly in a training project is far cheaper than handling it badly in a job.'
  },
  {
    no: '06',
    icon: 'career',
    title: 'A last week built for the viva',
    text: 'Report, documentation, presentation and a mock viva with hard questions — because the report and the viva are what your department actually grades.'
  }
]

/* ---------------------------------------------------------------- */

/* The honest block.

   The seed's `future` section already opens with "it is not long
   enough to make you a developer, and anyone who tells you otherwise
   is selling something", which is the right register for this page.
   This one answers the narrower question a student comparing formats
   is actually asking. */
const WHAT_IT_WILL_NOT_DO = {
  id: 'fortyfive-limits',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Being straight with you',
  title: 'What 45 days will not do',
  lead: 'It will not make you employable on its own, and two extra weeks over the six-week track does not change that.',
  items: [
    {
      title: 'What it does do',
      text: 'It gets the university requirement out of the way properly, and it leaves you with one project that runs — which is more than most submissions can claim, and enough to be worth opening in an interview.'
    },
    {
      title: 'Where the difference actually shows',
      text: 'Not in what you know at the end. In what you have built, because thirteen days of building produces something noticeably more finished than a project squeezed into the last week of a course.'
    },
    {
      title: 'What students do next',
      text: 'Most who finish already know which track they want. The four- and six-month programmes pick up from here with credit for what you have covered, so nothing is repeated.'
    }
  ]
}

export const FD_NARRATIVE = [HOW_THE_DAYS_SPLIT, WHAT_IT_WILL_NOT_DO]

/* ---------------------------------------------------------------- */

/* Answer-first, each opening sentence complete on its own so a search
   snippet can lift one whole without it turning into a fragment. */
export const FD_FAQS = [
  {
    q: 'What is 45 days industrial training at techcadd Ludhiana?',
    a: 'It is the summer and winter industrial training format most Punjab universities ask for. Twenty-five days are spent learning one track, thirteen building a project with it, and the last week on the report, documentation and viva.'
  },
  {
    q: 'Should I do 45 days or 6 weeks?',
    a: 'Take whichever your university has specified. If it accepts either, choose 45 days for a longer uninterrupted stretch to build in, and six weeks for evenly spread teaching with a weekly assessment.'
  },
  {
    q: 'Which track should I pick?',
    a: 'You do not have to decide before you enrol. Five tracks are open — development, data, AI, cloud and marketing — and you commit on day three, after the orientation sessions and a conversation with your trainer.'
  },
  {
    q: 'What do I actually submit to my college?',
    a: 'A training letter naming the work you did, a project certificate, a formatted training report and your project documentation. Bring your department template before you start and the paperwork is prepared to match it.'
  },
  {
    q: 'Do I need to know programming already?',
    a: 'No. Day one starts at environment setup and the first two weeks assume nothing. Students who already code are assessed in the first week and moved into the applied module sooner, which gives them a longer build.'
  },
  {
    q: 'Will 45 days make me job ready?',
    a: 'No, and it is not sold as that. It clears your training requirement properly and leaves you with one finished project. Students aiming at placement treat it as the start of a longer track rather than the end of one.'
  }
]
