"use client";

import React from "react";

import { sections } from "../constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiMenu } from "react-icons/hi";

const Menu = () => {
  const router = useRouter();
  const pathName = usePathname();

  const [openNavigation, setOpenNavigation] = React.useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prevOpenNavigation) => !prevOpenNavigation);

    console.log(openNavigation);
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    router.push(event.target.getAttribute("href"));
  };
  return (
    <div className=" left-0 top-0 w-full h-screen origin-top  text-black p-10 bg-black">
      
      <div className="flex flex-col h-full justify-center  items-center gap-4  ">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`flex items-center justify-center text-n-1 transition-colors hover:text-[#009996] px-4 ${
              section.link === pathName ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
            }`}
          >
            <span>{section.icon}</span>
            <Link
              className="block relative px-3 font-bold"
              href={section.link}
              onClick={handleClick}
            >
              {section.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

