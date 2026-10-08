/* ==================================================================
   Course factory.

   Every course page is driven from one compact seed (see the files in
   this folder). The parts that are genuinely identical across courses
   — the six promises, the programme-value accordion, the career path,
   the standard admissions questions — are generated here with the
   course's own name folded in, so a seed only has to carry what is
   actually specific to that course.

   Nothing in this file is rendered directly; buildCourse() is the only
   export the registry uses.
================================================================== */

export const CENTRE = 'Ludhiana'

const DEFAULT_MODE = 'Classroom & online batches'
const DEFAULT_LEVEL = 'Beginner to job ready'

/* ------------------------------------------------------------------
   Hero code highlighting.

   Seeds carry plain source lines. Rather than hand-tagging tokens per
   course, one small tokenizer produces the same span structure the
   hero CSS already styles (.tk--kw, --str, --num, --fn, --cls, --mod).
------------------------------------------------------------------ */
const KEYWORDS: Record<string, string[]> = {
  py: ['from', 'import', 'def', 'return', 'class', 'for', 'in', 'if', 'elif', 'else', 'while', 'with', 'as', 'lambda', 'yield', 'try', 'except', 'True', 'False', 'None', 'not', 'and', 'or', 'pass', 'async', 'await'],
  js: ['import', 'from', 'export', 'default', 'const', 'let', 'var', 'function', 'return', 'class', 'extends', 'new', 'if', 'else', 'for', 'of', 'in', 'await', 'async', 'true', 'false', 'null', 'undefined', 'this'],
  java: ['package', 'import', 'public', 'private', 'protected', 'static', 'final', 'class', 'interface', 'extends', 'implements', 'new', 'return', 'void', 'int', 'String', 'boolean', 'double', 'if', 'else', 'for', 'while', 'true', 'false', 'null'],
  cpp: ['#include', 'using', 'namespace', 'int', 'float', 'double', 'char', 'bool', 'void', 'class', 'struct', 'public', 'private', 'return', 'if', 'else', 'for', 'while', 'new', 'delete', 'const', 'auto', 'true', 'false', 'nullptr'],
  kt: ['package', 'import', 'fun', 'val', 'var', 'class', 'object', 'data', 'return', 'if', 'else', 'for', 'in', 'when', 'suspend', 'override', 'true', 'false', 'null'],
  php: ['<?php', 'namespace', 'use', 'function', 'class', 'public', 'private', 'return', 'echo', 'foreach', 'as', 'if', 'else', 'new', 'true', 'false', 'null', '$this'],
  sql: ['SELECT', 'FROM', 'WHERE', 'GROUP', 'BY', 'ORDER', 'JOIN', 'ON', 'AS', 'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE', 'CREATE', 'TABLE', 'AND', 'OR', 'LIMIT'],
  sh: ['sudo', 'cd', 'ls', 'grep', 'awk', 'chmod', 'chown', 'systemctl', 'docker', 'kubectl', 'terraform', 'nmap', 'git', 'export', 'if', 'then', 'fi', 'for', 'do', 'done'],
  yaml: ['apiVersion', 'kind', 'metadata', 'spec', 'name', 'image', 'replicas', 'ports', 'containers'],
  txt: []
}

const TOKEN_RE = /("[^"]*"|'[^']*'|`[^`]*`|#.*$|\/\/.*$|--.*$|\b\d+(?:\.\d+)?\b|[A-Za-z_$#<?][\w$]*|\s+|[^\sA-Za-z_$\d]+)/g

