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


const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <footer className="mainfooter">
        <div className="grid  grid-cols-1 sm:grid-cols-3  lg:grid-cols-6  px-4  mx-auto">
          {/* <div className="footerfirst mx-auto justify-center "> */}
          <div className="flex flex-col mb-3 gap-2">
            {/* <h2 className=" font-bold text-white text-3xl">Edusparsh </h2> */}
            <div className="flex font-bold text-white text-3xl">
              <div> EduSparsh </div>
              <div>
                <IoBookOutline className="mt-1 ml-2" />
              </div>
            </div>
            <p className="text-[13px]">
              Edusparsh is one of the leading ERP solution for eductional
              institutions access the world. It is a fully customizable solution
              with major features such as SMS, online earn, Mobile App,
              Biometric, Barcode etc.
            </p>
            <div className=" flex flex-row gap-2">
              <a
                href="/"
                className="text-xl bg-white text-blue-900 px-1 py-1 rounded-lg hover:text-white  hover:bg-blue-900"
              >
                <FaFacebook />
              </a>
              <Link
                href="https://www.linkedin.com/company/maitretech-solution/"
                className="text-xl bg-white text-blue-900 px-1 py-1 rounded-lg hover:text-white  hover:bg-blue-800"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="/"
                className="text-xl bg-white text-pink-600 px-1 py-1 rounded-lg hover:text-white  hover:bg-pink-700"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://youtube.com/@maitretech1768?si=8PnVazWyxKbcngE"
                className="text-xl bg-white text-red-400 px-1 py-1 rounded-lg hover:text-white  hover:bg-red-500"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className="flex flex-col mb-3 capitalize ">
            <h2 className="uppercase font-bold text-white">Home </h2>
            <Link className="hover:text-white" href="/">
              About Eduspash
            </Link>
            <Link className="hover:text-white" href="/">
              Why edusparsh
            </Link>
            <Link className="hover:text-white" href="/">
              About company
            </Link>
            <Link className="hover:text-white" href="/">
              Benifit to you
            </Link>
            <Link className="hover:text-white" href="/">
              Our apporoach
            </Link>
          </div>
          <div className="flex flex-col mb-3 capitalize">
            <h2 className="uppercase font-bold text-white">Modules </h2>
            <Link
              className="hover:text-white"
              href="/modules/student-management"
            >
              Students Management
            </Link>
            <Link className="hover:text-white" href="/modules/hr-management">
              Administration & HR management
            </Link>
            <Link className="hover:text-white" href="/modules/fee-management">
              Fees management
            </Link>
            <Link className="hover:text-white" href="/modules/exam-management">
              Exam management
            </Link>
            <Link
              className="hover:text-white"
              href="/modules/transport-management"
            >
              Transportation management
            </Link>
          </div>
          
          <div className="flex flex-col mb-3 capitalize">
            <h2 className="uppercase font-bold text-white">help & support </h2>
            <Link
              className="hover:text-white"
              href="/help-and-support/help-student-support"
            >
              For parets & Students
            </Link>
            <Link
              className="hover:text-white"
              href="/help-and-support/help-school"
            >
              for school Staff & Administrators
            </Link>
           
          </div>
          <div className="flex flex-col mb-3 capitalize">
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
          <div className=" flex flex-col  ">
            <h2 className="uppercase font-bold text-white">Contact us </h2>
            <p className="hover:text-white">
              House # 36, T - Ward , Bairagarh, Bhopal, MP, India 462030
            </p>
           
          </div>
        </div>

        <div className="border-white border-1 rounded-full  px-4 w-full my-4"></div>
        <div className="flex flex-wrap justify-between w-[80%]">
          <div className="flex ">
            <Link
              href="https://maitretech.com/"
              className=" flex flex-row items-baseline "
            >
               &copyEdusparsh 2024. All Rights Reserved Maitretech Solution
            </Link>
          </div>

          <p><Link className="text-white" href="https://maitretech.com/Services.html">Terms and Contitions</Link> | <Link className="text-white" href="https://maitretech.com/RefundCancillation.html">Privicy Policy</Link></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
