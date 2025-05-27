
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';
import { trackEvent, trackFormSubmission } from '@/utils/analytics';
import { formatBrazilianPhone, validateBrazilianPhone } from '@/utils/phoneFormatter';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }).max(100, { message: 'Nome deve ter no máximo 100 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }).max(255, { message: 'Email deve ter no máximo 255 caracteres' }),
  company: z.string().min(2, { message: 'Empresa deve ter pelo menos 2 caracteres' }).max(150, { message: 'Empresa deve ter no máximo 150 caracteres' }),
  phone: z.string().refine(validateBrazilianPhone, { message: 'Telefone inválido. Digite no formato: (11) 99999-9999' }),
  service: z.string({ required_error: 'Selecione um serviço' }),
  message: z.string().min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' }).max(1000, { message: 'Mensagem deve ter no máximo 1000 caracteres' }),
});

type FormValues = z.infer<typeof formSchema>;

interface EnhancedFormProps {
  onSubmitSuccess?: () => void;
}

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_airflow';
const EMAILJS_TEMPLATE_ID = 'template_quote_request';
const EMAILJS_USER_ID = 'wvgkuZY_VUB081QOV';

export function EnhancedForm({ onSubmitSuccess }: EnhancedFormProps) {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
    },
  });
  
  const isSubmitting = form.formState.isSubmitting;

  const handlePhoneChange = (value: string) => {
    const formatted = formatBrazilianPhone(value);
    form.setValue('phone', formatted, { shouldValidate: true });
  };

  const validateForm = (data: FormValues): boolean => {
    if (!data.name.trim() || !data.email.trim() || !data.company.trim() || !data.phone.trim() || !data.service || !data.message.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return false;
    }

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
      if (!validateForm(data)) {
        return;
      }

      console.log('Iniciando envio de email (enhanced form)...', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        userId: EMAILJS_USER_ID
      });

      const templateParams = {
        from_name: data.name.trim(),
        from_email: data.email.trim(),
        company: data.company.trim(),
        phone: data.phone,
        service: data.service,
        message: data.message.trim(),
        to_email: 'airflow.arcondicionado@gmail.com'
      };

      console.log('Parâmetros do template (enhanced):', templateParams);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      console.log('Resposta do EmailJS (enhanced):', response);
      
      trackFormSubmission('enhanced_form', true);
      trackEvent('contact', 'form_submission', 'enhanced_form');
      
      toast({
        title: "Mensagem Enviada!",
        description: "Agradecemos seu contato. Retornaremos em breve.",
        variant: "default",
      });
      
      form.reset();
      
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error: any) {
      console.error("Erro detalhado ao enviar email (enhanced):", error);
      trackFormSubmission('enhanced_form', false);
      
      let errorMessage = "Ocorreu um erro ao enviar sua mensagem. Tente novamente.";
      
      if (error?.status === 400) {
        errorMessage = "Dados inválidos. Verifique as informações e tente novamente.";
      } else if (error?.status === 401) {
        errorMessage = "Erro de autenticação. Tente novamente em alguns minutos.";
      } else if (error?.status === 500) {
        errorMessage = "Erro interno do servidor. Tente novamente mais tarde.";
      } else if (error?.message?.includes('network') || error?.message?.includes('fetch')) {
        errorMessage = "Erro de conexão. Verifique sua internet e tente novamente.";
      }

      toast({
        title: "Erro ao enviar",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo *</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Seu nome" 
                  {...field} 
                  className="cursor-text focus:ring-2 focus:ring-airflow-blue focus:border-airflow-blue" 
                  aria-required="true"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="seu@email.com" 
                    {...field} 
                    className="cursor-text focus:ring-2 focus:ring-airflow-blue focus:border-airflow-blue" 
                    aria-required="true"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="(00) 00000-0000" 
                    value={field.value}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className="cursor-text focus:ring-2 focus:ring-airflow-blue focus:border-airflow-blue" 
                    aria-required="true"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Empresa *</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Sua empresa" 
                  {...field} 
                  className="cursor-text focus:ring-2 focus:ring-airflow-blue focus:border-airflow-blue" 
                  aria-required="true"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Serviço de Interesse *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="cursor-pointer focus:ring-2 focus:ring-airflow-blue focus:border-airflow-blue">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="pmoc" className="cursor-pointer">PMOC</SelectItem>
                  <SelectItem value="projetos" className="cursor-pointer">Projeto e Instalação de AVAC</SelectItem>
                  <SelectItem value="retrofit" className="cursor-pointer">Retrofit de Sistema</SelectItem>
                  <SelectItem value="limpeza" className="cursor-pointer">Limpeza de Dutos e Trocadores de Calor</SelectItem>
                  <SelectItem value="consultoria" className="cursor-pointer">Consultoria Técnica</SelectItem>
                  <SelectItem value="manutencao" className="cursor-pointer">Manutenção Mecânica</SelectItem>
                  <SelectItem value="outro" className="cursor-pointer">Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Conte-nos sobre seu projeto ou necessidades..." 
                  className="min-h-[150px] cursor-text resize-none focus:ring-2 focus:ring-airflow-blue focus:border-airflow-blue"
                  {...field}
                  aria-required="true"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-airflow-blue hover:bg-airflow-lightBlue text-white cursor-pointer transition-all duration-200 focus:ring-2 focus:ring-airflow-blue focus:ring-offset-2"
          disabled={isSubmitting}
          aria-label={isSubmitting ? 'Enviando mensagem...' : 'Enviar mensagem'}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </form>
    </Form>
  );
}
