// HomeCardSlider.tsx
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import card1 from "../assets/card.png";
import card2 from "../assets/card1.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card2.png";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const HomeCardSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button 
        className="absolute -left-5 z-10 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 rounded-full p-2 shadow-lg"
        onClick={onClick}
      >
        &lt;
      </button>
    );
  };

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button 
        className="absolute -right-5 z-10 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 rounded-full p-2 shadow-lg"
        onClick={onClick}
      >
        &gt;
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_current: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
        }
      }
    ]
  };

  interface Card {
    title: string;
    image: string;
    link: string;
  }

  const cardData: Card[] = [
    { title: "Website Development", image: card1, link: '/' },
    { title: "Logo Design", image: card2, link: '/' },
    { title: "SEO", image: card3, link: '/' },
    { title: "Architecture & Interior Design", image: card4, link: '/' },
  ];

  return (
    <div className='hidden md:flex mt-16 mb-24'>
      <div className="relative overflow-visible w-full my-10">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="px-4">
              <Link to={card.link}>
                <div 
                  className={`h-[50vh] flex items-center justify-center transition-transform duration-500 transform ${activeSlide === index ? 'scale-100 rotate-0' : 'scale-90 rotate-3'} `}
                >
                  <div
                    className={`relative bg-white shadow-lg overflow-hidden transition-all duration-500 ${activeSlide === index ? 'w-[70vh] h-[50vh] opacity-100 brightness-100' : 'w-[50vh] h-[40vh] opacity-50 brightness-75'}`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeCardSlider;
