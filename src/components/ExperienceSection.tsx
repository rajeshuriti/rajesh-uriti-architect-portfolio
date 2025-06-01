
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Cognizant",
      period: "Jan 2019 - Present",
      location: "Mississauga, ON & West Palm Beach, FL",
      client: "NextEra Energy",
      project: "Digital Worker",
      achievements: [
        "Led end-to-end application architecture design, including system modularization, technology stack selection, and integration strategies",
        "Architected and developed a full-stack enterprise application using .NET Core and Angular with microservices architecture",
        "Designed and implemented AWS infrastructure (EC2, Lambda, S3, DMS, FSx) and built CI/CD pipelines using GitHub Actions",
        "Leveraged Python for automation and performance testing (Locust), and integrated Generative AI tools for enhanced functionality"
      ],
      technologies: [".NET Core", "Angular", "PostgreSQL", "SQL Server", "SSIS", "GitHub Actions", "Docker", "AWS", "Python", "Gen AI"]
    },
    {
      company: "Cognizant",
      period: "Mar 2017 - Dec 2018",
      location: "Mississauga, ON",
      client: "NextEra Energy",
      project: "Simplified Enrollment System",
      achievements: [
        "Led development of ASP.NET MVC application with Web APIs, streamlining the enrollment process for enhanced efficiency",
        "Implemented robust data management solutions using .NET Framework and Angular for improved user experience",
        "Optimized SQL Server procedures and gained valuable experience managing both cloud (AWS) and on-premises environments"
      ],
      technologies: ["ASP.NET MVC", "Web APIs", ".NET Framework", "Angular", "SQL Server", "AWS"]
    },
    {
      company: "Tata Consultancy Services",
      period: "Sep 2012 - Mar 2017",
      location: "India",
      client: "Multiple Clients",
      project: "Centralized ID Card System",
      achievements: [
        "Implemented seamless integration of ID Card System with multiple departmental applications for centralized card generation",
        "Played a key role in project planning and developed responsive websites using .NET Framework, Angular, and jQuery",
        "Designed user-friendly interfaces with Angular and Bootstrap, significantly enhancing user experience"
      ],
      technologies: [".NET Framework", "Angular", "jQuery", "Bootstrap", "SQL Server"]
    },
    {
      company: "ATOS Syntel",
      period: "Feb 2010 - Aug 2012",
      location: "India",
      client: "Various Clients",
      project: "Enterprise Applications",
      achievements: [
        "Engaged in comprehensive end-to-end development lifecycle, from requirements analysis to deployment",
        "Responsible for database design and management, ensuring optimal performance and data integrity",
        "Contributed to multiple enterprise-level projects, gaining expertise in scalable application development"
      ],
      technologies: [".NET Framework", "SQL Server", "Web Development"]
    },
    {
      company: "Cyient Limited",
      period: "May 2009 - Jan 2010",
      location: "India",
      client: "Engineering Clients",
      project: "Technical Documentation",
      achievements: [
        "Gained foundational understanding of project architecture and requirements analysis",
        "Documented code and processes, establishing best practices for technical documentation",
        "Contributed to software development processes and quality assurance initiatives"
      ],
      technologies: ["Documentation", "Process Improvement", "Quality Assurance"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            15+ years of progressive growth and technical leadership across enterprise applications
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 group"
            >
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Company & Period Info */}
                <div className="lg:col-span-1 space-y-4">
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    {exp.client && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span>Client: {exp.client}</span>
                      </div>
                    )}
                  </div>

                  <Badge className="bg-primary/20 text-primary border-primary/40">
                    {exp.project}
                  </Badge>
                </div>

                {/* Achievements */}
                <div className="lg:col-span-2 space-y-4">
                  <h4 className="text-lg font-semibold">Key Achievements</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-sm leading-relaxed">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="lg:col-span-1 space-y-4">
                  <h4 className="text-lg font-semibold">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className="text-xs border-primary/30 text-foreground hover:border-primary/60 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Career Summary */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-neon-cyan/10 border-primary/20 inline-block max-w-4xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Career Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gradient">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">5</div>
                  <div className="text-sm text-muted-foreground">Companies</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
