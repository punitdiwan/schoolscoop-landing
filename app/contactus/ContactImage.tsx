import React from "react";

const ContactImage = () => {
  return (
    <>
      <div>
        <div className=" relative text-center text-white">
          <img
            src="/imges/contact-banner-2.jpeg"
            className="h-[350px] w-full"
            alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
          />
          <div className="absolute text-center w-[80%] top-60 justify-items-center">
            {" "}
            <h1 className="md:text-[25px] lg:ml-[10%] font-bold text-center">
              Digitalising School Edusparsh is the best School software ERP in
              India
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactImage;
