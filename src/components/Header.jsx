import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Icons for menu & close
import { Link } from 'react-router-dom';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "shippers"
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [message, setMessage] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setMessage(true);
    setTimeout(() => setMessage(false), 3000);
  };

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className="fixed top-0 md:top-0 left-0 right-0 z-50 w-full md:w-full">
      {/* Main Header */}
      <header className="relative flex justify-between items-center bg-white py-2 px-4 ">
        {/* Left Side Logo */}
        <img
          src="https://wetruckin.com/wp-content/uploads/2023/04/2.png"
          alt="WeTruckin Logo"
          className="h-12 "
        />

        {/* Center Buttons (Hidden in mobile) */}
        <div className="hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2  gap-2">
          <button
            onClick={() => setActiveTab("carriers")}
            className={`px-6 text-lg font-medium transition-all  ${activeTab === "carriers"
                ? "text-white bg-blue-500"
                : "text-white bg-red-800"
              }`}
          >
            Carriers/Owner Operators
          </button>
          <button
            onClick={() => setActiveTab("shippers")}
            className={`px-7 py-2 text-lg font-medium transition-all ${activeTab === "shippers"
                ? "text-white bg-blue-500"
                : "text-white bg-red-800"
              }`}
          >
            Shippers/Brokers
          </button>
        </div>

        {/* Right Side Call Now Button (Hidden in mobile) */}
        <button className="hidden md:block bg-red-700 text-white px-6 py-2 text-sm font-semibold">
          CALL NOW
        </button>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Menu - Slide from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-5 space-y-4 transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button (X) */}
        <button
          className="absolute top-3 right-3 text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Center Buttons */}
        <button
          onClick={() => setActiveTab("carriers")}
          className={`px-6 py-2 text-lg font-medium transition-all  ${activeTab === "carriers"
              ? "text-white bg-blue-500"
              : "text-white bg-red-800"
            }`}
        >
          Carriers/Owner Operators
        </button>
        <button
          onClick={() => setActiveTab("shippers")}
          className={`px-7 py-3 text-lg font-medium transition-all ${activeTab === "shippers"
              ? "text-white bg-blue-500"
              : "text-white bg-red-800"
            }`}
        >
          Shippers/Brokers
        </button>

        {/* Lower Header Buttons */}
        <div className="flex flex-col gap-2">
          {activeTab === 'carriers' ? (
            <>
              <Link to='/findload' className="hover:text-red-600 transition-all py-2">Find Loads</Link>
              <a href="/loadmaps" onClick={handleClick} className="hover:text-red-500 transition-all">
                Loads Map
              </a>
              <Link to='/posttruck' className="hover:text-red-600 transition-all py-2">Post Truck</Link>
              <a href="/viewtruck" className="hover:text-red-600 transition-all py-2">View my Truck</a>
            </>
          ) : (
            <>
              <Link to='/findtruck' className="hover:text-red-600 transition-all py-2">Find Trucks</Link>
              <a href="/truckmap" className="hover:text-red-600 transition-all py-2">Truck Maps</a>
              <Link to='/postlead' className="hover:text-red-600 transition-all py-2">Post Loads</Link>
              <a href="/viewload" className="hover:text-red-600 transition-all py-2">View my Loads</a>
            </>
          )}
        </div>

        {/* Call Now Button */}
        <button className="bg-red-700 text-white w-full py-2 rounded-md text-sm font-semibold">
          CALL NOW
        </button>
      </div>

      {/* Desktop Lower Header */}
      <div className="hidden md:flex bg-blue-500 text-white py-3 px-4 justify-between items-center">
        {activeTab === 'carriers' ? (
          <>
            <Link to='/findload' className="hover:text-red-500 transition-all">Find Loads</Link>
            <a href="/loadmaps" onClick={handleClick} className="hover:text-red-500 transition-all">
              Loads Map
            </a>
            <Link to='/posttruck' className="hover:text-red-500 transition-all">Post Truck</Link>
            <a href="/viewtruck" onClick={handleClick} className="hover:text-red-500 transition-all">
              View my Truck
            </a>
          </>
        ) : (
          <>
            <Link to='/findtruck' className="hover:text-red-500 transition-all">Find Trucks</Link>
            <a href="/truckmap" onClick={handleClick} className="hover:text-red-500 transition-all">
              Truck Maps
            </a>
            <Link to='/postlead' className="hover:text-red-500 transition-all">Post Loads</Link>
            <a href="/viewload" onClick={handleClick} className="hover:text-red-500 transition-all">
              View my Loads
            </a>
          </>
        )}
      </div>
      {message && (
        <div className="fixed text-2xl top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white z-30 w-[700px] h-20 flex justify-center items-center font-bold rounded-lg shadow-lg">
          🚧 This page is under development! Please check back later.
        </div>
      )}
    </div>
  );
};

export default Header;
