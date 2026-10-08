/* Programming track — one seed per slug. See ./shared.js for the
   factory that turns these into full page content. */

/* The Python page carries long-form editorial copy the other eight
   courses here do not. It lives in its own file because it is longer
   than several of these seeds put together — see ./python-copy.js */
import {
  PYTHON_OVERVIEW,
  PYTHON_JOINERS,
  PYTHON_NARRATIVE,
  PYTHON_TESTIMONIALS,
  PYTHON_FAQS
} from './python-copy'
import {
  JAVA_OVERVIEW,
  JAVA_JOINERS,
  JAVA_NARRATIVE,
  JAVA_FAQS
} from './java-copy'
/* C and C++ stay one course. The two sets of copy that arrived for
   them are merged in this file — see the note at the top of it. */
import {
  C_CPP_OVERVIEW,
  C_CPP_JOINERS,
  C_CPP_NARRATIVE,
  C_CPP_TESTIMONIALS,
  C_CPP_FAQS
} from './c-cpp-copy'
import {
  KOTLIN_OVERVIEW,
  KOTLIN_JOINERS,
  KOTLIN_NARRATIVE,
  KOTLIN_TESTIMONIALS,
  KOTLIN_FAQS
} from './kotlin-copy'
import {
  WEB_DESIGNING_OVERVIEW,
  WEB_DESIGNING_JOINERS,
  WEB_DESIGNING_NARRATIVE,
  WEB_DESIGNING_TESTIMONIALS,
  WEB_DESIGNING_FAQS
} from './web-designing-copy'
import {
  WEB_DEVELOPMENT_OVERVIEW,
  WEB_DEVELOPMENT_JOINERS,
  WEB_DEVELOPMENT_NARRATIVE,
  WEB_DEVELOPMENT_TESTIMONIALS,
  WEB_DEVELOPMENT_FAQS
} from './web-development-copy'
import {
  MERN_OVERVIEW,
  MERN_JOINERS,
  MERN_NARRATIVE,
  MERN_TESTIMONIALS,
  MERN_FAQS
} from './mern-stack-copy'
import {
  MEAN_OVERVIEW,
  MEAN_JOINERS,
  MEAN_NARRATIVE,
  MEAN_TESTIMONIALS,
  MEAN_FAQS
} from './mean-stack-copy'
import {
  PHP_OVERVIEW,
  PHP_JOINERS,
  PHP_NARRATIVE,
  PHP_TESTIMONIALS,
  PHP_FAQS
} from './php-copy'

