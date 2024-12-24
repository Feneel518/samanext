import { HEADER } from "@/lib/PagesHeading";
import PagesHeader from "@/sections/PagesHeader";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const productHeader = HEADER.find((name) => name.name === "Product");
  return (
    <div>
      {productHeader && <PagesHeader heading={productHeader}></PagesHeader>}
    </div>
  );
};

export default page;
