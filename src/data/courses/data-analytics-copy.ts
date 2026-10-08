/* ==================================================================
   Long-form copy for the Data Analytics course page.

   Same construction as the other copy files in this folder — split
   out of ai-data.js because that file seeds thirteen courses and this
   is one course's editorial content.

   The copy is written to rank, so the terms the page targets are
   marked **like this** and RichText renders them inside <strong>. See
   RichText.jsx for the one rule it implements, and the keyword
   emphasis block in course-base.css for how a marked term is set:
   weight plus a light grey, deliberately quiet.

   NO TESTIMONIALS ARE EXPORTED FROM THIS FILE, ON PURPOSE.

   The source document carried twelve reviews under an explicit
   instruction from whoever wrote it: "Use only verified student
   feedback on the live website. The examples below are written as
   realistic testimonial-style drafts and should not be presented as
   genuine reviews unless they reflect actual student experiences."
   They are left out until techcadd has feedback it can stand behind.
   ./tableau-copy.js carries the same note for the same reason.

   The "Is Mathematics Required?" passage from the source is not a
   separate section — it answers an eligibility question, so it sits
   in the "who can join" block's closing note, where someone reading
   that section will actually meet it.
================================================================== */

export const DATA_ANALYTICS_OVERVIEW = {
  title: 'The Data Analytics course in Ludhiana that turns data into decisions',
  lead: 'A **Data Analytics Course in Ludhiana** is a career-focused choice for students, graduates, freshers, and working professionals who want to learn how to turn raw data into meaningful business insights. As companies increasingly depend on data for decision-making, skilled data analysts are in demand across IT, finance, e-commerce, healthcare, marketing, banking, and other industries.',
  body: [
    'At techcadd, the course is designed around practical, industry-relevant learning. Students can learn essential tools and technologies such as **Advanced Excel**, **SQL**, **Power BI**, **Python**, data visualization, data cleaning, reporting, and business analytics. The curriculum focuses on helping learners understand real business problems, analyse datasets, build interactive dashboards, and communicate insights effectively.',
    'The course is suitable for 12th-pass students, graduates, job seekers, freshers, and professionals looking to develop valuable analytical skills. Practical assignments and project-based learning can help students gain experience working with real-world datasets and build confidence for analytics-related career opportunities.',
    'For anyone searching for a **Data Analytics Course in Ludhiana**, techcadd offers a structured pathway to develop practical data skills and prepare for the growing data-driven job market.'
  ]
}

