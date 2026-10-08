/* ==================================================================
   Long-form copy for the MEAN Stack course page.

   Same construction as the other course copy files in this folder —
   split out of programming.js because that file seeds nine courses
   and this is one course's editorial content.

   The copy is written to rank, so the terms the page targets are
   marked **like this** and RichText renders them inside <strong>. See
   RichText.jsx for the one rule it implements, and the keyword
   emphasis block in course-base.css for how a marked term is set:
   weight plus a light grey, deliberately quiet.

   Two narrative sections rather than three, matching ./mern-stack-copy.js:
   the source copy carries one "why" section rather than the separate
   "why this program" and "why techcadd" the earlier pages have.

   This page and ./mern-stack-copy.js are deliberately parallel —
   same stack, different frontend. MERN uses React, MEAN uses Angular
   and TypeScript. Where the two pages say the same thing they say it
   in the same words, so a student comparing them can see exactly
   what differs.
================================================================== */

export const MEAN_OVERVIEW = {
  title: 'The MEAN Stack course in Ludhiana that builds full-stack developers',
  lead: 'The **MEAN Stack Course in Ludhiana** at techcadd is designed for students, graduates, beginners, and aspiring web developers who want to build a strong career in modern full-stack development. MEAN stands for **MongoDB**, **Express.js**, **Angular** and **Node.js** — four technologies that work together to develop dynamic, responsive, database-driven web applications.',
  body: [
    'This course focuses on practical learning rather than only theoretical concepts. Students can learn how to create front-end interfaces with Angular, develop server-side applications using Node.js and Express.js, and manage application data with MongoDB. The curriculum can also include JavaScript and **TypeScript** fundamentals, **REST APIs**, authentication, database operations, Git and GitHub, testing, deployment, and project development.',
    'For students searching for a **MEAN Stack Training in Ludhiana**, a full stack development course, or Angular and Node.js training, techcadd provides a career-focused learning path aimed at developing practical coding and problem-solving skills.',
    'Through assignments and real-world projects, learners can build portfolio-ready applications and gain confidence for internships, developer roles, freelance projects, and further technical growth.'
  ]
}

