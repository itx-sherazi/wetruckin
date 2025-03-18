import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-gray-900 text-gray-900 py-10 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between border-t-4 border-red-600">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-red-600">Have a Question?</h2>
        <p className="text-lg mt-2 text-blue-600">
          Call us or leave your phone number, and we will call you back
        </p>
      </div>
      <div className="mt-5 md:mt-0 flex flex-col md:flex-row items-center gap-5">
        <button className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg">
          CALL ME BACK
        </button>
        <div className="text-right">
          <p className="text-sm text-white">We're online 24/7</p>
          <p className="text-2xl font-bold text-blue-700">+1 (415) 941-5945</p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
