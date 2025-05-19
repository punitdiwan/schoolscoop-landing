import React from "react";

const BlogImage = () => {
  return (
    <>
      <div>
        <div className=" flex flex-col gap-3 lg:flex-row">
          {/* <img
            src="/imges/student_parentsupport/edumarshal-support.jpg"
            className="w-[90%] mx-auto h-96 lg:w-[50%] lg:h-[500px] "
            alt="helo   ."
          /> */}
          <div className="text-black ">
            <div>
              <h1 className="text-[40px] font-bold">EduSparsh Blogs</h1>
              <p className=" ">
                Find the latest Blogs news from EduSparsh. See related education
                and technology articles, photos, podcasts and videos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogImage;
