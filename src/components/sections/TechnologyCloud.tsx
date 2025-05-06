
import React from 'react';
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const TechnologyCloud = () => {
  // List of technology and brand icons relevant to HVAC/refrigeration
  const techIcons = [
    "arduino", "samsung", "carrier", "trane", "yorkac", "daikin", "mitsubishi", 
    "siemens", "schneiderelectric", "emerson", "honeywell", "danfoss", "copeland",
    "abb", "hitachi", "lg", "bosch", "fujitsu", "panasonic", "automation",
    "raspberrypi", "modbus"
  ];

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
        
        <div className="reveal mt-6" style={{height: "300px"}}>
          <IconCloud iconSlugs={techIcons} />
        </div>
      </div>
    </section>
  );
};

export default TechnologyCloud;
