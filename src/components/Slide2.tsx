import { FC } from "react";
import Heading from "./ui/heading";
import Paragraph from "./ui/Paragraph";
import Image from "next/image";

interface Slide2Props {}

const Slide2: FC<Slide2Props> = ({}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center justify-center">
      <div className="flex flex-col gap-6 xl:w-3/4 xl:mx-auto h-fit items-center justify-center">
        <Heading className="max-lg:text-center md:w-2/3 lg:w-full">
          <h1>
            SAMA NextGen's{" "}
            <span className="bg-gradient-to-br from-[#4AD4E4] to-[#4972e4] text-transparent bg-clip-text">
              AI-powered
            </span>{" "}
            smart home solutions
          </h1>
        </Heading>
        <Paragraph className="md:w-1/2 max-lg:text-center lg:w-full">
          <p>
            Discover how SAMA NextGen can revolutionize your business with
            advanced automation.
          </p>
        </Paragraph>
      </div>
      <div className="relative aspect-square w-[400px] xl:w-[550px] mx-auto">
        <Image alt="Aster Module" src={"/Module.png"} fill></Image>
      </div>

      {/* <div className="grid items-center justify-center grid-cols-2  lg:gap-20">
        <Heading className=" text-7xl lg:text-9xl text-center hover:brand-grad dark:hover:brand-grad transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 ">
          <h1>Aster</h1>
        </Heading>
        <Heading className="text-7xl lg:text-9xl text-center hover:brand-grad dark:hover:brand-grad transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
          <h1>Bellis</h1>
        </Heading>
        <Heading className="text-7xl lg:text-9xl text-center hover:brand-grad dark:hover:brand-grad transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
          <h1>Dahlia</h1>
        </Heading>
        <Heading className="text-7xl lg:text-9xl text-center hover:brand-grad dark:hover:brand-grad transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
          <h1>Eruca</h1>
        </Heading>
      </div> */}
    </div>
  );
};

export default Slide2;
