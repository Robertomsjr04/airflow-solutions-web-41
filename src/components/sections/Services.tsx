
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AirVent, BarChart, Settings, ShieldCheck, Thermometer, Wrench, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedButton from '@/components/ui/animated-button';

const services = [
  {
    title: "Climatização e Refrigeração Industrial",
    description: "Manutenção preventiva e corretiva em sistemas de ar condicionado e refrigeração industrial.",
    icon: AirVent,
    color: "text-blue-500",
    url: "/servicos/climatizacao"
  },
  {
    title: "Projetos, Retrofit e Expansões",
    description: "Retrofit de sistemas HVAC, projetos sob medida e modernização de equipamentos obsoletos.",
    icon: Settings,
    color: "text-purple-500",
    url: "/servicos/projetos"
  },
  {
    title: "Sistemas de Automação",
    description: "Instalação e manutenção de sistemas de automação predial e industrial com monitoramento remoto.",
    icon: Activity,
    color: "text-green-500",
    url: "/servicos/automacao"
  },
  {
    title: "Infraestrutura Complementar",
    description: "Manutenção em sistemas elétricos, geradores, ar comprimido e manejo de gases refrigerantes.",
    icon: Wrench,
    color: "text-amber-500",
    url: "/servicos/infraestrutura"
  },
  {
    title: "Dutos e Tratamento de Ar",
    description: "Projeto e instalação de dutos, sistemas de filtragem e monitoramento da qualidade do ar.",
    icon: Thermometer,
    color: "text-red-500",
    url: "/servicos/dutos"
  },
  {
    title: "PMOC",
    description: "Implementação e gestão do Plano de Manutenção, Operação e Controle seguindo requisitos regulatórios.",
    icon: ShieldCheck,
    color: "text-indigo-500",
    url: "/servicos/pmoc"
  }
];

const Services = () => {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <section id="services" className="py-20 bg-airflow-gray">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Nossos Serviços</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal">
            Serviços abrangentes de refrigeração industrial e comercial para manter suas instalações funcionando com desempenho máximo.
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`${service.color} mb-4`}>
                    <service.icon size={32} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-700">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="text-airflow-blue hover:bg-airflow-blue hover:text-white border-airflow-blue"
                    onClick={() => handleNavigate(service.url)}
                  >
                    Saiba Mais
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <AnimatedButton 
            onClick={scrollToContact}
            className="text-sm py-3 px-5"
          >
            Solicite um Orçamento de Serviço
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Services;
