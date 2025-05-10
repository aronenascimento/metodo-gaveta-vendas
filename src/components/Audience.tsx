
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const Audience = () => {
  return (
    <section className="py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neon-green/10 p-8 rounded-lg">
            <h2 className="heading-md mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 text-neon-green mr-2" />
              É PRA VOCÊ SE:
            </h2>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-neon-green mr-2 mt-1 flex-shrink-0" />
                <span>Tem múltiplos projetos ou clientes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-neon-green mr-2 mt-1 flex-shrink-0" />
                <span>Quer se organizar sem se prender em sistemas rígidos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-neon-green mr-2 mt-1 flex-shrink-0" />
                <span>Busca produtividade leve e sustentável</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-neon-green mr-2 mt-1 flex-shrink-0" />
                <span>Está cansado de testar várias ferramentas sem resultados</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-black text-white p-8 rounded-lg">
            <h2 className="heading-md mb-6 flex items-center">
              <XCircle className="w-8 h-8 text-neon-green mr-2" />
              NÃO É PRA VOCÊ SE:
            </h2>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <XCircle className="w-6 h-6 text-neon-green mr-2 mt-1 flex-shrink-0" />
                <span>Quer milagre sem aplicar nada</span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-6 h-6 text-neon-green mr-2 mt-1 flex-shrink-0" />
                <span>Acredita que produtividade depende de ferramentas caras</span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-6 h-6 text-neon-green mr-2 mt-1 flex-shrink-0" />
                <span>Prefere continuar no caos do que investir R$37</span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-6 h-6 text-neon-green mr-2 mt-1 flex-shrink-0" />
                <span>Busca uma solução complexa que exige horas de estudo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
