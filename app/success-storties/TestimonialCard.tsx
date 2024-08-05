import React from "react";
import VideoWithCard from "./Cards";

const TestimonialCard = () => {
  return (
    <div>
      {" "}
      <div className="grid md:grid-cols-3 gap-2 md:p-10 xs:grid-cols-1">
        <div>
          <VideoWithCard
            imageUrl="/imges/delhi-public-school-logo-full.png"
            name="Birander Kumar"
            school="Demo School"
            students="5000+"
            teachers="500+"
            classes="300"
          />
        </div>
        <div>
          <VideoWithCard
            imageUrl="/imges/NDIM-LOGO-1024x576-1.png"
            name="Birander Kumar"
            school="Demo School"
            students="5000+"
            teachers="500+"
            classes="300"
          />
        </div>
        <div>
          <VideoWithCard
            imageUrl="/imges/vlcsnap-2019-07-25-05h54m49s494.png"
            name="Birander Kumar"
            school="Demo School"
            students="5000+"
            teachers="500+"
            classes="300"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
