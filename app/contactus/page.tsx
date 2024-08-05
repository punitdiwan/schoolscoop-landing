"use client";
import NavBar from "@/components/Header/NavBar";
import WhatsappForm from "@/components/whatsapp/WhatsappForm";
import React from "react";
import ExamImage from "../modules/exam-management/ExamImage";
import ContactImage from "./ContactImage";
import ContactInfo from "./ContactInfo";
import Footer from "@/components/Footer/Footer";
import Address from "./Address";
import Presence from "./Presence";

const ContactUs = () => {
  return (
    <>
      <div>
        <div>
          <NavBar />
          <div className="p-[20px]">
            <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  overflow-auto scrollbar-hide ">
              <WhatsappForm />

              <div
                className="xs:top-[250px] xs:right-[1px] xs:fixed xs:z-10 md:z-10
                        md:top-[210px] md:right-[1px] md:fixed" 
              >
                <img
                  src="/imges/Demo-Button-v.gif"
                  alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                />
              </div>
              <div>
                <ContactImage />
                <ContactInfo />
                <Presence/>
                <Address />

                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
