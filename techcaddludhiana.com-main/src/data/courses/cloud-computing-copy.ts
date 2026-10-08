/* ==================================================================
   Long-form copy for the Cloud Computing course page.

   Split out of cyber-cloud.js for the same reason as the others —
   that file seeds four courses, and this is one course's editorial
   content. See ./cybersecurity-copy.js, which sits beside it.

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

export const CLOUD_OVERVIEW = {
  title: 'The cloud computing course in Ludhiana that ends in a job, not a certificate',
  lead: 'Looking to build a future-proof career in tech? The **Cloud Computing Course in Ludhiana** at techcadd is designed for students, graduates, and working professionals who want to master **AWS**, **Microsoft Azure**, and **Google Cloud Platform** through practical, hands-on training. As businesses across Ludhiana, Jalandhar, and the greater Punjab region shift their operations to the cloud, the demand for skilled cloud professionals has never been higher — and techcadd is here to help you meet that demand.',
  body: [
    'This industry-oriented program covers cloud architecture, virtualization, DevOps fundamentals, cloud security, and deployment strategies, all taught by certified trainers with real-world enterprise experience. Whether you’re a 12th-pass student exploring IT career options, a graduate from a Ludhiana college, or a job seeker looking to upskill, this course is structured to take you from beginner to job-ready.',
    'At techcadd, located in the heart of Ludhiana, you’ll get access to live projects, certification guidance, and placement support — ensuring you don’t just learn cloud computing, but actually launch a career in it.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const CLOUD_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this cloud computing course in Ludhiana',
  lead: 'One of the biggest advantages of the **Cloud Computing Course in Ludhiana** at techcadd is that it’s built for learners at every stage of their career journey. You don’t need to be a coding expert or a computer science topper to get started — you just need curiosity, consistency, and the willingness to learn.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students (Science & Commerce Background)',
      text: 'If you’ve just finished school in Ludhiana and are wondering “what next in IT?”, cloud computing is one of the smartest career paths you can choose. You don’t need a computer science background — the beginner-friendly curriculum starts from the fundamentals of networking, operating systems, and IT infrastructure before moving into AWS, Azure, and Google Cloud. Many students from schools across Model Town, Sarabha Nagar, and BRS Nagar join right after their 12th to build a strong, early foundation in one of the fastest-growing tech fields.',
      tag: 'No background needed'
    },
    {
      icon: 'career',
      title: 'Graduates (BCA, B.Tech, MCA, B.Sc IT, or Any Stream)',
      text: 'Graduates from colleges in and around Ludhiana — including those from streams unrelated to computers — often find themselves confused about the next step. This course is ideal if you’re a fresh graduate looking to specialize in a high-demand domain. Cloud computing skills significantly boost your resume and open doors to roles like Cloud Support Associate, Junior Cloud Engineer, and DevOps Trainee, even if your degree wasn’t purely technical.',
      tag: 'Any stream'
    },
    {
      icon: 'spark',
      title: 'Job Seekers & Career Switchers',
      text: 'Are you currently working in a non-IT role or unemployed and looking for a career change? Cloud computing is one of the easiest and fastest domains to switch into, especially with structured, mentor-led training. techcadd’s placement-focused approach in Ludhiana is designed specifically for career switchers who need practical, job-ready skills — not just theory.',
      tag: 'Start from zero'
    },
    {
      icon: 'server',
      title: 'Working IT Professionals & System Administrators',
      text: 'If you’re already working in IT support, networking, or system administration anywhere in Ludhiana or nearby cities like Jalandhar and Khanna, this course helps you transition into higher-paying cloud architect, cloud administrator, or DevOps engineer roles. You’ll learn how to migrate on-premise systems to the cloud, manage cloud infrastructure, and implement automation — skills that are directly transferable to your current job.',
      tag: 'Flexible batches'
    },
    {
      icon: 'code',
      title: 'Software Developers & Engineers',
      text: 'Developers who want to build and deploy cloud-native applications, work with containerization tools like **Docker** and **Kubernetes**, or move into full-stack cloud development will benefit enormously from this program. It complements your existing coding skills with infrastructure and deployment expertise.',
      tag: 'Beyond the code'
    },
    {
      icon: 'chart',
      title: 'Business Owners & Entrepreneurs',
      text: 'Even if you’re not looking for a job, understanding cloud technology helps you make smarter decisions for your business — from cost optimization to data security. Many small business owners in Ludhiana’s growing startup ecosystem enrol to understand how cloud can power their digital transformation.',
      tag: 'Run it in-house'
    }
  ],
  note: 'No matter your background, techcadd’s **cloud computing course in Ludhiana** meets you where you are and builds you up to where you want to be.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'cloud-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'Curriculum and tools covered',
  lead: 'The **Cloud Computing Course in Ludhiana** at techcadd is structured to take you from foundational concepts to advanced, job-ready cloud engineering skills. Here’s a detailed breakdown of what the curriculum covers and the tools you’ll get hands-on experience with.',
  items: [
    {
      title: 'Foundations of Cloud Computing',
      text: 'You’ll start with the core concepts every cloud professional needs — understanding IaaS, PaaS, and SaaS models, public vs. private vs. hybrid cloud, virtualization fundamentals, and basic networking concepts. This foundation ensures that even students without a strong technical background can confidently move into advanced topics.'
    },
    {
      title: 'Amazon Web Services (AWS)',
      text: 'A major portion of the course focuses on **AWS**, currently the most widely used cloud platform globally. You’ll learn EC2 for launching, configuring and managing virtual servers; S3 for cloud storage, bucket policies and data management; IAM for secure user roles and permissions; Load Balancers and Auto Scaling for performance and availability; Lambda for serverless, event-driven architecture; VPC for networking and security configuration; and RDS for managed database services.'
    },
    {
      title: 'Microsoft Azure',
      text: 'You’ll also get hands-on training with **Azure**’s core services, including virtual machines, Azure Storage, Azure Active Directory, resource groups, and Azure DevOps pipelines — critical for students targeting roles at companies standardized on Microsoft’s ecosystem.'
    },
    {
      title: 'Google Cloud Platform (GCP)',
      text: 'Training also covers **GCP** fundamentals — Compute Engine, Cloud Storage, App Engine, and Google’s approach to Kubernetes and containerized deployments — rounding out your multi-cloud expertise.'
    },
    {
      title: 'DevOps & Automation Tools',
      text: 'Since modern cloud roles increasingly demand DevOps skills, the course integrates **Docker** for containerization, **Kubernetes** for container orchestration at scale, **Jenkins** for CI/CD pipeline automation, Git and GitHub for version control and collaborative development, and Infrastructure as Code with Terraform basics for automating infrastructure deployment.'
    },
    {
      title: 'Cloud Security & Compliance',
      text: 'You’ll learn cloud security best practices including IAM policies, data encryption, monitoring and logging (using tools like CloudWatch), threat detection, and compliance frameworks — a skill set that’s increasingly non-negotiable for cloud hiring managers.'
    },
    {
      title: 'Cloud Architecture & Deployment',
      text: 'The course covers how to design scalable, fault-tolerant cloud architecture, deploy multi-tier applications, manage disaster recovery planning, and optimize costs across cloud environments — practical skills you’ll apply directly in your final projects.'
    },
    {
      title: 'Monitoring, Logging & Troubleshooting',
      text: 'You’ll get trained on real-world monitoring tools and dashboards to track application performance, detect anomalies, and troubleshoot infrastructure issues — exactly the kind of day-to-day responsibility you’ll handle in a cloud support or administrator role.'
    },
    {
      title: 'Live Projects & Capstone Work',
      text: 'Throughout the program, you’ll apply everything you’ve learned to live, hands-on projects — deploying real applications on cloud infrastructure, configuring end-to-end pipelines, and solving practical scenarios that simulate actual workplace challenges.'
    },
    {
      title: 'Certification Preparation',
      text: 'The curriculum is aligned to prepare you for globally recognized certifications from AWS, Microsoft Azure, and Google Cloud — giving you credentials that carry real weight with recruiters in Ludhiana and beyond.'
    }
  ],
  tools: {
    label: 'Tools and platforms you’ll work with',
    items: [
      'AWS',
      'Microsoft Azure',
      'Google Cloud Platform',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Git & GitHub',
      'Terraform',
      'CloudWatch',
      'Azure DevOps'
    ]
  },
  close: 'By the end of the course, you won’t just understand cloud computing conceptually — you’ll have practical, portfolio-ready experience with the exact tools and platforms employers are hiring for.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'cloud-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'Choosing the right course can define the next ten years of your career. Here’s why the **Cloud Computing Course in Ludhiana** at techcadd stands out as the program worth investing your time and money in.',
  items: [
    {
      title: 'Cloud Computing Isn’t a Trend — It’s the New IT Backbone',
      text: 'The large majority of enterprises worldwide now rely on cloud infrastructure, and Indian companies — from Ludhiana-based textile and manufacturing firms digitizing their operations to major MNCs — are racing to hire cloud-skilled talent. Unlike many IT skills that come and go, cloud computing has become foundational to how modern businesses operate. Learning it now means you’re not chasing a trend; you’re building a career on the infrastructure that powers the next decade of technology.'
    },
    {
      title: 'Real Salary Growth, Real Demand',
      text: 'Experienced cloud engineers and architects in India can command substantially higher salaries than comparable traditional IT roles, and even entry-level cloud support roles typically pay more than general IT support. For students and job seekers in Ludhiana, this program offers a realistic path towards pay levels that were previously easier to reach only in metro cities like Bangalore, Pune, or Gurgaon — without having to relocate immediately. Actual offers depend on your skills, certifications, experience and the employer.'
    },
    {
      title: 'Multi-Platform Mastery, Not Just One Tool',
      text: 'Many local training programs teach only one cloud platform. This program is structured around all three major platforms — AWS, Microsoft Azure, and Google Cloud Platform — giving you the flexibility to apply for jobs across a much wider range of companies, instead of being limited to businesses using a single cloud provider.'
    },
    {
      title: 'Hands-On, Project-Based Learning',
      text: 'This isn’t a theory-heavy classroom course. You’ll work on live projects, real cloud labs, and practical deployment scenarios that mirror what you’ll actually do on the job — configuring virtual machines, setting up load balancers, managing IAM roles, and deploying applications. This hands-on approach is exactly what employers in Ludhiana and beyond are screening for during technical interviews.'
    },
    {
      title: 'DevOps & Automation Skills Included',
      text: 'Cloud computing today goes hand-in-hand with DevOps. This program integrates DevOps fundamentals, infrastructure as code, and automation practices directly into the curriculum — so you graduate with a more complete, in-demand skill set rather than a narrow specialization.'
    },
    {
      title: 'Local Convenience, Global Career Standards',
      text: 'Studying at techcadd means you get industry-standard, globally relevant cloud training without leaving Ludhiana. You save on relocation costs, stay close to family and support systems, and still build a resume that competes with candidates trained in Delhi, Chandigarh, or Bangalore.'
    },
    {
      title: 'Certification-Ready Curriculum',
      text: 'The course is structured to prepare you for globally recognized certifications from AWS, Microsoft, and Google — credentials that carry serious weight with recruiters and can significantly increase your interview call rate.'
    },
    {
      title: 'A Career, Not Just a Certificate',
      text: 'Ultimately, this program is designed with one outcome in mind: helping you land a real, well-paying job in cloud computing. Every module, project, and mentorship session is built around making you job-ready, not just certificate-ready.'
    }
  ],
  close: 'Learning cloud now means building on the infrastructure the next decade of technology runs on, rather than a skill that dates in three years.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'cloud-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'With dozens of institutes in Ludhiana claiming to offer “the best” cloud computing training, it’s fair to ask — what actually makes techcadd different? Here’s an honest, detailed breakdown.',
  items: [
    {
      title: 'Trainers Who’ve Worked in the Industry, Not Just Taught It',
      text: 'At techcadd, your instructors are AWS and Azure certified professionals with real, hands-on experience in enterprise cloud architecture and DevOps implementation. This matters because cloud computing changes fast — tools, best practices, and certification patterns evolve constantly. Learning from trainers who’ve actually deployed cloud infrastructure for real businesses means you’re getting current, practical knowledge, not outdated textbook theory.'
    },
    {
      title: 'Dedicated Cloud Lab Access',
      text: 'techcadd provides students access to a dedicated cloud lab in Ludhiana, where you practice everything you learn — IAM configuration, monitoring, logging, security compliance, and more — in a real, sandboxed environment. Many institutes teach cloud concepts using slides and screenshots; here you’re inside the console, doing the actual work, which is exactly the experience employers want to see.'
    },
    {
      title: 'Multi-Cloud Curriculum (AWS + Azure + Google Cloud)',
      text: 'Instead of narrowing your options to one platform, techcadd trains you across AWS, Microsoft Azure, and Google Cloud Platform. This significantly widens your job eligibility — you can confidently apply to companies using any major cloud provider, whether it’s a startup running on GCP or an enterprise standardized on Azure.'
    },
    {
      title: 'DevOps & Infrastructure as Code Integration',
      text: 'Cloud computing and DevOps have become deeply intertwined in the modern IT job market. techcadd’s curriculum doesn’t treat these as separate tracks — you’ll learn infrastructure as code, automation pipelines, and deployment practices as part of your core training, making you a far more versatile and hireable candidate.'
    },
    {
      title: 'Security-First Approach',
      text: 'Cloud security is one of the most in-demand and often under-taught skills in the market. techcadd places strong emphasis on cloud security best practices, IAM, monitoring, and compliance frameworks — areas that many competing institutes in Ludhiana gloss over but that recruiters specifically screen for in interviews.'
    },
    {
      title: 'Local Presence, Ludhiana-Focused Support',
      text: 'Being based right in Ludhiana means techcadd understands the local student ecosystem — the colleges, the job market, the students commuting from areas like Sarabha Nagar, Model Town, Civil Lines, Pakhowal Road, and BRS Nagar. You get in-person mentorship, doubt-clearing sessions, and a support system that purely online or big-city institutes simply can’t offer with the same personal attention.'
    },
    {
      title: 'Dedicated Placement Support',
      text: 'techcadd doesn’t just train you and send you off — the program includes dedicated placement support, resume building, interview preparation, and connections to hiring companies looking for cloud talent. The goal isn’t course completion; it’s career placement.'
    },
    {
      title: 'Batch Flexibility for Students and Working Professionals',
      text: 'Whether you’re a student with a fixed college schedule or a working professional trying to upskill in the evenings, techcadd offers flexible batch timings so the course fits into your life — not the other way around.'
    },
    {
      title: 'Proven Track Record in Ludhiana’s IT Training Space',
      text: 'techcadd has built a reputation in Ludhiana as a serious, outcome-focused IT training institute — not just for cloud computing, but across multiple in-demand tech domains, giving students confidence that they’re learning at an established, trusted institution.'
    },
    {
      title: 'Affordable, Transparent Fee Structure',
      text: 'Compared to relocating to a metro city for similar quality training, techcadd offers globally relevant, industry-grade cloud education at a fraction of the cost — with transparent fees and no hidden charges.'
    }
  ],
  close: 'Multi-cloud training, integrated DevOps skills, a dedicated lab, industry-experienced trainers and local placement support — tailored specifically for students and professionals in Ludhiana.'
}

/* ---------------------------------------------------------------- */

