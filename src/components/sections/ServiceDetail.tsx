
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceDetailProps {
  title: string;
  description: string;
  image: string;
  features: ServiceFeature[];
  contactRef?: React.RefObject<HTMLDivElement>;
}

const ServiceDetail = ({ title, description, image, features, contactRef }: ServiceDetailProps) => {
  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-right order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-airflow-blue">{title}</h2>
            <p className="text-lg text-gray-700 mb-6">
              {description}
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-airflow-blue">{feature.title}</h4>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-airflow-blue hover:bg-airflow-lightBlue text-white"
            >
              Solicitar Consultoria Especializada
            </Button>
          </div>

          <div className="reveal lg:order-2 order-1">
            <div 
              className="rounded-lg shadow-xl overflow-hidden"
              style={{
                height: '400px',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
