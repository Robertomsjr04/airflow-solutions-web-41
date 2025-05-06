
import React, { useRef, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/sections/ServiceDetail';
import Contact from '@/components/sections/Contact';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { setupScrollAnimation } from '@/utils/scrollAnimation';
import AlarmPanel from '@/components/interactive/AlarmPanel';
import EnergyDashboard from '@/components/interactive/EnergyDashboard';

const automacaoFeatures = [
  {
    title: "Sistemas de Automação Predial",
    description: "Instalação e manutenção de sistemas de automação predial e industrial de marcas líderes como Johnson Controls e Microblau."
  },
  {
    title: "Supervisão Remota",
    description: "Monitoramento remoto em tempo real de temperatura, pressão, umidade e qualidade do ar para controle preciso das instalações."
  },
  {
    title: "Sistemas Inteligentes",
    description: "Implementação de sistemas inteligentes para otimização de consumo de energia e performance operacional contínua."
  },
  {
    title: "Controle de Contaminantes",
    description: "Soluções de monitoramento ambiental e controle de contaminantes específicas para indústrias farmacêuticas e áreas críticas."
  },
  {
    title: "Integração de Sistemas",
    description: "Integração de diferentes sistemas de controle para operação centralizada e eficiente de toda a infraestrutura."
  }
];

const ServiceAutomacao = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="pt-20 bg-airflow-blue text-white">
          <div className="container py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">
              Sistemas de Automação e Monitoramento
            </h1>
            <p className="text-xl max-w-3xl reveal">
              Soluções inteligentes de automação e monitoramento para otimizar a eficiência e o controle dos seus sistemas HVAC.
            </p>
          </div>
        </div>
        
        <ServiceDetail 
          title="Automação de Alta Performance"
          description="Desenvolvemos e implementamos sistemas avançados de automação e monitoramento que permitem o controle preciso e eficiente de toda a infraestrutura de climatização e refrigeração. Nossas soluções integradas possibilitam supervisão remota, otimização de consumo energético e manutenção preditiva, garantindo máxima performance operacional."
          image="/lovable-uploads/8d0fd4ff-2181-4b92-a4c9-1c87d7900645.png"
          features={automacaoFeatures}
          contactRef={contactRef}
        />
        
        <section className="py-16 bg-airflow-gray">
          <div className="container">
            <div className="text-center mb-10 reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Monitoramento Inteligente</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Nossas soluções proporcionam monitoramento em tempo real e alertas inteligentes para garantir a operação segura e eficiente do seu sistema.
              </p>
              <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="reveal">
                <AlarmPanel />
              </div>
              <div className="reveal-right">
                <EnergyDashboard />
              </div>
            </div>
          </div>
        </section>
        
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+5511555512345" />
    </div>
  );
};

export default ServiceAutomacao;
