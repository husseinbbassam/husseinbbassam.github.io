
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsGrid from './components/SkillsGrid';
import Timeline from './components/Timeline';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-zinc-100 selection:text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <SkillsGrid />
        <Timeline />
        <EducationSection />
      </main>
      <Footer />
      
      {/* Decorative radial gradients for modern look */}
      <div className="fixed inset-0 pointer-events-none -z-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default App;
