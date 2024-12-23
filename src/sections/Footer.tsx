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
    <footer className="px-8 border-t mt-10 bg-background dark:bg-white text-white z-[1000]">
      <div className="flex py-4">
        <div className="lg:w-[550px]  flex items-center lg:shrink-0 dark:text-background">
          <div className="size-32 relative ">
            <Image
              src={"/logo.png"}
              alt="SAMA Logo"
              fill
              className="object-contain"
            ></Image>
          </div>
          <div className="">
            <p className="text-sm md:w-[40%]">
              #201, 3rd Floor, Green Glen Layout, Bellandur, Bangalore - 560103
            </p>
            <p className="text-sm md:w-[4s0%]">EmailID@gmail.com</p>
          </div>
        </div>
        <div className="lg:px-40 flex max-lg:flex-col items-center w-full justify-between dark:text-background">
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

          {/* <div className=" uppercase tracking-wider">General Support</div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
