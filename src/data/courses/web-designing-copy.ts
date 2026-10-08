/* ==================================================================
   Long-form copy for the Web Designing course page.

   Sixth of these, after digital-marketing, python, java, c-cpp and
   kotlin. Same construction, split out of programming.js for the same
   reason: that file seeds nine courses and this is one course's
   editorial content.

   The copy is written to rank, so the terms the page targets are
   marked **like this** and RichText renders them inside <strong>. See
   RichText.jsx for the one rule it implements, and the keyword
   emphasis block in course-base.css for how a marked term is set:
   weight plus a light grey, deliberately quiet.

   Narrative sections declare the `slot` they mount into — overview,
   syllabus, careers. "Who can do this course" is not one of them: it
   fills the standard "who can join" block, which asks the same
   question and would otherwise sit four sections below saying the
   same thing.

   The "what you should have before starting" list from the source
   copy is not a narrative item — it is what the standard "who can
   join" block already renders as `requirements`, so it goes there.
================================================================== */

export const WEB_DESIGNING_OVERVIEW = {
  title: 'The web designing course in Ludhiana that builds a real portfolio',
  lead: 'Want to turn your creativity into a career? techcadd’s **web designing course in Ludhiana** is built for students, graduates, and job seekers who want to master the art and skill of building beautiful, functional websites.',
  body: [
    'As one of Ludhiana’s most trusted **web design training institutes**, techcadd combines hands-on projects, industry-standard tools, and expert mentorship to help you go from complete beginner to confident website designer.',
    'This **web design course in Ludhiana** covers everything from **HTML**, **CSS**, and responsive design principles to UI/UX fundamentals and modern design tools — so you graduate with a real portfolio, not just theory. Whether you’re a 12th-pass student exploring creative-tech careers, a graduate looking to specialize, or someone switching careers into design, this course meets you at your current level.',
    'Ludhiana is one of Punjab’s largest industrial and business hubs, and every growing business today needs a strong website presence — which means skilled web designers are in constant demand locally. With flexible batch timings, practical training, and placement support, techcadd makes it possible to build in-demand design skills right here in the city, without relocating or going fully online.'
  ]
}

