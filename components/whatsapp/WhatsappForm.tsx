import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";

const WhatsappForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isFollowed, setIsFollowed] = React.useState(false);

  const handleImageClick = () => {
    setIsFormVisible(true);
  };

  return (
    <>
      <div
        className="
       xs:top-[650px] xs:right-[1px] xs:fixed xs:z-10
       md:top-[480px] md:right-[1px] md:fixed md:z-10"
      >
        <img
          src="/imges/IMessage_logo.svg.png"
          className="w-[50px] cursor-pointer "
          onClick={handleImageClick}
        />
      </div>

      {isFormVisible && (
        <div
          className="
       xs:top-[190px] xs:right-[10px] xs:fixed
       md:top-[140px] md:right-[40px] md:fixed  "
        >
          <div>
            {/* Your form content goes here */}
            <form>
              <Card className="md:max-w-[350px]">
                <CardHeader className=" bg-[#028638]">
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-white font-semibold ">
                        Please fill out the form below and we will get back to
                        you as soon as possible.
                      </h4>
                    </div>
                  </div>
                  <MdCancel
                    className=" w-[50px] h-[40px] cursor-pointer"
                    onClick={() => setIsFormVisible(false)}
                  />
                </CardHeader>
                <CardBody className="px-3 py-0 text-small ">
                  <div className="mt-2 ">
                    {" "}
                    <Input
                      type="text"
                      variant="bordered"
                      size="sm"
                      label="Name"
                      isRequired
                      color="success"
                    />
                  </div>
                  <div className="mt-2">
                    <Input
                      type="email"
                      variant="bordered"
                      size="sm"
                      label="Email"
                      isRequired
                      color="success"
                    />
                  </div>
                  <div className="mt-2">
                    <Input
                      type="number"
                      variant="bordered"
                      size="sm"
                      label="Phone"
                      isRequired
                      color="success"
                    />
                  </div>
                  <div className="mt-2">
                    <Textarea
                      type="text"
                      variant="bordered"
                      size="sm"
                      label="Message"
                      isRequired
                      color="success"
                    />
                  </div>
                </CardBody>

                <div className="flex  justify-center mt-6 mb-3">
                  <div>
                    <Button
                      className="bg-[#028638] text-center text-white"
                      radius="sm"
                      size="lg"
                      variant="shadow"
                      onClick={() => setIsFormVisible(false)}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </Card>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsappForm;
