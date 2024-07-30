import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
  FaYoutube
} from "react-icons/fa6";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { IoBookOutline } from "react-icons/io5";

// const SITEMAP = [
//   {
//     title: "Company",
//     links: ["About Us"],
//   },
//   {
//     title: "Help Center",
//     links: [ "Contact Us"],
//   },
//   {
//     title: "Resources",
//     links: ["Blog"],
//   },

// ];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <footer className="mainfooter">
       
        <div className="grid  grid-cols-2 sm:grid-cols-3  lg:grid-cols-6  px-4 justify-items-center mx-auto">
          {/* <div className="footerfirst mx-auto justify-center "> */}
          <div className="flex flex-col mb-3 gap-2" >
            {/* <h2 className=" font-bold text-white text-3xl">Edusparsh </h2> */}
            <div className="flex font-bold text-white text-3xl">
              <div> EduSparsh </div>
              <div>
                <IoBookOutline className="mt-1 ml-2" />
              </div>
            </div>
            <p className="text-medium">
              Edusparsh is one of the leading ERP solution for eductional
              institutions access the world. It is a fully customizable solution
              with major features such as SMS, online earn, Mobile App,
              Biometric, Barcode etc.
            </p>
            <div className=" flex flex-row gap-2">
              <a href='/' className="text-xl bg-white text-blue-900 px-1 py-1 rounded-lg hover:text-white  hover:bg-blue-900">
                <FaFacebook />
              </a>
              <Link href='https://www.linkedin.com/company/maitretech-solution/' className="text-xl bg-white text-blue-900 px-1 py-1 rounded-lg hover:text-white  hover:bg-blue-800">
                <FaLinkedin />
              </Link>
              <Link href="/" className="text-xl bg-white text-pink-600 px-1 py-1 rounded-lg hover:text-white  hover:bg-pink-700">
                <FaInstagram />
              </Link>
              <Link href="https://youtube.com/@maitretech1768?si=8PnVazWyxKbcngE" className="text-xl bg-white text-red-400 px-1 py-1 rounded-lg hover:text-white  hover:bg-red-500">
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className="flex flex-col mb-3  ">
            <h2 className="uppercase font-bold text-white">Home </h2>
            <Link className="hover:text-white" href="/">
              About eduspash
            </Link>
            <Link className="hover:text-white" href="/">
              why edusparsh
            </Link>
            <Link className="hover:text-white" href="/">
              About company
            </Link>
            <Link className="hover:text-white" href="/">
              Benifit to you
            </Link>
            <Link className="hover:text-white" href="/">
              our apporoach
            </Link>
          </div>
          <div className="flex flex-col mb-3 ">
            <h2 className="uppercase font-bold text-white">Modules </h2>
            <Link
              className="hover:text-white"
              href="/modules/student_management"
            >
              Students management
            </Link>
            <Link className="hover:text-white" href="/modules/hr_management">
              Administration & HR management
            </Link>
            <Link className="hover:text-white" href="/modules/fee_management">
              fees management
            </Link>
            <Link className="hover:text-white" href="/modules/exam_management">
              exam management
            </Link>
            <Link
              className="hover:text-white"
              href="/modules/transport_management"
            >
              transportation management
            </Link>
          </div>
          <div className="flex flex-col mb-3 ">
            <h2 className="uppercase font-bold text-white">SUCCESS STORIES </h2>
            <Link className="hover:text-white" href="/">
              Segments
            </Link>
            <Link className="hover:text-white" href="/">
              Our Clients
            </Link>
            <Link className="hover:text-white" href="/">
              Testimonial
            </Link>
          </div>
          <div className="flex flex-col mb-3 ">
            <h2 className="uppercase font-bold text-white">help & support </h2>
            <Link
              className="hover:text-white"
              href="/help_and_support/help_student_support"
            >
              For parets & Students
            </Link>
            <Link
              className="hover:text-white"
              href="/help_and_support/help_school"
            >
              for school Staff & Administrators
            </Link>
            <Link className=" text-white uppercase mt-3 hover:text-green-300 font-bold" href="/blog">
              Blog
            </Link>
          </div>
          <div className="flex flex-col mb-3 ">
            <h2 className="uppercase font-bold text-white">Resources </h2>
            
            <Link className="hover:text-white" href="/">
              {" "}
              presentation
            </Link>
            <Link className="hover:text-white" href="/">
              {" "}
              case study
            </Link>
            <Link className="hover:text-white" href="/">
              {" "}
              brochures
            </Link>
            <Link className="hover:text-white" href="/">
              {" "}
              FAQ
            </Link>
          </div>
          {/* <div className=" flex flex-col mb-3 ">
            <h2>Contact us </h2>
            <p>House # 36, T - Ward , Bairagarh, Bhopal, MP, India 462030</p>
            <Link
              href="/contactus"
              className="bg-white px-1 py-1 text-gray-700 w-16 text-center  rounded-xl"
            >
              Demo
            </Link>
          </div> */}
        </div>
        
        <div className="border-white border-1 rounded-full  px-4 w-full my-4"></div>
        <div className="flex flex-wrap justify-between w-[80%]">
          <p className=" flex flex-row items-baseline gap-1 ">
            {" "}
            <FaRegCopyright className="text-sm -mb-2" /> Edusparsh 2024. All
            rights reserved maitretech product
          </p>
          <p>Terms of use | Privicy Policy</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
