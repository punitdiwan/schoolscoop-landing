import {
   Card,
   CardHeader,
   CardBody,
   Typography,
   Avatar,
 } from "@material-tailwind/react";
 interface Card3Props {
   imageUrl: string;
   title: string;
   bgColor: string;
 }
 
 const Card3: React.FC<Card3Props> = ({ imageUrl, title, bgColor }) => {
   return (
     <div >
      <div className={`bg-gradient-to-r from-orange-100 to-orange-200 xs:w-[19rem]  h-[14rem] md:w-[15rem] flex justify-center rounded-md`}>
       <div className="">
        <div className="flex justify-center">
        <img src={imageUrl} className="w-[10rem] h-[10rem] " alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."/>
        </div>
         <h1 className="text-center mt-3 text-[#2c5aa0] font-bold">{title}</h1>
       </div>
     </div>
      </div>
   );
 }
 
 export default Card3;
 

// import {
//     Card,
//     CardHeader,
//     CardBody,
//     Typography,
//     Avatar,
//   } from "@material-tailwind/react";
   
//  const Card3 =() => {
//     return (
//      <Card className=" bg-gradient-to-r from-green-600 to-green-900 w-[220px] h-[230px]"   >
//         <CardBody   className="">
//          <img src="/imges/campus-management-system-223x177.png" className="w-[9rem] h-[9rem]"/>
//          <h1 className="text-white text-center mt-3">Student Management System </h1>
//         </CardBody>

//      </Card>
//     );
//   }

//   export default Card3