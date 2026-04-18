import React from 'react';

export default function ResultsSection() {
  return (
    <section className="bg-white text-dark py-24 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/30 blur-[80px] rounded-full pointer-events-none" />

        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-gray-200 pb-20">
          <h2 className="text-4xl md:text-[3.5rem] font-display font-medium tracking-tight max-w-xl leading-[1.1]">
            Transformative Results And Industry Recognition
          </h2>
          <p className="text-gray-500 max-w-sm text-base leading-relaxed">
            Our transformative approach to electric technology and sustainable solutions has earned us recognition as a top 20 e-company in the US and a top 50 sustainable technology company in the world. We&apos;re proud to have a track record of delivering measurable results that drive business success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark text-white rounded-3xl p-12 md:p-16 flex flex-col justify-between h-[300px]">
             <div className="flex items-baseline gap-2">
               <span className="text-2xl font-medium uppercase tracking-widest text-primary">Top</span>
               <span className="text-8xl md:text-[140px] leading-none font-display font-medium tracking-tighter">20</span>
             </div>
             <p className="max-w-[200px] text-xs font-medium uppercase tracking-wider text-gray-400">
               E-COMPANY IN THE UNITED STATES
             </p>
          </div>
          
          <div className="bg-primary text-dark rounded-3xl p-12 md:p-16 flex flex-col justify-between h-[300px]">
             <div className="flex items-baseline gap-2">
               <span className="text-2xl font-medium uppercase tracking-widest text-dark/60">Top</span>
               <span className="text-8xl md:text-[140px] leading-none font-display font-medium tracking-tighter mix-blend-multiply opacity-80">50</span>
             </div>
             <p className="max-w-[200px] text-xs font-medium uppercase tracking-wider text-dark/70">
               SUSTAINABLE TECHNOLOGY COMPANY
             </p>
          </div>
        </div>

      </div>
    </section>
  );
}
