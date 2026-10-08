/* ==================================================================
   Long-form copy for the professional certificate course in Machine
   Learning & Deep Learning.

   This is the page the "Machine Learning & Deep Learning" entry points
   at in the After 12th menu's "1 Year Certificates" group, so it is
   written as the combined ML + DL certificate rather than deep
   learning alone — the machine-learning slug covers classical ML on
   its own.

   Split out of ai-data.js for the same reason as the others — that
   file seeds thirteen courses, and this is one course's editorial
   content. See ./power-bi-copy.js and ./data-science-copy.js, which
   sit beside it.

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
================================================================== */

export const DL_OVERVIEW = {
  title: 'Machine learning and deep learning, taught in Ludhiana',
  lead: 'Looking for a professional certificate course in **Machine Learning & Deep Learning in Ludhiana** that actually gets you job-ready? techcadd’s ML & Deep Learning program is built for students and professionals who want to break into India’s fastest-growing tech field without relocating to Chandigarh, Delhi, or Bangalore.',
  body: [
    'This isn’t another theory-heavy course. You’ll work with real datasets, build neural networks from scratch, and deploy live AI projects — covering everything from **Python** and statistics to CNNs, RNNs, NLP, and Generative AI. Whether you’re a 12th-pass student exploring career options, a B.Tech/BCA/MCA graduate, or a working professional looking to upskill, this certificate program is designed to match current industry hiring standards.',
    'With hands-on training, portfolio-ready projects, and placement support based right here in Ludhiana, techcadd bridges the gap between classroom learning and real AI job roles at MNCs, startups, and IT companies across Punjab and beyond.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const DL_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this course',
  lead: 'One of the biggest questions students in Ludhiana ask before enrolling in any AI course is simple: “Am I even eligible?” The good news — this **Machine Learning & Deep Learning** certificate is designed with flexible entry points, so students from multiple academic backgrounds and career stages can join and succeed.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students (Science & Commerce Background)',
      text: 'If you’ve just finished your 12th and you’re looking for a future-focused career path instead of the usual B.Com or generic BA route, this course is a strong starting point. Students with a science background — especially Maths — often have a natural edge, but even commerce students with basic computer literacy can start here. Early exposure to ML and AI gives you a real head start before college, and many students use this certificate to strengthen their B.Tech or BCA admission profile around Ludhiana, Jalandhar, and Chandigarh.',
      tag: 'Head start'
    },
    {
      icon: 'career',
      title: 'Graduates (B.Tech, BCA, MCA, B.Sc IT, B.Sc CS)',
      text: 'This is the core audience. If you’ve completed a degree in Computer Science, IT, Electronics, or a related engineering stream from a college in or around Ludhiana, you already have the technical foundation. What you often lack is practical, project-based AI skill-building — and that is exactly what this course fills in. Fresh graduates who complete it become significantly more competitive for data science, ML engineer, and AI developer roles in both local IT firms and remote-first companies.',
      tag: 'Core audience'
    },
    {
      icon: 'spark',
      title: 'Non-CS Graduates Looking to Switch Careers',
      text: 'You don’t need a computer science degree to succeed in ML. Students from mechanical, electrical, textile, or even non-technical degrees — common in Ludhiana given the city’s industrial and textile-manufacturing base — are increasingly moving into tech careers. The course starts with foundational Python and statistics before moving into advanced ML and DL concepts, so career switchers aren’t left behind.',
      tag: 'No CS degree needed'
    },
    {
      icon: 'server',
      title: 'Working Professionals & IT Employees Seeking Upskilling',
      text: 'Ludhiana has a growing base of software developers, data analysts, and IT support professionals working in local companies and remote MNC roles. If you’re already employed but want to move into AI and ML, this certificate offers weekend and evening batch flexibility so you can upskill without quitting your job.',
      tag: 'Weekend batches'
    },
    {
      icon: 'chart',
      title: 'Entrepreneurs & Business Owners in Ludhiana’s Industrial Sectors',
      text: 'Ludhiana is known for hosiery, auto-parts manufacturing, and textiles. Business owners in these sectors are increasingly exploring AI-driven automation, demand forecasting, and predictive analytics. Understanding ML fundamentals helps decision-makers evaluate and implement AI tools in their own businesses rather than taking a vendor’s word for it.',
      tag: 'Evaluate AI yourself'
    },
    {
      icon: 'support',
      title: 'Career Gap or Non-Working Individuals Wanting a Tech Restart',
      text: 'If you’ve taken a break from studies or work and are looking for a high-demand skill to restart your career, ML and Deep Learning is one of the strongest options in today’s job market — and Ludhiana-based classroom support makes the transition easier than self-paced online learning alone.',
      tag: 'Restart here'
    }
  ],
  note: 'No prior coding experience is required. The course starts with Python fundamentals and statistics before progressing to advanced machine learning and deep learning concepts, which is what makes it workable for complete beginners as well as graduates.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'mldl-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn and the tools you’ll work with',
  lead: 'The syllabus runs from the foundations every ML professional needs through to the deep learning architectures behind today’s most advanced AI systems — each stage reinforced by a project rather than a slide deck.',
  items: [
    {
      title: 'Core Machine Learning Foundations',
      text: 'You’ll start with the building blocks: **Python** programming for data science, statistics and probability, data preprocessing, and exploratory data analysis. From there you move into the core algorithms — linear and logistic regression, decision trees, random forests, support vector machines, k-nearest neighbours, and clustering techniques like K-Means. You’ll also cover model evaluation (accuracy, precision, recall, F1-score, cross-validation), so you understand not just how to build models but how to judge whether they actually work.'
    },
    {
      title: 'Deep Learning & Neural Networks',
      text: 'Once the ML fundamentals are solid, the course moves into deep learning — Artificial Neural Networks, **Convolutional Neural Networks** for image and computer vision tasks, and **Recurrent Neural Networks** and LSTMs for sequential and time-series data. You’ll also get an introduction to **Transformer** architectures, which power today’s most advanced AI systems and the tools built on them.'
    },
    {
      title: 'Natural Language Processing',
      text: 'A dedicated module covers **NLP** fundamentals — text preprocessing, sentiment analysis, tokenization, and building basic language models. This is increasingly relevant as more companies look to automate customer support, content moderation, and text analytics.'
    },
    {
      title: 'Generative AI Exposure',
      text: 'Given how fast the field is evolving, the course includes practical exposure to **Generative AI** concepts and tools — prompt-based systems, generative models, and how modern AI tools are being integrated into real business workflows, including Ludhiana’s textile, manufacturing, and IT sectors.'
    },
    {
      title: 'Real-World Projects You’ll Build',
      text: 'By the end of the program you’ll have built an image classification model using CNNs, a movie or product recommendation system, a sentiment analysis tool for customer reviews, a predictive analytics model such as sales or demand forecasting — directly relevant to Ludhiana’s manufacturing and retail businesses — and a basic chatbot or NLP text tool.'
    },
    {
      title: 'Career-Ready Skill Set',
      text: 'Beyond the technical syllabus, you build what recruiters actually look for: how to structure an ML project end to end, how to document and present your work, and how to talk about your projects confidently in an interview. That combination of technical depth and real project experience is what positions graduates for roles like Machine Learning Engineer, Data Analyst, AI Developer, and Junior Data Scientist.'
    }
  ],
  tools: {
    label: 'Tools and technologies you’ll work with',
    items: [
      'Python',
      'NumPy & Pandas',
      'Matplotlib & Seaborn',
      'Scikit-learn',
      'TensorFlow & Keras',
      'PyTorch',
      'Jupyter / Google Colab',
      'SQL',
      'Git & GitHub',
      'OpenCV',
      'NLTK'
    ]
  },
  close: 'Certificates alone don’t get you hired — a portfolio does. Everything above is sequenced so that what you finish with is a GitHub-ready set of projects you can hand to a recruiter, not a list of topics you have seen.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'mldl-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'There is no shortage of machine learning courses. What follows is what makes this one worth the time for someone actually based in Ludhiana.',
  items: [
    {
      title: 'Industry-Relevant Curriculum, Not Just Theory',
      text: 'A lot of institutes teach machine learning as a set of PowerPoint concepts. This program is structured around what companies are actually hiring for: applied Python, real-world datasets, model deployment, and Generative AI fundamentals alongside classic ML and DL topics. You leave with skills that map to job descriptions, not exam answers.'
    },
    {
      title: 'Hands-On Projects You Can Show Employers',
      text: 'Throughout the program you build and deploy image classifiers, recommendation systems, sentiment analysis tools, and predictive models using real datasets. By the end you have a GitHub-ready portfolio you can show recruiters in Ludhiana, Chandigarh, or during remote interviews with companies anywhere in India.'
    },
    {
      title: 'Local Access, No Relocation Needed',
      text: 'Most premium AI and ML training in North India is concentrated in Chandigarh, Delhi-NCR, or Bangalore, forcing Ludhiana students to either relocate or settle for purely online courses with little support. Classroom-based, mentor-led training here means local students save on relocation costs while still getting hands-on instruction.'
    },
    {
      title: 'Bridges the Gap Between College and Industry',
      text: 'Engineering and computer science syllabi at PTU-affiliated colleges move slowly and rarely cover current AI tools, frameworks, or real deployment practices. This program is designed specifically to close that gap, giving graduates and final-year students the practical skill set campus placements alone don’t provide.'
    },
    {
      title: 'Career-Focused Outcomes, Not Just Certification',
      text: 'The goal isn’t to hand you a certificate — it’s to make you employable. That means resume-building support, interview preparation, and guidance on positioning your AI and ML skills for roles like Machine Learning Engineer, Data Analyst, AI Developer, and Data Scientist. For Ludhiana students that also includes guidance on remote opportunities, since many of the best-paying AI roles today are remote-first.'
    },
    {
      title: 'Strong Foundation for Future Specializations',
      text: 'ML and AI are foundational to nearly every emerging tech field — from Generative AI and NLP to computer vision and robotics. Completing this certificate gives you a base to specialize further, pursue higher studies, or move into more advanced AI roles as the field evolves.'
    },
    {
      title: 'Growing Demand Across Punjab’s Industries',
      text: 'Ludhiana’s economy — hosiery, textiles, auto-parts, and a rising IT and startup sector — is starting to adopt AI-driven tools for demand forecasting, quality control, and automation. Locally trained ML professionals who understand both the technology and Punjab’s business context have a genuine advantage, for local employment and for consulting with regional industries.'
    },
    {
      title: 'The Right Time to Start',
      text: 'Machine learning and deep learning are consistently ranked among the fastest-growing tech skills globally. Entering the field while local competition for specialized AI talent is still relatively low compared with metro cities offers a real head start.'
    }
  ],
  close: 'Skills that map to job descriptions, projects you can show, and no relocation required — that is the whole argument for learning this here rather than somewhere else.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'mldl-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'What separates a local institute from an online platform is whether anyone notices when you fall behind. Here is how this program is set up.',
  items: [
    {
      title: 'A Training Institute That Understands Ludhiana’s Students',
      text: 'techcadd isn’t a generic online platform serving every city the same way — it’s built around the needs of students and professionals based in Ludhiana. From batch timings that work around local college schedules and job shifts, to guidance that factors in Punjab’s job market, the approach is shaped by who actually walks through the doors: 12th-pass students, PTU-affiliated graduates, working professionals, and career switchers.'
    },
    {
      title: 'Expert-Led, Mentor-Based Training',
      text: 'Rather than pushing students through pre-recorded videos with no support, the program is led by trainers with real industry and project experience. You get direct mentorship — the kind where you can ask “why did the model overfit?” and get a real answer, not a canned response. That matters most for students from non-CS backgrounds who need support building confidence in Python, statistics, and neural network concepts.'
    },
    {
      title: 'Balanced Curriculum: ML + Deep Learning + Practical AI Tools',
      text: 'Many institutes offer either a basic ML course or a basic AI awareness course — rarely both, and rarely in depth. This program covers the full spectrum: core machine learning algorithms, deep learning architectures including CNNs, RNNs and Transformers, and exposure to modern Generative AI tools. That makes for a genuinely well-rounded certificate rather than a narrow skill set.'
    },
    {
      title: 'Project-First Teaching Philosophy',
      text: 'Learning isn’t confined to slides and theory. Every major concept is reinforced through a hands-on project, so by the time you finish you already have practical experience solving real problems with real data. This is what separates a resume that gets shortlisted from one that gets skipped.'
    },
    {
      title: 'Placement Support Rooted in Local Networks',
      text: 'techcadd works to connect students with placement opportunities relevant to Ludhiana and the broader Punjab region, as well as remote roles with companies outside the state. That dual approach means students aren’t limited to local openings alone.'
    },
    {
      title: 'Flexible Learning Formats for Every Kind of Student',
      text: 'Not every learner has the same schedule. Evening and weekend batch options mean upskilling in machine learning and deep learning doesn’t require putting your current job, college, or business on hold.'
    },
    {
      title: 'Affordable, Transparent Fee Structure',
      text: 'Compared with metro-city institutes and international certification programs, techcadd offers a training investment accessible to Ludhiana’s student and professional community — without cutting curriculum depth or mentor support.'
    },
    {
      title: 'A Name Trusted Locally for IT & Tech Training',
      text: 'techcadd has built its reputation in Ludhiana around practical, job-focused IT and tech education. Choosing a local institute with an established presence — rather than an anonymous online-only platform — means accountability, in-person support when you need it, and a training partner invested in your outcome.'
    }
  ],
  close: 'Mentorship you can interrupt with a question, a curriculum that covers both halves of the field, and a project after every concept.'
}

