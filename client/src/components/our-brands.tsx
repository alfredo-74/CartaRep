import { useEffect, useRef, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import { CatalogueRequestForm } from "./catalogue-request-form";
import aEmotionalLogo from '@/assets/a-emotional-final.jpg';
import oleLogo from '@/assets/ole-logo.png';
import boverLogo from '@/assets/bover-newest.jpg';
import panzeriLogo from '@/assets/panzeri-logo-new.png';

// New a-emotional light collection images
import tondaNewImg from '@assets/tonda_1757517578733.jpg';
import euroNewImg from '@assets/euro_1757517578734.jpg';
import eurolNewImg from '@assets/eurol_1757517578736.jpg';
import agasalloNewImg from '@assets/agasallo_1757517578737.jpg';
import umbraNewImg from '@assets/umbra_1757517578738.jpg';
import coralNewImg from '@assets/coral_1757517578739.jpg';
import bretemaEuroluceImg from '@assets/General-View-Bretema-Euroluce-2025-plana_1757517578740.jpg';
import screenshotImg from '@assets/Screenshot 2025-01-04 184222_1757517578741.jpg';
import tempoNewImg from '@assets/2405_NEWS24_TEMPO_00003_1757517578742.jpg';
import eraNewImg from '@assets/2405_NEWS24_ERA_00005_1757517578743.jpg';
import rosaNewImg from '@assets/rosa_1757517649972.jpg';

// New Bover Barcelona collection images
import kandoImg from '@assets/kando_1757519174464.jpg';
import nans3Img from '@assets/nans3_1757519174467.jpg';
import mediImg from '@assets/medi_1757519174469.jpg';
import nanas1Img from '@assets/nanas1_1757519174471.jpg';
import bolImg from '@assets/bol_1757519174472.jpg';
import nansNewImg from '@assets/nans_1757519174473.jpg';
import drepImg from '@assets/drep_1757519174475.jpg';
import skybellImg from '@assets/skybell_1757519174476.jpg';
import nonLaImg from '@assets/non la_1757519174478.jpg';
import boverNewImg from '@assets/bover_1757519174479.jpg';

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
      description: "a·emotional light, emotion takes on a unique value. It's the value of craftsmanship, of the singular and the exclusive. Light is a medium for evoking emotions, as music or art does. This perspective leads us to perceive our designs as bespoke creations, individually handcrafted pieces meticulously designed to illuminate spaces, touch people's hearts, and capture special moments.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://www.a-emotionallight.com/",
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
          name: "Veiga Collection",
          image: "https://www.a-emotionallight.com/wp-content/uploads/2024/08/VeigaView-1.jpg",
          alt: "Veiga contemporary pendant design"
        },
        {
          name: "Coral Collection",
          image: "https://www.a-emotionallight.com/wp-content/uploads/2019/06/coral_icono.jpg",
          alt: "Coral nature-inspired lighting collection"
        },
        {
          name: "Tonda Collection",
          image: tondaNewImg,
          alt: "Tonda circular lighting with intricate patterns"
        },
        {
          name: "Euro Collection",
          image: euroNewImg,
          alt: "Euro elegant sculptural lighting design"
        },
        {
          name: "Eurol Collection",
          image: eurolNewImg,
          alt: "Eurol contemporary wall lighting series"
        },
        {
          name: "Agasallo New",
          image: agasalloNewImg,
          alt: "Agasallo new handcrafted gift lighting collection"
        },
        {
          name: "Umbra New",
          image: umbraNewImg,
          alt: "Umbra new circular halo lighting series"
        },
        {
          name: "Coral New",
          image: coralNewImg,
          alt: "Coral new pendant lighting collection"
        },
        {
          name: "Brétema Euroluce 2025",
          image: bretemaEuroluceImg,
          alt: "Brétema collection showcase at Euroluce 2025"
        },
        {
          name: "Artisan Spotlight",
          image: screenshotImg,
          alt: "Behind the scenes of a-emotional light craftsmanship"
        },
        {
          name: "Tempo Collection",
          image: tempoNewImg,
          alt: "Tempo rhythmic pleated lighting collection"
        },
        {
          name: "Era Collection",
          image: eraNewImg,
          alt: "Era contemporary black pendant lighting"
        },
        {
          name: "Rosa Collection",
          image: rosaNewImg,
          alt: "Rosa elegant pink pendant lighting collection"
        }
      ]
    },
    {
      name: "Olé Lighting",
      logoUrl: oleLogo,
      description: "Olé Lighting is a family business specialised in the design and manufacture of quality lamps from Valencia for the whole world. In Olé we are dedicated to creating our own non-conformist and efficient lighting solutions that give light to your ideas. We take care of lamps because they have the power to transform spaces, both indoors and outdoors. At Olé, we see light as a powerful force that transforms both spaces and emotions. That's why you'll find designs with soul, sustainable materials, customizable solutions, and a way of working deeply rooted in the heart of the Mediterranean.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://www.ole-lighting.com/en",
      collections: [
        {
          name: "AVATAR PLUS Collection",
          image: "https://www.ole-lighting.com/cdnassets/colecciones/AVATAR-PLUS/AVATAR-PLUS-ambiente-770x855.jpg",
          alt: "Ole Lighting AVATAR PLUS ambient system"
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
          name: "LLUNA Collection",
          image: "https://www.ole-lighting.com/cdnassets/colecciones/LLUNA/LLUNA-ambient-770x855.jpg",
          alt: "Ole Lighting LLUNA ambient lunar design"
        },
        {
          name: "NATURA Collection",
          image: "https://www.ole-lighting.com/cdnassets/colecciones/NATURE/NATURE-coleccion-770x855.jpg",
          alt: "Ole Lighting NATURA natural inspiration"
        },
        {
          name: "SONORA Collection",
          image: "https://www.ole-lighting.com/cdnassets/colecciones/SONORA/SONORA-770x855.jpg",
          alt: "Ole Lighting SONORA acoustic lighting"
        },
        {
          name: "PAGODA Collection",
          image: "https://www.ole-lighting.com/cdnassets/colecciones/PAGODA/PAGODA-770x855.jpg",
          alt: "Ole Lighting PAGODA Asian-inspired collection"
        },
        {
          name: "NEXO Collection",
          image: "https://www.ole-lighting.com/cdnassets/colecciones/NEXO/NEXO-770x855.jpg",
          alt: "Ole Lighting NEXO modular series"
        },
        {
          name: "ILLA Collection",
          image: "https://www.ole-lighting.com/cdnassets/colecciones/ILLA/ILLA-small-coleccion-770x855.jpg",
          alt: "Ole Lighting ILLA esparto natural fiber collection"
        },
      ]
    },
    {
      name: "Bover Barcelona",
      logoUrl: boverLogo,
      description: "Based in Barcelona, Bover lighting is at the center of Spanish culture, creativity and innovation. The Bover look is cleanly modern yet romantic, with designs that incorporate unique details and materials like wicker, woven strips of steel and hand-pleated fabric. We seek designs that are timeless, products that possess a balance, that within ten years we will still enjoy. Every Bover lamp goes through a rigorous development process to make sure that it will continue to illuminate and catch eyes for many years.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://bover.es/en/",
      collections: [
        {
          name: "Nans Collection",
          image: "https://bover.es/16989-home_default/nans-bag38-outdoor.jpg",
          alt: "Bover Nans hand-woven bag outdoor series"
        },
        {
          name: "Garota Collection",
          image: "https://bover.es/10180-home_default/garota-s-02.jpg",
          alt: "Bover Garota outdoor pendant lighting"
        },
        {
          name: "Mediterrània Collection",
          image: "https://bover.es/17907-home_default/mediterrania-52-a98.jpg",
          alt: "Bover Mediterrània Mediterranean ribbon lighting"
        },
        {
          name: "Roda Collection",
          image: "https://bover.es/9947-home_default/roda-s-200-v.jpg",
          alt: "Bover Roda circular pendant series"
        },
        {
          name: "Amphora Collection",
          image: "https://bover.es/10163-home_default/amphora-02.jpg",
          alt: "Bover Amphora elegant floor lighting"
        },
        {
          name: "Mei Collection",
          image: "https://bover.es/17937-home_default/mei-150.jpg",
          alt: "Bover Mei pleated fabric pendant"
        },
        {
          name: "Platet Collection",
          image: "https://bover.es/10176-home_default/platet-a01-outdoor.jpg",
          alt: "Bover Platet industrial-inspired wall lights"
        },
        {
          name: "Nut Collection",
          image: "https://bover.es/10172-home_default/nut-a01-outdoor.jpg",
          alt: "Bover Nut outdoor wall lighting series"
        },
        {
          name: "Kando Collection",
          image: kandoImg,
          alt: "Bover Kando outdoor luminous cylinders collection"
        },
        {
          name: "Nans Outdoor Bar",
          image: nans3Img,
          alt: "Bover Nans woven pendant lights in outdoor bar setting"
        },
        {
          name: "Medi Collection",
          image: mediImg,
          alt: "Bover Medi flowing organic pendant light"
        },
        {
          name: "Nans Detail",
          image: nanas1Img,
          alt: "Bover Nans woven pendant light close-up detail"
        },
        {
          name: "Bol Collection",
          image: bolImg,
          alt: "Bover Bol modular chandelier system for dining rooms"
        },
        {
          name: "Nans Outdoor Dining",
          image: nansNewImg,
          alt: "Bover Nans spherical pendant lights in outdoor dining area"
        },
        {
          name: "Drep Collection",
          image: drepImg,
          alt: "Bover Drep multi-pendant lights in modern stairway"
        },
        {
          name: "Skybell System",
          image: skybellImg,
          alt: "Bover Skybell circular pendant system in hospitality space"
        },
        {
          name: "Non La Collection",
          image: nonLaImg,
          alt: "Bover Non La conical pendant light in warm setting"
        },
        {
          name: "Spline Installation",
          image: boverNewImg,
          alt: "Bover Spline cascading pendant lights installation"
        }
      ]
    },
    {
      name: "Panzeri Lighting",
      logoUrl: panzeriLogo,
      description: "Quality, tradition and innovation. These are the bedrock values of Panzeri, a company that has a 70-year history of producing lighting and selling the Made in Italy brand gracing the most exclusive interiors and exteriors worldwide. For 70 years Panzeri has been producing lighting for every specific need, creating the shape of light through Italian craftsmanship and cutting-edge technology with innovative lighting solutions that blend functionality and artistry.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://panzeri.it/en/",
      collections: [
        {
          name: "Ombra Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-ombra-new.jpg",
          alt: "Panzeri Ombra shadow play lighting"
        },
        {
          name: "Adamas Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-adamas-new.jpg",
          alt: "Panzeri Adamas diamond-inspired series"
        },
        {
          name: "Superbold Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-superbold-new.jpg",
          alt: "Panzeri Superbold bold architectural lighting"
        },
        {
          name: "Zero Round Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-zero_round.jpg",
          alt: "Panzeri Zero Round minimalist circular design"
        },
        {
          name: "Muranè Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-murane.jpg",
          alt: "Panzeri Muranè Venetian glass-inspired lighting"
        },
        {
          name: "Opuntia Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-opuntia.jpg",
          alt: "Panzeri Opuntia organic cactus-inspired forms"
        },
        {
          name: "432 Ways Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-432_ways-new.jpg",
          alt: "Panzeri 432 Ways modular lighting system"
        },
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
          name: "Hilow Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-hilow.jpg",
          alt: "Panzeri Hilow architectural lighting"
        },
        {
          name: "Carl Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-carl.jpg",
          alt: "Panzeri Carl minimalist design series"
        },
        {
          name: "Delta Collection",
          image: "https://panzeri.it/products/media/FPF/FPF-DI-carl.jpg",
          alt: "Panzeri Delta geometric lighting solutions"
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
                      className="h-12 mx-auto opacity-90 hover:opacity-100 transition-opacity"
                      data-testid={`img-brand-logo-${index}`}
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
                        <img 
                          src={collection.image}
                          alt={collection.alt}
                          className="w-full h-64 object-cover"
                          data-testid={`img-collection-${brand.name.toLowerCase().replace(/\s+/g, '-')}-${collectionIndex}`}
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
