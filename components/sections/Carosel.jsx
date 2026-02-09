import React, { useState } from "react";
import Carousel from "../carousel/Carousel";
import Image from "next/image";

const Carosel = () => {
  // Hardcoded slider data (only relevant fields kept)
  const hardcodedResponse = {
    data: [
      {
        id: 6,
        title: "Whatsapp Image 2025 05 17 At 4.47.14 Pm",
        slider_img: { data: { full_url: "http://cms.maitretech.com/uploads/zebacms/originals/6704aebe-85a2-4fc1-bbfa-11adbb138f35.jpeg" } }
      },
      {
        id: 7,
        title: "Whatsapp Image 2025 05 17 At 4.47.52 Pm",
        slider_img: { data: { full_url: "http://cms.maitretech.com/uploads/zebacms/originals/57c766f7-5305-4aa2-8d7e-0b33ebc5a58c.jpeg" } }
      },
      {
        id: 8,
        title: "Whatsapp Image 2025 05 17 At 4.49.49 Pm",
        slider_img: { data: { full_url: "http://cms.maitretech.com/uploads/zebacms/originals/3ce02ead-17e5-4479-af8e-027c015bcf28.jpeg" } }
      },
      {
        id: 9,
        title: "Whatsapp Image 2025 05 17 At 4.49.13 Pm",
        slider_img: { data: { full_url: "http://cms.maitretech.com/uploads/zebacms/originals/42cf501e-5a40-479f-93f6-d304dbc2d839.jpeg" } }
      },
      {
        id: 10,
        title: "Whatsapp Image 2025 05 17 At 4.50.54 Pm",
        slider_img: { data: { full_url: "http://cms.maitretech.com/uploads/zebacms/originals/e1978376-a9a3-440c-9d59-f3e39e532848.jpeg" } }
      }
    ],
    public: true
  };

  const initialSlides = (hardcodedResponse.data || []).map((item, index) => {
    const imageUrl = item?.slider_img?.data?.full_url?.replace("http://", "https://") || "";
    return (
      <div key={item.id || index} className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[6/2] overflow-hidden">
        <Image
          src={imageUrl}
          alt={item.title || `Slide ${index + 1}`}
          fill
          className="object-fill rounded-xl"
          priority
        />
      </div>
    );
  });

  const [items, setItems] = useState(initialSlides);

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
