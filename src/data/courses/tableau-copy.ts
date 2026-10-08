/* ==================================================================
   Long-form copy for the Tableau course page.

   Same construction as the copy files in this folder — split out of
   ai-data.js because that file seeds thirteen courses and this is one
   course's editorial content.

   The copy is written to rank, so the terms the page targets are
   marked **like this** and RichText renders them inside <strong>. See
   RichText.jsx for the one rule it implements, and the keyword
   emphasis block in course-base.css for how a marked term is set:
   weight plus a light grey, deliberately quiet.

   Two narrative sections: the source copy has one "why" section
   rather than the separate "why this program" and "why techcadd" the
   earlier pages carry. "Who can do this course" is not a narrative
   section — it fills the standard "who can join" block.

   NO TESTIMONIALS ARE EXPORTED FROM THIS FILE, ON PURPOSE.

   The source document carried ten reviews under an explicit note from
   whoever wrote it: "sample testimonial-style formats for website
   content. They should be replaced with verified student feedback
   before publishing as actual reviews." Wiring them in would put ten
   invented students with invented names and towns on a public page as
   though they were real people who took the course. They are left out
   until techcadd has feedback it can stand behind. See the note in
   ai-data.js where this course is seeded.

   The same document also warns against implying the course is an
   official Tableau certification, and against unsubstantiated "best"
   or "placement" claims. Nothing below makes either claim.
================================================================== */

export const TABLEAU_OVERVIEW = {
  title: 'The Tableau course in Ludhiana that turns data into decisions',
  lead: 'In today’s data-driven world, organizations rely heavily on data visualization tools to make faster and smarter business decisions. techcadd’s **Tableau Course in Ludhiana** is designed for students, graduates, job seekers, and working professionals who want to build strong skills in data analytics and business intelligence.',
  body: [
    'This course helps learners understand how raw data is transformed into interactive dashboards, charts, and visual reports using Tableau. You will learn how to analyze complex datasets, identify trends, and present insights in a clear and meaningful way that supports business decision-making. Key areas covered include data visualization fundamentals, **Tableau Desktop**, data connection techniques, dashboard creation, filters, calculations, and real-time reporting.',
    'With the growing demand for data professionals in Ludhiana and across India, Tableau skills are becoming highly valuable in industries like IT, finance, marketing, healthcare, and e-commerce. This training is structured to provide hands-on practice so learners can confidently work on real-world datasets and projects.',
    'Whether your goal is to start a career in data analytics, upgrade your technical skills, or move into a high-demand IT role, this Tableau course provides a strong foundation for building a successful future in the analytics field.'
  ]
}

