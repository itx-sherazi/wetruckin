import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {/* Left Section */}
        <div className="space-y-4">
          <img
            src="https://wetruckin.com/wp-content/uploads/2023/04/2.png"
            alt="WeTruckin Logo"
            className="w-86 mb-4"
          />
          <p className="flex items-center gap-2 text-gray-400 mt-2">
            <IoLocationSharp className="text-lg text-blue-500" />{" "}
            <span className="text-white">30 N Gould St Ste R, Sheridan, WY 82801</span>
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <FiPhone className="text-lg text-blue-500" />{" "}
            <span className="text-white">+1 (415) 941-5945</span>
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <FiMail className="text-lg text-blue-500" />{" "}
            <span className="text-white">support@wetruckin.com</span>
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors">
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a href="#" className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors">
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="pl-10">
          <h3 className="text-blue-500 font-bold mb-3">SERVICES</h3>
          <ul className="text-white space-y-2">
            <li>Truck Dispatching</li>
            <li>Billing</li>
            <li>Document Management</li>
            <li>Factoring Service</li>
            <li>Rate Negotiation</li>
            <li>SAFETY/DOT Compliance</li>
            <li>IFTA</li>
            <li>Company Formation</li>
          </ul>
        </div>

        {/* Trucks Type */}
        <div className="pl-10">
          <h3 className="text-red-600 font-bold mb-3">TRUCKS TYPE</h3>
          <ul className="text-white space-y-2">
            <li>Dry Van</li>
            <li>Step Deck</li>
            <li>Reefer</li>
            <li>Flatbed</li>
            <li>Hotshot</li>
            <li>Boxtruck</li>
            <li>Straight Truck</li>
            <li>Power Only</li>
          </ul>
        </div>

        {/* Links */}
        <div className="pl-10">
          <h3 className="text-blue-500 font-bold mb-3">LINKS</h3>
          <ul className="text-white space-y-2">
            <li>Home</li>
            <li>About Wetrukin</li>
            <li>Carrier Setup</li>
            <li>Contact Support</li>
            <li>Latest News</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;