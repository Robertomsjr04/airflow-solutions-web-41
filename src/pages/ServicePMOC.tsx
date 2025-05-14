
import React, { useRef, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/sections/ServiceDetail';
import Contact from '@/components/sections/Contact';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { setupScrollAnimation } from '@/utils/scrollAnimation';
import { SectionDivider } from '@/components/ui/section-divider';

const pmocFeatures = [
  {
    title: "Elaboração de Planos Completos",
    description: "Desenvolvimento de PMOC conforme a Portaria 3.523/GM de acordo com as especificações do seu sistema."
  },
  {
    title: "Manutenção Preventiva",
    description: "Calendário estruturado de verificações e ajustes periódicos para prevenir falhas e garantir desempenho."
  },
  {
    title: "Análise Microbiológica",
    description: "Coleta e análise de amostras para verificar a qualidade do ar conforme normas regulatórias."
  },
  {
    title: "Relatórios Técnicos",
    description: "Documentação detalhada de todas as intervenções, atendendo às exigências legais e facilitando auditorias."
  },
  {
    title: "Certificação e Conformidade",
    description: "Garantia de que sua instalação está em conformidade com todas as normas técnicas vigentes."
  }
];

const ServicePMOC = () => {
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
              PMOC - Plano de Manutenção, Operação e Controle
            </h1>
            <p className="text-xl max-w-3xl reveal">
              Mantenha seu sistema de ar condicionado em conformidade com a legislação e garanta a qualidade do ar em seu ambiente.
            </p>
          </div>
        </div>
        
        <SectionDivider />
        
        <ServiceDetail 
          title="PMOC Completo e Certificado"
          description="O PMOC é uma exigência legal estabelecida pelo Ministério da Saúde para garantir a qualidade do ar em ambientes climatizados. Nossa equipe especializada desenvolve e implementa planos personalizados que atendem a todas as normas regulatórias, garantindo a saúde dos ocupantes e o funcionamento eficiente dos equipamentos."
          image="/lovable-uploads/dc8922d2-cef2-4a6b-9073-911c08440e7f.png"
          features={pmocFeatures}
          contactRef={contactRef}
        />
        
        <SectionDivider />
        
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+5511555512345" />
    </div>
  );
};

export default ServicePMOC;
