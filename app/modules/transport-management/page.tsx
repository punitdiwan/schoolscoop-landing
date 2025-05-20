"use client";
import NavBar from "@/components/Header/NavBar";
import WhatsappForm from "@/components/whatsapp/WhatsappForm";
import React from "react";
import TransportImage from "./TransportImage";
import TransportModule from "./TransportModule";
import TransportReview from "./TransportReview";
import Footer from "@/components/Footer/Footer";
import TransportFeatureCardsSection from "./Featurecard";
import TransportationContent from "./ModuleContent"

const TransportManagement = () => {
  return (
    <>
      <div>
      
        <NavBar />

        <div className="p-[20px]">
          <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  overflow-auto scrollbar-hide ">
            <WhatsappForm />

            <div
              className="
     xs:top-[250px] xs:right-[1px] xs:fixed xs:z-10 md:z-10
     md:top-[210px] md:right-[1px] md:fixed"
            >
              <img src="/imges/Demo-Button-v.gif" alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."/>
            </div>

            <div className="mx-auto p-2 ">

        <img src="/modules/transportation.png"
               className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[550px] lg:mt-1 object-fit"
                    alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
         
              <TransportationContent></TransportationContent>
              <TransportFeatureCardsSection></TransportFeatureCardsSection>
              {/* <TransportImage /> */}
              {/* <TransportModule /> */}
              {/* <TransportReview /> */}
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransportManagement;
