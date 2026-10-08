/* ==================================================================
   Long-form copy for the Web Development course page.

   Seventh of these, after digital-marketing, python, java, c-cpp,
   kotlin and web-designing. Same construction, split out of
   programming.js for the same reason: that file seeds nine courses
   and this is one course's editorial content.

   The copy is written to rank, so the terms the page targets are
   marked **like this** and RichText renders them inside <strong>. See
   RichText.jsx for the one rule it implements, and the keyword
   emphasis block in course-base.css for how a marked term is set:
   weight plus a light grey, deliberately quiet.

   This page and ./web-designing-copy.js are deliberately distinct.
   Web Designing stops at HTML, CSS, responsive layout and Figma; this
   one carries on into JavaScript, React, backend, databases and APIs.
   The overlap in the early modules is real and is stated plainly
   rather than hidden — a designer arriving here should be able to see
   what is new to them.

   Narrative sections declare the `slot` they mount into — overview,
   syllabus, careers. "Who can do this course" is not one of them: it
   fills the standard "who can join" block. The "what you should have
   before starting" list goes into that block's `requirements`.
================================================================== */

export const WEB_DEVELOPMENT_OVERVIEW = {
  title: 'The web development course in Ludhiana that goes full-stack',
  lead: 'Ready to build a career as a professional web developer? techcadd’s **web development course in Ludhiana** is designed for students, graduates, and job seekers who want to go beyond basic website design and master full-stack development — both frontend and backend.',
  body: [
    'As one of Ludhiana’s leading **web development training institutes**, techcadd combines hands-on coding, live projects, and placement-focused mentorship to help you build real, deployable web applications.',
    'This **full-stack web development course in Ludhiana** covers HTML, CSS, and JavaScript fundamentals, moves into frontend frameworks like **React**, and builds backend skills with databases and **REST APIs** — giving you the complete skill set companies actually hire for. Whether you’re a 12th-pass student exploring a tech career, a graduate looking to specialize, or a working professional switching into development, this course adapts to your starting point.',
    'Ludhiana’s growing IT and business ecosystem means web developers are consistently in demand — from local startups to established firms. With flexible batch timings, project-based learning, and placement support, techcadd helps you build job-ready development skills right here in Punjab, without relocating to a bigger city.'
  ]
}

