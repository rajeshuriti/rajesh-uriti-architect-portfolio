import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, MapPin, Phone, Download, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-darker-bg via-dark-bg to-darker-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to Solution Architect, Enterprise Architect, Cloud Architect, and AI Solution Architect opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 animate-glow">
            <div className="grid md:grid-cols-2 gap-8">
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
                      <p className="text-xs text-neon-cyan">🇨🇦 Canadian Permanent Resident</p>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-medium text-green-400">Available for New Opportunities</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Solution Architect · Enterprise Architect · Cloud Architect · AI Architect</p>
                    </div>
                  </div>
                </div>

                {/* Target Roles */}
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Target Roles</p>
                  <div className="flex flex-wrap gap-2">
                    {["Solution Architect", "Enterprise Architect", "Cloud Architect", "AI Solution Architect", "Digital Transformation Lead"].map((role) => (
                      <Badge key={role} variant="outline" className="text-xs border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary">Quick Actions</h3>

                <div className="space-y-3">
                  {/* Primary CTA */}
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

                  {/* Resume Downloads */}
                  <div className="pt-2 space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Download Resume</p>
                    <Button variant="outline" className="w-full border-primary/40 text-foreground hover:bg-primary/10 hover:text-primary justify-start" size="lg" asChild>
                      <a href="/files/Rajesh Uriti_Short_Resume.pdf" download>
                        <Download className="w-4 h-4 mr-3" />
                        Short Resume (ATS-Optimised)
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full border-primary/40 text-foreground hover:bg-primary/10 hover:text-primary justify-start" size="lg" asChild>
                      <a href="/files/Rajesh Uriti_Detailed_Resume.pdf" download>
                        <Download className="w-4 h-4 mr-3" />
                        Detailed Resume (Full Profile)
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
        <div className="mt-16 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © 2025 Rajesh Uriti — Solution Architect | Cloud, AI & Digital Transformation
          </p>
          <p className="text-xs text-muted-foreground/60">
            Built with React, TypeScript & Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
