import React from 'react';
import FadeIn from './ui/FadeIn';

const cases = [
  {
    category: "Sales",
    title: "Lead Handling",
    detail: "Instantly capture web leads, enrich data, and sync to CRM."
  },
  {
    category: "HR & Ops",
    title: "Client Onboarding",
    detail: "Auto-generate contracts, create folders, and send welcome emails."
  },
  {
    category: "Productivity",
    title: "Scheduling & Reminders",
    detail: "AI assistants that manage calendars and follow up on meetings."
  },
  {
    category: "Management",
    title: "Internal Reporting",
    detail: "Aggregate data from 5+ sources into a daily executive summary."
  }
];

const UseCases: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-12">
            <span className="text-emerald-500 font-medium tracking-wider text-sm uppercase mb-2 block">Real Results</span>
            <h2 className="text-3xl font-semibold text-slate-900">Use Cases</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cases.map((useCase, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="group p-8 border border-neutral-100 rounded-2xl bg-neutral-50 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium text-slate-900">{useCase.title}</h3>
                  <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-500 rounded uppercase tracking-wide">
                    {useCase.category}
                  </span>
                </div>
                <p className="text-slate-500 font-light">
                  {useCase.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;