import React, { useEffect, useState } from "react";
import Carousel from "../carousel/Carousel";
import Image from "next/image";

const Carosel = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/home_slider?fields=*.*"
      );
      const jsonData = await response.json();

      const formattedSlides = (jsonData.data || []).map((item, index) => {
        const imageUrl =
          item?.slider_img?.data?.full_url?.replace("http://", "https://") || "";
        return (
          <div key={item.id || index} className="p-2">
            <Image
              src={imageUrl}
              alt={item.title || `Slide ${index + 1}`}
              width={1000}
              height={400}
              className="w-full h-full object-cover rounded-xl"
              priority
            />
          </div>
        );
      });

      setItems(formattedSlides);
    } catch (error) {
      console.error("Error fetching carousel data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="py-8 px-4 md:px-12">
      <div className="rounded-xl overflow-hidden shadow-lg bg-white">
        <Carousel items={items} settings={settings} />
      </div>
    </div>
  );
};

export default Carosel;
