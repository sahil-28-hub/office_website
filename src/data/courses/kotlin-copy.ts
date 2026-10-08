/* ==================================================================
   Long-form copy for the Kotlin & Android Development course page.

   Fifth of these, after digital-marketing, python, java and c-cpp.
   Same construction, split out of programming.js for the same reason:
   that file seeds nine courses and this is one course's editorial
   content.

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

   Tones alternate against the fixed bands around them, so no two
   neighbouring sections share a background.
================================================================== */

export const KOTLIN_OVERVIEW = {
  title: 'The Kotlin course in Ludhiana that ships real Android apps',
  lead: 'Looking for the best **Kotlin course in Ludhiana** to launch a career in Android app development? techcadd’s Kotlin training program is designed for students, graduates, and working professionals who want to master modern app development using Google’s preferred language for Android.',
  body: [
    'As one of Ludhiana’s trusted **Kotlin training institutes**, techcadd combines hands-on coding, live projects, and industry-relevant mentorship to help learners go from beginner to job-ready developer.',
    'This **Kotlin programming course in Ludhiana** covers everything from syntax basics and null safety to object-oriented programming, coroutines, and real **Android Studio** projects — building apps you can actually showcase in interviews. Whether you’re a 12th-pass student exploring tech careers, a computer science graduate upskilling for placements, or a Java developer switching to Kotlin, this course meets you where you are.',
    'With flexible batch timings, experienced trainers, and placement support, techcadd makes it easy for Ludhiana’s students to build real-world Android development skills without leaving the city — right here in Punjab’s IT training hub.'
  ]
}

