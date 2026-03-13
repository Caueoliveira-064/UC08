function Header() {
  return (
    <header className="header glass-container" style={{ padding: '1.5rem 2.5rem', borderRadius: '1rem', marginBottom: '2.5rem' }}>
      <h1>Dashboard de Serviços</h1>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Serviços</a>
        <a href="#">Relatórios</a>
      </nav>
    </header>
  )
}

export default Header