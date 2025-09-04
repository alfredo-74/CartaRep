import { useEffect, useRef, useState } from "react";

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

  const brands = [
    {
      name: "A-emotional Light",
      category: "Nature inspired,",
      specialty: "artistic lamps",
      image: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
      alt: "A-emotional Light pendant fixture"
    },
    {
      name: "Ole Lighting",
      category: "Sustainable,",
      specialty: "smart lighting",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
      alt: "Ole Lighting sustainable fixture"
    },
    {
      name: "Boyer Barcelona",
      category: "Timeless,",
      specialty: "elegant lighting",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
      alt: "Boyer Barcelona elegant lighting"
    },
    {
      name: "Panzeri Lighting",
      category: "Architectural,",
      specialty: "decorative lighting",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
      alt: "Panzeri architectural lighting"
    }
  ];

  return (
    <section id="brands" className="py-32 relative z-10" ref={sectionRef} data-testid="brands-section">
      <div className="container mx-auto px-6">
        <h2 className={`neon-text text-4xl md:text-5xl font-neon font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="text-brands-title">
          Our Brands
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={brand.name}
              className={`glass-card p-8 rounded-2xl text-center transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-brand-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <img 
                src={brand.image} 
                alt={brand.alt}
                className="rounded-xl mb-6 w-full h-48 object-cover" 
                data-testid={`img-brand-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
              />
              <h3 className="text-xl font-bold text-primary mb-2" data-testid={`text-brand-name-${index}`}>
                {brand.name}
              </h3>
              <p className="text-muted-foreground mb-2" data-testid={`text-brand-category-${index}`}>
                {brand.category}
              </p>
              <p className="text-accent" data-testid={`text-brand-specialty-${index}`}>
                {brand.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
