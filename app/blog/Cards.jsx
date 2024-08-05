import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import Link from "next/link";

const Cards = ({ imageUrl, title, heading, date }) => {
  // console.log("Date", date);
  return (
    <>
      <div>
        <Card className="mt-11">
          {imageUrl ? (
            <CardHeader className="relative mt-3 ">
              <img
                className="w-[100%]   mx-auto "
                src={imageUrl}
                alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
              />
            </CardHeader>
          ) : null}
          <CardBody>
            <Typography variant="h2" color="blue-gray" className=" text-xl md:text-3xl">
              {title}
            </Typography>
            <Typography variant="h3" color="blue-gray"
              className=" text-[20px] mt-3">
              {/* {description} */}
              {date.slice(0, 10)}
            </Typography>
          </CardBody>
          <h2 className="text-[16px] p-0 m-0  px-5">{heading.slice(0,120)}.......</h2>
          <CardFooter className="pt-0 md:text-xl mt-2 hover:text-blue-600 ">Read More</CardFooter>

        </Card>
      </div>
    </>
  );
};

export default Cards;
