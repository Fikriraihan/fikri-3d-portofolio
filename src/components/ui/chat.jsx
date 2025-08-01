import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  ArrowUp,
  Paperclip,
  Square,
  Code,
  BookOpen,
  PenTool,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SectionWrapper } from "@/hoc";

async function sendToAPI(message) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const res = await fetch(`${apiUrl}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: message,
      history: [],
    }),
  });

  const data = await res.json();
  return data.answer;
}

const AIChatComponent = ({
  title = "AI Assistant",
  placeholder = "Ask me anything...",
  maxHeight = 240,
  onSendMessage,
  className = "",
}) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [files, setFiles] = useState([]);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

  const [activeCommandCategory, setActiveCommandCategory] = useState(null);

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const uploadInputRef = useRef(null);

  const commandSuggestions = {
    career: [
      "Tell me about yourself.",
      "What projects have you worked on so far?",
      "Where are you currently working?",
      "Can you walk me through the Sales Panel Dashboard project?",
      "Tell me about the PU & Budgeting System you built.",
      "What is the Marketing Platform you developed at Planet Surf?",
      "What projects did you work on at PT Reycom Document Solusi?",
      "Can you explain the E2E & Supplier Apps at RDS?",
      "How does the Cirrust Document Management System work?",
      "What technical challenges did you face during your time at Planet Surf?",
    ],

    tech: [
      "What tech stack did you use for the Sales Panel Dashboard project?",
      "How did you use Zustand in your projects?",
      "What role did React Hook Form play in the PU & Budgeting System?",
      "Why did you choose Vite as your build tool?",
      "How do you utilize React Query for data fetching and state management?",
      "Have you worked with Mantine UI? On which project?",
      "How did you implement role-based views in the Sales Panel Dashboard?",
      "What optimizations did you apply to improve UI performance?",
      "In which projects did you use Tailwind CSS, and why?",
      "What tools and libraries did you use to build the Marketing Platform at Planet Surf?",
    ],
    interview: [
      "How do you implement authentication in a React app?",
      "How do you manage global state in your applications?",
      "Tell me about a time when you had to learn a new tool quickly.",
      "How do you handle tight deadlines?",
      "How do you integrate APIs and handle errors?",
      "What are your goals as a developer?",
      "Have you worked with animations or micro-interactions in your UI?",
      "How do you collaborate with backend or design teams?",
      "Have you worked on AI or automation features?",
      "Can you explain a system you’ve worked on end-to-end?",
    ],
  };

  const handleSubmit = () => {
    if (input.trim() === "") return;

    const userMessage = input;
    const newMessage = {
      text: userMessage,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    onSendMessage?.(userMessage);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleRemoveFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    if (uploadInputRef?.current) {
      uploadInputRef.current.value = "";
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const handleCommandSelect = (command) => {
    setInput(command);
    setActiveCommandCategory(null);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  useEffect(() => {
    if (shouldAutoScroll) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, shouldAutoScroll]);

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${Math.min(
      textareaRef.current.scrollHeight,
      maxHeight
    )}px`;
  }, [input, maxHeight]);

  useEffect(() => {
    const handleAIResponse = (e) => {
      setMessages((prev) => [
        ...prev,
        { text: e.detail, isUser: false, timestamp: new Date() },
      ]);
    };

    const handleAITyping = (e) => {
      setIsTyping(e.detail);
    };

    window.addEventListener("ai-response", handleAIResponse);
    window.addEventListener("ai-typing", handleAITyping);
    return () => {
      window.removeEventListener("ai-response", handleAIResponse);
      window.removeEventListener("ai-typing", handleAITyping);
    };
  }, []);

  return (
    <TooltipProvider>
      <div
        ref={messagesEndRef}
        className={`w-full max-w-2xl mx-auto ${className}`}
      >
        <div className="text-center mb-8">
          <div className="mb-6 w-16 h-16 mx-auto relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-full h-full rounded-full bg-gradient-to-r from-[#050816] via-[#aaa6c3] to-[#151030] p-0.5"
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
            </motion.div>
          </div>
          <h1 className="text-3xl font-black text-foreground mb-2">{title}</h1>
          <p className="text-[#aaa6c3] text-sm">
            Ready to assist you with anything you need
          </p>
        </div>

        <div className="bg-card border border-border rounded-3xl shadow-[0px_35px_120px_-15px_#211e35] overflow-hidden">
          <div className="bg-gradient-to-r from-[#050816] to-[#151030] p-4 border-b border-border flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-[#aaa6c3] h-5 w-5" />
              <h2 className="text-white font-medium">{title}</h2>
            </div>
            <button
              onClick={clearChat}
              disabled={isTyping}
              className="text-[#aaa6c3] hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-4 h-96 overflow-y-auto bg-gradient-to-b from-[#050816] to-[#151030]">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Sparkles className="h-12 w-12 text-[#aaa6c3] mb-4" />
                <h3 className="text-[#aaa6c3] text-xl mb-2">
                  How can I help you today?
                </h3>
                <p className="text-[#aaa6c3]/70 text-sm max-w-xs">
                  Ask anything about me
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      msg.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        msg.isUser
                          ? "bg-gradient-to-r from-[#00cea8] to-[#bf61ff] text-white rounded-tr-none"
                          : "bg-[#100d25] text-[#f3f3f3] rounded-tl-none border border-[#aaa6c3]/20"
                      }`}
                    >
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] p-3 rounded-2xl bg-[#100d25] text-[#f3f3f3] rounded-tl-none border border-[#aaa6c3]/20">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#aaa6c3] animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-[#aaa6c3] animate-pulse delay-75"></div>
                        <div className="w-2 h-2 rounded-full bg-[#aaa6c3] animate-pulse delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="border-t border-border p-4 bg-gradient-to-r from-[#050816] to-[#151030]">
            {files.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-[#100d25] py-1 px-2 rounded-md border border-[#aaa6c3]/20"
                  >
                    <Paperclip className="w-3 h-3 text-[#aaa6c3]" />
                    <span className="text-xs text-[#f3f3f3] max-w-[120px] truncate">
                      {file.name}
                    </span>
                    <button
                      onClick={() => handleRemoveFile(index)}
                      className="text-[#aaa6c3] hover:text-[#f3f3f3]"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="relative flex items-end gap-2">
              <div className="flex-1 bg-[#100d25] border border-[#aaa6c3]/20 rounded-3xl p-2">
                <div className="flex items-center">
                  <Textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    className="min-h-[44px] w-full resize-none border-none bg-transparent text-[#f3f3f3] placeholder:text-[#aaa6c3] shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    rows={1}
                  />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={handleSubmit}
                        disabled={!input.trim()}
                        size="icon"
                        className="h-8 w-8 rounded-full bg-gradient-to-r from-[#00cea8] to-[#bf61ff] hover:opacity-90 disabled:opacity-50"
                      >
                        {isTyping ? (
                          <Square className="w-4 h-4 fill-current" />
                        ) : (
                          <ArrowUp className="w-4 h-4" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{isTyping ? "Stop generation" : "Send message"}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <CommandButton
            icon={<BookOpen className="w-5 h-5" />}
            label="Career"
            isActive={activeCommandCategory === "career"}
            onClick={() =>
              setActiveCommandCategory(
                activeCommandCategory === "career" ? null : "career"
              )
            }
          />
          <CommandButton
            icon={<Code className="w-5 h-5" />}
            label="Tech"
            isActive={activeCommandCategory === "tech"}
            onClick={() =>
              setActiveCommandCategory(
                activeCommandCategory === "tech" ? null : "tech"
              )
            }
          />
          <CommandButton
            icon={<PenTool className="w-5 h-5" />}
            label="Interview Question"
            isActive={activeCommandCategory === "interview"}
            onClick={() =>
              setActiveCommandCategory(
                activeCommandCategory === "interview" ? null : "interview"
              )
            }
          />
        </div>

        <AnimatePresence>
          {activeCommandCategory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden"
            >
              <div className="bg-card rounded-xl border border-border shadow-[0px_35px_120px_-15px_#211e35] overflow-hidden">
                <div className="p-3 border-b border-border bg-gradient-to-r from-[#050816] to-[#151030]">
                  <h3 className="text-sm font-medium text-[#f3f3f3]">
                    {activeCommandCategory === "career"
                      ? "Carrer suggestions"
                      : activeCommandCategory === "tech"
                      ? "Tech suggestions"
                      : "Interview suggestions"}
                  </h3>
                </div>
                <ul className="divide-y divide-border">
                  {commandSuggestions[activeCommandCategory].map(
                    (suggestion, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.03 }}
                        onClick={() => handleCommandSelect(suggestion)}
                        className="p-3 hover:bg-[#151030] cursor-pointer transition-colors duration-75 bg-[#100d25]"
                      >
                        <div className="flex items-center gap-3">
                          {activeCommandCategory === "career" ? (
                            <BookOpen className="w-4 h-4 text-[#00cea8]" />
                          ) : activeCommandCategory === "tech" ? (
                            <Code className="w-4 h-4 text-[#bf61ff]" />
                          ) : (
                            <PenTool className="w-4 h-4 text-[#aaa6c3]" />
                          )}
                          <span className="text-sm text-white font-medium">
                            {suggestion}
                          </span>
                        </div>
                      </motion.li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TooltipProvider>
  );
};

function CommandButton({ icon, label, isActive, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
        isActive
          ? "bg-gradient-to-r from-[#00cea8] to-[#bf61ff] border-transparent"
          : "bg-[#151030] border-[#aaa6c3] shadow-card"
      }`}
    >
      <div className={`${isActive ? "text-white" : "text-[#aaa6c3]"}`}>
        {icon}
      </div>
      <span
        className={`text-sm font-medium ${
          isActive ? "text-white" : "text-white"
        }`}
      >
        {label}
      </span>
    </motion.button>
  );
}

const AIChatDemo = () => {
  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <AIChatComponent
        title="Fikri's Digital Twin"
        placeholder="Type your message..."
        onSendMessage={async (message) => {
          window.dispatchEvent(new CustomEvent("ai-typing", { detail: true }));

          const answer = await sendToAPI(message);

          window.dispatchEvent(new CustomEvent("ai-typing", { detail: false }));

          window.dispatchEvent(
            new CustomEvent("ai-response", { detail: answer })
          );
        }}
      />
    </div>
  );
};

export default SectionWrapper(AIChatDemo, "ai");
