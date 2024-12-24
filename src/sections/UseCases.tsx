"use client";

import Heading from "@/components/ui/heading";
import Paragraph from "@/components/ui/Paragraph";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface UseCaseProps {}

const UseCase: FC<UseCaseProps> = ({}) => {
  return (
    <section className="px-8 relative  overflow-x-hidden pb-20">
      <div className="absolute inset-0  border-black overflow-hidden ">
        <div className="absolute  size-[1100px] bg-gradient-to-tl from-blue-300 to-transparent dark:bg-gradient-to-tl dark:from-blue-800/55  dark:to-transparent -left-[720px] top-20  blur-3xl rounded-full opacity-50"></div>
        <div className="absolute  size-[1100px] bg-gradient-to-tl from-blue-300 to-transparent dark:bg-gradient-to-tl dark:from-blue-800/55  dark:to-transparent -right-[720px] top-80  blur-3xl rounded-full opacity-90"></div>
      </div>
      <div className="pt-10 lg:pt-20 flex flex-col gap-10 lg:gap-20">
        <div className="">
          <Heading className="text-center">
            <h1>Our Products</h1>
          </Heading>
        </div>
        <div className="w-full flex flex-col lg:flex-row md:items-center gap-8 lg:gap-20 h-fit overflow-hidden">
          <Link
            href={"/products?section=ivm"}
            className="relative aspect-[3/3] md:aspect-[5200/3584] w-[420px]  sm:w-[550px] md:w-[650px] lg:w-[550px] xl:w-[850px] rounded-lg group overflow-hidden"
          >
            <div className="absolute inset-0 xl:p-10 p-2 md:p-4 z-10 text-black font-oswald  flex flex-col gap-4">
              <h1 className="text-xl md:text-3xl xl:text-5xl">
                Integrated Voice Module
              </h1>
              <p className="text-sm w-4/5 xl:text-xl xl:w-2/3 ">
                The Integrated Voice Module is a solution that transforms
                traditional home appliances into smart devices, offering
                seamless control and enhanced convenience through offline
                voice processing.
              </p>
            </div>
            <Image
              alt="Integrated Voice Module"
              src={"/circuit.png"}
              fill
              className="object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
            ></Image>
          </Link>
          <Link
            href={"/products?section=avm"}
            className="relative aspect-[3/3] md:aspect-[5200/3584] w-[420px] sm:w-[550px] md:w-[650px] lg:w-[550px] xl:w-[850px] rounded-lg group overflow-hidden"
          >
            <div className="absolute inset-0 xl:p-10 p-2 md:p-4 z-10 text-white font-oswald  flex flex-col gap-4">
              <h1 className="text-xl md:text-3xl xl:text-5xl">
                {" "}
                Accessory Voice Module
              </h1>
              <p className="text-sm w-4/5 xl:text-xl xl:w-2/3 ">
                The Accessory Voice Module eliminates handheld remote chaos by
                enabling offline voice control for IR devices like ACs, TVs, and
                lights. It features microphones, OTA updates, multilingual
                support, Mobile Application and seamless device integration.
              </p>
            </div>
            <Image
              alt="Integrated Voice Module"
              src={"/accessory1.png"}
              fill
              className="object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
            ></Image>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
