
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Solution = () => {
  return (
    <section className="bg-white py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="text-neon-green">🎯</span> Conheça o Curso Rápido: <span className="highlight"><br />Produtividade de Verdade com o Método da Gaveta</span>
            </h2>
            <p className="text-xl">Um mini curso direto ao ponto, com:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">O que você aprende</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-neon-green mr-2 flex-shrink-0" />
                  <span>5 aulas de 15 a 20 minutos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-neon-green mr-2 flex-shrink-0" />
                  <span>Exercícios práticos e aplicáveis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-neon-green mr-2 flex-shrink-0" />
                  <span>Método flexível (papel, Notion, Trello...)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">O que você recebe</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-neon-green mr-2 flex-shrink-0" />
                  <span>Acesso vitalício</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-neon-green mr-2 flex-shrink-0" />
                  <span>Templates prontos para usar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-neon-green mr-2 flex-shrink-0" />
                  <span>Tudo isso por apenas <strong>R$37</strong></span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="btn-neon text-xl">
              👉 QUERO ACESSAR AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
