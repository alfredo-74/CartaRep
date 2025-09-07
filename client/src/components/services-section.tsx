import { useEffect, useRef, useState } from "react";
import { Lightbulb, Compass, UserCheck, Home, Building, Cog, Leaf } from "lucide-react";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mainServices = [
    {
      icon: Lightbulb,
      title: "Bespoke Lighting",
      description: "Customized lighting solutions tailored to your specific requirements and aesthetic vision.",
      color: "text-primary"
    },
    {
      icon: Compass,
      title: "Tailored Consultancy",
      description: "Expert guidance and project specifications from concept to completion.",
      color: "text-secondary"
    }
  ];

  const additionalServices: Array<{
    icon: any;
    title: string;
    description: string;
    color: string;
  }> = [];

  return (
    <section id="services" className="py-32 relative z-10" ref={sectionRef} data-testid="services-section">
      <div className="container mx-auto px-6">
        <h2 className={`neon-text text-4xl md:text-5xl font-neon font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="text-services-title">
          Services
        </h2>
        
        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-12">
          {mainServices.map((service, index) => (
            <div 
              key={service.title}
              className={`glass-card p-8 rounded-2xl text-center transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 200}ms` }}
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`service-icon text-6xl mb-6 ${service.color}`} data-testid={`icon-service-${index}`}>
                <service.icon className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid={`text-service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalServices.map((service, index) => (
            <div 
              key={service.title}
              className={`glass-card p-6 rounded-xl text-center transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
              data-testid={`card-additional-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <service.icon className={`service-icon text-3xl mb-3 mx-auto ${service.color}`} data-testid={`icon-additional-service-${index}`} />
              <h4 className="font-semibold mb-2" data-testid={`text-additional-service-title-${index}`}>
                {service.title}
              </h4>
              <p className="text-sm text-muted-foreground" data-testid={`text-additional-service-description-${index}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
