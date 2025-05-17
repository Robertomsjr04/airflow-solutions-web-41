
import React from 'react';
import { useLocation } from 'react-router-dom';
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
import { services } from '@/data/servicesData';

interface DesktopNavigationProps {
  currentPath: string;
  menuTextClass: string;
  goToHome: () => void;
  scrollToSection: (id: string) => void;
  navigateToService: (path: string) => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  currentPath,
  menuTextClass,
  goToHome,
  scrollToSection,
  navigateToService
}) => {
  // Custom style for home button that doesn't apply the persistent shadow
  const homeButtonClass = cn(
    navigationMenuTriggerStyle(), 
    menuTextClass, 
    "border-none",
    // Remove persistent shadow but still highlight the active state
    currentPath === '/' ? "bg-transparent hover:bg-accent" : ""
  );

  return (
    <nav className="hidden md:flex space-x-2 items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink 
              onClick={goToHome} 
              className={homeButtonClass}
            >
              Início
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink 
              onClick={() => scrollToSection('about')} 
              className={cn(navigationMenuTriggerStyle(), menuTextClass, "border-none")}
            >
              Sobre
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className={cn(menuTextClass, "border-none")}>
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
              className={cn(navigationMenuTriggerStyle(), menuTextClass, "border-none")}
            >
              Setores
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink 
              onClick={() => scrollToSection('differentials')} 
              className={cn(navigationMenuTriggerStyle(), menuTextClass, "border-none")}
            >
              Diferenciais
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink 
              onClick={() => scrollToSection('testimonials')} 
              className={cn(navigationMenuTriggerStyle(), menuTextClass, "border-none")}
            >
              Depoimentos
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink 
              onClick={() => scrollToSection('contact')} 
              className={cn(navigationMenuTriggerStyle(), menuTextClass, "border-none")}
            >
              Contato
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <button onClick={() => scrollToSection('contact')} className="emergency-button" aria-label="Solicitar atendimento de emergência 24 horas">
        <span>atendimento em emergencia 24h</span>
      </button>
    </nav>
  );
};

export default DesktopNavigation;
