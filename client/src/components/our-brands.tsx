import { useEffect, useRef, useState, useMemo } from "react";
import { Download, ExternalLink } from "lucide-react";
import { CatalogueRequestForm } from "./catalogue-request-form";
import { LazyImage } from "./lazy-image";
import aEmotionalLogo from '@/assets/a-emotional-final.jpg';
import oleLogo from '@/assets/ole-logo.png';
import boverLogo from '@/assets/bover-newest.jpg';
import panzeriLogo from '@/assets/panzeri-logo-new.png';

// Placeholder for collection images - using existing brand logos for now
// Note: Additional collection images would need to be added to assets directory

export default function OurBrands() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCarousel, setActiveCarousel] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRefs = useRef<{ [key: string]: NodeJS.Timeout }>({});

  // Generate random colors for text elements
  const randomColors = [
    'text-cyan-400', 'text-emerald-400', 'text-purple-400', 'text-pink-400', 
    'text-yellow-400', 'text-orange-400', 'text-red-400', 'text-blue-400',
    'text-teal-400', 'text-violet-400', 'text-rose-400', 'text-lime-400'
  ];

  const getRandomColor = () => randomColors[Math.floor(Math.random() * randomColors.length)];

  // Shuffle function for randomizing brand order
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start auto-scrolling for all brand carousels
          startAutoScroll();
        } else {
          // Stop auto-scrolling when not visible
          stopAutoScroll();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      stopAutoScroll();
    };
  }, []);

  const startAutoScroll = () => {
    shuffledBrands.forEach((brand) => {
      if (intervalRefs.current[brand.name]) {
        clearInterval(intervalRefs.current[brand.name]);
      }
      
      intervalRefs.current[brand.name] = setInterval(() => {
        setActiveCarousel(prev => ({
          ...prev,
          [brand.name]: ((prev[brand.name] || 0) + 1) % brand.collections.length
        }));
      }, 3000 + Math.random() * 2000); // Random interval between 3-5 seconds
    });
  };

  const stopAutoScroll = () => {
    Object.values(intervalRefs.current).forEach(interval => {
      if (interval) clearInterval(interval);
    });
    intervalRefs.current = {};
  };

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
      ]
    };
    return catalogues[brandName] || [];
  };

  const brands = [
    {
      name: "a·emotional light",
      logoUrl: aEmotionalLogo,
      description: "A-emotional Light takes sculptural form through craftsmanship and design. Each handcrafted piece is organic and nature-inspired, blending art and light into unique creations that bring warmth, beauty, and individuality to residential and hospitality interiors.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://www.a-emotionallight.com/",
      collections: [
        {
          name: "Handcrafted Collection",
          image: aEmotionalLogo,
          alt: "a·emotional light handcrafted lighting collection"
        },
        {
          name: "Contemporary Series",
          image: aEmotionalLogo,
          alt: "a·emotional light contemporary lighting series"
        },
        {
          name: "Organic Designs",
          image: aEmotionalLogo,
          alt: "a·emotional light organic lighting designs"
        }
      ]
    },
    {
      name: "Olé Lighting",
      logoUrl: oleLogo,
      description: "Olé designs soulful lighting with sustainable materials and creative solutions. Mediterranean-inspired, each collection transforms indoor and outdoor spaces with originality and efficiency, creating lighting experiences that combine design and comfort.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://www.ole-lighting.com/en",
      collections: [
        {
          name: "Indoor Lighting Collection",
          image: oleLogo,
          alt: "Olé Lighting indoor lighting solutions"
        },
        {
          name: "Outdoor Lighting Series",
          image: oleLogo,
          alt: "Olé Lighting outdoor lighting systems"
        },
        {
          name: "Sustainable Designs",
          image: oleLogo,
          alt: "Olé Lighting sustainable lighting designs"
        }
      ]
    },
    {
      name: "Bover Barcelona",
      logoUrl: boverLogo,
      description: "Bover blends contemporary lines with timeless charm. Using materials like wicker, woven steel, and hand-pleated fabric, each design is crafted for outdoor spaces while versatile enough for interiors, delivering elegance, durability, and character across any project.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://bover.es/en/",
      collections: [
        {
          name: "Mediterranean Collection",
          image: boverLogo,
          alt: "Bover Mediterranean-inspired lighting collection"
        },
        {
          name: "Outdoor Collection",
          image: boverLogo,
          alt: "Bover outdoor lighting collection"
        },
        {
          name: "Contemporary Indoor Series",
          image: boverLogo,
          alt: "Bover contemporary indoor lighting series"
        }
      ]
    },
    {
      name: "Panzeri Lighting",
      logoUrl: panzeriLogo,
      description: "For over 70 years, Panzeri has combined Italian tradition and innovation in decorative and architectural lighting. Its designs balance creativity, quality, and timeless style, enhancing interiors and exteriors worldwide with refined, iconic solutions.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://panzeri.it/en/",
      collections: [
        {
          name: "Italian Design Collection",
          image: panzeriLogo,
          alt: "Panzeri Italian design lighting collection"
        },
        {
          name: "Architectural Series",
          image: panzeriLogo,
          alt: "Panzeri architectural lighting series"
        },
        {
          name: "Decorative Lighting",
          image: panzeriLogo,
          alt: "Panzeri decorative lighting collection"
        }
      ]
    }
  ];

  // Create a randomly shuffled brands array that persists on component mount
  const shuffledBrands = useMemo(() => shuffleArray(brands), []);

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
                {brand.description ? (
                  <p className="text-cyan-400 text-sm leading-relaxed font-light line-clamp-5" data-testid={`text-brand-description-${index}`}>
                    {brand.description}
                  </p>
                ) : (
                  <>
                    <p className={`${getRandomColor()} mb-2 font-medium`} data-testid={`text-brand-category-${index}`}>
                      {brand.category}
                    </p>
                    <p className={`${getRandomColor()} text-sm mb-2`} data-testid={`text-brand-specialty-${index}`}>
                      {brand.specialty}
                    </p>
                    <p className={`${getRandomColor()} text-sm italic font-light`} data-testid={`text-brand-tagline-${index}`}>
                      "{brand.tagline}"
                    </p>
                  </>
                )}
              </div>

              {/* Collection Carousel */}
              <div className="relative mb-6">
                <div className="overflow-hidden rounded-xl">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${(activeCarousel[brand.name] || 0) * 100}%)` }}
                  >
                    {brand.collections.map((collection, collectionIndex) => (
                      <div 
                        key={collectionIndex}
                        className="w-full flex-shrink-0"
                        data-testid={`carousel-slide-${brand.name.toLowerCase().replace(/\s+/g, '-')}-${collectionIndex}`}
                      >
                        <LazyImage 
                          src={collection.image}
                          alt={collection.alt}
                          className="w-full h-64 object-cover"
                          priority={collectionIndex === (activeCarousel[brand.name] || 0) && index < 2}
                          testId={`img-collection-${brand.name.toLowerCase().replace(/\s+/g, '-')}-${collectionIndex}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <CatalogueRequestForm
                  brandName={brand.name}
                  availableCatalogues={getBrandCatalogues(brand.name)}
                >
                  <button
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all border border-white/20 hover:border-white/40"
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
                  className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary px-4 py-2 rounded-lg transition-all border border-primary/20 hover:border-primary/40"
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
