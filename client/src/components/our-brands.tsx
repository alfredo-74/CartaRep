import React, { useRef, useState, useMemo, useEffect } from "react";
import { Download, ExternalLink } from "lucide-react";
import { CatalogueRequestForm } from "./catalogue-request-form";
import { LazyImage } from "./lazy-image";
import BrandGallery from "./brand-gallery";
import { brandsData } from '@/assets/manifest';

export default function OurBrands() {
  // Start visible on mobile (Safari iOS Intersection Observer fix)
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);


  // Shuffle function for randomizing brand order
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Intersection observer for fade-in animation (desktop only for better mobile compatibility)
  useEffect(() => {
    // Skip animation on mobile to ensure brands always show
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setIsVisible(true);
      return;
    }

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

    return () => {
      observer.disconnect();
    };
  }, []);

  const getBrandCatalogues = (brandName: string) => {
    const catalogues: { [key: string]: Array<{ name: string; description: string }> } = {
      "a·emotional light": [
        { name: "NEW 2025 CATALOGUE", description: "Latest collection featuring new designs and handcrafted lighting pieces" },
        { name: "2024 NEWS CATALOGUE", description: "Featured collections and new product launches from 2024" },
        { name: "2023 CATALOGUE", description: "Complete product overview with technical specifications" },
        { name: "Catalogue Press Kit", description: "High-resolution images and brand information for professionals" }
      ],
      "Olé Lighting": [
        { name: "Catalogue 2025-2026", description: "Complete indoor and outdoor lighting solutions with latest designs" },
        { name: "OUTDOORS CATALOGUE 2023", description: "Weather-resistant outdoor lighting systems and installations" }
      ],
      "Bover Barcelona": [
        { name: "New 2025 Icons", description: "Latest iconic designs and product innovations for 2025" },
        { name: "Indoor Catalogue", description: "Modern Mediterranean lighting designs for interior spaces" },
        { name: "Outdoor Book", description: "Complete outdoor lighting collection for terraces and gardens" },
        { name: "Working Catalogue 2025", description: "Professional lighting solutions for commercial spaces" },
        { name: "Birdie Dossier", description: "Detailed specifications for the popular Birdie collection" },
        { name: "Skybell Dossier", description: "Technical documentation for Skybell pendant systems" }
      ],
      "Panzeri Lighting": [
        { name: "La Forma della Luce - 2022", description: "Complete lighting catalogue showcasing Italian craftsmanship" },
        { name: "Technical Catalogue 2022", description: "Detailed technical specifications and installation guides" },
        { name: "Panzeri Hilow", description: "Specialized documentation for Hilow adjustable systems" },
        { name: "Light And Shapes 2019", description: "Design philosophy and architectural lighting solutions" },
        { name: "Press Kit", description: "High-resolution images and company information for professionals" }
      ],
      "Blux Lighting": [
        { name: "New Collections 2025", description: "Latest collection featuring innovative designs and contemporary lighting solutions" },
        { name: "General Catalogue", description: "Complete product overview with decorative, architectural and outdoor collections" },
        { name: "BrandBook B.lux", description: "Brand identity, design philosophy and company information for professionals" }
      ],
      "Martinelli Luce": [
        { name: "LAMPS CATALOGUE", description: "Complete collection of iconic Italian lamps and lighting designs" },
        { name: "Architectural Catalogue", description: "Professional architectural lighting solutions and systems" },
        { name: "Small Talks Brochure", description: "Latest 2025 collection featuring intimate lighting solutions" },
        { name: "Noura Brochure", description: "Contemporary pendant collection with organic forms" },
        { name: "Proposals 2025", description: "New design proposals and product innovations for 2025" },
        { name: "Pipistrello Collection", description: "Documentation for the iconic Pipistrello lamp series" },
        { name: "Metafora Collection", description: "Philosophical approach to lighting design and architecture" },
        { name: "Infinita Collection", description: "Continuous lighting design with flowing aesthetics" },
        { name: "Multidot Collection", description: "Modular dotted lighting patterns and configurations" },
        { name: "AVRO Brochure", description: "Technical documentation for the distinctive AVRO pendant system" }
      ],
      "Karman": [
        { name: "Hungry for Light 2025", description: "Complete collections catalogue showcasing Karman's latest lighting designs and innovations" },
        { name: "Complete Catalogue 2025", description: "Comprehensive product overview featuring all Karman collections with technical specifications" },
        { name: "Outdoor 2025", description: "Outdoor lighting collections catalogue for gardens, terraces, and exterior spaces" },
        { name: "Contract Book", description: "Professional lighting solutions for hospitality, restaurants, hotels, and commercial projects" },
        { name: "Hotel Collection", description: "Specialized lighting designs for hotel lobbies, rooms, and public spaces" },
        { name: "Restaurant Collection", description: "Ambient and functional lighting solutions for dining environments" },
        { name: "Alibaglass Catalogue", description: "Technical documentation for the Alibaglass glass pendant collection" },
        { name: "Leda Collection", description: "Detailed specifications for the elegant Leda lighting series" }
      ]
    };
    return catalogues[brandName] || [];
  };

  // Create shuffled brands array using manifest data
  const shuffledBrands = useMemo(() => shuffleArray(brandsData), []);

  return (
    <section id="brands" className="pt-24 pb-32 relative z-10" ref={sectionRef} data-testid="brands-section">
      <div className="container mx-auto px-6">
        <h2 className={`neon-text text-4xl md:text-5xl font-neon font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="text-brands-title">
          Our Brands
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {shuffledBrands.map((brand, index) => (
            <div 
              key={brand.name}
              className={`glass-card p-8 rounded-2xl transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 200}ms` }}
              data-testid={`card-brand-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Brand Header */}
              <div className="text-center mb-6">
                {brand.logoUrl ? (
                  <div className="mb-4">
                    <LazyImage 
                      src={brand.logoUrl} 
                      alt={`${brand.name} logo`}
                      className="h-12 mx-auto opacity-90 hover:opacity-100 transition-opacity"
                      priority={index < 2}
                      testId={`img-brand-logo-${index}`}
                    />
                  </div>
                ) : (
                  <h3 className="neon-text text-2xl font-bold mb-2" data-testid={`text-brand-name-${index}`}>
                    {brand.name}
                  </h3>
                )}
                <p className="text-cyan-400 text-base font-neon leading-relaxed font-light line-clamp-5" data-testid={`text-brand-description-${index}`}>
                  {brand.description}
                </p>
              </div>

              {/* Brand Gallery */}
              <div className="mb-6">
                <BrandGallery 
                  collections={brand.collections}
                  brandName={brand.name}
                  className=""
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <CatalogueRequestForm
                  brandName={brand.name}
                  availableCatalogues={getBrandCatalogues(brand.name)}
                >
                  <button
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-neon px-4 py-2 rounded-lg transition-all border border-white/20 hover:border-white/40"
                    data-testid={`button-request-catalog-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Request Catalog</span>
                  </button>
                </CatalogueRequestForm>
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary font-neon px-4 py-2 rounded-lg transition-all border border-primary/20 hover:border-primary/40"
                  data-testid={`link-website-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Website</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
