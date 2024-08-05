import React from "react";

const TransportImage = () => {
  return (
    <>
      <div>
        <div className=" relative text-center text-white">
          <img
            src="/imges/transpot_management/school-bus-children.jpg"
            className="xs:h-[650px] md:w-[1380px]"
            alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
          />
          <div
            className="absolute 
          xs:top-[30%] xs:left-[5%]
          md:top-[10%] md:left-[1%] "
          >
            {" "}
            <h3 className="text-[40px] font-bold ">
              Transport Management System
            </h3>
            <p className=" ">
              Manage student life cycle from pre-admissions to graduation.
              Improve accuracy of your student data, and ensure ready
              availability of data to the right staff, all the while being
              absolutely certain that your student records are absolutely
              secure. Allow teachers to quickly identify a student's problem
              areas and provide them with necessary guidance to improve.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransportImage;
