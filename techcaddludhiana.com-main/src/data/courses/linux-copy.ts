/* ==================================================================
   Long-form copy for the Linux Administration course page.

   Split out of cyber-cloud.js for the same reason as the others —
   that file seeds four courses, and this is one course's editorial
   content. See ./cybersecurity-copy.js and ./cloud-computing-copy.js,
   which sit beside it.

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

export const LINUX_OVERVIEW = {
  title: 'The Linux course in Ludhiana that starts on a real server',
  lead: 'Looking to build a career in system administration, DevOps, or cloud computing? A **Linux course in Ludhiana** at techcadd is your first step toward becoming job-ready in one of IT’s most in-demand skill areas. Whether you’re a 12th-pass student exploring tech careers, a graduate aiming for higher salaries, or a working professional upskilling for a switch, this course covers everything from Linux fundamentals to advanced system administration, shell scripting, networking, and server management.',
  body: [
    'Ludhiana’s growing IT and BPO sector — along with easy access to opportunities in Chandigarh, Mohali, and the broader tri-city region — makes now the right time to learn Linux locally, with hands-on lab access, expert trainers, and placement support close to home.',
    'At techcadd, students train on real servers, work on live projects, and prepare for globally recognized certifications like **RHCSA** and **RHCE**, all while getting personalized mentorship in a classroom setting built for beginners and IT professionals alike.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const LINUX_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this course',
  lead: 'A **Linux course in Ludhiana** at techcadd is designed to be genuinely inclusive — you don’t need a computer science degree or prior coding background to get started. Linux is one of the most foundational skills in IT today, and the course structure is built to take absolute beginners and experienced professionals alike from where they are to where they want to be.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students (Science / Commerce / Arts)',
      text: 'If you’ve just finished your 12th and are unsure whether to go the traditional degree route or dive straight into a skill-based IT career, this course is an excellent starting point. You don’t need a PCM background — the course starts from the basics: what an operating system is, why Linux matters, and how to navigate the command line confidently. Many students from Ludhiana and nearby areas like Jalandhar, Phagwara, and Khanna choose this route to enter the IT industry faster, without spending three or four years on a degree before earning a paycheck.',
      tag: 'No background needed'
    },
    {
      icon: 'career',
      title: 'Graduates (BCA, B.Tech, B.Sc IT, MCA, or Any Stream)',
      text: 'If you’re a graduate — even from a non-technical background — and want to specialize in something that actually gets you hired, Linux is one of the smartest additions to your resume. Companies across Ludhiana, Chandigarh, and Mohali actively look for candidates with hands-on Linux exposure for roles in system administration, DevOps, and cloud support. Even B.Tech CSE/IT graduates who studied Linux only in theory during college benefit hugely from a practical, lab-based approach, since most colleges don’t offer enough hands-on server time.',
      tag: 'Any stream'
    },
    {
      icon: 'spark',
      title: 'Job Seekers Looking for a Career Switch',
      text: 'Whether you’re currently working in a non-IT field or stuck in a role with no growth, Linux training opens doors to system administrator, network engineer, and support engineer positions — roles that are consistently in demand across Ludhiana’s IT firms, BPOs, and the broader Punjab tech ecosystem. techcadd’s placement assistance is specifically structured to help career-switchers translate their new Linux skills into real job offers.',
      tag: 'Start from zero'
    },
    {
      icon: 'server',
      title: 'Working IT Professionals Wanting to Upskill',
      text: 'If you’re already working in software support, networking, or web hosting and want to move into higher-paying roles like DevOps Engineer or Cloud Administrator, Linux is non-negotiable. The course goes beyond basic commands into shell scripting, user and permission management, and server troubleshooting — the exact skills that separate a support-desk employee from a system administrator.',
      tag: 'Flexible batches'
    },
    {
      icon: 'terminal',
      title: 'Freelancers and Aspiring Entrepreneurs',
      text: 'If you manage your own websites, servers, or client projects, understanding Linux server administration means fewer support tickets and more control over your own infrastructure — a valuable skill whether you’re running a small dev shop out of Ludhiana or managing remote client servers.',
      tag: 'Own your stack'
    }
  ],
  note: 'Linux is the foundation the rest of the industry is built on, so wherever you start from, the skill keeps paying off as you specialise into DevOps, cloud or security.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'linux-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn and the tools covered',
  lead: 'This **Linux course** is structured to take you from complete beginner to confident, job-ready Linux user — covering everything from core fundamentals to practical, real-world server administration skills.',
  items: [
    {
      title: 'Linux Fundamentals & Architecture',
      text: 'You’ll start with the basics — understanding what Linux is, its history, distributions (Ubuntu, CentOS, Red Hat, Debian), and the philosophy behind open-source operating systems. You’ll learn the Linux file system hierarchy, boot process, and kernel basics so you understand what’s happening under the hood, not just which commands to type.'
    },
    {
      title: 'Command Line Mastery (Shell/Terminal)',
      text: 'The heart of Linux training is the command line. You’ll become comfortable navigating directories, managing files and folders, using commands like ls, cd, grep, find, chmod, chown, and cat, and understanding pipes, redirection, and wildcards. This is the single most important skill employers test for in interviews.'
    },
    {
      title: 'User & Permission Management',
      text: 'You’ll learn how to create and manage users and groups, set file and directory permissions, understand ownership models, and configure sudo access — critical skills for any system administrator role.'
    },
    {
      title: 'File System & Storage Management',
      text: 'Training covers disk partitioning, mounting file systems, managing storage volumes, and understanding concepts like inodes and symbolic links — essential for maintaining healthy, well-organized servers.'
    },
    {
      title: 'Process & Service Management',
      text: 'You’ll learn how to monitor and manage running processes, use tools like top, ps, and systemctl, start and stop services, and troubleshoot performance issues on a live system.'
    },
    {
      title: 'Shell Scripting & Automation',
      text: 'A major highlight of the course — you’ll write your own **Bash** scripts to automate repetitive tasks, schedule jobs using cron, and build simple automation workflows, a skill directly transferable to DevOps roles.'
    },
    {
      title: 'Networking in Linux',
      text: 'You’ll cover IP addressing, network configuration commands, **SSH** for remote access, firewall basics (iptables/firewalld), and troubleshooting connectivity issues — all essential for managing servers remotely, which is standard practice in the industry.'
    },
    {
      title: 'Package Management',
      text: 'Learn to install, update, and remove software using package managers like apt, yum, and dnf, and understand dependency management across different distributions.'
    },
    {
      title: 'Server Administration Essentials',
      text: 'You’ll get exposure to setting up and managing basic services — web servers, FTP, and remote access configurations — giving you a taste of real production-server responsibilities.'
    },
    {
      title: 'Security Basics',
      text: 'Introductory coverage of Linux security practices — securing SSH access, managing firewalls, monitoring logs, and understanding basic hardening principles — laying the groundwork for further specialization in cybersecurity if you choose that path.'
    }
  ],
  tools: {
    label: 'Tools and technologies covered',
    items: [
      'Ubuntu',
      'CentOS',
      'Red Hat Enterprise Linux',
      'Debian',
      'Bash',
      'SSH & PuTTY',
      'Git & GitHub',
      'APT, YUM & DNF',
      'top, htop, ps, systemctl',
      'ifconfig, netstat, ping, traceroute',
      'VirtualBox / VMware',
      'AWS & Docker basics'
    ]
  },
  close: 'By the end of this course, you’ll have practical, resume-ready Linux skills applicable to system administration, DevOps, and cloud computing roles across Ludhiana’s IT job market and beyond.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'linux-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this Linux course is right for you',
  lead: 'Choosing the right **Linux course in Ludhiana** can genuinely shape the direction of your IT career, and there are clear reasons why students and professionals across the city consistently pick techcadd’s program over generic, unstructured alternatives.',
  items: [
    {
      title: 'Practical, Lab-Based Learning — Not Just Theory',
      text: 'A lot of institutes in Ludhiana teach Linux through slides and PDFs. At techcadd, you get hands-on access to real Linux environments — **Ubuntu**, **CentOS**, and **Red Hat** — from day one. You’ll actually install, configure, break, and fix systems yourself, which is the only way Linux skills truly stick. This mirrors what you’ll be doing on the job as a system administrator or DevOps engineer.'
    },
    {
      title: 'Industry-Relevant Curriculum',
      text: 'The course doesn’t stop at basic commands. You’ll progress through file systems, user and permission management, shell scripting, process management, networking configuration, package management, and server security — the same skills that Ludhiana-based IT companies, hosting providers, and enterprises look for when hiring junior sysadmins or support engineers.'
    },
    {
      title: 'Foundation for High-Demand Career Paths',
      text: 'Linux isn’t just a standalone skill — it’s the foundation for some of the highest-paying and fastest-growing IT careers today: DevOps Engineering, Cloud Computing (AWS, Azure, GCP), Cybersecurity, and Site Reliability Engineering. Almost every cloud certification and DevOps tool — Docker, Kubernetes, Jenkins, Git — assumes you’re comfortable working in a Linux environment. Starting here sets you up to specialize further without relearning the basics later.'
    },
    {
      title: 'Local Placement Support in Ludhiana',
      text: 'techcadd works with local and regional IT companies, hosting providers, and tech startups to help place students after course completion. Being centrally based near Bharat Nagar Chowk and Ludhiana Kutchery, the institute is well-connected for students commuting from across the city — including Model Town, Sarabha Nagar, Civil Lines, Dugri, Pakhowal Road, and Ferozepur Road — making it a convenient and trusted local choice.'
    },
    {
      title: 'Experienced, Approachable Trainers',
      text: 'Learning Linux can feel intimidating at first — the command line, permissions, scripting — but techcadd’s trainers are known for breaking concepts down in a simple, step-by-step manner suited to students with zero prior background, while still going deep enough for those with technical experience.'
    },
    {
      title: 'Flexible Batch Timings',
      text: 'Whether you’re a student who just finished school, a college-goer balancing coursework, or a working professional in Ludhiana, techcadd offers weekday, weekend, and evening batch options so the course fits into your schedule rather than the other way around.'
    },
    {
      title: 'Certification That Adds Real Value',
      text: 'On completion, you receive a certification that strengthens your resume for interviews, campus placements, and freelance opportunities — signaling to employers that you have verified, practical Linux skills, not just theoretical knowledge.'
    }
  ],
  close: 'In short, this program isn’t just about learning commands — it’s about building a genuine, employable skillset that opens doors across Ludhiana’s IT job market and beyond.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'linux-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd for your Linux course',
  lead: 'With multiple institutes claiming to offer IT training across Ludhiana, it’s fair to ask — why should you specifically choose techcadd for your Linux course? Here’s what genuinely sets it apart for students and professionals in Ludhiana.',
  items: [
    {
      title: 'A Trusted Name in Ludhiana’s IT Training Space',
      text: 'techcadd Computer Education has built a solid reputation across Ludhiana and the wider Punjab region — including Jalandhar, Mohali, Hoshiarpur, and Phagwara — as a premier IT training institute. This isn’t a one-course shop; techcadd runs a full ecosystem of programs across web development, cloud computing, cybersecurity, data science, and digital marketing, which means the Linux course is backed by an institute that understands how Linux fits into the bigger IT career picture, not taught in isolation.'
    },
    {
      title: 'Centrally Located and Easy to Reach',
      text: 'techcadd’s Ludhiana center is conveniently located near Bharat Nagar Chowk, Ludhiana Kutchery — a well-connected, central part of the city that’s easy to reach whether you’re commuting from Model Town, Sarabha Nagar, Civil Lines, Dugri, Pakhowal Road, Ferozepur Road, or Haibowal. For students juggling college, coaching, or a job alongside this course, that location convenience genuinely matters.'
    },
    {
      title: 'Real Labs, Real Practice',
      text: 'techcadd doesn’t rely on theoretical walkthroughs or screen-recorded demos. Students get direct, hands-on access to Linux systems in a proper lab setup, so you’re actually typing commands, configuring servers, managing users, and writing scripts yourself — building muscle memory that theory-only courses simply can’t provide.'
    },
    {
      title: 'Trainers Who’ve Worked in the Industry',
      text: 'techcadd’s instructors aren’t just teaching from a textbook — many bring real project and industry experience in system administration, networking, and cloud environments. That means your questions get answered with real-world context: how things actually break, how companies actually configure their servers, and what interviewers actually ask.'
    },
    {
      title: 'Career Counseling and Placement Support',
      text: 'Beyond the classroom, techcadd offers structured career guidance — helping students map out whether they should pursue DevOps, Cloud, or Cybersecurity after completing the Linux fundamentals. The institute also supports students with interview preparation, resume building, and connections to local and regional companies hiring for IT roles.'
    },
    {
      title: 'Affordable, Transparent Fee Structure',
      text: 'Compared to large national training chains, techcadd offers competitively priced courses without compromising on lab access or trainer quality — an important factor for students and families in Ludhiana who want strong value on their education investment.'
    },
    {
      title: 'Proven Track Record With Student Success Stories',
      text: 'techcadd has a consistent history of student placements into IT companies, with many learners crediting the institute’s practical approach and placement support for helping them land their first job. This track record, built over years of training students across Ludhiana, is a strong reason many local students choose techcadd over newer or less-established players.'
    },
    {
      title: 'Recognized Computer Training Institute',
      text: 'techcadd has an established digital footprint and verified presence across the listing platforms students check before enrolling, giving prospective students confidence before they commit.'
    }
  ],
  close: 'Choosing techcadd for your **Linux course in Ludhiana** means choosing an institute that combines local accessibility, practical training, experienced mentorship, and genuine career support — all in one place.'
}

/* ---------------------------------------------------------------- */

