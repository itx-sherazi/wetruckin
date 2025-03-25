import { useState, useRef, useEffect } from "react";

const TrailerOptions = ({ setShowOptions }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const optionsRef = useRef(null);
  const options = [
    { label: "Dry Van", value: "V" },
    { label: "Flatbed", value: "F" },
    { label: "Reefer", value: "R" },
    { label: "Lowboy", value: "LB" },
    { label: "Hotshot", value: "HS" },
    { label: "Hopper Bottom", value: "HB" },
    { label: "Van+Vented", value: "VV" },
    { label: "Flat+Sides", value: "FS" },
    { label: "Tanker", value: "TNK" },
    { label: "Container", value: "CONT" },
    { label: "Pneumatic", value: "PNEU" },
    { label: "Other", value: "Other" },
    { label: "Curtain Van", value: "CV" },
    { label: "Flat+Tarp", value: "FT" },
    { label: "Power Only", value: "PO" },
    { label: "Landall", value: "LA" },
    { label: "Dump Trailer", value: "DT" },
    { label: "Cargo Van", value: "CRG" },
    { label: "Box Truck", value: "BT" },
    { label: "Maxi Flat", value: "MX" },
    { label: "Auto Carrier", value: "AC" },
    { label: "Double Drop", value: "DD" },
    { label: "Van - Intermodal", value: "VINT" },
    { label: "Flat - Intermodal", value: "FINT" },
    { label: "Reefer - Intermodal", value: "RINT" },
    { label: "Step Deck/Single Drop", value: "SD" },
    { label: "Removable Gooseneck", value: "RGN" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowOptions]);

  const toggleOption = (value) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div
      ref={optionsRef}
      className="w-full h-[300px] bg-white rounded-lg shadow-lg p-5  -mt-2 border-black border-1"
    >
     
      <div className="grid gap-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-lg"
          >
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={selectedOptions.includes(option.value)}
              onChange={() => toggleOption(option.value)}
            />
            <span className="text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      <div className="flex justify-between mt-9">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          onClick={() => setSelectedOptions([])}
        >
          Any
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Done
        </button>
      </div>
    </div>
  );
};

export default TrailerOptions;
