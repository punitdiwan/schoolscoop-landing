import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Carosel = () => {
  // const [data, setData] = useState();
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://cms.maitretech.com/edusparsh/items/home_slider?fields=*.*"
  //     );
  //     const jsonData = await response.json();

  //     setData(jsonData.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // // console.log("slider data====>", data);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const Data = [
    {
      id: 1,
      title: "Title 1",
      slider_img: {
        data: {
          full_url: "/card1.webp"
        }
      }
    },
    {
      id: 2,
      title: "Title 2",
      slider_img: {
        data: {
          full_url: "/card2.webp"
        }
      }
    },
    {
      id: 3,
      title: "Title 3",
      slider_img: {
        data: {
          full_url: "/card3.webp"
        }
      }
    },
    {
      id: 4,
      title: "Title 4",
      slider_img: {
        data: {
          full_url: "/card4.webp"
        }
      }
    },
  ];
  return (
    <>
      <div>
        <Carousel
          transition={{ duration: 2 }}
          className="rounded-xl"
          autoplay
          loop
        >
          {Data?.map((card) => (
            <div key={card.id}>
              <Image
              width={1000}
              height={700}
                src={card.slider_img.data.full_url}
                alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                // className="h-full w-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Carosel;
