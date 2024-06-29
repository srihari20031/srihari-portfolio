import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

import { IoMail } from "react-icons/io5";
import { socialMediaLinks } from "../constants";
import Image from "next/image";

const Connect = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:my-40 md:my-28 max-sm:my-18 px-8">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="lg:text-4xl md:text-3xl text-2xl">Ready to Team up?</h1>
        <h1 className="lg:text-2xl md:text-xl text-lg">
          Call to <span className="text-[#76cce8] font-bold">Action</span>
        </h1>
      </div>
      <div className="flex items-center justify-center lg:text-xl md:text-lg text-normal lg:gap-8 md:gap-6 gap-4 mt-10 ">
        {socialMediaLinks.map((socialMedia) => {
          return (
            <Link
              key={socialMedia.name}
              href={socialMedia.link}
              className=" text-black bg-white p-2 rounded-xl transform transition-transform duration-300 hover:scale-125 w-[48px] h-[48px] max-sm:w-[40px] max-sm:h-[40px] hover:shadow-custom-white"
            >
              <Image src={socialMedia.icon} alt="" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Connect;
