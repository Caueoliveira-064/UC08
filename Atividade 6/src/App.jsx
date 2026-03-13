import { useState } from 'react'
import Header from "./components/Header"
import Servicos from "./sections/Servicos"
import ServiceForm from "./components/ServiceForm"
import Filters from "./components/Filters"

function App() {
  const [services, setServices] = useState([
    {
      id: 1,
      titulo: "Consultoria UX",
      descricao: "Melhoramos a experiência do seu usuário.",
      status: "ativo"
    },
    {
      id: 2,
      titulo: "Desenvolvimento Web",
      descricao: "Aplicações de alto desempenho com React.",
      status: "ativo"
    },
    {
      id: 3,
      titulo: "Gestão de Tráfego",
      descricao: "Aumente suas vendas com anúncios.",
      status: "pendente"
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const handleAddService = (newService) => {
    const serviceWithId = {
      ...newService,
      id: Date.now(),
      status: "ativo"
    }
    setServices([...services, serviceWithId])
  }

  const handleDeleteService = (id) => {
    setServices(services.filter(s => s.id !== id))
  }

  const filteredServices = services.filter(s => 
    s.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.descricao.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main>
      <Header />
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        <aside>
          <ServiceForm onAddService={handleAddService} />
        </aside>
        
        <section>
          <Filters searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Servicos 
            services={filteredServices} 
            onDelete={handleDeleteService} 
          />
        </section>
      </div>
    </main>
  )
}

export default App