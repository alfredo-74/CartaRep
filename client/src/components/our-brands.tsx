import { useEffect, useRef, useState, useMemo } from "react";
import { Download, ExternalLink } from "lucide-react";
import { CatalogueRequestForm } from "./catalogue-request-form";
import { LazyImage } from "./lazy-image";

export default function OurBrands() {
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

  // Minimal brand data structure - ready for images
  const brands = [
    {
      name: "a·emotional light",
      description: "Innovative lighting designs",
      collections: []
    },
    {
      name: "Olé Lighting",
      description: "Contemporary lighting solutions",
      collections: []
    },
    {
      name: "Bover Barcelona",
      description: "Mediterranean lighting designs",
      collections: []
    },
    {
      name: "Panzeri Lighting",
      description: "Italian craftsmanship",
      collections: []
    }
  ];

  return (
    <section id="brands" className="py-24 relative z-10" ref={sectionRef} data-testid="brands-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`neon-text text-4xl md:text-5xl font-neon font-bold mb-8 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="text-brands-title">
            Our Brands
          </h2>
          <p className={`text-xl text-muted-foreground mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="text-brands-subtitle">
            Explore our curated collection of premium lighting brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`glass-card p-6 rounded-xl text-center transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 200}ms` }}
              data-testid={`brand-card-${index}`}
            >
              <h3 className="text-xl font-bold mb-3 text-primary" data-testid={`brand-name-${index}`}>
                {brand.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`brand-description-${index}`}>
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}