import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-100% bg-[#0d3857]  backdrop-blur-[5.5px] bg-opacity-30">
      <div className="flex items-center justify-between mt-20  px-20 py-3 max-sm:px-6 text-gray-400 lg:flex-row max-sm:flex-col">
        <div>
        <p className="lg:text-lg text-normal max-sm:mb-2">
          {" "}
          Made with ❤️ by Sri hari narayan V
        </p>
        </div>
        <div className="flex gap-4 max-sm:gap-2 items-center justify-center  lg:text-2xl text-xl">
          <Link
            href="https://www.instagram.com/sri__hari__narayan__v/"
            className=" p-2 rounded-xl transform transition-transform duration-300 hover:scale-125"
          >
            <BsInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sriharinarayanv/"
            className="  p-2 rounded-xl transform transition-transform duration-300 hover:scale-125"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://github.com/srihari20031"
            className=" p-2 rounded-2xl transform transition-transform duration-300 hover:scale-125"
          >
            <BsGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
