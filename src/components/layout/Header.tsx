
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import LogoAirFlow from './LogoAirFlow';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  const isScrolled = useHeaderScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setMobileServicesOpen(false);
    }
  };

  const toggleMobileServices = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileServicesOpen(!mobileServicesOpen);
  };
  
  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Allow time for navigation before trying to scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };
  
  const goToHome = () => {
    navigate('/');
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const navigateToService = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  // Header style configuration
  const headerStyle = {
    background: isScrolled ? 'bg-black' : 'dark-blue-bg',
    text: 'text-white',
    hoverText: 'hover:text-gray-300'
  };

  const menuTextClass = `${headerStyle.text} ${headerStyle.hoverText} font-medium transition-colors cursor-pointer`;
  const mobileMenuButtonClass = `md:hidden ${headerStyle.text} cursor-pointer`;
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-md py-1' : 'dark-blue-bg py-2'}`} role="navigation" aria-label="Menu principal">
      <div className="container flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={goToHome}>
          <LogoAirFlow />
        </div>
        
        {/* Desktop Navigation */}
        <DesktopNavigation 
          currentPath={currentPath}
          menuTextClass={menuTextClass}
          goToHome={goToHome}
          scrollToSection={scrollToSection}
          navigateToService={navigateToService}
        />
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className={mobileMenuButtonClass} 
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNavigation 
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        mobileServicesOpen={mobileServicesOpen}
        toggleMobileServices={toggleMobileServices}
        currentPath={currentPath}
        goToHome={goToHome}
        scrollToSection={scrollToSection}
        navigateToService={navigateToService}
      />
    </header>
  );
};

export default Header;