/* ------------------------------------------------------------------
   Who can do this course — fills the standard "who can join" block
   rather than adding a second one.
------------------------------------------------------------------ */
export const DATA_ANALYTICS_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do a Data Analytics course in Ludhiana?',
  lead: 'A **Data Analytics Course in Ludhiana** is suitable for learners from different educational and professional backgrounds. You do not necessarily need an advanced technical degree to begin. What matters most is an interest in numbers, problem-solving, technology, and understanding how data can support better business decisions.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th-Pass Students',
      text: 'Students who have completed their 12th can start learning data analytics and build a foundation for a technology-oriented career. Learning tools such as **Excel**, **SQL**, **Power BI**, and **Python** can help students develop practical skills before entering higher education or the job market. For students in Ludhiana looking for career-focused technical training, data analytics is an option worth exploring.',
      tag: 'Any stream'
    },
    {
      icon: 'code',
      title: 'College Students',
      text: 'Students pursuing BCA, BBA, B.Com, B.Sc., engineering, computer applications, management, economics, mathematics, or related degrees can benefit from additional analytics training. A classroom curriculum may provide theoretical knowledge, while practical training helps students understand how businesses actually use data — and learning alongside college builds projects, dashboards, reports and a portfolio to show employers.',
      tag: 'Alongside your degree'
    },
    {
      icon: 'career',
      title: 'Graduates and Freshers',
      text: 'Graduates who want to enter the IT or business analytics sector can use this course to develop job-oriented technical skills. Freshers learn how to clean datasets, write SQL queries, analyse information in Excel, create Power BI dashboards, and use Python for data analysis — particularly useful for learners who have finished a degree but want industry-relevant skills before applying for jobs.',
      tag: 'Portfolio ready'
    },
    {
      icon: 'stack',
      title: 'Working Professionals',
      text: 'Professionals already working in sales, finance, marketing, operations, administration, HR, customer service, or business management can also learn data analytics. Analytics skills help professionals move from manually preparing reports toward more efficient, data-driven workflows — a marketing professional can analyse campaign performance, an operations professional can monitor business KPIs on a dashboard.',
      tag: 'Upskilling'
    },
    {
      icon: 'spark',
      title: 'Job Seekers Looking for a Career Change',
      text: 'If you are considering a transition into technology or analytics, learning the fundamentals provides a structured starting point. You can progressively build knowledge in Excel, SQL, Power BI, Python, data visualization, and business analytics. You do not need to know everything before joining — a willingness to practise, interpret information, solve problems, and learn new tools matters more.',
      tag: 'Start from zero'
    },
    {
      icon: 'chart',
      title: 'Entrepreneurs and Business Owners',
      text: 'Business owners can also benefit from understanding analytics. Data helps them identify customer trends, monitor sales, evaluate marketing campaigns, understand product performance, and make better business decisions.',
      tag: 'Run it in-house'
    }
  ],
  requirementsTitle: 'What you actually need before day one',
  requirements: [
    'Basic computer literacy — comfortable using a laptop or PC',
    'Basic mathematical and logical understanding — you do not need to be an advanced mathematician',
    'An interest in numbers, patterns and business questions',
    'A laptop or desktop, which we help you set up in the first session',
    'About 6–8 hours a week outside class to practise on real datasets'
  ],
  note: 'On the maths question specifically: basic mathematical and logical understanding is helpful, but advanced mathematics is not required to start. A good course introduces concepts progressively and gives you enough practical exercises to build confidence as you go.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'da-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you will learn and the tools covered',
  lead: 'A practical **Data Analytics Course in Ludhiana** should help students move from understanding basic data concepts to analysing real-world datasets and presenting useful business insights. At techcadd, learners build knowledge progressively through the important analytics tools, practical exercises, dashboards, assignments, and project-based learning.',
  items: [
    {
      title: 'Data Analytics Fundamentals',
      text: 'Students begin by understanding what data analytics means and how organisations use data to solve business problems. You learn about different types of data, data sources, analytical processes, KPIs, metrics, and the difference between descriptive, diagnostic, predictive, and prescriptive analytics.'
    },
    {
      title: 'Advanced Microsoft Excel',
      text: '**Excel** remains an important business analytics tool. Students learn formulas, functions, sorting and filtering, conditional formatting, data validation, PivotTables, PivotCharts, lookup functions, data cleaning, and reporting techniques — the skills that let you analyse large datasets and produce structured reports for business use.'
    },
    {
      title: 'SQL and Database Analysis',
      text: '**SQL** is essential for working with structured databases. Students learn how to retrieve, filter, sort, group, and analyse information — SELECT statements, WHERE conditions, JOINs, GROUP BY, aggregate functions, subqueries, CASE statements, and other practical querying concepts. Working with databases shows how analysts extract the information required for reporting and decision-making.'
    },
    {
      title: 'Power BI and Business Intelligence',
      text: '**Power BI** is another important part of modern analytics workflows. Students learn how to import data, transform datasets, build data models, create relationships, develop interactive visualisations, and design professional dashboards — along with calculated measures, KPIs, filters, slicers, and dashboard storytelling that business users can actually follow.'
    },
    {
      title: 'Python for Data Analytics',
      text: '**Python** extends a learner’s analytical capabilities. Students are introduced to Python fundamentals and the libraries commonly used for data analysis, including **Pandas** and **NumPy**, along with visualization tools where appropriate. Python helps automate repetitive tasks, clean datasets, perform calculations, explore patterns, and support more advanced analytical workflows.'
    },
    {
      title: 'Data Cleaning and Preparation',
      text: 'Real-world data is rarely perfect — missing values, duplicate records, inconsistent formats, incorrect entries, unnecessary columns. Students learn how to identify and resolve common data-quality problems before analysis. This stage matters because accurate analysis depends entirely on reliable input data.'
    },
    {
      title: 'Data Visualization',
      text: 'Analytics becomes useful when findings can be communicated clearly. Students learn how to select appropriate charts, organise dashboards, highlight important KPIs, and avoid misleading visual representations. The goal is not attractive graphs but communicating the story behind the data.'
    },
    {
      title: 'Business Analytics',
      text: 'Students learn how analytics supports practical business decisions. Projects may involve sales performance, customer behaviour, marketing campaigns, financial information, inventory, or operations — helping learners understand the connection between technical analysis and actual business objectives.'
    },
    {
      title: 'Real-World Projects',
      text: 'Project-based learning brings all these skills together. Students work with datasets, clean and analyse the information, write SQL queries, develop Power BI dashboards, perform analysis in Excel or Python, and present their findings. A completed project becomes part of a portfolio when applying for internships or entry-level positions.'
    }
  ],
  tools: {
    label: 'Tools you’ll work with',
    items: [
      'Microsoft Excel / Advanced Excel',
      'SQL',
      'Microsoft Power BI',
      'Python',
      'Pandas',
      'NumPy',
      'Data visualization tools',
      'Database concepts',
      'Reporting & dashboards'
    ]
  },
  close: 'The overall objective is to combine technical knowledge with analytical thinking. Instead of learning individual tools in isolation, students learn how Excel, SQL, Power BI, Python, data preparation, visualization, and business understanding fit together within one analytics workflow — a stronger foundation for entry-level opportunities in data analytics, business intelligence, reporting, MIS, and business analysis.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'da-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why choose a data analytics program in Ludhiana?',
  lead: 'Choosing a **Data Analytics Course in Ludhiana** can be a practical step for learners who want to develop technology and business skills together. Modern organisations generate large amounts of information through sales, websites, customer interactions, finance, marketing, operations, and digital platforms — and the ability to convert that information into useful insight is becoming valuable across every industry.',
  items: [
    {
      title: 'Build Practical, Job-Oriented Skills',
      text: 'A major reason to learn data analytics is developing practical technical skills rather than relying only on theoretical knowledge. A structured program introduces **Excel**, **SQL**, **Power BI**, **Python**, and data visualization, and students learn how to import and clean datasets, identify patterns, calculate important metrics, write database queries, create interactive dashboards, and communicate findings clearly.'
    },
    {
      title: 'Learn Skills Used Across Industries',
      text: 'Data analytics is not restricted to one industry. Businesses in IT, banking, finance, e-commerce, retail, healthcare, logistics, education, manufacturing, and marketing all use data to understand performance and support decision-making — which makes analytics a versatile skill for students and professionals in Ludhiana who want broader career options.'
    },
    {
      title: 'Develop a Portfolio',
      text: 'Learning concepts is only one part of becoming an analytics professional; students also need evidence they can apply them. Project-based learning produces sales dashboards, customer analysis reports, financial summaries, marketing performance dashboards, and business KPI reports — work that becomes a professional portfolio and demonstrates practical ability during interviews.'
    },
    {
      title: 'Improve Problem-Solving Ability',
      text: 'Data analytics involves more than creating charts. Analysts need to understand a business question, identify relevant information, clean and examine the data, discover useful patterns, and communicate a conclusion. Working through practical datasets strengthens analytical thinking and structured problem-solving.'
    },
    {
      title: 'Suitable for Different Career Backgrounds',
      text: 'Analytics can be learned by people from different educational backgrounds — commerce, management, mathematics, computer science, engineering, economics. For professionals it complements existing domain expertise: someone in marketing can combine marketing knowledge with data analysis to understand campaign performance far more effectively.'
    },
    {
      title: 'Prepare for a Data-Driven Workplace',
      text: 'Businesses increasingly expect employees to understand performance metrics and make decisions using evidence. Learning analytics helps students become comfortable working with numbers, reports, dashboards, and business information — which is why a good course focuses on practical application rather than tool demonstrations.'
    },
    {
      title: 'Learn Step by Step',
      text: 'Beginners start with foundational concepts before moving toward advanced topics. A typical journey runs from Excel and data fundamentals to SQL, Power BI, Python, visualization, and real-world projects. That progression keeps the learning understandable while confidence builds.'
    },
    {
      title: 'Build a Foundation for Career Growth',
      text: 'Data analytics provides a foundation for exploring roles such as Data Analyst, Business Analyst, Reporting Analyst, BI Analyst, MIS Analyst, and Junior Data Analyst, depending on an individual’s skills, qualifications, experience, and employer requirements. For students and job seekers in Ludhiana, combining formal education with practical analytics training strengthens a professional profile.'
    }
  ],
  close: 'Choosing a **Data Analytics Course in Ludhiana** should not be based only on the course title. Compare the curriculum, practical training, projects, tools covered, teaching approach, and career support before deciding.'
}

