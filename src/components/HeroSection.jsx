import React, { useState, useEffect } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi';
const HeroSection = () => {
  const [scrolling, setScrolling] = useState(false);

  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "shippers"
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Jab bhi tab change ho, localStorage main save ho jaye
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);
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
<header
  className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-6 flex items-center ${
    scrolling ? "bg-white py-3" : "bg-white py-3"
  }`}
>
  {/* Logo */}
  <img
    src="https://wetruckin.com/wp-content/uploads/2023/04/2.png"
    alt="WeTruckIn Logo"
    className="w-32 md:w-48"
  />

  {/* Desktop Navigation */}
  <div className="hidden md:flex flex-1 items-center justify-center gap-2 ml-4">
    {/* Desktop Tabs */}
    <div className="flex space-x-1">
      <button
        onClick={() => setActiveTab("carriers")}
        className={`px-6 py-2 text-lg font-medium transition-all ${
          activeTab === "carriers" 
            ? "text-white bg-[#B31942]" 
            : "text-white bg-gray-500 hover:text-[#002868] hover:bg-gray-400"
        }`}
      >
        Carriers/Owner Operators
      </button>
      
      <button
        onClick={() => setActiveTab("shippers")}
        className={`px-6 py-2 text-lg font-medium transition-all ${
          activeTab === "shippers" 
            ? "text-white bg-[#B31942]" 
            : "text-white bg-gray-500 hover:text-[#002868] hover:bg-gray-400"
        }`}
      >
        Shippers/Brokers
      </button>
    </div>
  </div>

  {/* Call Now Button */}
  <button className="ml-auto bg-[#B31942] text-white px-8 py-2 rounded-lg hover:bg-[#8A0B32] hidden md:block">
    CALL NOW
  </button>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-black p-2 ml-auto"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  >
    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
  </button>
</header>

{/* Desktop Sub Header */}
<div className={`hidden md:block fixed top-[68px] left-0 right-0 z-40 bg-blue-500 rounded-b-2xl transition-all duration-300 py-3`}> 
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between text-white text-lg font-semibold space-x-8 overflow-x-auto scrollbar-hide">
      {activeTab === 'carriers' ? (
        <>
          <Link to='/findload' className="hover:text-red-500 transition-all">Find Loads</Link>
          <Link to='/loadmaps' className="hover:text-red-500 transition-all">Loads Map</Link>
          <Link to='/posttruck' className="hover:text-red-500 transition-all">Post Truck</Link>
          <Link to='/viewtruck' className="hover:text-red-500 transition-all">View My Truck</Link>
        </>
      ) : (
        <>
          <Link to='/findtruck' className="hover:text-red-500 transition-all">Find Trucks</Link>
          <Link to='/truckmap' className="hover:text-red-500 transition-all">Track Maps</Link>
          <Link to='/postlead' className="hover:text-red-500 transition-all">Post Loads</Link>
          <Link to='/viewload' className="hover:text-red-500 transition-all">View My Loads</Link>
        </>
      )}
    </div>
  </div>
</div>

{/* Mobile Menu */}
{isMobileMenuOpen && (
  <div className="fixed top-16 left-0 right-0 bg-white shadow-md p-4 md:hidden z-50">
    {/* Tab Selection */}
    <div className="flex flex-col space-y-3">
      <button
        onClick={() => setActiveTab("carriers")}
        className={`py-3 px-4 rounded text-left ${
          activeTab === "carriers" 
            ? "bg-[#B31942] text-white" 
            : "text-gray-700"
        }`}
      >
        Carriers/Owner Operators
      </button>

      <button
        onClick={() => setActiveTab("shippers")}
        className={`py-3 px-4 rounded text-left ${
          activeTab === "shippers" 
            ? "bg-[#B31942] text-white" 
            : "text-gray-700"
        }`}
      >
        Shippers/Brokers
      </button>
    </div>

    {/* Mobile Sub Navigation */}
    <div className="mt-4 p-4 rounded-lg">
      {activeTab === "carriers" ? (
        <div className="flex flex-col text-black space-y-2">
          <Link to='/findload' className="py-2 border-b border-gray-300 hover:bg-blue-500 hover:text-white transition-all">Find Loads</Link>
          <Link to='/loadmaps' className="py-2 border-b border-gray-300 hover:bg-blue-500 hover:text-white transition-all">Loads Map</Link>
          <Link to='/posttruck' className="py-2 border-b border-gray-300 hover:bg-blue-500 hover:text-white transition-all">Post Truck</Link>
          <Link to='/viewtruck' className="py-2 hover:bg-blue-500 hover:text-white transition-all">View My Truck</Link>
        </div>
      ) : (
        <div className="flex flex-col text-black space-y-2">
          <Link to='/findtruck' className="py-2 border-b border-gray-300 hover:bg-blue-500 hover:text-white transition-all">Find Trucks</Link>
          <Link to='/truckmap' className="py-2 border-b border-gray-300 hover:bg-blue-500 hover:text-white transition-all">Track Maps</Link>
          <Link to='/postlead' className="py-2 border-b border-gray-300 hover:bg-blue-500 hover:text-white transition-all">Post Loads</Link>
          <Link to='/viewload' className="py-2 hover:bg-blue-500 hover:text-white transition-all">View My Loads</Link>
        </div>
      )}
    </div>

    {/* Mobile Call Now Button */}
    <button className="w-full mt-4 bg-[#002868] text-white px-6 py-3 rounded-lg hover:bg-[#001845] transition-all">
      CALL NOW
    </button>

   
  </div>
)}
      {/* Hero Content */}
      <div className="max-w-4xl mx-auto lg:mt-20 text-white relative pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
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


