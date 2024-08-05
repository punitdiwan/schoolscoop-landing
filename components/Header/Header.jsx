"use client";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from "@material-tailwind/react";
// import TopHeader from "./TopHeader";
import { FaSchool } from "react-icons/fa6";
import NavBar from "./NavBar";
import SectionOne from "../sections/SectionOne";
import SectionTwo from "../sections/SectionTwo";
import SectionThree from "../sections/SectionThree";
import SectionFour from "../sections/SectionFour";
import SectionFive from "../sections/SectionFive";
import Footer from "../Footer/Footer";
import SectionSix from "../sections/SectionSix";
import SectionSeven from "../sections/SectionSeven";
import SectionEight from "../sections/SectionEight";
import SectionNine from "../sections/SectionNine";
import WhatsappForm from "../whatsapp/WhatsappForm";
import Section2 from "../sections/Section2";
import Section2one from "../sections/section2card/Section2one";
import Section2Two from "../sections/section2card/Section2Two";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 md:items-center md:text-medium lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6   ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          HOME
        </a>
      </Typography>
      <Menu>
        <MenuHandler>
          <span> MODULES</span>
        </MenuHandler>
        <MenuList>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          SUCCESS STORIES
        </a>
      </Typography>
      <Menu>
        <MenuHandler>
          <span>HELP & SUPPORT</span>
        </MenuHandler>
        <MenuList>
          <MenuItem>For Parents & Students</MenuItem>
          <MenuItem>For School Staff & Administrator</MenuItem>
        </MenuList>
      </Menu>
    </ul>
  );

  return (
    <>
      <div>
        <NavBar />
        <div className="p-[20px]">
          <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  overflow-auto scrollbar-hide ">
            <WhatsappForm />

            <div className="xs:top-[250px] xs:right-[1px] xs:fixed md:top-[210px] md:right-[1px] md:fixed">
              <img
                src="/imges/Demo-Button-v.gif"
                alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              />
            </div>

            <div className="mx-auto p-2 ">
              <SectionOne />
              <Section2 />
              <Section2Two />
              <Section2one />

              <SectionThree />
              <SectionTwo />
              <SectionFour />
              {/* <SectionFive /> */}
              <SectionSix />
              {/* <SectionSeven /> */}
              {/* <SectionEight /> */}
              {/* <SectionNine /> */}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
