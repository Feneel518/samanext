import { FC } from "react";
import Heading from "./ui/heading";
import Image from "next/image";

interface Slide3Props {}

const Slide3: FC<Slide3Props> = ({}) => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center max-lg:gap-10">
      <Heading className="lg:w-[45%] md:w-2/3 max-lg:text-center">
        <h1>
          The future of voice is{" "}
          <span className="bg-gradient-to-br from-[#4AD4E4] to-[#4972e4] text-transparent bg-clip-text">
            Offline
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-br from-[#4AD4E4] to-[#4972e4] text-transparent bg-clip-text">
            Private
          </span>
        </h1>
      </Heading>

      <div className="relative w-[450px] sm:w-[500px] md:w-[700px] xl:w-[1000px] aspect-[1020/596] dark:scale-100 scale-0 hidden dark:flex">
        <Image
          alt="Offline Represntation"
          src={"/OfflineWhite.png"}
          fill
          className="object-contain"
        ></Image>
      </div>
      <div className="relative w-[1000px] aspect-[1020/596] dark:scale-0 scale-100 dark:hidden">
        <Image
          alt="Offline Represntation"
          src={"/Offline.png"}
          fill
          className="object-contain"
        ></Image>
      </div>
    </div>
  );
};

export default Slide3;
