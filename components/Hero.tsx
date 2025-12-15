import React from 'react';
import FadeIn from './ui/FadeIn';

const Hero: React.FC = () => {
  const demoUrl = "https://www.linkedin.com/company/starfishai";

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Background Decorative Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <FadeIn delay={0.1}>
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wide text-emerald-800 uppercase bg-emerald-100 rounded-full">
                AI Automation Agency
            </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-[1.15] mb-6">
            We automate manual tasks so teams save <span className="text-emerald-500">30%+</span> of their time.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Simple AI workflows that reduce repetitive work and help teams focus on growth.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 inline-block text-center"
            >
              Book a Demo
            </a>
            <button 
                onClick={scrollToHowItWorks}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors text-center inline-block"
            >
              How It Works
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;