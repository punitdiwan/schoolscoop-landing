import React, { useEffect, useState } from "react";
import Card3 from "./Card3";

const Section2one = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/home_provide?fields=*.*"
      );
      const jsonData = await response.json();
      setData(jsonData?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // console.log("Card data====>", data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="p-12">
        <div className="homecard3">
          
          {/* <div>
            {" "}
            <Card3
              imageUrl="/analytics-reports-schools-245x175.png"
              title="Time Table Management System"
              bgColor="from-green-600 to-green-900"
            />
          </div>  */}
          {data.map((card: any, index: any) => (
            <div key={index}>
              <Card3
                imageUrl={card.image.data.full_url}
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

// import React from 'react'
// import Card3 from './Card3'

// const Section2one = () => {
//   return (
//     <>
//      <div>
//         <div>
//   <div
//     className="
//     text-center xs:text-[14px] xs:font-bold
//     md:text-2xl md:font-bold md:mt-3 "
//   >
//     We Provide{" "}
//   </div>
//   <div
//     className="
//   xs:text-center xs:text-[#2c5aa0] xs:text-[24px] xs:font-bold
//   md:text-center md:text-[#2c5aa0] md:text-4xl md:font-bold mt-3"
//   >
//     Integrated School Management Software
//   </div>
//   <div className="border-2 text-white bg-gradient-to-r from-green-600 to-green-900  mt-6">
//     <p className="text-lg font-normal ">
//       EduSparsh software is a customized school management software that
//       offers end-to-end solutions for every phase of school management
//       like admissions,academic management ,staffs management ,
//       attendance, it is a one-stop solutions platform that integrates
//       various features like SMS, Online portal e-exam, mobile app, etc
//       Let our high-end product empower your educational institute in
//       delivering new ways of education by taking care of administrative
//       tasks!
//     </p>
//   </div>
// </div>

//         <div className="">
//           <div className="grid md:grid-cols-4 xs:grid-cols-2  items-center place-content-center">
//             <div>
//               {" "}
// <Card3
//   imageUrl="/imges/campus-management-system-223x177.png"
//   title="Student Management System"
//   bgColor="from-green-600 to-green-900"
// />
//             </div>
//             <div>
// <Card3
//   imageUrl="/imges/school-administration-management-268x177.png"
//   title="Administration & HR Management System"
//   bgColor="from-green-600 to-green-900"
// />
//             </div>
//             <div>
// <Card3
//   imageUrl="/school-finance-fees-management-213x177.png"
//   title="Fees & Finance Management"
//   bgColor="from-green-600 to-green-900"
// />
//             </div>
//             <div>
// <Card3
//   imageUrl="/e-learning-1-e1586458541493-213x177.png"
//   title="Student Diary Management System"
//   bgColor="from-green-600 to-green-900"
// />
//             </div>
//             <div>
// <Card3
//   imageUrl="/g52728-213x177.png"
//   title="Transport Management System"
//   bgColor="from-green-600 to-green-900"
// />
//             </div>
//             <div>
// <Card3
//   imageUrl="/student-management-system-238x177.png"
//   title="Exam Management System"
//   bgColor="from-green-600 to-green-900"
// />
//             </div>
//             <div>
// <Card3
//   imageUrl="/student-portal-230x177.png"
//   title="Student Promotion System"
//   bgColor="from-green-600 to-green-900"
// />
//             </div>
//             <div>
// <Card3
//   imageUrl="/analytics-reports-schools-245x175.png"
//   title="Time Table Management System"
//   bgColor="from-green-600 to-green-900"
// />
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Section2one
