
import React, { useState } from 'react';
import { QuoteRequestForm } from '@/components/ui/quote-request-form';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [mapHovered, setMapHovered] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 reveal">Contato</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto reveal px-4">
            <strong>Precisa de um Sistema de Refrigeração Confiável?</strong><br />
            Fale com nossos engenheiros e receba um diagnóstico gratuito para otimizar sua climatização!
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            className="reveal order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-airflow-gray p-6 md:p-8 rounded-lg shadow-md">
              <QuoteRequestForm />
            </div>
          </motion.div>
          
          <motion.div 
            className="reveal-right order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <div className="h-full flex flex-col">
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-airflow-blue">Nosso Escritório</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  Visite nossa sede para discutir seu projeto pessoalmente com nossa equipe de especialistas em refrigeração industrial.
                </p>
                
                <motion.div 
                  className="aspect-w-16 aspect-h-9 mb-4 md:mb-6 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setMapHovered(true)}
                  onHoverEnd={() => setMapHovered(false)}
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.662858559675!2d-48.0644611!3d-15.9853725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bcdb08e8c3999%3A0xf47cb3f8be80cb49!2sQd.%2012%20Cj.%20H%20Lt.%2009%20-%20Setor%20Sul%20Gama%2C%20Bras%C3%ADlia%20-%20DF%2C%2072415-608!5e0!3m2!1spt-BR!2sbr!4v1685894507318!5m2!1spt-BR!2sbr" 
                    width="600" 
                    height="300" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    className={`rounded-lg shadow-md w-full h-48 md:h-64 lg:h-72 transition-all duration-300 ${mapHovered ? 'shadow-xl' : 'shadow-md'}`}
                    title="Localização da AirFlow Climatização"
                  />
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:gap-6 mt-auto">
                <motion.div 
                  className="bg-airflow-gray p-4 md:p-6 rounded-lg shadow-md"
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-bold text-airflow-blue mb-2 text-sm md:text-base">Endereço</h4>
                  <address className="text-xs md:text-sm text-gray-700 not-italic">
                    Quadra 12 conjunto H lote 09<br />
                    Setor Sul Gama DF 72415-608<br />
                    Brasil
                  </address>
                </motion.div>
                
                <motion.div 
                  className="bg-airflow-gray p-4 md:p-6 rounded-lg shadow-md"
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-bold text-airflow-blue mb-2 text-sm md:text-base">Informações de Contato</h4>
                  <div className="text-xs md:text-sm text-gray-700 space-y-1">
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="flex-shrink-0" aria-hidden="true" /> 
                      <a 
                        href="tel:+556130813550"
                        className="hover:text-airflow-blue transition-colors"
                        aria-label="Ligar para telefone fixo"
                      >
                        +55 (61) 3081-3550
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle size={14} className="flex-shrink-0" aria-hidden="true" />
                      <a 
                        href="https://wa.me/5561999124752"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-airflow-blue hover:underline transition-colors"
                        aria-label="Entrar em contato via WhatsApp"
                      >
                        +55 (61) 99912-4752
                      </a>
                    </div>
                    <div className="break-all">
                      <a 
                        href="mailto:airflow.arcondicionado@gmail.com"
                        className="hover:text-airflow-blue transition-colors"
                        aria-label="Enviar email"
                      >
                        Email: airflow.arcondicionado@gmail.com
                      </a>
                    </div>
                    <div className="mt-2">
                      <strong>Horário:</strong> Seg-Sex, 8h - 18h
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Atendimento emergencial 24h</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default Contact;
