import React from "react";
import Model1 from "./Model1";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="  lg:flex lg:justify-center lg:flex-row   lg:my-[220px] lg:mb-60 flex-col justify-center gap-8 lg:gap-24  px-8">
      <div className="lg:w-[600px] sm:flex flex-col justify-center text-center lg:text-start">
        <div className="lg:text-3xl mb-6 text-xl mt-10 lg:mt-0">
          <h2 className="uppercase  text-[#8ecae6] tracking-[12px] font-semibold text-center">
            Sri hari narayan v
          </h2>
        </div>
        <div className="  ">
          <h1 className="lg:text-5xl text-3xl font-bold  z-50 leading-10 mb-8 text-[#ffb703] text-center">
            Full Stack Developer
          </h1>
          <p className="leading-8 text-[20px] text-center">
            A passionate full stack developer. I love exploring new technologies
            and building everything from intuitive front-end interfaces to
            robust back-end systems. Check out my work and let's create
            something amazing together!
          </p>
          <div className="flex items-center gap-4 my-10 mt-10 justify-center  mb-10">
            <Link href="/Projects">
            <button className="lg:p-5 p-3 border border-white rounded-lg bg-transparent text-white lg:mr-5 cursor-pointer font-light transform transition-transform duration-300 hover:scale-110 hover:bg-[#8ecae6] hover:text-black hover:border-none hover:font-normal">
              See my work
            </button>
            </Link>
            <Link href="#contact">
            <button className="lg:p-5 p-3 border border-white rounded-lg bg-transparent text-white lg:mr-5 cursor-pointer font-light transform transition-transform duration-300 hover:scale-110 hover:bg-[#8ecae6] hover:text-black hover:border-none hover:font-normal">
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
