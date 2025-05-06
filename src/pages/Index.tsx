
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Sectors from '@/components/sections/Sectors';
import Differentials from '@/components/sections/Differentials';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import OurWork from '@/components/sections/OurWork';
import TechnologyCloud from '@/components/sections/TechnologyCloud';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { setupScrollAnimation } from '@/utils/scrollAnimation';

const Index = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Sectors />
        <OurWork />
        <TechnologyCloud />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+5511555512345" />
    </div>
  );
};

export default Index;
