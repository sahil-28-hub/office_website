/* ==================================================================
   Long-form copy for the Data Science course page.

   Split out of ai-data.js for the same reason as the others — that
   file seeds thirteen courses, and this is one course's editorial
   content. See ./power-bi-copy.js, which sits beside it.

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
   testimonial formats, not verified student reviews" and signed
   "Sample Student" — they name no one and were explicitly marked to be
   replaced with permission-based feedback before publishing. The seed
   in ai-data.js therefore sets no `testimonials`, and the page falls
   back to the factory quotes in shared.js.
================================================================== */

export const DS_OVERVIEW = {
  title: 'The data science course in Ludhiana that runs the whole pipeline',
  lead: 'If you are looking for a **Data Science Course in Ludhiana** that combines practical learning with career-focused skills, techcadd offers a structured learning path for students, graduates, freshers, and aspiring technology professionals. Data science brings together programming, statistics, data analysis, machine learning, and artificial intelligence to help businesses turn raw data into useful insights and predictions.',
  body: [
    'The program is designed to help learners progress from foundational concepts to practical applications. Students can develop skills in **Python**, data analysis, statistics, machine learning, data visualization, and AI, while working with real-world datasets and project-based exercises. This approach can help learners build both technical confidence and a portfolio relevant to entry-level data roles.',
    'For students searching locally for a **Data Science Course in Ludhiana**, **Data Science Training in Ludhiana**, or a **Data Science Institute in Ludhiana**, techcadd provides a career-oriented environment focused on practical IT education. The course can be a suitable starting point for learners interested in roles such as Data Analyst, Junior Data Scientist, Machine Learning professional, or AI-focused positions.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const DS_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do a data science course in Ludhiana',
  lead: 'A **Data Science Course in Ludhiana** can be a strong career option for students and professionals who want to build skills in Python, data analysis, machine learning, artificial intelligence, and business intelligence. You do not necessarily need to be an expert programmer before starting — a structured program can take learners from programming fundamentals through practical data projects and advanced machine learning concepts.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th-Pass Students',
      text: 'Students who have completed Class 12 and are interested in technology, mathematics, computers, or analytical problem-solving can consider data science as a career-oriented field. Starting after 12th gives learners additional time to develop programming and analytical skills before entering the professional market. Students from science, commerce, or other academic backgrounds can explore the field, although comfort with mathematics and logical thinking helps — beginners can first strengthen their Python and statistics fundamentals before moving toward machine learning.',
      tag: 'Start early'
    },
    {
      icon: 'code',
      title: 'College Students',
      text: 'Engineering, BCA, B.Sc., B.Tech., MCA, computer applications, mathematics, statistics, and related students can use a **Data Science Training in Ludhiana** program to complement their academic education. College courses often provide theoretical knowledge, while practical training helps students understand how those concepts are applied to real datasets. Building projects during college also helps students develop a portfolio before graduation.',
      tag: 'Alongside a degree'
    },
    {
      icon: 'career',
      title: 'Graduates and Freshers',
      text: 'Graduates who want to enter the IT industry can consider data science training to develop practical technical skills. Learning Python, SQL, data visualization, machine learning, and related technologies helps freshers understand the requirements of modern data-oriented roles. For students searching for a **Data Science Institute in Ludhiana**, project-based learning is particularly useful because employers generally value demonstrable skills alongside academic qualifications.',
      tag: 'Any stream'
    },
    {
      icon: 'server',
      title: 'Working Professionals',
      text: 'Professionals from IT, finance, business, operations, marketing, engineering, or other analytical fields can learn data science to add data-driven capabilities to their existing careers. Someone working with business reports may benefit from learning SQL and Python, while an IT professional may progress toward machine learning, AI, or data engineering concepts.',
      tag: 'Add a capability'
    },
    {
      icon: 'spark',
      title: 'Career Switchers',
      text: 'Data science can also appeal to learners planning a transition into technology. A career switcher should be prepared to invest consistent time in programming, statistics, projects, and problem-solving. A practical course can provide a structured roadmap instead of requiring learners to navigate multiple disconnected tutorials.',
      tag: 'A roadmap, not tutorials'
    },
    {
      icon: 'chart',
      title: 'Aspiring Data Analysts',
      text: 'Learners primarily interested in becoming Data Analysts can begin with Python, SQL, Excel or spreadsheet-based analysis, statistics, data cleaning, and visualization. These foundational skills can later provide a pathway toward more advanced data science and machine learning.',
      tag: 'Analyst track'
    },
    {
      icon: 'bot',
      title: 'Students Interested in AI and Machine Learning',
      text: 'If your long-term goal is artificial intelligence or machine learning, data science provides many of the foundational concepts required for working with data and predictive models. The programme includes machine learning, deep learning, NLP, computer vision, and cloud-based data science concepts.',
      tag: 'The AI route'
    }
  ],
  note: 'Prior programming experience is not required. Beginners can start with Python fundamentals and progress toward data structures, statistics, data analysis, and machine learning — the qualities that matter most are curiosity, regular practice, logical thinking, and a willingness to work with data.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'ds-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you’ll learn and the tools covered',
  lead: 'A career-focused **Data Science Course in Ludhiana** should help you move beyond theory and understand how real-world data is collected, cleaned, analyzed, visualized, and used to build predictive models. The curriculum covers programming, mathematics and statistics, data analysis, SQL, machine learning, deep learning, NLP, computer vision, cloud technologies, and an end-to-end capstone project.',
  items: [
    {
      title: 'Python for Data Science',
      text: '**Python** is one of the core skills for modern data science. Students begin with programming fundamentals and gradually learn how to use Python for data manipulation, analysis, automation, and machine learning. You can work with libraries such as **NumPy** for numerical computing and **Pandas** for data manipulation — the skills that let you load datasets, clean information, transform columns, identify patterns, and prepare data for analysis.'
    },
    {
      title: 'Mathematics and Statistics',
      text: 'Statistics provides the foundation for understanding data and evaluating models. The course covers probability, statistical analysis, linear algebra, and calculus as they apply to machine learning algorithms. You can learn distributions, correlation, probability, variance, and statistical interpretation, and understand where each is applied in practical data problems.'
    },
    {
      title: 'Data Cleaning and Exploratory Data Analysis',
      text: 'Real-world datasets are rarely perfect. Students learn how to handle missing values, duplicates, inconsistent data, outliers, and other common data-quality problems. **Exploratory Data Analysis** helps you understand a dataset before building a model — investigating relationships, trends, distributions, and unusual patterns, and converting raw information into meaningful insight.'
    },
    {
      title: 'Data Visualization',
      text: 'Communicating data clearly is an important professional skill. Students can learn visualization using libraries such as **Matplotlib**, while the broader curriculum also includes **Power BI** for creating business-oriented dashboards. Visualization turns complex datasets into charts, graphs, reports, and dashboards that decision-makers can understand quickly.'
    },
    {
      title: 'SQL and Database Management',
      text: 'Data professionals frequently need to retrieve information from databases. Students can learn how to write queries, filter records, combine tables, aggregate information, and extract datasets for analysis. The curriculum includes **SQL** for managing and querying relational databases.'
    },
    {
      title: 'Machine Learning',
      text: 'Machine learning is a major component of data science. Students learn how algorithms identify patterns in historical data and make predictions or classifications. The curriculum includes supervised learning such as regression and classification, along with unsupervised learning including clustering, and model evaluation so learners understand how to measure performance. A key tool at this stage is **Scikit-learn**.'
    },
    {
      title: 'Deep Learning and Neural Networks',
      text: 'For students who want to explore advanced AI applications, deep learning introduces neural networks capable of handling complex patterns. The curriculum includes deep learning and neural networks using **TensorFlow** and **Keras**, and depending on the learning track students may also encounter **PyTorch** and advanced neural-network applications.'
    },
    {
      title: 'Natural Language Processing',
      text: '**NLP** focuses on enabling computers to work with human language. Students can explore applications such as sentiment analysis, text processing, summarization, and chatbot development — particularly useful for learners interested in AI applications involving customer support, search, text analytics, and conversational systems.'
    },
    {
      title: 'Computer Vision',
      text: 'Computer vision allows AI systems to interpret images and video. Students can learn image classification, object detection, and image processing, with tools such as **OpenCV** introduced for practical image-processing and computer-vision tasks.'
    },
    {
      title: 'Jupyter and the Development Environment',
      text: 'A practical data science workflow needs an environment where you can write code, inspect datasets, visualize results, and document experiments. **Jupyter** is one such environment and is part of the toolset used throughout the training.'
    },
    {
      title: 'Git, Docker and Cloud Platforms',
      text: 'Modern data science increasingly involves deployment and collaboration rather than only notebook-based experimentation. The programme covers **Git**, **Docker**, **AWS**, and **Azure**, so students gain exposure to version control, containerization, and cloud-based deployment concepts.'
    },
    {
      title: 'Real-World Projects and Capstone Work',
      text: 'Projects bring the individual skills together. An end-to-end capstone project designed around a real business problem lets students apply data preparation, analysis, modelling, and deployment concepts in one workflow. Depending on the learning path, practical work can include EDA dashboards, predictive models, NLP applications, computer-vision projects, and deployable machine-learning demonstrations.'
    }
  ],
  tools: {
    label: 'Key tools you can learn',
    items: [
      'Python',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Jupyter',
      'SQL',
      'Scikit-learn',
      'TensorFlow',
      'Keras',
      'PyTorch',
      'Power BI',
      'OpenCV',
      'Git & GitHub',
      'Docker',
      'AWS',
      'Microsoft Azure'
    ]
  },
  close: 'Together, these skills can help students build a foundation for careers such as Data Analyst, Data Scientist, Machine Learning Engineer, AI Engineer, and Business Intelligence Analyst. The advantage of learning them together is that you understand the complete data lifecycle — from raw data and analysis through machine learning, visualization, and deployment — while building projects that strengthen your portfolio.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'ds-why-techcadd',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd for data science training',
  lead: 'Choosing the right institute matters when you are investing time and money in a career-focused skill like data science. techcadd offers a practical learning environment in Ludhiana built around programming, data analysis, machine learning, artificial intelligence, and project-based learning, with more than 15 years of experience in technology education.',
  items: [
    {
      title: 'Industry-Relevant Data Science Curriculum',
      text: 'Data science is a broad field, so learning only one programming language is not enough. The AI & Data Science program covers Python, statistics, machine learning, deep learning, NLP, computer vision, data engineering, cloud deployment, MLOps, and a capstone project. This progression helps students understand the complete journey from preparing data to developing and deploying models.'
    },
    {
      title: 'Practical, Project-Based Learning',
      text: 'One of the most important reasons to choose a **Data Science Institute in Ludhiana** is the opportunity to practise what you learn. The programme is built around hands-on work with real datasets and multiple projects, including predictive modelling, NLP, and computer vision applications. Project experience helps students build a portfolio that demonstrates practical skills instead of relying only on a course certificate.'
    },
    {
      title: 'Learn From Experienced Trainers',
      text: 'For beginners, data science concepts can initially seem difficult. Guidance from experienced trainers makes subjects such as statistics, Python programming, machine learning algorithms, and model evaluation easier to understand. techcadd’s data science and AI training is delivered by industry-experienced and certified trainers.'
    },
    {
      title: 'Career and Placement Support',
      text: 'Learning technical skills is only one part of starting a data career — students also need help presenting those skills to employers. Career support includes resume preparation, mock interviews, project guidance, and placement assistance, which can help learners feel more confident when preparing for internships and entry-level opportunities.'
    },
    {
      title: 'Flexible Learning Options',
      text: 'Students have different schedules and learning requirements. Weekday, weekend, fast-track, and one-to-one options are available for AI and data science training. Flexible batches can be particularly useful for college students and working professionals who want to learn alongside their existing commitments.'
    },
    {
      title: 'Portfolio-Focused Career Preparation',
      text: 'A strong portfolio helps demonstrate what you can actually do. Instead of learning concepts in isolation, students work toward projects involving data analysis, predictive models, machine learning, NLP, or computer vision — practical material to discuss during interviews and showcase when applying for opportunities.'
    },
    {
      title: 'A Convenient Local Option for Ludhiana Students',
      text: 'For students searching for **Data Science Classes in Ludhiana** or a data science course near Ludhiana, a local institute provides face-to-face guidance, lab access, doubt-solving, and regular interaction with trainers. The Ludhiana centre is at 1st Floor, Sear Complex, 773/1 Bharat Nagar Chowk, Ludhiana.'
    }
  ],
  close: 'techcadd can be considered by learners who want a structured path combining Python, analytics, machine learning, AI, practical projects, mentorship, certification, and career preparation. The right choice should ultimately depend on your background, learning goals, preferred batch schedule, curriculum, and the level of practical support you expect.'
}

