/* ==================================================================
   Long-form copy for the Certificate Course in Machine Learning &
   Artificial Intelligence.

   This is the page the "Machine Learning & AI" entry points at in the
   After 12th menu's "6 Month Certificates" group, so it is written as
   the combined ML + AI certificate. The deep-learning slug covers the
   ML + Deep Learning certificate in the 1 Year group.

   Split out of ai-data.js for the same reason as the others — that
   file seeds thirteen courses, and this is one course's editorial
   content.

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
   neighbouring sections share a background. The two sections at the
   `careers` slot run tint, paper into the dark enquiry form.

   ON THE FAQs: ML_FAQS at the bottom of this file was NOT part of the
   marketing copy this page was rewritten from — that copy supplied no
   questions at all. The fifteen below predate it and are kept
   verbatim, because `ownFaqs` is set on the seed and dropping them
   would leave the page with nothing where the accordion goes.

   ON TESTIMONIALS: no reviews were supplied for this page either, so
   the seed sets none and the factory quotes in shared.js stand.
================================================================== */

export const ML_OVERVIEW = {
  title: 'The machine learning and artificial intelligence certificate',
  lead: 'Looking for the best **Machine Learning and Artificial Intelligence course in Ludhiana**? techcadd’s certificate program is built for students, graduates, and job seekers who want practical, industry-ready AI and ML skills — right here in Ludhiana, without needing to travel to Chandigarh, Delhi, or Bangalore for quality training.',
  body: [
    'This **AI and ML certification course in Ludhiana** covers Python programming, machine learning algorithms, deep learning, neural networks, NLP, and Generative AI tools — all taught through real projects and hands-on labs, not just theory. Whether you’re a fresher exploring AI courses after 12th, a graduate planning a career switch, or a working professional upskilling for better opportunities, the program is designed to take you from beginner to job-ready.',
    'techcadd combines expert mentorship, live projects, placement assistance, and a curriculum aligned with current demand across the IT, healthcare, e-commerce, and FinTech sectors growing in the Ludhiana–Chandigarh region. By the end, students leave with a portfolio of real AI/ML projects, a recognised certificate, and the confidence to apply for roles like Machine Learning Engineer, AI Developer, and Data Analyst.'
  ]
}

/* ---------------------------------------------------------------- */

/* Who can do this course.

   Fills the standard "who can join" block rather than sitting as a
   narrative section, replacing the six generic groups the factory
   writes for every other course. See joiners() in shared.js. */
