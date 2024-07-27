"use client";

import { IoIosArrowRoundUp } from "react-icons/io";
import { useState, useEffect } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow-lg z-50 flex items-center justify-center hover:bg-gray-800 transition"
      >
        <IoIosArrowRoundUp className="text-3xl" />
      </button>
    )
  );
};

export default ScrollTop;
