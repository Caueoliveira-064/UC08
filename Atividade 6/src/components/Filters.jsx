function Filters({ searchTerm, setSearchTerm }) {
  return (
    <div className="glass-container" style={{ padding: '1.5rem', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <input 
          type="text" 
          placeholder="Pesquisar serviços..." 
          style={{ width: '100%' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <select>
        <option value="todos">Todos os Status</option>
        <option value="ativo">Ativo</option>
        <option value="pendente">Pendente</option>
      </select>
    </div>
  )
}

export default Filters
