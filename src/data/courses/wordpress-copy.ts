/* ==================================================================
   Long-form copy for the WordPress course page.

   Fourth of the courses in marketing.js to carry editorial copy of its
   own, and split out for the same reason as the others — that file
   seeds six courses, and this is one course's content. See
   ./digital-marketing-copy.js, ./social-media-marketing-copy.js and
   ./google-ads-copy.js.

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

export const WORDPRESS_OVERVIEW = {
  title: 'The WordPress course in Ludhiana that ends in sites you have built',
  lead: 'The **WordPress Course in Ludhiana** by techcadd is specially designed for students, beginners, freelancers, and job seekers who want to build professional websites without advanced coding knowledge. WordPress is one of the most widely used content management systems in the world, powering blogs, business websites, eCommerce stores, and portfolio sites. With the growing demand for online presence among Ludhiana’s local businesses, skilled WordPress developers are highly valued in the market.',
  body: [
    'This course focuses on practical, hands-on training where learners understand how to create, design, and manage fully functional websites using WordPress. Students are trained in essential areas such as WordPress installation, theme customization, plugin management, page builders like **Elementor**, website security, speed optimization, and basic SEO setup.',
    'The program is structured to help learners move from beginner to job-ready level by working on real-time projects. After completing the course, students can pursue career roles such as WordPress Developer, Website Designer, Freelance Web Designer, or CMS Manager.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const WORDPRESS_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do a WordPress course in Ludhiana',
  lead: 'A **WordPress Course in Ludhiana** is suitable for learners from different educational and professional backgrounds. You do not need to be an expert programmer to start learning WordPress. With the right practical training, beginners can understand how websites are created, customized, managed, and maintained. The course can be a useful starting point for students who want to develop a job-ready technical skill or explore freelance website development.',
  groups: [
    {
      icon: 'curriculum',
      title: 'Students After 12th',
      text: 'Students who have completed 12th can join WordPress training to start developing practical website-building skills at an early stage. Learning WordPress can help students understand website design, content management, basic SEO, themes, plugins, and website customization. It can also provide a foundation for exploring careers related to web development and digital business.',
      tag: 'Start early'
    },
    {
      icon: 'code',
      title: 'College Students',
      text: 'College students from BCA, B.Tech, BBA, B.Com, BA, or other streams can learn WordPress alongside their regular studies. A practical **WordPress course in Ludhiana** can help them build websites for academic projects, portfolios, small businesses, or personal brands. These projects can also strengthen their resumes when applying for internships or entry-level positions.',
      tag: 'Alongside a degree'
    },
    {
      icon: 'career',
      title: 'Graduates Looking for Jobs',
      text: 'Graduates who want to enter the IT or website development field can consider WordPress as a practical skill. Instead of learning only theoretical concepts, students can work on website-building tasks and understand how a professional WordPress website is structured. This can help candidates prepare for entry-level opportunities such as WordPress Developer, Website Executive, WordPress Support Executive, or Website Administrator.',
      tag: 'Any stream'
    },
    {
      icon: 'spark',
      title: 'Job Seekers and Career Changers',
      text: 'WordPress can also be suitable for people looking to change their career direction. Learners from non-technical backgrounds can begin with the fundamentals and gradually develop website management and customization skills. A structured **WordPress training in Ludhiana** can make the learning process easier by providing step-by-step guidance and practical assignments.',
      tag: 'Start from zero'
    },
    {
      icon: 'terminal',
      title: 'Freelancers and Aspiring Freelancers',
      text: 'If you want to start freelancing, WordPress can be a valuable skill for creating websites for clients. Freelancers can work on business websites, portfolio websites, blogs, landing pages, service websites, and other projects. Learning how to customize themes, install plugins, manage content, improve basic website SEO, and maintain websites can help learners handle different client requirements.',
      tag: 'Turn it into income'
    },
    {
      icon: 'chart',
      title: 'Small Business Owners and Entrepreneurs',
      text: 'Business owners who want greater control over their online presence can also learn WordPress. Instead of depending entirely on others for simple website updates, they can learn how to manage pages, images, blog content, contact forms, and basic website settings. This can be especially useful for local businesses in Ludhiana that want to establish or improve their online presence.',
      tag: 'Run it in-house'
    },
    {
      icon: 'stack',
      title: 'Digital Marketing Learners',
      text: 'Students already learning digital marketing can add WordPress to their skill set. A good understanding of WordPress can make it easier to manage website content, publish SEO-focused articles, create landing pages, and implement basic on-page SEO practices. This combination can be useful for learners interested in SEO, content marketing, and broader digital marketing roles.',
      tag: 'Pairs with SEO'
    },
    {
      icon: 'support',
      title: 'Anyone Interested in Website Creation',
      text: 'You do not necessarily need an advanced technical background to begin. If you are interested in creating websites and are willing to practise regularly, a **WordPress Course in Ludhiana** can help you develop the required fundamentals step by step.',
      tag: 'No background needed'
    }
  ],
  note: 'Overall, the course can suit 12th-pass students, graduates, job seekers, freelancers, entrepreneurs, digital marketing learners, and beginners who want to develop practical WordPress skills and explore career opportunities in website development and management.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'wp-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn in the WordPress course',
  lead: 'The **WordPress Course in Ludhiana** at techcadd is designed to help students understand website creation from the basics to practical website management. The focus is on learning through hands-on work so that students can understand how WordPress websites are planned, created, customized, optimized, and maintained.',
  items: [
    {
      title: 'WordPress Fundamentals',
      text: 'Students begin with the basics of WordPress and understand how a content management system works. They learn about WordPress dashboards, websites, domains, hosting, pages, posts, categories, tags, media, menus, and basic website structure.'
    },
    {
      title: 'WordPress Installation and Setup',
      text: 'Learners understand how to set up a WordPress website and configure essential settings. This includes working with hosting, databases, website settings, user accounts, permalinks, and other basic configurations required for a functional website.'
    },
    {
      title: 'Themes and Website Design',
      text: 'Students learn how WordPress themes control the appearance and layout of a website. They can explore theme selection, customization, headers, footers, typography, colours, menus, layouts, and responsive design principles to create websites that work across desktops, tablets, and mobile devices.'
    },
    {
      title: 'Plugins and Website Features',
      text: 'Plugins allow WordPress websites to add different features without developing everything from scratch. Students learn how to select, install, configure, update, and manage plugins. They can explore practical features such as contact forms, SEO, security, backups, caching, analytics, and other website functionality.'
    },
    {
      title: 'Pages, Posts and Content Management',
      text: 'Content management is an important part of WordPress. Students learn how to create and edit pages and blog posts, format content, add images and videos, create categories, manage menus, and organize website information in a user-friendly way.'
    },
    {
      title: 'Page Builders and Customization',
      text: 'The course can introduce students to visual website-building workflows and page-builder tools. Learners can practise creating sections, columns, buttons, banners, forms, and landing pages while understanding how to maintain a consistent website design.'
    },
    {
      title: 'Basic WordPress SEO',
      text: 'Students learn fundamental SEO practices that can help make websites more search-engine friendly. Topics can include SEO-friendly URLs, page titles, headings, meta descriptions, image optimization, internal linking, content structure, sitemap concepts, and basic SEO plugin usage.'
    },
    {
      title: 'Website Security and Backup',
      text: 'Website security and maintenance are essential for WordPress users. Students learn basic security practices, user permissions, plugin and theme updates, backup concepts, and common precautions for protecting website data.'
    },
    {
      title: 'Website Speed and Performance',
      text: 'Learners are introduced to factors that influence website performance, including image sizes, unnecessary plugins, caching, hosting, and website optimization. Understanding these fundamentals can help students identify common performance issues.'
    },
    {
      title: 'WooCommerce and E-commerce Basics',
      text: 'Students interested in online stores can learn the fundamentals of **WooCommerce**, including products, categories, pricing, images, shopping-cart functionality, checkout concepts, and basic store management. This can help learners understand how WordPress can be used for e-commerce websites.'
    },
    {
      title: 'Practical Website Projects',
      text: 'Most importantly, learners can apply their knowledge through practical projects. Creating complete websites helps students understand how different WordPress features work together and gives them useful material for building a portfolio.'
    }
  ],
  tools: {
    label: 'Tools you can learn',
    items: [
      'WordPress',
      'Elementor',
      'WooCommerce',
      'Google Search Console',
      'Google Analytics',
      'SEO plugins',
      'Contact-form plugins',
      'Security plugins',
      'Backup tools',
      'Image optimization tools'
    ]
  },
  close: 'Which tools you spend most time in depends on the curriculum you join and the projects your batch runs. Learners may also become familiar with basic **HTML** and **CSS** concepts, which help with website customization once the fundamentals are in place.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'wp-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why choose a WordPress course in Ludhiana',
  lead: 'Choosing a **WordPress Course in Ludhiana** can be a practical decision for students and beginners who want to develop a useful website-building skill without starting with highly advanced programming concepts. WordPress provides a structured environment in which learners can understand the complete website creation process, from setting up a website to publishing content and managing its features.',
  items: [
    {
      title: 'Build a Practical Website Development Skill',
      text: 'One of the biggest advantages of learning WordPress is its practical nature. Students can learn by actually creating websites rather than depending only on classroom theory. During training, learners can work with themes, plugins, pages, menus, media, forms, layouts, and website settings. This hands-on approach can help students understand how different parts of a website work together.'
    },
    {
      title: 'Suitable for Beginners',
      text: 'A **WordPress training course in Ludhiana** can be a suitable starting point for learners who have limited technical knowledge. Beginners can gradually learn website structure, WordPress dashboard navigation, content management, customization, and basic troubleshooting. Students can progress from simple website tasks to more advanced customization as their confidence increases.'
    },
    {
      title: 'Develop Portfolio Projects',
      text: 'Practical projects are important when starting a career. WordPress training can allow learners to create sample websites such as business websites, blogs, portfolio websites, service websites, or landing pages. These projects can become part of a student’s portfolio and demonstrate practical skills to potential employers or freelance clients.'
    },
    {
      title: 'Explore Career Opportunities',
      text: 'WordPress skills can support several career paths related to websites and online businesses. Depending on their skills and experience, learners may explore roles such as WordPress Developer, Website Executive, WordPress Administrator, Web Content Executive, Website Support Executive, or Junior Web Developer. The exact role and salary depend on individual skills, experience, portfolio quality, and employer requirements.'
    },
    {
      title: 'Useful for Freelancing',
      text: 'WordPress is also relevant for aspiring freelancers. Small businesses, professionals, startups, and organizations often need websites, updates, content changes, landing pages, and ongoing maintenance. By learning website creation and management, students can gradually build the skills needed to accept suitable freelance projects.'
    },
    {
      title: 'Learn Website SEO Basics',
      text: 'A website is more useful when people can discover it through search engines. WordPress training can introduce students to fundamental SEO concepts such as page structure, headings, URLs, image optimization, metadata, internal linking, and SEO-friendly content practices. These skills can complement broader SEO or digital marketing knowledge.'
    },
    {
      title: 'Learn Through Practical Training',
      text: 'The right **WordPress institute in Ludhiana** should focus on practical learning rather than simply completing a syllabus. Students should get opportunities to practise website creation, solve common website issues, work on projects, and understand real-world workflows. Regular practice can help learners become more confident in managing WordPress websites independently.'
    },
    {
      title: 'A Skill for Long-Term Learning',
      text: 'WordPress is not limited to one type of website or one professional role. Learners can continue developing their skills by exploring advanced customization, website performance, security, e-commerce websites, SEO, analytics, and client management. This makes WordPress a flexible skill that can grow alongside a student’s career goals.'
    }
  ],
  close: 'For learners searching for **WordPress classes in Ludhiana**, the key is to choose training that combines structured concepts, practical assignments, projects, and career-oriented guidance. With consistent practice and a strong portfolio, WordPress knowledge can become a valuable foundation for employment, freelancing, entrepreneurship, or further web development learning.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'wp-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd for WordPress training',
  lead: 'Choosing the right training institute is an important step when you are planning to learn WordPress. A good course should not only explain website concepts but also give students opportunities to practise those concepts through real website projects. techcadd focuses on practical, student-friendly learning to help beginners understand WordPress and develop skills that can be applied to real-world website requirements.',
  items: [
    {
      title: 'Practical WordPress Learning',
      text: 'The **WordPress Course in Ludhiana** at techcadd is designed around practical learning. Students can learn the fundamentals of WordPress while working with important website components such as themes, plugins, pages, posts, menus, media, forms, and website settings. Instead of simply memorizing concepts, learners can practise creating and managing websites step by step.'
    },
    {
      title: 'Beginner-Friendly Training',
      text: 'You do not need to be an experienced web developer to begin learning WordPress. techcadd’s training approach is suitable for students and beginners who want to understand website development from the fundamentals. Concepts can be introduced progressively so learners can build their knowledge before moving toward more advanced website customization and management.'
    },
    {
      title: 'Learn Through Projects',
      text: 'Project-based learning can make a significant difference when developing technical skills. During WordPress training, students can work on practical website projects and understand how different website elements are used together. Creating a complete website can also help learners develop a portfolio that they can showcase during interviews, internships, or freelance discussions.'
    },
    {
      title: 'Industry-Relevant Skills',
      text: 'A useful WordPress course should focus on skills that learners can apply beyond the classroom. Along with website creation, students can learn about responsive layouts, plugins, website customization, basic SEO, website security, backups, forms, and website maintenance. These skills can help learners understand the complete lifecycle of managing a WordPress website.'
    },
    {
      title: 'Career-Focused Guidance',
      text: 'techcadd aims to make learning relevant to career goals. Students interested in website development can use their WordPress knowledge as a foundation for exploring roles such as WordPress Developer, Website Executive, Web Content Executive, WordPress Administrator, or Website Support Executive. Learners interested in freelancing can also use their project experience to start building a professional portfolio.'
    },
    {
      title: 'Learn WordPress Alongside SEO',
      text: 'Modern websites need more than attractive designs. They should also be structured properly for users and search engines. WordPress training can therefore be particularly useful when combined with basic SEO knowledge. Students can learn how website pages, headings, URLs, images, content, internal links, and other on-page elements contribute to a better website structure.'
    },
    {
      title: 'A Local Learning Option in Ludhiana',
      text: 'For students searching for **WordPress training in Ludhiana**, learning at a local training centre can make regular classroom practice and instructor interaction easier. Students can ask questions, clarify technical problems, practise tasks, and receive guidance while developing their websites.'
    }
  ],
  close: 'The goal of choosing techcadd should be more than simply completing a certificate. Students should aim to leave the course with practical understanding, project experience, and the confidence to continue learning and working with WordPress independently.'
}

/* ---------------------------------------------------------------- */

