import Link from "next/link";
import React from "react";


const SupportImage = () => {
  return (
    <>
      <div>
        <div className=" relative text-center text-white">
          <img src="/imges/student_parentsupport/edumarshal-support.jpg" className="xs:h-[450px]" />
          <div className="absolute 
          xs:top-[30%] xs:left-[5%]
          md:top-[30%] md:left-[25%] ">
            {" "}
            <h1 className="text-[40px] font-bold">EduSparsh Help & Support</h1>
            <p className=" ">For Students & Parents </p>
            <p className=" ">
              Looking for support for school staff & administrators?{" "}
              <Link href="/">Click Here</Link>
              {/* hey */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportImage;
