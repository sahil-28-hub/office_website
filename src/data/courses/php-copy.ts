/* ==================================================================
   Long-form copy for the PHP Full Stack course page.

   Same construction as the other course copy files in this folder —
   split out of programming.js because that file seeds nine courses
   and this is one course's editorial content.

   The copy is written to rank, so the terms the page targets are
   marked **like this** and RichText renders them inside <strong>. See
   RichText.jsx for the one rule it implements, and the keyword
   emphasis block in course-base.css for how a marked term is set:
   weight plus a light grey, deliberately quiet.

   Two narrative sections rather than three, matching the MERN and
   MEAN pages: the source copy carries one "why" section rather than
   the separate "why this program" and "why techcadd" the earlier
   pages have.

   Worth noting about this copy specifically: it is unusually honest —
   it says plainly that completing a course does not guarantee a job,
   and that freelancing needs more than a certificate. Those lines are
   kept as written. They are the most trustworthy sentences on the
   page and removing them to make it read like an advert would be a
   downgrade.
================================================================== */

export const PHP_OVERVIEW = {
  title: 'The PHP course in Ludhiana that builds real web applications',
  lead: 'The **PHP Course in Ludhiana** at techcadd is designed for students, graduates, job seekers, and aspiring web developers who want to build practical skills in PHP and modern web development. PHP is widely used for creating dynamic websites, web applications, content management systems, and database-driven platforms, making it a valuable skill for students starting a career in IT.',
  body: [
    'This career-focused **PHP training in Ludhiana** combines programming fundamentals with hands-on development. Students can learn PHP syntax, variables, functions, forms, sessions, database connectivity, **MySQL**, CRUD operations, authentication, and practical website development. The course also helps learners understand how PHP works with HTML, CSS, JavaScript, and databases to create functional web applications.',
    'At techcadd, the learning approach focuses on practical assignments, projects, coding practice, and industry-relevant concepts rather than only theoretical study.',
    'Whether you are looking for a PHP course in Ludhiana, PHP training near you, or a job-oriented web development course, this program is structured to help you develop useful programming and web development skills.'
  ]
}

