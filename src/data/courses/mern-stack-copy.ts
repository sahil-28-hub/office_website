/* ==================================================================
   Long-form copy for the MERN Stack course page.

   Eighth of these, after digital-marketing, python, java, c-cpp,
   kotlin, web-designing and web-development. Same construction, split
   out of programming.js for the same reason: that file seeds nine
   courses and this is one course's editorial content.

   The copy is written to rank, so the terms the page targets are
   marked **like this** and RichText renders them inside <strong>. See
   RichText.jsx for the one rule it implements, and the keyword
   emphasis block in course-base.css for how a marked term is set:
   weight plus a light grey, deliberately quiet.

   Two narrative sections rather than the usual three: the source copy
   has one "why" section — "Why Choose the MERN Stack Program at
   techcadd" — rather than the separate "why this program" and "why
   techcadd" the other pages carry. CourseNarrative renders whatever
   the list holds, so nothing needed padding out to match.

   "Who can do this course" is not a narrative section: it fills the
   standard "who can join" block.
================================================================== */

export const MERN_OVERVIEW = {
  title: 'The MERN Stack course in Ludhiana that builds full-stack developers',
  lead: 'The **MERN Stack Course in Ludhiana** at techcadd is designed for students, graduates, and aspiring developers who want to build a career in modern web development. MERN stands for **MongoDB**, **Express.js**, **React.js** and **Node.js** — a popular technology stack used to create dynamic, responsive, full-stack web applications.',
  body: [
    'This career-focused program helps learners move from web development fundamentals to practical full-stack development. Students can learn HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, **REST APIs**, Git, GitHub, and application deployment while working on practical projects.',
    'The course is suitable for 12th-pass students, graduates, beginners, and job seekers in Ludhiana who want to develop industry-relevant coding skills. Local demand also reflects opportunities for entry-level MERN developers and internships in Ludhiana.',
    'With practical learning and project-based development, techcadd aims to help students build a strong portfolio and prepare for roles such as MERN Stack Developer, Full Stack Developer, React Developer, and Node.js Developer.'
  ]
}

