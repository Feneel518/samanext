import { FC } from "react";
import Heading from "./ui/heading";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

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
            <h1>Leadership</h1>
          </Heading>
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-center gap-20 lg:ml-12 ">
          <div className="flex flex-col gap-10">
            <div className="relative aspect-[3/3] md:aspect-square w-[300px]  sm:w-[450px] rounded-full border-[2px] border-gray-200/20">
              <Image
                alt="Michael Pauli"
                src={"/MichaelPauli1.jpg"}
                fill
                className="object-cover rounded-full "
              ></Image>
            </div>

            <div className="  text-center  -bottom-20 z-10  flex flex-col items-center  ">
              <h1 className="tracking-widest text-3xl">Michael Pauli</h1>

              <p className="text-sm max-w-80">CEO</p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="relative aspect-[3/3] md:aspect-square w-[300px]  sm:w-[450px] rounded-full border-[2px] border-gray-200/20">
              <Image
                alt="Vinay Jagwal"
                src={"/Vinay-Jawgal.jpg"}
                fill
                className="object-cover rounded-full"
              ></Image>
            </div>
            <div className="  text-center  -bottom-20 z-10  flex flex-col items-center ">
              <h1 className="tracking-widest text-3xl">Vinay Jagwal</h1>
              <p className="text-sm max-w-80">Managing Director and CTO</p>
            </div>
          </div>
          <div className=""></div>
        </div>
        {/* <div className="w-full flex flex-col lg:flex-row md:items-center justify-center gap-8 lg:gap-20 h-fit ">
          <Link
            href={"/products?section=ivm"}
            className="relative aspect-[3/3] md:aspect-square w-[300px]  sm:w-[450px] rounded-lg  "
          >
            <div className="absolute w-full  z-10 text-center  -bottom-20 ">
              <h1 className="tracking-widest">Michael Pauli</h1>
              <h1 className="tracking-widest">CEO</h1>
            </div>
            <Image
              alt="Integrated Voice Module"
              src={"/MichaelPauli.jpg"}
              fill
              className="object-cover rounded-lg "
            ></Image>
          </Link>

          <Link
            href={"/products?section=avm"}
            className="relative aspect-[3/3] md:aspect-square w-[300px] sm:w-[450px] rounded-lg group overflow-hidden"
          >
            <Image
              alt="Integrated Voice Module"
              src={"/Vinay-Jawgal.png"}
              fill
              className="object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
            ></Image>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Mission;
