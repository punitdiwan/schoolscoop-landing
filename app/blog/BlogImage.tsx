import React from 'react'

const BlogImage = () => {
  return (
    <>
       <div>
        <div className=" relative text-center text-white">
          <img src="/imges/student_parentsupport/edumarshal-support.jpg" className="xs:h-[450px] md:h-[150px] md:w-[1380px]" />
          <div className="absolute 
          xs:top-[30%] xs:left-[5%]
          md:top-[30%] md:left-[25%] ">
            {" "}
            <h1 className="text-[40px] font-bold">School Scoop Blogs</h1>
            <p className=" ">Find the latest Blogs news from SchoolScoop. See related education and technology articles, photos, podcasts and videos.</p>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogImage