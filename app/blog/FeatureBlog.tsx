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
  // console.log("Card data====>", data);

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
      <div >
        {/* <div className="  flex flex-row border bg-gray-200  border-gray-500 px-2 rounded-xl mx-auto mt-4"> */}
          <div className="blogsearch">
          <input
            // className=" rounded w-[100%] py-3 bg-blue-gray-100 mx-1 pl-5 my-1"
              
             type="text"
            placeholder="Search..."
          />
          {/* <button className="bg-blue-gray-500 px-4 my-1 hover:bg-blue-gray-900  text-white rounded-lg"> */}
          <button>
            search
          </button>
        </div>
        <div className="p-8 md:p-12 ">
          <div className="flex flex-col gap-2   mx-auto w-[70%] blogcard h-auto">
            {data &&
              cardsToShow.map((card: any, index: any) => (
                <div key={index}>
                  <Link
                    href={`/blog/${card.blog_title
                      .replace(/ /g, "-")
                      .toLowerCase()}`}
                    key={card.id}
                  >
                    <Cards
                      key={card.id} // Use the "id" as the key for each mapped component
                      imageUrl={card?.blog_image?.data?.full_url}
                      title={card?.blog_title}
                      description={""}
                      date={card?.modified_on}
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
