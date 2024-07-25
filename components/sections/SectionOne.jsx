import { Button, Card } from "@material-tailwind/react";
import React from "react";

const SectionOne = () => {
  return (
    <>
      <div
        className="grid 
      xs:grid-cols-1
      md:grid-cols-2 
      
      "
      >
        <div>
          <div className="xs:p-8 md:p-10">
            <div
              className="
             xs:text-[24px] xs:text-[#2c5aa0] xs:font-bold
            md:text-[#2c5aa0] md:text-4xl md:font-bold"
            >
              A Modern Cloud ERP With For School Education Institutes
            </div>
            <div
              className="
             xs:text-[14px] xs:text-[#2c5aa0] xs:font-light
            md:text-[#2c5aa0] md:text-3xl md:font-medium mt-2"
            >
              <h2>Build For Student Success at Schools & Universities</h2>
            </div>
          </div>
          <div
            className="
                    xs:grid xs:grid-cols-3 xs:mt-[420px] xs:ml-12
                     md:grid md:grid-cols-3 md:p-10 
          
          "
          >
            <div >
              {" "}
              <div className="mb-7 mt-4">
                <img src="/imges/modules.png" className="" />
                <h5 className="text-[#999999] ">45+</h5>
                <h5 className="text-[#999999] ">Module</h5>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <img  
                  src="/imges/school.png"
                  className="md:w-[64px] md:h-[66px]   "
                />
                <h5 className="text-[#999999] ">349+ </h5>
                <h5 className="text-[#999999] ">Educational Institute</h5>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="/imges/reading.png"
                  className="md:w-[60px] md:h-[60px] mt-3 "
                />
                <h5 className="text-[#999999] ">2,00,000</h5>
                <h5 className="text-[#999999] ">Students</h5>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="/imges/secure-data-60x60.png"
                  className="md:w-[60px] md:h-[60px] mt-3"
                />{" "}
                <h5 className="text-[#999999]">Enhanced</h5>
                <h5 className="text-[#999999]"> Data Security</h5>
              </div>
            </div>
            <div>
              <div>
                {" "}
                <img
                  src="/imges/management-60x60.png"
                  className="md:w-[64px] md:h-[64px]  "
                />
                <h5 className="text-[#999999] ">24/7</h5>
                <h5 className="text-[#999999] ">Help & Support</h5>
              </div>
            </div>
            <div>
              {" "}
              <div>
                <img
                  src="/imges/competition-60x60.png"
                  className="md:w-[60px] md:h-[60px] mt-1 "
                />
                <h5 className="text-[#999999] ">Fixed Cost</h5>
                <h5 className="text-[#999999]">Affordable System</h5>
              </div>
            </div>
          </div>
          <div className="text-center xs:mt-10">
            <Button
              color="green"
              size="md"
              variant="filled"
              className="rounded-full"
            >
              Request Free Demo Now !
            </Button>
          </div>
        </div>

        <div className="xs:mt-[-720px]">
          <img
            alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
            className="w-[500px] h-[397px]  "
            src="/imges/edumarshal-school-erp.png "
          />

          <h3 className="xs:hidden md:block md:font-semibold md:text-4xl text-center text-[#2c5aa0] mt-10 bg-white">
            12 Years Of Excellence
          </h3>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
