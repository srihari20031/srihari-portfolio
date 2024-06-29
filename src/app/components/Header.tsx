"use client";
import React from "react";
import { sections } from "../constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import localFont from "next/font/local";
import { HiMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import Menu from "./Menu";
import { motion, AnimatePresence } from "framer-motion";

const Agustina = localFont({
  src: "../../../public/static/fonts/Agustina.woff",
});

const Header = () => {
  // const pathname = useLocation();

  const router = useRouter();
  const pathName = usePathname();

  const [openNavigation, setOpenNavigation] = React.useState(false);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const toggleNavigation = () => {
    setOpenNavigation((prevOpenNavigation) => !prevOpenNavigation);
  };
  const handleClick = (event: any) => {
    event.preventDefault();
    router.push(event.target.getAttribute("href"));
    
    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  return (
    <div
      className={`sticky top-0 left-0 w-full z-50 backdrop-blur-sm py-4 mt-4 px-28  md:px-4 max-sm:px-4 sm:px-4 `}
    >
      <div className="flex lg:items-center lg:px-10 px-4 justify-between md:items-center">
        <div className=" font-bold lg:px-8 xl:px-10 py-2" id="home">
          <Link
            href="/"
            className={`cursor-pointer  text-[#ffb703] font-extrabold text-[28px]  max-sm:text-[20px]  ${Agustina.className}`}
          >
            <h1>
              <span>&lt;</span>Shn <span>/&gt;</span>
            </h1>
          </Link>
        </div>

        <nav className="hidden fixed top-[80px] left-0 right-0 bottom-0 bg-n-8 lg:static lg:mx-auto lg:bg-transparent items-center gap-10 text-[18px] lg:flex lg:mr-2">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`flex items-center justify-center text-n-1 transition-colors hover:text-[#8ecae6] px-4 ${
                  section.link === pathName
                    ? "z-2 lg:text-[#ffb703]"
                    : "lg:text-n-1/50"
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
        </nav>
        <button
          className="mt-2 md:mt-0 lg:hidden text-xl cursor-pointer"
          onClick={toggleNavigation}
        >
          <HiMenu />
        </button>
      </div>
      <AnimatePresence>
        {openNavigation && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-[#009996] text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <div className=" font-bold lg:px-8 xl:px-10 py-2" id="home">
                  <Link
                    href="/"
                    className={`cursor-pointer  text-[black] font-extrabold text-[28px]  max-sm:text-[20px]  ${Agustina.className}`}
                  >
                    <h1>
                      <span>&lt;</span>Shn <span>/&gt;</span>
                    </h1>
                  </Link>
                </div>
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleNavigation}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-10 "
              >
                {sections.map((section) => (
                  <motion.div
                    key={section.id}
                    variants={mobileLinkVars}
                    className="text-3xl uppercase text-black flex items-center justify-center"
                  >
                    <span>{section.icon}</span>
                    <Link
                      className="block relative px-3 font-bold"
                      href={section.link}
                      onClick={handleClick}
                    >
                      {section.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