/* ------------------------------------------------------------------
   Who can do this course — fills the standard "who can join" block
   rather than adding a second one. `requirements` is the honest list
   of what you actually need before day one, which the block renders
   under the groups.
------------------------------------------------------------------ */
export const WEB_DEVELOPMENT_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this course',
  lead: 'One of the best things about techcadd’s **web development course in Ludhiana** is that it’s designed for a wide range of learners — you don’t need a computer science degree or prior programming experience to get started. If you’re based in Ludhiana or nearby areas like Jalandhar, Khanna, or Moga and you’re serious about building a career in tech, this course is structured to meet you at your current level and take you all the way to job-ready.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students (Any Stream)',
      text: 'If you’ve just finished school and are exploring career options in tech, this **web development training in Ludhiana** is a strong entry point. You don’t need a non-medical or PCM background — students from commerce and arts backgrounds have successfully learned web development and moved into developer roles. The course starts with programming fundamentals, so absolute beginners can follow along comfortably.',
      tag: 'Any stream'
    },
    {
      icon: 'career',
      title: 'BCA, MCA and Engineering Graduates',
      text: 'If you’re a computer science, IT, or engineering graduate looking to specialize, full-stack web development is one of the most in-demand skill sets for placements right now. Companies across Ludhiana, Chandigarh, and Mohali are actively hiring developers who can handle both frontend and backend work — not just one or the other.',
      tag: 'Placement ready'
    },
    {
      icon: 'spark',
      title: 'Web Designers Expanding Into Development',
      text: 'If you already know HTML and CSS from a design background, this course helps you go further — adding JavaScript, frontend frameworks like **React**, backend logic, and databases to your skill set, opening up higher-paying developer roles instead of purely design-focused work.',
      tag: 'Design to dev'
    },
    {
      icon: 'stack',
      title: 'Working Professionals Switching Careers',
      text: 'If you’re currently in a non-tech role and want to pivot into software or web development, this course offers flexible batch timings — including evening and weekend options — so you can upskill without quitting your job.',
      tag: 'Evening batches'
    },
    {
      icon: 'server',
      title: 'Freelancers and Aspiring Tech Entrepreneurs',
      text: 'Want to build complete web applications for clients or your own startup idea? Full-stack development gives you the technical foundation to build, deploy, and maintain real websites and web apps end to end, without depending on separate frontend and backend developers.',
      tag: 'Build it all'
    },
    {
      icon: 'mentor',
      title: 'Career Switchers From Non-Tech Backgrounds',
      text: 'It’s increasingly common for people from unrelated fields — teaching, retail, business administration — to switch into tech careers. techcadd’s beginner-friendly teaching approach, combined with local, in-person mentorship in Ludhiana, makes this transition realistic rather than overwhelming.',
      tag: 'Start from zero'
    }
  ],
  requirementsTitle: 'What you should have before starting',
  requirements: [
    'Basic computer literacy — comfortable using a laptop or PC',
    'Logical thinking and a willingness to practise coding regularly',
    'No prior programming experience required, though it helps',
    'A laptop or desktop, which we help you set up in the first session',
    'About 8–10 hours a week outside class — full-stack rewards practice'
  ],
  note: 'Whether you’re just starting out or building on existing design or coding skills, the course accommodates different starting points while pushing every student toward the same goal: becoming a confident, hire-ready full-stack developer.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'wdev-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn in the web development course',
  lead: 'techcadd’s **web development course in Ludhiana** is structured to take you from complete beginner to job-ready full-stack developer, covering both frontend and backend development along with the practical tools used in real-world projects.',
  items: [
    {
      title: 'HTML, CSS & Web Fundamentals',
      text: 'You’ll start with the building blocks of the web — structuring pages with HTML and styling them with CSS, including modern layout techniques like Flexbox and Grid. This foundation ensures even complete beginners can follow along confidently.'
    },
    {
      title: 'JavaScript Programming',
      text: 'You’ll learn JavaScript from the ground up — variables, functions, DOM manipulation, and event handling — the language that powers interactivity on nearly every modern website.'
    },
    {
      title: 'Responsive Web Design',
      text: 'You’ll learn how to build websites that work seamlessly across desktops, tablets, and mobile devices, a non-negotiable skill given how much web traffic comes from mobile users today.'
    },
    {
      title: 'Frontend Framework: React',
      text: 'You’ll move into **React**, one of the most in-demand frontend frameworks used by companies worldwide. You’ll learn to build dynamic, component-based user interfaces and single-page applications — a major differentiator on any developer’s resume.'
    },
    {
      title: 'Backend Development',
      text: 'You’ll learn server-side programming, handling requests, and building the logic that powers real applications — moving beyond static websites into fully functional web apps.'
    },
    {
      title: 'Databases',
      text: 'You’ll work with databases to store, retrieve, and manage application data — an essential skill for any developer building real-world products rather than simple static pages.'
    },
    {
      title: 'REST APIs',
      text: 'You’ll learn how to build and connect to **REST APIs**, allowing your frontend and backend to communicate — the same architecture used by virtually all modern web and mobile applications.'
    },
    {
      title: 'Version Control with Git & GitHub',
      text: 'You’ll learn to manage your code professionally using **Git** and **GitHub** — the same tools used in every real-world development team, and something employers specifically look for.'
    },
    {
      title: 'Real Full-Stack Projects',
      text: 'Throughout the course, you’ll apply everything you learn to build real projects — including e-commerce stores, business websites, and portfolio sites — giving you a substantial body of real-world work to showcase by the end of training.'
    }
  ],
  tools: {
    label: 'Tools you’ll work with',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'Node.js',
      'Databases',
      'REST APIs',
      'Git & GitHub',
      'VS Code'
    ]
  },
  close: 'By the end you will have built and deployed complete web applications — frontend, backend and database — which is the difference between saying you can develop for the web and being able to show it.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'wdev-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'With dozens of institutes across Punjab claiming to teach “web development”, it’s fair to ask: why choose a dedicated **web development course in Ludhiana** at techcadd instead of scattered tutorials or a shallow bootcamp? Here’s what makes this program genuinely worth your time and money.',
  items: [
    {
      title: 'Full-Stack Skills Are What the Industry Actually Wants',
      text: 'Most companies today don’t just want someone who can design a webpage — they want developers who can build the complete product: frontend interfaces, backend logic, and database connections. This course is built around that reality, not an outdated single-skill curriculum.'
    },
    {
      title: 'Practical, Project-Based Learning — Not Just Theory',
      text: 'This program isn’t about memorizing syntax from slides. You’ll write real code from day one, working with the same tools and frameworks professional developers use. By the end of the course you’ll have built multiple real-world web applications — the kind of work that stands out in interviews and freelance portfolios.'
    },
    {
      title: 'Beginner-Friendly Structure With a Clear Progression',
      text: 'The course is structured to take you step by step — starting with HTML, CSS, and JavaScript fundamentals, moving into frontend frameworks like React, and finishing with backend development, databases, and APIs. You’re never thrown into advanced material without the foundation to understand it.'
    },
    {
      title: 'Local Mentorship, Not Just Recorded Videos',
      text: 'Unlike generic online courses where you’re left to troubleshoot errors alone, this **web development training in Ludhiana** gives you access to trainers who can explain concepts in person, debug your code with you, and guide you through real project challenges.'
    },
    {
      title: 'Career-Focused, Not Just Skill-Focused',
      text: 'This program is built around one outcome: helping you get hired or freelance successfully as a developer. The curriculum is paired with practical guidance on building a strong portfolio, understanding what recruiters in Ludhiana and Punjab’s IT sector are actually looking for, and preparing you for technical interviews.'
    },
    {
      title: 'Flexible for Every Kind of Learner',
      text: 'Whether you’re a student with a packed academic schedule, a working professional who can only attend evenings or weekends, or someone learning full-time, the batch structure is designed to fit real life — not the other way around.'
    },
    {
      title: 'A Local Institute That Understands the Local Job Market',
      text: 'Learning in Ludhiana means your trainers understand the regional job landscape — which local IT companies and agencies are hiring, what skills startups in Punjab are looking for, and how to position yourself competitively.'
    },
    {
      title: 'Room to Specialize Further',
      text: 'Full-stack development is a strong foundation that opens doors into more specialized paths later — frontend specialist, backend engineer, or even mobile app development — giving you long-term flexibility in how your career evolves.'
    }
  ],
  close: 'Full-stack is the shape of the job most companies are actually hiring for, and this programme is built to leave you with the deployed applications that prove you can do it.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'wdev-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd for your web development course',
  lead: 'Choosing the right institute matters just as much as choosing the right course. Here’s why students across Ludhiana and Punjab trust techcadd for **web development training**.',
  items: [
    {
      title: '15+ Years of Experience in IT Training',
      text: 'techcadd has spent over 15 years training students across Ludhiana in web development, digital marketing, AI, and more. This isn’t a new institute experimenting with tech courses — it’s a training centre with a long-standing track record of preparing students for real jobs in the IT industry.'
    },
    {
      title: 'Recognised With 45+ Awards',
      text: 'techcadd’s consistent focus on quality training has earned it more than 45 awards and recognitions in the IT education space. For students comparing institutes, that kind of sustained recognition is a strong signal of credibility — not just marketing claims.'
    },
    {
      title: 'Hands-On, Project-Based Teaching Philosophy',
      text: 'The web development course isn’t taught through passive lectures. Students build real, functioning websites and web applications — including business websites, e-commerce stores, and portfolio sites — using industry-standard tools and workflows.'
    },
    {
      title: 'Experienced, Industry-Aware Faculty',
      text: 'techcadd’s trainers bring real industry experience building production websites and applications, which means you’re learning practical, current approaches — not outdated textbook methods. Faculty are available to clear doubts, review your code, and guide you through real debugging challenges.'
    },
    {
      title: 'Flexible Batch Options for Every Schedule',
      text: 'Whether you’re a 12th-pass student with school hours to work around, a college student balancing coursework, or a working professional who can only attend evenings or weekends, techcadd offers morning, evening, and weekend batches — plus fast-track and one-to-one options.'
    },
    {
      title: 'Job Placement Assistance',
      text: 'techcadd doesn’t just teach web development and send you on your way — the institute provides placement assistance, resume building, and mock interviews to help connect trained students with IT companies hiring in Ludhiana, Chandigarh, and across Punjab.'
    },
    {
      title: 'Industry-Recognised Certification',
      text: 'On completing the course, students receive a certification that adds credibility to their resume — useful whether you’re applying for jobs, pursuing freelance development work, or continuing further studies in computer science.'
    },
    {
      title: 'A Locally Rooted, Trusted Institute',
      text: 'Being based in Ludhiana means techcadd understands the local student community, the regional job market, and what Punjab-based IT companies and startups are actually looking for in new developer hires.'
    },
    {
      title: 'Small Batch Sizes for Individual Attention',
      text: 'techcadd keeps batch sizes manageable so instructors can give individual attention to each student — a meaningful difference when you’re learning to debug real code and build complete applications.'
    },
    {
      title: 'A Broader Tech Ecosystem to Grow Into',
      text: 'Beyond web development, techcadd offers courses across AI and data science, cybersecurity, and digital marketing — so students who want to expand their skill set later have a natural path to do so within the same institute.'
    }
  ],
  close: 'Choosing techcadd means choosing a **web development training institute in Ludhiana** that measures itself on the applications its students deploy, not the certificates it hands out.'
}

