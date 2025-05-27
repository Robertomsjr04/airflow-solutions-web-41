
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import './quote-request-form.css';
import emailjs from 'emailjs-com';
import { trackEvent, trackFormSubmission } from '@/utils/analytics';
import { formatBrazilianPhone, validateBrazilianPhone } from '@/utils/phoneFormatter';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Nome deve ter pelo menos 3 caracteres'
  }),
  email: z.string().email({
    message: 'Email inválido'
  }),
  company: z.string().min(2, {
    message: 'Empresa deve ter pelo menos 2 caracteres'
  }),
  phone: z.string().refine(validateBrazilianPhone, {
    message: 'Telefone inválido. Digite no formato: (11) 99999-9999'
  }),
  service: z.string({
    required_error: 'Selecione um serviço'
  }),
  message: z.string().min(10, {
    message: 'Mensagem deve ter pelo menos 10 caracteres'
  })
});

type FormValues = z.infer<typeof formSchema>;

interface QuoteRequestFormProps {
  onSubmitSuccess?: () => void;
}

// EmailJS configuration - Configurações atualizadas para teste
const EMAILJS_SERVICE_ID = 'default_service';
const EMAILJS_TEMPLATE_ID = 'template_airflow';
const EMAILJS_USER_ID = 'your_user_id_here';

export function QuoteRequestForm({
  onSubmitSuccess
}: QuoteRequestFormProps) {
  const {
    toast
  } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    }
  });
  
  const isSubmitting = form.formState.isSubmitting;
  const errors = form.formState.errors;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formatted = formatBrazilianPhone(inputValue);
    form.setValue('phone', formatted, { shouldValidate: true });
  };

  const sendWhatsAppMessage = (data: FormValues) => {
    const message = `Olá! Gostaria de solicitar um orçamento:

*Nome:* ${data.name}
*Email:* ${data.email}
*Empresa:* ${data.company}
*Telefone:* ${data.phone}
*Serviço:* ${data.service}
*Mensagem:* ${data.message}

Aguardo retorno. Obrigado!`;

    const whatsappUrl = `https://wa.me/5561999124752?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const validateEmailJSConfig = () => {
    if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'default_service') {
      console.warn('EmailJS Service ID não configurado');
      return false;
    }
    if (!EMAILJS_TEMPLATE_ID || EMAILJS_TEMPLATE_ID === 'template_airflow') {
      console.warn('EmailJS Template ID não configurado');
      return false;
    }
    if (!EMAILJS_USER_ID || EMAILJS_USER_ID === 'your_user_id_here') {
      console.warn('EmailJS User ID não configurado');
      return false;
    }
    return true;
  };
  
  const onSubmit = async (data: FormValues) => {
    try {
      console.log('Iniciando envio do formulário:', data);
      
      // Verifica se as credenciais do EmailJS estão configuradas
      const isEmailConfigured = validateEmailJSConfig();
      
      if (!isEmailConfigured) {
        console.log('EmailJS não configurado, usando WhatsApp como alternativa');
        
        toast({
          title: "Redirecionando para WhatsApp",
          description: "Vamos abrir o WhatsApp para você enviar sua mensagem diretamente.",
          variant: "default"
        });
        
        sendWhatsAppMessage(data);
        
        // Track successful form submission
        trackFormSubmission('quote_request_whatsapp', true);
        trackEvent('contact', 'form_submission', 'whatsapp_fallback');
        
        form.reset();
        
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
        
        return;
      }

      // Tenta enviar via EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        phone: data.phone,
        service: data.service,
        message: data.message,
        to_email: 'airflow.arcondicionado@gmail.com'
      };

      console.log('Enviando email via EmailJS:', templateParams);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      // Track successful form submission
      trackFormSubmission('quote_request', true);
      trackEvent('contact', 'form_submission', 'quote_request');

      toast({
        title: "Mensagem Enviada!",
        description: "Agradecemos seu contato. Retornaremos em breve.",
        variant: "default"
      });
      
      form.reset();
      
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      
      // Track failed form submission
      trackFormSubmission('quote_request', false);
      
      // Em caso de erro, oferece alternativa via WhatsApp
      toast({
        title: "Problema no envio",
        description: "Houve um problema no envio. Que tal enviar via WhatsApp?",
        variant: "destructive"
      });
      
      // Aguarda 2 segundos e abre WhatsApp automaticamente
      setTimeout(() => {
        sendWhatsAppMessage(data);
        form.reset();
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      }, 2000);
    }
  };

  return <div className="quote-box">
      <p>Solicite um Orçamento</p>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="user-box">
          <input type="text" id="name" {...form.register('name')} required />
          <label htmlFor="name">Nome Completo *</label>
          {errors.name && <span className="error-message">{errors.name.message}</span>}
        </div>
        
        <div className="grid-container">
          <div className="user-box">
            <input type="email" id="email" {...form.register('email')} required />
            <label htmlFor="email">Email *</label>
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>
          
          <div className="user-box">
            <input 
              type="tel" 
              id="phone" 
              value={form.watch('phone')}
              onChange={handlePhoneChange}
              placeholder="(11) 99999-9999"
              required 
            />
            <label htmlFor="phone">Telefone *</label>
            {errors.phone && <span className="error-message">{errors.phone.message}</span>}
          </div>
        </div>
        
        <div className="user-box">
          <input type="text" id="company" {...form.register('company')} required />
          <label htmlFor="company">Empresa *</label>
          {errors.company && <span className="error-message">{errors.company.message}</span>}
        </div>
        
        <div className="user-box py-[25px]">
          <select id="service" {...form.register('service')} required className="py-[50px]" defaultValue="">
            <option value="" disabled>Selecione um serviço</option>
            <option value="climatizacao">Climatização Industrial</option>
            <option value="manutencao">Manutenção Preventiva</option>
            <option value="projetos">Projetos e Retrofit</option>
            <option value="automacao">Sistemas de Automação</option>
            <option value="infraestrutura">Infraestrutura Complementar</option>
            <option value="pmoc">PMOC</option>
            <option value="dutos">Limpeza de Dutos</option>
          </select>
          <label htmlFor="service">Serviço de Interesse *</label>
          {errors.service && <span className="error-message">{errors.service.message}</span>}
        </div>
        
        <div className="user-box">
          <textarea id="message" rows={4} {...form.register('message')} required></textarea>
          <label htmlFor="message">Mensagem *</label>
          {errors.message && <span className="error-message">{errors.message.message}</span>}
        </div>
        
        <button type="submit" disabled={isSubmitting}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
        </button>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 mb-2">Ou envie diretamente via WhatsApp:</p>
          <WhatsAppButton 
            message="Olá! Gostaria de solicitar um orçamento para seus serviços."
            className="w-full"
          >
            Enviar via WhatsApp
          </WhatsAppButton>
        </div>
      </form>
    </div>;
}
