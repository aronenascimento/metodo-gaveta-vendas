
import React from 'react';

const Authority = () => {
  return (
    <section className="bg-white py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="text-neon-green">👨‍🏫</span> Quem criou o Método da Gaveta?
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="flex-shrink-0">
              {/* In a real implementation, replace with actual creator photo */}
              <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 text-sm">Foto do criador</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Nome do Criador</h3>
              <p className="text-gray-600 mb-4">Profissional criativo e mentor de produtividade leve</p>
              <blockquote className="border-l-4 border-neon-green pl-4 italic">
                "Eu era o cara que tentava fazer tudo e vivia esgotado. Criar esse método salvou minha energia, foco e rotina. Hoje ensino isso pra centenas de outros criativos como eu."
              </blockquote>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="text-neon-green mr-2">💬</span> Depoimentos reais:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">
                  "Em 3 dias aplicando o método da gaveta, parei de me sentir culpado por não dar conta."
                </p>
                <p className="font-bold">André L.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">
                  "Simples, direto e muito eficaz. Finalmente tenho clareza!"
                </p>
                <p className="font-bold">Camila R.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">
                  "Achei que produtividade não era pra mim. Era só falta de um mapa."
                </p>
                <p className="font-bold">Marcos T.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
