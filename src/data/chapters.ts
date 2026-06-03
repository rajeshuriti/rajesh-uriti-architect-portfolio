export interface Chapter {
  id: string
  number: string
  title: string
  years: string
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
    description:
      'Every architect starts somewhere. My journey began with a simple goal: learn how software is built. At Cyient, I wrote my first professional lines of C# in Visual Studio, building enterprise applications for real users with real consequences. Quality was not optional.',
    quote:
      '"Every architect starts somewhere. I started with a single line of code."',
    keyLesson: 'Build things that matter to real people.',
    skills: ['C#', '.NET', 'Visual Studio', 'Enterprise Applications'],
    image: '/Pictures/Stitch/stitch_the_curious_developer/Learning to Build.png',
    accentColor: '#adc6ff',
  },
  {
    id: 'learning-user-experience',
    number: '02',
    title: 'Learning User Experience',
    years: '2010 – 2014',
    description:
      'As I gained experience, I realized software is not only about code. Every application ultimately serves a user. Working across healthcare and financial platforms, I became deeply curious about how people interact with technology — and how poor UX erodes even the best-built systems.',
    quote:
      '"As I gained experience, I realized software is not only about code. Every application ultimately serves a user."',
    keyLesson: 'Understanding users makes you a better developer.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Angular'],
    image: '/Pictures/Stitch/stitch_the_curious_developer/Leraning User Experience.png',
    accentColor: '#d0bcff',
  },
  {
    id: 'learning-enterprise-systems',
    number: '03',
    title: 'Learning Enterprise Systems',
    years: '2013 – 2017',
    description:
      'Enterprise software operates at a fundamentally different scale. I worked on mission-critical platforms serving thousands of clinical users — systems where downtime costs lives, not just revenue. Data integrity, compliance, and fault-tolerance became my foundations.',
    quote:
      '"Mission-critical systems taught me that reliability is not a feature — it is the foundation everything else is built on."',
    keyLesson: 'Reliability is not a feature — it is a foundation.',
    skills: ['SQL Server', 'SSIS', 'ETL', 'Healthcare Systems', 'Data Modeling'],
    image: null,
    accentColor: '#4edea3',
  },
  {
    id: 'thinking-in-systems',
    number: '04',
    title: 'Thinking in Systems',
    years: '2015 – 2018',
    description:
      'I started seeing every problem as a system of interacting parts. I studied distributed architecture, domain-driven design, and how complex enterprise systems fail and recover under stress. Architecture became a way of thinking, not just a job title.',
    quote:
      '"Architecture is not about drawing boxes. It is about understanding how things break — and designing so they break gracefully."',
    keyLesson: 'Understand the whole before optimizing the part.',
    skills: ['System Design', 'Domain-Driven Design', 'Event-Driven Architecture', 'Distributed Systems'],
    image: null,
    accentColor: '#adc6ff',
  },
  {
    id: 'learning-to-scale',
    number: '05',
    title: 'Learning to Scale',
    years: '2017 – 2019',
    description:
      'The monolith was cracking under load. I led my first major microservices transformation — decomposing a legacy platform into independently deployable services. I learned how containerization, API gateways, and service meshes enable enterprise-scale delivery without sacrificing stability.',
    quote:
      '"Scalability is an architectural decision made years before you need it."',
    keyLesson: 'Scalability is an architectural decision, not a deployment one.',
    skills: ['Microservices', 'Docker', 'API Gateway', 'AWS', 'Service Mesh'],
    image: null,
    accentColor: '#d0bcff',
  },
  {
    id: 'learning-leadership',
    number: '06',
    title: 'Learning Leadership',
    years: '2018 – 2020',
    description:
      'From individual contributor to technical leader. I began managing cross-functional engineering teams of 38+ engineers, conducting architecture reviews, driving roadmap decisions, and mentoring the next generation of developers. Leadership revealed that the best architecture is built by empowered, aligned teams.',
    quote:
      '"Your job as a leader is to make the team succeed — not to be the smartest person in the room."',
    keyLesson: 'Empowered teams build better systems than brilliant individuals.',
    skills: ['Team Leadership', 'Architecture Reviews', 'Mentoring', 'Technology Roadmaps'],
    image: null,
    accentColor: '#4edea3',
  },
  {
    id: 'modern-architecture',
    number: '07',
    title: 'Modern Architecture',
    years: '2019 – 2022',
    description:
      'Cloud-native became the new normal. I deepened my AWS expertise — designing multi-region architectures, implementing Infrastructure as Code with Terraform, and driving zero-downtime deployments for enterprise workloads serving millions of users across NextEra Energy.',
    quote:
      '"The cloud does not change the principles of good architecture. It just removes the excuses for not practicing them."',
    keyLesson: 'Good architecture principles are timeless — the tools just get better.',
    skills: ['AWS', 'Terraform', 'EC2', 'ECS', 'Lambda', 'S3', 'CI/CD'],
    image: null,
    accentColor: '#adc6ff',
  },
  {
    id: 'learning-ai',
    number: '08',
    title: 'Learning AI',
    years: '2022 – 2024',
    description:
      'The AI inflection point arrived. I became deeply curious about large language models and what they meant for enterprise software. I built RAG pipelines, integrated Claude and GPT into production systems, evaluated LLMs for enterprise use cases, and developed AI governance frameworks.',
    quote:
      '"AI is not magic. It is a new kind of infrastructure — with new failure modes, new capabilities, and new responsibilities."',
    keyLesson: 'AI is infrastructure. Treat it with the same rigor as any critical system.',
    skills: ['Anthropic Claude', 'OpenAI GPT', 'RAG Pipelines', 'Prompt Engineering', 'Vector Search', 'LLM Evaluation'],
    image: null,
    accentColor: '#d0bcff',
  },
  {
    id: 'still-learning',
    number: '09',
    title: 'Still Learning',
    years: '2024 – Present',
    description:
      'The most important thing sixteen years has taught me is that the best engineers never stop being students. Today, as a Solution Architect and GenAI Architect in Canada, I continue to learn — new models, new patterns, new ways of thinking about enterprise transformation at the intersection of AI and human judgment.',
    quote:
      '"After sixteen years, curiosity is still my most important architectural skill."',
    keyLesson: 'Curiosity is the most important architectural skill.',
    skills: ['GenAI Architecture', 'AI Transformation', 'Enterprise Strategy', 'AWS', 'Mississauga, Canada'],
    image: null,
    accentColor: '#4edea3',
  },
]
