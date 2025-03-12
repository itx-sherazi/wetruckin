import { FaPhoneAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

export default function Operation() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 py-10 px-6 max-w-7xl mx-auto">

      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full">
        <img
          src='https://wetruckin.com/wp-content/uploads/2023/04/7-1.jpg'
          alt="Truck Image"
          className="rounded-3xl w-full h-auto"
        />
      </div>
      
      {/* Right Side - Content */}
      <div className="md:w-1/2 w-full md:pl-10 text-center md:text-left px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Streamline Your Trucking <br /> Operations with 
          <span className="text-blue-500 italic"> Wetruckin</span>
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
          Wetruckin is a comprehensive truck dispatching company that takes care of all 
          the necessary back-office tasks, allowing small carriers to compete with larger 
          fleets. Our process is straightforward: your dedicated truck dispatcher will 
          work with you to develop optimal routes that fit your preferred schedule.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
            <FaPhoneAlt /> CALL NOW
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900">
            <FaRegFileAlt /> READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
