/* ==================================================================
   Long-form copy for the Java course page.

   Third of these, after ./digital-marketing-copy.js and
   ./python-copy.js, and built exactly the same way — split out of
   programming.js because that file seeds nine courses and this is one
   course's editorial content.

   The copy is written to rank, so the terms the page targets are
   marked **like this** and RichText renders them inside <strong>. See
   RichText.jsx for the one rule it implements, and the keyword
   emphasis block in course-base.css for how a marked term is set:
   weight plus a light grey, deliberately quiet.

   Narrative sections declare the `slot` they mount into. CoursePage
   mounts CourseNarrative at three named slots, so a section sits
   beside the standard block it belongs with rather than in one wall
   at the bottom:

     overview  after the course overview, before the roadmap
     syllabus  after the roadmap, before "who can join"
     careers   after "where it leads", before the enquiry form

   "Who can do this course" is not a narrative section — it fills the
   standard "who can join" block, which asks the same question and
   would otherwise sit four sections below it saying the same thing.

   Tones alternate against the fixed bands around them — the page runs
   paper, tint, paper, dark, tint, paper, tint, paper, dark, paper from
   the overview down — so no two neighbouring sections share a
   background.
================================================================== */

export const JAVA_OVERVIEW = {
  title: 'The Java course in Ludhiana that makes you job-ready',
  lead: 'Looking for the best **Java course in Ludhiana** that actually makes you job-ready? techcadd’s Java Course in Ludhiana is designed for students, graduates, and working professionals who want to learn Java through practical, industry-focused training — not just theory.',
  body: [
    'Based in Ludhiana, techcadd provides comprehensive training in Core Java, Advanced Java, OOPs, **JDBC**, Java frameworks, database connectivity, and the latest development practices used in the software industry.',
    'Whether you’re a 12th-pass student starting your programming journey, a graduate preparing for a software development career, or a working professional looking to upgrade your skills, this course is designed to take you from beginner to industry-ready Java developer. With hands-on projects, experienced trainers, practical assignments, and placement support, techcadd is a trusted choice for students searching for a **Java training institute in Ludhiana** that focuses on real-world skills and career growth.',
    'This course is ideal for anyone in Ludhiana, Punjab who wants to build a career in Java development, software engineering, backend development, or application development. With practical training and career-focused learning from day one, techcadd helps learners develop the technical skills and confidence needed to enter the IT industry.'
  ]
}

