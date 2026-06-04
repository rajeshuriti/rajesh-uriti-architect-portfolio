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
  image: string | null
  transparent?: boolean
  accentColor: string
}

export const chapters: Chapter[] = [
  {
    id: 'learning-to-build',
    number: '01',
    title: 'Learning to Build',
    years: '2009',
    company: 'Cyient Limited',
    role: 'Software Developer',
    description:
      'Every architect starts somewhere. My journey began at Cyient Limited — contributing to enterprise application development, maintenance, testing, troubleshooting, and technical documentation. Writing the first professional lines of code taught me that software is only as good as the discipline behind it.',
    quote:
      '"Every architect starts somewhere. I started with a single line of code."',
    keyLesson: 'Discipline and documentation are the foundation of everything that follows.',
    skills: ['C#', '.NET', 'Visual Studio', 'Enterprise Applications', 'Technical Documentation'],
    image: '/Pictures/Stitch/stitch_the_curious_developer/Learning to Build.png',
    transparent: true,
    accentColor: '#adc6ff',
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
    image: '/Pictures/Stitch/stitch_the_curious_developer/Leraning User Experience.png',
    transparent: true,
    accentColor: '#d0bcff',
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
    image: '/Pictures/Stitch/stitch_the_curious_developer/Learning Enterprise Systems.png',
    transparent: true,
    accentColor: '#4edea3',
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
    image: '/Pictures/Stitch/stitch_the_curious_developer/Thinking in Systems.png',
    transparent: true,
    accentColor: '#adc6ff',
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
    image: '/Pictures/Stitch/stitch_the_curious_developer/Leading & Architecting.png',
    transparent: true,
    accentColor: '#4edea3',
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
    image: '/Pictures/Stitch/stitch_the_curious_developer/Learning AI.png',
    transparent: true,
    accentColor: '#d0bcff',
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
    image: '/Pictures/Stitch/stitch_the_curious_developer/Still Learning.png',
    transparent: true,
    accentColor: '#4edea3',
  },
]
