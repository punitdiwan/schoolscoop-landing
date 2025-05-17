"use client";
import NavBar from "@/components/Header/NavBar";
// import TopHeader from "@/components/Header/TopHeader";
import WhatsappForm from "@/components/whatsapp/WhatsappForm";
import React from "react";
import Footer from "@/components/Footer/Footer";
import SectionSix from "@/components/sections/SectionSix";
import ManageSubeject from "./manage-subject"
import FeatureCardsSection from    "./FeatureCard"
const subjectManagement =() =>{
    return(
    <>
      <div>
        <NavBar />
        <div className="p-[20px]">
          <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  overflow-auto scrollbar-hide ">
            <WhatsappForm />
            <div className="mx-auto p-2 ">
                <ManageSubeject />
             <FeatureCardsSection/>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    
    </>       
    )
}
export default subjectManagement