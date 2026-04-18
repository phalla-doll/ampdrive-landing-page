'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { Plus, Minus } from 'lucide-react';
import React, { useState } from 'react';
import Image from 'next/image';

const items = [
  {
    value: 'what-we-do',
    title: 'What We Do',
    content: 'We provide innovative electric mobility solutions tailored for modern infrastructure. Our focus is on bringing efficient, robust, and scalable charging systems to power the next generation of transportation.'
  },
  {
    value: 'who-we-serve',
    title: 'Who We Serve',
    isList: true,
    content: [
      'Home and on-the-go EV owners',
      'Commercial and public establishments',
      'Municipalities and government agencies',
      'Developers and builders',
      'EV manufacturers and dealerships'
    ]
  },
  {
    value: 'where-we-play',
    title: 'Where We Play',
    content: 'Our reach extends globally, bringing sustainable technology to urban centers, highways, and residential areas, ensuring electric motion is accessible anywhere.'
  }
];

export default function AccordionSection() {
  return (
    <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto flex flex-col pt-24 border-t border-dark-border/50">
      
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24">
        {/* Left side text */}
        <div className="md:w-1/3">
          <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
            At Ampdrive, we strive to make electric mobility accessible and convenient for everyone, leading the charge towards a cleaner future.
          </p>
        </div>

        {/* Right side accordion */}
        <div className="md:w-2/3 max-w-2xl">
          <Accordion.Root type="single" defaultValue="who-we-serve" collapsible className="w-full">
            {items.map((item) => (
              <AccordionItem key={item.value} item={item} />
            ))}
          </Accordion.Root>
        </div>
      </div>

      {/* Large Image Full Width at bottom of dark section */}
      <div className="w-full h-[400px] md:h-[600px] bg-dark-surface rounded-3xl overflow-hidden relative">
        <Image 
          src="https://picsum.photos/seed/evperson/1200/600" 
          alt="Person with Electric Car" 
          fill 
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
      </div>

    </section>
  );
}

function AccordionItem({ item }: { item: any }) {
  const [isOpen, setIsOpen] = useState(false); // Using Radix state internally but we'll use a hack to style icon since Radix doesn't easily expose state to children without their parts unless using data-state. We can use CSS [data-state=open]

  return (
    <Accordion.Item value={item.value} className="border-b border-gray-800 last:border-b-0 overflow-hidden">
      <Accordion.Header className="flex">
        <Accordion.Trigger className="group flex flex-1 items-center justify-between py-8 text-2xl md:text-4xl font-display font-medium text-white transition-all hover:text-primary [&[data-state=open]]:text-white [&[data-state=open]>div]:bg-[#D9D9D9] [&[data-state=open]>div]:text-dark">
          {item.title}
          {/* Custom icon area */}
          <div className="relative w-8 h-8 flex items-center justify-center rounded-full text-white group-hover:text-primary transition-colors duration-300">
            <Plus className="absolute w-6 h-6 transition-transform duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
            <Minus className="absolute w-6 h-6 transition-transform duration-300 -rotate-90 opacity-0 group-data-[state=open]:rotate-0 group-data-[state=open]:opacity-100" />
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden text-gray-400 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="pb-10 pt-2 pl-4">
          {item.isList ? (
            <ul className="space-y-4 list-disc list-inside">
               {item.content.map((listItem: string, i: number) => (
                 <li key={i} className="text-base md:text-lg leading-relaxed">{listItem}</li>
               ))}
            </ul>
          ) : (
            <p className="text-base md:text-lg leading-relaxed">{item.content}</p>
          )}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
