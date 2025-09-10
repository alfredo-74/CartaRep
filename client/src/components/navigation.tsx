import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Generate random colors for text elements
  const randomColors = [
    'text-cyan-400', 'text-emerald-400', 'text-purple-400', 'text-pink-400', 
    'text-yellow-400', 'text-orange-400', 'text-red-400', 'text-blue-400',
    'text-teal-400', 'text-violet-400', 'text-rose-400', 'text-lime-400'
  ];

  const getRandomColor = () => randomColors[Math.floor(Math.random() * randomColors.length)];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Add a small delay to ensure hash routing doesn't interfere
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Get navigation height to offset scroll position
        const navHeight = 100; // Account for fixed navigation bar
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
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
          <div className="flex items-center">
            <span className="pink-neon-text text-2xl font-neon font-bold" data-testid="text-nav-brand">
              CartaRep
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`${getRandomColor()} hover:text-primary transition-colors font-medium`}
              data-testid="button-nav-about"
            >
              Who We Are
            </button>
            <button 
              onClick={() => scrollToSection('brands')}
              className={`${getRandomColor()} hover:text-primary transition-colors font-medium`}
              data-testid="button-nav-brands"
            >
              Our Brands
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`${getRandomColor()} hover:text-primary transition-colors font-medium`}
              data-testid="button-nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${getRandomColor()} hover:text-primary transition-colors font-medium`}
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
              className={`block w-full text-left ${getRandomColor()} hover:text-primary transition-colors font-medium`}
              data-testid="button-mobile-nav-about"
            >
              Who We Are
            </button>
            <button 
              onClick={() => scrollToSection('brands')}
              className={`block w-full text-left ${getRandomColor()} hover:text-primary transition-colors font-medium`}
              data-testid="button-mobile-nav-brands"
            >
              Our Brands
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`block w-full text-left ${getRandomColor()} hover:text-primary transition-colors font-medium`}
              data-testid="button-mobile-nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left ${getRandomColor()} hover:text-primary transition-colors font-medium`}
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
