
import './ProductList.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slide = ({ images, handleClick }) => (
  <div className="slide">
    {images.map((image, index) => (
      <a href="#" key={index} className="image-link" onClick={() => handleClick(image.alt)}>
        <img src={image.src} alt={image.alt} style={{ width: '210px', height: '210px' }} />
      </a>
    ))}
  </div>
);


const Slider = ({ handleClick }) => {
  const slides = [
    [
      { src: require('./assets/fashion.jpg'), alt: 'Fashion', link: 'https://example.com/adidas' },
      { src: require('./assets/sport.avif'), alt: 'Sports', link: 'https://example.com/roboarm' },
      { src: require('./assets/food.jpg'), alt: 'Food', link: 'https://example.com/perfume' },
      { src: require('./assets/books.avif'), alt: 'Books', link: 'https://example.com/perfume' },
      { src: require('./assets/kids.avif'), alt: 'Kids', link: 'https://example.com/perfume' },
      { src: require('./assets/electronics.jpg'), alt: 'Electronics', link: 'https://example.com/perfume' },
    ],
    [
      { src: require('./assets/music.webp'), alt: 'Music', link: 'https://example.com/adidas' },
      { src: require('./assets/pet_shop.avif'), alt: 'Pet', link: 'https://example.com/roboarm' },
      { src: require('./assets/home_kitchen.webp'), alt: 'Home and Kitchen', link: 'https://example.com/perfume' },
      { src: require('./assets/craft.webp'), alt: 'Craft', link: 'https://example.com/perfume' },
      { src: require('./assets/stationery.jpg'), alt: 'Stationery', link: 'https://example.com/perfume' },
      { src: require('./assets/jewellry.webp'), alt: 'Jewellry', link: 'https://example.com/perfume' },
    ],
  ];

  return (
    <div className="category-slider">
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} slidesToShow={1}>
      {slides.map((slideImages, index) => (
          <Slide key={index} images={slideImages} handleClick={(category) => handleClick(category)} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
