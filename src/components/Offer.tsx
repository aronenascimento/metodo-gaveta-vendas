
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Offer = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="text-neon-green">🎁</span> Tudo isso por apenas <span className="text-neon-green">R$37</span>
            </h2>
            <p className="text-xl">Acesso vitalício. Garantia de 7 dias. Zero riscos.</p>
          </div>
          
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm mb-12">
            <h3 className="text-2xl font-bold mb-6 text-neon-green">Você leva:</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-neon-green mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold">Curso completo com 5 aulas práticas</span>
                  <p className="text-gray-300">Direto ao ponto, sem enrolação</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-neon-green mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold">Exercícios guiados</span>
                  <p className="text-gray-300">Para implementar o método no seu dia a dia</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-neon-green mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold">Método flexível para sua realidade</span>
                  <p className="text-gray-300">Adaptável ao seu estilo e ferramentas</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-neon-green mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-bold">Acesso à comunidade de suporte</span>
                  <p className="text-gray-300">Para tirar dúvidas e compartilhar experiências</p>
                </div>
              </li>
            </ul>
            
            <div className="bg-neon-green/20 p-4 rounded-lg">
              <p className="font-bold flex items-center">
                <span className="text-neon-green mr-2">💸</span>
                Pagamento único. Sem mensalidades.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-6 flex items-center bg-white text-black px-4 py-2 rounded-full">
              <span className="font-bold">Garantia de 7 dias ou seu dinheiro de volta</span>
            </div>
            
            <Button className="btn-neon text-xl px-8 py-6 text-black">
              👉 QUERO ORGANIZAR MINHA VIDA AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
