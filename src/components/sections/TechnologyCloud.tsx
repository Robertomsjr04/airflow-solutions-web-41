
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// List of technology names relevant to HVAC/refrigeration
const techNames = [
  "Sistemas VRF/VRV", "Toshiba", "Daikin", "Chillers", "Carrier", "Trane", 
  "Automação Predial", "Johnson Controls", "Siemens", "BMS", "NR-15", "ISO 9001",
  "PBQP-H", "ABRAVA", "BPF", "HACCP", "ANVISA", "ISO 14644", "TIA-942", 
  "Eficiência Energética", "IoT", "Monitoramento Remoto", "Retrofit", "VRF"
];

const TechnologyCloud = () => {
  return (
    <section className="py-14 bg-white">
      <div className="container">
        <div className="text-center mb-8 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologias Aplicadas</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Implementamos as melhores tecnologias do mercado, garantindo eficiência, confiabilidade e conformidade técnica em todos os projetos.
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="reveal">
            <Card className="p-6 h-full border-0 shadow-md bg-gradient-to-br from-blue-50 to-white">
              <h3 className="text-xl font-bold text-airflow-blue mb-4">Sistemas VRF/VRV</h3>
              <p className="mb-4 text-gray-700">Implementação de sistemas de fluxo de refrigerante variável das melhores marcas, oferecendo controle preciso de temperatura e significativa economia de energia.</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-airflow-blue">Toshiba</Badge>
                <Badge className="bg-blue-500">Daikin</Badge>
                <Badge className="bg-sky-500">Hitachi</Badge>
                <Badge className="bg-indigo-600">Mitsubishi</Badge>
              </div>
            </Card>
          </div>
          
          <div className="reveal">
            <Card className="p-6 h-full border-0 shadow-md bg-gradient-to-br from-blue-50 to-white">
              <h3 className="text-xl font-bold text-airflow-blue mb-4">Chillers de Alta Eficiência</h3>
              <p className="mb-4 text-gray-700">Equipamentos de última geração para resfriamento de água em aplicações de grande porte, com tecnologias que minimizam o consumo energético.</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-airflow-blue">Carrier</Badge>
                <Badge className="bg-blue-500">Trane</Badge>
                <Badge className="bg-sky-500">York</Badge>
                <Badge className="bg-indigo-600">Daikin</Badge>
              </div>
            </Card>
          </div>
          
          <div className="reveal">
            <Card className="p-6 h-full border-0 shadow-md bg-gradient-to-br from-blue-50 to-white">
              <h3 className="text-xl font-bold text-airflow-blue mb-4">Automação Predial</h3>
              <p className="mb-4 text-gray-700">Sistemas integrados de gerenciamento para monitoramento e controle de equipamentos HVAC, otimizando a operação e facilitando a manutenção.</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-airflow-blue">Johnson Controls</Badge>
                <Badge className="bg-blue-500">Siemens</Badge>
                <Badge className="bg-sky-500">Schneider Electric</Badge>
                <Badge className="bg-indigo-600">Honeywell</Badge>
              </div>
            </Card>
          </div>
          
          <div className="reveal">
            <Card className="p-6 h-full border-0 shadow-md bg-gradient-to-br from-blue-50 to-white">
              <h3 className="text-xl font-bold text-airflow-blue mb-4">Normas e Certificações</h3>
              <p className="mb-4 text-gray-700">Nossos projetos seguem rigorosamente as normas técnicas específicas para cada setor, garantindo conformidade e segurança.</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-airflow-blue">NR-15</Badge>
                <Badge className="bg-blue-500">ISO 9001</Badge>
                <Badge className="bg-sky-500">PBQP-H</Badge>
                <Badge className="bg-indigo-600">ABRAVA</Badge>
                <Badge className="bg-airflow-blue">TIA-942</Badge>
                <Badge className="bg-blue-500">ANVISA</Badge>
              </div>
            </Card>
          </div>
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