export const ML_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Is this course right for you?',
  lead: 'The **Certificate Course in Machine Learning & Artificial Intelligence in Ludhiana** is designed to be accessible to a wide range of learners — you don’t need to be a coding genius or a computer science topper to get started. If you have curiosity, basic logical thinking, and a willingness to learn, this course can work for you.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students (Science & Commerce Background)',
      text: 'If you’ve just finished your 12th and are exploring **AI courses in Ludhiana after 12th**, this is one of the smartest early career moves you can make. Students from Science (Non-Medical) backgrounds benefit from prior exposure to maths and basic computer concepts, but Commerce students with an interest in technology are equally welcome. Starting early means you enter the job market with practical AI/ML skills years ahead of peers who wait until after graduation to specialise.',
      tag: 'Start early'
    },
    {
      icon: 'code',
      title: 'Undergraduate & Postgraduate Students',
      text: 'Whether you’re pursuing B.Tech, BCA, B.Sc (IT/CS), MCA, or even a non-technical degree like B.Com or BBA, this **Machine Learning certification course in Ludhiana** is structured to help you build in-demand technical skills alongside your degree. Many colleges in and around Punjab don’t offer deep, practical AI/ML training as part of the regular curriculum — this course fills that exact gap with hands-on projects and real datasets.',
      tag: 'Alongside a degree'
    },
    {
      icon: 'career',
      title: 'Fresh Graduates & Job Seekers',
      text: 'If you’ve completed your degree and are struggling to find the right job in Ludhiana’s competitive market, a certified AI and ML program becomes a genuine differentiator. Recruiters across Ludhiana’s growing IT, manufacturing, and export sectors are looking for candidates who understand data-driven decision-making, automation, and AI tools — the skills this course builds directly.',
      tag: 'A differentiator'
    },
    {
      icon: 'server',
      title: 'Working Professionals Looking to Upskill',
      text: 'IT professionals, data entry specialists, software testers, or non-tech professionals working in Ludhiana’s textile, hosiery, auto-parts, or FinTech industries can use this course to pivot into AI/ML roles. Evening and weekend batch options make it practical to learn machine learning without quitting your current job.',
      tag: 'Evening batches'
    },
    {
      icon: 'chart',
      title: 'Entrepreneurs & Business Owners',
      text: 'Understanding AI isn’t just for engineers anymore. Local business owners who want to apply AI for automation, customer insights, or predictive analytics in their own ventures will find real, applicable value here — enough to evaluate a vendor’s claims rather than take them on trust.',
      tag: 'Apply it yourself'
    },
    {
      icon: 'spark',
      title: 'Anyone Transitioning Careers into Tech',
      text: 'If you’re from a non-IT background — arts, commerce, even a diploma — and want to break into AI, the program starts from the fundamentals of Python and basic statistics before moving into advanced ML and AI concepts, so no prior coding background is mandatory.',
      tag: 'No coding needed'
    }
  ],
  note: 'Basic eligibility: 12th pass in any stream, no mandatory coding background, and a genuine interest in technology, data and problem-solving. Basic computer literacy helps but is not essential.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'ml-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'The full curriculum, and the tools it covers',
  lead: 'The course is structured as a progressive journey — starting from programming fundamentals and moving through to advanced AI concepts and real-world deployment. Here is exactly what you’ll cover.',
  items: [
    {
      title: 'Python Programming for AI & ML',
      text: 'Every strong AI/ML skillset starts with **Python**. You’ll learn Python syntax, data structures, functions, and the libraries essential for data science — including **NumPy** for numerical computing and **Pandas** for data manipulation and analysis. This foundation means students with zero prior coding experience can confidently move into advanced topics.'
    },
    {
      title: 'Data Preprocessing & Exploratory Data Analysis',
      text: 'Before any model can learn, data has to be cleaned and understood. You’ll learn how to handle missing values, detect outliers, normalise datasets, and use visualisation libraries like **Matplotlib** and **Seaborn** to explore patterns in real datasets — a critical, often underrated skill that employers specifically test for.'
    },
    {
      title: 'Statistics & Mathematics for Machine Learning',
      text: 'A practical rather than overly academic grounding in probability, statistics, linear algebra and calculus — just enough to genuinely understand how ML algorithms work under the hood, instead of treating them as black boxes.'
    },
    {
      title: 'Core Machine Learning Algorithms',
      text: 'You’ll work hands-on with supervised learning (linear and logistic regression, decision trees, random forest, support vector machines, k-nearest neighbours) and unsupervised learning (K-Means and hierarchical clustering, PCA). Each algorithm is taught through real project implementation using **Scikit-learn**.'
    },
    {
      title: 'Model Evaluation & Optimization',
      text: 'Learn how to evaluate model performance using accuracy, precision, recall, F1-score and confusion matrices, along with cross-validation, hyperparameter tuning, and handling overfitting and underfitting — the skills that separate a beginner from a job-ready ML practitioner.'
    },
    {
      title: 'Deep Learning & Neural Networks',
      text: 'Move into Artificial Neural Networks, **Convolutional Neural Networks** for image data, and **Recurrent Neural Networks** for sequential data, using **TensorFlow** and **Keras**. You’ll understand activation functions, forward and backward propagation, and how to build and train real deep learning models.'
    },
    {
      title: 'Natural Language Processing Basics',
      text: 'Learn how machines process human language — text preprocessing, tokenization, sentiment analysis, and an introduction to transformer-based models, giving you exposure to the technology behind chatbots and language models.'
    },
    {
      title: 'Generative AI & Modern AI Tools',
      text: 'Hands-on exposure to **Generative AI** concepts and the practical use of contemporary AI tools — prompt engineering, use cases in automation, and how generative models are being applied across industries.'
    },
    {
      title: 'Real Datasets & Capstone Projects',
      text: 'Throughout the course you’ll work with real-world datasets across finance, healthcare, retail and e-commerce, culminating in a capstone project you can showcase directly in interviews or add to a professional portfolio.'
    }
  ],
  tools: {
    label: 'Tools and technologies covered',
    items: [
      'Python',
      'NumPy & Pandas',
      'Matplotlib & Seaborn',
      'Scikit-learn',
      'TensorFlow & Keras',
      'Jupyter Notebook',
      'SQL basics',
      'Generative AI tools'
    ]
  },
  close: 'By the end of this **AI and ML certification course in Ludhiana**, you won’t just understand AI and ML theoretically — you’ll have built and trained real models, giving you a practical skillset and a project portfolio ready for job applications.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'ml-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why this program makes sense right now',
  lead: 'Ludhiana has long been Punjab’s industrial and business capital — hosiery, textiles, auto parts, manufacturing. But the city’s economy is shifting. IT parks, FinTech startups, e-commerce operations and tech-enabled manufacturing are growing across the Punjab–Chandigarh corridor, and every one of those sectors is hiring people who understand AI and machine learning. This program exists to put Ludhiana’s students directly into that pipeline, without relocating.',
  items: [
    {
      title: 'AI & ML Are No Longer Optional Skills',
      text: 'Across banking, healthcare, retail, manufacturing and logistics, AI and ML are becoming core to how businesses operate. Companies aren’t just hiring “AI specialists” anymore — they expect marketing teams, analysts and even operations staff to understand automation and data-driven tools. This course makes sure you’re not left behind as that shift accelerates.'
    },
    {
      title: 'Real, Practical, Project-Based Learning',
      text: 'Unlike purely theoretical programs, this course is built around live projects, real datasets, and practical implementation using Python, TensorFlow and industry-standard ML frameworks. You don’t just learn what a neural network is — you build one. That hands-on work is what employers actually screen for in interviews.'
    },
    {
      title: 'Certification That Adds Real Value',
      text: 'A recognised machine learning and AI certificate signals that you completed structured, verified training rather than a few scattered tutorials. That matters when you’re competing against candidates from bigger cities for the same remote or hybrid roles — though what carries the interview is the project work behind it.'
    },
    {
      title: 'Career Flexibility Across Multiple Roles',
      text: 'This program doesn’t lock you into one narrow job title. Graduates can pursue Machine Learning Engineer, AI Developer, Data Analyst, Python Developer, Business Intelligence Analyst and Automation Specialist roles — multiple entry points into tech from Ludhiana itself, or remotely for companies across India and beyond.'
    },
    {
      title: 'Local Access, Global Relevance',
      text: 'You get a machine learning training centre in Ludhiana with mentors who understand both global AI trends and the local job market — including which skills recruiters at Punjab’s IT and manufacturing-tech companies are actually asking for. That local-plus-global balance is hard to find in generic online-only courses.'
    },
    {
      title: 'Early-Mover Advantage in a Growing Market',
      text: 'AI and ML talent in tier-2 cities like Ludhiana is still relatively limited compared with the metros, which means less competition for those who train now. Students who complete this certificate today are positioning themselves ahead of a talent wave that will only get more competitive.'
    },
    {
      title: 'Support Beyond Just Classes',
      text: 'Beyond the curriculum, the program includes mentorship, doubt-clearing sessions, resume building, interview preparation and placement assistance — designed to help students move from classroom learning to actual job offers.'
    }
  ],
  close: 'Not just another certificate — a structured, locally-accessible pathway into one of the fastest-growing career fields in tech, built for where you already are.'
}

