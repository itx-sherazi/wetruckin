import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [
  "https://wetruckin.com/wp-content/uploads/2023/04/10-400x173.png",
  "https://wetruckin.com/wp-content/uploads/2023/04/11-400x83.png",
  "https://wetruckin.com/wp-content/uploads/2023/04/12-400x142.png",
  "https://wetruckin.com/wp-content/uploads/2023/04/15-400x210.png",
  "https://wetruckin.com/wp-content/uploads/2023/04/13-400x155.png",
  "https://wetruckin.com/wp-content/uploads/2023/04/14-400x169.png",
];

export default function TrustSection() {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5);
  const [isMobile, setIsMobile] = useState(false);

  const updateVisibleItems = () => {
    const width = window.innerWidth;
    setIsMobile(width < 768);
    if (width < 640) setVisibleItems(2);
    else if (width < 1024) setVisibleItems(3);
    else setVisibleItems(5);
  };

  useEffect(() => {
    window.addEventListener("resize", updateVisibleItems);
    updateVisibleItems();
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  return (
    <section className="bg-black text-white py-12 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Left Side - Heart & Text */}
        <div className={`flex flex-col items-center md:items-start md:w-1/3 pr-40 mb-6 md:mb-0 ${isMobile ? "w-full" : ""}`}>
          <img src="https://wetruckin.com/wp-content/uploads/2023/04/w-corp-img-3-opt.png" className="w-30 h-30 mb-4"/>
          <h2 className="text-2xl font-bold">Trusted Us for A Long Time!</h2>
        </div>

        {/* Right Side - Info Boxes (Hidden on Mobile) */}
        {!isMobile && (
          <div className="md:w-2/3 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <h3 className="text-xl font-bold">How Much Do Trust Us?</h3>
              <p className="text-gray-400 mt-2">
                At WeTruckin, we build trust with our clients by providing reliable and efficient truck dispatching services tailored to meet their specific needs.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <h3 className="text-xl font-bold">Cooperation with The Client</h3>
              <p className="text-gray-400 mt-2">
                At WeTruckin, we prioritize cooperation with our clients to ensure their shipments are delivered on time and according to their specific requirements.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Client Logos Carousel */}
      <div className="relative group mt-8 md:mt-12">
        <div className="flex overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * (100 / visibleItems)}%)` }}>
            {clients.concat(clients).map((client, i) => (
              <div key={i} className="flex-shrink-0 w-1/5 px-4">
                <img
                  src={client}
                  alt="Client Logo"
                  className="h-16 md:h-16 object-contain mx-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </section>
  );
}