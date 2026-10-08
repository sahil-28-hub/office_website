/* ==================================================================
   Long-form copy for the Artificial Intelligence course page.

   Same construction as the other copy files in this folder — split
   out of ai-data.js because that file seeds thirteen courses and this
   is one course's editorial content.

   The copy is written to rank, so the terms the page targets are
   marked **like this** and RichText renders them inside <strong>. See
   RichText.jsx for the one rule it implements, and the keyword
   emphasis block in course-base.css for how a marked term is set:
   weight plus a light grey, deliberately quiet.

   NO TESTIMONIALS ARE EXPORTED FROM THIS FILE, ON PURPOSE.

   The source document carried twelve reviews under a note from its
   own author: "sample testimonial formats for website/content use.
   They should be published as genuine reviews only after being
   verified with the actual students." Every quote was attributed to
   an unnamed "Student, Ludhiana". They are left out until techcadd
   has feedback it can stand behind. ./tableau-copy.js,
   ./data-analytics-copy.js and ./machine-learning-copy.js carry the
   same note for the same reason.

   The source also asks for career support to be described "without
   guaranteeing employment", and nothing below guarantees any.
================================================================== */

export const AI_OVERVIEW = {
  title: 'The Artificial Intelligence course in Ludhiana that builds real AI skills',
  lead: 'The **Artificial Intelligence Course in Ludhiana** by techcadd is designed for students, graduates, job seekers, working professionals, and entrepreneurs who want to build strong skills in modern AI technologies — Machine Learning, Deep Learning, data science basics, Natural Language Processing, Computer Vision, AI tools, **Python** programming, and Generative AI applications.',
  body: [
    'With Artificial Intelligence rapidly transforming industries like IT, healthcare, finance, marketing, education, and automation, learning AI skills can create high-demand career opportunities in Ludhiana and across India. Many **AI training in Ludhiana** programs now emphasise hands-on projects, real-world datasets, Python-based development, AI model training, and industry certifications, reflecting the growing demand for job-ready AI professionals.',
    'techcadd’s program is structured around practical learning, coding practice, real-time projects, portfolio building, and career support.',
    'The course suits beginners as well as learners who want to upgrade their technical skills and move toward roles such as AI developer, data analyst, machine learning engineer, or AI specialist.'
  ]
}

/* ------------------------------------------------------------------
   Who can do this course — fills the standard "who can join" block
   rather than adding a second one.
------------------------------------------------------------------ */
export const AI_JOINERS = {
  eyebrow: 'Eligibility',
  title: 'Who can do an Artificial Intelligence course in Ludhiana?',
  lead: 'The **Artificial Intelligence Course in Ludhiana** at techcadd is suitable for learners from different educational and professional backgrounds. You do not always need an advanced technical background to begin. With the right learning approach, regular practice, and an interest in technology, students can gradually develop the skills required to work with AI concepts, Python programming, machine learning models, data, and modern AI tools.',
  groups: [
    {
      icon: 'curriculum',
      title: '12th Pass Students',
      text: 'Students who have completed 12th can start learning Artificial Intelligence to build an early foundation in programming and emerging technologies. Learning Python, basic mathematics, data handling, and AI concepts helps students understand how intelligent applications are developed — and an AI course after 12th is also a way to explore technology before committing to a degree or specialization.',
      tag: 'Any stream'
    },
    {
      icon: 'code',
      title: 'College Students',
      text: 'BCA, B.Tech, B.Sc., and MCA students can benefit from practical AI training alongside their academic studies. The course covers concepts that may not get enough practical exposure in regular classroom education — students work on AI projects, practise Python, explore machine learning algorithms, and build a portfolio for future opportunities.',
      tag: 'Alongside your degree'
    },
    {
      icon: 'career',
      title: 'Graduates',
      text: 'Graduates who want to enter the technology sector can develop industry-oriented technical skills here. Learners from computer science, mathematics, statistics, engineering, and related backgrounds may find AI particularly relevant, and graduates from non-technical fields can begin with foundational modules and build their programming and analytical abilities from there.',
      tag: 'Any degree'
    },
    {
      icon: 'mentor',
      title: 'Job Seekers',
      text: 'If you are looking for a career change or want to improve your employability, AI training helps you develop skills relevant to the growing technology ecosystem. Practical knowledge of Python, machine learning, data analysis, Generative AI, and AI applications strengthens a resume and portfolio — and the focus should be on creating projects that demonstrate what you can actually build.',
      tag: 'Portfolio ready'
    },
    {
      icon: 'stack',
      title: 'Working Professionals',
      text: 'Professionals already working in IT, software development, data, digital marketing, business, or other technology-related areas can learn AI to upgrade their existing skill set. AI knowledge helps professionals understand automation, intelligent systems, predictive models, AI-assisted workflows, and modern productivity tools.',
      tag: 'Upskilling'
    },
    {
      icon: 'chart',
      title: 'Entrepreneurs and Business Owners',
      text: 'Business owners can learn AI fundamentals to understand how Artificial Intelligence supports automation, customer service, marketing, data analysis, content creation, and business decision-making. Basic AI knowledge helps entrepreneurs identify practical opportunities for using AI tools within their businesses.',
      tag: 'Run it in-house'
    },
    {
      icon: 'bot',
      title: 'Students Interested in ML and Generative AI',
      text: 'Learners specifically interested in Machine Learning, Deep Learning, **Generative AI**, NLP, or Computer Vision can use the course as a structured pathway into those technologies. Practical assignments and projects turn theoretical understanding into usable technical skill.',
      tag: 'Specialise later'
    },
    {
      icon: 'terminal',
      title: 'Beginners Interested in AI',
      text: 'You can start an **AI training in Ludhiana** course even if you are entirely new to Artificial Intelligence. Beginners should focus first on programming fundamentals, logical thinking, data concepts, and basic AI terminology, then move gradually toward machine learning, deep learning, and Generative AI applications.',
      tag: 'Start from zero'
    }
  ],
  note: 'Overall, the program suits anyone who wants to build practical AI skills, develop projects, strengthen their technical profile, and prepare for technology-oriented career opportunities.'
}

