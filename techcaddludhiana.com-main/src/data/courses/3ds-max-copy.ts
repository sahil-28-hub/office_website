/* ==================================================================
   Long-form copy for the 3ds Max course page.

   Split out of design.js for the same reason as the others — that
   file seeds four courses, and this is one course's editorial
   content. See ./autocad-copy.js and ./solidworks-copy.js, which sit
   beside it.

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

export const MAX_OVERVIEW = {
  title: 'The 3ds Max course in Ludhiana that ends in a render reel',
  lead: 'Looking for the best **3Ds Max course in Ludhiana**? techcadd offers a career-focused, hands-on 3Ds Max training program designed for students, architects, interior designers, and creative professionals who want to master 3D modeling, texturing, lighting, and photorealistic rendering. Whether you’re aiming to build a career in architectural visualization, interior design rendering, product modeling, or animation, this course equips you with real industry skills using 3Ds Max along with rendering engines like **V-Ray**.',
  body: [
    'This program is ideal for 12th pass students, graduates, architecture and interior design aspirants, and job seekers across Ludhiana and nearby areas like Model Town, Pakhowal Road, and Chandigarh Road who want practical, portfolio-ready training rather than just theory. With experienced trainers, live projects, and placement support, techcadd has positioned itself as one of the go-to institutes for **3D Max training in Ludhiana**.',
    'In the sections below you’ll find who this course is for, why techcadd stands out, what you’ll learn, student reviews, and the questions people ask before they enrol.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const MAX_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this 3Ds Max course in Ludhiana',
  lead: 'One of the biggest advantages of the **3Ds Max course in Ludhiana** at techcadd is its flexibility — it’s designed to welcome learners from a wide range of academic and professional backgrounds. Whether you’ve just finished school or you’re already working and looking to upskill, this course is structured to meet you where you are.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students (Any Stream)',
      text: 'If you’ve just completed your 12th grade — whether from the Science, Commerce, or Arts stream — you can confidently enrol in this course. You don’t need a technical or design background to get started. The training begins with the fundamentals of 3D modeling, interface navigation, and basic design principles before moving into advanced tools. Many students from schools across Ludhiana, Model Town, Sarabha Nagar, and Dugri join right after their 12th to build an early, in-demand skill set instead of waiting until after graduation.',
      tag: 'Any stream'
    },
    {
      icon: 'career',
      title: 'Graduates Looking for Skill-Based Careers',
      text: 'B.Arch, B.Des, Fine Arts, and even B.Tech graduates often find that their degree alone isn’t enough to land a strong design or visualization job. If you’re a graduate in Ludhiana searching for a practical, high-employability course, 3Ds Max training bridges that gap. It adds a powerful, industry-recognized software skill to your resume — one that recruiters in architecture firms, interior design studios, and animation companies actively look for.',
      tag: 'Bridge the gap'
    },
    {
      icon: 'spark',
      title: 'Architecture and Interior Design Students',
      text: 'This is one of the most natural fits. Architecture and interior design students in Ludhiana who want to visualize their designs in photorealistic 3D — rather than just flat 2D drawings — benefit massively from learning 3Ds Max alongside V-Ray rendering. If you’re currently studying at an architecture college in or around Ludhiana and want to strengthen your portfolio with realistic renders, walkthroughs, and interior visualizations, this course is built exactly for that need.',
      tag: 'The natural fit'
    },
    {
      icon: 'stack',
      title: 'Diploma and ITI Holders',
      text: 'Students who’ve completed a diploma in architecture, civil engineering, interior design, or multimedia — even from polytechnic or ITI institutes in Ludhiana — can use this course to specialize further. A diploma gives you the technical foundation; 3Ds Max training gives you the creative visualization skillset employers want to see demonstrated through an actual portfolio.',
      tag: 'Specialise further'
    },
    {
      icon: 'terminal',
      title: 'Working Professionals & Freelancers',
      text: 'Ludhiana has a growing base of freelance interior designers, architects, and real estate professionals who need to present their designs more convincingly to clients. If you’re already working but want to add 3D visualization to your service offerings — or move from manual sketching to digital rendering — flexible batch timings make it possible to learn without quitting your current job.',
      tag: 'Flexible batches'
    },
    {
      icon: 'support',
      title: 'Job Seekers Targeting Design & Animation Roles',
      text: 'If you’re actively job hunting in Ludhiana’s growing design, real estate, and media sectors, employers are increasingly asking for demonstrable 3D skills. This course helps job seekers build a portfolio that speaks louder than a resume.',
      tag: 'Show, don’t tell'
    }
  ],
  note: 'No prior design experience is required for the beginner-friendly track. The course starts from the 3Ds Max interface and modeling basics, so students with zero experience in design software can follow along and progress to advanced rendering.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'max-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn in the 3Ds Max course',
  lead: 'This course is structured to take you from complete beginner to job-ready, covering both the software itself and the design thinking behind professional 3D visualization.',
  items: [
    {
      title: '3Ds Max Interface & Fundamentals',
      text: 'You’ll start with the essentials — understanding the 3Ds Max workspace, viewport navigation, object properties, and the modifier stack. This foundation ensures you’re comfortable working efficiently in the software before moving into more complex modeling tasks.'
    },
    {
      title: '3D Modeling Techniques',
      text: 'You’ll learn multiple modeling approaches: primitive-based modeling for basic shapes and structures; polygon modeling for detailed custom objects like furniture and architectural elements; spline-based modeling for curved and profile-based objects such as mouldings, railings and decorative elements; and editable poly workflows used extensively in interior and architectural visualization. These techniques form the backbone of building anything from a simple room layout to a fully detailed architectural exterior.'
    },
    {
      title: 'Architectural & Interior Visualization',
      text: 'A major focus of the course is applying 3Ds Max specifically to architecture and interior design — building room layouts, furniture placement, false ceilings, modular kitchens, and full interior scenes that reflect real client project briefs commonly seen in Ludhiana’s design and real estate market.'
    },
    {
      title: 'Materials & Texturing',
      text: 'You’ll learn how to apply and customize materials — wood, glass, metal, fabric, marble, and more — using the Slate Material Editor. This includes UV mapping basics so textures wrap correctly onto complex surfaces, a critical skill for achieving realistic, client-ready visuals.'
    },
    {
      title: 'Lighting Techniques',
      text: 'Lighting is what makes or breaks a render. You’ll cover standard and photometric lighting setups; interior lighting combining artificial and natural light simulation; exterior and architectural lighting including sun and sky systems; and mood and time-of-day lighting for presentation renders.'
    },
    {
      title: 'V-Ray Rendering',
      text: 'Since most professional studios in Ludhiana and beyond use **V-Ray** alongside 3Ds Max, the course covers V-Ray render settings and optimization; V-Ray materials for glass, reflective surfaces and glossy finishes; V-Ray lighting including HDRI, sun and dome lights; and producing photorealistic final renders suitable for client presentations.'
    },
    {
      title: 'Camera Setup & Composition',
      text: 'You’ll learn how to set up cameras for architectural walkthroughs, interior shots, and product visualization — including framing, depth of field, and the composition principles that make a render look professional rather than amateurish.'
    },
    {
      title: 'Rendering Output & Post-Production Basics',
      text: 'Beyond just hitting “render”, you’ll learn how to optimize render settings for quality versus speed, export high-resolution outputs, and apply basic post-processing touch-ups to polish final images.'
    },
    {
      title: 'Animation & Walkthrough Basics',
      text: 'For students interested in architectural walkthroughs or product animation, the course introduces basic animation concepts — camera path animation and simple object animation — giving you a foundation to build on if you want to specialize further later.'
    },
    {
      title: 'Industry Workflow & Project Management',
      text: 'Beyond individual tools, you’ll learn how professional projects are actually structured — organizing scenes, managing file sizes, working with layers, and preparing deliverables the way a real studio or freelance client would expect.'
    }
  ],
  tools: {
    label: 'Tools and software covered',
    items: [
      '3Ds Max',
      'V-Ray',
      'Slate Material Editor',
      'HDRI & sky systems',
      'AutoCAD workflows (supplementary)'
    ]
  },
  close: 'By the end of the course, you won’t just know how to use 3Ds Max — you’ll have a practical, portfolio-ready understanding of how to take a design from a blank scene to a polished, client-ready photorealistic render.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'max-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'With so many institutes across Ludhiana offering 3D courses, why should this specific **3Ds Max program** be the one you commit your time and money to? Here’s what makes it genuinely worth it for students and professionals in Ludhiana.',
  items: [
    {
      title: 'Industry-Relevant Curriculum, Not Just Software Basics',
      text: 'A lot of “3D courses” in Ludhiana teach you where the buttons are and stop there. This program goes further — it’s structured around real industry workflows: architectural modeling, interior scene creation, material and texture mapping, lighting setups, camera composition, and final photorealistic rendering using V-Ray. You’re not just learning software; you’re learning how working designers actually use it on live projects.'
    },
    {
      title: 'Built for Ludhiana’s Local Job Market',
      text: 'Ludhiana has a strong base of real estate developers, interior design studios, architecture firms, and furniture and export businesses that increasingly need 3D visualization for client presentations and marketing. This program is shaped with that local demand in mind, so what you learn maps directly to the kind of work available in and around the city — not a generic curriculum copied from elsewhere.'
    },
    {
      title: 'Portfolio-First Approach',
      text: 'Employers and clients don’t hire based on certificates alone — they hire based on what you can show them. Throughout the course, you’ll work on real, portfolio-ready projects: interior walkthroughs, architectural exteriors, product renders, and more. By the time you finish, you’ll have actual work samples to present, not just a completion certificate.'
    },
    {
      title: 'Hands-On, Project-Based Learning',
      text: 'Instead of long, passive lecture sessions, the training is built around practical, project-based learning. You model, texture, light, and render — repeatedly — until the workflow becomes second nature. This hands-on method is especially valuable for students who learn better by doing than by watching.'
    },
    {
      title: 'Flexible for Every Kind of Learner',
      text: 'Whether you’re a student with a packed college schedule, a graduate job-hunting full-time, or a working professional squeezing in learning after hours, the program is designed with flexible batch timings so you don’t have to choose between learning and your existing commitments.'
    },
    {
      title: 'A Genuine Stepping Stone to Multiple Careers',
      text: '3Ds Max isn’t a one-track skill. Depending on where you want to go, this program can open doors into architectural visualization, interior design rendering, real estate marketing content, product visualization, VFX, or even game asset creation. That versatility makes it a smart investment even if you are not yet certain which specific direction you want your career to take.'
    },
    {
      title: 'Local Support, Real Guidance',
      text: 'Learning close to home in Ludhiana means you get consistent, in-person mentorship, doubt-clearing sessions, and guidance tailored to your pace — something online-only courses often can’t match. For students who want structured accountability rather than self-paced isolation, that local, in-person element makes a real difference in completion rates and actual skill retention.'
    }
  ],
  close: 'Visualisation is a portfolio trade. The programme is built around that fact: what you leave with is work you can show, not a syllabus you finished.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'max-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'With dozens of institutes across Ludhiana claiming to teach 3D design software, choosing the right one can feel overwhelming. Here’s why techcadd stands out as a trusted name for **3Ds Max training in Ludhiana**.',
  items: [
    {
      title: 'Focused Specialization in Design & CAD Software',
      text: 'techcadd isn’t a generic computer institute that added 3Ds Max as an afterthought — design and CAD software training is a core focus. This specialization means the curriculum, trainers, and lab infrastructure are all built specifically around software like 3Ds Max, AutoCAD, and related design tools, rather than being a small add-on to unrelated courses.'
    },
    {
      title: 'Experienced, Industry-Aware Trainers',
      text: 'Learning software from someone who’s only ever taught theory is very different from learning from a trainer who understands how studios and firms in Ludhiana actually use 3Ds Max day-to-day. techcadd’s trainers bring practical, workflow-based teaching — covering not just tool functions, but how professionals structure projects, manage scenes, and deliver client-ready renders efficiently.'
    },
    {
      title: 'Hands-On Lab Infrastructure',
      text: '3D modeling and rendering are resource-intensive, and learning on underpowered systems or outdated software versions can hold students back. techcadd provides a proper lab setup so students get real, uninterrupted hands-on practice — which matters far more in a visualization-heavy course like this than passive classroom lectures ever could.'
    },
    {
      title: 'Real Projects, Not Just Practice Exercises',
      text: 'Instead of endless generic tutorials, students work on realistic project briefs — interior scenes, architectural exteriors, product models — that mirror what they’d actually be asked to do in a design studio or freelance assignment. This project-based approach means students leave with tangible portfolio pieces, not just notes.'
    },
    {
      title: 'Placement & Career Support',
      text: 'techcadd doesn’t stop at teaching software — the institute supports students with career guidance and placement assistance, helping connect trained students with opportunities in architecture firms, interior design studios, real estate visualization teams, and design agencies in and around Ludhiana.'
    },
    {
      title: 'Flexible Batches for Students & Working Professionals',
      text: 'Whether you’re a 12th pass student, a college-going architecture student, or a working professional trying to upskill in the evenings or weekends, techcadd structures its batches to accommodate different schedules — so the course fits into your life rather than forcing you to rearrange everything around it.'
    },
    {
      title: 'Local Presence, Personal Attention',
      text: 'Being based in Ludhiana means techcadd understands the local student profile, the regional job market, and the specific expectations of local design studios and real estate businesses. This local grounding, combined with smaller batch sizes and direct trainer access, means students get individual attention and doubt-resolution that’s hard to find in large, impersonal setups.'
    },
    {
      title: 'Certification That Adds Credibility',
      text: 'On completion, students receive a course certification from techcadd that adds credibility to their resume and portfolio — useful whether you’re applying for a job, pitching freelance work, or showcasing your skills to clients in Ludhiana’s competitive design market.'
    },
    {
      title: 'A Name Students Already Recommend',
      text: 'Word-of-mouth matters in a city like Ludhiana, and techcadd has built a reputation among local students and past learners as an institute that delivers on its training promises — a big reason many new students join specifically on the recommendation of someone who’s already completed a course there.'
    }
  ],
  close: 'Design and CAD as a core focus rather than a side offering, lab hardware that can actually render, real project briefs, and local placement contacts — that combination is what students compare when they shortlist institutes here.'
}

/* ---------------------------------------------------------------- */

