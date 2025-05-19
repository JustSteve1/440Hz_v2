import React from "react";
import VideoBackground from "../components/VideoBackground";
import AnimatedText from "../components/AnimatedText";
import Navigation from "../components/Navigation";
import { Button } from "../components/ui/button";

const Index = () => {
  // List of words to cycle through
  const wordsList = [
    "Creative",
    "Tech",
    "Marketing",
    "Design",
    "Engineering",
    "innovation",
  ];

  // Email configuration
  const emailAddress = "info@440hz.uk";
  const emailSubject = "Get in Touch";

  const handleContactClick = () => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      emailSubject
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <VideoBackground />

      {/* Navigation Header */}
      <Navigation />

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light mb-6">
            Where Strategy meets{" "}
            <span className="font-medium">
              <AnimatedText words={wordsList} interval={3000} />
            </span>
          </h1>

          <Button
            className="mt-8 bg-[#9b87f5] hover:bg-[#D6BCFA] text-white px-6 py-2 rounded-md text-lg transition-all hover:shadow-lg hover:shadow-black/20"
            onClick={handleContactClick}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
