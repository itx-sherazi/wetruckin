import React from "react";

const ArticleSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen pt-25 px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-black">
          <span className="text-blue-500">Benefits</span> Of Hiring A Truck Dispatcher
        </h1>
        <h2 className="text-2xl font-semibold text-gray-900 mt-6">
          #1 – Truck Dispatch Services is more than just finding freight loads
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          It’s obvious that <strong>truck dispatcher</strong> finds loads for carriers, but they also
          offer other services that can benefit your operation as a whole.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          <span className="text-blue-500 font-bold">Motor Carrier Compliance:</span> Our truck dispatchers will ensure that you maintain proper motor carrier compliance so that you can stay out of trouble and continue earning a living.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          <span className="text-blue-500 font-bold">Customer Care:</span> Our dispatchers will not only help find high paying loads, we will also help you manage relationships with shippers, establish service expectations with brokers and tackle any complex issues that may arise.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          <span className="text-blue-500 font-bold">Manage Unexpected Delays:</span> As a truck dispatch company, we are responsible in helping you address unexpected delays caused by weather, traffic and other issues while you’re on the road.
        </p>
        <p className="text-lg text-gray-700 mt-6">
          Dispatch services have incentives to ensure that the entire process from load booking, to negotiating, and transporting goes as smooth.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          {/* Repeat the above text 4x for increased length */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu sapien velit. Mauris tincidunt orci ut nulla aliquet, eget venenatis dolor luctus. Donec consectetur massa in ex consequat, nec accumsan arcu efficitur. Vestibulum faucibus feugiat leo, vel sodales elit. Nulla eget magna augue. Curabitur tincidunt lorem a est varius tincidunt. Integer aliquet purus in eros iaculis, et rhoncus libero facilisis.
        </p>
      </div>
    </div>
  );
};

export default ArticleSection;
