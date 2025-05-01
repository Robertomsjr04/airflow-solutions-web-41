
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Shield, Clock, Users, BarChart3 } from 'lucide-react';

const differentials = [
  {
    title: "Up-to-date Technical Certifications",
    description: "Our team holds all necessary certifications and stays current with industry innovations and regulations.",
    icon: Shield,
  },
  {
    title: "24/7 Emergency Service",
    description: "We're available around the clock to respond to your emergency refrigeration and HVAC needs.",
    icon: Clock,
  },
  {
    title: "In-house Team of Engineers",
    description: "Our specialized engineers develop customized solutions for each client's specific requirements.",
    icon: Users,
  },
  {
    title: "Energy Efficiency Focus",
    description: "We prioritize sustainability and cost-saving solutions that reduce energy consumption and environmental impact.",
    icon: BarChart3,
  }
];

const Differentials = () => {
  return (
    <section id="differentials" className="py-20 bg-gradient-to-b from-airflow-blue to-blue-800 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white reveal">Our Differentials</h2>
          <p className="text-lg max-w-3xl mx-auto reveal">
            What makes Air Flow the preferred choice for industrial and commercial refrigeration solutions.
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