/* ------------------------------------------------------------------
   Who can do this course — fills the standard "who can join" block
   rather than adding a second one.
------------------------------------------------------------------ */
export const TABLEAU_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do a Tableau course in Ludhiana?',
  lead: 'A **Tableau Course in Ludhiana** is designed for learners from diverse educational and professional backgrounds who want to build strong skills in data visualization, business intelligence, and data analytics. You do not need advanced programming knowledge to start. With proper training, students can gradually understand how to convert raw data into meaningful dashboards, reports, and visual insights that help businesses make better decisions.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th-Pass Students',
      text: 'Students who have completed Class 12 can start learning Tableau as a skill-based career option. Whether you are from a commerce, science, or arts background, Tableau can be learned step by step. For students in Ludhiana looking for job-oriented IT skills, Tableau provides an entry into the growing field of data analytics and visualization.',
      tag: 'Any stream'
    },
    {
      icon: 'code',
      title: 'College Students',
      text: 'College students pursuing degrees like BCA, BBA, B.Com, B.Sc IT, or engineering can learn Tableau alongside their studies. It helps them understand real-world data handling, reporting, and visualization techniques. Adding Tableau skills can strengthen resumes and improve chances of internships in analytics, IT, and business intelligence roles.',
      tag: 'Alongside your degree'
    },
    {
      icon: 'career',
      title: 'Graduates and Freshers',
      text: 'Graduates and freshers who want to enter the IT or analytics field can benefit from a structured Tableau training program. Instead of only theoretical knowledge, learners gain practical experience in creating dashboards, analyzing datasets, and presenting insights visually — opening roles such as Data Analyst, Business Intelligence Analyst, Reporting Analyst, and Junior Data Visualization Specialist.',
      tag: 'Portfolio ready'
    },
    {
      icon: 'mentor',
      title: 'Job Seekers',
      text: 'Job seekers who want to upgrade their skills can learn Tableau to improve their employability. Many companies in IT, finance, marketing, healthcare, retail, and e-commerce rely on data-driven decision-making. Tableau helps professionals present data in a clear and impactful way, making it a valuable addition to any resume.',
      tag: 'Employability'
    },
    {
      icon: 'stack',
      title: 'Working Professionals',
      text: 'Working professionals in IT, finance, marketing, operations, HR, and business roles can learn Tableau to enhance their reporting and analytical capabilities. Understanding dashboards, KPIs, and data trends can help professionals make better decisions and improve performance in their current roles.',
      tag: 'Upskilling'
    },
    {
      icon: 'chart',
      title: 'Business Owners and Entrepreneurs',
      text: 'Business owners in Ludhiana can use Tableau to understand their business performance more effectively. From sales reports to customer behaviour analysis, Tableau helps in visualizing key business metrics, allowing entrepreneurs to make data-driven decisions and improve growth strategies.',
      tag: 'Run it in-house'
    },
    {
      icon: 'spark',
      title: 'Freelancing Aspirants',
      text: 'Freelancers can also explore Tableau as a service-based skill. After gaining experience, they can offer services like dashboard creation, data visualization, reporting automation, and business intelligence solutions to clients across different industries.',
      tag: 'Freelance ready'
    },
    {
      icon: 'star',
      title: 'Anyone Interested in Data and Analytics',
      text: 'You do not need a technical background to start learning Tableau. If you are interested in data, charts, business insights, or technology, a **Tableau course in Ludhiana** can be a great starting point. The tool is user-friendly and designed to help beginners understand data visually without complex coding.',
      tag: 'No coding needed'
    }
  ],
  note: 'The key requirements are curiosity, logical thinking, and a willingness to practise regularly. With the right guidance, learners can build strong foundational skills in data visualization and move toward a career in analytics and business intelligence.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'tableau-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you will learn and the tools covered',
  lead: 'A **Tableau Course in Ludhiana** can help students and professionals develop practical data visualization and business intelligence skills. The course begins with the fundamentals of data visualization and Tableau’s interface, then moves through connecting data sources, understanding datasets, and preparing information for analysis.',
  items: [
    {
      title: 'Tableau Fundamentals',
      text: 'Students learn the Tableau environment, terminology, worksheets, dashboards, stories, dimensions, measures, filters, and basic visualization concepts. This foundation helps beginners understand how Tableau converts data into meaningful visual information.'
    },
    {
      title: 'Connecting and Preparing Data',
      text: 'A major part of learning Tableau involves working with real-world datasets. Students learn how to connect Tableau with sources such as **Excel** files, CSV files, databases, and other supported sources, along with basic data preparation — data types, relationships, joins, unions, and handling common data-quality issues.'
    },
    {
      title: 'Charts and Data Visualization',
      text: 'Students learn how to select the appropriate visualization for the data and the business requirement: bar charts, line charts, pie charts, area charts, scatter plots, maps, heat maps, treemaps, highlight tables, KPI cards and interactive dashboards. The objective is not simply attractive charts but communicating clearly enough that a reader can spot trends, comparisons, patterns and anomalies.'
    },
    {
      title: 'Filters, Calculations and Parameters',
      text: 'Students learn how to make reports interactive using filters, parameters, calculated fields, groups, sets, and hierarchies, so users can explore data from different perspectives. Calculated fields matter particularly, because they allow learners to create customised metrics and perform calculations directly within Tableau.'
    },
    {
      title: 'Dashboard Development',
      text: 'Dashboard creation is one of the most important skills in this course. Learners practise combining multiple visualizations into a single interactive dashboard, and study dashboard layouts, actions, navigation, filters, tooltips, formatting, and user interaction. A well-designed dashboard makes the important information easy to understand.'
    },
    {
      title: 'Advanced Tableau Concepts',
      text: 'After the fundamentals, learners progress toward advanced calculations, table calculations, level-of-detail expressions, advanced filtering, dashboard actions, mapping, and performance considerations — the skills that matter for data analyst, business intelligence, reporting, and visualization-oriented roles.'
    },
    {
      title: 'Tools and Technologies',
      text: '**Tableau Desktop** to connect data, create visualizations and build dashboards; **Tableau Prep** for preparing and cleaning data; Tableau Cloud and Server for publishing, sharing and collaborating on content; **Microsoft Excel** as a common source of business datasets; and **SQL** and database concepts, which help learners work with structured business data and strengthen their overall analytics profile. Learners can also explore how AI supports data exploration and reporting, with human validation and analytical judgement kept in the loop.'
    },
    {
      title: 'Who Benefits From These Skills',
      text: 'This course is useful for aspiring Data Analysts, Business Intelligence Analysts, Reporting Analysts, MIS professionals, Business Analysts, and data-focused professionals, as well as students adding data visualization to an existing technical or business education.'
    }
  ],
  tools: {
    label: 'Tools you’ll work with',
    items: [
      'Tableau Desktop',
      'Tableau Prep',
      'Tableau Cloud / Server',
      'Microsoft Excel',
      'SQL & databases',
      'AI-assisted analytics'
    ]
  },
  close: 'For learners searching for **Tableau training in Ludhiana**, the strongest outcome is practical ability: connecting datasets, analysing information, building professional dashboards, explaining insights, and presenting findings clearly. Learning Tableau is about more than mastering a visualization tool — it is developing the ability to turn complex data into understandable information that supports better business decisions.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'tableau-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this Tableau program?',
  lead: 'Choosing the right **Tableau Course in Ludhiana** can play a major role in building a career in data analytics, business intelligence, and data visualization. Companies rely on tools like Tableau to understand complex data and convert it into meaningful insights, and a structured training program helps learners understand the concepts step by step instead of learning randomly from scattered online resources.',
  items: [
    {
      title: 'Build Practical, Industry-Relevant Data Skills',
      text: 'A key advantage of learning Tableau is gaining hands-on experience transforming raw data into interactive dashboards and reports. Students learn how to connect data sources, clean and organise datasets, and create visual insights that help businesses decide. A practical approach also teaches data storytelling — using charts, graphs, maps and dashboards to identify trends, compare performance, and highlight opportunities clearly.'
    },
    {
      title: 'Prepare for Multiple Career Opportunities',
      text: 'Tableau is widely used across IT, finance, healthcare, marketing, retail, and consulting. After completing the course, learners can explore roles such as Data Analyst, Business Intelligence Analyst, Reporting Analyst, MIS Executive, and Data Visualization Specialist — which makes it a strong option for students, graduates, and job seekers entering data analytics.'
    },
    {
      title: 'Learn Skills Beyond Traditional Education',
      text: 'Academic programs often focus on theory, while Tableau training focuses on practical application. Learners work with real datasets, dashboards, and business scenarios that show how data is used in decision-making. For students in Ludhiana, that additional skill strengthens a resume, and live project work builds a portfolio to show at interview.'
    },
    {
      title: 'Understand Data Visualization and Business Intelligence',
      text: 'Tableau converts complex data into simple visual formats that are easy to understand. Learning it covers data aggregation, filtering, sorting, trend analysis, and KPI tracking — and a locally focused course helps learners see how businesses track sales performance, customer behaviour, marketing results, and operational efficiency.'
    },
    {
      title: 'Develop Analytical and Problem-Solving Skills',
      text: 'Tableau training is not just about software usage; it builds analytical thinking. Students learn how to interpret data, identify patterns, and reach logical conclusions from visual insights — skills that are valuable in any workplace where data informs decisions.'
    },
    {
      title: 'Suitable for Beginners and Non-Technical Students',
      text: 'One of the best things about Tableau is that it does not require advanced programming knowledge. The course starts with basic concepts and moves gradually toward advanced dashboard creation, which makes it workable for students from commerce, arts, science, and management backgrounds.'
    },
    {
      title: 'Build a Foundation for Data Careers',
      text: 'Tableau skills act as a foundation for a longer career in data analytics and business intelligence. After learning Tableau, students can go on to **SQL**, **Excel**, **Power BI**, and Python to widen their opportunities — a structured, practical program is a step into a fast-growing industry rather than an end in itself.'
    }
  ],
  close: 'The goal of a good Tableau program is to help students understand data, build visual dashboards, and develop the confidence to work in real analytics environments. With demand for data professionals rising, those skills open opportunities in India and abroad.'
}

