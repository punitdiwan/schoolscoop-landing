// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
// import Cards from "./Cards";
// import Pagination from "./Pagination";
// import Link from "next/link";

// const cardData = [
//   {
//     id: 1,
//     imageUrl: "https://media.istockphoto.com/id/1000887536/photo/back-view-of-elementary-students-raising-their-arms-on-a-class.jpg?s=612x612&w=0&k=20&c=i0PBNmY4nSgOhHyy9AU5OAiJrOsHk7f7jLcNkO6CApE=",
//     title: "Card 1",
//     description: "Description for Card Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sapiente corporis, optio blanditiis necessitatibus alias rerum vitae eveniet possimus in, consequatur odit? Minus rem rerum soluta id hic eligendi earum?.",

//   },
//   {
//     id: 2,
//     imageUrl: "https://images.unsplash.com/photo-2.jpg",
//     title: "Card 2",
//     description: "Description for Card Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sapiente corporis, optio blanditiis necessitatibus alias rerum vitae eveniet possimus in, consequatur odit? Minus rem rerum soluta id hic eligendi earum?.",
    
//   },
//   {
//     id: 3,
//     imageUrl: "https://images.unsplash.com/photo-3.jpg",
//     title: "Card 3",
//     description: "Description for Card Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sapiente corporis, optio blanditiis necessitatibus alias rerum vitae eveniet possimus in, consequatur odit? Minus rem rerum soluta id hic eligendi earum?.",
   
//   },

// ];

// const FeatureBlog = () => {
//   const [ccardData, setCardData] = useState([]);

//   const data_fetch = async() => {
//     const response: any = await fetch('https://cms.maitretech.com/edusparsh/items/blog?fields=*.*', {
//       method: "GET",
    
//       headers: {
//         'Content-type': 'application/json',
      
//       }
//     })

//     const data = await response.json()
//     console.log("Response data from api: " ,data)
//   }
//   data_fetch();

//   useEffect(() => {
//     // Fetch data from the API
//     fetch("https://cms.maitretech.com/edusparsh/items/blog?fields=*.*")
//       .then((response) => response.json())
//       .then((data) => setCardData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);


//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Number of cards to display per page

//   const totalPages = Math.ceil(cardData.length / itemsPerPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   // Calculate the start and end index for the current page
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
  

//   // Reverse the order of cardData and display only the cards for the current page
//   const cardsToShow = cardData.slice().reverse().slice(startIndex, endIndex);
//   return (
//     <>
//       <div>
//         <div>
//           <h1 className="text-center text-[24px] font-bold mt-5">
//             FEATURED BLOGS
//           </h1>
//         </div>

//       <div className="p-12">
//       <div className="grid md:grid-cols-4 gap-5">
//       {cardsToShow.map((card, index) => (
//         <div>
          
//     <Link href={`/blog/${card.id}`} key={card.id}>
    
    //   <Cards
    //       key={card.id} // Use the "id" as the key for each mapped component
    //       imageUrl={card.imageUrl}
    //       title={card.title}
    //       description={card.description.split(' ').slice(0, 10).join(' ')}
        
    //     />
//     </Link>

//         </div>
//       ))}
       
    //    <Pagination
    //     currentPage={currentPage}
    //     totalPages={totalPages}
    //     onPageChange={handlePageChange}
    //   />
 
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default FeatureBlog;