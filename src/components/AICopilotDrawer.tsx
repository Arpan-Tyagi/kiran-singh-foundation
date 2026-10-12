"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Send, Bot, User, ArrowUpRight, RefreshCw } from "lucide-react";
import { submitFoundationChatTurnAction } from "@/actions/chat";
import { ChatMessage, ChatTurnResponse } from "@/lib/gemini";

export default function AICopilotDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    Array<{
      role: "user" | "assistant";
      content: string;
      suggestedAction?: ChatTurnResponse["suggestedAction"];
    }>
  >([
    {
      role: "assistant",
      content:
        "Welcome to the Kiran Singh Foundation Institutional Concierge. Trust registered under Indian Trust Act of 1882 (191/C, Tilak Nagar Allahpur Prayagraj 211006). Guided by our motto \"A Journey from struggle to Enlightenment\" and honoring Late Kiran Singh ji (Ph.D. Apex Felid Ethology, AAZP Vandalur Analyst), I can assist you with our 40 sponsored scholars, 34 sheltered dogs, or direct you to our 24/7 mutual-aid emergency grid (Helpline: +91 96709 70750).",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || isLoading) return;

    const userMsg = text.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      // Filter out initial greeting message so historyPayload begins with user turn, capped to last 6 turns
      const historyPayload: ChatMessage[] = messages
        .filter((_, idx) => idx > 0)
        .slice(-6)
        .map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          content: m.content,
        }));

      const res = await submitFoundationChatTurnAction(historyPayload, userMsg);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: res.reply,
          suggestedAction: res.suggestedAction,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I encountered a temporary communication glitch. For urgent assistance, please reach our 24/7 dispatch desk.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    "Who was Late Kiran Singh ji?",
    "Tell me about the 40 scholars",
    "How are the 34 dogs protected?",
    "Report an injured dog / emergency",
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] md:bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-4 sm:right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center space-x-3 px-4 py-2.5 rounded-full bg-white/95 border border-border shadow-elevation-card backdrop-blur-xl hover:border-lion-gold hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Open Institutional Concierge"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-border p-0.5 bg-white shadow-sm">
            <Image
              src="/images/logo.png"
              alt="Lion Emblem"
              fill
              sizes="32px"
              className="object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-serif font-bold text-obsidian group-hover:text-lion-gold-dark transition-colors">
              Institutional Concierge
            </span>
            <span className="text-[11px] font-mono text-slate font-medium">
              Archive &amp; Welfare Desk
            </span>
          </div>
          <div className="w-2 h-2 rounded-full bg-botanical-emerald animate-pulse ml-1" />
        </button>
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/25 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-lg h-full bg-white border-l border-border flex flex-col shadow-2xl">
            {/* Header */}
            <div className="p-4 border-b border-border bg-slate-50/90 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-border p-0.5 bg-white shadow-sm">
                  <Image
                    src="/images/logo.png"
                    alt="Emblem"
                    fill
                    sizes="36px"
                    className="object-contain p-0.5"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-obsidian">
                    Foundation Archive Intelligence
                  </h3>
                  <p className="text-[10px] font-mono text-lion-gold-dark font-medium">
                    Trust registered under Indian Trust Act of 1882 &bull; Prayagraj
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-slate-200/60 text-slate hover:text-obsidian active:scale-95 transition-all"
                aria-label="Close Concierge"
              >
                <X className="w-5 h-5" aria-hidden="true" strokeWidth={1.5} />
              </button>
            </div>

            {/* Quick Prompt Pills */}
            <div className="p-3 bg-slate-50/60 border-b border-border flex gap-2 overflow-x-auto text-[11px] font-mono scrollbar-none">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  disabled={isLoading}
                  className="whitespace-nowrap px-3 py-1 rounded-full bg-white border border-border text-slate hover:text-obsidian hover:border-lion-gold/50 active:scale-95 transition-transform duration-150 shadow-sm"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-porcelain">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    msg.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div className="flex items-center space-x-1.5 mb-1 px-1">
                    {msg.role === "assistant" ? (
                      <>
                        <Bot className="w-3.5 h-3.5 text-lion-gold" aria-hidden="true" strokeWidth={1.5} />
                        <span className="text-[10px] font-mono uppercase text-slate font-medium">
                          Foundation Concierge
                        </span>
                      </>
                    ) : (
                      <>
                        <User className="w-3.5 h-3.5 text-slate" aria-hidden="true" strokeWidth={1.5} />
                        <span className="text-[10px] font-mono uppercase text-slate font-medium">
                          You
                        </span>
                      </>
                    )}
                  </div>

                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-lion-gold/15 text-obsidian border border-lion-gold/30 rounded-tr-none shadow-sm"
                        : "bg-white text-obsidian border border-border rounded-tl-none shadow-sm"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>

                    {/* Suggested Action Pill */}
                    {msg.suggestedAction && (
                      <div className="mt-3 pt-2.5 border-t border-border">
                        <Link
                          href={msg.suggestedAction.href}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-lion-gold/15 text-lion-gold-dark border border-lion-gold/40 hover:bg-lion-gold hover:text-white active:scale-95 transition-all text-xs font-semibold"
                        >
                          <span>{msg.suggestedAction.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" strokeWidth={1.5} />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center space-x-2 text-slate text-xs font-mono p-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-lion-gold" aria-hidden="true" strokeWidth={1.5} />
                  <span>Consulting institutional archives...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar with iOS safe area support */}
            <div className="p-4 border-t border-border bg-white pb-[calc(1rem+env(safe-area-inset-bottom,0px))]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Late Kiran Singh, 40 scholars, 34 dogs..."
                  disabled={isLoading}
                  className="flex-1 bg-slate-50 border border-border rounded-full px-4 py-2.5 text-xs sm:text-sm text-obsidian placeholder-slate-400 focus:bg-white focus:outline-none focus:border-lion-gold focus:ring-2 focus:ring-lion-gold/15 transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-2.5 rounded-full bg-lion-gold text-white disabled:opacity-40 hover:bg-lion-gold-dark active:scale-95 transition-all shadow-sm"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" aria-hidden="true" strokeWidth={1.5} />
                </button>
              </form>
              <div className="mt-2 text-center">
                <span className="text-[10px] text-slate font-mono">
                  Emergency triage &bull; Directorate Archive Intelligence Active
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
