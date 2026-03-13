import React, { useState, useEffect } from 'react';
import { Power, Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg text-accent">
            <Power size={24} strokeWidth={3} />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-text' : 'md:text-white text-text'}`}>
            Brasília<span className="text-primary">Ecos</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Como funciona', 'Locais', 'Preços'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-text' : 'text-white'}`}
              style={{ textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              {item}
            </a>
          ))}
          <a href="#preços" className="btn-primary">
            <Calendar size={18} />
            Agendar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-all ${isScrolled ? 'text-text hover:bg-black/5' : 'text-white bg-black/20 hover:bg-black/40 backdrop-blur-md'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {['Como funciona', 'Locais', 'Preços'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-lg font-medium text-text hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="#preços" className="btn-primary justify-center w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Calendar size={18} />
                Agendar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
