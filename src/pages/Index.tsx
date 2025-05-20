import React from "react";
import VideoBackground from "../components/VideoBackground";
import AnimatedText from "../components/AnimatedText";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
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

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-blue-900 py-20 px-12">
        <div className="container mx-auto">
          <h2 className="text-8xl text-center text-white font-medium mb-8 justify-centre">
            Our Services
          </h2>
          <p className="text-2xl text-white text-regular max-w-3xl mx-auto text-center mb-12">
            Our Services are delivered in the form of use-cases created with our
            Ecosystem Partners
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Content Creation with OpenAI",
              "Context & Reasoning with Grok",
              "Marketing Analytics with Llama",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                {/* Placeholder for logo */}
                <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Logo</span>
                </div>

                {/* Heading */}
                <h3 className="text-lg font-semibold mb-3">{service}</h3>

                {/* Button */}
                <button className="mt-auto px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Click to learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-100 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Learn more about our company, mission, and values. We are a team
              of passionate professionals dedicated to delivering exceptional
              results.
            </p>
            <p className="text-lg mb-6">
              Founded in 2018, we've grown from a small team of three to over
              fifty talented individuals. Our focus has always been on quality,
              innovation, and customer satisfaction.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mt-12">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-center text-gray-700">
                To empower businesses through cutting-edge technology solutions
                and creative strategies that drive growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen bg-white py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Work</h2>
          <p className="text-lg max-w-3xl mx-auto text-center mb-12">
            Showcase of our previous projects and case studies. We pride
            ourselves on delivering exceptional results for our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <span className="text-gray-500">
                      Project Image {index + 1}
                    </span>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold mb-2">
                      Project {index + 1}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A brief description of the project and our involvement.
                    </p>
                    <button className="text-[#9b87f5] hover:text-[#D6BCFA] font-medium">
                      View Case Study
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* People Section */}
      <section id="people" className="min-h-screen bg-gray-100 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Our People</h2>
          <p className="text-lg max-w-3xl mx-auto text-center mb-12">
            Meet our team of professionals and learn about their expertise. Each
            member brings unique skills and perspectives to our company.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member Cards */}
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md text-center"
                >
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <span className="text-gray-500">
                      Team Member {index + 1}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">
                      Team Member {index + 1}
                    </h3>
                    <p className="text-gray-600 text-sm">Position</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen bg-white py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Blog & Insights
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-center mb-12">
            Our latest articles, news, and industry insights. Stay updated with
            the latest trends and developments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post Cards */}
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <span className="text-gray-500">
                      Blog Image {index + 1}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-gray-500">
                      May {index + 1}, 2025
                    </span>
                    <h3 className="font-semibold text-xl mt-2 mb-3">
                      Blog Post Title {index + 1}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A brief excerpt from the blog post that gives readers an
                      idea of what the article is about.
                    </p>
                    <button className="text-[#9b87f5] hover:text-[#D6BCFA] font-medium">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
