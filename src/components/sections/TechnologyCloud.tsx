
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// List of technology names relevant to HVAC/refrigeration
const techNames = [
  "Arduino", "Samsung", "Carrier", "Trane", "York", "Daikin", "Mitsubishi", 
  "Siemens", "Schneider Electric", "Emerson", "Honeywell", "Danfoss", "Copeland",
  "ABB", "Hitachi", "LG", "Bosch", "Fujitsu", "Panasonic", "Automação",
  "Raspberry Pi", "Modbus", "HVAC", "IoT", "BMS", "Smart Control"
];

const TechnologyCloud = () => {
  return (
    <section className="py-14 bg-white">
      <div className="container">
        <div className="text-center mb-8 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologias Parceiras</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Trabalhamos com as principais tecnologias e marcas do mercado para garantir qualidade e confiabilidade em nossos serviços.
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
        </div>
        
        <div className="reveal mt-6">
          <Card className="p-6 border-0 shadow-md bg-gradient-to-br from-blue-50 to-white">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
              {techNames.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant={index % 3 === 0 ? "default" : (index % 3 === 1 ? "secondary" : "outline")}
                  className={`text-sm md:text-base py-1.5 px-3 animate-fade-in cursor-pointer hover:scale-110 transition-transform duration-200 ${
                    index % 5 === 0 ? "bg-airflow-blue" : 
                    index % 5 === 1 ? "bg-blue-500" : 
                    index % 5 === 2 ? "bg-sky-500" :
                    index % 5 === 3 ? "bg-cyan-600" : "bg-indigo-600"
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    fontSize: `${Math.max(0.8, Math.min(1.2, 0.9 + Math.random() * 0.4))}rem` 
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnologyCloud;
