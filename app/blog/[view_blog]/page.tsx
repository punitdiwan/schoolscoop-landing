"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/Header/NavBar";
import WhatsappForm from "@/components/whatsapp/WhatsappForm";
import BlogTitle from "./BlogTitle";
import Footer from "@/components/Footer/Footer";

const ViewBlogs = ({ params }: { params: { view_blog: string } }) => {
  const [data, setData] = useState<any[]>([]);
  const [filteredEntries, setFilteredEntries] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cms.maitretech.com/edusparsh/items/blog?fields=*.*"
        );
        const jsonData = await response.json();
        setData(jsonData?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (params.view_blog && data.length > 0) {
      const filtered = data.filter((entry) =>
        entry.blog_title
          ?.replace(/[ :]+/g, "-")
          ?.replace(/[^a-z0-9-]/g, "")
          ?.toLowerCase() === params.view_blog
      );
      setFilteredEntries(filtered);
    }
  }, [params.view_blog, data]);

  return (
    <>
      <NavBar />

      <div className="px-4 sm:px-6 md:px-12 py-8">
        {/* WhatsApp Form */}
        <div className="relative">
          <WhatsappForm />

          {/* Floating Demo Button */}
          <div className="fixed z-50 right-3 top-40 md:top-52">
            <img src="/imges/Demo-Button-v.gif" alt="Demo Button" />
          </div>
        </div>

       
        {/* <BlogTitle /> */}

        <div className="max-w-4xl mx-auto mt-10 space-y-16">
          {filteredEntries.map((entry) => (
            <div key={entry.id} className="bg-white rounded-lg shadow-md p-6">
              {/* Blog Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2c5aa0]">
                {entry.blog_title}
              </h1>

              {/* Author Info */}
              <div className="flex items-center gap-3 mt-6 justify-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/profile-circle-icon.png"
                  alt="Author Profile"
                />
                <div className="text-sm text-gray-600">
                  <p>
                    Written by <span className="font-semibold text-black">Edusparsh</span>
                  </p>
                  <p>{entry?.modified_on?.slice(0, 10)}</p>
                </div>
              </div>

              {/* Blog Image */}
              {entry?.blog_image?.data?.full_url && (
                <div className="mt-6">
                  <img
                    src={entry.blog_image.data.full_url.replace("http://", "https://")}
                    alt="Blog"
                    className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow"
                  />
                </div>
              )}

              {/* Blog Content */}
              <div
                className="prose prose-base md:prose-lg lg:prose-xl mt-6 max-w-none text-justify text-gray-800"
                dangerouslySetInnerHTML={{ __html: entry.blog_message }}
              />
            </div>
          ))}
        </div>

        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ViewBlogs;
