
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

  return <section id="contact" className="py-20 bg-white">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Contato</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal">
            <strong>Precisa de um Sistema de Refrigeração Confiável?</strong><br />
            Fale com nossos engenheiros e receba um diagnóstico gratuito para otimizar sua climatização!
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="reveal"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-airflow-gray p-8 rounded-lg shadow-md">
              <QuoteRequestForm />
            </div>
          </motion.div>
          
          <motion.div 
            className="reveal-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <div className="h-full flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-airflow-blue">Nosso Escritório</h3>
                <p className="text-gray-700 mb-4">
                  Visite nossa sede para discutir seu projeto pessoalmente com nossa equipe de especialistas em refrigeração industrial.
                </p>
                
                <motion.div 
                  className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setMapHovered(true)}
                  onHoverEnd={() => setMapHovered(false)}
                >
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.662858559675!2d-48.0644611!3d-15.9853725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bcdb08e8c3999%3A0xf47cb3f8be80cb49!2sQd.%2012%20Cj.%20H%20Lt.%2009%20-%20Setor%20Sul%20Gama%2C%20Bras%C3%ADlia%20-%20DF%2C%2072415-608!5e0!3m2!1spt-BR!2sbr!4v1685894507318!5m2!1spt-BR!2sbr" width="600" height="300" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={`rounded-lg shadow-md w-full transition-all duration-300 ${mapHovered ? 'shadow-xl' : 'shadow-md'}`}></iframe>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                <motion.div 
                  className="bg-airflow-gray p-6 rounded-lg shadow-md"
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-bold text-airflow-blue mb-2">Endereço</h4>
                  <p className="text-gray-700">
                    Quadra 12 conjunto H lote 09<br />
                    Setor Sul Gama DF 72415-608<br />
                    Brasil
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-airflow-gray p-6 rounded-lg shadow-md px-[5px]"
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-bold text-airflow-blue mb-2">Informações de Contato</h4>
                  <p className="text-gray-700">
                    <span className="flex items-center gap-1">
                      <Phone size={14} className="flex-shrink-0" /> 
                      <span className="inline-block">+55 (61) 3081-3550</span>
                    </span>
                    <span className="flex items-center gap-1 mt-1">
                      <MessageCircle size={14} className="flex-shrink-0" />
                      <a 
                        href="https://wa.me/5561999124752"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-airflow-blue hover:underline"
                      >
                        +55 (61) 99912-4752
                      </a>
                    </span>
                    <span className="inline-block break-all mt-1">Email: airflow.arcondicionado@gmail.com</span><br />
                    Horário: Seg-Sex, 8h - 18h
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Atendimento emergencial 24h</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default Contact;
