/* ==================================================================
   Long-form copy for the SolidWorks course page.

   Split out of design.js for the same reason as the others — that
   file seeds four courses, and this is one course's editorial
   content. See ./autocad-copy.js, which sits beside it.

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

export const SOLIDWORKS_OVERVIEW = {
  title: 'The SolidWorks course in Ludhiana built for the shop floor',
  lead: 'Looking for the best **SolidWorks course in Ludhiana** to build a career in mechanical design, product development, or manufacturing? techcadd offers a job-focused SolidWorks training program designed for engineering students, diploma holders, and working professionals across Ludhiana and the wider Punjab region.',
  body: [
    'This course takes you from core sketching and part modeling to advanced assemblies, sheet metal design, surfacing, and simulation — using real industry projects, not just theory. Whether you’re a mechanical engineering graduate from GNE, PAU, or the GZS PTU campus, or a diploma holder aiming for a design engineer role in Ludhiana’s manufacturing and machine tool industry, this program is structured to make you job-ready.',
    'At techcadd, training is delivered by certified professionals with hands-on manufacturing experience, in small batches that ensure personal attention. Students also get **CSWA**/**CSWP** exam guidance, portfolio-building support, and placement assistance with local design and manufacturing companies.',
    'If you’re serious about a career in CAD and mechanical design, this **SolidWorks training in Ludhiana** gives you the practical skills employers actually look for.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const SOLIDWORKS_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do the SolidWorks course in Ludhiana',
  lead: 'One of the biggest advantages of choosing a **SolidWorks course in Ludhiana** at techcadd is that it’s built for a wide range of learners — you don’t need to already be a CAD expert or come from a specific academic background to get started. If you have an interest in mechanical design, product development, or manufacturing, and you’re willing to put in consistent practice, this course is designed to take you from the basics to an industry-ready skill level.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students (Science Stream)',
      text: 'If you’ve just finished your 12th with Physics, Chemistry, and Maths and you’re exploring career options in engineering design, this course is an excellent head start. Learning SolidWorks early gives you a practical, hands-on skill that complements whatever engineering degree or diploma path you choose next — and it looks strong on a resume even before you graduate.',
      tag: 'Head start'
    },
    {
      icon: 'stack',
      title: 'Diploma Holders (Mechanical, Automobile, Production, Tool & Die)',
      text: 'Diploma students from polytechnics across Ludhiana and Punjab are some of the best-fit candidates for this course. Diploma programs often cover design theory but don’t always provide deep, hands-on software training. This course fills that exact gap, making diploma holders far more competitive for design engineer, CAD drafter, and CNC programming roles in Ludhiana’s manufacturing hubs.',
      tag: 'Close the gap'
    },
    {
      icon: 'career',
      title: 'B.Tech / B.E. Mechanical Students & Graduates',
      text: 'Whether you’re currently pursuing your degree or have already graduated, mechanical engineering students consistently find that classroom knowledge alone isn’t enough for today’s job market. Recruiters across Ludhiana’s machine tool, auto parts, and industrial equipment sectors actively look for candidates who can demonstrate real SolidWorks proficiency — not just theoretical CAD knowledge. This course helps you build a project portfolio that proves your capability in interviews.',
      tag: 'Proof, not theory'
    },
    {
      icon: 'server',
      title: 'Working Professionals Looking to Upskill',
      text: 'If you’re already working in a design, production, or quality role and want to move into a full-fledged design engineer position, SolidWorks is often the missing technical skill. Many working professionals join this course on weekends or in flexible batches to upgrade their CAD capabilities without pausing their job.',
      tag: 'Weekend batches'
    },
    {
      icon: 'spark',
      title: 'Job Seekers Targeting Design & Manufacturing Roles',
      text: 'Ludhiana has a dense concentration of manufacturing, machine tool, auto-parts, and industrial equipment companies — and nearly all of them rely on SolidWorks or similar 3D CAD tools for product design and documentation. If you’re actively job hunting and want a skill that directly increases your employability in this local industry, this course is a direct, practical investment.',
      tag: 'Local demand'
    },
    {
      icon: 'chart',
      title: 'Entrepreneurs & Small Manufacturers',
      text: 'Some students join not for a job, but because they run or plan to run a small manufacturing or fabrication business. Being able to design and modify your own products in SolidWorks — instead of depending entirely on outsourced CAD work — saves time, money, and gives you more control over your own product development process.',
      tag: 'Design in-house'
    }
  ],
  note: 'No prior CAD experience is required. The course starts from complete fundamentals, including basic sketching, so basic engineering knowledge and computer familiarity are enough to get started.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'sw-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn in the SolidWorks course',
  lead: 'This **SolidWorks course in Ludhiana** is structured to take you from complete fundamentals to advanced, job-ready CAD skills. Every module is built around real design and manufacturing scenarios, so you’re not just learning commands — you’re learning how to think through a design problem the way a professional design engineer would.',
  items: [
    {
      title: 'Sketching Fundamentals',
      text: 'You’ll start with 2D sketching — lines, arcs, constraints, dimensioning, and sketch relations. This is the foundation every 3D model is built on, and getting it right early makes every advanced module that follows much easier to grasp.'
    },
    {
      title: 'Part Modeling',
      text: 'Next, you’ll move into solid part modeling using features like extrude, revolve, sweep, loft, fillets, chamfers, shells, and patterns. By the end of this module, you’ll be able to model real mechanical components from scratch, based on engineering drawings or design requirements.'
    },
    {
      title: 'Assembly Design',
      text: 'You’ll learn how individual parts come together into functional assemblies — using mates, sub-assemblies, exploded views, and interference detection. This module reflects how real products are actually designed: not as isolated parts, but as systems that need to fit and function together.'
    },
    {
      title: 'Sheet Metal Design',
      text: 'Given Ludhiana’s strong manufacturing and fabrication base, sheet metal design is a key module — covering flat patterns, bends, flanges, and forming tools used heavily in local industries producing enclosures, brackets, and fabricated components.'
    },
    {
      title: 'Surface Modeling',
      text: 'For more complex or organic shapes that basic solid modeling can’t handle, you’ll learn surfacing techniques — a skill that sets you apart when working on product design or consumer goods with non-standard geometry.'
    },
    {
      title: 'Engineering Drawings & GD&T',
      text: 'You’ll learn to convert 3D models into detailed 2D manufacturing drawings, including dimensioning, tolerancing, and basic **GD&T** (Geometric Dimensioning and Tolerancing) — the exact documentation manufacturing teams rely on to produce parts correctly.'
    },
    {
      title: 'Simulation Basics',
      text: 'The course introduces simulation and analysis tools within SolidWorks, giving you a foundational understanding of how designs are tested for stress, strength, and performance before manufacturing — a valuable skill for design validation roles.'
    },
    {
      title: 'Rendering & Visualization',
      text: 'You’ll also learn to create realistic renders of your designs — useful for presentations, client approvals, and portfolio building when you’re applying for jobs.'
    },
    {
      title: 'Capstone Project',
      text: 'Everything comes together in a capstone project, where you design a complete mechanical product from concept to manufacturing-ready documentation — the single strongest piece of proof you can show an employer that you’re capable of real design work.'
    }
  ],
  tools: {
    label: 'Tools and modules covered',
    items: [
      'Sketch & Part Modeling',
      'Assembly',
      'Sheet Metal',
      'Surfacing',
      'Drawing (2D documentation)',
      'Simulation (basic)',
      'Visualize / Rendering',
      'CSWA exam-aligned practice'
    ]
  },
  close: 'By the end of the course, you won’t just know how to “use” SolidWorks — you’ll be able to take a design from a rough idea to a fully documented, manufacturing-ready product, which is exactly the skill set Ludhiana’s design and manufacturing employers are hiring for.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'sw-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this SolidWorks program is right for you',
  lead: 'Ludhiana is home to one of North India’s largest concentrations of manufacturing, machine tool, auto-parts, and light engineering industries. That local reality shapes why this program is designed the way it is — not as a generic software course, but as a career-focused program built around what Ludhiana’s design and manufacturing employers actually expect from new hires.',
  items: [
    {
      title: 'Built Around Real Industry Workflows',
      text: 'Instead of teaching SolidWorks as an isolated set of tools and commands, this program is structured around real product design workflows — from initial sketching and part modeling through to assemblies, sheet metal design, and manufacturing-ready drawings. You won’t just learn “how to use a feature” — you’ll learn how that feature fits into an actual design-to-manufacturing process, which is exactly what hiring managers in Ludhiana’s machine tool and auto-component sector look for.'
    },
    {
      title: 'Certification-Focused Structure',
      text: 'The course is structured to align with the **CSWA** (Certified SolidWorks Associate) exam, giving you a globally recognized certification alongside your practical training. For students competing in a crowded job market, having a certification that validates your skills — not just a completion certificate — makes a real difference at the interview stage.'
    },
    {
      title: 'Small Batch Sizes, Real Attention',
      text: 'Unlike large, one-size-fits-all coaching setups, this program is run in small batches so instructors can actually track your progress, correct your modeling mistakes, and guide you through your capstone project individually. If you’ve ever sat in a large class and felt lost trying to keep pace, this structure is specifically meant to avoid that problem.'
    },
    {
      title: 'Learn From Practitioners, Not Just Trainers',
      text: 'Instruction comes from professionals with real-world product design and manufacturing experience — not just people reading through a fixed syllabus. That means you get practical insights on design standards, tolerancing, and manufacturing constraints that you simply won’t find in a textbook-only class.'
    },
    {
      title: 'Portfolio & Interview Readiness Built In',
      text: 'By the end of the program, you won’t just have a certificate — you’ll have a portfolio of completed design projects, assemblies, and manufacturing documentation that you can show directly to employers. Combined with resume-building and interview preparation support, this program is built to get you from “I learned SolidWorks” to “I’m ready to be hired as a design engineer.”'
    },
    {
      title: 'Local Placement Connections',
      text: 'Because the program is based in Ludhiana, training and placement support are aligned with the companies actually hiring here — manufacturing units, design consultancies, and auto-component businesses across the region — rather than a generic national placement list that has little relevance to your local job search.'
    },
    {
      title: 'A Practical Investment, Not Just a Course',
      text: 'Whether your goal is a design engineer job, a CNC/CAM programming role, better prospects in your current position, or the ability to design your own products as an entrepreneur, this program is built to deliver a skill you can immediately put to use — not just a certificate to file away.'
    }
  ],
  close: 'The programme is shaped by the city it sits in: what Ludhiana’s machine tool, auto-component and fabrication employers hire for is what the course spends its time on.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'sw-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'With multiple institutes across Ludhiana offering CAD training, choosing the right one can feel overwhelming. Here’s what genuinely sets techcadd apart when it comes to **SolidWorks training** — and why it consistently comes up as a top choice for students searching for a serious, career-focused program.',
  items: [
    {
      title: 'A Training Institute Built Around Design and CAD',
      text: 'techcadd has built its reputation specifically around design and CAD training, with certified instructors, an industry-aligned curriculum, and a track record of training mechanical designers and engineers. This isn’t a generic computer institute that added SolidWorks as an afterthought — CAD and mechanical design training is a core focus.'
    },
    {
      title: 'Certified, Experienced Instructors (CSWA/CSWP)',
      text: 'You learn directly from **CSWA**/**CSWP** certified professionals who bring real-world product design and manufacturing experience into the classroom. That means the guidance you get goes beyond “how to use the software” — you learn how design decisions actually play out on the shop floor and in manufacturing documentation.'
    },
    {
      title: 'Comprehensive, Industry-Aligned Curriculum',
      text: 'The course covers the full spectrum of SolidWorks skills — from basic sketching and part modeling to advanced surface modeling, complex assemblies, sheet metal design, and simulation. Nothing is skipped, and the sequence is designed to build your competence step by step, so you’re never thrown into advanced topics without a solid foundation.'
    },
    {
      title: 'Training on Current SolidWorks Versions',
      text: 'techcadd trains students on recent SolidWorks releases across all modules, so the skills you learn transfer directly to what companies are using today rather than leaving you to re-learn tools on the job.'
    },
    {
      title: 'Small Batches, Personal Attention',
      text: 'Class sizes are kept small so instructors can give every student real, individual attention. Complex modeling concepts, capstone projects, and one-on-one doubt-clearing are all part of the learning experience — not left for students to figure out alone.'
    },
    {
      title: 'Real Projects, Not Just Practice Files',
      text: 'Students work on real mechanical assemblies and create complete manufacturing documentation as part of the course — the same kind of work you’d be expected to do in an actual design engineer role. This hands-on, project-based approach is what prepares you for real industry work, not just software familiarity.'
    },
    {
      title: 'Certification Guidance Built In',
      text: 'Training is structured to align with the CSWA exam, complete with practice tests and exam guidance — so certification isn’t an afterthought, it’s part of the plan from day one.'
    },
    {
      title: 'Career & Placement Support',
      text: 'Beyond technical training, techcadd supports students with portfolio development, resume building, interview preparation, and connections with manufacturing and design companies — turning your SolidWorks skills into an actual job opportunity in Ludhiana’s design and manufacturing sector.'
    },
    {
      title: 'Thousands of Students Trained',
      text: 'techcadd has trained thousands of mechanical designers and engineers over the years, giving it a track record built batch after batch rather than through advertising.'
    }
  ],
  close: 'CAD as a core focus rather than a side offering, certified practitioners teaching it, small batches, and real project work — that combination is what students compare when they shortlist institutes here.'
}