/* ---------------------------------------------------------------- */

/* Advice on choosing any institute, not just this one.

   Kept because it is the most genuinely useful thing on the page for a
   prospective student — it tells them what to interrogate before they
   pay anyone, including us. A page confident in its own curriculum can
   afford to say so. */
const HOW_TO_CHOOSE = {
  id: 'ds-how-to-choose',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Before you enrol',
  title: 'What to look for in a data science institute',
  lead: 'When evaluating a **Data Science Institute in Ludhiana**, look beyond star ratings and promotional claims.',
  items: [
    {
      title: 'Check what is actually included',
      text: 'Compare the curriculum, trainer experience, practical assignments, project quality, batch format, learning support, certification details, and career assistance. Ask the institute for clear information about what is included rather than choosing solely on advertisements or course fees.'
    },
    {
      title: 'Ask for verifiable student experience',
      text: 'Most importantly, ask whether the institute can provide verifiable student experiences and genuine placement-related information. An authentic review should carry the student’s name or an approved identifier, their course or batch, a date, and a real account of what they did — not an anonymous quote that could describe anyone.'
    },
    {
      title: 'Be wary of guarantees',
      text: 'A certificate alone does not guarantee employment, and no institute can honestly promise a job. Employers evaluate programming ability, analytical skills, projects, communication, and interview performance. Treat unsupported claims — a fixed placement percentage, a guaranteed salary — as a reason to ask harder questions.'
    }
  ]
}

