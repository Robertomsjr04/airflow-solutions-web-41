
import React from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import AnimatedButton from '@/components/ui/animated-button';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { useIsMobile } from '@/hooks/use-mobile';
import { ImageOff, ZoomIn } from 'lucide-react';

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
  const isMobile = useIsMobile();
  
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-airflow-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 reveal">Certificações e Atestados</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto reveal">
            Conheça nossos atestados técnicos e certificações que comprovam a qualidade dos nossos serviços.
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-3 md:mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {certificates.map((certificate, index) => (
            <div key={index} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
              <Dialog>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md h-full flex flex-col">
                  <h3 className="font-semibold text-lg md:text-xl mb-2">{certificate.title}</h3>
                  <p className="text-sm text-airflow-blue mb-3">{certificate.organization}</p>
                  
                  <p className="text-sm md:text-base text-gray-700 mb-4 flex-grow">{certificate.description}</p>
                  
                  <DialogTrigger asChild>
                    <div className="flex justify-center mt-2">
                      <AnimatedButton 
                        className={`py-2 px-4 text-xs ${isMobile ? 'w-full' : ''}`}
                      >
                        Ver Certificado
                        <ZoomIn className="ml-2 h-4 w-4" />
                      </AnimatedButton>
                    </div>
                  </DialogTrigger>
                </div>
                
                <DialogContent className="max-w-3xl w-[95vw] md:w-[90vw] p-1 md:p-3">
                  <DialogTitle className="sr-only">{certificate.title}</DialogTitle>
                  <div className="relative w-full overflow-auto max-h-[80vh] touch-pan-y">
                    <OptimizedImage
                      src={certificate.image}
                      alt={certificate.alt}
                      className="w-full object-contain"
                      fallbackCategory="testimonial"
                      width={800}
                      height={600}
                      onError={() => {
                        console.error(`Falha ao carregar certificado: ${certificate.title}`);
                      }}
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
