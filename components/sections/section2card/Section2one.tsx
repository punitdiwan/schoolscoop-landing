import React, { useEffect, useState } from "react";
import Card3 from "./Card3";
import FlipCard from "../../Card/FlippingCard"

const Section2one = () => {
  const data1 = [
    {
      title: "Student Management System",
      imageUrl: "/educationcard1.webp"
    },
    {
      title: "Fees & Finance Management",
      imageUrl: "/educationcard2.webp"
    },
    {
      title: "Student Diary Management System",
      imageUrl: "/educationcard3.webp"
    },
    {
      title: "Transport Management System",
      imageUrl: "/educationcard4.webp"
    },
    {
      title: "Exam Management System",
      imageUrl: "/educationcard5.webp"
    },
    {
      title: "Student Promotion System",
      imageUrl: "/educationcard6.webp"
    },
    {
      title: "Time Table Management System",
      imageUrl: "/educationcard7.webp"
    },
    {
      title: "Administration & HR Management System",
      imageUrl: "/educationcard8.webp"
    },
  ];


  const homecardData = {
  image: "/educationcard1.webp",
  title: "Student Management System",
  features: [
    "Student Admission",
    "View All Students",
    "Create Student Category",
    "Student Roll Number",
    "Delete Student",
    "Archive Student",
    "Student Character Certificate",
  ],
  
};

// console.log("imagecard===>",)
  return (
    <>
     <div className="flex justify-center items-center p-4">
      <FlipCard
        image={homecardData.image}
        title={homecardData.title}
        features={homecardData.features}
      />
    </div>
      <div className="p-12">
        <div className="homecard3">
          {data1.map((card: any, index: any) => (
            <div key={index}>
              <Card3
                imageUrl={card.imageUrl}
                title={card.title}
                bgColor="from-green-600 to-green-900"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section2one;