/* ---------------------------------------------------------------- */

/* The details a prospective student checks before enquiring.

   Duration and fees are phrased as "confirm with the centre" rather
   than stated as settled facts, per the note carried with the source
   copy. */
const COURSE_DETAILS = {
  id: 'ds-course-details',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Course details',
  title: 'Start your data science journey',
  lead: 'Take the next step toward learning Python, data analytics, machine learning, artificial intelligence, and other industry-relevant data science skills. Whether you are a 12th-pass student, graduate, fresher, job seeker, or working professional, the program provides a structured learning path with practical projects and career-focused guidance.',
  items: [
    { title: 'Course name', text: 'Data Science & AI Course.' },
    { title: 'Location', text: '1st Floor, Sear Complex, 773/1 Bharat Nagar Chowk, Ludhiana, Punjab.' },
    { title: 'Mode', text: 'Classroom and practical training options, including weekday, weekend, fast-track and one-to-one batches.' },
    {
      title: 'Duration',
      text: 'Around 6 months. Confirm the current duration with techcadd at the time of enquiry.'
    },
    {
      title: 'Suitable for',
      text: 'Students, graduates, freshers, job seekers and working professionals.'
    },
    {
      title: 'Key skills',
      text: 'Python, SQL, statistics, data analysis, machine learning, deep learning, NLP, computer vision and AI.'
    }
  ]
}

