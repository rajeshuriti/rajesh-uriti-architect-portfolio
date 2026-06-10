export interface ChapterContribution {
  dateRange: string
  location: string
  duration: string
  client?: string
  clientDesc?: string
  points: string[]
  technologies: string[]
}

export interface Chapter {
  id: string
  number: string
  title: string
  years: string
  company: string
  role: string
  description: string
  quote: string
  keyLesson: string
  skills: string[]
  tier: string
  image: string | null
  video?: string
  transparent?: boolean
  accentColor: string
  contribution?: ChapterContribution
}

export const chapters: Chapter[] = [
  {
    id: 'learning-to-build',
    number: '01',
    title: 'Learning to Build',
    years: '2009 – 2010',
    company: 'Cyient Limited',
    role: 'Software Developer',
    description:
      'Every architect starts somewhere. My journey began at Cyient Limited — contributing to enterprise application development, maintenance, testing, troubleshooting, and technical documentation. Writing the first professional lines of code taught me that software is only as good as the discipline behind it.',
    quote:
      '"Every architect starts somewhere. I started with a single line of code."',
    keyLesson: 'Discipline and documentation are the foundation of everything that follows.',
    skills: ['C#', '.NET', 'Visual Studio', 'Enterprise Applications', 'Technical Documentation'],
    tier: 'DEV',
    image: '/Assets/Images/Learning to Build.png',
    video: '/Assets/Videos/Learning to Build.mp4',
    transparent: true,
    accentColor: '#adc6ff',
    contribution: {
      dateRange: 'May 2009 – Jan 2010',
      location: 'India',
      duration: '9 months',
      client: 'Engineering Clients',
      clientDesc: 'Engineering and technology services',
      points: [
        'Contributed to enterprise application development, maintenance, testing, troubleshooting, and technical documentation.',
        'Gained foundational expertise in project architecture, requirements analysis, and software development processes.',
      ],
      technologies: ['C#', '.NET', 'Visual Studio', 'Enterprise Applications'],
    },
  },
  {
    id: 'learning-user-experience',
    number: '02',
    title: 'Learning User Experience',
    years: '2010 – 2012',
    company: 'ATOS Syntel',
    role: 'Software Engineer',
    description:
      'At ATOS Syntel, I built full-stack healthcare applications for clinical users — systems where a confusing interface is not just frustrating but dangerous. Integrating Google APIs and supporting live production environments taught me that every application ultimately serves a person, and how you design that interface determines whether they trust the system or fight it.',
    quote:
      '"Healthcare software taught me that UX is not a nice-to-have. When lives depend on clarity, design becomes responsibility."',
    keyLesson: 'Understanding users makes you a better developer.',
    skills: ['Full-Stack Development', 'Healthcare Applications', 'Database Solutions', 'Google APIs', 'Production Support'],
    tier: 'SE',
    image: '/Assets/Images/Leraning User Experience.png',
    video: '/Assets/Videos/Leraning User Experience.mp4',
    transparent: true,
    accentColor: '#d0bcff',
    contribution: {
      dateRange: 'Feb 2010 – Aug 2012',
      location: 'India',
      duration: '2.5 years',
      client: 'Various Clients',
      clientDesc: 'Healthcare and enterprise technology clients',
      points: [
        'Developed full-stack healthcare applications, database solutions, and Google API integrations while supporting production environments.',
        'Contributed to end-to-end development lifecycle — requirements analysis through deployment — and database design for optimal performance.',
      ],
      technologies: ['.NET Framework', 'SQL Server', 'Web Development', 'Google APIs'],
    },
  },
  {
    id: 'learning-enterprise-systems',
    number: '03',
    title: 'Learning Enterprise Systems',
    years: '2012 – 2017',
    company: 'Tata Consultancy Services',
    role: 'Application Developer',
    description:
      'Five years at TCS building enterprise healthcare applications at scale. I worked with .NET Framework, Angular, JavaScript, and SQL Server — developing reusable components, responsive UIs, and participating in project planning, technical analysis, and effort estimation. Enterprise software operates at a different scale: complexity, compliance, and cross-team coordination become the real engineering challenges.',
    quote:
      '"Enterprise software is not just bigger software. It is a different discipline — where reliability is the product, not a feature."',
    keyLesson: 'Reliability is not a feature — it is a foundation.',
    skills: ['.NET Framework', 'Angular', 'JavaScript', 'SQL Server', 'Healthcare Systems', 'Systems Analysis'],
    tier: 'SDE',
    image: '/Assets/Images/Learning Enterprise Systems.png',
    video: '/Assets/Videos/Learning Enterprise Systems.mp4',
    transparent: true,
    accentColor: '#4edea3',
    contribution: {
      dateRange: 'Sep 2012 – Mar 2017',
      location: 'India',
      duration: '4.5 years',
      client: 'Multiple Clients',
      clientDesc: 'Enterprise healthcare and identity management clients',
      points: [
        'Developed enterprise healthcare applications using .NET Framework, Angular, JavaScript, and SQL Server.',
        'Participated in project planning, technical analysis, effort estimation, and enterprise application development.',
        'Designed reusable application components and responsive user interfaces, serving 10,000+ users.',
      ],
      technologies: ['.NET Framework', 'Angular', 'jQuery', 'Bootstrap', 'SQL Server'],
    },
  },
  {
    id: 'thinking-in-systems',
    number: '04',
    title: 'Thinking in Systems',
    years: '2017 – 2019',
    company: 'Cognizant Technology Solutions',
    role: 'Full-Stack Application Architect',
    description:
      'At Cognizant, I grew from Senior Software Engineer to Full-Stack Application Architect over five years. I began by leading development of ASP.NET MVC and Angular-based enrollment platforms for utility customers — designing Web APIs, scalable application architectures, and optimizing SQL Server stored procedures for transactional systems across AWS and on-premises environments. As my scope expanded, I transformed tightly coupled monolithic applications into a scalable ecosystem of 18 microservices using C#, .NET Core, and REST APIs — applying SOLID principles and enterprise design patterns throughout. I architected CI/CD pipelines using GitHub Actions and Docker, and optimized SQL Server and PostgreSQL platforms alongside ETL workflows and data integration processes. This was where I stopped writing features and started designing systems at scale.',
    quote:
      '"Breaking a monolith is not a technical problem. It is an organizational one. The microservices are the easy part."',
    keyLesson: 'Understand the whole before optimizing the part — then design it to scale gracefully.',
    skills: ['ASP.NET MVC', 'Angular', 'Web APIs', 'SQL Server', 'AWS', 'Systems Analysis', 'Solution Design', 'Microservices', '.NET Core', 'Docker', 'GitHub Actions', 'REST APIs', 'PostgreSQL', 'ETL', 'SOLID Principles'],
    tier: 'ARCH',
    image: '/Assets/Images/Thinking in Systems.png',
    video: '/Assets/Videos/Thinking in Systems.mp4',
    transparent: true,
    accentColor: '#adc6ff',
    contribution: {
      dateRange: 'Mar 2017 – Dec 2018',
      location: 'Mississauga, ON',
      duration: '2 years',
      client: 'NextEra Energy',
      clientDesc: "North America's largest clean energy company (S&P 500, Fortune 200)",
      points: [
        'Led development of ASP.NET MVC and Angular-based enrollment platforms for utility customers, designing Web APIs and scalable application architectures to support business growth and future enhancements.',
        'Optimised SQL Server stored procedures, functions, and database performance for high-volume transactional systems.',
        'Participated in requirements analysis, project planning, estimation, systems analysis, and technical solution design.',
        'Worked across AWS and on-premises infrastructure environments supporting enterprise deployments.',
      ],
      technologies: ['ASP.NET MVC', 'Web APIs', '.NET Framework', 'Angular', 'SQL Server', 'AWS'],
    },
  },
  {
    id: 'learning-leadership',
    number: '05',
    title: 'Leading & Architecting',
    years: '2019 – 2022',
    company: 'Cognizant Technology Solutions',
    role: 'Full-Stack Application Architect',
    description:
      'Serving as Solution Architect and Technical Lead at Cognizant, I led 12 enterprise-scale customer-facing applications supporting planning, execution, risk assessment, compliance, safety, and reporting processes. I provided technical leadership, architecture governance, mentoring, and engineering best practices across cross-functional teams of 38+ developers, QA engineers, and DevOps professionals. On the architecture side, I designed and delivered AWS-based cloud solutions across EC2, S3, Lambda, ECS, ECR, FSx, IAM, and DMS — conducting systems analysis, technical feasibility assessments, architecture reviews, and stakeholder workshops to align technology investments with business objectives and strategic roadmaps.',
    quote:
      '"Your job as a technical leader is to make the team succeed — not to be the smartest person in every room."',
    keyLesson: 'Empowered teams and timeless architecture principles are what scale systems — and people.',
    skills: ['Solution Architecture', 'Architecture Governance', 'Technical Leadership', 'Mentoring', 'Stakeholder Workshops', 'Technology Roadmaps', 'AWS EC2', 'S3', 'Lambda', 'ECS', 'ECR', 'FSx', 'IAM', 'DMS', 'CI/CD', 'Docker'],
    tier: 'LEAD',
    image: '/Assets/Images/Leading & Architecting.png',
    transparent: true,
    accentColor: '#4edea3',
    contribution: {
      dateRange: 'Jan 2019 – Dec 2022',
      location: 'Mississauga, ON',
      duration: '3 years',
      client: 'NextEra Energy',
      clientDesc: "North America's largest clean energy company (S&P 500, Fortune 200)",
      points: [
        'Served as Solution Architect and Technical Lead for 12 enterprise-scale customer-facing applications supporting planning, execution, risk assessment, compliance, safety, and reporting processes for thousands of users across multiple business functions.',
        'Directed application architecture, modernization, and technology transformation initiatives using C#, .NET Core, Angular, REST APIs, and Microservices Architecture, transforming tightly coupled applications into a scalable ecosystem of 18 microservices while applying SOLID principles and enterprise design patterns.',
        'Conducted systems analysis, technical feasibility assessments, architecture reviews, and stakeholder workshops to align technology investments with business objectives and strategic roadmaps.',
        'Optimized SQL Server and PostgreSQL platforms, ETL workflows, and data integration processes while architecting AWS-based cloud solutions and CI/CD pipelines using GitHub Actions and Docker to improve scalability, reliability, and deployment efficiency.',
        'Provided technical leadership, architecture governance, mentoring, and engineering best practices across cross-functional teams of 38+ developers, QA engineers, and DevOps professionals.',
      ],
      technologies: ['C#', '.NET Core', 'Angular', 'REST APIs', 'Microservices', 'SQL Server', 'PostgreSQL', 'AWS', 'GitHub Actions', 'Docker', 'ETL'],
    },
  },
  {
    id: 'learning-ai',
    number: '06',
    title: 'Learning AI',
    years: '2022 – 2024',
    company: 'Cognizant Technology Solutions',
    role: 'Full-Stack Application Architect',
    description:
      'I drove enterprise AI adoption through evaluation and integration of Anthropic Claude, OpenAI GPT, and Google Gemini. Using Python, the Anthropic SDK, and OpenAI APIs, I built AI-powered applications with Retrieval Augmented Generation (RAG), semantic search, vector embeddings, and prompt engineering techniques — delivering AI-assisted automation and knowledge retrieval solutions while assessing model performance, latency, security, scalability, and cost.',
    quote:
      '"AI is not magic. It is infrastructure — with new failure modes, new capabilities, and new responsibilities that demand the same engineering rigour as any critical system."',
    keyLesson: 'AI is infrastructure. Treat it with the same rigour as any critical system.',
    skills: ['Anthropic Claude SDK', 'OpenAI API', 'Google Gemini', 'Python', 'FastAPI', 'RAG', 'Prompt Engineering', 'Vector Embeddings', 'Semantic Search'],
    tier: 'AI',
    image: '/Assets/Images/Learning AI.png',
    transparent: true,
    accentColor: '#d0bcff',
    contribution: {
      dateRange: 'Jan 2022 – Dec 2024',
      location: 'Mississauga, ON',
      duration: '2 years',
      client: 'Cognizant Technology Solutions',
      clientDesc: 'Enterprise AI adoption and applied AI engineering initiatives',
      points: [
        'Drove enterprise AI adoption through strategic evaluation and integration of Anthropic Claude, OpenAI GPT, and Google Gemini — assessing model capabilities, performance benchmarks, latency profiles, security posture, and total cost of ownership to identify the right LLM for each enterprise use case.',
        'Built AI-powered applications using Python, Anthropic SDK, and OpenAI APIs, implementing Retrieval Augmented Generation (RAG) pipelines, semantic search, vector embeddings, and advanced prompt engineering techniques to deliver accurate, context-aware knowledge retrieval and document intelligence solutions.',
        'Delivered AI-assisted automation solutions across enterprise workflows, reducing manual processing effort and accelerating knowledge discovery through intelligent document retrieval, summarisation, classification, and structured data extraction.',
        'Architected scalable AI application backends using FastAPI and Python, designing modular prompt pipelines, embedding workflows, and vector store integrations that enabled cross-functional teams to extend AI capabilities without rebuilding core infrastructure.',
        'Established responsible AI adoption practices by defining evaluation frameworks covering model performance, hallucination risk, scalability, and cost governance — ensuring AI solutions met enterprise security and compliance standards prior to production deployment.',
      ],
      technologies: ['Python', 'Anthropic Claude SDK', 'OpenAI API', 'Google Gemini', 'FastAPI', 'RAG', 'Vector Embeddings', 'Semantic Search', 'Prompt Engineering'],
    },
  },
  {
    id: 'still-learning',
    number: '07',
    title: 'Still Learning',
    years: '2024 – Present',
    company: 'Cognizant Technology Solutions',
    role: 'Solution Architect & GenAI Architect',
    description:
      'Sixteen years in technology have taught me that great architecture is not defined by technology alone. It\'s defined by the ability to balance innovation, scalability, security, cost, and business outcomes while adapting to constant change. From building applications and designing distributed systems to leading cloud modernization and enterprise AI initiatives, one principle has remained constant: the best solution is rarely the newest technology — it\'s the one that creates the greatest value for the business. That\'s why I continue to learn, explore, and challenge assumptions, helping organizations transform emerging technologies into secure, scalable, and meaningful outcomes.',
    quote:
      '"After sixteen years, curiosity remains my most important architectural skill."',
    keyLesson: 'Curiosity is the most important architectural skill.',
    skills: ['GenAI Architecture', 'AI Transformation', 'LLM Evaluation', 'Enterprise AI Governance', 'AI Agents', 'Workflow Automation'],
    tier: 'SA',
    image: '/Assets/Images/Still Learning.png',
    transparent: true,
    accentColor: '#4edea3',
  },
]
