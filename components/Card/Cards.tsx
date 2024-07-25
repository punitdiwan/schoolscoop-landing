import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
  } from "@nextui-org/react";

const Cards = () => {
  return (
    <>
            <Card className="py-4">
    
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
        className="object-cover rounded-xl"
        src="/imges/media-article-150x150.png"
        width={150}
        height={150}
      />
    </CardBody> 
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">Daily Mix</p>
      <small className="text-default-500">12 Tracks</small>
      <h4 className="font-bold text-large">Frontend Radio</h4>
    </CardHeader>
  </Card>
    
    </>
  )
}

export default Cards