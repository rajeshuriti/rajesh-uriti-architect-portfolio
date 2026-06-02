import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, GitBranch, Zap, Brain, Layers } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Layers,
      title: "Architecture & Design",
      description: "Core architecture practice",
      skills: [
        "Solution Architecture",
        "Enterprise Architecture",
        "Microservices Architecture",
        "API Design & Strategy",
        "System Design",
        "Design Patterns",
        "SOLID Principles",
        "Domain-Driven Design",
        "Technical Feasibility",
        "Architecture Reviews",
        "SDLC"
      ],
      gradient: "from-blue-600/20 to-cyan-500/20",
      featured: true
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "AWS cloud architecture",
      skills: [
        "AWS EC2",
        "AWS S3",
        "AWS Lambda",
        "AWS ECS",
        "AWS ECR",
        "AWS FSx",
        "AWS IAM",
        "AWS DMS",
        "Docker",
        "Microservices",
        "Cloud Migration"
      ],
      gradient: "from-orange-500/20 to-amber-500/20",
      featured: true
    },
    {
      icon: Brain,
      title: "Generative AI & AI Engineering",
      description: "Enterprise AI solutions",
      skills: [
        "Anthropic Claude SDK",
        "OpenAI API (GPT)",
        "Google Gemini",
        "Retrieval Augmented Generation",
        "Prompt Engineering",
        "Semantic Search",
        "Vector Embeddings",
        "AI Agents",
        "LLM Evaluation",
        "AI Workflow Automation",
        "Enterprise AI Adoption"
      ],
      gradient: "from-violet-600/20 to-fuchsia-500/20",
      featured: true
    },
    {
      icon: Code,
      title: "Backend Engineering",
      description: "Server-side platforms",
      skills: [
        "C#",
        ".NET Core",
        ".NET Framework",
        "ASP.NET MVC",
        "Python",
        "FastAPI",
        "REST APIs",
        "ASP.NET Web APIs",
        "Microservices"
      ],
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      icon: Code,
      title: "Frontend Engineering",
      description: "Client-side development",
      skills: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "React",
        "HTML5",
        "CSS3",
        "jQuery",
        "Bootstrap"
      ],
      gradient: "from-sky-500/20 to-cyan-400/20"
    },
    {
      icon: Database,
      title: "Data & Integration",
      description: "Data platforms and pipelines",
      skills: [
        "SQL Server",
        "PostgreSQL",
        "SSIS",
        "ETL Processes",
        "Database Design",
        "Query Optimization",
        "MongoDB",
        "NoSQL",
        "Integration Patterns",
        "Messaging Queues"
      ],
      gradient: "from-green-600/20 to-emerald-400/20"
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD",
      description: "Delivery and automation",
      skills: [
        "GitHub Actions",
        "Docker",
        "CI/CD Pipelines",
        "Git",
        "SVN",
        "TFS",
        "Automated Testing",
        "Code Quality",
        "SonarQube",
        "Sonar Lint"
      ],
      gradient: "from-indigo-500/20 to-blue-400/20"
    },
    {
      icon: Wrench,
      title: "Tools & Practices",
      description: "Engineering toolchain",
      skills: [
        "Visual Studio 2022",
        "VS Code",
        "PyCharm",
        "Postman",
        "Bruno",
        "SoapUI",
        "Locust",
        "Confluence",
        "Dynatrace",
        "Hangfire",
        "Agile / Scrum"
      ],
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const featuredTech = [
    ".NET Core", "Angular", "Python", "AWS", "Docker", "PostgreSQL", "Anthropic Claude", "OpenAI GPT"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A broad technology foundation underpinned by deep architecture and engineering expertise
          </p>
        </div>

        {/* Featured categories row (Architecture, Cloud, AI) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {skillCategories.filter(c => c.featured).map((category, index) => (
            <Card
              key={index}
              className={`p-6 bg-gradient-to-br ${category.gradient} backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 group hover:scale-105`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="skill-tag text-xs hover:scale-105 transition-transform"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Supporting skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.filter(c => !c.featured).map((category, index) => (
            <Card
              key={index}
              className={`p-5 bg-gradient-to-br ${category.gradient} backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 group hover:scale-105`}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="skill-tag text-xs hover:scale-105 transition-transform"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Primary Technologies */}
        <div className="mt-14 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Primary Technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {featuredTech.map((tech, index) => (
              <Badge
                key={index}
                className="px-5 py-2.5 text-sm bg-primary/20 text-primary border-primary/40 hover:bg-primary/30 transition-all duration-300 hover:scale-110 neon-glow"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
