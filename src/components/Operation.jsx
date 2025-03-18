import { FaPhoneAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

export default function Operation() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-b from-blue-100 to-red-100 py-10 px-6 max-w-7xl mx-auto rounded-xl shadow-lg">

      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full">
        <img
          src='https://wetruckin.com/wp-content/uploads/2023/04/7-1.jpg'
          alt="Truck Image"
          className="rounded-3xl w-full h-auto "
        />
      </div>
      
      {/* Right Side - Content */}
      <div className="md:w-1/2 w-full md:pl-10 text-center md:text-left px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          <span className="text-red-600">Streamline</span> Your Trucking <br /> Operations with 
          <span className="text-blue-600 italic"> Wetruckin</span>
        </h2>
        <p className="text-gray-800 mb-6 leading-relaxed text-sm md:text-base">
          <span className="text-blue-700 font-semibold">Wetruckin</span> is a comprehensive truck dispatching company that takes care of all 
          the necessary back-office tasks, allowing small carriers to compete with larger 
          fleets. Our process is straightforward: your dedicated truck dispatcher will 
          work with you to develop optimal routes that fit your preferred schedule.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <button className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition">
            <FaPhoneAlt /> CALL NOW
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            <FaRegFileAlt /> READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
