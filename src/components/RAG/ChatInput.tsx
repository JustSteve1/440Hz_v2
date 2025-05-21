
import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  handleSendMessage: () => void;
  isLoading: boolean;
}

const ChatInput = ({ message, setMessage, handleSendMessage, isLoading }: ChatInputProps) => {
  return (
    <div className="flex gap-2">
      <Textarea 
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
          }
        }}
        className="bg-[#2a2f3d]/80 border-[#3d4155] text-white resize-none"
        rows={2}
      />
      <Button 
        onClick={handleSendMessage} 
        className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
        disabled={isLoading || !message.trim()}
      >
        <Send className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ChatInput;
