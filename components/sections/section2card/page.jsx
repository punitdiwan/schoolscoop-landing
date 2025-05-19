import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from "@material-tailwind/react";
import Image from "next/image";

/**
 * Card2 Component
 * Displays a horizontal card with an image, value, and description.
 * Optimized with Tailwind and Material Tailwind styles.
 */
const Card2 = ({ title, value, description, imgsrc }) => {
  return (
    <Card
      className="max-w-[50rem] h-[9rem] flex-row 
                 border border-black shadow-md rounded-lg 
                 overflow-hidden bg-white"
    >
      {/* Left Section: Image */}
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 
                   bg-gradient-to-l from-zinc-100 to-gray-700 
                   flex items-center justify-center"
      >
        <Image
          width={100}
          height={100}
          src={imgsrc}
          alt="EduSparsh card icon"
          className="object-contain"
        />
      </CardHeader>

      {/* Right Section: Text Content */}
      <CardBody className="flex flex-col justify-center px-4 py-2">
        <Typography variant="h4" color="blue-gray" className="mb-1 leading-none">
          {value}
        </Typography>
        <Typography color="gray" className="text-sm font-normal">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default Card2;
