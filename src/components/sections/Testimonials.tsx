
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Image as LucideImage } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import AnimatedButton from '@/components/ui/animated-button';
import { preloadImage } from '@/utils/imageUtils';

const certificates = [
  {
    title: "Atestado Técnico",
    organization: "G6 Educacional",
    image: "/lovable-uploads/c742c9e2-2af1-4b43-a4e4-d71215c59926.png",
    alt: "Atestado Técnico - G6 Educacional",
    description: "Certificado que atesta a qualidade dos nossos serviços de climatização para a G6 Educacional, confirmando a excelência na instalação de sistemas de ar condicionado."
  },
  {
    title: "Atestado de Capacidade Técnica",
    organization: "Instituto de Cardiologia",
    image: "/lovable-uploads/abb64bbf-9410-485e-a92d-07cc979fa7f0.png",
    alt: "Atestado de Capacidade Técnica - Instituto de Cardiologia",
    description: "Certificação técnica emitida pelo Instituto de Cardiologia, reconhecendo nossa competência na implementação de sistemas de climatização em ambientes hospitalares."
  }
];

const Testimonials = () => {
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});
  const [isLoading, setIsLoading] = useState<{[key: string]: boolean}>({});
  
  const handleLoadImage = (imageUrl: string) => {
    if (!loadedImages[imageUrl]) {
      setIsLoading(prev => ({...prev, [imageUrl]: true}));
      
      // Use the preloadImage utility instead of direct Image constructor
      preloadImage(imageUrl)
        .then(() => {
          setLoadedImages(prev => ({...prev, [imageUrl]: true}));
          setIsLoading(prev => ({...prev, [imageUrl]: false}));
        })
        .catch(error => {
          console.error(`Failed to load image: ${imageUrl}`, error);
          setIsLoading(prev => ({...prev, [imageUrl]: false}));
        });
    }
  };
  
  return (
    <section id="testimonials" className="py-20 bg-airflow-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Certificações e Atestados</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal">
            Conheça nossos atestados técnicos e certificações que comprovam a qualidade dos nossos serviços.
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((certificate, index) => (
            <div key={index} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
              <Dialog>
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                  <h3 className="font-semibold text-xl mb-2">{certificate.title}</h3>
                  <p className="text-sm text-airflow-blue mb-3">{certificate.organization}</p>
                  
                  <p className="text-gray-700 mb-4 flex-grow">{certificate.description}</p>
                  
                  <DialogTrigger asChild>
                    <div className="flex justify-center mt-2">
                      <AnimatedButton 
                        className="py-2 px-4 text-xs"
                        onClick={() => handleLoadImage(certificate.image)}
                      >
                        Ver Certificado
                      </AnimatedButton>
                    </div>
                  </DialogTrigger>
                </div>
                
                <DialogContent className="max-w-3xl w-[90vw] p-1">
                  <div className="relative w-full">
                    {isLoading[certificate.image] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                        <div className="h-10 w-10 border-4 border-t-airflow-blue rounded-full animate-spin"></div>
                      </div>
                    )}
                    
                    {loadedImages[certificate.image] ? (
                      <img 
                        src={certificate.image} 
                        alt={certificate.alt} 
                        className="w-full object-contain max-h-[80vh]" 
                      />
                    ) : (
                      <div className="w-full h-[50vh] bg-gray-100 flex items-center justify-center">
                        <p className="text-gray-500">Carregando certificado...</p>
                      </div>
                    )}
                  </div>
                  <div className="p-2 text-center">
                    <p className="font-medium">{certificate.title}</p>
                    <p className="text-sm text-airflow-blue">{certificate.organization}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