/* ---------------------------------------------------------------- */

const WHAT_TO_EXPECT = {
  id: 'tableau-what-to-expect',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'What to expect',
  title: 'What students can expect',
  lead: 'A strong **Tableau Course in Ludhiana** should combine instructor guidance with hands-on practice. Students should have opportunities to work with datasets, create different visualizations, develop interactive dashboards, practise calculations, and complete projects that demonstrate their analytical skills.',
  items: [
    {
      title: 'Instructor Guidance Alongside Practice',
      text: 'Classroom guidance matters most at the points where a dataset does not behave — a join that duplicates rows, a calculation that returns the wrong total, a chart that technically renders but says nothing. Those are the moments a trainer in the room resolves in minutes and a video cannot.'
    },
    {
      title: 'Work With Real Datasets',
      text: 'Practice datasets should be messy enough to be realistic. Learning to spot a data-quality problem before building a dashboard on top of it is part of the skill, not an obstacle to it.'
    },
    {
      title: 'Build a Portfolio You Can Show',
      text: 'Project work should leave you with dashboards you can open in an interview and talk through — what the data was, what question you were answering, why you chose that chart, and what the answer turned out to be.'
    },
    {
      title: 'How to Compare Institutes',
      text: 'Before choosing any Tableau training institute, compare the curriculum, practical assignments, trainer expertise, project work, learning mode, schedule, career support, and how much hands-on time you actually get. It is worth checking whether the course covers both fundamental and advanced Tableau concepts rather than stopping at basic chart creation.'
    }
  ],
  close: 'Verified reviews, project examples, trainer experience, course curriculum, practical exposure, and career support are all useful factors to weigh before choosing where to learn.'
}

