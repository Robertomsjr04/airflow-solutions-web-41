
import React, { useRef, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/sections/ServiceDetail';
import Contact from '@/components/sections/Contact';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { setupScrollAnimation } from '@/utils/scrollAnimation';

const climatizacaoFeatures = [
  {
    title: "Manutenção Preventiva e Corretiva",
    description: "Serviços completos para Chillers, Self Contained, VRV, VRF, Fan-Coils e Fancoletes."
  },
  {
    title: "Revisão Geral de Compressores",
    description: "Overhaul especializado para compressores parafuso e alternativos, garantindo maior vida útil."
  },
  {
    title: "Recuperação de Equipamentos",
    description: "Instalação e recuperação de equipamentos de refrigeração, inclusive compressores semi-herméticos, parafuso e centrífugos."
  },
  {
    title: "Sistemas de Exaustão e Ventilação",
    description: "Instalação e manutenção de sistemas de exaustão e ventilação para ambientes industriais."
  },
  {
    title: "Isolamento Térmico",
    description: "Aplicação profissional de isolamento térmico em dutos e tubulações para maior eficiência."
  },
  {
    title: "Torres de Arrefecimento e Bombas",
    description: "Instalação, manutenção e reparo de torres de arrefecimento, bombas e sistemas de vapor."
  }
];

const ServiceClimatizacao = () => {
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
              Climatização e Refrigeração Industrial
            </h1>
            <p className="text-xl max-w-3xl reveal">
              Soluções completas em climatização e refrigeração industrial para garantir o funcionamento eficiente e confiável dos seus sistemas HVAC.
            </p>
          </div>
        </div>
        
        <ServiceDetail 
          title="Especialistas em Sistemas HVAC Industriais"
          description="Nossa equipe especializada oferece serviços abrangentes de climatização e refrigeração industrial, desde manutenção preventiva e corretiva até recuperação de equipamentos e instalação de sistemas completos. Trabalhamos com uma ampla gama de equipamentos, incluindo chillers, sistemas VRV/VRF, fan-coils e muito mais, garantindo o funcionamento eficiente e prolongando a vida útil dos seus sistemas."
          image="/lovable-uploads/6166a219-1b89-434b-a5b0-4b4944745dba.png"
          features={climatizacaoFeatures}
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

export default ServiceClimatizacao;
