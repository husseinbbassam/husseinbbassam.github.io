
import React from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative w-10 h-10 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 40 40" className="w-6 h-6 fill-none stroke-zinc-100" strokeWidth="2.5">
          <path d="M10 12V28M30 12V28M10 20H30" strokeLinecap="round" />
          <path d="M30 20C33 20 33 24 33 24C33 24 33 28 30 28" strokeLinecap="round" />
          <path d="M6 10L10 6M34 10L30 6M6 30L10 34M34 30L30 34" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-zinc-100 font-extrabold tracking-tighter text-xl leading-none">HUSSEIN</span>
      <span className="text-zinc-500 font-medium tracking-[0.2em] text-[10px] leading-tight">BASSAM</span>
    </div>
  </div>
);

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between glass rounded-3xl px-6 py-4 border border-white/5 shadow-2xl">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Arsenal</a>
          <a href="#experience" className="hover:text-white transition-colors">Journey</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#contact" className="px-5 py-2.5 bg-zinc-100 text-zinc-900 rounded-xl font-bold hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-white/5">
            Contact
          </a>
        </div>
        
        {/* Mobile menu indicator or simple version for small screens */}
        <div className="md:hidden">
          <a href="#contact" className="w-10 h-10 bg-zinc-100 text-zinc-900 rounded-full flex items-center justify-center font-bold">
            !
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
