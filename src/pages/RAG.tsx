
import React, { useState } from "react";
import TermsOfUse from "@/components/RAG/TermsOfUse";
import ChatAssistant from "@/components/RAG/ChatAssistant";
import ToggleSection from "@/components/RAG/ToggleSection";

const RAG = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2d3748] text-white"
         style={{
           backgroundImage: `url("/lovable-uploads/7a26fa73-69fd-4395-a013-10655aa7db60.png")`,
           backgroundSize: "cover",
           backgroundPosition: "center",
           backgroundRepeat: "no-repeat",
         }}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-[#2a2f3d]/60 backdrop-blur-lg rounded-xl shadow-lg p-6 mt-12">
          <ToggleSection showChat={showChat} setShowChat={setShowChat} />
          {!showChat ? <TermsOfUse /> : <ChatAssistant />}
        </div>
      </div>
    </div>
  );
};

export default RAG;