/* The closing pitch, immediately above the enquiry form. */
const START_LEARNING = {
  id: 'wp-start-learning',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Get started',
  title: 'Start your WordPress learning journey',
  lead: 'Build websites. Learn practical skills. Grow your career.',
  items: [
    {
      title: 'What you build towards',
      text: 'Ready to learn WordPress in Ludhiana? Join techcadd’s career-focused WordPress training and develop practical skills in website creation, customization, content management, basic SEO, plugins, responsive design, and website maintenance.'
    },
    {
      title: 'Who it is for',
      text: 'Whether you are a 12th-pass student, graduate, job seeker, freelancer, entrepreneur, or beginner, you can start learning WordPress step by step and work towards building practical website projects and a professional portfolio.'
    },
    {
      title: 'Before you enrol',
      text: 'Confirm the latest course curriculum, duration, mode, fees, batch timings, and centre details directly with techcadd.'
    }
  ]
}

export const WORDPRESS_NARRATIVE = [
  CURRICULUM,
  WHY_THIS_PROGRAMME,
  WHY_TECHCADD,
  START_LEARNING
]

/* ------------------------------------------------------------------
   What students say.

   The source reviews are anonymous — each is identified only by where
   the student is from — so `name` carries that rather than an invented
   personal name. It also has to be unique per entry: CourseTestimonials
   keys both the slides and the dots on it, which is why the four from
   Ludhiana are distinguished here. See testimonials() in shared.js.
------------------------------------------------------------------ */
export const WORDPRESS_TESTIMONIALS = [
  {
    quote:
      'I joined the WordPress course as a beginner and found the practical approach very helpful. I learned how to create pages, customize themes, use plugins, and manage a complete website.',
    name: 'Beginner from Ludhiana',
    course: 'WordPress',
    detail: 'techcadd student, Ludhiana',
    rating: 5,
    initials: 'LD'
  },
  {
    quote:
      'The course helped me understand WordPress step by step. The practical website projects gave me more confidence than learning only from theory.',
    name: 'Student from the Chandigarh region',
    course: 'WordPress',
    detail: 'techcadd student, Chandigarh region',
    rating: 5,
    initials: 'CR'
  },
  {
    quote:
      'Before joining the course, I had very little knowledge of website development. After practising with WordPress, I can now understand how a business website is created and managed.',
    name: 'Career starter from Ludhiana',
    course: 'WordPress',
    detail: 'techcadd student, Ludhiana',
    rating: 5,
    initials: 'LC'
  },
  {
    quote:
      'I wanted to learn a skill that could support my freelance plans. WordPress training helped me understand website creation, plugins, themes, forms, and basic SEO.',
    name: 'Aspiring freelancer from Khanna',
    course: 'WordPress',
    detail: 'techcadd student, Khanna',
    rating: 5,
    initials: 'KH'
  },
  {
    quote:
      'The practical assignments were the most useful part for me. Creating a website from the beginning helped me understand WordPress much better.',
    name: 'Project-led learner from Ludhiana',
    course: 'WordPress',
    detail: 'techcadd student, Ludhiana',
    rating: 5,
    initials: 'LP'
  },
  {
    quote:
      'The training gave me a good foundation in WordPress and website management. I especially liked learning about themes, Elementor, plugins, and responsive website design.',
    name: 'Student from Chandigarh',
    course: 'WordPress',
    detail: 'techcadd student, Chandigarh',
    rating: 5,
    initials: 'CH'
  },
  {
    quote:
      'I joined after completing my graduation and wanted to move towards the web field. The course helped me understand the basics and gave me practical project experience.',
    name: 'Graduate from Ludhiana',
    course: 'WordPress',
    detail: 'techcadd student, Ludhiana',
    rating: 5,
    initials: 'LG'
  },
  {
    quote:
      'The WordPress classes were easy to follow for a beginner. I learned how to manage website content and make basic changes without depending on someone else for every small update.',
    name: 'Student from Moga',
    course: 'WordPress',
    detail: 'techcadd student, Moga',
    rating: 5,
    initials: 'MO'
  },
  {
    quote:
      'I found the combination of WordPress and basic SEO useful. Now I have a better understanding of how website design, content, and search visibility work together.',
    name: 'SEO-focused learner from Ludhiana',
    course: 'WordPress',
    detail: 'techcadd student, Ludhiana',
    rating: 5,
    initials: 'LS'
  },
  {
    quote:
      'The project-based learning helped me build confidence. I would recommend practical WordPress training to students who want to explore website development or freelancing.',
    name: 'Freelance-track learner, Chandigarh region',
    course: 'WordPress',
    detail: 'techcadd student, Chandigarh region',
    rating: 5,
    initials: 'CF'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.
------------------------------------------------------------------ */
export const WORDPRESS_FAQS = [
  {
    q: 'What is a WordPress Course in Ludhiana?',
    a: 'A **WordPress Course in Ludhiana** teaches students how to create, customize, manage, optimize, and maintain websites using WordPress. The training generally covers themes, plugins, pages, posts, responsive design, basic SEO, security, backups, and practical website projects.'
  },
  {
    q: 'Who can join a WordPress Course at techcadd?',
    a: 'Students after 12th, college students, graduates, job seekers, freelancers, entrepreneurs, and beginners interested in website creation can learn WordPress. Advanced programming knowledge is not necessarily required to start with the fundamentals.'
  },
  {
    q: 'Do I need coding knowledge to learn WordPress?',
    a: 'No. Beginners can learn the basic WordPress website-building process without advanced coding knowledge. However, learning basic **HTML** and **CSS** can be beneficial for students who want to progress toward advanced website customization.'
  },
  {
    q: 'What will I learn in WordPress training?',
    a: 'Students can learn WordPress installation and setup, themes, plugins, pages, posts, menus, media management, **Elementor** or other page-building workflows, responsive design, basic SEO, website security, backups, performance optimization, and practical website development.'
  },
  {
    q: 'Can I learn WordPress after completing 12th?',
    a: 'Yes. Students who have completed 12th can start learning WordPress. It can be a useful practical skill for learners interested in website development, freelancing, digital business, or further IT training.'
  },
  {
    q: 'Can WordPress help me start freelancing?',
    a: 'Yes, WordPress skills can support a freelancing career. After developing sufficient practical experience, learners can offer suitable services such as business website creation, website updates, landing pages, content management, basic SEO implementation, and website maintenance.'
  },
  {
    q: 'Is WordPress useful for SEO?',
    a: 'Yes. WordPress provides features and tools that can support SEO-friendly website management. Students can learn fundamentals such as SEO-friendly URLs, headings, metadata, image optimization, internal linking, content structure, and sitemap concepts.'
  },
  {
    q: 'What career options are available after learning WordPress?',
    a: 'Depending on skills, experience, and portfolio quality, learners can explore positions such as WordPress Developer, Website Executive, WordPress Administrator, Web Content Executive, Website Support Executive, or Junior Web Developer. Freelancing and self-employment are additional possibilities.'
  },
  {
    q: 'Can I create an e-commerce website with WordPress?',
    a: 'Yes. WordPress can be used with **WooCommerce** to create e-commerce websites. Students can learn basic concepts such as product management, categories, pricing, product images, cart functionality, checkout, and online-store administration.'
  },
  {
    q: 'How long does it take to learn WordPress?',
    a: 'The time required depends on the learner’s background, course curriculum, and practice routine. Beginners can start with the fundamentals and gradually develop practical skills through assignments and website projects. The exact duration of the techcadd course should be confirmed with the centre.'
  },
  {
    q: 'Can beginners join WordPress classes in Ludhiana?',
    a: 'Yes. A beginner-friendly WordPress course can start with basic concepts before progressing to website customization, plugins, SEO, security, and practical projects. Regular practice is important for building confidence.'
  },
  {
    q: 'Why choose techcadd for WordPress training in Ludhiana?',
    a: 'techcadd focuses on practical and career-oriented learning. Students can develop WordPress skills through structured concepts, hands-on practice, and website projects while building a foundation for employment, freelancing, or further web-development learning.'
  },
  {
    q: 'Can WordPress be learned alongside digital marketing?',
    a: 'Yes. WordPress and digital marketing complement each other. Understanding WordPress can help digital marketing learners manage website content, create landing pages, publish SEO-focused content, and understand basic on-page optimization.'
  },
  {
    q: 'Is a WordPress certificate enough to get a job?',
    a: 'A certificate can demonstrate course completion, but employers generally value practical skills, projects, problem-solving ability, and relevant experience as well. Building a strong WordPress portfolio alongside training can improve your ability to demonstrate what you can actually do.'
  },
  {
    q: 'Where can I learn a WordPress Course in Ludhiana?',
    a: 'Students looking for **WordPress training in Ludhiana** can explore techcadd’s course options and confirm the latest course curriculum, duration, mode, fees, batch timings, and centre details directly with techcadd before enrolment.'
  }
]
