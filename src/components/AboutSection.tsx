
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Cloud, Brain, Users, GitMerge, Target, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: Layers,
      title: "Enterprise Solution Architecture",
      description: "Architected and delivered 12 enterprise-scale customer-facing applications across planning, risk, compliance, safety, and reporting domains supporting thousands of users."
    },
    {
      icon: GitMerge,
      title: "Application Modernization",
      description: "Led transformation of tightly coupled monolithic applications into a scalable ecosystem of 18 microservices, applying SOLID principles and enterprise design patterns."
    },
    {
      icon: Cloud,
      title: "Cloud Architecture (AWS)",
      description: "Designed and implemented AWS-based cloud solutions — EC2, S3, Lambda, ECS, ECR, FSx, IAM, DMS — delivering scalable, highly available, and cost-effective infrastructures."
    },
    {
      icon: Brain,
      title: "Generative AI & Enterprise AI",
      description: "Architected and integrated Generative AI solutions using Anthropic Claude, OpenAI GPT, and Google Gemini with RAG, Prompt Engineering, and Semantic Search capabilities."
    },
    {
      icon: Users,
      title: "Technical Leadership",
      description: "Provided architecture governance and technical leadership to cross-functional teams of 38+ developers, QA engineers, and DevOps professionals across multiple delivery programmes."
    },
    {
      icon: Target,
      title: "Digital Transformation",
      description: "Conducted systems analysis, technical feasibility assessments, architecture reviews, and stakeholder workshops to align technology investments with business objectives."
    }
  ];

  const pillars = [
    "Architecture Governance",
    "Systems Analysis",
    "Technology Roadmaps",
    "Stakeholder Alignment",
    "Build vs. Buy Decisions",
    "Technical Feasibility",
    "Cross-Team Mentoring",
    "Engineering Best Practices",
  ];

  return (
    <section className="py-12 sm:py-20 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-10 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">About Me</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Translating complex business challenges into scalable, future-ready enterprise architectures
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-10 sm:mb-16">
          {/* Main Bio */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-4 sm:p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500">
              <div className="space-y-5 text-base leading-relaxed">
                <p>
                  <span className="text-primary font-semibold">Solution Architect and Senior Software Engineer</span> with 16+ years of experience designing, modernizing, and delivering enterprise-scale customer-facing applications across the full SDLC.
                </p>
                <p>
                  At <span className="text-primary font-semibold">Cognizant Technology Solutions</span>, I serve as Solution Architect and Technical Lead for 12 enterprise applications — transforming monolithic systems into a scalable ecosystem of 18 microservices and leading cloud adoption on AWS.
                </p>
                <p>
                  Beyond architecture and engineering, I drive <span className="text-primary font-semibold">enterprise AI adoption</span> — evaluating Anthropic Claude, OpenAI GPT, and Google Gemini, delivering AI-powered automation and knowledge retrieval solutions that improve operational efficiency.
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">12 enterprise applications architected and delivered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">18 microservices — monolith-to-cloud transformation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">38+ engineers mentored and led across multiple teams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Generative AI solutions deployed in production</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-2 text-sm">
                    🇨🇦 Authorized to work in Canada without sponsorship
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Architecture Pillars */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-neon-cyan/5 border-primary/20">
              <h4 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Architecture Practice Areas</h4>
              <div className="flex flex-wrap gap-2">
                {pillars.map((p) => (
                  <Badge key={p} variant="outline" className="text-xs border-primary/30 text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors">
                    {p}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Capability Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
