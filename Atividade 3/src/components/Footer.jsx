function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h3>Oliveira e Mender advocacia</h3>
                    <p>Excelencia em advocacia e melhor atendimento para você.</p>
                </div>
                <div className="footer-col">
                    <h4>Areas de atuação</h4>
                    <ul>
                        <li>Direito civil</li>
                        <li>Direito trabalhista</li>
                        <li>Direito Empresarial</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contatos:</h4>
                    <p>Email: email@email.com</p>
                    <p>Telefone: 61 999999999</p>
                    <p>Endereço: Brasília</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Neves Advocacia. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;