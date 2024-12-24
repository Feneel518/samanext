import { HEADER } from "@/lib/PagesHeading";
import ApplicationPage from "@/sections/ApplicationPage";
import PagesHeader from "@/sections/PagesHeader";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const productHeader = HEADER.find((name) => name.name === "Applications");
  return (
    <div className="">
      {productHeader && <PagesHeader heading={productHeader}></PagesHeader>}
      <ApplicationPage></ApplicationPage>
    </div>
  );
};

export default page;
