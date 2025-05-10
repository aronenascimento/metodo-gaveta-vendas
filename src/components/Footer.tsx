
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-6 border-t border-white/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-bold text-neon-green">Método da Gaveta</p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos os direitos reservados</p>
          </div>
          
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-neon-green">Termos de Uso</a>
            <a href="#" className="hover:text-neon-green">Política de Privacidade</a>
            <a href="#" className="hover:text-neon-green">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
