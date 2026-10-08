/* ==================================================================
   Long-form copy for the Shopify course page.

   Fifth of the courses in marketing.js to carry editorial copy of its
   own, and split out for the same reason as the others — that file
   seeds six courses, and this is one course's content. See
   ./digital-marketing-copy.js, ./social-media-marketing-copy.js,
   ./google-ads-copy.js and ./wordpress-copy.js.

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
   neighbouring sections share a background. The two sections at the
   `careers` slot run tint, paper into the dark enquiry form.
================================================================== */

export const SHOPIFY_OVERVIEW = {
  title: 'The Shopify course in Ludhiana that ends in a store you have built',
  lead: 'If you are looking for a **Shopify course in Ludhiana** that focuses on practical e-commerce skills, techcadd offers a career-focused learning path for students, entrepreneurs, freelancers, business owners, and aspiring e-commerce professionals. Shopify is widely used to create and manage online stores, making practical knowledge of store setup, product management, themes, apps, payments, shipping, SEO, and store optimisation valuable for today’s e-commerce market.',
  body: [
    'The **Shopify training in Ludhiana** is designed to take learners from the fundamentals of Shopify to building and managing a professional online store. Students can learn how to configure a Shopify store, add products and collections, customise themes, integrate essential apps, manage orders and inventory, and understand Shopify SEO and e-commerce marketing.',
    'The course is suitable for 12th-pass students, graduates, job seekers, freelancers, and business owners who want to develop practical Shopify and e-commerce skills. With hands-on learning and project-based practice, learners can build a portfolio while developing skills relevant to Shopify store management, e-commerce development, freelancing, and online business.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const SHOPIFY_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do a Shopify course in Ludhiana',
  lead: 'A **Shopify course in Ludhiana** is suitable for learners from different educational and professional backgrounds. You do not need to be an expert in coding or e-commerce to start learning Shopify. The platform is designed to make online store creation accessible, while professional Shopify training can help learners understand the complete process of building, managing, customising, and growing an e-commerce store.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th-Pass Students',
      text: 'Students who have completed Class 12 can consider Shopify training as an early career skill. Instead of learning only theoretical concepts, students can develop practical knowledge of e-commerce and online business. A Shopify course can introduce them to store creation, product listing, theme customisation, order management, basic SEO, apps, and online selling — skills that can later support careers in e-commerce, digital marketing, Shopify store management, or freelancing.',
      tag: 'Start early'
    },
    {
      icon: 'career',
      title: 'Graduates Looking for Job Opportunities',
      text: 'Graduates from BBA, BCA, B.Com, BA, B.Sc., or other backgrounds can learn Shopify to add an industry-relevant skill to their resumes. Employers increasingly look for candidates who can work with digital platforms and understand online business operations. Shopify training can help graduates develop practical experience instead of relying only on academic qualifications.',
      tag: 'Any stream'
    },
    {
      icon: 'mentor',
      title: 'Students from Non-Technical Backgrounds',
      text: 'You do not necessarily need an IT degree to learn Shopify. Students from commerce, management, arts, or other non-technical backgrounds can learn the fundamentals through structured training. The focus can be on understanding store functionality, product management, themes, apps, customer experience, and e-commerce operations rather than advanced programming.',
      tag: 'No IT degree needed'
    },
    {
      icon: 'terminal',
      title: 'Aspiring Freelancers',
      text: 'Shopify skills can also be useful for people planning to start freelancing. Businesses may need professionals who can create Shopify stores, upload products, customise themes, install and configure apps, improve store presentation, and provide ongoing store support. A **Shopify training course in Ludhiana** can give beginners practical projects that help them understand how real client requirements work.',
      tag: 'Turn it into income'
    },
    {
      icon: 'chart',
      title: 'Entrepreneurs and Business Owners',
      text: 'If you already sell products offline or through social media, learning Shopify can help you understand how to establish a dedicated online store. Business owners can learn how to organise products, create collections, manage orders, configure payments and shipping, and improve the customer buying journey. This can be particularly useful for local Ludhiana businesses looking to expand beyond their physical customer base.',
      tag: 'Take it online'
    },
    {
      icon: 'stack',
      title: 'Digital Marketing Learners',
      text: 'Shopify and digital marketing work closely together. Learners who already understand SEO, social media marketing, Google Ads, Meta Ads, or content marketing can add Shopify knowledge to their existing skill set. This combination can help them understand how traffic generated through marketing campaigns ultimately converts through an e-commerce website.',
      tag: 'Pairs with marketing'
    },
    {
      icon: 'spark',
      title: 'Job Seekers Wanting a Practical Skill',
      text: 'If you are currently searching for employment and want to build a practical digital skill, Shopify can be an option worth considering. Training can help you develop hands-on experience with store setup and management, giving you projects that can be demonstrated during interviews or added to a professional portfolio.',
      tag: 'Something to show'
    },
    {
      icon: 'code',
      title: 'Existing Web Designers and Developers',
      text: 'Web designers and developers can also benefit from Shopify training. Those familiar with **HTML**, **CSS**, or **JavaScript** may find it easier to understand Shopify’s customisation environment. Shopify knowledge can expand the services they offer to clients and create opportunities in e-commerce website development and store maintenance.',
      tag: 'Widen your services'
    },
    {
      icon: 'support',
      title: 'Professionals Planning a Career Change',
      text: 'Working professionals who want to move into e-commerce, web development, digital marketing, or freelancing can use Shopify training to build a new skill without necessarily starting from an advanced technical level. A structured course can provide a clearer learning path and practical exposure.',
      tag: 'A way across'
    },
    {
      icon: 'star',
      title: 'Anyone Interested in E-Commerce',
      text: 'Most importantly, Shopify is suitable for anyone genuinely interested in learning how online stores work. Whether your goal is to get a job, start freelancing, build an online business, support an existing business, or develop e-commerce expertise, learning Shopify can provide a practical foundation.',
      tag: 'Open to all'
    }
  ],
  note: 'For learners in Ludhiana, choosing a local **Shopify institute in Ludhiana** with practical training, projects, updated tools, and career-oriented guidance can make the learning process more useful. Before enrolling, compare the curriculum, hands-on training, trainer expertise, project work, course duration, and career support offered.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'shopify-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn in the Shopify course',
  lead: 'A practical **Shopify course in Ludhiana** should help you move from understanding the basics of e-commerce to confidently creating and managing an online store. At techcadd, learners can focus on practical concepts that are useful for employment, freelancing, entrepreneurship, and e-commerce projects.',
  items: [
    {
      title: 'Shopify Fundamentals',
      text: 'You will begin with the fundamentals of Shopify and understand how the platform works. This includes learning about Shopify plans, store structure, dashboards, settings, domains, storefronts, and the basic workflow involved in launching an e-commerce business.'
    },
    {
      title: 'Shopify Store Setup',
      text: 'You will learn how to set up and configure a Shopify store from the beginning. This can include store information, currency, basic settings, navigation, menus, checkout configuration, customer accounts, and other essential settings required for a professional online store.'
    },
    {
      title: 'Product & Collection Management',
      text: 'Product management is an important part of every e-commerce store. You can learn how to add products, write product descriptions, upload images, organise variants, manage pricing and inventory, and create collections. You will also understand how product organisation can make it easier for customers to browse and purchase products.'
    },
    {
      title: 'Shopify Themes & Store Design',
      text: 'The course can introduce you to Shopify themes and storefront design. You will learn how to select an appropriate theme, customise sections, create an attractive homepage, organise menus, design product pages, and improve the overall customer experience. You can also learn the fundamentals of responsive design so that your store works across desktops, tablets, and mobile devices.'
    },
    {
      title: 'Shopify Apps & Integrations',
      text: 'Shopify’s ecosystem includes applications that extend store functionality. You will learn how to identify suitable apps and understand their role in areas such as reviews, marketing, email, customer support, analytics, shipping, product discovery, and store optimisation. The focus should be on selecting useful applications rather than installing unnecessary apps that can make a store complicated or negatively affect performance.'
    },
    {
      title: 'Payments, Shipping & Orders',
      text: 'You will understand the operational side of running a Shopify store. This includes learning about payment configuration, shipping settings, order processing, fulfilment, refunds, customer information, and basic inventory management. These skills can be particularly useful for students who want to manage an online store professionally or help businesses with day-to-day e-commerce operations.'
    },
    {
      title: 'Shopify SEO',
      text: 'Search engine optimisation is an important part of e-commerce. You can learn the fundamentals of **Shopify SEO**, including optimising product titles, descriptions, URLs, images, collections, internal links, and other on-page elements. You can also learn how keyword research can be applied to product and collection pages to improve their visibility in search engines.'
    },
    {
      title: 'E-Commerce Marketing',
      text: 'A Shopify store needs targeted traffic to generate sales. The course can introduce you to e-commerce marketing concepts such as social media promotion, content marketing, email marketing, search engine optimisation, paid advertising, and conversion-focused store optimisation. This makes Shopify particularly useful for learners who want to combine it with digital marketing skills.'
    },
    {
      title: 'Analytics & Performance',
      text: 'You will learn how to understand important e-commerce performance indicators. This can include traffic, product performance, orders, revenue, conversion-related metrics, and customer behaviour. Understanding analytics helps store owners and e-commerce professionals make decisions based on data rather than assumptions.'
    },
    {
      title: 'Practical Projects & Portfolio Development',
      text: 'The most valuable part of a **Shopify training course in Ludhiana** can be project-based learning. Instead of completing the course with only theoretical knowledge, you can work on a demo e-commerce store and practise setting up products, collections, navigation, themes, apps, SEO elements, payments, shipping, and marketing components. By completing practical projects, you can develop a portfolio that demonstrates your Shopify capabilities to employers, freelance clients, or potential business partners.'
    }
  ],
  tools: {
    label: 'Tools you can learn to work with',
    items: [
      'Shopify',
      'Shopify Theme Editor',
      'Shopify App Store',
      'Google Analytics',
      'Google Search Console',
      'Google Keyword Planner',
      'Google Merchant Center',
      'Google Ads',
      'Meta Business Suite',
      'Canva',
      'Microsoft Clarity',
      'Email marketing platforms'
    ]
  },
  close: 'The overall objective is to help learners understand not just how to create a Shopify store, but how to manage, optimise, market, and continuously improve an e-commerce business.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'shopify-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why choose a Shopify course in Ludhiana',
  lead: 'Choosing the right **Shopify course in Ludhiana** can help you develop practical e-commerce skills that go beyond simply learning how to create an online store. A structured Shopify training program can give you an understanding of how an e-commerce website is planned, built, managed, optimised, and maintained in a real business environment.',
  items: [
    {
      title: 'Learn a Practical E-Commerce Skill',
      text: 'Shopify is a popular platform for businesses that want to establish an online presence without building an entire e-commerce system from scratch. Learning Shopify gives students practical exposure to store setup, product management, collections, themes, navigation, apps, payments, shipping, orders, and customer experience. For students and job seekers in Ludhiana, this can be a useful addition to their existing qualifications — working on practical store-building activities rather than learning only theoretical concepts.'
    },
    {
      title: 'Build Your Own Online Store',
      text: 'One of the biggest advantages of learning Shopify is the ability to apply your knowledge directly. During practical training, learners can work towards creating a functional online store, understanding the complete journey from selecting products and creating collections to designing the storefront and preparing it for customers. This is particularly useful for aspiring entrepreneurs — if you have a clothing business, jewellery brand, handicraft business, beauty products, home products, or another product-based business in Ludhiana, Shopify can provide a structured platform for taking it online.'
    },
    {
      title: 'Develop Freelancing Opportunities',
      text: 'Shopify knowledge can also support a freelancing career. Businesses often require assistance with store creation, product uploads, theme customisation, store maintenance, app integration, and basic optimisation. Students who complete practical projects can use those projects as examples of their capabilities when approaching potential clients. With additional skills in SEO, digital marketing, graphic design, or web development, Shopify can become part of a broader freelance service offering.'
    },
    {
      title: 'Combine Shopify with Digital Marketing',
      text: 'An online store needs more than attractive design. It also needs visitors and conversions, which makes Shopify particularly valuable when combined with digital marketing skills. Learners can understand how SEO, social media, paid advertising, content, email marketing, and conversion optimisation work alongside an e-commerce website. Someone who understands both Shopify and digital marketing can potentially provide more complete solutions to businesses than someone who knows only one area.'
    },
    {
      title: 'Suitable for Different Career Goals',
      text: 'A Shopify course is not limited to one career path. Depending on your interests and additional skills, it can support opportunities related to e-commerce operations, Shopify store management, e-commerce website development, digital marketing, web design, freelancing, and entrepreneurship. The right training should therefore focus on practical learning rather than simply teaching platform features — students should get opportunities to create stores, solve common e-commerce problems, experiment with themes and apps, and understand how a professional store is managed.'
    },
    {
      title: 'Learn in a Local Training Environment',
      text: 'For students searching for **Shopify classes in Ludhiana**, local classroom or instructor-supported training can provide an opportunity to ask questions, receive feedback, and learn through guided practice. This can be particularly helpful for beginners who may find self-learning difficult when they encounter technical or store-management issues. A good training program should also keep its curriculum aligned with current Shopify features and e-commerce practices, because online selling continues to evolve.'
    },
    {
      title: 'Create a Portfolio While Learning',
      text: 'Portfolio projects can make your learning more valuable. Instead of finishing a course with only a certificate, students can work on practical Shopify projects that demonstrate what they can actually do. A portfolio may include a complete demo store, customised homepage, product catalogue, collection structure, responsive design, essential app integrations, SEO optimisation, and an e-commerce marketing plan — something concrete to discuss during interviews or with freelance clients.'
    },
    {
      title: 'A Career-Focused Learning Approach',
      text: 'The purpose of professional **Shopify training in Ludhiana** should not simply be to teach learners where to click inside the Shopify dashboard. It should help them understand why different features are used and how they contribute to an online business. With practical assignments, guided projects, problem-solving exercises, and exposure to real-world e-commerce workflows, learners can gradually develop confidence in working with Shopify.'
    }
  ],
  close: 'Whether your goal is to become a Shopify store manager, start freelancing, launch your own online business, or strengthen your existing digital marketing skills, a structured Shopify course can provide a practical starting point for building an e-commerce-focused career.'
}

