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
import adamas2Img from "@assets/adamas2_1757514144589.jpg";
import eurolImg from "@assets/eurol_1757514144591.jpg";
import agasalloImg from "@assets/agasallo_1757514220344.jpg";
import umbraImg from "@assets/umbra_1757514220351.jpg";
import coralImg from "@assets/coral_1757514220352.jpg";
import roma1Img from "@assets/roma1_1757514220353.jpg";
import zeroRoundImg from "@assets/zero round_1757514220355.jpg";
import bellaImg from "@assets/bella_1757514220356.jpg";
import romaImg from "@assets/roma_1757514220357.jpg";
import adamas1Img from "@assets/adamas1_1757514220358.jpg";
import adamasImg from "@assets/adamas_1757514220359.jpg";
import ombraImg from "@assets/ombra_1757514220361.jpg";
import muraneImg from "@assets/murane_1757514220362.jpg";
import rendezvousImg from "@assets/rendez vous_1757514220364.jpg";
import hilowImg from "@assets/hilow_1757514220365.jpg";
import medusaAmbienteImg from "@assets/MEDUSA ambiente 34200 _1757514220366.jpg";
import oficinasEstelecImg from "@assets/Oficinas ESTELEC by KeenDesign_1757514220367.jpg";
import medusaStudio2Img from "@assets/MEDUSA studio2_1757514418146.jpg";
import sonoraAmbienteImg from "@assets/SONORA ambiente colgante gris_1757514418154.jpg";
import katanaDetailImg from "@assets/KATANA detail_1757514418155.jpg";
import pampaAmbienteImg from "@assets/PAMPA ambiente_1757514418156.jpg";
import celesteOficinaImg from "@assets/CELESTE oficina horizontal_1757514418158.jpg";
import candelaCuerdasImg from "@assets/CANDELA cuerdas 1200x1200_1757514418159.jpg";
import nexoRestauranteImg from "@assets/NEXO restaurante 1200x1200_1757514418160.jpg";
import pagodaColganteImg from "@assets/PAGODA Colgante Ambiente 1200x1200_1757514418161.jpg";
import bretemaEuroluceImg from "@assets/General-View-Bretema-Euroluce-2025-plana_1757514418162.jpg";
import screenshotImg from "@assets/Screenshot 2025-01-04 184222_1757514418163.jpg";
import morganaOleImg from "@assets/MORGANA 31200_200 ambiente - Ole Lighting_1757514418165.jpg";
import medusaShape2Img from "@assets/MEDUSA ambiente shape 2_1757514418166.jpg";
import estelaAmbienteImg from "@assets/ESTELA ambiente_1757514418168.jpg";

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
    eraImg,
    adamas2Img,
    eurolImg,
    agasalloImg,
    umbraImg,
    coralImg,
    roma1Img,
    zeroRoundImg,
    bellaImg,
    romaImg,
    adamas1Img,
    adamasImg,
    ombraImg,
    muraneImg,
    rendezvousImg,
    hilowImg,
    medusaAmbienteImg,
    oficinasEstelecImg,
    medusaStudio2Img,
    sonoraAmbienteImg,
    katanaDetailImg,
    pampaAmbienteImg,
    celesteOficinaImg,
    candelaCuerdasImg,
    nexoRestauranteImg,
    pagodaColganteImg,
    bretemaEuroluceImg,
    screenshotImg,
    morganaOleImg,
    medusaShape2Img,
    estelaAmbienteImg
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
