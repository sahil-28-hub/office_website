/* ==================================================================
   Long-form copy for the AutoCAD course page.

   Split out of design.js for the same reason as the others — that
   file seeds four courses, and this is one course's editorial
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

export const AUTOCAD_OVERVIEW = {
  title: 'The AutoCAD course in Ludhiana that ends in a portfolio',
  lead: 'Looking for the best **AutoCAD course in Ludhiana**? techcadd is Ludhiana’s trusted destination for hands-on, industry-relevant AutoCAD training designed for students, diploma holders, engineering graduates, and working professionals who want to build a career in design and drafting. Whether you’re aiming for a role in civil construction, mechanical manufacturing, interior design, or architecture, our **AutoCAD training in Ludhiana** covers both 2D drafting and 3D modeling using real industry projects — not just theory.',
  body: [
    'At techcadd, we understand that Ludhiana’s job market — spanning manufacturing hubs, construction firms, and engineering consultancies across areas like Model Town, Ferozepur Road, and Dhandari Kalan — demands practical CAD skills. That’s why our **AutoCAD classes in Ludhiana** are built around live drawing exercises, real blueprints, and placement-focused training.',
    'From beginners with zero design background to professionals looking to upskill, this course is structured to make you job-ready with a recognized certification, expert mentorship, and dedicated placement support — all from a local institute that understands what Ludhiana employers actually want.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const AUTOCAD_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this course',
  lead: 'The **AutoCAD course in Ludhiana** at techcadd is designed to be inclusive and career-focused, welcoming learners from a wide range of academic and professional backgrounds. If you’re wondering whether this course is right for you, here’s a clear breakdown of who benefits most.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students (Science & Commerce Background)',
      text: 'If you’ve just completed your 12th grade — especially with a Non-Medical, PCM, or even Commerce background — and you’re exploring career options beyond a traditional degree, this course is an excellent starting point. AutoCAD doesn’t require a technical degree to begin; it requires curiosity, basic computer familiarity, and willingness to learn. Many students from schools around Model Town, Sarabha Nagar, and Civil Lines join right after 12th to get a head start on a design career while their peers are still deciding on a degree path.',
      tag: 'No degree needed'
    },
    {
      icon: 'stack',
      title: 'Diploma Holders (Civil, Mechanical, Electrical)',
      text: 'Diploma engineers from polytechnics in and around Ludhiana often find that classroom theory isn’t enough to land a job. Employers expect hands-on software skills. Our **AutoCAD institute in Ludhiana** bridges this exact gap — diploma holders in Civil and Mechanical streams gain practical, drawing-board-to-software fluency that makes them immediately useful on a job site or in a design office.',
      tag: 'Close the gap'
    },
    {
      icon: 'career',
      title: 'B.Tech / B.E. Graduates',
      text: 'Engineering graduates — particularly from Civil, Mechanical, and Architecture disciplines — frequently discover that core engineering knowledge alone doesn’t guarantee interview calls. Recruiters across Ludhiana’s manufacturing and construction sectors specifically screen for AutoCAD proficiency. This course adds a practical, resume-strengthening skill that complements your degree and significantly widens your job eligibility.',
      tag: 'Widen your options'
    },
    {
      icon: 'spark',
      title: 'Architecture Students & Diploma Holders',
      text: 'Aspiring architects and B.Arch/D.Arch students benefit hugely from mastering AutoCAD early. Since architectural drafting, floor planning, and elevation drawings are core to the profession, this course helps architecture students build a strong technical foundation alongside their design creativity.',
      tag: 'Core to the craft'
    },
    {
      icon: 'support',
      title: 'Job Seekers & Career Switchers',
      text: 'Not everyone comes from an engineering background — and that’s fine. Many of our students are graduates from unrelated fields (B.Sc, BCA, even B.Com) who are actively looking for a practical, in-demand skill that opens doors to drafting, design, and CAD operator roles across Ludhiana’s industrial belt, including Focal Point and Industrial Area A/B.',
      tag: 'Start from zero'
    },
    {
      icon: 'chart',
      title: 'Working Professionals Seeking Upskilling',
      text: 'Site supervisors, junior engineers, and contractors already working in construction or manufacturing often enrol to formalize their practical knowledge with structured AutoCAD certification — boosting both confidence and promotion potential.',
      tag: 'Formalise it'
    },
    {
      icon: 'terminal',
      title: 'Freelancers & Home-Based Designers',
      text: 'With remote drafting work on the rise, many homemakers and freelancers in Ludhiana are turning to AutoCAD as a flexible, work-from-home income skill.',
      tag: 'Work from home'
    }
  ],
  note: 'Basic eligibility: 10+2 in any stream, and a genuine interest in technical drawing and design. Basic computer knowledge — typing and file handling — is preferred but not mandatory, and no prior design experience is required. Whether you’re 18 or 45, a fresher or a professional, the course is structured to meet you at your level and take you to job-readiness.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'autocad-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn and the tools covered',
  lead: 'techcadd’s **AutoCAD course in Ludhiana** is structured to take you from complete beginner to job-ready CAD professional, covering both foundational concepts and advanced, industry-applied skills.',
  items: [
    {
      title: 'Getting Started with AutoCAD',
      text: 'You’ll begin with the fundamentals — understanding the AutoCAD interface, workspace navigation, coordinate systems, and file management. This foundation ensures every student, even those with zero prior design exposure, becomes fully comfortable with the software environment before moving into complex drafting.'
    },
    {
      title: '2D Drafting Fundamentals',
      text: 'A major portion of the course focuses on mastering 2D drafting — the backbone of technical drawing in both civil and mechanical fields. You’ll draw and edit lines, polylines, circles, arcs, rectangles and polygons; use precision tools like Object Snap (OSNAP), Polar Tracking and Ortho mode; apply editing commands including trim, extend, offset, mirror, array, fillet and chamfer; work with layers, line types and drawing organization for professional-standard output; add dimensions, annotations and text accurately; and create and use blocks and attributes for repeated design elements.'
    },
    {
      title: '3D Modeling Techniques',
      text: 'Once 2D fundamentals are solid, you’ll move into 3D modeling — an essential skill for modern design roles. This covers creating 3D solids, surfaces and mesh models; the extrude, revolve, sweep and loft commands for complex geometry; editing 3D objects and applying Boolean operations (union, subtract, intersect); generating 2D drawings and sections from 3D models; and visualizing designs with rendering and material application basics.'
    },
    {
      title: 'Civil Engineering Applications',
      text: 'For students focused on the civil track, the course covers reading and creating architectural floor plans and building layouts; site plans, elevations and sectional drawings; working with real construction drawings used in the field; and understanding scale, annotation standards and construction documentation practices.'
    },
    {
      title: 'Mechanical Design Applications',
      text: 'For the mechanical track, you’ll work on machine part drawings and assembly drafting; orthographic projections and manufacturing drawing standards; creating detailed component drawings used in production; and understanding tolerances, dimensioning standards and the drawing conventions used in Ludhiana’s manufacturing sector.'
    },
    {
      title: 'Real-World Project Work',
      text: 'Throughout the course, you won’t just practice isolated exercises — you’ll work directly on actual construction drawings, building plans, machine assemblies, and manufacturing drawings, mirroring exactly what’s expected in real design offices and industrial units across Ludhiana.'
    },
    {
      title: 'Professional & Career-Ready Skills',
      text: 'Beyond software commands, students build the ability to interpret and produce industry-standard technical drawings; the speed and accuracy expected in real drafting roles; a portfolio of completed project drawings to showcase in interviews; and the confidence to walk into a civil, mechanical, or architectural design role from day one.'
    }
  ],
  tools: {
    label: 'Software and tools covered',
    items: [
      'AutoCAD 2D & 3D',
      'Plotting & printing setup',
      'Layer management systems',
      'Dimensioning & annotation tools',
      'Block libraries & templates',
      'DWG, DXF & plotting formats'
    ]
  },
  close: 'By the end of this **AutoCAD training in Ludhiana**, students don’t just know how to “use” AutoCAD — they know how to think and draft like a professional CAD operator, ready for real employment in Ludhiana’s engineering, construction, and manufacturing sectors.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'autocad-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why choose this program',
  lead: 'Choosing the right **AutoCAD course in Ludhiana** can be the difference between a certificate that sits in a drawer and a skill that actually gets you hired. Here’s why techcadd’s program stands apart for students and job seekers across Ludhiana.',
  items: [
    {
      title: 'Built Around Real Industry Projects, Not Just Textbook Drawings',
      text: 'A lot of institutes teach AutoCAD as a set of commands to memorize. At techcadd, you learn by working on actual construction drawings, building layouts, machine assemblies, and manufacturing drawings — the same kind of files you’ll encounter on your first day at a real job. This project-based approach means you graduate with a portfolio, not just a certificate.'
    },
    {
      title: 'Dual Specialization: Civil AND Mechanical in One Program',
      text: 'Most institutes force you to choose between Civil or Mechanical AutoCAD tracks. techcadd’s program covers both, giving you the flexibility to explore career paths in construction, real estate, interior design, manufacturing, or machine design — without enrolling in two separate courses. This is a genuine career advantage in a city like Ludhiana, where both the manufacturing sector (hosiery, machine tools, auto parts) and the construction and real estate sector are growing at the same time.'
    },
    {
      title: 'Experienced, Industry-Trained Instructors',
      text: 'Learning AutoCAD from someone who has only taught theory is very different from learning it from someone who has actually drafted for real projects. Our trainers bring hands-on industry experience, which means classroom sessions are filled with practical tips, shortcuts, and real-world problem-solving — not just slide decks.'
    },
    {
      title: 'Placement-Focused Training Approach',
      text: 'techcadd doesn’t just teach AutoCAD and send you off — the entire curriculum is designed with employability in mind. From resume-ready project files to interview preparation and placement assistance, students get support that goes beyond the classroom. This is especially valuable for students in Ludhiana who are competing for design and drafting roles across local firms, consultancies, and manufacturing units.'
    },
    {
      title: 'Flexible Learning for Every Student Type',
      text: 'Whether you’re a 12th-pass student with free mornings, a working professional who needs evening batches, or a graduate preparing for placements, techcadd structures batch timings to fit real schedules — a key reason students from across Ludhiana, from Pakhowal Road to Sarabha Nagar, prefer this **AutoCAD institute in Ludhiana**.'
    },
    {
      title: 'Locally Trusted, Proven Track Record',
      text: 'techcadd has trained hundreds of CAD professionals from Ludhiana and the surrounding Punjab region. That local trust matters — many of our students come through word-of-mouth referrals from past batches now working as draftsmen, CAD engineers, and design executives across the city and beyond.'
    },
    {
      title: 'Certification That Reflects Real Skill',
      text: 'A course is only as valuable as the certificate’s credibility. techcadd’s course completion certification is structured to reflect real, demonstrable skill — something recruiters in Ludhiana’s engineering and design job market can actually assess, rather than a generic participation certificate.'
    },
    {
      title: 'Affordable Fees Without Compromising Quality',
      text: 'Compared to online-only global platforms or big-city institutes, techcadd offers an AutoCAD course in Ludhiana at a fee structure that’s accessible for students and job seekers — without cutting corners on lab access, project practice, or instructor time.'
    },
    {
      title: 'Local Support, Local Understanding',
      text: 'Because techcadd operates directly in Ludhiana, you get in-person doubt-clearing, physical lab access, and an institute that understands the local job market — not a faceless online platform that doesn’t know what Ludhiana’s employers are actually hiring for.'
    }
  ],
  close: 'If your goal is to genuinely become job-ready in AutoCAD — not just “complete a course” — this program is built specifically to get you there, with the structure, mentorship, and local market understanding to back it up.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'autocad-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'When it comes to choosing an **AutoCAD institute in Ludhiana**, the options can feel overwhelming — from large national franchises to small local computer centers. Here’s why techcadd has become a preferred choice for students and job seekers looking for genuine, career-focused AutoCAD training.',
  items: [
    {
      title: 'A Reputation Built on Real Results, Not Just Marketing',
      text: 'techcadd Computer Education has established itself as a leading AutoCAD training institute in Ludhiana by focusing on one thing: outcomes. We’ve trained hundreds of CAD professionals who are now working across civil construction firms, mechanical manufacturing units, architecture studios, and design consultancies — not just in Ludhiana, but across Punjab. That track record is the foundation of our reputation, built batch after batch through genuine skill transfer, not slick advertising.'
    },
    {
      title: 'Industry-Standard Curriculum, Constantly Updated',
      text: 'Software and industry practices evolve — and so does our curriculum. The course is structured around what the industry is actually using right now, covering both 2D drafting fundamentals and advanced 3D modeling techniques. Students don’t learn outdated workflows; they learn the exact tools and techniques currently expected in design offices, construction sites, and manufacturing units across the region.'
    },
    {
      title: 'Experienced Instructors Who’ve Worked in the Field',
      text: 'A major differentiator at techcadd is that our instructors aren’t just software trainers — they bring real industry exposure to the classroom. This means when a student asks “how would this actually work on a live construction site?” or “how do mechanical drafters really use this command?”, the answer comes from genuine field experience, not a textbook.'
    },
    {
      title: 'Comprehensive Hands-On Training Structure',
      text: 'Our AutoCAD classes in Ludhiana run over a well-paced 6-month program that balances theory with extensive hands-on lab practice. Students work on real construction drawings, building plans, machine assemblies, and manufacturing drawings throughout the course — ensuring that by the time you finish, you’ve already handled the kind of files you’ll encounter in your first job.'
    },
    {
      title: 'Strong Placement Support Network',
      text: 'techcadd doesn’t treat placement as an afterthought. Because we’ve been training Ludhiana’s design and drafting workforce for years, we’ve built relationships with local employers, consultancies, and manufacturing companies who look to us when hiring CAD-trained talent. Our placement support includes resume guidance, interview preparation, and direct connections to hiring opportunities in and around Ludhiana.'
    },
    {
      title: 'Dual Civil + Mechanical Advantage',
      text: 'Unlike institutes that force students into a single specialization, techcadd’s program combines Civil and Mechanical AutoCAD training in one comprehensive course. This gives our students far greater career flexibility — a genuine competitive edge when applying for jobs across Ludhiana’s diverse industrial and construction landscape.'
    },
    {
      title: 'Centrally Accessible in Ludhiana',
      text: 'Being locally based means students from across Ludhiana — whether commuting from Model Town, Ferozepur Road, Dugri, or the Focal Point industrial belt — can access in-person classes, live doubt-clearing sessions, and physical lab practice without the limitations of an online-only platform.'
    },
    {
      title: 'Affordable, Transparent Fee Structure',
      text: 'techcadd is committed to keeping quality AutoCAD training accessible for Ludhiana’s students and job seekers, with transparent fees and no hidden costs — because a career-building skill shouldn’t be out of reach.'
    }
  ],
  close: 'Industry-experienced trainers, a dual Civil and Mechanical curriculum, real construction and manufacturing project work, and local placement connections — a more job-focused approach than a general computer training centre can offer.'
}

/* ---------------------------------------------------------------- */

