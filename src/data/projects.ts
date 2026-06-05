export interface Project {
  id: string
  name: string
  category: string
  description: string
  technologies: string[]
  githubUrl: string
  accentColor: string
}

const ACCENT = ['#adc6ff', '#d0bcff', '#4edea3'] as const

export const projects: Project[] = [
  {
    id: 'workflow-animation',
    name: 'Workflow Animation',
    category: 'Technical Diagram to GIF Tool',
    description:
      'Converts animated HTML workflow diagrams into polished GIFs optimised for LinkedIn. Uses Puppeteer + ffmpeg to capture CI/CD pipelines, cloud architectures, RAG pipelines, MLOps flows, and agent systems as shareable animations. Integrates Claude API for diagram generation.',
    technologies: ['Node.js', 'Puppeteer', 'ffmpeg', 'Claude API', 'HTML', 'SVG'],
    githubUrl: 'https://github.com/rajeshuriti/workflow-animation',
    accentColor: ACCENT[0],
  },
  {
    id: 'kpo-smart-vision',
    name: 'KPO Smart Vision',
    category: 'AI Vision & Document Intelligence',
    description:
      'An AI-powered smart vision solution targeting KPO workflows — leveraging computer vision and document intelligence to automate data extraction, classification, and processing from unstructured sources.',
    technologies: ['Python', 'Computer Vision', 'AI/ML', 'Document Intelligence'],
    githubUrl: 'https://github.com/rajeshuriti/kpo-smart-vision',
    accentColor: ACCENT[1],
  },
  {
    id: 'mindflow-ai',
    name: 'MindFlow AI',
    category: 'AI Diagram Generator',
    description:
      'Converts natural language descriptions into professional Mermaid diagrams using Google Gemini. Supports flowcharts, sequence diagrams, ERDs, class diagrams, state diagrams, and Gantt charts — no syntax knowledge required.',
    technologies: ['Node.js', 'Express.js', 'Google Gemini API', 'Mermaid.js', 'JavaScript'],
    githubUrl: 'https://github.com/rajeshuriti/mindflow-ai',
    accentColor: ACCENT[2],
  },
  {
    id: 'claude-terminology',
    name: 'Claude Terminology',
    category: 'Certification Prep Platform',
    description:
      'Interactive learning platform for the Anthropic Claude Solutions Architect certification. Features an 85+ concept glossary, visual relationship graphs, quizzes, practice exams, and hands-on CLI labs.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/rajeshuriti/claude-terminology',
    accentColor: ACCENT[0],
  },
  {
    id: 'narratecv',
    name: 'NarrateCV',
    category: 'Resume-to-Video Generator',
    description:
      'Transforms a resume into a narrated video story with voice, visuals, and motion graphics. Upload your resume and get a dynamic multimedia presentation automatically generated.',
    technologies: ['Next.js', 'TypeScript', 'Remotion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/rajeshuriti/narratecv',
    accentColor: ACCENT[1],
  },
  {
    id: 'claude-remotion-sample',
    name: 'Claude + Remotion Sample',
    category: 'AI-Generated Video Experiment',
    description:
      'Proof-of-concept combining Anthropic Claude and Remotion to explore AI-driven programmatic video generation — using LLM output to drive animated React scenes.',
    technologies: ['Claude SDK', 'Remotion', 'TypeScript', 'React'],
    githubUrl: 'https://github.com/rajeshuriti/claude-remotion-sample',
    accentColor: ACCENT[2],
  },
  {
    id: 'visualize-algorithm',
    name: 'Visualize Algorithm',
    category: 'Algorithm Visualizer',
    description:
      'Interactive tool for visualising how sorting and search algorithms work step-by-step. A hands-on learning aid for understanding algorithmic complexity and execution flow.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'CSS Animations'],
    githubUrl: 'https://github.com/rajeshuriti/visualize-algorithm',
    accentColor: ACCENT[0],
  },
  {
    id: 'share-cart',
    name: 'Share Cart',
    category: 'Collaborative Shopping List',
    description:
      'Real-time shared shopping cart application that lets multiple users collaborate on a list simultaneously — exploring real-time sync, state management, and full-stack architecture.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Real-time Sync'],
    githubUrl: 'https://github.com/rajeshuriti/share-cart',
    accentColor: ACCENT[1],
  },
  {
    id: 'foodtopia',
    name: 'Foodtopia',
    category: 'Food Discovery Application',
    description:
      'A full-stack food and recipe discovery app — browse, search, and explore dishes with a clean, engaging UI. Built to practise modern full-stack patterns and UI/UX design.',
    technologies: ['React', 'TypeScript', 'Node.js', 'REST APIs'],
    githubUrl: 'https://github.com/rajeshuriti/foodtopia',
    accentColor: ACCENT[2],
  },
  {
    id: 'unit-verse-calculator',
    name: 'Unit Verse Calculator',
    category: 'Unit Conversion Tool',
    description:
      'A comprehensive unit conversion calculator covering length, weight, temperature, volume, and more — built with a clean, intuitive UI for fast everyday conversions.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'CSS'],
    githubUrl: 'https://github.com/rajeshuriti/unit-verse-calculator',
    accentColor: ACCENT[0],
  },
  {
    id: 'motivate-chrome-extension',
    name: 'Motivate Chrome Extension',
    category: 'Productivity Browser Extension',
    description:
      'A Chrome extension that surfaces motivational quotes and nudges on every new tab, keeping you focused and inspired throughout the day. Lightweight, zero-dependency.',
    technologies: ['JavaScript', 'Chrome Extensions API', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/rajeshuriti/motivate-chrome-extension',
    accentColor: ACCENT[1],
  },
]