export const PROGRAMMING = [
  {
    slug: 'python',
    name: 'Python Programming Course',
    short: 'Python Programming',
    subject: 'Python',
    category: 'Programming',
    eyebrow: 'Career-focused Python program',
    duration: '4–6 months',
    level: 'Beginner to job ready',
    heroArt: '/courses/python-hero.webp',
    heroArtSize: [1468, 828],
    heroArtAlt:
      'A Python development workspace — the language’s logo over an editor, a database and the data libraries the course builds on',
    headline: ['Master Python.', 'Build real software.'],
    sub: 'Learn core Python, databases, Django and the data stack through hands-on projects and industry-oriented training at techcadd Ludhiana.',
    projectCount: 'Six shipped',
    highlights: [
      'Write code in every single class',
      'Six modules, six shipped projects',
      'Doubt support outside class hours'
    ],
    code: {
      lang: 'py',
      file: 'career.py',
      lines: [
        'from techcadd import Career',
        '',
        'def build(student):',
        '    student.learn("python")',
        '    student.ship(projects=12)',
        '    return Career(ready=True)'
      ],
      command: 'python career.py',
      output: 'Career(ready=True)'
    },
    badges: ['Django', 'Pandas', 'Flask', 'SQL'],
    modules: [
      {
        title: 'Python Fundamentals',
        tag: 'Weeks 1–3',
        description: 'Start from a blank editor. Syntax, data types, operators and control flow until writing Python feels ordinary.',
        skills: ['Variables & data types', 'Operators', 'Conditionals', 'Loops', 'Input & output'],
        tech: ['Python 3', 'VS Code', 'Git'],
        outcome: 'A command-line calculator and a number-guessing game you wrote from scratch.'
      },
      {
        title: 'Data Structures & Functions',
        tag: 'Weeks 4–6',
        description: 'The collections Python developers reach for every day, plus functions, modules and error handling.',
        skills: ['Lists & tuples', 'Dictionaries & sets', 'Comprehensions', 'Functions & scope', 'File handling', 'Exceptions'],
        tech: ['Python 3', 'JSON', 'CSV'],
        outcome: 'A contact book that reads and writes its own data files without losing a record.'
      },
      {
        title: 'Object-Oriented Python',
        tag: 'Weeks 7–9',
        description: 'Structure larger programs with classes, then meet the features that make Python code feel Pythonic.',
        skills: ['Classes & objects', 'Inheritance', 'Polymorphism', 'Dunder methods', 'Decorators', 'Generators'],
        tech: ['pip', 'venv', 'pytest'],
        outcome: 'A library management system with clean class design and its first unit tests.'
      },
      {
        title: 'Databases & APIs',
        tag: 'Weeks 10–12',
        description: 'Connect Python to the outside world — store data properly and talk to services over HTTP.',
        skills: ['SQL basics', 'CRUD operations', 'REST concepts', 'Consuming APIs', 'Web scraping'],
        tech: ['MySQL', 'SQLite', 'requests', 'BeautifulSoup'],
        outcome: 'A weather app that pulls live API data and a scraper that fills your own database.'
      },
      {
        title: 'Web Development with Django & Flask',
        tag: 'Weeks 13–17',
        description: 'Turn scripts into web applications: routing, templates, models, authentication and deployment.',
        skills: ['MVT architecture', 'Django ORM', 'Forms & auth', 'Flask routing', 'REST APIs', 'Deployment'],
        tech: ['Django', 'Flask', 'Django REST Framework', 'PostgreSQL'],
        outcome: 'A deployed inventory web app with login, admin panel and a live database.'
      },
      {
        title: 'Python for Data & Automation',
        tag: 'Weeks 18–20',
        description: 'Use Python to remove repetitive work and to make sense of data, then ship your capstone.',
        skills: ['NumPy arrays', 'Pandas dataframes', 'Charts & reports', 'Excel automation', 'Task scripting'],
        tech: ['NumPy', 'Pandas', 'Matplotlib', 'openpyxl'],
        outcome: 'A sales dashboard and an automation script that does a full day of manual work in seconds.'
      }
    ],
    technologies: [
      { name: 'Django', note: 'Full-featured web framework' },
      { name: 'Flask', note: 'Lightweight web apps & APIs' },
      { name: 'FastAPI', note: 'Modern async REST services' },
      { name: 'Pandas', note: 'Dataframes & analysis' },
      { name: 'NumPy', note: 'Numerical computing' },
      { name: 'MySQL', note: 'Relational databases' },
      { name: 'Git', note: 'Version control & teamwork' },
      { name: 'Jupyter', note: 'Notebooks & experiments' }
    ],
    careers: [
      { icon: 'code', title: 'Python Developer', text: 'Build and maintain application logic, scripts and services in Python across product teams.' },
      { icon: 'server', title: 'Backend Developer', text: 'Design APIs, handle databases and keep the server side of a product fast and reliable.' },
      { icon: 'django', title: 'Django Developer', text: 'Ship complete web applications with models, admin, authentication and deployment.' },
      { icon: 'bot', title: 'Automation Engineer', text: 'Replace repetitive manual processes with scripts, schedulers and integrations.' },
      { icon: 'chart', title: 'Data Analyst', text: 'Clean, analyse and visualise data with Pandas to answer real business questions.' },
      { icon: 'spark', title: 'Junior Software Engineer', text: 'Join a product team with working knowledge of code review, Git and testing habits.' }
    ],
    featured: {
      title: 'Inventory Management System',
      kicker: 'Capstone project',
      text: 'A full Django application with role-based login, stock movements, low-stock alerts, supplier records and exportable reports. You model the database, write the views, build the admin experience and deploy it — then defend every decision in review.',
      tags: ['Django', 'PostgreSQL', 'Django ORM', 'Deployment'],
      difficulty: 'Advanced',
      status: 'Portfolio ready',
      lines: [
        'class StockItem(models.Model):',
        '    name = models.CharField(max_length=120)',
        '    quantity = models.PositiveIntegerField()',
        '    reorder_at = models.PositiveIntegerField(default=10)',
        '',
        '    @property',
        '    def needs_restock(self):',
        '        return self.quantity <= self.reorder_at'
      ]
    },
    projects: [
      { title: 'Expense Tracker CLI', text: 'Track spending from the terminal with file storage and monthly summaries.', tags: ['Python', 'File I/O'], size: 'sm' },
      { title: 'Web Scraper Dashboard', text: 'Collect listings from a public site, store them, and chart the results.', tags: ['BeautifulSoup', 'Pandas'], size: 'lg' },
      { title: 'URL Shortener API', text: 'A small REST service with redirects, click counts and validation.', tags: ['Flask', 'SQLite'], size: 'sm' },
      { title: 'File Automation Bot', text: 'Sort, rename and back up hundreds of files on a schedule.', tags: ['os', 'schedule'], size: 'sm' },
      { title: 'Quiz Web App', text: 'Timed quizzes with user accounts, scoring and a results history.', tags: ['Django', 'Auth'], size: 'lg' }
    ],
    audience: 'School students after 12th, BCA/B.Sc. IT/B.Tech students, graduates from any stream and working professionals moving into development. The first module assumes no prior coding knowledge.',

    /* Written as a local landing page, like Digital Marketing, and its
       copy names Ludhiana throughout.

       Stated explicitly even though it now matches the default. This
       used to be the override that stopped the page saying Jalandhar,
       back when that was CENTRE in shared.ts; the whole site is
       Ludhiana's now, so it agrees with the factory rather than
       correcting it. Left in place because the copy in this seed names
       the city in its own sentences — a course whose text says
       "in Ludhiana" should not silently follow CENTRE somewhere else. */
    city: 'Ludhiana',

    overviewTitle: PYTHON_OVERVIEW.title,
    overviewLead: PYTHON_OVERVIEW.lead,
    overviewBody: PYTHON_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: PYTHON_JOINERS,
    narrative: PYTHON_NARRATIVE,

    /* UNVERIFIED quotes carrying named localities and placement
       outcomes. Read the banner above PYTHON_TESTIMONIALS in
       ./python-copy.js before this page goes live. Deleting this one
       line falls back to the generic quotes in shared.js. */
    testimonials: PYTHON_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: PYTHON_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Start your Python career in Ludhiana',
    enquireText:
      'Not sure which Python learning path is right for you? Connect with techcadd’s course counsellors for guidance about the curriculum, eligibility, duration, batch timings, projects, and career options before you enrol.'
  },

  {
    slug: 'java',
    name: 'Java Programming Course',
    short: 'Java Programming',
    subject: 'Java',
    category: 'Programming',
    eyebrow: 'Core Java to Spring Boot',
    duration: '5–6 months',
    heroArt: '/courses/java-hero.webp',
    heroArtSize: [1307, 896],
    heroArtAlt:
      'A Java development workspace — the language’s logo over an editor, a database and the enterprise tooling the course builds on',
    headline: ['Master Java.', 'Ship enterprise software.'],
    sub: 'Core Java, OOP, collections, JDBC and Spring Boot — the stack that still runs banking, insurance and enterprise systems across India.',
    projectCount: 'Five shipped',
    highlights: [
      'Strong OOP foundations before any framework',
      'Spring Boot REST APIs with a real database',
      'DSA practice aimed at product interviews'
    ],
    code: {
      lang: 'java',
      file: 'Career.java',
      lines: [
        'public class Career {',
        '    public static void main(String[] args) {',
        '        Student s = new Student("you");',
        '        s.learn("java");',
        '        s.ship(8);',
        '    }',
        '}'
      ],
      command: 'java Career',
      output: 'Build successful — ready'
    },
    badges: ['Spring Boot', 'Hibernate', 'JDBC', 'MySQL'],
    modules: [
      {
        title: 'Core Java Foundations',
        tag: 'Weeks 1–4',
        description: 'The JVM, syntax, types and control flow — plus how a Java project is actually compiled and run.',
        skills: ['JVM & JDK', 'Data types', 'Operators', 'Control flow', 'Arrays', 'Methods'],
        tech: ['JDK 21', 'IntelliJ IDEA', 'Git'],
        outcome: 'A console banking menu that validates input and never crashes on bad data.'
      },
      {
        title: 'Object-Oriented Programming',
        tag: 'Weeks 5–8',
        description: 'Where Java earns its reputation: classes, inheritance, interfaces and clean abstraction.',
        skills: ['Classes & objects', 'Inheritance', 'Interfaces', 'Abstraction', 'Exception handling', 'Packages'],
        tech: ['JDK', 'JUnit', 'Maven'],
        outcome: 'A library system modelled with interfaces and covered by its first unit tests.'
      },
      {
        title: 'Collections, Streams & JDBC',
        tag: 'Weeks 9–12',
        description: 'The Collections Framework, functional-style streams, and connecting Java to a real database.',
        skills: ['List, Set, Map', 'Generics', 'Lambdas & streams', 'JDBC', 'Prepared statements', 'Multithreading basics'],
        tech: ['MySQL', 'JDBC', 'Maven'],
        outcome: 'A student records application backed by MySQL with proper prepared statements.'
      },
      {
        title: 'Spring Boot & REST APIs',
        tag: 'Weeks 13–17',
        description: 'Dependency injection, controllers, JPA repositories and secured REST endpoints.',
        skills: ['Spring Core & DI', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'REST design', 'Spring Security basics'],
        tech: ['Spring Boot', 'Hibernate', 'Postman', 'PostgreSQL'],
        outcome: 'A secured REST API with layered architecture, validation and API documentation.'
      },
      {
        title: 'DSA & Interview Readiness',
        tag: 'Weeks 18–22',
        description: 'The problem-solving half of a Java interview, plus deployment of your capstone.',
        skills: ['Time complexity', 'Arrays & strings', 'Linked lists & trees', 'Sorting & searching', 'System design basics'],
        tech: ['Docker', 'GitHub Actions', 'JUnit'],
        outcome: 'A deployed Spring Boot capstone and a solved problem set you can talk through.'
      }
    ],
    technologies: [
      { name: 'Spring Boot', note: 'Application framework' },
      { name: 'Hibernate', note: 'ORM & persistence' },
      { name: 'Maven', note: 'Build & dependencies' },
      { name: 'MySQL', note: 'Relational databases' },
      { name: 'JUnit', note: 'Unit testing' },
      { name: 'Postman', note: 'API testing' },
      { name: 'Docker', note: 'Containerised deploys' },
      { name: 'Git', note: 'Version control' }
    ],
    careers: [
      { icon: 'code', title: 'Java Developer', text: 'Write and maintain the application layer of enterprise systems in Java.' },
      { icon: 'server', title: 'Backend Engineer', text: 'Design REST services, data models and integrations that stay reliable under load.' },
      { icon: 'stack', title: 'Spring Boot Developer', text: 'Build microservices with Spring Boot, JPA and secured API layers.' },
      { icon: 'database', title: 'Software Engineer (Product)', text: 'Join a product team where Java and DSA fundamentals are the entry bar.' },
      { icon: 'spark', title: 'Android Developer (Java)', text: 'Move into mobile with the same language and OOP foundations.' },
      { icon: 'career', title: 'QA Automation Engineer', text: 'Automate testing with Java, Selenium and JUnit inside a delivery pipeline.' }
    ],
    featured: {
      title: 'Employee Management REST API',
      kicker: 'Capstone project',
      text: 'A layered Spring Boot service with JWT authentication, role-based access, JPA entities, validation, pagination and Swagger documentation — deployed in a container. You design the schema, write the services and prove the endpoints with Postman collections.',
      tags: ['Spring Boot', 'JPA', 'JWT', 'Docker'],
      difficulty: 'Advanced',
      status: 'Portfolio ready',
      lines: [
        '@RestController',
        '@RequestMapping("/api/employees")',
        'public class EmployeeController {',
        '',
        '    @GetMapping("/{id}")',
        '    public EmployeeDto find(@PathVariable Long id) {',
        '        return service.findById(id);',
        '    }',
        '}'
      ]
    },
    projects: [
      { title: 'ATM Simulator', text: 'Console banking with accounts, transactions and a running balance.', tags: ['Core Java', 'OOP'], size: 'sm' },
      { title: 'Student Portal', text: 'CRUD records over MySQL with search, sort and report export.', tags: ['JDBC', 'MySQL'], size: 'lg' },
      { title: 'Task Tracker API', text: 'A Spring Boot service with users, tasks, deadlines and filters.', tags: ['Spring Boot', 'JPA'], size: 'sm' },
      { title: 'Chat Server', text: 'A multi-client socket server that handles concurrent connections.', tags: ['Sockets', 'Threads'], size: 'sm' },
      { title: 'E-commerce Backend', text: 'Catalogue, cart and order services with secured endpoints.', tags: ['Spring', 'JWT'], size: 'lg' }
    ],

    overviewTitle: JAVA_OVERVIEW.title,
    overviewLead: JAVA_OVERVIEW.lead,
    overviewBody: JAVA_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: JAVA_JOINERS,
    narrative: JAVA_NARRATIVE,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: JAVA_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Start your Java development career in Ludhiana',
    enquireText:
      'Not sure whether Java is the right career path for you? Get guidance from techcadd’s course counsellors and understand the course structure, learning path, batches, and career opportunities before you begin your Java training in Ludhiana.'
  },

  {
    slug: 'c-cpp',
    name: 'C & C++ Programming Course',
    short: 'C & C++',
    subject: 'C and C++',
    category: 'Programming',
    eyebrow: 'Fundamentals that never expire',
    duration: '3–4 months',
    /* the purpose-built hero asset, same convention every other course
       uses. c-cpp.png is the 1.3MB card image — five times the weight
       for a picture the hero renders at about 520px wide. */
    heroArt: '/courses/c-cpp-hero.webp',
    heroArtSize: [1409, 937],
    heroArtAlt:
      'A C and C++ development workspace — an editor, a compiler and the tooling the course builds on',
    headline: ['Learn how code', 'actually runs.'],
    sub: 'Memory, pointers, data structures and object-oriented C++ — the foundation every other language sits on and the syllabus your university exams are built from.',
    projectCount: 'Four shipped',
    highlights: [
      'Pointers and memory taught until they click',
      'Data structures written from scratch',
      'University syllabus fully covered'
    ],
    code: {
      lang: 'cpp',
      file: 'career.cpp',
      lines: [
        '#include <iostream>',
        'using namespace std;',
        '',
        'int main() {',
        '    Student you("career");',
        '    you.learn("c++");',
        '    return 0;',
        '}'
      ],
      command: 'g++ career.cpp && ./a.out',
      output: 'ready'
    },
    badges: ['Pointers', 'STL', 'DSA', 'OOP'],
    modules: [
      {
        title: 'C Fundamentals',
        tag: 'Weeks 1–3',
        description: 'Compilation, types, control flow and functions — how a C program becomes a running binary.',
        skills: ['Compilation model', 'Data types', 'Operators', 'Loops & branching', 'Functions', 'Recursion'],
        tech: ['GCC', 'VS Code', 'Make'],
        outcome: 'A menu-driven matrix calculator that handles bad input gracefully.'
      },
      {
        title: 'Pointers, Memory & Files',
        tag: 'Weeks 4–6',
        description: 'The part most students skip and most interviews ask about: addresses, allocation and lifetimes.',
        skills: ['Pointers & arithmetic', 'Dynamic memory', 'Structures & unions', 'File I/O', 'Command-line arguments'],
        tech: ['GCC', 'GDB', 'Valgrind'],
        outcome: 'A student database in C that stores records in a binary file and frees every byte it takes.'
      },
      {
        title: 'Data Structures in C',
        tag: 'Weeks 7–9',
        description: 'Build the structures yourself before any library hands them to you.',
        skills: ['Linked lists', 'Stacks & queues', 'Trees', 'Hashing', 'Sorting & searching', 'Complexity analysis'],
        tech: ['GCC', 'GDB'],
        outcome: 'A working implementation of every core data structure, with test cases.'
      },
      {
        title: 'Object-Oriented C++',
        tag: 'Weeks 10–12',
        description: 'Classes, constructors, operator overloading and inheritance done the C++ way.',
        skills: ['Classes & objects', 'Constructors & destructors', 'Operator overloading', 'Inheritance', 'Virtual functions', 'Templates'],
        tech: ['g++', 'CMake'],
        outcome: 'A bank account hierarchy with polymorphic behaviour and RAII-safe resources.'
      },
      {
        title: 'STL & Competitive Practice',
        tag: 'Weeks 13–16',
        description: 'The Standard Template Library and the problem patterns that appear in placement rounds.',
        skills: ['Vectors & maps', 'Iterators & algorithms', 'Smart pointers', 'Exception handling', 'Problem patterns'],
        tech: ['STL', 'CMake', 'Git'],
        outcome: 'A capstone console application plus a solved practice set for placement rounds.'
      }
    ],
    technologies: [
      { name: 'GCC / g++', note: 'Compiler toolchain' },
      { name: 'GDB', note: 'Debugging' },
      { name: 'STL', note: 'Standard containers' },
      { name: 'CMake', note: 'Build system' },
      { name: 'Valgrind', note: 'Memory checking' },
      { name: 'Make', note: 'Build automation' },
      { name: 'Git', note: 'Version control' },
      { name: 'Linux', note: 'Development environment' }
    ],
    careers: [
      { icon: 'code', title: 'Software Developer', text: 'Write performance-sensitive application code where control over memory matters.' },
      { icon: 'stack', title: 'Embedded Engineer', text: 'Program microcontrollers and firmware where C is still the working language.' },
      { icon: 'server', title: 'Systems Programmer', text: 'Work close to the operating system — drivers, tooling and services.' },
      { icon: 'spark', title: 'Game Developer', text: 'Move into engines like Unreal, where C++ is the day-to-day language.' },
      { icon: 'chart', title: 'Placement Candidate', text: 'Clear the DSA and aptitude rounds that gate most campus and product interviews.' },
      { icon: 'career', title: 'Junior Engineer', text: 'Enter any engineering team with fundamentals that transfer to every language.' }
    ],
    featured: {
      title: 'Mini Database Engine',
      kicker: 'Capstone project',
      text: 'A record store written in C++ with its own B-tree index, disk persistence, a simple query parser and a REPL. You handle allocation, file layout and error paths yourself — the project that proves you understand what a database is doing underneath.',
      tags: ['C++', 'B-tree', 'File I/O', 'STL'],
      difficulty: 'Advanced',
      status: 'Portfolio ready',
      lines: [
        'class BTreeNode {',
        'public:',
        '    std::vector<Key> keys;',
        '    std::vector<BTreeNode*> children;',
        '',
        '    bool isLeaf() const {',
        '        return children.empty();',
        '    }',
        '};'
      ]
    },
    projects: [
      { title: 'Matrix Calculator', text: 'Add, multiply and invert matrices with clean input validation.', tags: ['C', 'Arrays'], size: 'sm' },
      { title: 'Text Editor (Console)', text: 'A small editor with insert, delete, search and file save.', tags: ['C', 'File I/O'], size: 'lg' },
      { title: 'Snake Game', text: 'Real-time console game with collision and score tracking.', tags: ['C++', 'Loops'], size: 'sm' },
      { title: 'Library System', text: 'Object-oriented issue and return tracking with persistence.', tags: ['C++', 'OOP'], size: 'sm' },
      { title: 'Pathfinding Visualiser', text: 'Graph algorithms rendered step by step in the terminal.', tags: ['C++', 'Graphs'], size: 'lg' }
    ],
    prerequisite: 'None. This is the course most students take first — it assumes you have never written a line of code.',

    overviewTitle: C_CPP_OVERVIEW.title,
    overviewLead: C_CPP_OVERVIEW.lead,
    overviewBody: C_CPP_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: C_CPP_JOINERS,
    narrative: C_CPP_NARRATIVE,

    /* the course's own students, replacing the three the factory
       writes for a course with none */
    testimonials: C_CPP_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: C_CPP_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Start your coding journey today',
    enquireText:
      'Build the strongest foundation in programming with hands-on, beginner-friendly C and C++ training designed for students, graduates, and job seekers in Ludhiana. Whether you’re preparing for exams, interviews, or your first tech job — this is where confident coders begin.'
  },

  {
    slug: 'kotlin',
    name: 'Kotlin & Android Development Course',
    short: 'Kotlin',
    subject: 'Kotlin',
    category: 'Programming',
    eyebrow: 'Modern Android development',
    duration: '4–5 months',
    heroArt: '/courses/kotlin-hero.webp',
    heroArtSize: [1473, 949],
    heroArtAlt:
      'A Kotlin and Android development workspace — Android Studio, an emulator and the tooling the course builds on',
    headline: ['Write Kotlin.', 'Ship Android apps.'],
    sub: 'The official language of Android — coroutines, Jetpack Compose, Room and a published app on the Play Store by the end of the course.',
    projectCount: 'Five shipped',
    highlights: [
      'Jetpack Compose from the first UI',
      'Real device testing, not just the emulator',
      'A published app in your portfolio'
    ],
    code: {
      lang: 'kt',
      file: 'Career.kt',
      lines: [
        'fun main() {',
        '    val you = Student(name = "you")',
        '    you.learn("kotlin")',
        '    you.publish(apps = 3)',
        '}'
      ],
      command: 'kotlinc Career.kt -include-runtime',
      output: 'Build successful'
    },
    badges: ['Compose', 'Coroutines', 'Room', 'Retrofit'],
    modules: [
      {
        title: 'Kotlin Language Essentials',
        tag: 'Weeks 1–3',
        description: 'Null safety, immutability and the concise syntax that makes Kotlin different from Java.',
        skills: ['val vs var', 'Null safety', 'Functions & lambdas', 'Data classes', 'Collections', 'Scope functions'],
        tech: ['Kotlin', 'IntelliJ IDEA', 'Git'],
        outcome: 'A set of small console programs that use Kotlin idioms rather than translated Java.'
      },
      {
        title: 'Object-Oriented & Functional Kotlin',
        tag: 'Weeks 4–6',
        description: 'Classes, sealed hierarchies, extension functions and higher-order functions.',
        skills: ['Classes & interfaces', 'Sealed classes', 'Extension functions', 'Generics', 'Higher-order functions'],
        tech: ['Kotlin', 'Gradle', 'JUnit'],
        outcome: 'A modelled domain layer with sealed result types and unit tests.'
      },
      {
        title: 'Android Fundamentals with Compose',
        tag: 'Weeks 7–11',
        description: 'The Android lifecycle, navigation and declarative UI built with Jetpack Compose.',
        skills: ['Activities & lifecycle', 'Composable UI', 'State hoisting', 'Navigation', 'Material 3', 'Theming'],
        tech: ['Android Studio', 'Jetpack Compose', 'Material 3'],
        outcome: 'A multi-screen app with navigation, state and a design that survives rotation.'
      },
      {
        title: 'Data, Networking & Coroutines',
        tag: 'Weeks 12–15',
        description: 'Local storage, remote APIs and doing both without blocking the main thread.',
        skills: ['Room database', 'Retrofit', 'Coroutines & Flow', 'Repository pattern', 'MVVM', 'Error handling'],
        tech: ['Room', 'Retrofit', 'Coroutines', 'Hilt'],
        outcome: 'An offline-first app that caches API data locally and syncs when the network returns.'
      },
      {
        title: 'Release & Play Store',
        tag: 'Weeks 16–18',
        description: 'Signing, testing, performance and everything between a working build and a live listing.',
        skills: ['App signing', 'Play Console', 'Testing tracks', 'Crash reporting', 'Performance profiling'],
        tech: ['Play Console', 'Firebase', 'Gradle'],
        outcome: 'Your capstone app published to the Play Store with a store listing you wrote.'
      }
    ],
    technologies: [
      { name: 'Jetpack Compose', note: 'Declarative Android UI' },
      { name: 'Coroutines', note: 'Async without callbacks' },
      { name: 'Room', note: 'Local database' },
      { name: 'Retrofit', note: 'REST networking' },
      { name: 'Hilt', note: 'Dependency injection' },
      { name: 'Firebase', note: 'Auth, storage & crashes' },
      { name: 'Gradle', note: 'Builds & flavours' },
      { name: 'Git', note: 'Version control' }
    ],
    careers: [
      { icon: 'code', title: 'Android Developer', text: 'Build and maintain production Android apps in Kotlin.' },
      { icon: 'stack', title: 'Mobile App Developer', text: 'Take a product from design handoff to a live store listing.' },
      { icon: 'server', title: 'Kotlin Backend Developer', text: 'Use Kotlin server-side with Ktor or Spring Boot.' },
      { icon: 'spark', title: 'Freelance App Developer', text: 'Deliver client apps end to end, including release and updates.' },
      { icon: 'bot', title: 'Cross-Platform Developer', text: 'Extend into Kotlin Multiplatform for shared business logic.' },
      { icon: 'career', title: 'Junior Software Engineer', text: 'Enter a mobile team with modern architecture habits already formed.' }
    ],
    featured: {
      title: 'Expense Tracker App',
      kicker: 'Capstone project',
      text: 'A published Android app with Compose UI, Room persistence, category budgets, monthly charts, biometric lock and cloud backup. You build it in MVVM, test it on a real device, and ship it to the Play Store under your own developer account.',
      tags: ['Compose', 'Room', 'MVVM', 'Play Store'],
      difficulty: 'Advanced',
      status: 'Published',
      lines: [
        '@Composable',
        'fun ExpenseList(items: List<Expense>) {',
        '    LazyColumn {',
        '        items(items) { expense ->',
        '            ExpenseRow(expense)',
        '        }',
        '    }',
        '}'
      ]
    },
    projects: [
      { title: 'Unit Converter', text: 'A first Compose app with state, input and instant results.', tags: ['Compose', 'State'], size: 'sm' },
      { title: 'News Reader', text: 'Fetch, cache and display articles from a public API.', tags: ['Retrofit', 'Room'], size: 'lg' },
      { title: 'Habit Tracker', text: 'Daily streaks with local notifications and persistence.', tags: ['Room', 'WorkManager'], size: 'sm' },
      { title: 'Weather App', text: 'Location-aware forecast with an offline last-known state.', tags: ['API', 'Coroutines'], size: 'sm' },
      { title: 'Chat App', text: 'Realtime messaging with Firebase auth and Firestore.', tags: ['Firebase', 'Compose'], size: 'lg' }
    ],

    overviewTitle: KOTLIN_OVERVIEW.title,
    overviewLead: KOTLIN_OVERVIEW.lead,
    overviewBody: KOTLIN_OVERVIEW.body,

    /* replaces the six generic groups the factory writes */
    joiners: KOTLIN_JOINERS,
    narrative: KOTLIN_NARRATIVE,

    /* the course's own students, replacing the three the factory
       writes for a course with none */
    testimonials: KOTLIN_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: KOTLIN_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Start building real Android apps',
    enquireText:
      'Take the first step toward becoming a job-ready Android developer. Join Ludhiana’s trusted IT training institute and turn Kotlin from a resume keyword into a real, practical skill.'
  },

  {
    slug: 'web-designing',
    name: 'Web Designing Course',
    short: 'Web Designing',
    subject: 'web design',
    category: 'Programming',
    eyebrow: 'Design and build for the browser',
    duration: '3–4 months',
    heroArt: '/courses/web-designing-hero.webp',
    heroArtSize: [1509, 1004],
    heroArtAlt:
      'A web design workspace — a browser layout, a design tool and the styling the course builds on',
    headline: ['Design interfaces.', 'Build them yourself.'],
    sub: 'HTML, CSS, responsive layout, Figma and the design judgement to make a page look considered rather than assembled.',
    projectCount: 'Six shipped',
    highlights: [
      'Design in Figma, then build it pixel-accurate',
      'Responsive from the first layout, not retrofitted',
      'Accessibility treated as part of the craft'
    ],
    code: {
      lang: 'txt',
      file: 'index.html',
      lines: [
        '<section class="hero">',
        '  <h1>Design that ships.</h1>',
        '  <p>Built, not templated.</p>',
        '  <a class="btn" href="#work">See work</a>',
        '</section>'
      ],
      command: 'npm run dev',
      output: 'Local: http://localhost:5173'
    },
    badges: ['Figma', 'CSS Grid', 'Tailwind', 'A11y'],
    modules: [
      {
        title: 'HTML & Semantic Structure',
        tag: 'Weeks 1–2',
        description: 'Markup that a browser, a screen reader and a search engine all read the same way.',
        skills: ['Semantic elements', 'Forms', 'Tables', 'Media', 'Metadata', 'Document outline'],
        tech: ['HTML5', 'VS Code', 'Git'],
        outcome: 'A multi-page site with clean structure that passes an HTML validator.'
      },
      {
        title: 'CSS & Modern Layout',
        tag: 'Weeks 3–6',
        description: 'Flexbox, Grid, custom properties and the cascade — layout you control rather than fight.',
        skills: ['Box model', 'Flexbox', 'CSS Grid', 'Custom properties', 'Transitions', 'Responsive units'],
        tech: ['CSS3', 'Chrome DevTools'],
        outcome: 'A fully responsive landing page rebuilt from a real design, with no layout hacks.'
      },
      {
        title: 'Design Fundamentals & Figma',
        tag: 'Weeks 7–9',
        description: 'Type scales, colour systems, spacing rhythm and how to hand a design to a developer.',
        skills: ['Typography', 'Colour theory', 'Spacing systems', 'Components & variants', 'Prototyping', 'Design handoff'],
        tech: ['Figma', 'Google Fonts'],
        outcome: 'A complete Figma design system with components, tokens and a clickable prototype.'
      },
      {
        title: 'Interaction & Frameworks',
        tag: 'Weeks 10–12',
        description: 'JavaScript for interface behaviour, plus utility-first CSS and component thinking.',
        skills: ['DOM manipulation', 'Events', 'Form validation', 'Tailwind CSS', 'Bootstrap', 'Animation'],
        tech: ['JavaScript', 'Tailwind CSS', 'Bootstrap'],
        outcome: 'An interactive site with menus, modals, sliders and validated forms.'
      },
      {
        title: 'Accessibility, Performance & Launch',
        tag: 'Weeks 13–15',
        description: 'Making a site fast, usable and live — the difference between a mockup and a product.',
        skills: ['WCAG basics', 'Keyboard navigation', 'Image optimisation', 'Lighthouse audits', 'Deployment', 'SEO basics'],
        tech: ['Lighthouse', 'Netlify', 'Vercel'],
        outcome: 'Your portfolio site deployed on a live domain with a strong Lighthouse score.'
      }
    ],
    technologies: [
      { name: 'HTML5', note: 'Semantic markup' },
      { name: 'CSS3', note: 'Layout & styling' },
      { name: 'JavaScript', note: 'Interface behaviour' },
      { name: 'Figma', note: 'Design & prototyping' },
      { name: 'Tailwind', note: 'Utility-first CSS' },
      { name: 'Bootstrap', note: 'Component library' },
      { name: 'Git', note: 'Version control' },
      { name: 'Netlify', note: 'Deployment' }
    ],
    careers: [
      { icon: 'code', title: 'Web Designer', text: 'Design and build marketing sites, landing pages and brand experiences.' },
      { icon: 'stack', title: 'UI Developer', text: 'Turn design files into accurate, responsive, accessible interfaces.' },
      { icon: 'spark', title: 'UI/UX Designer', text: 'Move from visual design into research, flows and product thinking.' },
      { icon: 'chart', title: 'Frontend Developer', text: 'Continue into JavaScript frameworks with strong CSS foundations.' },
      { icon: 'career', title: 'Freelance Designer', text: 'Take client work end to end, from brief to live site.' },
      { icon: 'bot', title: 'Email / Landing Page Specialist', text: 'Build high-converting pages for marketing and campaign teams.' }
    ],
    featured: {
      title: 'Agency Website Redesign',
      kicker: 'Capstone project',
      text: 'A complete redesign of a real business site — audit, wireframes, a Figma design system, then a hand-coded responsive build with animation, accessible navigation and a Lighthouse score above 95. You present the before and after and justify every change.',
      tags: ['Figma', 'CSS Grid', 'A11y', 'Lighthouse'],
      difficulty: 'Advanced',
      status: 'Live site',
      lines: [
        '.hero {',
        '  display: grid;',
        '  grid-template-columns: 1.1fr 0.9fr;',
        '  gap: clamp(24px, 5vw, 72px);',
        '  align-items: center;',
        '}'
      ]
    },
    projects: [
      { title: 'Restaurant Landing Page', text: 'A single responsive page with menu, gallery and booking form.', tags: ['HTML', 'CSS'], size: 'sm' },
      { title: 'Design System', text: 'Reusable components, tokens and documentation in Figma.', tags: ['Figma', 'Tokens'], size: 'lg' },
      { title: 'Portfolio Site', text: 'Your own site, designed and deployed on a custom domain.', tags: ['CSS', 'Netlify'], size: 'sm' },
      { title: 'Dashboard UI', text: 'A data-dense admin layout built with CSS Grid.', tags: ['Grid', 'Tailwind'], size: 'sm' },
      { title: 'E-commerce Front', text: 'Product grid, filters and cart interactions.', tags: ['JS', 'Tailwind'], size: 'lg' }
    ],
    prerequisite: 'No. The course begins with your first HTML file. Design sense is taught alongside the code, not assumed.',

    overviewTitle: WEB_DESIGNING_OVERVIEW.title,
    overviewLead: WEB_DESIGNING_OVERVIEW.lead,
    overviewBody: WEB_DESIGNING_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, and carries
       its own `requirements` list — see web-designing-copy.js */
    joiners: WEB_DESIGNING_JOINERS,
    narrative: WEB_DESIGNING_NARRATIVE,

    /* the course's own students, replacing the three the factory
       writes for a course with none */
    testimonials: WEB_DESIGNING_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: WEB_DESIGNING_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Start designing real websites',
    enquireText:
      'Take the first step toward becoming a job-ready web designer. Join Ludhiana’s trusted IT training institute and turn your creativity into a practical, in-demand career skill.'
  },

  {
    slug: 'web-development',
    name: 'Web Development Course',
    short: 'Web Development',
    subject: 'web development',
    category: 'Programming',
    eyebrow: 'Frontend to backend, end to end',
    duration: '5–6 months',
    heroArt: '/courses/web-development-hero.webp',
    heroArtSize: [1536, 1024],
    heroArtAlt:
      'A full-stack development workspace — an editor, a running application and the frontend and backend tooling the course builds on',
    headline: ['Build the whole', 'web application.'],
    sub: 'HTML, CSS, JavaScript, React, Node and databases — everything between an empty folder and an application running on a live domain.',
    projectCount: 'Six shipped',
    highlights: [
      'Frontend and backend in one syllabus',
      'Git and deployment from week one',
      'A live, working product as your capstone'
    ],
    code: {
      lang: 'js',
      file: 'server',
      lines: [
        'import express from "express"',
        '',
        'const app = express()',
        '',
        'app.get("/api/courses", async (req, res) => {',
        '  res.json(await Course.findAll())',
        '})'
      ],
      command: 'node server',
      output: 'Listening on :3000'
    },
    badges: ['React', 'Node', 'MongoDB', 'REST'],
    modules: [
      {
        title: 'Frontend Foundations',
        tag: 'Weeks 1–4',
        description: 'Semantic HTML, modern CSS layout and responsive design built correctly the first time.',
        skills: ['HTML5', 'Flexbox & Grid', 'Responsive design', 'CSS variables', 'Forms', 'Accessibility basics'],
        tech: ['HTML5', 'CSS3', 'VS Code', 'Git'],
        outcome: 'A responsive multi-page site deployed to a live URL.'
      },
      {
        title: 'JavaScript in Depth',
        tag: 'Weeks 5–9',
        description: 'The language itself — scope, async, modules — before any framework hides it from you.',
        skills: ['ES6+ syntax', 'DOM & events', 'Fetch & promises', 'async/await', 'Modules', 'Error handling'],
        tech: ['JavaScript', 'Vite', 'npm'],
        outcome: 'A single-page app that consumes a public API and handles loading and failure states.'
      },
      {
        title: 'React & Component Architecture',
        tag: 'Weeks 10–14',
        description: 'Components, state, routing and the patterns that keep a growing frontend maintainable.',
        skills: ['JSX & props', 'Hooks', 'State management', 'React Router', 'Forms', 'Component patterns'],
        tech: ['React', 'React Router', 'Vite'],
        outcome: 'A multi-route React application with real state, protected routes and clean components.'
      },
      {
        title: 'Backend with Node & Databases',
        tag: 'Weeks 15–19',
        description: 'REST APIs, authentication and data modelling on the server side.',
        skills: ['Node & Express', 'REST design', 'MongoDB & Mongoose', 'SQL basics', 'JWT auth', 'Validation'],
        tech: ['Node', 'Express', 'MongoDB', 'PostgreSQL'],
        outcome: 'A secured REST API with users, roles and a documented set of endpoints.'
      },
      {
        title: 'Full Stack Integration & Deployment',
        tag: 'Weeks 20–24',
        description: 'Wiring the two halves together, then getting it online and keeping it there.',
        skills: ['API integration', 'Environment config', 'File uploads', 'Payments basics', 'CI/CD', 'Deployment'],
        tech: ['Vercel', 'Render', 'GitHub Actions', 'Cloudinary'],
        outcome: 'A deployed full-stack capstone with a real database, real auth and a real domain.'
      }
    ],
    technologies: [
      { name: 'React', note: 'Component-based UI' },
      { name: 'Node', note: 'Server-side JavaScript' },
      { name: 'Express', note: 'API framework' },
      { name: 'MongoDB', note: 'Document database' },
      { name: 'PostgreSQL', note: 'Relational database' },
      { name: 'Tailwind', note: 'Utility-first CSS' },
      { name: 'Git', note: 'Version control' },
      { name: 'Vercel', note: 'Deployment & hosting' }
    ],
    careers: [
      { icon: 'code', title: 'Frontend Developer', text: 'Build the interface layer of a product with React and modern CSS.' },
      { icon: 'server', title: 'Backend Developer', text: 'Design APIs, data models and authentication for real applications.' },
      { icon: 'stack', title: 'Full Stack Developer', text: 'Own a feature from database schema to deployed interface.' },
      { icon: 'bot', title: 'Web Application Developer', text: 'Deliver internal tools and dashboards for businesses.' },
      { icon: 'spark', title: 'Freelance Developer', text: 'Take client projects end to end, including hosting and handover.' },
      { icon: 'career', title: 'Junior Software Engineer', text: 'Join a product team with Git, testing and review habits already in place.' }
    ],
    featured: {
      title: 'Course Booking Platform',
      kicker: 'Capstone project',
      text: 'A full-stack application with student and admin roles, course catalogue, seat availability, payment flow, email confirmations and an analytics dashboard. React on the front, Express and PostgreSQL behind it, deployed with CI on every push.',
      tags: ['React', 'Express', 'PostgreSQL', 'CI/CD'],
      difficulty: 'Advanced',
      status: 'Deployed',
      lines: [
        'router.post("/bookings", auth, async (req, res) => {',
        '  const seat = await Seat.reserve(req.body.slotId)',
        '  if (!seat) return res.status(409).json({ error: "full" })',
        '',
        '  const booking = await Booking.create({',
        '    userId: req.user.id, seatId: seat.id',
        '  })',
        '  res.status(201).json(booking)',
        '})'
      ]
    },
    projects: [
      { title: 'Weather Dashboard', text: 'Live API data with search history and unit switching.', tags: ['JS', 'Fetch'], size: 'sm' },
      { title: 'Blog Platform', text: 'Markdown posts, comments and an admin editor.', tags: ['React', 'Node'], size: 'lg' },
      { title: 'Task Manager', text: 'Drag-and-drop boards with persistence and filters.', tags: ['React', 'MongoDB'], size: 'sm' },
      { title: 'Chat App', text: 'Realtime rooms over WebSockets with presence.', tags: ['Socket.IO', 'Node'], size: 'sm' },
      { title: 'E-commerce Store', text: 'Catalogue, cart, checkout and order history.', tags: ['React', 'Stripe'], size: 'lg' }
    ],

    overviewTitle: WEB_DEVELOPMENT_OVERVIEW.title,
    overviewLead: WEB_DEVELOPMENT_OVERVIEW.lead,
    overviewBody: WEB_DEVELOPMENT_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, and carries
       its own `requirements` list — see web-development-copy.js */
    joiners: WEB_DEVELOPMENT_JOINERS,
    narrative: WEB_DEVELOPMENT_NARRATIVE,

    /* the course's own students, replacing the three the factory
       writes for a course with none */
    testimonials: WEB_DEVELOPMENT_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: WEB_DEVELOPMENT_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Start building real web applications',
    enquireText:
      'Take the first step toward becoming a job-ready full-stack developer. Join Ludhiana’s trusted IT training institute and turn coding from a resume keyword into a real, deployable skill.'
  },

  {
    slug: 'mern-stack',
    name: 'MERN Stack Development Course',
    short: 'MERN Stack',
    subject: 'the MERN stack',
    category: 'Programming',
    eyebrow: 'MongoDB · Express · React · Node',
    heroArt: '/courses/mern-stack-hero.webp',
    heroArtSize: [1496, 1011],
    heroArtAlt:
      'A MERN stack workspace — a React interface, a Node API and the MongoDB data behind them',
    duration: '5–6 months',
    headline: ['One language.', 'The entire stack.'],
    sub: 'JavaScript from the database driver to the browser — the stack most Indian product startups hire for, taught the way they actually build.',
    projectCount: 'Five shipped',
    highlights: [
      'JavaScript everywhere — no context switching',
      'Auth, payments and file uploads done properly',
      'Deployed with CI, not copied to a server'
    ],
    code: {
      lang: 'js',
      file: 'course.model',
      lines: [
        'const courseSchema = new Schema({',
        '  title: { type: String, required: true },',
        '  slug: { type: String, unique: true },',
        '  seats: { type: Number, default: 30 }',
        '})',
        '',
        'export default model("Course", courseSchema)'
      ],
      command: 'npm run dev',
      output: 'MongoDB connected · API on :5000'
    },
    badges: ['MongoDB', 'Express', 'React', 'Node'],
    modules: [
      {
        title: 'JavaScript & Tooling',
        tag: 'Weeks 1–4',
        description: 'Modern JavaScript, npm, bundlers and the Git workflow the rest of the course runs on.',
        skills: ['ES6+ features', 'Async patterns', 'Modules', 'npm & scripts', 'Git branching', 'Debugging'],
        tech: ['JavaScript', 'Node', 'Vite', 'Git'],
        outcome: 'A small CLI tool and an API-driven page that both run from your own repository.'
      },
      {
        title: 'React Frontend',
        tag: 'Weeks 5–9',
        description: 'Component architecture, hooks, routing and state that scales past a tutorial.',
        skills: ['Hooks', 'Context & reducers', 'React Router', 'Forms & validation', 'Data fetching', 'Component design'],
        tech: ['React', 'React Router', 'Tailwind', 'Axios'],
        outcome: 'A production-shaped React frontend with routing, auth screens and API integration.'
      },
      {
        title: 'Node, Express & MongoDB',
        tag: 'Weeks 10–14',
        description: 'The server half: REST design, schemas, relationships and query performance.',
        skills: ['Express routing', 'Middleware', 'Mongoose schemas', 'Aggregation', 'Indexing', 'Error handling'],
        tech: ['Node', 'Express', 'MongoDB', 'Mongoose'],
        outcome: 'A documented REST API with nested resources and indexed queries.'
      },
      {
        title: 'Auth, Payments & Files',
        tag: 'Weeks 15–18',
        description: 'The three things every real application needs and every tutorial skips.',
        skills: ['JWT & refresh tokens', 'Role-based access', 'Razorpay / Stripe', 'File uploads', 'Email flows', 'Security headers'],
        tech: ['JWT', 'Razorpay', 'Cloudinary', 'Nodemailer'],
        outcome: 'A secured application with paid checkout, image uploads and transactional email.'
      },
      {
        title: 'Testing, CI & Deployment',
        tag: 'Weeks 19–22',
        description: 'Shipping responsibly — tests, pipelines, monitoring and a real deployment.',
        skills: ['Jest & Supertest', 'React Testing Library', 'GitHub Actions', 'Environment management', 'Logging', 'Deployment'],
        tech: ['Jest', 'GitHub Actions', 'Vercel', 'Render'],
        outcome: 'Your capstone deployed with automated tests running on every pull request.'
      }
    ],
    technologies: [
      { name: 'MongoDB', note: 'Document database' },
      { name: 'Express', note: 'API framework' },
      { name: 'React', note: 'Frontend library' },
      { name: 'Node', note: 'JavaScript runtime' },
      { name: 'Mongoose', note: 'Schemas & queries' },
      { name: 'Redux Toolkit', note: 'Predictable state' },
      { name: 'JWT', note: 'Authentication' },
      { name: 'Vercel', note: 'Deployment' }
    ],
    careers: [
      { icon: 'stack', title: 'MERN Stack Developer', text: 'Own features across React, Express and MongoDB in a product team.' },
      { icon: 'code', title: 'Full Stack Developer', text: 'Ship end-to-end functionality without waiting on another team.' },
      { icon: 'server', title: 'Node.js Backend Developer', text: 'Build and scale the API layer of a JavaScript product.' },
      { icon: 'spark', title: 'React Developer', text: 'Specialise in the frontend with real backend context behind you.' },
      { icon: 'bot', title: 'SaaS Developer', text: 'Build subscription products with auth, billing and tenancy.' },
      { icon: 'career', title: 'Freelance Full Stack Developer', text: 'Deliver complete client applications, hosting included.' }
    ],
    featured: {
      title: 'Multi-Vendor Marketplace',
      kicker: 'Capstone project',
      text: 'A MERN marketplace with separate vendor and buyer roles, product management, cart and checkout through a payment gateway, order tracking, reviews and an admin analytics dashboard — tested, containerised and deployed with a CI pipeline.',
      tags: ['MERN', 'Razorpay', 'Redux', 'CI/CD'],
      difficulty: 'Advanced',
      status: 'Deployed',
      lines: [
        'app.post("/api/orders", protect, async (req, res) => {',
        '  const order = await Order.create({',
        '    buyer: req.user._id,',
        '    items: req.body.items,',
        '    total: calcTotal(req.body.items)',
        '  })',
        '',
        '  res.status(201).json(order)',
        '})'
      ]
    },
    projects: [
      { title: 'Notes App', text: 'CRUD notes with search, tags and user accounts.', tags: ['React', 'Mongo'], size: 'sm' },
      { title: 'Social Feed', text: 'Posts, likes, comments and an infinite-scroll timeline.', tags: ['MERN', 'JWT'], size: 'lg' },
      { title: 'Job Board', text: 'Employer and candidate roles with applications and filters.', tags: ['Express', 'Mongo'], size: 'sm' },
      { title: 'Realtime Chat', text: 'Rooms, typing indicators and delivery status.', tags: ['Socket.IO'], size: 'sm' },
      { title: 'Admin Dashboard', text: 'Charts, tables and role-gated actions over a live API.', tags: ['React', 'Redux'], size: 'lg' }
    ],

    overviewTitle: MERN_OVERVIEW.title,
    overviewLead: MERN_OVERVIEW.lead,
    overviewBody: MERN_OVERVIEW.body,

    joiners: MERN_JOINERS,
    narrative: MERN_NARRATIVE,
    testimonials: MERN_TESTIMONIALS,

    ownFaqs: true,
    faqs: MERN_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Start your full-stack development journey',
    enquireText:
      'Want to learn modern web development and build practical applications? Enquire about the MERN Stack Course in Ludhiana — React, Node.js, JavaScript, APIs and full-stack project development.'
  },

  {
    slug: 'mean-stack',
    name: 'MEAN Stack Development Course',
    short: 'MEAN Stack',
    subject: 'the MEAN stack',
    category: 'Programming',
    eyebrow: 'MongoDB · Express · Angular · Node',
    heroArt: '/courses/mean-stack-hero.webp',
    heroArtSize: [1524, 1024],
    heroArtAlt:
      'A MEAN stack workspace — an Angular interface, a Node API and the MongoDB data behind them',
    duration: '5–6 months',
    headline: ['Angular front.', 'Node behind it.'],
    sub: 'TypeScript-first full stack development with Angular, RxJS and a Node API — the structure enterprise teams pick when a codebase has to last.',
    projectCount: 'Five shipped',
    highlights: [
      'TypeScript from the first file',
      'Angular architecture, not just components',
      'Enterprise patterns: DI, guards, interceptors'
    ],
    code: {
      lang: 'js',
      file: 'course.service.ts',
      lines: [
        '@Injectable({ providedIn: "root" })',
        'export class CourseService {',
        '  constructor(private http: HttpClient) {}',
        '',
        '  list(): Observable<Course[]> {',
        '    return this.http.get<Course[]>("/api/courses")',
        '  }',
        '}'
      ],
      command: 'ng serve',
      output: 'Compiled successfully'
    },
    badges: ['Angular', 'RxJS', 'TypeScript', 'Node'],
    modules: [
      {
        title: 'TypeScript & JavaScript Core',
        tag: 'Weeks 1–4',
        description: 'Types, interfaces, generics and the async model Angular depends on.',
        skills: ['Types & interfaces', 'Generics', 'Decorators', 'Modules', 'async/await', 'Tooling'],
        tech: ['TypeScript', 'Node', 'npm', 'Git'],
        outcome: 'A typed utility library with strict compiler settings and no `any`.'
      },
      {
        title: 'Angular Fundamentals',
        tag: 'Weeks 5–9',
        description: 'Components, templates, dependency injection and the Angular CLI workflow.',
        skills: ['Components & templates', 'Data binding', 'Directives & pipes', 'Services & DI', 'Routing', 'Lifecycle hooks'],
        tech: ['Angular', 'Angular CLI', 'Angular Material'],
        outcome: 'A routed Angular application with shared services and a Material design layer.'
      },
      {
        title: 'RxJS, Forms & State',
        tag: 'Weeks 10–13',
        description: 'Reactive streams, reactive forms and keeping application state predictable.',
        skills: ['Observables & operators', 'Reactive forms', 'Guards & interceptors', 'NgRx basics', 'Lazy loading', 'Error handling'],
        tech: ['RxJS', 'NgRx', 'Angular Forms'],
        outcome: 'A dashboard with reactive forms, route guards and an HTTP interceptor for auth.'
      },
      {
        title: 'Node, Express & MongoDB',
        tag: 'Weeks 14–18',
        description: 'The API tier: REST design, validation, schemas and secured access.',
        skills: ['Express routing', 'Mongoose models', 'JWT auth', 'Validation', 'Aggregation', 'API documentation'],
        tech: ['Node', 'Express', 'MongoDB', 'Swagger'],
        outcome: 'A documented, secured REST API that the Angular client consumes end to end.'
      },
      {
        title: 'Testing & Enterprise Delivery',
        tag: 'Weeks 19–22',
        description: 'Unit tests, end-to-end tests, builds and deployment for a codebase with a long life.',
        skills: ['Jasmine & Karma', 'Cypress', 'Build optimisation', 'Environment config', 'CI pipelines', 'Deployment'],
        tech: ['Jasmine', 'Cypress', 'Docker', 'GitHub Actions'],
        outcome: 'A tested, containerised MEAN capstone deployed through a CI pipeline.'
      }
    ],
    technologies: [
      { name: 'Angular', note: 'Application framework' },
      { name: 'TypeScript', note: 'Typed JavaScript' },
      { name: 'RxJS', note: 'Reactive streams' },
      { name: 'Node', note: 'Server runtime' },
      { name: 'Express', note: 'API framework' },
      { name: 'MongoDB', note: 'Document database' },
      { name: 'NgRx', note: 'State management' },
      { name: 'Docker', note: 'Containerised deploys' }
    ],
    careers: [
      { icon: 'stack', title: 'MEAN Stack Developer', text: 'Deliver features across Angular and a Node API in one team.' },
      { icon: 'code', title: 'Angular Developer', text: 'Build large, typed frontends that stay maintainable over years.' },
      { icon: 'server', title: 'Node.js Developer', text: 'Own the API and data layer of an enterprise application.' },
      { icon: 'career', title: 'Enterprise Application Developer', text: 'Work on internal systems where structure and testing matter most.' },
      { icon: 'chart', title: 'Frontend Architect (track)', text: 'Grow into decisions about module structure, state and performance.' },
      { icon: 'spark', title: 'Full Stack TypeScript Developer', text: 'Use one typed language across the whole product.' }
    ],
    featured: {
      title: 'Hospital Management System',
      kicker: 'Capstone project',
      text: 'An Angular + Node system with doctor, reception and admin roles, appointment scheduling with conflict detection, patient records, billing and printable reports. Built with lazy-loaded modules, route guards, NgRx state and an end-to-end Cypress suite.',
      tags: ['Angular', 'NgRx', 'Express', 'Cypress'],
      difficulty: 'Advanced',
      status: 'Deployed',
      lines: [
        'export const routes: Routes = [',
        '  {',
        '    path: "appointments",',
        '    canActivate: [authGuard],',
        '    loadChildren: () =>',
        '      import("./appointments/routes")',
        '  }',
        ']'
      ]
    },
    projects: [
      { title: 'Contact Manager', text: 'A first Angular CRUD app with reactive forms.', tags: ['Angular', 'Forms'], size: 'sm' },
      { title: 'Inventory Dashboard', text: 'Tables, filters and charts fed by a live API.', tags: ['RxJS', 'Material'], size: 'lg' },
      { title: 'Auth Starter', text: 'Login, guards, interceptors and refresh tokens.', tags: ['JWT', 'Guards'], size: 'sm' },
      { title: 'Ticketing System', text: 'Queues, assignment and status workflow.', tags: ['NgRx', 'Node'], size: 'sm' },
      { title: 'Learning Portal', text: 'Courses, enrolment and progress tracking.', tags: ['MEAN'], size: 'lg' }
    ],

    overviewTitle: MEAN_OVERVIEW.title,
    overviewLead: MEAN_OVERVIEW.lead,
    overviewBody: MEAN_OVERVIEW.body,

    joiners: MEAN_JOINERS,
    narrative: MEAN_NARRATIVE,
    testimonials: MEAN_TESTIMONIALS,

    ownFaqs: true,
    faqs: MEAN_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Start your MEAN Stack development journey',
    enquireText:
      'Ready to learn modern web development and work toward becoming a full-stack developer? Enquire about the MEAN Stack Course in Ludhiana — MongoDB, Express.js, Angular and Node.js, taught through coding practice, assignments and practical projects.'
  },

  {
    slug: 'php-full-stack',
    name: 'PHP Full Stack Development Course',
    short: 'PHP Full Stack',
    subject: 'PHP',
    category: 'Programming',
    eyebrow: 'PHP, Laravel and MySQL',
    heroArt: '/courses/php-full-stack-hero.webp',
    heroArtSize: [1536, 1009],
    heroArtAlt:
      'A PHP development workspace — an editor, a MySQL database and the web application the course builds',
    duration: '4–5 months',
    headline: ['Build with PHP.', 'Ship with Laravel.'],
    sub: 'Core PHP, MySQL and Laravel — the stack behind most of the web, and the one small businesses and agencies hire for most often.',
    projectCount: 'Five shipped',
    highlights: [
      'Core PHP before any framework',
      'Laravel taught the way agencies use it',
      'Live deployment on real hosting'
    ],
    code: {
      lang: 'php',
      file: 'CourseController.php',
      lines: [
        'class CourseController extends Controller',
        '{',
        '    public function index()',
        '    {',
        '        return Course::with("modules")->paginate(12);',
        '    }',
        '}'
      ],
      command: 'php artisan serve',
      output: 'Server running on http://127.0.0.1:8000'
    },
    badges: ['Laravel', 'MySQL', 'Blade', 'REST'],
    modules: [
      {
        title: 'Core PHP',
        tag: 'Weeks 1–4',
        description: 'Syntax, arrays, forms, sessions and file handling — PHP without a framework doing the work.',
        skills: ['Syntax & types', 'Arrays & strings', 'Form handling', 'Sessions & cookies', 'File uploads', 'Error handling'],
        tech: ['PHP 8', 'XAMPP', 'VS Code'],
        outcome: 'A working login and registration system written in plain PHP.'
      },
      {
        title: 'MySQL & Data Modelling',
        tag: 'Weeks 5–7',
        description: 'Schema design, joins and safe queries — the part that separates a working site from a hacked one.',
        skills: ['Schema design', 'Joins & subqueries', 'Indexes', 'PDO & prepared statements', 'Transactions', 'Normalisation'],
        tech: ['MySQL', 'phpMyAdmin', 'PDO'],
        outcome: 'A normalised database with a PHP data layer that is safe from SQL injection.'
      },
      {
        title: 'Object-Oriented PHP & MVC',
        tag: 'Weeks 8–10',
        description: 'Classes, namespaces, Composer and building your own small MVC before Laravel gives you one.',
        skills: ['Classes & interfaces', 'Namespaces', 'Composer', 'Autoloading', 'MVC pattern', 'Routing basics'],
        tech: ['PHP 8', 'Composer', 'Git'],
        outcome: 'A miniature MVC framework you wrote, so Laravel stops looking like magic.'
      },
      {
        title: 'Laravel Framework',
        tag: 'Weeks 11–16',
        description: 'Eloquent, Blade, migrations, queues and the tooling that makes Laravel productive.',
        skills: ['Eloquent ORM', 'Blade templates', 'Migrations & seeders', 'Middleware', 'Auth & policies', 'Queues & jobs'],
        tech: ['Laravel', 'Eloquent', 'Blade', 'Artisan'],
        outcome: 'A multi-role Laravel application with authentication, policies and background jobs.'
      },
      {
        title: 'APIs, Frontend & Deployment',
        tag: 'Weeks 17–20',
        description: 'REST APIs, a JavaScript frontend against them, and getting the whole thing on live hosting.',
        skills: ['REST API design', 'Sanctum auth', 'AJAX & fetch', 'Payment integration', 'cPanel deployment', 'Optimisation'],
        tech: ['Laravel Sanctum', 'Alpine', 'Razorpay', 'cPanel'],
        outcome: 'Your capstone live on real hosting with a payment gateway wired in.'
      }
    ],
    technologies: [
      { name: 'PHP 8', note: 'Core language' },
      { name: 'Laravel', note: 'Application framework' },
      { name: 'MySQL', note: 'Relational database' },
      { name: 'Eloquent', note: 'ORM & relationships' },
      { name: 'Blade', note: 'Templating' },
      { name: 'Composer', note: 'Dependency manager' },
      { name: 'Git', note: 'Version control' },
      { name: 'cPanel', note: 'Hosting & deployment' }
    ],
    careers: [
      { icon: 'code', title: 'PHP Developer', text: 'Build and maintain web applications for agencies and product teams.' },
      { icon: 'stack', title: 'Laravel Developer', text: 'Deliver complete Laravel applications with auth, admin and payments.' },
      { icon: 'server', title: 'Backend Developer', text: 'Own the database, API and business logic of a web product.' },
      { icon: 'bot', title: 'CMS Developer', text: 'Extend WordPress and custom CMS platforms with PHP.' },
      { icon: 'spark', title: 'Freelance Web Developer', text: 'Deliver client sites and portals end to end, hosting included.' },
      { icon: 'career', title: 'Full Stack Developer', text: 'Combine Laravel with a JavaScript frontend for complete ownership.' }
    ],
    featured: {
      title: 'School Management Portal',
      kicker: 'Capstone project',
      text: 'A Laravel application serving admin, teacher, student and parent roles — attendance, timetables, exam results, fee collection with an online payment gateway, and PDF report cards. Deployed to real hosting with scheduled jobs and daily database backups.',
      tags: ['Laravel', 'MySQL', 'Payments', 'PDF'],
      difficulty: 'Advanced',
      status: 'Live site',
      lines: [
        'Route::middleware(["auth", "role:teacher"])',
        '    ->group(function () {',
        '        Route::post("/attendance", [',
        '            AttendanceController::class, "store"',
        '        ]);',
        '    });'
      ]
    },
    projects: [
      { title: 'Contact Form Backend', text: 'Validated submissions stored in MySQL with email alerts.', tags: ['PHP', 'MySQL'], size: 'sm' },
      { title: 'Blog CMS', text: 'Posts, categories, media library and an admin panel.', tags: ['Laravel', 'Blade'], size: 'lg' },
      { title: 'Booking System', text: 'Slot availability, reservations and confirmation email.', tags: ['Laravel'], size: 'sm' },
      { title: 'Inventory Manager', text: 'Stock levels, suppliers and low-stock alerts.', tags: ['PHP', 'PDO'], size: 'sm' },
      { title: 'E-commerce Store', text: 'Catalogue, cart, checkout and order management.', tags: ['Laravel', 'Razorpay'], size: 'lg' }
    ],

    overviewTitle: PHP_OVERVIEW.title,
    overviewLead: PHP_OVERVIEW.lead,
    overviewBody: PHP_OVERVIEW.body,

    joiners: PHP_JOINERS,
    narrative: PHP_NARRATIVE,
    testimonials: PHP_TESTIMONIALS,

    ownFaqs: true,
    faqs: PHP_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Start learning PHP and build your web development skills',
    enquireText:
      'Want to learn PHP and move toward a career in web development? Enquire about the PHP Course in Ludhiana — PHP programming, MySQL, database connectivity, forms, CRUD operations, authentication and dynamic web application development.'
  }
]
