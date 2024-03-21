import React from "react";
import { Carousel } from "@material-tailwind/react";
import Carosel from "./Carosel";

const SectionFour = () => {
  return (
    <>
      <div className="mt-6  ">
        <h1
          className="
        xs:text-[14px] xs:font-bold xs:text-center xs:text-[#2c5aa0]
        md:text-4xl md:font-bold md:text-center md:text-[#2c5aa0] mb-2"
        >
          Across All Systems, Across All Devices
        </h1>
      </div>

      <div className="w-[9rem] h-1 rounded-lg bg-[#ffb000] mx-auto"></div>

      <div className='p-12'>
      <Carosel/>
      </div>
    </>

    
  );
};

export default SectionFour;