/* ------------------------------------------------------------------
   Who can do this course — fills the standard "who can join" block
   rather than adding a second one. See joiners() in shared.js for the
   shape, and components/course/icons.jsx for the icon names.
------------------------------------------------------------------ */
export const JAVA_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this Java course in Ludhiana',
  lead: 'One of the biggest advantages of techcadd’s **Java course in Ludhiana** is that it is designed for learners from different educational backgrounds and experience levels. Whether you’re a student, graduate, job seeker, or working professional, you can learn Java from the basics and gradually develop the programming skills required for a career in the IT industry.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students',
      text: 'If you’ve recently completed 12th and want to start a career in software development, a **Java course in Ludhiana** after 12th can be a great starting point. You don’t need advanced programming knowledge to begin. techcadd’s training starts with programming fundamentals and gradually covers Core Java, OOPs, databases, and application development.',
      tag: 'No background needed'
    },
    {
      icon: 'career',
      title: 'Graduates and Postgraduates (Any Stream)',
      text: 'Students with degrees such as B.A., B.Com, B.Sc, BCA, BBA, MCA, MBA, or other qualifications can learn Java and develop practical programming skills. For graduates looking to enter the IT sector, Java training can provide a strong foundation for roles in software development, backend development, and application development.',
      tag: 'Any stream'
    },
    {
      icon: 'spark',
      title: 'Job Seekers and Career Switchers',
      text: 'If you’re looking to move into the IT industry from another field, learning Java can help you build a new technical skill set. The course focuses on practical programming concepts, projects, database connectivity, and development techniques to help learners prepare for entry-level Java development opportunities.',
      tag: 'Start from zero'
    },
    {
      icon: 'code',
      title: 'Students from Technical Backgrounds',
      text: 'Students pursuing BCA, B.Tech, MCA, M.Sc IT, or other technical courses can use Java training to strengthen their programming knowledge. Practical Java projects and hands-on assignments can help students understand concepts beyond classroom theory and prepare for software development interviews.',
      tag: 'Beyond the syllabus'
    },
    {
      icon: 'stack',
      title: 'Working Professionals Looking to Upskill',
      text: 'Working professionals who want to improve their programming knowledge or transition into software development can learn Java to expand their career opportunities. Flexible batch timings can make it easier to continue learning while managing existing professional responsibilities.',
      tag: 'Flexible batches'
    },
    {
      icon: 'server',
      title: 'Aspiring Software Developers',
      text: 'Anyone interested in becoming a software developer can join the course and build a strong foundation in Java. From Core Java and Object-Oriented Programming to **JDBC**, databases, frameworks, and real-world projects, the training is designed to develop practical skills that can be applied in professional development environments.',
      tag: 'Portfolio ready'
    }
  ],
  note: 'In short: there is no need to be an experienced programmer to start. If you’re motivated to learn coding and build a career in software development, techcadd’s **Java course in Ludhiana** provides a structured path from programming fundamentals to industry-oriented Java development skills.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'java-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn and the tools you’ll master',
  lead: 'techcadd’s **Java course in Ludhiana** is designed to take you from programming fundamentals to advanced, job-ready Java development skills. The curriculum focuses on practical coding, object-oriented programming, database connectivity, application development, and real-world projects. Here’s a detailed breakdown of what the course covers.',
  items: [
    {
      title: 'Java Programming Fundamentals',
      text: 'You’ll begin with the basics of Java programming, including variables, data types, operators, conditional statements, loops, arrays, methods, and input/output. These fundamentals create a strong foundation for understanding advanced Java development.'
    },
    {
      title: 'Object-Oriented Programming (OOPs)',
      text: 'A major focus of the course is Object-Oriented Programming. You’ll learn important concepts such as classes, objects, inheritance, polymorphism, abstraction, and encapsulation. These concepts are essential for developing structured and maintainable Java applications.'
    },
    {
      title: 'Core Java',
      text: 'You’ll develop strong knowledge of Core Java concepts, including constructors, packages, access modifiers, static and final keywords, strings, wrapper classes, and other important Java features used in professional programming.'
    },
    {
      title: 'Exception Handling',
      text: 'Learn how to identify, handle, and manage errors in Java applications using exception-handling techniques. You’ll work with concepts such as try-catch, finally, throw, throws, and custom exceptions to create more reliable applications.'
    },
    {
      title: 'Collections Framework',
      text: 'You’ll learn how to efficiently store and manage groups of objects using Java’s Collections Framework. The module covers important concepts such as List, Set, Map, ArrayList, LinkedList, HashSet, HashMap, and iterators.'
    },
    {
      title: 'Multithreading',
      text: 'Understand how Java handles multiple tasks at the same time through multithreading. You’ll learn about threads, thread lifecycle, synchronization, and other concepts that are useful when developing efficient applications.'
    },
    {
      title: 'JDBC & Database Connectivity',
      text: 'You’ll get practical training in connecting Java applications with databases using **JDBC**. This includes database connections, SQL queries, CRUD operations, prepared statements, and retrieving or updating data from applications.'
    },
    {
      title: 'SQL & Database Basics',
      text: 'Along with Java, you’ll learn essential database concepts and **SQL** commands required for application development. This helps you understand how Java applications store, retrieve, update, and manage data.'
    },
    {
      title: 'Java GUI & Application Development',
      text: 'Depending on the course structure, you’ll gain exposure to Java-based application development concepts and learn how programming components work together to create functional applications.'
    },
    {
      title: 'Advanced Java Concepts',
      text: 'The course introduces advanced Java development concepts that can help learners progress toward professional software development. Topics may include web application concepts, servlets, JSP, session management, and other technologies relevant to Java development.'
    },
    {
      title: 'Framework & Backend Development Basics',
      text: 'You’ll also get an introduction to modern Java development approaches and frameworks used for backend application development. This helps students understand how Java is applied in professional development environments.'
    },
    {
      title: 'Practical Projects',
      text: 'Throughout the training, you’ll work on coding assignments and real-world Java projects. These projects help you apply programming concepts, improve problem-solving abilities, and build practical experience that can be presented during interviews.'
    }
  ],
  tools: {
    label: 'Tools you’ll work with',
    items: [
      'Java JDK',
      'Eclipse',
      'IntelliJ IDEA',
      'JDBC',
      'MySQL',
      'SQL',
      'Git',
      'GitHub',
      'Maven',
      'Servlets & JSP',
      'Spring Boot'
    ]
  },
  close: 'By the end you will not just recognise Java syntax — you will have written, debugged and shipped applications of your own, which is the only thing a technical interview can actually test.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'java-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'Choosing the right **Java course in Ludhiana** isn’t just about learning Java syntax or memorizing programming concepts — it’s about choosing a program that prepares you for real software development, practical projects, technical interviews, and career opportunities. Here’s why techcadd’s Java program stands out for students and professionals across Ludhiana and Punjab.',
  items: [
    {
      title: 'Practical, Not Just Theoretical',
      text: 'Many institutes focus heavily on classroom theory. techcadd follows a practical learning approach where students write code, solve programming problems, complete assignments, and work on real-world projects. From Core Java to database connectivity and application development, learners get hands-on experience throughout the course.'
    },
    {
      title: 'Updated, Industry-Relevant Curriculum',
      text: 'Java continues to be an important programming language for software, backend, enterprise, and application development. techcadd’s curriculum covers essential concepts such as Core Java, OOPs, Exception Handling, Collections, **JDBC**, databases, and advanced Java development concepts, helping students build relevant and practical programming skills.'
    },
    {
      title: 'Strong Programming Foundation',
      text: 'A good Java developer needs more than knowledge of syntax. The program focuses on logic building, object-oriented programming, problem-solving, coding practices, and application development. Students gradually move from basic programming concepts to more advanced topics, creating a strong foundation for their IT careers.'
    },
    {
      title: 'Career-Focused Structure',
      text: 'Every module is designed with employability in mind. Students learn concepts that are relevant to software development roles and get opportunities to apply them through coding tasks and projects. This makes it easier to move from classroom learning to real development environments.'
    },
    {
      title: 'Experienced Trainers',
      text: 'techcadd’s trainers focus on explaining complex Java concepts in a simple and practical way. Through coding demonstrations, assignments, project guidance, and problem-solving exercises, students can develop a better understanding of programming and gain confidence in writing Java applications.'
    },
    {
      title: 'Real-World Projects',
      text: 'Practical projects are an important part of the learning process. Students get opportunities to work on Java-based projects involving programming logic, databases, and application development. These projects can help learners demonstrate their technical skills during interviews and build a professional portfolio.'
    },
    {
      title: 'Placement and Career Support',
      text: 'The goal of Java training is not limited to completing a course or earning a certificate. techcadd provides career-oriented support including resume guidance, interview preparation, technical interview practice, and placement assistance to help students prepare for software development opportunities.'
    },
    {
      title: 'Affordable and Accessible Learning in Ludhiana',
      text: 'Students and professionals in Ludhiana can learn Java through structured classroom training without having to relocate to a major IT city. This makes it easier for local learners to develop professional programming skills while keeping their education convenient and accessible.'
    },
    {
      title: 'Flexible Learning for Different Students',
      text: 'Whether you’re a college student preparing for placements, a graduate looking for an IT career, a beginner learning programming for the first time, or a working professional planning to upskill, techcadd’s Java training is designed to support different learning levels and career goals.'
    }
  ],
  close: 'In a growing IT environment, strong programming skills can open doors to opportunities in software development, backend development, application development, and other technical roles. techcadd’s **Java course in Ludhiana** focuses on helping learners build those skills through structured, practical, and career-oriented training.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'java-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'When choosing a **Java training institute in Ludhiana**, students have several options, but the quality of practical training, trainer support, projects, and career guidance can make a major difference. Here’s what sets techcadd apart for Java learners.',
  items: [
    {
      title: 'Focus on Practical Skills',
      text: 'techcadd emphasizes practical coding rather than relying only on theoretical lectures. Students regularly work with Java programs, programming exercises, database connectivity, and projects to strengthen their understanding through practice.'
    },
    {
      title: 'Comprehensive Java Curriculum',
      text: 'The course follows a structured learning path, beginning with programming fundamentals and moving toward Core Java, OOPs, Collections, Exception Handling, **JDBC**, databases, and advanced development concepts. This helps students understand how different Java concepts work together in real applications.'
    },
    {
      title: 'Hands-On Project-Based Learning',
      text: 'Projects give students an opportunity to apply what they learn in class. Working on practical Java applications helps learners improve their coding abilities, understand development processes, and create work that can be discussed during interviews.'
    },
    {
      title: 'Experienced and Supportive Trainers',
      text: 'Good programming training requires proper guidance. techcadd’s trainers help students understand difficult concepts, identify coding mistakes, solve programming problems, and improve their technical knowledge through practical examples and regular guidance.'
    },
    {
      title: 'Local Presence in Ludhiana',
      text: 'For students looking for a **Java course in Ludhiana**, learning locally offers convenience along with access to classroom training and trainer interaction. techcadd understands the needs of students and job seekers in the local IT education ecosystem and focuses on career-oriented technical training.'
    },
    {
      title: 'Focus on Career Readiness',
      text: 'techcadd focuses on more than course completion. Students are encouraged to develop coding confidence, practical project experience, interview skills, and a stronger technical profile so they can approach software development opportunities with better preparation.'
    },
    {
      title: 'Placement Assistance and Career Guidance',
      text: 'techcadd provides placement-oriented support to help learners understand available career opportunities and prepare for recruitment processes. Resume guidance, interview preparation, and career support help students take the next step after completing their Java training.'
    },
    {
      title: 'Affordable Training',
      text: 'Professional programming education should be accessible to students and fresh graduates. techcadd aims to provide a balance of practical training, experienced guidance, projects, and career support at an affordable cost for learners in Ludhiana.'
    },
    {
      title: 'Suitable for Beginners and Experienced Learners',
      text: 'Whether you’re completely new to programming or already have some coding knowledge, the structured Java program allows learners to strengthen their fundamentals and progress toward advanced concepts. This makes it suitable for students, graduates, job seekers, and working professionals.'
    }
  ],
  close: 'Choosing techcadd means choosing a **Java training institute in Ludhiana** that focuses on practical programming, project-based learning, industry-relevant skills, and career preparation — helping learners move from learning Java to confidently applying it in real-world development scenarios.'
}

