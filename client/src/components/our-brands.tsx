import { useEffect, useRef, useState, useMemo } from "react";
import { Download, ExternalLink } from "lucide-react";
import { CatalogueRequestForm } from "./catalogue-request-form";
import { LazyImage } from "./lazy-image";
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

// New Panzeri Lighting collection images
import adamas2Img from '@assets/adamas2_1757519446545.jpg';
import roma1Img from '@assets/roma1_1757519446547.jpg';
import zeroRoundNewImg from '@assets/zero round_1757519446548.jpg';
import bellaImg from '@assets/bella_1757519446549.jpg';
import romaNewImg from '@assets/roma_1757519446551.jpg';
import adamas1Img from '@assets/adamas1_1757519446553.jpg';
import adamasNewImg from '@assets/adamas_1757519446554.jpg';
import ombraNewImg from '@assets/ombra_1757519446555.jpg';
import muraneNewImg from '@assets/murane_1757519446556.jpg';
import rendezVousNewImg from '@assets/rendez vous_1757519446557.jpg';
import hilowNewImg from '@assets/hilow_1757519446558.jpg';

// New Olé Lighting collection images
import medusaAmbienteImg from '@assets/MEDUSA ambiente 34200 _1757519669148.jpg';
import estelecOfficeImg from '@assets/Oficinas ESTELEC by KeenDesign_1757519669155.jpg';
import medusaStudioImg from '@assets/MEDUSA studio2_1757519669157.jpg';
import sonoraAmbienteImg from '@assets/SONORA ambiente colgante gris_1757519669158.jpg';
import katanaDetailImg from '@assets/KATANA detail_1757519669159.jpg';
import pampaAmbienteImg from '@assets/PAMPA ambiente_1757519669160.jpg';
import celesteOfficeImg from '@assets/CELESTE oficina horizontal_1757519669162.jpg';
import candelaCuerdasImg from '@assets/CANDELA cuerdas 1200x1200_1757519669163.jpg';
import nexoRestauranteImg from '@assets/NEXO restaurante 1200x1200_1757519669164.jpg';
import pagodaColganteImg from '@assets/PAGODA Colgante Ambiente 1200x1200_1757519669165.jpg';
import morganaAmbienteImg from '@assets/MORGANA 31200_200 ambiente - Ole Lighting_1757519669166.jpg';
import medusaShapeImg from '@assets/MEDUSA ambiente shape 2_1757519669167.jpg';

