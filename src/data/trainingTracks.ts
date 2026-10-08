/* ==================================================================
   Internship & Training — one page per domain, and one page per
   domain × duration.

     /training/<domain>              the domain, with three duration cards
     /training/<domain>/<duration>   that domain at that length

   Twelve domains × three durations is thirty-six plans, so they are
   not written out one by one. Each domain supplies its own six
   `stages` (what is taught, in order), tools, projects and roles; each
   duration in FORMATS says how its days are spent and which stages
   land where. buildPlan() puts the two together.

   The duration shapes follow the existing format pages
   (data/courses/training.ts and the *-training-copy.ts files):

     45 days    days 1–3 setup, 4–25 taught, 26–38 project, 39–45 report & viva
     6 weeks    one stage a week for four weeks, a capstone week, a report week
     6 months   four months of training, a live project, a placement month

   House rules, as elsewhere: no placement percentages, salaries or
   package figures, and the campus confirms fees and batch timings.
================================================================== */

export const TRAINING_BASE = '/training'
export const trainingPath = (domain: string, duration?: string) =>
  duration ? `${TRAINING_BASE}/${domain}/${duration}` : `${TRAINING_BASE}/${domain}`

export type Stage = { title: string; topics: string[] }

export type TrainingDomain = {
  slug: string
  name: string
  icon: string
  tagline: string
  lead: string
  local: string
  stages: [Stage, Stage, Stage, Stage, Stage, Stage]
  tools: string[]
  projects: { short: string[]; long: string[] }
  roles: string[]
  eligibility: string
}

