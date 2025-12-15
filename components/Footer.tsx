import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 group">
            <span className="text-lg pt-1 text-white" style={{ fontFamily: '"Chewy", cursive', letterSpacing: '0.05em' }}>STARFISHAI</span>
        </div>
        
        <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>

        <div className="text-slate-600">
          &copy; {new Date().getFullYear()} StarfishAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;