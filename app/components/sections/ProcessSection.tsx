import React from 'react';

const processSteps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We work closely with you to identify your challenges and opportunities and develop a customized plan.',
    color: 'bg-[#F2F4F8]',
    textColor: 'text-dark',
  },
  {
    num: '02',
    title: 'Solution Design',
    desc: 'Customized solutions that leverage the latest technology and industry best practices.',
    color: 'bg-primary',
    textColor: 'text-dark',
  },
  {
    num: '03',
    title: 'Implementation',
    desc: 'We use a rigorous quality assurance process to ensure that the implementation process is seamless and minimizes disruption.',
    color: 'bg-[#F2F4F8]',
    textColor: 'text-dark',
  },
  {
    num: '04',
    title: 'Ongoing Support',
    desc: 'We offer comprehensive support and maintenance services to keep your solution performing at its best.',
    color: 'bg-primary',
    textColor: 'text-dark',
  }
];

export default function ProcessSection() {
  return (
    <section className="bg-dark text-white py-24 px-6 md:px-12 w-full border-t border-dark-border/50 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        
        <div className="md:w-1/3">
           <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight leading-[1.1] sticky top-24">
             Your Business Is At The Center Of Our Process
           </h2>
        </div>

        <div className="md:w-2/3 flex flex-col gap-4">
          {processSteps.map((step) => (
            <div 
              key={step.num} 
              className={`flex flex-col sm:flex-row rounded-3xl p-8 sm:p-12 items-start sm:items-center gap-8 sm:gap-16 ${step.color} ${step.textColor} transition-transform duration-500 hover:scale-[1.02]`}
            >
              <div className="text-7xl md:text-8xl font-display font-medium tracking-tighter opacity-80 mix-blend-multiply">
                {step.num}
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-2xl font-display font-semibold border-b border-black/10 pb-4 mb-2">{step.title}</h3>
                <p className="text-sm font-medium opacity-80 leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
