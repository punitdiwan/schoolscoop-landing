import React from "react";
import Cards from "../Card/Cards";


const SectionSeven = () => {
  return (
    <>
      <div className="p-10">
        <div>
          <h1 className="
           xs:text-[#2c5aa0] xs:text-[24px] xs:font-bold xs:text-center
          md:text-[#2c5aa0] md:text-[40px] md:font-bold md:text-center">
            School Scoop in The Media
          </h1>
        </div>
        <div className="grid md:grid-cols-4 xs:grid-cols-2 gap-5 mt-5">
          <div>
            <Cards/>
          </div>
          <div> <Cards/></div>
          <div> <Cards/></div>
          <div> <Cards/></div>
        </div>
      </div>
    </>
  );
};

export default SectionSeven;
