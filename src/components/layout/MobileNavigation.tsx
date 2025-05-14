
import React from 'react';
import { useLocation } from 'react-router-dom';
import { services } from '@/data/servicesData';
import { cn } from '@/lib/utils';

interface MobileNavigationProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  mobileServicesOpen: boolean;
  toggleMobileServices: (e: React.MouseEvent) => void;
  currentPath: string;
  goToHome: () => void;
  scrollToSection: (id: string) => void;
  navigateToService: (path: string) => void;
  headerStyle: {
    background: string;
    text: string;
    hoverText: string;
    shadow?: string;
  };
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isScrolled,
  mobileMenuOpen,
  mobileServicesOpen,
  toggleMobileServices,
  currentPath,
  goToHome,
  scrollToSection,
  navigateToService,
  headerStyle
}) => {
  return (
    <div 
      id="mobile-menu"
      className={`md:hidden ${headerStyle.background} ${isScrolled ? 'shadow-sm' : ''} overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-screen pb-4' : 'max-h-0'
      }`}
      aria-hidden={!mobileMenuOpen}
    >
      <nav className="container flex flex-col space-y-2">
        <button className={`px-4 py-3 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg ${currentPath === '/' ? 'font-bold' : ''}`} onClick={goToHome}>
          Início
        </button>
        
        <button className={`px-4 py-3 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg`} onClick={() => scrollToSection('about')}>
          Sobre
        </button>
        
        <div className="relative">
          <button 
            className={`px-4 py-3 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg flex justify-between items-center`} 
            onClick={toggleMobileServices}
            aria-expanded={mobileServicesOpen}
            aria-controls="mobile-services"
          >
            <span>Serviços</span>
            <svg 
              className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'transform rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div
            id="mobile-services"
            className={`overflow-hidden transition-all duration-300 ${
              mobileServicesOpen ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col ml-6">
              {services.map((service) => (
                <button
                  key={service.path}
                  className={`px-4 py-2 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full`}
                  onClick={() => navigateToService(service.path)}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <button className={`px-4 py-3 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg`} onClick={() => scrollToSection('sectors')}>
          Setores
        </button>
        
        <button className={`px-4 py-3 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg`} onClick={() => scrollToSection('differentials')}>
          Diferenciais
        </button>
        
        <button className={`px-4 py-3 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg`} onClick={() => scrollToSection('testimonials')}>
          Depoimentos
        </button>
        
        <button className={`px-4 py-3 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg`} onClick={() => scrollToSection('contact')}>
          Contato
        </button>
        
        <button onClick={() => scrollToSection('contact')} className="btn-12 mx-4 mt-4 px-[15px] text-red-50 cursor-pointer" aria-label="Solicitar atendimento de emergência 24 horas">
          <span className="text-sm mx-0 text-center font-extrabold py-0 px-0">atendimento em emergencia 24h</span>
        </button>
      </nav>
    </div>
  );
};

export default MobileNavigation;
