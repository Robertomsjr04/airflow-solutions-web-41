
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight reveal">
            Soluções em Refrigeração Industrial e Comercial
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 reveal">
            PMOC e AVAC para grandes instalações com agilidade, eficiência e conformidade técnica.
          </p>
          <div className="reveal">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-airflow-blue hover:bg-airflow-lightBlue text-white text-lg px-8 py-6"
            >
              Solicite seu orçamento agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
