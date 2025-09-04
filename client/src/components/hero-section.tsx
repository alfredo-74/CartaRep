import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20" data-testid="hero-section">
      <div className="container mx-auto px-6 text-center z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h1 className="neon-text text-6xl md:text-8xl font-neon font-black mb-6" data-testid="text-hero-title">
            CartaRep
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Design consultancy agency in the heart of London
          </p>
          <p className="text-lg md:text-xl text-foreground mb-12 max-w-4xl mx-auto leading-relaxed" data-testid="text-hero-description">
            As specialists in bespoke project specifications, we provide guidance and tailored solutions to specifiers, contractors and businesses in the design industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={scrollToProjects}
              className="glass-card px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all" 
              data-testid="button-view-work"
            >
              View Our Work
            </button>
            <button 
              onClick={scrollToContact}
              className="glass-card px-8 py-4 rounded-lg text-lg font-semibold border-primary hover:bg-primary hover:text-primary-foreground transition-all" 
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
