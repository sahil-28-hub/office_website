/* ==================================================================
   Our Team — content for /team.

   Photographs resolve from public/photos/team/. Any that are missing
   fall back to the initials tile the card draws for itself, so the
   page is complete before the photography is — drop a file in and it
   appears, no code change.

   Every string here is placeholder-safe but written as real copy, so
   what needs replacing is obvious: names, roles and the one line each
   person is described by.
================================================================== */

export const TEAM_HERO = {
  eyebrow: 'The people behind it',
  title: 'The team you actually',
  accent: 'learn from.',
  lead: 'Trainers who have shipped the work they teach, counsellors who answer the phone, and a placement desk that knows the hiring managers by name. This is who you meet when you walk in.',
  image: '/gallery/2.png',
  stats: [
    { to: 24, suffix: '+', label: 'Trainers and staff' },
    { to: 12, suffix: '+', label: 'Years of teaching' },
    { to: 40, suffix: '+', label: 'Courses covered' },
    { to: 9, suffix: 'k+', label: 'Students taught' }
  ],
  actions: [
    { label: 'Join the team', href: '#team-apply' },
    { label: 'Talk to us', href: '/contact', kind: 'ghost' }
  ]
}

export const TEAM_INTRO = {
  eyebrow: 'How we hire',
  title: 'We hire people who have done the job,',
  accent: 'not people who have read about it.',
  body: [
    'A trainer here has spent years in the work before they stand in front of a class. That is not a slogan on a wall — it is why a question about a real deployment, a real ad budget or a real client argument gets a real answer instead of a slide.',
    'The rest of the building matters just as much. Counselling picks up when you call. The placement desk keeps the employer relationships warm between batches. Studio and support keep the labs running so a class never loses an hour to a broken machine.'
  ]
}

/* ------------------------------------------------------------------
   The people.

   `photo` is a path in public/ — leave it out and the card draws the
   person's initials on a brand tile instead.

   `group` sorts them into the filter rail at the top of the section.
------------------------------------------------------------------ */
export const TEAM_GROUPS = ['Leadership', 'Training', 'Placement', 'Support']

export const TEAM_MEMBERS = [
  {
    name: 'Gourav Gupta',
    role: 'Founder & Director',
    group: 'Leadership',
    photo: '/about/gourav-gupta.jpg',
    bio: 'Started techcadd with one room and one machine. Still sits in on the first session of every new course.',
    tags: ['Strategy', 'Curriculum']
  },
  {
    name: 'Add a name',
    role: 'Centre Head',
    group: 'Leadership',
    bio: 'Runs the campus day to day — batches, timetables, and the standard every class is held to.',
    tags: ['Operations']
  },
  {
    name: 'Add a name',
    role: 'Senior Trainer — Full Stack',
    group: 'Training',
    bio: 'Ships production React and Node, and teaches the parts a tutorial leaves out: deployment, review, and why the first design was wrong.',
    tags: ['React', 'Node', 'MySQL']
  },
  {
    name: 'Add a name',
    role: 'Senior Trainer — Data & AI',
    group: 'Training',
    bio: 'Takes a class from a spreadsheet to a trained model and an honest evaluation of whether it is any good.',
    tags: ['Python', 'ML', 'GA4']
  },
  {
    name: 'Add a name',
    role: 'Trainer — Digital Marketing',
    group: 'Training',
    bio: 'Runs live ad accounts with real budgets, and makes every student defend their numbers in front of the room.',
    tags: ['SEO', 'Google Ads', 'Meta']
  },
  {
    name: 'Add a name',
    role: 'Trainer — Design',
    group: 'Training',
    bio: 'Teaches the craft and the client conversation: why a layout works, and how to say so to someone paying for it.',
    tags: ['Figma', 'UI/UX']
  },
  {
    name: 'Add a name',
    role: 'Placement Head',
    group: 'Placement',
    bio: 'Keeps the employer list current and the students interview-ready — resumes, mock rounds, and the referral itself.',
    tags: ['Hiring', 'Interviews']
  },
  {
    name: 'Add a name',
    role: 'Career Counsellor',
    group: 'Placement',
    bio: 'The first voice most students hear. Maps where you are now to the shortest honest route to where you want to be.',
    tags: ['Counselling']
  },
  {
    name: 'Add a name',
    role: 'Lab & Systems',
    group: 'Support',
    bio: 'Keeps forty machines, the network and the software licences working, so a class never loses an hour to a setup problem.',
    tags: ['Infrastructure']
  },
  {
    name: 'Add a name',
    role: 'Student Support',
    group: 'Support',
    bio: 'Admissions, fees, certificates and the hundred small things between enrolling and finishing.',
    tags: ['Admin']
  }
]

/* ------------------------------------------------------------------
   The values rail — what the team is held to, not what it is called.
------------------------------------------------------------------ */
export const TEAM_VALUES = [
  {
    icon: 'spark',
    title: 'Teach what you have shipped',
    text: 'Nobody teaches a tool here they have not used to deliver something real. It is the difference between an answer and a guess.'
  },
  {
    icon: 'career',
    title: 'The student finishes, not the syllabus',
    text: 'A module is done when the room can do it, not when the slides run out. Trainers stay back; that is normal here.'
  },
  {
    icon: 'growth',
    title: 'Say the honest number',
    text: 'About placements, about salaries, about how hard a course is. A student who was told the truth stays; one who was sold stops coming.'
  },
  {
    icon: 'stack',
    title: 'Keep learning in public',
    text: 'The field moves. Every trainer carries their own learning plan, and the curriculum is rewritten when the work changes — not on a schedule.'
  }
]

/* ------------------------------------------------------------------
   The application form at the bottom of the page.

   This one does NOT go to the leads table — an application to work
   here is not an enquiry about a course, and mixing them would leave
   the counselling team filtering CVs out of their call list every
   morning. It writes to `team_applications` instead. See
   src/lib/submitTeamApplication.js and server/routes/team.js.
------------------------------------------------------------------ */
export const TEAM_APPLY = {
  eyebrow: 'Work here',
  title: 'We are usually hiring trainers.',
  lead: 'If you have done the work and can explain it to a room, tell us what you teach and we will call you. No form letters — a person reads every one of these.',
  roles: [
    'Trainer — Programming',
    'Trainer — Data & AI',
    'Trainer — Digital Marketing',
    'Trainer — Design',
    'Trainer — Civil / Mechanical',
    'Placement & Employer Relations',
    'Career Counsellor',
    'Lab & Systems',
    'Student Support',
    'Something else'
  ],
  note: 'We reply to every application within a week, including the ones we cannot take further.'
}

export const TEAM_CTA = {
  eyebrow: 'Come and meet them',
  title: 'Sit through a real class before you decide.',
  lead: 'The fastest way to judge a trainer is to watch one teach. Book a free demo session and sit in on a running batch.',
  primary: { label: 'Book a free demo', href: '/contact' },
  secondary: { label: 'Browse all courses', href: '/courses', icon: 'arrowUpRight' },
  note: 'techcadd Ludhiana · Mon to Sat, 9am to 7pm'
}
