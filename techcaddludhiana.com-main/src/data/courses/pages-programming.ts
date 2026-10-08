/* ==================================================================
   Courses dropdown → Programming column.

   Nine courses. Each one already carries long-form Ludhiana copy in
   its own -copy.js file, so what is added here is only what the long
   page layout needs on top of that: the layout flag itself, the search
   metadata, and the salary table with its five questions.

   See ./course-pages.js for how these are assembled and ./index.js for
   where they are merged over the seeds.
================================================================== */

import { SALARY_MARKETS as MARKETS, salaryQuestions as questions } from './shared'

/* Repeated verbatim across the column, because it is true of all nine:
   the local programming market is IT services and in-house teams, and
   the honest framing is that the metros and remote work are where the
   money is. */
const CERT_LEAD = (subject) =>
  `A verifiable techcadd certificate, an internship letter for the live-project phase, and — the part a technical interviewer actually opens — the ${subject} projects behind it, with the code.`

export const PAGES_PROGRAMMING = {
  /* ---------------------------------------------------------------- */
  python: {
    layout: 'full',
    metaTitle: 'Python Course in Ludhiana — Projects & Placement | techcadd',
    metaDescription:
      'Python course in Ludhiana at techcadd — basics to Django, FastAPI and automation, with five real projects, small batches and placement support.',
    certification: {
      title: 'Get certified in Python',
      lead: CERT_LEAD('Python')
    },
    salary: {
      title: 'What Python pays in Ludhiana and beyond',
      lead:
        'Python is the widest-opening skill we teach — it leads into backend work, automation, data and AI, and the ranges below reflect all four routes.',
      regions: MARKETS,
      rows: [
        { role: 'Python Developer', level: 'Entry', cells: ['₹2.4–4.2 LPA', '₹4–9 LPA', '₹20k–60k / project'] },
        { role: 'Backend Developer (Django / FastAPI)', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5.5–12 LPA', '₹35k–1L / project'] },
        { role: 'Automation Engineer', level: 'Entry to mid', cells: ['₹2.8–5.0 LPA', '₹5–11 LPA', '₹25k–75k / project'] },
        { role: 'Senior Python Developer', level: 'Mid (2–4 yrs)', cells: ['₹5.5–10 LPA', '₹10–20 LPA', '₹80k–2.2L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which job roles open after a Python course in Ludhiana?',
          a: 'Python developer, backend developer, Django or FastAPI developer, automation engineer, data analyst and junior software engineer. Python is also the entry requirement for our data science, machine learning and Generative AI courses, so it is as often a first step as a destination.'
        },
        growth:
          'Backend and automation work moves fastest, because both are measurable — an API you built, a process that used to take a person a day. Most students see a meaningful revision between 18 and 24 months.',
        remote:
          'Yes. Python scripting, scraping, automation and small backend builds are among the most commonly contracted freelance jobs in India, and they are reviewed on a repository rather than an address.',
        industries:
          'IT services and software firms in Ludhiana and Mohali, ERP and billing vendors serving the hosiery and auto-parts units, e-commerce sellers, logistics operations, accounting and finance offices automating reporting, and the agencies building internal tools for all of them.',
        higher:
          'Python is the language most MCA, M.Tech and data-science programmes assume you already have. Arriving with working projects rather than syllabus exercises is a real advantage in an admissions interview.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  java: {
    layout: 'full',
    metaTitle: 'Java Course in Ludhiana — Core Java & Spring Boot | techcadd',
    metaDescription:
      'Java course in Ludhiana at techcadd — core Java, OOP, collections, JDBC, Spring Boot and REST APIs, with real projects and placement preparation.',
    certification: {
      title: 'Get certified in Java',
      lead: CERT_LEAD('Java')
    },
    salary: {
      title: 'What Java pays in Ludhiana and beyond',
      lead:
        'Java is the language most campus and service-company hiring still runs on, which makes it the steadiest of the programming routes rather than the flashiest.',
      regions: MARKETS,
      rows: [
        { role: 'Java Developer', level: 'Entry', cells: ['₹2.6–4.5 LPA', '₹4–9 LPA', '₹25k–70k / project'] },
        { role: 'Spring Boot Developer', level: 'Entry to mid', cells: ['₹3.2–6.0 LPA', '₹6–13 LPA', '₹40k–1.1L / project'] },
        { role: 'QA Automation Engineer', level: 'Entry', cells: ['₹2.4–4.2 LPA', '₹4–9 LPA', '₹25k–65k / project'] },
        { role: 'Senior Java Engineer', level: 'Mid (2–4 yrs)', cells: ['₹6–11 LPA', '₹11–22 LPA', '₹90k–2.4L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which job roles open after a Java course?',
          a: 'Java developer, backend engineer, Spring Boot developer, QA automation engineer and product software engineer. Java remains the most common language in campus placement tests, which is why the course keeps a data-structures track running alongside the framework work.'
        },
        growth:
          'Steadily, and it rewards staying. Java salaries start close to the market average and pass it around the three-year mark, particularly for engineers who learn Spring Boot properly rather than by copying configuration.',
        remote:
          'Less than JavaScript or Python — enterprise Java work tends to be employed rather than contracted. Remote full-time roles are common; short freelance briefs are not.',
        industries:
          'IT services firms across Ludhiana, Mohali and Chandigarh, banking and finance back-office operations, ERP vendors serving local manufacturing, and the product companies in NCR and Bengaluru that hire heavily from Punjab campuses.',
        higher:
          'Directly relevant to MCA and M.Tech coursework, and the data-structures half of the course is the part that carries into placement tests and competitive exams.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  'c-cpp': {
    layout: 'full',
    metaTitle: 'C & C++ Course in Ludhiana — Programming Basics | techcadd',
    metaDescription:
      'C and C++ course in Ludhiana at techcadd — pointers, memory, data structures, OOP and STL, for placement tests, embedded work and a real foundation.',
    certification: {
      title: 'Get certified in C & C++',
      lead: CERT_LEAD('C and C++')
    },
    salary: {
      title: 'What C and C++ pay, and what they are really for',
      lead:
        'C and C++ are rarely the whole job. They are the foundation that makes every later language easier and the reason candidates clear placement rounds — read the table with that in mind.',
      regions: MARKETS,
      rows: [
        { role: 'Software Developer (C/C++)', level: 'Entry', cells: ['₹2.4–4.2 LPA', '₹4–9 LPA', '—'] },
        { role: 'Embedded Engineer', level: 'Entry to mid', cells: ['₹2.6–4.8 LPA', '₹4.5–10 LPA', '₹30k–80k / project'] },
        { role: 'Systems Programmer', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5.5–12 LPA', '—'] },
        { role: 'Senior C++ Developer', level: 'Mid (2–4 yrs)', cells: ['₹5.5–10 LPA', '₹10–22 LPA', '₹80k–2L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Is there work in C and C++, or is it only for exams?',
          a: 'Both. Embedded and systems roles hire for it directly, and every campus placement test and government technical exam is written around it. Most students take this course for the foundation and the placement rounds, then specialise elsewhere — which is a perfectly good reason to take it.'
        },
        growth:
          'Slower to start and unusually durable. Engineers who understand memory and pointers properly debug faster in every language they touch afterwards, and that shows up in reviews long before it shows up in a job title.',
        remote:
          'Limited. Embedded work needs hardware and systems work tends to be in-house. This is the one course in the column where we would not sell you a freelance story.',
        industries:
          'Auto-component and machine-tool manufacturers around Ludhiana adding embedded control, instrumentation and testing firms, IT services companies for their systems work, and the defence and PSU exams that a good number of Punjab students sit for.',
        higher:
          'It is the single most useful preparation for M.Tech entrance papers, GATE and campus tests. Everything in those papers assumes C-level thinking about memory and complexity.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  kotlin: {
    layout: 'full',
    metaTitle: 'Kotlin & Android Course in Ludhiana | techcadd',
    metaDescription:
      'Kotlin and Android course in Ludhiana at techcadd — Jetpack Compose, coroutines, Room and Play Store publishing, with real apps shipped.',
    certification: {
      title: 'Get certified in Kotlin',
      lead: CERT_LEAD('Kotlin and Android')
    },
    salary: {
      title: 'What Android and Kotlin work pays',
      lead:
        'App development is one of the few skills where a student can be earning from a portfolio before they are employed by anyone — the third column here is not decoration.',
      regions: MARKETS,
      rows: [
        { role: 'Android Developer', level: 'Entry', cells: ['₹2.4–4.5 LPA', '₹4–9 LPA', '₹25k–80k / app'] },
        { role: 'Kotlin Backend Developer', level: 'Entry to mid', cells: ['₹3.2–5.8 LPA', '₹6–12 LPA', '₹40k–1.1L / project'] },
        { role: 'Cross-Platform Developer', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5–11 LPA', '₹35k–1L / project'] },
        { role: 'Senior Android Developer', level: 'Mid (2–4 yrs)', cells: ['₹6–11 LPA', '₹11–22 LPA', '₹1L–2.6L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles does an Android and Kotlin course open?',
          a: 'Android developer, mobile app developer, cross-platform developer and Kotlin backend developer. A published app on the Play Store does more for the first interview than any certificate, which is why publishing is part of the course rather than an afterthought.'
        },
        growth:
          'Fast for developers who keep shipping. Android hiring looks at your Play Store listings first, so the gap between a developer with three published apps and one with none is visible before the interview starts.',
        remote:
          'Very. App builds are a standard freelance contract — local businesses, coaching institutes and retailers in Ludhiana all commission them, and the same work is contracted internationally at several times the rate.',
        industries:
          'Software and app development firms in Ludhiana and Mohali, e-commerce and delivery businesses, coaching institutes and schools with their own apps, healthcare and clinic chains, and a steady stream of small businesses wanting a first app.',
        higher:
          'Useful practical evidence for an MCA or a computer applications degree, and the Kotlin and coroutines material transfers cleanly to any JVM specialisation.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  'web-designing': {
    layout: 'full',
    metaTitle: 'Web Designing Course in Ludhiana — HTML, CSS, UI | techcadd',
    metaDescription:
      'Web designing course in Ludhiana at techcadd — HTML, CSS, responsive layout, Figma and accessibility, with real client sites built and deployed.',
    certification: {
      title: 'Get certified in Web Designing',
      lead: CERT_LEAD('web design')
    },
    salary: {
      title: 'What web design pays in Ludhiana',
      lead:
        'Design salaries start low here and freelance rates start high relative to them — which is why a large share of this batch bills their first site before they take their first job.',
      regions: MARKETS,
      rows: [
        { role: 'Web Designer', level: 'Entry', cells: ['₹1.8–3.6 LPA', '₹3–7 LPA', '₹12k–45k / site'] },
        { role: 'UI Developer', level: 'Entry', cells: ['₹2.4–4.2 LPA', '₹4–9 LPA', '₹20k–60k / project'] },
        { role: 'UI/UX Designer', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5–12 LPA', '₹30k–90k / project'] },
        { role: 'Senior Designer / Frontend Lead', level: 'Mid (2–4 yrs)', cells: ['₹5–9 LPA', '₹9–18 LPA', '₹60k–1.8L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles does a web designing course lead to?',
          a: 'Web designer, UI developer, UI/UX designer, frontend developer and freelance designer. Students who continue into our Web Development course move into the frontend developer track, which pays noticeably better.'
        },
        growth:
          'It depends almost entirely on whether you add code. A designer who can build what they design roughly doubles their ceiling within two years; one who stays in Figma alone plateaus early in this market.',
        remote:
          'Extremely. Website builds are the most common freelance contract there is, and design work is reviewed on a portfolio link. Ludhiana businesses commission sites constantly, and the same skills win international contracts on the marketplaces.',
        industries:
          'Digital agencies across Ludhiana, hosiery and garment exporters needing catalogue and buyer-facing sites, real estate, clinics and hospitals, coaching institutes, retail and restaurant groups, and every small business that has outgrown a social media page.',
        higher:
          'Not an academic subject, but the portfolio counts for design school applications and for any mass-communication or multimedia degree.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  'web-development': {
    layout: 'full',
    metaTitle: 'Web Development Course in Ludhiana — Full Stack | techcadd',
    metaDescription:
      'Web development course in Ludhiana at techcadd — HTML, CSS, JavaScript, React, Node.js, databases and deployment, with real applications shipped.',
    certification: {
      title: 'Get certified in Web Development',
      lead: CERT_LEAD('web development')
    },
    salary: {
      title: 'What web development pays in Ludhiana and beyond',
      lead:
        'The broadest hiring market of any course we run, and the one where a deployed portfolio most reliably beats a degree.',
      regions: MARKETS,
      rows: [
        { role: 'Frontend Developer', level: 'Entry', cells: ['₹2.4–4.2 LPA', '₹4–9 LPA', '₹20k–65k / project'] },
        { role: 'Backend Developer', level: 'Entry to mid', cells: ['₹3.0–5.5 LPA', '₹5.5–12 LPA', '₹35k–1L / project'] },
        { role: 'Full Stack Developer', level: 'Entry to mid', cells: ['₹3.2–6.0 LPA', '₹6–13 LPA', '₹40k–1.2L / project'] },
        { role: 'Senior Full Stack Developer', level: 'Mid (2–4 yrs)', cells: ['₹6–11 LPA', '₹11–22 LPA', '₹1L–2.6L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which job roles open after a web development course?',
          a: 'Frontend developer, backend developer, full stack developer, web application developer and junior software engineer. It is also the most common route into a freelance income while still studying.'
        },
        growth:
          'Quickly, if you keep deploying. Web hiring is the most portfolio-driven market in Indian tech — three applications that run beat three years of a course list, and reviewers check the deployed link before the CV.',
        remote:
          'Yes, more than almost anything else. Web work is contracted globally, reviewed on a URL, and a developer in Ludhiana with a strong GitHub competes on even terms for it.',
        industries:
          'Agencies and software firms across Ludhiana and Mohali, e-commerce and D2C brands, export houses building buyer portals, logistics and distribution businesses, education groups, and in-house teams at the larger manufacturing companies.',
        higher:
          'Practical rather than academic, but it is the strongest possible portfolio for an MCA application and for any overseas computing programme that asks for a project record.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  'mern-stack': {
    layout: 'full',
    metaTitle: 'MERN Stack Course in Ludhiana — React & Node.js | techcadd',
    metaDescription:
      'MERN stack course in Ludhiana at techcadd — MongoDB, Express, React and Node.js with authentication, payments, testing and deployment.',
    certification: {
      title: 'Get certified in MERN Stack',
      lead: CERT_LEAD('MERN stack')
    },
    salary: {
      title: 'What MERN stack developers earn',
      lead:
        'The most requested stack in Indian startup and agency hiring, and the one where a single well-built application does the most work in an interview.',
      regions: MARKETS,
      rows: [
        { role: 'MERN Stack Developer', level: 'Entry', cells: ['₹2.8–5.0 LPA', '₹5–11 LPA', '₹30k–90k / project'] },
        { role: 'React Developer', level: 'Entry', cells: ['₹2.6–4.8 LPA', '₹4.5–10 LPA', '₹25k–80k / project'] },
        { role: 'Node.js Backend Developer', level: 'Entry to mid', cells: ['₹3.2–6.0 LPA', '₹6–13 LPA', '₹40k–1.2L / project'] },
        { role: 'Senior Full Stack (MERN)', level: 'Mid (2–4 yrs)', cells: ['₹6–11 LPA', '₹12–24 LPA', '₹1L–3L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Which roles hire specifically for MERN?',
          a: 'MERN and full stack developer, React developer, Node.js backend developer and SaaS product developer. Startups and agencies hire for the stack by name; larger companies hire for JavaScript and expect you to pick up their variant.'
        },
        growth:
          'Fast in the first three years. React and Node experience compounds because almost every product team uses one or both, and switching companies is the usual mechanism for the jump.',
        remote:
          'Among the best. MERN is the default stack of remote contract work — SaaS builds, dashboards, marketplaces — and a deployed application with a public repository is the whole application process.',
        industries:
          'Startups and software firms in Mohali and Chandigarh, agencies in Ludhiana building client applications, e-commerce and D2C brands, logistics and inventory platforms serving local manufacturing, plus the remote market.',
        higher:
          'Not an academic route, but it is the portfolio that most convincingly demonstrates software engineering ability on an MCA or overseas application.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  'mean-stack': {
    layout: 'full',
    metaTitle: 'MEAN Stack Course in Ludhiana — Angular & Node | techcadd',
    metaDescription:
      'MEAN stack course in Ludhiana at techcadd — Angular, TypeScript, Node.js, Express and MongoDB, with enterprise-shaped applications shipped.',
    certification: {
      title: 'Get certified in MEAN Stack',
      lead: CERT_LEAD('MEAN stack')
    },
    salary: {
      title: 'What MEAN stack developers earn',
      lead:
        'Angular hiring is narrower than React hiring and concentrated in enterprise work — fewer openings, longer tenures, and a slightly higher floor.',
      regions: MARKETS,
      rows: [
        { role: 'MEAN Stack Developer', level: 'Entry', cells: ['₹2.8–5.0 LPA', '₹5–11 LPA', '₹30k–90k / project'] },
        { role: 'Angular Developer', level: 'Entry', cells: ['₹2.6–4.8 LPA', '₹4.5–10 LPA', '₹25k–80k / project'] },
        { role: 'Node.js Developer', level: 'Entry to mid', cells: ['₹3.2–6.0 LPA', '₹6–13 LPA', '₹40k–1.2L / project'] },
        { role: 'Enterprise Application Developer', level: 'Mid (2–4 yrs)', cells: ['₹6–11 LPA', '₹11–23 LPA', '₹1L–2.8L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Should I learn MEAN or MERN?',
          a: 'MERN if you want startups, agencies and the widest freelance market. MEAN if you want enterprise and services work, where Angular and TypeScript are standard and teams are larger. Counsellors will give you the same answer on the phone — neither is a wrong choice, they open different doors.'
        },
        growth:
          'Predictable rather than explosive. Enterprise Angular work rewards depth in TypeScript, RxJS and testing, and pay tends to track years plus certification more closely than in startup hiring.',
        remote:
          'Full-time remote roles are common; short freelance briefs are rarer than with MERN, because enterprise applications are not usually contracted in pieces.',
        industries:
          'IT services companies across Mohali, Chandigarh and Ludhiana, ERP and internal-tools vendors serving local manufacturing, banking and insurance back offices, and the healthcare and education platforms that favour Angular for large forms and dashboards.',
        higher:
          'The TypeScript and architecture material is directly useful for an MCA or a software-engineering specialisation.'
      })
    }
  },

  /* ---------------------------------------------------------------- */
  'php-full-stack': {
    layout: 'full',
    metaTitle: 'PHP & Laravel Course in Ludhiana — Full Stack | techcadd',
    metaDescription:
      'PHP full stack course in Ludhiana at techcadd — core PHP, MySQL, Laravel, REST APIs and deployment, with real applications and placement support.',
    certification: {
      title: 'Get certified in PHP Full Stack',
      lead: CERT_LEAD('PHP and Laravel')
    },
    salary: {
      title: 'What PHP and Laravel pay in Ludhiana',
      lead:
        'PHP starts lower than the JavaScript stacks and has the largest local market of any of them — most websites and admin panels running in this city are PHP, and somebody has to maintain them.',
      regions: MARKETS,
      rows: [
        { role: 'PHP Developer', level: 'Entry', cells: ['₹2.0–3.8 LPA', '₹3.5–8 LPA', '₹18k–55k / project'] },
        { role: 'Laravel Developer', level: 'Entry to mid', cells: ['₹2.8–5.0 LPA', '₹5–11 LPA', '₹30k–90k / project'] },
        { role: 'CMS / WooCommerce Developer', level: 'Entry', cells: ['₹2.2–4.0 LPA', '₹3.6–8 LPA', '₹20k–70k / project'] },
        { role: 'Senior PHP / Full Stack Developer', level: 'Mid (2–4 yrs)', cells: ['₹5–9 LPA', '₹9–18 LPA', '₹70k–1.8L / project'] }
      ],
      questions: questions({
        roles: {
          q: 'Is PHP still worth learning in 2026?',
          a: 'For the local market, yes — more Ludhiana businesses run PHP than anything else, and maintenance and extension work is constant. For the highest salaries, the JavaScript stacks pay better. The honest position is that PHP is the fastest route to paid work here and not the highest ceiling.'
        },
        growth:
          'Moderate as an employee, considerably better as a freelancer or agency owner. Laravel raises the ceiling meaningfully over core PHP, and most of the pay gap between PHP and MERN closes for developers who move into architecture and client work.',
        remote:
          'Yes, and it is the easiest first freelance income of any course in this column, because small business sites and admin panels are commissioned constantly and the briefs are short.',
        industries:
          'Web and digital agencies across Ludhiana, e-commerce sellers, export houses with order and catalogue portals, coaching institutes and schools with management systems, clinics, and the local software firms maintaining long-running client applications.',
        higher:
          'Practical rather than academic. It pairs best with a BCA or MCA already in progress rather than leading anywhere on its own.'
      })
    }
  }
}
