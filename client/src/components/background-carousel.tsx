import { useState, useEffect } from "react";

// Import new lighting images
import kandoImg from "@assets/kando_1757513820663.jpg";
import nans3Img from "@assets/nans3_1757513820666.jpg";
import mediImg from "@assets/medi_1757513820667.jpg";
import nanas1Img from "@assets/nanas1_1757513820669.jpg";
import bolImg from "@assets/bol_1757513820670.jpg";
import nansImg from "@assets/nans_1757513820671.jpg";
import drepImg from "@assets/drep_1757513820672.jpg";
import skybellImg from "@assets/skybell_1757513820674.jpg";
import nonLaImg from "@assets/non la_1757513820675.jpg";
import boverImg from "@assets/bover_1757513820677.jpg";
import rosaImg from "@assets/rosa_1757513820678.jpg";
import tondaImg from "@assets/tonda_1757513820680.jpg";
import euroImg from "@assets/euro_1757513820682.jpg";
import sculptureImg from "@assets/58a9e169-88a6-4e28-b72a-c98843674091_1757513832408.jpg";
import avatarMuseumImg from "@assets/AVATAR POP museum_1757513870530.jpg";
import tempoImg from "@assets/2405_NEWS24_TEMPO_00003_1757513870532.jpg";
import eraImg from "@assets/2405_NEWS24_ERA_00005_1757513870534.jpg";

export default function BackgroundCarousel() {
  // Utility function to shuffle array randomly
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // All portfolio images from CartaRep's website + Brand collection images + New images
  const allImages = [
    // Original CartaRep portfolio images
    'https://framerusercontent.com/images/IYtN5yimSbNYsRb6SQulJv6XEp4.webp?width=2048&height=1236',
    'https://framerusercontent.com/images/nk5J8XxTZqjztQ1mfieyYqNj64E.jpg?width=2048&height=1365',
    'https://framerusercontent.com/images/oO00ootiYM9XLSKND9Sulqaxl74.jpg?width=2048&height=1362',
    'https://framerusercontent.com/images/dif0OLN0Z2C6EJBwH8IGWE1mdo.jpg?width=2048&height=1448',
    'https://framerusercontent.com/images/hxd26t0UnKaFQrlWmyA9F63ToFM.jpg?width=2048&height=1365',
    // A-emotional Light collection images
    'https://www.a-emotionallight.com/wp-content/uploads/2024/08/BaleiraView-1.jpg',
    'https://www.a-emotionallight.com/wp-content/uploads/2024/08/UmbraLineView.jpg',
    'https://www.a-emotionallight.com/wp-content/uploads/2024/08/BretemaView-1.jpg',
    'https://www.a-emotionallight.com/wp-content/uploads/2022/07/agasallo-collection-lamps.jpg',
    'https://www.a-emotionallight.com/wp-content/uploads/2024/08/VeigaView-1.jpg',
    'https://www.a-emotionallight.com/wp-content/uploads/2019/06/coral_icono.jpg',
    // Olé Lighting collection images
    'https://www.ole-lighting.com/cdnassets/colecciones/AVATAR-PLUS/AVATAR-PLUS-ambiente-770x855.jpg',
    'https://www.ole-lighting.com/cdnassets/colecciones/CELESTE/CELESTE-770x855.jpg',
    'https://www.ole-lighting.com/cdnassets/colecciones/MEDUSA/MEDUSA-770x855.jpg',
    'https://www.ole-lighting.com/cdnassets/colecciones/LLUNA/LLUNA-ambient-770x855.jpg',
    'https://www.ole-lighting.com/cdnassets/colecciones/NATURE/NATURE-coleccion-770x855.jpg',
    'https://www.ole-lighting.com/cdnassets/colecciones/SONORA/SONORA-770x855.jpg',
    // Bover Barcelona collection images
    'https://bover.es/16989-home_default/nans-bag38-outdoor.jpg',
    'https://bover.es/10180-home_default/garota-s-02.jpg',
    'https://bover.es/17907-home_default/mediterrania-52-a98.jpg',
    'https://bover.es/9947-home_default/roda-s-200-v.jpg',
    'https://bover.es/10163-home_default/amphora-02.jpg',
    'https://bover.es/17937-home_default/mei-150.jpg',
    // Panzeri Lighting collection images
    'https://panzeri.it/products/media/FPF/FPF-DI-ombra-new.jpg',
    'https://panzeri.it/products/media/FPF/FPF-DI-adamas-new.jpg',
    'https://panzeri.it/products/media/FPF/FPF-DI-superbold-new.jpg',
    'https://panzeri.it/products/media/FPF/FPF-DI-zero_round.jpg',
    'https://panzeri.it/products/media/FPF/FPF-DI-murane.jpg',
    'https://panzeri.it/products/media/FPF/FPF-DI-opuntia.jpg',
    // New uploaded lighting images
    kandoImg,
    nans3Img,
    mediImg,
    nanas1Img,
    bolImg,
    nansImg,
    drepImg,
    skybellImg,
    nonLaImg,
    boverImg,
    rosaImg,
    tondaImg,
    euroImg,
    sculptureImg,
    avatarMuseumImg,
    tempoImg,
    eraImg
  ];

  // State to hold the shuffled images
  const [portfolioImages, setPortfolioImages] = useState<string[]>([]);

  // Shuffle images on component mount
  useEffect(() => {
    setPortfolioImages(shuffleArray(allImages));
  }, []);

  return (
    <div className="carousel-container" data-testid="background-carousel">
      <div className="carousel-slides">
        {portfolioImages.length > 0 ? (
          portfolioImages.map((image, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{ backgroundImage: `url('${image}')` }}
              data-testid={`carousel-slide-${index}`}
            />
          ))
        ) : (
          // Fallback while images are loading
          <div className="carousel-slide" style={{ backgroundColor: '#000' }} />
        )}
      </div>
    </div>
  );
}
