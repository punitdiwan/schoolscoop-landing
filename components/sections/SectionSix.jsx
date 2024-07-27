import { Button, Card, Input } from "@material-tailwind/react";
import { Radio, RadioGroup } from "@nextui-org/react";
import React from "react";

const SectionSix = () => {


  
  return (
    <>
      <div>
        <div>
          <h1 className="
            xs:text-[#2c5aa0] xs:text-[24px] xs:font-bold xs:text-center
          md:text-[#2c5aa0] md:text-[40px] md:font-bold md:text-center">
            Start Using EduSparsh ERP for Your School Today!
          </h1>
          <div className="w-[9rem] h-1 rounded-lg bg-[#ffb000] mx-auto"></div>
          <h1 className="
          xs:text-[#b2b2b2] xs:text-[14px] xs:font-normal xs:text-center
          md:text-[#b2b2b2] md:text-[20px] md:font-normal md:text-center
          ">
            {" "}
            Learn how School ERP can revolutionize the way your deliver
            education, improve stakeholder collaboration & improve decision
            making.
          </h1>
        </div>

        <div className="p-10">
          <div className=" xs:flex xs:flex-col
          md:flex flex-row">
            <div className="grid grid-cols-1">
              <div>
                <Card>
                  <img src="/imges/edumarshal-school-erp-benefits-500x500.png" alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."/>
                </Card>
              </div>
            </div>
            <div className="md:ml-[150px]">
              <form>
                <div className="grid md:grid-cols-2 gap-7">
                  <div>
                    {" "}
                    <Input
                      variant="standard"
                      label="First Name"
                      size="lg"
                      color="green"
                      crossOrigin={undefined}
                    />
                  </div>
                  <div>
                    {" "}
                    <Input
                      variant="standard"
                      label="Last Name"
                      size="lg"
                      color="green"
                      crossOrigin={undefined}
                    />
                  </div>
                  <div>
                    {" "}
                    <Input
                      variant="standard"
                      label="Email"
                      size="lg"
                      color="green"
                      crossOrigin={undefined}
                    />
                  </div>
                  <div>
                    {" "}
                    <Input
                      variant="standard"
                      label="Phone"
                      size="lg"
                      color="green"
                      crossOrigin={undefined}
                    />
                  </div>
                  <div>
                    {" "}
                    <Input
                      variant="standard"
                      label="Name Of Institute"
                      size="lg"
                      color="green"
                      crossOrigin={undefined}
                    />
                  </div>
                  <div>
                    {" "}
                    <Input
                      variant="standard"
                      label="City"
                      color="green"
                      size="lg"
                      crossOrigin={undefined}
                    />
                  </div>
                  <div>
                    {" "}
                    <Input
                      variant="standard"
                      label="Number Of Students"
                      size="lg"
                      color="green"
                      crossOrigin={undefined}
                    />
                  </div>
                </div>
                <div className=" mt-5 text-lg font-bold">
                  <RadioGroup label="Institute Type" orientation="horizontal" isRequired>
                <div className="grid md:grid-cols-3 xs:grid-cols-2 gap-6">
              <div><Radio value="pre_school" color="success" size="lg" ><label className="font-normal text-base text-[#999999]">Pre - School</label></Radio></div>  
              <div><Radio value="school" color="success" size="lg"><label className="font-normal text-base text-[#999999]">School</label></Radio></div> 
              <div><Radio value="college" color="success" size="lg"><label className="font-normal text-base text-[#999999]">College</label></Radio></div> 
              <div><Radio value="university" color="success" size="lg"><label className="font-normal text-base text-[#999999]">University</label></Radio></div> 
              <div><Radio value="training_center" color="success" size="lg"><label className="font-normal text-base text-[#999999]">Training Center</label></Radio></div> 
                </div>
                  </RadioGroup>
                </div>

                <div>
                  <Button variant="filled" color="green" size="lg" className="rounded-full mt-6" type="submit"> Request Free Demo</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSix;
