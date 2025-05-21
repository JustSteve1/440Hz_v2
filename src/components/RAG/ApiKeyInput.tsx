
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ApiKeyInputProps {
  apiKey: string;
  setApiKey: (apiKey: string) => void;
}

const ApiKeyInput = ({ apiKey, setApiKey }: ApiKeyInputProps) => {
  return (
    <div className="mb-4">
      <Label htmlFor="api-key" className="text-sm text-gray-300 mb-1 block">
        Google Gemini API Key
      </Label>
      <Input 
        id="api-key" 
        type="password"
        placeholder="Enter your Gemini API key" 
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        className="bg-[#2a2f3d] border-[#3d4155] text-white"
      />
      <p className="text-xs text-gray-400 mt-1">
        Your API key is stored locally in your browser.
      </p>
    </div>
  );
};

export default ApiKeyInput;
