import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import WhoItsFor from './components/WhoItsFor';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Requirement: Redirect to LinkedIn after 15 minutes
  useEffect(() => {
    const timeoutDuration = 15 * 60 * 1000; // 15 minutes in milliseconds
    const timer = setTimeout(() => {
      window.location.href = "https://www.linkedin.com/company/starfishai";
    }, timeoutDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col antialiased text-slate-900 bg-neutral-50 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhatWeDo />
        <WhoItsFor />
        <HowItWorks />
        <UseCases />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;