export const WEB_DEVELOPMENT_NARRATIVE = [CURRICULUM, WHY_THIS_PROGRAMME, WHY_TECHCADD]

/* ------------------------------------------------------------------
   Student reviews. The factory writes three generic quotes for a
   course with none; these are the course's own, so they replace that
   set. `rating` drives the stars, `initials` the avatar tile.
------------------------------------------------------------------ */
export const WEB_DEVELOPMENT_TESTIMONIALS = [
  {
    quote: 'I finished my BCA and wanted real project experience, not just more theory. techcadd’s web development course helped me build a full e-commerce site with React and a working backend. Got two job offers within a month of finishing.',
    name: 'Karanjit Singh',
    course: 'Web Development',
    detail: 'Model Town, Ludhiana',
    rating: 5,
    initials: 'KS'
  },
  {
    quote: 'I’m from a commerce background, so I was nervous about coding. The trainers explained everything step by step and never made me feel behind. Now I’m working as a junior full-stack developer at a firm in Chandigarh.',
    name: 'Simran Oberoi',
    course: 'Web Development',
    detail: 'Sarabha Nagar, Ludhiana',
    rating: 5,
    initials: 'SO'
  },
  {
    quote: 'I already knew HTML and CSS from web designing, so I wanted to go deeper into actual development. The React and backend modules were exactly what I needed. Only wish the batch was slightly longer to cover more on databases.',
    name: 'Harjot Singh',
    course: 'Web Development',
    detail: 'Khanna',
    rating: 4,
    initials: 'HS'
  },
  {
    quote: 'Best decision I made after 12th. I had zero coding background and honestly thought this would be too hard for me. Six months later I built a full portfolio website with a working contact form and database — still can’t believe it.',
    name: 'Ayesha Kapoor',
    course: 'Web Development',
    detail: 'Ferozepur Road, Ludhiana',
    rating: 5,
    initials: 'AK'
  },
  {
    quote: 'I used to travel to Ludhiana for weekend batches since there wasn’t a good full-stack development option near me. Totally worth the commute — the live project work made all the difference compared to the online course I tried earlier.',
    name: 'Baljeet Kaur',
    course: 'Web Development',
    detail: 'Jalandhar',
    rating: 5,
    initials: 'BK'
  },
  {
    quote: 'Solid course for anyone serious about becoming a developer. The React module was tough for me personally, but the trainers sat with me after class to clear my doubts, which I really appreciated.',
    name: 'Ravinder Singh',
    course: 'Web Development',
    detail: 'Dugri, Ludhiana',
    rating: 4,
    initials: 'RS'
  },
  {
    quote: 'I was working in a non-tech admin role and wanted to pivot into development. This course gave me exactly what I needed — practical full-stack skills and enough confidence to start applying for developer roles.',
    name: 'Priyanka Sethi',
    course: 'Web Development',
    detail: 'Chandigarh',
    rating: 5,
    initials: 'PS'
  },
  {
    quote: 'What stood out for me was how the trainers connected everything to real jobs — not just teaching code, but explaining what companies in Punjab are actually hiring for right now. Felt like a career-focused course, not just a coding class.',
    name: 'Karanveer Brar',
    course: 'Web Development',
    detail: 'Moga',
    rating: 5,
    initials: 'KB'
  },
  {
    quote: 'Good course overall. I came in as a complete beginner and left with three working full-stack projects. Would have liked a bit more time on APIs, but the core fundamentals were taught really well.',
    name: 'Navjot Kaur',
    course: 'Web Development',
    detail: 'Pakhowal Road, Ludhiana',
    rating: 4,
    initials: 'NK'
  },
  {
    quote: 'I compared a few institutes across Ludhiana and Mohali before joining, and techcadd’s hands-on, project-based approach won me over. Built a full e-commerce store during the course. Already using it as a talking point in interviews.',
    name: 'Manjot Singh',
    course: 'Web Development',
    detail: 'Mohali',
    rating: 5,
    initials: 'MS'
  },
  {
    quote: 'As a working professional, the evening batch was a lifesaver. I could learn full-stack development without quitting my day job, and the pace was manageable even with a full-time schedule.',
    name: 'Ritika Grover',
    course: 'Web Development',
    detail: 'Civil Lines, Ludhiana',
    rating: 5,
    initials: 'RG'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard set the factory writes for every other course.

   Each answer is written to stand on its own without the surrounding
   text, which is what an answer engine needs to quote it directly.
------------------------------------------------------------------ */
export const WEB_DEVELOPMENT_FAQS = [
  {
    q: 'What is the best institute for a web development course in Ludhiana?',
    a: 'techcadd is one of Ludhiana’s leading IT training institutes offering a dedicated **full-stack web development course in Ludhiana** with hands-on project training, experienced faculty, and placement assistance.'
  },
  {
    q: 'Do I need prior coding experience to join this web development course?',
    a: 'No. This course is beginner-friendly and starts with HTML, CSS, and JavaScript fundamentals, so students with zero programming background — including 12th-pass students from any stream — can join.'
  },
  {
    q: 'Is this course suitable for web designers wanting to move into development?',
    a: 'Yes. If you already know HTML and CSS, this course helps you build on that foundation with JavaScript, **React**, backend development, and databases — moving you from design-only work into full-stack development.'
  },
  {
    q: 'How long is the web development course at techcadd?',
    a: 'Course duration varies by batch type — regular, weekend, or fast-track. Contact techcadd’s Ludhiana centre directly for current batch schedules and exact duration.'
  },
  {
    q: 'What will I learn in this web development course?',
    a: 'You’ll learn HTML, CSS, JavaScript, responsive design, the **React** frontend framework, backend development, databases, **REST APIs**, and version control with **Git** and **GitHub**.'
  },
  {
    q: 'Does techcadd offer placement assistance after the web development course?',
    a: 'Yes. techcadd provides placement assistance including resume building, mock interviews, and job referrals to help students connect with IT companies hiring in Ludhiana, Chandigarh, and across Punjab.'
  },
  {
    q: 'Are weekend or evening batches available for working professionals?',
    a: 'Yes. techcadd offers flexible batch timings, including morning, evening, weekend, and fast-track options, plus one-to-one batches for personalised learning.'
  },
  {
    q: 'Will I build real websites and applications during the course?',
    a: 'Yes. The course is project-based, with students building real-world websites including e-commerce stores, business websites, and portfolio sites — projects you can showcase in interviews.'
  },
  {
    q: 'Is web development in demand for jobs in Ludhiana and Punjab?',
    a: 'Yes. As Ludhiana’s IT and business ecosystem grows, demand for full-stack developers who can handle both frontend and backend work continues to rise across Ludhiana, Chandigarh, and Mohali.'
  },
  {
    q: 'Do I get a certificate after completing the web development course?',
    a: 'Yes. Students receive an industry-recognised, verified certification on course completion, which can be added to resumes and job applications.'
  },
  {
    q: 'Can a complete beginner become a professional web developer through this course?',
    a: 'Yes. The course is structured to take beginners step by step — from HTML, CSS and JavaScript basics to React and backend development — ending with the practical skills needed to build and deploy real web applications.'
  },
  {
    q: 'What is the difference between the web designing and web development courses?',
    a: 'Web designing covers HTML, CSS, responsive layout and design tools like Figma — how a site looks and is structured. Web development carries on from there into JavaScript, React, backend logic, databases and APIs — how a site actually works. Designers often take this course next.'
  },
  {
    q: 'What tools will I learn to use in this course?',
    a: 'You’ll gain hands-on experience with HTML5, CSS3, JavaScript, **React**, databases, **REST APIs**, **Git**, **GitHub**, and **VS Code**.'
  }
]
