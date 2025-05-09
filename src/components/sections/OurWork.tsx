import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { images } from '@/utils/projectImages';
import Autoplay from 'embla-carousel-autoplay';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AnimatedButton from '@/components/ui/animated-button';

const OurWork = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  
  const clientLogos = [
    {
      src: "/lovable-uploads/459a3eeb-243a-474b-a3a8-eb23f6255ab0.png",
      alt: "Aeroporto de Brasília"
    }, {
      src: "/lovable-uploads/b9434845-635f-4e87-b3b6-caef23935581.png",
      alt: "SESC"
    }, {
      src: "/lovable-uploads/a1d67657-a8c6-4916-a00b-ba0f7de05a29.png",
      alt: "Instituto Hospital de Base"
    }, {
      src: "/lovable-uploads/8d0fd4ff-2181-4b92-a4c9-1c87d7900645.png",
      alt: "Instituto de Cardiologia"
    }, {
      src: "/lovable-uploads/c8082584-8c6b-4c51-a10a-35c72caf81fa.png",
      alt: "Oderich"
    }, {
      src: "/lovable-uploads/cee82fb5-a9b8-4c35-abb1-53c8e3af2540.png",
      alt: "Bimbo Brasil"
    }, {
      src: "/lovable-uploads/1abffd50-f4f3-46c3-9c62-92f0170a6e09.png",
      alt: "EMS"
    }, {
      src: "/lovable-uploads/2db51423-7794-43b9-9656-8732c8a2b6e3.png",
      alt: "Câmara dos Deputados"
    }, {
      src: "/lovable-uploads/6166a219-1b89-434b-a5b0-4b4944745dba.png",
      alt: "Go Inn Taguatinga"
    }, {
      src: "/lovable-uploads/2ef37423-b278-4793-a9f7-0d344695ac9b.png",
      alt: "Mampai"
    }, {
      src: "/lovable-uploads/668243b6-4b97-47b0-90f4-1d76fbce5779.png",
      alt: "Fugini"
    }
  ];
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <section id="our-work" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4">Nossos Projetos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos em instalações e manutenções de sistemas de refrigeração industrial e comercial.
          </p>
        </div>

        <div className="reveal">
          <Carousel opts={{
          loop: true,
          align: "center"
        }} plugins={[Autoplay({
          delay: 5000
        })]} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {images.map((image, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                        <div className="relative aspect-square">
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="object-cover w-full h-full" 
                            loading={index < 3 ? "eager" : "lazy"} 
                          />
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl w-[90vw] p-1">
                      <div className="relative w-full">
                        <img src={image.src} alt={image.alt} className="w-full object-contain max-h-[80vh]" />
                      </div>
                      <div className="p-2 text-center text-sm text-gray-600">{image.description}</div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:-left-12 bg-white/80 hover:bg-white border-airflow-blue text-airflow-blue" />
            <CarouselNext className="right-2 lg:-right-12 bg-white/80 hover:bg-white border-airflow-blue text-airflow-blue" />
          </Carousel>
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-gray-600 mb-6">
            Trabalhamos com as principais marcas do mercado e oferecemos soluções personalizadas para cada tipo de instalação.
          </p>
          <AnimatedButton onClick={scrollToContact} className="py-3 px-5 text-xs">
            Solicite um orçamento
          </AnimatedButton>
        </div>
        
        <div className="mt-16 reveal">
          <h3 className="text-2xl font-bold mb-8 text-center">Nossos Clientes</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clientLogos.map((logo, index) => <div key={index} className="flex items-center justify-center">
                <Avatar className="w-20 h-20 border-2 border-gray-100 shadow-sm">
                  <AvatarImage src={logo.src} alt={logo.alt} className="object-contain" />
                  <AvatarFallback>{logo.alt.substring(0, 2)}</AvatarFallback>
                </Avatar>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};

export default OurWork;
