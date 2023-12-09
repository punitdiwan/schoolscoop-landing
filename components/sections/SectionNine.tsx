import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import CardsNine from "../cardnine/CardsNine";
import { CampusManagement } from "../Data/CardNineData";
import { StudentManagement } from "../Data/Studentdata";
import { EmployeeManagement, EmployeeRoles } from "../Data/Employeedata";
import { ClassManagement } from "../Data/Classdata";
import { FeesManagement } from "../Data/Feesdata";
import { ExamManagement } from "../Data/Examdata";
import { TransportManagement } from "../Data/Transportdata";
import { TimeManagement } from "../Data/Timedata";
import { SubjectManagement } from "../Data/Subjectdata";
import { AttendanceManagement } from "../Data/Attendancedata";
import {StudentPromotion} from "../Data/Studentpromotiondata"



const SectionNine = () => {
  return (
    <>
      <div className="p-12">
        <div className="md:flex">
          <div className="">
            <div>
              <img
                src="/imges/attachment_23731787.jpeg"
                className="w-[150px] h-[100px]"
              />
            </div>
            <div className="mt-[50px]">
              <h2 className="text-[#999999] ">
                House # 36, T - Ward , Bairagarh, Bhopal, MP, India 462030
              </h2>
            </div>

            <div className="mt-[30px]">
              <h1 className="text-base font-bold">Sales</h1>
              <div className="flex mt-2">
                <div>
                  {" "}
                  <img
                    src="/imges/telephone.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">+91-989-354-0318</h6>
                </div>
              </div>

              <div className="flex mt-1">
                <div>
                  {" "}
                  <img
                    src="/imges/mail-black-envelope-symbol.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">info@maitretech.com</h6>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-base font-bold mt-2">Support & Help</h1>
              <div className="flex mt-2">
                <div>
                  {" "}
                  <img
                    src="/imges/telephone.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">+91-989-354-0318</h6>
                </div>
              </div>

              <div className="flex mt-1">
                <div>
                  {" "}
                  <img
                    src="/imges/mail-black-envelope-symbol.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">info@maitretech.com</h6>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-base font-bold mt-2">Become a Reseller</h1>
              <div className="flex mt-2">
                <div>
                  {" "}
                  <img
                    src="/imges/telephone.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">+91-989-354-0318</h6>
                </div>
              </div>

              <div className="flex mt-1">
                <div>
                  {" "}
                  <img
                    src="/imges/mail-black-envelope-symbol.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">info@maitretech.com</h6>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-base font-bold mt-2">Jobs & Recruitment</h1>

              <div className="flex mt-2">
                <div>
                  {" "}
                  <img
                    src="/imges/mail-black-envelope-symbol.png"
                    className="w-[16px] h-[16px] ml-4 mt-1"
                  />
                </div>
                <div>
                  <h6 className="text-[#999999] ml-1">info@maitretech.com</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="md:grid md:grid-cols-3 md:gap-6 ">
            <div>
              <CardsNine data={StudentManagement} />
            </div>
            <div>
              <CardsNine data={EmployeeManagement} />
              <CardsNine data={EmployeeRoles} />
            </div>
            <div>
              <CardsNine data={ClassManagement} />
              <CardsNine data={AttendanceManagement} />
            </div>
            <div>
              <CardsNine data={FeesManagement} />
            </div>
            <div>
              <CardsNine data={ExamManagement} />
              <CardsNine data={SubjectManagement} />
            </div>
            <div>
              <CardsNine data={TransportManagement} />
              <CardsNine data={StudentPromotion} />
            </div>
            <div>
              <CardsNine data={TimeManagement} />
            </div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionNine;