export const TABLEAU_NARRATIVE = [CURRICULUM, WHY_THIS_PROGRAMME, WHAT_TO_EXPECT]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard set the factory writes for every other course.

   Each answer is written to stand on its own without the surrounding
   text, which is what an answer engine needs to quote it directly.

   Two of these deliberately decline to overpromise — certification is
   not presented as compulsory, and Tableau is not presented as a
   standalone qualification. Both positions are in the source copy.
------------------------------------------------------------------ */
export const TABLEAU_FAQS = [
  {
    q: 'What is a Tableau course in Ludhiana?',
    a: 'A **Tableau Course in Ludhiana** teaches students how to use Tableau for data visualization, analysis, reporting, and interactive dashboard development. Learners progress from basic concepts to practical dashboard-building skills.'
  },
  {
    q: 'Is Tableau suitable for beginners?',
    a: 'Yes. Tableau is designed to make data visualization accessible to users from different technical and analytical backgrounds. Beginners can start with connecting data, creating basic charts, applying filters, and building dashboards.'
  },
  {
    q: 'Do I need coding knowledge to learn Tableau?',
    a: 'No. Basic Tableau usage does not require programming knowledge. However, learning **Excel** formulas and **SQL** helps you perform more advanced data analysis as your skills develop.'
  },
  {
    q: 'Who can join Tableau training in Ludhiana?',
    a: 'Students, graduates, freshers, working professionals, business analysts, MIS professionals, and anyone interested in data visualization can consider **Tableau training in Ludhiana**. It is especially useful for learners planning a career in data analytics or business intelligence.'
  },
  {
    q: 'What topics are covered in Tableau training?',
    a: 'A comprehensive curriculum covers data connections, dimensions and measures, charts, filters, calculated fields, dashboards, dashboard actions, maps, table calculations, parameters, data preparation, and interactive reporting.'
  },
  {
    q: 'Can Tableau help with a Data Analyst career?',
    a: 'Yes. Tableau is an important data visualization skill in many analytics workflows. Learning to connect data, analyse it, create dashboards, and communicate insights complements other Data Analyst skills such as Excel, SQL, statistics, and business analysis.'
  },
  {
    q: 'What tools should I learn along with Tableau?',
    a: '**Excel** and **SQL** are particularly useful complementary skills. Depending on your learning path you may also explore **Tableau Prep**, Tableau Cloud, Tableau Server, and related data-analysis technologies.'
  },
  {
    q: 'Is Tableau certification necessary for getting a job?',
    a: 'Certification is not compulsory for every Tableau-related role. An official certification can help demonstrate your knowledge when applying for jobs — Tableau currently offers the Tableau Desktop Specialist and Tableau Certified Data Analyst credentials, which are awarded by Tableau rather than by a training institute.'
  },
  {
    q: 'How long does it take to learn Tableau?',
    a: 'That depends on your previous experience, learning schedule, and how much hands-on practice you do. The basics can be learned relatively quickly, while developing job-ready confidence requires continued practice with real datasets and projects.'
  },
  {
    q: 'What can I build after completing Tableau training?',
    a: 'With sufficient practice you can create interactive dashboards, KPI reports, sales reports, financial visualizations, performance dashboards, geographical maps, and other business intelligence reports from the datasets available to you.'
  },
  {
    q: 'Is Tableau useful for students and freshers?',
    a: 'Yes. Students and freshers can use Tableau to build data visualization projects and strengthen their portfolios. Practical projects also give learners something concrete to discuss during interviews for analytics-related roles.'
  },
  {
    q: 'How should I choose a Tableau training institute in Ludhiana?',
    a: 'Compare the curriculum, practical assignments, trainer expertise, project work, learning mode, course schedule, career support, and opportunities for hands-on practice. It is also worth checking whether the course teaches both fundamental and advanced Tableau concepts rather than focusing only on basic chart creation.'
  },
  {
    q: 'Does Tableau training include dashboard development?',
    a: 'Yes. A well-structured program includes dashboard development — creating visualizations and interactive dashboards, connecting to data, filtering, grouping, and basic calculations.'
  },
  {
    q: 'Can I learn Tableau online as well as offline?',
    a: 'Yes. Tableau provides both self-paced learning resources and instructor-led training options. A local course in Ludhiana may suit students who value classroom interaction, while online learning offers greater schedule flexibility.'
  },
  {
    q: 'What career options can Tableau skills support?',
    a: 'Depending on your complete skill set and experience, Tableau can support paths such as Data Analyst, Business Intelligence Analyst, Reporting Analyst, Business Analyst, MIS Analyst, and Data Visualization Specialist. It works best combined with broader analytical and business skills rather than treated as a standalone qualification.'
  }
]
