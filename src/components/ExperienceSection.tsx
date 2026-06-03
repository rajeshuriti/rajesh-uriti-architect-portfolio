
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      company: "Cognizant Technology Solutions",
      role: "Full-Stack Application Architect",
      period: "Jan 2019 – Present",
      tenure: "6+ years",
      location: "Mississauga, ON & West Palm Beach, FL",
      client: "NextEra Energy",
      clientContext: "North America's largest clean energy company (S&P 500, Fortune 200)",
      isCurrent: true,
      achievements: [
        "Served as Solution Architect and Technical Lead for 12 enterprise-scale customer-facing applications supporting planning, execution, risk assessment, compliance, safety, and reporting processes for thousands of users across multiple business functions.",
        "Directed application architecture, modernisation, and technology transformation initiatives — transforming tightly coupled monolithic applications into a scalable ecosystem of 18 microservices using C#, .NET Core, Angular, and REST APIs while applying SOLID principles and enterprise design patterns.",
        "Optimised SQL Server and PostgreSQL platforms, ETL workflows, and data integration processes; architected AWS cloud solutions (EC2, S3, Lambda, ECS, ECR, FSx, IAM, DMS) and built CI/CD pipelines using GitHub Actions and Docker.",
        "Drove enterprise AI adoption by evaluating and integrating Anthropic Claude, OpenAI GPT, and Google Gemini; developed AI-powered applications using Python, Anthropic SDK, RAG, semantic search, vector embeddings, and prompt engineering techniques.",
        "Provided technical leadership, architecture governance, mentoring, and engineering best practices across cross-functional teams of 38+ developers, QA engineers, and DevOps professionals.",
        "Conducted systems analysis, technical feasibility assessments, architecture reviews, and stakeholder workshops to align technology investments with business objectives and strategic roadmaps."
      ],
      technologies: [".NET Core", "Angular", "PostgreSQL", "SQL Server", "SSIS", "GitHub Actions", "Docker", "AWS", "Python", "Anthropic Claude", "OpenAI GPT", "RAG"]
    },
    {
      company: "Cognizant Technology Solutions",
      role: "Senior Software Engineer",
      period: "Mar 2017 – Dec 2018",
      tenure: "2 years",
      location: "Mississauga, ON",
      client: "NextEra Energy",
      clientContext: "North America's largest clean energy company (S&P 500, Fortune 200)",
      isCurrent: false,
      achievements: [
        "Led development of ASP.NET MVC and Angular-based enrollment platforms for utility customers, designing Web APIs and scalable application architectures to support business growth and future enhancements.",
        "Optimised SQL Server stored procedures, functions, and database performance for high-volume transactional systems.",
        "Participated in requirements analysis, project planning, estimation, systems analysis, and technical solution design.",
        "Worked across AWS and on-premises infrastructure environments supporting enterprise deployments."
      ],
      technologies: ["ASP.NET MVC", "Web APIs", ".NET Framework", "Angular", "SQL Server", "AWS"]
    },
    {
      company: "Tata Consultancy Services",
      role: "Application Developer",
      period: "Sep 2012 – Mar 2017",
      tenure: "4.5 years",
      location: "India",
      client: "Multiple Clients",
      clientContext: "Enterprise healthcare and identity management clients",
      isCurrent: false,
      achievements: [
        "Developed enterprise healthcare applications using .NET Framework, Angular, JavaScript, and SQL Server.",
        "Participated in project planning, technical analysis, effort estimation, and enterprise application development.",
        "Designed reusable application components and responsive user interfaces, serving 10,000+ users."
      ],
      technologies: [".NET Framework", "Angular", "jQuery", "Bootstrap", "SQL Server"]
    },
    {
      company: "ATOS Syntel",
      role: "Software Engineer",
      period: "Feb 2010 – Aug 2012",
      tenure: "2.5 years",
      location: "India",
      client: "Various Clients",
      clientContext: "Healthcare and enterprise technology clients",
      isCurrent: false,
      achievements: [
        "Developed full-stack healthcare applications, database solutions, and Google API integrations while supporting production environments.",
        "Contributed to end-to-end development lifecycle — requirements analysis through deployment — and database design for optimal performance."
      ],
      technologies: [".NET Framework", "SQL Server", "Web Development", "Google APIs"]
    },
    {
      company: "Cyient Limited",
      role: "Software Developer",
      period: "May 2009 – Jan 2010",
      tenure: "9 months",
      location: "India",
      client: "Engineering Clients",
      clientContext: "Engineering and technology services",
      isCurrent: false,
      achievements: [
        "Contributed to enterprise application development, maintenance, testing, troubleshooting, and technical documentation.",
        "Gained foundational expertise in project architecture, requirements analysis, and software development processes."
      ],
      technologies: ["Software Development", "Testing", "Technical Documentation"]
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-10 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">Professional Journey</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            16+ years of progressive growth — from software engineer to enterprise solution architect
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`p-4 sm:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 group ${exp.isCurrent ? "border-primary/35" : ""}`}
            >
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Company & Role */}
                <div className="lg:col-span-1 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building className="w-4 h-4 text-primary" />
                      <h3 className="text-base font-bold text-primary leading-tight">{exp.company}</h3>
                    </div>
                    <p className="text-sm font-semibold text-foreground/80 ml-6">{exp.role}</p>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                    {exp.client && (
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <Briefcase className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-foreground/80">{exp.client}</span>
                          <p className="text-muted-foreground/70 text-xs mt-0.5">{exp.clientContext}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="outline" className="text-xs border-primary/20 text-muted-foreground">
                      {exp.tenure}
                    </Badge>
                    {exp.isCurrent && (
                      <Badge className="bg-green-400/15 text-green-400 border-green-400/30 text-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse inline-block"></span>
                        Current
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Achievements */}
                <div className="lg:col-span-2 space-y-3">
                  <h4 className="text-xs font-semibold text-foreground/60 uppercase tracking-widest">Key Contributions</h4>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="lg:col-span-1 space-y-3">
                  <h4 className="text-xs font-semibold text-foreground/60 uppercase tracking-widest">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
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

        {/* Career Stats */}
        <div className="mt-10 sm:mt-14 text-center">
          <Card className="p-5 sm:p-8 bg-gradient-to-r from-primary/10 to-neon-cyan/10 border-primary/20 inline-block max-w-4xl w-full">
            <h3 className="text-xl font-bold text-primary mb-5 sm:mb-6">Career at a Glance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              {[
                { value: "16+", label: "Years Experience" },
                { value: "5", label: "Companies" },
                { value: "12", label: "Enterprise Apps" },
                { value: "38+", label: "Engineers Led" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