/* The closing pitch, immediately above the enquiry form. */
const ENROL_NOW = {
  id: 'max-enrol',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Enrol now',
  title: 'Start your 3D design career today',
  lead: 'Turn your creativity into a career.',
  items: [
    {
      title: 'What you get',
      text: 'Join techcadd’s industry-focused **3Ds Max course in Ludhiana** and learn from experienced trainers, work on real projects, and build a portfolio that gets you noticed — whether you’re a student, graduate, or working professional.'
    },
    {
      title: 'Before you enrol',
      text: 'The course runs over a few months covering modeling, texturing, lighting and V-Ray rendering, with the exact duration depending on whether you join a regular, weekend or fast-track batch. Contact the Ludhiana centre for current schedules, fees and the exact address.'
    }
  ]
}

export const MAX_NARRATIVE = [
  CURRICULUM,
  WHY_THIS_PROGRAMME,
  WHY_TECHCADD,
  ENROL_NOW
]

/* ------------------------------------------------------------------
   UNVERIFIED TESTIMONIALS — CHECK BEFORE THIS PAGE GOES LIVE.

   Same caveat as the other pages carrying supplied reviews: full
   names, home neighbourhoods, and named outcomes ("started
   freelancing within a month", "helped me get my first design job",
   "already getting freelance interior rendering work"). If they were
   written as sample copy rather than collected from the students
   named, they must not be published — invented reviews attributed to
   identifiable people mislead prospective students and are unlawful
   in many jurisdictions.

   Confirm each entry against a real, attributable review. Anything
   that cannot be confirmed should be removed — or delete the
   `testimonials` line from the seed in design.js, which makes the page
   fall back to the generic quotes in shared.js.
------------------------------------------------------------------ */
export const MAX_TESTIMONIALS = [
  {
    quote:
      'I joined the 3Ds Max course at techcadd right after my 12th and honestly it was one of the best decisions I’ve made. The trainers explained everything step by step, and I actually built a full interior scene by the end of the course. Highly recommend for anyone in Ludhiana looking to get into design.',
    name: 'Ramanpreet Singh',
    course: '3ds Max',
    detail: 'Model Town, Ludhiana',
    rating: 5,
    initials: 'RS'
  },
  {
    quote:
      'I’m an interior design graduate and wanted to add rendering skills to my portfolio. The V-Ray training here was exactly what I needed. My client presentations look so much more professional now.',
    name: 'Simran Kaur',
    course: '3ds Max',
    detail: 'Sarabha Nagar, Ludhiana',
    rating: 5,
    initials: 'SK'
  },
  {
    quote:
      'Good hands-on training, proper lab systems that could actually handle rendering without lagging. The faculty was patient with doubts even after class hours. Would’ve liked a slightly longer batch, but overall solid experience.',
    name: 'Harmanjot Singh',
    course: '3ds Max',
    detail: 'Dugri, Ludhiana',
    rating: 4,
    initials: 'HS'
  },
  {
    quote:
      'Compared to two other institutes I visited in Ludhiana before joining, techcadd’s teaching style was far more practical. We worked on real projects, not just random tutorials. Got my certificate and started freelancing within a month.',
    name: 'Anmol Sharma',
    course: '3ds Max',
    detail: 'Pakhowal Road, Ludhiana',
    rating: 5,
    initials: 'AS'
  },
  {
    quote:
      'As a working professional, I needed flexible timings, and techcadd worked around my schedule. Learned proper lighting and material techniques that I now use daily in my interior design work.',
    name: 'Gurleen Kaur',
    course: '3ds Max',
    detail: 'Chandigarh Road, Ludhiana',
    rating: 5,
    initials: 'GK'
  },
  {
    quote:
      'Came from a B.Arch background and wanted to strengthen my visualization skills. The course covered everything from modeling to final V-Ray renders. Trainers were knowledgeable and always ready to help.',
    name: 'Jasdeep Singh',
    course: '3ds Max',
    detail: 'Civil Lines, Ludhiana',
    rating: 4,
    initials: 'JS'
  },
  {
    quote:
      'I was confused about which institute to join for 3Ds Max in Ludhiana, but a friend recommended techcadd and I’m glad I listened. The portfolio I built during the course actually helped me get my first design job.',
    name: 'Navdeep Kaur',
    course: '3ds Max',
    detail: 'BRS Nagar, Ludhiana',
    rating: 5,
    initials: 'NK'
  },
  {
    quote:
      'Great institute for anyone serious about architectural visualization. The instructors have real industry experience, and it shows in how they teach — not just software clicks but actual design logic.',
    name: 'Karanveer Singh',
    course: '3ds Max',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'KS'
  },
  {
    quote:
      'Traveled from Chandigarh for the weekend batches and it was worth it. The interior visualization module was especially strong — learned things I couldn’t find in free YouTube tutorials.',
    name: 'Ishika Mehta',
    course: '3ds Max',
    detail: 'Chandigarh, weekend batch',
    rating: 4,
    initials: 'IM'
  },
  {
    quote:
      'Solid course structure from basics to advanced rendering. What I liked most was that they focused on building a real portfolio, not just finishing chapters. Already getting freelance interior rendering work.',
    name: 'Amritpal Singh',
    course: '3ds Max',
    detail: 'Ferozepur Road, Ludhiana',
    rating: 5,
    initials: 'AP'
  },
  {
    quote:
      'As a graduate with no design background, I was nervous about joining, but the trainers started from zero and built up gradually. By the end, I was creating full architectural walkthroughs. Great experience overall.',
    name: 'Priya Bansal',
    course: '3ds Max',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'PB'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.
------------------------------------------------------------------ */
export const MAX_FAQS = [
  {
    q: 'What is the duration of the 3Ds Max course at techcadd, Ludhiana?',
    a: 'The **3Ds Max course** at techcadd typically runs for a few months, covering modeling, texturing, lighting, and V-Ray rendering. The exact duration depends on the batch type — regular, weekend, or fast-track — so contact the Ludhiana centre for current schedules.'
  },
  {
    q: 'Who can join the 3Ds Max course in Ludhiana?',
    a: '12th pass students from any stream, graduates, architecture and interior design students, diploma and ITI holders, working professionals, and job seekers can all join. No prior design experience is required for the beginner-friendly track.'
  },
  {
    q: 'Do I need a design or architecture background to learn 3Ds Max?',
    a: 'No. The course starts from the fundamentals of the 3Ds Max interface and modeling basics, so students with zero prior experience in design software can follow along and progress to advanced rendering.'
  },
  {
    q: 'Is V-Ray included in the 3Ds Max course at techcadd?',
    a: 'Yes. The course includes **V-Ray** rendering training alongside 3Ds Max, covering V-Ray materials, lighting, and render settings used to produce photorealistic architectural and interior visuals.'
  },
  {
    q: 'Will I get a certificate after completing the course?',
    a: 'Yes, students receive a course completion certificate from techcadd, which can be added to your resume or portfolio when applying for design, architecture, or visualization roles.'
  },
  {
    q: 'Does techcadd offer placement assistance after the 3Ds Max course?',
    a: 'Yes, techcadd provides career guidance and placement support to help students connect with opportunities at architecture firms, interior design studios, and visualization teams in and around Ludhiana.'
  },
  {
    q: 'What kind of jobs can I get after learning 3Ds Max?',
    a: 'Common career paths include architectural visualizer, interior design renderer, 3D modeler, product visualization artist, freelance rendering artist, and entry-level roles in animation or VFX studios.'
  },
  {
    q: 'Are batch timings flexible for working professionals and students?',
    a: 'Yes, techcadd offers flexible batch options including weekday and weekend timings, so both full-time students and working professionals in Ludhiana can join without disrupting their existing schedule.'
  },
  {
    q: 'Is 3Ds Max training useful for interior designers specifically?',
    a: 'Very much so. Interior designers use 3Ds Max with V-Ray to create photorealistic room visualizations, furniture layouts, and material presentations that help convince clients before actual execution begins.'
  },
  {
    q: 'How is techcadd different from other 3Ds Max institutes in Ludhiana?',
    a: 'techcadd focuses specifically on design and CAD software training, offers hands-on lab infrastructure, project-based learning, experienced trainers, and placement support — rather than treating 3Ds Max as a minor add-on course.'
  },
  {
    q: 'Can I build a portfolio during the course?',
    a: 'Yes, the course is structured around real project briefs — interior scenes, architectural exteriors, and product models — so students leave with actual portfolio-ready work, not just practice files.'
  },
  {
    q: 'Where is the techcadd 3Ds Max training centre located in Ludhiana?',
    a: 'techcadd’s training centre is based in Ludhiana, accessible to students from across the city including Model Town, Sarabha Nagar, Dugri, Pakhowal Road, and nearby areas. Contact the centre directly for the exact address and directions.'
  }
]
