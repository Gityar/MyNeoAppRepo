
import React from 'react';
import { TopicSection } from '../types';

interface SidebarProps {
  sections: TopicSection[];
  activeSectionId: string;
  onSelectSection: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeSectionId, onSelectSection }) => {
  const currentIndex = sections.findIndex(s => s.id === activeSectionId);
  const progressPercent = Math.round(((currentIndex + 1) / sections.length) * 100);

  return (
    <nav className="w-full md:w-72 bg-white border-r border-slate-200 flex flex-col h-screen overflow-y-auto sticky top-0">
      <div className="p-6 border-b border-slate-100 flex items-center gap-3">
        <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-lg shadow-indigo-200">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">NeoCare Academy</h1>
      </div>

      <div className="p-4 space-y-1">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3">Curriculum Flow</p>
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => onSelectSection(section.id)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 group ${
              activeSectionId === section.id
                ? "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600 shadow-sm"
                : "text-slate-600 hover:bg-slate-50 border-l-4 border-transparent"
            }`}
          >
            <div className={`h-6 w-6 shrink-0 rounded-lg flex items-center justify-center text-[10px] font-bold transition-colors ${
              activeSectionId === section.id ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
            }`}>
              0{idx + 1}
            </div>
            <span className="font-semibold text-sm leading-tight">{section.title}</span>
          </button>
        ))}
      </div>

      <div className="mt-auto p-4 border-t border-slate-100">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Module Progress</span>
            <span className="text-[10px] font-bold text-indigo-600">{progressPercent}%</span>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500 transition-all duration-500" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
