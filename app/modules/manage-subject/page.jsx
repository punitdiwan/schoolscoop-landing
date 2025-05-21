"use client";
import NavBar from "@/components/Header/NavBar";
// import TopHeader from "@/components/Header/TopHeader";
import WhatsappForm from "@/components/whatsapp/WhatsappForm";
import React from "react";
import Footer from "@/components/Footer/Footer";
import ManageSubeject from "./ModuleContent"
import SubjectFeatureCardsSection from    "./FeatureCard"

const subjectManagement =() =>{
    return(
    <>
      <div>
        <NavBar />
        
        <div className="p-[20px]">
          <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  overflow-auto scrollbar-hide ">
            <WhatsappForm />
            <div className="mx-auto p-2 ">

                         <img src="/modules/subject.png"
                    className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[550px] lg:mt-1 object-fit"
                    alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
                <ManageSubeject />
             <SubjectFeatureCardsSection/>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    
    </>       
    )
}
export default subjectManagement