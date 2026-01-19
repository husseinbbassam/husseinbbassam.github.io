
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <br/><span className="text-zinc-500">extraordinary.</span></h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href="mailto:hussein.b.bassam@outlook.com" className="flex items-center gap-2 group">
                <div className="p-3 glass rounded-xl group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div className="text-left">
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Email</p>
                    <p className="text-sm font-semibold">hussein.b.bassam@outlook.com</p>
                </div>
            </a>
            
            <a href="tel:+38670477635" className="flex items-center gap-2 group">
                <div className="p-3 glass rounded-xl group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div className="text-left">
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Phone</p>
                    <p className="text-sm font-semibold">+386 70477635</p>
                </div>
            </a>
        </div>

        <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/husseinbbassam/" target="_blank" rel="noopener" className="text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
            <span className="text-zinc-800">/</span>
            <a href="https://github.com/husseinbassam" target="_blank" rel="noopener" className="text-zinc-500 hover:text-white transition-colors">GitHub</a>
            <span className="text-zinc-800">/</span>
            <span className="text-zinc-500 text-sm">© {currentYear} Hussein Bassam</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
