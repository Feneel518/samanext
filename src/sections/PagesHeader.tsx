import { HeaderType } from "@/lib/PagesHeading";
import Image from "next/image";
import { FC } from "react";

interface PagesHeaderProps {
  heading: HeaderType;
}

const PagesHeader: FC<PagesHeaderProps> = ({ heading }) => {
  return (
    <section className="  px-8">
      <div className="my-10 relative h-96">
        <div className="absolute inset-0">
          <Image
            alt={heading.name}
            src={heading.image}
            fill
            className="object-cover"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default PagesHeader;
