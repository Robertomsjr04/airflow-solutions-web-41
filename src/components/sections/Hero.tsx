import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedButton from '@/components/ui/animated-button';
import { preloadImage } from '@/utils/imageUtils';
import { OptimizedImage } from '@/components/ui/optimized-image';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  const newHeroImageSrc = '/lovable-uploads/d4a03e7e-0fe0-4f17-8567-880a8c9e8b99.png';
  const industrialEquipmentSrc = '/lovable-uploads/28bbbe1b-c4ba-4a22-925b-3da00a75c3b4.png';
  const posterSrc = '/lovable-uploads/728703b4-e76d-4b4b-bc6c-33ddd3f03992.png';

  useEffect(() => {
    if (!heroRef.current) return;

    // Preload all three hero images
    preloadImage(newHeroImageSrc)
      .catch(err => console.warn('Failed to preload new hero image:', err));
    
    preloadImage(industrialEquipmentSrc)
      .catch(err => console.warn('Failed to preload industrial equipment image:', err));
    
    preloadImage(posterSrc)
      .catch(err => console.warn('Failed to preload original hero image:', err));

    // Create timeline for the hero animation
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out"
      }
    });

    // Animate the hero elements on load
    tl.from(".hero-heading", {
      y: 50,
      opacity: 0,
      duration: 0.8
    }).from(".hero-description", {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, "-=0.5").from(".hero-button", {
      y: 20,
      opacity: 0,
      duration: 0.6
    }, "-=0.4").from(".hero-years", {
      scale: 0.8,
      opacity: 0,
      duration: 0.5
    }, "-=0.3");

    // Create parallax effect on scroll for content
    gsap.to(".hero-content", {
      opacity: 0.6,
      y: 50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "center center",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-black">
      {/* Hero Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {/* Primary background image - New HVAC equipment */}
        <OptimizedImage
          src={newHeroImageSrc}
          alt="Equipamentos Modernos de Refrigeração Industrial - Air Flow"
          className="absolute inset-0 w-full h-full object-cover"
          fallbackCategory="default"
          loading="eager"
          width={1920}
          height={1080}
          responsive={true}
        />
        
        {/* Secondary overlay image for industrial equipment */}
        <OptimizedImage
          src={industrialEquipmentSrc}
          alt="Equipamentos Industriais de Refrigeração"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
          fallbackCategory="default"
          loading="eager"
          width={1920}
          height={1080}
          responsive={true}
        />
        
        {/* Third background layer for enhanced visual depth */}
        <OptimizedImage
          src={posterSrc}
          alt="Tecnologia em Refrigeração Industrial"
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-soft-light"
          fallbackCategory="default"
          loading="eager"
          width={1920}
          height={1080}
          responsive={true}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl hero-content">
          <div className="hero-years inline-block bg-airflow-blue text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
            30 Anos de Liderança Técnica no Mercado
          </div>
          <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Air Flow - Soluções em Refrigeração Industrial e Comercial
          </h1>
          <p className="hero-description text-xl md:text-2xl text-white mb-8">
            Excelência em engenharia térmica com máxima eficiência energética, conformidade técnica e tecnologia de ponta.
          </p>
          <div className="hero-button py-0 mx-0 px-0 rounded-none">
            <AnimatedButton onClick={scrollToContact} className="relative overflow-hidden group text-xs text-left rounded-sm px-[46px]">
              Fale com um Especialista
            </AnimatedButton>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
        <span className="text-sm mb-2 opacity-70">Saiba mais</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
