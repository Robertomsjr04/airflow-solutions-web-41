
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SectionDivider } from '@/components/ui/section-divider';
import { setupScrollAnimation } from '@/utils/scrollAnimation';

const TermsOfService = () => {
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
              Termos de Serviço
            </h1>
            <p className="text-xl max-w-3xl reveal">
              Condições para utilização dos nossos serviços
            </p>
          </div>
        </div>
        
        <SectionDivider />
        
        <section className="py-16">
          <div className="container">
            <div className="prose prose-lg max-w-4xl mx-auto">
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao contratar ou utilizar os serviços da Air Flow, você concorda com estes Termos de Serviço. 
                Por favor, leia-os cuidadosamente antes de utilizar nossos serviços.
              </p>
              
              <h2>2. Descrição dos Serviços</h2>
              <p>
                A Air Flow oferece serviços especializados em instalação e manutenção de sistemas de refrigeração industrial e comercial, 
                incluindo climatização, projetos, automação, infraestrutura complementar e tratamento de ar. 
                A descrição detalhada de cada serviço está disponível em nosso site ou mediante consulta direta à nossa equipe.
              </p>
              
              <h2>3. Orçamentos e Contratos</h2>
              <p>
                Todos os orçamentos fornecidos pela Air Flow têm validade específica informada no documento. 
                A contratação dos serviços será formalizada mediante aprovação do orçamento e assinatura de contrato específico, 
                quando aplicável, detalhando o escopo dos trabalhos, prazos, condições técnicas e comerciais.
              </p>
              
              <h2>4. Garantias e Responsabilidades</h2>
              <p>
                Os serviços prestados pela Air Flow possuem garantia conforme estabelecido em contrato e de acordo com a legislação vigente.
                A Air Flow responsabiliza-se pela qualidade técnica dos serviços prestados, dentro das especificações acordadas.
              </p>
              
              <h3>Limitações de Responsabilidade</h3>
              <p>A Air Flow não se responsabiliza por:</p>
              <ul>
                <li>Danos causados por uso inadequado dos equipamentos pelo cliente;</li>
                <li>Intervenções realizadas por terceiros não autorizados;</li>
                <li>Eventos de força maior ou caso fortuito.</li>
              </ul>
              
              <h2>5. Pagamento</h2>
              <p>
                Os valores, formas e condições de pagamento serão detalhados no orçamento aprovado e/ou contrato.
                Em caso de atraso no pagamento, poderão incidir juros e correção monetária conforme legislação vigente.
              </p>
              
              <h2>6. Prazos de Execução</h2>
              <p>
                Os prazos para execução dos serviços serão estabelecidos no contrato, podendo ser revistos mediante acordo entre as partes 
                em caso de imprevistos técnicos ou condições adversas que impeçam a execução conforme programado.
              </p>
              
              <h2>7. Rescisão</h2>
              <p>
                O contrato poderá ser rescindido por qualquer das partes conforme condições estabelecidas no instrumento contratual.
                A rescisão antecipada pode implicar em custos adicionais conforme previsto em contrato.
              </p>
              
              <h2>8. Alterações nos Termos</h2>
              <p>
                A Air Flow reserva-se o direito de modificar estes termos a qualquer momento, sendo as alterações informadas aos clientes 
                e disponibilizadas em nosso site.
              </p>
              
              <h2>9. Lei Aplicável</h2>
              <p>
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa relacionada aos serviços prestados pela Air Flow 
                será resolvida nos tribunais do Brasil.
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

export default TermsOfService;
