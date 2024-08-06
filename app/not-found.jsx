import Link from "next/link";
import Image from 'next/image'
export default function NotFound() {
  return (
    <div className="notfound">
      <Image
      height={500}
      width={400}
      src="/page.webp" alt="404" />
      <h1 className="text-2xl font-serif font-bold">oops!</h1>
      <h1 className="text-xl font-serif font-bold"> page not found </h1>
      <Link href="/" className="text-2xl mt-11 font-serif underline">Go Back To Home&#128522;</Link>
    </div>
  );
}
