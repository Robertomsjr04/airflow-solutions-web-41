
import React, { useRef, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/sections/ServiceDetail';
import Contact from '@/components/sections/Contact';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { setupScrollAnimation } from '@/utils/scrollAnimation';

const dutosFeatures = [
  {
    title: "Fabricação e Instalação de Dutos",
    description: "Projeto, fabricação e instalação de dutos de ar em chapas galvanizadas, inox ou poliuretano para diversas aplicações."
  },
  {
    title: "Sistemas de Filtragem",
    description: "Implementação de sistemas avançados de filtragem e tratamento de ar para ambientes controlados conforme normas ANVISA e ISO."
  },
  {
    title: "Qualidade do Ar Interior",
    description: "Monitoramento da qualidade do ar com microcâmeras e sensores de última geração para garantir ambientes saudáveis."
  },
  {
    title: "Adequação de Ambientes Controlados",
    description: "Soluções para laboratórios, indústrias farmacêuticas e outras instalações que exigem controle rigoroso da qualidade do ar."
  },
  {
    title: "Manutenção de Sistemas de Filtragem",
    description: "Serviços regulares de inspeção, limpeza e substituição de filtros para manter a eficiência dos sistemas de tratamento de ar."
  }
];

const ServiceDutos = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
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
              Dutos e Tratamento de Ar
            </h1>
            <p className="text-xl max-w-3xl reveal">
              Soluções completas para distribuição, filtragem e monitoramento da qualidade do ar em ambientes industriais e controlados.
            </p>
          </div>
        </div>
        
        <ServiceDetail 
          title="Excelência em Tratamento de Ar"
          description="Projetamos, fabricamos e instalamos sistemas completos de dutos e tratamento de ar que garantem a qualidade do ar interior e a eficiência da distribuição do ar tratado. Utilizando tecnologias avançadas de monitoramento e filtragem, asseguramos ambientes controlados que atendem às mais rigorosas normas técnicas e regulatórias para indústrias e instalações críticas."
          image="/lovable-uploads/668243b6-4b97-47b0-90f4-1d76fbce5779.png"
          features={dutosFeatures}
          contactRef={contactRef}
        />
        
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+5511555512345" />
    </div>
  );
};

export default ServiceDutos;
