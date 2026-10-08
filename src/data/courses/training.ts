/* Internship & Training track — one seed per slug.

   These are the programmes in the "Internship & Training" menu. They
   are format-led rather than subject-led: the student picks a duration
   and a track, and the syllabus is assembled from the same modules the
   subject courses use. See ./shared.js for the factory that turns these
   seeds into full page content. */

/* The Industrial Training page carries long-form editorial copy the
   other five programmes here do not. It lives in its own file because
   it is longer than all six seeds together — see
   ./industrial-training-copy.js */
import {
  FD_OVERVIEW,
  FD_JOINERS,
  FD_BENEFITS,
  FD_NARRATIVE,
  FD_FAQS
} from './forty-five-days-training-copy'
import {
  SW_OVERVIEW,
  SW_JOINERS,
  SW_BENEFITS,
  SW_NARRATIVE,
  SW_FAQS
} from './six-weeks-training-copy'
import {
  FM_OVERVIEW,
  FM_JOINERS,
  FM_BENEFITS,
  FM_NARRATIVE,
  FM_FAQS
} from './four-months-training-copy'
import {
  SM_OVERVIEW,
  SM_JOINERS,
  SM_BENEFITS,
  SM_NARRATIVE,
  SM_FAQS
} from './six-months-training-copy'
import {
  IP_OVERVIEW,
  IP_JOINERS,
  IP_BENEFITS,
  IP_NARRATIVE,
  IP_FAQS
} from './internship-program-copy'
import {
  IT_OVERVIEW,
  IT_JOINERS,
  IT_NARRATIVE,
  IT_TESTIMONIALS,
  IT_FAQS
} from './industrial-training-copy'

