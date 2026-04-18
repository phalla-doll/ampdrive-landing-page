'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-12 w-full max-w-7xl mx-auto font-display">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-primary rotate-45" />
        <span className="text-xl font-bold tracking-wide uppercase">Ampdrive</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <Link href="#" className="hover:text-white transition-colors">Products</Link>
        <Link href="#" className="hover:text-white transition-colors">Company</Link>
        <Link href="#" className="hover:text-white transition-colors">Insights</Link>
        <Link href="#" className="hover:text-white transition-colors">Support</Link>
        <Link href="#" className="hover:text-white transition-colors">Shop</Link>
      </div>

      <div className="hidden md:block">
        <Link href="#" className="px-6 py-2 border border-gray-600 rounded-full text-sm font-medium hover:bg-white hover:text-dark transition-colors">
          Contact
        </Link>
      </div>
      
      <button className="md:hidden text-white">
        <Menu size={24} />
      </button>
    </nav>
  );
}
