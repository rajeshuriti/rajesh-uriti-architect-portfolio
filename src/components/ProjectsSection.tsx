
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Database, Cloud, Users } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Digital Worker - Enterprise Application",
      company: "Cognizant (NextEra Energy)",
      description: "Led end-to-end application architecture design, resulting in a scalable and high-performance enterprise application using .NET Core and Angular, with microservices architecture.",
      achievement: "Implemented robust CI/CD, Docker containerization, and AWS infrastructure, significantly improving maintainability, scalability, and deployment velocity.",
      technologies: [".NET Core", "Angular", "PostgreSQL", "SQL Server", "SSIS", "GitHub Actions", "Docker", "AWS", "Python", "Gen AI"],
      highlights: [
        "Microservices Architecture Design",
        "AWS Infrastructure Implementation",
        "CI/CD Pipeline Automation",
        "Database Schema Optimization",
        "Performance Testing with Python/Locust"
      ],
      icon: Cloud,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Simplified Enrollment System",
      company: "Cognizant (NextEra Energy)",
      description: "Led the development of an ASP.NET MVC application with Web APIs, streamlining the enrollment process for enhanced efficiency and user experience.",
      achievement: "Successfully managed both cloud (AWS) and on-premises environments, delivering a robust solution that improved enrollment processing time by 40%.",
      technologies: ["ASP.NET MVC", "Web APIs", ".NET Framework", "Angular", "SQL Server", "AWS"],
      highlights: [
        "Web API Development",
        "SQL Server Optimization",
        "Hybrid Cloud Management",
        "User Experience Enhancement",
        "Performance Optimization"
      ],
      icon: Database,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Centralized ID Card System",
      company: "Tata Consultancy Services",
      description: "Implemented seamless integration of the ID Card System with multiple departmental applications, enabling effortless centralized ID card generation.",
      achievement: "Played a key role in project planning and developed the website with Angular and Bootstrap for an enhanced user experience, serving 10,000+ users.",
      technologies: [".NET Framework", "Angular", "jQuery", "Bootstrap", "SQL Server"],
      highlights: [
        "Multi-System Integration",
        "Responsive Web Design",
        "Centralized Data Management",
        "Bootstrap UI Framework",
        "Cross-Department Workflow"
      ],
      icon: Users,
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">Key Projects & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming business challenges into innovative, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`p-6 bg-gradient-to-br ${project.gradient} backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 group hover:scale-105 h-full flex flex-col`}
            >
              <div className="space-y-6 flex-1">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors flex-shrink-0">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                      <p className="text-sm text-primary font-medium">{project.company}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="p-3 bg-card/50 rounded-lg border border-primary/10">
                    <p className="text-sm font-medium text-primary">Achievement:</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      {project.achievement}
                    </p>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">Key Highlights</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, tIndex) => (
                      <Badge 
                        key={tIndex}
                        variant="secondary" 
                        className="text-xs px-2 py-1 hover:scale-105 transition-transform"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-6 pt-4 border-t border-primary/10">
              </div>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-neon-cyan/10 border-primary/20 inline-block">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Project Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gradient">3</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">10K+</div>
                  <div className="text-sm text-muted-foreground">Users Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">40%</div>
                  <div className="text-sm text-muted-foreground">Performance Improvement</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
