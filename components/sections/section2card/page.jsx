import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
 
// interface CardProps {
//   title: string;
//   value: string;
//   description: string;
//   imgsrc: string; // Use IconType as the type for the icon prop
// }
// : React.FC<CardProps>
const Card2 = ({ title, value, description, imgsrc }) => {
  return (
    <Card className="max-w-[50rem] h-[7rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-lg bg-gradient-to-l from-zinc-100 to-gray-700"
      >
       <div className="flex justify-center p-3">
        <div>
    <img src={imgsrc}/>
        </div>
       </div>
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {value}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default Card2;
