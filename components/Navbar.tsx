
import React, { useEffect, useState } from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative w-10 h-10 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-center justify-center overflow-hidden transition-colors duration-300">
        <svg viewBox="0 0 40 40" className="w-6 h-6 fill-none stroke-zinc-900 dark:stroke-zinc-100 transition-colors duration-300" strokeWidth="2.5">
          <path d="M10 12V28M30 12V28M10 20H30" strokeLinecap="round" />
          <path d="M30 20C33 20 33 24 33 24C33 24 33 28 30 28" strokeLinecap="round" />
          <path d="M6 10L10 6M34 10L30 6M6 30L10 34M34 30L30 34" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-zinc-900 dark:text-zinc-100 font-extrabold tracking-tighter text-xl leading-none transition-colors duration-300">HUSSEIN</span>
      <span className="text-zinc-500 font-medium tracking-[0.2em] text-[10px] leading-tight">BASSAM</span>
    </div>
  </div>
);

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check system preference or class on mount
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 ml-4 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:scale-105 transition-all shadow-sm"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
      )}
    </button>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between glass rounded-3xl px-6 py-4 border border-zinc-200 dark:border-white/5 shadow-2xl transition-colors duration-300">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Arsenal</a>
          <a href="#experience" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Journey</a>
          <a href="#education" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Education</a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="ml-4 px-5 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-zinc-900/10 dark:shadow-white/5">
              Contact
            </a>
          </div>
        </div>
        
        {/* Mobile menu indicator or simple version for small screens */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <a href="#contact" className="w-10 h-10 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-full flex items-center justify-center font-bold hover:scale-105 transition-transform" aria-label="Contact">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
