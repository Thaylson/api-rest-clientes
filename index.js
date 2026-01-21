const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

// Caminho do "banco"
const dbPath = path.join(__dirname, 'data.json');

// Função para ler o banco
function readDB() {
  const data = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data);
}

// Função para escrever no banco
function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

/* =====================
   GET
   ===================== */

// Listar clientes
app.get('/clientes', (req, res) => {
  const db = readDB();
  res.json(db.clientes);
});

// Buscar cliente por ID
app.get('/clientes/:id', (req, res) => {
  const db = readDB();
  const id = Number(req.params.id);

  const cliente = db.clientes.find(c => c.id === id);

  if (!cliente) {
    return res.status(404).json({ error: 'Cliente não encontrado' });
  }

  res.json(cliente);
});



//POST

// Adicionar novo cliente
app.post('/clientes', (req, res) => {
    const db = readDB();
    const { nome, email, idade } = req.body;

    if (!nome || !email || !idade) {
      return res.status(400).json({ error: 'Dados imcompletos' });
    }

    const novoCliente = {
      id: db.clientes.length > 0 ? Math.max(...db.clientes.map(c => c.id)) + 1 : 1,
      nome,
      email,
      idade
    };

    db.clientes.push(novoCliente);
    writeDB(db);

    res.status(201).json(novoCliente);
  });



//PUT

// Atualizar cliente por ID
app.put('/clientes/:id', (req, res) => {
  const db = readDB();
  const id = Number(req.params.id);
  const { nome, email, idade } = req.body;

  const clienteIndex = db.clientes.findIndex(c => c.id === id);

  if (clienteIndex === -1) {
    return res.status(404).json({ error: 'Cliente não encontrado' });
  }

  if (!nome || !email || !idade) {
    return res.status(400).json({ error: 'Dados incompletos' });
  }

  db.clientes[clienteIndex] = { id, nome, email, idade };
  writeDB(db);

  res.json(db.clientes[clienteIndex]);
});

//DELETE
// Deletar cliente por ID
app.delete('/clientes/:id', (req, res) => {
    const db = readDB();
    const id = Number(req.params.id);

    const index =  db.clientes.findIndex(c => c.id === id);
    if(index === -1 ){
        return res.status(404).json({ error: 'Cliente não encontrado' });
    }

    db.clientes.splice(index, 1);
    writeDB(db);

    res.status(204).send();
});

// Start
app.listen(PORT, () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}`);
});