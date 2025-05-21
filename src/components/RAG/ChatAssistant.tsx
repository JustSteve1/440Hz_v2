
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import ApiKeyInput from "./ApiKeyInput";
import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";

const ChatAssistant = () => {
  const [apiKey, setApiKey] = useState("");
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{role: string, content: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Set API key on component mount
  useEffect(() => {
    // Get API key from localStorage if available, otherwise use default
    const savedApiKey = localStorage.getItem('gemini-api-key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    } else {
      // Using a placeholder that will be replaced when user enters their key
      setApiKey("Enter your API key");
    }
  }, []);
  
  // Save API key to localStorage when it changes
  useEffect(() => {
    if (apiKey && apiKey !== "Enter your API key") {
      localStorage.setItem('gemini-api-key', apiKey);
    }
  }, [apiKey]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    const newChatHistory = [
      ...chatHistory,
      { role: "user", content: message }
    ];
    setChatHistory(newChatHistory);
    setMessage("");
    setIsLoading(true);
    
    try {
      if (!apiKey || apiKey === "Enter your API key") {
        setTimeout(() => {
          setChatHistory([
            ...newChatHistory,
            { 
              role: "assistant", 
              content: "Please enter your Google Gemini API key in the field above to continue." 
            }
          ]);
          setIsLoading(false);
        }, 500);
        return;
      }
      
      // Make API call to Gemini
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: message
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        setChatHistory([
          ...newChatHistory, 
          { 
            role: "assistant", 
            content: data.candidates[0].content.parts[0].text
          }
        ]);
      } else {
        // Handle API error
        setChatHistory([
          ...newChatHistory,
          { 
            role: "assistant", 
            content: "Sorry, I couldn't generate a response. Please check your API key or try again later." 
          }
        ]);
        console.error("API response error:", data);
        toast.error("Failed to get response. Please check your API key.");
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setChatHistory([
        ...newChatHistory,
        { 
          role: "assistant", 
          content: "An error occurred while contacting the Gemini API. Please check your connection and API key." 
        }
      ]);
      toast.error("Connection error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <Card className="bg-[#1e212b]/70 border-[#3d4155]">
        <CardContent className="pt-6">
          <ApiKeyInput apiKey={apiKey} setApiKey={setApiKey} />
          <ChatHistory chatHistory={chatHistory} isLoading={isLoading} />
          <ChatInput 
            message={message} 
            setMessage={setMessage} 
            handleSendMessage={handleSendMessage} 
            isLoading={isLoading} 
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatAssistant;
