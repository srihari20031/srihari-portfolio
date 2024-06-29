"use client";

import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [width, setWidth] = React.useState(1200);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <div className="flex justify-center relative lg:my-16 md:my-8 mt-2">
        <a
          href="/static/PDFs/Srihari-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:px-6 p-3  flex items-center   rounded-lg bg-[#009996] hover:bg-[#008b9a] lg:mr-5 cursor-pointer font-extrabold transform transition-transform duration-300 hover:scale-110"
        >
          <AiOutlineDownload />
          <span className="ml-2">Download CV</span>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className=" shadow-lg rounded-lg overflow-hidden md:w-3/4 lg:w-1/2">
          <Document
            file="/static/PDFs/Srihari-resume.pdf"
            className="w-full bg-white"
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.5 : 0.6}
              renderTextLayer={false}
              
            />
          </Document>
        
        </div>
      </div>
      <div className="flex justify-center relative lg:my-16 md:my-8 my-4 mb-4">
      <a
          href="/static/PDFs/Srihari-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:px-6 p-3  flex items-center   rounded-lg bg-[#009996] hover:bg-[#008b9a] lg:mr-5 cursor-pointer font-extrabold transform transition-transform duration-300 hover:scale-110"
        >
          <AiOutlineDownload />
          <span className="ml-2">Download CV</span>
        </a>
      </div>
    </div>
  );
};

export default Resume;
