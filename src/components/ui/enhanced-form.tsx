
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

const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  company: z.string().min(2, { message: 'Empresa deve ter pelo menos 2 caracteres' }),
  phone: z.string().min(10, { message: 'Telefone inválido' }),
  service: z.string({ required_error: 'Selecione um serviço' }),
  message: z.string().min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' }),
});

type FormValues = z.infer<typeof formSchema>;

interface EnhancedFormProps {
  onSubmitSuccess?: () => void;
}

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

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Mensagem Enviada!",
        description: "Agradecemos seu contato. Retornaremos em breve.",
        variant: "default",
      });
      
      form.reset();
      
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo *</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" {...field} />
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
                  <Input placeholder="seu@email.com" {...field} />
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
                  <Input placeholder="(00) 00000-0000" {...field} />
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
                <Input placeholder="Sua empresa" {...field} />
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
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="pmoc">PMOC</SelectItem>
                  <SelectItem value="projetos">Projeto e Instalação de AVAC</SelectItem>
                  <SelectItem value="retrofit">Retrofit de Sistema</SelectItem>
                  <SelectItem value="limpeza">Limpeza de Dutos e Trocadores de Calor</SelectItem>
                  <SelectItem value="consultoria">Consultoria Técnica</SelectItem>
                  <SelectItem value="manutencao">Manutenção Mecânica</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
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
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-airflow-blue hover:bg-airflow-lightBlue text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </form>
    </Form>
  );
}
