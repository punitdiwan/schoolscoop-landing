import React, { useEffect, useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import Image from "next/image";

export default function HomeSlider() {
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/homepageslider?fields=*.*",
        {
          cache: "no-store",
        }
      );
      const jsonData = await response.json();

      const formattedImages = (jsonData.data || []).map((item, index) => {
        const imageUrl =
          item?.sliderphoto?.data?.full_url?.replace("http://", "https://") || "";

        return {
          id: item.id || index,
          url: imageUrl,
          title: item.title || `Slide ${index + 1}`,
        };
      });

      setImages(formattedImages);
    } catch (err) {
      console.error("Failed to fetch home page slider images:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const slides = images.map((item, idx) => (
    <div
      key={item.id}
      className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden group"
    >
      <Image
        src={item.url}
        alt={item.title}
        fill
        className=" w-full h-full rounded-lg "
        priority={idx === 0}
        sizes="100vw"
      />
    </div>
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return <Carousel items={slides} settings={settings} />;
}
