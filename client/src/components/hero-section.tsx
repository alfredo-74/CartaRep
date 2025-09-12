import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Generate random colors for text elements
  const randomColors = [
    'text-cyan-400', 'text-emerald-400', 'text-purple-400', 'text-pink-400', 
    'text-yellow-400', 'text-orange-400', 'text-red-400', 'text-blue-400',
    'text-teal-400', 'text-violet-400', 'text-rose-400', 'text-lime-400'
  ];

  const getRandomColor = () => randomColors[Math.floor(Math.random() * randomColors.length)];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToBrands = () => {
    const element = document.getElementById('brands');
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
    <section id="about" className="min-h-screen flex items-center justify-center relative pt-20" data-testid="hero-section">
      <div className="container mx-auto px-6 text-center z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h1 className="neon-text text-6xl md:text-8xl font-neon font-black mb-6" data-testid="text-hero-title">
            CartaRep<sup className="text-2xl md:text-3xl">®</sup>
          </h1>
          <p className={`text-xl md:text-2xl ${getRandomColor()} mb-8 max-w-3xl mx-auto font-medium`} data-testid="text-hero-subtitle">
            Design consultancy agency in the heart of London
          </p>
          <p className={`text-lg md:text-xl ${getRandomColor()} mb-12 max-w-4xl mx-auto leading-relaxed`} data-testid="text-hero-description">
            As specialists in bespoke project specifications, we provide guidance and tailored solutions to specifiers, contractors and businesses in the design industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={scrollToBrands}
              className="glass-card px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all" 
              data-testid="button-view-brands"
            >
              View Our Brands
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
