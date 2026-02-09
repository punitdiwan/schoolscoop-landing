import React, { useState } from "react";
import Carousel from "../../components/carousel/Carousel";
import Image from "next/image";
import { ClipLoader } from "react-spinners";

export default function HomeSlider() {
  // Hardcoded homepage slider (relevant fields only)
  const hardcodedResponse = {
    data: [
      {
        id: 1,
        sliderphoto: {
          title: "Edusparsh Slidder2",
          data: { full_url: "http://cms.maitretech.com/uploads/zebacms/originals/b61d5398-f138-4de5-83a1-11d6ea76901a.png" }
        }
      },
      {
        id: 2,
        sliderphoto: {
          title: "Edusparsh Slidder1",
          data: { full_url: "http://cms.maitretech.com/uploads/zebacms/originals/bc5014f1-f9ef-4a26-8fe2-02ffde072366.png" }
        }
      }
    ],
    public: true
  };

  const initialImages = (hardcodedResponse.data || []).map((item, index) => ({
    id: item.id || index,
    url: item?.sliderphoto?.data?.full_url?.replace("http://", "https://") || "",
    title: item?.sliderphoto?.title || `Slide ${index + 1}`,
  }));

  const [images, setImages] = useState(initialImages);
  const [loader, setLoader] = useState(false);

  const slides = images.map((item, idx) => (
    <div
      key={item.id}
      className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[6/2] overflow-hidden"

    >
      <Image
        src={item.url}
        alt={item.title}
        fill
        className="object-fill rounded-lg"
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
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="w-full">
      {loader ? (
        <div className="flex items-center justify-center w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9]">
          <ClipLoader size={50} color="#123abc" />
        </div>
      ) : (
        <Carousel items={slides} settings={settings} />
      )}
    </div>
  );
}
