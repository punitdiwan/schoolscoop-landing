
import Image from "next/image";
import Link from "next/link";
interface Card3Props {
  imageUrl: string;
  title: string;
  bgColor: string;
}

const Card3: React.FC<Card3Props> = ({ imageUrl, title, bgColor }) => {
  
  // console.log("Image===>",imageUrl)
  return (
    <Link
      href="#"
      className={`bg-gradient-to-r from-orange-100 to-orange-200 card3    flex justify-center rounded-md`}
    >
      <div className="">
        <div className="flex justify-center">
          <Image
          width={200}
          height={200}
            src={imageUrl}
            // className="w-[10rem] h-[10rem] "
            alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
          />
        </div>
        <h3 className="text-center mt-3 text-[#2c5aa0] font-bold">{title}</h3>
      </div>
    </Link>
  );
};

export default Card3;
