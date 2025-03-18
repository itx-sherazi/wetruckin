import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12">
        {/* Left Column - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://wetruckin.com/wp-content/uploads/2023/04/11-1.jpg"
            alt="Trucking Service"
            className="w-full h-[300px] md:h-[400px] rounded-xl lg:rounded-4xl shadow-lg object-cover"
          />
        </div>

        {/* Right Column - Text */}
        <div className="w-full lg:w-1/2">
          {/* Heading with American Flag Colors */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left">
            Delivering the Best{" "}
            <span className="text-blue-600">Trucking</span>
            <br />
            <span className="text-red-600">Dispatch Services</span> for Your
            <br />
            <span className="text-blue-600">Business</span>
          </h2>

          {/* Paragraph */}
          <div className="max-w-full">
            <p className="text-gray-700 leading-relaxed mb-4 px-4 lg:px-10 text-center lg:text-left">
              WeTruckin is a leading provider of truck dispatch services,
              specializing in the transportation of freight, cargo, and goods. Our
              mission is to help businesses and individuals find reliable and
              convenient truck dispatch services that meet their needs and
              deliver on their promises.
              <br />
              <br />
              At WeTruckin, we strive to create a safe, convenient, and reliable
              environment for our customers, by providing excellent customer
              service, efficient dispatching, and exceptional customer
              satisfaction. We believe that our commitment to our customers is
              our strength, and we are committed to providing a transparent,
              honest, and reliable service that meets the needs of our clients.
            </p>
          </div>

          {/* Icons Section with American Flag Colors */}
          <div className="flex justify-center gap-6 md:gap-8 mt-8">
            {[
              {
                src: "https://wetruckin.com/wp-content/uploads/2023/04/1-4.jpg",
                color: "blue", // Blue for the first icon
              },
              {
                src: "https://wetruckin.com/wp-content/uploads/2023/04/2-2.jpg",
                color: "white", // White for the second icon
              },
              {
                src: "https://wetruckin.com/wp-content/uploads/2023/04/4-5.jpg",
                color: "red", // Red for the third icon
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 p-2 rounded-lg` }
      
                
              >
                <img
                  src={item.src}
                  alt=""
                  className={`w-full h-full object-contain transition-transform hover:scale-105 ${
                    item.color === "blue"
                     
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;