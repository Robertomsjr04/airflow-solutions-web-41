
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Image } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { preloadImage } from '@/utils/imageUtils';

const testimonials = [{
  name: "Carlos Mendes",
  position: "Diretor de Operações",
  company: "Shopping Center São Paulo",
  text: "Trabalhamos com a Air Flow há mais de 5 anos. A implementação do PMOC garantiu que nosso shopping center atenda a todos os requisitos regulatórios, mantendo o conforto ideal para nossos clientes.",
  rating: 5,
  certificateImage: "/lovable-uploads/28a47dbe-cbaf-4eda-a45f-c9e7adb9ec02.png",
  certificateAlt: "Certificado de Qualidade de Serviço"
}, {
  name: "Dra. Ana Santos",
  position: "Gerente de Instalações",
  company: "Hospital Santa Casa",
  text: "A compreensão da Air Flow sobre as necessidades de refrigeração hospitalar é excepcional. Sua equipe de manutenção mantém nossos sistemas críticos funcionando perfeitamente, o que é vital para o bem-estar dos nossos pacientes.",
  rating: 5,
  certificateImage: "/lovable-uploads/64687e12-46cb-44b9-8574-13e6f0e8cce8.png",
  certificateAlt: "Certificado de Atestado Técnico"
}, {
  name: "Roberto Alves",
  position: "Gerente Industrial",
  company: "BrasTech Manufatura",
  text: "Após atualizar os sistemas de refrigeração de nossa fábrica com a Air Flow, vimos uma redução de 30% no consumo de energia, além de melhorar o controle de temperatura em nossas áreas de produção.",
  rating: 4,
  certificateImage: "/lovable-uploads/667b6ba4-aae3-4c50-9dad-8d1e622350e3.png",
  certificateAlt: "Certificado de Eficiência Energética"
}];

// Preload the certificate images
testimonials.forEach(testimonial => {
  if (testimonial.certificateImage) {
    preloadImage(testimonial.certificateImage).catch(err => console.warn('Failed to preload testimonial certificate image:', err));
  }
});

const Testimonials = () => {
  return <section id="testimonials" className="py-20 bg-airflow-gray">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Depoimentos de Clientes</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal">
            Veja o que nossos clientes têm a dizer sobre nossos serviços de refrigeração e AVAC.
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="reveal" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>)}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                
                  {testimonial.certificateImage && <Dialog>
                      <DialogTrigger asChild>
                        <div className="mt-4 cursor-pointer group relative">
                          <div className="relative border rounded-md overflow-hidden bg-white">
                            <AspectRatio ratio={4 / 3} className="bg-muted">
                              <img src={testimonial.certificateImage} alt={testimonial.certificateAlt} className="object-cover w-full h-full transition-transform group-hover:scale-105" loading={index < 2 ? "eager" : "lazy"} />
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
                          <p className="text-xs text-gray-500 mt-1 text-center">{testimonial.certificateAlt}</p>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl w-[90vw] p-1">
                        <div className="relative w-full">
                          <img src={testimonial.certificateImage} alt={testimonial.certificateAlt} className="w-full object-contain max-h-[80vh]" />
                        </div>
                        <div className="p-2 text-center text-sm text-gray-600">{testimonial.certificateAlt}</div>
                      </DialogContent>
                    </Dialog>}
                </CardContent>
                <CardFooter className="border-t pt-4 mt-auto">
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-airflow-blue">{testimonial.company}</p>
                  </div>
                </CardFooter>
              </Card>
            </div>)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