/* The closing pitch, immediately above the enquiry form. */
const ENQUIRE_NOW = {
  id: 'autocad-enquire',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Enquire now',
  title: 'Start your AutoCAD career in Ludhiana',
  lead: 'Ready to become a job-ready CAD professional?',
  items: [
    {
      title: 'What you get',
      text: 'Join Ludhiana’s trusted **AutoCAD training institute** and take the first step toward a career in design, drafting, and engineering. Whether you’re a student, graduate, or working professional, our team is ready to guide you through course details, batch timings, and enrolment.'
    },
    {
      title: 'Before you enrol',
      text: 'The AutoCAD Civil & Mechanical program runs for 6 months, combining theory, hands-on lab practice, and real-world project work across both 2D drafting and 3D modeling. Contact the Ludhiana centre for current batch timings and fees.'
    }
  ]
}

export const AUTOCAD_NARRATIVE = [
  CURRICULUM,
  WHY_THIS_PROGRAMME,
  WHY_TECHCADD,
  ENQUIRE_NOW
]

/* ------------------------------------------------------------------
   UNVERIFIED TESTIMONIALS — CHECK BEFORE THIS PAGE GOES LIVE.

   Same caveat as the cybersecurity, cloud, Linux and ethical hacking
   pages, and for the same reason: full names, home neighbourhoods, and
   named employment outcomes ("got placed within two months", "I now
   work as a junior CAD drafter for a construction firm in Ludhiana",
   "got placed with a local architecture firm within weeks"). If they
   were written as sample copy rather than collected from the students
   named, they must not be published — invented reviews attributed to
   identifiable people, carrying employment claims, mislead prospective
   students and are unlawful in many jurisdictions.

   Confirm each entry against a real, attributable review. Anything
   that cannot be confirmed should be removed — or delete the
   `testimonials` line from the seed in design.js, which makes the page
   fall back to the generic quotes in shared.js.
------------------------------------------------------------------ */
export const AUTOCAD_TESTIMONIALS = [
  {
    quote:
      'I joined techcadd right after my 12th with zero design background. Honestly didn’t even know what a layer was in AutoCAD. Six months later, I was doing actual building layout drawings on my own. The trainers explained everything patiently, and the fact that they cover both civil and mechanical really helped me figure out what I actually enjoy.',
    name: 'Ramanpreet Singh',
    course: 'AutoCAD',
    detail: 'Model Town, Ludhiana',
    rating: 5,
    initials: 'RS'
  },
  {
    quote:
      'Best AutoCAD institute in Ludhiana, no doubt. I’m a diploma holder in Civil and was struggling to get interview calls despite my degree. After completing the course here, I finally understood why — I had zero practical software skills. techcadd fixed that gap completely. Got placed within two months of finishing.',
    name: 'Harpreet Kaur',
    course: 'AutoCAD',
    detail: 'Sarabha Nagar, Ludhiana',
    rating: 5,
    initials: 'HK'
  },
  {
    quote:
      'Solid course structure. I work at a manufacturing unit near Focal Point and wanted to formalize my drafting knowledge. The mechanical section was exactly what I needed — orthographic projections, assembly drawings, everything used in real production. Only reason for 4 stars is I wish evening batch timings were slightly more flexible, but overall very happy.',
    name: 'Gurjot Singh Dhillon',
    course: 'AutoCAD',
    detail: 'Focal Point, Ludhiana',
    rating: 4,
    initials: 'GD'
  },
  {
    quote:
      'I travelled from Chandigarh for this course after a friend recommended it. Was worth every trip. The instructors have real industry experience, which honestly makes such a difference — they don’t just teach commands, they explain how things actually work on a live project.',
    name: 'Simran Kaur',
    course: 'AutoCAD',
    detail: 'Chandigarh',
    rating: 5,
    initials: 'SK'
  },
  {
    quote:
      'B.Tech Mechanical graduate here. Thought my degree alone would be enough for job interviews — I was wrong. Every recruiter asked about AutoCAD proficiency. Enrolled at techcadd and within the program itself started feeling job-ready. Great placement support too, they actually helped with my resume and mock interviews.',
    name: 'Amanpreet Singh',
    course: 'AutoCAD',
    detail: 'Dugri, Ludhiana',
    rating: 5,
    initials: 'AS'
  },
  {
    quote:
      'As someone from a B.Sc background looking to switch careers into design, I was nervous about starting from scratch. The trainers made sure nobody felt left behind. I now work as a junior CAD drafter for a construction firm in Ludhiana. Genuinely life-changing course for someone in my position.',
    name: 'Navjot Kaur',
    course: 'AutoCAD',
    detail: 'Civil Lines, Ludhiana',
    rating: 5,
    initials: 'NK'
  },
  {
    quote:
      'Real construction drawings, real machine assemblies — not just textbook exercises. That’s what separated techcadd from the other institutes I checked out near Ferozepur Road. By the end, I had an actual portfolio to show in interviews instead of just a certificate.',
    name: 'Karanveer Singh',
    course: 'AutoCAD',
    detail: 'Ferozepur Road, Ludhiana',
    rating: 5,
    initials: 'KS'
  },
  {
    quote:
      'Commuted from Zirakpur a few times a week for evening batches. The dual civil + mechanical curriculum is a genuinely smart approach — most institutes make you pick one track early on, but I got to explore both before deciding my career direction. Would recommend to anyone still figuring things out.',
    name: 'Ishika Sharma',
    course: 'AutoCAD',
    detail: 'Zirakpur',
    rating: 4,
    initials: 'IS'
  },
  {
    quote:
      'I run a small contracting business and wanted proper AutoCAD skills instead of relying on others for drawings. This course gave me exactly that — practical, hands-on, no unnecessary theory. Now I make my own site plans and layouts.',
    name: 'Manpreet Singh Brar',
    course: 'AutoCAD',
    detail: 'Dhandari Kalan, Ludhiana',
    rating: 5,
    initials: 'MB'
  },
  {
    quote:
      'Affordable compared to other institutes I researched in Ludhiana, and honestly better quality. Small batch sizes meant the trainer actually had time for each student’s doubts. I completed the course and got placed with a local architecture firm within weeks.',
    name: 'Ravneet Kaur',
    course: 'AutoCAD',
    detail: 'Pakhowal Road, Ludhiana',
    rating: 5,
    initials: 'RK'
  },
  {
    quote:
      'Came from Mohali specifically because of techcadd’s reputation for placement support. Course content is thorough and well-paced over the 6 months. Labs are well-equipped. Would’ve liked a bit more one-on-one time in the 3D modeling sessions, but overall a strong program.',
    name: 'Jaspreet Singh',
    course: 'AutoCAD',
    detail: 'Mohali',
    rating: 4,
    initials: 'JS'
  },
  {
    quote:
      'After BCA, I wasn’t sure what direction to take. A friend suggested AutoCAD as a practical skill, and techcadd came highly recommended locally. Best decision — I now work as a design executive and use these skills daily. The instructors genuinely care about whether you’re understanding the concepts, not just finishing the syllabus.',
    name: 'Komal Rani',
    course: 'AutoCAD',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'KR'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.
------------------------------------------------------------------ */
export const AUTOCAD_FAQS = [
  {
    q: 'Which is the best AutoCAD course in Ludhiana?',
    a: 'techcadd is widely regarded as one of the best **AutoCAD training institutes in Ludhiana**, offering a comprehensive 6-month program covering both Civil and Mechanical AutoCAD, taught by industry-experienced instructors with strong placement support.'
  },
  {
    q: 'What is the duration of the AutoCAD course at techcadd Ludhiana?',
    a: 'The AutoCAD Civil & Mechanical program at techcadd runs for **6 months**, combining theory, hands-on lab practice, and real-world project work covering both 2D drafting and 3D modeling.'
  },
  {
    q: 'Who can join the AutoCAD course in Ludhiana at techcadd?',
    a: 'Anyone who has completed 10+2 (any stream) can join — including 12th pass students, diploma holders, B.Tech/B.E. graduates, architecture students, job seekers, working professionals, and career switchers. No prior design experience is required.'
  },
  {
    q: 'Does techcadd offer both Civil and Mechanical AutoCAD training?',
    a: 'Yes. The course covers both Civil and Mechanical specializations in a single program, giving students the flexibility to explore construction, architecture, and manufacturing career paths without enrolling separately.'
  },
  {
    q: 'Is prior computer or design knowledge required to join this course?',
    a: 'No prior design experience is necessary. Basic computer familiarity (typing, file handling) is helpful but not mandatory — the course starts from the fundamentals and builds up progressively.'
  },
  {
    q: 'Does techcadd provide placement assistance after the AutoCAD course?',
    a: 'Yes, techcadd offers dedicated placement support including resume guidance, interview preparation, and connections to local employers, construction firms, and manufacturing units across Ludhiana.'
  },
  {
    q: 'What software tools and skills will I learn in this AutoCAD course?',
    a: 'Students learn 2D drafting, 3D modeling, dimensioning, layer management, block libraries, plotting setup, and file format handling (**DWG**/**DXF**), along with civil applications (floor plans, site plans, elevations) and mechanical applications (machine parts, assembly drawings, orthographic projections).'
  },
  {
    q: 'Is the AutoCAD course at techcadd suitable for complete beginners?',
    a: 'Yes. The course is structured to take students from zero design background to job-ready proficiency, starting with basic interface navigation before progressing to advanced 2D and 3D work.'
  },
  {
    q: 'How is techcadd different from other AutoCAD institutes in Ludhiana?',
    a: 'techcadd combines industry-experienced trainers, a dual Civil + Mechanical curriculum, real construction and manufacturing project work, and strong local placement connections — offering a more job-focused approach compared to many general computer training centers in Ludhiana.'
  },
  {
    q: 'What career opportunities are available after completing this AutoCAD course?',
    a: 'Graduates can pursue roles such as CAD drafter, junior design engineer, civil drafting assistant, mechanical design assistant, architecture support staff, or freelance drafting work — across Ludhiana’s construction, manufacturing, and design sectors.'
  },
  {
    q: 'Where is the techcadd AutoCAD training centre located in Ludhiana?',
    a: 'techcadd’s AutoCAD training centre is based in Ludhiana and is accessible to students commuting from areas including Model Town, Sarabha Nagar, Ferozepur Road, Dugri, Pakhowal Road, and the Focal Point industrial belt.'
  },
  {
    q: 'Are class timings flexible for working professionals and students?',
    a: 'Yes, techcadd offers batch timings designed to accommodate both students with morning availability and working professionals who need evening batches.'
  }
]
