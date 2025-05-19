
import React from "react";
import Navigation from "../components/Navigation";

const Work = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full bg-[#9b87f5]">
        <Navigation />
      </div>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Our Work</h1>
        <p className="text-lg">
          Showcase of our previous projects and case studies.
        </p>
      </div>
    </div>
  );
};

export default Work;
