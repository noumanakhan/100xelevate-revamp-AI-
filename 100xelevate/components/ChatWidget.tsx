'use client';

import React, { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '@/lib/api';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: '👋 Hi! I am the 100xElevate Support Assistant. How can I help you today with our services or policies?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessageText = input.trim();
    setInput('');

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userMessageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    const response = await sendChatMessage(userMessageText);

    const botMsg: Message = {
      id: `bot-${Date.now()}`,
      sender: 'assistant',
      text: response.answer,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-5 py-3.5 bg-black hover:bg-black/90 text-white font-medium rounded-full shadow-xl hover:scale-105 transition-all duration-300 border border-black/10 group cursor-pointer"
          aria-label="Open Customer Support Chat"
        >
          <div className="relative flex items-center justify-center w-5 h-5">
            <svg
              className="w-5 h-5 transform group-hover:rotate-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-wide">Support Chat</span>
        </button>
      )}

      {/* Chat Container Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[400px] h-[580px] bg-white border border-[#0000001A] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="px-5 py-4 bg-black text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs shadow-sm">
                100x
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wide">100xElevate Support</h3>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm bg-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.sender === 'user'
                      ? 'bg-black text-white rounded-br-none'
                      : 'bg-[#F7F7F7] text-black border border-[#E5E5E5] rounded-bl-none'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>

                <span className="text-[10px] text-[#707070] mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {/* Loading Typing Indicator */}
            {isLoading && (
              <div className="flex flex-col items-start">
                <div className="bg-[#F7F7F7] border border-[#E5E5E5] rounded-2xl rounded-bl-none px-4 py-3 text-black flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-black animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-black animate-bounce [animation-delay:0.4s]" />
                  <span className="text-xs text-[#707070] ml-1">Searching knowledge base...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-[#0000001A] bg-[#F7F7F7] flex gap-2 overflow-x-auto text-[11px] no-scrollbar">
              {[
                'What services do you offer?',
                'Tell me about GEO optimization',
                'What is your privacy policy?',
              ].map((promptText, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInput(promptText);
                  }}
                  className="px-3 py-1.5 bg-white hover:bg-black hover:text-white border border-[#E5E5E5] text-black rounded-full whitespace-nowrap transition-colors cursor-pointer"
                >
                  {promptText}
                </button>
              ))}
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-[#0000001A] flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about 100xElevate services or policies..."
              className="flex-1 bg-[#F7F7F7] border border-[#E5E5E5] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-black placeholder:text-[#707070] focus:outline-none focus:border-black transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 rounded-xl bg-black hover:bg-black/90 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Send Message"
            >
              <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
