
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 px-6 border-t border-zinc-900 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="mb-10">
          <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-6">
            <span className="text-zinc-100 font-black text-xl">H</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-zinc-100">Let's build something <br/><span className="text-zinc-500">extraordinary.</span></h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 mb-16">
            <a href="mailto:hussein.b.bassam@outlook.com" className="flex items-center gap-4 group">
                <div className="p-4 glass rounded-2xl group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div className="text-left">
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-1">Direct Email</p>
                    <p className="text-base font-bold text-zinc-300">hussein.b.bassam@outlook.com</p>
                </div>
            </a>
            
            <a href="tel:+38670477635" className="flex items-center gap-4 group">
                <div className="p-4 glass rounded-2xl group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div className="text-left">
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-1">WhatsApp / Call</p>
                    <p className="text-base font-bold text-zinc-300">+386 70477635</p>
                </div>
            </a>
        </div>

        <div className="w-full h-px bg-zinc-900 mb-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
            <div className="flex items-center gap-8">
                <a href="https://linkedin.com/in/husseinbbassam/" target="_blank" rel="noopener" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
                <a href="https://github.com/husseinbbassam" target="_blank" rel="noopener" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">GitHub</a>
            </div>
            <p className="text-zinc-600 text-[11px] font-mono tracking-tighter">
              &copy; {currentYear} // HUSSEIN BASSAM // DESIGNED FOR SCALE
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
