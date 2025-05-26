import React, { useState } from "react";
import VideoBackground from "../components/VideoBackground";
import AnimatedText from "../components/AnimatedText";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactFormDialog from "../components/ContactFormDialog";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {
  FaBolt as Zap,
  FaUsers as Users,
  FaStar as Star,
} from "react-icons/fa";

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
      <div className="relative h-screen w-full overflow-hidden p-8">
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
        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-gray-900">
                Agentic App Development
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your content strategy with cutting-edge AI technology
                that understands your brand and delivers results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-purple-100">
                <div className="w-16 h-16 bg-[#9b87f5] rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Content
                </h3>
                <p className="text-gray-600 mt-2 mb-4">
                  Personalised Content Generation
                </p>
                <button className="mt-auto p-2 border-12 bg-gray-800 text-white rounded-lg hover:bg-gray-400 transition-colors cursor-pointer">
                  <Link
                    to="/content"
                    className="text-white underline-offset-3 hover:decoration-2"
                  >
                    Learn More <span className="ml-2">&rarr;</span>
                  </Link>
                </button>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Analytics
                </h3>
                <p className="text-gray-600 mb-4">Sales Funnel Analytics </p>
                <button
                  className="mt-auto p-2 border-12 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                  onClick={handleComingSoonClick}
                >
                  {" Learn More"}
                  <span className="ml-2">&rarr;</span>
                </button>
              </div>

              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 border border-green-100">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Code Gen
                </h3>
                <p className="text-gray-600 mb-4">
                  Automated Front-end for .tsx
                </p>
                <button
                  className="mt-auto p-2 border-12 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                  onClick={handleComingSoonClick}
                >
                  {" Learn More"}
                  <span className="ml-2">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </section>
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
