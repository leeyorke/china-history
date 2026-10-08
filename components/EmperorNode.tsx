import React from 'react';
import { Emperor } from '../types';

interface EmperorNodeProps {
  emperor: Emperor;
  isLast: boolean;
  index: number;
}

export const EmperorNode: React.FC<EmperorNodeProps> = ({ emperor, isLast, index }) => {
  return (
    <div className="flex gap-4 group">
      {/* Left: Timeline Line & Dot */}
      <div className="flex flex-col items-center min-w-[40px]">
        <div className={`w-4 h-4 rounded-full border-2 border-cinnabar bg-ricepaper z-10 transition-all duration-300 group-hover:bg-cinnabar group-hover:scale-125`}></div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-bronze/30 group-hover:bg-bronze/60 transition-colors"></div>
        )}
      </div>

      {/* Right: Content */}
      <div className="pb-8 flex-1 transform transition-all duration-500 translate-x-0 group-hover:translate-x-2">
        <div className="flex items-baseline gap-2 mb-1">
          <h4 className="text-lg font-bold text-ink font-serif">
            {emperor.templeName}
          </h4>
          <span className="text-sm text-bronze font-serif">{emperor.name}</span>
        </div>
        
        <div className="text-xs text-charcoal/70 mb-2 flex items-center gap-2">
          <span className="px-1.5 py-0.5 border border-bronze/30 rounded text-[10px]">
            {Number(emperor.reignStart) > 0 ? `公元${emperor.reignStart}` : `公元前${Math.abs(Number(emperor.reignStart))}`} 
            {' - '} 
            {Number(emperor.reignEnd) > 0 ? `公元${emperor.reignEnd}` : `公元前${Math.abs(Number(emperor.reignEnd))}`}
          </span>
          {emperor.eraName && emperor.eraName !== '-' && (
            <span className="text-cinnabar">年号：{emperor.eraName}</span>
          )}
        </div>

        <p className="text-sm text-charcoal leading-relaxed font-serif opacity-90">
          {emperor.description}
        </p>
      </div>
    </div>
  );
};