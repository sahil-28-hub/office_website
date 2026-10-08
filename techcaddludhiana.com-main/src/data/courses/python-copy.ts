/* ==================================================================
   Long-form copy for the professional certificate Python programming
   course.

   This is the page the "Python Programming" entry points at in both
   the Courses menu and the After 12th menu's "6 Month Certificates"
   group.

   Split out of programming.js on purpose — that file seeds a long list
   of courses, and this is one course's editorial content, longer than
   several of those seeds put together.

   The copy is written to rank, so the terms the page targets are
   marked **like this** and RichText renders them inside <strong>.
   See RichText.jsx for the one rule it implements.

   Narrative sections declare the `slot` they mount into:

     overview  after the course overview, before the roadmap
     syllabus  after the roadmap, before "who can join"
     careers   after "where it leads", before the enquiry form

   "Who can do this course" is not a narrative section — it fills the
   standard "who can join" block, which asks the same question.

   Tones alternate against the fixed bands around them, so no two
   neighbouring sections share a background. The three sections at the
   `careers` slot run tint, paper, tint into the dark enquiry form.

   ON DURATION: the seed says 4–6 months and the After 12th menu files
   this under "6 Month Certificates". The marketing copy supplied for
   this page said "45 days to 6 weeks", which contradicts both. Rather
   than print a figure in the FAQ that disagrees with the hero on the
   same screen, the FAQ below says duration depends on batch type and
   points at the centre. Settle which is right and put the number back
   in both places at once.
================================================================== */

