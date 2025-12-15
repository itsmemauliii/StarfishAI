import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const audiences = [
  "Growing businesses scaling fast",
  "Lean teams needing more bandwidth",
  "Startups & SMBs optimizing costs",
  "Operations-focused companies"
];

const WhoItsFor: React.FC = () => {
  return (
    <section id="who-its-for" className="py-24 px-6 bg-slate-900 text-white scroll-mt-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Who It’s For</h2>
            <p className="text-slate-400 text-lg font-light mb-8 max-w-md">
              Our solutions are designed for teams that value efficiency. If you find yourself doing the same task more than twice a day, we can help.
            </p>
            <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-emerald-400 font-medium hover:text-emerald-300 flex items-center gap-2 transition-colors"
            >
              Start saving time &rarr;
            </button>
          </FadeIn>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="grid grid-cols-1 gap-4">
            {audiences.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="none">
                <div className="flex items-center gap-4 p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                  <span className="text-lg font-medium tracking-wide">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;