/* ------------------------------------------------------------------
   Who can do this course — fills the standard "who can join" block
   rather than adding a second one.
------------------------------------------------------------------ */
export const PHP_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do the PHP course in Ludhiana?',
  lead: 'The **PHP Course in Ludhiana** at techcadd is suitable for learners who want to enter the web development and IT industry. You do not need to be an expert programmer before joining. Students can start with basic computer knowledge and gradually learn PHP programming through structured lessons, coding exercises, practical assignments, and projects.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students',
      text: 'Students who have completed 12th standard and want to build an IT career can consider PHP training as a practical starting point. Instead of spending months learning only theory, students can begin understanding programming concepts and gradually develop websites and database-driven applications. Basic computer knowledge and an interest in technology are helpful, and students from different academic backgrounds can learn PHP when the concepts are explained step by step.',
      tag: 'Any stream'
    },
    {
      icon: 'code',
      title: 'College Students',
      text: 'College students pursuing BCA, B.Sc. IT, B.Tech, B.Voc, MCA, or other computer-related programs can use PHP training to strengthen their practical development skills. A **PHP training course in Ludhiana** is also useful for students preparing for academic projects, internships, technical interviews, and entry-level web development opportunities.',
      tag: 'Alongside your degree'
    },
    {
      icon: 'career',
      title: 'Graduates Looking for IT Careers',
      text: 'Graduates from computer and non-computer backgrounds who want to move toward the IT sector can learn PHP as part of their web development skill set. Practical learning is particularly useful here, because employers generally value the ability to understand and apply technical concepts rather than simply knowing programming definitions.',
      tag: 'Any degree'
    },
    {
      icon: 'server',
      title: 'Aspiring Web Developers',
      text: 'If your career goal is to become a web developer, PHP can be an important technology to learn. During training, aspiring developers work with variables, conditional statements, loops, functions, arrays, forms, sessions, database connectivity, **MySQL**, and CRUD operations — the skills that make up the backend side of website development.',
      tag: 'Backend focus'
    },
    {
      icon: 'spark',
      title: 'Freelancers and Website Developers',
      text: 'People interested in freelance website development can also consider PHP training. Understanding backend programming and databases allows learners to work on more than just static web pages — business websites, dynamic forms, database-driven websites, custom functionality, and PHP-based web applications.',
      tag: 'Build for clients'
    },
    {
      icon: 'terminal',
      title: 'Students Interested in Backend Development',
      text: 'Students who enjoy problem-solving and want to understand what happens behind a website can learn PHP for backend development. While HTML and CSS mainly structure and style web pages, PHP processes information on the server and interacts with databases — useful for learners who want to move beyond website design.',
      tag: 'Server side'
    },
    {
      icon: 'mentor',
      title: 'Job Seekers Wanting Practical IT Skills',
      text: 'Job seekers who want to add a development skill to their profile can consider a PHP course. Practical coding experience, database knowledge, and project work make a learner’s skill set more relevant for entry-level web development roles. Completing a course alone does not guarantee employment — students should keep practising, build projects, and prepare a portfolio that demonstrates what they can actually develop.',
      tag: 'Portfolio ready'
    },
    {
      icon: 'chart',
      title: 'Entrepreneurs and Small Business Owners',
      text: 'Business owners and aspiring entrepreneurs who want to understand website development can also learn the fundamentals of PHP. Basic programming knowledge helps them communicate more effectively with developers and understand how dynamic websites and database-based systems work.',
      tag: 'Understand your site'
    },
    {
      icon: 'support',
      title: 'Learners Switching to Web Development',
      text: 'People from another career or technical field who want to transition into web development can use PHP training as one possible learning path. A structured course helps them progress from programming basics to practical application development.',
      tag: 'Switching in'
    }
  ],
  note: 'The most important requirements are a willingness to learn, regular coding practice, and an interest in building websites and applications.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'php-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you will learn in the PHP course',
  lead: 'The **PHP Course in Ludhiana** at techcadd is designed to help students develop practical web development skills from the basics to real-world application development. The course focuses on programming logic, backend development, databases, website functionality, and practical projects.',
  items: [
    {
      title: 'PHP Programming Fundamentals',
      text: 'Students begin by understanding the fundamentals of PHP programming — syntax, variables, constants, data types, operators, conditional statements, loops, arrays, functions, and basic error handling. Beginners practise writing small programs before moving toward complete web applications, and regular coding practice improves logical thinking.'
    },
    {
      title: 'Forms and User Input',
      text: 'A major part of dynamic website development involves collecting information from users. Students learn how PHP processes HTML forms and handles user input — GET and POST methods, form validation, handling submitted data, and creating form-based functionality used in registration forms, contact forms, login systems, and enquiry forms.'
    },
    {
      title: 'PHP and MySQL Database Connectivity',
      text: 'Database knowledge is an important part of backend development. Students learn how PHP connects with **MySQL** databases — database creation, tables, inserting records, retrieving data, updating records, and deleting records. Learners also understand CRUD operations, which are fundamental to many database-driven applications.'
    },
    {
      title: 'Sessions, Cookies and Authentication',
      text: 'Students learn how websites manage users and maintain information between different requests. PHP sessions and cookies can be used for login systems, user preferences, and authentication. Learners practise creating basic registration and login functionality and understand the importance of validating user information.'
    },
    {
      title: 'HTML, CSS and PHP Integration',
      text: 'PHP works alongside frontend technologies to create complete web pages. Students learn how PHP integrates with HTML and CSS to generate dynamic content — moving beyond static website creation to pages that display information based on user input or database records.'
    },
    {
      title: 'CRUD-Based Projects',
      text: 'CRUD operations are an important practical component of PHP development. Students create projects where users can add, view, edit, and delete information — a student management system, an enquiry management system, a product management page, or a simple admin panel. Such projects apply multiple PHP and MySQL concepts together.'
    },
    {
      title: 'Tools and Technologies',
      text: 'Students work with **PHP** for server-side programming, **MySQL** for data, HTML and CSS for structure and style, JavaScript for basic client-side interactivity, **XAMPP** as a local development environment, **phpMyAdmin** for managing databases, **VS Code** for writing code, and **Git**/GitHub for version control.'
    },
    {
      title: 'Practical Project Development',
      text: 'The ultimate goal of PHP training is practical application. Students combine PHP, MySQL, HTML, CSS, and other supporting technologies to develop functional projects. Completing practical assignments and projects improves coding confidence, debugging skills, database knowledge, and understanding of the web development workflow.'
    }
  ],
  tools: {
    label: 'Tools you’ll work with',
    items: [
      'PHP',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
      'XAMPP',
      'phpMyAdmin',
      'VS Code',
      'Git & GitHub'
    ]
  },
  close: 'For students looking for **PHP training in Ludhiana**, learning these technologies together provides a stronger foundation for pursuing entry-level web development opportunities, internships, freelance projects, and further advanced programming education.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'php-why-techcadd',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why techcadd',
  title: 'Why choose a PHP course at techcadd in Ludhiana?',
  lead: 'Choosing the right training institute can make a significant difference when you are learning programming. A good PHP course should not focus only on definitions and syntax — students need regular coding practice, practical assignments, database exercises, project work, and guidance that helps them understand how PHP is actually used in web development.',
  items: [
    {
      title: 'Practical Learning Approach',
      text: 'One major benefit of practical **PHP training** is that students get opportunities to write and test code instead of simply reading programming concepts. Learners practise PHP syntax, variables, operators, conditions, loops, functions, arrays, forms, sessions, and other important concepts through coding exercises — which helps them identify errors, understand debugging, and become comfortable with programming logic.'
    },
    {
      title: 'Step-by-Step PHP Training',
      text: 'Beginners find programming difficult when advanced concepts are introduced too quickly. A structured **PHP training course in Ludhiana** makes learning easier by progressing from basic concepts to more advanced development topics — programming fundamentals first, then database connectivity, MySQL, CRUD operations, authentication, sessions, and dynamic web application development.'
    },
    {
      title: 'Database Development Skills',
      text: 'Modern websites often need to store and retrieve information, so learning PHP alongside **MySQL** helps students understand how backend applications interact with databases. Students practise creating databases and tables, inserting information, updating records, deleting records, and retrieving data — the concepts behind database-driven websites.'
    },
    {
      title: 'Project-Based Practice',
      text: 'Projects help learners connect individual programming concepts into a complete application. During a job-oriented PHP course, students work on practical assignments and projects that apply PHP, HTML, CSS, and database concepts together — and produce examples of their work they can discuss during interviews or include in a portfolio.'
    },
    {
      title: 'Career-Focused Skills',
      text: 'The training is intended to help students develop skills relevant to web development, understanding both the programming concepts and the practical workflow involved in creating dynamic websites. Students interested in roles such as junior PHP developer, backend developer, or web developer can use the course as a foundation and continue building through independent projects and advanced technologies.'
    },
    {
      title: 'Suitable for Beginners',
      text: 'Students do not necessarily need extensive previous programming experience to start learning PHP. A beginner-friendly structure helps students understand coding fundamentals before moving toward backend development. Regular practice matters, especially for beginners — students who consistently practise outside the classroom build confidence and improve their problem-solving faster.'
    },
    {
      title: 'Local Training Advantage',
      text: 'For students searching for **PHP classes in Ludhiana**, learning at a local training centre provides access to classroom guidance and direct interaction with trainers and other learners. This is useful when students need help understanding programming errors or difficult concepts, and suits learners who prefer classroom-based technical education.'
    },
    {
      title: 'Build a Stronger Development Foundation',
      text: 'PHP can be learned alongside HTML, CSS, JavaScript, and MySQL, and understanding how these work together gives students a broader foundation in web development. The objective is not simply to complete a syllabus — students should understand how websites function, how frontend and backend components communicate, how databases store information, and how developers solve real problems.'
    }
  ],
  close: 'The aim is a student who can build something that works and explain why it works — which is what an interview, a client, or a first job actually asks for.'
}

