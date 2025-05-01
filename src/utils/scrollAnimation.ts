
export const setupScrollAnimation = () => {
  const revealElements = document.querySelectorAll('.reveal, .reveal-right');
  
  const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const element = revealElements[i];
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    }
  };
  
  window.addEventListener('scroll', revealOnScroll);
  
  // Initial check on page load
  setTimeout(revealOnScroll, 300);
  
  return () => {
    window.removeEventListener('scroll', revealOnScroll);
  };
};
