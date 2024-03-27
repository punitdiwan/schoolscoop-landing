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
  
  
  const Cards = ({ imageUrl, title, description,  }) => {
  return (
    <>
    <div>
    <Card className="mt-11 w-26">
      <CardHeader color="blue-gray" className="relative h-[9rem]">
        <img
           src={imageUrl}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        {title}
        </Typography>

        {/* <Typography>
        {description}
        </Typography> */}

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






