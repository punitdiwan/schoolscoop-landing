import { Card } from '@material-tailwind/react';
import React from 'react'

// interface ModuleProps {
//   data: {
//     image: string;
//     title: string;
//     items: {
//       icon: string;
//       title: string;
//     }[];
//   };
// }
// : React.FC<ModuleProps> 
const Module= ({ data }) => {
  return (
    <div>
            <div className="flex">
              <div>
                <img
                  src={data.image}
                  className="w-[185px] h-[154px]"
                />
              </div>
              <div>
                <h1 className="text-[#ffb000] text-[35px] font-semibold ml-4 mt-4">
                  {data.title}
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                  
            {data.items.map((item, index) => (
          <div key={index}>
            <div>
              <img src={item.icon} alt={`Icon ${index}`} className='w-[50px] h-[50px] grayscale '  />
            </div>
            <p className='text-[#3c3c3c] text-sm '>{item.title}</p>
          </div>
        ))}
        
            </div>
            <div className='mt-5'>
             <Card className='text-[#2c5aa0] text-center hover:text-[#ffb000] cursor-pointer font-bold '>View All Module</Card>
            </div>
          </div>
  )
}

export default Module