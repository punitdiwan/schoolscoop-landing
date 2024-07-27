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

const Cards = ({ imageUrl, title, description, date }) => {
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
            <Typography variant="h6" color="blue-gray" className="md:text-3xl">
              {title}
            </Typography>
            <Typography variant="h6" color="blue-gray" className=" md:text-2xl mt-3">
              {/* {description} */}
              {date.slice(0, 10) + " | " + date.slice(11, 16)}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 md:text-2xl">Read More</CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Cards;
