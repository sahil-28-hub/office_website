/* ==================================================================
   Long-form copy for the Industrial Training page.

   Split out of training.js for the same reason as the others — that
   file seeds six programmes, and this is one programme's editorial
   content. See ../courses/cybersecurity-copy.js for the pattern this
   follows.

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

export const IT_OVERVIEW = {
  title: 'Industrial training in Ludhiana, run the way industry runs',
  lead: 'Looking to bridge the gap between classroom theory and real industry experience? techcadd’s **Industrial Training in Ludhiana** is designed exactly for that — helping engineering, IT, computer science, and diploma students gain hands-on, job-ready skills through live projects and real-world workflows. Whether you need 6 weeks, 45 days, or a full 6-month industrial training program, techcadd offers flexible durations to match your semester break, academic requirement, or career timeline.',
  body: [
    'At techcadd Computer Education in Ludhiana, students get access to industry-focused training across Web & App Development, Digital Marketing, Python, Java, Data Science, Cloud Computing, Cyber Security, Artificial Intelligence, and more — guided by experienced mentors who bring real project exposure into every session. This isn’t theoretical classroom learning; it’s practical, assignment-based training built on live client scenarios and case studies.',
    'With certification, portfolio building, resume support, and placement assistance, techcadd has become one of the trusted names for **industrial training in Ludhiana** among B.Tech, BCA, MCA, diploma, and polytechnic students looking to strengthen their resumes and stand out in a competitive job market.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this training.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const IT_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this industrial training in Ludhiana',
  lead: 'Two kinds of students walk into techcadd’s **Industrial Training program in Ludhiana**: the ones whose college requires it, and the ones who simply want to have built something before they graduate. The programme is the same for both.',
  groups: [
    {
      icon: 'curriculum',
      title: 'B.Tech and Engineering Students (All Branches)',
      text: 'If you’re pursuing B.Tech in Computer Science, IT, Electronics, Mechanical, Civil, or any related engineering branch, industrial training is often a mandatory part of your curriculum. This program is structured specifically to fulfil that academic requirement while giving you genuine, resume-worthy practical exposure — not just a certificate to submit to your college.',
      tag: 'Meets the requirement'
    },
    {
      icon: 'code',
      title: 'BCA, MCA, and Computer Science Students',
      text: 'Students pursuing BCA, MCA, or CS degrees frequently join industrial training during semester breaks to strengthen their technical foundation in areas like web development, Python, Java, and data science — skills that go far beyond what’s typically covered in regular coursework.',
      tag: 'Beyond coursework'
    },
    {
      icon: 'stack',
      title: 'Diploma and Polytechnic Students',
      text: 'Diploma holders in Computer Science, IT, Electronics, and Mechanical trades can use this training to gain hands-on, industry-relevant skills that make them more competitive for both jobs and further studies. Many diploma students from Ludhiana and nearby areas choose industrial training specifically to close the practical skills gap.',
      tag: 'Close the gap'
    },
    {
      icon: 'star',
      title: '12th Pass Students Exploring Tech Careers',
      text: 'If you’ve completed 12th grade and are curious about a career in IT, software development, or digital marketing, industrial training is a great low-commitment way to explore the field with real, hands-on exposure before choosing a long-term academic or career path.',
      tag: 'Try before you commit'
    },
    {
      icon: 'career',
      title: 'Fresh Graduates and Job Seekers',
      text: 'Recent graduates who feel their degree didn’t provide enough practical exposure often join **industrial training in Ludhiana** to build a strong portfolio, gain live project experience, and become genuinely job-ready before entering the job market.',
      tag: 'Build a portfolio'
    },
    {
      icon: 'clock',
      title: 'Students Needing Mandatory 6-Week or 6-Month Training',
      text: 'Many universities and colleges require students to complete a 6-week, 45-day, or 6-month industrial training as part of their degree. techcadd offers all these duration options, making it convenient for students to fulfil academic requirements without compromising on training quality.',
      tag: 'Every duration'
    },
    {
      icon: 'server',
      title: 'Working Professionals Looking to Upskill',
      text: 'Professionals already working in a technical field but wanting to add new skills — such as Python, cloud computing, cybersecurity, or AI — can also join relevant industrial training modules to stay competitive in a fast-evolving job market.',
      tag: 'Stay competitive'
    },
    {
      icon: 'spark',
      title: 'Career Switchers',
      text: 'If you’re switching from a non-technical background into IT, web development, or digital marketing, industrial training offers a structured, practical entry point with mentorship and real project work to help you transition confidently.',
      tag: 'A structured way in'
    },
    {
      icon: 'chart',
      title: 'Students Preparing for Campus Placements',
      text: 'Students who want a stronger edge during campus placements often use industrial training to build a live-project portfolio, gain confidence in technical interviews, and demonstrate real-world problem-solving ability to recruiters.',
      tag: 'Placement edge'
    },
    {
      icon: 'support',
      title: 'Students From Ludhiana, Jalandhar and Nearby Punjab',
      text: 'Given techcadd’s regional presence across Ludhiana, Jalandhar, Mohali, Phagwara, and Hoshiarpur, students from across Punjab often travel to or enrol remotely with techcadd Ludhiana specifically for its industrial training and placement support.',
      tag: 'Across Punjab'
    }
  ],
  note: 'In short — regardless of your branch, year of study, or current skill level, if you want practical, industry-relevant experience backed by real projects and mentorship, this programme is built for you.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'indtr-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'The tracks you can choose from',
  lead: 'Since the **Industrial Training program** spans multiple in-demand technology tracks, students can choose a specialization aligned with their branch and career goals. Here’s what’s covered across the major tracks and the tools you’ll work with.',
  items: [
    {
      title: 'Web & App Development Track',
      text: 'You’ll learn front-end and back-end development, covering **HTML**, **CSS**, **JavaScript**, and modern frameworks, along with database integration and API development. Students build and deploy real web applications and mobile app projects, learning the complete development lifecycle from planning to deployment.'
    },
    {
      title: 'Python & Java Programming',
      text: 'You’ll build strong programming fundamentals in **Python** and **Java**, covering data structures, object-oriented programming, and problem-solving techniques used in real software development. These are core skills required across almost every IT job role, making this track valuable regardless of your final specialization.'
    },
    {
      title: 'Data Science Track',
      text: 'You’ll learn data analysis, visualization, and the fundamentals of machine learning using Python libraries. Working on real datasets and live project scenarios helps you understand how businesses actually use data to make decisions — a fast-growing career field with strong demand.'
    },
    {
      title: 'Artificial Intelligence',
      text: 'You’ll be introduced to AI concepts, machine learning models, and practical applications, learning how AI is being integrated into real business workflows across industries — one of the fastest-growing and highest-demand skill areas in today’s job market.'
    },
    {
      title: 'Cloud Computing',
      text: 'You’ll gain hands-on exposure to cloud platforms, deployment workflows, and cloud infrastructure basics — increasingly essential skills as companies shift operations, applications, and data to cloud-based environments.'
    },
    {
      title: 'Cyber Security',
      text: 'You’ll learn foundational cybersecurity concepts, including network security, common vulnerabilities, and protective practices — a critical and increasingly in-demand skill set as businesses prioritize data protection and digital safety.'
    },
    {
      title: 'Digital Marketing',
      text: 'For students interested in the business and marketing side of tech, this track covers SEO, social media marketing, content strategy, and digital campaign management — practical skills applicable to nearly any industry today.'
    },
    {
      title: 'AutoCAD & SolidWorks (Mechanical / Civil Track)',
      text: 'For engineering students from mechanical and civil backgrounds, this track covers technical drafting, 2D/3D design, and modeling tools essential for design, manufacturing, and construction-related roles.'
    },
    {
      title: 'Live Project Development',
      text: 'Across every track you build two or three real projects — briefs with requirements that can be got wrong, not exercises with a known answer. They are what you open in an interview when somebody asks what you have made.'
    },
    {
      title: 'Version Control, Deployment & Documentation',
      text: 'You’ll learn how to use version control systems, deploy projects, and create proper technical documentation — practical workplace skills that are often overlooked in regular academic curriculums but expected by employers.'
    },
    {
      title: 'Soft Skills & Interview Readiness',
      text: 'The last stretch is resume work, interview practice and assessments — all of it aimed at one thing: being able to explain what you built, and why you built it that way, to somebody who did not watch you do it.'
    }
  ],
  tools: {
    label: 'Tools and technologies covered',
    items: [
      'Python, Java, JavaScript',
      'Web frameworks & databases',
      'Cloud platforms & deployment',
      'Data science & visualisation libraries',
      'AI/ML fundamentals',
      'Cybersecurity fundamentals',
      'AutoCAD & SolidWorks',
      'Git-based version control',
      'Digital marketing & SEO tools'
    ]
  },
  close: 'By the end of the program, you’ll have deployed applications, GitHub repositories, project documentation, and a portfolio that clearly demonstrates your practical capability — exactly what employers and campus placement recruiters in Ludhiana and beyond look for.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'indtr-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'With dozens of institutes offering **industrial training in Ludhiana**, it’s worth understanding exactly what makes a program genuinely worth your time and money.',
  items: [
    {
      title: 'Flexible Duration Options to Match Your Needs',
      text: 'Whether your college requires a 6-week, 45-day, or full 6-month industrial training, techcadd offers all these formats — so you can fulfil academic requirements or go deeper into a skill based on your available time and career goals.'
    },
    {
      title: 'Real Projects, Not Just Theory',
      text: 'This program is built around live, real-world assignments rather than textbook exercises. Students work on actual project scenarios — web apps, data science tasks, digital marketing campaigns, or software builds — that mirror what happens inside real IT companies, giving you experience you can genuinely talk about in interviews.'
    },
    {
      title: 'Wide Range of In-Demand Technologies',
      text: 'The training covers Web & App Development, Digital Marketing, Python, Java, Data Science, Artificial Intelligence, Cloud Computing, Cyber Security, AutoCAD, and SolidWorks — meaning students from computer science, IT, mechanical, and civil backgrounds can all find a relevant, career-aligned track.'
    },
    {
      title: 'Mentors With Real Industry Experience',
      text: 'Trainers at techcadd are certified professionals with hands-on expertise in their field. Instead of purely theoretical teaching, they guide students through live client scenarios and case studies — the kind of practical problem-solving that builds real confidence and technical depth.'
    },
    {
      title: 'Bridges the Gap Between Academics and Industry',
      text: 'Industrial training exists to solve one core problem: college teaches concepts, but companies expect execution. This program is specifically designed to bridge that gap — helping you understand real workflows, developer environments, and business use-cases that your regular curriculum doesn’t cover in depth.'
    },
    {
      title: 'Portfolio and Resume-Ready Outcomes',
      text: 'Rather than finishing with just a completion certificate, students graduate with deployed projects, documentation, and repositories that genuinely demonstrate their capability — assets that make a real difference during placements and job applications.'
    },
    {
      title: 'Structured Career Support',
      text: 'The program goes beyond technical training to include resume and portfolio building, interview practice, assessments, and connections with hiring partners — giving students a clear, supported pathway from training to employment.'
    },
    {
      title: 'Student-Friendly Fees and Flexible Batches',
      text: 'With student-friendly fee structures, EMI options, and batch timings designed around academic schedules, techcadd makes quality industrial training accessible without adding financial or scheduling stress during your semester.'
    },
    {
      title: 'Regional Reputation Across Punjab',
      text: 'With training centres and recognition across Ludhiana, Jalandhar, Mohali, Phagwara, and Hoshiarpur, techcadd has built a name among industrial training students, job seekers, and professionals across the region — meaning your certificate carries recognition beyond just Ludhiana.'
    },
    {
      title: 'Designed for Ludhiana’s Growing Tech & Industrial Ecosystem',
      text: 'Ludhiana’s industrial and IT landscape is expanding steadily, and companies are actively seeking candidates with demonstrated practical skills rather than purely academic credentials. This program is built specifically to prepare students for that local hiring reality, while keeping skills relevant nationally.'
    },
    {
      title: 'Ideal for Semester Breaks and Career Gaps',
      text: 'A summer break, a semester gap, the months after graduation — the format is chosen to fit whichever window you actually have, and it ends when it says it will. You go back to college, or into the job market, having finished something.'
    }
  ],
  close: 'In short, this program exists to turn academic learning into practical capability — through real projects, experienced mentorship, flexible duration options, and genuine placement support, right here in Ludhiana.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'indtr-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'With numerous institutes offering industrial training across Ludhiana, choosing the right one significantly impacts how job-ready you actually become. Here’s why techcadd Computer Education has established itself as a trusted name for **industrial training in Ludhiana**.',
  items: [
    {
      title: 'A Trusted Industrial Training Institute in Ludhiana',
      text: 'techcadd Computer Education has built a strong reputation as one of Ludhiana’s trusted industrial training providers, known for practical exposure, quality mentorship, and consistent career outcomes for students — a name students and colleges recognize.'
    },
    {
      title: 'Wide Technology Coverage Under One Roof',
      text: 'The industrial training programs span a wide range of technologies — Web Development, Digital Marketing, AutoCAD, SolidWorks, Python, Java, Data Science, Artificial Intelligence, and Cloud Computing — meaning students from computer science, IT, mechanical, and civil backgrounds can all find a relevant track without needing to look elsewhere.'
    },
    {
      title: 'Learn From Certified, Experienced Mentors',
      text: 'Trainers at techcadd are certified professionals with years of hands-on expertise in their respective field. They don’t just teach theory — they guide students through real projects, live client scenarios, and case studies that build genuine confidence and technical depth, not just surface-level familiarity.'
    },
    {
      title: 'Real-Time, Assignment-Based Learning',
      text: 'techcadd focuses on hands-on training with real-time assignments, ensuring students are prepared for the professional world rather than just familiar with concepts. This practical, workflow-driven approach is what separates genuine industrial training from a basic crash course.'
    },
    {
      title: 'Every Module Aligned With Industry Trends',
      text: 'The curriculum is designed according to current industry practice, so learners acquire skills employers actually demand — not outdated syllabi disconnected from what companies are hiring for today.'
    },
    {
      title: 'Flexible Duration Options',
      text: 'Whether you need a 6-week, 45-day, or 6-month industrial training program, techcadd offers all these formats, making it easy to fit training around your college schedule, semester break, or specific academic requirement — without compromising on depth or quality.'
    },
    {
      title: 'Smooth Transition From Academics to Industry',
      text: 'B.Tech, BCA, MCA, diploma — the branch on your certificate changes what your college asks for, not what happens here. The work is the same: take what you were taught academically and use it on something real, which is the whole point of industrial training.'
    },
    {
      title: 'Strong Placement Support',
      text: 'techcadd stands out for its placement assistance, including resume and portfolio building, interview preparation, assessments, and connections with hiring partners — giving students a genuine, structured path from training into employment.'
    },
    {
      title: 'Multi-City Presence Across Punjab',
      text: 'With training centres and recognition across Ludhiana, Jalandhar, Mohali, Phagwara, and Hoshiarpur, techcadd is one of the recognized names among industrial training students, job seekers, and professionals in the region — meaning your certificate holds credibility well beyond Ludhiana.'
    },
    {
      title: 'Student-Friendly Fees and Batch Flexibility',
      text: 'With affordable, student-friendly fee structures, EMI options, and batch timings designed around academic calendars, techcadd makes quality industrial training accessible to a wide range of students without financial or scheduling strain.'
    }
  ],
  close: 'Choosing techcadd means choosing an industrial training experience in Ludhiana built on real project work, certified mentorship, and genuine placement support — not just a certificate to check a box.'
}

/* ---------------------------------------------------------------- */

