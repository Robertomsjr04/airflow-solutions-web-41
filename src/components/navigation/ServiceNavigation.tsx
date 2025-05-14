
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ServiceType = {
  name: string;
  path: string;
};

// Define all services and their paths
const services: ServiceType[] = [
  { name: 'Climatização e Refrigeração Industrial', path: '/servicos/climatizacao' },
  { name: 'Projetos, Retrofit e Expansões', path: '/servicos/projetos' },
  { name: 'Sistemas de Automação', path: '/servicos/automacao' },
  { name: 'Infraestrutura Complementar', path: '/servicos/infraestrutura' },
  { name: 'Dutos e Tratamento de Ar', path: '/servicos/dutos' },
  { name: 'PMOC', path: '/servicos/pmoc' },
];

interface ServiceNavigationProps {
  className?: string;
}

const ServiceNavigation: React.FC<ServiceNavigationProps> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Find current service index
  const currentIndex = services.findIndex(service => service.path === currentPath);
  
  // Calculate previous and next service
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;
  
  // Navigate to services section on home page
  const goToServicesSection = () => {
    navigate('/');
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className={`py-8 ${className}`}>
      <div className="container">
        <h3 className="text-xl font-medium text-center mb-4">Navegação entre Serviços</h3>
        
        <div className="flex justify-center mb-4">
          <Button 
            variant="secondary" 
            onClick={goToServicesSection}
            className="w-full md:w-auto max-w-xs mx-auto"
          >
            Ver Todos os Serviços
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex gap-2">
            {prevService && (
              <Button 
                variant="outline" 
                onClick={() => navigate(prevService.path)}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{prevService.name}</span>
                <span className="sm:hidden">Anterior</span>
              </Button>
            )}
            {nextService && (
              <Button 
                variant="outline" 
                onClick={() => navigate(nextService.path)}
                className="flex items-center gap-2"
              >
                <span className="hidden sm:inline">{nextService.name}</span>
                <span className="sm:hidden">Próximo</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceNavigation;
