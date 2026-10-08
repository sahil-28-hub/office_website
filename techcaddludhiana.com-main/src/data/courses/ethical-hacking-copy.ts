/* ==================================================================
   Long-form copy for the Advanced Program in Cyber Security &
   Ethical Hacking.

   This is the page the "Cybersecurity & Ethical Hacking" entry points
   at in both the Courses menu and the After 12th menu's "1 Year
   Certificates" group, and the one the alias
   `cybersecurity-and-ethical-hacking` resolves to. It is therefore
   written as the combined advanced programme rather than as ethical
   hacking alone — the separate /courses/cybersecurity page covers the
   defensive side on its own.

   Split out of cyber-cloud.js for the same reason as the others —
   that file seeds four courses, and this is one course's editorial
   content. See ./cybersecurity-copy.js, ./cloud-computing-copy.js and
   ./linux-copy.js, which sit beside it.

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

export const EH_OVERVIEW = {
  title: 'The cyber security and ethical hacking programme in Ludhiana',
  lead: 'Looking to build a future-proof career in cybersecurity? The **advanced program in Cyber Security & Ethical Hacking in Ludhiana** at techcadd is designed for students, graduates, and working professionals who want practical, job-ready skills in one of today’s fastest-growing tech fields. As cyber threats multiply across banking, IT, healthcare, and government sectors, demand for skilled ethical hackers and security analysts in Punjab — and across India — continues to rise sharply.',
  body: [
    'This **cyber security course in Ludhiana** covers network security, penetration testing, malware analysis, cryptography, web application security, and CEH-aligned modules, all taught through hands-on labs and real-world simulations. Whether you’re a 12th-pass student exploring IT careers, a graduate seeking specialization, or a job seeker switching into tech, the **ethical hacking training in Ludhiana** gives you the certification preparation, portfolio projects, and placement support needed to pursue security roles.',
    'With expert trainers, an industry-recognized curriculum, and a strong local reputation, techcadd is a practical choice of **cyber security training institute in Ludhiana** for career-focused learners.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const EH_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this course',
  lead: 'The **advanced program in Cyber Security & Ethical Hacking in Ludhiana** has been designed to welcome learners from a wide range of academic and professional backgrounds. Cybersecurity is no longer a niche specialization reserved for computer science graduates — it actively recruits from engineering, commerce, arts, and even non-technical backgrounds, provided the learner is willing to build the right foundational skills. If you’re based in Ludhiana or nearby areas like Jalandhar, Khanna, Moga, or Chandigarh, this course is built with you in mind.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students (Science, Commerce, or Arts Stream)',
      text: 'Students who have just completed their 12th and are unsure whether to pursue a traditional degree or a skill-based technical career are ideal candidates. Cybersecurity does not strictly require a computer science background at entry level — what matters is logical thinking, curiosity about how systems work, and a willingness to learn. The training starts from the fundamentals of networking and operating systems before progressing to advanced hacking techniques, making it accessible even with no prior IT exposure. For young learners in Ludhiana who want a course leading directly to employability rather than years of theoretical study, this is a practical starting point.',
      tag: 'No background needed'
    },
    {
      icon: 'career',
      title: 'Graduates and Postgraduates (BCA, MCA, B.Tech, BSc-IT and Other Streams)',
      text: 'If you’ve completed a degree in computer applications, information technology, or engineering, this advanced program helps you specialize and stand out in a crowded job market. Many graduates in Ludhiana finish a general degree but lack the hands-on skills recruiters actually test for during interviews. This course bridges that exact gap with live labs, penetration testing exercises, and real vulnerability assessment projects — the kind of applied experience a typical college syllabus doesn’t cover in depth.',
      tag: 'Specialise'
    },
    {
      icon: 'server',
      title: 'IT Professionals and System Administrators Seeking a Career Shift',
      text: 'Working professionals currently in networking, system administration, software support, or general IT roles in Ludhiana’s growing tech and BPO sector often reach a point where they want to move into a more specialized, higher-paying track. This program is structured so working professionals can upskill without starting from zero, using existing IT knowledge as a base while adding ethical hacking, incident response, and security analyst capabilities.',
      tag: 'Build on what you know'
    },
    {
      icon: 'terminal',
      title: 'Career Switchers, Freelancers, and Entrepreneurs',
      text: 'Professionals from unrelated fields who want to pivot into tech, as well as freelancers looking to offer security consulting or website and network auditing services, form another key group. Ludhiana’s expanding business and industrial base — spanning textiles, manufacturing, and e-commerce — increasingly needs professionals who understand digital risk, making this a practical entry point into consulting work.',
      tag: 'A way into consulting'
    }
  ],
  note: 'Everything you practise happens inside an isolated lab against deliberately vulnerable systems. The first module covers authorisation, scope and the Indian IT Act, because testing a system you do not own or have written permission to test is a criminal offence regardless of intent.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'eh-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'Curriculum and tools covered',
  lead: 'The advanced program is structured to take students from foundational networking concepts to advanced offensive and defensive security skills, so every learner — regardless of starting point — builds a complete, job-ready skill set by the end of the course.',
  items: [
    {
      title: 'Networking & System Fundamentals',
      text: 'Before diving into hacking techniques, students build a strong base in networking concepts (TCP/IP, DNS, subnetting, firewalls), operating system internals for Windows and Linux, and system administration basics. Understanding how systems normally function is essential before learning how attackers exploit them.'
    },
    {
      title: 'Footprinting, Reconnaissance & Scanning',
      text: 'Students learn how ethical hackers gather information about a target system or network before an attack — passive and active reconnaissance techniques, network scanning, and vulnerability identification using tools like **Nmap**, **Wireshark**, and Recon-ng.'
    },
    {
      title: 'System Hacking & Penetration Testing',
      text: 'This module covers exploitation techniques, privilege escalation, password cracking, and post-exploitation methods. Students get hands-on practice with **Kali Linux**, the **Metasploit Framework**, **Burp Suite**, and John the Ripper in controlled lab environments, simulating real attack-and-defense scenarios safely.'
    },
    {
      title: 'Web Application Security',
      text: 'Given how much business now runs through websites and web apps, this section focuses on common vulnerabilities such as **SQL injection**, cross-site scripting (**XSS**), CSRF, and broken authentication — mapped closely to the **OWASP Top 10** — along with tools like Burp Suite and OWASP ZAP for testing and securing web applications.'
    },
    {
      title: 'Wireless Network Security',
      text: 'Students learn how wireless networks are attacked and secured, covering Wi-Fi encryption protocols, wireless sniffing, and rogue access point detection using tools such as **Aircrack-ng**.'
    },
    {
      title: 'Malware Analysis & Threat Detection',
      text: 'This module introduces identifying, analyzing, and understanding malware behaviour — viruses, trojans, ransomware, and spyware — along with basic reverse engineering concepts and detection tools, so students understand how security teams respond to infections.'
    },
    {
      title: 'Cryptography & Data Security',
      text: 'Students learn encryption fundamentals, hashing algorithms, digital signatures, and how cryptography underpins secure communication, data protection, and compliance requirements in modern IT systems.'
    },
    {
      title: 'Cloud Security Basics',
      text: 'As more businesses in Ludhiana and beyond move to cloud infrastructure, students get an introduction to securing cloud environments, common cloud misconfigurations, and best practices relevant to platforms like **AWS**.'
    },
    {
      title: 'Incident Response & Digital Forensics',
      text: 'This module covers how security teams detect, respond to, and investigate breaches — basic forensic analysis techniques, log analysis, and the incident documentation practices used in real Security Operations Centre environments.'
    },
    {
      title: 'Security Auditing, Compliance & Reporting',
      text: 'Students also learn how to conduct structured security audits and write professional vulnerability assessment and penetration testing (**VAPT**) reports — a critical, often-overlooked skill that clients and employers expect from security professionals.'
    }
  ],
  tools: {
    label: 'Tools covered throughout the program',
    items: [
      'Kali Linux',
      'Nmap',
      'Wireshark',
      'Metasploit',
      'Burp Suite',
      'OWASP ZAP',
      'Aircrack-ng',
      'John the Ripper',
      'Recon-ng'
    ]
  },
  close: 'By the end of the program, students have both the conceptual knowledge and the practical, tool-based experience needed to confidently apply for roles like security analyst, penetration tester, or SOC associate.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'eh-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program makes sense right now',
  lead: 'Cybercrime is no longer a distant, abstract risk — it’s a daily operational reality for businesses of every size, from local Ludhiana enterprises to national banks and government departments. As more organizations across Punjab digitize their operations — online billing, cloud storage, digital payments, remote work systems — the attack surface keeps expanding. That has created sustained hiring demand for ethical hackers, penetration testers, SOC analysts, and security consultants, not just in metro cities but increasingly in tier-2 hubs like Ludhiana as local companies invest in in-house security teams.',
  items: [
    {
      title: 'A Career Track Built on Human Judgement',
      text: 'Unlike several IT roles under automation pressure, cybersecurity remains a human-judgment-heavy field. Skilled ethical hackers and security analysts are in demand across India, and experienced professionals can move into international consulting work. For students and job seekers in Ludhiana, this program offers a realistic path into a field where demand consistently outpaces the supply of qualified professionals — though actual pay depends on your skills, certifications, experience and employer.'
    },
    {
      title: 'Skill-First, Not Just Certificate-First',
      text: 'The approach prioritises actual hands-on capability — setting up labs, simulating attacks, identifying vulnerabilities, and writing security reports — over rote theoretical learning. This matters because most recruiters in cybersecurity test practical skills during interviews with live penetration testing tasks, CTF-style challenges, and scenario-based questions, not just certificates. Students walk away with a portfolio of real lab work they can demonstrate.'
    },
    {
      title: 'Local Access, Global Relevance',
      text: 'Cybersecurity skills are not location-bound — an ethical hacker trained in Ludhiana can work with clients or employers anywhere in the world, remotely or on-site. That makes the program especially valuable for students who want global-standard skills without relocating to Delhi, Bangalore, or Mumbai for training. CEH-aligned training comes directly to Ludhiana, removing the need for expensive relocation just to access quality cybersecurity education.'
    },
    {
      title: 'Structured Career Pathway',
      text: 'Rather than leaving learners to piece together scattered online tutorials, this program offers a structured progression — starting with networking and OS fundamentals, moving into ethical hacking methodologies, and finishing with advanced topics like malware analysis, incident response, and penetration testing. That sequencing matters for beginners who need a clear roadmap rather than an overwhelming pile of disconnected resources.'
    },
    {
      title: 'Placement-Oriented Training',
      text: 'For students investing time and money into a course, career outcomes matter more than course content alone. This program is built with placement assistance in mind, connecting learners to real hiring opportunities in IT firms, security consultancies, and enterprises looking for cybersecurity talent in and around Ludhiana.'
    }
  ],
  close: 'For students in Ludhiana weighing their next career move, this program offers a rare combination: strong job-market demand, practical hands-on training, and the flexibility to work locally or globally — all without leaving the city for quality cybersecurity education.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'eh-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'With multiple institutes across Ludhiana offering cybersecurity and ethical hacking training, choosing the right one can feel overwhelming. Here’s what sets techcadd apart for students and professionals who want real, career-ready outcomes rather than a certificate that gathers dust.',
  items: [
    {
      title: 'Locally Established, Trusted Training Institute',
      text: 'techcadd is a well-known name in Ludhiana’s computer education and IT training space, with a physical presence that makes hands-on, in-person learning possible — something online-only courses can’t replicate for a lab-heavy subject like ethical hacking. Students can walk into a real classroom, work on real lab setups, and get face-to-face doubt resolution instead of relying entirely on pre-recorded videos or forum posts.'
    },
    {
      title: 'Industry-Experienced, Certified Trainers',
      text: 'The advanced program is taught by trainers with practical exposure to enterprise security, incident response, and penetration testing — not academic instructors reading from a syllabus. This matters enormously in cybersecurity, where techniques, tools, and threat patterns evolve constantly. Learning from people who have handled real security scenarios gives students insight that textbooks and generic course material cannot provide.'
    },
    {
      title: 'Hands-On Lab-Based Learning Model',
      text: 'Rather than a lecture-heavy format, the program is structured around practical labs — setting up vulnerable systems, performing controlled penetration tests, analyzing malware samples, and working through real attack-and-defense scenarios. Employers in cybersecurity almost always evaluate candidates on demonstrable skill, not marksheets, and this lab-first approach is built for that reality.'
    },
    {
      title: 'Structured Curriculum Aligned to Industry Certifications',
      text: 'The course content is mapped to globally recognized frameworks and certification domains relevant to ethical hacking and cybersecurity, including CEH-aligned domains, giving students a curriculum that is not just locally relevant but internationally credible. That dual relevance — strong for the Ludhiana job market, respected for remote and global opportunities — is a key differentiator.'
    },
    {
      title: 'End-to-End Career Support',
      text: 'techcadd doesn’t stop at teaching technical skills. The program includes placement assistance, resume and interview preparation, and connections to hiring companies and consultancies, recognizing that a course is only as valuable as the career outcome it produces. For students in Ludhiana specifically, this local placement network is a meaningful advantage over generic online-only programs with no regional hiring connections.'
    },
    {
      title: 'Affordable Access to Quality Training',
      text: 'Compared to relocating to a metro city for equivalent training, techcadd offers Ludhiana-based students and professionals a way to access high-quality, industry-relevant cybersecurity education without the added cost of relocation, accommodation, or travel — making career growth more accessible for local learners.'
    }
  ],
  close: 'A physical lab, trainers who have worked incidents, a CEH-aligned syllabus and local hiring contacts — that combination is what students compare when they shortlist institutes here.'
}

/* ---------------------------------------------------------------- */

