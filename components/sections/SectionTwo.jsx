import { Button, Card } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Section2one from "./section2card/Section2one";
import Link from "next/link";
import Image from "next/image";

const SectionTwo = () => {
  // const [data, setData] = useState();
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://cms.maitretech.com/edusparsh/items/stories?fields=*.*"
  //     );
  //     const jsonData = await response.json();
  //     const main = jsonData;
  //     setData(jsonData.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // console.log("para data====>", data);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const Data = [
    {
      id: 1,
      title: "Sanskar Barti Vidhyapeeth School",
      image: "/sanskarBharti.webp",
      description:
        "“Edusparsh ERP software has made our day to day management so much easier. we highly recommend the software to other school.”"
      // link: "/success_storties/institute-name"
    },
    {
      id: 2,
      title: "Education Velley School",
      image: "/educationvelley.webp",
      description:
        "“We have been using edusparsh software for our four years & has been very happy with the product, the training & the support system.”"
      // link: "/success_storties/institute-name"
    },
    {
      id: 3,
      title: "Hogwarts International School",
      image: "/Hogwarts.webp",
      description:
        "“We have been long for a school software that help us to go paperless & caseless at the same time & reduces our manual workload. Edusparsh provides us wit a full fledged package starting from our admission, HR, addendence, require to run the day to day activities of our school efficiently. ”"
      // link: "/success_storties/institute-name"
    },
    {
      id: 1,
      title: "Sankalp Public School",
      image: "/sankalp.webp",
      description:
        "“After using our own customised ERP for many year, but we were not satisfied & were searching for a software that meets our expections. After evaluating multiple ERP, we found Edusparsh matching our stanrds.”"
      // link: "/success_storties/institute-name"
    }
  ];

  return (
    <>
      <div>
        <div className="mt-5">
          <h2
            className="
          xs:text-center xs:text-[#2c5aa0] xs:text-[24px] xs:font-bold
          md:text-center md:text-[#2c5aa0] md:text-4xl md:font-bold"
          >
            Leading Educational Institutes Across the Country
          </h2>
          <h2
            className="
          xs:text-center xs:text-[#2c5aa0] xs:text-[14px] xs:font-bold
          md:text-center md:text-[#2c5aa0] md:text-lg md:font-bold md:mt-3 "
          >
            Trust EduSparsh ERP to Simplify School Management & Improve
            Educational Delivery
          </h2>
          <div className="text-center mt-8">
            <Button className="rounded-full" size="md" color="green">
              Read All Case Studies
            </Button>
          </div>
        </div>
        <div className="xs:grid-cols-1 xs:text-center grid md:grid-cols-4 md:mt-4 md:gap-8 md:p-12   m-16">
          {/* {data?.map((item) => (
            <Link
              href={`/success_storties/${item.institute
                .replace(/ /g, "-")
                .toLowerCase()}`}
              className=" flex flex-col  items-center"
            >
              {item.image.data.full_url.slice(-3) === "mp4" ? (
                <video className="w-[100px] h-[101px] ">
                  <source src={item.image.data.full_url} type="video/mp4" />{" "}
                </video>
              ) : (
                <Image
                  alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                  className="w-[100px] h-[101px]  "
                  src={item.image.data.full_url}
                />
              )}
              <div className="mt-5">
                <div
                  className="mx-auto mt-3 "
                  dangerouslySetInnerHTML={{
                    __html: item.story.slice(0, 100) + "......."
                  }}
                />
                <h2 className="text-[#181111] font-bold">– {item.institute}</h2>
              </div>
            </Link>
          ))} */}
          {Data.map((item) => (
            <Link
              href={`/success_storties/${item.title
                .replace(/ /g, "-")
                .toLowerCase()}`}
              className=" flex flex-col  items-center"
            >
              <Image
                width={100}
                height={100}
                alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                className="w-[100px] h-[101px]  "
                src={item.image}
              />
              <div className="mt-5">
                <div
                  className="mx-auto mt-3 "
                  dangerouslySetInnerHTML={{
                    __html: item.description.slice(0, 100) + "......."
                  }}
                />
                <h2 className="text-[#181111] font-bold">– {item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
