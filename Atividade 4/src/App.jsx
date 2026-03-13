import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import Locations from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      {/* How it Works / About Section */}
      <section id="como-funciona" className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl mb-4">Como Funciona</h2>
            <p className="text-text-muted">Simples, rápido e 100% digital. Comece a rodar em menos de 2 minutos.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { step: '01', title: 'Localize e Reserve', desc: 'Use nosso site ou app para encontrar o patinete mais próximo de você.' },
              { step: '02', title: 'Agende o Tempo', desc: 'Escolha quanto tempo quer rodar e confirme o agendamento.' },
              { step: '03', title: 'Desbloqueie e Vá', desc: 'Chegue ao local, escaneie o QR Code e aproveite a capital.' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-8xl font-black text-primary/10 absolute -top-10 left-1/2 -translate-x-1/2 -z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Locations />
      <Booking />
      <Footer />
    </main>
  );
}

export default App;
