import React, { useState, useEffect } from "react";

import { RxCross1 } from "react-icons/rx";
import TrustSection from "../components/TrustSection";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import CopyRight from '../components/CopyRight'
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
    <div>
      {/* // hero section */}
 <section className="relative min-h-[100vh] bg-cover bg-center flex flex-col justify-between text-center"
style={{
  backgroundImage: `linear-gradient(to bottom,  rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%), url('https://media.istockphoto.com/id/121025674/photo/tractor-trailers-in-line.jpg?s=612x612&w=0&k=20&c=6kS3rbtGlidbZbtj69VzFct0-DkXAyPGXRD-GJPN-No=')`,
}}
>
{/* Header Section */}
<header className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 flex justify-between items-center transition-all duration-300 ${
  scrolling ? "bg-white shadow-md py-3" : "bg-transparent py-4"
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
          className={`${
            (hoveredItem === item || openMobileDropdown === item) 
            ? "text-[#B31942]" 
            : scrolling ? "text-gray-800" : "text-white"
          } hover:text-[#B31942] transition-colors`}
        >
          {item}
        </a>

        {['TRUCKS', 'SERVICES'].includes(item) && (
          <div className={`absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 min-w-[200px] transition-all duration-300 ${
            hoveredItem === item ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
          }`}>
            {dropdownContent[item].map((subItem) => (
              <a
                key={subItem}
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md hover:text-[#B31942]"
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
<div className={`fixed top-0 left-0 h-full w-64 bg-[#0A3161] z-40 transform transition-transform duration-300 ${
  isMenuOpen ? "translate-x-0" : "-translate-x-full"
}`}>
  <div className="p-6">
    <nav className="flex flex-col space-y-4 mt-12">
      {['HOME', 'ABOUT', 'SERVICES', 'TRUCKS', 'CARRIER SETUP'].map((item) => (
        <div key={item} className="border-b border-[#B31942]">
          <button
            className={`w-full text-left p-3 text-white ${
              openMobileDropdown === item ? "text-[#B31942]" : ""
            }`}
            onClick={() => setOpenMobileDropdown(openMobileDropdown === item ? null : item)}
          >
            {item}
          </button>

          {['TRUCKS', 'SERVICES'].includes(item) && (
            <div className={`overflow-hidden transition-all duration-300 ${
              openMobileDropdown === item ? "max-h-96" : "max-h-0"
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
<div className="flex-grow flex flex-col justify-center">
<div className="max-w-9xl text-white relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
<span className="text-xl text-red-500">Leading Truck Dispatching Company</span><br/>
<span className="text-blue-500">About WeTruckin</span>
</h2>
</div>
</div>

{/* Counter Boxes */}
<div className="w-full">
<div className="grid grid-cols-2  md:grid-cols-4 ">

{/* Clients */}
<div className="bg-gray-700 p-6 rounded-none shadow-md text-center">
<h3 className="text-4xl font-bold text-red-500">6500</h3>
<p className="text-lg text-white mt-2">CLIENTS</p>
</div>

{/* Drivers */}
<div className="bg-gray-700 p-6 rounded-none shadow-md text-center">
<h3 className="text-4xl font-bold text-white">420</h3>
<p className="text-lg text-blue-500 mt-2">DRIVERS</p>
</div>

{/* Cups of Coffee */}
<div className="bg-gray-900 p-6 rounded-none shadow-md text-center">
<h3 className="text-4xl font-bold text-blue-500">1000</h3>
<p className="text-lg text-red-500 mt-2">CUPS OF COFFEE</p>
</div>

{/* Satisfied Users */}
<div className="bg-gray-900 p-6 rounded-none shadow-md text-center">
<h3 className="text-4xl font-bold text-white">100%</h3>
<p className="text-lg text-white mt-2">SATISFIED USERS</p>
</div>

</div>
</div>



</section>
{/* timeline section */}
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Heading with Logo */}
      <div className="flex justify-center items-center gap-2 mb-8">
        <img
          src="https://wetruckin.com/wp-content/uploads/2023/04/2.png"
          alt="WeTruckIn Logo"
          className="w-20 sm:w-32"
        />
        <h1 className="text-2xl sm:text-3xl font-bold">RoadMap</h1>
      </div>

      
      <div className="relative w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
  {/* Timeline Line Container */}
  <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
    <div className="h-full border-l-2 border-dotted border-red-400"></div>
  </div>

  {/* Timeline Items */}
  <div className="space-y-24">
    {/* Item 1 */}
    <div className="relative">
    <div className="pb-1">
<div className="absolute  left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-md text-lg font-bold z-10">
        1
      </div>
</div>
      
      {/* Content Grid with Adjusted Spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-12 items-center relative">
        {/* Center Connecting Dot */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 w-4 h-4 rounded-full z-10"></div>
        
        {/* Text Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg min-h-[270px] flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-blue-500 mb-4">2021: Company Launch and Team Building</h3>
          <ul className="text-gray-700 space-y-2">
            <li>✅ Established WeTruckin as a new truck dispatching company in the USA.</li>
            <li>✅ Built a team of experienced dispatchers.</li>
            <li>✅ Conducted market research to identify truck drivers' needs.</li>
            <li>✅ Launched our website and started online promotions.</li>
          </ul>
        </div>

        {/* Image */}
        <div className="bg-white p-3 rounded-lg shadow-lg h-[270px] overflow-hidden">
          <img
            src="https://wetruckin.com/wp-content/uploads/2023/04/67.jpg"
            alt="Teamwork"
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>

    {/* Item 2 */}
    <div className="relative">
    <div className="pb-5">
<div className="absolute  left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-md text-lg font-bold z-10">
        2
      </div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-12 items-center relative">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 w-4 h-4 rounded-full z-10"></div>
        <div className="bg-white p-6 rounded-lg shadow-lg min-h-[270px] flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-blue-500 mb-4">2022: Expansion and Growth</h3>
          <ul className="text-gray-700 space-y-2">
            <li>✅ Expanded our services to new regions.</li>
            <li>✅ Increased our team size by 50%.</li>
            <li>✅ Partnered with major logistics companies.</li>
            <li>✅ Improved our technology platform.</li>
          </ul>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-lg h-[270px] overflow-hidden">
          <img
            src="https://wetruckin.com/wp-content/uploads/2023/04/67.jpg"
            alt="Expansion"
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>

    {/* Item 3 */}
    
    <div className="relative">
<div className="pb-5">
<div className="absolute  left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-md text-lg font-bold z-10">
        3
      </div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-12 items-center relative">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 w-4 h-4 rounded-full z-10"></div>
        <div className="bg-white p-6 rounded-lg shadow-lg min-h-[270px] flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-blue-500 mb-4">2023: Innovation and Leadership</h3>
          <ul className="text-gray-700 space-y-2">
            <li>✅ Introduced AI-based dispatching solutions.</li>
            <li>✅ Recognized as a leader in the industry.</li>
            <li>✅ Achieved 100% customer satisfaction.</li>
            <li>✅ Expanded our service offerings.</li>
          </ul>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-lg h-[270px] overflow-hidden">
          <img
            src="https://wetruckin.com/wp-content/uploads/2023/04/67.jpg"
            alt="Innovation"
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>

</div>
    
  );
};

export default HeroSection;

