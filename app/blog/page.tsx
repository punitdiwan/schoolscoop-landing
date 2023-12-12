"use client";
import NavBar from "@/components/Header/NavBar";
import TopHeader from "@/components/Header/TopHeader";
import WhatsappForm from "@/components/whatsapp/WhatsappForm";
import React from "react";
import BlogImage from "./BlogImage";
import FeatureBlog from "./FeatureBlog";
import Footer from "@/components/Footer/Footer";

const Blog = () => {
  return (
    <>
      <div>
        <TopHeader />
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
              <BlogImage />
              <FeatureBlog />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
