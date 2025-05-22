
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedButton from '@/components/ui/animated-button';
import { HoverEffect } from '@/components/ui/hover-effect';
import { 
  AnimatedIcons, 
  useScrollVisibility 
} from '@/components/ui/animated-icons';
import { motion, useAnimation } from 'framer-motion';

const services = [{
  title: "Climatização e Refrigeração Industrial",
  description: "Projetos e manutenção em sistemas de ar condicionado e refrigeração industrial com foco em eficiência energética.",
  icon: "AirVent",
  color: "text-blue-500",
  url: "/servicos/climatizacao"
}, {
  title: "Projetos, Retrofit e Expansões",
  description: "Modernização de sistemas HVAC, reduções de até 40% em custos operacionais e aumento da vida útil dos equipamentos.",
  icon: "Settings",
  color: "text-purple-500",
  url: "/servicos/projetos"
}, {
  title: "Sistemas de Automação",
  description: "Implementação de BMS e sistemas de monitoramento remoto para controle preciso e economia de energia.",
  icon: "Activity",
  color: "text-green-500",
  url: "/servicos/automacao"
}, {
  title: "Infraestrutura Complementar",
  description: "Manutenção integrada em sistemas elétricos, geradores e ar comprimido com manejo adequado de gases refrigerantes.",
  icon: "Wrench",
  color: "text-amber-500",
  url: "/servicos/infraestrutura"
}, {
  title: "Dutos e Tratamento de Ar",
  description: "Projeto e instalação de dutos, sistemas de filtragem e monitoramento que atendem às normas ANVISA e ISO.",
  icon: "Thermometer",
  color: "text-red-500",
  url: "/servicos/dutos"
}, {
  title: "PMOC",
  description: "Plano de Manutenção, Operação e Controle em conformidade com a Portaria 3.523/GM do Ministério da Saúde.",
  icon: "ShieldCheck",
  color: "text-indigo-500",
  url: "/servicos/pmoc"
}];

const Services = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollVisibility();
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const controls = useAnimation();
  
  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const handleNavigate = (url: string) => {
    console.log("Navigating to:", url);
    navigate(url);
  };

  const handleServiceHover = (index: number | null) => {
    setHoveredService(index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Transform services array to the format expected by HoverEffect
  const hoverItems = services.map((service, index) => ({
    title: service.title,
    description: service.description,
    link: service.url,
    icon: AnimatedIcons[service.icon as keyof typeof AnimatedIcons],
    color: service.color,
    isVisible: isVisible
  }));
  
  return (
    <section id="services" className="py-20 bg-airflow-gray" ref={ref}>
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Nossos Serviços</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal">
            Soluções completas e personalizadas em refrigeração industrial e comercial para manter suas instalações funcionando com máxima eficiência e conformidade técnica.
          </p>
          <motion.div 
            className="w-20 h-1 bg-airflow-blue mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.div>
        
        <div className="reveal">
          <HoverEffect 
            items={hoverItems} 
            onNavigate={handleNavigate}
          />
        </div>
        
        <motion.div 
          className="text-center mt-12 reveal flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <AnimatedButton onClick={scrollToContact} className="px-5 text-xs text-center py-[12px]">
            Solicite seu Orçamento Agora
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
