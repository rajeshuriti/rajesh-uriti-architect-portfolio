import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, MapPin, Phone, Download, ArrowRight, Briefcase, MonitorSmartphone, Globe, CalendarCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const lookingFor = [
    {
      icon: Briefcase,
      label: "Role Types",
      value: "Solution Architect · Enterprise Architect · Cloud Architect · AI Solution Architect",
    },
    {
      icon: MonitorSmartphone,
      label: "Work Arrangement",
      value: "Remote or Hybrid — open to on-site in Toronto / Mississauga area",
    },
    {
      icon: Globe,
      label: "Geography",
      value: "Canada (primary) · Open to US remote roles",
    },
    {
      icon: CalendarCheck,
      label: "Availability",
      value: "Available immediately for the right opportunity",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-darker-bg via-dark-bg to-darker-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 lg:top-20 lg:right-20 w-32 h-32 lg:w-64 lg:h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 lg:bottom-20 lg:left-20 w-48 h-48 lg:w-96 lg:h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-10 sm:mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">Let's Connect</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to Solution Architect, Enterprise Architect, Cloud Architect, and AI Solution Architect opportunities across Canada.
          </p>
        </div>

        {/* What I'm Looking For */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
          <Card className="p-4 sm:p-7 bg-gradient-to-r from-primary/10 via-card/60 to-neon-cyan/10 border-primary/25">
            <h3 className="text-lg font-bold text-primary mb-5 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              What I'm Looking For
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {lookingFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm text-foreground/90 mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Contact Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-4 sm:p-8 bg-card/80 backdrop-blur-sm border-primary/20 animate-glow">
            <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary">Get In Touch</h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                    <div className="p-2.5 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <a href="mailto:rajeshuriti@gmail.com" className="text-primary font-medium hover:text-neon-cyan transition-colors text-sm">
                        rajeshuriti@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                    <div className="p-2.5 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <a href="tel:+16475489789" className="text-primary font-medium hover:text-neon-cyan transition-colors text-sm">
                        +1-647-548-9789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                    <div className="p-2.5 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-primary font-medium text-sm">Mississauga, Ontario, Canada</p>
                      <p className="text-xs text-neon-cyan">🇨🇦 Canadian Permanent Resident · No sponsorship required</p>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-green-400">Available Immediately</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Full-time · Contract · Consulting engagements</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-primary">Quick Actions</h3>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 neon-glow justify-start text-base py-5"
                    onClick={() => window.location.href = 'mailto:rajeshuriti@gmail.com'}
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    Email Me Directly
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Button>

                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 justify-start text-base py-5" asChild>
                    <a href="https://www.linkedin.com/in/rajesh-uriti/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-3" />
                      Connect on LinkedIn
                    </a>
                  </Button>

                  <div className="pt-1 space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Download Resume</p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 justify-start" size="lg" asChild>
                      <a href="/files/Rajesh_Uriti_Solution_Architect_Resume.pdf" download="Rajesh_Uriti_Solution_Architect_Resume.pdf">
                        <Download className="w-4 h-4 mr-3" />
                        Rajesh Uriti — Solution Architect Resume
                      </a>
                    </Button>
                  </div>

                  <Button variant="ghost" className="w-full text-muted-foreground hover:text-primary justify-start" asChild>
                    <a href="https://github.com/rajeshuriti" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-3" />
                      View GitHub Portfolio
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-10 sm:mt-14 text-center space-y-1.5">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rajesh Uriti — Solution Architect | Cloud, AI & Digital Transformation
          </p>
          <p className="text-xs text-muted-foreground/50">
            Built with React, TypeScript & Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