/* The closing pitch, immediately above the enquiry form. */
/* This section used to carry the eyebrow "Enquire now" and the title
   "Turn your academic learning into real industry experience" — word
   for word the same as the enquiry band that renders directly beneath
   it, so the page asked the same question twice under the same
   heading. It keeps the one thing the form does not say: what you are
   actually holding at the end. The invitation to talk to a counsellor
   is left to the form itself, which is the thing that can act on it. */
const WHAT_YOU_LEAVE_WITH = {
  id: 'indtr-leave-with',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'What you leave with',
  title: 'What is in your hands at the end',
  lead: 'Whichever format and track you pick, the programme is built backwards from this list.',
  items: [
    {
      title: 'Work you can open in front of someone',
      text: 'Deployed applications, GitHub repositories with your commits in them, and project documentation written while you built rather than the night before submission.'
    },
    {
      title: 'The paperwork your college asks for',
      text: 'The training letter, project certificate and report your department needs — plus, on the longer formats, an internship letter describing the role you actually held.'
    }
  ]
}

/* How the programme actually runs, stage by stage.

   From the supplied "techcadd Ludhiana — Training Format Pages"
   document, section 03. The page already said what you learn and why;
   it never said what a week inside the programme looks like, which is
   the thing a student comparing this against an internship needs.

   Sits at the `syllabus` slot after CURRICULUM, so the tracks come
   first and the process second. Tinted against CURRICULUM's paper. */
