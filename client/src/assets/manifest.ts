// Centralized Asset Manifest
// This file manages all image imports and organizes them into logical collections
// for use across components. This approach eliminates code duplication and 
// provides a single source of truth for asset management.

// Logo imports
import aEmotionalLogo from './a-emotional-final.jpg';
import oleLogo from './ole-logo.png';
import boverLogo from './bover-newest.jpg';
import panzeriLogo from './panzeri-logo-new.png';

// a·emotional light collection images
import eraImg from './2405_NEWS24_ERA_00005_1757517578743_1758039118793.jpg';
import tempoImg from './2405_NEWS24_TEMPO_00003_1757517578742_1758039118793.jpg';
import umbraImg from './umbra_1757517578738_1758039118797.jpg';
import tondaImg from './tonda_1757517578733_1758039118797.jpg';
import rosaImg from './rosa_1757513820678_1758039118797.jpg';

// Olé Lighting collection images
import morganaImg from './MORGANA 31200_200 ambiente - Ole Lighting_1757519669166_1758039118794.jpg';
import medusaImg from './MEDUSA ambiente shape 2_1757519669167_1758039118795.jpg';
import avatarPopImg from './AVATAR POP museum_1757513870530_1758039118796.jpg';

// Bover Barcelona collection images
import skybellImg from './skybell_1757513820674_1758039118797.jpg';
import nansImg from './nans_1757519174473_1758039118799.jpg';
import nans3Img from './nans3_1757513820666_1758039118799.jpg';
import nanas1Img from './nanas1_1757513820669_1758039118800.jpg';
import nonLaImg from './non la_1757519174478_1758039118799.jpg';
import mediImg from './medi_1757519174469_1758039118800.jpg';

// Panzeri Lighting collection images
import zeroRoundImg from './zero round_1757519446548_1758039118796.jpg';
import romaImg from './roma_1757519446551_1758039118798.jpg';
import roma1Img from './roma1_1757519446547_1758039118798.jpg';
import rendezVousImg from './rendez vous_1757519446557_1758039118798.jpg';
import ombraImg from './ombra_1757519446555_1758039118799.jpg';
import muraneImg from './murane_1757519446556_1758039118800.jpg';

// Brand logos export
export const brandLogos = {
  'a·emotional light': aEmotionalLogo,
  'Olé Lighting': oleLogo,
  'Bover Barcelona': boverLogo,
  'Panzeri Lighting': panzeriLogo
} as const;

// Collection interface for type safety
export interface LightingCollection {
  readonly name: string;
  readonly image: string;
  readonly alt: string;
}

// Brand interface
export interface Brand {
  name: string;
  logoUrl: string;
  description: string;
  website: string;
  collections: readonly LightingCollection[];
}

// Curated background carousel images - optimized for visual impact
export const backgroundCarouselImages: string[] = [
  // a·emotional light collections - Contemporary and artistic
  eraImg,           // Era collection - striking black pendant
  tempoImg,         // Tempo collection - rhythmic pleated design
  umbraImg,         // Umbra collection - circular halo lighting
  tondaImg,         // Tonda collection - intricate pattern work
  rosaImg,          // Rosa collection - elegant pink pendant
  
  // Olé Lighting collections - Mediterranean sophistication
  morganaImg,       // Morgana collection - slatted floor lamp
  medusaImg,        // Medusa collection - geometric pendant
  avatarPopImg,     // Avatar Pop collection - museum ambient system
  
  // Bover Barcelona collections - Outdoor elegance
  skybellImg,       // Skybell collection - circular pendant system
  nansImg,          // Nans collection - spherical outdoor pendants
  
  // Panzeri Lighting collections - Italian craftsmanship
  zeroRoundImg,     // Zero Round collection - minimalist geometric design
  rendezVousImg,    // Rendez-Vous collection - triangular constellation
  muraneImg         // Muranè collection - golden glass cluster
];

