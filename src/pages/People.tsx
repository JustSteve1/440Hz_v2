
import React from "react";
import Navigation from "../components/Navigation";

const People = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full bg-[#9b87f5]">
        <Navigation />
      </div>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Our People</h1>
        <p className="text-lg">
          Meet our team of professionals and learn about their expertise.
        </p>
      </div>
    </div>
  );
};

export default People;
