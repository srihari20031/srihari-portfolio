"use client";

import "./styles/globals.css";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Connect from "./components/Connect";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <div id="About" className=" scroll-m-10">
        <AboutMe />
      </div>
      <Connect />
    </main>
  );
}
