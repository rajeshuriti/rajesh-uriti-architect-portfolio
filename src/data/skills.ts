export interface SkillDomain {
  domain: string
  subtitle: string
  accent: string
  skills: string[]
}

export const skillDomains: SkillDomain[] = [
  {
    domain: 'Architecture & Design',
    subtitle: 'Core architecture practice',
    accent: '#adc6ff',
    skills: [
      'Solution Architecture', 'Enterprise Architecture', 'Microservices Architecture',
      'API Design & Strategy', 'System Design', 'Design Patterns', 'SOLID Principles',
      'Domain-Driven Design', 'Technical Feasibility', 'Architecture Reviews', 'SDLC',
    ],
  },
  {
    domain: 'Cloud & Infrastructure',
    subtitle: 'AWS cloud architecture',
    accent: '#4edea3',
    skills: [
      'AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS ECS', 'AWS ECR', 'AWS FSx', 'AWS IAM',
      'AWS DMS', 'Docker', 'Microservices', 'Cloud Migration',
    ],
  },
  {
    domain: 'Generative AI & AI Engineering',
    subtitle: 'Enterprise AI solutions',
    accent: '#d0bcff',
    skills: [
      'Anthropic Claude SDK', 'OpenAI API (GPT)', 'Google Gemini',
      'Retrieval Augmented Generation', 'Prompt Engineering', 'Semantic Search',
      'Vector Embeddings', 'AI Agents', 'LLM Evaluation', 'AI Workflow Automation',
      'Enterprise AI Adoption',
    ],
  },
  {
    domain: 'Backend Engineering',
    subtitle: 'Server-side platforms',
    accent: '#adc6ff',
    skills: [
      'C#', '.NET Core', '.NET Framework', 'ASP.NET MVC', 'Python', 'FastAPI',
      'REST APIs', 'ASP.NET Web APIs', 'Microservices',
    ],
  },
  {
    domain: 'Frontend Engineering',
    subtitle: 'Client-side development',
    accent: '#d0bcff',
    skills: [
      'Angular', 'TypeScript', 'JavaScript', 'React', 'HTML5', 'CSS3', 'jQuery', 'Bootstrap',
    ],
  },
  {
    domain: 'Data & Integration',
    subtitle: 'Data platforms and pipelines',
    accent: '#4edea3',
    skills: [
      'SQL Server', 'PostgreSQL', 'SSIS', 'ETL Processes', 'Database Design',
      'Query Optimization', 'MongoDB', 'NoSQL', 'Integration Patterns', 'Messaging Queues',
    ],
  },
  {
    domain: 'DevOps & CI/CD',
    subtitle: 'Delivery and automation',
    accent: '#adc6ff',
    skills: [
      'GitHub Actions', 'Docker', 'CI/CD Pipelines', 'Git', 'SVN', 'TFS',
      'Automated Testing', 'Code Quality', 'SonarQube', 'Sonar Lint',
    ],
  },
  {
    domain: 'Tools & Practices',
    subtitle: 'Engineering toolchain',
    accent: '#d0bcff',
    skills: [
      'Visual Studio 2022', 'VS Code', 'PyCharm', 'Postman', 'Bruno', 'SoapUI',
      'Locust', 'Confluence', 'Dynatrace', 'Hangfire', 'Agile / Scrum',
    ],
  },
]
