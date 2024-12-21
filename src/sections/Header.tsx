"use client";

import { SideMenuButton } from "@/components/SideMenuButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logoImage from "../../public/logo.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const LINKS = [
  {
    id: 0,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "Products",
    link: "/products",
  },
  {
    id: 4,
    name: "Applications",
    link: "/applications",
  },
  {
    id: 2,
    name: "Our Story",
    link: "/our-story",
  },
  {
    id: 3,
    name: "Contact Us",
    link: "/contact-us",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
];

export const Header = () => {
  const pathname = usePathname();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <>
      <header className="  w-full px-8 ">
        <div className="h-18 flex items-center justify-between border-b  border-gray-900/50 px-">
          {/* logo */}
          <div className="flex gap-4 items-center ">
            <Link href={"/"} className="size-24 relative ">
              <Image
                src={logoImage}
                alt="SAMA Logo"
                fill
                className="object-contain"
              ></Image>
            </Link>
          </div>
          {/* logo */}

          {/* Middle nav */}
          <div className="h-full lg:flex items-center space-x-8    hidden ">
            {LINKS.map((link, index) => {
              return (
                <Link
                  data-id={`card-${index}`}
                  key={link.id}
                  href={link.link}
                  className={cn(
                    "p-2  delay-75 hover:text-blue-950 text-sm uppercase tracking-widest text-black/80 hover:underline hover:underline-offset-4",
                    {
                      "font-bold  text-blue-950 underline underline-offset-4  ":
                        pathname === link.link,
                    }
                  )}
                >
                  {/* <Heading className="sm:text-lg md:text-lg lg:text-lg tracking-wide"> */}
                  {link.name}
                  {/* </Heading> */}
                </Link>
              );
            })}
          </div>
          {/* Middle nav */}

          {/* CTA */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu strokeWidth={1} size={30}></Menu>
              </SheetTrigger>
              <SheetContent className="bg-gradient-to-b from-foreground to-background text-balck">
                <SheetHeader>
                  <SheetTitle className="text-white text-syne text-2xl">
                    SAMA Nextgen
                  </SheetTitle>
                  <div className="w-full h-[1px] border-b border-gray-200/20"></div>

                  <div className="flex flex-col mt-8">
                    {LINKS.map((link) => {
                      return (
                        <Link
                          href={link.link}
                          key={link.id}
                          className="p-2  delay-75 hover:text-white text-sm uppercase tracking-widest text-white/50"
                        >
                          <SheetClose>{link.name}</SheetClose>
                        </Link>
                      );
                    })}
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          {/* CTA */}
        </div>
      </header>
      {/* {isMobileOpen && (
        <div className="fixed top-32 left-0 mx-8 right-0 bottom-0 bg-gray-950 border border-gray-200/20 z-[1000] ">
          <div className="container h-full">
            <nav className="flex flex-col items-center gap-4 py-8  h-full ">
              {LINKS.map((link) => {
                return (
                  <Link
                    href={link.link}
                    key={link.id}
                    className="p-2  delay-75 hover:text-white text-sm uppercase tracking-widest text-white/50"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Header;
