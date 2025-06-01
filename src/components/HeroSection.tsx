import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download, MapPin, Phone } from "lucide-react";
import profileImage from "../assets/images/rajesh-uriti.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-darker-bg via-dark-bg to-darker-bg pt-16">
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
        {/* Top Header Section - Absolute Priority for Recruiters */}
        <div className="mb-12 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Core Identity Block */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gradient animate-slide-in-left">
                Rajesh Uriti
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-foreground/90">
                Full-Stack Application Architect
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Architecting and Developing End-to-End Solutions with{" "}
                <span className="text-primary font-semibold neon-text">15+ Years</span> of Expertise
              </p>
              
              {/* Core Contact Info */}
              <div className="space-y-3 text-lg">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">+1-(502)-807-9789</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Mississauga, Ontario, Canada</span>
                </div>
                <div className="text-primary font-semibold text-lg">
                  Canadian Permanent Resident
                </div>
              </div>
            </div>

            {/* Professional Image/Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-neon-cyan/20 flex items-center justify-center animate-float">
                  <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Rajesh Uriti" 
                      className="w-full h-full object-cover"
                    />
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

        {/* Immediate Call-to-Action & Highlighted Contacts */}
        <div className="space-y-8 animate-slide-in-up">
          {/* Exceptionally Highlighted Contact Methods */}
          <Card className="p-8 bg-card/90 backdrop-blur-sm border-primary/30 animate-glow">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center text-primary mb-6">
                Let's Connect - Ready for Your Next Project
              </h3>
              
              {/* Primary Contact Methods - Exceptionally Highlighted */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email - Exceptionally Highlighted */}
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-3 text-2xl font-bold text-primary">
                    <Mail className="w-8 h-8 animated-icon neon-glow" />
                    <span className="neon-text">Primary Contact</span>
                  </div>
                  <a 
                    href="mailto:rajeshuriti@gmail.com" 
                    className="block text-xl font-semibold text-primary hover:text-neon-cyan transition-all duration-300 hover:scale-105"
                  >
                    rajeshuriti@gmail.com
                  </a>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 neon-glow animated-icon text-lg py-3"
                    onClick={() => window.location.href = 'mailto:rajeshuriti@gmail.com'}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me Directly
                  </Button>
                </div>

                {/* LinkedIn - Equally Highlighted */}
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-3 text-2xl font-bold text-primary">
                    <Linkedin className="w-8 h-8 animated-icon neon-glow" />
                    <span className="neon-text">Professional Profile</span>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/rajesh-uriti/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-xl font-semibold text-primary hover:text-neon-cyan transition-all duration-300 hover:scale-105"
                  >
                    LinkedIn Profile
                  </a>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary/10 animated-icon text-lg py-3"
                    onClick={() => window.open('https://www.linkedin.com/in/rajesh-uriti/', '_blank')}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    View LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Resume Downloads & GitHub */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-center text-primary">
                Professional Documents & Portfolio
              </h4>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-primary hover:bg-primary/90 neon-glow animated-icon" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Short Resume
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 animated-icon" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Detailed Resume
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 animated-icon" size="lg">
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub Portfolio
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