export const DATA_ANALYTICS_NARRATIVE = [CURRICULUM, WHY_THIS_PROGRAMME]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard set the factory writes for every other course.

   Each answer is written to stand on its own without the surrounding
   text, which is what an answer engine needs to quote it directly.
------------------------------------------------------------------ */
export const DATA_ANALYTICS_FAQS = [
  {
    q: 'What is a Data Analytics course in Ludhiana?',
    a: 'A **Data Analytics Course in Ludhiana** teaches students how to collect, clean, analyse, visualise, and interpret data to support business decisions. Training may include tools such as **Excel**, **SQL**, **Power BI**, **Python**, and data visualization.'
  },
  {
    q: 'Who can join a Data Analytics course?',
    a: 'The course is suitable for 12th-pass students, graduates, freshers, working professionals, job seekers, and career switchers who are interested in developing data and analytical skills.'
  },
  {
    q: 'Do I need a technical background to learn data analytics?',
    a: 'No. Beginners can start with fundamental concepts and gradually learn tools such as Excel, SQL, Power BI, and Python. Basic computer knowledge, logical thinking, and a willingness to practise are what help most.'
  },
  {
    q: 'Is mathematics required for data analytics?',
    a: 'Basic mathematics and logical reasoning are useful, but advanced mathematics is not normally required for fundamental data analytics. The focus is on understanding data, identifying patterns, calculating metrics, and communicating insights.'
  },
  {
    q: 'What tools are taught in a Data Analytics course?',
    a: 'A practical course covers **Advanced Excel**, **SQL**, **Power BI**, **Python**, **Pandas**, **NumPy**, data visualization, database concepts, reporting, and business intelligence techniques.'
  },
  {
    q: 'Is Power BI included in data analytics training?',
    a: 'Yes. **Power BI** is commonly used for business intelligence and dashboard development. Students learn how to import and transform data, create relationships, build visualisations, develop KPIs, and create interactive reports.'
  },
  {
    q: 'Why should I learn SQL for data analytics?',
    a: '**SQL** allows analysts to retrieve and analyse information stored in databases. It is used for filtering records, joining tables, grouping information, calculating metrics, and preparing data for reporting and analysis.'
  },
  {
    q: 'Can beginners learn Python for data analytics?',
    a: 'Yes. Beginners can learn the **Python** fundamentals required for analytics and progressively work with libraries such as **Pandas** and **NumPy**. Python is used for data cleaning, analysis, automation, and visualization workflows.'
  },
  {
    q: 'Will I work on practical projects?',
    a: 'Yes. Project-based learning helps students apply concepts to realistic datasets and business scenarios. Projects may include sales analysis, customer analysis, KPI reporting, business dashboards, and other analytical tasks.'
  },
  {
    q: 'What career opportunities are available after learning data analytics?',
    a: 'Depending on qualifications, practical skills, experience, and employer requirements, learners can explore roles such as Data Analyst, Junior Data Analyst, Business Analyst, BI Analyst, Reporting Analyst, and MIS Analyst.'
  },
  {
    q: 'How long does a Data Analytics course take?',
    a: 'Course duration varies according to the curriculum, learning format, and depth of training. Check the current course structure and duration directly with techcadd before enrolling.'
  },
  {
    q: 'Is a Data Analytics course useful for graduates?',
    a: 'Yes. Graduates can use analytics training to develop additional technical and business skills. A combination of academic qualifications, practical projects, analytics tools, and portfolio work strengthens a candidate’s profile for relevant entry-level opportunities.'
  },
  {
    q: 'Can working professionals learn data analytics?',
    a: 'Yes. Working professionals can learn analytics to improve reporting, automate repetitive analysis, understand KPIs, and develop additional skills relevant to their existing roles or potential career transitions.'
  },
  {
    q: 'How do I choose the best Data Analytics course in Ludhiana?',
    a: 'Compare the curriculum, practical training, tools covered, projects, trainer expertise, learning mode, course duration, career support, and student feedback. Choose a program that matches your current skill level and career objectives rather than selecting solely on price.'
  }
]
