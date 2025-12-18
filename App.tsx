
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { NEONATAL_COURSE } from './constants';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState(NEONATAL_COURSE.sections[0].id);

  const activeSection = NEONATAL_COURSE.sections.find(s => s.id === activeSectionId) || NEONATAL_COURSE.sections[0];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      {/* Sidebar - Mobile Toggle can be added but kept simple for world-class feel */}
      <Sidebar 
        sections={NEONATAL_COURSE.sections} 
        activeSectionId={activeSectionId} 
        onSelectSection={setActiveSectionId} 
      />

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Header Bar */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <span className="text-xs font-bold text-slate-400">COURSE</span>
             <span className="h-1 w-1 bg-slate-300 rounded-full" />
             <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{NEONATAL_COURSE.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
            <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 border border-indigo-200 cursor-pointer hover:bg-indigo-200 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <ContentArea section={activeSection} />

        {/* Sticky Footer Progress (Mobile Only primarily, but works as bar) */}
        <div className="md:hidden sticky bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 flex items-center justify-between z-20">
           <div className="flex flex-col">
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Current Section</span>
             <span className="text-sm font-bold text-slate-800 truncate max-w-[200px]">{activeSection.title}</span>
           </div>
           <button 
             onClick={() => {
               const idx = NEONATAL_COURSE.sections.findIndex(s => s.id === activeSectionId);
               if (idx < NEONATAL_COURSE.sections.length - 1) {
                 setActiveSectionId(NEONATAL_COURSE.sections[idx + 1].id);
                 window.scrollTo({ top: 0, behavior: 'smooth' });
               }
             }}
             disabled={NEONATAL_COURSE.sections.findIndex(s => s.id === activeSectionId) === NEONATAL_COURSE.sections.length - 1}
             className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-indigo-100 disabled:opacity-50"
           >
             Next Section
           </button>
        </div>
      </main>
    </div>
  );
};

export default App;
