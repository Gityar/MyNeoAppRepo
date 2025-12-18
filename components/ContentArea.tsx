
import React, { useState } from 'react';
import { TopicSection } from '../types';
import Quiz from './Quiz';

interface ContentAreaProps {
  section: TopicSection;
}

const ContentArea: React.FC<ContentAreaProps> = ({ section }) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-12 max-w-5xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4">
          Core Module
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
          {section.title}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          Deep dive into the critical components of {section.title.toLowerCase()}.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-indigo-600 rounded-full" />
              <h3 className="text-xl font-bold text-slate-800">Module Outline & Subtopics</h3>
            </div>
            <div className="space-y-3">
              {section.outline.map((item, i) => (
                <div 
                  key={i} 
                  className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                    expandedItem === i 
                      ? "border-indigo-500 shadow-md bg-white" 
                      : "border-slate-100 bg-white hover:border-slate-300"
                  }`}
                >
                  <button 
                    onClick={() => toggleItem(i)}
                    className="w-full flex items-center justify-between p-4 text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        expandedItem === i ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"
                      }`}>
                        {i + 1}
                      </span>
                      <span className={`font-semibold transition-colors ${
                        expandedItem === i ? "text-indigo-700" : "text-slate-700 group-hover:text-slate-900"
                      }`}>
                        {item.title}
                      </span>
                    </div>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${expandedItem === i ? "rotate-180 text-indigo-500" : ""}`} 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {expandedItem === i && (
                    <div className="px-4 pb-4 pt-0 animate-in fade-in slide-in-from-top-2">
                      <div className="pl-9 pr-2 py-3 border-t border-slate-50 text-slate-600 text-sm leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-indigo-600 rounded-full" />
              <h3 className="text-xl font-bold text-slate-800">Section Overview</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
               <div className="prose prose-slate prose-indigo max-w-none text-slate-700 leading-8 text-lg space-y-6">
                {section.detailedContent.split('\n').filter(p => p.trim()).map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white p-6 rounded-2xl shadow-xl shadow-indigo-100">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-80" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                In a Nutshell
              </h4>
              <p className="text-sm leading-relaxed text-indigo-100 italic">
                "{section.summary}"
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl">
              <h4 className="text-amber-800 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM5.884 6.68a1 1 0 10-1.404-1.427l-.707.696a1 1 0 101.404 1.427l.707-.696zM14.819 4.957a1 1 0 00-1.404 1.426l.707.696a1 1 0 001.404-1.426l-.707-.696zM6.257 17.162a1 1 0 01-1.414 0l-.707-.707a1 1 0 111.414-1.414l.707.707a1 1 0 010 1.414zM16.864 16.455a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM4 11a1 1 0 100-2H3a1 1 0 000 2h1zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zM12.95 14.819a1 1 0 00-1.426-1.404l-.696.707a1 1 0 101.426 1.404l.696-.707zM10 11a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                Clinical Pearl
              </h4>
              <p className="text-xs text-amber-700 leading-relaxed font-medium">
                Clinical vigilance is your best tool. Monitor temperature regularly; even a 0.5°C drop can double oxygen consumption in a tiny baby.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <Quiz questions={section.quiz} />
      </div>
    </div>
  );
};

export default ContentArea;
