
import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "architecture", label: "Architecture" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled
        ? "bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg shadow-primary/10"
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-neon-cyan rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-primary-foreground">RU</span>
            </div>
            <div>
              <span className="text-base font-bold text-primary block leading-tight">Rajesh Uriti</span>
              <span className="text-xs text-muted-foreground leading-tight">Solution Architect</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "cursor-pointer hover:text-primary transition-colors bg-transparent hover:bg-primary/10 text-sm"
                      )}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Resume CTA — always visible in nav */}
            <Button
              size="sm"
              className="ml-2 bg-primary hover:bg-primary/90 neon-glow text-xs px-4"
              asChild
            >
              <a href="/files/Rajesh_Uriti_Solution_Architect_Resume.pdf" download="Rajesh_Uriti_Solution_Architect_Resume.pdf">
                <Download className="w-3.5 h-3.5 mr-1.5" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs px-3" asChild>
              <a href="/files/Rajesh_Uriti_Solution_Architect_Resume.pdf" download="Rajesh_Uriti_Solution_Architect_Resume.pdf">
                <Download className="w-3.5 h-3.5 mr-1" />
                CV
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary hover:text-primary/80 hover:bg-primary/10"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/20 py-3">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2.5 text-foreground hover:text-primary hover:bg-primary/10 transition-colors rounded-lg text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
