import { FC } from "react";
import Heading from "./ui/heading";
import Link from "next/link";
import Image from "next/image";

interface MissionProps {}

const Mission: FC<MissionProps> = ({}) => {
  return (
    <section className="px-8 relative  overflow-x-hidden pb-20">
      <div className="absolute inset-0  border-black overflow-hidden ">
        <div className="absolute  size-[1100px] bg-gradient-to-tl from-blue-300 to-transparent dark:bg-gradient-to-tl dark:from-blue-800/55  dark:to-transparent -left-[720px] top-20  blur-3xl rounded-full opacity-50"></div>
        <div className="absolute  size-[1100px] bg-gradient-to-tl from-blue-300 to-transparent dark:bg-gradient-to-tl dark:from-blue-800/55  dark:to-transparent -right-[720px] top-80  blur-3xl rounded-full opacity-90"></div>
      </div>
      <div className="pt-10 lg:pt-20 flex flex-col gap-10 lg:gap-20">
        <div className="">
          <Heading className="text-center">
            <h1>Management</h1>
          </Heading>
        </div>
        <div className="w-full flex flex-col lg:flex-row md:items-center justify-center gap-8 lg:gap-20 h-fit overflow-hidden">
          <Link
            href={"/products?section=ivm"}
            className="relative aspect-[3/3] md:aspect-[5200/3584] w-[420px]  sm:w-[550px] md:w-[650px] lg:w-[550px] xl:w-[650px] rounded-lg group overflow-hidden"
          >
            <Image
              alt="Integrated Voice Module"
              src={"/MichaelPauli.jpg"}
              fill
              className="object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
            ></Image>
          </Link>
          <Link
            href={"/products?section=avm"}
            className="relative aspect-[3/3] md:aspect-[5200/3584] w-[420px] sm:w-[550px] md:w-[650px] lg:w-[550px] xl:w-[650px] rounded-lg group overflow-hidden"
          >
            <Image
              alt="Integrated Voice Module"
              src={"/Vinay-Jawgal.png"}
              fill
              className="object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
            ></Image>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mission;
