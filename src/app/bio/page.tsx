import Heading from "@/components/ui/heading";
import Image from "next/image";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="px-4 lg:px-20 py-10 lg:py-20">
      <div className="">
        <div className="flex items-start gap-20">
          <div className="relative aspect-[3/3] md:aspect-square w-[300px]  sm:w-[450px] ">
            <Image
              alt="Michael Pauli"
              src={"/MichaelPauli1.jpg"}
              fill
              className="object-cover  "
            ></Image>
          </div>
          <div className="">
            <Heading>
              <h1>Michael Pauli - CEO</h1>
            </Heading>
            {/* <Heading>
              <h1>CEO</h1>
            </Heading> */}
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default page;
