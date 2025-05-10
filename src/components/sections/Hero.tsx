import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedButton from '@/components/ui/animated-button';
import { preloadImage, preloadVideo, getEncodedPath } from '@/utils/imageUtils';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = '/lovable-uploads/Gen-4 Turbo industrial refrigeration corridor, metallic pipes, smooth camera pan, cinematic lighting, 10s, no people 3862487970.mp4';
  const posterSrc = '/lovable-uploads/728703b4-e76d-4b4b-bc6c-33ddd3f03992.png';

  useEffect(() => {
    if (!heroRef.current) return;

    // Preload the hero image for the video poster and fallback
    preloadImage(posterSrc);
    
    // Preload the video
    const encodedVideoPath = getEncodedPath(videoSrc);
    preloadVideo(encodedVideoPath)
      .then(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(err => {
            console.warn('Video playback error:', err);
          });
        }
      })
      .catch(err => {
        console.error('Error preloading video:', err);
      });

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
    <section 
      ref={heroRef} 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={posterSrc}
        >
          <source src={getEncodedPath(videoSrc)} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay to maintain the current look and feel */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
      </div>
      
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
          <div className="hero-button px-0 mx-0 py-0 rounded-none">
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
