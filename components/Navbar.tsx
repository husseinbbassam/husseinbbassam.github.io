
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center">
            <span className="text-zinc-900 font-bold text-lg">H</span>
          </div>
          <span className="font-semibold tracking-tight hidden sm:block">Hussein Bassam</span>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#contact" className="px-4 py-2 bg-zinc-100 text-zinc-900 rounded-full hover:bg-white transition-all transform hover:scale-105">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
