const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../database/data.json');

function readDB() {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
}

function writeDB(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}


exports.listarClientes = () => {
    return readDB().clientes;
}

exports.obterClientePorId = (id) => {
    return readDB().clientes.find(cliente => cliente.id === id);
}

exports.criarCliente = ({ nome, email, idade }) => {
    if (!nome || !email || !idade) {
        throw new Error('Nome, email e idade são obrigatórios');
    }

    const db = readDB();

    const novoCliente = {
        id: db.clientes.length
        ? Math.max(...db.clientes.map(c => c.id)) + 1
        : 1,
         nome,
        email,
        idade
    };

    db.clientes.push(novoCliente);
    writeDB(db);

    return novoCliente;
}

exports.atualizarCliente = (id, { nome, email, idade }) => {
    const db = readDB();
    const index = db.clientes.findIndex(cliente => cliente.id === id);

    if (index === -1) {
        return null;
    }
    db.clientes[index] = {id, nome, email, idade };
    writeDB(db);

    return db.clientes[index];
}

exports.deletarCliente = (id) => {
    const db = readDB();
    const index = db.clientes.findIndex(cliente => cliente.id === id);

    if (index === -1) {
        return false;
    }
    db.clientes.splice(index, 1);
    writeDB(db);
    return true;
}