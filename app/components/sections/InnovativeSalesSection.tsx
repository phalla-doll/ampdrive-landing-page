import React from 'react';

export default function InnovativeSalesSection() {
  return (
    <section className="bg-white text-dark py-24 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-gray-200 pb-16">
           <h2 className="text-4xl md:text-6xl font-display font-medium max-w-xl leading-[1.1] tracking-tight">
             Innovative Sales Strategies<br />For A Connected Future
           </h2>
           
           <div className="max-w-lg relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/40 blur-[40px] rounded-full pointer-events-none" />
              <p className="font-medium text-lg mb-4 text-dark/90 text-balance relative z-10">
                We take a consultative approach to sales, working with our customers to find the best solutions for their needs. We believe in transparent pricing and a commitment to sustainability.
              </p>
              <p className="text-gray-600 font-medium relative z-10">
                Our goal is not just to sell products and services, but to build long-lasting relationships.
              </p>
           </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-display font-medium mb-4">Expert installation services for everyone</h3>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Our highly skilled installation team ensures all products are installed to the highest standards and in compliance with all relevant codes and regulations, minimizing disruption to our customers&apos; operations.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-display font-medium mb-4">Comprehensive support and maintenance</h3>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Team of expert to provide technical support and maintenance to help prevent downtime and extend the life of our products. We offer regular maintenance and inspection services, identifying and resolving issues before they become major problems.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
