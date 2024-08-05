import React, { useEffect, useState } from "react";
import Card3 from "./Card3";

const Section2one = () => {
  // const [data, setData] = useState([]);
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://cms.maitretech.com/edusparsh/items/home_provide?fields=*.*"
  //     );
  //     const jsonData = await response.json();
  //     setData(jsonData?.data || []);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

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
console.log("imagecard===>",)
  return (
    <>
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
