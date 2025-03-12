export default function TruckTypes() {
    const trucks = [
      { name: "DRY VAN", image: "https://wetruckin.com/wp-content/uploads/2023/04/1s-700x467.jpg" },
      { name: "STEP DECK", image: "https://wetruckin.com/wp-content/uploads/2023/04/2s-700x467.jpg" },
      { name: "REEFER", image: "https://wetruckin.com/wp-content/uploads/2023/04/3s-700x467.jpg" },
      { name: "FLATBED", image: "https://wetruckin.com/wp-content/uploads/2023/04/5s-700x467.jpg" },
      { name: "HOTSHOT", image: "https://wetruckin.com/wp-content/uploads/2023/04/6s-700x467.jpg" },
      { name: "BOXTRUCK", image: "https://wetruckin.com/wp-content/uploads/2023/04/4s-700x467.jpg" },
      { name: "STRAIGHT TRUCK", image: "https://wetruckin.com/wp-content/uploads/2023/04/8s-700x467.jpg" },
      { name: "POWER ONLY", image: "https://wetruckin.com/wp-content/uploads/2023/04/7s-700x467.jpg" },
    ];
  
    return (
      <div className="bg-gray-100 py-10">
<h2 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-center mb-10">
  TRUCK <span className="text-blue-500">TYPES</span>
</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
          {trucks.map((truck, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={truck.image}
                alt={truck.name}
                className="w-full h-[150px] object-cover"
              />
              <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h3 className="text-2xl font-bold">{truck.name}</h3>
                <button className="mt-4 border border-white px-6 py-2 hover:bg-white hover:text-black transition">
                  VISIT PAGE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  