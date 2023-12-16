import React from "react";

const SectionThree = () => {
  return (
    <>
      <div className="p-10 ">
        <div className="mt-4">
          <h1 className="
          xs:text-[24px] xs:font-bold xs:text-center xs:text-[#2c5aa0]
          md:text-4xl md:font-bold md:text-center md:text-[#2c5aa0]">
            One System, One Dashboard
          </h1>
          <div className="w-[9rem] h-1 rounded-lg bg-[#ffb000] mx-auto"></div>
          <h4 className="
          xs:text-[14px] xs:font-bold xs:text-center xs:text-[#2c5aa0]
          md:text-xl md:font-bold md:text-center md:text-[#2c5aa0] mt-2
          ">
            That Seamlessly Connects
          </h4>
        </div>

        <div className="grid grid-cols-4 xs:grid-cols-1 mt-8 ">
          <div className=" xs:text-center ">
            <h1 className=" text-[#ffb000] text-xl font-bold">STUDENTS</h1>
            <img src="/imges/1.png" className="w-[189px] h-[198px] xs:ml-[60px]" />

            <img
              src="/imges/image11158.png"
              className="w-[171px] h-[171px] mt-[-185px] ml-[10px] xs:ml-[70px]"
            />
            <div>
              {" "}
              <img
                src="/imges/line.png"
                className="w-[172px] h-[1px] ml-[190px] mt-[-90px] xs:hidden"
              />
            </div>
          </div>
          <div className=" xs:text-center xs:mt-6">
            <h1 className=" text-[#ffb000] text-xl font-bold">PARENTS</h1>
            <img src="/imges/2.png" className="w-[189px] h-[198px] xs:ml-[60px]"  />
            <img
              src="/imges/image11588.png"
              className="w-[171px] h-[171px] mt-[-185px] ml-[10px] xs:ml-[70px]"
            />

            <div>
              {" "}
              <img
                src="/imges/line.png"
                className="w-[172px] h-[1px] ml-[190px] mt-[-90px] xs:hidden"
              />
            </div>
          </div>

          <div className=" xs:text-center xs:mt-6">
            <h1 className=" text-[#ffb000] text-xl font-bold">TEACHERS</h1>
            <img src="/imges/3.png" className="w-[189px] h-[198px] xs:ml-[60px]" />
            <img
              src="/imges/image11179-1.png"
              className="w-[171px] h-[171px] mt-[-185px] ml-[10px] xs:ml-[70px]"
            />

            <div>
              {" "}
              <img
                src="/imges/line.png"
                className="w-[172px] h-[1px] ml-[190px] mt-[-90px] xs:hidden"
              />
            </div>
          </div>

          <div className=" xs:text-center xs:mt-6">
            <h1 className=" text-[#ffb000] text-xl font-bold">
              DECISION MAKERS
            </h1>
            <img src="/imges/4.png" className="w-[189px] h-[198px] xs:ml-[60px]" />
            <img
              src="/imges/image11577.png"
              className="w-[171px] h-[171px] mt-[-185px] ml-[10px] xs:ml-[70px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