/* ---------------------------------------------------------------- */

const CURRICULUM = {
  id: 'ai-curriculum',
  slot: 'syllabus',
  tone: 'paper',
  eyebrow: 'What you learn',
  title: 'What you will learn in the Artificial Intelligence course',
  lead: 'The **Artificial Intelligence Course in Ludhiana** at techcadd is designed to help students move from basic programming concepts to practical AI applications. The curriculum focuses on building a strong technical foundation while giving learners opportunities to practise through projects and modern AI tools.',
  items: [
    {
      title: 'Python Programming for Artificial Intelligence',
      text: 'Students begin with **Python** fundamentals — variables, data types, operators, conditional statements, loops, functions, lists, dictionaries, tuples, sets, and file handling — plus object-oriented programming concepts for writing structured, reusable code. Python matters because so many AI and Machine Learning libraries are built around it.'
    },
    {
      title: 'Mathematics and Statistics for AI',
      text: 'AI involves working with data, patterns, probabilities, and mathematical relationships. Students learn the practical mathematics required — basic statistics, probability, vectors, matrices, averages, variance, and correlation — with the focus on how these support machine learning rather than on theory for its own sake.'
    },
    {
      title: 'Data Handling and Analysis',
      text: 'Before training a model, data needs to be collected, cleaned, organised, and analysed. Students learn to work with datasets and handle missing values, duplicate records, inconsistent information, and basic preprocessing. **NumPy** and **Pandas** help work efficiently with structured datasets, and visualization libraries expose trends and patterns.'
    },
    {
      title: 'Machine Learning',
      text: 'Machine Learning is a major component of AI training. Students learn the difference between supervised and unsupervised learning, and the algorithms used for classification, regression, clustering, and prediction. Practical exercises include creating models, preparing datasets, training algorithms, testing results, and evaluating performance.'
    },
    {
      title: 'Deep Learning',
      text: 'Students explore the fundamentals of Deep Learning and neural networks — neurons, layers, activation functions, training concepts, loss functions, and model evaluation — and how deep learning is applied to image recognition, speech processing, recommendation systems, and intelligent applications.'
    },
    {
      title: 'Natural Language Processing',
      text: 'NLP focuses on enabling computers to work with human language. Students learn text preprocessing, tokenization, sentiment analysis, text classification, and basic language-model applications — the concepts behind chatbots, document analysis, customer-support systems, and automated text processing.'
    },
    {
      title: 'Computer Vision',
      text: 'Computer Vision enables computers to interpret visual information. Students explore image processing, image classification, object-detection concepts, and practical applications, with projects that involve working with images and understanding how models identify or classify visual information.'
    },
    {
      title: 'Generative AI',
      text: 'Modern AI training increasingly includes **Generative AI**, where systems generate text, images, code, and other content. Students learn the fundamentals of generative models, AI-assisted workflows, prompt engineering, and the responsible use of AI tools.'
    },
    {
      title: 'AI Tools and Technologies',
      text: 'Depending on the module, students gain practical exposure to Python, **NumPy**, **Pandas**, Matplotlib, **Scikit-learn**, **TensorFlow**, **Keras**, **OpenCV**, Jupyter Notebook, Google Colab, Generative AI tools, and prompt engineering tools — connecting programming concepts with practical AI development.'
    },
    {
      title: 'Real-World AI Projects',
      text: 'Project-based learning brings the process together. Students work on projects involving prediction, classification, data analysis, NLP, computer vision, or Generative AI — a machine learning prediction model, a sentiment-analysis application, an image-classification project, or an AI-powered application. Such projects demonstrate practical ability and strengthen a portfolio.'
    }
  ],
  tools: {
    label: 'Tools you’ll work with',
    items: [
      'Python',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Scikit-learn',
      'TensorFlow',
      'Keras',
      'OpenCV',
      'Jupyter Notebook',
      'Google Colab',
      'Generative AI tools',
      'Prompt engineering'
    ]
  },
  close: 'The objective is practical knowledge rather than memorised concepts. Regular coding practice, assignments, projects, problem-solving, and portfolio development prepare learners for further study, internships, entry-level technology roles, and continuous professional development — combining Python, data, Machine Learning, Deep Learning, NLP, Computer Vision and Generative AI into a broader understanding of how AI is actually applied.'
}

