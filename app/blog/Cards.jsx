import React from 'react'
import {
    Card ,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Link from 'next/link';
  
  
  const Cards = ({ imageUrl, title, description,date  }) => {
    console.log("Date",date)
  return (
    <>
    <div>
    <Card className="mt-11 w-[400px] flex flex-wrap">
      {imageUrl?<CardHeader  className="relative ">
        <img className='w-[100%] h-[200px] mx-auto rounded-lg'
           src={imageUrl}
          alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
        />
      </CardHeader>:null}
      <CardBody >
        <Typography variant="h6" color="blue-gray" className="mb-2">
        {title.slice(0,30)}...
        </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2">
        {/* {description} */}
        {date.slice(0,10)+" | "+ date.slice(11,16)}
        </Typography>

      </CardBody>
      <CardFooter className="pt-0">
        Read More
      </CardFooter>
    </Card>
    </div>
    </>
  )
}

export default Cards