/* The closing pitch, immediately above the enquiry form. */
const ENROL_NOW = {
  id: 'eh-enrol',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Enrol now',
  title: 'Start your cybersecurity career today',
  lead: 'Cyber threats aren’t waiting — and neither should your career.',
  items: [
    {
      title: 'What you get',
      text: 'Join Ludhiana’s hands-on, lab-first cybersecurity training program and turn your interest in ethical hacking into a real, placement-ready skill set — covering networking fundamentals, penetration testing, web and wireless security, malware analysis, forensics and VAPT reporting.'
    },
    {
      title: 'Before you enrol',
      text: 'Duration varies by track and the depth of specialization chosen. Training runs in person at the Ludhiana centre with flexible batch timings suitable for both students and working professionals — contact the centre for the current batch schedule, duration options and fees.'
    }
  ]
}

export const EH_NARRATIVE = [
  CURRICULUM,
  WHY_THIS_PROGRAMME,
  WHY_TECHCADD,
  ENROL_NOW
]

/* ------------------------------------------------------------------
   UNVERIFIED TESTIMONIALS — CHECK BEFORE THIS PAGE GOES LIVE.

   Same caveat as the other pages carrying supplied reviews: full
   names, home neighbourhoods, and named employment outcomes ("placed
   as a Junior Security Analyst within a month", "already got two
   internship offers", "now working as a security trainee"). If they
   were written as sample copy rather than collected from the students
   named, they must not be published — invented reviews attributed to
   identifiable people, carrying employment claims, mislead
   prospective students and are unlawful in many jurisdictions.

   Confirm each entry against a real, attributable review. Anything
   that cannot be confirmed should be removed — or delete the
   `testimonials` line from the seed in cyber-cloud.js, which makes the
   page fall back to the generic quotes in shared.js.
------------------------------------------------------------------ */
export const EH_TESTIMONIALS = [
  {
    quote:
      'I joined techcadd right after my B.Tech in CSE because my degree gave me theory but zero practical hacking experience. The labs here were completely different — actual penetration testing on live setups, not just PPT slides. Got placed as a Junior Security Analyst within a month of finishing the course.',
    name: 'Ravneet Singh',
    course: 'Cyber Security & Ethical Hacking',
    detail: 'Model Town, Ludhiana',
    rating: 5,
    initials: 'RS'
  },
  {
    quote:
      'Coming from a BCA background, I was scared cybersecurity would be too advanced for me. The trainers broke everything down step by step, starting from networking basics. By the end I was comfortable using Kali Linux and Metasploit on my own. Highly recommend for beginners.',
    name: 'Simran Kaur',
    course: 'Cyber Security & Ethical Hacking',
    detail: 'Sarabha Nagar, Ludhiana',
    rating: 5,
    initials: 'SK'
  },
  {
    quote:
      'I used to travel to Ludhiana every weekend for this course and it was worth every trip. The trainer had real corporate incident-response experience, which you just don’t get in most institutes. My final VAPT project actually became part of my job interview portfolio.',
    name: 'Harpreet Singh Dhillon',
    course: 'Cyber Security & Ethical Hacking',
    detail: 'Chandigarh',
    rating: 5,
    initials: 'HD'
  },
  {
    quote:
      'Solid course overall. I especially liked the web application security module — SQL injection and XSS labs were explained really well. Only suggestion would be slightly more time on cloud security, but otherwise very hands-on and practical.',
    name: 'Anmol Verma',
    course: 'Cyber Security & Ethical Hacking',
    detail: 'Ferozepur Road, Ludhiana',
    rating: 4,
    initials: 'AV'
  },
  {
    quote:
      'I work in IT support and wanted to shift into security. techcadd’s advanced program let me build on my existing networking knowledge instead of starting from zero. The trainers were patient with working professionals like me who could only attend evening batches.',
    name: 'Gurleen Kaur',
    course: 'Cyber Security & Ethical Hacking',
    detail: 'Jalandhar',
    rating: 5,
    initials: 'GK'
  },
  {
    quote:
      'Best decision after 12th. Everyone told me to just do a regular BSc, but I wanted something that leads directly to a job. This course gave me both the technical skills and the confidence to sit for interviews. Already got two internship offers.',
    name: 'Karanveer Singh',
    course: 'Cyber Security & Ethical Hacking',
    detail: 'Dugri, Ludhiana',
    rating: 5,
    initials: 'KS'
  },
  {
    quote:
      'Commuted from Khanna for classes and never regretted it. The ethical hacking labs felt like real hacking scenarios, not textbook examples. Trainer explained malware analysis in a way that finally made sense to me after struggling with online tutorials for months.',
    name: 'Priya Sharma',
    course: 'Cyber Security & Ethical Hacking',
    detail: 'Khanna',
    rating: 5,
    initials: 'PS'
  },
  {
    quote:
      'Good structured curriculum, especially liked how it moved from basics to advanced topics logically. The placement support team helped me polish my resume and prepare for technical interview rounds, which made a real difference.',
    name: 'Manpreet Singh',
    course: 'Cyber Security & Ethical Hacking',
    detail: 'Civil Lines, Ludhiana',
    rating: 4,
    initials: 'MS'
  },
  {
    quote:
      'As a girl entering a field that’s still male-dominated, I appreciated how supportive the environment was at techcadd. No one made me feel behind for asking basic questions. Now working as a security trainee and genuinely enjoying it.',
    name: 'Ishika Gupta',
    course: 'Cyber Security & Ethical Hacking',
    detail: 'Moga',
    rating: 5,
    initials: 'IG'
  },
  {
    quote:
      'I was a freelance web developer looking to add security auditing to my services. This course gave me exactly that — practical VAPT and reporting skills I now use with my own clients.',
    name: 'Jaspreet Singh',
    course: 'Cyber Security & Ethical Hacking',
    detail: 'Haibowal, Ludhiana',
    rating: 5,
    initials: 'JS'
  },
  {
    quote:
      'Compared this with a couple of Chandigarh institutes before deciding to travel to Ludhiana for techcadd, and it was the right call. The hands-on lab time was much higher here, and trainers actually answered doubts instead of rushing through slides.',
    name: 'Aditya Mehta',
    course: 'Cyber Security & Ethical Hacking',
    detail: 'Chandigarh',
    rating: 5,
    initials: 'AM'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them.

   The legality question leads deliberately, and is the one entry here
   that did not come from the marketing copy — it was on the seed
   before any of this existed. It stays first because it is the
   question a parent asks before they let anyone enrol, and because a
   course that teaches intrusion techniques should state the law before
   it states its fees.
------------------------------------------------------------------ */
export const EH_FAQS = [
  {
    q: 'Is this course legal to take and practise?',
    a: 'Yes. All practical work happens against deliberately vulnerable systems that techcadd provides in an isolated lab. The first module covers authorisation, scope and the Indian IT Act, because testing any system you do not own or have written permission to test is a criminal offence regardless of intent.'
  },
  {
    q: 'What is the advanced program in Cyber Security & Ethical Hacking at techcadd, Ludhiana?',
    a: 'It is a comprehensive, hands-on training program covering networking fundamentals, ethical hacking, penetration testing, malware analysis, cryptography, and incident response, designed to prepare students in Ludhiana for real-world cybersecurity job roles.'
  },
  {
    q: 'Who can join this cyber security course in Ludhiana?',
    a: '12th-pass students, graduates (BCA, MCA, B.Tech, BSc-IT), IT professionals looking to switch careers, freelancers, and career switchers from non-technical backgrounds can all join. No advanced technical background is required to start.'
  },
  {
    q: 'Do I need prior coding or IT knowledge to join?',
    a: 'No. The course starts with networking and system fundamentals, so students with basic computer knowledge can follow along. Prior IT or coding exposure helps but isn’t mandatory.'
  },
  {
    q: 'What tools will I learn in this ethical hacking course in Ludhiana?',
    a: 'Students get hands-on training with **Kali Linux**, **Nmap**, **Wireshark**, **Metasploit**, **Burp Suite**, OWASP ZAP, Aircrack-ng, and John the Ripper, among other industry-standard security tools.'
  },
  {
    q: 'Is this course only theoretical, or does it include practical labs?',
    a: 'The program is lab-first. Students perform live penetration testing exercises, malware analysis, and vulnerability assessments in controlled lab environments rather than relying only on lecture-based learning.'
  },
  {
    q: 'Does techcadd provide placement assistance after course completion?',
    a: 'Yes, the program includes placement support such as resume preparation, interview readiness, and connections to hiring companies and security consultancies in and around Ludhiana.'
  },
  {
    q: 'What job roles can I apply for after completing this course?',
    a: 'Graduates can apply for roles such as Junior Security Analyst, Penetration Tester, SOC Associate, Ethical Hacker, and IT Security Consultant, depending on experience level and further certification.'
  },
  {
    q: 'Is the course relevant for students outside Ludhiana, such as Jalandhar or Chandigarh?',
    a: 'Yes. Many students from Jalandhar, Khanna, Moga, and Chandigarh travel to Ludhiana specifically for this program due to its hands-on training format and trainer expertise.'
  },
  {
    q: 'How is this course different from free online ethical hacking tutorials?',
    a: 'Unlike scattered free resources, this program offers a structured curriculum, in-person lab access, expert trainer support, doubt resolution, and placement assistance — elements that self-taught online learning typically lacks.'
  },
  {
    q: 'Is cybersecurity a good career choice from Ludhiana, or do I need to relocate?',
    a: 'Cybersecurity skills are location-independent. Professionals trained in Ludhiana can work remotely with companies anywhere in India or globally, making relocation unnecessary for career growth in this field.'
  },
  {
    q: 'What is the class mode — online, offline, or both?',
    a: 'techcadd offers in-person, lab-based classroom training at its Ludhiana centre, with flexible batch timings suitable for both students and working professionals.'
  },
  {
    q: 'How long does the advanced Cyber Security & Ethical Hacking program take to complete?',
    a: 'Duration varies by track and the depth of specialization chosen. Contact the techcadd Ludhiana centre directly for the current batch schedule and duration options.'
  }
]