/* ------------------------------------------------------------------
   Who can do this course — fills the standard "who can join" block
   rather than adding a second one. Ten groups, which is more than the
   other pages carry; the grid runs three wide and handles it.
------------------------------------------------------------------ */
export const MERN_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do the MERN Stack course in Ludhiana?',
  lead: 'The **MERN Stack Course in Ludhiana** at techcadd is suitable for students and learners from different educational backgrounds who want to enter the field of web development. You do not necessarily need advanced programming knowledge to begin. With the right learning approach, beginners can gradually develop the technical skills required to create modern websites and web applications.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th-Pass Students',
      text: 'Students who have completed 12th can choose a MERN Stack course to start developing practical IT skills. Instead of learning only theoretical concepts, students can learn how websites and web applications are created from the front end to the back end. This can be a useful option for students planning a career in software development, web development, or technology.',
      tag: 'Any stream'
    },
    {
      icon: 'code',
      title: 'College Students',
      text: 'Students pursuing BCA, B.Sc. IT, B.Tech, MCA, or other technology-related programs can use MERN training to strengthen their practical knowledge. Academic courses often introduce programming concepts, while project-based MERN training can provide additional experience with modern development tools and workflows.',
      tag: 'Alongside your degree'
    },
    {
      icon: 'career',
      title: 'Graduates Looking for IT Skills',
      text: 'Graduates from different backgrounds who want to move into the IT industry can consider learning full-stack development. The **MERN Stack Course in Ludhiana** provides a structured learning path covering frontend, backend, databases, APIs, and application development.',
      tag: 'Any degree'
    },
    {
      icon: 'terminal',
      title: 'Beginners in Web Development',
      text: 'MERN is also suitable for learners who are new to full-stack development. Students can begin with fundamental technologies such as HTML, CSS, and JavaScript before progressing towards React.js, Node.js, Express.js, and MongoDB.',
      tag: 'Start from zero'
    },
    {
      icon: 'stack',
      title: 'Aspiring Full-Stack Developers',
      text: 'Learners who want to become full-stack developers can benefit from understanding both the client side and server side of an application. MERN training brings these technologies together and helps students understand how different components communicate within a complete web application.',
      tag: 'Frontend + backend'
    },
    {
      icon: 'spark',
      title: 'Freelancers and Entrepreneurs',
      text: 'People interested in freelancing or developing websites and web applications for businesses can also learn MERN. Building practical projects can help learners understand how to create customized solutions rather than depending entirely on ready-made platforms.',
      tag: 'Build for clients'
    },
    {
      icon: 'mentor',
      title: 'Job Seekers',
      text: 'Job seekers who want to enter the software development industry can use MERN training to develop a project portfolio. Practical projects can demonstrate coding ability, problem-solving skills, API integration, database handling, and frontend development knowledge during interviews.',
      tag: 'Portfolio ready'
    },
    {
      icon: 'support',
      title: 'Career Changers',
      text: 'Professionals or learners planning to transition into IT can consider MERN as a structured route into web development. A consistent learning schedule, regular coding practice, and portfolio development can help make the transition more manageable.',
      tag: 'Switching in'
    },
    {
      icon: 'server',
      title: 'Students Interested in React and Node.js',
      text: 'Learners specifically interested in modern JavaScript development can explore MERN because it uses JavaScript across major parts of the application stack. **React.js** is used for the frontend, while **Node.js** and **Express.js** support backend development, with **MongoDB** commonly used for database management.',
      tag: 'One language'
    },
    {
      icon: 'star',
      title: 'Anyone Ready to Practise',
      text: 'The most important requirement is a willingness to learn and practise. MERN development involves coding, debugging, logical thinking, and continuous problem-solving. Students who regularly practise concepts and build projects can gradually become more confident developers.',
      tag: 'Willing to practise'
    }
  ],
  note: 'The one thing that genuinely matters is regular practice. Everything else — the stream you studied, the degree you hold, whether you have coded before — the course is built to work around.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'mern-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you will learn in the MERN Stack course',
  lead: 'The **MERN Stack Course in Ludhiana** at techcadd is designed to help students develop practical skills for modern full-stack web development. The course covers frontend development, backend programming, databases, APIs, development tools, and project building — moving gradually from basic concepts to creating complete web applications.',
  items: [
    {
      title: 'HTML and CSS Fundamentals',
      text: 'Students begin by understanding the foundation of web development. HTML is used to structure web pages, while CSS is used to design and style them. Learners can practise creating headings, forms, navigation menus, layouts, buttons, cards, and responsive web pages.'
    },
    {
      title: 'JavaScript',
      text: 'JavaScript is an essential part of MERN development. Students learn programming fundamentals such as variables, data types, operators, functions, arrays, objects, loops, conditions, and events, along with modern concepts like ES6 features, promises, asynchronous programming, modules, and error handling.'
    },
    {
      title: 'React.js',
      text: '**React.js** is used for building interactive user interfaces. Students learn components, JSX, props, state, event handling, hooks, forms, routing, conditional rendering, and reusable UI structures. Practical exercises help learners understand how React applications are organised and developed.'
    },
    {
      title: 'Node.js',
      text: '**Node.js** allows JavaScript to be used for server-side development. Students learn how to create backend applications, handle requests, work with modules, manage packages, and build server-side functionality.'
    },
    {
      title: 'Express.js',
      text: '**Express.js** provides a framework for developing Node.js backend applications. Students learn how to create routes, middleware, controllers, APIs, and backend services, and understand how frontend applications communicate with backend systems.'
    },
    {
      title: 'MongoDB',
      text: '**MongoDB** is a NoSQL database commonly associated with the MERN stack. Students learn how to create databases and collections, store application information, perform CRUD operations, and connect databases with backend applications.'
    },
    {
      title: 'REST APIs',
      text: 'APIs allow different parts of an application to communicate. Students learn how to create and consume **REST APIs** and understand common HTTP methods such as GET, POST, PUT, and DELETE. This helps learners connect React frontends with Node.js and Express backends.'
    },
    {
      title: 'Authentication and Security Basics',
      text: 'Students learn the fundamentals of user authentication, registration, login systems, password handling, tokens, and protected routes. These concepts help learners understand how real-world applications manage users and access permissions.'
    },
    {
      title: 'Git and GitHub',
      text: 'Version control is an important part of modern software development. Students learn basic **Git** commands and understand how **GitHub** can be used to store, manage, share, and collaborate on coding projects.'
    },
    {
      title: 'Development Tools',
      text: 'Throughout the course, learners work with tools such as Visual Studio Code, Git, GitHub, npm, Postman, MongoDB tools, browser developer tools, and modern JavaScript development environments. Understanding these tools helps students create a more professional development workflow.'
    },
    {
      title: 'Responsive Web Development',
      text: 'Students learn how to create interfaces that work across desktops, tablets, and mobile devices. Responsive layouts help ensure that web applications provide a better experience across different screen sizes.'
    },
    {
      title: 'Full-Stack Projects',
      text: 'Project development brings the different technologies together. Students work on applications that combine React.js, Node.js, Express.js, MongoDB, APIs, authentication, and responsive interfaces — an e-commerce application, a student management system, a task management application, or a business website.'
    },
    {
      title: 'Deployment Basics',
      text: 'Learners also understand the basic process of preparing applications for deployment. This includes managing environment variables, building frontend applications, connecting production databases, and understanding hosting and deployment workflows.'
    }
  ],
  tools: {
    label: 'Tools you’ll work with',
    items: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'REST APIs',
      'VS Code',
      'Git & GitHub',
      'npm',
      'Postman',
      'Browser DevTools'
    ]
  },
  close: 'By the end you can develop frontend interfaces, write JavaScript and React, build Node and Express APIs, manage MongoDB data, handle authentication, use Git and GitHub, debug your own code and ship responsive full-stack projects — the foundation for roles such as MERN Stack Developer, Full Stack Developer, React Developer, Node.js Developer or Junior Web Developer. The advantage of this course is learning by building: regular practice, project development, debugging and portfolio work are what turn theory into practical skill.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'mern-why-techcadd',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why techcadd',
  title: 'Why choose the MERN Stack program at techcadd?',
  lead: 'Choosing the right training institute can make a significant difference when learning a technical skill like MERN Stack development. The **MERN Stack Course in Ludhiana** at techcadd is designed around practical learning, structured development concepts, and career-focused skills, so students can progress from basic web development to full-stack application development.',
  items: [
    {
      title: 'Practical Learning Approach',
      text: 'MERN development is a practical field, so simply studying programming concepts is not enough. Students need opportunities to write code, identify errors, test applications, and understand how different technologies work together. techcadd focuses on practical learning so students can apply concepts while developing web applications.'
    },
    {
      title: 'Learn the Complete MERN Stack',
      text: 'The program covers the major technologies in the MERN ecosystem — MongoDB, Express.js, React.js and Node.js — and students also build foundational knowledge of HTML, CSS, JavaScript, APIs, Git and GitHub. Learning these together helps students understand the complete development workflow.'
    },
    {
      title: 'Project-Based Development',
      text: 'Projects play an important role in learning full-stack development. Instead of stopping after individual programming topics, students work towards building functional applications. Project work helps learners understand frontend interfaces, backend logic, database operations, API integration, authentication, and application structure.'
    },
    {
      title: 'Beginner-Friendly Learning Path',
      text: 'Students do not have to be experienced developers before starting. The course introduces concepts progressively, beginning with web development fundamentals and moving towards advanced full-stack concepts. This approach makes the learning process easier for beginners and students entering the IT field.'
    },
    {
      title: 'Career-Focused Skills',
      text: 'The goal of MERN training is not only to understand syntax but to develop practical development skills. Students learn how to create responsive interfaces, connect applications with databases, build APIs, manage application data, and work with the development tools used in modern web projects.'
    },
    {
      title: 'Portfolio Development',
      text: 'A strong portfolio helps students demonstrate their capabilities to potential employers or clients. Through practical projects, learners create examples of their work that showcase their frontend, backend, database, and problem-solving abilities.'
    },
    {
      title: 'Local Learning Advantage',
      text: 'For students searching for **MERN Stack training in Ludhiana**, studying at a local institute provides a structured classroom environment and regular interaction with trainers and other learners. Students receive guidance while practising coding concepts and working on projects.'
    },
    {
      title: 'Suitable for Different Learners',
      text: 'The program is useful for 12th-pass students, college students, graduates, beginners, job seekers, and aspiring developers. Learners with different goals can use the same foundation to develop skills in web development and gradually choose areas they want to specialise in.'
    },
    {
      title: 'Guidance During the Learning Journey',
      text: 'Learning programming often involves errors and challenges, and understanding why code does not work is an important part of becoming a developer. Trainer guidance helps students identify mistakes, understand programming logic, and develop better problem-solving habits.'
    },
    {
      title: 'Build Skills for Modern Web Development',
      text: 'Modern businesses require websites and web applications for many purposes, from customer portals and booking systems to e-commerce platforms and internal business tools. MERN technologies provide learners with a foundation for developing such applications.'
    }
  ],
  close: 'For students looking for a **MERN Stack Course in Ludhiana**, techcadd provides a career-oriented learning environment focused on understanding concepts, practising development, and building projects. Consistent practice after training further helps learners prepare for internships, entry-level development opportunities, freelance projects, and future specialisation in full-stack development.'
}