// Brand collections organized by brand - complete product catalog
export const brandCollectionImages = {
  'a·emotional light': [
    {
      name: "Era Collection",
      image: eraImg,
      alt: "a·emotional light Era contemporary black pendant lighting"
    },
    {
      name: "Tempo Collection",
      image: tempoImg,
      alt: "a·emotional light Tempo rhythmic pleated lighting collection"
    },
    {
      name: "Umbra Collection",
      image: umbraImg,
      alt: "a·emotional light Umbra circular halo lighting series"
    },
    {
      name: "Tonda Collection",
      image: tondaImg,
      alt: "a·emotional light Tonda circular lighting with intricate patterns"
    },
    {
      name: "Rosa Collection",
      image: rosaImg,
      alt: "a·emotional light Rosa elegant pink pendant lighting"
    }
  ],
  
  'Olé Lighting': [
    {
      name: "Morgana Collection",
      image: morganaImg,
      alt: "Olé Lighting Morgana slatted floor lamp in minimalist interior"
    },
    {
      name: "Medusa Collection",
      image: medusaImg,
      alt: "Olé Lighting Medusa geometric pendant in modern living room"
    },
    {
      name: "Avatar Pop Collection",
      image: avatarPopImg,
      alt: "Olé Lighting Avatar Pop ambient system in museum setting"
    }
  ],
  
  'Bover Barcelona': [
    {
      name: "Skybell Collection",
      image: skybellImg,
      alt: "Bover Skybell circular pendant system in hospitality space"
    },
    {
      name: "Nans Outdoor Collection",
      image: nansImg,
      alt: "Bover Nans spherical pendant lights in outdoor dining area"
    },
    {
      name: "Nans Bar Collection",
      image: nans3Img,
      alt: "Bover Nans woven pendant lights in Mediterranean bar setting"
    },
    {
      name: "Nanas Detail Collection",
      image: nanas1Img,
      alt: "Bover Nanas woven pendant light close-up detail"
    },
    {
      name: "Non La Collection",
      image: nonLaImg,
      alt: "Bover Non La conical pendant light in warm setting"
    },
    {
      name: "Medi Collection",
      image: mediImg,
      alt: "Bover Medi flowing organic pendant light"
    }
  ],
  
  'Panzeri Lighting': [
    {
      name: "Zero Round Collection",
      image: zeroRoundImg,
      alt: "Panzeri Zero Round minimalist circular geometric pendant system"
    },
    {
      name: "Roma Collection",
      image: romaImg,
      alt: "Panzeri Roma cylindrical floor lamps in living space"
    },
    {
      name: "Roma Wall Series",
      image: roma1Img,
      alt: "Panzeri Roma cylindrical wall lighting installation"
    },
    {
      name: "Rendez-Vous Collection",
      image: rendezVousImg,
      alt: "Panzeri Rendez-Vous triangular pendant constellation"
    },
    {
      name: "Ombra Collection",
      image: ombraImg,
      alt: "Panzeri Ombra minimalist cylindrical table lamp"
    },
    {
      name: "Muranè Collection",
      image: muraneImg,
      alt: "Panzeri Muranè golden glass pendant cluster"
    }
  ]
} as const;

// Complete brand data with descriptions and metadata
export const brandsData: Brand[] = [
  {
    name: "a·emotional light",
    logoUrl: aEmotionalLogo,
    description: "A-emotional Light takes sculptural form through craftsmanship and design. Each handcrafted piece is organic and nature-inspired, blending art and light into unique creations that bring warmth, beauty, and individuality to residential and hospitality interiors.",
    website: "https://www.a-emotionallight.com/",
    collections: brandCollectionImages['a·emotional light']
  },
  {
    name: "Olé Lighting",
    logoUrl: oleLogo,
    description: "Olé designs soulful lighting with sustainable materials and creative solutions. Mediterranean-inspired, each collection transforms indoor and outdoor spaces with originality and efficiency, creating lighting experiences that combine design and comfort.",
    website: "https://www.ole-lighting.com/en",
    collections: brandCollectionImages['Olé Lighting']
  },
  {
    name: "Bover Barcelona",
    logoUrl: boverLogo,
    description: "Bover blends contemporary lines with timeless charm. Using materials like wicker, woven steel, and hand-pleated fabric, each design is crafted for outdoor spaces while versatile enough for interiors, delivering elegance, durability, and character across any project.",
    website: "https://bover.es/en/",
    collections: brandCollectionImages['Bover Barcelona']
  },
  {
    name: "Panzeri Lighting",
    logoUrl: panzeriLogo,
    description: "For over 70 years, Panzeri has combined Italian tradition and innovation in decorative and architectural lighting. Its designs balance creativity, quality, and timeless style, enhancing interiors and exteriors worldwide with refined, iconic solutions.",
    website: "https://panzeri.it/en/",
    collections: brandCollectionImages['Panzeri Lighting']
  }
];

// Utility function to get brand by name
export const getBrandByName = (name: string): Brand | undefined => {
  return brandsData.find(brand => brand.name === name);
};

// Utility function to get all collection images
export const getAllCollectionImages = (): string[] => {
  return Object.values(brandCollectionImages).flat().map(collection => collection.image);
};

// Utility function for safe carousel operation with minimum image validation
export const validateCarouselImages = (images: string[]): boolean => {
  return images.length >= 2; // Minimum required for carousel functionality
};

// Export individual collections for specific use cases
export {
  // Individual brand collections
  brandCollectionImages as collections,
  
  // Specific image sets for targeted imports
  eraImg,
  tempoImg,
  umbraImg,
  tondaImg,
  rosaImg,
  morganaImg,
  medusaImg,
  avatarPopImg,
  skybellImg,
  nansImg,
  nans3Img,
  nanas1Img,
  nonLaImg,
  mediImg,
  zeroRoundImg,
  romaImg,
  roma1Img,
  rendezVousImg,
  ombraImg,
  muraneImg
};

/**
 * Asset Manifest Performance Benefits:
 * 
 * ✅ Centralized Management:
 * - Single source of truth for all image imports
 * - Eliminates duplicate import statements across components
 * - Consistent naming and organization
 * 
 * ✅ Type Safety:
 * - TypeScript interfaces ensure proper usage
 * - Compile-time validation of asset references
 * - Better IDE autocomplete and refactoring support
 * 
 * ✅ Maintainability:
 * - Easy to add/remove images in one location
 * - Descriptive alt text management
 * - Clear collection organization by brand
 * 
 * ✅ Performance Optimization:
 * - Curated image sets prevent over-loading
 * - Validation helpers ensure proper carousel operation
 * - Clean separation of concerns between components
 * 
 * 🚀 Usage Instructions:
 * 
 * // For background carousel:
 * import { backgroundCarouselImages } from '@/assets/manifest';
 * 
 * // For brand collections:
 * import { brandsData, brandCollectionImages } from '@/assets/manifest';
 * 
 * // For specific images:
 * import { eraImg, morganaImg } from '@/assets/manifest';
 */