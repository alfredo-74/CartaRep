import { useEffect, useRef, useState } from "react";
import { Download, ExternalLink } from "lucide-react";

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
    brands.forEach((brand) => {
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

  const brands = [
    {
      name: "A-emotional Light",
      category: "Emotion takes on unique value,",
      specialty: "handcrafted bespoke lighting creations",
      tagline: "Light is a medium for evoking emotions, as music or art does",
      website: "https://www.a-emotionallight.com/",
      catalogUrl: "https://drive.google.com/file/d/13UB8WrcGQANk4yh9J5HBhb26RXJxetxP/view?usp=drive_link",
      collections: [
        {
          name: "Baleira Collection",
          image: "https://www.a-emotionallight.com/wp-content/uploads/2024/08/BaleiraView-1.jpg",
          alt: "Baleira handcrafted lighting collection"
        },
        {
          name: "Umbra Line Collection",
          image: "https://www.a-emotionallight.com/wp-content/uploads/2024/08/UmbraLineView.jpg",
          alt: "Umbra Line contemporary lighting series"
        },
        {
          name: "Brétema Collection",
          image: "https://www.a-emotionallight.com/wp-content/uploads/2024/08/BretemaView-1.jpg",
          alt: "Brétema organic lighting designs"
        },
        {
          name: "Agasallo Collection",
          image: "https://www.a-emotionallight.com/wp-content/uploads/2022/07/agasallo-collection-lamps.jpg",
          alt: "Agasallo gift-inspired lighting collection"
        },
        {
          name: "Coral Collection",
          image: "https://www.a-emotionallight.com/wp-content/uploads/2019/06/coral_icono.jpg",
          alt: "Coral nature-inspired lighting collection"
        },
        {
          name: "Parga Collection",
          image: "https://www.a-emotionallight.com/wp-content/uploads/2022/07/parga-collection-lamps.jpg",
          alt: "Parga sculptural lighting collection"
        }
      ]
    },
    {
      name: "Ole Lighting",
      category: "Sustainable design,",
      specialty: "minimalist Mediterranean lighting",
      tagline: "Lighting for the Earth",
      website: "https://www.ole-lighting.com/en",
      catalogUrl: "https://pdf.archiexpo.com/pdf/ole-lighting/catalogue-2022-2023-lighting-earth/52969-415939.html",
      collections: [
        {
          name: "AVATAR Collection",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
          alt: "Ole Lighting AVATAR wall-to-wall system"
        },
        {
          name: "ILLA Esparto Series",
          image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
          alt: "Ole Lighting ILLA natural fiber collection"
        },
        {
          name: "Sustainable Collection",
          image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
          alt: "Ole Lighting sustainable designs"
        }
      ]
    },
    {
      name: "Bover Barcelona",
      category: "Mediterranean luxury,",
      specialty: "contemporary decorative lighting",
      tagline: "Balance between design and timelessness",
      website: "https://bover.es/en/",
      catalogUrl: "https://bover.es/en/",
      collections: [
        {
          name: "Dome Collection",
          image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
          alt: "Bover Dome handcrafted wooden pendants"
        },
        {
          name: "Mei Pleated Series",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
          alt: "Bover Mei pleated fabric collection"
        },
        {
          name: "Outdoor Garota",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
          alt: "Bover Garota outdoor lighting"
        }
      ]
    },
    {
      name: "Panzeri Lighting",
      category: "Italian excellence,",
      specialty: "70+ years of architectural lighting",
      tagline: "Quality, Tradition, Innovation",
      website: "https://panzeri.it/en/",
      catalogUrl: "https://panzeri.it/en/download/",
      collections: [
        {
          name: "Jackie LED Collection",
          image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
          alt: "Panzeri Jackie LED dimmable lamps"
        },
        {
          name: "Tubino Iconic Series",
          image: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
          alt: "Panzeri Tubino torch-inspired collection"
        },
        {
          name: "432 Ways Modular",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
          alt: "Panzeri 432 Ways modular system"
        }
      ]
    }
  ];


  return (
    <section id="brands" className="py-32 relative z-10" ref={sectionRef} data-testid="brands-section">
      <div className="container mx-auto px-6">
        <h2 className={`neon-text text-4xl md:text-5xl font-neon font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="text-brands-title">
          Our Brands
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {brands.map((brand, index) => (
            <div 
              key={brand.name}
              className={`glass-card p-8 rounded-2xl transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 200}ms` }}
              data-testid={`card-brand-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Brand Header */}
              <div className="text-center mb-6">
                <h3 className="neon-text text-2xl font-bold mb-2" data-testid={`text-brand-name-${index}`}>
                  {brand.name}
                </h3>
                <p className={`${getRandomColor()} mb-2 font-medium`} data-testid={`text-brand-category-${index}`}>
                  {brand.category}
                </p>
                <p className={`${getRandomColor()} text-sm mb-2`} data-testid={`text-brand-specialty-${index}`}>
                  {brand.specialty}
                </p>
                <p className={`${getRandomColor()} text-sm italic font-light`} data-testid={`text-brand-tagline-${index}`}>
                  "{brand.tagline}"
                </p>
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
                        <img 
                          src={collection.image}
                          alt={collection.alt}
                          className="w-full h-64 object-cover"
                          data-testid={`img-collection-${brand.name.toLowerCase().replace(/\s+/g, '-')}-${collectionIndex}`}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                          <h4 className={`font-semibold ${getRandomColor()}`} data-testid={`text-collection-name-${collectionIndex}`}>
                            {collection.name}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <a
                  href={brand.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all border border-white/20 hover:border-white/40"
                  data-testid={`link-catalog-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Download className="w-4 h-4" />
                  <span>Catalog</span>
                </a>
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
