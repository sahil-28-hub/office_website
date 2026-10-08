/* ==================================================================
   Long-form copy for the C & C++ Programming course page.

   Same construction as ./digital-marketing-copy.js, ./python-copy.js
   and ./java-copy.js, and split out of programming.js for the same
   reason: that file seeds nine courses and this is one course's
   editorial content.

   ONE PAGE, TWO LANGUAGES

   The C material and the C++ material arrived separately, each with
   its own curriculum, its own student reviews and its own question
   set. They are merged here rather than kept apart, because the site
   has one course — "C & C++ Programming Course" — and a visitor
   asking about either lands on this page.

   Merging meant deduplicating: both sets asked "do I need prior
   experience", "can I join after 12th", "is it suitable for working
   professionals" and "does it include projects" in near-identical
   words. The questions below ask each of those once, answered for
   both languages, rather than twice with slightly different wording.
   The curriculum runs C fundamentals first and C++ on top, which is
   the order the course actually teaches them in.

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
================================================================== */

export const C_CPP_OVERVIEW = {
  title: 'The C and C++ course in Ludhiana that builds the foundation',
  lead: 'Looking for the best **C Programming course in Ludhiana** — or a **C++ course in Ludhiana** that actually builds job-ready programming skills? techcadd teaches both as one course, because C is where the logic is built and C++ is where it becomes object-oriented. It is designed for students, graduates, and beginners who want strong coding fundamentals, not just theory.',
  body: [
    'C is the backbone of computer science — mastering it makes it easier to learn C++, Java, Python, Data Structures, and even the core concepts used in embedded systems and competitive coding. As a trusted **C++ training institute in Ludhiana**, techcadd covers core programming logic, object-oriented programming (OOP), data structures, memory management, and real-world coding projects using industry-standard practices.',
    'The **C Programming classes in Ludhiana** combine practical, hands-on coding sessions with real-world logic-building exercises, live doubt-solving, and structured assignments. Whether you’re a 12th-pass student exploring programming for the first time, a BCA/MCA/B.Tech student strengthening fundamentals, or a job seeker preparing for technical interviews and government IT exams, this course takes you from zero to confident, independent coder.',
    'With experienced trainers, a Ludhiana-based learning centre, flexible batch timings, and a strong focus on placement readiness, techcadd is one of the most trusted names for programming education in Ludhiana — practical, affordable, and beginner-friendly from day one.'
  ]
}

