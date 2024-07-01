import React from "react";
import Man from "../../../public/3d-ma.png"
import Link from "next/link";
import Image from "next/image";

const Intro = () => {
  return (
    <div className=" lg:flex lg:justify-center lg:flex-row  lg:my-[60px] lg:mb-60 flex-col justify-center gap-8 lg:gap-24   px-8">
      <div className="lg:w-[600px] sm:flex flex-col justify-center text-center lg:text-start mt-24">
        <div className="flex items-center justify-center mb-4">
          <Image src={Man} alt="" className=" rounded-full w-[250px] h-[250px] max-sm:w-[200px] max-sm:h-[200px] bg-slate-800"/>
        </div>
        <div className="lg:text-3xl mb-6 text-xl mt-10 lg:mt-0">
          <h2 className="uppercase   tracking-[12px] font-semibold text-center ">
            Sri hari narayan v
          </h2>
        </div>
        <div>
          <h1 className="lg:text-4xl text-3xl font-bold  z-50 leading-10 mb-8 bg-gradient-to-r from-color-2 to-color-3 bg-clip-text text-transparent text-center">
            Software Developer
          </h1>
          <p className="leading-8 text-[20px] text-center">
            A passionate full stack developer who exploring new technologies
            and building everything from intuitive front-end interfaces to
            robust back-end systems.
          </p>
          <div className="flex items-center gap-4 my-10 mt-10 justify-center  mb-10">
            <Link href="/Projects">
              <button className="lg:p-5 p-3 border border-white rounded-lg bg-transparent text-white lg:mr-5 cursor-pointer font-light transform transition-transform duration-300 hover:scale-110 hover:bg-gradient-to-r from-color-2 to-color-3  hover:text-black hover:border-none hover:font-normal">
                See my work
              </button>
            </Link>
            <Link href="#Contact">
              <button className="lg:p-5 p-3 border border-white rounded-lg bg-transparent text-white lg:mr-5 cursor-pointer font-light transform transition-transform duration-300 hover:scale-110 hover:bg-gradient-to-r from-color-2 to-color-3  hover:text-black hover:border-none hover:font-normal">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
