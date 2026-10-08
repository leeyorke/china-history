import React, { useEffect, useState } from 'react';
import { DYNASTIES } from '../constants';
import { Dynasty } from '../types';

interface TimelineProps {
  onSelectDynasty: (dynasty: Dynasty) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ onSelectDynasty }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-ink font-serif tracking-widest">中华文脉</h1>
        <p className="text-bronze font-serif tracking-widest text-sm md:text-base">历代王朝与帝系考</p>
        <div className="w-16 h-1 bg-cinnabar mx-auto rounded-full mt-4"></div>
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-bronze/40 to-transparent"></div>

        <div className="space-y-12 md:space-y-20">
          {DYNASTIES.map((dynasty, index) => (
            <div 
              key={dynasty.id}
              className={`relative flex items-center justify-center group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => onSelectDynasty(dynasty)}
            >
              {/* Center Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-ricepaper border-2 border-bronze rounded-full flex items-center justify-center group-hover:bg-cinnabar group-hover:border-cinnabar transition-colors duration-300 cursor-pointer shadow-lg">
                  <div className="w-2 h-2 bg-ink rounded-full group-hover:bg-ricepaper transition-colors"></div>
                </div>
              </div>

              {/* Card Layout: Alternating Left/Right for Desktop, centered for Mobile */}
              <div className={`w-full flex ${index % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'} justify-center pl-12 pr-4 md:px-0`}>
                <div 
                  className="bg-white/60 backdrop-blur-sm border border-bronze/20 p-5 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer w-full md:w-80 group-hover:border-cinnabar/30"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-bold text-ink font-serif group-hover:text-cinnabar transition-colors">{dynasty.name}</h2>
                    <span className="text-xs text-bronze/80 font-serif bg-bronze/10 px-2 py-1 rounded">{dynasty.period}</span>
                  </div>
                  <div className="text-sm text-charcoal/80 font-serif line-clamp-3 leading-relaxed">
                    {dynasty.summary.substring(0, 60)}...
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-cinnabar font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                    <span>点击详阅</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
              
              {/* Year Marker (Desktop only for cleaner look) */}
              <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 text-xs text-bronze/50 font-serif font-bold ${index % 2 === 0 ? 'left-1/2 ml-6' : 'right-1/2 mr-6'}`}>
                 {dynasty.startYear < 0 ? `BC ${Math.abs(dynasty.startYear)}` : `AD ${dynasty.startYear}`}
              </div>

            </div>
          ))}
        </div>
        
        {/* Bottom decoration */}
        <div className="text-center mt-20 text-bronze/30 font-serif text-xs">
          <div>✦</div>
          <div className="mt-2">历史长河 浩浩汤汤</div>
        </div>
      </div>
    </div>
  );
};
