
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AirVent, BarChart, Settings, ShieldCheck, Thermometer, Wrench } from 'lucide-react';

const services = [
  {
    title: "PMOC",
    description: "Maintenance, Operation and Control Plan implementation and management following all regulatory requirements.",
    icon: ShieldCheck,
    color: "text-green-500",
  },
  {
    title: "HVAC Project Design & Installation",
    description: "Complete project design and professional installation of HVAC systems for all facility types.",
    icon: AirVent,
    color: "text-blue-500",
  },
  {
    title: "System Retrofit",
    description: "Modernization of outdated refrigeration systems to improve efficiency and reduce operating costs.",
    icon: Settings,
    color: "text-purple-500",
  },
  {
    title: "Duct & Heat Exchanger Cleaning",
    description: "Professional cleaning services to ensure optimal airflow and system performance.",
    icon: Thermometer,
    color: "text-red-500",
  },
  {
    title: "Technical Consulting",
    description: "Expert consulting on system optimization, regulatory compliance, and energy efficiency.",
    icon: BarChart,
    color: "text-amber-500",
  },
  {
    title: "Mechanical Maintenance",
    description: "Comprehensive maintenance services for all mechanical components of HVAC systems.",
    icon: Wrench,
    color: "text-indigo-500",
  }
];

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-airflow-gray">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal">
            Comprehensive industrial and commercial refrigeration services to keep your facilities running at peak performance.
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`${service.color} mb-4`}>
                    <service.icon size={32} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-700">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="text-airflow-blue hover:bg-airflow-blue hover:text-white border-airflow-blue"
                    onClick={scrollToContact}
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-airflow-blue hover:bg-airflow-lightBlue text-white"
          >
            Request a Service Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
