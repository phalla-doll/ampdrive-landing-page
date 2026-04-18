import React from 'react';
import Image from 'next/image';

export default function ElectricPurposeSection() {
  return (
    <section className="bg-[#F2F4F8] text-dark py-24 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center">
        
        <h2 className="text-4xl md:text-[3.5rem] font-display font-medium tracking-tight mb-4">Our Electric Purpose</h2>

        <div className="flex justify-center max-w-5xl mx-auto w-full">
           <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-[500px] w-full">
              
              <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative">
                 <Image src="https://picsum.photos/seed/evcharger/600/500" alt="EV Charger" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>

               <div className="col-span-1 row-span-1 bg-primary rounded-3xl overflow-hidden relative p-6 flex flex-col justify-end text-dark">
                  <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-dark/30" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-dark/10" />
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-dark/10" />
                  <h3 className="font-display font-medium text-xl leading-[1.1] relative z-10">Innovative<br/>Solutions</h3>
               </div>
               
               <div className="col-span-1 row-span-1 border border-gray-300 rounded-3xl overflow-hidden relative p-8 flex flex-col justify-end">
                  {/* Small line map placeholder */}
                  <Image src="https://picsum.photos/seed/map/400/400" alt="Map graphic" fill className="object-cover opacity-20 grayscale mix-blend-multiply" referrerPolicy="no-referrer" />
                  <h3 className="font-display font-medium text-xl leading-[1.1] relative z-10 text-right">Charging<br/>Solutions</h3>
               </div>

               <div className="col-span-1 bg-gray-200 rounded-3xl overflow-hidden relative">
                  <Image src="https://picsum.photos/seed/evdashboard/300/300" alt="Dashboard" fill className="object-cover" referrerPolicy="no-referrer" />
               </div>
               
               <div className="col-span-1 bg-gray-200 rounded-3xl overflow-hidden relative">
                   <Image src="https://picsum.photos/seed/evwheel/300/300" alt="Wheel" fill className="object-cover" referrerPolicy="no-referrer" />
               </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-left mt-8 md:mt-12">
           <div className="md:w-1/2">
             <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-md">
               We&apos;re driven by our electric purpose: to empower sustainable and connected mobility through cutting-edge technology and innovative solutions. Our team of experts is passionate about electric technology and committed to creating a cleaner, more efficient world through our work. As a modern electric company, we specialize in charging solutions, renewable energy, and sustainable mobility.
             </p>
           </div>
           <div className="md:w-1/2">
             <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-md">
               Our material aims to help our clients navigate the complex landscape of electric technology and leverage the most advantage. We work closely with each of our clients to deliver customized solutions that meet their unique needs, and help them achieve their business goals. With our innovative electric material, you can trust that you are partnering.
             </p>
           </div>
        </div>

      </div>
    </section>
  );
}
