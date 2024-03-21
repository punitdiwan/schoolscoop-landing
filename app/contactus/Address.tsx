import { Typography } from "@material-tailwind/react";
import React from "react";
import { IoBookOutline } from "react-icons/io5";

const Address = () => {
  return (
    <>
      <div className="p-12">
        <div className="grid  md:grid-cols-5 gap-5">
          <div>
            <div className="">
              <div className="flex sm:font-extrabold text-4xl">
                <div> EduSparsh </div>
                <div>
                  <IoBookOutline className="mt-1 ml-2" />
                </div>
              </div>
              <div>
                <h2 className="text-[#999999] ">
                  House # 36, T - Ward , Bairagarh, Bhopal, MP, India 462030
                </h2>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <h1 className="text-base font-bold">Sales</h1>
                <div className="flex ">
                  <div>
                    <img
                      src="/imges/telephone.png"
                      className="w-[16px] h-[16px] mt-1"
                    />
                  </div>
                  <div>
                    <h6 className="text-[#999999] ">+91-989-354-0318</h6>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex mt-1">
                <div>
                  {" "}
                  <img
                    src="/imges/mail-black-envelope-symbol.png"
                    className="w-[16px] h-[16px] mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">info@maitretech.com</h6>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <h1 className="text-base font-bold">Support & Help</h1>
                <div className="flex ">
                  <div>
                    <img
                      src="/imges/telephone.png"
                      className="w-[16px] h-[16px] mt-1"
                    />
                  </div>
                  <div>
                    <h6 className="text-[#999999] ">+91-989-354-0318</h6>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex mt-1">
                <div>
                  {" "}
                  <img
                    src="/imges/mail-black-envelope-symbol.png"
                    className="w-[16px] h-[16px] mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">info@maitretech.com</h6>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <h1 className="text-base font-bold">Become a Reseller</h1>
                <div className="flex ">
                  <div>
                    <img
                      src="/imges/telephone.png"
                      className="w-[16px] h-[16px] mt-1"
                    />
                  </div>
                  <div>
                    <h6 className="text-[#999999] ">+91-989-354-0318</h6>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex mt-1">
                <div>
                  {" "}
                  <img
                    src="/imges/mail-black-envelope-symbol.png"
                    className="w-[16px] h-[16px] mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">info@maitretech.com</h6>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <h1 className="text-base font-bold">Jobs & Recruitment</h1>
               
              </div>
            </div>
            <div>
              <div className="flex mt-1">
                <div>
                  {" "}
                  <img
                    src="/imges/mail-black-envelope-symbol.png"
                    className="w-[16px] h-[16px] mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">info@maitretech.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
