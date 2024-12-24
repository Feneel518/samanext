import Heading from "@/components/ui/heading";
import { HeaderType } from "@/lib/PagesHeading";
import Image from "next/image";
import { FC } from "react";

interface PagesHeaderProps {
  heading: HeaderType;
}

const PagesHeader: FC<PagesHeaderProps> = ({ heading }) => {
  return (
    <section className=" px-4 lg:px-8">
      <div className=" my-4 lg:my-10 relative h-60 lg:h-80">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center px-8">
          <Heading className="dark:text-white text-white lg:text-8xl">
            <h1>{heading.name}</h1>
          </Heading>
        </div>
        <div className="absolute inset-0">
          <Image
            alt={heading.name}
            src={heading.image}
            fill
            className={`object-cover rounded-xl `}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default PagesHeader;
