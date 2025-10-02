"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Minimize2, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatWidgetProps {
  className?: string;
}

export default function ChatWidget({ className }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋 Hello! I'm **Sungrid AI**, your On grid AI executive.\n\n🔹 Get instant quotes & save up to ₹78,000 with government subsidies\n🔹 MNRE certified with 25-year warranties\n🔹 500+ successful installations across Kerala\n\nHow can I help you go solar today? ⚡",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    // Use setTimeout to ensure DOM is updated
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]); // Also trigger on loading state change

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Scroll after user message
    setTimeout(scrollToBottom, 50);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      // Scroll after bot message
      setTimeout(scrollToBottom, 50);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "⚠️ I'm temporarily unavailable. For immediate solar consultation, call our experts at **+91 75949-49406** or request a free site visit!",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      // Scroll after error message
      setTimeout(scrollToBottom, 50);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  return (
    <div
      className={`fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-50 ${className}`}
    >
      {/* Floating Button */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full 
                       bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 
                       shadow-xl hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </Button>
        </motion.div>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col w-[calc(100vw-1rem)] max-w-sm sm:w-80 md:w-96 
                        h-[calc(100vh-6rem)] max-h-[500px] sm:h-[450px] md:h-[500px] 
                        bg-white/20 backdrop-blur-2xl border border-white/30 
                        rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden`}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 
                            bg-gradient-to-r from-orange-500/30 via-amber-500/30 to-yellow-500/30
                            backdrop-blur-md border-b border-white/20"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 
                                flex items-center justify-center shadow-md"
                >
                  <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white drop-shadow text-sm sm:text-base">
                    Sungrid AI
                  </h3>
                  <p className="text-xs text-green-300 flex items-center">
                    ● Online now
                  </p>
                </div>
              </div>
              <div className="flex space-x-1 sm:space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white/10 rounded-full h-8 w-8 p-0"
                >
                  <Minimize2 className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10 rounded-full h-8 w-8 p-0"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>

            {/* Chat Body */}
            {!isMinimized && (
              <>
                {/* Chat Messages */}
                <div
                  className="flex-1 p-2 sm:p-4 overflow-y-auto max-h-[calc(100vh-12rem)] sm:max-h-[300px] md:max-h-[350px] scroll-smooth"
                  style={{ scrollBehavior: "smooth" }}
                >
                  <div className="space-y-2 sm:space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{
                          opacity: 0,
                          x: message.sender === "user" ? 50 : -50,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${
                          message.sender === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-2xl max-w-[80%] shadow 
                                      ${
                                        message.sender === "user"
                                          ? "bg-gradient-to-br from-orange-500 to-yellow-500 text-white"
                                          : "bg-white/30 text-gray-800 backdrop-blur-md"
                                      }`}
                        >
                          <p className="whitespace-pre-wrap text-sm sm:text-base leading-relaxed">
                            {message.text}
                          </p>
                          <p className="text-xs opacity-60 mt-1">
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing dots */}
                    {isLoading && (
                      <div className="flex items-center space-x-1 text-gray-500 text-sm px-2">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full animate-bounce delay-150"></span>
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-bounce delay-300"></span>
                        <span className="text-xs text-gray-500">
                          Sungrid AI is thinking...
                        </span>
                      </div>
                    )}
                  </div>
                  <div ref={messagesEndRef} className="h-1" />
                </div>

                {/* Input */}
                <div className="p-2 sm:p-3 border-t bg-white/20 backdrop-blur-md">
                  <div className="flex space-x-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about solar solutions..."
                      disabled={isLoading}
                      className="flex-1 text-sm bg-white/50 border-white/30 rounded-xl"
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600 rounded-xl px-3 py-2"
                    >
                      <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1 text-center px-1">
                    Powered by Zakkiy AI. Developed by The Desert Whales LLC
                    Dubai. consultation
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
