
import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWordPressExport, exportSection } from '@/utils/wordpressExport';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Footer = () => {
  const handleExportToWordPress = () => {
    generateWordPressExport();
  };
  
  const handleExportSection = (sectionName: string) => {
    exportSection(sectionName);
  };

  return (
    <footer className="bg-black text-white pt-8 pb-6 border-t border-white/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-bold text-neon-green">Método da Gaveta</p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos os direitos reservados</p>
          </div>
          
          <div className="flex space-x-4 text-sm text-gray-400">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleExportToWordPress}
              className="flex items-center gap-2 text-neon-green border-neon-green hover:bg-neon-green hover:text-black"
            >
              <Download className="h-4 w-4" />
              Exportar Página Completa
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2 text-neon-green border-neon-green hover:bg-neon-green hover:text-black"
                >
                  <FileText className="h-4 w-4" />
                  Exportar Seções
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {['Hero', 'Problem', 'Solution', 'Transformation', 
                  'Audience', 'Authority', 'Offer', 'Faq', 'FinalCta'].map((section) => (
                  <DropdownMenuItem 
                    key={section}
                    onClick={() => handleExportSection(section)}
                  >
                    {section}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
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