/* ---------------------------------------------------------------- */

const WHY_TECHCADD = {
  id: 'ml-why-techcadd',
  slot: 'careers',
  tone: 'paper',
  eyebrow: 'Why techcadd',
  title: 'Why choose techcadd',
  lead: 'With multiple institutes across Ludhiana claiming to offer AI and machine learning training, choosing can feel overwhelming. Here is what actually sets this one apart.',
  items: [
    {
      title: 'Ludhiana-Based, Locally Accessible Training Centre',
      text: 'techcadd operates directly out of Ludhiana, so you don’t have to commute to Chandigarh or rely purely on generic online courses with no local support. You get face-to-face mentorship, in-person doubt-clearing, and a learning environment built around the needs of Ludhiana’s student and job-seeker community.'
    },
    {
      title: 'Curriculum Built for Real Industry Demand',
      text: 'This isn’t a copy-paste theoretical syllabus. It’s structured around what recruiters are actually asking for — Python for ML, supervised and unsupervised learning, deep learning with TensorFlow and Keras, NLP fundamentals, and exposure to Generative AI tools. Every module is designed to translate into resume-ready, interview-ready skills.'
    },
    {
      title: 'Hands-On, Project-Based Learning Approach',
      text: 'Rather than passive lectures, the emphasis is on live projects and real datasets from day one. Students build classification models, prediction systems and AI-powered mini-projects they can actually showcase to employers or include in a portfolio.'
    },
    {
      title: 'Experienced Trainers with Industry Exposure',
      text: 'Instructors bring practical, industry-relevant experience rather than academic knowledge alone. Class discussions go beyond textbook definitions into how AI and ML are actually applied in FinTech, healthcare, e-commerce and manufacturing-tech — exactly the context that helps students perform in real interviews.'
    },
    {
      title: 'Beginner-Friendly Yet Career-Focused',
      text: 'The program is deliberately structured so students with zero coding background aren’t left behind, while still going deep enough that graduates and working professionals get real technical depth. That dual approach makes it accessible without being shallow.'
    },
    {
      title: 'Placement Assistance & Career Support',
      text: 'Beyond teaching the technology, techcadd supports students with resume building, interview preparation and placement assistance — bridging the gap between completing a course and landing a job.'
    },
    {
      title: 'Flexible Batch Timings',
      text: 'Students, graduates and working professionals all have different schedules, so weekday, weekend and evening batch options let the course fit around your existing commitments rather than the other way around.'
    },
    {
      title: 'Recognised Certification',
      text: 'On completion, students receive a certificate that validates their training to recruiters — a useful trust signal, particularly when applying to companies outside Punjab who may not know local institutes but do recognise structured, verifiable credentials.'
    },
    {
      title: 'Strong Local Reputation & Track Record',
      text: 'techcadd has built a name among Ludhiana’s student community as a serious, results-oriented training institute rather than another coaching centre. Word-of-mouth referrals and students returning for advanced courses are the clearest signal of consistent quality.'
    }
  ],
  close: 'Local accessibility, a practical curriculum, experienced mentorship and genuine placement support — a strong combination for anyone serious about starting an AI and machine learning career from Ludhiana.'
}

