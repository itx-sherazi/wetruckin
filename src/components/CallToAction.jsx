import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">Have a Question?</h2>
        <p className="text-lg mt-2">Call to us or leave your phone number, and we call you back</p>
      </div>
      <div className="mt-5 md:mt-0 flex flex-col md:flex-row items-center gap-5">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-full">
          CALL ME BACK
        </button>
        <div className="text-right">
          <p className="text-sm">We're online 24/7</p>
          <p className="text-2xl font-bold">+1 (415) 941-5945</p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;