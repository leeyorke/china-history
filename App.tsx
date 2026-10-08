import React, { useState } from 'react';
import { Timeline } from './components/Timeline';
import { DynastyDetail } from './components/DynastyDetail';
import { Dynasty } from './types';

const App: React.FC = () => {
  const [selectedDynasty, setSelectedDynasty] = useState<Dynasty | null>(null);

  return (
    <div className="min-h-screen bg-ricepaper text-ink overflow-x-hidden selection:bg-cinnabar selection:text-white">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-40 z-0" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}></div>
      
      {/* Main Content Layer */}
      <div className="relative z-10">
        <Timeline onSelectDynasty={setSelectedDynasty} />
        
        {/* Modal / Slide-over */}
        {selectedDynasty && (
          <DynastyDetail 
            dynasty={selectedDynasty} 
            onClose={() => setSelectedDynasty(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default App;
