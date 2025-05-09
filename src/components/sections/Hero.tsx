
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedButton from '@/components/ui/animated-button';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

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

    // Create parallax effect on scroll
    gsap.to(heroRef.current, {
      backgroundPositionY: "30%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Fade out hero content as user scrolls down
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

  return <section ref={heroRef} id="home" className="relative min-h-screen flex items-center pt-16" style={{
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="container relative z-10">
        <div className="max-w-3xl hero-content">
          <div className="hero-years inline-block bg-airflow-blue text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
            30 Anos de Liderança Técnica no Mercado
          </div>
          <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Air Flow - Soluções em Refrigeração Industrial e Comercial
          </h1>
          <p className="hero-description text-xl md:text-2xl text-gray-100 mb-8">
            Excelência em engenharia térmica com máxima eficiência energética, conformidade técnica e tecnologia de ponta.
          </p>
          <div className="hero-button">
            <AnimatedButton onClick={scrollToContact} className="relative overflow-hidden group text-xs">
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
    </section>;
};

export default Hero;
