import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const FooterBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-blue-500 py-4 relative">
      {/* Copyright & Powered By */}
      <div className="text-center">
        <p className="text-white text-lg">
          WeTruckin © 2023, All Rights Reserved
        </p>
        <a
          href="https://savorsmarketing.com"
          className="underline font-semibold text-black"
        >
          Powered By SavorsMarketing.com
        </a>
      </div>

      {/* Scroll to Top Button (Only Visible on Scroll) */}
      {isVisible && (
        <button
          className="fixed right-6 bottom-6 bg-white p-3 rounded-full shadow-lg transition-opacity duration-300"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-black" />
        </button>
      )}
    </div>
  );
};

export default FooterBottom;
