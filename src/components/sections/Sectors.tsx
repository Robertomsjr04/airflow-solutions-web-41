
import React from 'react';
import { Building, Hospital, Building2, ShoppingCart } from 'lucide-react';

const sectors = [
  {
    title: "Indústrias",
    description: "Soluções de refrigeração personalizadas para fábricas, instalações de processamento de alimentos e complexos industriais.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Hospitais",
    description: "Sistemas AVAC especializados para instalações de saúde, garantindo qualidade do ar, controle de temperatura e conformidade regulatória.",
    icon: Hospital,
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Centros Comerciais",
    description: "Soluções abrangentes de refrigeração e AVAC para centros comerciais, garantindo conforto para lojistas e visitantes.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1519567770579-c2fc5208683f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Edifícios Corporativos",
    description: "Soluções de ar condicionado energeticamente eficientes para edifícios de escritórios e sedes corporativas.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  }
];

const Sectors = () => {
  // Create an array of small star elements for the background
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 3;
      
      stars.push(
        <div 
          key={i}
          className="absolute rounded-full bg-white opacity-50"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `${top}%`,
            animation: `float ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <section id="sectors" className="py-20 dark-blue-bg relative">
      {/* Stars in the background */}
      {renderStars()}
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white reveal">Excelência em Soluções AVAC</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto reveal">
            AVAC, sigla para Aquecimento, Ventilação e Ar Condicionado, abrange todo o universo de tecnologias 
            voltadas à climatização de ambientes. Com mais de três décadas de experiência, a Air Flow 
            se especializa em sistemas completos incluindo chillers, VRF/VRV, self-contained, 
            torres de arrefecimento e sistemas de exaustão. Nosso compromisso é garantir conforto térmico, 
            qualidade do ar e eficiência energética para os mais diversos setores, desde hospitais até 
            complexos industriais, sempre com soluções personalizadas e inovadoras.
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="reveal floating-element" style={{ 
              animationDelay: `${index * 0.2}s`,
              animationDuration: `${6 + index * 0.5}s` 
            }}>
              <div className="dark-blue-card rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                <div 
                  className="h-48 relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(30, 77, 140, 0.7), rgba(30, 77, 140, 0.7)), url(${sector.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="flex justify-center mb-3">
                        <sector.icon size={48} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{sector.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-200">{sector.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
