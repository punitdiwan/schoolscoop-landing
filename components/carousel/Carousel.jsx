// components/Carousel.jsx
import React from "react";
import Slider from "react-slick";

export default function Carousel({ items = [], settings = {} }) {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    ...settings,
  };

  return (
    <div >
      <Slider {...defaultSettings}>
        {items.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-white shadow-md rounded-lg p-2 text-center">
              {item}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
