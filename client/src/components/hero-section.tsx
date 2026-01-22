import { useEffect, useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  const randomColors = [
    'text-cyan-400', 'text-emerald-400', 'text-purple-400', 'text-pink-400', 
    'text-yellow-400', 'text-orange-400', 'text-rose-400', 'text-blue-400',
    'text-teal-400', 'text-violet-400', 'text-lime-400', 'text-fuchsia-400'
  ];

  const getRandomColor = () => randomColors[Math.floor(Math.random() * randomColors.length)];
  
  const subtitleColor = useMemo(() => getRandomColor(), []);
  const descriptionColor = useMemo(() => getRandomColor(), []);
  const povColor = useMemo(() => getRandomColor(), []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 pb-20" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          {/* CartaRep Logo */}
          <h1 className="neon-text text-6xl md:text-8xl font-neon font-black mb-8" data-testid="text-hero-logo">
            CartaRep<sup className="text-2xl md:text-3xl">®</sup>
          </h1>
          
          <p className={`text-3xl md:text-5xl font-neon font-bold mb-12 ${subtitleColor}`} data-testid="text-hero-title">
            Solving bespoke problems
          </p>
          <p className={`text-xl md:text-2xl font-neon ${descriptionColor} mb-12 w-full font-medium`} data-testid="text-hero-subtitle">
            Custom lighting solutions without the production headaches, from concept to delivery
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 hover:scale-105"
            data-testid="button-hero-cta"
          >
            Discuss your project <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
