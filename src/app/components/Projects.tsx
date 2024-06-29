"use client";

import React from "react";
import Image from "next/image";
import { projectsArray } from "../constants";
import Atropos from "atropos/react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="lg:px-20 px-10 lg:mx-28 lg:my-40 my-10 lg:mt-60 ">
     
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {projectsArray.map((project: any) => {
          return (
            
            <div
              key={project.id}
              className="flex-col flex  p-6 gap-4 lg:mr-10 border border-gray-600  justify-center lg:mb-20 mb-8 rounded-xl bg-project-bg bg-cover"
            
            >
              <div className="lg:mb-4 mb-10 flex justify-center items-center ">
                <Atropos>
                  <Image
                    src={project.image}
                    className="w-[360px] h-[180px] rounded-2xl"
                    alt=""
                  />
                </Atropos>
              </div>
              <div className=" w-full  rounded-2xl">
                <h1 className="mb-4 font-grotesk font-bold text-3xl text-center">
                  {project.title}
                </h1>
                <p className=" text-gray-400 font-bold text-center">
                  {project.description}
                </p>
                <div className="flex gap-6 my-6 justify-center">
                  {project.stack.map((tech: any) => {
                    return (
                      <Image
                        src={tech.image}
                        alt=""
                        className="w-[32px] h-[32px]"
                        key={tech.id}
                      />
                    );
                  })}
                </div>
                <div className="flex items-center justify-center mb-2">
                  <button className="lg:px-6 p-2  flex items-center text-black  rounded-lg  bg-[#8ecae6] hover:bg-[#52d7e6] lg:mr-5 cursor-pointer font-extrabold transform transition-transform duration-300 hover:scale-110">
                    Demo   {" "}
                    <span>
                      <FaLongArrowAltRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