/* ---------------------------------------------------------------- */

/* The closing pitch, immediately above the enquiry form. */
const JOIN_THE_COURSE = {
  id: 'shopify-join',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Get started',
  title: 'Join the Shopify course at techcadd',
  lead: 'Build practical Shopify skills for your e-commerce career.',
  items: [
    {
      title: 'What you will be able to do',
      text: 'Ready to learn how to create, manage, customise, and optimise professional online stores? The **Shopify Course in Ludhiana** at techcadd is designed for students, graduates, job seekers, freelancers, entrepreneurs, and business owners who want practical e-commerce skills.'
    },
    {
      title: 'What the curriculum covers',
      text: 'A career-focused curriculum covering Shopify store setup, product management, themes, apps, payments, shipping, Shopify SEO, analytics, e-commerce marketing, and practical projects.'
    },
    {
      title: 'Before you enrol',
      text: 'Course duration depends on the depth of training, class frequency, projects, and the additional e-commerce topics included. Confirm the current curriculum, duration, mode, fees, and batch timings directly with techcadd.'
    }
  ]
}

export const SHOPIFY_NARRATIVE = [CURRICULUM, WHY_THIS_PROGRAMME, JOIN_THE_COURSE]

/* ------------------------------------------------------------------
   PLACEHOLDER TESTIMONIALS — NOT VERIFIED REVIEWS.

   The source copy these came from carried an explicit note: they are
   sample testimonial formats, and they must be replaced with verified
   reviews from actual techcadd students before publication. The names
   and cities below are illustrative, not real people.

   That note is repeated here rather than only in the handover message
   because this file is where someone will be standing when they need
   to know. Publishing invented reviews attributed to named individuals
   as though they were genuine is misleading to prospective students
   and, in many jurisdictions, unlawful.

   Replace every entry below with a real, attributable review — or
   delete `testimonials` from the seed in marketing.js, which makes the
   page fall back to the generic quotes in shared.js.
------------------------------------------------------------------ */
export const SHOPIFY_TESTIMONIALS = [
  {
    quote:
      'The Shopify training was very practical. I started with zero knowledge and learned how to create a complete online store, add products and customise the theme. The step-by-step approach made it easy to understand.',
    name: 'Aman',
    course: 'Shopify',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'A'
  },
  {
    quote:
      'I was from a non-technical background and was initially worried that Shopify would be difficult. The concepts were explained clearly and I got enough practice to build my own demo store.',
    name: 'Simran',
    course: 'Shopify',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'S'
  },
  {
    quote:
      'I joined the Shopify course because I wanted to explore freelancing. Working on practical projects helped me understand what clients actually need from a Shopify store.',
    name: 'Harpreet',
    course: 'Shopify',
    detail: 'Khanna',
    rating: 5,
    initials: 'H'
  },
  {
    quote:
      'The course gave me a much better understanding of how an e-commerce website works. Product management, collections, themes, apps and store settings were some of the areas I found particularly useful.',
    name: 'Manpreet',
    course: 'Shopify',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'M'
  },
  {
    quote:
      'I was looking for a skill that I could add to my existing digital marketing knowledge. Shopify training helped me understand how marketing and an online store work together.',
    name: 'Navjot',
    course: 'Shopify',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'N'
  },
  {
    quote:
      'What I liked most was getting hands-on practice instead of only watching demonstrations. By the end of the training, I had worked on a complete Shopify store project.',
    name: 'Riya',
    course: 'Shopify',
    detail: 'Jalandhar',
    rating: 5,
    initials: 'R'
  },
  {
    quote:
      'I wanted to understand how I could take my existing business online. The Shopify classes helped me understand products, collections, payments, shipping and the basic customer journey.',
    name: 'Gurpreet',
    course: 'Shopify',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'G'
  },
  {
    quote:
      'The training was explained in a simple way and I could ask questions whenever I got stuck. The practical sessions made the learning process much more comfortable.',
    name: 'Karan',
    course: 'Shopify',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'K'
  },
  {
    quote:
      'Creating a Shopify store as a project was very helpful. It gave me something practical to show when discussing my skills and helped me understand the complete store-building process.',
    name: 'Jaspreet',
    course: 'Shopify',
    detail: 'Chandigarh',
    rating: 5,
    initials: 'J'
  },
  {
    quote:
      'I joined to learn about e-commerce and ended up learning much more about store design, SEO, apps and online selling. It was a useful skill to add alongside my other digital skills.',
    name: 'Priya',
    course: 'Shopify',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'P'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.
------------------------------------------------------------------ */
export const SHOPIFY_FAQS = [
  {
    q: 'What is a Shopify course in Ludhiana?',
    a: 'A **Shopify course in Ludhiana** is a practical training program that teaches students how to create, customise, manage, and optimise an online store using Shopify. It can cover store setup, products, themes, apps, payments, shipping, SEO, analytics, and e-commerce marketing.'
  },
  {
    q: 'Who can join a Shopify course?',
    a: 'Students, graduates, job seekers, freelancers, entrepreneurs, business owners, web designers, and digital marketing learners can join a Shopify course. Beginners can also start learning Shopify without an advanced technical background.'
  },
  {
    q: 'Is Shopify suitable for beginners?',
    a: 'Yes. Shopify is designed to simplify many aspects of creating and managing an online store. A structured Shopify training program can help beginners learn the platform step by step through practical exercises and projects.'
  },
  {
    q: 'Do I need coding knowledge to learn Shopify?',
    a: 'No, advanced coding knowledge is not essential for learning the fundamentals of Shopify. However, basic knowledge of **HTML**, **CSS**, or **JavaScript** can be useful for learners who want to explore advanced theme customisation and development.'
  },
  {
    q: 'What will I learn in Shopify training?',
    a: 'A comprehensive Shopify course can cover store creation, the Shopify dashboard, products, collections, inventory, themes, navigation, apps, payments, shipping, order management, Shopify SEO, analytics, e-commerce marketing, and store optimisation.'
  },
  {
    q: 'Can I learn Shopify for freelancing?',
    a: 'Yes. Shopify skills can be used for freelance services such as store setup, product listing, theme customisation, app configuration, store maintenance, and basic e-commerce optimisation. Practical projects can also help learners develop a portfolio for approaching potential clients.'
  },
  {
    q: 'Can Shopify help me start my own online business?',
    a: 'Yes. Shopify provides tools for creating and managing an online storefront. Training can help you understand how to organise products, configure store settings, manage orders, customise the storefront, and create a better online shopping experience.'
  },
  {
    q: 'Is Shopify useful with digital marketing?',
    a: 'Yes. Shopify and digital marketing can complement each other. SEO, Google Ads, social media marketing, content marketing, email marketing, and conversion optimisation can help attract potential customers to an online store.'
  },
  {
    q: 'What tools are taught in a Shopify course?',
    a: 'Depending on the course curriculum, learners may work with **Shopify**, the Shopify Theme Editor, the Shopify App Store, **Google Analytics**, Google Search Console, Google Keyword Planner, **Canva**, Google Merchant Center, Meta Business Suite, Google Ads, and other e-commerce tools.'
  },
  {
    q: 'How long does a Shopify course take?',
    a: 'The duration depends on the institute and curriculum. A practical course may range from several weeks to a few months depending on the depth of training, class frequency, projects, and additional e-commerce topics included.'
  },
  {
    q: 'Is Shopify training available in Ludhiana?',
    a: 'Yes. Students looking for **Shopify training in Ludhiana**, **Shopify classes in Ludhiana**, or a **Shopify institute in Ludhiana** can compare local training providers based on curriculum, practical projects, trainer experience, learning mode, course duration, and career support.'
  },
  {
    q: 'Can I get a job after completing a Shopify course?',
    a: 'A Shopify course can help develop relevant skills for roles involving e-commerce operations, Shopify store management, e-commerce support, web design, digital marketing, and freelance Shopify services. Employment depends on your skills, portfolio, experience, and the requirements of individual employers.'
  },
  {
    q: 'Can graduates from non-technical backgrounds learn Shopify?',
    a: 'Yes. Shopify training can be suitable for graduates from commerce, management, arts, science, and other backgrounds. Learners can begin with the fundamentals and gradually develop practical e-commerce skills.'
  },
  {
    q: 'What should I look for when choosing a Shopify institute in Ludhiana?',
    a: 'Look for a course with an updated curriculum, practical assignments, live or project-based learning, experienced trainers, portfolio development, and relevant e-commerce tools. It is also useful to check the course duration, mode of training, class structure, and career guidance before enrolling.'
  },
  {
    q: 'Is a Shopify certificate enough to get a job?',
    a: 'A certificate can demonstrate that you completed training, but practical skills and demonstrable work are usually more important when applying for e-commerce-related roles. Building Shopify projects and a portfolio can help you demonstrate what you can actually do.'
  }
]
