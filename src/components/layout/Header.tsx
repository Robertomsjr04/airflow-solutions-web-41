import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import AnimatedButton from '@/components/ui/animated-button';
import { Button } from '@/components/ui/button';
import LogoAirFlow from './LogoAirFlow';
import { useSectionObserver } from '@/hooks/useSectionObserver';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
  };
  
  const goToHome = () => {
    navigate('/');
    setMobileMenuOpen(false);
  };

  // Modified headerStyle to always use black background
  const headerStyle = {
    background: 'bg-black',
    text: 'text-white',
    hoverText: 'hover:text-gray-300'
  };

  const menuTextClass = `${headerStyle.text} ${headerStyle.hoverText} font-medium transition-colors cursor-pointer`;
  const mobileMenuButtonClass = `md:hidden ${headerStyle.text} cursor-pointer`;
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerStyle.background} ${isScrolled ? 'shadow-md py-1' : 'py-2'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={goToHome}>
          <LogoAirFlow />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-6">
            <li>
              <button onClick={goToHome} className={menuTextClass}>
                Início
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className={menuTextClass}>
                Sobre
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className={menuTextClass}>
                Serviços
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('sectors')} className={menuTextClass}>
                Setores
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('differentials')} className={menuTextClass}>
                Diferenciais
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('testimonials')} className={menuTextClass}>
                Depoimentos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className={menuTextClass}>
                Contato
              </button>
            </li>
          </ul>
          <button onClick={() => scrollToSection('contact')} className="btn-12 px-[15px] text-red-50 cursor-pointer">
            <span className="text-sm mx-0 text-center font-extrabold py-0 px-0">atendimento em emergencia 24h</span>
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className={mobileMenuButtonClass} onClick={toggleMobileMenu}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black shadow-lg absolute top-full left-0 w-full py-4">
          <ul className="flex flex-col items-center space-y-4 px-6">
            <li>
              <button onClick={goToHome} className="text-white hover:text-gray-300 font-medium transition-colors w-full text-center py-2 cursor-pointer">
                Início
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300 font-medium transition-colors w-full text-center py-2 cursor-pointer">
                Sobre
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-gray-300 font-medium transition-colors w-full text-center py-2 cursor-pointer">
                Serviços
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('sectors')} className="text-white hover:text-gray-300 font-medium transition-colors w-full text-center py-2 cursor-pointer">
                Setores
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('differentials')} className="text-white hover:text-gray-300 font-medium transition-colors w-full text-center py-2 cursor-pointer">
                Diferenciais
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-gray-300 font-medium transition-colors w-full text-center py-2 cursor-pointer">
                Depoimentos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-gray-300 font-medium transition-colors w-full text-center py-2 cursor-pointer">
                Contato
              </button>
            </li>
            <li className="pt-2">
              <button onClick={() => scrollToSection('contact')} className="btn-12 w-full cursor-pointer">
                <span>atendimento em emergencia 24h</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
