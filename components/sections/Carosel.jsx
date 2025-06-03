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
          <div key={item.id || index}  className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[6/2]  overflow-hidden">
            <Image
              src={imageUrl}
              alt={item.title || `Slidsearch
e ${index + 1}`}
              fill
              className="object-fill rounded-xl"
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
    autoplaySpeed: 2000,
    arrows: true,
    // pauseOnHover: false,
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
