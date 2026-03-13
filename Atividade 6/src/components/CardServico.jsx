function CardServico({ id, titulo, descricao, status, onDelete }) {
  return (
    <div className="card">
      <div className="badges">
        <span className={`badge ${status === 'ativo' ? 'badge-active' : ''}`}>
          {status}
        </span>
      </div>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem', justifyContent: 'space-between' }}>
        <button className="button-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
          Detalhes
        </button>
        <button 
          className="button-danger"
          onClick={() => onDelete(id)}
        >
          Excluir
        </button>
      </div>
    </div>
  )
}

export default CardServico