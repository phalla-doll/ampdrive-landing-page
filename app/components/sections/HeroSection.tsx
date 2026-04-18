import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative px-6 md:px-12 pb-16 pt-8 max-w-7xl mx-auto">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="flex flex-col items-center text-center mt-12 md:mt-16 mb-20 md:mb-24">
        <h1 className="text-5xl md:text-[5rem] font-display font-medium max-w-[50rem] tracking-tight leading-[1] mb-8">
          Empowering Electric Motion Technology
        </h1>
        <p className="text-gray-400/90 max-w-2xl text-base md:text-lg leading-relaxed text-balance">
          Cutting edge electric technology company, focused on charging solutions and technology that empowers sustainable and connected mobility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[600px] md:h-[500px]">
        {/* Box 1: Small dark box */}
        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative group">
           <Image src="https://picsum.photos/seed/evchargerpoint/400/300" alt="EV Charging Station" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
           <div className="absolute inset-0 bg-dark/20 mix-blend-multiply" />
        </div>

        {/* Box 2: Neon Green box */}
        <div className="col-span-1 row-span-1 bg-primary rounded-3xl p-8 flex flex-col justify-end text-dark">
          <h3 className="font-display font-medium text-3xl leading-[1.1]">Electric<br/>Mobility</h3>
        </div>

        {/* Box 3: Large Main Image */}
        <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
           <Image src="https://picsum.photos/seed/electriccar/800/600" alt="Electric Car on Road" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
        </div>

        {/* Box 4: Motion Technology text */}
        <div className="col-span-1 row-span-1 bg-dark-surface rounded-3xl p-8 flex items-start border border-dark-border">
          <h3 className="font-display font-medium text-xl leading-snug">Motion<br/>Technology</h3>
        </div>

        {/* Box 5: Cleaner Future Green box */}
        <div className="col-span-1 row-span-1 bg-primary rounded-3xl p-8 flex flex-col justify-end text-dark relative overflow-hidden">
          {/* Subtle grid lines could be added here as background */}
          <div className="absolute top-6 right-6 w-5 h-5 border-r border-t border-dark/30" />
          <h3 className="font-display font-medium text-3xl leading-[1.1]">Cleaner<br/>Future</h3>
        </div>
      </div>

    </section>
  );
}