/* ------------------------------------------------------------------
   Who can do this course — fills the standard "who can join" block
   rather than adding a second one. See joiners() in shared.js for the
   shape, and components/course/icons.jsx for the icon names.
------------------------------------------------------------------ */
export const KOTLIN_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do this Kotlin course?',
  lead: 'One of the best things about techcadd’s **Kotlin course in Ludhiana** is that it’s built for a wide range of learners — you don’t need a computer science degree or years of coding experience to get started. If you’re based in Ludhiana or nearby areas like Jalandhar, Khanna, or Moga and you’re serious about a career in app development, this course is designed to meet you at your current skill level and take you all the way to job-ready.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students (Any Stream)',
      text: 'If you’ve just finished school and are exploring career options in tech, this **Kotlin training in Ludhiana** is a great entry point. You don’t need a non-medical or PCM background — students from commerce and arts backgrounds have successfully learned Kotlin and moved into Android development careers. The course starts with programming fundamentals, so absolute beginners can follow along comfortably.',
      tag: 'Any stream'
    },
    {
      icon: 'career',
      title: 'BCA, MCA and Engineering Graduates',
      text: 'If you’re a computer science, IT, or engineering graduate looking to specialize, Kotlin is one of the most in-demand skills for placements right now. Since Google made Kotlin its preferred language for Android development, companies across Ludhiana, Chandigarh, and Mohali are actively hiring developers who know it. This course takes you beyond textbook theory into practical, project-based learning that recruiters actually value.',
      tag: 'Placement ready'
    },
    {
      icon: 'code',
      title: 'Java Developers Looking to Upgrade',
      text: 'Already know Java? Kotlin is fully interoperable with Java, which makes the transition smoother than learning a language from scratch. This **Kotlin developer course in Ludhiana** is ideal for Java programmers who want to future-proof their skills, since most modern Android projects are shifting toward Kotlin-first codebases.',
      tag: 'Java to Kotlin'
    },
    {
      icon: 'stack',
      title: 'Working Professionals Switching to Android',
      text: 'If you’re currently working in web development, IT support, or a non-tech role and want to pivot into mobile app development, this course offers flexible batch timings — including evening and weekend options — so you can upskill without quitting your job.',
      tag: 'Evening batches'
    },
    {
      icon: 'spark',
      title: 'Freelancers and Aspiring App Entrepreneurs',
      text: 'Want to build and publish your own Android apps? Whether it’s a personal project, a startup idea, or freelance client work, learning Kotlin gives you the technical foundation to design, build, and deploy real apps on the Google Play Store.',
      tag: 'Ship your own app'
    },
    {
      icon: 'mentor',
      title: 'Career Switchers From Non-Tech Backgrounds',
      text: 'It’s increasingly common for people from unrelated fields — commerce, teaching, even non-IT jobs — to switch into tech careers. techcadd’s beginner-friendly teaching approach, combined with local mentorship in Ludhiana, makes this transition realistic rather than overwhelming.',
      tag: 'Start from zero'
    }
  ],
  note: 'No coding background is assumed anywhere in the first module, and nobody in the room is ahead of you on day one.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'kotlin-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn in the Kotlin course',
  lead: 'techcadd’s **Kotlin course in Ludhiana** is structured to take you from complete beginner to confident Android developer, covering both core programming concepts and the practical tools used in real-world app development.',
  items: [
    {
      title: 'Kotlin Fundamentals',
      text: 'You’ll start with the building blocks: Kotlin syntax, variables, data types, and control flow — loops and conditionals. This foundation ensures that even students with zero prior coding experience can follow along and build confidence early.'
    },
    {
      title: 'Functions and Null Safety',
      text: 'One of Kotlin’s biggest advantages over Java is built-in **null safety**, which helps prevent common app crashes. You’ll learn how to write clean, safe functions and understand why Kotlin is considered a more reliable language for production apps.'
    },
    {
      title: 'Object-Oriented Programming (OOP) in Kotlin',
      text: 'You’ll dive into classes, objects, inheritance, and interfaces — core OOP concepts that form the backbone of scalable app architecture. This module also covers data classes and sealed classes, which make your code more expressive and maintainable.'
    },
    {
      title: 'Functional Programming Concepts',
      text: 'Kotlin blends OOP with functional programming. You’ll learn lambda expressions and higher-order functions, giving you the tools to write more concise, readable code — a skill that’s increasingly expected in modern Android projects.'
    },
    {
      title: 'Extension Functions',
      text: 'This is one of Kotlin’s standout features. You’ll learn how to extend existing classes with new functionality without modifying their original code — a technique widely used in professional Android codebases.'
    },
    {
      title: 'Collections and the Kotlin Standard Library',
      text: 'You’ll explore how Kotlin handles lists, sets, and maps efficiently, along with the broader standard library that makes everyday coding tasks faster and cleaner.'
    },
    {
      title: 'Coroutines for Asynchronous Programming',
      text: 'A major highlight of this course: **coroutines**. You’ll learn how to manage background tasks — like network calls or database operations — without freezing the app’s user interface, which is essential for building smooth, professional-quality apps.'
    },
    {
      title: 'Android App Development in Practice',
      text: 'Beyond core Kotlin, you’ll apply everything you’ve learned to build real Android applications — from simple utility apps to more complex projects involving UI design, data handling, and app logic.'
    }
  ],
  tools: {
    label: 'Tools you’ll work with',
    items: [
      'Android Studio',
      'IntelliJ IDEA',
      'Kotlin Standard Library',
      'Android SDK',
      'Coroutines',
      'Git & version control',
      'Google Play deployment'
    ]
  },
  close: 'By the end of this course you will write clean, null-safe Kotlin confidently, build Android apps in industry-standard tools, apply OOP and functional principles in real projects, use coroutines to handle asynchronous work smoothly, and have a portfolio of working apps to show in interviews.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'kotlin-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'With dozens of institutes across Punjab claiming to teach app development, it’s fair to ask: why choose a dedicated **Kotlin course in Ludhiana** at techcadd instead of a generic online tutorial or a random coding bootcamp? Here’s what makes this program genuinely worth your time and money.',
  items: [
    {
      title: 'Kotlin Is Where the Industry Is Headed',
      text: 'Since Google officially made Kotlin its preferred language for Android app development, demand for Kotlin developers has grown steadily — not just in metro cities, but in emerging tech hubs like Ludhiana, Chandigarh, and Mohali too. Learning Kotlin today means building skills the market actually wants, not outdated ones.'
    },
    {
      title: 'Practical, Project-Based Learning — Not Just Theory',
      text: 'This program isn’t about memorizing syntax from slides. You’ll write real Kotlin code from day one, working in **Android Studio** and **IntelliJ IDEA** — the same tools professional developers use. By the end you won’t just understand null safety, coroutines and extension functions; you’ll have built actual Android applications you can demo in interviews or show to clients.'
    },
    {
      title: 'Beginner-Friendly Structure With a Clear Progression',
      text: 'The course is structured to take you step by step — starting with Kotlin fundamentals, moving into object-oriented and functional programming, and finishing with advanced topics like coroutines for asynchronous programming and Android app deployment. You’re never thrown into advanced material without the foundation to understand it.'
    },
    {
      title: 'Local Mentorship, Not Just Recorded Videos',
      text: 'Unlike generic online courses where you’re left to troubleshoot errors alone, this **Kotlin training in Ludhiana** gives you access to trainers who can explain concepts in person, debug your code with you, and guide you through real project challenges — something a video playlist simply can’t replace.'
    },
    {
      title: 'Career-Focused, Not Just Skill-Focused',
      text: 'This program is built around one outcome: helping you get hired or freelance successfully as an Android developer. The curriculum is paired with practical guidance on building a portfolio, understanding what recruiters in Ludhiana and Punjab’s IT sector are actually looking for, and preparing you for technical interviews.'
    },
    {
      title: 'Flexible for Every Kind of Learner',
      text: 'Whether you’re a student with a packed academic schedule, a working professional who can only attend evenings or weekends, or someone learning full-time, the batch structure is designed to fit real life — not the other way around.'
    },
    {
      title: 'A Local Institute That Understands the Local Job Market',
      text: 'Learning in Ludhiana means your trainers understand the regional job landscape — which local IT companies are hiring, what skills startups in Punjab are looking for, and how to position yourself competitively in a growing but still close-knit tech ecosystem.'
    }
  ],
  close: 'Kotlin is a skill the market is actively hiring for, and this programme is built to leave you with the apps and the confidence to prove you have it.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'kotlin-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd for your Kotlin course',
  lead: 'Choosing the right institute matters just as much as choosing the right course. Here’s why students across Ludhiana and Punjab trust techcadd for Kotlin and Android development training.',
  items: [
    {
      title: '15+ Years of Experience in IT Training',
      text: 'techcadd has spent over 15 years training students across Ludhiana in web development, programming, digital marketing, AI, and more. This isn’t a new institute experimenting with tech courses — it’s a training centre with a long-standing track record of preparing students for real jobs in the IT industry.'
    },
    {
      title: 'Recognised With 45+ Awards',
      text: 'techcadd’s consistent focus on quality training has earned it more than 45 awards and recognitions in the IT education space. For students comparing institutes, that kind of sustained recognition is a strong signal of credibility — not just marketing claims.'
    },
    {
      title: 'Hands-On, Project-Based Teaching Philosophy',
      text: 'The Kotlin course isn’t taught through passive lectures. Students work on live coding exercises and real Android app projects, using industry-standard tools like **Android Studio** and **IntelliJ IDEA**. This hands-on approach means you graduate with actual apps in your portfolio, not just certificates.'
    },
    {
      title: 'Experienced, Industry-Aware Faculty',
      text: 'techcadd’s trainers bring real industry experience into the classroom, which means you’re learning practical, current approaches to Android development — not outdated textbook methods. Faculty are available to clear doubts, review your code, and guide you through the kind of debugging challenges you’ll actually face on the job.'
    },
    {
      title: 'Flexible Batch Options for Every Schedule',
      text: 'Whether you’re a 12th-pass student with school hours to work around, a college student balancing coursework, or a working professional who can only attend evenings or weekends, techcadd offers morning, evening, and weekend batches so you can learn Kotlin without disrupting your existing routine.'
    },
    {
      title: 'Job Placement Assistance',
      text: 'techcadd doesn’t just teach Kotlin and send you on your way — the institute provides placement assistance to help connect trained students with IT companies hiring in Ludhiana and across Punjab. This includes guidance on interview preparation and building a portfolio that showcases your Android development skills.'
    },
    {
      title: 'Industry-Recognised Certification',
      text: 'On completing the course, students receive a certification that adds credibility to their resume — useful whether you’re applying for jobs, pursuing freelance Android development work, or continuing further studies in computer science.'
    },
    {
      title: 'A Locally Rooted, Trusted Institute',
      text: 'Being based in Ludhiana means techcadd understands the local student community, the regional job market, and what Punjab-based IT companies and startups are actually looking for in new hires. You’re not learning from a distant, generic platform — you’re learning from an institute embedded in your city’s tech ecosystem.'
    },
    {
      title: 'A Broader Tech Ecosystem to Grow Into',
      text: 'Beyond Kotlin, techcadd offers courses across web development, AI and data science, cybersecurity, and digital marketing — so students who want to expand their skill set later, pairing Android development with backend or cloud skills, have a natural path to do so within the same institute.'
    }
  ],
  close: 'Choosing techcadd means choosing a **Kotlin training institute in Ludhiana** that measures itself on the apps its students ship, not the certificates it hands out.'
}

