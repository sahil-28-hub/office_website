/* ==================================================================
   Long-form copy for the Cybersecurity course page.

   The first course outside marketing.js to carry editorial copy of its
   own, and split out for the same reason as the marketing ones — the
   seed file is a list of course definitions, and this is one course's
   content. See ../courses/digital-marketing-copy.js for the pattern
   this follows.

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

export const CYBERSECURITY_OVERVIEW = {
  title: 'The cyber security course in Ludhiana that gets you job-ready',
  lead: 'Looking for the best **Cyber Security Course in Ludhiana** that actually gets you job-ready? techcadd is a leading IT training institute in Ludhiana helping students, graduates, and working professionals build real, in-demand cybersecurity skills — from ethical hacking and network security to threat detection and vulnerability assessment. With India’s cybersecurity industry growing rapidly and companies across Ludhiana, Chandigarh, Jalandhar, and Mohali actively hiring skilled security professionals, there has never been a better time to upskill.',
  body: [
    'At techcadd, our **Cyber Security Course in Ludhiana** is designed for hands-on, practical learning — not just theory. Students work on live projects, real-world attack simulations, and industry-standard tools under the guidance of experienced trainers. Whether you’re a 12th-pass student exploring a tech career, a graduate looking for certification, or a job seeker aiming to switch into IT security, this course is built to take you from beginner to job-ready.',
    'Backed by placement assistance, flexible batch timings, and a curriculum aligned with current industry demands, techcadd stands out as one of the most trusted names for **cyber security training in Ludhiana**.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const CYBERSECURITY_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this course',
  lead: 'One of the best things about the **Cyber Security Course in Ludhiana** at techcadd is that it’s designed to be accessible to almost anyone with an interest in technology — regardless of your academic background or current career stage. Cybersecurity is one of the few IT fields where genuine curiosity and problem-solving ability matter just as much as your degree. If you’re based in Ludhiana or nearby areas like Jalandhar, Khanna, Moga, or Chandigarh and wondering whether this course is right for you, here’s a clear breakdown.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students',
      text: 'If you’ve just completed your 12th grade (Science, Commerce, or even Arts) and are exploring career options beyond the traditional B.Tech or MBBS route, cybersecurity is an excellent entry point. The course starts with foundational networking and IT concepts before moving into advanced topics, so students with zero prior technical background can follow along comfortably. Many students from schools across Model Town, Sarabha Nagar, and Civil Lines join right after their board exams to get a head start on their tech career.',
      tag: 'No background needed'
    },
    {
      icon: 'career',
      title: 'Graduates (BCA, B.Tech, B.Sc IT, MCA, or Any Stream)',
      text: 'Whether you hold a degree in Computer Science, IT, or even a non-technical stream like Commerce or Arts, this course helps you build specialized, job-ready skills that most college curriculums don’t cover in depth. Graduates from Punjab Agricultural University, GNDEC, DAV College, and other institutions across Ludhiana often find that a practical, project-based approach fills the exact skill gap employers are looking for.',
      tag: 'Any stream'
    },
    {
      icon: 'stack',
      title: 'Working Professionals Looking to Switch Careers',
      text: 'IT professionals currently working in software development, networking, or system administration who want to move into the high-demand cybersecurity domain will find this course especially valuable. It’s also ideal for professionals in Ludhiana’s growing IT and BPO sector who want to add a specialized, high-paying skill set to their resume without quitting their job — thanks to flexible weekday and weekend batch options.',
      tag: 'Flexible batches'
    },
    {
      icon: 'spark',
      title: 'Job Seekers and Freshers',
      text: 'If you’re actively job hunting in Ludhiana’s competitive job market and want a certification that actually stands out, this course gives you practical, demonstrable skills — not just a certificate. Employers across Punjab increasingly prefer candidates who can show real project experience in ethical hacking, network defense, and vulnerability assessment.',
      tag: 'Something to show'
    },
    {
      icon: 'chart',
      title: 'Entrepreneurs and Business Owners',
      text: 'Even if you’re not looking for a job, understanding cybersecurity fundamentals is crucial if you run a business with any digital presence — websites, customer data, or online transactions. Many small business owners in Ludhiana’s industrial and trading community enrol to protect their own digital assets.',
      tag: 'Protect your own'
    },
    {
      icon: 'terminal',
      title: 'Anyone Curious About Ethical Hacking',
      text: 'If you’ve always been fascinated by how hackers operate and want to learn it the legal, ethical way, this course is your structured entry point into that world.',
      tag: 'The legal way'
    }
  ],
  note: 'In short: if you’re a student, graduate, working professional, or job seeker in Ludhiana looking to break into one of tech’s fastest-growing fields, this course is built for you.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'cyber-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn and the tools you’ll master',
  lead: 'techcadd’s **Cyber Security Course in Ludhiana** is structured to take you from foundational concepts to advanced, job-ready skills. Here’s a detailed breakdown of what the curriculum covers and the industry-standard tools you’ll get hands-on experience with.',
  items: [
    {
      title: 'Networking Fundamentals',
      text: 'Before diving into security, you’ll build a strong foundation in networking — understanding IP addressing, protocols, OSI/TCP-IP models, routers, switches, and firewalls. This groundwork is essential because you can’t secure a network you don’t understand.'
    },
    {
      title: 'Ethical Hacking & Penetration Testing',
      text: 'You’ll learn how hackers actually think and operate — reconnaissance, scanning, enumeration, gaining access, and covering tracks — all taught within a legal, ethical framework, often aligned with CEH-style methodology. This includes hands-on practice identifying and exploiting vulnerabilities in controlled lab environments.'
    },
    {
      title: 'Network Security',
      text: 'Learn to secure networks against unauthorized access, intrusions, and attacks using firewalls, VPNs, intrusion detection and prevention systems (IDS/IPS), and secure network architecture principles.'
    },
    {
      title: 'Web Application Security',
      text: 'Understand common web vulnerabilities such as **SQL injection**, cross-site scripting (XSS), broken authentication, and other **OWASP Top 10** threats — and how to identify and remediate them.'
    },
    {
      title: 'Cryptography & Data Protection',
      text: 'Master encryption techniques, hashing algorithms, digital signatures, and secure data transmission methods used to protect sensitive information from unauthorized access.'
    },
    {
      title: 'Malware Analysis & Threat Detection',
      text: 'Learn to identify, analyze, and respond to various types of malware — viruses, trojans, ransomware, and spyware — and understand how threat detection systems work in real environments.'
    },
    {
      title: 'Vulnerability Assessment & Risk Management',
      text: 'Understand how organizations identify security gaps, assess risk levels, and prioritize remediation efforts — a critical skill for any security analyst role.'
    },
    {
      title: 'Incident Response & Cloud Security',
      text: 'Learn structured approaches to responding to security breaches, along with the fundamentals of securing cloud environments — an increasingly essential skill as businesses migrate to cloud infrastructure.'
    },
    {
      title: 'IoT and System Hacking',
      text: 'Explore security challenges unique to Internet of Things (IoT) devices and system-level hacking techniques, covering an often-overlooked but rapidly growing attack surface.'
    },
    {
      title: 'Practical Projects You’ll Build',
      text: 'By the end of the course, you’ll have completed real-world style projects such as network vulnerability assessments, simulated penetration tests, web application security audits, and incident response case studies — giving you a demonstrable portfolio for job interviews, not just a certificate.'
    }
  ],
  tools: {
    label: 'Industry-standard tools you’ll work with',
    items: [
      'Nmap',
      'Wireshark',
      'Metasploit',
      'Burp Suite',
      'Kali Linux',
      'John the Ripper',
      'Nessus / OpenVAS',
      'tcpdump',
      'Aircrack-ng',
      'SIEM tools',
      'Firewall & VPN configuration'
    ]
  },
  close: 'The result: you’ll leave techcadd’s **Cyber Security Course in Ludhiana** not just knowing cybersecurity theory, but capable of actually performing the tasks that companies in Ludhiana, Chandigarh, and across India expect from an entry-level security professional.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'cyber-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'With hundreds of cybersecurity courses available online and offline, why should students in Ludhiana specifically choose techcadd’s program? Here’s what makes this **Cyber Security Course in Ludhiana** genuinely worth your time and investment.',
  items: [
    {
      title: 'Industry-Relevant, Constantly Updated Curriculum',
      text: 'Cybersecurity threats evolve every single day, and a course built on outdated material simply won’t prepare you for real jobs. The curriculum is regularly updated to reflect current attack techniques, tools, and industry frameworks — covering everything from network security and cryptography to ethical hacking, penetration testing, malware analysis, and incident response. You’re not learning theory from five years ago; you’re learning what companies are dealing with right now.'
    },
    {
      title: 'Hands-On, Practical Learning Approach',
      text: 'Reading about cybersecurity concepts and actually applying them are two very different things. This program is built around live labs, real-world simulations, and hands-on projects where you practice identifying vulnerabilities, defending networks, and responding to simulated attacks. By the time you finish, you’ll have a portfolio of practical work — not just a certificate with your name on it.'
    },
    {
      title: 'Experienced Trainers Who’ve Worked in the Field',
      text: 'Learning from instructors who have actual industry experience in security analysis, penetration testing, or network defense makes a massive difference. Trainers bring real-world case studies into the classroom, helping students understand not just “how” but “why” certain security measures matter in practice.'
    },
    {
      title: 'Local Accessibility for Ludhiana Students',
      text: 'Not every student wants to relocate to Delhi, Bangalore, or Chandigarh for quality tech training. techcadd brings a genuinely strong Cyber Security Course to Ludhiana itself, meaning local students save on relocation costs, travel time, and accommodation — while still getting industry-grade training right here at home.'
    },
    {
      title: 'Placement Support and Career Guidance',
      text: 'A course is only as valuable as the career outcomes it leads to. techcadd provides placement assistance, resume-building support, interview preparation, and connections with hiring companies looking for cybersecurity talent — helping bridge the gap between “course completion” and “job offer.”'
    },
    {
      title: 'Flexible Batch Timings',
      text: 'Whether you’re a student with college classes, a working professional with a 9-to-5 job, or someone balancing other commitments, techcadd offers flexible weekday, weekend, and batch options so you can learn without disrupting your existing schedule.'
    },
    {
      title: 'Growing Demand Means Real Career Security',
      text: 'Cybersecurity isn’t a trend — it’s a permanent and growing necessity as more businesses, government bodies, and institutions across Punjab and India move online. Enrolling now positions you ahead of the curve in a field with genuine long-term career stability and strong salary potential.'
    },
    {
      title: 'Affordable Fees Without Compromising Quality',
      text: 'Compared to many national-level institutes, techcadd offers competitively priced training in Ludhiana without cutting corners on curriculum depth, trainer quality, or hands-on practice — making quality cybersecurity education accessible to a wider range of students.'
    }
  ],
  close: 'This program isn’t just about earning a certificate — it’s about building genuine, job-ready cybersecurity skills, backed by local support, practical training, and real career outcomes, right here in Ludhiana.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'cyber-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'When it comes to picking the right institute for a **Cyber Security Course in Ludhiana**, the decision matters more than most students realize — your trainer, your curriculum, and your hands-on exposure will directly shape your career outcomes. Here’s why techcadd has become a trusted name among students and professionals across Ludhiana, Jalandhar, Khanna, and the wider Punjab region.',
  items: [
    {
      title: 'Proven Track Record in IT Training',
      text: 'techcadd isn’t a new name experimenting with cybersecurity training — it’s an established IT training institute with years of experience training students across multiple technology domains. This depth of experience translates into a structured, well-tested teaching methodology rather than a hastily assembled course.'
    },
    {
      title: 'Practical, Project-Based Learning Environment',
      text: 'At techcadd, cybersecurity isn’t taught through slides alone. Students get access to live labs, real-world scenarios, and practical assignments that mirror the actual challenges faced by security professionals — from identifying network vulnerabilities to performing ethical hacking exercises. This “learn by doing” philosophy ensures students walk away with skills they can actually demonstrate to employers, not just information they’ve memorized.'
    },
    {
      title: 'Expert Trainers with Real Industry Exposure',
      text: 'techcadd’s trainers bring genuine field experience to the classroom, which means students get insights into real security challenges, current attack patterns, and practical defense strategies — not just textbook definitions. This mentorship-driven approach helps students think like actual security analysts, not just exam-takers.'
    },
    {
      title: 'Centrally Located and Easily Accessible in Ludhiana',
      text: 'techcadd’s Ludhiana centre is designed to be convenient for students commuting from across the city and nearby areas — including Model Town, Sarabha Nagar, BRS Nagar, Dugri, Civil Lines, and Ferozepur Road. Easy accessibility means students spend more time learning and less time worrying about long commutes.'
    },
    {
      title: 'Placement Assistance That Goes Beyond a Certificate',
      text: 'techcadd understands that the ultimate goal of any course is career advancement. That’s why the institute focuses heavily on placement support — including interview preparation, resume building, and connecting students with companies actively hiring cybersecurity talent in Ludhiana and beyond.'
    },
    {
      title: 'Small Batch Sizes for Personalized Attention',
      text: 'Unlike massive online cohorts where individual doubts often go unanswered, techcadd maintains manageable batch sizes so trainers can give focused attention to each student — clarifying doubts, reviewing project work, and ensuring concepts are genuinely understood before moving forward.'
    },
    {
      title: 'Flexible Learning Options',
      text: 'Recognizing that students and professionals have different schedules, techcadd offers flexible batch timings — including weekday and weekend options — making it easier for working professionals, college students, and job seekers alike to enrol without disrupting their existing commitments.'
    },
    {
      title: 'Transparent, Student-Friendly Fee Structure',
      text: 'techcadd is committed to making quality cybersecurity education accessible, with transparent fee structures and no hidden costs — a genuine concern for many students and parents evaluating training institutes in Ludhiana.'
    },
    {
      title: 'Strong Local Reputation and Word-of-Mouth Trust',
      text: 'A significant number of students at techcadd come through referrals from past students and their families — a strong indicator of consistent teaching quality and genuine outcomes, built over time within the Ludhiana community.'
    }
  ],
  close: 'techcadd combines practical training, experienced mentorship, local accessibility, and genuine placement support — making it a well-rounded choice for anyone serious about building a career in cybersecurity from Ludhiana.'
}

/* ---------------------------------------------------------------- */

