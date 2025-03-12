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
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center lg:text-left">
    Delivering the Best Trucking<br />
    Dispatch Services for Your<br />
    Business
  </h2>

  <div className="max-w-full">
    <p className="text-gray-700 leading-relaxed mb-4 px-4 lg:px-10 text-center">
      WeTruckin is a leading provider of truck dispatch services, specializing in
      the transportation of freight, cargo, and goods. Our mission is to help
      businesses and individuals find reliable and convenient truck dispatch
      services that meet their needs and deliver on their promises.
      <br />
      <br />
      At WeTruckin, we strive to create a safe, convenient, and reliable environment
      for our customers, by providing excellent customer service, efficient
      dispatching, and exceptional customer satisfaction. We believe that our
      commitment to our customers is our strength, and we are committed to
      providing a transparent, honest, and reliable service that meets the
      needs of our clients.
    </p>
  </div>

  {/* Icons Section */}
  <div className="flex justify-center gap-6 md:gap-8 mt-8">
    <div className="w-20 h-20 md:w-24 md:h-24 lg:w-38 lg:h-28">
      <img
        src="https://wetruckin.com/wp-content/uploads/2023/04/1-4.jpg"
        alt=""
        className="w-full h-full object-contain transition-transform hover:scale-105"
      />
    </div>
    <div className="w-20 h-20 md:w-24 md:h-24 lg:w-38 lg:h-28">
      <img
        src="https://wetruckin.com/wp-content/uploads/2023/04/2-2.jpg"
        alt=""
        className="w-full h-full object-contain transition-transform hover:scale-105"
      />
    </div>
    <div className="w-20 h-20 md:w-24 md:h-24 lg:w-38 lg:h-28">
      <img
        src="https://wetruckin.com/wp-content/uploads/2023/04/4-5.jpg"
        alt=""
        className="w-full h-full object-contain transition-transform hover:scale-105"
      />
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default About;