/* ------------------------------------------------------------------
   Who can do this course.

   Fills the standard "who can join" block rather than adding a second
   one. Seven groups, merged from the two source sets: the C material
   listed school students and exam candidates, the C++ material listed
   technical-degree students and people heading for DSA, and both
   listed beginners, job seekers and career switchers. Each person is
   described once.
------------------------------------------------------------------ */
export const C_CPP_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this C and C++ course',
  lead: 'One of the biggest myths around programming courses is that you need a computer science background to even attempt them. That is not true — and this **C Programming course in Ludhiana** is built specifically to prove it. You don’t need any prior coding background to get started, and the course is structured to meet you exactly where you are.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students (Any Stream)',
      text: 'You don’t need to have taken Computer Science in school to start. Whether you’re from a Science, Commerce, or Arts background, the course breaks C down from the absolute basics — variables, loops, functions — before moving into object-oriented C++. Many students in Ludhiana join right after school to get a head start before enrolling in BCA or B.Tech, and some join alongside their degree to stay ahead of the college syllabus.',
      tag: 'Any stream'
    },
    {
      icon: 'code',
      title: 'BCA, B.Tech, MCA, B.Sc IT & Diploma Students',
      text: 'If you’re already in a technical degree, your syllabus probably covers C and C++ theoretically but gives you limited hands-on lab time. This course fills that exact gap: practical coding, step-by-step logic building, and doubt clearing, so you walk into semester exams and viva sessions with real confidence rather than memorized definitions. It also strengthens the base for Data Structures, Algorithms and OOP later in the curriculum.',
      tag: 'Exam & viva ready'
    },
    {
      icon: 'mentor',
      title: 'Job Seekers Preparing for Technical Interviews',
      text: 'C and C++ remain among the most commonly tested languages in technical interviews, coding rounds, and government IT exams across India. If you’re preparing for software roles, IT support positions, or competitive exams that test programming aptitude, the course sharpens exactly what you’ll be evaluated on — logic building, problem-solving, and writing clean code under pressure.',
      tag: 'Interview prep'
    },
    {
      icon: 'terminal',
      title: 'Complete Beginners with Zero Coding Background',
      text: 'You don’t need to have written a single line of code before walking in. Trainers start from the fundamentals of programming logic itself — what a variable is, how a loop works, why functions matter — and gradually build to pointers, file handling, classes, inheritance and polymorphism. Each concept is explained with real examples and hands-on practice, not theory on a whiteboard.',
      tag: 'Start from zero'
    },
    {
      icon: 'spark',
      title: 'Career Switchers',
      text: 'If you’re currently working in a non-technical field and want to move into IT, software testing, technical support, or software development, C is often the recommended starting language because it teaches you exactly how a computer thinks — memory, logic flow, and structured problem-solving. The job-seeker-focused batches are designed with placement preparation in mind, including interview-style coding questions and logic-building drills.',
      tag: 'Start from zero'
    },
    {
      icon: 'stack',
      title: 'Working Professionals Pivoting into Tech',
      text: 'If you’re currently in a non-tech role and considering a shift toward software development, IT support, or technical roles, a strong grip on C and C++ fundamentals is often the first credibility marker recruiters look for. Evening and flexible batch timings make this accessible even alongside a full-time job.',
      tag: 'Evening batches'
    },
    {
      icon: 'stack',
      title: 'Anyone Planning to Learn Java, Python or DSA Next',
      text: 'C++ is widely considered the strongest foundation for learning other languages and, critically, for Data Structures and Algorithms — a core requirement for software development roles. Many students in Ludhiana take this course specifically as a stepping stone before moving into Java, Python, or a dedicated DSA course, because the logic-building skills transfer directly.',
      tag: 'Foundation for DSA'
    },
    {
      icon: 'star',
      title: 'School Students Wanting a Head Start',
      text: 'Students in classes 9th to 12th who are interested in computer science, coding competitions, or simply curious about how software works can also join. Learning C early builds strong problem-solving habits that help in academics, coding olympiads, and every technical subject that comes later.',
      tag: 'From class 9'
    },
    {
      icon: 'chart',
      title: 'Anyone Preparing for Government or Technical Exams',
      text: 'Certain competitive and technical exams include programming fundamentals or logic-based sections. A structured C and C++ course helps build the analytical thinking needed for these assessments, alongside general aptitude preparation.',
      tag: 'Aptitude & logic'
    }
  ],
  note: 'In short — this course isn’t reserved for “coding types”. It is built for anyone in Ludhiana ready to put in the effort, and nobody in the room is ahead of you on day one.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'ccpp-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn and the tools you’ll master',
  lead: 'The course is structured to take you step by step from absolute basics to confident, independent coding — C first, because that is where the logic and the memory model are learned, then C++ on top of it. Here is what the curriculum covers and the tools you’ll work with.',
  items: [
    {
      title: 'Programming Fundamentals & Logic Building',
      text: 'You’ll start with the building blocks: what a compiler does, how a program is structured, variables, data types (int, float, char, double), constants, and operators — arithmetic, relational, logical and assignment. More importantly, you learn to think in logic before syntax, which is the part that carries into every language afterward.'
    },
    {
      title: 'Control Flow & Decision Making',
      text: 'How programs make decisions and repeat actions — if-else, nested conditions, switch-case, and the for, while and do-while loops. This is where students write their first real logic-based programs: calculators, pattern printing, and number-checking problems.'
    },
    {
      title: 'Functions & Modular Programming',
      text: 'Break large problems into smaller, reusable pieces — function declaration, definition, calling, parameters, return values, recursion, function overloading, and the difference between call by value and call by reference. This builds the habit of writing organized code instead of one long block.'
    },
    {
      title: 'Arrays & Strings',
      text: 'Single and multi-dimensional arrays, array manipulation, and string handling using character arrays and the standard string library — strlen, strcpy, strcmp, strcat and the rest. Students practice sorting, searching and string reversal, all common in college exams and technical interviews.'
    },
    {
      title: 'Pointers & Memory Addresses',
      text: 'The most important — and most feared — topic in C, taught step by step: pointer basics, pointer arithmetic, pointers with arrays, pointers with functions, and pointers to pointers. Trainers focus heavily here, because a strong grasp of pointers makes memory management and every later language significantly easier.'
    },
    {
      title: 'Structures & Unions',
      text: 'Group different data types together using structures and unions, along with nested structures, arrays of structures, and passing structures to functions — essential for building more complex, real-world programs.'
    },
    {
      title: 'Object-Oriented Programming (OOP) in C++',
      text: 'This is where C++ moves beyond C and becomes genuinely powerful. You’ll master classes and objects, encapsulation, abstraction, inheritance, and polymorphism — the concepts that define how real-world software is structured, and the ones most frequently tested in technical interviews and university exams.'
    },
    {
      title: 'Memory Management & Dynamic Allocation',
      text: 'How memory allocation actually works — malloc, calloc, realloc and free in C, new and delete in C++, plus constructors and destructors. You learn to avoid the common memory bugs, leaks and dangling pointers, which is the skill that separates serious programmers from beginners.'
    },
    {
      title: 'File Handling',
      text: 'Reading from and writing to files programmatically, so programs can store and retrieve data — fopen, fclose, fread, fwrite, fprintf and fscanf, and the C++ stream equivalents. A key concept for real-world applications, from simple record-keepers to larger software systems.'
    },
    {
      title: 'Introduction to Data Structures',
      text: 'A foundational introduction to arrays, linked lists, stacks and queues, implemented by hand before any library hands them to you — preparing you directly for a dedicated Data Structures and Algorithms course, which is essential for software development and coding interviews.'
    },
    {
      title: 'Standard Template Library (STL) Basics',
      text: 'An introduction to **STL** components like vectors, maps, and the standard algorithms — the pre-built tools professional C++ developers use daily instead of writing everything from scratch.'
    },
    {
      title: 'Debugging & Problem-Solving',
      text: 'A major differentiator of this course is hands-on debugging practice — reading compiler errors, tracing logic bugs, and using debugging tools effectively. Employers actively test for this, and classroom-only learning rarely develops it.'
    },
    {
      title: 'Tools & Software Covered',
      text: '**Code::Blocks**, **Turbo C** or the **GCC**/G++ compiler for writing, compiling and running programs; **VS Code** and command-line basics so you understand the compilation and execution flow; debugging tools for finding syntax and logic errors; and basic IDE navigation — project structure, file management and build processes.'
    },
    {
      title: 'Mini Projects & Practical Coding',
      text: 'Toward the end of the course you apply everything to small real-world projects — a student record management system, a simple calculator, a library management mini-project, simple games, or pattern-based logic programs — giving you concrete work to discuss in interviews and college submissions.'
    }
  ],
  tools: {
    label: 'Tools you’ll work with',
    items: [
      'GCC / G++ compiler',
      'Code::Blocks',
      'Turbo C',
      'VS Code',
      'GDB debugger',
      'Command line / terminal',
      'STL',
      'Git & GitHub'
    ]
  },
  close: 'By the end you will not just recognise C and C++ syntax — you will have written, compiled, debugged and shipped programs of your own, which is the only thing an exam, a viva or a technical interview can actually test.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'ccpp-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'Choosing the right place to learn **C and C++ in Ludhiana** matters more than most students realize. These are not just “another subject” — they are the foundation every serious programmer builds on. Here is why techcadd’s approach stands out.',
  items: [
    {
      title: 'Logic-First Teaching, Not Just Syntax',
      text: 'Many institutes rush through C as a checkbox before moving to “more exciting” languages, and teach C++ as a list of definitions. Here the philosophy is different: this is treated as the most important course you will take, because it teaches how to think like a programmer — breaking problems into steps, understanding memory, writing efficient logic. That mindset carries into every language and framework you learn afterward.'
    },
    {
      title: 'Full Coverage: From C Fundamentals to Advanced OOP',
      text: 'The course does not skip steps. It starts with core C-level fundamentals — variables, data types, operators, control structures, arrays, pointers and functions — before transitioning into C++-specific concepts: classes and objects, encapsulation, abstraction, inheritance and polymorphism. By the end students are not just comfortable writing procedural code; they can apply OOP confidently in real projects and interviews.'
    },
    {
      title: 'Hands-On, Practice-Heavy Format',
      text: 'Reading about pointers and actually debugging a pointer error before an assignment deadline are two very different experiences. Classes are built around writing and debugging real code in every session — not watching a trainer code on a projector. Students leave each class having actually built something, which is the only way fundamentals genuinely stick.'
    },
    {
      title: 'Small Batches, Individual Attention',
      text: 'Ludhiana students often mention that large college classes make it hard to ask questions or get individual feedback on code. Batch sizes here are kept manageable so trainers can actually review your code, point out mistakes, and explain why something works — not just tell you to memorize the fix.'
    },
    {
      title: 'Doubt-Solving and One-on-One Support',
      text: 'Programming is a subject where being stuck for 20 minutes on a single missing semicolon can kill motivation fast. Structured doubt-solving sessions and one-on-one guidance mean students are not left stuck between classes with no way forward — the most common reason beginners abandon programming courses midway.'
    },
    {
      title: 'Bridges the Gap Between College Theory and Real Coding',
      text: 'If you are a BCA, B.Tech or MCA student, this program complements rather than repeats what you study in college. The focus is on making sure you can actually write working code confidently — for exams, vivas, projects and technical interviews — instead of only being able to explain definitions on paper.'
    },
    {
      title: 'A Genuine Stepping Stone, Not a Dead End',
      text: 'This is deliberately positioned as a foundation, not a finish line. Students who complete it are prepared to move directly into Data Structures and Algorithms, Java, Python, embedded systems or competitive programming — because the logic-building transfers into every one of those. Students often choose this course specifically because it sets up everything that comes next.'
    },
    {
      title: 'Placement & Interview Readiness',
      text: 'For job seekers, the course includes practice with commonly asked interview coding questions and logic-building exercises that technical recruiters look for — so you walk into interviews with real problem-solving confidence rather than theoretical knowledge.'
    },
    {
      title: 'Locally Accessible, Practically Priced',
      text: 'Being based in Ludhiana means flexible batch timings that work around school, college or job schedules, and in-person doubt-clearing support — without travelling to Chandigarh or relocating, and at a price built for students and job seekers rather than corporate training budgets.'
    },
    {
      title: 'Trainers Who Focus on Understanding, Not Memorization',
      text: 'The trainers emphasise why code works the way it does, rather than providing solutions to copy. That builds genuine problem-solving ability — the skill that actually matters in exams, interviews, and real development work.'
    }
  ],
  close: 'If you are comparing institutes in Ludhiana, the real differentiator is not the syllabus outline — most look similar on paper. It is whether the course builds genuine problem-solving ability or just gets you through the semester exam. This program is built for the former, because that is what holds up in interviews, real jobs and further learning.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'ccpp-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'With dozens of institutes across Ludhiana offering “C/C++ training”, choosing the right one comes down to a few things that actually affect whether you learn — not just attend. Here is why students consistently choose techcadd for their programming journey.',
  items: [
    {
      title: 'Beginners Need Clarity, Not Jargon',
      text: 'A lot of programming courses overwhelm beginners with technical terms before they have understood the basics. Here every concept — from variables and loops to pointers, classes and file handling — is broken down into simple, practical steps with real coding examples, so students build genuine understanding instead of surface-level memorization.'
    },
    {
      title: 'Certified, Experienced Trainers',
      text: 'Learning from someone who understands programming logic deeply — not someone reading from a slide deck — is the difference between confusion and clarity. techcadd’s trainers bring real, hands-on programming experience into the classroom: practical explanations, live debugging demonstrations, and answers grounded in how code actually behaves.'
    },
    {
      title: '100% Practical, Project-Based Training',
      text: 'Students do not just watch concepts explained — they implement them immediately, make mistakes, fix them, and build the muscle memory lecture-only learning cannot produce. This matters especially for C and C++, where pointers and memory management are genuinely learned by doing.'
    },
    {
      title: 'Proven Track Record with Ludhiana & Punjab Students',
      text: 'techcadd has trained thousands of students across Ludhiana and the surrounding Punjab region — from 12th pass beginners to working professionals switching into IT. That local experience means trainers already understand the common gaps students bring from school and college, and teach in a way that addresses them directly.'
    },
    {
      title: 'Approachable Trainers Who Mentor',
      text: 'techcadd’s trainers are known for patiently explaining concepts multiple times, encouraging students to ask “silly” questions, and creating an environment where beginners do not feel embarrassed about not knowing something yet.'
    },
    {
      title: 'Beginner-Friendly Without Being Basic',
      text: 'The course is accessible to complete beginners with zero coding background, but it does not stay shallow. It runs all the way through object-oriented programming and into data structures and the STL, so students finish with genuinely advanced, interview-ready skills rather than an introduction.'
    },
    {
      title: 'Flexible Batches for Every Schedule',
      text: 'Students come from different schedules — school, college, or jobs — so batch timings include weekend and evening options, and accommodate those preparing for semester exams or juggling part-time work, without compromising on depth.'
    },
    {
      title: 'Practical Skill-Building Over Certificates',
      text: 'techcadd does provide course completion certification, but the emphasis is on making sure students can actually do the work — write functioning programs, debug logic errors, and explain their code confidently in interviews or vivas. That competence is what matters to colleges, recruiters and employers.'
    },
    {
      title: 'Support Beyond the Classroom',
      text: 'Placement guidance and continued support do not stop the day the course ends. The approach is built around helping students actually use what they have learned — acing a college viva, clearing a technical interview, or continuing into the next course in their tech journey.'
    },
    {
      title: 'Curriculum Designed Around Real Coding, Not Just Theory',
      text: 'Instead of rushing through chapters to “complete a syllabus”, the course is structured around actual problem-solving — writing programs, debugging them, and understanding why errors happen. Students leave able to write code confidently, not just recognise it on paper during exams.'
    },
    {
      title: 'A Foundation That Sets Up Future Learning',
      text: 'Because C and C++ are treated as the foundation for everything else — Data Structures, Java, and beyond — students who complete this course often find themselves significantly better prepared for advanced programming courses, whether they continue at techcadd or move on elsewhere.'
    },
    {
      title: 'Career-Focused Curriculum',
      text: 'The course is not designed in isolation from what comes next. It is structured as a genuine stepping stone toward Data Structures and Algorithms, Java, Python, and software development roles — so students are not learning C and C++ for their own sake, but building a foundation that supports their next career or academic move.'
    },
    {
      title: 'Local Accessibility Without Compromising Quality',
      text: 'Students do not need to travel to Chandigarh, Delhi, or other metro cities for quality programming education. techcadd brings a structured, industry-relevant C and C++ course right to Ludhiana, with an in-person, doubt-clearing learning environment that online-only courses often cannot replicate.'
    }
  ],
  close: 'Plenty of institutes in Ludhiana teach the C and C++ syllabus. Fewer teach students to actually think in code. This course is built around that second, harder goal — because that is what holds up months later, in an interview room or a real coding task, long after the certificate has been filed away.'
}

