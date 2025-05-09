
import { useState, useEffect } from 'react';

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
  
  useEffect(() => {
    // Create observer options with threshold to determine when section is considered visible
    const options = {
      root: null, // Use viewport as root
      rootMargin: '-50% 0px', // Consider element visible when it's in the middle of the viewport
      threshold: 0.1 // Trigger when 10% of the target is visible
    };

    // Observer callback
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const section = sectionConfigs.find(s => s.id === sectionId);
          if (section) {
            setActiveSection(section.type);
          }
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Observe all sections
    sectionConfigs.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Cleanup
      observer.disconnect();
    };
  }, []);

  return activeSection;
};
