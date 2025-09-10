export default function BackgroundCarousel() {
  // Portfolio images from CartaRep's website + Brand collection images
  const portfolioImages = [
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
    'https://panzeri.it/products/media/FPF/FPF-DI-opuntia.jpg'
  ];

  return (
    <div className="carousel-container" data-testid="background-carousel">
      <div className="carousel-slides">
        {portfolioImages.map((image, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ backgroundImage: `url('${image}')` }}
            data-testid={`carousel-slide-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
