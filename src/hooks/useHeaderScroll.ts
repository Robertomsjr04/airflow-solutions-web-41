
import { useState, useEffect } from 'react';

export const useHeaderScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Check if we're in the hero section
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // Consider we're in hero if at least part of it is still visible
        setIsInHeroSection(heroBottom > 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return { isScrolled, isInHeroSection };
};
