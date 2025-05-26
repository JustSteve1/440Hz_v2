
import React, { useState } from "react";
import VideoBackground from "../components/VideoBackground";
import AnimatedText from "../components/AnimatedText";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactFormDialog from "../components/ContactFormDialog";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  
  // List of words to cycle through
  const wordsList = [
    "Strategy",
    "Product",
    "Tech",
    "Marketing",
    "Design",
    "GenAI",
    "Innovation",
  ];

  const handleContactClick = () => {
    setIsContactDialogOpen(true);
  };

  const handleComingSoonClick = () => {
    setIsContactDialogOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <VideoBackground />

        {/* Navigation Header */}
        <Navigation />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-8xl md:text-8xl lg:text-7xl text-white font-light mb-6">
              Where Creative meets{" "}
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

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen text-center bg-gray-100 py-10 px-4"
      >
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold mb-8 text-center">About Us</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl font-bold  mb-8 ">
              We're on a mission to do real things with AI
            </p>
            <p className="text-lg mb-6">
              At our core we're a technology company that see's the disruptive
              potential of GenAI enabled Technology. We believe that AI
              technology is demonstrated through prototypes
            </p>
            <p className="text-lg mb-6">
              We're currently working on a few Prototypes accross industries -
              see below - if this interests you, reach out, we'd love to show
              you more
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-blue-900 py-40 px-15">
        <div className="container mx-auto">
          <h2 className="text-6xl text-center text-white font-medium mb-8 justify-centre">
            What we do
          </h2>
          <p className="text-2xl font-bold text-white text-regular max-w-3xl mx-auto text-center mb-12">
            Prototypes for:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-sm">
                  <img src="public/Openai_logo.jpg" alt="OpenAI Logo" />
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Content Creation</h3>
              <p className="text-gray-600 mb-4">
                Creating Personalised Sales & Marketing content at Scale, with
                OpenAI
              </p>
              <button className="font-semibold">
                <Link
                  to="/RAG"
                  className="text-gray-950 underline decoration-sky-400 underline-offset-3 hover:decoration-2 dark:text-white"
                >
                  Find out more &rarr;
                </Link>
              </button>
            </div>
            {/* Card 2 */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-sm">
                  <img src="public/Claude.jpg" alt="OpenAI Logo" />
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Sales Funnel Analytics
              </h3>
              <p className="text-gray-600 mb-4">
                Measuring the effectiveness of your sales funnel with Google AI
                Products
              </p>
              <button 
                className="mt-auto px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={handleComingSoonClick}
              >
                Coming soon
              </button>
            </div>
            {/* Card 3 */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-sm">
                  <img src="public/Grok.jpg" alt="OpenAI Logo" />
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Automated Front-end Design
              </h3>
              <p className="text-gray-600 mb-4">
                Gen-AI enabled front-end Design, automatically generated
                TypeScript from images
              </p>
              <button 
                className="mt-auto px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={handleComingSoonClick}
              >
                Coming soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <ContactFormDialog 
        open={isContactDialogOpen} 
        onOpenChange={setIsContactDialogOpen} 
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
