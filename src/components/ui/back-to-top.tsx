import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  if (!isVisible) {
    return null;
  }
  return <button onClick={scrollToTop} className="back-to-top z-40" aria-label="Back to top">
      <div className="text">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
      </div>
      <div className="clone">
        <span>Volte </span>
        <span>ao</span>
        <span>topo</span>
      </div>
      <ArrowUp className="h-6 w-6" />
    </button>;
};
export default BackToTop;