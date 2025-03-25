import React from 'react'
import HeroSection from '../../HeroSection'

const FindTruck = () => {
  return (
    <div>
    <HeroSection/>
    <div className="p-4 md:p-6">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-600 mb-4 md:mb-6 mt-2 md:mt-4">
  Truck Search Page
  </h2>

  {/* Form Container */}
  <div className="bg-gray-200 p-4 md:p-6 shadow-md rounded-md w-full">
      <div className="flex flex-col space-y-4 w-full">
         {/* Origin Input Row */}
<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full">
  <input
      type="text"
      placeholder="Origin City or State(s) or Zipcode"
      className="border border-black bg-white rounded-md px-3 py-2 text-gray-700 w-full md:w-[70%] lg:w-[450px]"
  />

  {/* Dropdown (Only on large screens) */}
  <div className="hidden md:flex items-center w-full md:w-auto">
      <span className="mr-2 text-gray-700 text-sm md:text-base">Radius:</span>
      <select className="border border-black rounded-md px-3 py-2 w-24 bg-white text-gray-700">
          <option>25</option>
          <option>50</option>
          <option>100</option>
          <option>150</option>
          <option>200</option>
 
      </select>
  </div>

  {/* Radio buttons (Only on small screens) */}
  <div className="md:hidden flex flex-wrap items-center space-x-2">
      <span className="text-gray-700 text-sm">Radius:</span>
      <label className="flex items-center space-x-1">
          <input type="radio" name="radius" value="25" className="form-radio" />
          <span className="text-gray-700 text-sm">25</span>
      </label>
      <label className="flex items-center space-x-1">
          <input type="radio" name="radius" value="50" className="form-radio" />
          <span className="text-gray-700 text-sm">50</span>
      </label>
      <label className="flex items-center space-x-1">
          <input type="radio" name="radius" value="100" className="form-radio" />
          <span className="text-gray-700 text-sm">100</span>
      </label>
      <label className="flex items-center space-x-1">
          <input type="radio" name="radius" value="150" className="form-radio" />
          <span className="text-gray-700 text-sm">150</span>
      </label>
      <label className="flex items-center space-x-1">
          <input type="radio" name="radius" value="200" className="form-radio" />
          <span className="text-gray-700 text-sm">200</span>
      </label>
 
  </div>
</div>

         {/* Origin Input Row */}
<div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 w-full">
  <input
      type="text"
      placeholder="Origin City or State(s) or Zipcode"
      className="border border-black bg-white rounded-md px-3 py-2 text-gray-700 w-full md:w-[70%] lg:w-[450px]"
  />

  {/* Dropdown (Only on large screens) */}
  <div className="hidden md:flex items-center w-full md:w-auto">
      <span className="mr-2 text-gray-700 text-sm md:text-base">Radius:</span>
      <select className="border border-black rounded-md px-3 py-2 w-24 bg-white text-gray-700">
          <option>25</option>
          <option>50</option>
          <option>100</option>
          <option>150</option>
          <option>200</option>
      </select>
  </div>

  {/* Radio buttons (Only on small screens) */}
  <div className="md:hidden flex flex-wrap items-center space-x-2">
      <span className="text-gray-700 text-sm">Radius:</span>
      <label className="flex items-center space-x-1">
          <input type="radio" name="radius" value="25" className="form-radio" />
          <span className="text-gray-700 text-sm">25</span>
      </label>
      <label className="flex items-center space-x-1">
          <input type="radio" name="radius" value="50" className="form-radio" />
          <span className="text-gray-700 text-sm">50</span>
      </label>
      <label className="flex items-center space-x-1">
          <input type="radio" name="radius" value="100" className="form-radio" />
          <span className="text-gray-700 text-sm">100</span>
      </label>
      <label className="flex items-center space-x-1">
          <input type="radio" name="radius" value="150" className="form-radio" />
          <span className="text-gray-700 text-sm">150</span>
      </label>
      <label className="flex items-center space-x-1">
          <input type="radio" name="radius" value="200" className="form-radio" />
          <span className="text-gray-700 text-sm">200</span>
      </label>
     
  </div>
</div>


         {/* Filter Buttons */}
<div className="grid grid-cols-2 gap-2 w-full sm:grid-cols-1 md:flex md:flex-wrap">
  <button className="border border-black px-4 py-2 rounded-lg bg-white text-gray-600 text-sm flex-1 md:flex-none md:px-8">
      Trailer Type: Any
  </button>

  <button className="border border-black px-4 py-2 rounded-lg bg-white text-gray-400 text-sm flex-1 md:flex-none md:px-8">
      Ship Date: Any
  </button>
  <button className="border border-black px-4 py-2 rounded-lg bg-white text-gray-600 text-sm flex-1 md:flex-none md:px-8">
      Sort by: Age 
  </button>
</div>

         {/* Filter Buttons */}
         <div className="grid grid-cols-2 gap-2 w-full sm:grid-cols-1 md:flex md:flex-wrap">
  <button className="border border-black px-4 py-2 rounded-lg bg-white text-gray-600 text-sm flex-1 md:flex-none md:px-8">
      Trailer Type: Any
  </button>
  <button className="border border-black px-4 py-2 rounded-lg bg-white text-gray-600 text-sm flex-1 md:flex-none md:px-8">
      Load Size: All
  </button>
 
</div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 mt-4 w-full">
              <div className="flex gap-4 w-full md:w-auto">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md w-full md:w-auto">
                      Search
                  </button>
                  <a href="#" className="text-blue-600 whitespace-nowrap self-center">
                      Clear Form
                  </a>
              </div>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-md w-full md:w-auto">
                  Set Load Alert
              </button>
          </div>
      </div>
  </div>
</div>
  </div>
  
  )
}

export default FindTruck