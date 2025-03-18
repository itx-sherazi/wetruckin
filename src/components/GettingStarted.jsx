import React from "react";
import { FaTruck } from "react-icons/fa";

const GettingStarted = () => {
  return (
    <div className="bg-black text-white py-16 px-4 text-center">
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-center">
        Getting Started With <span className="text-blue-500">Wetruckin</span>
      </h2>
      <div className="w-[60%] md:w-[500px] lg:w-[900px] h-[3px] bg-gradient-to-r from-red-500 via-white to-blue-500 mx-auto mb-4"></div>
      
      <p className="text-white text-sm ">
        Signing up for our truck dispatch services is easy. Fill out our carrier
        application, get introduced to your personal dispatcher.
      </p>
      <p className="text-blue-400 font-semibold">
        Our streamlined onboarding process ensures a hassle-free experience.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-40 mt-12">
        {/* Sign Agreement */}
        <div className="flex flex-col items-center text-center max-w-xs">
            <img src="https://wetruckin.com/wp-content/uploads/2023/04/11-1.png" className="w-24 h-24 filter hue-rotate-180" alt=""/>
          <h3 className="text-xl font-bold text-red-500">Sign Agreement</h3>
          <p className="text-gray-300">Sign a quick service agreement</p>
        </div>

        {/* Send Us Your Docs */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <img src="https://wetruckin.com/wp-content/uploads/2023/04/12-1.png" className="w-24 h-24 filter grayscale brightness-150" alt=""/>
          <h3 className="text-xl font-bold text-white">Send Us Your Docs</h3>
          <p className="text-gray-300">MC Authority, W-9, and Insurance</p>
        </div>

        {/* Start Hauling Loads */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <img src="https://wetruckin.com/wp-content/uploads/2023/04/13-1.png" className="w-24 h-24 filter hue-rotate-0 saturate-200" alt=""/>
          <h3 className="text-xl font-bold text-blue-500">Start Hauling Loads</h3>
          <p className="text-gray-300">We begin dispatching immediately</p>
        </div>
      </div>

      {/* Carrier Setup Button */}
      <div className="mt-12 flex justify-center items-center">
        <button className="bg-red-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 shadow-lg">
          <FaTruck /> CARRIER SETUP
        </button>
      </div>
    </div>
  );
};

export default GettingStarted;
