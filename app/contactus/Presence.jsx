import Link from "next/link";
import React from "react";

const Presence = () => {
  const data = [
    {
      image: "/mp.png",
      name: "Madhya Pradesh"
    },
    {
      image: "/up.png",
      name: "Uttar Pradesh"
    },
    {
      image: "/panjab.png",
      name: "Punjab"
    },
    {
      image: "/bihar.png",
      name: "Bihar"
    },
    {
      image: "/delhi.jpeg",
      name: "Delhi"
    },
    {
        image: "/andhrapradesh.png",
        name: "Andhra Pradesh"
      }
  ];
  return (
    <div>
      <div className="bg-[#8ba7ce] py-4">
        <h2 className="text-2xl md:text-3xl capitalize font-bold text-center py-3">
          Presence in India
        </h2>

        <div className="px-5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center md:px-[10%]  text-white">
          <div className="w-[90%] text-justify flex flex-col gap-4">
            <p>
              We place a high value on educating our clients, and we are always
              available to assist you by providing expertise and experience in
              developing flavors and scents that meet evolving customer
              expectations.200+ clients across the country. We are currently a
              leading supplier of school management software due to our wide and
              diverse 12+ years of experience in school ERP and our stringent
              quality standards.Edusparsh installed a web-based system to
              establish its first presence outside of Madhya Pradesh.
            </p>
            <Link href="#" className="bg-green-700  p-2 rounded-full w-[130px]">
              Get Free Demo
            </Link>
          </div>
          <div>
            <img src="/india1.png" className="w-[100%] md:w-[400px]" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-center my-5">Office Branches</h2>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 w-[80%] mx-auto ">
          {data.map((item,index) => (
            <div key={index} className="flex items-center gap-3 bg-[#8ba7ce] w-[cal] rounded-lg flex-col p-2 lg:flex-row">
              <img src={item.image} className="w-[80px] rounded-lg h-[70px] hover:w-[82px] hover:h-[72px]"/>
              <h3 className="font-bold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presence;
