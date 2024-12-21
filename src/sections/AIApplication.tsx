import { AnimatedBeamDemo } from "@/components/AnimatedBeams";
import Heading from "@/components/ui/heading";
import Paragraph from "@/components/ui/Paragraph";
import { FC } from "react";

interface AIApplicationProps {}

const AIApplication: FC<AIApplicationProps> = ({}) => {
  return (
    <div className="py-10 lg:py-20 px-4 lg:px-8 grid lg:grid-cols-2 items-center">
      <div className=" text-center flex flex-col gap-6 lg:order-2">
        <Heading>
          <h1>
            <span className="brand-grad">Voice and AI</span>, Simplified
          </h1>
        </Heading>
        <Paragraph className="text-pretty lg:w-2/3 lg:mx-auto">
          <p>
            Empower your devices with our unique embedded hardware and software
            solutions, designed to enable advanced Voice and AI applications for
            seamless functionality and innovation.
          </p>
        </Paragraph>
      </div>
      <div className="lg:order-1">
        <AnimatedBeamDemo></AnimatedBeamDemo>
      </div>
    </div>
  );
};

export default AIApplication;
