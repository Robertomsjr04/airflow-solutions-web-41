
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import AnimatedButton from '@/components/ui/animated-button';
import { Button } from '@/components/ui/button';
import LogoAirFlow from './LogoAirFlow';
import { useSectionObserver } from '@/hooks/useSectionObserver';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Services data for navigation
const services = [
  { name: 'Climatização e Refrigeração Industrial', path: '/servicos/climatizacao' },
  { name: 'Projetos, Retrofit e Expansões', path: '/servicos/projetos' },
  { name: 'Sistemas de Automação', path: '/servicos/automacao' },
  { name: 'Infraestrutura Complementar', path: '/servicos/infraestrutura' },
  { name: 'Dutos e Tratamento de Ar', path: '/servicos/dutos' },
  { name: 'PMOC', path: '/servicos/pmoc' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
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

  // Updated headerStyle to use dark-blue-bg class
  const headerStyle = {
    background: 'dark-blue-bg',
    text: 'text-white',
    hoverText: 'hover:text-gray-300'
  };

  const menuTextClass = `${headerStyle.text} ${headerStyle.hoverText} font-medium transition-colors cursor-pointer`;
  const mobileMenuButtonClass = `md:hidden ${headerStyle.text} cursor-pointer`;
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerStyle.background} ${isScrolled ? 'shadow-md py-1' : 'py-2'}`} role="navigation" aria-label="Menu principal">
      <div className="container flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={goToHome}>
          <LogoAirFlow />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2 items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={goToHome} 
                  className={cn(navigationMenuTriggerStyle(), menuTextClass)}
                  active={currentPath === '/'}
                >
                  Início
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => scrollToSection('about')} 
                  className={cn(navigationMenuTriggerStyle(), menuTextClass)}
                >
                  Sobre
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(menuTextClass)}>
                  Serviços
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.path}>
                        <NavigationMenuLink asChild>
                          <a
                            href={service.path}
                            onClick={(e) => {
                              e.preventDefault();
                              navigateToService(service.path);
                            }}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => scrollToSection('sectors')} 
                  className={cn(navigationMenuTriggerStyle(), menuTextClass)}
                >
                  Setores
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => scrollToSection('differentials')} 
                  className={cn(navigationMenuTriggerStyle(), menuTextClass)}
                >
                  Diferenciais
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => scrollToSection('testimonials')} 
                  className={cn(navigationMenuTriggerStyle(), menuTextClass)}
                >
                  Depoimentos
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => scrollToSection('contact')} 
                  className={cn(navigationMenuTriggerStyle(), menuTextClass)}
                >
                  Contato
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <button onClick={() => scrollToSection('contact')} className="btn-12 px-[15px] text-red-50 cursor-pointer" aria-label="Solicitar atendimento de emergência 24 horas">
            <span className="text-sm mx-0 text-center font-extrabold py-0 px-0">atendimento em emergencia 24h</span>
          </button>
        </nav>
        
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
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden dark-blue-bg shadow-lg absolute top-full left-0 w-full py-4">
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
      )}
    </header>
  );
};

export default Header;
