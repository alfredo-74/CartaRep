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
      name: "a·emotional light",
      logoUrl: "https://www.lumens.com/on/demandware.static/-/Sites-lumens-site-catalog/default/dw3f6ad454/images/brand/logos/a-emotional-light-logo.png",
      description: "a·emotional light, emotion takes on a unique value. It's the value of craftsmanship, of the singular and the exclusive. Light is a medium for evoking emotions, as music or art does. This perspective leads us to perceive our designs as bespoke creations, individually handcrafted pieces meticulously designed to illuminate spaces, touch people's hearts, and capture special moments.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://www.a-emotionallight.com/",
      catalogUrl: "https://drive.google.com/file/d/13UB8WrcGQANk4yh9J5HBhb26RXJxetxP/view?usp=drive_link",
      collections: [
        {
          name: "Veiga Collection",
          image: "https://www.inspyerlighting.co.uk/cdn/shop/files/a-emotional-light-Veiga-Pendant-Light-2_512x512.jpg",
          alt: "Veiga pendant light by Isaac Piñeiro"
        },
        {
          name: "Umbra Line Collection",
          image: "https://www.inspyerlighting.co.uk/cdn/shop/files/a-emotional-light-Umbra-Line-Wall-Light-2_512x769.jpg",
          alt: "Umbra Line wall light by Isaac Piñeiro"
        },
        {
          name: "Baleira Collection",
          image: "https://www.inspyerlighting.co.uk/cdn/shop/files/a-emotional-light-Baleira-Pendant-Light-2_512x641.jpg",
          alt: "Baleira pendant reinterpreting timeless geometry"
        },
        {
          name: "Lisa Collection",
          image: "https://www.inspyerlighting.co.uk/cdn/shop/files/a-emotional-light-Lisa-Wall-Light-2_512x513.jpg",
          alt: "Lisa wall light advocating simplicity"
        },
        {
          name: "Agasallo Collection",
          image: "https://www.inspyerlighting.co.uk/cdn/shop/files/a-emotional-light-Agasallo-Floor-Lamp-2_512x641.jpg",
          alt: "Agasallo floor lamp with organic fluidity"
        },
        {
          name: "Nebra Collection",
          image: "https://www.inspyerlighting.co.uk/cdn/shop/files/a-emotional-light-Nebra-Suspension-Light-2_512x408.jpg",
          alt: "Nebra suspension light contemporary design"
        }
      ]
    },
    {
      name: "Olé Lighting",
      description: "Olé Lighting is a family business specialised in the design and manufacture of quality lamps from Valencia for the whole world. In Olé we are dedicated to creating our own non-conformist and efficient lighting solutions that give light to your ideas. We take care of lamps because they have the power to transform spaces, both indoors and outdoors. At Olé, we see light as a powerful force that transforms both spaces and emotions. That's why you'll find designs with soul, sustainable materials, customizable solutions, and a way of working deeply rooted in the heart of the Mediterranean.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://www.ole-lighting.com/en",
      catalogUrl: "https://drive.google.com/drive/folders/1nfbTayrcQEE0Vj504vV-ktJq5vEWa3FO?usp=drive_link",
      collections: [
        {
          name: "ALLEGRA Collection",
          image: "https://www.ole-lighting.com/cdnassets/colecciones/ALLEGRA/ALLEGRA-770x855.jpg",
          alt: "Ole Lighting ALLEGRA contemporary design"
        },
        {
          name: "CELESTE Collection",
          image: "https://www.ole-lighting.com/cdnassets/colecciones/CELESTE/CELESTE-770x855.jpg",
          alt: "Ole Lighting CELESTE elegant lighting"
        },
        {
          name: "MEDUSA Collection",
          image: "https://www.ole-lighting.com/cdnassets/colecciones/MEDUSA/MEDUSA-770x855.jpg",
          alt: "Ole Lighting MEDUSA award-winning design"
        },
        {
          name: "NEXO Collection",
          image: "https://www.ole-lighting.com/cdnassets/colecciones/NEXO/NEXO-770x855.jpg",
          alt: "Ole Lighting NEXO modular series"
        },
        {
          name: "PAGODA Collection",
          image: "https://www.ole-lighting.com/cdnassets/colecciones/PAGODA/PAGODA-770x855.jpg",
          alt: "Ole Lighting PAGODA Asian-inspired collection"
        },
        {
          name: "ILLA Collection",
          image: "https://www.ole-lighting.com/cdnassets/colecciones/ILLA/ILLA-small-coleccion-770x855.jpg",
          alt: "Ole Lighting ILLA esparto natural fiber collection"
        }
      ]
    },
    {
      name: "Bover Barcelona",
      logoUrl: "https://www.lumens.com/on/demandware.static/-/Sites-lumens-site-catalog/default/dwdbd27ad0/images/brand/logos/bover-logo.png",
      description: "Based in Barcelona, Bover lighting is at the center of Spanish culture, creativity and innovation. The Bover look is cleanly modern yet romantic, with designs that incorporate unique details and materials like wicker, woven strips of steel and hand-pleated fabric. We seek designs that are timeless, products that possess a balance, that within ten years we will still enjoy. Every Bover lamp goes through a rigorous development process to make sure that it will continue to illuminate and catch eyes for many years.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://bover.es/en/",
      catalogUrl: "https://view.publitas.com/bover/cat_indoor_2022_ce_usa",
      collections: [
        {
          name: "Nans Collection",
          image: "https://www.inspyerlighting.co.uk/cdn/shop/files/Bover-Nans-Portable-Outdoor-Table-Lamp-2_512x512.jpg",
          alt: "Bover Nans hand-woven portable lamps"
        },
        {
          name: "Garota Collection",
          image: "https://www.inspyerlighting.co.uk/cdn/shop/files/Bover-Garota-Hang-Plug-In-Outdoor-Pendant-Light-2_512x631.jpg",
          alt: "Bover Garota hang plug-in outdoor pendants"
        },
        {
          name: "Platet Collection",
          image: "https://www.inspyerlighting.co.uk/cdn/shop/files/Bover-Platet-Outdoor-Wall-Light-A01-2_512x512.jpg",
          alt: "Bover Platet industrial-inspired wall lights"
        },
        {
          name: "Tanit Collection",
          image: "https://www.inspyerlighting.co.uk/cdn/shop/files/Bover-Tanit-Portable-Table-Lamp-M29R-2_512x512.jpg",
          alt: "Bover Tanit portable rechargeable table lamps"
        },
        {
          name: "Drip/Drop Collection",
          image: "https://www.inspyerlighting.co.uk/cdn/shop/files/Bover-DripDrop-LED-Pendant-Light-S01L-2_512x652.jpg",
          alt: "Bover Drip/Drop versatile LED pendants"
        },
        {
          name: "Nut Collection",
          image: "https://www.inspyerlighting.co.uk/cdn/shop/files/Bover-Nut-Outdoor-Wall-Light-A01-2_512x644.jpg",
          alt: "Bover Nut outdoor wall lighting series"
        }
      ]
    },
    {
      name: "Panzeri Lighting",
      description: "Quality, tradition and innovation. These are the bedrock values of Panzeri, a company that has a 70-year history of producing lighting and selling the Made in Italy brand gracing the most exclusive interiors and exteriors worldwide. For 70 years Panzeri has been producing lighting for every specific need, creating the shape of light through Italian craftsmanship and cutting-edge technology with innovative lighting solutions that blend functionality and artistry.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://panzeri.it/en/",
      catalogUrl: "https://panzeri.it/en/download/",
      collections: [
        {
          name: "Rendez-Vous Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-rendez-vous-new.jpg",
          alt: "Panzeri Rendez-Vous contemporary design"
        },
        {
          name: "Tubino Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-tubino.jpg",
          alt: "Panzeri Tubino torch-inspired series"
        },
        {
          name: "432 Ways Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-432_ways-new.jpg",
          alt: "Panzeri 432 Ways modular lighting system"
        },
        {
          name: "Opuntia Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-opuntia.jpg",
          alt: "Panzeri Opuntia organic form lighting"
        },
        {
          name: "Hilow Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-hilow.jpg",
          alt: "Panzeri Hilow architectural lighting"
        },
        {
          name: "Carl Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-carl.jpg",
          alt: "Panzeri Carl minimalist design series"
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
                {brand.logoUrl ? (
                  <div className="mb-4">
                    <img 
                      src={brand.logoUrl} 
                      alt={`${brand.name} logo`}
                      className="h-12 mx-auto filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                      data-testid={`img-brand-logo-${index}`}
                    />
                  </div>
                ) : (
                  <h3 className="neon-text text-2xl font-bold mb-2" data-testid={`text-brand-name-${index}`}>
                    {brand.name}
                  </h3>
                )}
                {brand.description ? (
                  <p className={`${getRandomColor()} text-sm leading-relaxed font-light`} data-testid={`text-brand-description-${index}`}>
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