/* ------------------------------------------------------------------
   Who can do this course — fills the standard "who can join" block
   rather than adding a second one. `requirements` is the honest list
   of what you actually need before day one, which the block renders
   under the groups. See joiners() in shared.js for the shape.
------------------------------------------------------------------ */
export const WEB_DESIGNING_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this course',
  lead: 'One of the best things about techcadd’s **web designing course in Ludhiana** is that it’s genuinely open to everyone — you don’t need a technical background, a design degree, or prior coding knowledge to get started. If you’re based in Ludhiana or nearby areas like Jalandhar, Khanna, or Moga and you have an eye for creativity along with an interest in how websites work, this course is built to take you from curious beginner to confident web designer.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students (Any Stream)',
      text: 'If you’ve just finished school and are exploring career paths that blend creativity with technology, web designing is an excellent starting point. Students from arts, commerce, and science backgrounds have all successfully learned web design — you don’t need a non-medical or computer science background. The course starts from the basics, so absolute beginners can follow along comfortably.',
      tag: 'Any stream'
    },
    {
      icon: 'career',
      title: 'Graduates Looking to Specialize (Any Stream)',
      text: 'Whether you hold a BCA, BA, BCom, or any other degree, web designing offers a practical, skill-based career path that doesn’t require years of additional study. This **web design training in Ludhiana** is especially valuable for graduates who want a shorter, more direct route into the growing digital economy.',
      tag: 'Any degree'
    },
    {
      icon: 'spark',
      title: 'Graphic Designers Expanding Into Web',
      text: 'If you already have design sensibilities — colour theory, layout, typography — but haven’t yet worked with websites, this course helps you translate those skills into **HTML**, **CSS**, and responsive web layouts, opening up a wider range of job and freelance opportunities.',
      tag: 'Design to web'
    },
    {
      icon: 'stack',
      title: 'Working Professionals Switching Careers',
      text: 'If you’re currently in a non-design or non-tech role and want to pivot into a more creative, in-demand field, this course offers flexible batch timings — including evening and weekend options — so you can upskill without quitting your current job.',
      tag: 'Evening batches'
    },
    {
      icon: 'code',
      title: 'Freelancers and Aspiring Entrepreneurs',
      text: 'Want to design and sell websites to local businesses in Ludhiana? Or build your own portfolio site or online store? Learning web design gives you the practical foundation to work independently, take on freelance clients, or even start your own small design studio.',
      tag: 'Freelance ready'
    },
    {
      icon: 'chart',
      title: 'Small Business Owners',
      text: 'Ludhiana is home to a huge number of small and medium businesses — many of whom need their own website but don’t want to depend entirely on outside vendors. Business owners who learn basic web design can manage and update their own sites, saving costs long-term.',
      tag: 'Run it in-house'
    },
    {
      icon: 'mentor',
      title: 'Career Switchers From Non-Tech Backgrounds',
      text: 'It’s increasingly common for people from unrelated fields — teaching, retail, administration — to switch into creative-tech careers. techcadd’s beginner-friendly teaching style, paired with local, in-person mentorship in Ludhiana, makes this transition realistic and manageable.',
      tag: 'Start from zero'
    }
  ],
  requirementsTitle: 'What you should have before starting',
  requirements: [
    'Basic computer literacy — comfortable using a laptop or PC',
    'An eye for design, layout and visual detail — helpful, not mandatory',
    'No prior coding or design experience required',
    'A laptop or desktop, which we help you set up in the first session',
    'About 6–8 hours a week outside class to practise on your own projects'
  ],
  note: 'Whether you’re just starting out or building on existing skills, this course is structured to meet you where you are — and help you build a portfolio that gets noticed.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'wd-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn in the web designing course',
  lead: 'techcadd’s **web designing course in Ludhiana** is structured to take you from complete beginner to job-ready web designer, covering both design fundamentals and the practical tools used in real-world website building.',
  items: [
    {
      title: 'HTML Fundamentals',
      text: 'You’ll start with **HTML** — the backbone of every website. You’ll learn how to structure web pages using tags, elements, forms, and semantic markup, giving you a solid foundation for everything that follows.'
    },
    {
      title: 'CSS & Styling',
      text: 'Next, you’ll learn **CSS** to bring your HTML structures to life — controlling colours, fonts, spacing, layouts, and visual hierarchy. This module covers modern CSS techniques including Flexbox and Grid for building clean, organized page layouts.'
    },
    {
      title: 'Responsive Web Design',
      text: 'With most web traffic coming from mobile devices, you’ll learn how to design websites that adapt smoothly across desktops, tablets, and phones — a skill that is non-negotiable for any professional web designer today.'
    },
    {
      title: 'UI/UX Design Fundamentals',
      text: 'Beyond just coding, you’ll learn the principles of good user interface and user experience design — colour theory, typography, layout hierarchy, and how to design pages that are visually appealing and easy to navigate.'
    },
    {
      title: 'Design Tools (Figma / Adobe XD)',
      text: 'You’ll get hands-on training in industry-standard design tools like **Figma** and **Adobe XD**, used to create wireframes, mockups, and prototypes before development begins — a skill agencies and clients expect from professional designers.'
    },
    {
      title: 'Basic JavaScript for Interactivity',
      text: 'You’ll be introduced to basic JavaScript concepts to add simple interactivity to your websites — dropdown menus, sliders, form validations — giving your designs a more dynamic, professional feel.'
    },
    {
      title: 'Website Optimization Basics',
      text: 'You’ll learn foundational principles of making websites load faster and perform better, including image optimization and clean code practices — important both for user experience and basic SEO.'
    },
    {
      title: 'Real Website Projects',
      text: 'Throughout the course, you’ll apply everything you learn to build real website projects — from simple portfolio pages to more complex multi-page business websites — the kind of work you can showcase directly to clients or employers.'
    }
  ],
  tools: {
    label: 'Tools you’ll work with',
    items: [
      'HTML5',
      'CSS3',
      'Figma',
      'Adobe XD',
      'VS Code',
      'Chrome DevTools',
      'Basic JavaScript',
      'Google Fonts & icon libraries'
    ]
  },
  close: 'By the end you will design and code responsive websites from scratch, create wireframes and prototypes in professional tools, apply UI/UX principles to real layouts, add interactivity with JavaScript, and have a portfolio of finished sites to show employers or freelance clients. Every concept is reinforced with project work, so you finish design-capable, not just design-literate.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'wd-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'With so many institutes across Punjab offering “web design courses”, it’s worth asking: why choose a dedicated **web designing course in Ludhiana** at techcadd instead of scattered video tutorials or a generic online certificate? Here’s what makes this program genuinely worth your time.',
  items: [
    {
      title: 'Web Design Is a Practical, Fast-Entry Career Path',
      text: 'Unlike many tech careers that require years of study, web designing is a skill you can learn, apply, and start earning from within months. Businesses of every size — from local shops in Ludhiana to national brands — need websites, which keeps demand for skilled designers consistently high.'
    },
    {
      title: 'Practical, Project-Based Learning — Not Just Theory',
      text: 'This program isn’t built around passive slides and lectures. You’ll work hands-on with **HTML**, **CSS**, and modern design tools from early on, building real website layouts and pages. By the end of the course you’ll have actual website projects to show in interviews or to freelance clients — not just a certificate.'
    },
    {
      title: 'Beginner-Friendly Structure With Clear Progression',
      text: 'The course is structured to build your skills step by step — starting with design fundamentals and layout basics, moving into HTML and CSS structuring, and finishing with responsive design principles that make websites work smoothly across mobile, tablet, and desktop.'
    },
    {
      title: 'Local Mentorship, Not Just Recorded Videos',
      text: 'Unlike self-paced online courses where you’re left to troubleshoot alone, this **web design training in Ludhiana** gives you access to trainers who can review your layouts, explain design decisions, and guide you through real project challenges in person.'
    },
    {
      title: 'Career-Focused, Not Just Skill-Focused',
      text: 'This program is built around helping you actually get hired or start freelancing — not just teaching tools in isolation. That means guidance on building a strong portfolio, understanding what local businesses and agencies in Ludhiana look for, and preparing you to confidently pitch your work.'
    },
    {
      title: 'Flexible for Every Kind of Learner',
      text: 'Whether you’re a student with school or college commitments, or a working professional who can only attend evenings or weekends, the batch structure is designed to fit around real schedules — not the other way around.'
    },
    {
      title: 'A Local Institute That Understands the Local Market',
      text: 'Ludhiana is one of Punjab’s largest business and industrial hubs, with thousands of small and medium businesses that need a web presence. Learning locally means your trainers understand exactly what regional businesses and agencies look for in a web designer — and how to position yourself for those opportunities.'
    },
    {
      title: 'Multiple Career Paths From One Skill Set',
      text: 'Web designing opens doors to several roles — Web Designer, UI Designer, Frontend Developer with further study, or independent freelancer — giving you flexibility in how you build your career, whether that’s a full-time job, agency work, or working for yourself.'
    }
  ],
  close: 'Every growing business in Ludhiana needs a website, and this programme is built to leave you with the finished work that proves you can build one.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'wd-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd for your web designing course',
  lead: 'Choosing the right institute matters just as much as choosing the right course. Here’s why students across Ludhiana and Punjab trust techcadd for **web design training**.',
  items: [
    {
      title: '15+ Years of Experience in IT Training',
      text: 'techcadd has spent over 15 years training students across Ludhiana in web development, web designing, digital marketing, AI, and more. This isn’t a new institute experimenting with design courses — it’s a training centre with a long-standing track record of preparing students for real design and tech careers.'
    },
    {
      title: 'Recognised With 45+ Awards',
      text: 'techcadd’s consistent focus on quality training has earned it more than 45 awards and recognitions in the IT and design education space — a strong signal of credibility for students comparing institutes.'
    },
    {
      title: 'Hands-On, Project-Based Teaching Philosophy',
      text: 'The web designing course isn’t taught through passive lectures. Students work on live design exercises and real website projects, using industry-standard tools and coding practices. This hands-on approach means you graduate with an actual portfolio of website work, not just a certificate.'
    },
    {
      title: 'Experienced, Industry-Aware Faculty',
      text: 'techcadd’s trainers bring real industry experience into the classroom, meaning you learn practical, current approaches to web design — not outdated techniques. Faculty are available to review your layouts, give design feedback, and guide you through real project challenges.'
    },
    {
      title: 'Flexible Batch Options for Every Schedule',
      text: 'Whether you’re a 12th-pass student with school hours to work around, a college student balancing coursework, or a working professional who can only attend evenings or weekends, techcadd offers morning, evening, and weekend batches.'
    },
    {
      title: 'Job Placement Assistance',
      text: 'techcadd doesn’t just teach web design and send you on your way — the institute provides placement assistance to help connect trained students with design studios, agencies, and IT companies hiring in Ludhiana and across Punjab.'
    },
    {
      title: 'Industry-Recognised Certification',
      text: 'On completing the course, students receive a certification that adds credibility to their resume — useful whether you’re applying for jobs, pursuing freelance design work, or continuing further studies in web development.'
    },
    {
      title: 'A Locally Rooted, Trusted Institute',
      text: 'Being based in Ludhiana means techcadd understands the local student community, the regional business landscape, and what Punjab-based companies and agencies are actually looking for in a web designer. You’re learning from an institute embedded in your city’s business ecosystem — not a distant, generic platform.'
    },
    {
      title: 'A Broader Tech Ecosystem to Grow Into',
      text: 'Beyond web designing, techcadd offers courses across web development, AI and data science, cybersecurity, and digital marketing — so students who want to expand their skill set later, pairing web design with frontend development or digital marketing, have a natural path to do so within the same institute.'
    }
  ],
  close: 'Choosing techcadd means choosing a **web design training institute in Ludhiana** that measures itself on the sites its students ship, not the certificates it hands out.'
}

