import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";

const FeatureBlog = () => {
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/blog?fields=*.*"
      );
      const jsonData = await response.json();
      setData(jsonData?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("Card data====>", data);

  useEffect(() => {
    fetchData();
  }, []);

  const itemsPerPage = 10; // Number of cards to display per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const cardsToShow = data.slice().reverse().slice(startIndex, endIndex);

  return (
    <>
      <div>
        <div className="flex flex-col items-center lg:flex-row mt-6 w-[90%]">
          <img
            src="/imges/student_parentsupport/edumarshal-support.jpg"
            className="w-[90%] mx-auto h-96 lg:w-[45%] lg:h-[500px] "
            alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
          />
          <div className="flex flex-col gap-3 w-[45%]">
            <div className="text-black mx-auto flex flex-col text-center">
              <h1 className="text-[40px] font-bold">EduSparsh Blogs</h1>
              <p className=" ">
                Find the latest Blogs news from EduSparsh. See related education
                and technology articles, photos, podcasts and videos.
              </p>
            </div>

            <div className="w-[100%]  flex flex-row border bg-gray-200  border-gray-500 px-2 rounded-xl mx-auto mt-4">
              <input
                className=" rounded w-[100%] py-4 bg-blue-gray-100 mx-1 pl-5 my-1"
                type="text"
                placeholder="Search..."
              />
              <button className="bg-blue-gray-500 px-4 my-1 hover:bg-blue-gray-900  text-white rounded-lg">
                search
              </button>
            </div>
          </div>
        </div>

        <div className="p-12 w-[70%]">
          <div className="flex flex-wrap gap-5 w-[95%] mx-auto">
            {data &&
              cardsToShow.map((card: any, index: any) => (
                <div key={index}>
                  <Link
                    href={`/blog/${card.blog_title.replace(/ /g, "_")}`}
                    key={card.id}
                  >
                    <Cards
                      key={card.id} // Use the "id" as the key for each mapped component
                      imageUrl={card?.blog_image?.data?.full_url}
                      title={card?.blog_title}
                      description={""}
                      date={card?.modified_on}
                      // description={card?.blog_message
                      //   .split(" ")
                      //   .slice(0, 10)
                      //   .join(" ")}
                    />
                  </Link>
                </div>
              ))}
          </div>
          <div className="mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureBlog;

// import React, { useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
// import Cards from "./Cards";
// import Pagination from "./Pagination";

// const cardData = [
//   {
//     id: 1,
//     imageUrl: "https://images.unsplash.com/photo-1.jpg",
//     title: "Card 1",
//     description: "Description for Card 1.",
//     buttonText: "Read More",
//   },
//   {
//     id: 2,
//     imageUrl: "https://images.unsplash.com/photo-2.jpg",
//     title: "Card 2",
//     description: "Description for Card 2.",
//     buttonText: "Learn More",
//   },
//   {
//     id: 3,
//     imageUrl: "https://images.unsplash.com/photo-3.jpg",
//     title: "Card 3",
//     description: "Description for Card 3.",
//     buttonText: "Explore",
//   },
//   {
//     id: 4,
//     imageUrl: "https://images.unsplash.com/photo-4.jpg",
//     title: "Card 4",
//     description: "Description for Card 4.",
//     buttonText: "Discover",
//   },
//   {
//     id: 5,
//     imageUrl: "https://images.unsplash.com/photo-5.jpg",
//     title: "Card 5",
//     description: "Description for Card 5.",
//     buttonText: "See More",
//   },
//   {
//     id: 6,
//     imageUrl: "https://images.unsplash.com/photo-6.jpg",
//     title: "Card 6",
//     description: "Description for Card 6.",
//     buttonText: "Read More",
//   },
//   {
//     id: 7,
//     imageUrl: "https://images.unsplash.com/photo-7.jpg",
//     title: "Card 7",
//     description: "Description for Card 7.",
//     buttonText: "Learn More",
//   },
//   {
//     id: 8,
//     imageUrl: "https://images.unsplash.com/photo-8.jpg",
//     title: "Card 8",
//     description: "Description for Card 8.",
//     buttonText: "Explore",
//   },
//   {
//     id: 9,
//     imageUrl: "https://images.unsplash.com/photo-9.jpg",
//     title: "Card 9",
//     description: "Description for Card 9.",
//     buttonText: "Discover",
//   },
//   {
//     id: 10,
//     imageUrl: "https://images.unsplash.com/photo-10.jpg",
//     title: "Card 10",
//     description: "Description for Card 10.",
//     buttonText: "See More",
//   },
//   {
//     id: 11,
//     imageUrl: "https://images.unsplash.com/photo-11.jpg",
//     title: "Card 11",
//     description: "Description for Card 11.",
//     buttonText: "Read More",
//   },
//   {
//     id: 12,
//     imageUrl: "https://images.unsplash.com/photo-12.jpg",
//     title: "Card 12",
//     description: "Description for Card 12.",
//     buttonText: "Learn More",
//   },
//   {
//     id: 13,
//     imageUrl: "https://images.unsplash.com/photo-13.jpg",
//     title: "Card 13",
//     description: "Description for Card 13.",
//     buttonText: "Explore",
//   },
//   {
//     id: 14,
//     imageUrl: "https://images.unsplash.com/photo-14.jpg",
//     title: "Card 14",
//     description: "Description for Card 14.",
//     buttonText: "Discover",
//   },
//   {
//     id: 15,
//     imageUrl: "https://images.unsplash.com/photo-15.jpg",
//     title: "Card 15",
//     description: "Description for Card 15.",
//     buttonText: "See More",
//   },
//   {
//     id: 16,
//     imageUrl: "https://images.unsplash.com/photo-16.jpg",
//     title: "Card 16",
//     description: "Description for Card 16.",
//     buttonText: "Read More",
//   },
//   {
//     id: 17,
//     imageUrl: "https://images.unsplash.com/photo-17.jpg",
//     title: "Card 17",
//     description: "Description for Card 17.",
//     buttonText: "Learn More",
//   },
//   {
//     id: 18,
//     imageUrl: "https://images.unsplash.com/photo-18.jpg",
//     title: "Card 18",
//     description: "Description for Card 18.",
//     buttonText: "Explore",
//   },
//   {
//     id: 19,
//     imageUrl: "https://images.unsplash.com/photo-19.jpg",
//     title: "Card 19",
//     description: "Description for Card 19.",
//     buttonText: "Discover",
//   },
//   {
//     id: 20,
//     imageUrl: "https://images.unsplash.com/photo-20.jpg",
//     title: "Card 20",
//     description: "Description for Card 20.",
//     buttonText: "See More",
//   },
//   {
//     id: 21,
//     imageUrl: "https://images.unsplash.com/photo-21.jpg",
//     title: "Card 21",
//     description: "Description for Card 21.",
//     buttonText: "Read More",
//   },
//   {
//     id: 22,
//     imageUrl: "https://images.unsplash.com/photo-22.jpg",
//     title: "Card 22",
//     description: "Description for Card 22.",
//     buttonText: "Learn More",
//   },
//   {
//     id: 23,
//     imageUrl: "https://images.unsplash.com/photo-23.jpg",
//     title: "Card 23",
//     description: "Description for Card 23.",
//     buttonText: "Explore",
//   },
//   {
//     id: 24,
//     imageUrl: "https://images.unsplash.com/photo-24.jpg",
//     title: "Card 24",
//     description: "Description for Card 24.",
//     buttonText: "Discover",
//   },
//   {
//     id: 25,
//     imageUrl: "https://images.unsplash.com/photo-25.jpg",
//     title: "Card 25",
//     description: "Description for Card 25.",
//     buttonText: "See More",
//   },
//   {
//     id: 26,
//     imageUrl: "https://images.unsplash.com/photo-26.jpg",
//     title: "Card 26",
//     description: "Description for Card 26.",
//     buttonText: "Read More",
//   },
//   {
//     id: 27,
//     imageUrl: "https://images.unsplash.com/photo-27.jpg",
//     title: "Card 27",
//     description: "Description for Card 27.",
//     buttonText: "Learn More",
//   },
//   {
//     id: 28,
//     imageUrl: "https://images.unsplash.com/photo-28.jpg",
//     title: "Card 28",
//     description: "Description for Card 28.",
//     buttonText: "Explore",
//   },
//   {
//     id: 29,
//     imageUrl: "https://images.unsplash.com/photo-29.jpg",
//     title: "Card 29",
//     description: "Description for Card 29.",
//     buttonText: "Discover",
//   },
//   {

//     id: 30,
//     imageUrl: "https://images.unsplash.com/photo-30.jpg",
//     title: "Card 30",
//     description: "Description for Card 30.",
//     buttonText: "See More",
//   },
//   {
//     id: 31,
//     imageUrl: "https://images.unsplash.com/photo-31.jpg",
//     title: "Card 31",
//     description: "Description for Card 31.",
//     buttonText: "Read More",
//   },
//   {
//     id: 32,
//     imageUrl: "https://images.unsplash.com/photo-30.jpg",
//     title: "Card 30",
//     description: "Description for Card 30.",
//     buttonText: "See More",
//   },
//   {
//     id: 33,
//     imageUrl: "https://images.unsplash.com/photo-31.jpg",
//     title: "Card 31",
//     description: "Description for Card 31.",
//     buttonText: "Read More",
//   },
//   {
//     id: 28,
//     imageUrl: "https://images.unsplash.com/photo-28.jpg",
//     title: "Card 28",
//     description: "Description for Card 28.",
//     buttonText: "Explore",
//   },
//   {
//     id: 29,
//     imageUrl: "https://images.unsplash.com/photo-29.jpg",
//     title: "Card 29",
//     description: "Description for Card 29.",
//     buttonText: "Discover",
//   },
//   {

//     id: 30,
//     imageUrl: "https://images.unsplash.com/photo-30.jpg",
//     title: "Card 30",
//     description: "Description for Card 30.",
//     buttonText: "See More",
//   },
//   {
//     id: 31,
//     imageUrl: "https://images.unsplash.com/photo-31.jpg",
//     title: "Card 31",
//     description: "Description for Card 31.",
//     buttonText: "Read More",
//   },
//   {
//     id: 32,
//     imageUrl: "https://images.unsplash.com/photo-30.jpg",
//     title: "Card 30",
//     description: "Description for Card 30.",
//     buttonText: "See More",
//   },
//   {
//     id: 33,
//     imageUrl: "https://images.unsplash.com/photo-31.jpg",
//     title: "Card 31",
//     description: "Description for Card 31.",
//     buttonText: "Read More",
//   },
//   {
//     id: 32,
//     imageUrl: "https://images.unsplash.com/photo-30.jpg",
//     title: "Card 30",
//     description: "Description for Card 30.",
//     buttonText: "See More",
//   },
//   {
//     id: 33,
//     imageUrl: "https://images.unsplash.com/photo-31.jpg",
//     title: "Card 31",
//     description: "Description for Card 31.",
//     buttonText: "Read More",
//   },
//   {
//     id: 32,
//     imageUrl: "https://images.unsplash.com/photo-30.jpg",
//     title: "Card 30",
//     description: "Description for Card 30.",
//     buttonText: "See More",
//   },
//   {
//     id: 33,
//     imageUrl: "https://images.unsplash.com/photo-31.jpg",
//     title: "Card 31",
//     description: "Description for Card 31.",
//     buttonText: "Read More",
//   },
//   {
//     id: 32,
//     imageUrl: "https://images.unsplash.com/photo-30.jpg",
//     title: "Card 30",
//     description: "Description for Card 30.",
//     buttonText: "See More",
//   },
//   {
//     id: 33,
//     imageUrl: "https://images.unsplash.com/photo-31.jpg",
//     title: "Card 31",
//     description: "Description for Card 31.",
//     buttonText: "Read More",
//   },
//   {
//     id: 32,
//     imageUrl: "https://images.unsplash.com/photo-30.jpg",
//     title: "Card 30",
//     description: "Description for Card 30.",
//     buttonText: "See More",
//   },
//   {
//     id: 33,
//     imageUrl: "https://images.unsplash.com/photo-31.jpg",
//     title: "Card 31",
//     description: "Description for Card 31.",
//     buttonText: "Read More",
//   },
// ];

// const FeatureBlog = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Number of cards to display per page
//   const totalPages = Math.ceil(cardData.length / itemsPerPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//     // Calculate the start and end index for the current page
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     // Display only the cards for the current page
//     const cardsToShow = cardData.slice(startIndex, endIndex);

//   return (
//     <>
//       <div>
//         <div>
//           <h1 className="text-center text-[24px] font-bold mt-5">
//             FEATURED BLOGS
//           </h1>
//         </div>

//       <div className="p-12">
//       <div className="grid md:grid-cols-4 gap-5">
//       {cardsToShow.map((card, index) => (
//         <div>
//         <Cards
//           key={card.id} // Use the "id" as the key for each mapped component
//           imageUrl={card.imageUrl}
//           title={card.title}
//           description={card.description}
//           buttonText={card.buttonText}
//         />

//         </div>
//       ))}

//        <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />

//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default FeatureBlog;
