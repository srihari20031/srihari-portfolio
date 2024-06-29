// components/LoadingPage.js
import React from 'react';
import { CgSpinnerTwoAlt } from "react-icons/cg";

const LoadingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#023047] text-[#ffbb00]">
      <CgSpinnerTwoAlt className="text-4xl animate-spin" />
      <h1 className="mt-4 text-2xl font-extrabold">Almost there!</h1>
    </div>
  );
};

export default LoadingPage;
