import { Button, Card, Input } from "@material-tailwind/react";
import { Radio, RadioGroup } from "@nextui-org/react";
import React, { useState } from "react";

const SectionSix = () => {
  const [data, setData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    city: "",
    phone: "",
    instituten: "",
    NOS: "",
    instituteType: ""
  });
  const [error, setError] = useState();

  const handleChange = (e) => {
    // console.log("=========>", e.target.value, "============", e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
    // console.log("data===>", data);
    // console.log(institute_type)
  };
  // setInstitute(value);
  const submitData = async (e) => {
    // console.log("data===>", data);

    e.preventDefault();
    if (data.number === "") {
      setError("Enter the number");
      // console.log("Error", error);
    } else {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/form?fields=*.*",
        {
          method: "POST",
          body: JSON.stringify({
            name: data.Fname + " " + data.Lname,
            email: data.email,
            number: data.phone,
            name_of_institute: data.instituten,
            city: data.city,
            number_of_students: data.NOS,
            institute_type: data.instituteType
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const dataRes = await response.json();
      setData({
        Fname: "",
        Lname: "",
        email: "",
        city: "",
        phone: "",
        instituten: "",
        NOS: "",
        instituteType: "pre"
      });
    }
  };

  return (
    <>
      <div>
        <div>
          <h1
            className="
            xs:text-[#2c5aa0] xs:text-[24px] xs:font-bold xs:text-center
          md:text-[#2c5aa0] md:text-[40px] md:font-bold md:text-center"
          >
            Start Using EduSparsh ERP for Your School Today!
          </h1>
          <div className="w-[9rem] h-1 rounded-lg bg-[#ffb000] mx-auto"></div>
          <h1
            className="
          xs:text-[#b2b2b2] xs:text-[14px] xs:font-normal xs:text-center
          md:text-[#b2b2b2] md:text-[20px] md:font-normal md:text-center
          "
          >
            {" "}
            Learn how Edusparsh The Best School Software solution can Help in
            automating your school improve the overall Process of your school.
          </h1>
        </div>

        <div className="p-10">
          <div
            className=" xs:flex xs:flex-col
          md:flex flex-row"
          >
            <div className="grid grid-cols-1">
              <div>
                <Card>
                  <img
                    src="/imges/edumarshal-school-erp-benefits-500x500.png"
                    alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                  />
                </Card>
              </div>
            </div>
            <div className="md:ml-[150px]">
              <form autoComplete="off" onSubmit={submitData}>
                <div className="grid md:grid-cols-2 gap-7">
                  {/* <div>
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
                </div> */}
                  <div>
                    {" "}
                    <Input
                      name="Fname"
                      required
                      type="text"
                      variant="standard"
                      label="First Name"
                      size="lg"
                      value={data.Fname}
                      color="green"
                      crossOrigin={undefined}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div>
                    {" "}
                    <Input
                      name="Lname"
                      required
                      type="text"
                      variant="standard"
                      label="Last Name"
                      size="lg"
                      value={data.Lname}
                      color="green"
                      onChange={(e) => handleChange(e)}
                      crossOrigin={undefined}
                    />
                  </div>
                  <div>
                    {" "}
                    <Input
                      name="email"
                      required
                      type="email"
                      variant="standard"
                      label="Email"
                      value={data.email}
                      size="lg"
                      color="green"
                      onChange={(e) => handleChange(e)}
                      crossOrigin={undefined}
                    />
                  </div>
                  <div>
                    {" "}
                    <Input
                      name="phone"
                      required
                      type="number"
                      variant="standard"
                      value={data.phone}
                      label="Phone"
                      pattern="[0-9]{10}"
                      color="green"
                      onChange={(e) => handleChange(e)}
                      crossOrigin={undefined}
                    />
                  </div>
                  <div>
                    {" "}
                    <Input
                      name="instituten"
                      required
                      variant="standard"
                      label="Name Of Institute"
                      value={data.instituten}
                      size="lg"
                      color="green"
                      onChange={(e) => handleChange(e)}
                      crossOrigin={undefined}
                    />
                  </div>
                  <div>
                    {" "}
                    <Input
                      name="city"
                      required
                      variant="standard"
                      label="City"
                      value={data.city}
                      color="green"
                      size="lg"
                      onChange={(e) => handleChange(e)}
                      crossOrigin={undefined}
                    />
                  </div>
                  <div>
                    {" "}
                    <Input
                      name="NOS"
                      required
                      value={data.NOS}
                      type="number"
                      variant="standard"
                      label="Number Of Students"
                      size="lg"
                      color="green"
                      onChange={(e) => handleChange(e)}
                      crossOrigin={undefined}
                    />
                  </div>
                  
                </div>
                <div className=" mt-5 text-lg font-bold">
                  <RadioGroup
                    label="Institute Type"
                    orientation="horizontal"
                    isRequired
                    value={data.instituteType}
                    name="instituteType"
                    onChange={(value) => handleChange(value)}
                  >
                    <div className="grid md:grid-cols-3 xs:grid-cols-2 gap-6">
                      <div>
                        <Radio value="pre_school" color="success" size="lg">
                          <label className="font-normal text-base text-[#999999]">
                            Pre - School
                          </label>
                        </Radio>
                      </div>
                      <div>
                        <Radio value="school" color="success" size="lg">
                          <label className="font-normal text-base text-[#999999]">
                            School
                          </label>
                        </Radio>
                      </div>
                      <div>
                        <Radio value="college" color="success" size="lg">
                          <label className="font-normal text-base text-[#999999]">
                            College
                          </label>
                        </Radio>
                      </div>
                      <div>
                        <Radio value="university" color="success" size="lg">
                          <label className="font-normal text-base text-[#999999]">
                            University
                          </label>
                        </Radio>
                      </div>
                      <div>
                        <Radio
                          value="training_center"
                          color="success"
                          size="lg"
                        >
                          <label className="font-normal text-base text-[#999999]">
                            Training Center
                          </label>
                        </Radio>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="filled"
                    color="green"
                    size="lg"
                    className="rounded-full mt-6 text-center"
                    type="submit"
                  >
                    Submit
                  </Button>
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
