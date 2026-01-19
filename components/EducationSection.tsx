
import React from 'react';
import { EDUCATIONS } from '../constants';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl font-bold mb-6 text-black dark:text-zinc-100 transition-colors duration-300">Lifelong Learner</h2>
                 <p className="text-zinc-800 dark:text-zinc-400 mb-8 max-w-md transition-colors duration-300">
                    Bridging the gap between software engineering and intelligence. Currently pursuing advanced studies in Data Science to build smarter backends.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <div className="p-4 glass rounded-2xl flex flex-col items-center min-w-[100px] text-black dark:text-zinc-100 transition-colors duration-300">
                        <span className="text-2xl font-bold">Native</span>
                        <span className="text-xs text-zinc-600 uppercase">Arabic</span>
                    </div>
                    <div className="p-4 glass rounded-2xl flex flex-col items-center min-w-[100px] text-black dark:text-zinc-100 transition-colors duration-300">
                        <span className="text-2xl font-bold">C2</span>
                        <span className="text-xs text-zinc-600 uppercase">English</span>
                    </div>
                    <div className="p-4 glass rounded-2xl flex flex-col items-center min-w-[100px] text-black dark:text-zinc-100 transition-colors duration-300">
                        <span className="text-2xl font-bold">A1+</span>
                        <span className="text-xs text-zinc-600 uppercase">Slovenian</span>
                    </div>
                 </div>
            </div>

            <div className="space-y-6">
                {EDUCATIONS.map((edu, idx) => (
                    <div key={idx} className="glass p-6 rounded-3xl hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300 md:min-h-[160px]">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-lg text-black dark:text-zinc-100 transition-colors duration-300">{edu.degree}</h3>
                                <p className="text-emerald-600 dark:text-emerald-500 font-medium">{edu.school}</p>
                            </div>
                            <span className="text-xs font-mono text-zinc-700 dark:text-zinc-400 px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded transition-colors duration-300">{edu.period}</span>
                        </div>
                        <ul className="text-sm text-zinc-800 dark:text-zinc-400 space-y-2 transition-colors duration-300">
                            {edu.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-zinc-600 dark:bg-zinc-600 rounded-full transition-colors duration-300"></div>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
