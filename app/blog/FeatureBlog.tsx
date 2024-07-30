// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import Cards from "./Cards";
// import Pagination from "./Pagination";

// const FeatureBlog = () => {
//   const [data, setData] = useState<any[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const [searchVal, setSearchVal] = useState("");
//   useEffect(()=>
//     function handleSearchClick() {
//       if (searchVal === "") {
//         setData(data);
//         return;
//       }
//       const filterBySearch = data.filter((item) => {
//         if (item.toLowerCase().includes(searchVal.toLowerCase())) {
//           return item;
//         }
//       });
//       setData(filterBySearch);
//     },[searchVal]
//   )

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://cms.maitretech.com/edusparsh/items/blog?fields=*.*"
//       );
//       const jsonData = await response.json();
//       setData(jsonData?.data || []);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   // console.log("Card data====>", data);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const itemsPerPage = 10; // Number of cards to display per page
//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const cardsToShow = data.slice().reverse().slice(startIndex, endIndex);

//   return (
//     <>
//       <div>
//         <div className="blogsearch">
//           <input
//             onChange={(e) => setSearchVal(e.target.value)}
//             type="text"
//             placeholder="Search..."
//           />
//           {/* <button>search</button> */}
//         </div>
//         <div className="p-8 md:p-12 ">
//           <div className="flex flex-col gap-2   mx-auto w-[70%] blogcard h-auto">
//             {data &&
//               cardsToShow.map((card: any, index: any) => (
//                 <div key={index}>
//                   <Link
//                     href={`/blog/${card.blog_title
//                       .replace(/ /g, "-")
//                       .toLowerCase()}`}
//                     key={card.id}
//                   >
//                     <Cards
//                       key={card.id} // Use the "id" as the key for each mapped component
//                       imageUrl={card?.blog_image?.data?.full_url}
//                       title={card?.blog_title}
//                       description={""}
//                       date={card?.modified_on}
//                     />
//                   </Link>
//                 </div>
//               ))}
//           </div>

//           <div className="mt-4">
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeatureBlog;

import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";

interface BlogItem {
  id: number;
  blog_title: string;
  blog_image: { data: { full_url: string } };
  modified_on: string;
}

const FeatureBlog = () => {
  const [data, setData] = useState<BlogItem[]>([]);
  const [filteredData, setFilteredData] = useState<BlogItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchVal, setSearchVal] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/blog?fields=*.*"
      );
      const jsonData = await response.json();
      setData(jsonData?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (searchVal === "") {
      setFilteredData(data);
    } else {
      const filterBySearch = data.filter((item) =>
        item.blog_title.toLowerCase().includes(searchVal.toLowerCase())
      );
      setFilteredData(filterBySearch);
    }
  }, [searchVal, data]);

  const itemsPerPage = 5; // Number of cards to display per page
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const cardsToShow = filteredData.slice().reverse().slice(startIndex, endIndex);
console.log("=================+++>",data)
  return (
    <div>
      <div className="blogsearch">
        <input
          onChange={(e) => setSearchVal(e.target.value)}
          type="text"
          placeholder="Search..."
        />
        <button>search</button>
      </div>
      <div className="p-8 md:p-12">
        <div className="flex flex-col gap-2 mx-auto w-[70%] blogcard h-auto">
          {cardsToShow.map((card) => (
            <div key={card.id}>
              <Link
                href={`/blog/${card.blog_title.replace(/ /g, "-").toLowerCase()}`}
              >
                  <Cards
                    imageUrl={card?.blog_image?.data?.full_url}
                    title={card.blog_title}
                    description=""
                    date={card.modified_on}
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
  );
};

export default FeatureBlog;
