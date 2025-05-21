"use client";
import React, { useEffect, useState } from "react";
import Card2 from "./section2card/page";
import Card3 from "./section2card/Card3";

// Icons (optional for future use, not currently used here)
import { FaSchool, FaHome } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { FcBusinessman } from "react-icons/fc";

const Section2 = () => {
  // State to manage fetched HTML content
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from external CMS
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/home?fields=*.*"
      );
      const jsonData = await response.json();
      const main = jsonData?.data[0];
      setData(main?.we_have || "");
    } catch (error) {
      console.error("Error fetching data:", error);
      // Uncomment if you want to display error in UI
      // setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  // Trigger fetch on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Return loading or error state if applicable
  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  // Card content array for mapping
  const cardData = [
    {
      title: "Title 1",
      value: "12+",
      description: "Successful Years",
      imgsrc: "ic_successful_years.svg",
    },
    {
      title: "Title 2",
      value: "200+",
      description: "Happy Clients",
      imgsrc: "ic_happy_clients.svg",
    },
    {
      title: "Title 3",
      value: "96%",
      description: "Client Retention",
      imgsrc: "ic_customer_satisfaction.svg",
    },
    {
      title: "Title 4",
      value: "1500+",
      description: "Reports",
      imgsrc: "ic_reports.svg",
    },
    {
      title: "Title 5",
      value: "2500+",
      description: "Daily logins",
      imgsrc: "ic_happy_clients.svg",
    },
    {
      title: "Title 6",
      value: "20000+",
      description: "Trained",
      imgsrc: "ic_training.svg",
    },
  ];

  return (
    <div className="mt-12">
      {/* Section Header */}
      <div>
        <h1 className="text-center text-[#2c5aa0] text-4xl font-bold">
          Why EduSparsh School Management System
        </h1>
        <div className="w-[9rem] h-1 rounded-lg bg-[#ffb000] mx-auto"></div>
        <h2 className="text-center text-[#2c5aa0] text-2xl font-bold mt-1">
          Is Most Preferred System In India?
        </h2>
      </div>

      {/* Section Content */}
      <div className="grid md:grid-cols-2 gap-8 p-12">
        {/* Left column: Text content from CMS */}
        <div>
          <div className="text-4xl font-medium text-center">We Have</div>
          <div className="text-[#2c5aa0] text-2xl font-bold mt-3">
            Lot Of Success Stories
          </div>
          <div className="mt-3 text-lg font-normal">
            <div
              className="mx-auto mt-3 text-justify"
              dangerouslySetInnerHTML={{ __html: data }}
            />
          </div>
        </div>

        {/* Right column: Dynamic cards */}
        <div className="grid md:grid-cols-2 gap-9">
          {cardData.map((card, index) => (
            <Card2
              key={index}
              title={card.title}
              value={card.value}
              description={card.description}
              imgsrc={card.imgsrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
