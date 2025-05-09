import React from 'react';
import { Building, Hospital, Building2, ShoppingCart } from 'lucide-react';

const sectors = [
  {
    title: "Indústria Alimentícia",
    description: "Soluções de refrigeração específicas para ambientes com rigoroso controle sanitário, em conformidade com as BPF e HACCP.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Farmacêutico",
    description: "Sistemas AVAC para laboratórios e áreas controladas, garantindo conformidade com normas ANVISA e ISO 14644.",
    icon: Hospital,
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Data Centers",
    description: "Climatização de precisão para data centers e ambientes de TI críticos, seguindo os padrões TIA-942 para máxima disponibilidade.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Varejo",
    description: "Soluções completas para lojas, supermercados e shoppings, combinando conforto térmico e eficiência energética.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white reveal">Setores Atendidos</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto reveal">
            Nossa experiência de 30 anos permite atender às necessidades específicas de diversos setores, 
            garantindo conformidade com as normas técnicas e regulatórias mais rigorosas. 
            Do controle minucioso de temperatura em ambientes farmacêuticos à eficiência 
            energética em grandes instalações comerciais, desenvolvemos soluções personalizadas 
            que otimizam sua operação.
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
