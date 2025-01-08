import Image from "next/image";
import image from './../../public/star-wars.png'

export default function Home() {
  return (
    <>
      <h1>Welcome to Star Wars films</h1>
      <Image src={image} alt={'Star wars movie'} height={600} placeholder={'blur'}/>
    </>
  )
};