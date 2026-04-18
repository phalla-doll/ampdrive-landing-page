import React from 'react';
import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <section className="bg-white text-dark py-24 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 border-b border-gray-200 pb-24">
        
        <div className="md:w-1/4">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
            DISCOVER WHY OUR CLIENTS RAVE ABOUT OUR DELIVERABLES & REPORTING
          </p>
        </div>

        <div className="md:w-3/4 flex flex-col gap-8">
          <div className="flex gap-4">
            <span className="text-5xl font-display font-medium text-dark leading-none -mt-2">&quot;</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight leading-[1.25] max-w-4xl text-balance">
              Emphasizes The Supplier&apos;s Dedication To Helping Their Clients Gain Valuable Knowledge And Insights, Which Is A Highly Desirable Trait In A Business Partner.
            </h2>
          </div>

          <div className="flex items-center justify-between md:ml-10 mt-4">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 rounded-full overflow-hidden relative">
                 <Image src="https://picsum.photos/seed/portrait/100/100" alt="Sarah Smith" fill className="object-cover" referrerPolicy="no-referrer" />
               </div>
               <div>
                  <p className="font-medium text-lg leading-tight">Sarah Smith</p>
                  <p className="text-base text-gray-500 pt-1">Lead Consultant</p>
               </div>
            </div>

            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="sr-only">Previous</span>
                <span className="text-xl leading-none">&larr;</span>
              </button>
              <button className="w-10 h-10 rounded-full border border-dark bg-dark text-white flex flex-col items-center justify-center hover:bg-dark-surface transition-colors">
                <span className="sr-only">Next</span>
                 <span className="text-xl leading-none">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