export const C_CPP_NARRATIVE = [CURRICULUM, WHY_THIS_PROGRAMME, WHY_TECHCADD]

/* ------------------------------------------------------------------
   Student reviews — both sets, from the C material and the C++
   material, kept whole. They are different people saying different
   things, so nothing here needed merging. The factory writes three
   generic quotes for a course with none; these replace that set.
------------------------------------------------------------------ */
export const C_CPP_TESTIMONIALS = [
  {
    quote: 'I joined techcadd right after my 1st semester because college classes moved too fast and I was lost with pointers. The trainers here explained everything with proper examples, and now I actually enjoy solving logic problems. My exam and viva both went really well this time.',
    name: 'Manpreet Singh',
    course: 'C & C++',
    detail: 'BCA student, Ludhiana',
    rating: 5,
    initials: 'MS'
  },
  {
    quote: 'I had zero coding background before joining. Honestly, I was scared of pointers when everyone talked about them. But the way the trainers broke things down step by step, I actually started enjoying debugging by the end. Now I’m confident enough to take up Java next.',
    name: 'Ramanpreet Singh',
    course: 'C & C++',
    detail: '12th pass, Model Town, Ludhiana',
    rating: 5,
    initials: 'RS'
  },
  {
    quote: 'My college covers C++ theoretically but we barely get lab time. techcadd filled that gap completely. I used what I learned here directly in my semester practicals and my viva went so much smoother because I could actually explain my code, not just recite it.',
    name: 'Simran Kaur',
    course: 'C & C++',
    detail: 'BCA student, GNE College',
    rating: 5,
    initials: 'SK'
  },
  {
    /* a second, different Simran Kaur — both sets of reviews carried
       one, and they are plainly different people */
    quote: 'I had zero coding background before this course. I was honestly scared of programming, but the way they started from the very basics made it so easy to follow. Now I’m confident enough to take up B.Tech CSE next year.',
    name: 'Simran Kaur',
    course: 'C & C++',
    detail: '12th pass, Model Town, Ludhiana',
    rating: 5,
    initials: 'SK'
  },
  {
    quote: 'OOP concepts finally clicked for me here. Inheritance and polymorphism always felt abstract in textbooks, but working through actual class hierarchies in projects made it real. Best decision before my placement season starts.',
    name: 'Ananya Sharma',
    course: 'C & C++',
    detail: 'B.Tech CSE, 2nd year',
    rating: 5,
    initials: 'AS'
  },
  {
    quote: 'I was working in a non-tech job and wanted to shift into IT. It felt intimidating at first, but the step-by-step teaching made it manageable even with my job schedule. The pointers module was tough but the trainer didn’t move ahead until we all understood.',
    name: 'Harpreet Kaur',
    course: 'C & C++',
    detail: 'Working professional, Ludhiana',
    rating: 5,
    initials: 'HK'
  },
  {
    quote: 'Best decision to join alongside my college semester. My college covers theory fast, but here I actually got to write and debug real code. Only thing I’d say is batch timings can get a bit tight during exam season, but trainers were flexible when I asked.',
    name: 'Rohit Sharma',
    course: 'C & C++',
    detail: 'B.Tech CSE, PAU Road, Ludhiana',
    rating: 4,
    initials: 'RS'
  },
  {
    quote: 'I came here specifically to strengthen my pointers and structures concepts before my Data Structures subject started. It made a huge difference — DS felt so much easier because my fundamentals were already solid.',
    name: 'Karanveer Singh',
    course: 'C & C++',
    detail: 'B.Tech student, Ferozepur Road, Ludhiana',
    rating: 5,
    initials: 'KS'
  },
  {
    quote: 'Pointers and memory management used to terrify me. After the mini projects here, I can actually explain dynamic memory allocation in an interview without freezing up. That confidence alone was worth the course.',
    name: 'Kirandeep Kaur',
    course: 'C & C++',
    detail: 'Job seeker preparing for interviews',
    rating: 5,
    initials: 'KK'
  },
  {
    quote: 'Compared to my polytechnic classes, this was way more practical. We actually wrote programs every single class instead of just copying notes. My logic building has improved a lot, and I’m way more confident with loops and arrays now.',
    name: 'Aman Verma',
    course: 'C & C++',
    detail: 'Diploma student, Chandigarh Road, Ludhiana',
    rating: 5,
    initials: 'AV'
  },
  {
    quote: 'Everyone assumes commerce students can’t code. techcadd proved that wrong for me. I started this course to explore options and ended up genuinely liking programming logic. Planning to continue into Python next.',
    name: 'Priya Verma',
    course: 'C & C++',
    detail: '12th pass (Commerce), Sarabha Nagar',
    rating: 5,
    initials: 'PV'
  },
  {
    quote: 'Genuinely one of the better coding institutes in Ludhiana. Trainers are patient and don’t make you feel dumb for asking basic questions, which honestly matters a lot when you’re a complete beginner like I was.',
    name: 'Jasleen Bhullar',
    course: 'C & C++',
    detail: 'BCA fresher, Sarabha Nagar, Ludhiana',
    rating: 4,
    initials: 'JB'
  },
  {
    quote: 'The mini projects — the calculator, the student record system — sound basic on paper but building them from scratch taught me more than a semester of lectures did. I finally understand why we learn what we learn.',
    name: 'Aditya Mehta',
    course: 'C & C++',
    detail: 'B.Sc IT, Ludhiana',
    rating: 5,
    initials: 'AM'
  },
  {
    quote: 'Solid course for anyone wanting to actually understand the language instead of just memorizing programs for exams. File handling and dynamic memory sections were explained really well with proper real-life examples.',
    name: 'Gurjot Singh',
    course: 'C & C++',
    detail: 'MCA student, Civil Lines, Ludhiana',
    rating: 4,
    initials: 'GS'
  },
  {
    quote: 'I was preparing for government IT exams and needed to brush up on fundamentals. The doubt-solving sessions were a lifesaver — I’d get stuck on something and instead of losing a whole evening, I’d get it sorted the next class.',
    name: 'Harpreet Singh',
    course: 'C & C++',
    detail: 'Job seeker, Civil Lines, Ludhiana',
    rating: 5,
    initials: 'HS'
  },
  {
    quote: 'I was preparing for technical interviews and needed strong programming fundamentals. This course helped me get comfortable with commonly asked coding questions. Got selected in a technical support role recently and I genuinely think it helped build my confidence.',
    name: 'Navdeep Kaur',
    course: 'C & C++',
    detail: 'Job seeker, Ludhiana',
    rating: 5,
    initials: 'NK'
  },
  {
    quote: 'Switching into a more technical role at 27 felt intimidating, but the evening batch worked around my job. The trainers never made me feel behind just because I started later than the college students in my batch.',
    name: 'Gurpreet Singh',
    course: 'C & C++',
    detail: 'Working professional, IT support background',
    rating: 5,
    initials: 'GP'
  },
  {
    quote: 'I travel from Chandigarh a couple of times a week because the practical approach here is worth it. Most institutes near me just cover syntax; this course actually builds problem-solving ability.',
    name: 'Manpreet Singh',
    course: 'C & C++',
    detail: 'MCA student, Chandigarh',
    rating: 5,
    initials: 'MP'
  },
  {
    quote: 'I used to travel from Chandigarh for weekend batches since I’d heard good things about the teaching style. Totally worth the commute — the practical, hands-on approach here is different from typical coaching classes.',
    name: 'Priya Mehta',
    course: 'C & C++',
    detail: '12th pass, Chandigarh',
    rating: 5,
    initials: 'PM'
  },
  {
    quote: 'I’m not from a tech background at all — I was in retail before this. Starting from literally “what is a variable” felt embarrassing at first, but nobody made me feel that way here. Three months in, I’m writing programs I never thought I could.',
    name: 'Navjot Kaur',
    course: 'C & C++',
    detail: 'Complete beginner, career switcher',
    rating: 5,
    initials: 'NJ'
  },
  {
    quote: 'Took this course over summer break before starting BCA. Genuinely glad I did — my first semester feels less overwhelming because I already know the fundamentals everyone else is learning from scratch.',
    name: 'Rohit Kumar',
    course: 'C & C++',
    detail: '12th pass, preparing for BCA entrance',
    rating: 5,
    initials: 'RK'
  },
  {
    quote: 'Started learning early because I’m interested in coding competitions. The trainers made it fun instead of boring, and I actually look forward to practicing programs at home now.',
    name: 'Ishaan Chopra',
    course: 'C & C++',
    detail: 'School student, class 11, Dugri, Ludhiana',
    rating: 5,
    initials: 'IC'
  }
]

