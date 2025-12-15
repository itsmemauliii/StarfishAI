import React from 'react';
import { Search, Cog, LineChart } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const steps = [
  {
    icon: <Search size={28} />,
    title: "1. Understand",
    description: "We audit your current workflows to identify bottlenecks and repetitive manual tasks suitable for automation."
  },
  {
    icon: <Cog size={28} />,
    title: "2. Automate",
    description: "We design and build custom AI agents and automation scripts that integrate seamlessly with your existing software."
  },
  {
    icon: <LineChart size={28} />,
    title: "3. Improve",
    description: "We don't walk away. We monitor performance, fix edge cases, and continuously optimize the system as you grow."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-neutral-50 relative overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-500 font-light max-w-xl mx-auto">
              A transparent, three-step process to get you from manual chaos to automated clarity.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) - Enhanced visibility */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-slate-300 z-0" />

          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-emerald-500 shadow-sm mb-6 group hover:border-emerald-200 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;