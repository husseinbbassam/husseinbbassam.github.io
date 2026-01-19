
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-black dark:text-zinc-100 transition-colors duration-300">Technical Arsenal</h2>
          <p className="text-zinc-700 dark:text-zinc-500">The tools and patterns I use to architect production-grade backends.</p>
        </div>
        <div className="flex gap-2">
            <span className="px-3 py-1 bg-white dark:bg-zinc-900 rounded-lg text-xs font-mono border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 transition-colors duration-300">C# Expert</span>
            <span className="px-3 py-1 bg-white dark:bg-zinc-900 rounded-lg text-xs font-mono border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 transition-colors duration-300">.NET Professional</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="bento-card p-6 rounded-3xl flex flex-col transition-colors duration-300">
            <div className="mb-4 p-3 bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl w-fit transition-colors duration-300">
              <svg className="w-6 h-6 text-black dark:text-zinc-100 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-4 text-black dark:text-zinc-100 transition-colors duration-300">{cat.title}</h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {cat.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-400 rounded-full text-[10px] hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors uppercase tracking-wider font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
