import { useState } from 'react'

function ServiceForm({ onAddService }) {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!titulo || !descricao) return
    
    onAddService({ titulo, descricao })
    setTitulo('')
    setDescricao('')
  }

  return (
    <form className="glass-container" onSubmit={handleSubmit} style={{ marginBottom: '3rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Novo Serviço</h2>
      <div className="form-row">
        <div className="form-group">
          <label>Título</label>
          <input 
            type="text" 
            placeholder="Ex: Consultoria de UX" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Descrição</label>
          <input 
            type="text" 
            placeholder="O que este serviço faz?" 
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <button type="submit" className="button-primary">
          Adicionar
        </button>
      </div>
    </form>
  )
}

export default ServiceForm
