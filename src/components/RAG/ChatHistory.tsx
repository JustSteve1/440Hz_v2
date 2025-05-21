
import React from "react";
import ChatMessage from "./ChatMessage";

interface ChatHistoryProps {
  chatHistory: {role: string, content: string}[];
  isLoading: boolean;
}

const ChatHistory = ({ chatHistory, isLoading }: ChatHistoryProps) => {
  return (
    <div className="bg-[#262a36]/80 rounded-lg h-60 overflow-y-auto mb-4 p-4">
      {chatHistory.length === 0 ? (
        <div className="h-full flex items-center justify-center text-gray-400">
          <p>Start a conversation with the Gemini assistant</p>
        </div>
      ) : (
        <div className="space-y-4">
          {chatHistory.map((msg, index) => (
            <ChatMessage key={index} role={msg.role} content={msg.content} />
          ))}
          {isLoading && (
            <div className="bg-[#9b87f5]/20 p-3 rounded-lg mr-8">
              <p className="text-sm font-medium mb-1">Assistant</p>
              <p className="text-sm">Thinking...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatHistory;
