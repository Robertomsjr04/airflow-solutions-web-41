
import React, { useState, useEffect } from 'react';
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
  const activeSectionType = useSectionObserver();
  
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

  // Determine header style based on section type and scroll state
  const getHeaderStyle = () => {
    // Always use solid background when scrolled
    if (isScrolled) {
      return {
        background: 'bg-white shadow-md',
        text: 'text-airflow-blue',
        hoverText: 'hover:text-airflow-lightBlue'
      };
    }
    
    // When at top, use styles based on current section
    switch (activeSectionType) {
      case 'dark':
        return {
          background: 'bg-transparent',
          text: 'text-zinc-50',
          hoverText: 'hover:text-airflow-lightBlue'
        };
      case 'blue':
        return {
          background: 'bg-transparent',
          text: 'text-zinc-50',
          hoverText: 'hover:text-white'
        };
      case 'light':
      default:
        return {
          background: 'bg-transparent',
          text: 'text-airflow-blue',
          hoverText: 'hover:text-airflow-lightBlue'
        };
    }
  };

  const headerStyle = getHeaderStyle();
  const menuTextClass = `${headerStyle.text} ${headerStyle.hoverText} font-medium transition-colors`;
  const mobileMenuButtonClass = `md:hidden ${headerStyle.text}`;
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : `${headerStyle.background} py-4`}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
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
          <button onClick={() => scrollToSection('contact')} className="btn-12 px-[15px] text-red-50">
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
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4">
          <ul className="flex flex-col space-y-4 px-6">
            <li>
              <button onClick={goToHome} className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2">
                Início
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2">
                Sobre
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')} className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2">
                Serviços
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('sectors')} className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2">
                Setores
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('differentials')} className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2">
                Diferenciais
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('testimonials')} className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2">
                Depoimentos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="text-airflow-blue hover:text-airflow-lightBlue font-medium transition-colors w-full text-left py-2">
                Contato
              </button>
            </li>
            <li className="pt-2">
              <button onClick={() => scrollToSection('contact')} className="btn-12 w-full">
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