/* ------------------------------------------------------------------
   The page's own questions.

   Merged from both source sets. Four questions appeared in both —
   prior experience, joining after 12th, suitability for working
   professionals, and whether there are projects — and are asked once
   here, answered for both languages. The seed sets `ownFaqs`, so
   these replace the standard set the factory writes.
------------------------------------------------------------------ */
export const C_CPP_FAQS = [
  {
    q: 'Which is the best C and C++ course in Ludhiana?',
    a: 'techcadd’s **C Programming course in Ludhiana** — which covers C++ in the same programme — is a strong choice for students, graduates and beginners, because of its practical, project-based training, experienced trainers, and beginner-friendly, step-by-step curriculum.'
  },
  {
    q: 'Why are C and C++ taught as one course?',
    a: 'Because that is the order they are learned in. C is where the logic, the memory model and pointers are built; C++ adds object-oriented programming on top of that same base. Splitting them would mean teaching the fundamentals twice, and most students need both anyway — for their syllabus, for interviews, and before moving on to Data Structures.'
  },
  {
    q: 'What is the duration of the course at techcadd in Ludhiana?',
    a: 'The programme typically runs from around 1–2 months for the C fundamentals to 3–4 months for the full C and C++ track, depending on the batch type — regular, fast-track, or weekend. Exact duration and batch schedules are shared during enrolment or a free demo session.'
  },
  {
    q: 'Do I need any prior coding experience to join?',
    a: 'No. The course is designed for absolute beginners as well as students with some coding exposure. It starts from basic concepts like variables and loops before moving to pointers, file handling, and object-oriented programming.'
  },
  {
    q: 'Is this course suitable for BCA, B.Tech, MCA or B.Sc IT students?',
    a: 'Yes. Many BCA, B.Tech, MCA and B.Sc IT students join to strengthen concepts taught in college — especially pointers, structures, recursion and OOP, which are often rushed through in regular classes.'
  },
  {
    q: 'Will this course help me with college exams and viva preparation?',
    a: 'Yes. The hands-on, practical approach ensures students can confidently write and explain code rather than memorize theory, which directly helps with semester exams, practicals and viva sessions.'
  },
  {
    q: 'What will I learn in this course?',
    a: 'Programming fundamentals, control structures, functions, arrays, strings, pointers, structures and unions, file handling, dynamic memory management, object-oriented programming (classes, inheritance, polymorphism), an introduction to data structures, and **STL** basics.'
  },
  {
    q: 'What tools or software will I learn to use?',
    a: 'Students work with compilers such as **Code::Blocks**, **Turbo C** or **GCC**/G++, along with **VS Code**, basic command-line usage, and debugging tools to write, compile and test programs.'
  },
  {
    q: 'Does techcadd offer weekend or flexible batch timings?',
    a: 'Yes. Flexible batch options, including weekend and evening batches, are available to accommodate school, college and working professionals in Ludhiana.'
  },
  {
    q: 'Is this course helpful for technical job interviews?',
    a: 'Yes. It includes practice with commonly asked interview coding questions and logic-building exercises, helping job seekers build the problem-solving confidence recruiters look for. C and C++ remain among the most commonly tested languages in coding rounds and government IT exams.'
  },
  {
    q: 'Can I join after 12th?',
    a: 'Yes. Many students join right after completing 12th, regardless of stream. The course is beginner-friendly and does not require a prior computer science background.'
  },
  {
    q: 'Is this course suitable for working professionals?',
    a: 'Yes. Evening and weekend batch options make it accessible for working professionals looking to strengthen their programming skills or pivot into a technical role.'
  },
  {
    q: 'Does the course include practical projects?',
    a: 'Yes. Toward the end of the course students build small practical projects — a student record management system, a simple calculator, a library management mini-project, simple games, or pattern-based logic programs — to apply what they have learned.'
  },
  {
    q: 'Does the course cover Object-Oriented Programming (OOP) in depth?',
    a: 'Yes. Classes and objects, encapsulation, abstraction, inheritance and polymorphism are covered in detail, since these are core to both technical interviews and real-world software development.'
  },
  {
    q: 'Is this useful if I want to learn Java, Python or DSA later?',
    a: 'Yes. C and C++ are considered the foundation of most modern programming languages, and C++ in particular is the usual starting point for Data Structures and Algorithms. A strong grasp here makes Java, Python and DSA significantly easier to pick up.'
  },
  {
    q: 'Do I get a certificate after completing the course?',
    a: 'Yes, students receive a course completion certificate from techcadd after finishing the programme, along with hands-on project work they can showcase.'
  },
  {
    q: 'Where is the course located, and do you support students outside Ludhiana?',
    a: 'techcadd’s training centre is based in Ludhiana. Classes are designed primarily for local students, though the institute has also trained students commuting from nearby areas including Chandigarh and other parts of Punjab.'
  },
  {
    q: 'Does techcadd provide placement or interview support after course completion?',
    a: 'Yes. techcadd offers guidance including doubt-solving support during the course and assistance preparing for technical interviews and further coding tracks.'
  },
  {
    q: 'What career or academic opportunities open up after completing this course?',
    a: 'Graduates are better prepared for technical interviews, government IT exams, university placements, and further study in Data Structures and Algorithms, Java, or Python — key requirements for most software development roles.'
  },
  {
    q: 'How is techcadd’s course different from other C and C++ institutes in Ludhiana?',
    a: 'techcadd focuses on hands-on, project-based learning, logic-building before syntax memorization, structured doubt-solving sessions, and positioning C and C++ as a genuine stepping stone into DSA and further programming languages — rather than theory-only, syntax-only training.'
  }
]
