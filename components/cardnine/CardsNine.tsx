import {  Divider, Listbox } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

interface CardProps {
  data: {
    
    title: string;
    items: {
      link: string;
      title: string;
    }[];
  };
}


  const CardsNine: React.FC<CardProps> = ({ data }) => {
  return (
    <>
      <div className="mt-2">
        <h1 className="font-bold text-xl text-center mb-4">
          {data.title}
        </h1>
       
         {
          data.items.map((item,index)=>(
            <div key={index} className="border-1 rounded-md border-[#999999] p-2">
            < >
              <p>
                <Link href="#" className="text-[#99999rdBody>9] hover:text-[#ffb000]">
                  {item.title}
                </Link>
              </p>
            </>
       
            </div>
          ))
         }
      </div>
    </>
  );
};

export default CardsNine;
