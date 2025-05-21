
import React from "react";

interface ChatMessageProps {
  role: string;
  content: string;
}

const ChatMessage = ({ role, content }: ChatMessageProps) => {
  return (
    <div 
      className={`p-3 rounded-lg ${
        role === "user" 
          ? "bg-[#3d4155]/80 ml-8" 
          : "bg-[#9b87f5]/20 mr-8"
      }`}
    >
      <p className="text-sm font-medium mb-1">
        {role === "user" ? "You" : "Assistant"}
      </p>
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default ChatMessage;
