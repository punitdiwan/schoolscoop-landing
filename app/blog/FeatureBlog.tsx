import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";
import { ClipLoader } from "react-spinners"; // 🌀 Import spinner

interface BlogItem {
  id: number;
  blog_title: string;
  blog_image: { data: { full_url: string } };
  modified_on: string;
  card_heading: string;
}

const FeatureBlog = () => {
  const [data, setData] = useState<BlogItem[]>([]);
  const [filteredData, setFilteredData] = useState<BlogItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(true); // 🧭 Add loading state

  const itemsPerPage = 5;

  // Function to fetch data based on the page
  const fetchData = useCallback(async (page: number) => {
    setLoading(true); // Start loading when data is being fetched

    try {
      // Make sure we fetch based on the page number and limit
      const response = await fetch(
        `https://cms.maitretech.com/edusparsh/items/blog?fields=*.*&_limit=${itemsPerPage}&_page=${page}`
      );
      const jsonData = await response.json();
      
      // Append new data to existing data (if any)
      setData((prevData) => [...prevData, ...jsonData?.data || []]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  }, []);

  // Trigger fetch on component mount and whenever the page changes
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);

  // Filter data based on search input
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

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Set current page, triggers new fetch
  };

  // Calculate which items to show based on pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const cardsToShow = filteredData
    .slice()
    .reverse()
    .slice(startIndex, endIndex);

  return (
    <div>
      <h1 className="hidden">BLOGS</h1>

      <div className="blogsearch">
        <input
          onChange={(e) => setSearchVal(e.target.value)}
          type="text"
          placeholder="Search..."
        />
        <button>search</button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <ClipLoader size={50} color="#1E3A8A" />
        </div>
      ) : (
        <div className="p-8 md:p-12">
          <div className="flex flex-col gap-2 mx-auto w-[70%] blogcard h-auto">
            {cardsToShow.map((card) => (
              <div key={card.id}>
                <Link
                  href={`/blog/${card.blog_title
                    ?.replace(/[ :]+/g, "-")
                    ?.replace(/[^a-z0-9-]/g, "")
                    ?.toLowerCase()}`}
                >
                  <Cards
                   imageUrl={card?.blog_image?.data?.full_url?.replace('http://', 'https://')}
                    title={card.blog_title}
                    heading={card?.card_heading}
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
      )}
    </div>
  );
};

export default FeatureBlog;
