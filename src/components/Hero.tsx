
import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mockupImage from '/src/assets/mockup.png';

const Hero = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-block mb-2">
              <div className="flex items-center bg-neon-green/10 text-black px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Método da Gaveta</span>
              </div>
            </div>
            
            <h1 className="heading-xl">
              <span className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-neon-green w-8 h-8" />
                <span>🗂️ Organize todos os seus projetos e tarefas</span>
              </span> 
              <span className="highlight">em menos de 1 hora por semana</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium">
              Com um método visual, simples e feito pra quem odeia rotina travada.
            </p>
            
            <p className="text-gray-600">
              Mesmo que você viva apagando incêndios, se sinta perdido e já tenha testado mil ferramentas.
            </p>
            
            <div className="pt-4">
              <Button className="btn-neon text-xl px-8 py-6">
                👉 QUERO COMEÇAR AGORA - SÓ R$37
              </Button>
            </div>
          </div>
          
          <div className="flex-1 max-w-md">
            <div className="relative">
              {/* In a real implementation, replace with actual mockup image */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 aspect-video flex items-center justify-center">
                <span className="text-gray-500 text-sm">Mockup da área de membros</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-neon-green text-black px-4 py-2 rounded-full font-bold">
                Acesso imediato!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
