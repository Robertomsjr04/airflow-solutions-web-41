
import React, { useRef, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/sections/ServiceDetail';
import Contact from '@/components/sections/Contact';
import { setupScrollAnimation } from '@/utils/scrollAnimation';
import { SectionDivider } from '@/components/ui/section-divider';
import ServiceNavigation from '@/components/navigation/ServiceNavigation';

const projetosFeatures = [
  {
    title: "Retrofit de Sistemas HVAC",
    description: "Modernização completa de sistemas existentes para melhorar eficiência e reduzir custos operacionais."
  },
  {
    title: "Projetos Sob Medida",
    description: "Desenvolvimento de projetos personalizados de climatização e refrigeração para ambientes industriais e salas limpas."
  },
  {
    title: "Consultoria Técnica",
    description: "Assessoria especializada para ampliação e modernização de sistemas de ar condicionado e refrigeração."
  },
  {
    title: "Substituição de Equipamentos",
    description: "Análise e substituição de equipamentos ineficientes com foco em economia de energia e sustentabilidade."
  },
  {
    title: "Expansão de Sistemas",
    description: "Planejamento e execução de expansões de sistemas HVAC para atender novas demandas operacionais."
  }
];

const ServiceProjetos = () => {
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
              Projetos, Retrofit e Expansões
            </h1>
            <p className="text-xl max-w-3xl reveal">
              Soluções inovadoras para modernização, expansão e otimização dos seus sistemas de climatização e refrigeração.
            </p>
          </div>
        </div>
        
        <SectionDivider />
        
        <ServiceDetail 
          title="Modernização e Eficiência Energética"
          description="Nossa equipe de engenheiros e projetistas desenvolve soluções personalizadas para retrofit, modernização e expansão de sistemas HVAC. Focamos na otimização do desempenho, aumento da eficiência energética e redução de custos operacionais, sempre considerando as necessidades específicas de cada cliente e as melhores práticas do setor."
          image="/lovable-uploads/34e017b1-3228-4c92-a91b-9f802c5c0f34.png"
          features={projetosFeatures}
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

export default ServiceProjetos;
