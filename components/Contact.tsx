import React from 'react';
import FadeIn from './ui/FadeIn';

const Contact: React.FC = () => {
  const demoUrl = "https://www.linkedin.com/company/starfishai";
  const email = "maulipatel18112003@gmail.com";

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 relative overflow-hidden text-center scroll-mt-28">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-3xl mx-auto z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
            Ready to reclaim your time?
          </h2>
          <p className="text-lg text-slate-300 font-light mb-10 max-w-xl mx-auto">
            Book a 15-minute discovery chat. We'll outline exactly where you can save time and money with automation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition-colors shadow-lg hover:shadow-emerald-500/20 inline-block text-center"
            >
              Book a Demo
            </a>
            <a 
                href={`mailto:${email}`}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-slate-600 text-white font-medium hover:bg-slate-800 hover:border-slate-500 transition-colors inline-block text-center"
            >
              Contact Sales
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;