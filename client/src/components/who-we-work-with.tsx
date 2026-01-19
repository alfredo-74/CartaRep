import { useEffect, useRef, useState, useMemo } from "react";
import { Compass, Users, Building2, BookOpen } from "lucide-react";

export default function WhoWeWorkWith() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const randomColors = [
    'text-cyan-400', 'text-emerald-400', 'text-purple-400', 'text-pink-400', 
    'text-yellow-400', 'text-orange-400', 'text-rose-400', 'text-blue-400',
    'text-teal-400', 'text-violet-400', 'text-lime-400', 'text-fuchsia-400'
  ];

  const getRandomColor = () => randomColors[Math.floor(Math.random() * randomColors.length)];
  const subtitleColor = useMemo(() => getRandomColor(), []);

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

  const audiences = [
    {
      icon: Compass,
      title: "Architects & Interior Designers",
      description: "Push design boundaries without worrying about production risks.",
      message: "We help you deliver bespoke without delivery risk.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Design Managers & Technical Leads",
      description: "Translate ideas into manufacturable, cost-controlled solutions.",
      message: "From concept detail to factory-ready solution.",
      color: "pink"
    },
    {
      icon: Building2,
      title: "Procurement & Developers",
      description: "Ensure compliance, quality, and smooth delivery with minimal risk.",
      message: "No import risk, full compliance, quality guaranteed.",
      color: "blue"
    },
    {
      icon: BookOpen,
      title: "Material Librarians",
      description: "Easily recommend reliable manufacturers and protect your studio's legacy.",
      message: "Clear, organized, safe to recommend.",
      color: "teal"
    }
  ];

  const colorClasses: { [key: string]: { border: string; bg: string; text: string; icon: string } } = {
    purple: { border: "border-purple-500/30", bg: "bg-purple-950/10", text: "text-purple-400", icon: "text-purple-400" },
    pink: { border: "border-pink-500/30", bg: "bg-pink-950/10", text: "text-pink-400", icon: "text-pink-400" },
    blue: { border: "border-blue-500/30", bg: "bg-blue-950/10", text: "text-blue-400", icon: "text-blue-400" },
    teal: { border: "border-teal-500/30", bg: "bg-teal-950/10", text: "text-teal-400", icon: "text-teal-400" }
  };

  return (
    <section id="who-we-work-with" className="py-24 relative z-10" ref={sectionRef} data-testid="who-we-work-with-section">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-purple-950/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`neon-text text-4xl md:text-5xl font-neon font-bold text-center mb-4 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          Who We Work With
        </h2>
        <p className={`${subtitleColor} font-neon text-center mb-16 w-full mx-auto text-xl md:text-2xl transition-all duration-1000 delay-100 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          We solve daily bespoke challenges for professionals who need solutions, not just suppliers.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const colors = colorClasses[audience.color];
            return (
              <div
                key={audience.title}
                className={`p-8 rounded-2xl ${colors.border} bg-black/60 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <audience.icon className={`w-10 h-10 ${colors.icon} mb-4`} />
                <h3 className={`text-xl font-neon font-bold mb-3 ${colors.text}`}>
                  {audience.title}
                </h3>
                <p className="text-gray-400 font-neon mb-4 text-base">
                  {audience.description}
                </p>
                <p className="text-base font-neon italic text-gray-500">
                  {audience.message}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
