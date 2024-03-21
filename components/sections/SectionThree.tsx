import React from "react";

const SectionThree = () => {
  return (
    <>
      <div className="p-10 ">
        <div className="mt-4 ">
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

        <div className="grid grid-cols-4 xs:grid-cols-1 mt-8 ml-32 mr-16 p-1 ">

          <div className=" xs:text-center ">
            <h1 className=" text-[#ffb000] text-xl font-bold ml-12 ">STUDENTS</h1>
            <img src="/imges/1.png" className="w-[189px] h-[198px] xs:ml-[60px]" />
            

            <img
              // src="/imges/image11158.png"
               src="https://img.freepik.com/premium-photo/young-indian-college-boy-holding-backpack-books-giving-happy-expression_54391-7219.jpg?w=740"
              className="w-[171px] h-[171px] mt-[-185px] ml-[10px] xs:ml-[70px] rounded-full"
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
            <h1 className=" text-[#ffb000] text-xl font-bold ml-12">PARENTS</h1>
            <img src="/imges/2.png" className="w-[189px] h-[198px] xs:ml-[60px]"  />
            <img
              // src="/imges/image11588.png"
              src="https://img.freepik.com/free-photo/family-looking-together-laptop-home_23-2149126695.jpg?t=st=1710932410~exp=1710936010~hmac=d351cf6248ad473920b915640972bd0357da58a86dbe4d4f71957dda40b5565d&w=740"
              className="w-[171px] h-[171px] mt-[-185px] ml-[10px] xs:ml-[70px] rounded-full"
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
            <h1 className=" text-[#ffb000] text-xl font-bold ml-12">TEACHERS</h1>
            <img src="/imges/3.png" className="w-[189px] h-[198px] xs:ml-[60px]" />
            <img
              // src="/imges/image11179-1.png"
              src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-[171px] h-[171px] mt-[-185px] ml-[10px] xs:ml-[70px] rounded-full"
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
              // src="/imges/image11577.png"
               src="https://tse1.mm.bing.net/th?id=OIP.9iw6nTVV3ARjQGaVNh9GBwHaEK&pid=Api&P=0&h=180"
              className="w-[171px] h-[171px] mt-[-185px] ml-[10px] xs:ml-[70px] rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
