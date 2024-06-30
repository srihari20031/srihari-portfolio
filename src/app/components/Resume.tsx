"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const getScale = () => {
    if (width > 1200) {
      return 1.5;
    } else if (width > 768) {
      return 1.3;
    } else if (width > 673) {
      return 1.1;
    } else if (width > 617) {
      return 1.0;
    } else if (width > 500) {
      return 0.8;
    } else if (width > 424) {
      return 0.7;
    } else if (width > 394) {
      return 0.6;
    } 
     else return 0.5
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="my-4 lg:my-16">
        <a
          href="/static/PDFs/Srihari-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 rounded-lg border hover:border-none hover:text-black hover:bg-gradient-to-r from-color-2 to-color-3 font-extrabold transition-transform duration-300 hover:scale-105"
        >
          <AiOutlineDownload className="mr-2" />
          <span>Download CV</span>
        </a>
      </div>

      <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <Document
          file="/static/PDFs/Srihari-resume.pdf"
          className="w-full bg-white"
        >
          <Page pageNumber={1} scale={getScale()} renderTextLayer={false} />
        </Document>
      </div>

      <div className="my-4 lg:my-16">
        <a
          href="/static/PDFs/Srihari-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 rounded-lg border hover:border-none hover:text-white hover:bg-gradient-to-r from-color-2 to-color-3 font-extrabold transition-transform duration-300 hover:scale-105"
        >
          <AiOutlineDownload className="mr-2" />
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
};

export default Resume;
