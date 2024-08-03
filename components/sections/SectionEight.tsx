import Link from "next/link";
import React from "react";

const SectionEight = () => {
  return (
    <>
      <div>
        <div className="md:flex    bg-[#1d293a]  ">
          
          <div className="grid p-5 grid-cols-2 md:grid-cols-4 gap-3">
            <div className="">
              
              <h1 className="text-white text-3xl font-bold">Help & Support</h1>
              <h3
                className="
              xs:text-[14px] xs:font-semibold xs:text-white 
              md:text-lg md:font-semibold md:text-white mt-1"
              >
                For Existing EduSparsh Users
              </h3>
            </div>

            <div className="mt-[30px] ml-4 ">
              <img
                src="/imges/student-50x50.png"
                alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              />
              <h4 className="text-white text-base font-normal mt-3 ">
                For Students & Parents
              </h4>
            </div>

            <div className="mt-[30px] ">
              <img
                src="/imges/support-50x50.png"
                alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              />
              <h4 className="text-white text-base font-normal mt-3">
                For School Staff
              </h4>
            </div>
            <div className=" flex flex-col text-white ">
              <h2>Contact us </h2>
              <p>House # 36, T - Ward , Bairagarh, Bhopal, MP, India 462030</p>
              <Link
                href="/contactus"
                className="bg-white px-1 py-1 text-gray-700 w-16 text-center  rounded-xl"
              >
                Demo
              </Link>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default SectionEight;
