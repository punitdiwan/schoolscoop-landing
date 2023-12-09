import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Cards from "./Cards";

const FeatureBlog = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="text-center text-[24px] font-bold mt-5">
            FEATURED BLOGS
          </h1>
        </div>

      <div className="p-12">
      <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Card className="mt-11 w-29rem ">
              <CardHeader color="blue-gray" className=" h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-9">
            <div><Cards/></div>
            <div><Cards/></div>
            
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default FeatureBlog;
