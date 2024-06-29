"use client";
import React from "react";
import { motion } from "framer-motion";
import LoadingPage from "./components/LoadingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate a delay to showcase the loading page
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <Header />
      {children}
      <Footer />
    </motion.div>
  );
}
