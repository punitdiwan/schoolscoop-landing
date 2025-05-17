import React from "react";
import { IoMdPlayCircle } from "react-icons/io";
import StudentManagementModuleTwo from "./studentManagementModuleTwo";
import Link from "next/link";
// import ModuleContent from '../../../components/Modules/ModuleContent';
import BenefitCard from '../../../components/Modules/BenefitCard';

const data = [
  {
    imgSrc: '/student.jpg',
    title: 'Student Management System',
    heading: 'Human Resource',
    listItems: [
      "Manage employee from recruitment to retirement",
      "Store basic, personal, job, statutory & communication details",
      "Bulk data upload facility",
      "Inbuilt employee ID card",
      "Comprehensive employee report",
      "Custom employee search",
    ],
  },
  {
    imgSrc: '/student.jpg',
    title: 'Student Management System',
    heading: 'Human Resource',
    listItems: [
      "Manage employee from recruitment to retirement",
      "Store basic, personal, job, statutory & communication details",
      "Bulk data upload facility",
      "Inbuilt employee ID card",
      "Comprehensive employee report",
      "Custom employee search",
    ],
  },
  {
    imgSrc: '/student.jpg',
    title: 'Student Management System',
    heading: 'Human Resource',
    listItems: [
      "Manage employee from recruitment to retirement",
      "Store basic, personal, job, statutory & communication details",
      "Bulk data upload facility",
      "Inbuilt employee ID card",
      "Comprehensive employee report",
      "Custom employee search",
    ],
  },
  {
    imgSrc: '/student.jpg',
    title: 'Student Management System',
    heading: 'Human Resource',
    listItems: [
      "Manage employee from recruitment to retirement",
      "Store basic, personal, job, statutory & communication details",
      "Bulk data upload facility",
      "Inbuilt employee ID card",
      "Comprehensive employee report",
      "Custom employee search",
    ],
  },
];

