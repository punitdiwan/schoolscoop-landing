import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

const Cards = ({ imageUrl, title, heading, date }) => {
  // console.log("Date", date);
  return (
    <>
<div className="mt-11">
  <Card className="flex flex-col md:flex-row gap-6">
    {/* Image on the left */}
    {imageUrl ? (
      <CardHeader className="relative md:w-[12rem] flex justify-center">
        <img
          className="w-[10rem] md:w-[12rem] h-[10rem] md:h-[12rem] object-cover rounded-lg"
          src={imageUrl?.replace("http://", "https://")}
          alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
        />
      </CardHeader>
    ) : null}

    {/* Text on the right */}
    <CardBody className="flex flex-col justify-between">
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
