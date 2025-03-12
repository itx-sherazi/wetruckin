import React from "react";

const ArticleSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto w-full">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 leading-tight">
          <span className="text-blue-600">Benefits</span> Of Hiring A Truck Dispatcher
        </h1>

        {/* Section 1 */}
        <section className="mb-12 text-left">
          <h2 className="font-bold text-gray-900 text-xl sm:text-2xl">
            #1 – Truck Dispatch Services is more than just finding freight loads
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mt-4">
            It's obvious that <strong className="font-bold">truck dispatcher</strong> finds loads for carriers, but they also offer other services that can benefit your operation as a whole.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-blue-500 font-bold text-lg">Motor Carrier Compliance:</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Our truck dispatchers will ensure that you maintain proper motor carrier compliance so that you can stay out of trouble and continue earning a living.
              </p>
            </div>

            <div>
              <h3 className="text-blue-500 font-bold text-lg">Customer Care:</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Our dispatchers will not only help find high-paying loads, but we will also help you manage relationships with shippers, establish service expectations with brokers, and tackle any complex issues that may arise.
              </p>
            </div>

            <div>
              <h3 className="text-blue-500 font-bold text-lg">Manage Unexpected Delays:</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                As a truck dispatch company, we are responsible for helping you address unexpected delays caused by weather, traffic, and other issues while you're on the road.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12 text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            #2 — Outsourcing Dispatching Services Saves Time
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mt-4">
            As an owner-operator, you may start out booking loads yourself using load boards. This may work well for a while, but once you start accepting loads, you won’t have enough time to spend on load boards. You’re also missing out on opportunities to make more money on higher-paying loads.
          </p>

          <p className="text-base sm:text-lg text-gray-700 mt-4">
            That’s where a <strong className="text-gray-900">dispatching company</strong> can help. Our dispatcher will give you more time to focus on working on your business and less time searching for loads.
          </p>

          <p className="text-base sm:text-lg text-gray-700 mt-4">
            The main cause of failure for most beginner owner-operators is due to lack of finding consistent loads to keep their business moving. Time is money.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12 text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            #3 — Truck Dispatchers Work For You
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mt-4">
            As <strong className="font-bold">truck dispatchers</strong> providing freight dispatching services, we take a percentage of your rate. This gives us the incentive to negotiate high rates on your behalf. The more money you make, the more money we make.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ArticleSection;
