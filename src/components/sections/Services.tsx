
import React from 'react';
import { AirVent, BarChart, Settings, ShieldCheck, Thermometer, Wrench, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedButton from '@/components/ui/animated-button';
import { HoverEffect } from '@/components/ui/hover-effect';

const services = [{
  title: "Climatização e Refrigeração Industrial",
  description: "Projetos e manutenção em sistemas de ar condicionado e refrigeração industrial com foco em eficiência energética.",
  icon: AirVent,
  color: "text-blue-500",
  url: "/servicos/climatizacao"
}, {
  title: "Projetos, Retrofit e Expansões",
  description: "Modernização de sistemas HVAC, reduções de até 40% em custos operacionais e aumento da vida útil dos equipamentos.",
  icon: Settings,
  color: "text-purple-500",
  url: "/servicos/projetos"
}, {
  title: "Sistemas de Automação",
  description: "Implementação de BMS e sistemas de monitoramento remoto para controle preciso e economia de energia.",
  icon: Activity,
  color: "text-green-500",
  url: "/servicos/automacao"
}, {
  title: "Infraestrutura Complementar",
  description: "Manutenção integrada em sistemas elétricos, geradores e ar comprimido com manejo adequado de gases refrigerantes.",
  icon: Wrench,
  color: "text-amber-500",
  url: "/servicos/infraestrutura"
}, {
  title: "Dutos e Tratamento de Ar",
  description: "Projeto e instalação de dutos, sistemas de filtragem e monitoramento que atendem às normas ANVISA e ISO.",
  icon: Thermometer,
  color: "text-red-500",
  url: "/servicos/dutos"
}, {
  title: "PMOC",
  description: "Plano de Manutenção, Operação e Controle em conformidade com a Portaria 3.523/GM do Ministério da Saúde.",
  icon: ShieldCheck,
  color: "text-indigo-500",
  url: "/servicos/pmoc"
}];

const Services = () => {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const handleNavigate = (url: string) => {
    console.log("Navigating to:", url);
    navigate(url);
  };

  // Transform services array to the format expected by HoverEffect
  const hoverItems = services.map(service => ({
    title: service.title,
    description: service.description,
    link: service.url,
    icon: service.icon,
    color: service.color
  }));
  
  return <section id="services" className="py-20 bg-airflow-gray">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Nossos Serviços</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal">
            Soluções completas e personalizadas em refrigeração industrial e comercial para manter suas instalações funcionando com máxima eficiência e conformidade técnica.
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
        </div>
        
        <div className="reveal">
          <HoverEffect 
            items={hoverItems} 
            onNavigate={handleNavigate}
          />
        </div>
        
        <div className="text-center mt-12 reveal flex justify-center">
          <AnimatedButton onClick={scrollToContact} className="px-5 text-xs text-center py-[12px]">
            Solicite seu Orçamento Agora
          </AnimatedButton>
        </div>
      </div>
    </section>;
};

export default Services;
