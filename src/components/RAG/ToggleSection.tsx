
import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface ToggleSectionProps {
  showChat: boolean;
  setShowChat: (show: boolean) => void;
}

const ToggleSection = ({ showChat, setShowChat }: ToggleSectionProps) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      <Label htmlFor="show-chat" className={`text-lg ${!showChat ? "text-[#D6BCFA] font-medium" : ""}`}>
        Terms of Use
      </Label>
      <Switch id="show-chat" checked={showChat} onCheckedChange={setShowChat} />
      <Label htmlFor="show-chat" className={`text-lg ${showChat ? "text-[#D6BCFA] font-medium" : ""}`}>
        Chat Assistant
      </Label>
    </div>
  );
};

export default ToggleSection;
