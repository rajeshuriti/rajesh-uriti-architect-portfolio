
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, GitMerge, Brain, Database, Layers, Workflow } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Enterprise Application Portfolio",
      subtitle: "12-Application Architecture Programme",
      company: "Cognizant — NextEra Energy (North America's largest clean energy company, S&P 500)",
      period: "2019 – Present",
      context: "Served as Solution Architect for an enterprise portfolio of 12 customer-facing applications supporting planning, execution, risk assessment, compliance, safety, and reporting for thousands of users across business-critical functions.",
      architectureDecisions: [
        "Designed domain-driven modular architecture separating concerns across 12 applications with shared services and common data contracts",
        "Established technology standards: .NET Core APIs, Angular SPAs, PostgreSQL/SQL Server, and AWS-hosted infrastructure",
        "Defined NFRs — scalability, high availability, security, and observability — driving architecture governance across all products",
        "Led architecture reviews, design sessions, and stakeholder workshops to align technology with business objectives",
      ],
      outcomes: [
        "12 enterprise applications delivered and in production",
        "Thousands of users across business-critical functions",
        "Standardised technology stack reducing cross-team onboarding time",
        "Architecture governance across 38+ engineers maintained",
      ],
      technologies: [".NET Core", "Angular", "PostgreSQL", "SQL Server", "AWS", "Docker", "GitHub Actions", "SSIS"],
      icon: Layers,
      gradient: "from-blue-600/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Monolith to Microservices Transformation",
      subtitle: "Application Modernisation Initiative",
      company: "Cognizant — NextEra Energy (Fortune 200 energy enterprise)",
      period: "2019 – 2022",
      context: "Led the architectural transformation of a tightly coupled monolithic enterprise application into a scalable, independently deployable microservices ecosystem — a major digital transformation initiative.",
      architectureDecisions: [
        "Applied Strangler Fig pattern to incrementally decompose the monolith without disrupting live production operations",
        "Defined 18 bounded-context microservices with clear service contracts, API versioning, and data isolation strategies",
        "Designed CI/CD pipelines per service using GitHub Actions and Docker, enabling independent deployment and rollback",
        "Architected AWS ECS/ECR container infrastructure to host and orchestrate the microservices at scale",
      ],
      outcomes: [
        "18 microservices — tightly coupled monolith fully decomposed",
        "Independent deployability enabling faster feature delivery",
        "Improved system scalability and fault isolation",
        "Reduced deployment risk via automated CI/CD per service",
      ],
      technologies: [".NET Core", "Docker", "AWS ECS", "AWS ECR", "GitHub Actions", "PostgreSQL", "REST APIs", "CI/CD"],
      icon: GitMerge,
      gradient: "from-green-600/20 to-emerald-400/20",
      borderColor: "border-green-500/30"
    },
    {
      title: "Generative AI Integration Programme",
      subtitle: "Enterprise AI Solutions",
      company: "Cognizant — NextEra Energy (Regulated energy enterprise, Fortune 200)",
      period: "2023 – Present",
      context: "Drove enterprise AI adoption by architecting and delivering Generative AI solutions — evaluating LLM platforms (Anthropic Claude, OpenAI GPT, Google Gemini) and integrating production-grade AI capabilities into enterprise workflows.",
      architectureDecisions: [
        "Designed RAG (Retrieval Augmented Generation) architecture combining vector embeddings, semantic search, and LLM inference for enterprise knowledge retrieval",
        "Evaluated and benchmarked Claude, GPT, and Gemini on latency, accuracy, cost, and security — selecting optimal models per use case",
        "Built AI agent pipelines using Python and Anthropic SDK for automated document processing and business process automation",
        "Established AI governance framework addressing data privacy, security, latency, and responsible AI adoption",
      ],
      outcomes: [
        "AI-assisted automation deployed in production workflows",
        "Accelerated knowledge discovery for enterprise users",
        "Measurable improvement in operational efficiency",
        "Responsible AI adoption framework established",
      ],
      technologies: ["Anthropic Claude SDK", "OpenAI GPT", "Google Gemini", "Python", "RAG", "Vector Embeddings", "Semantic Search", "FastAPI"],
      icon: Brain,
      gradient: "from-violet-600/20 to-fuchsia-500/20",
      borderColor: "border-violet-500/30"
    },
    {
      title: "AWS Cloud Infrastructure Architecture",
      subtitle: "Cloud Migration & Infrastructure Design",
      company: "Cognizant — NextEra Energy (Enterprise-scale regulated energy sector)",
      period: "2019 – Present",
      context: "Designed and implemented AWS cloud solutions across the enterprise application portfolio — migrating on-premises workloads to cloud-native architectures while optimising for performance, cost, and operational resilience.",
      architectureDecisions: [
        "Architected multi-tier AWS environments using EC2, ECS, Lambda, S3, FSx, and IAM with proper least-privilege security boundaries",
        "Designed data migration strategies using AWS DMS for moving SQL Server workloads to cloud-hosted PostgreSQL",
        "Implemented AWS ECR container registry integrated with GitHub Actions CI/CD for automated image builds and deployments",
        "Designed HA architectures with load balancing and auto-scaling to meet availability and performance NFRs",
      ],
      outcomes: [
        "Enterprise workloads migrated to AWS cloud-native infrastructure",
        "Automated deployments via CI/CD pipelines reducing manual effort",
        "High availability and fault tolerance achieved for critical systems",
        "Cost-optimised cloud architecture aligned with business scale",
      ],
      technologies: ["AWS EC2", "AWS ECS", "AWS Lambda", "AWS S3", "AWS FSx", "AWS IAM", "AWS DMS", "Docker", "GitHub Actions"],
      icon: Cloud,
      gradient: "from-orange-500/20 to-amber-400/20",
      borderColor: "border-orange-500/30"
    },
    {
      title: "Simplified Enrollment System",
      subtitle: "Customer-Facing Web Application",
      company: "Cognizant — NextEra Energy",
      period: "Mar 2017 – Dec 2018",
      context: "Led the design and development of an ASP.NET MVC application with Web APIs, streamlining the customer enrollment process for utility customers and delivering a scalable solution across hybrid AWS and on-premises environments.",
      architectureDecisions: [
        "Designed RESTful Web API layer enabling decoupled front-end Angular SPA from back-end business logic",
        "Optimised SQL Server stored procedures, functions, and schema for high-throughput transactional workloads",
        "Architected hybrid cloud deployment supporting both AWS and on-premises environments for business continuity",
      ],
      outcomes: [
        "40% improvement in enrollment processing time",
        "Scalable API architecture supporting business growth",
        "Optimised database performance for transactional load",
        "Hybrid cloud deployment enabling zero-downtime operations",
      ],
      technologies: ["ASP.NET MVC", "Web APIs", ".NET Framework", "Angular", "SQL Server", "AWS"],
      icon: Workflow,
      gradient: "from-cyan-600/20 to-blue-400/20",
      borderColor: "border-cyan-500/30"
    },
    {
      title: "Centralised ID Card System",
      subtitle: "Multi-System Enterprise Integration",
      company: "Tata Consultancy Services",
      period: "Sep 2012 – Mar 2017",
      context: "Implemented integration of the ID Card System with multiple departmental applications, enabling centralised card generation across the enterprise and serving 10,000+ users across departments.",
      architectureDecisions: [
        "Designed integration layer connecting ID card system to multiple departmental applications via shared APIs and data contracts",
        "Built responsive Angular/Bootstrap UI delivering consistent experience across device types for diverse user base",
        "Implemented centralised data management and cross-department workflow orchestration",
      ],
      outcomes: [
        "10,000+ users served across enterprise departments",
        "Seamless integration across multiple departmental systems",
        "Centralised card generation eliminating per-department silos",
        "Responsive UI delivering consistent UX across devices",
      ],
      technologies: [".NET Framework", "Angular", "jQuery", "Bootstrap", "SQL Server", "REST APIs"],
      icon: Database,
      gradient: "from-purple-600/20 to-pink-400/20",
      borderColor: "border-purple-500/30"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/10 to-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/40 text-primary px-4 py-1 text-sm mb-4">
            Architecture Case Studies
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">Key Projects & Deliveries</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Architecture decisions, business outcomes, and technology choices across enterprise-scale programmes
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-7 bg-gradient-to-br ${project.gradient} backdrop-blur-sm ${project.borderColor} border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 group`}
            >
              <div className="grid lg:grid-cols-12 gap-6">
                {/* Project Identity */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors flex-shrink-0">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold leading-tight">{project.title}</h3>
                      <p className="text-xs text-primary/80 font-medium mt-0.5">{project.subtitle}</p>
                      <p className="text-xs text-muted-foreground mt-1">{project.company}</p>
                      <p className="text-xs text-muted-foreground">{project.period}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Stack</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, tIndex) => (
                        <Badge
                          key={tIndex}
                          variant="secondary"
                          className="text-xs px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Architecture Context + Decisions */}
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">Context</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.context}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">Architecture Decisions</p>
                    <ul className="space-y-1.5">
                      {project.architectureDecisions.map((decision, dIndex) => (
                        <li key={dIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="lg:col-span-4 space-y-3">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Business Outcomes</p>
                  <div className="space-y-2">
                    {project.outcomes.map((outcome, oIndex) => (
                      <div key={oIndex} className="flex items-start gap-2 p-2.5 bg-card/50 rounded-lg border border-primary/10">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-sm text-foreground/80">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Impact */}
        <div className="mt-14 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-neon-cyan/10 border-primary/20 inline-block max-w-5xl w-full">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Overall Programme Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { value: "12", label: "Enterprise Applications", sub: "Architected & delivered" },
                  { value: "18", label: "Microservices", sub: "Monolith transformation" },
                  { value: "1000s", label: "Users Supported", sub: "Business-critical workflows" },
                  { value: "40%", label: "Process Improvement", sub: "Enrollment system" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl lg:text-4xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm font-semibold text-foreground/80 mt-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
