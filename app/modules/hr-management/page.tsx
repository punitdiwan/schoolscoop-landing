"use client";
import NavBar from "@/components/Header/NavBar";
// import TopHeader from '@/components/Header/TopHeader'
import WhatsappForm from "@/components/whatsapp/WhatsappForm";
import React from "react";
import HrImage from "./HrImage";
import HrManagementModule from "./HrManagementModule";
import SchoolHrFeature from "./SchoolHrFeature";
import HrReview from "./HrReview";
import SectionSix from "@/components/sections/SectionSix";
import SectionNine from "@/components/sections/SectionNine";
import Footer from "@/components/Footer/Footer";
import HrContent from './ModuleContent'
import FeatureCardsSection from    "./FeatureCard"
const HrManagement = () => {
  return (
    <>
      <div>
        <NavBar />
                     
        <div className="p-[20px]">
          <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  overflow-auto scrollbar-hide ">
            <WhatsappForm />

            <div className="
                              xs:top-[250px] xs:right-[1px] xs:fixed xs:z-10 md:z-10
                              md:top-[210px] md:right-[1px] md:fixed">
              <img
                src="/imges/Demo-Button-v.gif"
                alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              />
            </div>

            <div className="mx-auto p-2 ">
              {/* <HrImage /> */}
              {/* <HrManagementModule /> */}
                     <img src="/modules/hrmanagement.png"
                    className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[550px] lg:mt-1 object-fit"
                    alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
              <HrContent></HrContent>
              <FeatureCardsSection/>
              {/* <HrReview /> */}
              {/* <SectionSix /> */}

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HrManagement;
