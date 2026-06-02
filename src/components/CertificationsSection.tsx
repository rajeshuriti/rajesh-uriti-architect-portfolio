import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, CheckCircle, Clock, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Andhra University",
      country: "India",
      highlight: "Post-graduate specialisation in Computer Science & Software Engineering",
    },
    {
      degree: "Bachelor of Science (Computers)",
      institution: "Andhra University",
      country: "India",
      highlight: "Undergraduate foundation in Computing, Mathematics & Systems",
    },
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      status: "pursuing",
      relevance: "Validates cloud architecture expertise across EC2, ECS, Lambda, S3, IAM, and more — directly aligned with current enterprise AWS work.",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "pursuing",
      relevance: "Foundational AWS certification establishing cloud concepts, services, security, and architecture.",
    },
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      status: "pursuing",
      relevance: "Broadens multi-cloud architecture credibility alongside primary AWS expertise.",
    },
  ];

  const principles = [
    {
      icon: "01",
      title: "Architecture Serves the Business",
      description: "Every technical decision must trace directly to a business outcome. Architecture that cannot be justified by value delivered is architecture that should not be built.",
    },
    {
      icon: "02",
      title: "Non-Functional Requirements Are First-Class Citizens",
      description: "Scalability, security, availability, and observability are designed in from day one — never retrofitted. NFRs defined late become the most expensive problems to fix.",
    },
    {
      icon: "03",
      title: "Evolve, Don't Rewrite",
      description: "Prefer evolutionary, incremental transformation over big-bang rewrites. The Strangler Fig pattern exists for good reason — it de-risks change at enterprise scale.",
    },
    {
      icon: "04",
      title: "Complexity Is a Cost, Not a Feature",
      description: "The best architecture is the simplest one that solves the problem. Every layer of abstraction, every additional service, has a maintenance cost — own it deliberately.",
    },
    {
      icon: "05",
      title: "Teams Own Their Architecture",
      description: "Architecture governance means enabling teams to make good decisions independently, not bottlenecking decisions through one architect. The goal is architectural coherence, not centralised control.",
    },
  ];

  return (
    <section className="py-20 bg-background" id="credentials">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Education + Certifications Row */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-primary/20 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gradient">Education</h2>
                <p className="text-sm text-muted-foreground">Academic foundation</p>
              </div>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/15 rounded-lg group-hover:bg-primary/25 transition-colors flex-shrink-0 mt-1">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-base">{edu.degree}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-primary font-medium text-sm">{edu.institution}</span>
                        <span className="text-muted-foreground text-xs">· {edu.country}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{edu.highlight}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-primary/20 rounded-xl">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gradient">Certifications</h2>
                <p className="text-sm text-muted-foreground">Professional credentials in progress</p>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-5 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-sm">{cert.name}</h3>
                        <p className="text-xs text-primary font-medium mt-0.5">{cert.issuer}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-amber-400/50 text-amber-400 text-xs flex-shrink-0 flex items-center gap-1"
                      >
                        <Clock className="w-3 h-3" />
                        In Progress
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cert.relevance}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Principles */}
        <div>
          <div className="text-center mb-12 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <div className="p-2.5 bg-primary/20 rounded-xl">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient">Architecture Philosophy</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Five principles that guide every architecture decision — built from 16 years of enterprise delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((principle, index) => (
              <Card
                key={index}
                className={`p-6 bg-card/30 backdrop-blur-sm border-primary/15 hover:border-primary/35 transition-all duration-500 hover:shadow-xl hover:shadow-primary/15 group ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gradient font-mono opacity-60">{principle.icon}</span>
                    <CheckCircle className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-bold text-sm leading-snug">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
