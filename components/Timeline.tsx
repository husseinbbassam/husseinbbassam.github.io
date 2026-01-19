
import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';

const Timeline: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-2">Professional Journey</h2>
        <p className="text-zinc-500">Over 5 years of engineering high-availability systems.</p>
      </div>

      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div 
            key={idx} 
            className="relative pl-8 group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Timeline Line */}
            {idx !== EXPERIENCES.length - 1 && (
              <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-zinc-800 group-hover:bg-zinc-700 transition-colors"></div>
            )}
            
            {/* Timeline Node */}
            <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center
              ${hoveredIndex === idx ? 'bg-zinc-100 border-zinc-100 scale-125' : 'bg-zinc-900 border-zinc-700'}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${hoveredIndex === idx ? 'bg-zinc-900' : 'bg-zinc-700'}`}></div>
            </div>

            <div className={`p-6 rounded-3xl transition-all duration-300 border ${hoveredIndex === idx ? 'bg-zinc-900 border-zinc-700 shadow-xl' : 'border-transparent opacity-70'}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1">
                    <span className="font-semibold text-zinc-300">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, dIdx) => (
                  <li key={dIdx} className="text-zinc-400 text-sm leading-relaxed flex gap-3">
                    <span className="text-zinc-600 shrink-0 mt-1.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