const HOW_IT_RUNS = {
  id: 'indtr-how-it-runs',
  slot: 'syllabus',
  tone: 'tint',
  eyebrow: 'How it runs',
  title: 'Five stages, run the way a project team runs',
  lead: 'Duration is matched to your university requirement, but the shape below is the same however long you are with us.',
  items: [
    {
      title: 'Onboarding',
      text: 'Skill assessment, tool setup, and the team and reporting structure explained — so you know who you report to before you are given anything to do.'
    },
    {
      title: 'Assignment',
      text: 'You are placed on a project module with **defined deliverables**, rather than handed a topic and left to scope it yourself.'
    },
    {
      title: 'Execution',
      text: 'Daily tasks, deadlines, standups and work reviews. This is the bulk of the programme and the part that most resembles a first job.'
    },
    {
      title: 'Review',
      text: 'Feedback rounds, corrections and version documentation. Work goes through review before it is accepted — students consistently say this is what changes how they work.'
    },
    {
      title: 'Closure',
      text: 'Final presentation, project documentation, and the certificate and letters issued together.'
    }
  ]
}

/* What the programme adds, as distinct from what it teaches.

   Also from section 03 of the same document. Sits between
   WHY_TECHCADD and WHAT_YOU_LEAVE_WITH so the page closes on outcomes
   before it asks for the enquiry. Paper is taken by WHY_TECHCADD
   directly above, so this one is tinted, and WHAT_YOU_LEAVE_WITH
   keeps its tint too — deliberately, because the enquiry band between
   them is dark and the repeat is not visible across it. */
