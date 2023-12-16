import React from "react";
import Card2 from "./section2card/page";
import { FaSchool, FaHome } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { FcBusinessman } from "react-icons/fc";
import Card3 from "./section2card/Card3";

const Section2 = () => {
  return (
    <>
      <div className="mt-12">
        <div>
          <h1
            className="
          xs:text-center xs:text-[#2c5aa0] xs:text-[24px] xs:font-bold
          md:text-center md:text-[#2c5aa0] md:text-4xl md:font-bold"
          >
            Why EduSparsh School Management System
          </h1>
          <div className="w-[9rem] h-1 rounded-lg bg-[#ffb000] mx-auto"></div>
          <h2
            className="
          xs:text-center xs:text-[#2c5aa0] xs:text-[14px] xs:font-bold
          md:text-center  md:text-2xl md:font-bold md:mt-1 "
          >
            Is Most Prefered System In India ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-12">
          <div>
            <div className="text-4xl font-medium">We Have</div>
           
            <div
              className="
           xs:text-[#2c5aa0] xs:text-[14px] xs:font-bold
           md:text-[#2c5aa0] md:text-2xl md:font-bold md:mt-3 "
            >
              Lot Of Success Stories
            </div>
            <div className="mt-3 text-lg font-normal">
              <p className="text-justify">
                EduSparsh School Management System software has redefined the
                education system functionalities with the help of the latest
                technologies and gained new hights with it's Extraordinary
                feature! This successful school management system uses
                cutting-edge technology and makes it user-friendly yet
                affordable! The product from the team of ultimate and 10+ years
                of expertise offers all the mandatory and complementary
                functionalities required by an educational institute! Our esteem
                1600+ global client base tells our successful stories! We
                believe in.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 xs:grid-cols-1  gap-9">
            <div>
              <Card2
                title="Title 1"
                value="22+"
                description="Successful Years"
                icon={FaSchool}
              />
            </div>
            <div>
              <Card2
                title="Title 1"
                value="1600+"
                description="Happy Clients"
                icon={FcBusinessman}
              />
            </div>
            <div>
              <Card2
                title="Title 1"
                value="96%"
                description="Client Retention"
                icon={GiReturnArrow}
              />
            </div>
            <div>
              <Card2
                title="Title 1"
                value="1500+"
                description="Reports"
                icon={TbReportAnalytics}
              />
            </div>
            <div>
              <Card2
                title="Title 1"
                value="2500+"
                description="Verified Reviews"
                icon={MdReviews}
              />
            </div>
            <div>
              <Card2
                title="Title 1"
                value="20000+"
                description=" Trained"
                icon={GrGroup}
              />
            </div>
          </div>
        </div>
      </div>

      

     
    </>
  );
};

export default Section2;
