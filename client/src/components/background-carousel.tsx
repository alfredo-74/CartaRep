export default function BackgroundCarousel() {
  // Real portfolio images from CartaRep's website
  const portfolioImages = [
    'https://framerusercontent.com/images/IYtN5yimSbNYsRb6SQulJv6XEp4.webp?width=2048&height=1236',
    'https://framerusercontent.com/images/nk5J8XxTZqjztQ1mfieyYqNj64E.jpg?width=2048&height=1365',
    'https://framerusercontent.com/images/oO00ootiYM9XLSKND9Sulqaxl74.jpg?width=2048&height=1362',
    'https://framerusercontent.com/images/dif0OLN0Z2C6EJBwH8IGWE1mdo.jpg?width=2048&height=1448',
    'https://framerusercontent.com/images/hxd26t0UnKaFQrlWmyA9F63ToFM.jpg?width=2048&height=1365',
    'https://framerusercontent.com/images/2vE1H7n2wQDgRKs5sKlYtElBCPw.jpg?width=2048&height=1365',
    'https://framerusercontent.com/images/cV8XQI7LZHXyeZMNYWVdBFo0E.jpg?width=2048&height=1365',
    'https://framerusercontent.com/images/JDa2YOkZvCTDjnQKrLjsORHJ5I.jpg?width=2048&height=1365',
    'https://framerusercontent.com/images/Q4XoWqfYh8gRnM3LKsPjT2vEBU.jpg?width=2048&height=1365',
    'https://framerusercontent.com/images/F5NcB9pYVu2RSLqJs6wKdm8Qg4.jpg?width=2048&height=1365',
    'https://framerusercontent.com/images/uE3ZvS6pVi9JNcAG1LxR8f7qK.jpg?width=2048&height=1365',
    'https://framerusercontent.com/images/oK7VjfGH4wPXzNmSu2nC8MqR.jpg?width=2048&height=1365'
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