/* ------------------------------------------------------------------
   The twelve domains, in the order the menu shows them.
------------------------------------------------------------------ */
export const TRAINING_DOMAINS: TrainingDomain[] = [
  {
    slug: 'cloud-computing',
    name: 'Cloud Computing',
    icon: 'cloud',
    tagline: 'Deploy, scale and secure applications on AWS and Azure.',
    lead: 'Learn how modern applications are hosted — Linux servers, networking, AWS and Azure services, containers and automated deployments — on real cloud accounts rather than slides.',
    local:
      'Ludhiana’s exporters, e-commerce sellers and software companies are moving their systems to the cloud, and IT teams in Ludhiana, Mohali and Chandigarh hire people who can run them. Cloud is one of the fastest routes from a B.Tech, BCA or MCA to an infrastructure role.',
    stages: [
      { title: 'Linux & networking basics', topics: ['Linux commands & users', 'File systems & permissions', 'IP, DNS & ports', 'SSH & remote servers'] },
      { title: 'Cloud fundamentals & AWS core', topics: ['Cloud models: IaaS, PaaS, SaaS', 'EC2 virtual machines', 'S3 storage', 'IAM users & roles'] },
      { title: 'Networking & databases in the cloud', topics: ['VPC, subnets & security groups', 'Load balancers', 'RDS managed databases', 'Microsoft Azure equivalents'] },
      { title: 'Containers & Docker', topics: ['Docker images & containers', 'Docker Compose', 'Container registries', 'Intro to Kubernetes'] },
      { title: 'Automation & DevOps', topics: ['CI/CD pipelines', 'Infrastructure as code basics', 'Auto scaling', 'Monitoring & alerts'] },
      { title: 'Security, cost & deployment', topics: ['Cloud security best practices', 'Backups & disaster recovery', 'Cost monitoring', 'Production deployment'] }
    ],
    tools: ['AWS', 'Microsoft Azure', 'Linux', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform basics'],
    projects: {
      short: ['Host a website on EC2 with a custom domain and HTTPS', 'Static site on S3 with a CDN in front of it'],
      long: ['Three-tier web app on AWS with a load balancer, RDS and auto scaling', 'Dockerised application deployed through a CI/CD pipeline with monitoring']
    },
    roles: ['Cloud support associate', 'AWS / Azure administrator', 'Junior DevOps engineer', 'System administrator'],
    eligibility: 'B.Tech, BCA, MCA, B.Sc IT and diploma students, and working IT staff. Basic computer knowledge is enough to start.'
  },
  {
    slug: 'flutter-app-development',
    name: 'Flutter App Development',
    icon: 'phone',
    tagline: 'Build Android and iOS apps from one codebase.',
    lead: 'Learn Dart and Flutter to build cross-platform mobile apps — layouts, navigation, APIs, Firebase and publishing — and finish with an app you can install on your own phone.',
    local:
      'Shops, schools, clinics, gyms and delivery businesses in Ludhiana increasingly want their own app, and Flutter lets one developer build for both Android and iPhone. It is a practical skill for a job at a software company or for freelance client work.',
    stages: [
      { title: 'Dart programming', topics: ['Variables, types & functions', 'Classes & objects', 'Lists & maps', 'Async & futures'] },
      { title: 'Flutter widgets & layouts', topics: ['Stateless & stateful widgets', 'Rows, columns & stacks', 'Material design', 'Responsive layouts'] },
      { title: 'Navigation, forms & state', topics: ['Routes & navigation', 'Forms & validation', 'State management with Provider', 'Local storage'] },
      { title: 'APIs & Firebase', topics: ['REST APIs & JSON', 'Firebase authentication', 'Cloud Firestore', 'Push notifications'] },
      { title: 'Advanced features', topics: ['Maps & location', 'Camera & images', 'Payments integration basics', 'Animations'] },
      { title: 'Testing & publishing', topics: ['Debugging & testing', 'App icons & splash screens', 'Building APK / AAB', 'Play Store publishing'] }
    ],
    tools: ['Dart', 'Flutter', 'Android Studio', 'VS Code', 'Firebase', 'Postman', 'Git'],
    projects: {
      short: ['To-do and notes app with local storage', 'Weather app using a live API'],
      long: ['E-commerce app with login, cart and Firebase backend', 'Booking app for a local business with notifications']
    },
    roles: ['Flutter developer', 'Mobile app developer', 'Junior Android developer', 'Freelance app developer'],
    eligibility: 'B.Tech, BCA, MCA, B.Sc IT and diploma students. Some programming knowledge helps but is not required.'
  },
  {
    slug: 'mern-stack',
    name: 'MERN Stack',
    icon: 'code',
    tagline: 'MongoDB, Express, React and Node.js — one language, full stack.',
    lead: 'Build complete web applications in JavaScript — React on the front end, Node.js and Express on the server, MongoDB for data — and deploy them live.',
    local:
      'MERN is one of the most requested stacks in job listings from software companies in Ludhiana, Mohali and Chandigarh, and many of them hire trainees straight from projects. One language for the whole application makes it a strong first full-stack track.',
    stages: [
      { title: 'HTML, CSS & JavaScript', topics: ['Semantic HTML & CSS', 'Flexbox & grid', 'Modern JavaScript (ES6+)', 'DOM & events'] },
      { title: 'React fundamentals', topics: ['Components & JSX', 'Props & state', 'Hooks', 'React Router'] },
      { title: 'Node.js & Express', topics: ['Node.js runtime', 'Express routing', 'Middleware', 'REST API design'] },
      { title: 'MongoDB & data', topics: ['MongoDB & Mongoose', 'Schemas & relations', 'CRUD operations', 'Aggregation basics'] },
      { title: 'Authentication & integration', topics: ['JWT authentication', 'Connecting React to APIs', 'File uploads', 'Payments basics'] },
      { title: 'Deployment & best practices', topics: ['Environment variables', 'Deploying front end & API', 'Git workflow', 'Performance & security'] }
    ],
    tools: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Git & GitHub', 'Postman', 'VS Code'],
    projects: {
      short: ['Task manager with a React front end and REST API', 'Blog with login and comments'],
      long: ['E-commerce store with cart, orders, admin panel and payments', 'Job portal or social platform with authentication and file uploads']
    },
    roles: ['MERN stack developer', 'React developer', 'Node.js developer', 'Full-stack trainee'],
    eligibility: 'B.Tech, BCA, MCA, B.Sc IT and diploma students. No prior coding needed for the longer durations.'
  },
  {
    slug: 'agentic-ai',
    name: 'Agentic AI',
    icon: 'bot',
    tagline: 'Build AI agents that plan, use tools and get work done.',
    lead: 'Go beyond chatbots — build AI agents in Python that call APIs, search documents, use tools and complete multi-step tasks, with the frameworks companies are adopting now.',
    local:
      'Businesses are starting to automate customer support, lead handling and back-office work with AI agents, and software companies in the region are hiring people who can build them. It is a new field, so trained people are still scarce.',
    stages: [
      { title: 'Python for AI', topics: ['Python essentials', 'Working with APIs', 'JSON & data handling', 'Virtual environments'] },
      { title: 'Large language models', topics: ['How LLMs work', 'Prompt engineering', 'Using LLM APIs', 'Tokens, cost & limits'] },
      { title: 'Retrieval & memory', topics: ['Embeddings', 'Vector databases', 'RAG pipelines', 'Conversation memory'] },
      { title: 'Agents & tool use', topics: ['Function / tool calling', 'Planning & reasoning loops', 'Agent frameworks (LangChain, LangGraph)', 'Multi-agent workflows'] },
      { title: 'Automation & integration', topics: ['Connecting to email, sheets & CRMs', 'Workflow automation', 'Guardrails & evaluation', 'Human-in-the-loop'] },
      { title: 'Deployment', topics: ['Building an API for the agent', 'Simple web interface', 'Logging & monitoring', 'Cost control'] }
    ],
    tools: ['Python', 'LLM APIs', 'LangChain', 'LangGraph', 'Vector databases', 'FastAPI', 'Streamlit'],
    projects: {
      short: ['Document Q&A assistant using RAG', 'AI agent that researches a topic and writes a summary'],
      long: ['Customer-support agent connected to a knowledge base and ticketing', 'Multi-agent workflow that automates a real business process']
    },
    roles: ['AI engineer (trainee)', 'Generative AI developer', 'AI automation specialist', 'Python developer'],
    eligibility: 'B.Tech, BCA, MCA and B.Sc students. Basic Python helps; the 6-month programme starts from Python itself.'
  },
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    icon: 'megaphone',
    tagline: 'SEO, social media, ads and analytics — on live campaigns.',
    lead: 'Learn to grow a business online — SEO, social media, Meta and Google Ads, content, email and analytics — practising on real pages and campaigns.',
    local:
      'Ludhiana’s hosiery brands, garment exporters, retailers, restaurants and coaching centres all compete online now, and local agencies and in-house teams need people who can run campaigns. It also suits students who want to freelance or market their family business.',
    stages: [
      { title: 'Marketing & website basics', topics: ['Digital marketing landscape', 'Buyer personas', 'WordPress website basics', 'Landing pages'] },
      { title: 'Search engine optimisation', topics: ['Keyword research', 'On-page SEO', 'Local SEO & Google Business Profile', 'Link building'] },
      { title: 'Social media marketing', topics: ['Content planning', 'Instagram & Facebook', 'LinkedIn & YouTube', 'Reels & creatives with Canva'] },
      { title: 'Paid advertising', topics: ['Meta Ads campaigns', 'Google Search Ads', 'Audiences & budgets', 'Lead generation'] },
      { title: 'Email, content & automation', topics: ['Email marketing', 'Content writing', 'WhatsApp marketing', 'Marketing automation'] },
      { title: 'Analytics & reporting', topics: ['Google Analytics 4', 'Search Console', 'Conversion tracking', 'Client reports'] }
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'Google Analytics 4', 'Search Console', 'WordPress', 'Canva', 'Mailchimp'],
    projects: {
      short: ['SEO audit and keyword plan for a local business', 'One-month social media calendar with creatives'],
      long: ['Live Meta and Google Ads campaign with tracking and a results report', 'Full digital marketing plan executed for a real brand']
    },
    roles: ['Digital marketing executive', 'SEO executive', 'Social media manager', 'Performance marketing trainee'],
    eligibility: 'Students from any stream — B.Com, BBA, BA, B.Tech, BCA — business owners and working professionals.'
  },
  {
    slug: 'data-analytics',
    name: 'Data Analytics',
    icon: 'chart',
    tagline: 'Excel, SQL, Power BI and Python for business decisions.',
    lead: 'Turn raw business data into dashboards and decisions — Advanced Excel, SQL, Power BI and Python — working on sales, inventory and finance datasets.',
    local:
      'Ludhiana’s manufacturers, distributors and retail chains run on sales, stock and production data, and analysts who can build a clear dashboard are in steady demand. Analytics is open to commerce and management graduates as well as engineers.',
    stages: [
      { title: 'Advanced Excel', topics: ['Formulas & lookups', 'Pivot tables', 'Charts', 'Data cleaning'] },
      { title: 'Statistics for analysis', topics: ['Descriptive statistics', 'Distributions', 'Correlation', 'Hypothesis basics'] },
      { title: 'SQL', topics: ['SELECT, WHERE & JOINs', 'GROUP BY & aggregates', 'Subqueries', 'Views'] },
      { title: 'Power BI', topics: ['Data import & Power Query', 'Data modelling', 'DAX measures', 'Interactive dashboards'] },
      { title: 'Python for analytics', topics: ['Pandas', 'NumPy', 'Matplotlib & Seaborn', 'Exploratory analysis'] },
      { title: 'Business reporting', topics: ['KPIs & metrics', 'Storytelling with data', 'Tableau basics', 'Presenting insights'] }
    ],
    tools: ['Excel', 'SQL', 'Power BI', 'Python', 'Pandas', 'Tableau', 'Jupyter'],
    projects: {
      short: ['Sales dashboard in Excel and Power BI', 'SQL analysis of a retail dataset'],
      long: ['End-to-end analytics project: data cleaning, SQL, Python and a Power BI report', 'Inventory and production analysis for a manufacturing dataset']
    },
    roles: ['Data analyst', 'MIS executive', 'Business analyst (trainee)', 'Power BI developer'],
    eligibility: 'B.Tech, BCA, MCA, B.Com, BBA, MBA and B.Sc students, and working professionals. No coding needed to start.'
  },
  {
    slug: 'data-science',
    name: 'Data Science',
    icon: 'chart',
    tagline: 'Python, statistics and machine learning on real datasets.',
    lead: 'Learn the complete data science workflow — Python, statistics, data wrangling, visualisation and machine learning models — and present results the way companies expect.',
    local:
      'Companies across Punjab and the tricity are building data teams, and data science is one of the strongest long-term career tracks for engineering and science graduates in Ludhiana who want to work in technology.',
    stages: [
      { title: 'Python programming', topics: ['Python basics', 'Functions & modules', 'NumPy', 'Jupyter notebooks'] },
      { title: 'Data wrangling', topics: ['Pandas dataframes', 'Cleaning & missing values', 'Merging & reshaping', 'Feature engineering'] },
      { title: 'Statistics & visualisation', topics: ['Probability & distributions', 'Hypothesis testing', 'Matplotlib & Seaborn', 'Exploratory data analysis'] },
      { title: 'Machine learning', topics: ['Regression', 'Classification', 'Clustering', 'Model evaluation'] },
      { title: 'Advanced models', topics: ['Ensemble methods', 'Intro to deep learning', 'NLP basics', 'Model tuning'] },
      { title: 'SQL & deployment', topics: ['SQL for data science', 'Saving & serving models', 'Streamlit apps', 'Presenting results'] }
    ],
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'SQL', 'Jupyter', 'Streamlit'],
    projects: {
      short: ['Exploratory analysis of a public dataset', 'House-price prediction model'],
      long: ['Customer churn prediction with a deployed Streamlit app', 'Sales forecasting model for a retail business']
    },
    roles: ['Data scientist (trainee)', 'Machine learning engineer (trainee)', 'Data analyst', 'Python developer'],
    eligibility: 'B.Tech, BCA, MCA, B.Sc and M.Sc students. Comfort with basic maths helps.'
  },
  {
    slug: 'cyber-security',
    name: 'Cyber Security',
    icon: 'shield',
    tagline: 'Networks, ethical hacking and defence in a hands-on lab.',
    lead: 'Learn how systems are attacked and defended — networking, Linux, ethical hacking, web security and security monitoring — practising in a safe lab environment.',
    local:
      'Banks, hospitals, exporters and software firms in and around Ludhiana are investing in security as attacks on small businesses rise. Security analysts and network security staff are needed in-house and at service providers in the region.',
    stages: [
      { title: 'Networking fundamentals', topics: ['OSI & TCP/IP', 'IP addressing & subnetting', 'Common protocols', 'Network devices'] },
      { title: 'Linux & security basics', topics: ['Linux for security', 'Users & permissions', 'Security principles (CIA)', 'Cryptography basics'] },
      { title: 'Ethical hacking', topics: ['Reconnaissance & scanning', 'Nmap', 'Vulnerability assessment', 'Exploitation basics with Metasploit'] },
      { title: 'Web application security', topics: ['OWASP Top 10', 'SQL injection & XSS', 'Burp Suite', 'Secure coding basics'] },
      { title: 'Defence & monitoring', topics: ['Firewalls & IDS', 'SIEM & log analysis', 'SOC operations', 'Incident response'] },
      { title: 'Reporting & compliance', topics: ['Penetration test reports', 'Security policies', 'Cyber laws in India', 'Certification guidance'] }
    ],
    tools: ['Kali Linux', 'Nmap', 'Wireshark', 'Burp Suite', 'Metasploit', 'Splunk basics'],
    projects: {
      short: ['Network scan and vulnerability report for a lab network', 'Web app security test against OWASP Top 10'],
      long: ['Full penetration test of a lab environment with a professional report', 'SOC simulation: detect and respond to attacks with a SIEM']
    },
    roles: ['Security analyst (trainee)', 'SOC analyst', 'Network security associate', 'VAPT trainee'],
    eligibility: 'B.Tech, BCA, MCA, B.Sc IT and diploma students. Basic computer and networking knowledge helps.'
  },
  {
    slug: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    icon: 'bot',
    tagline: 'Machine learning, deep learning and generative AI.',
    lead: 'Learn how AI systems are built — Python, machine learning, neural networks, computer vision, NLP and generative AI — and build models that solve real problems.',
    local:
      'AI is being added to products and processes across every industry, and companies in Mohali, Chandigarh and beyond hire graduates who can build and apply models. An AI project is also one of the strongest additions to a final-year resume.',
    stages: [
      { title: 'Python & maths for AI', topics: ['Python & NumPy', 'Linear algebra basics', 'Probability basics', 'Data handling with Pandas'] },
      { title: 'Machine learning', topics: ['Supervised learning', 'Unsupervised learning', 'Model evaluation', 'Scikit-learn'] },
      { title: 'Deep learning', topics: ['Neural networks', 'TensorFlow / Keras', 'Training & tuning', 'Overfitting & regularisation'] },
      { title: 'Computer vision', topics: ['Image processing with OpenCV', 'CNNs', 'Object detection', 'Transfer learning'] },
      { title: 'NLP & generative AI', topics: ['Text processing', 'Transformers', 'LLMs & prompt engineering', 'Building with AI APIs'] },
      { title: 'Deployment & ethics', topics: ['Serving models with Flask/FastAPI', 'Streamlit apps', 'Responsible AI', 'Project presentation'] }
    ],
    tools: ['Python', 'Scikit-learn', 'TensorFlow', 'Keras', 'OpenCV', 'Hugging Face', 'Jupyter'],
    projects: {
      short: ['Image classifier with transfer learning', 'Sentiment analysis of product reviews'],
      long: ['Face or object detection system deployed as a web app', 'AI chatbot built on an LLM with your own data']
    },
    roles: ['AI / ML engineer (trainee)', 'Computer vision developer', 'NLP developer', 'Python developer'],
    eligibility: 'B.Tech, BCA, MCA, B.Sc and M.Sc students. Basic programming helps.'
  },
  {
    slug: 'full-stack-development',
    name: 'Full Stack Development',
    icon: 'code',
    tagline: 'Front end, back end and database — build complete web apps.',
    lead: 'Learn to build and deploy complete web applications — HTML, CSS, JavaScript and React on the front end, a back-end framework with a database, and deployment.',
    local:
      'Software companies and digital agencies in Ludhiana and the tricity hire full-stack developers and trainees year-round, and local businesses need websites and web apps built. It is the most versatile programming career track.',
    stages: [
      { title: 'Web foundations', topics: ['HTML5 & CSS3', 'Responsive design', 'Bootstrap / Tailwind', 'Git & GitHub'] },
      { title: 'JavaScript', topics: ['Core JavaScript', 'DOM manipulation', 'Async & fetch', 'ES6+ features'] },
      { title: 'Front-end framework', topics: ['React components', 'State & hooks', 'Routing', 'Forms & validation'] },
      { title: 'Back end', topics: ['Node.js & Express or Python/Django', 'REST APIs', 'Authentication', 'MVC structure'] },
      { title: 'Databases', topics: ['SQL with MySQL', 'MongoDB', 'Data modelling', 'ORMs'] },
      { title: 'Deployment & DevOps basics', topics: ['Hosting & domains', 'Environment config', 'CI/CD basics', 'Performance & security'] }
    ],
    tools: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Django', 'MySQL', 'MongoDB', 'Git'],
    projects: {
      short: ['Responsive portfolio website', 'CRUD web app with a database'],
      long: ['Complete e-commerce or booking platform with admin panel', 'SaaS-style dashboard app with authentication and deployment']
    },
    roles: ['Full-stack developer', 'Front-end developer', 'Back-end developer', 'Web developer'],
    eligibility: 'B.Tech, BCA, MCA, B.Sc IT and diploma students. No prior coding needed for the longer durations.'
  },
  {
    slug: 'basic-skills',
    name: 'Basic Skill and Programs',
    icon: 'monitor',
    tagline: 'Computer, office, typing and Tally skills for any job.',
    lead: 'Build the everyday computer skills employers expect — Windows, MS Office, Advanced Excel, typing, internet, Tally with GST and basic design — with practical office tasks.',
    local:
      'Offices, shops, showrooms, schools and factories across Ludhiana need staff who are confident on a computer. This training suits students from any stream who need a training certificate, and anyone preparing for an office job.',
    stages: [
      { title: 'Computer fundamentals', topics: ['Hardware & software', 'Windows & file management', 'Internet & email', 'Online safety'] },
      { title: 'Typing & MS Word', topics: ['Touch typing', 'Letters & reports', 'Tables & formatting', 'Mail merge'] },
      { title: 'MS Excel', topics: ['Formulas & functions', 'Sorting & filtering', 'Charts', 'Registers & salary sheets'] },
      { title: 'Advanced Excel & PowerPoint', topics: ['Lookups & pivot tables', 'Dashboards', 'Presentations', 'Google Workspace'] },
      { title: 'Tally Prime with GST', topics: ['Ledgers & vouchers', 'Inventory', 'GST invoicing', 'Reports'] },
      { title: 'Design & job readiness', topics: ['Canva basics', 'Data entry practice', 'Resume in Word', 'Interview basics'] }
    ],
    tools: ['Windows', 'MS Word', 'MS Excel', 'MS PowerPoint', 'Tally Prime', 'Google Workspace', 'Canva'],
    projects: {
      short: ['Office document set: letter, invoice and report', 'Stock and salary register in Excel'],
      long: ['Complete accounts of a sample business in Tally with GST', 'Excel dashboard and presentation for a small business']
    },
    roles: ['Office assistant', 'Data entry operator', 'Billing / Tally operator', 'Computer operator'],
    eligibility: 'Students from any stream, school leavers, job seekers and working adults. No prior knowledge needed.'
  },
  {
    slug: 'civil-mechanical',
    name: 'Civil/Mechanical',
    icon: 'cube',
    tagline: 'AutoCAD, Revit, SOLIDWORKS and CAM for engineering students.',
    lead: 'Industrial training in design and drafting for civil and mechanical students — AutoCAD plus Revit, STAAD.Pro and SketchUp for civil, or SOLIDWORKS, CATIA and CNC for mechanical.',
    local:
      'Ludhiana is Punjab’s industrial centre — cycle parts, auto components, machine tools and tractor parts — and it keeps building. Manufacturers, tool rooms, builders and consultants here need trainees who can draw and model accurately.',
    stages: [
      { title: 'Engineering drawing & AutoCAD 2D', topics: ['Drawing standards', 'AutoCAD commands', 'Layers & dimensions', 'Plotting'] },
      { title: 'AutoCAD 3D & detailing', topics: ['3D modelling', 'Sections & details', 'Blocks & templates', 'Working drawings'] },
      { title: 'Branch software: Revit or SOLIDWORKS', topics: ['Civil: Revit building model', 'Mechanical: SOLIDWORKS parts', 'Assemblies / sheets', 'Drawings from the model'] },
      { title: 'Analysis & advanced modelling', topics: ['Civil: STAAD.Pro analysis', 'Mechanical: CATIA / Creo surfacing', 'Design calculations', 'Design checks'] },
      { title: 'Visualisation or manufacturing', topics: ['Civil: SketchUp & V-Ray renders', 'Mechanical: Mastercam toolpaths', 'CNC programming basics', 'Presentation'] },
      { title: 'Project drawing set', topics: ['Complete drawing set', 'Quantities / BOM', 'Portfolio', 'Industry practices'] }
    ],
    tools: ['AutoCAD', 'Revit', 'STAAD.Pro', 'SketchUp', 'SOLIDWORKS', 'CATIA', 'Mastercam'],
    projects: {
      short: ['Residential building plan, elevation and section in AutoCAD', 'Machine part drawings and 3D model'],
      long: ['Civil: complete building in Revit with STAAD.Pro analysis and renders', 'Mechanical: full assembly in SOLIDWORKS with drawings, BOM and CNC program']
    },
    roles: ['CAD draughtsperson', 'Design engineer (trainee)', 'Revit / BIM modeller', 'CNC programmer'],
    eligibility: 'B.Tech, diploma and ITI students in civil, mechanical and related branches, and B.Arch students.'
  }
]

