import { useEffect, useRef, useState, useMemo } from "react";
import { Factory, ShieldCheck, FileSearch, Settings, Truck, CheckCircle } from "lucide-react";

export default function HowWeWork() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const randomColors = [
    'text-cyan-400', 'text-emerald-400', 'text-purple-400', 'text-pink-400', 
    'text-yellow-400', 'text-orange-400', 'text-rose-400', 'text-blue-400',
    'text-teal-400', 'text-violet-400', 'text-lime-400', 'text-fuchsia-400'
  ];

  const getRandomColor = () => randomColors[Math.floor(Math.random() * randomColors.length)];
  
  const subtitleColor = useMemo(() => getRandomColor(), []);
  const directDescColor = useMemo(() => getRandomColor(), []);
  const ukDescColor = useMemo(() => getRandomColor(), []);

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

  const steps = [
    { icon: FileSearch, title: "Project Briefing", description: "We understand your design vision, technical requirements, and timelines." },
    { icon: Settings, title: "Manufacturer Selection", description: "We match your project with the right production partner, direct abroad or UK based." },
    { icon: Factory, title: "Technical Coordination", description: "We translate your concept into manufacturable specifications." },
    { icon: Truck, title: "Delivery Support", description: "We monitor timelines, quality, and compliance throughout." },
    { icon: CheckCircle, title: "Post Delivery", description: "We verify the result matches expectations and document learnings." }
  ];

  return (
    <section id="how-we-work" className="py-24 relative z-10" ref={sectionRef} data-testid="how-we-work-section">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-emerald-950/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`neon-text text-4xl md:text-5xl font-neon font-bold text-center mb-4 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          How We Work
        </h2>
        <p className={`${subtitleColor} font-neon text-center mb-12 w-full mx-auto text-xl md:text-2xl transition-all duration-1000 delay-100 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          We coordinate your bespoke solution, whether through direct production abroad or a trusted UK partner. You focus on design.
        </p>

        {/* Two Options */}
        <div className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="p-8 rounded-2xl border border-emerald-500/20 bg-black/60 backdrop-blur-sm">
            <Factory className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-xl font-neon font-bold mb-3 text-emerald-400">
              Direct Production Abroad
            </h3>
            <p className={`${directDescColor} font-neon mb-4 text-base`}>
              We connect you directly with vetted manufacturers in Turkey, Italy, and beyond.
            </p>
            <ul className="text-base font-neon text-gray-400 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500" /> Optimised costs</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500" /> Direct relationship</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500" /> CartaRep coordinates and protects</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-orange-500/20 bg-black/60 backdrop-blur-sm">
            <ShieldCheck className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-xl font-neon font-bold mb-3 text-orange-400">
              Trusted UK Partner
            </h3>
            <p className={`${ukDescColor} font-neon mb-4 text-base`}>
              Prefer not to import? We manage production through our trusted UK wholesaler.
            </p>
            <ul className="text-base font-neon text-gray-400 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" /> Zero customs or import hassle</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" /> Full compliance</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-orange-500" /> Maximum convenience</li>
            </ul>
          </div>
        </div>

        {/* Process Steps - Single wide black window */}
        <div className={`w-full px-0 transition-all duration-1000 delay-400 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="p-8 md:p-12 rounded-2xl border border-emerald-500/20 bg-black/80 backdrop-blur-sm">
            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="text-center"
                >
                  <h4 className="font-neon font-bold text-white mb-3 text-lg">{step.title}</h4>
                  <p className="font-neon text-gray-300 text-base leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
