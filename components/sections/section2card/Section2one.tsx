import React, { useEffect, useState } from "react";
import Card3 from "./Card3";

const Section2one = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://cms.maitretech.com/edusparsh/items/home_provide?fields=*.*"
      );
      const jsonData = await response.json();
      setData(jsonData?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="p-12">
        <div className="homecard3">
          
          
          {data.map((card: any, index: any) => (
            <div key={index}>
              <Card3
                imageUrl={card.image.data.full_url}
                title={card.title}
                bgColor="from-green-600 to-green-900"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section2one;