/* ------------------------------------------------------------------
   The three durations.
------------------------------------------------------------------ */
export type FormatKey = '45-days' | '6-weeks' | '6-months'

export type TrainingFormat = {
  key: FormatKey
  label: string
  short: string
  length: string
  badge: string
  bestFor: string
  summary: string
  overview: string
  highlights: string[]
  deliverables: string[]
}

export const FORMATS: TrainingFormat[] = [
  {
    key: '45-days',
    label: '45 Days Training',
    short: '45 Days',
    length: '45 days',
    badge: 'Summer / winter',
    bestFor: 'Students whose university asks for 45 days of industrial training.',
    summary: 'Teaching front-loaded into 25 days, then 13 full days on your own project and a final week for the report and viva.',
    overview:
      'The 45-day format gets the teaching done first. Everything you need is covered in the first twenty-five days; the next thirteen are full days on your own project with a trainer reviewing it every morning; the last week is spent on the training report, documentation and a mock viva.',
    highlights: ['25 days of training', '13-day project build', 'Report & viva preparation', 'Training letter & certificate'],
    deliverables: ['Training letter', 'Project certificate', 'Formatted training report', 'Project documentation']
  },
  {
    key: '6-weeks',
    label: '6 Weeks Training',
    short: '6 Weeks',
    length: '6 weeks',
    badge: 'University format',
    bestFor: 'Students whose university specifies six weeks of training, or who want evenly paced learning.',
    summary: 'One stage a week with a weekly assessment, a capstone build in week five and the report in week six.',
    overview:
      'Six weeks spreads the teaching evenly: a new stage every week, each ending with an assessment so nothing is left unclear. Week five is a supervised capstone build, and week six is for the training report, presentation and viva preparation.',
    highlights: ['Weekly stages & assessment', 'Capstone project', 'Report & presentation', 'Certificate'],
    deliverables: ['Training certificate', 'Project certificate', 'Training report', 'Weekly assessment record']
  },
  {
    key: '6-months',
    label: '6 Months Training',
    short: '6 Months',
    length: '6 months',
    badge: 'Internship + placement',
    bestFor: 'Final-year students, graduates and career changers who want to be job-ready.',
    summary: 'The complete track: four months of training, a live project run like a real team, and a placement-preparation month.',
    overview:
      'The six-month programme covers the whole domain in depth. The first four months take you through every stage with projects that grow week by week; month five is a live project run like a delivery team, with reviews and deadlines; month six is placement preparation — resume, portfolio, mock interviews and placement assistance.',
    highlights: ['Complete syllabus', 'Live project', 'Internship letter', 'Placement assistance'],
    deliverables: ['Internship letter', 'Course & project certificates', 'Portfolio of projects', 'Placement assistance']
  }
]

