import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, Download, MapPin, Phone, ArrowRight, Award, Users, Layers, Building2 } from "lucide-react";
import profileImage from "../assets/images/rajesh-uriti.jpg";

const HeroSection = () => {
  const stats = [
    { value: "16+", label: "Years of Experience", icon: Award },
    { value: "12", label: "Enterprise Apps Delivered", icon: Building2 },
    { value: "38+", label: "Engineers Led", icon: Users },
    { value: "18", label: "Microservices Architected", icon: Layers },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-darker-bg via-dark-bg to-darker-bg pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left: Identity & CTAs */}
          <div className="space-y-8">
            {/* Availability badge */}
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <Badge variant="outline" className="border-green-400/50 text-green-400 text-sm font-medium">
                Available for New Opportunities
              </Badge>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient animate-slide-in-left leading-tight">
                Rajesh Uriti
              </h1>
              <h2 className="text-xl lg:text-2xl font-semibold text-foreground/90 leading-snug">
                Solution Architect
                <span className="text-primary mx-2">|</span>
                <span className="text-primary/90">Cloud, AI & Digital Transformation</span>
              </h2>
            </div>

            {/* Value proposition */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              <span className="text-primary font-semibold">16+ years</span> designing enterprise-scale solutions — from cloud-native microservices and AWS architectures to Generative AI integration. Delivered{" "}
              <span className="text-primary font-semibold">12 enterprise applications</span> supporting thousands of users across business-critical functions.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+16475489789" className="hover:text-primary transition-colors">+1-647-548-9789</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Mississauga, Ontario, Canada</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-semibold text-sm">🇨🇦 Canadian Permanent Resident</span>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-primary hover:bg-primary/90 neon-glow text-base px-6 py-5"
                onClick={() => window.location.href = 'mailto:rajeshuriti@gmail.com'}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-base px-6 py-5"
                onClick={() => window.open('https://www.linkedin.com/in/rajesh-uriti/', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </Button>
            </div>

            {/* Secondary CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary text-sm px-3 py-2" asChild>
                <a href="/files/Rajesh Uriti_Short_Resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Short Resume
                </a>
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary text-sm px-3 py-2" asChild>
                <a href="/files/Rajesh Uriti_Detailed_Resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Detailed Resume
                </a>
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary text-sm px-3 py-2" asChild>
                <a href="https://github.com/rajeshuriti" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Photo + Stats */}
          <div className="flex flex-col items-center gap-8">
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-primary/30 to-neon-cyan/30 flex items-center justify-center animate-float p-1">
                <div className="w-full h-full rounded-xl overflow-hidden border border-primary/30">
                  <img
                    src={profileImage}
                    alt="Rajesh Uriti – Solution Architect"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating credential badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-primary/40 rounded-xl px-4 py-2 backdrop-blur-sm shadow-lg shadow-primary/20">
                <p className="text-xs text-muted-foreground">Currently at</p>
                <p className="text-sm font-semibold text-primary">Cognizant</p>
              </div>
            </div>

            {/* Impact Stats Grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card/60 backdrop-blur-sm border border-primary/20 rounded-xl p-4 hover:border-primary/40 transition-all duration-300 hover:shadow-md hover:shadow-primary/20 group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Expertise Tags */}
        <div className="mt-16 animate-fade-in">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 text-center">Core Expertise Areas</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Solution Architecture",
              "Cloud Architecture (AWS)",
              "Application Modernization",
              "Microservices Design",
              "Digital Transformation",
              "Generative AI Integration",
              "API Strategy & Design",
              "Technical Leadership",
              "Enterprise AI Adoption",
            ].map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-3 py-1.5 text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
