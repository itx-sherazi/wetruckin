import React from "react";

const testimonials = [
  {
    name: "Sergey Brin",
    image: "https://wetruckin.com/wp-content/uploads/2023/04/cars-testimon-1-100x100.jpg", // Replace with actual image
    text: "I’ve been using the services of this Truck Dispatching Company for a few months now and I must say that I’m extremely impressed. They are always on top of things and make sure that my deliveries are scheduled and completed on time."
  },
  {
    name: "Sarah Connor",
    image: "https://wetruckin.com/wp-content/uploads/2023/04/fashion-testimon-2-100x100.jpg", // Replace with actual image
    text: "The team at this Truck Dispatching Company is fantastic! They are knowledgeable, professional, and always available to answer any questions I have. I feel confident entrusting my shipments to them."
  },
  {
    name: "Sarah Connor",
    image: "https://wetruckin.com/wp-content/uploads/2023/04/cars-testimon-3-100x100.jpg", // Replace with actual image
    text: "WeTruckin Dispatching Company has made my life so much easier. Their technology is cutting-edge and makes the process of dispatching and tracking my shipments effortless. I highly recommend their services to anyone in the trucking industry."
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16 pt-20 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="bg-blue-400 text-white text-sm px-4 py-1 uppercase font-semibold">Customer Reviews</span>
        <h2 className="text-4xl font-semibold mt-4">WHAT OUR CUSTOMERS SAY</h2>
        <p className="text-black mt-2">Our customers are the heart of our business and we are grateful for their loyalty and support</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className=" p-6 rounded-lg  max-w-sm">
            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto border-4 border-gray-300" />
            <p className="mt-4 text-gray-700 italic">“{testimonial.text}”</p>
            <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;