export const ML_NARRATIVE = [CURRICULUM, WHY_THIS_PROGRAMME, WHY_TECHCADD]

export const ML_FAQS = [
  {
    q: 'What is a Machine Learning course in Ludhiana?',
    a: 'A **Machine Learning Course in Ludhiana** teaches students how to use programming, data, statistics, and algorithms to develop systems that identify patterns and make predictions from data. A practical course covers **Python**, data preprocessing, supervised and unsupervised learning, model evaluation, and machine learning projects.'
  },
  {
    q: 'Who can join a Machine Learning course?',
    a: 'Students, graduates, job seekers, working professionals, and aspiring AI or data science learners can consider a Machine Learning course. Beginners can start with foundational programming and data concepts before progressing to algorithms.'
  },
  {
    q: 'Is Machine Learning difficult for beginners?',
    a: 'Machine Learning can seem challenging initially because it combines programming, mathematics, statistics, and problem-solving. A structured course that starts with Python and fundamentals makes the process far more manageable for beginners.'
  },
  {
    q: 'Do I need programming knowledge to learn Machine Learning?',
    a: 'Prior programming experience helps, but beginners can learn the required **Python** fundamentals as part of a structured learning path. Regular coding practice is what builds confidence.'
  },
  {
    q: 'Which programming language is commonly used in Machine Learning?',
    a: '**Python** is one of the most widely used languages for Machine Learning, because of its extensive ecosystem of libraries and tools for data analysis, modelling, and AI development.'
  },
  {
    q: 'What tools can I learn in Machine Learning training?',
    a: 'Depending on the curriculum, students work with Python, **NumPy**, **Pandas**, **Matplotlib**, **Seaborn**, **Scikit-learn**, Jupyter Notebook, Google Colab, SQL, Git/GitHub, and potentially TensorFlow or PyTorch for advanced topics.'
  },
  {
    q: 'What topics are covered in a Machine Learning course?',
    a: 'A comprehensive curriculum includes Python, statistics fundamentals, data preprocessing, exploratory data analysis, supervised learning, unsupervised learning, feature engineering, model evaluation, model improvement, and practical projects. Advanced programs may also introduce Deep Learning, NLP, Computer Vision, and Generative AI.'
  },
  {
    q: 'Is a Machine Learning course useful for college students?',
    a: 'Yes. College students can use Machine Learning training to strengthen practical skills, work on academic projects, prepare for internships, and build a portfolio. It complements formal education in computer science, IT, engineering, mathematics, or related fields.'
  },
  {
    q: 'Can graduates learn Machine Learning for a career change?',
    a: 'Yes. Graduates from technical, analytical, mathematics, statistics, engineering, and related backgrounds can build relevant skills. Learners from non-technical backgrounds may need additional time to develop the programming and mathematical foundations.'
  },
  {
    q: 'What career areas can I explore after learning Machine Learning?',
    a: 'Machine Learning skills support exploration of machine learning development, data science, AI development, data analytics, predictive analytics, and related technology roles. Actual opportunities depend on a learner’s skills, projects, qualifications, experience, and individual employer requirements.'
  },
  {
    q: 'Are projects important when learning Machine Learning?',
    a: 'Yes. Projects let students apply data preprocessing, feature engineering, model training, and evaluation to practical problems, and provide portfolio material that demonstrates hands-on ability.'
  },
  {
    q: 'How do I choose the right Machine Learning institute in Ludhiana?',
    a: 'Compare the curriculum, practical training, project exposure, trainer expertise, tools covered, learning support, class format, course duration, and overall learning objectives. Verify current course details and reviews before enrolling.'
  },
  {
    q: 'Can I learn AI after completing Machine Learning training?',
    a: 'Yes. Machine Learning provides an important foundation for advanced AI. After developing ML fundamentals, learners can progress toward Deep Learning, Natural Language Processing, Computer Vision, Generative AI, and other specialised areas.'
  },
  {
    q: 'Is Machine Learning the same as Artificial Intelligence?',
    a: 'No. Artificial Intelligence is the broader field of creating systems that perform tasks associated with intelligent behaviour. Machine Learning is a major approach within AI that enables systems to learn patterns from data.'
  },
  {
    q: 'How long does it take to learn Machine Learning?',
    a: 'That depends on your existing programming knowledge, the course structure, your practice schedule, and your goals. Beginners generally need consistent practice over time to develop both conceptual understanding and practical coding skill.'
  }
]
