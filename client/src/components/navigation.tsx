import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setIsPastHero(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 100;
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

  const navItems = [
    { id: 'how-we-work', label: 'How We Work' },
    { id: 'who-we-work-with', label: 'Who We Help' },
    { id: 'brands', label: 'Our Brands' },
    { id: 'our-pov', label: 'Our POV' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
        isScrolled ? 'bg-black/90' : 'bg-black/20'
      } backdrop-blur-md`}
      data-testid="navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - BIGGER neon style */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className={`transition-all duration-300 ${
                isPastHero ? 'opacity-100' : 'opacity-0'
              }`}
              data-testid="text-nav-brand"
            >
              <span className="neon-text text-3xl md:text-4xl font-neon font-bold">
                CartaRep<sup className="text-sm">®</sup>
              </span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-lg font-neon font-medium"
                data-testid={`button-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-2xl p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-1 border-t border-white/10 pt-4" data-testid="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors font-neon text-lg font-medium"
                data-testid={`button-mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
