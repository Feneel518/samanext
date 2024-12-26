import AboutUsDetails from "@/components/AboutUsDetails";
import { HEADER } from "@/lib/PagesHeading";
import PagesHeader from "@/sections/PagesHeader";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const productHeader = HEADER.find((name) => name.name === "About Us");
  return (
    <div className="">
      {productHeader && <PagesHeader heading={productHeader}></PagesHeader>}
      <AboutUsDetails></AboutUsDetails>
    </div>
  );
};

export default page;
