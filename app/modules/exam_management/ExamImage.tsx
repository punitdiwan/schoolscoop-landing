import React from "react";

const ExamImage = () => {
  return (
    <>
      <div>
        <div className=" relative text-center text-white">
          <img
            src="/imges/exam_management/campus-management-system.jpg"
            className="xs:h-[650px]"
            alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
          />
          <div
            className="absolute 
          xs:top-[30%] xs:left-[5%]
          md:top-[30%] md:left-[1%] "
          >
            <h1 className="text-[40px] font-bold">Exam Management System</h1>
            <p className="text-justify mx-auto ">
              A comprehensive set of features that allows your teachers to spend
              more time on student progress and teaching, allows parents to be
              more involved in their child's education, ensures improved
              resource availability for your students, enables your
              administrative staff to work smarter, and makes it easier for
              decision makers to find solutions to problems faster. Simply put,
              school management ERP with one dashboard with everything you need
              to manage your institute.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamImage;