export const getTrainingDomain = (slug: string) => TRAINING_DOMAINS.find((d) => d.slug === slug)
export const getFormat = (key: string) => FORMATS.find((f) => f.key === key)

/* ------------------------------------------------------------------
   One domain at one duration → the plan the page lays out.
------------------------------------------------------------------ */
export type PlanStep = { tag: string; title: string; text: string; topics: string[] }

const merge = (...stages: Stage[]) => stages.flatMap((s) => s.topics)

export function buildPlan(domain: TrainingDomain, format: FormatKey): PlanStep[] {
  const [s1, s2, s3, s4, s5, s6] = domain.stages

  if (format === '45-days') {
    return [
      {
        tag: 'Days 1–3',
        title: 'Orientation & setup',
        text: `Meet your trainer, set up the ${domain.name} tools and agree your project brief on day three — not in the last week.`,
        topics: [...domain.tools.slice(0, 3), 'Project brief']
      },
      {
        tag: 'Days 4–14',
        title: s1.title,
        text: 'The fundamentals of the domain, taught the way they are used at work. Every session ends with a hands-on lab task.',
        topics: s1.topics
      },
      {
        tag: 'Days 15–25',
        title: `${s2.title} + ${s3.title}`,
        text: 'The applied layer employers look for. By day twenty-five the teaching is complete.',
        topics: merge(s2, s3).slice(0, 6)
      },
      {
        tag: 'Days 26–38',
        title: 'Project build',
        text: `Thirteen full days on your own project with a trainer review every morning. Example project: ${domain.projects.short[0]}.`,
        topics: ['Requirement analysis', 'Step-by-step build', 'Daily review', 'Testing & fixes']
      },
      {
        tag: 'Days 39–45',
        title: 'Report, viva & submission',
        text: 'The training report, project documentation, presentation and a mock viva, prepared to your university’s template.',
        topics: ['Training report', 'Documentation', 'Presentation', 'Mock viva']
      }
    ]
  }

  if (format === '6-weeks') {
    return [
      { tag: 'Week 1', title: s1.title, text: 'Foundations and setup, with a short assessment at the end of the week.', topics: s1.topics },
      { tag: 'Week 2', title: s2.title, text: 'The core building blocks of the domain, taught through practical tasks.', topics: s2.topics },
      { tag: 'Week 3', title: s3.title, text: 'The applied layer — the part of the domain that turns you into someone who can be given a task.', topics: s3.topics },
      { tag: 'Week 4', title: s4.title, text: 'Going further and proving it works, with a weekly assessment.', topics: s4.topics },
      {
        tag: 'Week 5',
        title: 'Capstone project',
        text: `A supervised build of your own project with a daily review. Example project: ${domain.projects.short[0]}.`,
        topics: ['Planning', 'Build', 'Review', 'Final testing']
      },
      {
        tag: 'Week 6',
        title: 'Report & presentation',
        text: 'Training report, documentation and a rehearsed presentation and viva.',
        topics: ['Training report', 'Documentation', 'Presentation', 'Viva practice']
      }
    ]
  }

  return [
    { tag: 'Month 1', title: `${s1.title} + ${s2.title}`, text: 'A strong foundation, with daily practice and small projects.', topics: merge(s1, s2) },
    { tag: 'Month 2', title: s3.title, text: 'The applied skills of the domain, built into a project that grows week by week.', topics: s3.topics },
    { tag: 'Month 3', title: `${s4.title} + ${s5.title}`, text: 'Advanced topics and integration — the depth that separates a trainee from a beginner.', topics: merge(s4, s5) },
    { tag: 'Month 4', title: s6.title, text: 'Finishing skills, best practices and your second major project.', topics: s6.topics },
    {
      tag: 'Month 5',
      title: 'Live project',
      text: `A real brief run like a delivery team, with planning, reviews and deadlines. Example project: ${domain.projects.long[0]}.`,
      topics: ['Planning & tasks', 'Team reviews', 'Delivery', 'Documentation']
    },
    {
      tag: 'Month 6',
      title: 'Placement preparation',
      text: 'Resume and portfolio built around your projects, mock interviews with feedback, and placement assistance.',
      topics: ['Resume & portfolio', 'Mock interviews', 'Aptitude practice', 'Placement assistance']
    }
  ]
}

