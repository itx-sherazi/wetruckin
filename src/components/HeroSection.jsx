import React, { useState, useEffect } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [scrolling, setScrolling] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const colors = {
    red: "#B31942",
    white: "#FFFFFF",
    blue: "#0A3161"
  };

  const dropdownContent = {
    TRUCKS: ["Dry Vans", "Flatbeds", "Step Decks", "Hot Shots"],
    SERVICES: ["Freight Brokerage", "Dispatch Services", "Tracking System"]
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.85) 100%), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSisXsbbTI3d1uJOG3a-IbyIbpAn6qbP74QRA&s')`,
      }}
    >
      {/* Header Section */}
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 flex justify-between items-center transition-all duration-300 ${scrolling ? "bg-white shadow-md py-3" : "bg-transparent py-4"
        }`}>
        <img
          src="https://wetruckin.com/wp-content/uploads/2023/04/2.png"
          alt="WeTruckIn Logo"
          className="w-32 sm:w-48"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-3 items-center">
          {['HOME', '|', 'ABOUT', 'SERVICES', '|', 'TRUCKS', '|', 'CARRIER SETUP'].map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => ['TRUCKS', 'SERVICES'].includes(item) && setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a
                href="#"
                className={`${(hoveredItem === item || openMobileDropdown === item)
                    ? "text-[#B31942]"
                    : scrolling ? "text-gray-800" : "text-white"
                  } hover:text-[#B31942] transition-colors`}
              >
                {item}
              </a>

              {['TRUCKS', 'SERVICES'].includes(item) && (
                <div className={`absolute top-full left-0 bg-white shadow-lg rounded-lg pt-4 mt-4 min-w-[200px] transition-all duration-300 ${hoveredItem === item ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}>
                  {dropdownContent[item].map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md hover:text-[#B31942]"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <RxCross1 className="w-6 h-6" />
          ) : (
            <div className="space-y-1">
              <div className="w-6 h-[2px] bg-white"></div>
              <div className="w-6 h-[2px] bg-white"></div>
              <div className="w-6 h-[2px] bg-white"></div>
            </div>
          )}
        </button>

        <button className="hidden md:block bg-[#B31942] text-white px-6 py-2 rounded-lg hover:bg-[#8A0B32] transition-colors">
          CALL NOW
        </button>
      </header>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-[#0A3161] z-40 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="p-6">
          <nav className="flex flex-col space-y-4 mt-12">
            {['HOME', 'ABOUT', 'SERVICES', 'TRUCKS', 'CARRIER SETUP'].map((item) => (
              <div key={item} className="border-b border-[#B31942]">
                <button
                  className={`w-full text-left p-3 text-white ${openMobileDropdown === item ? "text-[#B31942]" : ""
                    }`}
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === item ? null : item)}
                >
                  {item}
                </button>

                {['TRUCKS', 'SERVICES'].includes(item) && (
                  <div className={`overflow-hidden transition-all duration-300 ${openMobileDropdown === item ? "max-h-96" : "max-h-0"
                    }`}>
                    {dropdownContent[item].map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-6 py-2 text-gray-300 hover:text-[#B31942]"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-white relative pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <p className="bg-black text-red-500 px-6 py-2 inline-block rounded-lg text-2xl sm:text-3xl shadow-xl">
          Expert dispatch for optimized logistics
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
          Reliable Truck Dispatch <br />
          For Your <span className="text-white font-bold">Business Success</span>
        </h2>

        <div className="mt-6 flex flex-wrap sm:flex-nowrap justify-center gap-4">
          <Link to='/about' className="flex items-center gap-2 bg-[#B31942] px-4 py-2 text-sm rounded-md text-white font-semibold hover:bg-[#8A0B32] transition-colors min-w-[120px]">
            <RiSendPlaneFill className="text-lg" />
            <span to='/about'>ABOUT US</span>
          </Link>

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