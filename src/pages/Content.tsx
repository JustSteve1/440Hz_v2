
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Play, Check, Star, Users, Zap } from "lucide-react";

const Content = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with Video Placeholder */}
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Navigation Header */}
        <Navigation />

        {/* Video Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto px-4">
            <div className="aspect-video bg-black/30 rounded-2xl border border-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Product Demo Video</h3>
                <p className="text-white/80">Placeholder for MVP4 Video Upload</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Text Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-white font-light mb-6">
              Content Creation
              <span className="block font-medium text-[#D6BCFA]">Reimagined</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the future of AI-powered content generation. Create personalized sales and marketing content at scale with OpenAI.
            </p>
            <Button className="bg-[#9b87f5] hover:bg-[#D6BCFA] text-white px-8 py-4 rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-purple-500/25">
              Start Creating Now
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your content strategy with cutting-edge AI technology that understands your brand and delivers results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
              <div className="w-16 h-16 bg-[#9b87f5] rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600">
                Generate high-quality content in seconds, not hours. Our AI understands context and delivers precise results.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Personalized at Scale</h3>
              <p className="text-gray-600">
                Create thousands of personalized messages that resonate with your audience while maintaining your brand voice.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Enterprise Ready</h3>
              <p className="text-gray-600">
                Built for scale with enterprise-grade security, compliance, and integration capabilities.
              </p>
            </div>
          </div>

          {/* Demo Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[#9b87f5] mb-2">10x</div>
              <div className="text-gray-600">Faster Content Creation</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#9b87f5] mb-2">95%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#9b87f5] mb-2">50+</div>
              <div className="text-gray-600">Content Types</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#9b87f5] mb-2">24/7</div>
              <div className="text-gray-600">AI Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to transform your content creation process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#9b87f5] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Input Your Brand</h3>
              <p className="text-gray-600">
                Upload your brand guidelines, voice, and existing content to train our AI on your unique style.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#9b87f5] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Define Your Goals</h3>
              <p className="text-gray-600">
                Set your content objectives, target audience, and campaign parameters for optimal results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#9b87f5] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Generate & Deploy</h3>
              <p className="text-gray-600">
                Watch as our AI creates personalized, high-converting content ready for immediate deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Content?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the revolution of AI-powered content creation. Start building personalized campaigns that convert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#9b87f5] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Content;