export const PYTHON_OVERVIEW = {
  title: 'The professional certificate Python programming course',
  lead: 'Looking for the best professional certificate **Python programming course in Ludhiana**? techcadd Computer Education offers a career-focused, job-oriented Python certification designed for students, graduates, and working professionals across Ludhiana and the wider Punjab region. This isn’t just theory — the training is practical and project-based throughout, covering Core Python, data structures, automation, Flask web development, and real coding exercises that mirror actual industry work.',
  body: [
    'Whether you’re a 12th-pass student exploring your first tech skill, a BCA or B.Tech graduate strengthening your resume, or a job seeker switching careers into IT, this course is built to make you interview-ready and placement-ready. Learn from experienced trainers, work on live projects, and finish with a certification that carries real weight because of the work behind it.',
    'With flexible batch timings, a centrally located Ludhiana campus, and dedicated placement assistance, techcadd is a trusted choice for students who want practical Python skills — a genuine career springboard rather than a certificate alone.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const PYTHON_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this course',
  lead: 'Wondering if the professional certificate **Python programming course in Ludhiana** is the right fit for you? This program is designed to be genuinely inclusive — whether you’re just starting out or looking to pivot your career, there’s a clear path here.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students (Science & Commerce Background)',
      text: 'If you’ve just finished your 12th in Ludhiana and are wondering what comes next, Python is one of the smartest first steps into the IT world. You don’t need a computer science background — the curriculum starts from absolute basics: variables, loops, conditionals and functions, before gradually moving into real coding projects. Many students from schools across Ludhiana, Sarabha Nagar and Model Town join right after their boards to build a technical foundation before choosing a college stream or a direct job path.',
      tag: 'No background needed'
    },
    {
      icon: 'code',
      title: 'Undergraduate & Postgraduate Students (BCA, B.Tech, MCA, B.Sc IT)',
      text: 'College students pursuing BCA, B.Tech, MCA or B.Sc (IT) in and around Ludhiana often find that classroom theory alone isn’t enough to crack technical interviews. This course fills that exact gap — hands-on, project-based learning in Core Python, data structures, and frameworks like **Flask**. It’s a strong add-on certification for strengthening a resume, preparing for campus placements, or simply becoming confident with real coding assignments.',
      tag: 'Alongside a degree'
    },
    {
      icon: 'career',
      title: 'Fresh Graduates & Job Seekers',
      text: 'For fresh graduates actively job hunting, a recognised Python certification can be the difference between a shortlisted resume and one that gets overlooked. Recruiters across Punjab increasingly look for candidates with demonstrable, project-backed skills — not just a degree. This course gives you a portfolio of real projects (automation scripts, mini web apps, data-driven dashboards) you can show directly in interviews.',
      tag: 'Something to show'
    },
    {
      icon: 'server',
      title: 'Working Professionals Looking to Upskill or Switch',
      text: 'Already working but feel stuck in a non-technical role? Professionals from Ludhiana’s business, accounting and administrative sectors are increasingly turning to Python to open doors into IT, data analysis and automation roles. With weekend and evening batches available, you can upskill without quitting your current job.',
      tag: 'Evening batches'
    },
    {
      icon: 'terminal',
      title: 'Freelancers & Entrepreneurs',
      text: 'Freelancers based in Ludhiana and Chandigarh looking to offer automation, scripting, or basic web development services will find this course directly monetisable — Python is one of the most in-demand freelance skills globally.',
      tag: 'Turn it into income'
    },
    {
      icon: 'spark',
      title: 'Career Switchers from Non-IT Backgrounds',
      text: 'Even if you come from a completely unrelated field — mechanical, commerce, arts — Python’s beginner-friendly syntax makes it one of the easiest programming languages to learn from scratch, and the trainers here are used to guiding absolute beginners.',
      tag: 'Start from zero'
    }
  ],
  note: 'No prior coding experience is required. The course starts from core fundamentals before progressing to object-oriented programming and Flask web development, so a complete beginner and a college student with some background can both find their level in it.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'py-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn and the tools covered',
  lead: 'The course is structured to take you from complete beginner to confident, job-ready Python programmer. Here’s what the curriculum covers and the tools you’ll get hands-on experience with.',
  items: [
    {
      title: 'Core Python Fundamentals',
      text: 'You’ll start with the building blocks: variables, data types, operators, conditional statements, and loops. This foundation is taught with an emphasis on writing clean, readable code — a habit that pays off throughout your programming career, whether you stay in Python or move to other languages later.'
    },
    {
      title: 'Functions & Modular Programming',
      text: 'Learn how to write reusable functions, understand scope, work with arguments and return values, and structure your code in a modular, maintainable way — the skill that most directly separates beginner code from professional-quality code.'
    },
    {
      title: 'Data Structures',
      text: 'A major part of the course focuses on Python’s core data structures: lists, tuples, dictionaries and sets. You’ll learn when and why to use each, how to manipulate and iterate through them efficiently, and how to apply them to real coding problems — exactly the knowledge tested in technical interviews.'
    },
    {
      title: 'Object-Oriented Programming',
      text: 'You’ll be introduced to classes, objects, inheritance and encapsulation — core **OOP** concepts essential not just for Python, but for understanding how professional software systems are designed and built.'
    },
    {
      title: 'File Handling & Error Handling',
      text: 'Learn how to read from and write to files, handle exceptions gracefully with try/except blocks, and build programs that don’t crash the moment something goes wrong — a practical skill every working developer needs.'
    },
    {
      title: 'GUI Development with Tkinter',
      text: 'Hands-on experience building simple desktop applications with graphical interfaces using **Tkinter**, giving you a sense of how Python extends beyond command-line scripts into usable, interactive software.'
    },
    {
      title: 'Web Development with Flask',
      text: 'One of the most career-relevant modules — you’ll learn **Flask**, a lightweight Python web framework, to build functional web applications, handle routes, work with templates, and connect backend logic to a front-end interface. A sought-after skill for junior developer roles.'
    },
    {
      title: 'Automation & Scripting',
      text: 'Discover how Python is used to automate repetitive tasks — from file organisation to data processing — a skill increasingly valued across industries, not just traditional IT roles.'
    },
    {
      title: 'Working with APIs',
      text: 'An introduction to how Python interacts with **APIs**: a fundamental skill for connecting applications, pulling external data, and building integrated software.'
    },
    {
      title: 'Introduction to Data Handling',
      text: 'For students interested in the data analytics path, the course introduces **Pandas** and **NumPy** at a foundational level, giving an early glimpse into data manipulation and analysis — the natural next step after core Python.'
    },
    {
      title: 'Real Projects You’ll Build',
      text: 'By the end of the course you’ll have built a login system, an automation script, a small Flask-based web application, and a data-driven mini project — tangible proof of your skills for interviews and your portfolio.'
    }
  ],
  tools: {
    label: 'Tools and technologies you’ll work with',
    items: [
      'Python 3.x',
      'Tkinter',
      'Flask',
      'Git',
      'VS Code',
      'PyCharm',
      'Pandas',
      'NumPy'
    ]
  },
  close: 'This blend of fundamentals, frameworks and real project work means you leave not just knowing Python syntax, but knowing how to actually build things with it.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'py-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'Choosing the right Python training partner matters as much as choosing to learn Python. Here is what makes this a worthwhile investment rather than another certificate.',
  items: [
    {
      title: 'Built Around Real Industry Demand',
      text: 'Python isn’t just another programming language — it underpins automation, data analytics, AI and ML, backend web development, and scripting across nearly every industry. From IT companies in Ludhiana’s growing tech ecosystem to startups and MNCs across Punjab and Chandigarh, employers are hiring candidates who can write clean, functional Python. This program is structured around what recruiters ask for now, not textbook theory.'
    },
    {
      title: 'A Certificate That Reflects Actual Skill',
      text: 'A certificate is only as valuable as the skill behind it. This one isn’t handed out for attendance — it reflects hands-on coding ability built through consistent project work, assignments and practical evaluation. Listed on a resume or LinkedIn profile, it signals that you can code, not that you sat through lectures.'
    },
    {
      title: 'Project-Based, Not Just Lecture-Based',
      text: 'The biggest gap students face after online tutorials or college courses is the absence of real project experience. This program closes it directly — you build functional applications, automation tools and small Flask web projects, giving you work to show in interviews and on GitHub. That proof-of-skill is what separates shortlisted candidates from the rest.'
    },
    {
      title: 'Local Support, Real Accountability',
      text: 'Unlike anonymous online courses where you’re on your own, training at a physical Ludhiana centre means direct mentorship, doubt-clearing sessions, and the accountability that keeps you consistent. Learning alongside students from Ludhiana, Jalandhar and Chandigarh creates a peer environment self-paced learning rarely replicates.'
    },
    {
      title: 'A Stepping Stone to Advanced Tech Careers',
      text: 'Python is rarely a destination — it’s a gateway. Once you’re confident in the fundamentals you’re positioned to move into data science, machine learning, automation testing, or backend development. Many students use this foundational program as the launchpad for advanced certifications in AI, data analytics, or full-stack development.'
    },
    {
      title: 'Placement Support That Bridges Learning to Earning',
      text: 'A course is only valuable if it leads somewhere. Placement assistance connects trained students with real job opportunities and interview preparation, so the skills you build translate into a career outcome rather than a certificate in a folder.'
    },
    {
      title: 'Flexible, Practical and Ludhiana-Focused',
      text: 'Flexible batch timings, an accessible campus location, and a curriculum tuned to what local and regional employers actually want — removing the usual obstacles of time, distance and relevance that stop people upskilling.'
    }
  ],
  close: 'In short: not just “a Python course”, but a structured, locally-supported career step designed for real outcomes in Ludhiana’s job market.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'py-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'With plenty of institutes advertising Python courses across Ludhiana, it’s fair to ask what sets this one apart. An honest breakdown.',
  items: [
    {
      title: '15+ Years of Trusted Presence in Ludhiana',
      text: 'techcadd has been a recognised name in IT and technical training in Ludhiana for over 15 years, built on consistent student outcomes rather than marketing claims. With 5,000+ alumni across Punjab now working in IT roles, running ventures, or pursuing advanced studies, the track record speaks for itself — an institute that lasts in a competitive city usually means students keep recommending it.'
    },
    {
      title: 'Experienced, Industry-Aligned Trainers',
      text: 'Your outcome depends heavily on who is teaching. Python here is taught by mentors with five to ten years of real-world Python and Django development experience — not instructors reading off slides. They bring debugging techniques, practical war stories and the shortcuts that only come from actually building software professionally.'
    },
    {
      title: 'Practical, Project-Based Learning Approach',
      text: 'The philosophy is learning by doing. Rather than passively watching demonstrations, you actively write code, build automation scripts, create login systems and develop mini web applications from early on. By the time you finish, you have a portfolio to show — not just notes to revise.'
    },
    {
      title: 'Modern, Well-Equipped Central Campus',
      text: 'The Ludhiana lab is centrally located and equipped with modern machines and a distraction-free learning environment, easy to reach whether you’re coming from Model Town, Sarabha Nagar, Civil Lines or Dugri. Proper physical infrastructure — not just a laptop and a video link — makes a real difference to how consistently students actually learn.'
    },
    {
      title: 'Curriculum Aligned With Current Industry Standards',
      text: 'Python isn’t taught in isolation — the curriculum reflects what full-stack development, automation and data analytics roles actually require. You’re not just learning syntax; you’re learning how Python fits into the broader tech ecosystem employers care about.'
    },
    {
      title: 'End-to-End Career Support',
      text: 'From the first class to your final interview, structured placement assistance and career guidance help bridge the gap between “I completed a course” and “I got hired” — resume support, interview preparation, and connections to opportunities across Ludhiana, Chandigarh and beyond.'
    },
    {
      title: 'A Local Institute That Understands the Local Job Market',
      text: 'Being based in Ludhiana means the trainers and placement team understand the specific hiring patterns, companies and skill expectations of the regional job market — an advantage generic online platforms can’t offer.'
    }
  ],
  close: 'Experience, practical training and real career support — the three things that actually matter when choosing where to learn Python here.'
}

