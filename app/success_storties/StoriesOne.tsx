import React from "react";

const StoriesOne = () => {
  return (
    <>
      <div>
        <div className=" relative text-center text-white">
          <img
            src="/imges/exam_management/campus-management-system.jpg"
            className="xs:h-[450px] md:h-[550px] w-full"
            alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
          />
          <div
            className="absolute w-[90%] mx-auto
          xs:top-[15%] xs:left-[2%]
          md:top-[45%] md:left-[1%] "
          >
            {" "}
            <h1 className="text-[40px] font-bold">
              Client Testimonials & Case Studies
            </h1>
            <p className=" ">
              Edumarshal has enabled digital transformation at hundreds of
              educational institutes, big and small, helping them deliver a
              superior education experience to their students and tackle
              management hurdles impeding their growth in the modern education
              landscape.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoriesOne;
