import { FC } from "react";
import Heading from "./ui/heading";

interface CareersProps {}

const Careers: FC<CareersProps> = ({}) => {
  return (
    <section className=" px-4 lg:px-8 ">
      <div className=" my-4 lg:my-10 relative h-40 lg:h-80 rounded-xl overflow-hidden">
        <div className="absolute inset-0 z-20 flex items-center px-8 border-b border-gray-200/20">
          <Heading className="dark:text-white text-white lg:text-8xl">
            <h1>Careers</h1>
          </Heading>
        </div>
      </div>
    </section>
  );
};

export default Careers;
