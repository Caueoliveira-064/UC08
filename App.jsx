import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [clientes, setClientes] = useState([]);
  const [busca, setBusca] = useState('');
  const [carregando, setCarregando] = useState(false);

  // Função para buscar dados da API
  const carregarClientes = async () => {
    setCarregando(true);
    try {
      const response = await fetch(`http://localhost:3000/clientes?search=${busca}`);
      const dados = await response.json();
      setClientes(dados);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setCarregando(false);
    }
  };

  // useEffect: Dispara a busca sempre que o usuário digita algo
  useEffect(() => {
    carregarClientes();
  }, [busca]);

  return (
    <div className="container">
      <header>
        <h1>Gestão de Clientes</h1>
        <p>Evolução do Sistema v2.0</p>
      </header>

      <section className="search-section">
        <input
          type="text"
          placeholder="Buscar por nome, empresa ou e-mail..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="search-input"
        />
      </section>

      <main>
        {carregando ? (
          <p>Carregando clientes...</p>
        ) : (
          <div className="grid">
            {clientes.length > 0 ? (
              clientes.map((cliente) => (
                <div key={cliente.id} className="card">
                  <h3>{cliente.nome}</h3>
                  <p><strong>🏢 Empresa:</strong> {cliente.empresa}</p>
                  <p><strong>📧 E-mail:</strong> {cliente.email}</p>
                </div>
              ))
            ) : (
              <p className="no-results">Nenhum cliente encontrado para "{busca}"</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;