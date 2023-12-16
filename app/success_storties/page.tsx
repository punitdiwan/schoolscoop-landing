"use client";
import NavBar from "@/components/Header/NavBar";
import TopHeader from "@/components/Header/TopHeader";
import React from "react";
import StoriesOne from "./StoriesOne";

import VideoWithCard from "./Cards";
import SectionNine from "@/components/sections/SectionNine";
import Footer from "@/components/Footer/Footer";
import WhatsappForm from "@/components/whatsapp/WhatsappForm";
import TestimonialCard from "./TestimonialCard";
import Request from "@/components/Request";

const SuccessStories = () => {
  return (
    <>
      <div>
      
        <NavBar />
        <div className="p-[20px]">
          <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  overflow-auto scrollbar-hide ">
            <WhatsappForm />
            <Request />

            <div className="mx-auto p-2 ">
              <StoriesOne />
              <TestimonialCard />

              <SectionNine />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;

{
  /* <TopHeader />

<NavBar />
<WhatsappForm />
<Request/>
<StoriesOne />
<TestimonialCard />

<SectionNine />
<Footer /> */
}

{
  /* <>
<div>
<TopHeader />
  <NavBar />
  <div className="p-[20px]">
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  overflow-auto scrollbar-hide ">
      <WhatsappForm />

      <div
        className="
xs:top-[250px] xs:right-[1px] xs:fixed
md:top-[210px] md:right-[1px] md:fixed"
      >
        <img src="/imges/Demo-Button-v.gif" />
      </div>

      <div className="mx-auto p-2 ">

   yhe add karo 
</div>
</div>
</div>
</div>
</> */
}