// Additional images for replacing external URLs
import avatarPopImg from '@assets/AVATAR POP museum_1757513870530.jpg';
import bolOldImg from '@assets/bol_1757513820670.jpg';
import boverOldImg from '@assets/bover_1757513820677.jpg';
import drepOldImg from '@assets/drep_1757513820672.jpg';
import euroOldImg from '@assets/euro_1757513820682.jpg';
import kandoOldImg from '@assets/kando_1757513820663.jpg';
import mediOldImg from '@assets/medi_1757513820667.jpg';
import nanas1OldImg from '@assets/nanas1_1757513820669.jpg';
import nans3OldImg from '@assets/nans3_1757513820666.jpg';
import nansOldImg from '@assets/nans_1757513820671.jpg';
import nonLaOldImg from '@assets/non la_1757513820675.jpg';
import rosaOldImg from '@assets/rosa_1757513820678.jpg';
import skybellOldImg from '@assets/skybell_1757513820674.jpg';
import tondaOldImg from '@assets/tonda_1757513820680.jpg';
import eraOldImg from '@assets/2405_NEWS24_ERA_00005_1757513870534.jpg';
import tempoOldImg from '@assets/2405_NEWS24_TEMPO_00003_1757513870532.jpg';
import lampaddaImg from '@assets/lampada_1757932195376.png';
import screenshotSecondImg from '@assets/Screenshot 2025-09-14 16.07.01_1757863192950.png';
import screenshotThirdImg from '@assets/Screenshot 2025-09-14 16.34.28_1757864250474.png';
import avatarCollectionImg from '@assets/58a9e169-88a6-4e28-b72a-c98843674091_1757513832408.jpg';

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
          name: "Baleira Collection",
          image: avatarCollectionImg,
          alt: "Baleira handcrafted lighting collection"
        },
        {
          name: "Umbra Line Collection",
          image: umbraNewImg,
          alt: "Umbra Line contemporary lighting series"
        },
        {
          name: "Brétema Collection",
          image: bretemaEuroluceImg,
          alt: "Brétema organic lighting designs"
        },
        {
          name: "Agasallo Collection",
          image: agasalloNewImg,
          alt: "Agasallo gift-inspired lighting collection"
        },
        {
          name: "Veiga Collection",
          image: lampaddaImg,
          alt: "Veiga contemporary pendant design"
        },
        {
          name: "Coral Collection",
          image: coralNewImg,
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
      description: "Olé designs soulful lighting with sustainable materials and creative solutions. Mediterranean-inspired, each collection transforms indoor and outdoor spaces with originality and efficiency, creating lighting experiences that combine design and comfort.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://www.ole-lighting.com/en",
      collections: [
        {
          name: "AVATAR PLUS Collection",
          image: avatarPopImg,
          alt: "Ole Lighting AVATAR PLUS ambient system"
        },
        {
          name: "CELESTE Collection",
          image: celesteOfficeImg,
          alt: "Ole Lighting CELESTE elegant lighting"
        },
        {
          name: "MEDUSA Collection",
          image: medusaAmbienteImg,
          alt: "Ole Lighting MEDUSA award-winning design"
        },
        {
          name: "LLUNA Collection",
          image: screenshotSecondImg,
          alt: "Ole Lighting LLUNA ambient lunar design"
        },
        {
          name: "NATURA Collection",
          image: screenshotThirdImg,
          alt: "Ole Lighting NATURA natural inspiration"
        },
        {
          name: "SONORA Collection",
          image: sonoraAmbienteImg,
          alt: "Ole Lighting SONORA acoustic lighting"
        },
        {
          name: "PAGODA Collection",
          image: pagodaColganteImg,
          alt: "Ole Lighting PAGODA Asian-inspired collection"
        },
        {
          name: "NEXO Collection",
          image: nexoRestauranteImg,
          alt: "Ole Lighting NEXO modular series"
        },
        {
          name: "ILLA Collection",
          image: candelaCuerdasImg,
          alt: "Ole Lighting ILLA esparto natural fiber collection"
        },
        {
          name: "Medusa Ambiente",
          image: medusaAmbienteImg,
          alt: "Olé Lighting Medusa pendant in luxurious marble living space"
        },
        {
          name: "ESTELEC Office",
          image: estelecOfficeImg,
          alt: "Olé Lighting geometric pendant in modern stairway office"
        },
        {
          name: "Medusa Studio",
          image: medusaStudioImg,
          alt: "Olé Lighting Medusa pendants in contemporary office workspace"
        },
        {
          name: "Sonora Ambiente",
          image: sonoraAmbienteImg,
          alt: "Olé Lighting Sonora acoustic pendant system over conference table"
        },
        {
          name: "Katana Detail",
          image: katanaDetailImg,
          alt: "Olé Lighting Katana linear suspension over reading area"
        },
        {
          name: "Pampa Ambiente",
          image: pampaAmbienteImg,
          alt: "Olé Lighting Pampa modern linear pendants in boardroom"
        },
        {
          name: "Celeste Office",
          image: celesteOfficeImg,
          alt: "Olé Lighting Celeste elegant horizontal pendant system"
        },
        {
          name: "Candela Cuerdas",
          image: candelaCuerdasImg,
          alt: "Olé Lighting Candela portable rope-wrapped table lamps"
        },
        {
          name: "Nexo Restaurante",
          image: nexoRestauranteImg,
          alt: "Olé Lighting Nexo wall sconce in upscale restaurant"
        },
        {
          name: "Pagoda Colgante",
          image: pagodaColganteImg,
          alt: "Olé Lighting Pagoda woven pendant cluster in restaurant setting"
        },
        {
          name: "Morgana Ambiente",
          image: morganaAmbienteImg,
          alt: "Olé Lighting Morgana slatted floor lamp in minimalist interior"
        },
        {
          name: "Medusa Shape",
          image: medusaShapeImg,
          alt: "Olé Lighting Medusa geometric pendant in modern living room"
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
          name: "Nans Collection",
          image: nansOldImg,
          alt: "Bover Nans hand-woven bag outdoor series"
        },
        {
          name: "Garota Collection",
          image: kandoOldImg,
          alt: "Bover Garota outdoor pendant lighting"
        },
        {
          name: "Mediterrània Collection",
          image: mediOldImg,
          alt: "Bover Mediterrània Mediterranean ribbon lighting"
        },
        {
          name: "Roda Collection",
          image: bolOldImg,
          alt: "Bover Roda circular pendant series"
        },
        {
          name: "Amphora Collection",
          image: drepOldImg,
          alt: "Bover Amphora elegant floor lighting"
        },
        {
          name: "Mei Collection",
          image: nanas1OldImg,
          alt: "Bover Mei pleated fabric pendant"
        },
        {
          name: "Platet Collection",
          image: skybellOldImg,
          alt: "Bover Platet industrial-inspired wall lights"
        },
        {
          name: "Nut Collection",
          image: nonLaOldImg,
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
      description: "For over 70 years, Panzeri has combined Italian tradition and innovation in decorative and architectural lighting. Its designs balance creativity, quality, and timeless style, enhancing interiors and exteriors worldwide with refined, iconic solutions.",
      category: "",
      specialty: "",
      tagline: "",
      website: "https://panzeri.it/en/",
      collections: [
        {
          name: "Ombra Collection",
          image: ombraNewImg,
          alt: "Panzeri Ombra shadow play lighting"
        },
        {
          name: "Adamas Collection",
          image: adamasNewImg,
          alt: "Panzeri Adamas diamond-inspired series"
        },
        {
          name: "Superbold Collection",
          image: adamas1Img,
          alt: "Panzeri Superbold bold architectural lighting"
        },
        {
          name: "Zero Round Collection",
          image: zeroRoundNewImg,
          alt: "Panzeri Zero Round minimalist circular design"
        },
        {
          name: "Muranè Collection",
          image: muraneNewImg,
          alt: "Panzeri Muranè Venetian glass-inspired lighting"
        },
        {
          name: "Opuntia Collection",
          image: bellaImg,
          alt: "Panzeri Opuntia organic cactus-inspired forms"
        },
        {
          name: "432 Ways Collection",
          image: romaNewImg,
          alt: "Panzeri 432 Ways modular lighting system"
        },
        {
          name: "Rendez-Vous Collection",
          image: rendezVousNewImg,
          alt: "Panzeri Rendez-Vous contemporary design"
        },
        {
          name: "Tubino Collection",
          image: roma1Img,
          alt: "Panzeri Tubino torch-inspired series"
        },
        {
          name: "Hilow Collection",
          image: hilowNewImg,
          alt: "Panzeri Hilow architectural lighting"
        },
        {
          name: "Carl Collection",
          image: adamas2Img,
          alt: "Panzeri Carl minimalist design series"
        },
        {
          name: "Delta Collection",
          image: adamas1Img,
          alt: "Panzeri Delta geometric lighting solutions"
        },
        {
          name: "Adamas Display",
          image: adamas2Img,
          alt: "Panzeri Adamas collection colorful honeycomb pendant lights"
        },
        {
          name: "Roma Wall Series",
          image: roma1Img,
          alt: "Panzeri Roma cylindrical wall lighting installation"
        },
        {
          name: "Zero Round System",
          image: zeroRoundNewImg,
          alt: "Panzeri Zero Round geometric pendant system"
        },
        {
          name: "Bella Desk Collection",
          image: bellaImg,
          alt: "Panzeri Bella adjustable brass desk lamps"
        },
        {
          name: "Roma Floor Collection",
          image: romaNewImg,
          alt: "Panzeri Roma cylindrical floor lamps in living space"
        },
        {
          name: "Adamas Detail",
          image: adamas1Img,
          alt: "Panzeri Adamas honeycomb pattern close-up detail"
        },
        {
          name: "Adamas Floor Lamp",
          image: adamasNewImg,
          alt: "Panzeri Adamas floor lamp in elegant interior setting"
        },
        {
          name: "Ombra Table Lamp",
          image: ombraNewImg,
          alt: "Panzeri Ombra minimalist cylindrical table lamp"
        },
        {
          name: "Muranè Glass Collection",
          image: muraneNewImg,
          alt: "Panzeri Muranè golden glass pendant cluster"
        },
        {
          name: "Rendez-Vous System",
          image: rendezVousNewImg,
          alt: "Panzeri Rendez-Vous triangular pendant constellation"
        },
        {
          name: "Hilow Linear System",
          image: hilowNewImg,
          alt: "Panzeri Hilow linear architectural lighting system"
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
