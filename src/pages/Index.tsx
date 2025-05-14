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
import { preloadImage, preloadVideo, getEncodedPath } from '@/utils/imageUtils';
import { useLocation } from 'react-router-dom';
import SkipLink from '@/components/ui/skip-link';
import { SectionDivider } from '@/components/ui/section-divider';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const cleanup = setupScrollAnimation();
    
    // Preload hero image and project images for better user experience
    const preloadAssets = () => {
      // Preload hero image for fallback
      preloadImage('/lovable-uploads/728703b4-e76d-4b4b-bc6c-33ddd3f03992.png');
      
      // Preload hero video
      const videoPath = '/lovable-uploads/industrial-cooling.mp4';
      preloadVideo(getEncodedPath(videoPath)).catch(err => {
        console.warn('Failed to preload video:', err);
      });
      
      // Preload project images
      import('@/utils/projectImages').then(({ images }) => {
        // Preload first 3 images
        images.slice(0, 3).forEach(image => {
          const img = new Image();
          img.src = image.src;
        });
      });
      
      // Preload certificate images for testimonials
      preloadImage('/lovable-uploads/28a47dbe-cbaf-4eda-a45f-c9e7adb9ec02.png');
      preloadImage('/lovable-uploads/64687e12-46cb-44b9-8574-13e6f0e8cce8.png');
    };
    
    preloadAssets();

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return cleanup;
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <SkipLink targetId="main-content">Pular para o conteúdo principal</SkipLink>
      <Header />
      <main id="main-content">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Sectors />
        <SectionDivider />
        <div id="work">
          <OurWork />
        </div>
        <SectionDivider variant="subtle" />
        <div id="technology">
          <TechnologyCloud />
        </div>
        <SectionDivider />
        <Differentials />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+5511555512345" />
    </div>
  );
};

export default Index;