const FUTURE_SCOPE = {
  id: 'indtr-scope',
  slot: 'careers',
  tone: 'tint',
  /* Not "future scope" — the seed's own future block directly above
     carries that eyebrow. This one answers the narrower question of
     what the programme adds to you right now, rather than where it
     leads over the next few years. */
  eyebrow: 'What it adds',
  title: 'The gap this closes',
  lead: 'The distance between knowing a technology and having worked in a company that uses it is the distance this programme covers.',
  items: [
    {
      title: 'Work experience on your resume',
      text: 'Documented project work with a reporting structure behind it, rather than a course title and a date range.'
    },
    {
      title: 'Your university requirement, documented',
      text: 'Certificate, internship letter and project documentation in one file, prepared in the format Punjab universities generally accept.'
    },
    {
      title: 'Interview ready answers',
      text: 'You can describe **a real task, a real deadline and a real correction** — which is what the question is actually asking for.'
    },
    {
      title: 'Readiness for a team role',
      text: 'You have already worked to reviews and deadlines before your first job, rather than learning both during it.'
    }
  ]
}

export const IT_NARRATIVE = [
  CURRICULUM,
  HOW_IT_RUNS,
  WHY_THIS_PROGRAMME,
  WHY_TECHCADD,
  FUTURE_SCOPE,
  WHAT_YOU_LEAVE_WITH
]

