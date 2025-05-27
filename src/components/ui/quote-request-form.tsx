
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import './quote-request-form.css';
import emailjs from 'emailjs-com';
import { trackEvent, trackFormSubmission } from '@/utils/analytics';
import { formatBrazilianPhone, validateBrazilianPhone } from '@/utils/phoneFormatter';

const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Nome deve ter pelo menos 3 caracteres'
  }).max(100, {
    message: 'Nome deve ter no máximo 100 caracteres'
  }),
  email: z.string().email({
    message: 'Email inválido'
  }).max(255, {
    message: 'Email deve ter no máximo 255 caracteres'
  }),
  company: z.string().min(2, {
    message: 'Empresa deve ter pelo menos 2 caracteres'
  }).max(150, {
    message: 'Empresa deve ter no máximo 150 caracteres'
  }),
  phone: z.string().refine(validateBrazilianPhone, {
    message: 'Telefone inválido. Digite no formato: (11) 99999-9999'
  }),
  service: z.string({
    required_error: 'Selecione um serviço'
  }),
  message: z.string().min(10, {
    message: 'Mensagem deve ter pelo menos 10 caracteres'
  }).max(1000, {
    message: 'Mensagem deve ter no máximo 1000 caracteres'
  })
});

type FormValues = z.infer<typeof formSchema>;

interface QuoteRequestFormProps {
  onSubmitSuccess?: () => void;
}