/* ---------------------------------------------------------------- */

const WHY_THIS_PROGRAMME = {
  id: 'ai-why-programme',
  slot: 'careers',
  tone: 'tint',
  eyebrow: 'Why this programme',
  title: 'Why choose an Artificial Intelligence course in Ludhiana?',
  lead: 'Artificial Intelligence is becoming an important part of modern technology, business, automation, and digital transformation. Choosing an **Artificial Intelligence Course in Ludhiana** helps students and professionals develop practical knowledge of technologies increasingly used across industries — a structured program gives a clear pathway from fundamentals to practical applications rather than theory alone.',
  items: [
    {
      title: 'Build Future-Ready Technical Skills',
      text: 'AI is a rapidly developing field combining programming, data, algorithms, automation, and intelligent systems. Learning it helps students understand how machines analyse information, identify patterns, generate content, make predictions, and support decision-making — through Python, Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI.'
    },
    {
      title: 'Learn Python for AI Development',
      text: '**Python** is widely used in AI and Machine Learning because of its extensive libraries and beginner-friendly syntax. Students learn programming fundamentals before progressing toward data handling, model development, and AI applications — a strong Python foundation makes practical AI projects far easier to understand.'
    },
    {
      title: 'Gain Practical Learning Experience',
      text: 'A major reason to choose professional **AI training in Ludhiana** is the chance to practise concepts through projects and assignments. Practical learning shows how AI concepts apply outside the classroom, and projects involving datasets, prediction, classification, text processing, image analysis, or Generative AI become valuable portfolio additions.'
    },
    {
      title: 'Explore Multiple AI Technologies',
      text: 'Artificial Intelligence is not one technology. A comprehensive program introduces Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Generative AI — and exploring them lets learners find where their interest lies and identify possible career directions.'
    },
    {
      title: 'Develop a Strong Portfolio',
      text: 'A certificate alone may not demonstrate what a learner can do; projects provide the evidence. During training students create work demonstrating programming ability, data processing, model implementation, and problem-solving. A well-organised portfolio helps when applying for internships, entry-level opportunities, freelance projects, or further technical education.'
    },
    {
      title: 'Prepare for AI-Related Career Opportunities',
      text: 'Depending on education, technical ability, and specialization, students may explore roles such as AI Developer, Machine Learning Engineer, Junior Data Analyst, AI Specialist, Python Developer, or Generative AI professional. Career outcomes depend on individual skills, experience, projects, and continuous learning.'
    },
    {
      title: 'Learn Modern AI and Generative AI Tools',
      text: 'Modern AI learning involves more than traditional machine learning. Generative AI tools are used for text, images, automation, research, coding assistance, and productivity — understanding them keeps students familiar with current developments and how AI applies to real workflows.'
    },
    {
      title: 'Suitable for Students and Career Changers',
      text: 'The program is useful for 12th-pass students, graduates, college students, job seekers, working professionals, and technology enthusiasts. Beginners start with foundational concepts, while learners with programming experience can move faster into advanced topics.'
    },
    {
      title: 'A Student-Oriented Learning Environment',
      text: 'techcadd is a practical choice for students looking for AI training in Ludhiana with a focus on skill development. A student-oriented environment, practical assignments, project-based learning, coding practice, and career guidance help learners build confidence as they progress through the course.'
    }
  ],
  close: 'If your goal is to understand Artificial Intelligence, develop practical technical skills, build projects, and prepare for the evolving technology industry, an **Artificial Intelligence Course in Ludhiana** provides a structured starting point for that learning journey.'
}

