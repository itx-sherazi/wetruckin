export default function TruckServices() {
  const services = [
    {
      title: "Truck Dispatching",
      img: "https://wetruckin.com/wp-content/uploads/2023/04/1-1.jpg",
    },
    {
      title: "Document Management",
      img: "https://wetruckin.com/wp-content/uploads/2023/04/19-1.jpg",
    },
    {
      title: "Factoring Service",
      img: "https://wetruckin.com/wp-content/uploads/2023/04/18-1.jpg",
    },
  ];

  return (
    <div className="w-full bg-white py-10">
      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
        {services.map((service, index) => (
          <div key={index} className="relative overflow-hidden group rounded-lg shadow-lg border border-red-400">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Text positioned on image (Left-Centered) */}
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-opacity-50 flex flex-col items-start">
              <h3 className="text-left text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                <span className="text-red-600">{service.title.split(" ")[0]}</span> <br />
                <span className="text-blue-600">{service.title.split(" ")[1]}</span>
              </h3>
              <button className="mt-2 text-sm font-semibold border-b-2 border-white text-white hover:border-blue-500 transition-all duration-300">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Black Section */}
      <div className="bg-black text-center w-full px-8 min-h-[30vh] flex justify-center items-center">
        <h2 className="text-white text-4xl md:text-6xl lg:text-7xl leading-tight">
          Our Truck Dispatchers{" "}
          <span className="text-red-500 italic">Specialize</span> 
        </h2>
      </div>
    </div>
  );
}
