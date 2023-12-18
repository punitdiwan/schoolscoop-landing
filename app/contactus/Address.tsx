import { Typography } from '@material-tailwind/react'
import React from 'react'
import { IoBookOutline } from 'react-icons/io5'

const Address = () => {
  return (
    <>
      <div className="flex">
            <div>
            <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 sm:font-extrabold text-4xl "
        >
         <div className="flex"><div> EduSparsh </div><div><IoBookOutline  className="mt-1 ml-2" /></div></div>
        
        
        </Typography>
        <div className="mt-[50px]">
              <h2 className="text-[#999999] ">
                House # 36, T - Ward , Bairagarh, Bhopal, MP, India 462030
              </h2>
            </div>
            </div>
           

            <div className="mt-[30px]">
              <h1 className="text-base font-bold">Sales</h1>
              <div className="flex mt-2">
                <div>
                  {" "}
                  <img
                    src="/imges/telephone.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">+91-989-354-0318</h6>
                </div>
              </div>

              <div className="flex mt-1">
                <div>
                  {" "}
                  <img
                    src="/imges/mail-black-envelope-symbol.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">info@maitretech.com</h6>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-base font-bold mt-2">Support & Help</h1>
              <div className="flex mt-2">
                <div>
                  {" "}
                  <img
                    src="/imges/telephone.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">+91-989-354-0318</h6>
                </div>
              </div>

              <div className="flex mt-1">
                <div>
                  {" "}
                  <img
                    src="/imges/mail-black-envelope-symbol.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">info@maitretech.com</h6>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-base font-bold mt-2">Become a Reseller</h1>
              <div className="flex mt-2">
                <div>
                  {" "}
                  <img
                    src="/imges/telephone.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">+91-989-354-0318</h6>
                </div>
              </div>

              <div className="flex mt-1">
                <div>
                  {" "}
                  <img
                    src="/imges/mail-black-envelope-symbol.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">info@maitretech.com</h6>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-base font-bold mt-2">Jobs & Recruitment</h1>

              <div className="flex mt-2">
                <div>
                  {" "}
                  <img
                    src="/imges/mail-black-envelope-symbol.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">info@maitretech.com</h6>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Address