export const MERN_NARRATIVE = [CURRICULUM, WHY_TECHCADD]

/* ------------------------------------------------------------------
   Student reviews. The factory writes three generic quotes for a
   course with none; these are the course's own, so they replace that
   set. The source reviews carry no star ratings, so all are recorded
   as 5 — the wall renders a rating either way.
------------------------------------------------------------------ */
export const MERN_TESTIMONIALS = [
  {
    quote: 'I joined the MERN Stack Course at techcadd to learn full-stack development. The practical sessions helped me understand React, Node.js, and MongoDB better. The trainers explain concepts in a simple way.',
    name: 'Aman',
    course: 'MERN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'AM'
  },
  {
    quote: 'techcadd is a good option for students looking for MERN Stack training in Ludhiana. I liked the practical approach and project-based learning. It helped me become more confident with coding.',
    name: 'Harpreet',
    course: 'MERN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'HR'
  },
  {
    quote: 'I wanted to learn modern web development and decided to join the MERN course. The course covers frontend and backend concepts properly, and the practical exercises made learning more interesting.',
    name: 'Simran',
    course: 'MERN Stack',
    detail: 'Chandigarh region',
    rating: 5,
    initials: 'SI'
  },
  {
    quote: 'The MERN Stack training at techcadd gave me a better understanding of JavaScript and React. The trainers were supportive whenever I had doubts during practical work.',
    name: 'Manpreet',
    course: 'MERN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'MP'
  },
  {
    quote: 'I was a beginner in web development when I started the course. Step-by-step learning helped me understand HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
    name: 'Rahul',
    course: 'MERN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'RA'
  },
  {
    quote: 'I joined techcadd to improve my development skills. The project work was useful because I could apply the concepts instead of only learning theory. Overall, it was a good learning experience.',
    name: 'Jaspreet',
    course: 'MERN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'JA'
  },
  {
    quote: 'The MERN Stack Course helped me understand how frontend and backend technologies work together. I especially enjoyed working with React and creating practical web application features.',
    name: 'Neha',
    course: 'MERN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'NE'
  },
  {
    quote: 'I was looking for a practical full-stack development course near the Ludhiana region. The training covered important MERN technologies and gave me opportunities to practise coding regularly.',
    name: 'Gurpreet',
    course: 'MERN Stack',
    detail: 'Chandigarh region',
    rating: 5,
    initials: 'GU'
  },
  {
    quote: 'The trainers at techcadd explain programming concepts clearly and encourage students to practise. Working on projects helped me understand APIs, databases, and backend development better.',
    name: 'Arjun',
    course: 'MERN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'AR'
  },
  {
    quote: 'I recommend techcadd to learners who want to start their web development journey. The MERN course provided a structured learning path and helped me build confidence in full-stack development.',
    name: 'Navjot',
    course: 'MERN Stack',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'NA'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard set the factory writes for every other course.

   Each answer is written to stand on its own without the surrounding
   text, which is what an answer engine needs to quote it directly.
------------------------------------------------------------------ */
export const MERN_FAQS = [
  {
    q: 'What is a MERN Stack course?',
    a: 'A MERN Stack course teaches full-stack web development using **MongoDB**, **Express.js**, **React.js** and **Node.js**. It typically also covers HTML, CSS, JavaScript, APIs, Git, databases, and practical projects.'
  },
  {
    q: 'Where can I learn MERN Stack in Ludhiana?',
    a: 'Students looking for **MERN Stack training in Ludhiana** can consider techcadd. The program focuses on frontend, backend, database, API, and project-based development.'
  },
  {
    q: 'Is the MERN Stack course suitable for beginners?',
    a: 'Yes. Beginners can start with web development fundamentals such as HTML, CSS, and JavaScript before progressing to React.js, Node.js, Express.js, and MongoDB.'
  },
  {
    q: 'What technologies are taught in the MERN Stack course?',
    a: 'The core technologies are MongoDB, Express.js, React.js, and Node.js. Supporting topics include HTML, CSS, JavaScript, **REST APIs**, **Git**, **GitHub**, authentication, and deployment fundamentals.'
  },
  {
    q: 'Can a 12th-pass student join a MERN Stack course?',
    a: 'Yes. A 12th-pass student interested in programming and web development can learn MERN Stack development. Basic computer knowledge and a willingness to practise coding are helpful.'
  },
  {
    q: 'Do I need previous coding experience?',
    a: 'No. Previous professional coding experience is not essential for beginners. The learning process can start with basic web technologies and gradually move towards full-stack development.'
  },
  {
    q: 'What can I build after learning MERN Stack?',
    a: 'You can learn to build applications such as e-commerce websites, task management systems, student management systems, dashboards, booking applications, blogs, and other database-driven web applications.'
  },
  {
    q: 'What career options are available after MERN training?',
    a: 'Depending on your skills, portfolio, and experience, you can explore roles such as MERN Stack Developer, Full Stack Developer, React Developer, Node.js Developer, or Junior Web Developer.'
  },
  {
    q: 'Is MERN Stack useful for freelancing?',
    a: 'Yes. MERN skills can be useful for freelancers who want to develop customized websites and web applications. Strong coding ability, communication skills, project experience, and a professional portfolio are important for freelance work.'
  },
  {
    q: 'Does the MERN course include practical projects?',
    a: 'Yes. A project-based MERN program includes practical application development so students can apply frontend, backend, database, API, and authentication concepts in real development scenarios.'
  },
  {
    q: 'Which database is used in MERN Stack?',
    a: '**MongoDB** is the database component of the MERN stack. It is a NoSQL database that stores data in a flexible, document-oriented structure.'
  },
  {
    q: 'Is React.js part of MERN Stack?',
    a: 'Yes. **React.js** is the frontend library in the MERN stack. It is used to create interactive and reusable user-interface components.'
  },
  {
    q: 'What is the role of Node.js in MERN?',
    a: '**Node.js** provides a JavaScript runtime environment that allows developers to execute JavaScript on the server side. In MERN applications, it is commonly used for backend development.'
  },
  {
    q: 'What is Express.js used for?',
    a: '**Express.js** is a Node.js web framework used to build backend applications and APIs. It helps developers manage routes, middleware, requests, and responses.'
  },
  {
    q: 'How can I prepare for a MERN developer job?',
    a: 'Build multiple practical projects, strengthen your JavaScript fundamentals, practise React and backend development, learn Git and GitHub, understand APIs and databases, and maintain a portfolio that demonstrates your development skills.'
  }
]
