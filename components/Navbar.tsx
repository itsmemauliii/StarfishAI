import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const demoUrl = "https://www.linkedin.com/company/starfishai";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={handleLogoClick}>
          <span className="text-2xl pt-1 text-slate-800" style={{ fontFamily: '"Chewy", cursive', letterSpacing: '0.05em' }}>STARFISHAI</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('what-we-do')} className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">What We Do</button>
          <button onClick={() => scrollToSection('who-its-for')} className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Who It's For</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">How It Works</button>
          <a 
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600 hover:text-emerald-600">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 p-6 md:hidden flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <button onClick={() => scrollToSection('what-we-do')} className="text-left text-base font-medium text-slate-600 py-2 border-b border-neutral-100">What We Do</button>
          <button onClick={() => scrollToSection('who-its-for')} className="text-left text-base font-medium text-slate-600 py-2 border-b border-neutral-100">Who It's For</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-left text-base font-medium text-slate-600 py-2 border-b border-neutral-100">How It Works</button>
          <a 
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-lg bg-slate-900 text-white font-medium text-center block hover:bg-slate-800 transition-colors mt-2"
          >
            Book a Demo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;