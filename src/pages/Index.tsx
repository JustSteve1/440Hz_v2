
import React, { useState } from "react";
import VideoBackground from "../components/VideoBackground";
import AnimatedText from "../components/AnimatedText";
import ContactForm from "../components/ContactForm";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

const Index = () => {
  // List of words to cycle through
  const wordsList = ["Creative", "Tech", "Marketing"];
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <VideoBackground />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light mb-6">
            where Strategy meets{" "}
            <span className="font-medium">
              <AnimatedText words={wordsList} interval={3000} />
            </span>
          </h1>
          
          <Button 
            className="mt-8 bg-[#9b87f5] hover:bg-[#D6BCFA] text-white px-6 py-2 rounded-md text-lg transition-all hover:shadow-lg hover:shadow-black/20"
            onClick={() => setIsContactOpen(true)}
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium">Get in Touch</DialogTitle>
          </DialogHeader>
          <ContactForm onClose={() => setIsContactOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
