"use client";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Header/NavBar";
import React, { useEffect, useState } from "react";
import StoriesOne from "../StoriesOne";

// Adjusting the component name to start with uppercase for convention
const ViewBlogs = ({ params }: { params: { view_blog: string,story:any } }) => {
  const [data, setData] = useState<any[]>([]);
  const [filteredEntries, setFilteredEntries] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/stories?fields=*.*"
      );
      const jsonData = await response.json();
      setData(jsonData?.data || []);
      // console.log(params?.story);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (params.story && data.length > 0) {
      // const formattedStory = params.view_blog.replace(/ /g, "-").toLowerCase();
      const filtered = data.filter(
        (entry) =>
          entry.institute.replace(/ /g, "-").toLowerCase() === params.story
      );
      setFilteredEntries(filtered);
    }
  }, [params.story, data]);

  console.log("fill", filteredEntries);
  return (
    <div>
      <NavBar/>
      {/* <StoriesOne/> */}
      <div className="w-[80%] mx-auto mb-10">
         {filteredEntries.map((entry, index) => (
            <div key={index} className=" flex flex-col items-center justify-center mx-auto">
              {entry.image.data.full_url.slice(-3) === "mp4" ? (
                <video className="w-80 h-80 ">
                  <source src={entry.image.data.full_url} type="video/mp4" />{" "}
                </video>
              ) : (
                <img
                  alt="image"
                  className="w-80 h-80  "
                  src={entry.image.data.full_url}
                />
              )}
              <div
                        className="mx-auto mt-3 "
                        dangerouslySetInnerHTML={{ __html: entry.story }}
                      />
              <h1 className="font-bold">~ {entry.institute}</h1>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default ViewBlogs;
