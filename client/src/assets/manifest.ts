// Centralized Asset Manifest
// This file manages all image imports and organizes them into logical collections
// for use across components. This approach eliminates code duplication and 
// provides a single source of truth for asset management.

// Logo imports
import aEmotionalLogo from './a-emotional-final.jpg';
import oleLogo from './ole-logo.png';
import boverLogo from './bover-newest.jpg';
import panzeriLogo from './panzeri-logo-new.png';

// Collection image imports - Real lighting collection photos
import eraImg from './2405_NEWS24_ERA_00005_1757517578743_1758039118793.jpg';
import tempoImg from './2405_NEWS24_TEMPO_00003_1757517578742_1758039118793.jpg';
import avatarPopImg from './AVATAR POP museum_1757513870530_1758039118796.jpg';
import medusaImg from './MEDUSA ambiente shape 2_1757519669167_1758039118795.jpg';
import morganaImg from './MORGANA 31200_200 ambiente - Ole Lighting_1757519669166_1758039118794.jpg';
import muraneImg from './murane_1757519446556_1758039118800.jpg';
import nansImg from './nans_1757519174473_1758039118799.jpg';
import rendezVousImg from './rendez vous_1757519446557_1758039118798.jpg';
import rosaImg from './rosa_1757513820678_1758039118797.jpg';
import skybellImg from './skybell_1757513820674_1758039118797.jpg';
import tondaImg from './tonda_1757517578733_1758039118797.jpg';
import umbraImg from './umbra_1757517578738_1758039118797.jpg';
import zeroRoundImg from './zero round_1757519446548_1758039118796.jpg';

// Additional placeholder variables for collections not yet having dedicated images
const nans3Img = boverLogo;
const nanas1Img = boverLogo;
const nonLaImg = boverLogo;
const mediImg = boverLogo;
const romaImg = panzeriLogo;
const roma1Img = panzeriLogo;
const ombraImg = panzeriLogo;

// All collection images now imported and available

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

// Background carousel images - using all 13 collection images for maximum visual variety
export const backgroundCarouselImages: string[] = [
  // a·emotional light collections
  eraImg,                  // Era Collection
  tempoImg,               // Tempo Collection
  umbraImg,               // Umbra Collection
  tondaImg,               // Tonda Collection
  rosaImg,                // Rosa Collection
  
  // Olé Lighting collections
  morganaImg,             // Morgana Collection
  medusaImg,              // Medusa Collection
  avatarPopImg,           // Avatar Pop Collection
  
  // Bover Barcelona collections
  skybellImg,             // Skybell Collection
  nansImg,                // Nans Collection
  
  // Panzeri Lighting collections
  zeroRoundImg,           // Zero Round Collection
  rendezVousImg,          // Rendez-Vous Collection
  muraneImg               // Muranè Collection
];

// Brand collections organized by brand - using real collection images where available
export const brandCollectionImages = {
  'a·emotional light': [
    {
      name: "Era Collection",
      image: eraImg,
      alt: "a·emotional light Era collection - elegant modern lighting design"
    },
    {
      name: "Tempo Collection",
      image: tempoImg,
      alt: "a·emotional light Tempo collection - contemporary artistic lighting"
    },
    {
      name: "Umbra Collection",
      image: umbraImg,
      alt: "a·emotional light Umbra collection - sophisticated shadow play lighting"
    },
    {
      name: "Tonda Collection",
      image: tondaImg,
      alt: "a·emotional light Tonda collection - circular minimalist design"
    },
    {
      name: "Rosa Collection",
      image: rosaImg,
      alt: "a·emotional light Rosa collection - organic floral inspired lighting"
    }
  ],
  
  'Olé Lighting': [
    {
      name: "Morgana Collection",
      image: morganaImg,
      alt: "Olé Lighting Morgana collection - Mediterranean inspired ambient lighting"
    },
    {
      name: "Medusa Collection",
      image: medusaImg,
      alt: "Olé Lighting Medusa collection - sculptural statement lighting"
    },
    {
      name: "Avatar Pop Collection",
      image: avatarPopImg,
      alt: "Olé Lighting Avatar Pop collection - playful contemporary design"
    }
  ],
  
  'Bover Barcelona': [
    {
      name: "Skybell Collection",
      image: skybellImg,
      alt: "Bover Skybell collection - outdoor bell-shaped pendant lighting"
    },
    {
      name: "Nans Outdoor Collection",
      image: nansImg,
      alt: "Bover Nans Outdoor collection - wicker outdoor lighting design"
    },
    {
      name: "Nans Bar Collection",
      image: nans3Img,
      alt: "Bover Nans Bar collection - sample placeholder image"
    },
    {
      name: "Nanas Detail Collection",
      image: nanas1Img,
      alt: "Bover Nanas Detail collection - sample placeholder image"
    },
    {
      name: "Non La Collection",
      image: nonLaImg,
      alt: "Bover Non La collection - sample placeholder image"
    },
    {
      name: "Medi Collection",
      image: mediImg,
      alt: "Bover Medi collection - sample placeholder image"
    }
  ],
  
  'Panzeri Lighting': [
    {
      name: "Zero Round Collection",
      image: zeroRoundImg,
      alt: "Panzeri Zero Round collection - minimalist circular lighting"
    },
    {
      name: "Roma Collection",
      image: romaImg,
      alt: "Panzeri Roma collection - sample placeholder image"
    },
    {
      name: "Roma Wall Series",
      image: roma1Img,
      alt: "Panzeri Roma Wall series - sample placeholder image"
    },
    {
      name: "Rendez-Vous Collection",
      image: rendezVousImg,
      alt: "Panzeri Rendez-Vous collection - elegant meeting point lighting"
    },
    {
      name: "Ombra Collection",
      image: ombraImg,
      alt: "Panzeri Ombra collection - sample placeholder image"
    },
    {
      name: "Muranè Collection",
      image: muraneImg,
      alt: "Panzeri Muranè collection - Venetian glass inspired lighting"
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