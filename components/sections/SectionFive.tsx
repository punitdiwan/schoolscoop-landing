import React from "react";
import Module from "../Modules/Module";
// import Campusdata from "../Data/Timedata"
import StudentManagementdata from "../Data/StudentManagementdata"


const data = {
  image: '/imges/e-learning-1-e1586458541493-213x177.png',
  title: 'Integrated eLearning System',
  items: [
    { icon: '/imges/Managed-Services-e1586459006763-50x50.png', title: 'Managed Services to onboard Content' },
    { icon: '/imges/Web-Conferencing-e1586459129120-50x50.png', title: 'Integrated Web Conferencing tool to conduct online classes' },
    { icon: '/imges/automated-evaluation-e1586459245972-50x50.png', title: 'Assessments and automated evaluation' },
    { icon: '/imges/Parent-login-e1586459321133-50x50.png', title: 'Teacher and Student/Parent login' },
    { icon: '/imges/track-student-Progress-e1586459387257-50x50.png', title: 'Online course content to track student Progress' },
   
  ],
};
const AdministrationHrManagement = {
  image: '/imges/e-learning-1-e1586458541493-213x177.png',
  title: 'Administration And HR Management',
  items: [
    { icon: '/imges/Managed-Services-e1586459006763-50x50.png', title: 'Managed Services to onboard Content' },
    { icon: '/imges/Web-Conferencing-e1586459129120-50x50.png', title: 'Integrated Web Conferencing tool to conduct online classes' },
    { icon: '/imges/automated-evaluation-e1586459245972-50x50.png', title: 'Assessments and automated evaluation' },
    { icon: '/imges/Parent-login-e1586459321133-50x50.png', title: 'Teacher and Student/Parent login' },
    { icon: '/imges/track-student-Progress-e1586459387257-50x50.png', title: 'Online course content to track student Progress' },
   
  ],
};




const SectionFive = () => {
  
  return (
    <>
      <div>
        <div className="mt-5">
          <h1 className="xs:text-center xs:text-[#2c5aa0] xs:text-[24px] xs:font-extrabold
          md:text-center md:text-[#2c5aa0] md:text-4xl md:font-extrabold
          ">
            
            EduSparsh ERP With 45+ Modules To Help You Manage{" "}
          </h1>
          <h2 className="
          xs:text-center xs:text-[#2c5aa0] xs:text-[14px] xs:mt-4 
          md:text-center md:text-[#2c5aa0] md:text-3xl mt-4 ">
            Classrooms, Services & Facilities for All Your Campuses
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 p-10">
         

          <div><Module data={AdministrationHrManagement} /></div>
          <div><Module data={StudentManagementdata} /></div>
          <div><Module data={StudentManagementdata} /></div>
          <div><Module data={StudentManagementdata} /></div>
          <div><Module data={StudentManagementdata} /></div>
          <div><Module data={StudentManagementdata} /></div>
          <div><Module data={StudentManagementdata} /></div>
          <div><Module data={StudentManagementdata} /></div>
        </div>
      </div>
    </>
  );
};

export default SectionFive;