export const KOTLIN_NARRATIVE = [CURRICULUM, WHY_THIS_PROGRAMME, WHY_TECHCADD]

/* ------------------------------------------------------------------
   Student reviews. The factory writes three generic quotes for a
   course with none; these are the course's own, so they replace that
   set. `rating` drives the stars, `initials` the avatar tile — see
   testimonials() in shared.js for the shape.
------------------------------------------------------------------ */
export const KOTLIN_TESTIMONIALS = [
  {
    quote: 'I finished my BCA and wanted something practical, not just more theory. techcadd’s Kotlin course helped me build an actual Android app from scratch — the food delivery app project we built is now in my portfolio. Got shortlisted for two interviews within a month of finishing.',
    name: 'Ramanpreet Singh',
    course: 'Kotlin',
    detail: 'Model Town, Ludhiana',
    rating: 5,
    initials: 'RS'
  },
  {
    quote: 'I’m from a commerce background, so I was nervous about coding. The trainers explained everything step by step and never made me feel behind. Now I’m working as a junior Android developer at a small firm in Chandigarh.',
    name: 'Simran Kaur',
    course: 'Kotlin',
    detail: 'Sarabha Nagar, Ludhiana',
    rating: 5,
    initials: 'SK'
  },
  {
    quote: 'I already knew Java, so I wanted to switch to Kotlin since most companies are asking for it now. The transition was smoother than I expected because the trainers connected Kotlin concepts back to Java wherever possible. Only wish the batch was slightly longer to cover more advanced topics.',
    name: 'Harpreet Singh',
    course: 'Kotlin',
    detail: 'Khanna',
    rating: 4,
    initials: 'HS'
  },
  {
    quote: 'Best decision I made after 12th. I had zero coding background and honestly thought this would be too hard for me. Six months later I built my own notes app and published it on the Play Store. Still can’t believe it.',
    name: 'Anmol Sharma',
    course: 'Kotlin',
    detail: 'Ferozepur Road, Ludhiana',
    rating: 5,
    initials: 'AS'
  },
  {
    quote: 'I used to travel to Ludhiana for weekend batches since there wasn’t a good Kotlin training option near me. Totally worth the commute — the live project work made all the difference compared to the online course I tried earlier.',
    name: 'Jaspreet Kaur',
    course: 'Kotlin',
    detail: 'Jalandhar',
    rating: 5,
    initials: 'JK'
  },
  {
    quote: 'Solid course for anyone serious about Android development. The coroutines module was tough for me personally, but the trainers sat with me after class to clear my doubts, which I really appreciated.',
    name: 'Gurdeep Singh',
    course: 'Kotlin',
    detail: 'Dugri, Ludhiana',
    rating: 4,
    initials: 'GS'
  },
  {
    quote: 'I was working in web development and wanted to pivot into mobile apps. This course gave me exactly what I needed — practical Kotlin skills and enough confidence to start applying for Android developer roles.',
    name: 'Priya Mehta',
    course: 'Kotlin',
    detail: 'Chandigarh',
    rating: 5,
    initials: 'PM'
  },
  {
    quote: 'What stood out for me was how the trainers connected everything to real jobs — not just teaching Kotlin, but explaining what companies in Punjab are actually hiring for right now. Felt like a career-focused course, not just a coding class.',
    name: 'Karanveer Singh',
    course: 'Kotlin',
    detail: 'Moga',
    rating: 5,
    initials: 'KS'
  },
  {
    quote: 'Good course overall. I came in as a complete beginner and left with a working Android app. Would have liked a bit more time on UI design, but the core Kotlin fundamentals were taught really well.',
    name: 'Navdeep Kaur',
    course: 'Kotlin',
    detail: 'Pakhowal Road, Ludhiana',
    rating: 4,
    initials: 'NK'
  },
  {
    quote: 'I compared a few institutes across Ludhiana and Mohali before joining, and techcadd’s hands-on approach won me over. Built two real apps during the course. Already using them as talking points in interviews.',
    name: 'Manpreet Singh',
    course: 'Kotlin',
    detail: 'Mohali',
    rating: 5,
    initials: 'MS'
  },
  {
    quote: 'As a working professional, the evening batch was a lifesaver. I could learn Kotlin without quitting my day job, and the pace was manageable even with a full-time schedule.',
    name: 'Ravneet Kaur',
    course: 'Kotlin',
    detail: 'Civil Lines, Ludhiana',
    rating: 5,
    initials: 'RK'
  }
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard set the factory writes for every other course.

   Each answer is written to stand on its own without the surrounding
   text, which is what an answer engine needs to quote it directly.
------------------------------------------------------------------ */
export const KOTLIN_FAQS = [
  {
    q: 'What is the best institute for a Kotlin course in Ludhiana?',
    a: 'techcadd is one of Ludhiana’s leading IT training institutes offering a dedicated **Kotlin course in Ludhiana** with hands-on Android app development training, experienced faculty, and placement assistance.'
  },
  {
    q: 'Do I need prior coding experience to join this Kotlin course?',
    a: 'No. This course is beginner-friendly and starts with Kotlin fundamentals, so students with zero programming background — including 12th-pass students from any stream — can join.'
  },
  {
    q: 'Is this course suitable for Java developers?',
    a: 'Yes. Kotlin is fully interoperable with Java, which makes it an easier transition for existing Java developers. The course covers Kotlin-specific concepts like **null safety** and **coroutines** that Java developers may not already know.'
  },
  {
    q: 'How long is the Kotlin course at techcadd?',
    a: 'Course duration varies by batch type — regular, weekend, or fast-track. Contact techcadd’s Ludhiana centre directly for current batch schedules and exact duration.'
  },
  {
    q: 'What will I learn in this Kotlin course?',
    a: 'You’ll learn Kotlin syntax, null safety, object-oriented and functional programming, extension functions, coroutines, and how to build and deploy real Android apps using **Android Studio** and **IntelliJ IDEA**.'
  },
  {
    q: 'Does techcadd offer placement assistance after the Kotlin course?',
    a: 'Yes. techcadd provides placement assistance to help students connect with IT companies hiring Android and Kotlin developers in Ludhiana and across Punjab.'
  },
  {
    q: 'Are weekend or evening batches available for working professionals?',
    a: 'Yes. techcadd offers flexible batch timings, including morning, evening, and weekend options, so working professionals and students can learn without disrupting their existing schedule.'
  },
  {
    q: 'Will I build real Android apps during the course?',
    a: 'Yes. The course is project-based, so students build actual Android applications during training — projects you can showcase in interviews or use as freelance portfolio pieces.'
  },
  {
    q: 'Is Kotlin in demand for jobs in Ludhiana and Punjab?',
    a: 'Yes. Since Google made Kotlin its preferred language for Android development, demand for Kotlin developers has grown across IT hubs including Ludhiana, Chandigarh, and Mohali.'
  },
  {
    q: 'Do I get a certificate after completing the Kotlin course?',
    a: 'Yes. Students receive an industry-recognised certification on course completion, which can be added to resumes and job applications.'
  },
  {
    q: 'Can a complete beginner become a professional Android developer through this course?',
    a: 'Yes. The course is structured to take beginners step by step — from Kotlin basics to advanced topics like coroutines — ending with the practical skills needed to build and deploy real Android apps.'
  },
  {
    q: 'What tools will I learn to use in this course?',
    a: 'You’ll gain hands-on experience with **Android Studio**, **IntelliJ IDEA**, the Kotlin Standard Library, the Android SDK, and basic app deployment to the Google Play Store.'
  }
]