/* ---------------------------------------------------------------- */

/* The closing pitch, immediately above the enquiry form. */
const ENROL_NOW = {
  id: 'mldl-enrol',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Enrol now',
  title: 'Start your AI career right here in Ludhiana',
  lead: 'Stop searching for AI courses in Chandigarh or Delhi.',
  items: [
    {
      title: 'What you get',
      text: 'Expert-led, project-based **Machine Learning & Deep Learning** training in Ludhiana — Python and statistics through to CNNs, RNNs, Transformers, NLP and Generative AI, with a GitHub-ready portfolio at the end of it.'
    },
    {
      title: 'Before you enrol',
      text: 'Course duration varies by batch type — regular, weekend or fast-track. Batch sizes are kept small so every student gets personal mentorship, so contact the Ludhiana centre for the current schedule, exact duration, fees and the centre address.'
    }
  ]
}

export const DL_NARRATIVE = [CURRICULUM, WHY_THIS_PROGRAMME, WHY_TECHCADD, ENROL_NOW]

/* ------------------------------------------------------------------
   UNVERIFIED TESTIMONIALS — CHECK BEFORE THIS PAGE GOES LIVE.

   Same caveat as the other pages carrying supplied reviews: full
   names, colleges and localities, and named outcomes ("got my first
   data analyst interview call within a month", "got a junior data
   analyst role in Mohali"). If they were written as sample copy rather
   than collected from the students named, they must not be published
   — invented reviews attributed to identifiable people, carrying
   employment claims, mislead prospective students and are unlawful in
   many jurisdictions. Naming the colleges raises the stakes rather
   than lowering them: a quote identifying a person by name AND
   institution is checkable by anyone who cares to.

   Confirm each entry against a real, attributable review. Anything
   that cannot be confirmed should be removed — or delete the
   `testimonials` line from the seed in ai-data.js, which makes the
   page fall back to the generic quotes in shared.js.
------------------------------------------------------------------ */
export const DL_TESTIMONIALS = [
  {
    quote:
      'I finished my B.Tech from a college near PAU and honestly felt lost about what to do next. Joined techcadd’s ML & Deep Learning course and it completely changed my direction. The trainers actually explain the “why” behind every algorithm, not just the code. Got my first data analyst interview call within a month of finishing the course.',
    name: 'Simranjit Kaur',
    course: 'ML & Deep Learning',
    detail: 'B.Tech CSE graduate, Ludhiana',
    rating: 5,
    initials: 'SK'
  },
  {
    quote:
      'Was confused between doing an MCA or trying something practical. Chose techcadd’s course and it was the right call. The projects section is solid — I built a real image classifier and a recommendation system, both of which I showed in my interviews. Recommend this to anyone from Ludhiana looking to get into AI without moving to Chandigarh.',
    name: 'Rahul Mehta',
    course: 'ML & Deep Learning',
    detail: 'BCA graduate, Model Town, Ludhiana',
    rating: 5,
    initials: 'RM'
  },
  {
    quote:
      'I work in IT support and wanted to upskill into ML without quitting my job. The weekend batch worked perfectly for my schedule. Deep Learning module took effort to grasp but the mentors were patient. Only wish the batch size was slightly smaller, but overall very satisfied.',
    name: 'Harpreet Singh',
    course: 'ML & Deep Learning',
    detail: 'Working professional, Sarabha Nagar',
    rating: 4,
    initials: 'HS'
  },
  {
    quote:
      'I joined right after 12th, still in first year of college now, and it’s honestly given me a huge head start over my classmates. Understanding Python and basic ML before starting my degree made my first-year coursework so much easier. My trainer was really encouraging even though I had zero coding background.',
    name: 'Ishita Sharma',
    course: 'ML & Deep Learning',
    detail: '12th pass student, Ludhiana',
    rating: 5,
    initials: 'IS'
  },
  {
    quote:
      'Compared this with a few Chandigarh institutes before deciding. techcadd’s course content is honestly at par, but without the daily travel. The Deep Learning module covering CNNs and RNNs was detailed and the mentor made sure everyone actually understood the math, not just copy-pasted code.',
    name: 'Arjun Bansal',
    course: 'ML & Deep Learning',
    detail: 'B.Tech, GNE Ludhiana',
    rating: 5,
    initials: 'AB'
  },
  {
    quote:
      'Good structured course. What I liked most was the project-first approach — by week 4 I was already building actual models instead of just watching slides. Placement support helped me get connected with a couple of relevant openings. Would’ve liked a bit more NLP depth, but overall a strong course.',
    name: 'Priya Chawla',
    course: 'ML & Deep Learning',
    detail: 'MCA graduate, Ludhiana',
    rating: 4,
    initials: 'PC'
  },
  {
    quote:
      'I run a small manufacturing unit and wanted to understand how AI could help with demand forecasting. This course gave me exactly that — practical understanding, not just buzzwords. The trainers were patient with someone from a non-technical background like me.',
    name: 'Gurpreet Singh',
    course: 'ML & Deep Learning',
    detail: 'Business owner, Focal Point, Ludhiana',
    rating: 5,
    initials: 'GS'
  },
  {
    quote:
      'Switched from thinking about a generic IT job to actually pursuing data science because of this course. The hands-on projects gave me real confidence to talk about my skills in interviews. techcadd’s mentors were always available for doubts, even after class hours.',
    name: 'Neha Kapoor',
    course: 'ML & Deep Learning',
    detail: 'B.Sc IT, Ludhiana',
    rating: 5,
    initials: 'NK'
  },
  {
    quote:
      'Had a 2-year career gap and was nervous about restarting in a technical field. This course eased me in well — started from Python basics before jumping into heavier ML and DL concepts. Got a junior data analyst role in Mohali after completing it. Grateful for the structured approach.',
    name: 'Vikramjit Singh',
    course: 'ML & Deep Learning',
    detail: 'Career restart, Ludhiana',
    rating: 4,
    initials: 'VS'
  },
  {
    quote:
      'Traveled from Chandigarh a few times for in-person sessions but most of it was manageable remotely too. Compared techcadd to a couple of Chandigarh-based institutes and found the mentorship and project quality genuinely better here. Solid course for anyone serious about ML and DL.',
    name: 'Ramanpreet Kaur',
    course: 'ML & Deep Learning',
    detail: 'Engineering graduate, Chandigarh',
    rating: 5,
    initials: 'RK'
  },
  {
    quote:
      'Did this alongside my final year to strengthen my resume before placements. It worked — recruiters were impressed that I had real project experience beyond my college syllabus. The trainers are approachable and genuinely invested in helping students succeed.',
    name: 'Aditya Verma',
    course: 'ML & Deep Learning',
    detail: 'B.Tech final year, PTU-affiliated college',
    rating: 5,
    initials: 'AV'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.
------------------------------------------------------------------ */
export const DL_FAQS = [
  {
    q: 'What is the professional certificate course in Machine Learning & Deep Learning at techcadd, Ludhiana?',
    a: 'It is a career-focused, hands-on training program covering core **Machine Learning** algorithms, **Deep Learning** architectures (CNNs, RNNs, Transformers), NLP fundamentals, and practical Generative AI exposure — designed for students and professionals in Ludhiana who want job-ready AI skills.'
  },
  {
    q: 'Who can join this Machine Learning & Deep Learning course in Ludhiana?',
    a: '12th-pass students, graduates (B.Tech, BCA, MCA, B.Sc IT/CS), working professionals looking to upskill, career switchers from non-CS backgrounds, and business owners wanting to understand AI applications can all join.'
  },
  {
    q: 'Do I need a coding background to join this course?',
    a: 'No prior coding experience is required. The course starts with **Python** fundamentals and statistics before progressing to advanced machine learning and deep learning concepts, making it accessible for complete beginners.'
  },
  {
    q: 'What is the duration of the Machine Learning & Deep Learning course at techcadd?',
    a: 'Course duration varies based on the batch type — regular, weekend, or fast-track. Contact the Ludhiana centre directly for the current schedule and exact duration for your preferred batch.'
  },
  {
    q: 'Is this course available in weekend or evening batches for working professionals?',
    a: 'Yes. techcadd offers flexible batch timings, including weekend and evening options, so working professionals and college students in Ludhiana can attend without disrupting their job or studies.'
  },
  {
    q: 'What tools and technologies will I learn in this course?',
    a: 'You’ll work with **Python**, NumPy, Pandas, **Scikit-learn**, **TensorFlow**/Keras, PyTorch fundamentals, Jupyter Notebook and Google Colab, SQL, Git and GitHub, and OpenCV — the core stack used by ML and AI professionals today.'
  },
  {
    q: 'Will I get to work on real projects during the course?',
    a: 'Yes. The course follows a project-first approach, so you’ll build image classifiers, recommendation systems, sentiment analysis tools, and predictive analytics models — all of which you can showcase in interviews.'
  },
  {
    q: 'Does techcadd provide placement support after course completion?',
    a: 'Yes. techcadd offers placement guidance connecting students to opportunities in Ludhiana, the wider Punjab region, and remote-friendly roles with companies elsewhere in India.'
  },
  {
    q: 'What career opportunities are available after completing this course?',
    a: 'Graduates can pursue roles such as Machine Learning Engineer, Data Analyst, AI Developer, Junior Data Scientist, and NLP/AI Associate — both in local IT companies and remote positions across India.'
  },
  {
    q: 'How is techcadd’s course different from online-only ML courses?',
    a: 'Unlike self-paced online platforms, this is in-person, mentor-led training based in Ludhiana — combining a structured curriculum, direct doubt-clearing support, hands-on projects, and local placement guidance that purely online courses typically lack.'
  },
  {
    q: 'Is this certificate course recognized by employers?',
    a: 'The certificate reflects practical, project-based skill development aligned with current industry hiring standards, and is designed to strengthen your resume for ML and AI roles alongside your academic degree. In practice employers weigh the portfolio and the interview more heavily than any certificate, which is why the projects matter most.'
  },
  {
    q: 'Where is the techcadd training centre located in Ludhiana?',
    a: 'Contact techcadd through the enquiry form or by phone for the exact centre address and directions in Ludhiana.'
  }
]