/* The closing pitch, immediately above the enquiry form. */
const ENROL_NOW = {
  id: 'cyber-enrol',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Enrol now',
  title: 'Start your cybersecurity career in Ludhiana',
  lead: 'Ready to build a future-proof career in cyber security?',
  items: [
    {
      title: 'What you get',
      text: 'Join techcadd’s **Cyber Security Course in Ludhiana** and get hands-on training, expert mentorship, and dedicated placement support — all designed to take you from beginner to job-ready.'
    },
    {
      title: 'Before you enrol',
      text: 'Course duration varies by batch and learning track, from a few weeks for foundational programs to a few months for comprehensive training. Contact the Ludhiana centre for exact batch schedules, fees and current timings.'
    }
  ]
}

export const CYBERSECURITY_NARRATIVE = [
  CURRICULUM,
  WHY_THIS_PROGRAMME,
  WHY_TECHCADD,
  ENROL_NOW
]

/* ------------------------------------------------------------------
   UNVERIFIED TESTIMONIALS — CHECK BEFORE THIS PAGE GOES LIVE.

   These arrived as page copy, not from a review system, and they are
   the most specific on the site: full names, home neighbourhoods, and
   named outcomes ("placed within 2 months", "now working as a junior
   penetration tester"). If any of them were written as sample copy
   rather than collected from the actual students named, they must not
   be published — invented reviews attributed to identifiable people,
   carrying employment claims, mislead prospective students and are
   unlawful in many jurisdictions. The named placement outcomes are the
   part that has to be true, not just the quote.

   Confirm each entry against a real, attributable review. Anything
   that cannot be confirmed should be removed — or delete the
   `testimonials` line from the seed in cyber-cloud.js, which makes the
   page fall back to the generic quotes in shared.js.
------------------------------------------------------------------ */
export const CYBERSECURITY_TESTIMONIALS = [
  {
    quote:
      'I joined right after my B.Tech and honestly wasn’t sure cybersecurity was for me. The trainers at techcadd broke everything down so simply — from networking basics to actual ethical hacking labs. Got placed in an IT security role within 2 months of finishing the course!',
    name: 'Gurpreet Singh',
    course: 'Cybersecurity',
    detail: 'Model Town, Ludhiana',
    rating: 5,
    initials: 'GS'
  },
  {
    quote:
      'Best decision I made after 12th. Most of my friends went the typical B.Tech route, but I wanted something more practical. The hands-on labs using Kali Linux and Wireshark gave me real confidence going into interviews.',
    name: 'Simran Kaur',
    course: 'Cybersecurity',
    detail: 'Sarabha Nagar, Ludhiana',
    rating: 5,
    initials: 'SK'
  },
  {
    quote:
      'I used to commute from Chandigarh for weekend batches and it was totally worth it. The trainers actually have industry experience, which you can tell from how they explain real attack scenarios instead of just reading from slides.',
    name: 'Rohan Mehta',
    course: 'Cybersecurity',
    detail: 'Chandigarh',
    rating: 4,
    initials: 'RM'
  },
  {
    quote:
      'As a working professional in networking, I wanted to upskill into cybersecurity without quitting my job. The weekday evening batches worked perfectly for my schedule. Learned Metasploit and Burp Suite hands-on — things I’d only read about before.',
    name: 'Harleen Kaur',
    course: 'Cybersecurity',
    detail: 'BRS Nagar, Ludhiana',
    rating: 5,
    initials: 'HK'
  },
  {
    quote:
      'Genuinely one of the better institutes in Ludhiana for tech courses. What stood out was the placement support — they actually helped me prep for interviews and connected me with a company hiring for a SOC analyst role.',
    name: 'Aman Sharma',
    course: 'Cybersecurity',
    detail: 'Dugri, Ludhiana',
    rating: 5,
    initials: 'AS'
  },
  {
    quote:
      'Traveled from Jalandhar for this course because techcadd came highly recommended by a senior. The curriculum felt current — we covered cloud security and IoT hacking, which a lot of other institutes still skip.',
    name: 'Navjot Singh',
    course: 'Cybersecurity',
    detail: 'Jalandhar',
    rating: 4,
    initials: 'NS'
  },
  {
    quote:
      'I was honestly nervous starting with zero technical background, but the course starts from networking fundamentals so nobody gets left behind. By the end, I was doing vulnerability assessments on my own. Great support throughout.',
    name: 'Priya Verma',
    course: 'Cybersecurity',
    detail: 'Civil Lines, Ludhiana',
    rating: 5,
    initials: 'PV'
  },
  {
    quote:
      'Small batch size made a huge difference — the trainer actually knew each student’s progress and cleared doubts individually. Compared this to a friend’s experience at a bigger institute in Chandigarh, and this felt way more personal and effective.',
    name: 'Karanveer Singh',
    course: 'Cybersecurity',
    detail: 'Ferozepur Road, Ludhiana',
    rating: 5,
    initials: 'KS'
  },
  {
    quote:
      'Commuted from Khanna twice a week. The practical projects — especially the simulated penetration testing exercise — really helped me understand how real-world security assessments work. Would recommend to anyone serious about the field.',
    name: 'Ishika Bansal',
    course: 'Cybersecurity',
    detail: 'Khanna, Punjab',
    rating: 4,
    initials: 'IB'
  },
  {
    quote:
      'Switched careers from software development to cybersecurity through this course. The trainers understood I already had a tech background and adjusted their guidance accordingly. Now working as a junior penetration tester — couldn’t be happier.',
    name: 'Manpreet Singh',
    course: 'Cybersecurity',
    detail: 'Pakhowal Road, Ludhiana',
    rating: 5,
    initials: 'MS'
  },
  {
    quote:
      'What I appreciated most was how real the labs felt — not just theory. We worked with actual tools like Nmap and Wireshark on real scenarios. Felt genuinely prepared when I sat for my first cybersecurity interview.',
    name: 'Ritika Chopra',
    course: 'Cybersecurity',
    detail: 'Dhandari Kalan, Ludhiana',
    rating: 5,
    initials: 'RC'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.
------------------------------------------------------------------ */
export const CYBERSECURITY_FAQS = [
  {
    q: 'Where can I find the best Cyber Security Course in Ludhiana?',
    a: 'techcadd offers one of the most practical, industry-focused **Cyber Security Courses in Ludhiana**, combining hands-on labs, experienced trainers, and placement assistance to help students build real, job-ready skills.'
  },
  {
    q: 'Do I need a technical background to join this cybersecurity course?',
    a: 'No. The course is designed for beginners as well as experienced professionals. It starts with networking fundamentals before progressing to advanced topics, so students with zero technical background can follow along comfortably.'
  },
  {
    q: 'What is the duration of the Cyber Security Course at techcadd?',
    a: 'The course duration varies depending on the batch and learning track chosen — typically ranging from a few weeks for foundational programs to a few months for comprehensive, in-depth training. Contact techcadd’s Ludhiana centre for exact batch schedules.'
  },
  {
    q: 'Is this course suitable for 12th-pass students?',
    a: 'Yes. Many 12th-pass students in Ludhiana join this course as an alternative or supplement to traditional degree programs, using it as a direct entry point into a tech career.'
  },
  {
    q: 'What tools will I learn during the course?',
    a: 'You’ll gain hands-on experience with industry-standard tools including **Nmap**, **Wireshark**, **Metasploit**, **Burp Suite**, **Kali Linux**, John the Ripper, and vulnerability scanners like Nessus — the same tools used by working cybersecurity professionals.'
  },
  {
    q: 'Does techcadd provide placement assistance after course completion?',
    a: 'Yes. techcadd offers placement support including resume building, interview preparation, and connections with companies actively hiring cybersecurity talent in Ludhiana and across India.'
  },
  {
    q: 'Can working professionals join this course alongside their job?',
    a: 'Yes. techcadd offers flexible weekday and weekend batch timings specifically designed to accommodate working professionals looking to upskill without quitting their current job.'
  },
  {
    q: 'What career opportunities are available after completing a cyber security course?',
    a: 'Graduates can pursue roles such as Security Analyst, Penetration Tester, SOC Analyst, Network Security Engineer, Ethical Hacker, and Vulnerability Assessment Specialist, with opportunities in IT companies, banks, government bodies, and consulting firms across Punjab and India.'
  },
  {
    q: 'Is the training online, offline, or both?',
    a: 'techcadd offers flexible learning options for its Cyber Security Course in Ludhiana, including in-person classroom training at the Ludhiana centre, with options to accommodate different learning preferences.'
  },
  {
    q: 'Will I get a certificate after completing the course?',
    a: 'Yes. Upon successful completion, students receive a course completion certificate from techcadd, validating their skills in ethical hacking, network security, and vulnerability assessment.'
  },
  {
    q: 'How is techcadd different from other cyber security institutes in Ludhiana?',
    a: 'techcadd stands out through its practical, project-based teaching approach, experienced industry trainers, small batch sizes for personalized attention, and dedicated placement support — all delivered locally in Ludhiana at an accessible fee structure.'
  },
  {
    q: 'Do students from outside Ludhiana also join this course?',
    a: 'Yes. Many students commute from nearby areas such as Jalandhar, Khanna, Moga, and even Chandigarh to attend techcadd’s Cyber Security Course due to its strong reputation and practical training approach.'
  }
]
