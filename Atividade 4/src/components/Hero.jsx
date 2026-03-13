import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1596431110903-f326588258e7?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary text-accent px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              O futuro da mobilidade em Brasília
            </span>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
              Explore a Capital com <span className="text-primary italic">Liberdade</span>.
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-lg">
              Alugue patinetes elétricos premium e descubra Brasília de um jeito novo, sustentável e sem trânsito.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#preços" className="btn-primary text-lg px-10 py-4">
                Agendar Agora
                <ArrowRight size={20} />
              </a>
              <a href="#locais" className="bg-white/20 backdrop-blur-lg border border-white/30 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/40 transition-all shadow-lg">
                Ver Locais
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="grid grid-cols-3 gap-8 mt-20"
          >
            {[
              { icon: <Zap size={24} />, label: 'Mais Rápido', sub: 'Fuja do trânsito' },
              { icon: <Shield size={24} />, label: 'Seguro', sub: 'Manutenção 24/7' },
              { icon: <Target size={24} />, label: 'Fácil', sub: 'Via Aplicativo' }
            ].map((item, i) => (
              <div key={i} className="text-white">
                <div className="text-primary mb-2">{item.icon}</div>
                <div className="font-bold">{item.label}</div>
                <div className="text-sm text-white/60">{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hero Animation Element */}
      <motion.div 
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute right-[10%] bottom-[20%] hidden lg:block"
      >
        <div className="relative">
          <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1558231010-09c3722e1189?q=80&w=1543&auto=format&fit=crop" 
            alt="Patinete Elétrico" 
            className="w-[400px] h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white/10"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
