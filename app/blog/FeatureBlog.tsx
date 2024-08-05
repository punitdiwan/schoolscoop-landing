
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";

interface BlogItem {
  id: number;
  blog_title: string;
  blog_image: { data: { full_url: string } };
  modified_on: string;
  card_heading:string;
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
      <h1 className="hidden">BLOGS</h1>
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
    </div>
  );
};

export default FeatureBlog;
