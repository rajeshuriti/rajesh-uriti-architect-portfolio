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
    accentColor: '#4edea3',
  },
  {
    id: 'thinking-in-systems',
    number: '04',
    title: 'Thinking in Systems',
    years: '2017 – 2018',
    company: 'Cognizant Technology Solutions',
    role: 'Senior Software Engineer',
    description:
      'As Senior Software Engineer at Cognizant, I led development of ASP.NET MVC and Angular-based enrollment platforms for utility customers. I designed Web APIs and scalable application architectures, optimized SQL Server stored procedures for transactional systems, and worked across AWS and on-premises environments. This was where I stopped writing features and started designing systems.',
    quote:
      '"Architecture is not about drawing boxes. It is about understanding how things break — and designing so they break gracefully."',
    keyLesson: 'Understand the whole before optimizing the part.',
    skills: ['ASP.NET MVC', 'Angular', 'Web APIs', 'SQL Server', 'AWS', 'Systems Analysis', 'Solution Design'],
    image: null,
    accentColor: '#adc6ff',
  },
  {
    id: 'learning-to-scale',
    number: '05',
    title: 'Learning to Scale',
    years: '2019 – 2022',
    company: 'Cognizant Technology Solutions',
    role: 'Full-Stack Application Architect',
    description:
      'As Application Architect, I transformed tightly coupled monolithic applications into a scalable ecosystem of 18 microservices using C#, .NET Core, Angular, and REST APIs — applying SOLID principles and enterprise design patterns throughout. I architected CI/CD pipelines using GitHub Actions and Docker, and optimized SQL Server and PostgreSQL platforms alongside ETL workflows and data integration processes.',
    quote:
      '"Breaking a monolith is not a technical problem. It is an organizational one. The microservices are the easy part."',
    keyLesson: 'Scalability is an architectural decision, not a deployment one.',
    skills: ['Microservices', '.NET Core', 'Docker', 'GitHub Actions', 'REST APIs', 'PostgreSQL', 'ETL', 'SOLID Principles'],
    image: null,
    accentColor: '#d0bcff',
  },
  {
    id: 'learning-leadership',
    number: '06',
    title: 'Learning Leadership',
    years: '2019 – Present',
    company: 'Cognizant Technology Solutions',
    role: 'Full-Stack Application Architect',
    description:
      'Serving as Solution Architect and Technical Lead for 12 enterprise-scale customer-facing applications supporting planning, execution, risk assessment, compliance, safety, and reporting processes. I provided technical leadership, architecture governance, mentoring, and engineering best practices across cross-functional teams of 38+ developers, QA engineers, and DevOps professionals.',
    quote:
      '"Your job as a technical leader is to make the team succeed — not to be the smartest person in every room."',
    keyLesson: 'Empowered teams build better systems than brilliant individuals.',
    skills: ['Solution Architecture', 'Architecture Governance', 'Technical Leadership', 'Mentoring', 'Stakeholder Workshops', 'Technology Roadmaps'],
    image: null,
    accentColor: '#4edea3',
  },
  {
    id: 'modern-architecture',
    number: '07',
    title: 'Modern Architecture',
    years: '2019 – 2022',
    company: 'Cognizant Technology Solutions',
    role: 'Full-Stack Application Architect',
    description:
      'I architected AWS-based cloud solutions across EC2, S3, Lambda, ECS, ECR, FSx, IAM, and DMS — delivering 12 enterprise applications that support thousands of users across business-critical functions. Conducted systems analysis, technical feasibility assessments, architecture reviews, and stakeholder workshops to align technology investments with business objectives and strategic roadmaps.',
    quote:
      '"The cloud does not change the principles of good architecture. It just removes the excuses for not applying them."',
    keyLesson: 'Good architecture principles are timeless — the tools just get better.',
    skills: ['AWS EC2', 'S3', 'Lambda', 'ECS', 'ECR', 'FSx', 'IAM', 'DMS', 'CI/CD', 'Docker'],
    image: null,
    accentColor: '#adc6ff',
  },
  {
    id: 'learning-ai',
    number: '08',
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
    image: null,
    accentColor: '#d0bcff',
  },
  {
    id: 'still-learning',
    number: '09',
    title: 'Still Learning',
    years: '2024 – Present',
    company: 'Cognizant Technology Solutions',
    role: 'Solution Architect & GenAI Architect',
    description:
      'The most important thing sixteen years has taught me is that the best engineers never stop being students. Today, as a Solution Architect and GenAI Architect in Mississauga, Canada — I continue to evaluate enterprise AI use cases, select appropriate LLM technologies, and design scalable, secure, and business-aligned AI solutions. The journey is still being written.',
    quote:
      '"After sixteen years, curiosity remains my most important architectural skill."',
    keyLesson: 'Curiosity is the most important architectural skill.',
    skills: ['GenAI Architecture', 'AI Transformation', 'LLM Evaluation', 'Enterprise AI Governance', 'AI Agents', 'Workflow Automation'],
    image: null,
    accentColor: '#4edea3',
  },
]
