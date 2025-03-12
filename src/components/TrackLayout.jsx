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
              src="https://wetruckin.com/wp-content/uploads/2023/04/5.png"
              alt="Truck Icon"
              className="mx-auto w-40 md:w-60 h-12 md:h-16"
            />
            <h2 className="text-xl md:text-2xl font-bold mt-2 md:mt-4">STEP DECK</h2>
            <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">
              If you are looking for a flatbed truck dispatcher to manage your flatbed or conestoga freight, WeTruckin has you covered.
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
              src="https://wetruckin.com/wp-content/uploads/2023/04/4-1.png"
              alt="Truck Icon"
              className="mx-auto w-40 md:w-60 h-12 md:h-16"
            />
            <h2 className="text-xl md:text-2xl font-bold mt-2 md:mt-4">STEP DECK</h2>
            <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">
              If you are looking for a flatbed truck dispatcher to manage your flatbed or conestoga freight, WeTruckin has you covered.
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
              src="https://wetruckin.com/wp-content/uploads/2023/04/6-1.png"
              alt="Truck Icon"
              className="mx-auto w-40 md:w-60 h-12 md:h-16"
            />
            <h2 className="text-xl md:text-2xl font-bold mt-2 md:mt-4">STEP DECK</h2>
            <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-2">
              If you are looking for a flatbed truck dispatcher to manage your flatbed or conestoga freight, WeTruckin has you covered.
            </p>
          </div>
        </div>
      </div>
    );
  }
  