
import React from 'react';
import { services } from '@/data/servicesData';

interface MobileNavigationProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  mobileServicesOpen: boolean;
  toggleMobileServices: (e: React.MouseEvent) => void;
  currentPath: string;
  goToHome: () => void;
  scrollToSection: (id: string) => void;
  navigateToService: (path: string) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isScrolled,
  mobileMenuOpen,
  mobileServicesOpen,
  toggleMobileServices,
  currentPath,
  goToHome,
  scrollToSection,
  navigateToService
}) => {
  if (!mobileMenuOpen) return null;
  
  return (
    <div id="mobile-menu" className={`md:hidden ${isScrolled ? 'bg-black' : 'dark-blue-bg'} shadow-lg absolute top-full left-0 w-full py-4`}>
      <ul className="flex flex-col items-center space-y-4 px-6">
        <li>
          <button onClick={goToHome} className="text-white hover:text-gray-300 font-medium transition-colors w-full text-center py-2 cursor-pointer" aria-current={currentPath === '/' ? "page" : undefined}>
            Início
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300 font-medium transition-colors w-full text-center py-2 cursor-pointer">
            Sobre
          </button>
        </li>
        <li className="w-full">
          <button 
            onClick={toggleMobileServices} 
            className="text-white hover:text-gray-300 font-medium transition-colors w-full text-center py-2 cursor-pointer flex items-center justify-center"
          >
            Serviços {mobileServicesOpen ? '▲' : '▼'}
          </button>
          
          {mobileServicesOpen && (
            <div className="mt-2 py-2 bg-gray-900 rounded-md w-full">
              <ul className="flex flex-col space-y-2">
                {services.map((service) => (
                  <li key={service.path} className="w-full">
                    <button
                      onClick={() => navigateToService(service.path)}
                      className="text-sm text-gray-200 hover:text-white w-full text-center py-2 cursor-pointer"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
          <button onClick={() => scrollToSection('contact')} className="btn-12 w-full cursor-pointer" aria-label="Solicitar atendimento de emergência 24 horas">
            <span>atendimento em emergencia 24h</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavigation;
