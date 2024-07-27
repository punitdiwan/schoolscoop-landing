// import React, { useEffect, useState } from "react";
// import Card2 from "./section2card/page";
// import { FaSchool, FaHome } from "react-icons/fa";
// import { MdReviews } from "react-icons/md";
// import { GrGroup } from "react-icons/gr";
// import { TbReportAnalytics } from "react-icons/tb";
// import { GiReturnArrow } from "react-icons/gi";
// import { FcBusinessman } from "react-icons/fc";
// import Card3 from "./section2card/Card3";

// const Section2 = () => {

//   const [data, setData] = useState();
//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://cms.maitretech.com/edusparsh/items/home?fields=*.*"
//       );
//       const jsonData = await response.json();
//       const main = jsonData?.data[0];
//       setData(main.we_have);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   // console.log("para data====>", data);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="mt-12">
//         <div>
//           <h1
//             className="
//           xs:text-center xs:text-[#2c5aa0] xs:text-[24px] xs:font-bold
//           md:text-center md:text-[#2c5aa0] md:text-4xl md:font-bold"
//           >
//             Why EduSparsh School Management System
//           </h1>
//           <div className="w-[9rem] h-1 rounded-lg bg-[#ffb000] mx-auto"></div>
//           <h2
//             className="
//           xs:text-center xs:text-[#2c5aa0] xs:text-[14px] xs:font-bold
//           md:text-center  md:text-2xl md:font-bold md:mt-1 "
//           >
//             Is Most Prefered System In India ?
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 p-12">
//           <div>
//             <div className="text-4xl font-medium">We Have</div>
           
//             <div
//               className="
//            xs:text-[#2c5aa0] xs:text-[14px] xs:font-bold
//            md:text-[#2c5aa0] md:text-2xl md:font-bold md:mt-3 "
//             >
//               Lot Of Success Stories
//             </div>
//             <div className="mt-3 text-lg font-normal">
//             <div
//                     className="mx-auto mt-3 text-justify"
//                     dangerouslySetInnerHTML={{ __html: data }}
//                   />
                  
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 xs:grid-cols-1  gap-9">
//             <div className="">
//               <Card2
//                 title="Title 1"
//                 value="22+"
//                 description="Successful Years"
//                 imgsrc="ic_successful_years.svg"
//               />
//             </div>
//             <div>
//               <Card2
//                 title="Title 1"
//                 value="200+"
//                 description="Happy Clients"
//                 imgsrc="ic_happy_clients.svg"
//               />
//             </div>
//             <div>
//               <Card2
//                 title="Title 1"
//                 value="96%"
//                 description="Client Retention"
//                 imgsrc="ic_customer_satisfaction.svg"
//               />
//             </div>
//             <div>
//               <Card2
//                 title="Title 1"
//                 value="1500+"
//                 description="Reports"
//                 imgsrc="ic_reports.svg"
//               />
//             </div>
//             <div>
//               <Card2
//                 title="Title 1"
//                 value="2500+"
//                 description="Daily logins"
//                 imgsrc="ic_happy_clients.svg"
//               />
//             </div>
//             <div>
//               <Card2
//                 title="Title 1"
//                 value="20000+"
//                 description=" Trained"
//                 imgsrc="ic_training.svg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Section2;
"use client"
import React, { useEffect, useState } from "react";
import Card2 from "./section2card/page";
import { FaSchool, FaHome } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { FcBusinessman } from "react-icons/fc";
import Card3 from "./section2card/Card3";

const Section2 = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/home?fields=*.*"
      );
      const jsonData = await response.json();
      const main = jsonData?.data[0];
      setData(main.we_have || ""); // Default to empty string if data is missing
    } catch (error) {
      // setError("Error fetching data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="mt-12">
      <div>
        <h1 className="text-center text-[#2c5aa0] text-4xl font-bold">
          Why EduSparsh School Management System
        </h1>
        <div className="w-[9rem] h-1 rounded-lg bg-[#ffb000] mx-auto"></div>
        <h2 className="text-center text-[#2c5aa0] text-2xl font-bold mt-1">
          Is Most Preferred System In India?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-12">
        <div>
          <div className="text-4xl font-medium">We Have</div>
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
        <div className="grid md:grid-cols-2 gap-9">
          <Card2
            title="Title 1"
            value="22+"
            description="Successful Years"
            imgsrc="ic_successful_years.svg"
          />
          <Card2
            title="Title 2"
            value="200+"
            description="Happy Clients"
            imgsrc="ic_happy_clients.svg"
          />
          <Card2
            title="Title 3"
            value="96%"
            description="Client Retention"
            imgsrc="ic_customer_satisfaction.svg"
          />
          <Card2
            title="Title 4"
            value="1500+"
            description="Reports"
            imgsrc="ic_reports.svg"
          />
          <Card2
            title="Title 5"
            value="2500+"
            description="Daily logins"
            imgsrc="ic_happy_clients.svg"
          />
          <Card2
            title="Title 6"
            value="20000+"
            description="Trained"
            imgsrc="ic_training.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