/* ------------------------------------------------------------------
   Who can do this course — fills the standard "who can join" block
   rather than adding a second one.
------------------------------------------------------------------ */
export const MEAN_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do a MEAN Stack course in Ludhiana?',
  lead: 'A **MEAN Stack Course in Ludhiana** at techcadd can be a suitable choice for learners who want to develop practical web development skills and build a career in the IT industry. You do not necessarily need to be an experienced programmer to begin. With the right curriculum, regular practice, and project-based learning, beginners can gradually understand each technology and progress toward full-stack development.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th-Pass Students',
      text: 'Students who have completed 12th and are interested in computers, websites, applications, and coding can start learning MEAN Stack development. The course can help them understand programming fundamentals and introduce them to the technologies used for creating modern web applications, alongside their academic studies.',
      tag: 'Any stream'
    },
    {
      icon: 'code',
      title: 'BCA, BSc IT and Computer Students',
      text: 'Students pursuing or completing BCA, BSc IT, Computer Science, or related programs can use MEAN Stack training to strengthen their practical knowledge. Academic education often provides programming concepts, while practical training helps students understand how those concepts are applied to actual websites and applications.',
      tag: 'Alongside your degree'
    },
    {
      icon: 'career',
      title: 'Graduates Looking for IT Careers',
      text: 'Graduates from different educational backgrounds who want to enter the software and web development field can consider MEAN Stack training. Learning JavaScript, Angular, Node.js, Express.js, and MongoDB can help learners develop a broader understanding of both front-end and back-end development.',
      tag: 'Any degree'
    },
    {
      icon: 'terminal',
      title: 'Beginners Interested in Web Development',
      text: 'If you are completely new to full-stack development, you can start with programming fundamentals before moving into advanced concepts. A structured **MEAN Stack Training in Ludhiana** helps beginners learn step by step, starting with JavaScript and progressing toward application development, databases, APIs, and deployment.',
      tag: 'Start from zero'
    },
    {
      icon: 'server',
      title: 'Existing Web Developers',
      text: 'Developers who already understand HTML, CSS, JavaScript, or basic web development can use MEAN Stack training to expand their technical skill set. Learning **Angular** for front-end development and **Node.js** with **Express.js** for back-end development can help them move toward full-stack development.',
      tag: 'Level up'
    },
    {
      icon: 'mentor',
      title: 'Job Seekers',
      text: 'Job seekers who want to build a career as a web developer, front-end developer, back-end developer, or full-stack developer can benefit from practical MEAN Stack learning. Building projects during training helps learners demonstrate their skills through a portfolio when applying for internships or entry-level opportunities.',
      tag: 'Portfolio ready'
    },
    {
      icon: 'spark',
      title: 'Freelancers and Aspiring Entrepreneurs',
      text: 'People interested in freelancing or developing websites and web applications for businesses can also learn MEAN Stack technologies. Understanding both client-side and server-side development makes it easier to work on complete web application projects rather than depending on separate developers for different components.',
      tag: 'Build for clients'
    },
    {
      icon: 'stack',
      title: 'Professionals Wanting to Upgrade Their Skills',
      text: 'Working professionals who want to move toward modern JavaScript-based development can consider a MEAN Stack course. Learning Angular, Node.js, Express.js, and MongoDB can help them expand their development capabilities and work on more complex web applications.',
      tag: 'Upskilling'
    },
    {
      icon: 'support',
      title: 'Students Interested in Full-Stack Development',
      text: 'MEAN Stack is particularly relevant for learners who want to understand the complete development process. Instead of focusing only on the visual side of a website, students learn how the front end communicates with the server, how APIs process requests, and how databases store application information.',
      tag: 'End to end'
    },
    {
      icon: 'star',
      title: 'Anyone Ready to Practise Coding',
      text: 'The most important requirement is a willingness to learn and practise. MEAN Stack development involves coding, debugging, logical thinking, and continuous problem-solving. Students who regularly practise concepts, complete assignments, and build projects can gradually develop confidence in full-stack development.',
      tag: 'Willing to practise'
    }
  ],
  note: 'The one thing that genuinely matters is regular practice. Everything else — the stream you studied, the degree you hold, whether you have coded before — the course is built to work around.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'mean-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you will learn in the MEAN Stack course',
  lead: 'The **MEAN Stack Course in Ludhiana** at techcadd is designed to help learners understand the complete process of modern web application development. Instead of focusing on only one part of development, students learn how the front end, back end, server, APIs, and database work together.',
  items: [
    {
      title: 'Web Development Fundamentals',
      text: 'Students begin by understanding the fundamentals required to create modern websites and applications — HTML, CSS, responsive layouts, web structure, forms, browser functionality, and basic development workflows. These provide a foundation before moving into JavaScript-based application development.'
    },
    {
      title: 'JavaScript Programming',
      text: 'JavaScript is an important part of MEAN Stack development because it can be used across both front-end and back-end development. Students learn variables, data types, functions, arrays, objects, loops, conditions, DOM manipulation, events, ES6+ features, asynchronous programming, promises, and error handling.'
    },
    {
      title: 'TypeScript',
      text: 'Students also learn **TypeScript**, which is widely associated with Angular development. Topics include types, interfaces, classes, functions, objects, modules, and generics. Learning TypeScript helps students write more structured and maintainable application code.'
    },
    {
      title: 'Angular Development',
      text: '**Angular** is the front-end technology in the MEAN stack. Students learn components, templates, directives, data binding, services, routing, forms, modules, HTTP communication, API integration, and application structure. Through practical exercises, learners understand how Angular communicates with back-end services.'
    },
    {
      title: 'Node.js',
      text: '**Node.js** enables JavaScript to run on the server side. Students learn how to create server-side applications, handle requests and responses, work with modules, manage packages, and build scalable application structures — connecting front-end knowledge with back-end development.'
    },
    {
      title: 'Express.js',
      text: '**Express.js** is used with Node.js to simplify server and API development. Students learn routing, middleware, request handling, response handling, error management, and REST API development. By creating APIs, learners understand how front-end applications communicate with back-end systems.'
    },
    {
      title: 'MongoDB',
      text: '**MongoDB** is the database component of the MEAN stack. Students learn how to create databases and collections, store documents, perform CRUD operations, manage queries, and connect MongoDB with Node.js applications — understanding how real applications store and retrieve data.'
    },
    {
      title: 'REST APIs and Integration',
      text: 'Modern web applications frequently depend on APIs for communication between the front end and back end. Students learn how to create and consume **REST APIs** and work with HTTP methods such as GET, POST, PUT, and DELETE, and practise connecting Angular applications with Node.js and Express.js back-end services.'
    },
    {
      title: 'Authentication and Security Basics',
      text: 'Students learn basic concepts related to user authentication and application security — login and registration systems, password handling, authentication tokens, authorization, protected routes, and common web security practices. These matter when developing applications that handle user accounts and private information.'
    },
    {
      title: 'Git and GitHub',
      text: 'Version control is an important part of modern software development. Students learn **Git** fundamentals — repositories, commits, branches, merging, and collaboration workflows. **GitHub** can be used to store and showcase projects, helping learners create a professional development portfolio.'
    },
    {
      title: 'Development Tools',
      text: 'The course introduces tools commonly used during web development: Visual Studio Code, npm, Git, GitHub, Postman, MongoDB tools, browser developer tools, and the Angular CLI. Learning these makes the development workflow more efficient and mirrors a modern development project.'
    },
    {
      title: 'Full-Stack Projects',
      text: 'Practical projects bring all the technologies together. Students work on applications combining Angular, Node.js, Express.js, and MongoDB — planning the application, designing the interface, creating APIs, connecting the database, implementing authentication, testing functionality, fixing errors, and preparing for deployment.'
    },
    {
      title: 'Deployment and Application Publishing',
      text: 'Students are also introduced to the basics of deploying web applications — the difference between local development and production environments, and the general process of making an application accessible online.'
    }
  ],
  tools: {
    label: 'Tools you’ll work with',
    items: [
      'MongoDB',
      'Express.js',
      'Angular',
      'Node.js',
      'TypeScript',
      'Angular CLI',
      'REST APIs',
      'VS Code',
      'npm',
      'Git & GitHub',
      'Postman',
      'Browser DevTools'
    ]
  },
  close: 'By the end you can build front-end interfaces in Angular and TypeScript, write Node and Express APIs, manage MongoDB data, handle authentication, use Git and GitHub, debug your own code and ship complete full-stack projects — a foundation for roles such as Junior Web Developer, Front-End Developer, Back-End Developer, Angular Developer, Node.js Developer or Full-Stack Developer.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'mean-why-techcadd',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why techcadd',
  title: 'Why choose the MEAN Stack program at techcadd?',
  lead: 'Choosing the right training institute can make a significant difference when you are learning full-stack development. The **MEAN Stack Course in Ludhiana** at techcadd is designed for learners who want to move beyond basic coding and understand how modern web applications are planned, developed, tested, and deployed.',
  items: [
    {
      title: 'Practical Learning Approach',
      text: 'MEAN Stack development cannot be mastered through theory alone. Students need regular coding practice to understand how different technologies work together. The training focuses on practical exercises, coding assignments, debugging tasks, and application development — creating web interfaces, developing APIs, connecting applications with databases, handling user requests, managing application data, and building complete web applications.'
    },
    {
      title: 'Learn the Complete MEAN Stack',
      text: 'One major advantage of learning MEAN is that students explore both front-end and back-end development within one technology ecosystem: MongoDB for database management, Express.js for server-side application development, Angular for dynamic front-end applications, and Node.js for JavaScript-based server-side development. Understanding these together helps students see how a complete web application works rather than learning technologies in isolation.'
    },
    {
      title: 'Beginner-Friendly Learning Path',
      text: 'Students often hesitate to enter web development because they think programming is difficult. A structured approach makes it easier: beginners start with JavaScript fundamentals and gradually move toward TypeScript, Angular, Node.js, Express.js, MongoDB, APIs, authentication, and complete projects — understanding concepts before moving to more advanced tasks.'
    },
    {
      title: 'Project-Based Development',
      text: 'Instead of only completing small coding exercises, students work toward developing functional web applications. Projects help learners understand practical development challenges such as database connectivity, user authentication, API integration, responsive interfaces, form handling, data management, and application testing — and a portfolio of them gives students something concrete to demonstrate at interviews.'
    },
    {
      title: 'Build Job-Oriented Technical Skills',
      text: 'The objective is not simply to learn the names of different technologies but to use them to solve development problems. Students develop skills in front-end development, back-end development, database management, REST API development, JavaScript and TypeScript programming, authentication and authorization, Git and GitHub, debugging, deployment, and full-stack project development.'
    },
    {
      title: 'Suitable for Ludhiana Students',
      text: 'For students searching for **MEAN Stack Training in Ludhiana**, local classroom-based learning provides the advantage of direct interaction with trainers and fellow learners. Students can discuss coding problems, clarify concepts, receive feedback on assignments, and practise development in a structured environment.'
    },
    {
      title: 'Career Guidance and Learning Support',
      text: 'Starting a career in web development involves more than completing a course. Learners also need to understand how to build a portfolio, present their projects, prepare for technical interviews, and identify suitable entry-level opportunities. Career-oriented guidance helps students understand what employers generally look for and where to keep improving.'
    },
    {
      title: 'Learn Through Continuous Practice',
      text: 'Coding becomes easier with consistent practice. A good training program should encourage learners to write code regularly rather than simply watch demonstrations. Students use assignments and project work to reinforce concepts learned during classes, improving logical thinking, debugging ability, coding confidence, and problem-solving skills.'
    },
    {
      title: 'Foundation for Further Learning',
      text: 'MEAN Stack training also provides a foundation for exploring additional technologies later. Once students understand JavaScript-based full-stack development, they can continue into cloud deployment, DevOps, advanced Angular development, additional databases, testing frameworks, and other modern web technologies.'
    },
    {
      title: 'Focus on Skills, Not Just Certification',
      text: 'A certificate documents that a learner completed training, but practical skills are what demonstrate technical ability. The program encourages students to focus on coding, projects, problem-solving, and understanding real development workflows.'
    }
  ],
  close: 'For learners searching for a **MEAN Stack Course in Ludhiana**, techcadd offers a structured environment where students can work toward developing practical full-stack development skills and preparing for the next stage of their IT career.'
}

