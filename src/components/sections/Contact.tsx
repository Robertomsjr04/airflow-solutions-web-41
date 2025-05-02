
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem Enviada!",
        description: "Obrigado por entrar em contato com a Air Flow. Retornaremos em breve.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Contato</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto reveal">
            Entre em contato com nossa equipe para discutir suas necessidades de refrigeração industrial ou comercial.
          </p>
          <div className="w-20 h-1 bg-airflow-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <div className="bg-airflow-gray p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-airflow-blue">Solicite um Orçamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu Nome"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa *</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Sua Empresa"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos sobre seu projeto ou necessidades..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-airflow-blue hover:bg-airflow-lightBlue text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="reveal-right">
            <div className="h-full flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-airflow-blue">Nosso Escritório</h3>
                <p className="text-gray-700 mb-4">
                  Visite nossa sede para discutir seu projeto pessoalmente com nossa equipe de especialistas.
                </p>
                
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117002.25250279298!2d-46.70201161358946!3d-23.58574398293008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sS%C3%A3o%20Paulo%2C%20SP%2C%20Brazil!5e0!3m2!1sen!2sus!4v1686309058804!5m2!1sen!2sus" 
                    width="600" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md w-full"
                  ></iframe>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                <div className="bg-airflow-gray p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-airflow-blue mb-2">Endereço</h4>
                  <p className="text-gray-700">
                    Av. Industrial, 123<br />
                    São Paulo, SP 04538-133<br />
                    Brasil
                  </p>
                </div>
                
                <div className="bg-airflow-gray p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-airflow-blue mb-2">Informações de Contato</h4>
                  <p className="text-gray-700">
                    Telefone: +55 (11) 5555-1234<br />
                    Email: contato@airflow.com<br />
                    Horário: Seg-Sex, 8h - 18h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
