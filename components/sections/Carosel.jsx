import { Carousel } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const Carosel = () => {

  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/home_slider?fields=*.*"
      );
      const jsonData = await response.json();

      setData(jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // console.log("slider data====>", data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Carousel
          transition={{ duration: 2 }}
          className="rounded-xl"
          autoplay
          loop
        >
          {data?.map((card) => (
                  <div key={card.id}>
                    <img
                      src={card.slider_img.data.full_url}
                      alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                      className="h-full w-full object-cover"
                    />
                  </div>
          ))
          }
        </Carousel>
      </div>
    </>
  );
};

export default Carosel;
