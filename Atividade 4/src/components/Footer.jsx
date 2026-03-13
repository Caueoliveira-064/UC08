import React from 'react';
import { Power, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-white py-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg text-accent">
                <Power size={24} strokeWidth={3} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Brasília<span className="text-primary">Ecos</span>
              </span>
            </div>
            <p className="text-white/60 max-w-sm mb-8">
              A maior rede de patinetes elétricos da capital federal. Transformando a mobilidade urbana com sustentabilidade e estilo.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-accent transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#locais" className="hover:text-primary transition-colors">Melhores Locais</a></li>
              <li><a href="#preços" className="hover:text-primary transition-colors">Planos e Preços</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Agendar Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Suporte</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                contato@brasiliaecos.com.br
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                (61) 9999-9999
              </li>
              <li className="pt-4 text-xs italic">
                Brasília-DF, Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between gap-4 text-sm text-white/40">
          <p>© 2026 Brasília Ecos. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
