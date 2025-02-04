import CareerDetails from "@/components/CareerDetails";
import Careers from "@/components/Careers";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="overflow-hidden">
      <Careers></Careers>
      <CareerDetails></CareerDetails>
    </div>
  );
};

export default page;
