
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqItems = [
    {
      question: "Preciso de alguma ferramenta específica?",
      answer: "Não. Você pode aplicar com papel, Notion, Trello ou o que preferir. O método é flexível e se adapta às ferramentas que você já usa."
    },
    {
      question: "Funciona mesmo pra quem já tentou de tudo?",
      answer: "Sim! O Método da Gaveta parte da sua realidade, não de fórmulas prontas. Ele foi criado justamente para pessoas que já testaram várias abordagens sem sucesso."
    },
    {
      question: "E se eu não gostar?",
      answer: "Você tem 7 dias para testar. Se não curtir ou sentir que não é para você, é só pedir o reembolso. Sem perguntas, sem burocracia."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria dos alunos percebe mudanças já nos primeiros dias de aplicação. A sensação de clareza é imediata, e a produtividade melhora progressivamente ao longo das semanas."
    },
    {
      question: "Por quanto tempo tenho acesso ao curso?",
      answer: "O acesso é vitalício! Você paga uma vez e tem acesso para sempre, incluindo futuras atualizações do método."
    },
    {
      question: "Preciso ter experiência com métodos de produtividade?",
      answer: "Não! O curso foi desenhado pensando tanto em iniciantes quanto em pessoas que já tentaram outros métodos. Começamos do zero e construímos juntos."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-2">
              <span className="text-neon-green">❓</span> Perguntas Frequentes
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 mb-4 rounded-lg bg-white">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-gray-50 font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
