
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
import { setupScrollAnimation } from '@/utils/scrollAnimation';
import { preloadImage } from '@/utils/imageUtils';
import { useLocation } from 'react-router-dom';
import SkipLink from '@/components/ui/skip-link';
import { SectionDivider } from '@/components/ui/section-divider';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const cleanup = setupScrollAnimation();
    
    // Preload critical images for better user experience
    const preloadAssets = () => {
      // Preload primary hero image
      preloadImage('/lovable-uploads/d4a03e7e-0fe0-4f17-8567-880a8c9e8b99.png')
        .then(() => console.log('Primary hero image preloaded'))
        .catch(err => console.warn('Failed to preload primary hero image:', err));
      
      // Preload project images
      import('@/utils/projectImages').then(({ images }) => {
        // Preload first 3 images
        images.slice(0, 3).forEach(image => {
          const img = new Image();
          img.src = image.src;
        });
      });
      
      // Preload certificate images for testimonials
      preloadImage('/lovable-uploads/c742c9e2-2af1-4b43-a4e4-d71215c59926.png');
      preloadImage('/lovable-uploads/abb64bbf-9410-485e-a92d-07cc979fa7f0.png');
      preloadImage('/lovable-uploads/667b6ba4-aae3-4c50-9dad-8d1e622350e3.png');
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
    </div>
  );
};

export default Index;
