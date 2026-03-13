import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Send, Calendar, CheckCircle2 } from 'lucide-react';

const Booking = () => {
  const [duration, setDuration] = useState('1h');
  const [isBooked, setIsBooked] = useState(false);

  const durations = [
    { time: '30min', price: 'R$ 15' },
    { time: '1h', price: 'R$ 25' },
    { time: '2h', price: 'R$ 45' },
    { time: 'Dia Todo', price: 'R$ 80' },
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => setIsBooked(false), 3000);
  };

  return (
    <section id="preços" className="section-padding bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Pronto para a <br/><span className="text-primary italic">Aventura?</span></h2>
            <p className="text-text-muted text-lg mb-8">
              Escolha o tempo ideal para o seu passeio. Sem burocracia, sem chaves. Tudo pelo seu celular.
            </p>

            <div className="space-y-6">
              {[
                'Seguro contra acidentes incluso',
                'Suporte mecânico em toda Brasília',
                'Pausa ilimitada durante o tempo de uso'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-primary/20 text-secondary p-1 rounded-full">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 md:p-10 rounded-[32px] shadow-2xl border border-border relative overflow-hidden"
          >
            {isBooked ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Agendamento Realizado!</h3>
                <p className="text-text-muted">Enviamos os detalhes para o seu e-mail.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleBooking}>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <Calendar className="text-primary" />
                  Agendar Tempo
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {durations.map((d) => (
                    <motion.button
                      key={d.time}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setDuration(d.time)}
                      className={`p-4 rounded-2xl border-2 transition-all text-left relative overflow-hidden ${
                        duration === d.time 
                          ? 'border-primary bg-primary/10 shadow-lg' 
                          : 'border-border hover:border-primary/30 bg-surface'
                      }`}
                    >
                      {duration === d.time && (
                        <motion.div 
                          layoutId="active-check"
                          className="absolute top-2 right-2 text-primary"
                        >
                          <CheckCircle2 size={16} />
                        </motion.div>
                      )}
                      <div className={`text-sm font-medium mb-1 ${duration === d.time ? 'text-primary' : 'text-text-muted'}`}>
                        {d.time}
                      </div>
                      <div className="text-xl font-bold">{d.price}</div>
                    </motion.button>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Seu Nome</label>
                    <input 
                      type="text" 
                      placeholder="Ex: Gabriel Silva" 
                      className="w-full px-5 py-4 bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full py-5 text-lg shadow-xl">
                  Confirmar Agendamento
                  <Send size={20} />
                </button>
                
                <p className="text-center text-xs text-text-muted mt-6 uppercase tracking-widest font-bold">
                  Pagamento via PIX ou Cartão no Local
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
