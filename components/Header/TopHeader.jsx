import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

const TopHeader = () => {
  return (
    <>
      <div
        className="grid text-[#808080]
          xs:p-2
          md:grid-cols-3  md:mb-[1px]  md:p-[10px] " >
        <div className="flex">
          <div className="flex">
            <div>
              <img
                src="/imges/telephone.png"
                className="sm:w-[16px] sm:h-[16px] mt-1 mr-2  cursor-pointer"
              />
            </div>
            <div>
              {" "}
              <h6>+91-989-354-0318</h6>
            </div>
          </div>
          <div className="flex ml-4">
            <div>
             
              <img
                src="/imges/mail-black-envelope-symbol.png"
                className="sm:w-[16px] sm:h-[16px] mt-1 mr-2  cursor-pointer"
              />
            </div>
            <div>
              
              <h6>info@maitretech.com</h6>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex xs:ml-[70px]">
            <div>
              <img
                src="/imges/android-logo.png"
                className="sm:w-[16px] sm:h-[16px] mt-1 mr-2 cursor-pointer"
              />
            </div>

            <div>
              <label>Download Android App</label>
            </div>
          </div>

          <div className="flex ml-4 xs:hidden">
            <div>
              <img
                src="/imges/apple.png"
                className="sm:w-[16px] sm:h-[16px] mt-1 mr-2 sm:hidden md:block cursor-pointer"
              />
            </div>

            <div>
              <h6 className="sm:hidden md:block">Download iOS App</h6>
            </div>
          </div>
        </div>
        <div className="xs:hidden ">
          <Button
            variant="outlined"
            size="sm"
            className=" rounded-full text-[#808080] border-[#808080] cursor-pointer"
          >
            <span>Sign in</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
