"use client";

import React from "react";
import TextTransition, { presets } from "react-text-transition";

const Words = ["Web Developer", "Software Developer", "Programmer"];

const Texts = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition className=" bg-clip-text " springConfig={presets.gentle}>
        <h1 className="bg-clip-text bg-[#663dff] bg-[linear-gradient(319deg,#663dff_0%,#aa00ff_37%,#cc4499_100%)]">
          {Words[index % Words.length]}
        </h1>
      </TextTransition>
    </h1>
  );
};

export default Texts;
