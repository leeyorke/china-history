import React from 'react';
import { X, ChevronLeft } from 'lucide-react';
import { Dynasty } from '../types';
import { EmperorNode } from './EmperorNode';
import { AIChat } from './AIChat';

interface DynastyDetailProps {
  dynasty: Dynasty;
  onClose: () => void;
}

export const DynastyDetail: React.FC<DynastyDetailProps> = ({ dynasty, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-end backdrop-blur-sm bg-ink/20">
      <div 
        className="w-full md:w-[800px] bg-ricepaper h-full shadow-2xl overflow-y-auto relative animate-slide-in"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}
      >
        {/* Navigation Header */}
        <div className="sticky top-0 z-20 bg-ricepaper/90 backdrop-blur border-b border-bronze/20 p-4 flex justify-between items-center">
          <button 
            onClick={onClose}
            className="flex items-center gap-1 text-bronze hover:text-cinnabar transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-serif">返回文脉</span>
          </button>
          <h2 className="text-xl font-bold font-serif text-ink">{dynasty.name}</h2>
          <div className="w-8" /> {/* Spacer for alignment */}
        </div>

        {/* Content Container */}
        <div className="p-6 md:p-10 space-y-12">
          
          {/* 1. Hero Section */}
          <section className="text-center space-y-4">
             <div className="inline-block border-2 border-cinnabar/50 p-1 rounded-full">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-cinnabar text-ricepaper rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-5xl md:text-6xl font-bold font-serif select-none">{dynasty.name}</span>
                </div>
             </div>
             <div className="space-y-1">
                <h1 className="text-3xl font-bold text-ink font-serif">大{dynasty.name}王朝</h1>
                <p className="text-bronze font-serif">{dynasty.period}</p>
                <p className="text-sm text-charcoal/60 font-serif">定都：{dynasty.capital}</p>
             </div>
          </section>

          {/* 2. Summary Section */}
          <section className="bg-white/40 p-6 rounded-lg border-l-4 border-cinnabar shadow-sm">
             <h3 className="text-lg font-bold text-ink mb-3 flex items-center gap-2 font-serif">
               <span className="w-1 h-1 bg-cinnabar rounded-full"></span>
               史学综述
             </h3>
             <p className="text-justify text-charcoal leading-loose font-serif indent-8">
               {dynasty.summary}
             </p>
          </section>

          {/* 3. Lineage Section */}
          <section>
             <h3 className="text-lg font-bold text-ink mb-6 flex items-center gap-2 font-serif border-b border-bronze/20 pb-2">
               <span className="w-1 h-1 bg-cinnabar rounded-full"></span>
               帝系传承
             </h3>
             <div className="pl-4 md:pl-8 border-l border-bronze/20 ml-2">
                {dynasty.emperors.map((emperor, index) => (
                  <EmperorNode 
                    key={emperor.id} 
                    emperor={emperor} 
                    index={index}
                    isLast={index === dynasty.emperors.length - 1}
                  />
                ))}
             </div>
             <div className="text-center mt-4">
               <span className="text-xs text-bronze/60 font-serif italic">* 仅展示主要帝王，完整世系请查阅正史。</span>
             </div>
          </section>

          {/* 4. AI Consultant Section */}
          <section>
            <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2 font-serif border-b border-bronze/20 pb-2">
               <span className="w-1 h-1 bg-cinnabar rounded-full"></span>
               青史问答
             </h3>
             <AIChat dynasty={dynasty} />
          </section>

          {/* Footer Padding */}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
};
