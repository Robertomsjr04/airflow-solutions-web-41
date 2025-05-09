
import { useState, useEffect, useRef } from 'react';

type SectionType = 'light' | 'dark' | 'blue';

interface SectionConfig {
  id: string;
  type: SectionType;
}

// Configuration mapping section IDs to their background types
const sectionConfigs: SectionConfig[] = [
  { id: 'home', type: 'dark' },  // Hero has a dark overlay
  { id: 'about', type: 'light' }, // About has white background
  { id: 'services', type: 'light' }, // Services has light gray background
  { id: 'sectors', type: 'dark' }, // Sectors has dark blue background
  { id: 'work', type: 'light' }, // Work section has light background
  { id: 'technology', type: 'dark' }, // Technology cloud has dark background
  { id: 'differentials', type: 'dark' }, // Differentials has dark blue bg
  { id: 'testimonials', type: 'light' }, // Testimonials has light gray bg
  { id: 'contact', type: 'light' }, // Contact has white background
];

export const useSectionObserver = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('dark'); // Default to dark (hero section)
  const lastScrollY = useRef<number>(0);
  const isScrollingUp = useRef<boolean>(false);
  const activeSectionId = useRef<string>('home');
  
  useEffect(() => {
    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      isScrollingUp.current = currentScrollY < lastScrollY.current;
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Create observer options with improved configuration
    const options = {
      root: null, // Use viewport as root
      // Adjust rootMargin to better detect sections when scrolling in either direction
      rootMargin: '-40% 0px', // Reduced from -50% to improve detection area
      threshold: [0.1, 0.3, 0.5] // Multiple thresholds for better accuracy
    };

    // Updated observer callback
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          activeSectionId.current = sectionId;
          const section = sectionConfigs.find(s => s.id === sectionId);
          if (section) {
            setActiveSection(section.type);
          }
        }
      });
    };

    // Create observer with improved options
    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Observe all sections
    sectionConfigs.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Fallback mechanism for better detection
    const fallbackCheck = () => {
      if (document.visibilityState !== 'visible') return;

      const viewportHeight = window.innerHeight;
      const viewportCenter = window.scrollY + (viewportHeight / 2);

      let closestSection: SectionConfig | null = null;
      let closestDistance = Infinity;

      sectionConfigs.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;
          const sectionCenter = sectionTop + (rect.height / 2);
          const distance = Math.abs(viewportCenter - sectionCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      });

      if (closestSection && closestSection.id !== activeSectionId.current) {
        activeSectionId.current = closestSection.id;
        setActiveSection(closestSection.type);
      }
    };

    // Run fallback check periodically and on scroll events
    const fallbackInterval = setInterval(fallbackCheck, 300);
    const debouncedFallback = debounce(fallbackCheck, 100);
    window.addEventListener('scroll', debouncedFallback, { passive: true });

    // Utility function for debounce
    function debounce(func: Function, wait: number) {
      let timeout: number | null = null;
      return function() {
        if (timeout) window.clearTimeout(timeout);
        timeout = window.setTimeout(func, wait);
      };
    }

    return () => {
      // Cleanup
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', debouncedFallback);
      clearInterval(fallbackInterval);
    };
  }, []);

  return activeSection;
};
