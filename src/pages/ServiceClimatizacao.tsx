
import React, { useRef, useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/sections/ServiceDetail';
import Contact from '@/components/sections/Contact';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { setupScrollAnimation } from '@/utils/scrollAnimation';
import PneumaticValve from '@/components/interactive/PneumaticValve';
import SnowEffect from '@/components/interactive/SnowEffect';

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
  const [valveOpenness, setValveOpenness] = useState(0);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);

  const handleValveChange = (openness: number) => {
    setValveOpenness(openness);
    // Update pressure reading element if it exists
    const pressureElement = document.getElementById('pressure-reading');
    if (pressureElement) {
      pressureElement.textContent = (openness * 6).toFixed(1);
    }
  };

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
          image="/lovable-uploads/6a0deb70-05f7-4329-8741-5c61f19af673.png"
          features={climatizacaoFeatures}
          contactRef={contactRef}
        />
        
        <section className="py-16 bg-airflow-gray">
          <div className="container">
            <div className="text-center mb-10 reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Controle de Sistemas</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Experimente como nossa tecnologia permite o controle preciso dos componentes do seu sistema de refrigeração industrial.
              </p>
              <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="reveal max-w-xl mx-auto lg:max-w-none w-full">
                <PneumaticValve onValveChange={handleValveChange} />
                
                <div className="mt-8 bg-white rounded-lg p-5 shadow-md">
                  <h4 className="text-lg font-bold text-airflow-blue mb-3">Eficiência do Sistema</h4>
                  <div className="flex items-center mb-2">
                    <div className="text-sm text-gray-600 w-40">Fluxo de Ar:</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all duration-300" 
                        style={{ width: `${valveOpenness * 100}%` }}
                      ></div>
                    </div>
                    <div className="ml-3 text-sm font-medium">{Math.round(valveOpenness * 100)}%</div>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="text-sm text-gray-600 w-40">Capacidade de Refrigeração:</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full transition-all duration-300" 
                        style={{ width: `${Math.min(valveOpenness * 1.4, 1) * 100}%` }}
                      ></div>
                    </div>
                    <div className="ml-3 text-sm font-medium">
                      {Math.round(Math.min(valveOpenness * 1.4, 1) * 100)}%
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm text-gray-600 w-40">Consumo Energético:</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-500 rounded-full transition-all duration-300" 
                        style={{ width: `${Math.min(20 + valveOpenness * 80, 100)}%` }}
                      ></div>
                    </div>
                    <div className="ml-3 text-sm font-medium">
                      {Math.round(Math.min(20 + valveOpenness * 80, 100))}%
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="reveal-right">
                <div className="bg-gradient-to-b from-[#1a2b3c] to-[#0e1621] rounded-lg shadow-xl overflow-hidden">
                  <SnowEffect />
                </div>
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

export default ServiceClimatizacao;
