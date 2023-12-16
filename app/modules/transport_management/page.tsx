"use client";
import NavBar from "@/components/Header/NavBar";
import TopHeader from "@/components/Header/TopHeader";
import WhatsappForm from "@/components/whatsapp/WhatsappForm";
import React from "react";
import TransportImage from "./TransportImage";
import TransportModule from "./TransportModule";
import TransportReview from "./TransportReview";
import Footer from "@/components/Footer/Footer";

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
              <img src="/imges/Demo-Button-v.gif" />
            </div>

            <div className="mx-auto p-2 ">
              <TransportImage />
              <TransportModule />
              <TransportReview />
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransportManagement;
