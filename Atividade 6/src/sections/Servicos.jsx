import CardServico from "../components/CardServico"

function Servicos({ services, onDelete }) {
  return (
    <section>
      <div className="grid-layout">
        {services.length > 0 ? (
          services.map((servico) => (
            <CardServico
              key={servico.id}
              id={servico.id}
              titulo={servico.titulo}
              descricao={servico.descricao}
              status={servico.status}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className="glass-container" style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            <p>Nenhum serviço encontrado.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Servicos