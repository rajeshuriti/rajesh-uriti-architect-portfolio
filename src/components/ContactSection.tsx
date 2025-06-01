
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone, Download } from "lucide-react";

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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to architect your next enterprise solution? Let's discuss how we can build something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 animate-glow">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Mail className="w-5 h-5 text-primary animated-icon" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:rajeshuriti@gmail.com" className="text-primary font-medium hover:text-neon-cyan transition-colors">
                        rajeshuriti@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Phone className="w-5 h-5 text-primary animated-icon" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+15028079789" className="text-primary font-medium hover:text-neon-cyan transition-colors">
                        +1-(502)-807-9789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <MapPin className="w-5 h-5 text-primary animated-icon" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-primary font-medium">Mississauga, Ontario, Canada</p>
                      <p className="text-xs text-neon-cyan">Canadian Permanent Resident</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions & Links */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-6">Quick Actions</h3>
                
                <div className="space-y-4">
                  {/* Resume Downloads */}
                  <div className="space-y-3">
                    <Button className="w-full bg-primary hover:bg-primary/90 neon-glow animated-icon justify-start" size="lg">
                      <Download className="w-5 h-5 mr-3" />
                      Download Short Resume
                    </Button>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 animated-icon justify-start" size="lg">
                      <Download className="w-5 h-5 mr-3" />
                      Download Detailed Resume
                    </Button>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 animated-icon justify-start" size="lg" asChild>
                      <a href="https://www.linkedin.com/in/rajesh-uriti/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-3" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 animated-icon justify-start" size="lg" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-3" />
                        View GitHub Profile
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="mt-8 p-4 bg-gradient-to-r from-primary/20 to-neon-cyan/20 rounded-lg border border-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-medium text-primary">Available for New Opportunities</p>
                      <p className="text-xs text-muted-foreground">Open to full-time and contract positions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Rajesh Uriti. Crafted with React & Next-Generation Technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
