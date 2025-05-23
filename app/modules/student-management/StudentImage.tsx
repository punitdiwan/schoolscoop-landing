import { Input } from "@nextui-org/react";
import React from "react";

const StudentImage = () => {
  return (
    <>
      <div>
        <div className=" relative text-center text-white">
          <img
            src="/sliderimages/testing/test11.png"
            className="h-[450px] w-full"
            alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
          />
          <div
            className="absolute 
          xs:top-[30%] xs:left-[5%]
          md:top-[30%] md:left-[1%] "
          >
            {" "}
            <h3 className="text-[40px] font-bold">Student Management System</h3>
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

export default StudentImage;
