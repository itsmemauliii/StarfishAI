import React from 'react';
import { Bot, Workflow, BarChart3, Layers } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const services = [
  {
    icon: <Workflow size={24} />,
    title: "AI Workflow Automation",
    description: "We connect your existing apps to create seamless, automated data flows without changing your core tools."
  },
  {
    icon: <Layers size={24} />,
    title: "Operations Automation",
    description: "Streamline internal processes like invoicing, data entry, and document management."
  },
  {
    icon: <Bot size={24} />,
    title: "Lead & Task Automation",
    description: "Automatically capture, qualify, and organize leads, assigning tasks to the right team members."
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Reporting & Monitoring",
    description: "Real-time dashboards that track efficiency gains and ensure your automations are performing."
  }
];

const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="py-24 px-6 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16 md:w-1/2">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">What We Do</h2>
            <p className="text-slate-500 text-lg font-light">
              We don't just build bots. We architect reliable systems that handle the heavy lifting for your business.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="h-full p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-emerald-200 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-slate-900 mb-6 group-hover:text-emerald-500 transition-colors shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light text-sm">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;