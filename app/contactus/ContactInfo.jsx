"use client";
import { Button, Input } from "@material-tailwind/react";
import { Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";

const ContactInfo = () => {
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
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };
  const submitData = async (e) => {

    e.preventDefault();
    if (data.number === "") {
      setError("Enter the number");
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
        <div className="p-12">
          <div>
            <h3 className="text-[#2c5aa0] text-[40px] font-bold text-center">
              Lets Navigate Digital Transformation Together!!!
            </h3>
          </div>
          <div>
            <p className="text-[#2c5aa0] text-[20px] font-normal text-center">
              {" "}
              Please complete the form below. A member of our staff will respond
              to you promptly.
            </p>
          </div>
        </div>
        <div>
          <div className="p-12">
            <form autoComplete="off" onSubmit={submitData}>
              <div className="grid md:grid-cols-2 gap-7">
                <div>
                  {" "}
                  <Input
                    name="Fname"
                    required
                    type="text"
                    variant="standard"
                    label="First Name"
                    size="lg"
                    color="green"
                    crossOrigin={undefined}
                    value={data.Fname}
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
                        <Radio
                          value="pre_school"
                          name="pre_school"
                          color="success"
                          size="lg"
                        >
                          <label className="font-normal text-base text-[#999999]">
                            Pre - School
                          </label>
                        </Radio>
                      </div>
                      <div>
                        <Radio
                          value="school"
                          color="success"
                          size="lg"
                          name="school"
                        >
                          <label className="font-normal text-base text-[#999999]">
                            School
                          </label>
                        </Radio>
                      </div>
                      <div>
                        <Radio
                          value="college"
                          color="success"
                          size="lg"
                          name="college"
                        >
                          <label className="font-normal text-base text-[#999999]">
                            College
                          </label>
                        </Radio>
                      </div>
                      <div>
                        <Radio
                          value="university"
                          color="success"
                          size="lg"
                          name="university"
                        >
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
    </>
  );
};

export default ContactInfo;
