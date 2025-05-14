
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Image } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { preloadImage } from '@/utils/imageUtils';

const certificates = [
  {
    title: "Atestado Técnico",
    organization: "G6 Educacional",
    image: "/lovable-uploads/b395e122-e1ad-4eed-a8ca-8000bc61fe88.png",
    alt: "Atestado Técnico - G6 Educacional"
  },
  {
    title: "Atestado de Capacidade Técnica",
    organization: "Instituto de Cardiologia",
    image: "/lovable-uploads/68a0dd58-bda4-4f8f-bbf4-e272464a54f3.png",
    alt: "Atestado de Capacidade Técnica - Instituto de Cardiologia"
  }
];

// Preload certificate images
certificates.forEach(certificate => {
  preloadImage(certificate.image).catch(err => 
    console.warn('Failed to preload certificate image:', err)
  );
});

const Testimonials = () => {
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
                <DialogTrigger asChild>
                  <div className="cursor-pointer group relative">
                    <div className="relative border rounded-md overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
                      <AspectRatio ratio={3/4} className="bg-muted">
                        <img 
                          src={certificate.image} 
                          alt={certificate.alt} 
                          className="object-cover w-full h-full transition-transform group-hover:scale-105" 
                          loading={index < 1 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="bg-white/80 rounded-full p-2">
                                <Image className="w-5 h-5 text-gray-700" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>Ver certificado</TooltipContent>
                          </Tooltip>
                        </div>
                      </AspectRatio>
                    </div>
                    <p className="text-center mt-3 font-medium">{certificate.title}</p>
                    <p className="text-center text-sm text-airflow-blue">{certificate.organization}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl w-[90vw] p-1">
                  <div className="relative w-full">
                    <img 
                      src={certificate.image} 
                      alt={certificate.alt} 
                      className="w-full object-contain max-h-[80vh]" 
                    />
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