export const TRAINING = [
  {
    slug: '45-days-training',
    /* Written for search rather than assembled from the course
       name — see CoursePage, which prefers it when present. */
    metaTitle: '45 Days Industrial Training in Ludhiana | techcadd',
    metaDescription:
      'Forty-five day industrial training at techcadd Ludhiana. Twenty-five days taught, thirteen days building your project, and a week on the report and viva.',
    name: '45 Days Industrial Training',
    short: '45 Days Training',
    subject: 'industrial training',
    category: 'Training',
    eyebrow: 'University-approved summer training',
    duration: '45 days',
    level: 'Beginner to project ready',
    headline: ['45 days.', 'One finished project.'],
    sub: 'The short industrial training most universities ask for, run as a working sprint — you pick a track, learn it in the first three weeks and spend the rest building something you can submit and defend.',
    projectCount: 'One major',
    trained: '1200+',
    highlights: [
      'Training letter and project certificate on completion',
      'Choose your track: development, data, AI, cloud or marketing',
      'Daily lab hours with a trainer in the room'
    ],
    code: {
      lang: 'sh',
      file: 'training.sh',
      lines: [
        '# 45 days, one track, one deliverable',
        'git clone techcadd/summer-training',
        'cd summer-training && ./setup.sh',
        '',
        'echo "week 1-3 : fundamentals + labs"',
        'echo "week 4-6 : project + viva prep"'
      ],
      command: './training.sh --track=web',
      output: 'project: ready to submit'
    },
    badges: ['Training letter', 'Live project', 'Viva prep', 'Any track'],
    modules: [
      {
        title: 'Orientation & track selection',
        tag: 'Days 1–3',
        description: 'Meet the trainer, set up the environment and lock the track you will spend the next six weeks in. Your project brief is agreed on day three, not in the last week.',
        skills: ['Tooling setup', 'Version control basics', 'Track selection', 'Project brief'],
        tech: ['Git', 'VS Code', 'GitHub'],
        outcome: 'A configured machine, a repository of your own and a signed-off project brief.'
      },
      {
        title: 'Core fundamentals',
        tag: 'Days 4–14',
        description: 'The base layer of your chosen track, taught the way it is used at work. Every session ends with a lab task that has to run before you leave.',
        skills: ['Track fundamentals', 'Daily lab tasks', 'Debugging habits', 'Reading documentation'],
        tech: ['Track stack', 'Terminal', 'Git'],
        outcome: 'Ten small programs that work, and the confidence to write the eleventh unaided.'
      },
      {
        title: 'Applied module',
        tag: 'Days 15–25',
        description: 'The part of the track employers actually pay for — frameworks, libraries and the data layer. This is where the fundamentals turn into something usable.',
        skills: ['Framework basics', 'Data storage', 'APIs & integration', 'Testing what you build'],
        tech: ['Framework', 'Database', 'REST'],
        outcome: 'A working module of your project — not a demo, a real piece of the final build.'
      },
      {
        title: 'Project build',
        tag: 'Days 26–38',
        description: 'Full days on your own project with the trainer reviewing progress every morning. Requirements change once, deliberately, so you learn how to handle it.',
        skills: ['Requirement analysis', 'Incremental delivery', 'Code review', 'Bug fixing'],
        tech: ['Track stack', 'Git branches', 'Deployment'],
        outcome: 'A finished, running project with a clean commit history.'
      },
      {
        title: 'Report, viva & submission',
        tag: 'Days 39–45',
        description: 'The paperwork universities grade you on, done properly: training report, project documentation, presentation and a mock viva with hard questions.',
        skills: ['Training report writing', 'Documentation', 'Presentation', 'Viva handling'],
        tech: ['Docs', 'Slides', 'Screen recording'],
        outcome: 'A submitted report, a rehearsed presentation and a training letter in hand.'
      }
    ],
    technologies: [
      { name: 'Git & GitHub', note: 'Version control from day one' },
      { name: 'VS Code', note: 'The editor you will keep using' },
      { name: 'Python / JavaScript', note: 'Depending on your track' },
      { name: 'MySQL', note: 'Where the project data lives' },
      { name: 'REST APIs', note: 'Talking to other systems' },
      { name: 'Postman', note: 'Testing what you built' },
      { name: 'Deployment', note: 'Getting it onto a live URL' },
      { name: 'Documentation', note: 'The report your college grades' }
    ],
    careers: [
      { icon: 'curriculum', title: 'Training credit', text: 'The 45-day industrial training your university requires, with a letter that names the work you actually did.' },
      { icon: 'stack', title: 'First portfolio project', text: 'One finished, running project you can put on a resume long after the training ends.' },
      { icon: 'code', title: 'Junior developer intern', text: 'Enough working knowledge of a stack to be useful in a first internship.' },
      { icon: 'chart', title: 'Data trainee', text: 'If you take the data track: cleaning, analysing and charting real datasets.' },
      { icon: 'spark', title: 'AI track starter', text: 'A grounding in AI tooling and prompt work that the longer programmes build on.' },
      { icon: 'support', title: 'Continued access', text: 'Doubt support and a discounted upgrade to the four- or six-month programme.' }
    ],
    featured: {
      title: 'Track project with live deployment',
      kicker: 'Final submission',
      text: 'Whichever track you choose, you finish with one complete application: a real requirement, a database behind it, a working interface in front of it, and a live URL your examiner can open. You write the report, present it, and answer questions about every decision you made.',
      tags: ['Live URL', 'Database', 'Report', 'Viva'],
      difficulty: 'Intermediate',
      status: 'Submission ready',
      lines: [
        'training/',
        '├── src/          # the application you built',
        '├── docs/         # training report + screenshots',
        '├── README.md     # setup and run instructions',
        '└── deploy.log    # the day it went live'
      ]
    },
    projects: [
      { title: 'Student record system', text: 'CRUD, search and reports over a real schema.', tags: ['Database', 'Forms'], size: 'sm' },
      { title: 'Portfolio website', text: 'A responsive site that hosts everything else you build.', tags: ['HTML/CSS', 'Deploy'], size: 'lg' },
      { title: 'Data cleaning notebook', text: 'Take a messy public dataset and make it usable.', tags: ['Pandas', 'Charts'], size: 'sm' },
      { title: 'API integration demo', text: 'Pull live data from a public API and store it.', tags: ['REST', 'JSON'], size: 'sm' },
      { title: 'Mini admin dashboard', text: 'Login, roles and a table that actually paginates.', tags: ['Auth', 'UI'], size: 'lg' }
    ],
    future: {
      title: 'What 45 days is actually worth',
      lead: 'Six weeks is short. It is not long enough to make you a developer, and anyone who tells you otherwise is selling something. What it is long enough for is a working foundation and one finished project — and those two things change what happens in your next two years.',
      horizon: [
        {
          when: 'Immediately',
          title: 'The requirement, met properly',
          text: 'A training letter, a project certificate and a report your department accepts — plus a project that runs, which is more than most submissions can claim.'
        },
        {
          when: 'Next semester',
          title: 'A head start on placements',
          text: 'You go into campus season with one deployed project and a repository with commits in it. That is usually the difference between being shortlisted and being screened out on paper.'
        },
        {
          when: 'Year 1–2',
          title: 'A track worth continuing',
          text: 'Most students who finish these 45 days already know which direction they want. The four- and six-month programmes pick up exactly where this leaves off, with credit for what you have already covered.'
        }
      ],
      trends: [
        {
          icon: 'curriculum',
          title: 'Colleges are tightening the format',
          text: 'Universities increasingly ask for a project report and a viva, not just an attendance letter. This programme is built backwards from that requirement, which is why the last week is documentation and rehearsal.'
        },
        {
          icon: 'spark',
          title: 'AI has raised the floor',
          text: 'Basic code is cheap now. What is not cheap is a student who can read it, debug it and explain it — so the labs make you fix broken code, not just generate working code.'
        },
        {
          icon: 'stack',
          title: 'One project beats five certificates',
          text: 'Recruiters skim certificates and open repositories. A single thing that runs, with a readable README, does more for you than a folder of course completions.'
        },
        {
          icon: 'career',
          title: 'Internships start earlier',
          text: 'Companies now hire second- and third-year students for part-time internships. Having a project by then is what makes that possible.'
        }
      ],
      industriesNote: 'Where 45-day students go next',
      industries: ['IT services', 'Product startups', 'Campus placements', 'Longer training tracks', 'Freelance projects']
    },
    audience: 'Engineering, BCA, MCA, B.Sc. IT and diploma students who need summer or winter industrial training, plus anyone who wants a short, structured introduction to a technical track.',
    prerequisite: 'No. The first week starts from the basics of your chosen track. Students who already know the fundamentals are moved into the applied module sooner.',

    overviewTitle: FD_OVERVIEW.title,
    overviewLead: FD_OVERVIEW.lead,
    overviewBody: FD_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this" once, in its own words */
    joiners: FD_JOINERS,
    /* replaces the six generic reasons the factory writes */
    benefits: FD_BENEFITS,
    narrative: FD_NARRATIVE,

    /* A complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to. The two
       questions that used to sit here inline are kept after the
       written set — they answer things it does not. */
    ownFaqs: true,
    faqs: [
      ...FD_FAQS,
      {
        q: 'Will my university accept this training?',
        a: 'Yes. You receive a 45-day industrial training letter on techcadd letterhead, a project certificate and a training report in the format universities in Punjab normally ask for. We have run this programme for students from PTU/IKGPTU, LPU, GNDU, CT and Chandigarh University among others.'
      },
      {
        q: 'Can I choose which technology I train in?',
        a: 'Yes. You pick a track at the start — web development, Python, data science, AI, cloud, cybersecurity or digital marketing — and the syllabus above is delivered in that track.'
      }
    ]
  },

  {
    slug: '6-weeks-training',
    /* Written for search rather than assembled from the course
       name — see CoursePage, which prefers it when present. */
    metaTitle: '6 Weeks Training in Ludhiana | techcadd',
    metaDescription:
      'Six week short term training at techcadd Ludhiana. One technology, daily lab practice, a mini project and a certificate for your college file.',
    name: '6 Weeks Industrial Training',
    short: '6 Weeks Training',
    subject: 'industrial training',
    category: 'Training',
    eyebrow: 'Six-week vacation training',
    duration: '6 weeks',
    level: 'Beginner to project ready',
    headline: ['Six weeks.', 'A skill you keep.'],
    sub: 'A six-week training block built around one technology: three weeks of taught fundamentals, three weeks of supervised building, and a certificate that names what you actually shipped.',
    projectCount: 'One major, two minor',
    trained: '1500+',
    highlights: [
      'Six weeks, five days a week, trainer-led',
      'Weekly assessment so nothing is left half-learnt',
      'Training letter, project certificate and report'
    ],
    code: {
      lang: 'py',
      file: 'six_weeks.py',
      lines: [
        'from techcadd import Training',
        '',
        'training = Training(weeks=6, track="python")',
        'training.learn(weeks=3)',
        'training.build(project="capstone")',
        'print(training.certificate())'
      ],
      command: 'python six_weeks.py',
      output: 'Certificate(track="python", project="capstone")'
    },
    badges: ['6 weeks', 'Trainer-led', 'Certificate', 'Project'],
    modules: [
      {
        title: 'Foundations',
        tag: 'Week 1',
        description: 'Syntax, structure and the tooling around your chosen track. By Friday you are writing small programs without looking at the slides.',
        skills: ['Core syntax', 'Data types', 'Control flow', 'Editor & terminal'],
        tech: ['Git', 'VS Code', 'Track language'],
        outcome: 'Five working programs and a repository you push to daily.'
      },
      {
        title: 'Building blocks',
        tag: 'Week 2',
        description: 'Functions, data structures and error handling — the pieces every real program is assembled from, taught through problems rather than definitions.',
        skills: ['Functions & modules', 'Collections', 'File handling', 'Error handling'],
        tech: ['Track stack', 'JSON', 'CSV'],
        outcome: 'A small tool that reads, transforms and writes real data.'
      },
      {
        title: 'The applied layer',
        tag: 'Week 3',
        description: 'The framework, library or platform your track is known for. This is the week that turns a student into someone who can be given a task.',
        skills: ['Framework structure', 'Routing or pipelines', 'Data layer', 'Configuration'],
        tech: ['Framework', 'Database'],
        outcome: 'A running application skeleton with your own data in it.'
      },
      {
        title: 'Integration & testing',
        tag: 'Week 4',
        description: 'Connect to the outside world — APIs, authentication, third-party services — and prove it works instead of assuming it does.',
        skills: ['REST APIs', 'Authentication', 'Testing basics', 'Debugging'],
        tech: ['Postman', 'REST', 'Test runner'],
        outcome: 'A feature that talks to a live service and has tests to prove it.'
      },
      {
        title: 'Capstone build',
        tag: 'Week 5',
        description: 'Your own project, built in supervised sessions with a daily standup and a code review at the end of each day.',
        skills: ['Planning', 'Incremental delivery', 'Code review', 'Deployment'],
        tech: ['Track stack', 'Git', 'Hosting'],
        outcome: 'A deployed capstone with a public link.'
      },
      {
        title: 'Report & presentation',
        tag: 'Week 6',
        description: 'Documentation, the training report, a presentation and a mock viva — plus resume and portfolio work so the six weeks stay useful after submission.',
        skills: ['Report writing', 'Documentation', 'Presenting', 'Resume & portfolio'],
        tech: ['Docs', 'Slides', 'LinkedIn'],
        outcome: 'A submitted report, a rehearsed viva and an updated resume.'
      }
    ],
    technologies: [
      { name: 'Git & GitHub', note: 'Every day, not just at the end' },
      { name: 'Python / JavaScript', note: 'Chosen with your track' },
      { name: 'Framework', note: 'Django, React or equivalent' },
      { name: 'MySQL', note: 'Schema design and queries' },
      { name: 'REST APIs', note: 'Integration work' },
      { name: 'Postman', note: 'Verifying your endpoints' },
      { name: 'Hosting', note: 'A live link for your capstone' },
      { name: 'Slides & docs', note: 'The part colleges grade' }
    ],
    careers: [
      { icon: 'curriculum', title: 'Six-week training credit', text: 'The vacation training your semester requires, documented properly.' },
      { icon: 'code', title: 'Trainee developer', text: 'Working knowledge of one stack, deep enough to be given real tasks.' },
      { icon: 'stack', title: 'Portfolio starter', text: 'A capstone plus two smaller projects, all deployed and linkable.' },
      { icon: 'chart', title: 'Analyst trainee', text: 'On the data track, the querying and charting a first analyst role needs.' },
      { icon: 'bot', title: 'Automation assistant', text: 'Scripts that remove repetitive work — the fastest way to be useful on a team.' },
      { icon: 'support', title: 'Route into the long programme', text: 'Credit towards the four- and six-month tracks if you continue.' }
    ],
    featured: {
      title: 'Six-week capstone',
      kicker: 'Week 5 deliverable',
      text: 'One application, built in the open across the fifth week: planned on Monday, reviewed every evening, deployed by Friday. You choose the domain, we hold the standard — it has to run, it has to handle bad input, and you have to be able to explain every file in it.',
      tags: ['Deployed', 'Reviewed daily', 'Documented'],
      difficulty: 'Intermediate',
      status: 'Live link',
      lines: [
        'Mon  plan + schema',
        'Tue  core feature',
        'Wed  integration',
        'Thu  polish + tests',
        'Fri  deploy + review'
      ]
    },
    projects: [
      { title: 'Task manager', text: 'Accounts, lists, due dates and a filter that works.', tags: ['CRUD', 'Auth'], size: 'lg' },
      { title: 'Weather dashboard', text: 'Live API data, cached, charted and searchable.', tags: ['REST', 'Charts'], size: 'sm' },
      { title: 'Blog engine', text: 'Posts, comments and an admin area behind a login.', tags: ['Database', 'Admin'], size: 'sm' },
      { title: 'Report generator', text: 'Turn a spreadsheet into a formatted PDF report.', tags: ['Automation', 'Files'], size: 'sm' },
      { title: 'Landing page suite', text: 'Three responsive pages that score well on Lighthouse.', tags: ['Responsive', 'Deploy'], size: 'lg' }
    ],
    future: {
      title: 'What six weeks sets up',
      lead: 'The value of a six-week block is not the certificate at the end of it. It is that you leave knowing one stack well enough to keep going on your own — and that is the point at which self-study starts working instead of stalling.',
      horizon: [
        {
          when: 'Immediately',
          title: 'Requirement closed, project live',
          text: 'Training letter, project certificate, report and a capstone on a public URL. The submission is done and the project outlives it.'
        },
        {
          when: 'Next 6 months',
          title: 'You can build without a trainer',
          text: 'Six taught weeks with a weekly assessment gets you past the stage where every new problem needs someone in the room. From here, documentation and practice carry you.'
        },
        {
          when: 'Year 1–2',
          title: 'Internship and entry roles',
          text: 'One stack, understood properly, is what junior job posts actually ask for. Students who continue into the longer programmes convert this into placements considerably faster.'
        }
      ],
      trends: [
        {
          icon: 'stack',
          title: 'Depth in one stack beats breadth in five',
          text: 'Job descriptions name a framework, not a syllabus. Six weeks is exactly enough for one of them if the time is not scattered across four.'
        },
        {
          icon: 'spark',
          title: 'AI tooling is assumed, not impressive',
          text: 'Using an assistant is now table stakes. Knowing when its answer is wrong is the skill, and that only comes from having written the thing yourself first.'
        },
        {
          icon: 'chart',
          title: 'Assessment is moving to take-homes',
          text: 'More companies test with a small build than with a written round. The weekly assessments here are deliberately shaped like those tasks.'
        },
        {
          icon: 'career',
          title: 'Remote hiring widened the pool',
          text: 'Junior roles that would once have required relocating are now open to anyone who can demonstrate the work. That cuts both ways — the bar on demonstration went up.'
        }
      ],
      industriesNote: 'Where six-week students go next',
      industries: ['IT services', 'Startups', 'Campus placements', '4 & 6 month tracks', 'Freelance work']
    },
    audience: 'B.Tech, BCA, MCA, B.Sc. IT and polytechnic students with a six-week training requirement, and anyone with a free vacation who wants to come out of it with a deployed project.',
    prerequisite: 'No. Week one assumes nothing. If you already code, your trainer moves you to the applied layer in week two so you get more project time.',

    overviewTitle: SW_OVERVIEW.title,
    overviewLead: SW_OVERVIEW.lead,
    overviewBody: SW_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this" once, in its own words */
    joiners: SW_JOINERS,
    /* replaces the six generic reasons the factory writes */
    benefits: SW_BENEFITS,
    narrative: SW_NARRATIVE,

    /* A complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to. The
       questions that used to sit here inline are kept after the
       supplied set — they answer things the source document does
       not, and dropping them would lose real answers. */
    ownFaqs: true,
    faqs: [
      ...SW_FAQS,
      {
        q: 'How is this different from the 45 days training?',
        a: 'The syllabus overlaps, but six weeks is delivered as six taught weeks with a weekly assessment, while the 45-day programme front-loads the teaching and gives you a longer stretch of project time. Pick the one your university has specified; if it accepts either, choose six weeks for more structure and 45 days for more building.'
      },
      {
        q: 'Are the timings flexible?',
        a: 'Batches run in the morning, afternoon and evening, five days a week. You can switch batch timing once during the programme if your college schedule changes.'
      }
    ]
  },

  {
    slug: '4-months-training',
    /* Written for search rather than assembled from the course
       name — see CoursePage, which prefers it when present. */
    metaTitle: '4 Months Training in Ludhiana | techcadd',
    metaDescription:
      'Four month long term training at techcadd Ludhiana. Full stack depth, a live project, a documented portfolio and interview preparation.',
    name: '4 Months Industrial Training',
    short: '4 Months Training',
    subject: 'industrial training',
    category: 'Training',
    eyebrow: 'Semester-long industrial training',
    duration: '4 months',
    level: 'Beginner to job ready',
    headline: ['Four months.', 'A hireable profile.'],
    sub: 'The semester training programme: a complete technology stack, three graded projects, interview preparation and placement support — structured so the last month is spent talking to companies, not still learning.',
    projectCount: 'Three graded',
    trained: '900+',
    highlights: [
      'Full stack of one discipline, not a survey of five',
      'Three graded projects with written reviews',
      'Month four is interviews, mocks and referrals'
    ],
    code: {
      lang: 'js',
      file: 'semester',
      lines: [
        'const plan = {',
        '  month1: "fundamentals",',
        '  month2: "framework + data",',
        '  month3: "capstone",',
        '  month4: "interviews"',
        '}',
        'export default plan'
      ],
      command: 'node semester',
      output: 'ready for placement drives'
    },
    badges: ['4 months', '3 projects', 'Mock interviews', 'Placement support'],
    modules: [
      {
        title: 'Foundations & tooling',
        tag: 'Weeks 1–3',
        description: 'The language, the editor, the terminal and version control — set up once, properly, so the next fifteen weeks are spent on the work and not the setup.',
        skills: ['Core language', 'Data structures', 'Git workflow', 'Debugging'],
        tech: ['Git', 'GitHub', 'VS Code'],
        outcome: 'A repository with twenty small, working programs and a green commit history.'
      },
      {
        title: 'Programming depth',
        tag: 'Weeks 4–6',
        description: 'Object orientation, modules, error handling and the patterns that keep a growing codebase readable. The first graded project closes this module.',
        skills: ['OOP', 'Modules & packages', 'Exceptions', 'Code structure', 'Unit tests'],
        tech: ['Test runner', 'Package manager'],
        outcome: 'Graded project one: a structured console or script application with tests.'
      },
      {
        title: 'Databases & APIs',
        tag: 'Weeks 7–9',
        description: 'Schema design, queries that do not fall over on real volume, and the REST layer that exposes them. This is the module interviewers probe hardest.',
        skills: ['Schema design', 'SQL & joins', 'ORM basics', 'REST design', 'Auth tokens'],
        tech: ['MySQL', 'PostgreSQL', 'Postman'],
        outcome: 'A documented API with authentication, tested end to end.'
      },
      {
        title: 'Framework & interface',
        tag: 'Weeks 10–12',
        description: 'The framework your track is built on, plus the interface layer. You take the API from the last module and put a real front end on it.',
        skills: ['Framework architecture', 'State & data flow', 'Forms & validation', 'Responsive layout'],
        tech: ['Django / React / equivalent', 'CSS'],
        outcome: 'Graded project two: a full application, front to back.'
      },
      {
        title: 'Capstone & deployment',
        tag: 'Weeks 13–15',
        description: 'A larger project of your own choosing, taken from a blank repository to a live URL with environment configuration, logging and a rollback plan.',
        skills: ['Project planning', 'Deployment', 'Environment config', 'Monitoring basics', 'Documentation'],
        tech: ['Cloud host', 'CI basics', 'Docker intro'],
        outcome: 'Graded project three: a deployed capstone with a README anyone can follow.'
      },
      {
        title: 'Placement phase',
        tag: 'Week 16 onward',
        description: 'Resume and portfolio rebuilt around your three projects, aptitude practice, technical mocks with written feedback, and referrals into our hiring network.',
        skills: ['Resume & portfolio', 'Aptitude', 'DSA refresher', 'Mock interviews', 'HR rounds'],
        tech: ['LinkedIn', 'GitHub profile', 'Portfolio site'],
        outcome: 'A profile that gets shortlisted, and interviews you have already rehearsed.'
      }
    ],
    technologies: [
      { name: 'Git & GitHub', note: 'Branches, reviews, history' },
      { name: 'Core language', note: 'Python, Java or JavaScript' },
      { name: 'Framework', note: 'Django, Spring or React' },
      { name: 'MySQL', note: 'Schema, joins, indexing' },
      { name: 'REST APIs', note: 'Design and consumption' },
      { name: 'Docker', note: 'An introduction, not a detour' },
      { name: 'Cloud hosting', note: 'Where your capstone lives' },
      { name: 'Testing', note: 'Proof your code works' }
    ],
    careers: [
      { icon: 'code', title: 'Junior developer', text: 'The role this programme is aimed at — enough stack knowledge to take a ticket on day one.' },
      { icon: 'server', title: 'Backend trainee', text: 'API design, databases and the server side of a product.' },
      { icon: 'stack', title: 'Full-stack intern', text: 'Comfortable moving between the interface and the data layer.' },
      { icon: 'chart', title: 'Data analyst', text: 'On the analytics track: SQL, cleaning, dashboards and reporting.' },
      { icon: 'bot', title: 'Automation engineer', text: 'Scripting, scheduling and integration work.' },
      { icon: 'support', title: 'Support engineer', text: 'Technical enough to diagnose, communicative enough to explain.' }
    ],
    featured: {
      title: 'Three graded projects',
      kicker: 'The spine of the programme',
      text: 'Not one capstone at the end, but three deliverables spread across the four months — each one reviewed in writing against the same rubric a code review uses. You see the feedback, you fix it, and the second project is measurably better than the first. That progression is what the placement phase sells.',
      tags: ['Written reviews', 'Rubric graded', 'All deployed'],
      difficulty: 'Advanced',
      status: 'Portfolio ready',
      lines: [
        'project 1  structure + tests        week 6',
        'project 2  full application         week 12',
        'project 3  deployed capstone        week 15',
        '',
        '→ reviewed against the same rubric each time'
      ]
    },
    projects: [
      { title: 'Inventory system', text: 'Stock, suppliers, alerts and exportable reports.', tags: ['Database', 'Reports'], size: 'lg' },
      { title: 'Booking platform', text: 'Availability, payments mock-up and email confirmations.', tags: ['API', 'Auth'], size: 'sm' },
      { title: 'Analytics dashboard', text: 'One dataset, five questions, five charts that answer them.', tags: ['SQL', 'Charts'], size: 'sm' },
      { title: 'Chat application', text: 'Real-time messages with rooms and presence.', tags: ['Sockets', 'State'], size: 'sm' },
      { title: 'Job board', text: 'Two user types, search, filters and applications.', tags: ['Full stack', 'Deploy'], size: 'lg' }
    ],
    future: {
      title: 'The road ahead after four months',
      lead: 'Four months is the shortest honest route from no experience to a first developer role. It works because month four is not more syllabus — it is interviews, and you arrive at them with three reviewed projects instead of a list of topics.',
      horizon: [
        {
          when: 'Year 0–1',
          title: 'Junior developer or trainee',
          text: 'The role this programme is aimed at. Three graded projects, a deployed capstone and rehearsed answers are enough to clear a junior technical round at most services companies and many product teams.'
        },
        {
          when: 'Year 2–4',
          title: 'Own a part of the product',
          text: 'Backend, front end, data or infrastructure — you specialise into one and become the person tickets in that area get assigned to. That is where the first significant salary jump sits.'
        },
        {
          when: 'Year 5+',
          title: 'Senior and lead work',
          text: 'Design decisions, code review, mentoring and estimating other people\'s work. The technical ability is assumed by then; you are paid for judgement about what not to build.'
        }
      ],
      trends: [
        {
          icon: 'chart',
          title: 'Portfolios decide the shortlist',
          text: 'Screening now starts with your GitHub and a deployed link. Three projects reviewed against the same rubric show progression, which reads far better than three unrelated demos.'
        },
        {
          icon: 'spark',
          title: 'Juniors are expected to use AI well',
          text: 'The question in interviews is shifting from "can you write this" to "can you tell whether this is right". Reviews here are run that way deliberately.'
        },
        {
          icon: 'server',
          title: 'Everyone deploys now',
          text: 'The line between developer and operations keeps thinning. Containers, environments and a pipeline that goes green are part of a junior brief, not a specialisation.'
        },
        {
          icon: 'career',
          title: 'Hiring cycles are shorter and more frequent',
          text: 'Fewer mass campus drives, more rolling hires. Being ready in four months rather than at graduation is now an advantage rather than a scheduling problem.'
        }
      ],
      industriesNote: 'Sectors hiring four-month graduates',
      industries: ['IT services', 'Product startups', 'Banking & fintech', 'E-commerce', 'EdTech', 'Healthcare tech']
    },
    audience: 'Final-year and pre-final-year students on a semester training requirement, recent graduates preparing for placement drives, and working professionals changing track with time to commit.',
    prerequisite: 'No. The first three weeks are foundations. Students with prior coding experience are assessed in week one and can start from the depth module instead.',

    overviewTitle: FM_OVERVIEW.title,
    overviewLead: FM_OVERVIEW.lead,
    overviewBody: FM_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this" once, in its own words */
    joiners: FM_JOINERS,
    /* replaces the six generic reasons the factory writes */
    benefits: FM_BENEFITS,
    narrative: FM_NARRATIVE,

    /* A complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to. The
       questions that used to sit here inline are kept after the
       supplied set — they answer things the source document does
       not, and dropping them would lose real answers. */
    ownFaqs: true,
    faqs: [
      ...FM_FAQS,
      {
        q: 'Does this count as my semester industrial training?',
        a: 'Yes. Four-month and six-month industrial training is the format most universities accept for the final-semester requirement. You receive a training letter, a project certificate, a stipend-eligible internship letter where applicable, and a report in the required format.'
      },
      {
        q: 'How does the placement support work?',
        a: 'From month four onward: resume and portfolio rebuild, weekly aptitude and technical practice, at least three mock interviews with written feedback, and referrals to companies in our hiring network. Support continues after the programme ends until you are placed.'
      }
    ]
  },

  {
    slug: '6-months-training',
    /* Written for search rather than assembled from the course
       name — see CoursePage, which prefers it when present. */
    metaTitle: '6 Months Training in Ludhiana | techcadd',
    metaDescription:
      'Six month training at techcadd Ludhiana. A full stack, a chosen specialisation, two projects, portfolio documentation and interview preparation.',
    name: '6 Months Industrial Training',
    short: '6 Months Training',
    subject: 'industrial training',
    category: 'Training',
    eyebrow: 'Full industrial training with internship',
    duration: '6 months',
    level: 'Beginner to job ready',
    headline: ['Six months.', 'Trained, then employed.'],
    sub: 'The complete industrial training programme: five months of stack training and live project work, one month inside a real delivery team, and placement support that runs until you are hired.',
    projectCount: 'Four, including a client build',
    trained: '800+',
    rating: '4.9/5',
    highlights: [
      'Two months of live project work on a real brief',
      'Internship letter with an experience line, not just attendance',
      'Placement support that continues after the course ends'
    ],
    code: {
      lang: 'py',
      file: 'six_months.py',
      lines: [
        'from techcadd import Programme',
        '',
        'p = Programme(months=6, track="full-stack")',
        'p.train(months=3)',
        'p.build(live_project=True, months=2)',
        'p.place(mocks=5, referrals=True)'
      ],
      command: 'python six_months.py',
      output: 'Placed(support="until hired")'
    },
    badges: ['6 months', 'Live project', 'Internship letter', 'Placement'],
    modules: [
      {
        title: 'Foundations',
        tag: 'Month 1',
        description: 'Language, tooling, data structures and version control, taught to the point where writing code stops being the hard part of the problem.',
        skills: ['Core language', 'Data structures', 'Algorithms basics', 'Git workflow', 'Debugging'],
        tech: ['Git', 'GitHub', 'VS Code'],
        outcome: 'A month of daily commits and thirty small programs that all run.'
      },
      {
        title: 'Applied engineering',
        tag: 'Month 2',
        description: 'Object orientation, testing, databases and API design — the working vocabulary of a software team, applied to a project that grows week by week.',
        skills: ['OOP & design', 'Unit testing', 'SQL & schema design', 'REST APIs', 'Auth'],
        tech: ['MySQL', 'Postman', 'Test runner'],
        outcome: 'A tested, documented API with real authentication.'
      },
      {
        title: 'Framework & front end',
        tag: 'Month 3',
        description: 'The framework your track runs on, plus the interface layer, plus the part most courses skip: making it usable on a phone and fast on a slow connection.',
        skills: ['Framework architecture', 'Component design', 'Forms & validation', 'Responsive UI', 'Performance'],
        tech: ['Django / React / Spring', 'CSS', 'Lighthouse'],
        outcome: 'A complete application, front to back, that holds up on a mobile connection.'
      },
      {
        title: 'Live project — build',
        tag: 'Month 4',
        description: 'A real brief with real constraints, run like a delivery team: sprint planning, standups, tickets, pull requests and reviews from someone who will reject them.',
        skills: ['Sprint planning', 'Ticket estimation', 'Pull requests', 'Peer review', 'Refactoring'],
        tech: ['Jira-style board', 'Git branches', 'CI'],
        outcome: 'Merged work in a shared codebase, reviewed by someone other than you.'
      },
      {
        title: 'Live project — ship',
        tag: 'Month 5',
        description: 'Deployment, environments, logging, monitoring and the handover documentation. The project goes live and then has to keep working, which is a different skill.',
        skills: ['Deployment', 'Environments & secrets', 'Logging', 'Monitoring', 'Handover docs'],
        tech: ['Cloud host', 'Docker', 'CI/CD'],
        outcome: 'A shipped product with an on-call runbook and a real user or two.'
      },
      {
        title: 'Placement phase',
        tag: 'Month 6',
        description: 'Resume and portfolio built around the shipped project, DSA and aptitude practice, five recorded mock interviews with written feedback, and referrals.',
        skills: ['Resume & portfolio', 'DSA practice', 'System design basics', 'Mock interviews', 'Salary negotiation'],
        tech: ['LinkedIn', 'GitHub', 'Portfolio site'],
        outcome: 'Interview-ready, with a shipped product to talk about instead of a syllabus.'
      }
    ],
    technologies: [
      { name: 'Git & GitHub', note: 'Branching, PRs, reviews' },
      { name: 'Core language', note: 'Python, Java or JavaScript' },
      { name: 'Framework', note: 'Django, Spring or React' },
      { name: 'MySQL', note: 'Design, query, optimise' },
      { name: 'REST APIs', note: 'Built and consumed' },
      { name: 'Docker', note: 'Consistent environments' },
      { name: 'CI/CD', note: 'Automated build and deploy' },
      { name: 'Cloud hosting', note: 'Where the live project runs' }
    ],
    careers: [
      { icon: 'code', title: 'Software developer', text: 'The primary outcome — a developer role on a product or services team.' },
      { icon: 'server', title: 'Backend developer', text: 'APIs, databases and the reliability of the server side.' },
      { icon: 'stack', title: 'Full-stack developer', text: 'Comfortable owning a feature from schema to screen.' },
      { icon: 'django', title: 'Framework specialist', text: 'Deep in one framework, which is what most job posts actually ask for.' },
      { icon: 'bot', title: 'DevOps trainee', text: 'Containers, pipelines and deployment — the ship half of the job.' },
      { icon: 'chart', title: 'Data engineer trainee', text: 'On the data track: pipelines, warehouses and scheduled jobs.' }
    ],
    featured: {
      title: 'Two months on a live brief',
      kicker: 'Months 4 and 5',
      text: 'Not a simulated project. A real brief with a real deadline, run the way a delivery team runs: you take tickets, you estimate them, you open pull requests, and someone senior rejects the ones that are not good enough. By the end it is deployed, monitored and handed over — and that is the experience line on your internship letter.',
      tags: ['Sprints', 'Pull requests', 'Deployed', 'Handover'],
      difficulty: 'Advanced',
      status: 'Shipped',
      lines: [
        'sprint 1  discovery + schema',
        'sprint 2  core features',
        'sprint 3  integration + hardening',
        'sprint 4  deploy + monitoring',
        '',
        '→ every PR reviewed before merge'
      ]
    },
    projects: [
      { title: 'Client web platform', text: 'The live brief — a full product, sprinted and shipped.', tags: ['Team', 'Deployed'], size: 'lg' },
      { title: 'Internal admin tool', text: 'Roles, audit logs and bulk operations.', tags: ['Auth', 'Database'], size: 'sm' },
      { title: 'Public REST API', text: 'Versioned, rate-limited and documented.', tags: ['REST', 'Docs'], size: 'sm' },
      { title: 'CI/CD pipeline', text: 'Test, build and deploy on every push to main.', tags: ['Docker', 'CI'], size: 'sm' },
      { title: 'Portfolio & case studies', text: 'Each project written up the way a hiring manager reads it.', tags: ['Writing', 'Deploy'], size: 'lg' }
    ],
    future: {
      title: 'The road ahead after six months',
      lead: 'Six months buys you the one thing a course cannot fake: two of those months are spent inside a delivery team, on a real brief, with your work reviewed by someone who can reject it. That is experience, and it is what the letter at the end describes.',
      horizon: [
        {
          when: 'Year 0–1',
          title: 'Developer, not trainee',
          text: 'You interview with a shipped product, a merged commit history and an internship letter that names your role. Candidates who can talk about a release cycle interview differently from candidates who can talk about a syllabus.'
        },
        {
          when: 'Year 2–4',
          title: 'Feature ownership',
          text: 'Trusted with a whole feature rather than a ticket: spec, build, release, and the bugs that follow. This is the stage where you stop being managed and start being briefed.'
        },
        {
          when: 'Year 5+',
          title: 'Lead, architect or specialise deep',
          text: 'Either you take responsibility for a team and its standards, or you go far enough into one domain that people route the hard problems to you. Both routes open from here; neither opens without shipped work behind you.'
        }
      ],
      trends: [
        {
          icon: 'mentor',
          title: 'Experience is the scarce thing',
          text: 'There is no shortage of graduates who have completed courses. There is a shortage of graduates who have had a pull request rejected and learnt something from it.'
        },
        {
          icon: 'server',
          title: 'Ship-and-operate is one job now',
          text: 'Writing the feature and keeping it alive have merged. Months four and five deliberately include the unglamorous half — monitoring, logs and the hotfix.'
        },
        {
          icon: 'spark',
          title: 'AI raised expectations of juniors',
          text: 'Teams expect more output from a first-year developer than they did three years ago, and more judgement about what the tooling produced. Both are trainable; neither is trainable in six weeks.'
        },
        {
          icon: 'career',
          title: 'Referrals beat applications',
          text: 'Most first jobs now come through someone who has seen your work. The live project is deliberately structured so that several people have.'
        }
      ],
      industriesNote: 'Sectors hiring six-month graduates',
      industries: ['Product startups', 'IT services', 'Banking & fintech', 'SaaS', 'E-commerce', 'Healthcare tech', 'Manufacturing tech']
    },
    audience: 'Final-year students on a six-month training requirement, graduates who want a genuine internship line on their resume, and career changers who can commit six months to becoming employable.',
    prerequisite: 'No. Month one is foundations. Experienced students are assessed in the first week and can join at the applied engineering stage, which gives them a longer live-project run.',

    overviewTitle: SM_OVERVIEW.title,
    overviewLead: SM_OVERVIEW.lead,
    overviewBody: SM_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this" once, in its own words */
    joiners: SM_JOINERS,
    /* replaces the six generic reasons the factory writes */
    benefits: SM_BENEFITS,
    narrative: SM_NARRATIVE,

    /* A complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to. The
       questions that used to sit here inline are kept after the
       supplied set — they answer things the source document does
       not, and dropping them would lose real answers. */
    ownFaqs: true,
    faqs: [
      ...SM_FAQS,
      {
        q: 'Is the internship part paid?',
        a: 'The live project runs inside techcadd and stipend-eligible placements with partner companies are offered to students whose month-three review is strong. Everyone receives an internship letter that names the project and the role you held on it.'
      },
      {
        q: 'What happens if I am not placed by the end?',
        a: 'Placement support does not stop at month six. Mock interviews, profile reviews and referrals continue until you are hired, and you keep access to the doubt-support channel.'
      }
    ]
  },

  {
    slug: 'industrial-training',
    /* Written for search rather than assembled from the course
       name — see CoursePage, which prefers it when present. */
    metaTitle: 'Industrial Training in Ludhiana | techcadd',
    metaDescription:
      'Industrial training at techcadd Ludhiana. Work inside a project team with real deadlines and reviews. Certificate and internship letter issued.',
    name: 'Industrial Training Program',
    short: 'Industrial Training',
    subject: 'industrial training',
    category: 'Training',
    eyebrow: 'Industry training across every duration',
    duration: '6 weeks to 6 months',
    level: 'Beginner to job ready',
    headline: ['Industrial training.', 'Run like industry.'],
    sub: 'University-recognised industrial training in Ludhiana, delivered by people who build software for a living — pick your duration and your track, and finish with a letter that describes work rather than attendance.',
    projectCount: 'Duration-dependent',
    trained: '4000+',
    rating: '4.9/5',
    metrics: [
      { value: '4.9/5', label: 'Student rating' },
      { value: '4000+', label: 'Students trained' },
      { value: '9', label: 'Training tracks' },
      { value: 'Yes', label: 'Placement support' }
    ],
    highlights: [
      'Recognised by universities across Punjab and beyond',
      'Nine tracks — development, data, AI, cloud, security, design, marketing',
      'Training letter, project certificate and report included'
    ],
    code: {
      lang: 'sh',
      file: 'enrol.sh',
      lines: [
        '# pick a duration, pick a track',
        'techcadd enrol \\',
        '  --duration 6w|45d|4m|6m \\',
        '  --track dev|data|ai|cloud|security \\',
        '  --mode classroom|online',
        'techcadd status'
      ],
      command: './enrol.sh --duration 6m --track dev',
      output: 'enrolled · batch starts monday'
    },
    badges: ['University approved', '9 tracks', 'Live projects', 'Letter + report'],
    modules: [
      {
        title: 'Choosing the right format',
        tag: 'Before you start',
        description: 'Six weeks, 45 days, four months or six months — the difference is how much project time you get after the teaching ends. A counsellor maps your university requirement to the right format before you pay anything.',
        skills: ['Requirement mapping', 'Track selection', 'Batch planning'],
        tech: ['Counselling', 'Syllabus copy'],
        outcome: 'A written plan: format, track, batch timing and what you submit at the end.'
      },
      {
        title: 'Technical foundations',
        tag: 'Phase 1',
        description: 'Whatever the track, the first phase is the same in shape: the language or platform, the tooling, version control, and the habit of finishing every session with something that runs.',
        skills: ['Core skills of the track', 'Tooling & environment', 'Version control', 'Debugging'],
        tech: ['Git', 'GitHub', 'Track stack'],
        outcome: 'A working environment and a repository with daily commits.'
      },
      {
        title: 'Applied specialisation',
        tag: 'Phase 2',
        description: 'The frameworks, libraries and platforms that make the track employable, taught against real requirements rather than textbook exercises.',
        skills: ['Frameworks & libraries', 'Data layer', 'Integration', 'Testing'],
        tech: ['Framework', 'Database', 'REST'],
        outcome: 'A working module of the project you will submit.'
      },
      {
        title: 'Project work',
        tag: 'Phase 3',
        description: 'Supervised building with daily reviews. Longer formats add sprint planning, pull requests and peer review so the process resembles a real team, not a lab.',
        skills: ['Requirement analysis', 'Incremental delivery', 'Code review', 'Deployment'],
        tech: ['Git branches', 'CI', 'Cloud host'],
        outcome: 'A deployed project with a commit history that shows how it got there.'
      },
      {
        title: 'Documentation & viva',
        tag: 'Phase 4',
        description: 'The training report, project documentation, presentation and a mock viva run by someone who asks the questions your examiner will.',
        skills: ['Report writing', 'Documentation', 'Presentation', 'Viva handling'],
        tech: ['Docs', 'Slides'],
        outcome: 'A submitted report and a presentation you have already delivered once.'
      },
      {
        title: 'Career phase',
        tag: 'Phase 5',
        description: 'Included in the four- and six-month formats: resume, portfolio, aptitude, technical mocks and referrals into our hiring network.',
        skills: ['Resume & portfolio', 'Aptitude', 'Mock interviews', 'Referrals'],
        tech: ['LinkedIn', 'GitHub', 'Portfolio site'],
        outcome: 'A profile built around shipped work rather than a list of subjects.'
      }
    ],
    technologies: [
      { name: 'Development', note: 'Python, Java, MERN, PHP' },
      { name: 'Data & analytics', note: 'SQL, Pandas, Power BI' },
      { name: 'AI & ML', note: 'Machine learning and generative AI' },
      { name: 'Cloud & DevOps', note: 'AWS, Docker, CI/CD' },
      { name: 'Cybersecurity', note: 'Ethical hacking and defence' },
      { name: 'Design', note: 'AutoCAD, SolidWorks, Revit' },
      { name: 'Digital marketing', note: 'SEO, ads and analytics' },
      { name: 'Git & GitHub', note: 'Common to every track' }
    ],
    careers: [
      { icon: 'curriculum', title: 'Training requirement met', text: 'A letter, a certificate and a report in the format your university asks for.' },
      { icon: 'stack', title: 'Portfolio of real work', text: 'Projects that run, are deployed, and can be opened by an interviewer.' },
      { icon: 'code', title: 'Developer roles', text: 'The development tracks lead directly into junior developer and intern positions.' },
      { icon: 'chart', title: 'Data and analytics roles', text: 'Analyst and reporting roles for students on the data track.' },
      { icon: 'server', title: 'Cloud and infrastructure', text: 'Deployment, containers and pipelines for the cloud track.' },
      { icon: 'mentor', title: 'A trainer you can call', text: 'Doubt support continues after the training letter is issued.' }
    ],
    featured: {
      title: 'One project, taken seriously',
      kicker: 'Every format, every track',
      text: 'The length changes; the standard does not. Whether you are here for six weeks or six months, you leave with a project that runs, a repository that shows how you built it, documentation someone else could follow, and the ability to answer a hard question about any part of it.',
      tags: ['Runs', 'Documented', 'Defensible'],
      difficulty: 'Scales with format',
      status: 'Submission ready',
      lines: [
        '6 weeks   → 1 capstone, deployed',
        '45 days   → 1 capstone + long build phase',
        '4 months  → 3 graded projects + placement',
        '6 months  → live client brief + internship letter'
      ]
    },
    projects: [
      { title: 'Track capstone', text: 'The main submission, sized to your format.', tags: ['Deployed', 'Report'], size: 'lg' },
      { title: 'Integration exercise', text: 'Connect two systems that were not built to talk.', tags: ['API', 'Data'], size: 'sm' },
      { title: 'Automation script', text: 'Take a manual process and make it disappear.', tags: ['Scripting'], size: 'sm' },
      { title: 'Documentation set', text: 'README, architecture note and a runbook.', tags: ['Writing'], size: 'sm' },
      { title: 'Presentation & viva pack', text: 'Slides, demo script and the questions you will be asked.', tags: ['Viva'], size: 'lg' }
    ],
    future: {
      title: 'What industrial training is really for',
      lead: 'On paper it is a box your university needs ticked. In practice it is the first time most students are asked to finish something to a standard set by someone other than an examiner — and that is the part employers are looking for evidence of.',
      horizon: [
        {
          when: 'Year 0',
          title: 'The requirement, and the proof',
          text: 'Letter, certificate, report and viva — plus a project that runs. The paperwork satisfies the college; the project is what you actually use afterwards.'
        },
        {
          when: 'Year 1–2',
          title: 'Junior roles and internships',
          text: 'The longer formats end in a placement phase: resume, mocks and referrals. Students on the four- and six-month tracks are interviewing before the training letter is even filed.'
        },
        {
          when: 'Year 3–5',
          title: 'Specialisation',
          text: 'The track you pick here tends to be the track you stay in. Choosing it deliberately, with a counsellor and a syllabus in front of you, is worth more than drifting into whatever the first job offered.'
        }
      ],
      trends: [
        {
          icon: 'curriculum',
          title: 'The letter alone stopped working',
          text: 'Employers have seen enough attendance certificates. What still carries weight is a letter that names a project, a role and a reviewer — which is the only kind we issue.'
        },
        {
          icon: 'spark',
          title: 'Every track now has an AI layer',
          text: 'Development, data, marketing, security — each one has changed in the last two years. Syllabi are revised every intake rather than every few years, because they have to be.'
        },
        {
          icon: 'server',
          title: 'Deployment became part of the basics',
          text: 'It is no longer enough for a project to run on your laptop. Getting it onto a live URL, with environment configuration that works, is now expected of a junior.'
        },
        {
          icon: 'career',
          title: 'Hiring reaches beyond the metros',
          text: 'Remote and hybrid roles mean students training in Ludhiana apply for the same positions as students in Bengaluru. The filter is the portfolio, not the postcode.'
        }
      ],
      industriesNote: 'Sectors our training students join',
      industries: [
        'IT services',
        'Product startups',
        'Banking & fintech',
        'Healthcare',
        'E-commerce',
        'Manufacturing',
        'EdTech',
        'Government & PSUs'
      ]
    },
    audience: 'Students from any university with an industrial training requirement — B.Tech, BCA, MCA, B.Sc. IT, polytechnic and diploma — plus graduates who want structured, supervised project experience.',
    prerequisite: 'No. Every format starts from the foundations of its track, and students who already have a background are assessed in week one and moved forward.',

    /* Written as a local landing page. Its copy names Ludhiana
       throughout, which is also the default centre, so nothing here
       has to override `city`. */
    overviewTitle: IT_OVERVIEW.title,
    overviewLead: IT_OVERVIEW.lead,
    overviewBody: IT_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this" once, in its own words */
    joiners: IT_JOINERS,
    narrative: IT_NARRATIVE,

    /* UNVERIFIED quotes. Read the banner above IT_TESTIMONIALS in
       ./industrial-training-copy.js before this page goes live.
       Deleting this one line falls back to the generic quotes in
       shared.js. */
    testimonials: IT_TESTIMONIALS,

    /* A complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to. The three
       questions that used to sit here inline — university acceptance,
       online batches, and which documents you receive — are the first
       three entries in IT_FAQS. They did not come from the marketing
       copy and must not be dropped. */
    ownFaqs: true,
    faqs: IT_FAQS,

    enquireEyebrow: 'Enquire now',
    enquireTitle: 'Turn your academic learning into real industry experience',
    enquireText:
      'Free, no-obligation guidance on track options, duration, fees and eligibility — send this form and a counsellor calls you back.'
  },

  {
    slug: 'internship-program',
    /* Written for search rather than assembled from the course
       name — see CoursePage, which prefers it when present. */
    metaTitle: 'Internship Program in Ludhiana | techcadd',
    metaDescription:
      'Internship program at techcadd Ludhiana. Live project work under a mentor with real deadlines and reviews. Internship letter and experience record issued.',
    name: 'Internship Program',
    short: 'Internship Program',
    subject: 'internship work',
    category: 'Training',
    eyebrow: 'Work on a real product team',
    duration: '2–6 months',
    level: 'Trained beginner to job ready',
    headline: ['A real internship.', 'Real tickets, real reviews.'],
    sub: 'Not shadowing, not a certificate for attendance — you join a delivery team, take tickets from a live board, open pull requests, and get them rejected until they are good enough to merge.',
    projectCount: 'Live product work',
    trained: '600+',
    rating: '4.9/5',
    highlights: [
      'You are given tickets, not tutorials',
      'Every pull request is reviewed before it merges',
      'Internship letter names the product and your role'
    ],
    code: {
      lang: 'sh',
      file: 'week-one.sh',
      lines: [
        'git checkout -b feat/TC-142-export-csv',
        '# ... your first ticket',
        'git commit -m "add csv export to reports"',
        'git push origin HEAD',
        '',
        '# open a PR. someone senior will read it.'
      ],
      command: 'gh pr create --fill',
      output: 'PR #218 · 2 reviewers requested'
    },
    badges: ['Live board', 'Code review', 'Standups', 'Letter'],
    modules: [
      {
        title: 'Onboarding',
        tag: 'Week 1',
        description: 'Repository access, environment setup, the codebase tour and your first ticket — deliberately small, deliberately real. You ship something in week one.',
        skills: ['Codebase navigation', 'Local setup', 'Branching convention', 'First PR'],
        tech: ['Git', 'GitHub', 'Project stack'],
        outcome: 'One merged pull request with your name on it.'
      },
      {
        title: 'Working the board',
        tag: 'Weeks 2–4',
        description: 'Tickets of increasing size, estimated by you and checked against how long they actually take. Daily standups, and a retro at the end of each sprint that includes your work.',
        skills: ['Estimation', 'Standups', 'Ticket hygiene', 'Asking good questions'],
        tech: ['Issue board', 'Git branches'],
        outcome: 'A sprint you contributed to from planning through to demo.'
      },
      {
        title: 'Code review, both ways',
        tag: 'Weeks 5–8',
        description: 'Your work is reviewed line by line, and you start reviewing other interns. Reading someone else\'s code carefully is the fastest way to improve your own.',
        skills: ['Receiving review', 'Giving review', 'Refactoring', 'Writing tests'],
        tech: ['Pull requests', 'Test runner', 'Linter'],
        outcome: 'Pull requests that pass review the first time more often than not.'
      },
      {
        title: 'Owning a feature',
        tag: 'Weeks 9–14',
        description: 'A feature of your own from requirement to release: you write the spec, break it into tickets, build it, test it, document it and demo it to the team.',
        skills: ['Spec writing', 'Task breakdown', 'Feature delivery', 'Demoing'],
        tech: ['Project stack', 'CI', 'Docs'],
        outcome: 'A feature in production that users touch, with your name in the changelog.'
      },
      {
        title: 'Release & support',
        tag: 'Weeks 15–20',
        description: 'What happens after merge: deployment, monitoring, the bug report that arrives at 6pm, and the discipline of fixing it without breaking something else.',
        skills: ['Deployment', 'Monitoring', 'Incident handling', 'Hotfixes'],
        tech: ['CI/CD', 'Logs', 'Cloud host'],
        outcome: 'Experience of a release cycle from both ends, including the messy end.'
      },
      {
        title: 'Exit & placement',
        tag: 'Final weeks',
        description: 'A written performance review, an internship letter that describes your actual contribution, a portfolio case study of your feature, and referrals.',
        skills: ['Performance review', 'Case study writing', 'Resume', 'Interviews'],
        tech: ['Portfolio site', 'LinkedIn', 'GitHub'],
        outcome: 'A letter, a reference and a story you can tell in an interview.'
      }
    ],
    technologies: [
      { name: 'Git & GitHub', note: 'Branches, PRs, reviews' },
      { name: 'Issue board', note: 'Tickets, estimates, sprints' },
      { name: 'Project stack', note: 'Whatever the product runs on' },
      { name: 'MySQL', note: 'Real data, real constraints' },
      { name: 'REST APIs', note: 'The contract between teams' },
      { name: 'CI/CD', note: 'Your PR has to go green' },
      { name: 'Docker', note: 'Same environment as everyone else' },
      { name: 'Monitoring', note: 'Knowing when you broke it' }
    ],
    careers: [
      { icon: 'code', title: 'Junior developer', text: 'The most common next step — you already know how a team works.' },
      { icon: 'stack', title: 'Product engineer', text: 'Someone who can own a feature end to end, not just a task.' },
      { icon: 'server', title: 'Backend engineer', text: 'APIs, data and reliability, learnt against real traffic.' },
      { icon: 'bot', title: 'QA & automation', text: 'Testing, tooling and the pipelines that catch mistakes early.' },
      { icon: 'mentor', title: 'Reference you can use', text: 'A named engineer who worked with you and will pick up the phone.' },
      { icon: 'career', title: 'Conversion to full time', text: 'Strong interns are offered roles with us or referred to partner companies.' }
    ],
    featured: {
      title: 'Your feature, in production',
      kicker: 'The point of the whole thing',
      text: 'Somewhere around week nine you stop being given tasks and start being given a problem. You write the spec, argue about it, break it into tickets, build it, and watch it go out in a release. When an interviewer asks what you have actually done, this is the answer — and it is a better answer than any coursework.',
      tags: ['Spec', 'Shipped', 'In the changelog'],
      difficulty: 'Real',
      status: 'In production',
      lines: [
        'TC-201  spec + estimate        you',
        'TC-202  api + migration        you',
        'TC-203  interface              you',
        'TC-204  tests + docs           you',
        '',
        'released v2.4.0 — thanks to the intern team'
      ]
    },
    projects: [
      { title: 'Live product tickets', text: 'The actual board, from week one.', tags: ['Team', 'Reviewed'], size: 'lg' },
      { title: 'Feature ownership', text: 'One feature, spec to release, yours.', tags: ['Spec', 'Ship'], size: 'sm' },
      { title: 'Test coverage push', text: 'Find the untested paths and cover them.', tags: ['Testing'], size: 'sm' },
      { title: 'Performance fix', text: 'A slow page, profiled and made fast.', tags: ['Profiling'], size: 'sm' },
      { title: 'Case study write-up', text: 'Your feature, written the way a hiring manager reads it.', tags: ['Portfolio'], size: 'lg' }
    ],
    future: {
      title: 'The road ahead after an internship',
      lead: 'Everything a course teaches you can also be learnt alone, slowly. What cannot be learnt alone is how a team decides what to build, argues about it, reviews it and lives with the result. That is the whole point of this programme, and it is what your next employer is buying.',
      horizon: [
        {
          when: 'Year 0–1',
          title: 'Hired as someone who has done this before',
          text: 'You interview with a changelog entry, a reviewer who will vouch for you and a feature you can walk through end to end. That is a materially different conversation from a fresher interview.'
        },
        {
          when: 'Year 2–4',
          title: 'The engineer things get handed to',
          text: 'Having owned a feature once, you get given the next one sooner. Ownership compounds faster than any other kind of experience in this field.'
        },
        {
          when: 'Year 5+',
          title: 'Technical lead or founding engineer',
          text: 'People who learnt delivery early tend to end up running it — either leading a team or being the first engineer somewhere small, where knowing how a release actually works is the whole job.'
        }
      ],
      trends: [
        {
          icon: 'mentor',
          title: 'Code review is the real curriculum',
          text: 'Nothing improves a developer faster than having their work read carefully by someone better. It is also the thing almost no self-taught path provides.'
        },
        {
          icon: 'spark',
          title: 'AI changed what juniors are for',
          text: 'Boilerplate is no longer a junior\'s job. Understanding the system well enough to say why a generated answer is wrong is — and that is learnt inside a codebase, not beside one.'
        },
        {
          icon: 'stack',
          title: 'Product sense is now expected early',
          text: 'Engineers are asked why a feature exists, not just how to build it. Writing your own spec in week nine is where that habit starts.'
        },
        {
          icon: 'career',
          title: 'Conversion is the common route in',
          text: 'A large share of first jobs are internship conversions. Being genuinely useful for six months is a better strategy than applying to two hundred listings.'
        }
      ],
      industriesNote: 'Where interns land',
      industries: ['Product startups', 'SaaS', 'IT services', 'Agencies', 'Fintech', 'Founding engineer roles']
    },
    audience: 'Students and graduates who have already covered the fundamentals — through one of our courses, a degree or self-study — and want supervised experience of how software is actually delivered.',
    prerequisite: 'Yes, some. You need working knowledge of one language and basic Git before you start; a short assessment at enrolment confirms it. If you are not there yet, the 4- or 6-month training programme leads into this.',

    overviewTitle: IP_OVERVIEW.title,
    overviewLead: IP_OVERVIEW.lead,
    overviewBody: IP_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this" once, in its own words */
    joiners: IP_JOINERS,
    /* replaces the six generic reasons the factory writes */
    benefits: IP_BENEFITS,
    narrative: IP_NARRATIVE,

    /* A complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to. The
       questions that used to sit here inline are kept after the
       supplied set — they answer things the source document does
       not, and dropping them would lose real answers. */
    ownFaqs: true,
    faqs: [
      ...IP_FAQS,
      {
        q: 'Is this a paid internship?',
        a: 'Stipends are offered from the second month to interns whose first-month review is strong, and to everyone placed with a partner company. The programme itself is enrolment-based, and the fee structure is explained in counselling before you commit.'
      },
      {
        q: 'What does the internship letter actually say?',
        a: 'The product you worked on, the duration, your role, the features you delivered and a line from the engineer who reviewed your work. It is a reference, not a participation slip.'
      },
      {
        q: 'Can I do this alongside my final semester?',
        a: 'Yes. Part-time tracks of 20 hours a week are available and run over a longer calendar. Full-time interns move faster and generally get feature ownership sooner.'
      }
    ]
  }
]
