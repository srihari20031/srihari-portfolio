"use client";
import "./styles/globals.css";
import "atropos/css";
import React from "react";
import StarsCanvas from "./components/main/StarsCanvas";


// export const metadata: Metadata = {
//   title: "Sriharinarayan V",
//   description: "My portfolio",
// };



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="absolute top-0 z-[-2] h-screen w-full  bg-[#0e081d] overflow-y-scroll overflow-x-hidden"
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
