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
    }, "-=0.4");

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
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="container relative z-10">
        <div className="max-w-3xl hero-content">
          <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Soluções em Refrigeração Industrial e Comercial
          </h1>
          <p className="hero-description text-xl md:text-2xl text-gray-100 mb-8">
            PMOC e AVAC para grandes instalações com agilidade, eficiência e conformidade técnica.
          </p>
          <div className="hero-button">
            <AnimatedButton onClick={scrollToContact} className="relative overflow-hidden group text-xs">
              Solicite seu orçamento agora
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