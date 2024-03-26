import { Button, Card } from "@material-tailwind/react";
import React from "react";
import Section2one from "./section2card/Section2one";

const SectionTwo = () => {
  return (
    <>
      <div>
        <div className="mt-5">
          <h1 className="
          xs:text-center xs:text-[#2c5aa0] xs:text-[24px] xs:font-bold
          md:text-center md:text-[#2c5aa0] md:text-4xl md:font-bold">
            Leading Educational Institutes Across the Country
          </h1>
          <h2 className="
          xs:text-center xs:text-[#2c5aa0] xs:text-[14px] xs:font-bold
          md:text-center md:text-[#2c5aa0] md:text-lg md:font-bold md:mt-3 ">
            Trust EduSparsh ERP to Simplify School Management & Improve
            Educational Delivery
          </h2>
          <div className="text-center mt-8">
            <Button className="rounded-full" size="md" color="green">
              Read All Case Studies
            </Button>
          </div>
        </div>
        <div className="xs:grid-cols-1 xs:text-center
        grid md:grid-cols-4 md:mt-4 md:gap-8 md:p-12   m-16">
          <div>
           
          <div>
          <img
              alt="nature"
              className="w-[78px] h-[101px] xs:ml-[150px] xs:mt-[20px] justify-center items-center "
              src="/imges/delhi-public-school-logo-E8BDE7B79B-seeklogo.com_.png"
            />
            <div className="mt-5">
              <h4 className="text-[#535252]">
                “EduSparsh ERP software has made our day-to-day management so
                much easier…”
              </h4>
              <h6 className="text-[#2b2a2a]">– Lancer’s Convent</h6>
            </div>
          </div>

          </div>
          <div>
            {" "}
            <img
              alt="nature"
              className="w-[109px] h-[101px] xs:ml-[150px] xs:mt-[20px]"
              src="/imges/maple-bear-logo.png"
            />
            <div className="mt-5">
              <h4 className="text-[#535252]">
                “EduSparsh ERP software has made our day-to-day management so
                much easier…”
              </h4>
              <h6 className="text-[#2b2a2a]">– Lancer’s Convent</h6>
            </div>
          </div>
          <div>
            {" "}
            <img
              alt="nature"
              className="w-[103px] h-[101px] xs:ml-[150px] xs:mt-[20px]"
              src="/imges/lancer-logo.png "
            />
            <div className="mt-5">
              <h4 className="text-[#535252]">
                “School scoop ERP software has made our day-to-day management so
                much easier…”
              </h4>
              <h6 className="text-[#2b2a2a]">– Lancer’s Convent</h6>
            </div>
          </div>
          <div>
            {" "}
            <img
              alt="nature"
              className="w-[186px] h-[101px] xs:ml-[150px] xs:mt-[20px]"
              src="/imges/gd-goenka-school.png "
            />
            <div className="mt-5">
              <h4 className="text-[#535252]">
                “EduSparsh ERP software has made our day-to-day management so
                much easier…”
              </h4>
              <h6 className="text-[#2b2a2a]">– Lancer’s Convent</h6>
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default SectionTwo;
