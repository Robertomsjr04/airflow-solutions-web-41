
import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { images } from '@/utils/projectImages';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const OurWork = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  
  return (
    <section id="our-work" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold mb-4">Nossos Projetos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos em instalações e manutenções de sistemas de refrigeração industrial e comercial.
          </p>
        </div>

        <div className="reveal">
          <Carousel 
            opts={{ 
              loop: true,
              align: "center",
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full object-contain max-h-[80vh]" 
                        />
                      </div>
                      <div className="p-2 text-center text-sm text-gray-600">{image.description}</div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="left-2 lg:-left-12 bg-white/80 hover:bg-white border-airflow-blue text-airflow-blue" 
            />
            <CarouselNext 
              className="right-2 lg:-right-12 bg-white/80 hover:bg-white border-airflow-blue text-airflow-blue" 
            />
          </Carousel>
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-gray-600 mb-6">
            Trabalhamos com as principais marcas do mercado e oferecemos soluções personalizadas para cada tipo de instalação.
          </p>
          <Button className="bg-airflow-blue hover:bg-airflow-lightBlue text-white">
            Solicite um orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
