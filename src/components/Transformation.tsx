
import React from 'react';
import { CheckCircle, Calendar, Star } from 'lucide-react';

const Transformation = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="heading-lg mb-2">
            <span className="text-neon-green">✨</span> O que muda quando você aplica o Método da Gaveta:
          </h2>
          <p className="text-gray-600">Resultados reais e imediatos na sua organização</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-12 flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-neon-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Clareza total</h3>
            <p className="text-gray-600">Sobre o que fazer (e o que pode esperar)</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-12 flex items-center mb-4">
              <Star className="w-8 h-8 text-neon-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Menos incêndios</h3>
            <p className="text-gray-600">Mais foco e produtividade no dia a dia</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-12 flex items-center mb-4">
              <Calendar className="w-8 h-8 text-neon-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Tempo livre real</h3>
            <p className="text-gray-600">Na sua agenda e na sua mente</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold">
            <span className="mr-3">Leve.</span>
            <span className="mr-3">Visual.</span>
            <span className="text-neon-green">Produtivo.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
