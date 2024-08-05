import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

const TransportModule = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-7 p-12 ">
        <div className="">
          <div className="flex justify-center">
            <img
              src="/imges/transpot_management/school-bus-64x64.png"
              alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
            />
          </div>
          <div>
            {" "}
            <h5 className="text-[20px] text-[#DD9933] font-semibold text-center">
              Transport & Fleet Management
            </h5>
          </div>

          <div className="text-center text-[14px] text-[#999999]">
            Tackle the challenges of transport & fleet management with ease.
            Build your routes, define stops, and create fares for each stop.
            Upon adding pick-up stop for a student the appropriate fare is added
            to their fee automatically. Easily manage your fleet of vehicles by
            assigning drivers and vehicles to each routes. A key feature of the
            school management ERP module is the ability to track real-time
            location of each vehicle on the map as well as store history of all
            stops made and notify the school administrators of over-speeding or
            deviations from prescribed route. Via the parent portal, the parents
            can track the real-time status of the vehicles, but only for their
            child’s route & for limited time before the drop.
          </div>
          <div>
            <div className=" text-[#DD9933] text-center flex justify-center">
              <IoMdPlayCircle className="mt-1" />
              See How It Works
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="">
            <div className="flex justify-center">
              <img
                src="/imges/transpot_management/gps-64x64.png"
                alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              />
            </div>
            <div>
              {" "}
              <h5 className="text-[20px] text-[#DD9933] font-semibold text-center">
                Stops & Routes
              </h5>
            </div>

            <div className="text-center text-[14px] text-[#999999]">
              Design as many routes as you need with as many stops as you want.
              Designate vehicles & drivers for each route.
            </div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <img
                src="/imges/transpot_management/location-64x64.png"
                alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              />
            </div>
            <div>
              {" "}
              <h3 className="text-[20px] text-[#DD9933] font-semibold text-center">
                Live Tracking on Map
              </h3>
            </div>

            <div className="text-center text-[14px] text-[#999999]">
              Real-time tracking of vehicles. Alerts of over-speeding & route
              deviation. Allow parents to track their child’s bus via app.
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              <img
                src="/imges/transpot_management/field-64x64.png"
                alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              />
            </div>
            <div>
              {" "}
              <h5 className="text-[20px] text-[#DD9933] font-semibold text-center">
                Route-wise Fares
              </h5>
            </div>

            <div className="text-center text-[14px] text-[#999999]">
              Customize fares for each route and stop. Fare gets added to
              student fees automatically.
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              <img
                src="/imges/transpot_management/ticket-1-64x64.png"
                alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              />
            </div>
            <div>
              {" "}
              <h5 className="text-[20px] text-[#DD9933] font-semibold text-center">
                Student Transport Slips
              </h5>
            </div>

            <div className="text-center text-[14px] text-[#999999]">
              Auto-generate student transport slips with associated vehicle and
              driver information.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransportModule;
