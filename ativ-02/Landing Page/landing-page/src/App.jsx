import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        {/* Futuras seções como Sobre, Serviços e Contato serão adicionadas aqui */}
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Lex Associados. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;