
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs font-medium text-zinc-300 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Open to roles in Slovenia & B2B in EU
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Scaling Systems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500">Precision.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Senior Backend Software Engineer with 5+ years of experience in <span className="text-zinc-100">.NET Core</span> and Microservices. 
          Currently architecting robust systems and mastering <span className="text-zinc-100">Data Science</span>.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://github.com/husseinbassam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-zinc-100 text-zinc-900 font-semibold rounded-xl hover:bg-white transition-all shadow-lg shadow-white/5 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/husseinbbassam/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-zinc-900 border border-zinc-700 text-zinc-100 font-semibold rounded-xl hover:bg-zinc-800 transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
