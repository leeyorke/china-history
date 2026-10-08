import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, ScrollText } from 'lucide-react';
import { Dynasty, ChatMessage } from '../types';
import { generateHistoryResponse } from '../services/aiService';
import { INITIAL_AI_MESSAGE } from '../constants';

interface AIChatProps {
  dynasty: Dynasty;
}

export const AIChat: React.FC<AIChatProps> = ({ dynasty }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', role: 'model', text: INITIAL_AI_MESSAGE, timestamp: Date.now() }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Reset chat when dynasty changes
  useEffect(() => {
     setMessages([{ id: 'init', role: 'model', text: INITIAL_AI_MESSAGE, timestamp: Date.now() }]);
  }, [dynasty.id]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Prepare history for context
    const historyContext = messages.map(m => ({
      role: m.role === 'model' ? 'model' : 'user', // Map 'model' to 'model' for GenAI SDK if needed, but usually 'model' is correct
      text: m.text
    }));

    const responseText = await generateHistoryResponse(userMsg.text, dynasty, historyContext);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText || "史书残缺，暂无记载。",
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[500px] bg-white/50 border border-bronze/20 rounded-lg overflow-hidden shadow-inner">
      {/* Header */}
      <div className="bg-bronze/10 p-3 border-b border-bronze/10 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-cinnabar" />
        <span className="text-sm font-bold text-ink font-serif">太史公AI • {dynasty.name}朝问答</span>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-lg p-3 text-sm leading-relaxed font-serif shadow-sm
                ${msg.role === 'user' 
                  ? 'bg-cinnabar text-white rounded-br-none' 
                  : 'bg-ricepaper border border-bronze/10 text-ink rounded-bl-none'
                }`}
            >
              {msg.role === 'model' && <ScrollText className="w-3 h-3 mb-1 opacity-50 inline mr-1" />}
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-ricepaper border border-bronze/10 rounded-lg rounded-bl-none p-3 flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-bronze/40 rounded-full animate-bounce"></div>
               <div className="w-1.5 h-1.5 bg-bronze/40 rounded-full animate-bounce delay-75"></div>
               <div className="w-1.5 h-1.5 bg-bronze/40 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-bronze/10 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="请教太史公..."
          className="flex-1 bg-transparent outline-none text-sm text-ink placeholder-bronze/40 font-serif"
          disabled={loading}
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="p-2 text-cinnabar hover:bg-cinnabar/10 rounded-full transition-colors disabled:opacity-30"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
