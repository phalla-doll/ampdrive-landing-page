import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import AccordionSection from './components/sections/AccordionSection';
import InnovativeSalesSection from './components/sections/InnovativeSalesSection';
import ProcessSection from './components/sections/ProcessSection';
import TestimonialSection from './components/sections/TestimonialSection';
import ResultsSection from './components/sections/ResultsSection';
import ElectricPurposeSection from './components/sections/ElectricPurposeSection';
import FooterSection from './components/sections/FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark flex flex-col font-sans selection:bg-primary selection:text-dark">
      <Navbar />
      <HeroSection />
      <AccordionSection />
      <InnovativeSalesSection />
      <ProcessSection />
      <TestimonialSection />
      <ResultsSection />
      <ElectricPurposeSection />
      <div className="bg-[#F2F4F8] h-32 w-full" /> {/* Spacer for the negative margin footer box */}
      <FooterSection />
    </main>
  );
}
