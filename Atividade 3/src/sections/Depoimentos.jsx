import CardDepoimento from "../components/CardDepoimento";

function Depoimentos() {
    const listaDepoimentos = [
    {
        nome: "Cleber Matos",
        texto: "Atendimento muito bom, me ajudou a resolver meu problema"
    },
    {
        nome: "Maria Luiza",
        texto: "Rápido atendimento e resolveu meu problema"
    },
    {
        nome: "Marcos Pereira",
        texto: "Equipe qualificada e muito conhecikmento técnico"
    }];

    return (
        <section className="depoimentos">
            <div className="container">
                <h2 className="section-title">O que os nossos clientes dizem</h2>
                <div className="depoimentos-grid">
                    {listaDepoimentos.map((item, index) => (
                        <CardDepoimento
                        key={index}
                        nome={item.nome}
                        texto={item.texto}
                        />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Depoimentos;