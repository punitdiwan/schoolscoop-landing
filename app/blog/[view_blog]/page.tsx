"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TopHeader from "@/components/Header/TopHeader";
import NavBar from "@/components/Header/NavBar";
import WhatsappForm from "@/components/whatsapp/WhatsappForm";
import BlogImage from "../BlogImage";
import Footer from "@/components/Footer/Footer";
import BlogTitle from "./BlogTitle";

const ViewBlogs = ({ params }: { params: { view_blog: string } }) => {
  const [data, setData] = useState<any[]>([]);
  const [filteredEntries, setFilteredEntries] = useState<any[]>([]);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/blog?fields=*.*"
      );
      const jsonData = await response.json();
      setData(jsonData?.data || []);
      // console.log("Blogs data====>",data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Update filtered entries whenever data or params.view_blog changes
    console.log("======>",)
    if (params.view_blog && data.length > 0) {
      const filtered = data.filter(
        
        (entry) =>
          
          entry.blog_title.replace(/ /g, "_")=== params.view_blog
      );
      setFilteredEntries(filtered);
    }
  }, [params.view_blog, data]);

  console.log("filteredEntries", filteredEntries);

  return (
    <>
      <div>
        <NavBar />
        <div className="p-[20px]">
          <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  overflow-auto scrollbar-hide ">
            <WhatsappForm />

            <div
              className="
               xs:top-[250px] xs:right-[2px] xs:fixed xs:z-10 md:z-10
               md:top-[210px] md:right-[2px] md:fixed"
            >
              <img src="/imges/Demo-Button-v.gif" alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."/>
            </div>
            <BlogTitle />
            <div className="p-12">
              <div className="grid grid-cols-1 mx-auto ">
                {/* Map over the filtered entries to display content */}
                {filteredEntries.map((entry) => (
                  <div>
                    <div>
                      <h1 className="text-center font-bold text-2xl md:text-[40px]">
                        {entry?.blog_title}
                      </h1>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 lg:ml-[20%] mt-4">
                        <img className="w-10" src="/profile-circle-icon.png" alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider." />
                        <p>
                        <h1 className="text-sm">Written by <span>Edusparsh</span></h1>
                        <h1 className="text-sm">{entry?.modified_on.slice(0,10)+" "+entry?.modified_on.slice(11,16)}</h1>
                        </p>
                      </div>
                      {entry?.blog_image?.data?.full_url?<img
                        src={entry?.blog_image?.data?.full_url}
                        alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                        className="mx-auto  sm:w-[550px] sm:h-[330px] md:w-[700px] md:h-[400px] lg:w-[800px] lg:h-[500px] mt-3"
                      />:null}
                    </div>
                  </div>
                ))}

                {filteredEntries.map((entry) => (
                  <div
                    className="mx-auto mt-3 text-justify"
                    dangerouslySetInnerHTML={{ __html: entry.blog_message }}
                  />
                ))}
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBlogs;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import TopHeader from "@/components/Header/TopHeader";
// import NavBar from "@/components/Header/Nav
// <div key={entry.id} className="flex justify-center flex-row-1">
//   {/* Render the content based on the filtered entries */}
//   {/* Adjust the rendering based on your actual data structure */}
//   <div className="text-center font-bold text-4xl"> {entry?.blog_title}</div>
//   <div className="flex justify-center  sm:w-[550px] sm:h-[330px] mt-3"><img src={entry?.blog_image?.data?.full_url}/></div>
//   <div className="text-center font-normal text-xl mt-2"> {entry?.blog_message}</div>
// </div>Bar";
// import WhatsappForm from "@/components/whatsapp/WhatsappForm";
// import BlogImage from "../BlogImage";
// import Footer from "@/components/Footer/Footer";

// const ViewBlogs = ({ params }: { params: { view_blog: string } }) => {
//   const [data, setData] = useState<any[]>([]);

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

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log("data ", data);

//   const currItem = (() => {
//     if (params.view_blog) {
//       const item = data;
//       console.log("itemssss", item);

//       // Use the Array.filter method to filter entries
//       const filteredEntries = data.filter((entry) => {
//         console.log("entry.id:", entry.id);
//         console.log("params.view_blog:", params.view_blog);
//         return entry.id === parseInt(params.view_blog);
//       });

//       // Log the filtered entries
//       console.log("data", filteredEntries);
//     }
//   })();

//   console.log("items ",currItem)

//   return (
//     <>
//       <div>
//         <TopHeader />
//         <NavBar />
//         <div className="p-[20px]">
//           <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  overflow-auto scrollbar-hide ">
//             <WhatsappForm />

//             <div
//               className="
//                xs:top-[250px] xs:right-[1px] xs:fixed xs:z-10 md:z-10
//                md:top-[210px] md:right-[1px] md:fixed"
//             >
//               <img src="/imges/Demo-Button-v.gif" />
//             </div>

//             <BlogImage />

//             <div className="p-12">
//               <div className="grid grid-cols-1 justify-center">
//                 <div>1</div>
//                 <div>2</div>
//                 <div>3</div>
//               </div>
//             </div>

//             <Footer />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ViewBlogs;
