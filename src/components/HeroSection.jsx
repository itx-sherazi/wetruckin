import React, { useState, useEffect } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.85) 100%), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSisXsbbTI3d1uJOG3a-IbyIbpAn6qbP74QRA&s')`,
      }}
    >
      {/* ✅ Sticky Header with Scroll Effect */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 flex justify-between items-center transition-all duration-300 ${
          scrolling ? "bg-white shadow-md py-3" : "bg-transparent py-4"
        }`}
      >
        <img 
          src="https://wetruckin.com/wp-content/uploads/2023/04/2.png" 
          alt="WeTruckIn Logo"
          className="w-32 sm:w-48"
        />
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-3 items-center">
          {['HOME', '|', 'ABOUT', '|', 'SERVICES', '|', 'TRUCKS', '|', 'CARRIER SETUP'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`text-black ${scrolling ? "text-gray-800" : "text-black"}`}
            >
              {item}
            </a>
          ))}
        </nav>
        
        <button className="hidden md:block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          CALL NOW
        </button>

        <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 md:hidden flex justify-center items-center">
          <div className="bg-black/95 p-6 rounded-lg w-4/5 max-w-sm">
            <nav className="flex flex-col space-y-4">
              {['HOME', 'ABOUT', 'SERVICES', 'TRUCKS', 'CARRIER SETUP'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-white text-lg py-2 border-b border-gray-700 hover:text-blue-400"
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg">
                CALL NOW
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-white relative pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <p className="bg-black text-blue-400 px-6 py-2 inline-block rounded-lg text-2xl sm:text-3xl shadow-xl">
          Expert dispatch for optimized logistics
        </p>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
          Reliable Truck Dispatch <br /> 
          For Your <span className="text-white font-bold">Business Success</span>
        </h2>
        
        {/* Buttons */}
        <div className="mt-6 flex flex-wrap sm:flex-nowrap justify-center gap-4">
          <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 text-sm rounded-md text-white font-semibold hover:bg-blue-600 transition-colors min-w-[120px]">
            <RiSendPlaneFill className="text-lg" />
            <span>ABOUT US</span>
          </button>
          
          <button className="flex items-center gap-2 bg-black px-4 py-2 text-sm rounded-md text-white border border-white hover:bg-gray-800 transition-colors min-w-[120px]">
            <CiBadgeDollar className="text-lg" />
            <span>OUR PRICING</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
