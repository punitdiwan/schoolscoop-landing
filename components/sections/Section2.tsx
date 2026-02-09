"use client";
import React, { useState } from "react";
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
    // Hardcoded CMS response (was fetched previously)
    const hardcodedResponse = {
    "data": [
      {
      "id": 1,
      "status": "published",
      "owner": { "id": 1 },
      "created_on": "2024-07-27T07:26:03+00:00",
      "we_have": "<p>EduSparsh School Management ERP Solution, <strong>developed by Maitretech Solution</strong>, has revolutionized how educational institutions operate by integrating the latest technologies to streamline and enhance school management processes. With its comprehensive and innovative features, EduSparsh has reached new heights in delivering efficiency and productivity within the education sector. This powerful ERP solution utilizes cutting-edge technology to ensure robust and secure data maagement solution with indus standard guidlines. It is also user-friendly and cost-effective for institutions of all sizes.&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp; &nbsp; &nbsp; &nbsp; With a proud and growing client base of over 200+ esteemed institutions across the globe, our success is reflected in their continued trust and satisfaction. At EduSparsh, we believe in transforming education through technology, and we are committed to helping schools achieve operational excellence and academic success.</p>"
      }
    ],
    "public": true
    };

    const initialWeHave = hardcodedResponse?.data?.[0]?.we_have || "";
    const [data] = useState(initialWeHave);

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
          EduSparsh from Maitretech Solution!
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
