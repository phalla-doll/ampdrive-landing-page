import React from 'react';
import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 px-6 md:px-12 w-full relative">
      
      {/* Light Grey Get In Touch Box */}
      <div className="max-w-5xl mx-auto bg-[#F2F4F8] text-dark rounded-3xl p-12 md:p-20 relative -mt-48 mb-24 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
         {/* Green glow inside box */}
         <div className="absolute top-1/2 left-1/2 -transform-x-1/2 -transform-y-1/2 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

         <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight">
           Get In Touch
         </h2>
         
         <div className="flex flex-col items-start gap-6 relative z-10 w-full max-w-sm">
            <button className="w-16 h-16 bg-primary text-dark rounded-xl flex items-center justify-center hover:bg-primary-light transition-colors transform hover:scale-105 shadow-xl shadow-primary/20">
               <span className="text-2xl font-bold">&rarr;</span>
            </button>
            <p className="text-sm font-medium text-gray-600 max-w-xs leading-relaxed">
              Plug Into Our Expertise and Power Your Business to Success with Electric Innovation.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end pb-12 border-b border-gray-800 gap-12">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary rotate-45" />
          <span className="text-xl font-bold tracking-wide uppercase font-display">Ampdrive</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-sm text-gray-400">
           <div className="flex flex-col gap-3">
             <Link href="#" className="hover:text-white transition-colors">Products</Link>
             <Link href="#" className="hover:text-white transition-colors">Company</Link>
             <Link href="#" className="hover:text-white transition-colors">Insights</Link>
             <Link href="#" className="hover:text-white transition-colors">Support</Link>
             <Link href="#" className="hover:text-white transition-colors">Blog</Link>
           </div>
           
           <div className="flex flex-col gap-3">
             <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
             <Link href="#" className="hover:text-white transition-colors">Contact</Link>
             <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
           </div>

           <div className="flex flex-col gap-3">
             <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
             <Link href="#" className="hover:text-white transition-colors">Facebook</Link>
             <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex justify-between items-center text-xs text-gray-600">
        <p>© 2026 AMPDRIVE. All Rights Reserved.</p>
      </div>

    </footer>
  );
}
