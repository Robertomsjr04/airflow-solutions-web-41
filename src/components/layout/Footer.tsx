
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import BackToTop from '@/components/ui/back-to-top';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="dark-blue-bg text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Air Flow</h3>
            <p className="mb-4">
              Especializada na instalação e manutenção de sistemas de refrigeração industrial e comercial desde 1990.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/share/12HgyHm552r/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/airflowbsb?igsh=MWw5YjBkanptamY0NQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/airflow" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-gray-300 transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-gray-300 transition-colors">Setores</a>
              </li>
              <li>
                <a href="#differentials" className="hover:text-gray-300 transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gray-300 transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300 transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">Climatização e Refrigeração Industrial (HVAC)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">Projetos, Retrofit e Expansões</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">Sistemas de Automação e Monitoramento</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">Infraestrutura Complementar</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">Consultoria Técnica</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">Dutos e Tratamento de Ar</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contate-nos</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>Av. Industrial, 123<br />São Paulo, SP 04538-133<br />Brasil</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>+55 (61) 3081-3550</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="break-all">airflow.arcondicionado@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Centered Back to Top Button */}
        
        
        <div className="border-t border-white/20 mt-6 pt-6 text-sm text-center md:text-left md:flex md:justify-between md:items-center">
          <p>&copy; {currentYear} Air Flow. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="/politica-de-privacidade" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
            <a href="/termos-de-servico" className="hover:text-gray-300 transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
