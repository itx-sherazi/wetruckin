import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-6 w-full">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
          Send Us Message <span className="ml-2 text-blue-600">😊</span>
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-blue-700">First Name *</label>
              <input type="text" className="w-full border border-red-600 p-2 rounded-lg focus:ring-2 focus:ring-blue-400" required />
            </div>
            <div>
              <label className="block font-semibold text-blue-700">Last Name *</label>
              <input type="text" className="w-full border border-red-600 p-2 rounded-lg focus:ring-2 focus:ring-red-400" required />
            </div>
          </div>
          <div>
            <label className="block font-semibold text-blue-700">Phone</label>
            <input type="tel" className="w-full border border-red-600 p-2 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="0301 2345678" />
          </div>
          <div>
            <label className="block font-semibold text-blue-700">Email *</label>
            <input type="email" className="w-full border border-red-600 p-2 rounded-lg focus:ring-2 focus:ring-red-400" required />
          </div>
          <div>
            <label className="block font-semibold text-blue-700">Message</label>
            <textarea className="w-full border border-red-600 p-2 rounded-lg focus:ring-2 focus:ring-blue-400" rows="4"></textarea>
          </div>
          <button className="w-full text-white py-2 rounded-lg transition bg-gradient-to-r from-red-600 to-blue-600 hover:from-blue-600 hover:to-red-600">
            Submit
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <img
          src="https://wetruckin.com/wp-content/uploads/2023/04/14-2.jpg"
          alt="Customer Support"
          className="rounded-2xl shadow-lg w-full h-auto max-w-none sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

export default ContactForm;
