"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

const INITIAL_MESSAGE: Message = {
  id: "init",
  sender: "bot",
  text: "Hi! I'm Shivam's AI Assistant. You can ask me about his skills, projects, experience, or contact details.",
};

const RESPONSES: Record<string, string> = {
  skills:
    "Shivam is skilled in HTML, CSS, JavaScript, React, FastAPI, Java, and Python. He specializes in building responsive web solutions and AI-driven applications.",
  projects:
    "Shivam has built several amazing projects including Broker AI (an AI CRM for Real Estate), Med.AI (an Intelligent Healthcare Assistant), and a Password Strength Checker! If you'd like to know more, you can check the Projects section.",
  experience:
    "Shivam is an aspiring IT professional currently pursuing his B.E in Information Technology at TCET (Expected May 2026).",
  contact:
    "You can reach Shivam at shivamsingh17114@gmail.com, or connect with him on LinkedIn. You can also use the contact form at the bottom of this page!",
  default:
    "I'm not exactly sure about that! Try asking about his skills, projects, experience, or how to contact him.",
};

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI thinking
    setTimeout(() => {
      const lowerInput = userText.toLowerCase();
      let botResponse = RESPONSES.default;

      if (
        lowerInput.includes("skill") ||
        lowerInput.includes("tech") ||
        lowerInput.includes("stack")
      ) {
        botResponse = RESPONSES.skills;
      } else if (
        lowerInput.includes("project") ||
        lowerInput.includes("work") ||
        lowerInput.includes("portfolio")
      ) {
        botResponse = RESPONSES.projects;
      } else if (
        lowerInput.includes("experience") ||
        lowerInput.includes("history") ||
        lowerInput.includes("role")
      ) {
        botResponse = RESPONSES.experience;
      } else if (
        lowerInput.includes("contact") ||
        lowerInput.includes("email") ||
        lowerInput.includes("hire")
      ) {
        botResponse = RESPONSES.contact;
      } else if (
        lowerInput.includes("hi") ||
        lowerInput.includes("hello") ||
        lowerInput.includes("hey")
      ) {
        botResponse = "Hello! Ask me anything about Shivam.";
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: "bot", text: botResponse },
      ]);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-neon-blue text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-shadow"
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[380px] h-[500px] bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Shivam&apos;s AI</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-white/50">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                      msg.sender === "user"
                        ? "bg-neon-blue text-black rounded-tr-none"
                        : "bg-white/10 text-white rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <form
                onSubmit={handleSendMessage}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about my projects..."
                  className="w-full bg-background border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-neon-blue transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-2 p-2 rounded-full text-neon-blue hover:bg-neon-blue/10 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
