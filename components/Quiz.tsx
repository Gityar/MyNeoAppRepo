
import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
}

const EXCLAMATIONS_CORRECT = [
  "Brilliant! You're a natural!",
  "Absolute perfection! 🌟",
  "Wow! Your clinical knowledge is sharp!",
  "Bingo! You've mastered this concept!",
  "Fantastic! That's correct!"
];

const EXCLAMATIONS_WRONG = [
  "Nice try! Let's review this together.",
  "Almost there! Take another look at the rationale.",
  "Learning is a journey! Check the explanation below.",
  "Don't worry, even pros keep learning!",
  "Interesting choice! Here is why it was different:"
];

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  const handleSelect = (questionId: string, optionId: string) => {
    if (submitted[questionId]) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmit = (questionId: string) => {
    if (!answers[questionId]) return;
    setSubmitted(prev => ({ ...prev, [questionId]: true }));
  };

  const getRandomExclamation = (isCorrect: boolean) => {
    const list = isCorrect ? EXCLAMATIONS_CORRECT : EXCLAMATIONS_WRONG;
    return list[Math.floor(Math.random() * list.length)];
  };

  return (
    <div className="mt-8 space-y-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
          <span className="bg-indigo-600 text-white p-2 rounded-xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Knowledge Check Challenge
        </h3>
        <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
          {Object.keys(submitted).length} / {questions.length} Solved
        </span>
      </div>
      
      {questions.map((q, idx) => (
        <div key={q.id} className="border-b border-slate-50 last:border-0 pb-10 last:pb-0">
          <div className="flex gap-4 items-start mb-6">
            <span className="text-indigo-600 font-black text-2xl opacity-20 select-none">0{idx + 1}</span>
            <p className="font-semibold text-slate-800 text-lg leading-tight pt-1">
              {q.question}
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-3 ml-0 md:ml-12">
            {q.options.map(opt => {
              const isSelected = answers[q.id] === opt.id;
              const isCorrect = opt.id === q.correctOptionId;
              const isWrong = isSelected && !isCorrect;
              const showResult = submitted[q.id];

              let classes = "group relative p-4 rounded-xl border-2 text-sm transition-all cursor-pointer flex items-center gap-4 ";
              if (showResult) {
                if (isCorrect) classes += "bg-emerald-50 border-emerald-500 text-emerald-800 scale-[1.02] z-10 ";
                else if (isWrong) classes += "bg-rose-50 border-rose-500 text-rose-800 opacity-60 ";
                else classes += "bg-slate-50 border-slate-100 text-slate-400 grayscale opacity-40 ";
              } else {
                classes += isSelected 
                  ? "bg-indigo-50 border-indigo-600 text-indigo-900 shadow-lg ring-2 ring-indigo-100" 
                  : "bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50 text-slate-600";
              }

              return (
                <div 
                  key={opt.id} 
                  onClick={() => handleSelect(q.id, opt.id)}
                  className={classes}
                >
                  <span className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-lg font-black uppercase text-xs transition-colors ${
                    isSelected ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    {opt.id}
                  </span>
                  <span className="flex-1 font-medium">{opt.text}</span>
                  {showResult && isCorrect && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>

          {!submitted[q.id] ? (
            <div className="flex justify-end mt-6">
              <button
                onClick={() => handleSubmit(q.id)}
                disabled={!answers[q.id]}
                className={`px-8 py-3 rounded-xl font-bold transition-all transform active:scale-95 ${
                  answers[q.id] 
                  ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-100" 
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                Submit Answer
              </button>
            </div>
          ) : (
            <div className={`mt-6 p-6 rounded-2xl animate-in zoom-in duration-300 ${
              answers[q.id] === q.correctOptionId 
                ? "bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500" 
                : "bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500"
            }`}>
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">
                  {answers[q.id] === q.correctOptionId ? "🎉" : "💡"}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                    {getRandomExclamation(answers[q.id] === q.correctOptionId)}
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