/* ---------------------------------------------------------------- */

/* The closing pitch, immediately above the enquiry form. */
const START_HERE = {
  id: 'sw-start',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Get started',
  title: 'Start your SolidWorks career journey in Ludhiana',
  lead: 'Ready to turn your interest in mechanical design into a real, job-ready skill?',
  items: [
    {
      title: 'Take the first step',
      text: 'Get in touch with techcadd and take the first step toward becoming a certified SolidWorks professional — right here in Ludhiana.'
    },
    {
      title: 'What the call covers',
      text: 'Our counsellors will walk you through the syllabus, batch timings, fee structure, and placement support so you can make an informed decision — no pressure, just clarity.'
    },
    {
      title: 'Before you enrol',
      text: 'The course typically runs over 6 months, covering everything from sketching and part modeling to assemblies, sheet metal design, surfacing, and simulation. Training is primarily in-person at the Ludhiana centre; confirm current online or hybrid availability with the centre.'
    }
  ]
}

export const SOLIDWORKS_NARRATIVE = [
  CURRICULUM,
  WHY_THIS_PROGRAMME,
  WHY_TECHCADD,
  START_HERE
]

/* ------------------------------------------------------------------
   UNVERIFIED TESTIMONIALS — CHECK BEFORE THIS PAGE GOES LIVE.

   Same caveat as the other pages carrying supplied reviews, and for
   the same reason: full names, named institutions (GNE, PTU), and
   named employment outcomes ("got a design engineer offer before I
   even finished my degree", "moved into a CAM programming role", "got
   placed in a Ludhiana-based auto components company"). If they were
   written as sample copy rather than collected from the students
   named, they must not be published — invented reviews attributed to
   identifiable people, carrying employment claims, mislead
   prospective students and are unlawful in many jurisdictions.

   Naming the colleges raises the stakes rather than lowering them: a
   quote that identifies a person by name AND institution is checkable
   by anyone who cares to.

   Confirm each entry against a real, attributable review. Anything
   that cannot be confirmed should be removed — or delete the
   `testimonials` line from the seed in design.js, which makes the page
   fall back to the generic quotes in shared.js.
------------------------------------------------------------------ */
export const SOLIDWORKS_TESTIMONIALS = [
  {
    quote:
      'I joined techcadd right after my 6th semester to get a head start before placements. The way they taught assemblies and sheet metal design was very practical — not just theory. I used my capstone project in almost every interview I gave in Ludhiana. Ended up getting a design engineer offer before I even finished my degree.',
    name: 'Rohit Sharma',
    course: 'SolidWorks',
    detail: 'B.Tech Mechanical, GNE Ludhiana',
    rating: 5,
    initials: 'RS'
  },
  {
    quote:
      'Coming from a diploma background, I was worried I wouldn’t keep up with degree students in the batch. But the trainers explained everything step by step, and the small batch size meant I could ask doubts without hesitation. My sheet metal module skills directly helped me get a job in a fabrication unit near Gill Road.',
    name: 'Simranjeet Kaur',
    course: 'SolidWorks',
    detail: 'Diploma, Mechanical Engineering',
    rating: 5,
    initials: 'SK'
  },
  {
    quote:
      'I was working in a machine shop for 3 years but wanted to move into design. Joined the weekend batch at techcadd. Honestly the CSWA-focused training gave me the confidence to actually clear the certification, and I recently moved into a CAM programming role.',
    name: 'Gurpreet Singh',
    course: 'SolidWorks',
    detail: 'Working professional, CNC operator',
    rating: 5,
    initials: 'GS'
  },
  {
    quote:
      'Travelled from Chandigarh a few times a week for this course because I heard techcadd has one of the better SolidWorks setups in the region. The surfacing module especially was taught really well — better than what I saw in some Chandigarh institutes.',
    name: 'Anmol Verma',
    course: 'SolidWorks',
    detail: 'B.E. Mechanical, Chandigarh',
    rating: 4,
    initials: 'AV'
  },
  {
    quote:
      'I joined right after 12th just to explore mechanical design before choosing my engineering stream. Didn’t expect to enjoy it this much honestly. The instructors were patient with beginners like me who had zero CAD background.',
    name: 'Harleen Kaur',
    course: 'SolidWorks',
    detail: '12th pass (PCM)',
    rating: 5,
    initials: 'HK'
  },
  {
    quote:
      'Ludhiana has a lot of small institutes claiming to teach SolidWorks, but most just show you the software. techcadd actually made us work on real assemblies and manufacturing drawings. That difference showed up clearly when I went for interviews in local machine tool companies.',
    name: 'Deepak Bansal',
    course: 'SolidWorks',
    detail: 'Diploma, Tool & Die',
    rating: 5,
    initials: 'DB'
  },
  {
    quote:
      'Good structured course. Simulation module was a bit fast for me personally, but the trainers gave extra time when I asked. Placement support helped me get interview calls with two design firms in Ludhiana.',
    name: 'Ramanpreet Singh',
    course: 'SolidWorks',
    detail: 'B.Tech Mechanical, PTU',
    rating: 4,
    initials: 'RP'
  },
  {
    quote:
      'I came from a non-technical background and wanted to switch into CAD design. Was honestly nervous joining, but the fundamentals module built my confidence from zero. Now working as a junior design associate.',
    name: 'Navjot Kaur',
    course: 'SolidWorks',
    detail: 'Graduate, career switcher',
    rating: 5,
    initials: 'NK'
  },
  {
    quote:
      'The instructors have actual industry experience, you can tell from how they explain design constraints — not just software steps. Learned things about manufacturing tolerances I never got in my diploma classes.',
    name: 'Karanveer Singh',
    course: 'SolidWorks',
    detail: 'Diploma, Automobile Engineering',
    rating: 5,
    initials: 'KS'
  },
  {
    quote:
      'Best decision before campus placements. My portfolio from the capstone project became the main talking point in every interview. Got placed in a Ludhiana-based auto components company right after the course.',
    name: 'Ishaan Mehta',
    course: 'SolidWorks',
    detail: 'B.Tech Mechanical',
    rating: 5,
    initials: 'IM'
  },
  {
    quote:
      'Balancing job and classes was hard but the batch timing flexibility at techcadd made it manageable. Learned sheet metal and assembly design which I use daily in my current design role now.',
    name: 'Prabhjot Kaur',
    course: 'SolidWorks',
    detail: 'Working professional',
    rating: 4,
    initials: 'PK'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.
------------------------------------------------------------------ */
export const SOLIDWORKS_FAQS = [
  {
    q: 'Which is the best institute for a SolidWorks course in Ludhiana?',
    a: 'techcadd is one of Ludhiana’s leading **SolidWorks training institutes**, offering certified instructors, an industry-aligned curriculum, small batch sizes, and placement support with local manufacturing and design companies.'
  },
  {
    q: 'Do I need prior CAD experience to join this SolidWorks course?',
    a: 'No. The course starts from complete fundamentals, including basic sketching, so students with zero prior CAD experience can join. Basic engineering knowledge and computer familiarity are enough to get started.'
  },
  {
    q: 'What is the duration of the SolidWorks course at techcadd Ludhiana?',
    a: 'The SolidWorks course typically runs over **6 months**, covering everything from sketching and part modeling to assemblies, sheet metal design, surfacing, and simulation.'
  },
  {
    q: 'Is this course helpful for CSWA certification?',
    a: 'Yes. The training is structured to align with the **CSWA** (Certified SolidWorks Associate) exam, including practice tests and exam guidance, so you can pursue globally recognized certification alongside your practical training.'
  },
  {
    q: 'Who can join this SolidWorks course in Ludhiana?',
    a: '12th pass students (PCM stream), diploma holders in Mechanical, Automobile or Tool & Die, B.Tech/B.E. mechanical students and graduates, working professionals, job seekers, and small manufacturers or entrepreneurs can all join this course.'
  },
  {
    q: 'Which SolidWorks version will I learn?',
    a: 'Training is conducted on recent SolidWorks releases, so the skills you learn are directly applicable to what companies currently use. Confirm the exact version running in the current batch with the centre.'
  },
  {
    q: 'Does techcadd provide placement assistance after the SolidWorks course?',
    a: 'Yes. techcadd offers portfolio development, resume building, interview preparation, and connections with manufacturing and design companies in and around Ludhiana.'
  },
  {
    q: 'What topics are covered in the SolidWorks course?',
    a: 'The course covers sketching, part modeling, assembly design, sheet metal design, surface modeling, engineering drawings with **GD&T**, basic simulation, rendering, and a capstone project.'
  },
  {
    q: 'Is this SolidWorks course suitable for working professionals?',
    a: 'Yes. Flexible batch timings, including weekend options, are available for working professionals who want to upskill without pausing their job.'
  },
  {
    q: 'How is techcadd different from other SolidWorks institutes in Ludhiana?',
    a: 'techcadd focuses specifically on CAD and mechanical design training rather than treating it as a side offering. Training is delivered by CSWA/CSWP certified professionals with real manufacturing experience, in small batches with real project-based learning.'
  },
  {
    q: 'What kind of jobs can I get after this SolidWorks course?',
    a: 'Graduates commonly move into roles such as design engineer, CAD drafter, CNC/CAM programmer, and junior design associate, particularly within Ludhiana’s manufacturing, machine tool, and auto-component industries.'
  },
  {
    q: 'Are classes held offline in Ludhiana, or also available online?',
    a: 'techcadd primarily offers in-person, hands-on training at its Ludhiana centre, which allows for direct instructor guidance during modeling and project work. Confirm current online or hybrid availability with the centre.'
  }
]
