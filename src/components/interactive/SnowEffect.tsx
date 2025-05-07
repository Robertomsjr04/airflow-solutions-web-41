
import React, { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface SnowflakeProps {
  container: HTMLDivElement;
  config: SnowConfig;
}

interface SnowConfig {
  count: number;
  baseSpeed: number;
  baseSize: number;
  windEffect: number;
}

class Snowflake {
  private container: HTMLDivElement;
  private config: SnowConfig;
  private el: HTMLDivElement;
  private x: number;
  private y: number;
  private size: number;
  private speedY: number;
  private speedX: number;
  private rotation: number;
  private rotationSpeed: number;
  private opacity: number;
  private amplitude: number;
  private frequency: number;
  private timeOffset: number;

  constructor(container: HTMLDivElement, config: SnowConfig) {
    this.container = container;
    this.config = config;
    this.reset();
    this.el = document.createElement('div');
    this.createElement();
  }
  
  reset() {
    this.x = Math.random() * window.innerWidth;
    this.y = -10 - Math.random() * 20;
    this.size = this.config.baseSize * (0.5 + Math.random());
    this.speedY = this.config.baseSpeed * (0.7 + Math.random() * 0.6);
    this.speedX = this.config.windEffect * (0.2 + Math.random() * 0.8);
    this.rotation = Math.random() * 360;
    this.rotationSpeed = (Math.random() - 0.5) * 4;
    this.opacity = 0.2 + Math.random() * 0.8;
    this.amplitude = 2 + Math.random() * 5;
    this.frequency = 0.01 + Math.random() * 0.03;
    this.timeOffset = Math.random() * 100;
  }
  
  createElement() {
    this.el.className = 'snowflake';
    this.container.appendChild(this.el);
    this.updateElement();
  }
  
  updateElement() {
    this.el.style.width = `${this.size}px`;
    this.el.style.height = `${this.size}px`;
    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;
    this.el.style.opacity = `${this.opacity}`;
    this.el.style.transform = `rotate(${this.rotation}deg)`;
    
    // Glow effect for larger flakes
    if(this.size > 5) {
      this.el.style.boxShadow = `0 0 ${this.size/2}px rgba(168, 216, 255, 0.7)`;
    }
  }
  
  update(delta: number) {
    this.timeOffset += delta * 0.001;
    
    this.y += this.speedY * delta * 0.02;
    this.x += this.speedX * delta * 0.02 + Math.sin(this.timeOffset * this.frequency) * this.amplitude;
    this.rotation += this.rotationSpeed * delta * 0.02;
    
    if (this.y > window.innerHeight || 
        this.x < -20 || 
        this.x > window.innerWidth + 20) {
      this.reset();
    }
    
    this.updateElement();
  }

  // Clean up - remove element
  destroy() {
    if (this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
  }
}

const SnowEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [config, setConfig] = useState<SnowConfig>({
    count: 150,
    baseSpeed: 1.5,
    baseSize: 3,
    windEffect: 0
  });
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(true);

  // Initialize and set up animation
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create snowflakes
    initSnowflakes();
    
    // Animation loop
    lastTimeRef.current = performance.now();
    animationRef.current = requestAnimationFrame(animate);
    
    // Set up resize handler
    const handleResize = () => {
      if (containerRef.current) {
        initSnowflakes();
      }
    };
    window.addEventListener('resize', handleResize);
    
    // ScrollTrigger to manage performance
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      onEnter: () => setIsVisible(true),
      onLeave: () => setIsVisible(false),
      onEnterBack: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false)
    });
    
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      cleanupSnowflakes();
    };
  }, []);

  // Re-initialize when config changes
  useEffect(() => {
    if (containerRef.current) {
      initSnowflakes();
    }
  }, [config.count]);

  // Update animation state based on visibility
  useEffect(() => {
    if (isVisible) {
      if (animationRef.current === 0) {
        lastTimeRef.current = performance.now();
        animationRef.current = requestAnimationFrame(animate);
      }
    } else {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = 0;
    }
  }, [isVisible]);

  const initSnowflakes = () => {
    cleanupSnowflakes();
    
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    
    const newSnowflakes: Snowflake[] = [];
    for (let i = 0; i < config.count; i++) {
      newSnowflakes.push(new Snowflake(container, config));
    }
    
    snowflakesRef.current = newSnowflakes;
  };

  const cleanupSnowflakes = () => {
    snowflakesRef.current.forEach(flake => flake.destroy());
    snowflakesRef.current = [];
  };

  const animate = (time: number) => {
    const delta = time - lastTimeRef.current;
    lastTimeRef.current = time;
    
    snowflakesRef.current.forEach(flake => flake.update(delta));
    
    animationRef.current = requestAnimationFrame(animate);
  };

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({
      ...config,
      count: parseInt(e.target.value, 10)
    });
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({
      ...config,
      baseSpeed: parseFloat(e.target.value)
    });
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({
      ...config,
      baseSize: parseFloat(e.target.value)
    });
  };

  const handleWindChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({
      ...config,
      windEffect: parseFloat(e.target.value)
    });
  };

  const handleReset = () => {
    initSnowflakes();
  };

  return (
    <div className="relative w-full overflow-hidden h-96">
      {/* Main snow container with fixed position */}
      <div 
        ref={containerRef}
        className="absolute inset-0 pointer-events-none z-10"
      />
      
      {/* Frost effect at top */}
      <div className="absolute inset-x-0 top-0 h-32 pointer-events-none z-20 bg-gradient-to-b from-[rgba(100,150,255,0.1)] to-transparent" />
      
      {/* Controls panel */}
      <div className="absolute bottom-4 left-4 bg-black/70 p-4 rounded-lg text-white z-30">
        <h3 className="text-lg font-medium mb-3">Controle de Neve Industrial</h3>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <label htmlFor="snow-count" className="w-28 text-sm">Quantidade:</label>
            <input 
              type="range" 
              id="snow-count" 
              min="10" 
              max="500" 
              value={config.count} 
              onChange={handleCountChange}
              className="flex-1"
            />
            <span className="ml-2 text-sm w-8">{config.count}</span>
          </div>
          
          <div className="flex items-center">
            <label htmlFor="snow-speed" className="w-28 text-sm">Velocidade:</label>
            <input 
              type="range" 
              id="snow-speed" 
              min="0.5" 
              max="5" 
              step="0.1" 
              value={config.baseSpeed} 
              onChange={handleSpeedChange}
              className="flex-1"
            />
            <span className="ml-2 text-sm w-8">{config.baseSpeed.toFixed(1)}</span>
          </div>
          
          <div className="flex items-center">
            <label htmlFor="snow-size" className="w-28 text-sm">Tamanho:</label>
            <input 
              type="range" 
              id="snow-size" 
              min="1" 
              max="10" 
              step="0.5" 
              value={config.baseSize} 
              onChange={handleSizeChange}
              className="flex-1"
            />
            <span className="ml-2 text-sm w-8">{config.baseSize.toFixed(1)}</span>
          </div>
          
          <div className="flex items-center">
            <label htmlFor="wind-effect" className="w-28 text-sm">Vento:</label>
            <input 
              type="range" 
              id="wind-effect" 
              min="-2" 
              max="2" 
              step="0.1" 
              value={config.windEffect} 
              onChange={handleWindChange}
              className="flex-1"
            />
            <span className="ml-2 text-sm w-8">{config.windEffect.toFixed(1)}</span>
          </div>
          
          <button 
            onClick={handleReset}
            className="bg-airflow-blue hover:bg-airflow-lightBlue text-white px-3 py-1 rounded-md mt-2 transition"
          >
            Resetar Sistema
          </button>
        </div>
      </div>
    </div>
  );
};

export default SnowEffect;
