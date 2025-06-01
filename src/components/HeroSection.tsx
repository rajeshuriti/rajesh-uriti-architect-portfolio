
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-darker-bg via-dark-bg to-darker-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Top Contact & Resume Section */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 animate-glow">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary animated-icon" />
                    <a href="mailto:rajeshuriti@gmail.com" className="text-primary font-medium hover:text-neon-cyan transition-colors">
                      rajeshuriti@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-primary animated-icon" />
                    <a href="https://www.linkedin.com/in/rajesh-uriti/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-neon-cyan transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-primary hover:bg-primary/90 neon-glow animated-icon" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Short Resume
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 animated-icon" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Detailed Resume
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 animated-icon" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub
                  </Button>
                </div>
              </div>
            </Card>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient animate-slide-in-left">
                Rajesh Uriti
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-foreground/90">
                Full-Stack Application Architect
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Architecting and Developing End-to-End Solutions with{" "}
                <span className="text-primary font-semibold neon-text">15+ Years</span> of Expertise
              </p>
            </div>

            {/* Secondary Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1-(502)-807-9789</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Mississauga, Ontario, Canada</span>
              </div>
              <div className="text-primary font-medium">
                Canadian Permanent Resident
              </div>
            </div>
          </div>

          {/* Professional Image/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-neon-cyan/20 flex items-center justify-center animate-float">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-neon-cyan rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground">
                      RU
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">Application Architect</p>
                      <p className="text-sm text-muted-foreground">15+ Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating skill badges */}
              <div className="absolute -top-4 -left-4 skill-tag animate-float">React</div>
              <div className="absolute -top-4 -right-4 skill-tag animate-float delay-500">Python</div>
              <div className="absolute -bottom-4 -left-4 skill-tag animate-float delay-1000">.NET Core</div>
              <div className="absolute -bottom-4 -right-4 skill-tag animate-float delay-1500">AWS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
