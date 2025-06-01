
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Users, Shield, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Proficient in both front-end and back-end development, building robust end-to-end solutions"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Extensive experience with SQL Server, PostgreSQL, and efficient ETL processes"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Expert in AWS services including EC2, S3, FSx, and Lambda for scalable solutions"
    },
    {
      icon: Users,
      title: "Technical Leadership",
      description: "Led cross-functional teams, performed code reviews, and ensured architecture standards"
    },
    {
      icon: Shield,
      title: "CI/CD & DevOps",
      description: "Automated deployment using GitHub Actions and Docker containerization"
    },
    {
      icon: Zap,
      title: "Architecture Leadership",
      description: "Led application architecture design and technology stack decisions"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming complex business requirements into scalable, efficient solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Description */}
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  <span className="text-primary font-semibold">Experienced Application Architect</span> with 15+ years of expertise in architecting and developing end-to-end solutions across the full Software Development Life Cycle (SDLC).
                </p>
                
                <p>
                  As a <span className="text-primary font-semibold">versatile Full Stack Developer</span>, I'm proficient in both front-end and back-end development, with extensive experience in building robust, scalable solutions that drive business success.
                </p>
                
                <p>
                  My <span className="text-primary font-semibold">Architecture Leadership</span> includes leading application architecture design, technology stack decisions, and system modularization to align with business goals and ensure long-term maintainability.
                </p>
                
                <div className="pt-4">
                  <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-2 text-sm">
                    🇨🇦 Authorized to work in Canada without sponsorship
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Key Strengths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="p-6 bg-gradient-to-r from-primary/10 to-neon-cyan/10 border-primary/20 inline-block">
            <p className="text-lg">
              <span className="text-primary font-semibold">Cloud Expertise:</span> Proficient in utilizing AWS services like EC2, S3, FSx, and Lambda to design scalable, cost-effective cloud architectures that enhance performance and resource efficiency.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
