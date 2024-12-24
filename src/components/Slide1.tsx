import { FC } from "react";
import Heading from "./ui/heading";
import Paragraph from "./ui/Paragraph";
import ShinyButton from "./ui/ShinyButton";
import Image from "next/image";

interface Slide1Props {}

const Slide1: FC<Slide1Props> = ({}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center justify-center">
      <div className="flex flex-col gap-6 xl:w-3/4 xl:mx-auto max-lg:items-center justify-center">
        <Heading className="max-lg:text-center md:w-2/3 lg:w-full ">
          <h1>
            Seamless{" "}
            <span className="bg-gradient-to-br from-[#4AD4E4] to-[#4972e4] text-transparent bg-clip-text">
              Voice Control
            </span>{" "}
            without the Internet
          </h1>
        </Heading>
        <Paragraph className="md:w-1/2 max-lg:text-center lg:w-full">
          <p>
            We set the benchmark in delivering flawless voice activation across
            devices.
          </p>
        </Paragraph>
        <ShinyButton href="/products" className=" md:max-w-80 text-white h-12">
          Expore More
        </ShinyButton>
      </div>
      <div className="relative w-full max-lg:max-w-[600px] mx-auto lg:w-full aspect-[1280/960] rounded-xl ">
        <Image
          alt="Hero Image"
          src={"/heroImage.png"}
          fill
          className="rounded-xl "
        ></Image>
      </div>
    </div>
  );
};

export default Slide1;