export const AI_NARRATIVE = [CURRICULUM, WHY_THIS_PROGRAMME]

/* ------------------------------------------------------------------
   The page's own questions. The seed sets `ownFaqs`, so these replace
   the standard set the factory writes for every other course.

   Each answer begins with a direct response before the supporting
   detail, which is what an answer engine needs to quote it directly.
------------------------------------------------------------------ */
export const AI_FAQS = [
  {
    q: 'What is an Artificial Intelligence course in Ludhiana?',
    a: 'An **Artificial Intelligence Course in Ludhiana** teaches students how AI systems work and how to build practical AI applications. Depending on the curriculum, topics include **Python**, Machine Learning, Deep Learning, data analysis, NLP, Computer Vision, and Generative AI.'
  },
  {
    q: 'Who can join an Artificial Intelligence course at techcadd?',
    a: '12th-pass students, college students, graduates, job seekers, working professionals, and technology enthusiasts can consider the course. Beginners can start with foundational programming and AI concepts.'
  },
  {
    q: 'Is Artificial Intelligence difficult for beginners?',
    a: 'AI can seem complex initially, but beginners can learn it step by step. Starting with Python, basic mathematics, data concepts, and simple Machine Learning projects makes the process considerably easier.'
  },
  {
    q: 'Do I need programming knowledge before joining an AI course?',
    a: 'Previous programming experience helps but is not always necessary. Beginners can first learn **Python** fundamentals and then progress toward Machine Learning and other AI technologies.'
  },
  {
    q: 'What programming language is used for Artificial Intelligence?',
    a: '**Python** is one of the most commonly used languages for AI and Machine Learning. Its extensive libraries and relatively simple syntax make it suitable for beginners and experienced developers alike.'
  },
  {
    q: 'What topics are covered in an AI course?',
    a: 'An AI training program covers Python, data handling, statistics, Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, AI tools, model evaluation, and practical projects.'
  },
  {
    q: 'Will I get practical project experience?',
    a: 'Yes. A practical AI program includes assignments, coding exercises, datasets, and real-world projects. Project work helps students apply concepts and build a portfolio demonstrating their skills.'
  },
  {
    q: 'What AI tools can students learn?',
    a: 'Depending on the curriculum, students work with Python, **NumPy**, **Pandas**, **Scikit-learn**, **TensorFlow**, **Keras**, **OpenCV**, Jupyter Notebook, Google Colab, and selected Generative AI tools.'
  },
  {
    q: 'Can I learn Generative AI along with Artificial Intelligence?',
    a: 'Yes. **Generative AI** can be included as part of a broader AI learning pathway. Students explore prompt engineering, AI-assisted content generation, AI applications, and the responsible use of Generative AI tools.'
  },
  {
    q: 'What career options are available after an AI course?',
    a: 'Depending on education, technical skills, projects, and experience, learners can explore roles such as AI Developer, Machine Learning Engineer, Python Developer, Junior Data Analyst, AI Specialist, or Generative AI professional. Career outcomes vary from person to person.'
  },
  {
    q: 'Is an AI course useful for students in Ludhiana?',
    a: 'Yes. Students in Ludhiana can use AI training to develop technical skills alongside their academic education. Practical projects and programming experience help them prepare for internships, further studies, and technology-oriented career opportunities.'
  },
  {
    q: 'How can I choose the best AI course in Ludhiana?',
    a: 'Compare the curriculum, practical training, trainer experience, project work, tools covered, learning support, course duration, certification, and career guidance before enrolling. Choose a program that matches your current skill level and career goals.'
  },
  {
    q: 'Does techcadd provide Artificial Intelligence training in Ludhiana?',
    a: 'Yes. techcadd offers technology-focused training programs designed around practical skill development. Contact the Ludhiana centre directly to confirm the current AI curriculum, batch schedule, duration, fees, and available training mode.'
  },
  {
    q: 'Can working professionals learn Artificial Intelligence?',
    a: 'Yes. Working professionals can learn AI to upgrade their technical knowledge, understand automation and data-driven applications, or explore a transition into AI-related roles. A structured course provides a learning path alongside professional responsibilities.'
  },
  {
    q: 'What is the difference between AI and Machine Learning?',
    a: 'Artificial Intelligence is the broader field of creating systems that perform tasks associated with intelligent behaviour. Machine Learning is a major approach within AI that enables systems to learn patterns from data — so every ML system is AI, but not all AI is ML.'
  }
]
