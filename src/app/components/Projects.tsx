"use client";

import React from "react";
import Image from "next/image";
import { projectsArray } from "../constants";


import Link from "next/link";

const Projects = () => {
  return (
    <div className="lg:px-20 px-10 lg:mx-28 lg:my-40 my-10 lg:mt-60 ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 lg:gap-0 ">
        {projectsArray.map((project: any) => {
          return (
            <div
              key={project.id}
              className="flex-col flex  p-6 gap-4 lg:mr-10 bg-gray-900 rounded-[10px] border border-[rgba(255,255,255,0.18)]  justify-center lg:mb-20 mb-8 "
            >
              <div className="lg:mb-4 mb-10 flex justify-center items-center ">
                <Image
                  src={project.image}
                  className="w-[360px] h-[180px] rounded-2xl"
                  alt=""
                />
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
                  <Link href={project.Link}>
                    <button className="flex items-center px-4 py-2 rounded-lg border hover:border-none hover:text-black  hover:bg-gradient-to-r from-color-2 to-color-3 font-extrabold transition-transform duration-300 hover:scale-105">
                      {project.Link === "" ? "Still in progress" : "Demo"}
                      <span>
                       
                      </span>
                    </button>
                  </Link>
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
