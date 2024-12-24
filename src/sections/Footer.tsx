import React from "react";

import Image from "next/image";
import Link from "next/link";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Login",
    href: "#login",
  },
];

export const Footer = () => {
  return (
    <footer className="px-8 border-t dark:text-black  border bg-background dark:bg-white text-white z-[1000]  ">
      <div className="flex py-4 items-center justify-between">
        <div className="flex flex-col items-start w-1/2 md:flex-row md:items-center">
          <div className="relative size-32">
            <Image
              src={"/logo.png"}
              alt="SAMA Logo"
              fill
              className="object-contain"
            ></Image>
          </div>
          <div className="max-w-[40%]">
            <p className="text-sm ">
              #201, 3rd Floor, Green Glen Layout, Bellandur, Bangalore - 560103{" "}
            </p>
            <p className="text-sm ">EmailID@gmail.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-between gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-20">
          <Link href={"/products"} className=" uppercase tracking-wider">
            products
          </Link>
          <Link href={"/applications"} className=" uppercase tracking-wider">
            Applications
          </Link>
          <Link href={"/our-story"} className=" uppercase tracking-wider">
            Who are we
          </Link>
          <Link href={"/contact-us"} className=" uppercase tracking-wider">
            Contact us
          </Link>
        </div>
      </div>
    </footer>
    // <footer className="px-8 border-t mt-10 bg-background dark:bg-white text-white z-[1000]">
    //   <div className="flex py-4">
    //     <div className="  flex flex-col lg:items-center xl:shrink-0 dark:text-background">
    //       <div className="size-32 relative ">
    //         <Image
    //           src={"/logo.png"}
    //           alt="SAMA Logo"
    //           fill
    //           className="object-contain"
    //         ></Image>
    //       </div>
    //       <div className="md:w-[40%]">
    //         <p className="text-sm md:w-[40%]">
    //           #201, 3rd Floor, Green Glen Layout, Bellandur, Bangalore - 560103
    //         </p>
    //         <p className="text-sm md:w-[40%]">EmailID@gmail.com</p>
    //       </div>
    //     </div>
    //     <div className="  flex max-lg:flex-col items-center w-full justify-between dark:text-background">
    //       <Link href={"/products"} className=" uppercase tracking-wider">
    //         products
    //       </Link>
    //       <Link href={"/applications"} className=" uppercase tracking-wider">
    //         Applications
    //       </Link>
    //       <Link href={"/our-story"} className=" uppercase tracking-wider">
    //         Who are we
    //       </Link>
    //       <Link href={"/contact-us"} className=" uppercase tracking-wider">
    //         Contact us
    //       </Link>

    //       {/* <div className=" uppercase tracking-wider">General Support</div> */}
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
