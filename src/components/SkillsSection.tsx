
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench, GitBranch, Zap } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Frameworks",
      skills: [".NET Framework", ".NET Core", "Python", "ML.NET", "Gen AI", "Angular", "React", "jQuery", "HTML5", "CSS3", "JavaScript", "TypeScript"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Database,
      title: "Database & Storage",
      skills: ["SQL Server", "PostgreSQL", "SSIS", "ETL Processes", "Database Design", "Query Optimization"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS IAM", "AWS ECR", "AWS ECS", "AWS FSx", "Docker", "Microservices"],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Wrench,
      title: "Tools & Development",
      skills: ["Visual Studio 2022", "VS Code", "PyCharm", "Figma", "Postman", "Soap UI", "Locust", "Bruno", "SonarQube"],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: GitBranch,
      title: "Version Control & Deployment",
      skills: ["GIT", "SVN", "TFS", "GitHub Actions", "CI/CD", "Automated Testing", "Code Quality"],
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: Zap,
      title: "Methodologies & Monitoring",
      skills: ["Agile", "Waterfall", "Sitecore", "Maximo", "Confluence", "Hangfire", "Dynatrace", "Performance Testing"],
      gradient: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">My Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive technology stack powering enterprise-level solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`p-6 bg-gradient-to-br ${category.gradient} backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 group hover:scale-105`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary" 
                      className="skill-tag text-xs hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary">Featured Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Python", ".NET Core", "AWS", "PostgreSQL", "Docker", "Angular"].map((tech, index) => (
              <Badge 
                key={index}
                className="px-6 py-3 text-lg bg-primary/20 text-primary border-primary/40 hover:bg-primary/30 transition-all duration-300 hover:scale-110 neon-glow"
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
