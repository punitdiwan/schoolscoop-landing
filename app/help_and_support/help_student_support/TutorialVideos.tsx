import React from "react";

const TutorialVideos = () => {
  return (
    <>
      <div>
        <div className="p-10">
          <h1 className="text-[40px] font-bold">Tutorial Videos</h1>
          <div className="border-t-2 border-r-2 border-b-2 border-l-2 border-orange-500"></div>

          <div className="p-10 flex justify-center">
            <div className="">
              <iframe
                className="md:w-[800px] md:h-[400px]"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Dummy Video"
               
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialVideos;
