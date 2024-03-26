import { Button,  Input } from "@material-tailwind/react";
import { Radio, RadioGroup } from "@nextui-org/react";

const ContactInfo = () => {
  return (
    <>
    <div>
        <div className='p-12'>
        <div><h1 className='text-[#2c5aa0] text-[40px] font-bold text-center'>Lets Navigate Digital Transformation Together!!!</h1></div>
            <div><p className='text-[#2c5aa0] text-[20px] font-normal text-center'> Please complete the form below. A member of our staff will respond to you promptly.</p></div>
        </div>
        <div>
        <div className="p-12">
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
                </div>
               

                <div className="flex justify-center">
                  <Button variant="filled" color="green" size="lg" className="rounded-full mt-6 text-center" type="submit">Submit</Button>
                </div>
              </form>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default ContactInfo