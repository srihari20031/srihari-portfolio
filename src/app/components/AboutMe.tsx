import Image from "next/image";
import image2 from "../../../public/pexels-olya-prutskova-35454617-7163731.jpg";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import Atropos from "atropos/react";

const variants = {
  initial: {
    x: 0,
    y: -500,
    opacity: 1,
  },
  initial2: {
    x: 0,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
    },
  },
  animate2: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const AboutMe = () => {
  const aboutMeref = useRef(null);
  const isInView = useInView(aboutMeref, { margin: "-100px" });

  return (
    <motion.div className="mb-20 lg:mb-0 mt-24">
      <motion.div
        className="font-extrabold text-center text-[35px] max-sm:text-[24px] my-20 text-[#ffb703] mt-20 px-10"
        initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
      >
        Peek behind the curtain, Know who I am
      </motion.div>
      <motion.div
        className="flex lg:px-20 max-sm:px-10 md:px-10 lg:mx-28 lg:pt-10 lg:gap-40 mb-10 flex-col lg:flex-row  text-center lg:text-start items-center justify-center"
        ref={aboutMeref}
      >
        
        <motion.div
          variants={variants}
          initial="initial2"
          animate={isInView && "animate2"}
          className="w-[70%] max-sm:w-auto max-sm:mt-8 text-start "
        >
          <motion.div
            className="text-[21px] max-sm:text-[16px] leading-10 p-6 bg-[rgba(14,8,28,0.4)] bg-opacity-0   rounded-[10px] border border-[rgba(255,255,255,0.18)]"
            variants={variants}
          >
            <ul>
              <li className="mb-4">
                {" "}
                <p className="mb-4">
                  Hello! I'm{" "}
                  <span className="text-[#8ecae6] font-extrabold">
                    Sri hari narayan V
                  </span>
                  , weber with a strong background in creating dynamic,
                  responsive, and user-friendly web applications.
                </p>
              </li>
              <li>
                {" "}
                <p>
                  I graduated with a{" "}
                  <span className="text-[#8ecae6] font-extrabold">
                    Bachelor's degree in Computer Science from Velammal
                    institute of technology
                  </span>
                  , where I developed a solid foundation in programming and
                  software development. Since then, I've worked on numerous
                  projects that have challenged me to push the boundaries of my
                  skills and creativity.
                </p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
