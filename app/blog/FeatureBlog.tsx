import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";
import { ClipLoader } from "react-spinners"; 
import { Eye } from "lucide-react";

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
  const [loading, setLoading] = useState(true); 
  const [blogViews, setBlogViews] = useState<Record<string, number>>({});

  const itemsPerPage = 5;

  const fetchData = useCallback(async (page: number) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://cms.maitretech.com/edusparsh/items/blog?fields=*.*&_limit=${itemsPerPage}&_page=${page}`
      );
      const jsonData = await response.json();
      
      setData((prevData) => [...prevData, ...jsonData?.data || []]);

      fetch("/api/vercel")
        .then((res) => res.json())
        .then((data) => {
          const viewsMap: Record<string, number> = {};
          data?.data?.forEach((item: { key: string; total: number }) => {
            viewsMap[item.key] = item.total;
          });
          setBlogViews(viewsMap);
        })
        .catch(console.error);

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);

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
    setCurrentPage(page);
  };

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
            {cardsToShow.map((card) => {
              const slug = `/blog/${card.blog_title
                ?.replace(/[ :]+/g, "-")
                ?.replace(/[^a-z0-9-]/g, "")
                ?.toLowerCase()}`;
              const views = blogViews[slug] || 0;

              return (
                <div key={card.id}>
                  <Link href={slug}>
                    <Cards
                      imageUrl={card?.blog_image?.data?.full_url?.replace('http://', 'https://')}
                      title={card.blog_title}
                      heading={card?.card_heading}
                      date={card.modified_on}
                    />
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1 ml-2">
                    <Eye size={16} />
                    <span>{views} views</span>
                  </div>
                </div>
              );
            })}
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
