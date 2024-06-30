
import "./styles/globals.css";
import "atropos/css";
import React from "react";
import StarsCanvas from "./components/main/StarsCanvas";
import { Metadata } from "next";



export const metadata: Metadata = {
  metadataBase: new URL("https://srihari.com/"),
  title: "Sri hari narayan - SDE | SE ",
  description: "Full Stack Developer with 2+ years of expertise in MERN stack applications. Specializing in dynamic and responsive web development using modern JavaScript technologies and frameworks.",
   
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Sri hari",
    "Next.js",
    "React",
    "MERN"
  ],
  openGraph: {
    title: "Sri hari narayan - SDE | SE ",
    description:
      "Full Stack Developer with 2+ years of expertise in MERN stack applications. Specializing in dynamic and responsive web development using modern JavaScript technologies and frameworks.",
    images: "/3d-Ma.png",
  },
  alternates: {
    canonical: "https://srihari.com/",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="absolute top-0 z-[1] h-screen w-full  bg-[#0e081d] overflow-y-scroll overflow-x-hidden"
        // style={{
        //   backgroundImage:
        //     "url('./2.png')",
        // }}
      >
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