import { EMAIL_CONFIG, validateEmailJSConfig } from '@/utils/emailConfig';

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

  const validateForm = (data: FormValues): boolean => {
    // Validação adicional para campos obrigatórios
    if (!data.name.trim() || !data.email.trim() || !data.company.trim() || !data.phone.trim() || !data.service || !data.message.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return false;
    }

    // Validação de email mais rigorosa
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };
  
  const onSubmit = async (data: FormValues) => {
    try {
      // Validação prévia
      if (!validateForm(data)) {
        return;
      }

      // Verificar conexão com internet
      if (!navigator.onLine) {
        toast({
          title: "Sem conexão",
          description: "Verifique sua conexão com a internet e tente novamente.",
          variant: "destructive"
        });
        return;
      }

      // Validar configuração
      const configValidation = validateEmailJSConfig();
      if (!configValidation.isValid) {
        console.error('❌ Configuração EmailJS inválida:', configValidation.errors);
        throw new Error('Configuração de email inválida');
      }

      console.log('✅ Iniciando envio de email...', {
        serviceId: EMAIL_CONFIG.SERVICE_ID,
        templateId: EMAIL_CONFIG.TEMPLATE_ID,
        userId: EMAIL_CONFIG.USER_ID,
        timestamp: new Date().toISOString()
      });

      // Map the form values to template parameters
      const templateParams = {
        from_name: data.name.trim(),
        from_email: data.email.trim(),
        company: data.company.trim(),
        phone: data.phone,
        service: data.service,
        message: data.message.trim(),
        to_email: EMAIL_CONFIG.TO_EMAIL,
        reply_to: data.email.trim(),
        timestamp: new Date().toLocaleString('pt-BR')
      };

      console.log('📧 Parâmetros do template:', templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.USER_ID
      );
      
      console.log('✅ Resposta do EmailJS:', response);
      
      if (response.status === 200) {
        // Track successful form submission
        trackFormSubmission('quote_request', true);
        trackEvent('contact', 'form_submission', 'quote_request');

        toast({
          title: "✅ Mensagem Enviada com Sucesso!",
          description: "Recebemos sua solicitação. Nossa equipe entrará em contato em breve.",
          variant: "default"
        });
        
        form.reset();
        
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } else {
        throw new Error(`EmailJS retornou status: ${response.status}`);
      }
    } catch (error: any) {
      console.error("❌ Erro detalhado ao enviar email:", {
        error: error,
        message: error?.message,
        status: error?.status,
        timestamp: new Date().toISOString()
      });
      
      // Track failed form submission
      trackFormSubmission('quote_request', false);
      
      // Tratamento de erro mais específico
      let errorMessage = "Ocorreu um erro ao enviar sua mensagem. Tente novamente.";
      let errorTitle = "Erro ao enviar";
      
      if (error?.status === 400) {
        errorMessage = "Dados inválidos. Verifique as informações e tente novamente.";
        errorTitle = "Dados inválidos";
      } else if (error?.status === 401 || error?.status === 403) {
        errorMessage = "Erro de autenticação do serviço. Tente novamente em alguns minutos.";
        errorTitle = "Erro de autenticação";
      } else if (error?.status === 429) {
        errorMessage = "Muitas tentativas. Aguarde alguns minutos antes de tentar novamente.";
        errorTitle = "Limite de tentativas";
      } else if (error?.status === 500 || error?.status >= 500) {
        errorMessage = "Erro interno do servidor. Tente novamente mais tarde.";
        errorTitle = "Erro do servidor";
      } else if (error?.message?.includes('network') || error?.message?.includes('fetch') || !navigator.onLine) {
        errorMessage = "Erro de conexão. Verifique sua internet e tente novamente.";
        errorTitle = "Erro de conexão";
      } else if (error?.message?.includes('timeout')) {
        errorMessage = "Tempo limite excedido. Tente novamente.";
        errorTitle = "Timeout";
      }

      toast({
        title: errorTitle,
        description: errorMessage,
        variant: "destructive"
      });
    }
  };

  return <div className="quote-box">
      <p>Solicite um Orçamento</p>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <div className="user-box">
          <input 
            type="text" 
            id="name" 
            {...form.register('name')} 
            required 
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
          />
          <label htmlFor="name">Nome Completo *</label>
          {errors.name && <span id="name-error" className="error-message" role="alert">{errors.name.message}</span>}
        </div>
        
        <div className="grid-container">
          <div className="user-box">
            <input 
              type="email" 
              id="email" 
              {...form.register('email')} 
              required 
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
            />
            <label htmlFor="email">Email *</label>
            {errors.email && <span id="email-error" className="error-message" role="alert">{errors.email.message}</span>}
          </div>
          
          <div className="user-box">
            <input 
              type="tel" 
              id="phone" 
              value={form.watch('phone')}
              onChange={handlePhoneChange}
              required 
              aria-describedby={errors.phone ? "phone-error" : undefined}
              aria-invalid={!!errors.phone}
            />
            <label htmlFor="phone">Telefone *</label>
            {errors.phone && <span id="phone-error" className="error-message" role="alert">{errors.phone.message}</span>}
          </div>
        </div>
        
        <div className="user-box">
          <input 
            type="text" 
            id="company" 
            {...form.register('company')} 
            required 
            aria-describedby={errors.company ? "company-error" : undefined}
            aria-invalid={!!errors.company}
          />
          <label htmlFor="company">Empresa *</label>
          {errors.company && <span id="company-error" className="error-message" role="alert">{errors.company.message}</span>}
        </div>
        
        <div className="user-box py-[25px]">
          <select 
            id="service" 
            {...form.register('service')} 
            required 
            className="py-[50px]" 
            defaultValue=""
            aria-describedby={errors.service ? "service-error" : undefined}
            aria-invalid={!!errors.service}
          >
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
          {errors.service && <span id="service-error" className="error-message" role="alert">{errors.service.message}</span>}
        </div>
        
        <div className="user-box">
          <textarea 
            id="message" 
            rows={4} 
            {...form.register('message')} 
            required
            aria-describedby={errors.message ? "message-error" : undefined}
            aria-invalid={!!errors.message}
          />
          <label htmlFor="message">Mensagem *</label>
          {errors.message && <span id="message-error" className="error-message" role="alert">{errors.message.message}</span>}
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          aria-label={isSubmitting ? 'Enviando solicitação...' : 'Enviar solicitação de orçamento'}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
        </button>
      </form>
    </div>;
}
