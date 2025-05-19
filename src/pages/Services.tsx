
import React from "react";
import Navigation from "../components/Navigation";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full bg-[#9b87f5]">
        <Navigation />
      </div>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <p className="text-lg">
          Detailed information about our services will be displayed here.
        </p>
      </div>
    </div>
  );
};

export default Services;