/* The closing pitch, immediately above the enquiry form. */
const ENROL_NOW = {
  id: 'cloud-enrol',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Enrol now',
  title: 'Start your cloud career today, right here in Ludhiana',
  lead: 'Stop searching for “cloud computing course near me”.',
  items: [
    {
      title: 'What you get',
      text: 'techcadd’s Ludhiana centre brings you industry-grade **AWS**, **Azure**, and **Google Cloud** training with dedicated placement support, all under one roof. Whether you’re a student, graduate, or working professional, your cloud career starts with one enquiry.'
    },
    {
      title: 'Before you enrol',
      text: 'The course typically runs 3 to 6 months depending on whether you choose the regular or fast-track batch, with weekday and weekend timing options. Fees vary by track and duration — contact the Ludhiana centre for the current fee structure and batch schedule.'
    }
  ]
}

export const CLOUD_NARRATIVE = [
  CURRICULUM,
  WHY_THIS_PROGRAMME,
  WHY_TECHCADD,
  ENROL_NOW
]

/* ------------------------------------------------------------------
   UNVERIFIED TESTIMONIALS — CHECK BEFORE THIS PAGE GOES LIVE.

   Same caveat as the cybersecurity page, and for the same reason:
   these carry full names, home neighbourhoods, and named employment
   outcomes ("placed in a cloud support role within 2 months", "landed
   a junior cloud engineer role", "got a good hike"). If they were
   written as sample copy rather than collected from the students
   named, they must not be published — invented reviews attributed to
   identifiable people, carrying job and salary claims, mislead
   prospective students and are unlawful in many jurisdictions.

   Confirm each entry against a real, attributable review. Anything
   that cannot be confirmed should be removed — or delete the
   `testimonials` line from the seed in cyber-cloud.js, which makes the
   page fall back to the generic quotes in shared.js.
------------------------------------------------------------------ */
export const CLOUD_TESTIMONIALS = [
  {
    quote:
      'I joined techcadd right after my B.Tech from a college near Ludhiana, honestly a bit confused about what to do next. The cloud computing course cleared all my doubts about AWS and Azure. The trainers actually work in the industry, so they explain things in a very practical way. Got placed in a cloud support role within 2 months of finishing the course.',
    name: 'Ramanpreet Singh',
    course: 'Cloud Computing',
    detail: 'Model Town, Ludhiana',
    rating: 5,
    initials: 'RS'
  },
  {
    quote:
      'Best decision I made after 12th. I had zero technical background but the faculty at techcadd started from basics and built up slowly. The cloud lab access really helped because I could practice everything hands-on instead of just watching slides.',
    name: 'Simran Kaur',
    course: 'Cloud Computing',
    detail: 'Sarabha Nagar, Ludhiana',
    rating: 5,
    initials: 'SK'
  },
  {
    quote:
      'Was working in a non-IT job for 3 years and wanted a career switch. techcadd’s cloud computing program gave me the confidence and skills to actually apply for cloud jobs. The DevOps portion of the course was an added bonus, most other institutes in Ludhiana don’t cover that.',
    name: 'Gurjot Singh Brar',
    course: 'Cloud Computing',
    detail: 'Pakhowal Road, Ludhiana',
    rating: 4,
    initials: 'GB'
  },
  {
    quote:
      'I compared a few institutes in Ludhiana before joining, and techcadd’s curriculum was clearly more updated and covered all three platforms — AWS, Azure and GCP. Multi-cloud training is a big plus when applying for jobs.',
    name: 'Harleen Kaur',
    course: 'Cloud Computing',
    detail: 'Civil Lines, Ludhiana',
    rating: 5,
    initials: 'HK'
  },
  {
    quote:
      'I travel from Chandigarh for weekend batches at techcadd, and it’s totally worth it. The trainers are AWS certified and explain real enterprise scenarios, not just textbook stuff. Learned Docker and Kubernetes here which really impressed my interviewers.',
    name: 'Aman Deep Singh',
    course: 'Cloud Computing',
    detail: 'Chandigarh',
    rating: 5,
    initials: 'AD'
  },
  {
    quote:
      'Good course structure, very student-friendly environment. I liked that they focused a lot on cloud security, which I later realized is something interviewers ask about a lot but most courses skip.',
    name: 'Navjot Kaur',
    course: 'Cloud Computing',
    detail: 'BRS Nagar, Ludhiana',
    rating: 4,
    initials: 'NK'
  },
  {
    quote:
      'Came to Ludhiana specifically for this course after hearing about techcadd from a friend. The placement support team helped me with my resume and mock interviews, and I landed a junior cloud engineer role. Highly recommend for anyone serious about a cloud career.',
    name: 'Karanveer Singh',
    course: 'Cloud Computing',
    detail: 'Khanna',
    rating: 5,
    initials: 'KS'
  },
  {
    quote:
      'As a girl from a non-technical background, I was nervous about joining a cloud course. But the environment at techcadd was very supportive, and the trainers made sure everyone understood the concepts before moving ahead. Great experience overall.',
    name: 'Ishika Sharma',
    course: 'Cloud Computing',
    detail: 'Jalandhar',
    rating: 5,
    initials: 'IS'
  },
  {
    quote:
      'Solid course content, live projects were the best part for me. Got real exposure to deploying applications on AWS which I hadn’t gotten anywhere else. Would’ve liked a bit more time on GCP but overall very satisfied.',
    name: 'Manpreet Singh',
    course: 'Cloud Computing',
    detail: 'Dugri, Ludhiana',
    rating: 4,
    initials: 'MS'
  },
  {
    quote:
      'I was already working as a system admin and wanted to move into cloud roles. techcadd’s course was exactly what I needed — practical, focused, and taught by people who actually know the industry. Got a good hike after adding cloud skills to my resume.',
    name: 'Ravneet Kaur',
    course: 'Cloud Computing',
    detail: 'Model Gram, Ludhiana',
    rating: 5,
    initials: 'RK'
  },
  {
    quote:
      'Honestly one of the better IT institutes in Ludhiana. The batch timings were flexible enough that I could continue my part-time job while studying. The trainers were patient with doubts, even outside class hours.',
    name: 'Devinder Singh',
    course: 'Cloud Computing',
    detail: 'Ferozepur Road, Ludhiana',
    rating: 5,
    initials: 'DS'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.
------------------------------------------------------------------ */
export const CLOUD_FAQS = [
  {
    q: 'What is the duration of the Cloud Computing Course at techcadd, Ludhiana?',
    a: 'The course duration typically ranges from 3 to 6 months, depending on whether you choose the regular or fast-track batch, with flexible weekday and weekend timing options for students and working professionals.'
  },
  {
    q: 'Do I need a technical background to join this cloud computing course?',
    a: 'No, you don’t need a prior technical background. The course starts with foundational concepts in networking, operating systems, and cloud basics before progressing to AWS, Azure, and Google Cloud, making it suitable for 12th-pass students, graduates from any stream, and career switchers.'
  },
  {
    q: 'Which cloud platforms are covered in this course?',
    a: 'The course covers all three major cloud platforms — **Amazon Web Services (AWS)**, **Microsoft Azure**, and **Google Cloud Platform (GCP)** — along with DevOps tools like Docker, Kubernetes, and Jenkins.'
  },
  {
    q: 'Is this course suitable for working professionals in Ludhiana?',
    a: 'Yes, techcadd offers flexible batch timings, including evening and weekend slots, specifically designed for working professionals and system administrators who want to upskill without quitting their current job.'
  },
  {
    q: 'What career opportunities are available after completing this course?',
    a: 'Graduates can pursue roles such as Cloud Support Associate, Cloud Administrator, DevOps Engineer, Cloud Architect, and Site Reliability Engineer. Pay varies widely with experience, certification level, employer and location.'
  },
  {
    q: 'Does techcadd provide placement support after the course?',
    a: 'Yes, techcadd offers placement support including resume building, mock interviews, and connections with hiring companies looking for cloud computing talent in Ludhiana and beyond.'
  },
  {
    q: 'Will I get hands-on practice, or is this course only theory-based?',
    a: 'The course is heavily hands-on, with dedicated cloud lab access, live projects, and real deployment scenarios so you practice exactly what you’ll be doing in an actual cloud engineering job.'
  },
  {
    q: 'Are the trainers certified in cloud technologies?',
    a: 'Yes, trainers at techcadd are AWS and Azure certified professionals with real-world experience in enterprise cloud architecture and DevOps implementation.'
  },
  {
    q: 'Is this course helpful for clearing AWS, Azure, or Google Cloud certification exams?',
    a: 'Yes, the curriculum is aligned with globally recognized certification requirements from AWS, Microsoft Azure, and Google Cloud, helping you prepare for these industry-standard credentials.'
  },
  {
    q: 'Why should I choose techcadd over other institutes in Ludhiana?',
    a: 'techcadd offers multi-cloud training (not just one platform), integrated DevOps skills, a dedicated cloud lab, industry-experienced trainers, and strong local placement support — all tailored specifically for students and professionals in Ludhiana.'
  },
  {
    q: 'Can students from nearby cities like Jalandhar or Chandigarh join this course?',
    a: 'Yes, many students from Jalandhar, Khanna, Moga, and even Chandigarh travel to techcadd’s Ludhiana centre, and flexible batch options make it manageable for outstation students as well.'
  },
  {
    q: 'What is the fee for the Cloud Computing Course at techcadd, Ludhiana?',
    a: 'Fees vary based on the course track and duration chosen. It’s best to contact techcadd’s Ludhiana centre directly for the most current fee structure and any ongoing offers.'
  }
]
