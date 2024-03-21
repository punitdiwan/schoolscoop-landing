import React from "react";

const SectionEight = () => {
  return (
    <>
      <div>
        <div className="md:flex md:h-[300px]   bg-[#1d293a]">

          <div className="grid
          xs:grid-cols-3 xs:p-5 xs:gap-4 xs:col-span-2
          md:grid-cols-3 md:p-10 md:gap-10">

            <div className="">
              <h1 className="
              xs:text-[24px] xs:font-extrabold xs:text-white xs:mt-4
              md:text-6xl md:font-extrabold md:text-white">
                Help & Support
              </h1>
              <h3 className="
              xs:text-[14px] xs:font-semibold xs:text-white 
              md:text-lg md:font-semibold md:text-white ">
                For Existing EduSparsh Users
              </h3>
            </div>

            <div className="mt-[30px] ml-4 ">
              <img src="/imges/student-50x50.png" />
              <h4 className="text-white text-base font-normal ">
                For Students & Parents
              </h4>
            </div>

            <div className="mt-[30px] ">
              <img src="/imges/support-50x50.png" />
              <h4 className="text-white text-base font-normal ">
                For School Staff
              </h4>
            </div>
          </div>
          

          <div className="bg-[#848484] p-5">
            <h1 className="
             xs:text-[50px] xs:font-bold xs:text-white
            md:text-5xl md:font-extrabold md:text-white">
              Become a Reseller
            </h1>
            <h3 className="
            xs:text-[20px] xs:font-normal xs:text-white xs:mt-1
            md:text-lg md:font-normal md:text-white mt-3">
              Learn More About the EduSparsh Reseller Program
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionEight;
