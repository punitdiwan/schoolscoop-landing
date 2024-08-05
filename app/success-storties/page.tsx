"use client";
import NavBar from "@/components/Header/NavBar";
// import TopHeader from "@/components/Header/TopHeader";
import React, { useEffect, useState } from "react";
import StoriesOne from "./StoriesOne";

import VideoWithCard from "./Cards";
import SectionNine from "@/components/sections/SectionNine";
import Footer from "@/components/Footer/Footer";
import WhatsappForm from "@/components/whatsapp/WhatsappForm";
import TestimonialCard from "./TestimonialCard";
import Request from "@/components/Request";
import Link from "next/link";

const SuccessStories = () => {
  const [data, setData] = useState<any>();
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/stories?fields=*.*"
      );
      const jsonData = await response.json();
      const main = jsonData;
      setData(jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // console.log("para data====>", data);

  useEffect(() => {
    fetchData();
  }, []);

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
              {/* <TestimonialCard /> */}
              <h1 className="text-center uppercase m-4 text-2xl font-bold">
                Stories
              </h1>
              <div className="grid grid-cols-2 gap-4 px-2 mx-auto mt-2 md:grid-cols-4">
                {data?.map((item: any) => (
                  <Link
                    href={`/success-storties/${item.institute
                      .replace(/ /g, "-")
                      .toLowerCase()}`}
                    className=" flex flex-col border items-center p-3"
                  >
                    {item.image.data.full_url.slice(-3) === "mp4" ? (
                      <video className="w-[110px] h-[110px] ">
                        <source
                          src={item.image.data.full_url}
                          type="video/mp4"
                        />{" "}
                      </video>
                    ) : (
                      <img
                        alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                        className="w-[110px] h-[110px]  "
                        src={item.image.data.full_url}
                      />
                    )}
                    <div className="mt-5">
                      <div
                        className="mx-auto mt-3 "
                        dangerouslySetInnerHTML={{ __html: item.story }}
                      />
                      <h2 className="text-[#181111] font-bold">
                        – {item.institute}
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>
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
