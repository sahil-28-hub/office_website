/* ==================================================================
   Long-form copy for the Power BI course page.

   Split out of ai-data.js for the same reason as the others — that
   file seeds thirteen courses, and this is one course's editorial
   content. See ../courses/cybersecurity-copy.js for the pattern this
   follows.

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

   NOTE ON TESTIMONIALS: this page deliberately has none of its own.
   The reviews supplied with this copy were labelled "sample
   testimonial formats" and signed "Sample Student Review" — they name
   no one and were explicitly marked to be replaced with verified
   feedback before publication, so they are not wired up. The seed in
   ai-data.js therefore sets no `testimonials`, and the page falls back
   to the factory quotes in shared.js.
================================================================== */

export const PBI_OVERVIEW = {
  title: 'The Power BI course in Ludhiana that ends in dashboards you built',
  lead: 'Looking for a **Power BI Course in Ludhiana** that helps you build practical data analytics and business intelligence skills? techcadd’s Power BI training is designed for students, graduates, job seekers, working professionals, and beginners who want to learn how to transform raw data into meaningful reports, dashboards, and business insights.',
  body: [
    'The course introduces learners to essential Power BI skills, including **Power BI Desktop**, **Power Query**, data cleaning, data transformation, data modelling, **DAX**, interactive visualizations, KPI dashboards, report development, and **Power BI Service**. Practical learning can help students understand how Power BI is used for sales analysis, finance reporting, marketing analytics, HR dashboards, operations, and business decision-making.',
    'For learners searching for **Power BI training in Ludhiana**, **Power BI classes in Ludhiana**, or **data analytics courses in Ludhiana**, techcadd focuses on career-oriented and hands-on learning rather than only theoretical concepts.',
    'Whether you are starting from scratch or upgrading your existing Excel and analytics skills, this course can help you develop a stronger portfolio and prepare for data-focused career opportunities.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const PBI_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do a Power BI course in Ludhiana',
  lead: 'A **Power BI Course in Ludhiana** is suitable for learners from different educational and professional backgrounds. You do not necessarily need an advanced technical degree to start. If you are interested in working with data, creating dashboards, understanding business performance, or developing analytics skills, Power BI can be a practical skill to add to your career profile.',
  groups: [
    {
      icon: 'curriculum',
      title: 'Students After 12th',
      text: 'Students who have completed 12th and want to explore technology, business analytics, or data-related careers can consider Power BI training. Learning dashboard creation, data visualization, and basic data analysis can help students develop practical skills alongside their academic studies.',
      tag: 'Start early'
    },
    {
      icon: 'career',
      title: 'Graduates and Freshers',
      text: 'Graduates from BCA, BBA, B.Com, B.Sc, MBA, engineering, computer applications, and other backgrounds can use a Power BI course to build job-oriented analytics skills. Freshers can create dashboard projects and develop a portfolio that demonstrates their ability to work with business data.',
      tag: 'Any stream'
    },
    {
      icon: 'stack',
      title: 'Excel Users',
      text: 'If you already use **Microsoft Excel** for reports, formulas, pivot tables, or business analysis, Power BI can be a valuable next step. You can learn how to transform larger datasets, build interactive reports, create relationships between tables, and present information through professional dashboards.',
      tag: 'The next step'
    },
    {
      icon: 'chart',
      title: 'Aspiring Data Analysts',
      text: 'Anyone planning a career as a Data Analyst, Reporting Analyst, Business Intelligence Analyst, or MIS professional can benefit from Power BI training. Data analytics programs commonly include Power BI alongside tools such as Excel, SQL, Python, and Tableau, reflecting the broader analytics skill set employers look for.',
      tag: 'Career track'
    },
    {
      icon: 'server',
      title: 'Working Professionals',
      text: 'Professionals working in sales, finance, marketing, HR, operations, administration, or management can learn Power BI to improve reporting and decision-making. Instead of preparing repetitive reports manually, professionals can develop interactive dashboards for KPIs, sales performance, expenses, employee data, inventory, and other business metrics.',
      tag: 'Stop rebuilding reports'
    },
    {
      icon: 'spark',
      title: 'Career Switchers',
      text: 'If you want to move from a non-technical or administrative role into analytics, a **Power BI training course in Ludhiana** can be a useful starting point. A structured course can take you from Power BI basics through data preparation, Power Query, data modelling, DAX, visualization, and dashboard development.',
      tag: 'A structured way in'
    },
    {
      icon: 'database',
      title: 'Business Owners and Entrepreneurs',
      text: 'Business owners can also learn Power BI to understand their own business data. Sales trends, customer performance, product results, expenses, inventory, and monthly revenue can be presented through dashboards, making it easier to identify patterns and support data-driven decisions.',
      tag: 'See your own numbers'
    },
    {
      icon: 'support',
      title: 'Professionals Looking to Upgrade Their Skills',
      text: 'Technology and reporting requirements continue to evolve. Professionals who already understand Excel, databases, or business reporting can add Power BI to their existing skill set and become more capable of handling modern business intelligence requirements.',
      tag: 'Stay current'
    }
  ],
  note: 'No, advanced programming knowledge is not essential to begin. Beginners can start with the fundamentals and gradually learn Power Query, data modelling, DAX, visualizations, reports, and dashboards — though basic computer skills and familiarity with spreadsheets make the learning process easier.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'pbi-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn and the tools covered',
  lead: 'A career-focused **Power BI Course in Ludhiana** should help you progress from understanding basic data concepts to building professional, interactive dashboards. The objective is not simply to learn where the buttons are, but to understand the complete journey of business data — from importing and cleaning information to analysing it and communicating insights.',
  items: [
    {
      title: 'Power BI Fundamentals',
      text: 'You will begin with the fundamentals of Microsoft Power BI, including the Power BI ecosystem, Power BI Desktop, reports, dashboards, datasets, workspaces, and the difference between reports and dashboards. Beginners can also learn how Power BI fits into the broader business intelligence and data analytics process.'
    },
    {
      title: 'Power BI Desktop',
      text: '**Power BI Desktop** is the primary development environment for creating data models and reports. You will learn how to navigate the interface, import datasets, manage queries, create report pages, configure visualizations, and prepare reports for publishing.'
    },
    {
      title: 'Data Import and Connectivity',
      text: 'Real-world businesses store information in multiple formats and systems. You can learn how to connect Power BI with sources such as Excel, CSV files, databases, web sources, and other supported data connections. Understanding data connectivity is an important step towards working with real business datasets.'
    },
    {
      title: 'Power Query and Data Cleaning',
      text: 'Raw data is rarely ready for immediate analysis. **Power Query** helps you clean and transform data before building reports — removing duplicate records, handling missing values, changing data types, splitting and merging columns, filtering records, replacing incorrect values, creating conditional columns, combining datasets, merging and appending queries, and reshaping data for analysis. These skills are particularly useful for students preparing for data analyst and reporting roles.'
    },
    {
      title: 'Data Modelling',
      text: 'A strong dashboard depends on a well-designed data model. You will learn how tables relate to one another and how relationships affect calculations and reporting, covering fact and dimension tables, relationships, cardinality, primary and foreign keys, star-schema concepts, and model optimization. Understanding data modelling prevents common reporting problems such as incorrect totals, duplicated values, and inconsistent calculations.'
    },
    {
      title: 'DAX',
      text: '**DAX** (Data Analysis Expressions) is one of the most important skills for progressing beyond basic Power BI reporting. You can learn how to create calculated columns and measures and use functions for aggregation, filtering, conditional calculations, time-based analysis, percentages, ranking, year-to-date and month-to-date analysis, and previous-period comparisons. The focus is on understanding when to use a measure versus a calculated column, and how DAX responds to filter context.'
    },
    {
      title: 'Data Visualization',
      text: 'Power BI provides a wide range of visualization options, and training helps you understand when to use each and how to present information clearly. You can work with bar charts, column charts, line charts, pie and donut charts, tables, matrices, cards, KPI visuals, maps, slicers, and other interactive elements. The objective is to create dashboards that communicate quickly rather than simply filling a page with charts.'
    },
    {
      title: 'Interactive Dashboard Development',
      text: 'You will learn how to combine visualizations into interactive dashboards and reports, covering slicers, filters, drill-down, drill-through, bookmarks, tooltips, navigation, page interactions, and report-level filtering — the features that let a reader explore the data according to their own questions.'
    },
    {
      title: 'Business Intelligence Projects',
      text: 'Practical projects connect Power BI skills with real business situations: a sales dashboard analysing revenue, products, customers, regions and trends; a marketing dashboard examining leads, campaigns and conversions; an HR dashboard covering headcount, departments, attrition and recruitment; and a finance dashboard tracking revenue, expenses, profit, budgets and financial KPIs.'
    },
    {
      title: 'Power BI Service',
      text: 'You can also learn the fundamentals of **Power BI Service**, including publishing reports, workspaces, sharing, dashboards, scheduled refresh concepts, and collaboration — the transition from developing a report locally to making business intelligence content available to other people.'
    },
    {
      title: 'Excel and Power BI',
      text: 'For students and professionals already comfortable with Excel, Power BI extends existing reporting capabilities. You can learn how Excel data can be brought into Power BI and how tables, pivot-style analysis, formulas, and data preparation connect with modern BI workflows.'
    },
    {
      title: 'SQL and Other Analytics Tools',
      text: 'Power BI becomes more useful when combined with complementary data skills. Depending on the learning path, students can explore **SQL**, **Python**, and **Tableau** alongside Excel and Power BI as part of a broader data analytics skill set.'
    }
  ],
  tools: {
    label: 'What you can build with',
    items: [
      'Power BI Desktop',
      'Power Query',
      'DAX',
      'Data modelling',
      'Data cleaning & transformation',
      'Interactive dashboards',
      'KPIs & business reporting',
      'Power BI Service',
      'Report publishing & sharing',
      'Microsoft Excel',
      'SQL'
    ]
  },
  close: 'By the end, aim to have several practical dashboards that demonstrate your skills. Instead of simply listing “Power BI” on a resume, a portfolio can show how you cleaned data, created relationships, wrote DAX measures, selected meaningful KPIs, designed visualizations, and converted raw information into useful business insight.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'pbi-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program',
  lead: 'Choosing the right **Power BI Course in Ludhiana** can make a significant difference when your goal is to develop practical, career-focused data analytics skills. Power BI is widely used for turning business data into interactive reports, dashboards, KPIs, and actionable insights, and a structured program helps learners move beyond basic spreadsheet reporting into how modern business intelligence workflows actually work.',
  items: [
    {
      title: 'Learn Practical Skills, Not Just Theory',
      text: 'A major advantage of a structured program is the opportunity to learn through practical implementation. Instead of simply understanding definitions, students work with datasets and gradually learn how to import, clean, transform, model, analyse, and visualize information — covering Power Query, data modelling, DAX, calculated columns, measures, filters, slicers, interactive visualizations, dashboard design, report publishing, and data refresh.'
    },
    {
      title: 'Build Job-Relevant Data Analytics Skills',
      text: 'Power BI complements skills such as Advanced Excel, SQL, statistics, and business analysis. A broader data analytics curriculum incorporating Excel, SQL, Tableau, Power BI, Python, and business intelligence gives learners an opportunity to understand how different analytics tools fit into a professional workflow. Learning Power BI is more valuable when connected to real business scenarios — sales performance, marketing results, financial reporting, customer analysis, inventory, HR metrics, and operational KPIs — rather than dashboards built only for practice.'
    },
    {
      title: 'Suitable for Beginners and Career Changers',
      text: 'You do not have to be an experienced data professional to begin. A step-by-step course introduces beginners to the interface and fundamentals before progressing towards advanced data transformation, modelling, DAX, and dashboard development. That makes the program relevant for graduates, commerce and management students, Excel users, MIS executives, working professionals, and people planning a transition towards data analytics or business intelligence.'
    },
    {
      title: 'Turn Data Into Interactive Dashboards',
      text: 'One of the most useful Power BI skills is the ability to turn large or unstructured datasets into easy-to-understand visual reports. Students learn how charts, tables, cards, slicers, filters, drill-throughs, and other interactive elements can communicate business information effectively. Good dashboard design is not simply about adding attractive charts — learners need to understand what the data means, which KPIs matter, how tables are connected, and how a dashboard helps someone make a better decision.'
    },
    {
      title: 'Develop a Portfolio Through Projects',
      text: 'Projects play an important role when applying for entry-level analytics positions. A well-designed Power BI portfolio demonstrates that you know how to work with data rather than simply having completed a course. With practical projects, students create dashboards around sales analysis, customer behaviour, financial performance, marketing campaigns, or product performance.'
    },
    {
      title: 'Learn Skills That Connect With Business',
      text: 'Power BI is particularly useful because it connects technical data handling with business decision-making. A learner is not only expected to calculate numbers but to understand what those numbers indicate. A sales dashboard can identify the best-performing products, declining regions, monthly trends, customer segments, or changes in revenue; a marketing dashboard can compare campaign performance, leads, conversions, and acquisition trends.'
    }
  ],
  close: 'The aim is not chart-building for its own sake. It is being able to take a business question, find it in the data, and answer it in a way the person asking can act on.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'pbi-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd for Power BI training',
  lead: 'techcadd provides IT and analytics-focused training in Ludhiana, with its broader data analytics program covering Power BI alongside other commonly used analytics tools.',
  items: [
    {
      title: 'A Structured Path From Fundamentals to Dashboards',
      text: 'For learners specifically interested in Power BI, the key benefit is having a structured environment where concepts progress in order — from the interface and data import, through Power Query and modelling, into DAX and finally practical dashboard development. Each stage assumes the one before it, so nothing arrives without the groundwork it depends on.'
    },
    {
      title: 'Power BI in the Context of a Wider Analytics Skill Set',
      text: 'techcadd’s Ludhiana data analytics training covers Excel, SQL, Tableau, Power BI, and Python. That matters for a Power BI learner because employers rarely hire for one tool in isolation — seeing where Power BI sits alongside SQL and Excel is part of understanding the job, not a distraction from it.'
    },
    {
      title: 'Built Around What You Can Show Afterwards',
      text: 'Whether you are starting after graduation, upgrading from Excel, preparing for an analytics career, or adding business intelligence skills to an existing profile, the emphasis is on finishing with dashboards you built and can explain — a stronger foundation for data-driven roles than a completion certificate on its own.'
    }
  ],
  close: 'Compare any programme on its curriculum, practical exercises, projects, trainer experience, learning support, duration, delivery mode, and portfolio outcomes — a good one covers Power Query, data modelling, DAX and dashboard development, not just basic chart creation.'
}

/* ---------------------------------------------------------------- */

/* The details a prospective student checks before enquiring. Sits last
   at the `careers` slot, immediately above the enquiry form.

   Duration, mode and fees are deliberately phrased as "confirm with
   the centre" rather than stated as fixed facts — the source copy
   carried an explicit note that these must be verified before being
   displayed as settled information. */
const COURSE_DETAILS = {
  id: 'pbi-course-details',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Course details',
  title: 'The programme at a glance',
  lead: 'Ready to learn Power BI in Ludhiana and build practical data analytics skills? Learn how to clean and transform data, build data models, write DAX measures, create interactive dashboards, and present business insights using Microsoft Power BI.',
  items: [
    { title: 'Course name', text: 'Power BI Course in Ludhiana.' },
    { title: 'Institute', text: 'techcadd, Ludhiana.' },
    {
      title: 'Duration',
      text: 'Around 2–3 months. Confirm the current batch duration with techcadd.'
    },
    {
      title: 'Mode',
      text: 'Classroom or online, subject to current batch availability. Confirm with the centre.'
    },
    { title: 'Level', text: 'Beginner to advanced.' },
    {
      title: 'Suitable for',
      text: 'Students, graduates, freshers, Excel users and working professionals.'
    },
    {
      title: 'Focus',
      text: 'Practical Power BI, data analytics and business intelligence.'
    }
  ]
}

export const PBI_NARRATIVE = [
  CURRICULUM,
  WHY_THIS_PROGRAMME,
  WHY_TECHCADD,
  COURSE_DETAILS
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.

   Note on Q14: it says a certificate does not guarantee employment,
   and nothing on this page claims techcadd issues an official
   Microsoft certification. Do not add such a claim unless it is
   verified — the source material was explicit about that.
------------------------------------------------------------------ */
export const PBI_FAQS = [
  {
    q: 'What is a Power BI course?',
    a: 'A **Power BI course** teaches learners how to use Microsoft Power BI to import, clean, transform, model, analyse, and visualize data. Students typically learn Power BI Desktop, Power Query, DAX, data modelling, interactive reports, dashboards, and Power BI Service.'
  },
  {
    q: 'Who can join a Power BI course in Ludhiana?',
    a: 'Students, graduates, freshers, working professionals, Excel users, business owners, and career switchers can learn Power BI. Beginners can also start if they have basic computer and spreadsheet knowledge.'
  },
  {
    q: 'Is Power BI difficult for beginners?',
    a: 'Power BI can be learned by beginners through structured, practical training. Starting with data import and visualization before progressing to Power Query, data modelling, and DAX makes the learning process easier.'
  },
  {
    q: 'Do I need programming knowledge to learn Power BI?',
    a: 'No. Advanced programming knowledge is not mandatory for starting Power BI. However, learning **DAX** and having basic knowledge of data, Excel, SQL, or analytics can help you progress further.'
  },
  {
    q: 'What will I learn in Power BI training in Ludhiana?',
    a: 'A comprehensive program covers Power BI Desktop, Power Query, data cleaning, data transformation, data modelling, relationships, DAX, calculated columns, measures, KPIs, filters, slicers, visualizations, dashboard development, report publishing, and Power BI Service.'
  },
  {
    q: 'Is Power BI useful after learning Excel?',
    a: 'Yes. Power BI complements **Excel** skills by providing tools for data transformation, modelling, interactive reporting, and dashboard development. Excel users often find Power BI a natural next step in their analytics learning journey.'
  },
  {
    q: 'What career opportunities are available after learning Power BI?',
    a: 'Power BI skills can support career paths such as Data Analyst, Business Intelligence Analyst, Reporting Analyst, MIS Analyst, Business Analyst, and Power BI Developer, depending on your complete skill set, experience, and the requirements of individual employers.'
  },
  {
    q: 'Is Power BI useful for data analytics?',
    a: 'Yes. Power BI is an important business intelligence and data visualization tool. It helps analysts transform business data into interactive reports and dashboards that support data-driven decision-making.'
  },
  {
    q: 'Will I work on practical Power BI projects?',
    a: 'A career-oriented program should include practical exercises and projects. Typical projects involve sales analysis, financial reporting, marketing performance, HR analytics, customer analysis, inventory, and business KPI dashboards.'
  },
  {
    q: 'Can freshers learn Power BI?',
    a: 'Yes. Freshers can learn Power BI and use practical projects to demonstrate their data visualization, reporting, modelling, and analytical skills. Combining Power BI with Excel, SQL, statistics, and other analytics skills further strengthens an entry-level profile.'
  },
  {
    q: 'Can working professionals join Power BI classes in Ludhiana?',
    a: 'Yes. Power BI is useful for professionals working in finance, sales, marketing, HR, operations, administration, and management who want to improve reporting and business analysis capabilities.'
  },
  {
    q: 'How can I choose the best Power BI course in Ludhiana?',
    a: 'Compare courses on curriculum, practical training, projects, trainer experience, learning support, course duration, delivery mode, portfolio development, and overall career relevance. A good program teaches more than basic chart creation and covers Power Query, data modelling, DAX, dashboard development, and practical business scenarios.'
  },
  {
    q: 'Can Power BI help me build a data analytics portfolio?',
    a: 'Yes. You can create portfolio projects such as sales dashboards, marketing dashboards, financial reports, HR dashboards, and customer analytics reports. These demonstrate how you work with data and communicate insight.'
  },
  {
    q: 'Is Power BI certification necessary for getting a job?',
    a: 'Certification can help demonstrate knowledge, but it does not guarantee employment. Employers may also evaluate practical skills, projects, analytical thinking, communication, Excel and SQL knowledge, and your ability to solve business problems using data.'
  },
  {
    q: 'Where can I learn Power BI in Ludhiana?',
    a: 'Students looking for **Power BI training in Ludhiana** can explore local IT and data analytics institutes such as techcadd and compare curriculum, practical learning approach, projects, schedule, and course structure before enrolling.'
  }
]