export const DS_NARRATIVE = [
  CURRICULUM,
  WHY_TECHCADD,
  HOW_TO_CHOOSE,
  COURSE_DETAILS
]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard seven the factory writes rather than sitting on top of
   them — several ask the same things.
------------------------------------------------------------------ */
export const DS_FAQS = [
  {
    q: 'What is a Data Science Course in Ludhiana?',
    a: 'A **Data Science Course in Ludhiana** teaches students how to collect, clean, analyze, visualize, and interpret data, and how to use machine learning techniques to solve real-world problems. Typical topics include Python, SQL, statistics, data analysis, machine learning, and artificial intelligence.'
  },
  {
    q: 'Who can join a Data Science Course?',
    a: 'Students, graduates, freshers, job seekers, working professionals, and career switchers can consider data science training. Basic computer knowledge and an interest in mathematics, programming, and problem-solving are helpful for beginners.'
  },
  {
    q: 'Is Data Science difficult for beginners?',
    a: 'Data science can seem challenging initially because it combines programming, mathematics, statistics, and analytical thinking. However, beginners can learn progressively by starting with Python and basic statistics before moving into machine learning and advanced AI concepts.'
  },
  {
    q: 'Do I need to know Python before joining?',
    a: 'No. Beginners can learn **Python** as part of a structured data science program. Learning Python fundamentals first provides the programming foundation needed for data analysis and machine learning.'
  },
  {
    q: 'What will I learn in a Data Science Course in Ludhiana?',
    a: 'Students can learn Python, NumPy, Pandas, SQL, statistics, data visualization, machine learning, deep learning, NLP, computer vision, and model deployment. Practical projects help learners apply these concepts to real-world datasets.'
  },
  {
    q: 'Which tools are used in data science training?',
    a: 'Common tools include **Python**, Jupyter, NumPy, Pandas, Matplotlib, **SQL**, Scikit-learn, TensorFlow, Keras, PyTorch, Power BI, Git, Docker, AWS, and Azure. The exact tools covered depend on the curriculum and learning track.'
  },
  {
    q: 'What career opportunities are available after Data Science training?',
    a: 'Depending on your skills, education, experience, and portfolio, potential career paths include Data Analyst, Data Scientist, Machine Learning Engineer, AI Engineer, Business Intelligence Analyst, and related data-focused roles.'
  },
  {
    q: 'Is a Data Science certificate enough to get a job?',
    a: 'A certificate alone does not guarantee employment. Employers may also evaluate your programming ability, analytical skills, projects, communication, problem-solving ability, interview performance, and practical knowledge. A strong portfolio helps demonstrate what you can actually build.'
  },
  {
    q: 'How important are projects in a Data Science Course?',
    a: 'Projects are highly useful because they let students apply theoretical concepts to practical problems. A portfolio can demonstrate skills such as data cleaning, exploratory analysis, visualization, machine learning, and model evaluation to potential employers.'
  },
  {
    q: 'Can college students join Data Science Training in Ludhiana?',
    a: 'Yes. College students can use data science training to supplement their academic education and develop practical skills before graduation. Learning Python, SQL, analytics, and machine learning also helps students prepare for internships and entry-level opportunities.'
  },
  {
    q: 'Can a non-IT graduate learn Data Science?',
    a: 'Yes, a non-IT graduate can learn data science with consistent practice. The learner may need additional time to develop programming and mathematical fundamentals, but a structured beginner-friendly curriculum provides a progressive learning path.'
  },
  {
    q: 'How do I choose the right Data Science Institute in Ludhiana?',
    a: 'Compare the course syllabus, practical projects, trainer experience, class format, batch timings, hands-on learning, doubt support, certification, career guidance, and placement claims before enrolling. Ask the institute for clear information about what is included rather than choosing solely on advertisements or course fees.'
  },
  {
    q: 'Is Data Science a good career option?',
    a: 'Data science can be a strong career direction for people who enjoy programming, statistics, analytical thinking, and solving business problems with data. However, career outcomes depend on your skills, education, practical experience, portfolio, and the job market.'
  },
  {
    q: 'What is the difference between Data Analytics and Data Science?',
    a: 'Data analytics generally focuses on examining existing data to identify trends, generate reports, and support business decisions. Data science has a broader scope and can include analytics along with statistical modelling, machine learning, predictive modelling, and AI.'
  },
  {
    q: 'Why choose techcadd for a Data Science Course in Ludhiana?',
    a: 'The AI and Data Science curriculum includes Python, statistics, SQL, machine learning, deep learning, NLP, computer vision, cloud technologies, and practical project work. Review the current curriculum, batch details, fees, and learning format directly with the centre before enrolment.'
  }
]
