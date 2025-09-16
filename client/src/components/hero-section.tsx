import { useEffect, useState } from "react";
import { Lightbulb, Compass } from "lucide-react";

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

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative pt-20 pb-20" data-testid="hero-section">
      <div className="container mx-auto px-6 text-center z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h1 className="neon-text text-6xl md:text-8xl font-neon font-black mb-6" data-testid="text-hero-title">
            CartaRep<sup className="text-2xl md:text-3xl">®</sup>
          </h1>
          <p className={`text-xl md:text-2xl ${getRandomColor()} mb-8 max-w-3xl mx-auto font-medium`} data-testid="text-hero-subtitle">
            Design consultancy agency in the heart of London
          </p>
          <p className={`text-lg md:text-xl ${getRandomColor()} mb-16 max-w-5xl mx-auto leading-relaxed`} data-testid="text-hero-description">
            With over 15 years of expertise in specification, design, and lighting, CartaRep® is a trusted consultancy supporting architects, specifiers, contractors, and businesses. We deliver bespoke project specifications, technical guidance, and tailored solutions that bring creativity, functionality, and efficiency to design projects across London and beyond.
          </p>
          
          {/* Services Section - Integrated into Hero */}
          <div id="services" className="mb-16 mt-32">
            <h2 className="neon-text text-4xl md:text-5xl font-neon font-bold mb-12" data-testid="text-services-title">Services</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-8 rounded-2xl text-center" data-testid="card-service-bespoke-lighting">
                <div className="text-primary text-5xl mb-4">
                  <Lightbulb className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-3" data-testid="text-service-title-0">
                  Bespoke Lighting
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-service-description-0">
                  Customised lighting solutions tailored to your specific requirements and aesthetic vision.
                </p>
              </div>
              <div className="glass-card p-8 rounded-2xl text-center" data-testid="card-service-tailored-consultancy">
                <div className="text-secondary text-5xl mb-4">
                  <Compass className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-3" data-testid="text-service-title-1">
                  Tailored Consultancy
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-service-description-1">
                  Expert guidance and project specifications from concept to completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
