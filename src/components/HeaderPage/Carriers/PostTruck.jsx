import React from 'react'
import HeroSection from '../../HeroSection';

const PostTruck = () => {
  return (
    <div>
        <HeroSection/>
        <div className="p-4 md:p-6">
      {/* Heading Section */}
      <div className="mb-6">
        <h1 className="text-xl md:text-3xl ml-10 font-bold text-blue-600">Trucks Entry Page</h1>
        <button className="mt-3 md:mt-6 ml-12 bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded text-sm md:text-base">
          Enter Multiple Trucks
        </button>
      </div>

      {/* Origin/Destination Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <h2 className="text-xs md:text-sm font-bold text-gray-800">ORIGIN</h2>
          <div className="mt-1 bg-[#f1f1f1] p-3 ">
            <input
              type="text"
              placeholder="Origin City or Zipcode"
              className="w-[300px] bg-transparent border border-gray-400 rounded-md px-3 py-2 text-sm md:text-base text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xs md:text-sm font-bold text-gray-800">DESTINATION</h2>
          <div className="mt-1 bg-[#f1f1f1]  p-3 ">
            <input
              type="text"
              placeholder="Destination City or Zipcode"
              className="w-[300px] bg-transparent border border-gray-400 rounded-md px-3 py-2 text-sm md:text-base text-gray-700 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Trailer Type Section */}
      <div className="mt-4 ">
        <h2 className="text-xs md:text-sm font-bold text-gray-800">TRAILER TYPE</h2>
        <div className="mt-3 bg-[#f1f1f1]  p-4 md:p-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              ["V (Dry Van)", "MX (Maxi Flat)", "LB (Lowboy)", "FINT (Flat - Intermodal)", "VA (Van+Airride)", "HB (Hopper Bottom)", "R (Reefer)", "CV (Curtain Van)", "FS (Flat+Sides)"],
              ["VINT (Van - Intermodal)", "HS (Hotshot)", "FT (Flat+Tarp)", "DD (Double Drop)", "CRG (Cargo Van)", "LA (Landall)", "RINT (Reefer - Intermodal)", "DT (Dump Trailer)", "CONT (Container)"],
              ["SD (Step Deck/Single Drop)", "AC (Auto Carrier)", "F (Flatbed)", "VV (Van+Vented)", "BT (Box Truck)", "PO (Power Only)", "RGN (Removable Gooseneck)", "TNK (Tanker)", "PNEU (Pneumatic)"]
            ].map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col space-y-2">
                {column.map((item, index) => (
                  <label key={index} className="flex items-center space-x-2 text-gray-700 text-sm md:text-base">
                    <input type="checkbox" className="form-checkbox h-4 w-4" />
                    <span>{item}</span>
                  </label>
                ))}
                {colIndex === 0 && (
                  <label className="flex items-center space-x-2 text-gray-700 text-sm md:text-base">
                    <input type="checkbox" className="form-checkbox h-4 w-4" />
                    <span>Other</span>
                    <input type="text" className="border border-gray-400 bg-white rounded-md px-2 py-1 text-gray-700 w-20 md:w-34" />
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Size & Date Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Size Section */}
        <div>
  <h3 className="text-xs md:text-sm font-semibold text-gray-700 mb-2">SIZE</h3>
  <div className="bg-[#f1f1f1] p-3 md:p-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 w-full">
    {[
      { label: "Length", unit: "ft" },
      { label: "Width", unit: "ft" },
      { label: "Height", unit: "ft" },
      { label: "Weight", unit: "lbs" }
    ].map((item, index) => (
      <label key={index} className="flex items-center gap-1 md:gap-2 text-sm  w-full">
        {item.label}:
        <input type="text" className="border bg-white  rounded px-2 py-1 w-[80px]" placeholder={item.unit} />
      </label>
    ))}
  </div>
</div>


        {/* Date Section */}
        <div>
          <h3 className="text-xs md:text-sm font-semibold text-gray-700 mb-2">DATE(S)</h3>
          <div className="bg-[#f1f1f1]  p-3 md:p-4 ">
            <label className="flex items-center gap-2 text-sm ">
              Date Available:
              <input type="date" className="border rounded px-2 py-1 bg-gray-50 w-32 md:w-40" defaultValue="2025-03-24" />
            </label>
          </div>
        </div>
      </div>

      {/* Other Section */}
      <div className="mt-6 ">
        <h3 className="text-xs md:text-sm font-semibold text-gray-700 mb-2">OTHER</h3>
        <div className="bg-[#f1f1f1]  p-3 md:p-4  space-y-3 md:space-y-0 md:flex md:justify-between md:items-center md:gap-4">
          <label className="block w-full gap-7 md:flex-1 text-sm md:text-base">
            Comments:
            <input type="text" className="border rounded px-2 bg-white py-1 ml-3  md:w-32 mt-1 md:mt-0" />
          </label>
          <label className="block w-full md:w-auto text-sm md:text-base">
            Category:
            <select className="border bg-gray-50 rounded px-2  py-1 ml-5 w-46 md:w-32 mt-1 md:mt-0">
              <option>Live</option>
              <option>Archived</option>
            </select>
          </label>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-6 flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm md:text-base md:w-48">
          Submit Truck
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded text-sm md:text-base md:w-48">
          Clear Form
        </button>
      </div>
    </div>
    </div>
  );
}

export default PostTruck;