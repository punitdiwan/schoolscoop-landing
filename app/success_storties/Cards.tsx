import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

interface VideoWithCardProps {
  imageUrl: string;
  name: string;
  school: string;
  students: string;
  teachers: string;
  classes: string;
}

const VideoWithCard: React.FC<VideoWithCardProps> = ({
 imageUrl, name, school, students, teachers, classes }) => {
  return (

      <div className="md:max-w-[22rem] xs:max-w-[22rem] xs:mt-5 xs:ml-5  rounded-md border-2 border-[#e7dddd]">
      <div  className="">
        <img src={imageUrl} className=" w-full" />
      </div>
      <div>
        <div>
          <div className="text-center text-[18px] font-bold">{name}, Vice Principal</div>
          <div className="text-center text-[18px] text-[#999999] font-bold">{school}</div>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-5 mt-8 p-5">
            <div>
              {" "}
              <img src="/imges/training.png" className="w-[50px] h-[50px] fill-[#999999]" />
              <div className="text-[14px] mt-3">{students}</div>
              <div className="text-[14px] mt-1">Students</div>
            </div>
            <div>
              <img src="/imges/teacher-1.png" className="w-[50px] h-[50px] fill-[#999999]" />
              <div className="text-[14px] mt-3">{teachers}</div>
              <div className="text-[14px] mt-1">Teachers</div>
            </div>
            <div>
              <img src="/imges/training.png" className="w-[50px] h-[50px] fill-[#aa1a1a]" />
              <div className="text-[14px] mt-3">{classes}</div>
              <div className="text-[14px] mt-1">Daily Classes</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-5">
        <div><MdOutlineSlowMotionVideo /></div><div className="mt-[-4px]">View Video</div>
      </div>
    </div>

  );
}

export default VideoWithCard;