const StudentManagementModule = () => {
  return (
    <> 

<div className="flex flex-col lg:flex-row items-center bg-[#ffece0] px-4 py-8 lg:px-12 lg:py-16 gap-8">
  {/* Image Section - Left on large screens, smaller size */}
  <div className="w-full lg:w-5/12 flex justify-center">
    <img
      src="/module-bg.webp"
      alt="Student Management System"
      className="w-3/4 md:w-2/3 lg:w-full h-auto"
    />
  </div>

  {/* Text Section */}
  <div className="w-full lg:w-7/12 space-y-4 text-center lg:text-left">
    <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
      Student Management System
    </h1>
    <h2 className="text-lg md:text-2xl font-semibold text-gray-700">
      What is a Student Management System?
    </h2>
    <p className="text-gray-700 leading-relaxed">
      A Student Management System (SMS) is a digital platform that helps educational institutions efficiently manage and organize student-related data and activities. 
      It centralizes information like admissions, attendance, grades, timetables, performance reports, and communication with parents.
    </p>
    <p className="text-gray-700 leading-relaxed">
      This system streamlines administrative tasks, reduces paperwork, improves accuracy, and allows teachers and staff to focus more on student development.
      It also enhances communication between schools, students, and parents through online portals and mobile apps.
    </p>
  </div>
</div>

{/* why do we need  */}
<div className="flex flex-col lg:flex-row-reverse items-center px-4 py-8 lg:px-12 lg:py-16 gap-8">
  {/* Image Section - Right on large screens */}
  <div className="w-full lg:w-5/12 flex justify-center">
    <img
      src="/module-bg2.png"
      alt="Student Management System"
      className="w-3/4 md:w-2/3 lg:w-full h-auto"
    />
  </div>

  {/* Text Section */}
  <div className="w-full lg:w-7/12 space-y-4 text-center lg:text-left">
    <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
      Student Management System
    </h1>
    <h2 className="text-lg md:text-2xl font-semibold text-gray-700">
      Why Do We Need Admission Management Software?
    </h2>
    <p className="text-gray-700 leading-relaxed">
      Admission Management Software is essential for educational institutions
      to modernize and streamline their admission processes. This software automates 
      tasks like application submission, document verification, and fee processing, 
      reducing the burden on administrative staff and minimizing errors. With centralized 
      data management, it provides a unified platform for all admission-related activities.
      The software ensures a smoother experience for both applicants and administrators, 
      promoting efficiency and transparency. Real-time updates and automated communication
      features contribute to timely decision-making. Overall, Admission Management Software 
      is a crucial tool in enhancing the effectiveness of admission procedures, helping 
      educational institutions stay organized, improve communication, and provide a positive
      experience for prospective students.
    </p>
  </div>
</div>





      {/* old */}
      <div className="">
        <div className="p-[10px]">
          <div className="p-16 pt-5">
            <div className="grid  md:grid-cols-2 gap-32 ">
              <Link href="/modules/fee-management" className="w-[80%]">
                <div className="flex justify-center">
                  <img
                    src="/imges/studentmanagement/1.png"
                    alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                  />
                </div>
                <div>
                  {" "}
                  <h3 className="text-[20px] text-[#DD9933] font-semibold text-center">
                    Student Fee Management
                  </h3>
                </div>

                <div className="text-center text-[14px] text-[#999999] ">
                  Fully customize school fee ERP, collection parameters to suit
                  your needs. Keep track of student fees as they are Enable
                  online payments to further automate the collection process.
                  Send notifications before fees are due and to defaulters.
                </div>
                <div>
                  <div className=" text-[#DD9933] text-center flex justify-center">
                    <IoMdPlayCircle className="mt-1" />
                    See How It Works
                  </div>
                </div>
              </Link>
              {/* YHA P GAP NHI THA ADD KIYA */}
              <div className="grid grid-cols-2 gap-10">
                <div className="">
                  <div className="flex justify-center">
                    <img
                      src="/imges/studentmanagement/solution-64x64.png"
                      alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
                  </div>
                  <div>
                    {" "}
                    <h6 className="text-[20px] text-[#DD9933] font-semibold text-center">
                      Enquiry Management
                    </h6>
                  </div>

                  <div className="text-center text-[14px] text-[#999999]">
                    Centrally store all inquiries from all sources prior to
                    starting selection process.
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-center">
                    <img
                      src="/imges/studentmanagement/algorithm-64x64.png"
                      alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
                  </div>
                  <div>
                    {" "}
                    <h3 className="text-[20px] text-[#DD9933] font-semibold text-center">
                      Custom Form Builder
                    </h3>
                  </div>

                  <div className="text-center text-[14px] text-[#999999]">
                    Create data entry points necessary in student profiles for
                    your admission process.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 xs:grid-cols-2 gap-10 mt-16">
              <div>
                {" "}
                <div className="">
                  <div className="flex justify-center">
                    <img
                      src="/imges/studentmanagement/interview-64x64.png"
                      alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
                  </div>
                  <div>
                    {" "}
                    <h5 className="text-[20px] text-[#DD9933] font-semibold text-center">
                      Counselor & Interviews
                    </h5>
                  </div>

                  <div className="text-center text-[14px] text-[#999999]">
                    Assign counselors to each case and add their notes to file.
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div className="mr-6">
                  <div className="flex justify-center">
                    <img
                      src="/imges/studentmanagement/sd-card-64x64.png"
                      alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
                  </div>
                  <div>
                    {" "}
                    <h5 className="text-[20px] text-[#DD9933] font-semibold text-center">
                      Bulk Upload Students
                    </h5>
                  </div>

                  <div className="text-center text-[14px] text-[#999999]">
                    Upload student profiles in bulk and instantly add them to
                    the system if required.
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div className="ml-6">
                  <div className="flex justify-center">
                    <img
                      src="/imges/studentmanagement/profile-64x64.png"
                      alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
                  </div>
                  <div>
                    {" "}
                    <h5 className="text-[20px] text-[#DD9933] font-semibold text-center">
                      Upload Student Documents
                    </h5>
                  </div>

                  <div className="text-center text-[14px] text-[#999999]">
                    Upload & store student documents such as birth certificates
                    securely with their applications.
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div className=" gap-32">
                  <div className="flex justify-center">
                    <img
                      src="/imges/studentmanagement/id-card-1-64x64.png"
                      alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
                  </div>
                  <div>
                    {" "}
                    <h6 className="text-[20px] text-[#DD9933] font-semibold text-center">
                      Auto-generate ID Cards & Passes
                    </h6>
                  </div>

                  <div className="text-center text-[14px] text-[#999999]">
                    Post-admission documents for selected candidates auto
                    generated.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-[32px]">
            <div className="border-t-1 border-r-1 border-b-1 border-l-1 border-gray-500"></div>

            {/* //===========================second =========================================== */}

            <div className="grid md:grid-cols-2 gap-32 p-12 ">
              <div className="">
                <div className="flex justify-center">
                  <img
                    src="/imges/studentmanagement/feedback-64x64.png"
                    alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                  />
                </div>
                <div>
                  {" "}
                  <h3 className="text-[20px] text-[#DD9933] font-semibold text-center">
                    Student Academic Assessment
                  </h3>
                </div>

                <div className="text-center text-[14px] text-[#999999]">
                  From examinations to assignments to daily classroom
                  participation, manage and track student performance. Use
                  intuitive visuals to identify lacking performance and help
                  students achieve their true potential.
                </div>
                <div>
                  <div className=" text-[#DD9933] text-center flex justify-center">
                    <IoMdPlayCircle className="mt-1" />
                    See How It Works
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-16">
                <div className="">
                  <div className="flex justify-center">
                    <img
                      src="/imges/studentmanagement/grading-system-support-1-64x64.png"
                      alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
                  </div>
                  <div>
                    {" "}
                    <h2 className="text-[20px] text-[#DD9933] font-semibold text-center">
                      Multiple Grading Systems Supported
                    </h2>
                  </div>

                  <div className="text-center text-[14px] text-[#999999]">
                    Use CCE, ICSE, CWA or GPA. Instant grade conversions for
                    report submissions to education boards.
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-center">
                    <img
                      src="/imges/studentmanagement/evaluation-64x64.png"
                      alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
                  </div>
                  <div>
                    {" "}
                    <h3 className="text-[20px] text-[#DD9933] font-semibold text-center">
                      Customize Evaluation Criteria
                    </h3>
                  </div>

                  <div className="text-center text-[14px] text-[#999999]">
                    Define weightage of each curricular & extra curricular
                    component to auto-generate final grade.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 xs:grid-cols-2 gap-6 mt-12">
              <div>
                {" "}
                <div className="">
                  <div className="flex justify-center">
                    <img
                      src="/imges/studentmanagement/exam-64x64.png"
                      alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
                  </div>
                  <div>
                    {" "}
                    <h5 className="text-[20px] text-[#DD9933] font-semibold text-center">
                      Manage Assignments & Homework
                    </h5>
                  </div>

                  <div className="text-center text-[14px] text-[#999999]">
                    Easily distribute and grade assignments. Allow students to
                    access resources via student portal.
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div className="">
                  <div className="flex justify-center">
                    <img
                      src="/imges/studentmanagement/answer-64x64.png"
                      alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
                  </div>
                  <div>
                    {" "}
                    <h3 className="text-[20px] text-[#DD9933] font-semibold text-center">
                      Examination Management
                    </h3>
                  </div>

                  <div className="text-center text-[14px] text-[#999999]">
                    Manage exams & grades with ease.
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div className="">
                  <div className="flex justify-center">
                    <img
                      src="/imges/studentmanagement/statistics-1-64x64.png"
                      alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
                  </div>
                  <div>
                    {" "}
                    <h3 className="text-[20px] text-[#DD9933] font-semibold text-center">
                      Student Performance Reports
                    </h3>
                  </div>

                  <div className="text-center text-[14px] text-[#999999]">
                    Intuitive color-coded charts to quickly understand student,
                    class or batch performance.
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div className="">
                  <div className="flex justify-center">
                    <img
                      src="/imges/studentmanagement/custom-print-ready-report-cards-64x64.png"
                      alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
                  </div>
                  <div>
                    {" "}
                    <h5 className="text-[20px] text-[#DD9933] font-semibold text-center">
                      Custom Printable Report Cards
                    </h5>
                  </div>

                  <div className="text-center text-[14px] text-[#999999]">
                    One-click print-ready final & term report cards. Auto-upload
                    to student & parent portal.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-[50px]">
            <div className="border-t-1 border-r-1 border-b-1 border-l-1 border-gray-500"></div>
          </div>

          {/* ///=================================modulesecond====================== */}

          {/* <StudentManagementModuleTwo /> */}
        </div>
      </div>
    </>
  );
};

export default StudentManagementModule;
