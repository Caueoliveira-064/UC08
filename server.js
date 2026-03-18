const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Inicialização do Banco de Dados Relacional (SQLite)
const db = new sqlite3.Database(':memory:'); // Em memória para teste, use 'dados.db' para salvar em arquivo

db.serialize(() => {
    // Criação da tabela
    db.run(`CREATE TABLE clientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        empresa TEXT,
        email TEXT
    )`);

    // Dados iniciais para teste
    const stmt = db.prepare("INSERT INTO clientes (nome, empresa, email) VALUES (?, ?, ?)");
    stmt.run("Alice Oliveira", "Tech Solutions", "alice@tech.com");
    stmt.run("Bruno Santos", "Global Log", "bruno@global.com");
    stmt.run("Carla Peixoto", "Design Studio", "carla@design.com");
    stmt.finalize();
});

// ROTA: Listagem com Filtro de Busca
app.get('/clientes', (req, res) => {
    const { search } = req.query;

    let sql = "SELECT * FROM clientes";
    let params = [];

    if (search) {
        // Busca parcial (LIKE) em nome, empresa ou email
        sql += " WHERE nome LIKE ? OR empresa LIKE ? OR email LIKE ?";
        const searchTerm = `%${search}%`;
        params = [searchTerm, searchTerm, searchTerm];
    }

    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Backend rodando em http://localhost:${PORT}`);
});