/* Projects shown on a duration page: the short ones for the short
   formats, the long ones for six months. */
export const planProjects = (domain: TrainingDomain, format: FormatKey) =>
  format === '6-months' ? [...domain.projects.long, ...domain.projects.short] : domain.projects.short

export function domainFaqs(domain: TrainingDomain) {
  return [
    {
      id: `${domain.slug}-which`,
      q: `Should I choose 45 days, 6 weeks or 6 months of ${domain.name} training?`,
      a: 'If your university has specified a duration, choose that one. Between the two short formats, 45 days gives you a longer project stretch and 6 weeks spreads the teaching evenly with weekly assessments. Choose 6 months if you want the complete syllabus, a live project and placement assistance.'
    },
    {
      id: `${domain.slug}-who`,
      q: `Who can join ${domain.name} training?`,
      a: domain.eligibility
    },
    {
      id: `${domain.slug}-cert`,
      q: 'Will I get a training letter and certificate?',
      a: 'Yes. The short formats include a training letter or certificate, a project certificate and a training report prepared to your college template. The 6-month programme includes an internship letter, certificates and placement assistance.'
    },
    {
      id: `${domain.slug}-where`,
      q: 'Where is the training held, and what are the fees and timings?',
      a: 'Training is held at the techcadd campus at Bharat Nagar Chowk, Ludhiana, with morning, afternoon and evening batches. The current fee and batch dates are confirmed by the campus — call us or book a free demo class.'
    }
  ]
}
