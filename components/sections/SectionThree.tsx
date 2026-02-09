import Image from "next/image";
import React, { useEffect, useState } from "react";

const SectionThree = () => {
 
  return (
    <>
      <div className=""></div>
      <div className="p-10 ">
        <div className="mt-4 ">
          <h3
            className="
          xs:text-[24px] xs:font-bold xs:text-center xs:text-[#2c5aa0]
          md:text-4xl md:font-bold md:text-center md:text-[#2c5aa0]"
          >
            One System, One Dashboard
          </h3>
          <div className="w-[9rem] h-1 rounded-lg bg-[#ffb000] mx-auto"></div>
          <h4
            className="
          xs:text-[14px] xs:font-bold xs:text-center xs:text-[#2c5aa0]
          md:text-xl md:font-bold md:text-center md:text-[#2c5aa0] mt-2
          "
          >
            That Seamlessly Connects
          </h4>
        </div>

        {/* <div className="flex flex-wrap mt-8 ml-32 mr-16 p-1 "> */}
        <div className="section3 ">
          <div className=" xs:text-center ">
            <h3 className=" text-[#ffb000] text-xl font-bold ml-12 ">
              STUDENTS
            </h3>
            <Image
            width={189}
            height={198}
              src="/imges/1.png"
              className=" xs:ml-[60px]"
              alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
            />

            <Image
            width={171}
            height={171}
              alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              src="/student.webp"
              className=" mt-[-185px] ml-[10px] xs:ml-[70px] rounded-full"
            />
          </div>

          <div className=" xs:text-center xs:mt-6">
            <h3 className=" text-[#ffb000] text-xl font-bold ml-12">PARENTS</h3>
            <Image
            width={189}
            height={198}
              src="/imges/2.png"
              className=" xs:ml-[60px]"
              alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
            />
            <Image
              width={171}
              height={171}
              alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              src="/parents.webp"
              className="w-[171px] h-[171px] mt-[-185px] ml-[10px] xs:ml-[70px] rounded-full"
            />

            
          </div>

          <div className=" xs:text-center xs:mt-6">
            <h3 className=" text-[#ffb000] text-xl font-bold ml-12">
              TEACHERS
            </h3>
            <Image
            width={189}
            height={198}
              src="/imges/3.png"
              className=" xs:ml-[60px]"
              alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
            />
            <Image
            width={180}
            height={171}
              alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              src="/teacher.webp"
              className="w-[171px] h-[171px] mt-[-185px] ml-[10px] xs:ml-[70px] rounded-full"
            />

            
          </div>

          <div className=" xs:text-center xs:mt-6">
            <h3 className=" text-[#ffb000] text-xl uppercase  font-bold">
            School owner
            </h3>
            <Image
            width={189}
            height={198}
              src="/imges/4.png"
              className=" xs:ml-[60px]"
              alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
            />
            <Image
            width={180}
            height={171}
              alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              src="/owner.webp"
              className="w-[171px] h-[171px] mt-[-185px] ml-[10px] xs:ml-[70px] rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