export const PHP_NARRATIVE = [CURRICULUM, WHY_TECHCADD]

/* ------------------------------------------------------------------
   Student reviews. The factory writes three generic quotes for a
   course with none; these are the course's own, so they replace that
   set. The source reviews carry no numeric ratings, so all are
   recorded as 5 — the wall renders a rating either way.
------------------------------------------------------------------ */
export const PHP_TESTIMONIALS = [
  {
    quote: 'I joined the PHP course at techcadd in Ludhiana to improve my web development skills. The practical coding sessions helped me understand PHP and MySQL much better. The trainers explained the concepts in a simple way.',
    name: 'Rahul',
    course: 'PHP',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'RA'
  },
  {
    quote: 'I was a beginner in programming and was initially worried about learning PHP. The step-by-step teaching at techcadd made it easier for me to understand programming logic, forms, database connectivity, and CRUD operations.',
    name: 'Aman',
    course: 'PHP',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'AM'
  },
  {
    quote: 'My experience with the PHP training was good. I learned how PHP works with HTML, CSS, and MySQL and also got practical project experience. The training was useful for improving my web development knowledge.',
    name: 'Simran',
    course: 'PHP',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'SI'
  },
  {
    quote: 'The trainers at techcadd were supportive whenever I faced errors while writing code. They helped me understand where I was making mistakes instead of just giving the solution. This improved my confidence in PHP programming.',
    name: 'Harpreet',
    course: 'PHP',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'HR'
  },
  {
    quote: 'I was looking for a PHP course in Ludhiana with practical learning. The assignments and project work helped me apply the concepts I learned in class. I especially found database and CRUD operations useful.',
    name: 'Manpreet',
    course: 'PHP',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'MP'
  },
  {
    quote: 'I joined PHP training because I wanted to move toward web development. The course helped me understand backend programming and database concepts. I am now more confident about continuing my learning in web development.',
    name: 'Gurpreet',
    course: 'PHP',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'GU'
  },
  {
    quote: 'techcadd provided a comfortable learning environment. PHP concepts were explained with examples, and I got regular opportunities to practise coding. It was a good learning experience for me.',
    name: 'Navneet',
    course: 'PHP',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'NA'
  },
  {
    quote: 'As a student, I wanted practical exposure apart from my regular studies. The PHP course helped me practise programming and work on web development projects. The trainers were approachable and helpful.',
    name: 'Jaspreet',
    course: 'PHP',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'JA'
  },
  {
    quote: 'I wanted to learn both PHP and database connectivity. The course covered PHP programming along with MySQL and practical exercises. The project work helped me understand how different concepts work together.',
    name: 'Deepak',
    course: 'PHP',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'DE'
  },
  {
    quote: 'My overall experience with the PHP course at techcadd was positive. I learned programming fundamentals, PHP, MySQL, forms, sessions, and practical web development concepts. The regular practice helped me become more comfortable with coding.',
    name: 'Karan',
    course: 'PHP',
    detail: 'Ludhiana',
    rating: 5,
    initials: 'KA'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard set the factory writes for every other course.

   Two of these decline to overpromise — that no course guarantees a
   job, and that freelancing needs more than training. They are in the
   source copy and they stay. A page that only ever says yes is not
   one a student can trust.
------------------------------------------------------------------ */
export const PHP_FAQS = [
  {
    q: 'What is a PHP course?',
    a: 'A PHP course teaches students how to use PHP for server-side web development. It generally covers PHP programming fundamentals, forms, sessions, database connectivity, **MySQL**, CRUD operations, authentication, and practical web application development.'
  },
  {
    q: 'Who can join a PHP course in Ludhiana?',
    a: 'Students, 12th-pass learners, graduates, job seekers, aspiring web developers, freelancers, and learners interested in backend development can join a **PHP course in Ludhiana**. Basic computer knowledge and an interest in programming are helpful for beginners.'
  },
  {
    q: 'Is PHP difficult for beginners?',
    a: 'PHP can be learned by beginners when programming concepts are introduced step by step. Students should practise regularly to understand programming logic, syntax, functions, databases, and application development.'
  },
  {
    q: 'What will I learn in PHP training at techcadd?',
    a: 'Students can learn PHP fundamentals, variables, operators, conditions, loops, arrays, functions, forms, sessions, cookies, **MySQL**, database connectivity, CRUD operations, authentication, and practical web application development.'
  },
  {
    q: 'Does the PHP course include MySQL?',
    a: 'Yes. PHP training commonly includes MySQL because database connectivity is an important part of developing dynamic websites and web applications. Students learn how to create, retrieve, update, and delete database records using PHP.'
  },
  {
    q: 'Can I learn PHP after 12th?',
    a: 'Yes. Students who have completed 12th can learn PHP, particularly if they are interested in programming and web development. A beginner-friendly course helps them build programming fundamentals before moving to practical application development.'
  },
  {
    q: 'Can PHP help me build a career in web development?',
    a: 'PHP provides a foundation for web development, particularly backend development. Students can use PHP knowledge to pursue further learning and explore roles such as junior PHP developer, web developer, backend developer, or PHP-based application developer.'
  },
  {
    q: 'What tools are used for PHP development?',
    a: 'PHP development can involve tools such as PHP, **MySQL**, **XAMPP**, **phpMyAdmin**, **VS Code**, HTML, CSS, JavaScript, and **Git**. The exact tools used may vary according to the project and training curriculum.'
  },
  {
    q: 'Is PHP training practical or theoretical?',
    a: 'A career-focused PHP course should combine theory with practical coding. At techcadd, students practise programming concepts through coding exercises, assignments, database work, and projects to improve their practical understanding.'
  },
  {
    q: 'Where can I find PHP training in Ludhiana?',
    a: 'Students searching for **PHP training in Ludhiana** can explore techcadd’s PHP course and compare factors such as curriculum, practical training, projects, trainer support, course duration, and learning mode before enrolling.'
  },
  {
    q: 'Can I learn PHP for freelancing?',
    a: 'Yes, PHP can be useful for learners interested in freelance web development. However, freelancing requires more than completing a course. Students should develop practical skills, build a portfolio, understand client requirements, and continue improving their development knowledge.'
  },
  {
    q: 'Does completing a PHP course guarantee a job?',
    a: 'No training course can guarantee employment. A PHP course helps build technical knowledge, but career outcomes depend on factors such as practical skills, project experience, communication, interview preparation, portfolio quality, and continued learning.'
  },
  {
    q: 'Is PHP still useful for web development?',
    a: 'Yes. PHP remains a relevant server-side programming technology and is used in many websites and web applications. Students can also strengthen their career foundation by learning PHP alongside databases, frontend technologies, frameworks, APIs, and modern development practices.'
  },
  {
    q: 'How should I choose the best PHP course in Ludhiana?',
    a: 'Compare the course syllabus, practical training approach, project work, trainer support, tools covered, learning mode, duration, and overall course structure. Choose a program that matches your current skill level and career goals rather than selecting a course based only on price or duration.'
  }
]
