import Contact from "@/components/Contact";
import OurContacts from "@/components/OurContacts";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="px-8 lg:h-[1400px]">
      <div className="py-10 xl:py-20 border-b border-gray-200/20 mb-20">
        <Contact></Contact>
      </div>
      <OurContacts></OurContacts>
    </section>
  );
};

export default page;
