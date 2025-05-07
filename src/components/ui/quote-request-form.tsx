import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import './quote-request-form.css';
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
  phone: z.string().min(10, {
    message: 'Telefone inválido'
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
  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
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
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive"
      });
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
            <input type="tel" id="phone" {...form.register('phone')} required />
            <label htmlFor="phone">Telefone *</label>
            {errors.phone && <span className="error-message">{errors.phone.message}</span>}
          </div>
        </div>
        
        <div className="user-box">
          <input type="text" id="company" {...form.register('company')} required />
          <label htmlFor="company">Empresa *</label>
          {errors.company && <span className="error-message">{errors.company.message}</span>}
        </div>
        
        <div className="user-box py-[20px]">
          <select id="service" required className="py-[50px]">
            <option value="" disabled selected>Selecione um serviço</option>
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
      </form>
    </div>;
}