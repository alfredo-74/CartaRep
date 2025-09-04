import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border ${
        isScrolled ? 'bg-black/80' : 'bg-black/20'
      } backdrop-blur-md`}
      data-testid="navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* CartaRep Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/attached_assets/esignature_1757011490490.png" 
              alt="CartaRep Logo" 
              className="h-12 w-auto" 
              data-testid="img-nav-logo"
            />
            <span className="neon-text text-2xl font-neon font-bold" data-testid="text-nav-brand">
              CartaRep
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="button-nav-about"
            >
              Who We Are
            </button>
            <button 
              onClick={() => scrollToSection('brands')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="button-nav-brands"
            >
              Our Brands
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="button-nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="button-nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="button-nav-contact"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl"
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4" data-testid="mobile-menu">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
              data-testid="button-mobile-nav-about"
            >
              Who We Are
            </button>
            <button 
              onClick={() => scrollToSection('brands')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
              data-testid="button-mobile-nav-brands"
            >
              Our Brands
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
              data-testid="button-mobile-nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
              data-testid="button-mobile-nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
              data-testid="button-mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
