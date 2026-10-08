"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, X, Send, Bot, User, ArrowUpRight, AlertTriangle, RefreshCw } from "lucide-react";
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
        "Welcome to the Kiran Singh Foundation Intelligence Copilot. Grounded in the sacred memory of Late Kiran Singh ji (Ph.D. Apex Felid Ethology, AAZP Vandalur Analyst), I can assist you with details regarding our 40 sponsored scholars, our 34 rescued canines, or connect you with our 24/7 mutual-aid emergency grid.",
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
      // Filter out initial greeting message so historyPayload begins with user turn
      const historyPayload: ChatMessage[] = messages
        .filter((_, idx) => idx > 0)
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
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center space-x-3 px-4 py-3 rounded-full bg-slate-charcoal/95 border border-lion-gold/50 shadow-2xl shadow-black/80 backdrop-blur-xl hover:border-lion-gold hover:scale-105 transition-all duration-300"
          aria-label="Open Foundation Intelligence Copilot"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-lion-gold/60 p-0.5 bg-obsidian">
            <Image
              src="/images/logo.png"
              alt="Lion Emblem"
              fill
              sizes="32px"
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-serif font-bold text-parchment group-hover:text-lion-gold transition-colors">
              Gemini 2.5 Copilot
            </span>
            <span className="text-[10px] font-mono text-parchment-dim">
              Institutional Intelligence
            </span>
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
        </button>
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-lg h-full bg-obsidian border-l border-parchment/10 flex flex-col shadow-2xl">
            {/* Header */}
            <div className="p-4 border-b border-parchment/10 bg-slate-charcoal/80 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-lion-gold/40">
                  <Image
                    src="/images/logo.png"
                    alt="Emblem"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-parchment">
                    Foundation Intelligence Copilot
                  </h3>
                  <p className="text-[10px] font-mono text-lion-gold">
                    Google Gemini 2.5 Flash &bull; Grounded Fact Model
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-parchment-dim hover:text-parchment transition-colors"
                aria-label="Close Copilot"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Prompt Pills */}
            <div className="p-3 bg-white/[0.02] border-b border-parchment/5 flex gap-2 overflow-x-auto text-[11px] font-mono scrollbar-none">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  disabled={isLoading}
                  className="whitespace-nowrap px-3 py-1 rounded-full bg-white/5 border border-white/10 text-parchment-dim hover:text-lion-gold hover:border-lion-gold/40 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                        <Bot className="w-3.5 h-3.5 text-lion-gold" />
                        <span className="text-[10px] font-mono uppercase text-parchment-dim">
                          Foundation Copilot
                        </span>
                      </>
                    ) : (
                      <>
                        <User className="w-3.5 h-3.5 text-parchment-dim" />
                        <span className="text-[10px] font-mono uppercase text-parchment-dim">
                          You
                        </span>
                      </>
                    )}
                  </div>

                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-lion-gold/20 text-parchment border border-lion-gold/40 rounded-tr-none"
                        : "bg-slate-charcoal text-parchment-muted border border-white/5 rounded-tl-none"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>

                    {/* Suggested Action Pill */}
                    {msg.suggestedAction && (
                      <div className="mt-3 pt-2.5 border-t border-white/10">
                        <Link
                          href={msg.suggestedAction.href}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-lion-gold/20 text-lion-gold border border-lion-gold/50 hover:bg-lion-gold hover:text-obsidian transition-all text-xs font-medium"
                        >
                          <span>{msg.suggestedAction.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center space-x-2 text-parchment-dim text-xs font-mono p-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-lion-gold" />
                  <span>Synthesizing institutional knowledge...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-parchment/10 bg-slate-charcoal">
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
                  className="flex-1 bg-obsidian border border-parchment/20 rounded-full px-4 py-2.5 text-xs sm:text-sm text-parchment placeholder-parchment-dim focus:outline-none focus:border-lion-gold transition-colors"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-2.5 rounded-full bg-lion-gold text-obsidian disabled:opacity-40 hover:bg-lion-gold-light transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="mt-2 text-center">
                <span className="text-[10px] text-parchment-dim font-mono">
                  Emergency triage &bull; Official Foundation System Prompt Active
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