export const JAVA_NARRATIVE = [CURRICULUM, WHY_THIS_PROGRAMME, WHY_TECHCADD]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard set the factory writes for every other course rather
   than sitting on top of it — half of them ask the same things, and
   two near-identical questions in one accordion reads as padding.
------------------------------------------------------------------ */
export const JAVA_FAQS = [
  {
    q: 'Which is the best Java course in Ludhiana?',
    a: 'techcadd’s **Java course in Ludhiana** is designed for students, graduates, and professionals who want practical, industry-oriented Java training with experienced trainers, hands-on projects, and career support.'
  },
  {
    q: 'Who can join the Java course at techcadd?',
    a: 'Students, graduates, job seekers, working professionals, and beginners can join the course. Learners from BCA, B.Tech, MCA, B.Sc, and other educational backgrounds can benefit from the program.'
  },
  {
    q: 'What is the duration of the Java course in Ludhiana at techcadd?',
    a: 'The course duration may vary depending on the program level and batch schedule. Exact duration, timings, and course structure can be confirmed during enrolment or a counselling/demo session.'
  },
  {
    q: 'Is prior programming experience required to join the Java course?',
    a: 'No. The course is suitable for beginners as well as learners who already have basic programming knowledge. Training starts with fundamental programming concepts and gradually moves toward advanced Java development.'
  },
  {
    q: 'What will I learn in the Java course?',
    a: 'You’ll learn Java programming fundamentals, OOPs, Core Java, Exception Handling, Collections, Multithreading, **JDBC**, **SQL**, database connectivity, advanced Java concepts, and practical application development.'
  },
  {
    q: 'Which tools and technologies will I learn?',
    a: 'Depending on the course structure, you’ll work with technologies and tools such as Java JDK, **Eclipse** or **IntelliJ IDEA**, **JDBC**, **MySQL**, **SQL**, Git/GitHub, Maven, and other relevant Java development tools.'
  },
  {
    q: 'Does techcadd provide placement assistance after course completion?',
    a: 'Yes. techcadd provides career-oriented support such as resume guidance, interview preparation, technical interview preparation, and placement assistance to help students prepare for Java development opportunities.'
  },
  {
    q: 'Can I do this Java course after 12th?',
    a: 'Yes. Students can start learning Java after 12th, especially those interested in programming and software development. The course begins with basic concepts, making it suitable for learners without professional coding experience.'
  },
  {
    q: 'Is the Java course suitable for working professionals?',
    a: 'Yes. Working professionals can use Java training to strengthen their programming skills, transition toward software development, or improve their technical profile. Flexible batch options may be available depending on the schedule.'
  },
  {
    q: 'What career opportunities are available after completing a Java course in Ludhiana?',
    a: 'After developing strong Java and programming skills, learners can explore opportunities such as Java Developer, Junior Java Developer, Backend Developer, Software Developer, Application Developer, and Software Engineer, depending on their skills and experience.'
  },
  {
    q: 'Does the course include practical projects?',
    a: 'Yes. Practical assignments and projects are an important part of the training. Students get opportunities to apply Java concepts, work with databases, solve programming problems, and develop applications.'
  },
  {
    q: 'Is Java still a good career option?',
    a: 'Yes. Java remains an important programming language for software, backend, enterprise, and application development. Building strong Java fundamentals can provide a solid foundation for a long-term career in software development.'
  }
]
