
import React from 'react';
import { QuoteRequestForm } from '@/components/ui/quote-request-form';
const Contact = () => {
  return <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Contato</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal">
            <strong>Precisa de um Sistema de Refrigeração Confiável?</strong><br />
            Fale com nossos engenheiros e receba um diagnóstico gratuito para otimizar sua climatização!
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <div className="bg-airflow-gray p-8 rounded-lg shadow-md">
              <QuoteRequestForm />
            </div>
          </div>
          
          <div className="reveal-right">
            <div className="h-full flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-airflow-blue">Nosso Escritório</h3>
                <p className="text-gray-700 mb-4">
                  Visite nossa sede para discutir seu projeto pessoalmente com nossa equipe de especialistas em refrigeração industrial.
                </p>
                
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.662858559675!2d-48.0644611!3d-15.9853725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bcdb08e8c3999%3A0xf47cb3f8be80cb49!2sQd.%2012%20Cj.%20H%20Lt.%2009%20-%20Setor%20Sul%20Gama%2C%20Bras%C3%ADlia%20-%20DF%2C%2072415-608!5e0!3m2!1spt-BR!2sbr!4v1685894507318!5m2!1spt-BR!2sbr" width="600" height="300" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg shadow-md w-full"></iframe>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                <div className="bg-airflow-gray p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-airflow-blue mb-2">Endereço</h4>
                  <p className="text-gray-700">
                    Quadra 12 conjunto H lote 09<br />
                    Setor Sul Gama DF 72415-608<br />
                    Brasil
                  </p>
                </div>
                
                <div className="bg-airflow-gray p-6 rounded-lg shadow-md px-[5px]">
                  <h4 className="font-bold text-airflow-blue mb-2">Informações de Contato</h4>
                  <p className="text-gray-700">
                    Telefone: +55 (61) 3081-3550<br />
                    <span className="inline-block break-all">Email: airflow.arcondicionado@gmail.com</span><br />
                    Horário: Seg-Sex, 8h - 18h
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Atendimento emergencial 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
