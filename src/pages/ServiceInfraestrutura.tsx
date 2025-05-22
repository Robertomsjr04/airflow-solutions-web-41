
import React, { useRef, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/sections/ServiceDetail';
import Contact from '@/components/sections/Contact';
import { setupScrollAnimation } from '@/utils/scrollAnimation';
import { SectionDivider } from '@/components/ui/section-divider';
import ServiceNavigation from '@/components/navigation/ServiceNavigation';

const infraestruturaFeatures = [
  {
    title: "Sistemas Elétricos Industriais",
    description: "Manutenção preventiva e corretiva completa em sistemas elétricos industriais relacionados a equipamentos HVAC."
  },
  {
    title: "Grupos Geradores",
    description: "Serviços de manutenção corretiva, preventiva e operacional para grupos geradores que alimentam sistemas críticos."
  },
  {
    title: "Ar Comprimido",
    description: "Manutenção especializada de compressores e sistemas de distribuição de ar comprimido para aplicações industriais."
  },
  {
    title: "Gestão de Gases Refrigerantes",
    description: "Recuperação, reciclagem e descarte ecológico de gases refrigerantes em conformidade com normas ambientais."
  },
  {
    title: "Adequação Normativa",
    description: "Adequação de instalações às normas técnicas e ambientais vigentes, garantindo conformidade legal e operacional."
  }
];

const ServiceInfraestrutura = () => {
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
              Infraestrutura Complementar
            </h1>
            <p className="text-xl max-w-3xl reveal">
              Serviços integrados de manutenção para sistemas elétricos, geradores, ar comprimido e gases refrigerantes.
            </p>
          </div>
        </div>
        
        <SectionDivider />
        
        <ServiceDetail 
          title="Soluções Completas em Infraestrutura"
          description="Oferecemos serviços especializados de manutenção e gestão para toda a infraestrutura complementar que dá suporte aos sistemas de climatização e refrigeração. Desde a manutenção de sistemas elétricos e geradores até o manejo responsável de gases refrigerantes, nossa equipe garante o funcionamento integrado e eficiente de todos os componentes essenciais."
          image="/lovable-uploads/eecf9cdd-5b27-45e2-a343-96f06026bc11.png"
          features={infraestruturaFeatures}
          contactRef={contactRef}
        />
        
        <SectionDivider />
        
        <ServiceNavigation />
        
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceInfraestrutura;