/* The closing pitch, immediately above the enquiry form. */
const ENROL_NOW = {
  id: 'linux-enrol',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Enrol now',
  title: 'Start your Linux career today',
  lead: 'Ludhiana’s most practical Linux course, and the foundation everything else in IT is built on.',
  items: [
    {
      title: 'Still deciding?',
      text: 'Talk to our career experts first — it’s free, and there’s zero obligation to enrol. They can help you work out whether Linux, cloud, or security is the right first step for where you want to end up.'
    },
    {
      title: 'Before you enrol',
      text: 'Course duration varies based on the batch type and depth of the curriculum, typically ranging from a few weeks to a couple of months. Contact techcadd directly for the most current schedule, batch timings and duration options.'
    }
  ]
}

export const LINUX_NARRATIVE = [
  CURRICULUM,
  WHY_THIS_PROGRAMME,
  WHY_TECHCADD,
  ENROL_NOW
]

/* ------------------------------------------------------------------
   UNVERIFIED TESTIMONIALS — CHECK BEFORE THIS PAGE GOES LIVE.

   Same caveat as the cybersecurity and cloud computing pages, and for
   the same reason: full names, home neighbourhoods, and named
   outcomes ("got an interview call within a month", "enough confidence
   to clear my recent interview"). If they were written as sample copy
   rather than collected from the students named, they must not be
   published — invented reviews attributed to identifiable people
   mislead prospective students and are unlawful in many jurisdictions.

   Confirm each entry against a real, attributable review. Anything
   that cannot be confirmed should be removed — or delete the
   `testimonials` line from the seed in cyber-cloud.js, which makes the
   page fall back to the generic quotes in shared.js.
------------------------------------------------------------------ */
export const LINUX_TESTIMONIALS = [
  {
    quote:
      'I joined techcadd’s Linux course right after completing my BCA from a college in Ludhiana. Honestly, my college never taught practical Linux — just theory. Here, I actually got to work on live servers and understand shell scripting properly. Got an interview call within a month of finishing the course!',
    name: 'Ravneet Singh',
    course: 'Linux Administration',
    detail: 'Model Town, Ludhiana',
    rating: 5,
    initials: 'RS'
  },
  {
    quote:
      'I was a complete beginner, no coding background at all. The trainers at techcadd explained everything so simply — command line felt scary at first but by the end I was comfortable managing users and permissions on my own. Great experience overall.',
    name: 'Simran Kaur',
    course: 'Linux Administration',
    detail: 'Sarabha Nagar, Ludhiana',
    rating: 5,
    initials: 'SK'
  },
  {
    quote:
      'Good course structure, especially the shell scripting module. I wish the batch timing was a bit more flexible for working professionals like me, but the trainers were accommodating and gave extra practice sessions when needed.',
    name: 'Harjot Singh',
    course: 'Linux Administration',
    detail: 'Civil Lines, Ludhiana',
    rating: 4,
    initials: 'HS'
  },
  {
    quote:
      'techcadd is well known in Ludhiana for a reason. The lab access was the best part — real hands-on practice, not just PPTs. I’m now preparing for RHCSA certification with the base I built here.',
    name: 'Priya Sharma',
    course: 'Linux Administration',
    detail: 'Dugri, Ludhiana',
    rating: 5,
    initials: 'PS'
  },
  {
    quote:
      'I switched careers from a non-IT background and honestly Linux felt like the right entry point. The instructor at techcadd near Bharat Nagar Chowk was patient with all my basic questions. Highly recommend for career switchers.',
    name: 'Amanpreet Singh',
    course: 'Linux Administration',
    detail: 'Pakhowal Road, Ludhiana',
    rating: 5,
    initials: 'AS'
  },
  {
    quote:
      'Solid course content covering networking, permissions, and scripting. Location near Ludhiana Kutchery was convenient for me since I work nearby. Would’ve liked a bit more time on advanced server security, but overall a good foundation course.',
    name: 'Karan Mehta',
    course: 'Linux Administration',
    detail: 'Ferozepur Road, Ludhiana',
    rating: 4,
    initials: 'KM'
  },
  {
    quote:
      'I travel from Chandigarh for the weekend batch at techcadd Ludhiana, and it’s totally worth it. The practical exposure to Ubuntu and CentOS environments is way better than online courses I tried earlier.',
    name: 'Gurleen Kaur',
    course: 'Linux Administration',
    detail: 'Chandigarh, weekend batch',
    rating: 5,
    initials: 'GK'
  },
  {
    quote:
      'As someone working in IT support, I needed to upskill in Linux to move into a sysadmin role. techcadd’s course gave me exactly that — practical commands, real troubleshooting scenarios, and enough confidence to clear my recent interview.',
    name: 'Vikas Chopra',
    course: 'Linux Administration',
    detail: 'Haibowal, Ludhiana',
    rating: 5,
    initials: 'VC'
  },
  {
    quote:
      'Very student-friendly approach. I’m a 12th pass student and was worried Linux would be too technical for me, but the trainers broke it down step by step. Batch size was small enough to get individual attention.',
    name: 'Ishika Bansal',
    course: 'Linux Administration',
    detail: 'BRS Nagar, Ludhiana',
    rating: 4,
    initials: 'IB'
  },
  {
    quote:
      'Best decision to join techcadd for my final year project prep. I needed to deploy my project on a Linux server and this course covered exactly what I needed — plus the placement team helped me with interview prep afterward.',
    name: 'Manpreet Singh',
    course: 'Linux Administration',
    detail: 'Jamalpur, Ludhiana',
    rating: 5,
    initials: 'MS'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.
------------------------------------------------------------------ */
export const LINUX_FAQS = [
  {
    q: 'Which is the best institute for a Linux course in Ludhiana?',
    a: 'techcadd is one of the leading computer training institutes in Ludhiana for **Linux courses**, offering hands-on lab training, experienced trainers, and placement support. The centre is conveniently located near Bharat Nagar Chowk, Ludhiana Kutchery.'
  },
  {
    q: 'Do I need any prior coding knowledge to join this Linux course?',
    a: 'No. This course is designed for beginners as well as experienced learners. Whether you’re a 12th-pass student, a graduate, or a working professional, the course starts from fundamentals and gradually moves to advanced topics.'
  },
  {
    q: 'What is the duration of the Linux course at techcadd Ludhiana?',
    a: 'Course duration varies based on the batch type and depth of the curriculum, typically ranging from a few weeks to a couple of months. Contact techcadd directly for the most current schedule and duration options.'
  },
  {
    q: 'Is this Linux course suitable for engineering students working on final-year projects?',
    a: 'Yes. Many engineering and diploma students in Ludhiana join this course specifically to gain the Linux skills needed for deploying and managing final-year projects on live servers.'
  },
  {
    q: 'Will I get certified after completing the course?',
    a: 'Yes, techcadd provides a course completion certificate that adds credibility to your resume and can support further certifications like **RHCSA**.'
  },
  {
    q: 'What career opportunities open up after a Linux course?',
    a: 'A Linux course lays the foundation for roles like Linux System Administrator, DevOps Engineer, Cloud Engineer, Network Administrator, and Cybersecurity Analyst — all high-demand roles in today’s IT job market.'
  },
  {
    q: 'Does techcadd offer placement assistance after the Linux course?',
    a: 'Yes, techcadd provides career counseling, interview preparation, and placement support to help students connect with IT companies in Ludhiana and beyond.'
  },
  {
    q: 'Are weekend or evening batches available for working professionals?',
    a: 'Yes, techcadd offers flexible batch timings, including weekend and evening options, so working professionals in Ludhiana can pursue the course without disrupting their jobs.'
  },
  {
    q: 'Which Linux distributions are taught in the course?',
    a: 'The course covers major distributions including **Ubuntu**, **CentOS**, **Red Hat Enterprise Linux (RHEL)**, and **Debian**, giving students exposure across different real-world environments.'
  },
  {
    q: 'Is Linux training useful if I want to move into Cloud Computing or DevOps later?',
    a: 'Absolutely. Linux is the foundational skill for Cloud Computing (AWS, Azure, GCP) and DevOps tools like Docker, Kubernetes, and Jenkins. Completing this course prepares you well for advanced specializations.'
  },
  {
    q: 'Where is techcadd’s Linux training center located in Ludhiana?',
    a: 'techcadd’s Ludhiana centre is located near Bharat Nagar Chowk, Ludhiana Kutchery — easily accessible from Model Town, Sarabha Nagar, Civil Lines, Dugri, Pakhowal Road, and Ferozepur Road.'
  },
  {
    q: 'How is techcadd different from other institutes offering Linux courses in Ludhiana?',
    a: 'techcadd focuses on hands-on lab practice rather than theory-heavy teaching, has industry-experienced trainers, and offers integrated career guidance connecting Linux training to broader IT career paths like DevOps and Cloud.'
  }
]
