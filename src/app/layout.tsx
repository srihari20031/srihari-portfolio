import "./styles/globals.css";
import StarsCanvas from "./components/main/StarsCanvas";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sriharinarayantech.vercel.app/"),
  title: "Sri hari narayan - SDE | SE ",
  description:
    "Full Stack Developer with 2+ years of expertise in developing MERN stack applications. Specializing in dynamic and responsive web development using modern JavaScript technologies and frameworks.",

  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Sri hari",
    "Next.js",
    "React",
    "MERN",
  ],
  openGraph: {
    title: "Sri hari narayan - SDE | SE ",
    description:
      "Full Stack Developer with 2+ years of expertise in developing MERN stack applications. Specializing in dynamic and responsive web development using modern JavaScript technologies and frameworks.",
    images: [
      {
        url: "/Portfolio.png",
        width: 800,
        height: 600,
        alt: "3D Image",
      },
    ],
  },
  alternates: {
    canonical: "https://sriharinarayantech.vercel.app/",
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
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
