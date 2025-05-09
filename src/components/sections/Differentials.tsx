
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Shield, Clock, Users, BarChart3 } from 'lucide-react';

const differentials = [
  {
    title: "30+ Anos de Experiência",
    description: "Soluções testadas e otimizadas para indústrias críticas, com expertise comprovada em projetos complexos.",
    icon: Shield,
  },
  {
    title: "Equipe Certificada ABRAVA",
    description: "Engenheiros e técnicos com treinamentos internacionais e certificações nas principais tecnologias do mercado.",
    icon: Users,
  },
  {
    title: "Atendimento Nacional",
    description: "Projetos em todo o Brasil com padrão Air Flow, garantindo qualidade uniforme independente da localização.",
    icon: Building,
  },
  {
    title: "Eficiência Energética",
    description: "Redução de até 40% nos custos operacionais através de soluções sustentáveis e sistemas de alta eficiência.",
    icon: BarChart3,
  }
];

const Differentials = () => {
  return (
    <section id="differentials" className="py-20 dark-blue-bg text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white reveal">Por Que Escolher a Air Flow?</h2>
          <p className="text-lg max-w-3xl mx-auto reveal">
            Nossos diferenciais são construídos com base em décadas de experiência, 
            investimento constante em capacitação técnica e compromisso com a excelência.
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full hover:bg-white/20 transition-colors">
                <CardHeader className="flex flex-col items-center text-center pb-2">
                  <div className="bg-white rounded-full p-3 mb-4">
                    <item.icon className="h-6 w-6 text-airflow-blue" />
                  </div>
                  <h3 className="font-bold text-xl text-white">{item.title}</h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
