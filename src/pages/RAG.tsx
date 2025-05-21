
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";

const RAG = () => {
  const [showChat, setShowChat] = useState(false);
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

  // Terms of Use placeholder text
  const termsOfUseText = `
    These Terms of Use govern your access to and use of our services. By using our services, you agree to be bound by these terms.
    We provide a platform that enables users to interact with artificial intelligence models for various purposes.
    You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
    We reserve the right to modify, suspend, or terminate our services at any time without notice.
    You retain ownership of any content you submit, but grant us a license to use, reproduce, and distribute such content.
    We may collect and use information as described in our Privacy Policy.
    Our services are provided "as is" without warranties of any kind, either express or implied.
    We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
    These terms constitute the entire agreement between you and us regarding your use of our services.
    If any provision of these terms is found to be invalid, the remaining provisions will continue in effect.
  `;

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
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Label htmlFor="show-chat" className={`text-lg ${!showChat ? "text-[#D6BCFA] font-medium" : ""}`}>
              Terms of Use
            </Label>
            <Switch id="show-chat" checked={showChat} onCheckedChange={setShowChat} />
            <Label htmlFor="show-chat" className={`text-lg ${showChat ? "text-[#D6BCFA] font-medium" : ""}`}>
              Chat Assistant
            </Label>
          </div>

          {!showChat ? (
            <div className="animate-fade-in">
              <Card className="bg-[#1e212b]/80 border-[#3d4155]">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4 text-center text-[#D6BCFA]">Terms of Use</h2>
                  <div className="space-y-2 text-gray-200 leading-relaxed">
                    {termsOfUseText.split('\n').filter(line => line.trim()).map((paragraph, i) => (
                      <p key={i} className="mb-2">{paragraph.trim()}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="animate-fade-in">
              <Card className="bg-[#1e212b]/70 border-[#3d4155]">
                <CardContent className="pt-6">
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
                  
                  <div className="bg-[#262a36]/80 rounded-lg h-60 overflow-y-auto mb-4 p-4">
                    {chatHistory.length === 0 ? (
                      <div className="h-full flex items-center justify-center text-gray-400">
                        <p>Start a conversation with the Gemini assistant</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {chatHistory.map((msg, index) => (
                          <div 
                            key={index} 
                            className={`p-3 rounded-lg ${
                              msg.role === "user" 
                                ? "bg-[#3d4155]/80 ml-8" 
                                : "bg-[#9b87f5]/20 mr-8"
                            }`}
                          >
                            <p className="text-sm font-medium mb-1">
                              {msg.role === "user" ? "You" : "Assistant"}
                            </p>
                            <p className="text-sm">{msg.content}</p>
                          </div>
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
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RAG;
