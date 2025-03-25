import React, { useState } from 'react'
import HeroSection from '../../HeroSection'

export const PostLeads = () => {
    const [loadSize, setLoadSize] = useState('FULL');
  return (
    <div>
    <HeroSection/>
    <div className="p-4 md:p-6 lg:p-8">
  {/* Heading Section */}
  <div className="mb-4 md:mb-6 lg:mb-8 px-2 sm:px-4">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-2 md:mb-4">
      Loads Entry Page
    </h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-md text-sm md:text-base">
      Enter Multiple Trucks
    </button>
  </div>

  {/* Origin/Destination Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6">
    <div className="space-y-1">
      <h2 className="text-xs md:text-sm font-bold text-gray-800">ORIGIN</h2>
      <div className="bg-gray-100 p-2 sm:p-3 rounded-lg">
        <input
          type="text"
          placeholder="Origin City or Zipcode"
          className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div className="space-y-1">
      <h2 className="text-xs md:text-sm font-bold text-gray-800">DESTINATION</h2>
      <div className="bg-gray-100 p-2 sm:p-3 rounded-lg">
        <input
          type="text"
          placeholder="Destination City or Zipcode"
          className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm md:text-base focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  </div>

  {/* Trailer Type Section */}
  <div className="mb-4 md:mb-6">
    <h2 className="text-xs md:text-sm font-bold text-gray-800 mb-2">TRAILER TYPE</h2>
    <div className="bg-gray-100 p-3 sm:p-4 md:p-5 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 sm:gap-y-3">
        {[
          ["V (Dry Van)", "MX (Maxi Flat)", "LB (Lowboy)", "FINT (Flat - Intermodal)", "VA (Van+Airride)", "HB (Hopper Bottom)", "R (Reefer)", "CV (Curtain Van)", "FS (Flat+Sides)"],
          ["VINT (Van - Intermodal)", "HS (Hotshot)", "FT (Flat+Tarp)", "DD (Double Drop)", "CRG (Cargo Van)", "LA (Landall)", "RINT (Reefer - Intermodal)", "DT (Dump Trailer)", "CONT (Container)"],
          ["SD (Step Deck/Single Drop)", "AC (Auto Carrier)", "F (Flatbed)", "VV (Van+Vented)", "BT (Box Truck)", "PO (Power Only)", "RGN (Removable Gooseneck)", "TNK (Tanker)", "PNEU (Pneumatic)"]
        ].map((column, colIndex) => (
          <div key={colIndex} className="space-y-2 sm:space-y-3">
            {column.map((item, index) => (
              <label key={index} className="flex items-center space-x-2 text-gray-700 text-sm sm:text-base">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500" 
                />
                <span className="whitespace-nowrap">{item}</span>
              </label>
            ))}
            {colIndex === 0 && (
              <label className="flex items-center space-x-2 text-gray-700 text-sm sm:text-base">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
                />
                <span>Other:</span>
                <input 
                  type="text" 
                  className="flex-1 max-w-[120px] bg-white sm:max-w-[140px] border border-gray-300 rounded-md px-2 py-1 text-sm"
                />
              </label>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Size & Date Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6">
    {/* Size Section */}
    <div className="space-y-1">
      <h3 className="text-xs md:text-sm font-semibold text-gray-800">SIZE</h3>
      <div className="bg-gray-100 p-3 sm:p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <label className="inline-flex items-center gap-1.5 text-sm">
            <input 
              type="radio" 
              name="loadType" 
              className="w-4 h-4 text-blue-600 border-gray-300"
            />
            FULL (Full Load)
          </label>
          <label className="inline-flex items-center gap-1.5 text-sm">
            <input 
              type="radio" 
              name="loadType" 
              className="w-4 h-4 text-blue-600 border-gray-300"
            />
            LTL (Partial Load)
          </label>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {[
            { label: "Length:", unit: "ft" },
            { label: "Width:", unit: "ft" },
            { label: "Height:", unit: "ft" },
            { label: "Weight:", unit: "lbs" }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <label className="text-sm text-gray-700">{item.label}</label>
              <input
                type="number"
                className="w-full  md:w-[80px] border border-gray-300 bg-white rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500"
                placeholder={item.unit}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Date Section */}
    <div className="space-y-1">
      <h3 className="text-xs md:text-sm font-semibold text-gray-800">DATE(S)</h3>
      <div className="bg-gray-100 p-3 sm:p-4 rounded-lg space-y-1">
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
          <label className="text-sm flex-1 w-full">
            <span className="block mb-1 sm:inline-block sm:mb-0 sm:mr-2">Date Available:</span>
            <input 
              type="date" 
              className="w-full sm:w-auto border border-gray-300 rounded-md px-2 py-1 text-sm bg-white" 
              defaultValue="2025-03-24"
            />
          </label>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
          <label className="text-sm flex-1 w-full">
            <span className="block mb-1 sm:inline-block sm:mb-0 sm:mr-2">Date Available:</span>
            <input 
              type="date" 
              className="w-full sm:w-auto border border-gray-300 rounded-md px-2 py-1 text-sm bg-white" 
              defaultValue="2025-03-24"
            />
          </label>
        </div>
      </div>
    </div>
  </div>

  {/* Other Section */}
<div className="mb-6 md:mb-8">
  <h3 className="text-xs md:text-sm font-semibold text-gray-800 mb-2">OTHER</h3>
  
  {/* Container */}
  <div className="bg-gray-100 p-3 sm:p-4 rounded-lg">
    {/* First Row (Inputs) */}
    <div className="flex flex-wrap gap-3 md:gap-4 items-center">
      {/* Gross Pay Rate */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-medium">$</span>
        <input 
          type="text" 
          placeholder="Gross Pay Rate"
          className="w-32 sm:w-40 border border-gray-300 rounded-md px-2 py-1.5 text-sm bg-white"
        />
      </div>

      {/* Comments */}
      <div className="flex-1">
        <label className="text-sm">
          <span className="block mb-1 sm:inline-block sm:mr-2">Comments:</span>
          <input 
            type="text" 
            className="w-full md:w-[200px] border border-gray-300 rounded-md px-2 py-1.5 text-sm bg-white" 
          />
        </label>
      </div>

      {/* Category Dropdown */}
      <div className="sm:w-48">
        <label className="text-sm">
          <span className="block mb-1 sm:inline-block sm:mr-2">Category:</span>
          <select className="w-full border md:w-[100px] border-gray-300 rounded-md px-2 py-1.5 text-sm bg-gray-50">
            <option>Live</option>
            <option>Archived</option>
          </select>
        </label>
      </div>
    </div>

    {/* Second Row (Checkboxes) */}
    <div className="mt-3 space-y-2 text-sm">
      <label className="flex items-center gap-2">
        <input type="checkbox" className="accent-gray-600" />
        Enable Online Booking
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" className="accent-gray-600" />
        Enable Online Quote
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" className="accent-gray-600" />
        Hide contact information from unverified users
      </label>
    </div>
  </div>
</div>


  {/* Buttons Section */}
  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-md text-sm sm:text-base transition-colors">
      Submit Truck
    </button>
    <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2.5 rounded-md text-sm sm:text-base transition-colors">
      Clear Form
    </button>
  </div>
</div>
</div>
  )
}
