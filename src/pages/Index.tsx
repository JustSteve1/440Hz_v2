
import React from "react";
import VideoBackground from "../components/VideoBackground";
import AnimatedText from "../components/AnimatedText";

const Index = () => {
  // List of words to cycle through
  const wordsList = ["Creative", "Tech", "Marketing"];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <VideoBackground />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light mb-4">
            where Strategy meets{" "}
            <span className="font-medium">
              <AnimatedText words={wordsList} interval={3000} />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
