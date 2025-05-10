
import React from 'react';
import { Button } from '@/components/ui/button';

const FinalCta = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">
            <span className="text-neon-green">⏳</span> Última chamada:
          </h2>
          
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Você pode seguir no caos... ou investir o valor de um almoço pra mudar sua rotina de verdade.
          </p>
          
          <Button className="btn-neon text-2xl px-10 py-8 text-black animate-pulse">
            👉 QUERO COMEÇAR AGORA - SÓ R$37
          </Button>
          
          <p className="mt-6 text-gray-400">
            Acesso imediato após o pagamento • Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
