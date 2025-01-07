"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact me!",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center items-center"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="mt-32 mb-40 text-center text-2xl">
          <Link onClick={handleLinkClick} href="/">
            <h1 className="text-white text-4xl font-semibold">
              Philip<span className="text-accent italic text-3xl">dev</span>
            </h1>
          </Link>
        </SheetTitle>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return link.path === "/contact" ? (
              <Link key={index} href={link.path} onClick={handleLinkClick}>
                <Button key={index} >
                  {link.name}
                </Button>
              </Link>
            ) : (
              <Link
                key={index}
                href={link.path}
                onClick={handleLinkClick}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
