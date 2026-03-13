function CardDepoimento({nome, texto}) {
    return (
        <div className="card-depoimento">
            <p className="texto">"{texto}"</p>
            <h4 className="nome"> - {nome}</h4>
        </div>
    );
};

export default CardDepoimento;