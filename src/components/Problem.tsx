
import React from 'react';
import { Clock, AlertTriangle, FolderOpen } from 'lucide-react';

const Problem = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-8">
            <span className="text-3xl">😵</span> Você começa o dia cansado e termina com a sensação de não ter feito nada?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <FolderOpen className="w-10 h-10 text-neon-green mb-4 mx-auto" />
              <p>Já tentou Notion, Trello, post-its... e nada resolve.</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <Clock className="w-10 h-10 text-neon-green mb-4 mx-auto" />
              <p>Sua cabeça vive cheia, mas as tarefas não andam.</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <AlertTriangle className="w-10 h-10 text-neon-green mb-4 mx-auto" />
              <p>Você até tenta se organizar, mas o caos sempre volta.</p>
            </div>
          </div>
          
          <div className="bg-neon-green/10 border-l-4 border-neon-green p-4 text-left rounded">
            <p className="flex items-center text-xl font-bold">
              <AlertTriangle className="w-6 h-6 mr-2 text-neon-green" />
              O problema não é você. É a falta de um método prático.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
