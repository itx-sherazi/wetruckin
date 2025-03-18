import truckimage from '../assets/truck1.png'

export default function TruckLayout() {
    return (
      <div className="flex flex-col gap-6 px-2">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
          <div className="w-full md:w-1/3">
            <img
              src="https://wetruckin.com/wp-content/uploads/2023/04/56.jpg"
              alt="Left Truck"
              className="w-full h-auto md:h-80 object-cover"
            />
          </div>
          <div className="w-full md:w-1/3 text-center px-4 md:px-8">
            <img
              src={truckimage}
              alt="Truck Icon"
              className="mx-auto w-50 md:w-60 h-12 md:h-26"
            />
            <h2 className="text-xl md:text-2xl font-bold mt-2 md:mt-4 text-red-600">
              STEP DECK
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">
              If you are looking for a <span className="text-red-600">flatbed truck dispatcher</span> 
              to manage your <span className="text-blue-600">flatbed or conestoga freight</span>, 
              WeTruckin has you covered.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="https://wetruckin.com/wp-content/uploads/2023/04/57-1.jpg"
              alt="Right Truck"
              className="w-full h-auto md:h-80 object-cover"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
          <div className="w-full md:w-1/3 text-center px-4 md:px-8">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq__uox5CgJcpaZEnQwS1wG0vkqB72l87V3Q&s"
              alt="Truck Icon"
              className="mx-auto w-40 md:w-60 h-12 md:h-36"
            />
             <h2 className="text-xl md:text-2xl font-bold mt-2 md:mt-4 text-red-600">
              STEP DECK
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">
              If you are looking for a <span className="text-red-600">flatbed truck dispatcher</span> 
              to manage your <span className="text-blue-600">flatbed or conestoga freight</span>, 
              WeTruckin has you covered.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="https://wetruckin.com/wp-content/uploads/2023/04/55.jpg"
              alt="Left Truck"
              className="w-full h-auto md:h-80 object-cover"
            />
          </div>
          <div className="w-full md:w-1/3 text-center px-4 md:px-8">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJm2mw4DajzF3-UJlITcvBWVjQgb4wxsGlmA&s"
              alt="Truck Icon"
              className="mx-auto w-50 md:w-70 h-22 md:h-30"
            />
             <h2 className="text-xl md:text-2xl font-bold mt-2 md:mt-4 text-red-600">
              STEP DECK
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">
              If you are looking for a <span className="text-red-600">flatbed truck dispatcher</span> 
              to manage your <span className="text-blue-600">flatbed or conestoga freight</span>, 
              WeTruckin has you covered.
            </p>
          </div>
        </div>
      </div>
    );
}
  