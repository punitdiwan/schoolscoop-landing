import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";

const StaffReachSupport = () => {
  const [data, setData] = useState<any>({
    Fname: "",
    Lname: "",
    School: "",
    Phone: "",
    userId: "",
    help: "",
    // image: ""
  });
  const [error, setError] = useState<any>();

  const handleChange = (e: any) => {
    // console.log("=========>", e.target.n, "============", e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
    console.log("data===>", data);
    // console.log(institute_type)
  };
  // setInstitute(value);
  const submitData = async (e: any) => {
    // console.log("data===>", data);

    e.preventDefault();
    if (data.number === "") {
      setError("Enter the number");
      // console.log("Error", error);
    } else {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/support_form?fields=*.*",
        {
          method: "POST",
          body: JSON.stringify({
            name: data.Fname + " " + data.Lname,
            school_name: data.School,
            phone_number: data.Phone,
            user_id: data.userId,
            help: data.help,
            // image: data.image
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
        School: "",
        Phone: "",
        userId: "",
        help: "",
        // image: ""
      });
    }
  };

  return (
    <>
      <div>
        <div className="p-10">
          <h1 className="text-[40px] font-bold">Request Support</h1>
          <div className="border-t-2 border-r-2 border-b-2 border-l-2 border-orange-500"></div>
        </div>
        <div>
          <div className="p-12">
            <form autoComplete="off" onSubmit={submitData}>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <Input
                    name="Fname"
                    isRequired
                    type="text"
                    variant="underlined"
                    label="First Name"
                    color="success"
                    size="lg"
                    value={data.Fname}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <Input
                    name="Lname"
                    isRequired
                    type="text"
                    variant="underlined"
                    label="Last Name"
                    value={data.Lname}
                    onChange={(e) => handleChange(e)}
                    color="success"
                    size="lg"
                  />
                </div>
                <div>
                  <Input
                    isRequired
                    type="text"
                    variant="underlined"
                    name="School"
                    label="School Name"
                    value={data.School}
                    onChange={(e) => handleChange(e)}
                    color="success"
                    size="lg"
                  />
                </div>
                <div>
                  <Input
                    name="Phone"
                    isRequired
                    type="Phone"
                    variant="underlined"
                    label="Phone"
                    value={data.Phone}
                    onChange={(e) => handleChange(e)}
                    color="success"
                    size="lg"
                  />
                </div>
                <div>
                  <Input
                    name="userId"
                    isRequired
                    type="text"
                    variant="underlined"
                    label="Admission Number or ScoolSoop User ID"
                    value={data.userId}
                    color="success"
                    onChange={(e) => handleChange(e)}
                    size="lg"
                  />
                </div>

                <div>
                  <Textarea
                    name="help"
                    isRequired
                    type="text"
                    variant="underlined"
                    value={data.help}
                    label="How can we help ?"
                    color="success"
                    onChange={(e) => handleChange(e)}
                    size="lg"
                  />
                </div>

              </div>
              <div className="mt-4 text-white flex justify-center">
                <Button
                  className="rounded-full"
                  color="success"
                  size="lg"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-r-1 border-b-1 border-l-1 border-gray-500"></div>
    </>
  );
};

export default StaffReachSupport;
