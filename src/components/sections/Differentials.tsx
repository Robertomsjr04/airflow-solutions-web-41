
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Shield, Clock, Users, BarChart3 } from 'lucide-react';

const differentials = [
  {
    title: "Certificações Técnicas Atualizadas",
    description: "Nossa equipe possui todas as certificações necessárias e se mantém atualizada com inovações e regulamentações do setor.",
    icon: Shield,
  },
  {
    title: "Serviço de Emergência 24/7",
    description: "Estamos disponíveis 24 horas por dia para atender às suas necessidades emergenciais de refrigeração e AVAC.",
    icon: Clock,
  },
  {
    title: "Equipe Interna de Engenheiros",
    description: "Nossos engenheiros especializados desenvolvem soluções personalizadas para os requisitos específicos de cada cliente.",
    icon: Users,
  },
  {
    title: "Foco em Eficiência Energética",
    description: "Priorizamos soluções sustentáveis e econômicas que reduzem o consumo de energia e o impacto ambiental.",
    icon: BarChart3,
  }
];

const Differentials = () => {
  return (
    <section id="differentials" className="py-20 bg-gradient-to-b from-airflow-blue to-blue-800 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white reveal">Nossos Diferenciais</h2>
          <p className="text-lg max-w-3xl mx-auto reveal">
            O que faz da Air Flow a escolha preferida para soluções de refrigeração industrial e comercial.
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
