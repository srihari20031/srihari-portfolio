"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import localFont from "next/font/local";
import { HiMenu, HiX } from "react-icons/hi";

import { motion, AnimatePresence } from "framer-motion";
import { AiFillProject, AiOutlineDownload } from "react-icons/ai";

const Agustina = localFont({
  src: "../../../public/static/fonts/Agustina.woff",
});

interface NavigationItemsProps {
  pathName: string;
  handleClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  isMobile: boolean;
}

const NavigationItems: React.FC<NavigationItemsProps> = ({ pathName, handleClick, isMobile }) => (
  <div className={`relative flex flex-col items-center justify-center m-auto ${isMobile ? '' : 'lg:flex-row'} gap-4`}>
    <div
      className={`flex items-center justify-center px-4 ${isMobile ? '' : 'hover:bg-gray-800 hover:rounded-lg hover:p-2'} ${
        "/Projects" === pathName ? "z-2 bg-gray-800 rounded-lg p-2" : "lg:text-white"
      }`}
    >
      <span className={`block relative font-bold ${
          "/Projects" === pathName ? "text-color-2" : ""
        } ${isMobile ? 'text-2xl' : ''}`}>
        <AiFillProject />
      </span>
      <Link
        className={`block relative px-3 font-bold ${
          "/Projects" === pathName ? "text-white" : ""
        } ${isMobile ? 'text-2xl' : ''}`}
        href="/Projects"
        onClick={handleClick}
      >
        Projects
      </Link>
    </div>
    <a
      href="/static/PDFs/Srihari-resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center rounded-lg ${isMobile ? '' : 'hover:bg-gray-800 hover:rounded-lg hover:p-2'} font-bold ${isMobile ? 'text-2xl' : ''}`}
    >
      <AiOutlineDownload className="mr-2" />
      <span>Download CV</span>
    </a>
  </div>
);

const Header: React.FC = () => {
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

  const toggleNavigation = () => {
    setOpenNavigation((prevOpenNavigation) => !prevOpenNavigation);
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    if (href) {
      router.push(href);
    }

    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  useEffect(() => {
    // Close the navigation menu after navigation
    setOpenNavigation(false);
  }, [pathName]);

  return (
    <div className={`fixed top-0 left-0 right-0 backdrop-blur-sm w-full z-50 py-6 px-28 md:px-4 max-sm:px-4 sm:px-4`}>
      <div className="flex lg:items-center lg:px-10 px-4 justify-between md:items-center">
        <div className="lg:px-8 py-2" id="home">
          <Link
            href="/"
            className={`cursor-pointer font-extrabold text-[28px] max-sm:text-[20px] ${Agustina.className}`}
          >
            <h1 className="text-color-2">Sri hari narayan</h1>
          </Link>
        </div>

        <nav className="hidden fixed top-[80px] left-0 right-0 bottom-0 bg-n-8 lg:static lg:bg-transparent items-center text-[17px] lg:flex lg:mr-2">
          <NavigationItems pathName={pathName} handleClick={handleClick} isMobile={false} />
        </nav>
        <button className="md:mt-0 lg:hidden text-xl cursor-pointer" onClick={toggleNavigation}>
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
            className="fixed left-0 top-0 w-full h-screen origin-top bg-[#0e081d] p-10 text-color-2"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center">
                <div className="font-bold lg:px-8 xl:px-10 py-2" id="home">
                  <Link
                    href="/"
                    className={`cursor-pointer text-color-2 font-extrabold text-[28px] max-sm:text-[20px] ${Agustina.className}`}
                  >
                    <h1>
                      <span>&lt;</span>Shn <span>/&gt;</span>
                    </h1>
                  </Link>
                </div>
                <p className="cursor-pointer text-lg" onClick={toggleNavigation}>
                 <HiX />
                </p>
              </div>
              <div className="flex flex-col h-full justify-center font-lora items-center gap-10">
                <NavigationItems pathName={pathName} handleClick={handleClick} isMobile={true} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;