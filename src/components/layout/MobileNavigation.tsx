import React from 'react';
import { services } from '@/data/servicesData';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/utils/analytics';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

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
  // Track navigation events
  const handleNavClick = (itemName: string) => {
    trackEvent('mobile_navigation', 'click', itemName);
  };

  return (
    <div 
      id="mobile-menu"
      className={`md:hidden ${headerStyle.background} ${isScrolled ? 'shadow-sm' : ''} overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-screen pb-4' : 'max-h-0'
      }`}
      aria-hidden={!mobileMenuOpen}
    >
      <nav className="container flex flex-col space-y-3 py-2">
        <button 
          className={`px-5 py-3.5 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg bg-transparent ${currentPath === '/' ? 'font-bold' : ''}`} 
          onClick={() => {
            goToHome();
            handleNavClick('home');
          }}
        >
          Início
        </button>
        
        <button 
          className={`px-5 py-3.5 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg bg-transparent`} 
          onClick={() => {
            scrollToSection('about');
            handleNavClick('about');
          }}
        >
          Sobre
        </button>
        
        <div className="relative">
          <button 
            className={`px-5 py-3.5 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg flex justify-between items-center bg-transparent`} 
            onClick={toggleMobileServices}
            aria-expanded={mobileServicesOpen}
            aria-controls="mobile-services"
          >
            <span>Serviços</span>
            <svg 
              className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'transform rotate-180' : ''}`} 
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
                  className={`px-5 py-3 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full bg-transparent`}
                  onClick={() => {
                    navigateToService(service.path);
                    handleNavClick(`service_${service.name}`);
                  }}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <button 
          className={`px-5 py-3.5 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg bg-transparent`} 
          onClick={() => {
            scrollToSection('sectors');
            handleNavClick('sectors');
          }}
        >
          Setores
        </button>
        
        <button 
          className={`px-5 py-3.5 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg bg-transparent`} 
          onClick={() => {
            scrollToSection('differentials');
            handleNavClick('differentials');
          }}
        >
          Diferenciais
        </button>
        
        <button 
          className={`px-5 py-3.5 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg bg-transparent`} 
          onClick={() => {
            scrollToSection('testimonials');
            handleNavClick('testimonials');
          }}
        >
          Depoimentos
        </button>
        
        <button 
          className={`px-5 py-3.5 ${headerStyle.text} ${headerStyle.hoverText} text-left font-medium transition-colors w-full text-lg bg-transparent`} 
          onClick={() => {
            scrollToSection('contact');
            handleNavClick('contact');
          }}
        >
          Contato
        </button>
        
        <WhatsAppButton 
          phoneNumber="5561999124752" 
          message="Olá! Preciso de um atendimento de emergência."
          className="mt-2 py-3.5" 
          aria-label="Solicitar atendimento de emergência 24 horas"
        >
          <span>EM EMERGÊNCIA</span>
        </WhatsAppButton>
      </nav>
    </div>
  );
};

export default MobileNavigation;
