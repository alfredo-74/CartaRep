import { useEffect, useRef, useState, useMemo } from "react";
import { Lightbulb } from "lucide-react";

export default function OurPOV() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const randomColors = [
    'text-cyan-400', 'text-emerald-400', 'text-purple-400', 'text-pink-400', 
    'text-yellow-400', 'text-orange-400', 'text-rose-400', 'text-blue-400',
    'text-teal-400', 'text-violet-400', 'text-lime-400', 'text-fuchsia-400'
  ];

  const getRandomColor = () => randomColors[Math.floor(Math.random() * randomColors.length)];
  const subtitleColor = useMemo(() => getRandomColor(), []);
  const pointColors = useMemo(() => [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const povPoints = [
    "Your projects face specification challenges daily. We solve them before they become problems.",
    "Bespoke fails when design hits production too late. We step in early and coordinate everything.",
    "Not every custom idea is worth pursuing. We guide you to smart decisions, not just yes.",
    "Complexity should not compromise timelines. Our service ensures clarity from concept to delivery."
  ];

  return (
    <section id="our-pov" className="py-24 relative z-10" ref={sectionRef} data-testid="our-pov-section">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-950/20 via-rose-950/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <Lightbulb className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h2 className="neon-text text-4xl md:text-5xl font-neon font-bold mb-4">
              Our Point of View
            </h2>
            <p className={`${subtitleColor} font-neon text-xl md:text-2xl`}>
              How we think about solving your daily specification challenges.
            </p>
          </div>

          <div className="space-y-6">
            {povPoints.map((point, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border border-rose-500/20 bg-black/60 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <p className={`text-lg font-neon ${pointColors[index]} leading-relaxed`}>
                  <span className="text-rose-400 font-bold mr-2">→</span>
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom statement */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="p-8 rounded-2xl border border-rose-500/20 bg-black/60 backdrop-blur-sm">
              <p className="text-xl md:text-2xl font-neon font-bold text-white mb-2">
                Your projects do not need more catalogues.
              </p>
              <p className="text-xl md:text-2xl font-neon font-bold text-white mb-2">
                They need someone who solves bespoke problems daily.
              </p>
              <p className="text-xl md:text-2xl font-neon font-bold text-rose-400">
                That is what we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
