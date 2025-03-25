import { ChevronDown } from "lucide-react";
import HeroSection from "../../HeroSection";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useRef, useState } from "react";
import TrailerOptions from "./TrailersOptions";
export default function FindLoad() {
    const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const calendarRef = useRef(null); // Ref for detecting outside clicks
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort by: Age (newest)");
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const options = [
    "Sort by: Age (newest)", "Age (newest)", "Payrate (highest)", "28d Avg Market Rate (highest)", 
    "Est. Rate per Mile (highest)", "Deadhead (shortest)", "Trip Length (longest)", "Origin City (A-Z)", 
    "Origin State (A-Z)", "Destination City (A-Z)", "Destination State (A-Z)", "Trailer", "Load Size", "Length"
  ];
  
  
  // ✅ Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Event Listener to Close Calendar on Outside Click
  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
    
  return (
    <div>
      <HeroSection/>
      <div className="p-4 md:p-6">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-600 mb-4 md:mb-6 mt-2 md:mt-4">
        Load Search Page
    </h2>

    {/* Form Container */}
    <div className="bg-gray-100 p-4 md:p-6 shadow-md rounded-md w-full">
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
        <select className="border border-black rounded-md px-3 py-1 w-18 bg-white text-gray-700">
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
        <select className="border border-black rounded-md px-3 py-1 w-18 bg-white text-gray-700">
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
<input
    type="text"
    placeholder="Trailer Type: Any"
    onFocus={() => setShowOptions(true)}
    className="border border-black px-4 py-2 rounded-lg bg-white text-gray-600 text-sm flex-1 md:flex-none md:px-8"
  />

<select 
    className="border border-black px-4 py-2 rounded-lg bg-white text-gray-600 text-sm flex-1 md:flex-none md:px-6 appearance-none"
>
    <option value="" disabled selected>Load Size: All</option>
    <option value="small">Full (Full Loads)</option>
    <option value="medium">LTL (Partial Loads)</option>
</select>


<div className="relative w-62" ref={calendarRef}>
      {/* Input Field */}
      <input
        type="text"
        className="border border-black px-4 py-2 rounded-lg bg-white text-gray-600 text-sm w-[155px] md:w-[230px] cursor-pointer"
        placeholder="Ship Date: Any"
        value={selectedDate ? selectedDate.toLocaleDateString() : ""}
        onFocus={() => setShowCalendar(true)}
        readOnly
      />

      {/* Calendar Popup */}
      {showCalendar && (
        <div className="absolute top-full  left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setShowCalendar(false);
            }}
            inline
            calendarClassName="!h-57"
          />
        </div>
      )}
    </div>
    <div className="relative w-56" ref={dropdownRef}>
      {/* Input Button */}
      <button
        className="border border-black px-4 py-2 rounded-lg bg-white text-gray-600 text-sm w-[165px] md:w-[240px] text-left"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedOption}
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto z-50">
          {options.map((option, index) => (
            <div
              key={index}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-200 ${
                selectedOption === option ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                setSelectedOption(option);
                setShowDropdown(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
    {showOptions && <TrailerOptions setShowOptions={setShowOptions} />}
</div>

           {/* Filter Buttons */}
           <div className="grid grid-cols-2 gap-2 w-full sm:grid-cols-1 md:flex md:flex-wrap">
           <select class="border border-black px-4 py-2 rounded-lg bg-white text-gray-600 text-sm flex-1 md:flex-none">
    <option value="any">Weight All</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
</select>

<select class="border border-black px-4 py-2 rounded-lg bg-white text-gray-600 text-sm flex-1 md:flex-none ">
    <option value="any">Lenght All</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
</select>
   
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
<div className="flex justify-center items-center  text-center">
    <p className="text-blue-500 text-2xl md:text-4xl lg:text-3xl font-semibold">
        Please enter a State to begin searching for loads.
    </p>
</div>

    </div>
    
  );
}


