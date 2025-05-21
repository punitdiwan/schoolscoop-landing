import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

const Cards = ({ imageUrl, title, heading, date }) => {
  return (
    <>
      <div className="mt-11">
        <Card className="flex flex-col gap-6">
          {/* Image on top */}
          {imageUrl ? (
            <CardHeader className="relative w-full">
              <img
                className="w-full h-full object-cover rounded-t-lg"
                src={imageUrl?.replace("http://", "https://")}
                alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              />
            </CardHeader>
          ) : null}

          {/* Text below the image */}
          <CardBody className="flex flex-col justify-start p-4">
            <Typography
              variant="h2"
              color="blue-gray"
              className="text-[1.25rem] md:text-[2rem] font-semibold"
            >
              {title}
            </Typography>

            <Typography
              variant="h3"
              color="blue-gray"
              className="text-[1rem] mt-3 font-medium text-gray-600"
            >
              {date.slice(0, 10)} {/* Display date */}
            </Typography>

            <h2 className="text-[1rem] mt-3 text-gray-700">
              {heading?.slice(0, 120)}....
            </h2>

            {/* Read More Button */}
            <CardFooter className="pt-4 mt-4 hover:text-blue-600 cursor-pointer">
              Read More
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Cards;
