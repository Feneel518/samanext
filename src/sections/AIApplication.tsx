import { AnimatedBeamDemo } from "@/components/AnimatedBeams";
import Heading from "@/components/ui/heading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";
import { FC } from "react";

interface AIApplicationProps {}

const AIApplication: FC<AIApplicationProps> = ({}) => {
  return (
    <section className="bg-background dark:bg-white">
      {/* <section> */}
      <div className=" px-4 lg:px-8 grid lg:grid-cols-2 items-center pt-10 ">
        <div className=" text-center flex flex-col gap-6 lg:order-2">
          <h1 className="font-syne text-5xl gray-grad dark:dark-gray-grad sm:text-6xl lg:text-7xl">
            {/* <Heading> */}
            {/* <h1> */}SAMA NextGen'
            <span className="brand-grad">Edge AI</span> powered offline voice
            solutions
          </h1>
          {/* </Heading> */}
          {/* <Paragraph> */}
          <div className="text-lg lg:text-xl  dark:text-gray-700 text-gray-400 font-light text-pretty lg:w-2/3 lg:mx-auto">
            <p>
              Discover how SAMA NextGen can transform your existing products and
              bring innovation to new products with advanced voice solutions
            </p>
          </div>
          {/* </Paragraph> */}
        </div>
        <div className="lg:order-1 flex items-center justify-center">
          <div className="relative aspect-square size-[300px] sm:w-[450px] md:size-[600px] hidden dark:flex">
            <Image alt="Offline icons" src={"/icons2.png"} fill></Image>
          </div>
          <div className="relative aspect-square size-[300px] sm:w-[450px] md:size-[600px]  flex dark:hidden">
            <Image alt="Offline icons" src={"/iconsDark2.png"} fill></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIApplication;
