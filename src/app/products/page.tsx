import { HEADER } from "@/lib/PagesHeading";
import PagesHeader from "@/sections/PagesHeader";
import ProductsPage from "@/sections/ProductsPage";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const productHeader = HEADER.find((name) => name.name === "Products");
  return (
    <div className="">
      {productHeader && <PagesHeader heading={productHeader}></PagesHeader>}
      <ProductsPage></ProductsPage>
    </div>
  );
};

export default page;