function classify(raw: string, keywords: string[], next: string | undefined) {
  if (/^["'`]/.test(raw)) return 'str'
  if (/^(#|\/\/|--)/.test(raw) && !keywords.includes(raw)) return 'cm'
  if (/^\d/.test(raw)) return 'num'
  if (keywords.includes(raw)) return 'kw'
  if (/^[A-Z][A-Za-z0-9_]*$/.test(raw)) return 'cls'
  if (next === '(') return 'fn'
  if (/^[a-z_][\w.]*$/.test(raw) && next === '.') return 'mod'
  return 'pl'
}

/* One line of source → the token spans the hero renders. */
export function highlight(line: string, lang = 'py') {
  const keywords = KEYWORDS[lang] || KEYWORDS.txt
  const parts = line.match(TOKEN_RE) || []
  const tokens = []

  parts.forEach((raw, i) => {
    if (/^\s+$/.test(raw)) {
      tokens.push({ t: raw, c: 'pl' })
      return
    }
    const next = (parts[i + 1] || '').trim().charAt(0)
    tokens.push({ t: raw, c: classify(raw, keywords, next) })
  })

  return tokens
}

/* ------------------------------------------------------------------
   Shared content, generated from the seed.
------------------------------------------------------------------ */
function benefits(seed) {
  const subject = seed.subject || seed.short

  return [
    {
      no: '01',
      icon: 'curriculum',
      title: 'Industry-focused curriculum',
      text: `Syllabus built around what ${subject} teams actually ship — no filler modules, no theory that never reaches your hands.`
    },
    {
      no: '02',
      icon: 'terminal',
      title: 'Practical learning',
      text: seed.practical || `Every concept lands in the tool the same day. You work in ${subject} during each class, not just in your notes.`
    },
    {
      no: '03',
      icon: 'stack',
      title: 'Real-world projects',
      text: `Build with real requirements, real data and real problems — from the first task to a finished, reviewable deliverable.`
    },
    {
      no: '04',
      icon: 'mentor',
      title: 'Mentor guidance',
      text: `Trainers who work with ${subject} daily review your work, your logic and your approach line by line.`
    },
    {
      no: '05',
      icon: 'career',
      title: 'Career preparation',
      text: 'Resume, portfolio, aptitude rounds and interview practice built into the last phase of the course.'
    },
    {
      no: '06',
      icon: 'support',
      title: 'Placement support',
      text: 'Interview referrals, mock rounds and continued doubt support after the course ends.'
    }
  ]
}

function valueItems(seed) {
  const subject = seed.subject || seed.short

  return [
    {
      no: '01',
      title: 'Industry-focused curriculum',
      text: `You learn ${subject} the way it is used in production, with the workflow, tooling and standards a working team expects. Nothing in the syllabus exists only to fill hours.`
    },
    {
      no: '02',
      title: 'Practical learning',
      text: 'Sessions are hands-on. You do every example, break it, and fix it. Each module closes with a lab task that has to work before you move on.'
    },
    {
      no: '03',
      title: 'Real-world projects',
      text: `${seed.projectCount || 'Several'} finished projects — the kind of work an interviewer can open, click through and question you on.`
    },
    {
      no: '04',
      title: 'Career preparation',
      text: 'A structured final phase: portfolio review, profile cleanup, aptitude and role-specific practice, mock interviews and placement support.'
    }
  ]
}

const CAREER_PATH = ['Learning', 'Projects', 'Portfolio', 'Industry readiness', 'Career opportunities']

function testimonials(seed) {
  if (seed.testimonials) return seed.testimonials
  const subject = seed.subject || seed.short

  return [
    {
      quote: `I joined with no background in this. By the third month I was building ${subject} work on my own, and the project reviews are where I actually learnt to do it properly.`,
      name: 'Simranjeet Kaur',
      course: seed.short,
      detail: 'B.Sc. IT graduate',
      rating: 5,
      initials: 'SK'
    },
    {
      quote: 'The classes are practical. Every session ends with a task that has to work, so you cannot fake understanding. That habit helped me most in interviews.',
      name: 'Harman Sethi',
      course: seed.short,
      detail: 'Now working as an intern in the field',
      rating: 5,
      initials: 'HS'
    },
    {
      quote: 'Doubt support was the difference for me. My trainer sat with my work, found the mistake and made me fix it myself instead of handing over the answer.',
      name: 'Ankit Verma',
      course: seed.short,
      detail: 'BCA final year',
      rating: 5,
      initials: 'AV'
    },
    {
      quote: `I came for the skill and left with a portfolio — projects I could actually demo on a call, not a certificate I had to explain.`,
      name: 'Navjot Singh',
      course: seed.short,
      detail: 'Career switch from operations',
      rating: 5,
      initials: 'NS'
    }
  ]
}

function faqs(seed) {
  const subject = seed.subject || seed.short
  const stack = (seed.technologies || []).map((t) => t.name)
  const stackLine = stack.length
    ? `${stack.slice(0, -1).join(', ')} and ${stack[stack.length - 1]}`
    : subject

  const standard = [
    {
      q: 'What is the duration of the course?',
      a: `The complete ${seed.short} programme runs for ${seed.duration} depending on the batch you choose. Weekday, weekend and fast-track options are available, along with shorter modules for students who only need the fundamentals.`
    },
    {
      q: 'Who can join this course?',
      a: seed.audience || 'School students after 12th, college students from any stream, graduates and working professionals changing track. The first module assumes no prior experience.'
    },
    {
      q: 'Do I need any prior experience?',
      a: seed.prerequisite || `No. The course starts from the basics. If you already have some background, your trainer will move you faster through the first module so you reach the project work sooner.`
    },
    {
      q: 'What technologies will I learn?',
      a: `${stackLine} — plus the day-to-day tooling and workflow that surrounds them in a real team.`
    },
    {
      q: 'Will I work on real projects?',
      a: 'Yes. Each module closes with a lab project, and the course ends with a capstone you can put on your portfolio and defend in an interview.'
    },
    {
      q: 'Is placement assistance available?',
      a: 'Placement support includes resume and portfolio review, aptitude and role-specific practice, mock interviews and interview referrals through our hiring network.'
    },
    {
      q: 'Will I receive a certificate?',
      a: `Yes. You receive a techcadd ${seed.short} completion certificate, and a separate project certificate for the capstone you submit.`
    }
  ]

  /* A course that ships a complete question set of its own sets
     `ownFaqs` and gets exactly that. Appending the standard seven to
     it would put two near-identical questions about duration, entry
     and placement in the same accordion. */
  if (seed.ownFaqs) return seed.faqs || []

  return [...(seed.faqs || []), ...standard]
}

/* ------------------------------------------------------------------
   Future scope.

   The question every enquiry eventually asks: not "what will I learn"
   but "where does this go". Generated from the seed so every course
   answers it, with `seed.future` available to override any part of it
   for a course whose trajectory is genuinely different.
------------------------------------------------------------------ */
const FUTURE_INDUSTRIES = [
  'IT services',
  'Product startups',
  'Banking & fintech',
  'Healthcare',
  'E-commerce',
  'Manufacturing',
  'EdTech',
  'Government & PSUs'
]

function futureScope(seed) {
  const custom = seed.future || {}
  const subject = seed.subject || seed.short
  const careers = seed.careers || []
  const entry = careers[0]?.title || `${seed.short} associate`
  const mid = careers[1]?.title || `Senior ${subject} specialist`

  const horizon = custom.horizon || [
    {
      when: 'Year 0–1',
      title: 'Get in on proof of work',
      text: `Entry roles such as ${entry} open as soon as you have projects that run. At this stage nobody is asking about your marks — they are asking you to walk through something you built.`
    },
    {
      when: 'Year 2–4',
      title: 'Specialise and get paid for it',
      text: `The generalists plateau; the specialists do not. Depth in one part of ${subject} — the part your first job leans on hardest — is what moves you towards ${mid.toLowerCase()} work.`
    },
    {
      when: 'Year 5+',
      title: 'Own the decisions',
      text: 'Architecture, standards, hiring and mentoring. The technical skill is assumed by now; what you are paid for is judgement, and judgement only comes from having shipped things that mattered.'
    }
  ]

  const trends = custom.trends || [
    {
      icon: 'spark',
      title: 'AI is now part of the job',
      text: `Teams expect ${subject} work to be done alongside AI tooling. It raises the floor on output and raises the bar on what counts as a junior — which is exactly why the fundamentals in this course are taught the hard way.`
    },
    {
      icon: 'stack',
      title: 'The scope keeps widening',
      text: `What used to be one narrow role now touches data, deployment and the product decision behind it. Every extra layer of ${subject} you understand is another kind of room you get invited into.`
    },
    {
      icon: 'career',
      title: 'Demand outside the metros',
      text: 'Remote and hybrid hiring means Ludhiana, Jalandhar and Chandigarh candidates now compete for the same roles as Bengaluru ones. Location has stopped being the ceiling it used to be.'
    },
    {
      icon: 'chart',
      title: 'Proof beats paper',
      text: 'Hiring has moved to portfolios, take-home tasks and live problem solving. A certificate opens a shortlist; work that runs is what gets you through the round after it.'
    }
  ]

  /* phrased to read correctly whether the subject is singular ("Python")
     or plural ("AI agents") — the seeds carry both */
  return {
    title: custom.title || `The road ahead for ${subject}`,
    lead:
      custom.lead ||
      `A course ends; the field does not. Here is the honest version of what the next few years look like for ${subject} — where the roles go, and what is shifting underneath them while you learn.`,
    horizon,
    trends,
    industriesNote: custom.industriesNote || 'Sectors hiring for this skill set',
    industries: custom.industries || FUTURE_INDUSTRIES
  }
}

/* ------------------------------------------------------------------
   Who can join.

   The first question of every counselling call, and the one most
   course pages answer with "anyone can join" — which tells a B.Com
   graduate nothing about whether they will be the only person in the
   room without a technical background.

   Six groups, each written as a person rather than an adjective, so
   someone can find themselves in the list in about five seconds. A
   seed can replace any part of it through `seed.joiners`, or the
   whole thing.
------------------------------------------------------------------ */
function joiners(seed) {
  const custom = seed.joiners || {}
  const subject = seed.subject || seed.short

  const groups = custom.groups || [
    {
      icon: 'curriculum',
      title: 'Students after 12th',
      text: `You have finished school and want a skill that pays before a degree does. The first module assumes you have never opened ${subject} in your life.`,
      tag: 'No background needed'
    },
    {
      icon: 'code',
      title: 'College students',
      text: `BCA, B.Tech, B.Sc, BBA, B.Com — any stream. You learn ${subject} alongside your degree and finish with projects your syllabus was never going to give you.`,
      tag: 'Weekend batches'
    },
    {
      icon: 'career',
      title: 'Final year and fresh graduates',
      text: 'You are months away from interviews and need work to show, not marks to quote. The final phase is portfolio, mock rounds and referrals.',
      tag: 'Placement support'
    },
    {
      icon: 'stack',
      title: 'Working professionals',
      text: `You already have a job and want ${subject} on top of it. Evening and weekend batches exist for exactly this, and the project work is yours to schedule.`,
      tag: 'Evening batches'
    },
    {
      icon: 'spark',
      title: 'Career switchers',
      text: seed.switcher || `You are coming from a different field entirely — operations, teaching, accounts, sales. Every module starts from why, not from jargon.`,
      tag: 'Start from zero'
    },
    {
      icon: 'chart',
      title: 'Freelancers and business owners',
      text: `You want to do this work yourself instead of paying for it. You leave able to build, run and judge ${subject} work on your own terms.`,
      tag: 'Practical only'
    }
  ]

  const requirements = custom.requirements || [
    'A laptop or desktop — we help you set it up in the first session',
    'A stable internet connection for the online batches',
    seed.prerequisite || 'No prior coding or technical background',
    'Basic English reading — the tools and their documentation are in English',
    `About ${seed.weeklyHours || '6-8 hours'} a week outside class for practice`,
    'Willingness to finish the lab task before the next class'
  ]

  return {
    eyebrow: custom.eyebrow || 'Who can join',
    title: custom.title || `Who this ${seed.short} course is for`,
    lead:
      custom.lead ||
      seed.audience ||
      `Six kinds of people sit in a typical batch, and none of them arrive knowing ${subject}. Find the one that sounds like you.`,
    groups,
    requirementsTitle: custom.requirementsTitle || 'What you actually need before day one',
    requirements,
    note:
      custom.note ||
      `Not sure which of these you are, or whether the timing works around what you already do? That is exactly what the call is for.`
  }
}

function heroMetrics(seed) {
  return (
    seed.metrics || [
      { value: seed.rating || '4.8/5', label: 'Student rating' },
      { value: seed.trained || '500+', label: 'Students trained' },
      { value: `${(seed.projects || []).length + 1}+`, label: 'Industry projects' },
      { value: 'Yes', label: 'Placement support' }
    ]
  )
}

/* ------------------------------------------------------------------
   Certification.

   Read by CourseCertification, which only the AI-layout pages mount.
   Generated for every course all the same, so the section is safe to
   mount anywhere later without a seed having to be edited first.
------------------------------------------------------------------ */
function certification(seed) {
  const custom = seed.certification || {}
  const subject = seed.subject || seed.short
  const city = seed.city || CENTRE

  return {
    eyebrow: custom.eyebrow || 'Certification',
    title: custom.title || `Get certified in ${seed.short}`,
    lead:
      custom.lead ||
      `Finish the ${seed.short} programme at techcadd ${city} and you leave with more than a line on a CV — a verifiable certificate, and the project work that makes it mean something in an interview.`,
    points: custom.points || [
      {
        icon: 'check',
        title: 'Course completion certificate',
        text: `Issued in your name on completion of the ${seed.short} syllabus, with a reference number an employer can verify with us.`
      },
      {
        icon: 'stack',
        title: 'Project certificate',
        text: 'A separate certificate for the capstone you submit, naming the project so the work is attached to the credential.'
      },
      {
        icon: 'career',
        title: 'Internship letter',
        text: 'Students who complete the live-project phase receive an internship letter covering the duration and the work delivered.'
      },
      {
        icon: 'support',
        title: 'Portfolio you own',
        text: 'Every file, repository and deployed link stays yours — the part of the credential a reviewer can actually open.'
      }
    ],
    /* the two cards drawn beside the copy; no image files involved */
    certificates: custom.certificates || [
      {
        kind: 'Course completion',
        title: seed.name,
        line: `has successfully completed the ${seed.short} programme`,
        ref: 'TC-XXXX-XXXX'
      },
      {
        kind: 'Project & internship',
        title: `${seed.short} capstone`,
        line: `for project work delivered under supervision in ${city}`,
        ref: 'TC-PRJ-XXXX'
      }
    ],
    note:
      custom.note ||
      `techcadd has been training in ${city} since 2007. The certificate carries that record; the ${subject} work you did carries the rest.`
  }
}

/* ------------------------------------------------------------------
   Salary outlook.

   The question the careers section stops just short of answering. Read
   by CourseSalary (AI-layout pages), which renders the table and the
   five questions underneath it.

   The default bands are deliberately wide and carry the disclaimer
   below — they are an honest indication, not a promise. A seed that
   knows its own market sets `salary.rows` and replaces them.
------------------------------------------------------------------ */
/* The three markets every salary table compares. Ludhiana first,
   because that is where the reader is. Exported so the page overlays
   (./course-pages.js, ./ai-pages.js) name the same three. */
export const SALARY_MARKETS = ['Ludhiana & Punjab', 'Delhi NCR & Bengaluru', 'Remote & freelance']

/* The five questions under every salary table. The structure is
   shared; every answer is written per course in the overlays, because
   a page that answers "which employers in Ludhiana hire for this" with
   the same paragraph as twenty other pages is answering nobody. */
export function salaryQuestions({ roles, growth, remote, industries, higher }: { roles: { q: string; a: string }; growth: { q: string; a: string }; remote: { q: string; a: string }; industries: { q: string; a: string }; higher: { q: string; a: string } }) {
  return [
    { q: roles.q, a: roles.a },
    { q: 'How fast does the pay move after the first job?', a: growth },
    { q: 'Can I do this remotely or as freelance work from Ludhiana?', a: remote },
    { q: 'Which employers in and around Ludhiana hire for this?', a: industries },
    { q: 'Does this help if I want to study further?', a: higher }
  ]
}

function salary(seed) {
  const custom = seed.salary || {}
  const subject = seed.subject || seed.short
  const city = seed.city || CENTRE
  const careers = seed.careers || []

  const rows =
    custom.rows ||
    careers.slice(0, 4).map((c, i) => ({
      role: c.title,
      level: i === 0 ? 'Entry' : i < 3 ? 'Entry to mid' : 'Mid',
      cells: [
        i === 0 ? '₹2.4–4.2 LPA' : '₹3.6–6.5 LPA',
        i === 0 ? '₹4–8 LPA' : '₹6.5–14 LPA',
        i === 0 ? '₹20k–45k / project' : '₹35k–90k / project'
      ]
    }))

  return {
    eyebrow: custom.eyebrow || 'Salary outlook',
    title: custom.title || `What ${subject} pays, and where`,
    lead:
      custom.lead ||
      `Indicative ranges for the roles this course opens — what a fresher out of ${city} is offered, what the metro and remote markets pay for the same skills, and how that moves with two or three years of work behind you.`,
    regions: custom.regions || SALARY_MARKETS,
    rows,
    note:
      custom.note ||
      'Ranges are indicative, drawn from what our own students report and from openings we see through the placement cell. Actual offers depend on your portfolio, the interview and the company — nobody can promise you a number, and we do not.',
    questions: custom.questions || [
      {
        q: `Which job roles open after a ${seed.short} course?`,
        a: careers.length
          ? `${careers.slice(0, 4).map((c) => c.title).join(', ')} and related positions, depending on which part of the syllabus you go deepest on.`
          : `Entry roles in ${subject}, widening as your portfolio grows.`
      },
      {
        q: 'How quickly does the salary move after the first job?',
        a: 'The first jump usually comes at 18–24 months, once you have shipped work you can point to. Depth in one area moves it faster than breadth across many.'
      },
      {
        q: 'Can I work remotely or freelance with this skill?',
        a: `Yes, and a good number of our students do. Remote and contract work is the reason ${city} candidates now compete for the same briefs as metro ones — the portfolio travels, the address does not matter.`
      },
      {
        q: `Which industries hire for this in and around ${city}?`,
        a: 'IT services, manufacturing and export units running automation, e-commerce and D2C brands, healthcare, education, and the agencies serving all of them. Punjab hiring is broader than it looks from a job board.'
      },
      {
        q: 'Does this course help with higher studies?',
        a: 'It helps with the practical half. The projects and tooling carry into an M.Tech, MCA or a specialisation abroad, and the portfolio is often what separates two applicants with the same marks.'
      }
    ]
  }
}

/* ------------------------------------------------------------------
   techcadd against the alternative.

   The comparison table every enquiry is silently running anyway. It is
   deliberately about process rather than claims — whether one-to-one
   teaching is actually on offer, who teaches, what happens after the
   course ends — because those are the things a visitor can check on a
   demo visit, and a claim they cannot check is worth nothing.

   Generated for every course from the seed; `seed.compare` replaces
   any part of it.
------------------------------------------------------------------ */
function compare(seed) {
  const custom = seed.compare || {}
  const subject = seed.subject || seed.short
  const projects = (seed.projects || []).length

  return {
    eyebrow: custom.eyebrow || 'The comparison',
    title: custom.title || `Why students pick techcadd for ${seed.short}`,
    lead:
      custom.lead ||
      `Every institute in ${seed.city || CENTRE} claims industry training and placement support. These are the differences you can actually check on a demo visit — ask any of them of anyone, including us.`,
    us: custom.us || 'techcadd',
    them: custom.them || 'Typical institute',
    rows: custom.rows || [
      {
        feature: 'Who teaches',
        us: `Trainers who still do ${subject} work outside the classroom`,
        them: 'Full-time faculty teaching from a fixed deck'
      },
      {
        feature: '1-on-1 classes',
        us: 'One-to-one teaching available on every course — the pace is yours, and your work is looked at by name',
        them: 'One group class moving at one pace, whoever that pace happens to suit'
      },
      {
        feature: 'Project work',
        us: `${projects || 'Five'} real projects plus a capstone you deploy and defend`,
        them: 'Guided exercises copied from the board'
      },
      {
        feature: 'Curriculum',
        us: 'Reviewed every batch against what working teams ship',
        them: 'Updated when the printed syllabus is reprinted'
      },
      {
        feature: 'How a module ends',
        us: 'A lab task that has to run before you move on',
        them: 'Notes to revise before an exam'
      },
      {
        feature: 'Doubt support',
        us: 'Trainer sits with your code; open lab hours between classes',
        them: 'Ask at the end of class if there is time left'
      },
      {
        feature: 'What you leave with',
        us: 'Completion certificate, project certificate, internship letter — all verifiable',
        them: 'One printed certificate'
      },
      {
        feature: 'After the course',
        us: 'Portfolio review, mock interviews, referrals, continued doubt support',
        them: 'The course ends and so does the contact'
      }
    ],
    note:
      custom.note ||
      'Written about the market, not about any particular institute in it. Visit two or three, sit through a demo class at each, and ask all eight of these questions — that is the only version of this table worth trusting.'
  }
}

/* ------------------------------------------------------------------
   What you can do, phase by phase.

   The reference for this section is a three-column capability matrix.
   It is derived here rather than written per course: every seed
   already lists its modules and the skills inside them, so the three
   phases are just that list cut into thirds, and each capability is
   ticked in the phase it lands in and every phase after it.

   Derived, deliberately. A hand-written matrix would drift out of step
   with the syllabus the roadmap section renders from the same data,
   and a course page that contradicts itself is worse than one section
   short.

   NOTE ON LABELS: the phases are named after where you are in the
   syllabus, not sold as three separate durations. If techcadd runs
   genuine 3 / 6 / 9-month tracks with different fees, put them on the
   seed as `seed.tracks.phases` with the real names and spans — the
   component reads whatever it is given.
------------------------------------------------------------------ */
const PHASE_META = [
  { key: 'foundations', name: 'Foundations', blurb: 'Enough to build the first working thing on your own.' },
  { key: 'applied', name: 'Applied', blurb: 'The middle of the syllabus, where the projects start being yours.' },
  { key: 'professional', name: 'Professional', blurb: 'The full course, capstone and the placement phase behind it.' }
]

/* "Weeks 1–3" + "Weeks 4–6" → "Weeks 1–6". Returns '' for any tag the
   pattern does not fit, and the component simply omits the line. */
function spanOf(modules) {
  if (!modules.length) return ''
  const first = /^([A-Za-z ]+?)\s*(\d+)/.exec(modules[0].tag || '')
  const last = /(\d+)\s*$/.exec(modules[modules.length - 1].tag || '')
  if (!first || !last) return ''
  return `${first[1].trim()} ${first[2]}–${last[1]}`
}

function tracks(seed) {
  const custom = seed.tracks || {}
  const modules = (seed.modules || []).map((m, i) => ({ ...m, no: String(i + 1).padStart(2, '0') }))
  const n = modules.length

  /* thirds, rounded up, so a four-module course splits 2 / 3 / 4 and a
     six-module one splits 2 / 4 / 6 */
  const cuts = [Math.ceil(n / 3), Math.ceil((2 * n) / 3), n]

  const phases =
    custom.phases ||
    PHASE_META.map((meta, i) => {
      const upto = modules.slice(0, cuts[i])
      return {
        ...meta,
        span: upto.length ? `Modules ${upto[0].no}–${upto[upto.length - 1].no}` : '',
        when: spanOf(upto),
        count: upto.reduce((sum, m) => sum + (m.skills || []).length, 0)
      }
    })

  const rows =
    custom.rows ||
    modules.flatMap((m, mi) =>
      (m.skills || []).map((skill) => ({
        label: skill,
        module: m.title,
        in: cuts.map((cut) => mi < cut)
      }))
    )

  return {
    eyebrow: custom.eyebrow || 'Find your pace',
    title: custom.title || `What you can do, phase by phase`,
    lead:
      custom.lead ||
      `The ${seed.short} syllabus in the order you meet it, and what you are able to do by the end of each stretch of it. Every row is a capability, not a topic you sat through.`,
    phases,
    rows,
    note:
      custom.note ||
      `The full programme runs ${seed.duration}. Where you finish is a question of pace rather than of syllabus — everyone covers all of it.`
  }
}

/* Technologies are laid out on a ring; the seed only names them. */
function technologies(seed) {
  const list = seed.technologies || []
  const step = 360 / Math.max(list.length, 1)
  return list.map((t, i) => ({ ...t, angle: -90 + i * step }))
}

/* ------------------------------------------------------------------
   Seed → the object every course component reads.
------------------------------------------------------------------ */
export function buildCourse(seed: Record<string, any>) {
  const lang = seed.code?.lang || 'py'

  return {
    slug: seed.slug,
    name: seed.name,
    short: seed.short,
    category: seed.category,

    /* Which running order CoursePage renders. 'full' is the long
       arrangement — it mounts the toolchain, certification, projects,
       career-ladder and salary sections as well — and every course in
       the site's Courses and AI dropdowns is on it. 'standard' is the
       shorter page, kept for the training formats and the design and
       graphics catalogue, which do not carry the written-for-search
       content the long page is built to hold. Set on the seed, so the
       layout a course gets is visible in its data rather than hidden
       in a list inside the page component. */
    layout: seed.layout || 'standard',
    /* CENTRE for every course. A course written as a landing page for
       another city names it on the seed and overrides this, so the
       heading, the page title and the copy all agree on where it runs. */
    city: seed.city || CENTRE,
    eyebrow: seed.eyebrow,
    duration: seed.duration,
    mode: seed.mode || DEFAULT_MODE,
    level: seed.level || DEFAULT_LEVEL,

    /* Search metadata, set only by a course whose title and summary
       were written for search rather than assembled from its name.
       Left undefined otherwise, which is what CoursePage checks —
       it falls back to the generated title and the site-wide
       description tag. */
    metaTitle: seed.metaTitle || null,
    metaDescription: seed.metaDescription || null,

    headline: seed.headline,
    sub: seed.sub,

    /* set only by a course that ships its own hero picture; without it
       the hero draws the pixel field, which is still the default */
    heroArt: seed.heroArt || null,
    heroArtAlt: seed.heroArtAlt || '',
    /* the file's real pixel size, so the browser can reserve the right
       box before the picture arrives and the headline beside it does
       not jump. Optional — see CourseHeroArt. */
    heroArtWidth: seed.heroArtSize?.[0] || null,
    heroArtHeight: seed.heroArtSize?.[1] || null,

    overviewTitle: seed.overviewTitle || `Learn ${seed.short} through practical experience`,
    overviewLead:
      seed.overviewLead ||
      `A structured, project-driven programme that takes you from the first fundamentals to a finished, deployable piece of work. Concepts are introduced in class, then applied the same day.`,
    /* long-form opening copy, for the courses that carry it — the
       overview renders nothing extra when a seed has none */
    overviewBody: seed.overviewBody || [],
    highlights: seed.highlights,

    code: {
      file: seed.code?.file || 'main.py',
      lines: (seed.code?.lines || []).map((l) => highlight(l, lang)),
      command: seed.code?.command || `python ${seed.code?.file || 'main.py'}`,
      output: seed.code?.output || 'ready',
      note: seed.code?.note || `${(seed.modules || []).length} modules · ${(seed.projects || []).length + 1} projects · 1 portfolio`
    },
    badges: seed.badges,

    metrics: heroMetrics(seed),
    /* The six generated reasons are a sensible default and a poor
       specific answer — they are written from the subject name, so
       every course gives roughly the same six. A course that has its
       own reasons written down overrides them here, the same way
       `seed.future` overrides the generated trajectory below. */
    benefits: seed.benefits || benefits(seed),
    valueItems: valueItems(seed),
    valueTitle: seed.valueTitle || 'Your months should build more than a certificate.',
    valueText:
      seed.valueText ||
      'A course is worth the time you give it only if you finish with work you can show and skills you can defend. That is the standard this programme is designed against.',
    valueStat: seed.valueStat || { num: '12+', label: 'Practical learning areas', sub: 'from fundamentals to delivery' },

    roadmapTitle: seed.roadmapTitle || 'A path from first steps to shipped work',
    modules: (seed.modules || []).map((m, i) => ({ ...m, no: String(i + 1).padStart(2, '0') })),

    stackTitle: seed.stackTitle || seed.short,
    stackNote: seed.stackNote || 'core skill',
    stackLead:
      seed.stackLead ||
      `${seed.short} is the centre. These are the tools you use around it in a working team.`,
    technologies: technologies(seed),

    joiners: joiners(seed),

    careerPath: CAREER_PATH,
    careers: seed.careers || [],
    future: futureScope(seed),
    certification: certification(seed),
    salary: salary(seed),
    compare: compare(seed),
    tracks: tracks(seed),

    /* Editorial sections a course may bring with it. Each declares
       its own `slot`, and CoursePage mounts CourseNarrative once per
       slot so the copy sits beside the standard section it belongs
       with. Empty for every course that was not given one. */
    narrative: seed.narrative || [],

    /* the closing call to action, where a course wants its own */
    enquireEyebrow: seed.enquireEyebrow,
    enquireTitle: seed.enquireTitle,
    enquireText: seed.enquireText,

    featured: seed.featured,
    projects: seed.projects || [],

    testimonials: testimonials(seed),
    faqs: faqs(seed)
  }
}
