
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AirVent, BarChart, Settings, ShieldCheck, Thermometer, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "PMOC",
    description: "Implementação e gestão do Plano de Manutenção, Operação e Controle seguindo todos os requisitos regulatórios.",
    icon: ShieldCheck,
    color: "text-green-500",
    url: "/servicos/pmoc"
  },
  {
    title: "Projeto e Instalação de AVAC",
    description: "Projeto completo e instalação profissional de sistemas AVAC para todos os tipos de instalações.",
    icon: AirVent,
    color: "text-blue-500",
    url: "/servicos/avac"
  },
  {
    title: "Retrofit de Sistema",
    description: "Modernização de sistemas de refrigeração obsoletos para melhorar a eficiência e reduzir custos operacionais.",
    icon: Settings,
    color: "text-purple-500",
    url: "/servicos/retrofit"
  },
  {
    title: "Limpeza de Dutos e Trocadores de Calor",
    description: "Serviços profissionais de limpeza para garantir fluxo de ar ideal e desempenho do sistema.",
    icon: Thermometer,
    color: "text-red-500",
    url: "/servicos/limpeza"
  },
  {
    title: "Consultoria Técnica",
    description: "Consultoria especializada em otimização de sistemas, conformidade regulatória e eficiência energética.",
    icon: BarChart,
    color: "text-amber-500",
    url: "/servicos/consultoria"
  },
  {
    title: "Manutenção Mecânica",
    description: "Serviços abrangentes de manutenção para todos os componentes mecânicos de sistemas AVAC.",
    icon: Wrench,
    color: "text-indigo-500",
    url: "/servicos/manutencao"
  }
];

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
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
                  {service.url === "/servicos/pmoc" ? (
                    <Button 
                      variant="outline" 
                      className="text-airflow-blue hover:bg-airflow-blue hover:text-white border-airflow-blue"
                      asChild
                    >
                      <Link to={service.url}>Saiba Mais</Link>
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="text-airflow-blue hover:bg-airflow-blue hover:text-white border-airflow-blue"
                      onClick={scrollToContact}
                    >
                      Saiba Mais
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-airflow-blue hover:bg-airflow-lightBlue text-white"
          >
            Solicite um Orçamento de Serviço
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