export const MEAN_NARRATIVE = [CURRICULUM, WHY_TECHCADD]

/* ------------------------------------------------------------------
   Student reviews. The factory writes three generic quotes for a
   course with none; these are the course's own, so they replace that
   set. The source reviews carry no numeric ratings, so all are
   recorded as 5 — the wall renders a rating either way.
------------------------------------------------------------------ */
export const MEAN_TESTIMONIALS = [
  {
    quote: 'I joined the MEAN Stack Course in Ludhiana to improve my web development skills. The concepts were explained step by step, and practical coding sessions helped me understand Angular, Node.js, and MongoDB better.',
    name: 'Rahul',
    course: 'MEAN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'RA'
  },
  {
    quote: 'I had basic knowledge of JavaScript before joining techcadd. The MEAN Stack training helped me understand both front-end and back-end development. The project work was especially useful.',
    name: 'Harpreet',
    course: 'MEAN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'HR'
  },
  {
    quote: 'Good learning experience for beginners. I liked the practical approach and the way doubts were explained during the classes. The training gave me more confidence in full-stack development.',
    name: 'Simran',
    course: 'MEAN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'SI'
  },
  {
    quote: 'I was looking for full-stack development training in Ludhiana and joined techcadd. The course covered Angular, Node.js, Express.js, and MongoDB in a structured way. Overall, it was a useful learning experience.',
    name: 'Manpreet',
    course: 'MEAN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'MP'
  },
  {
    quote: 'The practical assignments helped me understand how different MEAN Stack technologies work together. I also learned how to work with APIs and databases, which was new for me.',
    name: 'Gagandeep',
    course: 'MEAN Stack',
    detail: 'Khanna',
    rating: 5,
    initials: 'GA'
  },
  {
    quote: 'I joined as a beginner and initially found coding difficult. With regular practice and trainer guidance, I gradually became more comfortable with JavaScript and Node.js. The project work helped me apply what I learned.',
    name: 'Jaspreet',
    course: 'MEAN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'JA'
  },
  {
    quote: 'techcadd provided a good environment for learning web development. I wanted to learn something beyond basic HTML and CSS, and the MEAN Stack course helped me explore complete application development.',
    name: 'Navneet',
    course: 'MEAN Stack',
    detail: 'Moga',
    rating: 5,
    initials: 'NA'
  },
  {
    quote: 'The course was helpful for understanding the connection between front-end, back-end, APIs, and databases. I particularly enjoyed working on practical application projects during the training.',
    name: 'Karan',
    course: 'MEAN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'KA'
  },
  {
    quote: 'I was searching for MEAN Stack Training in Ludhiana and decided to join techcadd. The structured classes and practical exercises made the learning process easier for me.',
    name: 'Priya',
    course: 'MEAN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'PR'
  },
  {
    quote: 'Good option for students who want to start learning full-stack development. The training introduced me to Angular, Node.js, Express.js, MongoDB, Git, and project development.',
    name: 'Aman',
    course: 'MEAN Stack',
    detail: 'Chandigarh region',
    rating: 5,
    initials: 'AM'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard set the factory writes for every other course.
------------------------------------------------------------------ */
export const MEAN_FAQS = [
  {
    q: 'What is a MEAN Stack course in Ludhiana?',
    a: 'A **MEAN Stack Course in Ludhiana** teaches full-stack web development using **MongoDB**, **Express.js**, **Angular** and **Node.js**. Students learn how to develop front-end interfaces, server-side applications, APIs, databases, and complete web applications.'
  },
  {
    q: 'Who can join a MEAN Stack course at techcadd?',
    a: 'The course is suitable for 12th-pass students, graduates, BCA/MCA students, beginners, job seekers, aspiring developers, freelancers, and working professionals interested in web development.'
  },
  {
    q: 'Is MEAN Stack suitable for beginners?',
    a: 'Yes. Beginners can start with programming and JavaScript fundamentals before progressing to Angular, Node.js, Express.js, MongoDB, APIs, and full-stack projects. Regular coding practice is important for building confidence.'
  },
  {
    q: 'What technologies are included in MEAN Stack training?',
    a: 'The four core technologies are MongoDB, Express.js, Angular, and Node.js. Training may also include JavaScript, **TypeScript**, HTML, CSS, **REST APIs**, **Git**, **GitHub**, npm, Postman, and development tools.'
  },
  {
    q: 'Do I need programming experience to learn MEAN Stack?',
    a: 'Previous professional programming experience is not essential for beginners. Basic computer knowledge and a willingness to learn and practise coding can help students start the course.'
  },
  {
    q: 'What will I learn after completing MEAN Stack training?',
    a: 'Students can develop skills in front-end development, back-end development, database management, REST API development, Angular, Node.js, Express.js, MongoDB, Git, and full-stack project development.'
  },
  {
    q: 'Is MEAN Stack better than learning only front-end development?',
    a: 'MEAN Stack provides exposure to both front-end and back-end development. This helps learners understand how complete web applications function, including user interfaces, servers, APIs, and databases.'
  },
  {
    q: 'Can I build projects during the MEAN Stack course?',
    a: 'Yes. Project-based practice is an important part of full-stack development. Students work on applications that combine Angular, Node.js, Express.js, and MongoDB and use these projects to demonstrate their practical skills.'
  },
  {
    q: 'What career options are available after MEAN Stack training?',
    a: 'Depending on their skills, experience, portfolio, and employer requirements, learners can explore opportunities such as Junior Web Developer, Front-End Developer, Back-End Developer, JavaScript Developer, Angular Developer, Node.js Developer, or Full-Stack Developer.'
  },
  {
    q: 'Is MEAN Stack training available in Ludhiana?',
    a: 'Yes. techcadd offers MEAN Stack-focused training for learners looking for full-stack development education in Ludhiana. Contact the centre directly to confirm the latest batch schedule, duration, fees, and available learning mode.'
  },
  {
    q: 'Can MEAN Stack skills help with freelancing?',
    a: 'Yes. Full-stack development skills can be useful for freelancers who want to develop websites, dashboards, APIs, business applications, and other web-based solutions. Freelancing success also depends on portfolio quality, communication, project management, and client acquisition.'
  },
  {
    q: 'What is the difference between the MEAN and MERN courses?',
    a: 'The database, backend and server layers are the same — MongoDB, Express.js and Node.js. The difference is the front end: MEAN uses **Angular** with TypeScript, which is more structured and common in enterprise teams; MERN uses React, which is more common in product startups. Both lead to full-stack roles.'
  },
  {
    q: 'How can I join the MEAN Stack course in Ludhiana?',
    a: 'Contact techcadd to enquire about the MEAN Stack course, including eligibility, syllabus, duration, upcoming batches, fees, available modes, and the admission process.'
  }
]