export const WEB_DESIGNING_NARRATIVE = [CURRICULUM, WHY_THIS_PROGRAMME, WHY_TECHCADD]

/* ------------------------------------------------------------------
   Student reviews. The factory writes three generic quotes for a
   course with none; these are the course's own, so they replace that
   set. `rating` drives the stars, `initials` the avatar tile.
------------------------------------------------------------------ */
export const WEB_DESIGNING_TESTIMONIALS = [
  {
    quote: 'I always loved design but had no idea how websites actually worked. techcadd taught me HTML, CSS, and Figma step by step. I built a full portfolio site by the end of the course and now I’m freelancing for two local businesses.',
    name: 'Simarjeet Kaur',
    course: 'Web Designing',
    detail: 'Model Town, Ludhiana',
    rating: 5,
    initials: 'SK'
  },
  {
    quote: 'I’m a BCom graduate with zero design background. Honestly thought this course would be too technical for me, but the trainers explained everything in simple terms. Now I’m working as a junior web designer at a small agency in Chandigarh.',
    name: 'Rohit Verma',
    course: 'Web Designing',
    detail: 'Sarabha Nagar, Ludhiana',
    rating: 5,
    initials: 'RV'
  },
  {
    quote: 'Good course for beginners. I learned HTML, CSS, and basic JavaScript, and built three real website projects. Wish there was a bit more time spent on advanced JavaScript, but overall very practical.',
    name: 'Amanpreet Singh',
    course: 'Web Designing',
    detail: 'Khanna',
    rating: 4,
    initials: 'AS'
  },
  {
    quote: 'Best decision after 12th. I had zero coding knowledge and was honestly scared of anything “technical”. Six months later I designed a full business website for my uncle’s shop — and it’s live!',
    name: 'Neha Sharma',
    course: 'Web Designing',
    detail: 'Ferozepur Road, Ludhiana',
    rating: 5,
    initials: 'NS'
  },
  {
    quote: 'I used to travel to Ludhiana for weekend batches since there wasn’t a solid web design institute near me. Totally worth it — the live project work was way better than the online course I tried before.',
    name: 'Gurpreet Singh',
    course: 'Web Designing',
    detail: 'Jalandhar',
    rating: 5,
    initials: 'GS'
  },
  {
    quote: 'Solid course for anyone wanting to get into web design. The responsive design module was a bit challenging for me personally, but the trainers sat with me after class until I understood it properly.',
    name: 'Ishika Bansal',
    course: 'Web Designing',
    detail: 'Dugri, Ludhiana',
    rating: 4,
    initials: 'IB'
  },
  {
    quote: 'I was working in a completely unrelated field and wanted to switch into something creative. This course gave me exactly what I needed — practical design skills and enough confidence to start freelancing.',
    name: 'Ankit Malhotra',
    course: 'Web Designing',
    detail: 'Chandigarh',
    rating: 5,
    initials: 'AM'
  },
  {
    quote: 'What I liked most was how the trainers connected everything to real client work — not just teaching HTML and CSS, but explaining how local businesses in Punjab actually want their websites designed.',
    name: 'Manvir Kaur',
    course: 'Web Designing',
    detail: 'Moga',
    rating: 5,
    initials: 'MK'
  },
  {
    quote: 'Good course overall. I came in as a complete beginner and left with a working portfolio of three websites. Would have liked more time on advanced Figma prototyping, but the fundamentals were taught really well.',
    name: 'Tanya Kapoor',
    course: 'Web Designing',
    detail: 'Pakhowal Road, Ludhiana',
    rating: 4,
    initials: 'TK'
  },
  {
    quote: 'I compared a few institutes across Ludhiana and Mohali before joining, and techcadd’s hands-on, project-based approach won me over. Built four real website projects during the course — already using them in client pitches.',
    name: 'Rajveer Singh',
    course: 'Web Designing',
    detail: 'Mohali',
    rating: 5,
    initials: 'RS'
  },
  {
    quote: 'As a working professional, the evening batch was a lifesaver. I could learn web design without quitting my job, and the pace was manageable even with a full-time schedule.',
    name: 'Simran Chawla',
    course: 'Web Designing',
    detail: 'Civil Lines, Ludhiana',
    rating: 5,
    initials: 'SC'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard set the factory writes for every other course.

   Each answer is written to stand on its own without the surrounding
   text, which is what an answer engine needs to quote it directly.
------------------------------------------------------------------ */
export const WEB_DESIGNING_FAQS = [
  {
    q: 'What is the best institute for a web designing course in Ludhiana?',
    a: 'techcadd is one of Ludhiana’s leading IT training institutes offering a dedicated **web designing course in Ludhiana** with hands-on training, experienced faculty, and placement assistance.'
  },
  {
    q: 'Do I need prior coding or design experience to join this course?',
    a: 'No. This course is beginner-friendly and starts with the fundamentals of **HTML** and **CSS**, so students with zero coding or design background — including 12th-pass students from any stream — can join.'
  },
  {
    q: 'Is this course suitable for graphic designers wanting to move into web design?',
    a: 'Yes. If you already have design skills like layout, colour theory, or typography, this course helps you apply those skills to HTML, CSS, and responsive web design, opening up more job and freelance opportunities.'
  },
  {
    q: 'How long is the web designing course at techcadd?',
    a: 'Course duration varies by batch type — regular, weekend, or fast-track. Contact techcadd’s Ludhiana centre directly for current batch schedules and exact duration.'
  },
  {
    q: 'What will I learn in this web designing course?',
    a: 'You’ll learn HTML, CSS, responsive design, UI/UX fundamentals, design tools like **Figma**, basic JavaScript for interactivity, and how to build real website projects from scratch.'
  },
  {
    q: 'Does techcadd offer placement assistance after the web designing course?',
    a: 'Yes. techcadd provides placement assistance to help students connect with design studios, agencies, and IT companies hiring in Ludhiana and across Punjab.'
  },
  {
    q: 'Are weekend or evening batches available for working professionals?',
    a: 'Yes. techcadd offers flexible batch timings, including morning, evening, and weekend options, so working professionals and students can learn without disrupting their existing schedule.'
  },
  {
    q: 'Will I build real websites during the course?',
    a: 'Yes. The course is project-based, so students build actual website projects during training — projects you can showcase in interviews or use as freelance portfolio pieces.'
  },
  {
    q: 'Is web designing in demand for jobs in Ludhiana and Punjab?',
    a: 'Yes. Ludhiana is one of Punjab’s largest business and industrial hubs, and growing businesses across the region consistently need skilled web designers for both in-house roles and freelance projects.'
  },
  {
    q: 'Do I get a certificate after completing the web designing course?',
    a: 'Yes. Students receive an industry-recognised certification on course completion, which can be added to resumes and job applications.'
  },
  {
    q: 'Can a complete beginner become a professional web designer through this course?',
    a: 'Yes. The course is structured to take beginners step by step — from HTML and CSS basics to responsive design and UI/UX principles — ending with the practical skills needed to design and build real websites.'
  },
  {
    q: 'What tools will I learn to use in this course?',
    a: 'You’ll gain hands-on experience with HTML5, CSS3, **Figma** or **Adobe XD**, **VS Code**, Chrome DevTools, and basic JavaScript for adding interactivity to your designs.'
  }
]
