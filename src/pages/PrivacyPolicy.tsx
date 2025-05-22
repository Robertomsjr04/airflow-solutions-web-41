
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SectionDivider } from '@/components/ui/section-divider';
import { setupScrollAnimation } from '@/utils/scrollAnimation';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const cleanup = setupScrollAnimation();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-airflow-blue text-white">
          <div className="container py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">
              Política de Privacidade
            </h1>
            <p className="text-xl max-w-3xl reveal">
              Informações sobre como tratamos e protegemos seus dados
            </p>
          </div>
        </div>
        
        <SectionDivider />
        
        <section className="py-16">
          <div className="container">
            <div className="prose prose-lg max-w-4xl mx-auto">
              <h2>1. Introdução</h2>
              <p>
                A Air Flow está comprometida em proteger a sua privacidade. Esta Política de Privacidade descreve como coletamos, 
                utilizamos, divulgamos, transferimos e armazenamos as suas informações. 
                Por favor, reserve alguns minutos para se familiarizar com as nossas práticas de privacidade.
              </p>
              
              <h2>2. Coleta e Uso de Informações Pessoais</h2>
              <p>
                Informações pessoais são dados que podem ser usados para identificá-lo ou contatá-lo de forma única.
                Você pode ser solicitado a fornecer suas informações pessoais quando entrar em contato com a Air Flow.
                A Air Flow pode usar essas informações pessoais de acordo com esta Política de Privacidade.
              </p>
              
              <h3>Quais informações pessoais coletamos</h3>
              <ul>
                <li>Quando você entra em contato conosco, podemos coletar: nome, endereço de e-mail, número de telefone e endereço postal.</li>
                <li>Em caso de empresas, podemos coletar informações adicionais como nome da empresa, setor e cargo.</li>
              </ul>
              
              <h3>Como usamos suas informações pessoais</h3>
              <p>As informações pessoais que coletamos nos permitem:</p>
              <ul>
                <li>Atender às suas solicitações de serviços e suporte.</li>
                <li>Enviar comunicações importantes, como mudanças em nossos termos e políticas.</li>
                <li>Com seu consentimento, enviar informações sobre produtos, serviços e eventos que possam ser do seu interesse.</li>
              </ul>
              
              <h2>3. Armazenamento de Dados</h2>
              <p>
                Todas as informações pessoais que você fornece são armazenadas em sistemas com medidas de segurança adequadas para 
                proteger contra acesso, alteração ou divulgação não autorizados.
              </p>
              
              <h2>4. Compartilhamento de Dados</h2>
              <p>
                A Air Flow não compartilha informações pessoais com terceiros, exceto conforme descrito nesta Política de Privacidade.
                Podemos compartilhar informações com prestadores de serviços que nos auxiliam em nossas operações comerciais, desde que 
                esses terceiros concordem em manter essas informações confidenciais.
              </p>
              
              <h2>5. Direitos do Usuário</h2>
              <p>
                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. 
                Se desejar exercer esses direitos ou tiver dúvidas sobre nossa Política de Privacidade, 
                entre em contato conosco através do e-mail: airflow.arcondicionado@gmail.com
              </p>
              
              <h2>6. Alterações a esta Política de Privacidade</h2>
              <p>
                A Air Flow pode atualizar esta Política de Privacidade periodicamente. 
                Quando fizermos alterações, atualizaremos a data da "última atualização" nesta página.
              </p>
              
              <p className="mt-8">Última atualização: 22 de maio de 2025</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