/* ---------------------------------------------------------------- */

/* The closing pitch, immediately above the enquiry form. */
const ENROL_NOW = {
  id: 'py-enrol',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Enrol now',
  title: 'Start your Python career journey',
  lead: 'Take the first step toward becoming a certified, job-ready Python programmer.',
  items: [
    {
      title: 'What you get',
      text: 'Core Python through to **Flask** web development, automation and API work, with a login system, an automation script, a Flask app and a data-handling project to show for it — plus placement assistance when you’re ready to interview.'
    },
    {
      title: 'Before you enrol',
      text: 'Duration and fees depend on the batch type you choose — regular, weekend or fast-track. Batches fill up, so contact the Ludhiana centre for the current schedule, exact duration and fee structure.'
    }
  ]
}

export const PYTHON_NARRATIVE = [
  CURRICULUM,
  WHY_THIS_PROGRAMME,
  WHY_TECHCADD,
  ENROL_NOW
]

/* ------------------------------------------------------------------
   UNVERIFIED TESTIMONIALS — CHECK BEFORE THIS PAGE GOES LIVE.

   Same caveat as the other pages carrying supplied reviews: full
   names, home localities, and named employment outcomes ("landed a
   junior developer role in Ludhiana itself", "switch from a non-IT job
   to an automation testing role"). If they were written as sample copy
   rather than collected from the students named, they must not be
   published — invented reviews attributed to identifiable people,
   carrying employment claims, mislead prospective students and are
   unlawful in many jurisdictions.

   Confirm each entry against a real, attributable review. Anything
   that cannot be confirmed should be removed — or delete the
   `testimonials` line from the seed in programming.js, which makes the
   page fall back to the generic quotes in shared.js.
------------------------------------------------------------------ */
export const PYTHON_TESTIMONIALS = [
  {
    quote:
      'I joined techcadd right after my 12th with zero coding background. Honestly, I was scared of programming, but the trainers broke everything down so simply. Now I’ve built my own mini web app using Flask. Best decision I made after school.',
    name: 'Ramanpreet Kaur',
    course: 'Python Programming',
    detail: 'Model Town, Ludhiana',
    rating: 5,
    initials: 'RK'
  },
  {
    quote:
      'Was doing BCA and struggling to connect theory with actual coding. The professional certificate Python course at techcadd changed that completely. The project-based approach helped me finally understand data structures properly.',
    name: 'Harshdeep Singh',
    course: 'Python Programming',
    detail: 'Sarabha Nagar, Ludhiana',
    rating: 5,
    initials: 'HS'
  },
  {
    quote:
      'Great course structure and supportive trainers. I especially liked the OOP and Flask modules — really practical. Only wish the batch timings had a few more weekend slots, but overall very satisfied.',
    name: 'Simran Gupta',
    course: 'Python Programming',
    detail: 'Civil Lines, Ludhiana',
    rating: 4,
    initials: 'SG'
  },
  {
    quote:
      'I used to travel from Chandigarh for weekend batches and it was totally worth it. The Python certification from techcadd helped me switch from a non-IT job to an automation testing role. Real career impact.',
    name: 'Amanpreet Singh',
    course: 'Python Programming',
    detail: 'Chandigarh',
    rating: 5,
    initials: 'AS'
  },
  {
    quote:
      'As a working professional, I needed flexible timings, and techcadd delivered exactly that. Learned Python from scratch alongside my job. The trainers actually have industry experience, which makes a huge difference.',
    name: 'Priya Sharma',
    course: 'Python Programming',
    detail: 'Dugri, Ludhiana',
    rating: 5,
    initials: 'PS'
  },
  {
    quote:
      'Placement support is real here, not just a promise. After completing the Python programming course, I got interview calls within a month and landed a junior developer role in Ludhiana itself.',
    name: 'Gurjot Singh',
    course: 'Python Programming',
    detail: 'Model Gram, Ludhiana',
    rating: 5,
    initials: 'GS'
  },
  {
    quote:
      'Coming from a B.Sc IT background, I wanted stronger practical skills before placements. techcadd’s project-based Python training gave me exactly that confidence boost during campus interviews.',
    name: 'Ishita Bansal',
    course: 'Python Programming',
    detail: 'BRS Nagar, Ludhiana',
    rating: 4,
    initials: 'IB'
  },
  {
    quote:
      'Started with literally no programming knowledge. The trainers were patient, explained every concept with examples, and by the end I had built real projects. Highly recommend this course to any beginner in Ludhiana.',
    name: 'Karanveer Singh',
    course: 'Python Programming',
    detail: 'Jalandhar Bypass, Ludhiana',
    rating: 5,
    initials: 'KS'
  },
  {
    quote:
      'I was a commerce student who wanted to shift into tech. Everyone said it would be tough, but techcadd’s Python course made the transition smooth. Now exploring data analytics roles with this as my foundation.',
    name: 'Navjot Kaur',
    course: 'Python Programming',
    detail: 'Ferozepur Road, Ludhiana',
    rating: 5,
    initials: 'NK'
  },
  {
    quote:
      'What stood out was how the trainers connected Python concepts to actual job requirements. The certificate genuinely reflects the skills I gained — not just a participation certificate.',
    name: 'Rohit Verma',
    course: 'Python Programming',
    detail: 'Chandigarh Road, Ludhiana',
    rating: 5,
    initials: 'RV'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.
------------------------------------------------------------------ */
export const PYTHON_FAQS = [
  {
    q: 'What is the duration of the professional certificate Python programming course?',
    a: 'Duration depends on the batch type you choose — regular, weekend, or fast-track — with flexible scheduling for students and working professionals. Confirm the exact duration for your preferred batch with the techcadd Ludhiana centre before enrolling.'
  },
  {
    q: 'Do I need any prior coding experience to join this Python course?',
    a: 'No prior coding experience is required. The course is designed for absolute beginners, starting from core fundamentals before progressing to advanced topics like **OOP** and **Flask** web development.'
  },
  {
    q: 'Who can enrol in this professional certificate Python course in Ludhiana?',
    a: '12th pass students, undergraduate and postgraduate students (BCA, B.Tech, MCA, B.Sc IT), fresh graduates, job seekers, working professionals, and freelancers can all enrol, regardless of academic background.'
  },
  {
    q: 'Is this Python course certificate recognised by employers?',
    a: 'The certificate reflects hands-on, project-based skill evaluation rather than attendance alone, which makes it a credible addition to a resume. In practice recruiters weigh the projects behind it most — which is why the course is built around producing them.'
  },
  {
    q: 'Does techcadd provide placement assistance after the Python course?',
    a: 'Yes. techcadd offers structured placement support including resume guidance, interview preparation, and job opportunity connections for students who complete the course.'
  },
  {
    q: 'What topics are covered in the Python programming syllabus?',
    a: 'The syllabus covers Core Python, data structures, functions, object-oriented programming, file and error handling, GUI development with **Tkinter**, **Flask** web development, automation scripting, API basics, and an introduction to **Pandas** and **NumPy**.'
  },
  {
    q: 'Where is the techcadd Python training centre located in Ludhiana?',
    a: 'The centrally located Ludhiana campus is easily accessible from areas like Model Town, Sarabha Nagar, Civil Lines and Dugri, with a modern lab setup for practical training.'
  },
  {
    q: 'Are weekend or evening batches available for working professionals?',
    a: 'Yes. techcadd offers flexible weekend and evening batch timings specifically designed for working professionals who want to upskill in Python without leaving their current job.'
  },
  {
    q: 'Can this course help me switch careers into IT from a non-technical background?',
    a: 'Yes. Many students from commerce, arts and other non-IT backgrounds have moved into technical roles after completing this course, helped by its beginner-friendly, project-based teaching approach.'
  },
  {
    q: 'What kind of projects will I build during the course?',
    a: 'You’ll build a login system, automation scripts, a **Flask**-based web application, and a data-handling mini project — all usable in your portfolio and in interviews.'
  },
  {
    q: 'How is techcadd different from online Python courses?',
    a: 'Unlike self-paced online courses, techcadd offers in-person mentorship, doubt-clearing sessions, peer learning and direct accountability at its Ludhiana campus, along with localised placement support.'
  },
  {
    q: 'What is the fee structure for the Python course in Ludhiana?',
    a: 'Fee details vary by batch type and duration. Contact the techcadd Ludhiana centre directly or use the enquiry form for current pricing and any available offers.'
  }
]