/* ------------------------------------------------------------------
   UNVERIFIED TESTIMONIALS — CHECK BEFORE THIS PAGE GOES LIVE.

   Same caveat as the other pages carrying supplied reviews: full
   names, home neighbourhoods, and named course and placement details.
   If they were written as sample copy rather than collected from the
   students named, they must not be published — invented reviews
   attributed to identifiable people mislead prospective students and
   are unlawful in many jurisdictions.

   Confirm each entry against a real, attributable review. Anything
   that cannot be confirmed should be removed — or delete the
   `testimonials` line from the seed in training.js, which makes the
   page fall back to the generic quotes in shared.js.
------------------------------------------------------------------ */
export const IT_TESTIMONIALS = [
  {
    quote:
      'Did my 6-week industrial training here during semester break for my B.Tech CSE requirement. Honestly expected it to be basic, but I ended up building and deploying a full web app with authentication and APIs. Helped a lot during placements.',
    name: 'Arshdeep Singh',
    course: 'Industrial Training',
    detail: 'Model Town, Ludhiana',
    rating: 5,
    initials: 'AS'
  },
  {
    quote:
      'Joined the Python + Data Science industrial training and it was way more hands-on than I expected. Working on real datasets instead of just theory made concepts finally click for me.',
    name: 'Kirandeep Kaur',
    course: 'Industrial Training',
    detail: 'Sarabha Nagar, Ludhiana',
    rating: 5,
    initials: 'KK'
  },
  {
    quote:
      'Completed my mandatory 6 months industrial training in web development here. Mentors were industry professionals, not just college-style teachers, and that made a huge difference in how things were explained.',
    name: 'Harpreet Singh',
    course: 'Industrial Training',
    detail: 'Chandigarh Road, Ludhiana',
    rating: 4,
    initials: 'HS'
  },
  {
    quote:
      'I’m a mechanical engineering student and did the AutoCAD/SolidWorks track. Loved that it was practical from day one — actual drafting projects, not just software tutorials.',
    name: 'Simran Kaur',
    course: 'Industrial Training',
    detail: 'Civil Lines, Ludhiana',
    rating: 5,
    initials: 'SK'
  },
  {
    quote:
      'Did my 45 days industrial training in Java here before campus placements started. The live project work gave me actual talking points in interviews instead of just listing skills on my resume.',
    name: 'Gurjot Singh',
    course: 'Industrial Training',
    detail: 'Ferozepur Road, Ludhiana',
    rating: 5,
    initials: 'GS'
  },
  {
    quote:
      'Came from Chandigarh specifically for techcadd’s industrial training reputation. The Digital Marketing track was excellent — real campaign work, not just definitions and slides.',
    name: 'Ravneet Kaur',
    course: 'Industrial Training',
    detail: 'Chandigarh',
    rating: 5,
    initials: 'RK'
  },
  {
    quote:
      'BCA student here — did my industrial training in Cloud Computing. Trainers had real hands-on experience which made a big difference compared to a friend’s experience at another institute.',
    name: 'Manpreet Singh',
    course: 'Industrial Training',
    detail: 'Dugri, Ludhiana',
    rating: 4,
    initials: 'MS'
  },
  {
    quote:
      'What stood out was the resume and portfolio building support at the end. I walked out with a GitHub repo and proper documentation, not just a certificate to submit to college.',
    name: 'Jasleen Kaur',
    course: 'Industrial Training',
    detail: 'Bharat Nagar, Ludhiana',
    rating: 5,
    initials: 'JK'
  },
  {
    quote:
      'Diploma student in Computer Science — joined for practical exposure since our college syllabus was mostly theoretical. The AI/ML introduction module was genuinely well taught.',
    name: 'Amandeep Singh',
    course: 'Industrial Training',
    detail: 'Pakhowal Road, Ludhiana',
    rating: 5,
    initials: 'AD'
  },
  {
    quote:
      'Did my 6-month industrial training in Cyber Security. Appreciated that fee structure had EMI options — made it easier to manage alongside college expenses.',
    name: 'Navdeep Kaur',
    course: 'Industrial Training',
    detail: 'Zirakpur, Chandigarh region',
    rating: 4,
    initials: 'NK'
  },
  {
    quote:
      'MCA student, joined for the Python and Java combined track. Batch timings were flexible enough to fit around my regular classes, and mentors were always approachable for doubts.',
    name: 'Rajveer Singh',
    course: 'Industrial Training',
    detail: 'BRS Nagar, Ludhiana',
    rating: 5,
    initials: 'RV'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them.

   The first three did NOT come from the marketing copy — they were
   already on the seed before this file existed, and they answer the
   three things a student actually needs settled before enrolling:
   whether their university accepts the training, whether they can do
   it remotely, and exactly which documents they walk out with. They
   lead for that reason, and must not be dropped.
------------------------------------------------------------------ */
export const IT_FAQS = [
  {
    q: 'Which universities accept techcadd industrial training?',
    a: 'We have run training for students from IKGPTU, LPU, GNDU, CT University, Chandigarh University, DAV, HMV and most Punjab polytechnics, along with students from outside the state taking online batches. The letter, certificate and report follow the standard format; if your college has a specific template, send it and we will fill it.'
  },
  {
    q: 'Can I do the training online?',
    a: 'Yes. Every format runs as a classroom batch in Ludhiana and as a live online batch. The online batch is not recorded lectures — it is the same trainer, the same schedule and the same daily lab review, over a call.'
  },
  {
    q: 'What documents do I get at the end?',
    a: 'An industrial training letter stating your duration and track, a project certificate naming your project, a training report you can submit, and — on the four- and six-month formats — an internship letter describing the role you held on the live project.'
  },
  {
    q: 'What is industrial training and why is it important for students in Ludhiana?',
    a: 'Industrial training is a practical, hands-on program that bridges the gap between academic learning and real industry application. It helps students understand real workflows, live projects, and business use-cases that regular college curriculums typically don’t cover in depth, making them more job-ready.'
  },
  {
    q: 'What durations of industrial training does techcadd offer in Ludhiana?',
    a: 'techcadd offers flexible industrial training durations in Ludhiana, including **6 weeks**, **45 days**, and **6 months**, so students can choose based on their college requirement, semester break, or career goals.'
  },
  {
    q: 'Who can join industrial training at techcadd?',
    a: 'Students pursuing B.Tech, BCA, MCA, Diploma, Polytechnic, or any related technical program can join. Students from Computer Science, IT, Mechanical, Civil, Electronics, and Electrical backgrounds are all eligible to enrol.'
  },
  {
    q: 'Which technologies can I choose for my industrial training?',
    a: 'The industrial training covers a wide range of technologies, including Web Development, Digital Marketing, **Python**, **Java**, Data Science, Artificial Intelligence, Cloud Computing, Cyber Security, **AutoCAD**, and **SolidWorks**.'
  },
  {
    q: 'Will I work on real, live projects during industrial training?',
    a: 'Yes. You build two or three real projects, with assignments and client-style briefs rather than set exercises. They go into your portfolio and they are what you talk about in interviews.'
  },
  {
    q: 'Does techcadd provide a certificate after completing industrial training?',
    a: 'Yes. Students receive industry certification upon completion, which can be submitted to colleges for mandatory training requirements and also used to demonstrate practical experience to employers.'
  },
  {
    q: 'Does techcadd offer placement assistance after industrial training?',
    a: 'Yes. The program includes resume and portfolio building, interview preparation, assessments, and connections with hiring partners to support students’ transition into employment after training.'
  },
  {
    q: 'Is prior technical experience required to join industrial training?',
    a: 'No prior professional experience is required for most tracks. Programs are designed for students at various stages — from those with basic academic knowledge to those looking to deepen existing skills.'
  },
  {
    q: 'Can diploma and polytechnic students join this industrial training program?',
    a: 'Yes. Diploma and Polytechnic students in Computer Science, IT, Electronics, and Mechanical trades are welcome and often join specifically to gain the hands-on, industry-relevant exposure their coursework may lack.'
  },
  {
    q: 'Why should I choose techcadd over other industrial training institutes in Ludhiana?',
    a: 'techcadd offers certified mentors with real industry experience, wide technology coverage under one roof, flexible training durations, real project-based learning, strong placement support, and a trusted regional reputation across Ludhiana, Jalandhar, Mohali, Phagwara, and Hoshiarpur.'
  },
  {
    q: 'Are the fees for industrial training at techcadd affordable, with flexible payment options?',
    a: 'Yes. techcadd offers student-friendly fee structures along with EMI options and batch timings designed around academic schedules, making quality industrial training accessible without financial strain.'
  },
  {
    q: 'Can students from Chandigarh or other nearby cities join techcadd’s industrial training in Ludhiana?',
    a: 'Yes. Many students from Chandigarh, Zirakpur, and other nearby Punjab regions join techcadd Ludhiana specifically for its practical, career-focused industrial training.'
  },

  /* From section 03 of the "Training Format Pages" document. These
     four answer the comparison questions the set above does not —
     what separates this from an internship, and what the duration
     actually depends on. Answer-first and each opening sentence
     complete on its own, so a search snippet can lift one whole. */
  {
    q: 'Is industrial training the same as an internship?',
    a: 'They overlap. Industrial training is structured around a syllabus requirement and issues a training certificate. The internship letter documents the work period itself. At techcadd Ludhiana you receive both.'
  },
  {
    q: 'Will my university accept this training?',
    a: 'The certificate, internship letter and project documentation are prepared in the format Punjab universities generally ask for. Share your college guidelines with the counsellor before joining so nothing is missed.'
  },
  {
    q: 'Do I need to already know a technology?',
    a: 'Basic familiarity helps, because you are assigned real tasks from the start. If you are beginning from zero, a six week or four month track first is the better sequence.'
  },
  {
    q: 'How long does industrial training run?',
    a: 'Duration is matched to your university requirement. Confirm your required period with the counsellor before applying.'
  }
]
