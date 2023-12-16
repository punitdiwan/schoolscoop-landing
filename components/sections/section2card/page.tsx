import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
 
interface CardProps {
  title: string;
  value: string;
  description: string;
  icon: IconType; // Use IconType as the type for the icon prop
}

const Card2: React.FC<CardProps> = ({ title, value, description, icon: Icon }) => {
  return (
    <Card className="max-w-[40rem] h-[6rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-lg bg-[#ffb000]"
      >
       <div className="flex justify-center p-3">
        <div>
        <Icon size={32} color="#fff" className="h-[5rem] w-[5rem]" />
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
