import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Layers,
  Cloud,
  GitMerge,
  Workflow,
  Network,
  RefreshCw,
  CheckCircle
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ArchitectureSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const domains = [
    {
      icon: Layers,
      title: "Solution Architecture",
      subtitle: "End-to-End Design",
      description: "Define architecture vision, evaluate build-vs-buy tradeoffs, conduct technical feasibility assessments, and lead architecture reviews aligning technology investments with business strategy.",
      capabilities: [
        "Architecture roadmaps & blueprints",
        "Technology stack selection",
        "NFR definition (scalability, availability, security)",
        "Stakeholder workshops & governance",
        "Architecture Decision Records (ADRs)",
      ],
      gradient: "from-blue-600/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      subtitle: "AWS Cloud Native",
      description: "Design scalable, highly available, and cost-optimised AWS cloud solutions — from lift-and-shift migrations to cloud-native greenfield platforms using serverless, containers, and managed services.",
      capabilities: [
        "AWS EC2, ECS, Lambda, S3, FSx, IAM, DMS",
        "Container orchestration with Docker & ECS",
        "Cloud migration strategy & execution",
        "Infrastructure as Code patterns",
        "CI/CD pipelines via GitHub Actions",
      ],
      gradient: "from-orange-500/20 to-amber-400/20",
      borderColor: "border-orange-500/30"
    },
    {
      icon: GitMerge,
      title: "Microservices & API Strategy",
      subtitle: "Distributed Systems",
      description: "Decompose monolithic applications into bounded-context microservices, define API contracts, and establish integration patterns that maximise team autonomy and deployment independence.",
      capabilities: [
        "18-microservice ecosystem delivered",
        "REST API design & versioning strategy",
        "Service decomposition & bounded contexts",
        "Inter-service communication patterns",
        "API gateway & integration design",
      ],
      gradient: "from-green-600/20 to-emerald-400/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: RefreshCw,
      title: "Application Modernisation",
      subtitle: "Legacy to Cloud Native",
      description: "Plan and execute technology transformation initiatives — modernising legacy .NET and on-premises systems to cloud-native microservices architectures with minimal business disruption.",
      capabilities: [
        "Strangler Fig & phased migration patterns",
        "Monolith decomposition strategy",
        "Data migration planning (DMS)",
        "Parallel-run and cutover strategies",
        "Risk assessment & rollback planning",
      ],
      gradient: "from-purple-600/20 to-violet-400/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Workflow,
      title: "Digital Transformation",
      subtitle: "Business-Aligned Innovation",
      description: "Lead end-to-end digital transformation programmes — from legacy modernisation and cloud adoption to process automation and AI integration — bridging technology strategy with business outcomes.",
      capabilities: [
        "12 enterprise applications delivered",
        "Cross-functional team leadership (38+ engineers)",
        "Process automation & workflow optimisation",
        "Change management & adoption",
        "Executive stakeholder engagement",
      ],
      gradient: "from-cyan-600/20 to-blue-400/20",
      borderColor: "border-cyan-500/30"
    },
    {
      icon: Network,
      title: "Enterprise Integration",
      subtitle: "Data & Systems Integration",
      description: "Design robust data integration architectures using ETL pipelines, REST APIs, and messaging patterns — ensuring reliable, secure, and performant data flows across enterprise systems.",
      capabilities: [
        "SQL Server & PostgreSQL optimisation",
        "SSIS ETL workflows & pipelines",
        "REST API & Web API design",
        "Integration patterns (ESB, event-driven)",
        "Database schema design & migration",
      ],
      gradient: "from-teal-600/20 to-emerald-500/20",
      borderColor: "border-teal-500/30"
    }
  ];

  return (
    <section className="py-20 bg-background" id="architecture">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-primary/40 text-primary px-4 py-1 text-sm mb-4">
            Architecture Practice
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">Architecture Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Six architecture domains spanning cloud, microservices, modernisation, and enterprise AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {domains.map((domain, index) => (
            <Card
              key={index}
              className={`p-6 bg-gradient-to-br ${domain.gradient} backdrop-blur-sm ${domain.borderColor} border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 group flex flex-col`}
            >
              <div className="space-y-4 flex-1">
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors flex-shrink-0 mt-0.5">
                    <domain.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold leading-tight">{domain.title}</h3>
                    <p className="text-xs text-primary/80 font-medium mt-0.5">{domain.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {domain.description}
                </p>

                {/* Capabilities */}
                <ul className="space-y-1.5 mt-2">
                  {domain.capabilities.map((cap, cIndex) => (
                    <li key={cIndex} className="flex items-start gap-2 text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Architecture Impact Banner */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 via-card/60 to-neon-cyan/10 border-primary/20">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-primary">Architecture Delivery at Scale</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "12", label: "Enterprise Applications", sub: "Architected & delivered" },
                { value: "18", label: "Microservices", sub: "Monolith transformation" },
                { value: "38+", label: "Engineers Led", sub: "Cross-functional teams" },
                { value: "16+", label: "Years Experience", sub: "Enterprise architecture" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm font-semibold text-foreground/80 mt-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ArchitectureSection;
